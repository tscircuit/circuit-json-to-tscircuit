import { expect, test } from "bun:test"
import type { CircuitJson, SourcePort, SourceSimpleChip } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

type SourcePortId = string

test.each(["embedded", "standalone", "both"])(
  "preserves %s internal connections on a dual closed jumper",
  async (declaration) => {
    const ports: SourcePort[] = [
      {
        type: "source_port",
        source_port_id: "jumper_in",
        source_component_id: "jumper",
        name: "IN",
        pin_number: 1,
        port_hints: ["IN"],
      },
      {
        type: "source_port",
        source_port_id: "jumper_out",
        source_component_id: "jumper",
        name: "OUT",
        pin_number: 2,
        port_hints: ["OUT"],
      },
      {
        type: "source_port",
        source_port_id: "jumper_aux_in",
        source_component_id: "jumper",
        name: "AUX_IN",
        pin_number: 3,
        port_hints: ["AUX_IN"],
      },
      {
        type: "source_port",
        source_port_id: "jumper_aux_out",
        source_component_id: "jumper",
        name: "AUX_OUT",
        pin_number: 4,
        port_hints: ["AUX_OUT"],
      },
    ]
    const internalConnectionGroups = [
      ["jumper_in", "jumper_out"],
      ["jumper_aux_in", "jumper_aux_out"],
    ]
    const source: CircuitJson = [
      {
        type: "pcb_board",
        pcb_board_id: "board",
        center: { x: 0, y: 0 },
        width: 12,
        height: 10,
        thickness: 1.6,
        material: "fr4",
        num_layers: 2,
      },
      {
        type: "source_component",
        source_component_id: "jumper",
        ftype: "simple_chip",
        name: "JP1",
        ...(declaration !== "standalone" && {
          internally_connected_source_port_ids:
            declaration === "both"
              ? internalConnectionGroups.slice(0, 1)
              : internalConnectionGroups,
        }),
      },
      {
        type: "pcb_component",
        pcb_component_id: "jumper_pcb",
        source_component_id: "jumper",
        center: { x: 0, y: 0 },
        width: 8,
        height: 2,
        layer: "top",
        rotation: 0,
        obstructs_within_bounds: false,
      },
      ...ports,
      ...ports.flatMap(
        (port, index): CircuitJson => [
          {
            type: "pcb_port",
            pcb_port_id: `contact_${index}`,
            source_port_id: port.source_port_id,
            pcb_component_id: "jumper_pcb",
            x: index * 2 - 3,
            y: 0,
            layers: ["top", "bottom"],
          },
          {
            type: "pcb_plated_hole",
            pcb_plated_hole_id: `hole_${index}`,
            pcb_component_id: "jumper_pcb",
            pcb_port_id: `contact_${index}`,
            x: index * 2 - 3,
            y: 0,
            shape: "circle",
            outer_diameter: 1.4,
            hole_diameter: 0.8,
            layers: ["top", "bottom"],
            port_hints: [String(index + 1)],
          },
        ],
      ),
    ]
    if (declaration !== "embedded") {
      const standaloneGroups =
        declaration === "both"
          ? internalConnectionGroups.slice(1)
          : internalConnectionGroups
      for (const [index, source_port_ids] of standaloneGroups.entries()) {
        source.push({
          type: "source_component_internal_connection",
          source_component_internal_connection_id: `jumper_connection_${index}`,
          source_component_id: "jumper",
          source_port_ids,
        })
      }
    }
    const rendered = (await runTscircuitCode(
      convertCircuitJsonToTscircuit(source, { componentName: "ClosedJumper" }),
    )) as CircuitJson
    const portNameById = new Map<SourcePortId, string>(
      rendered.flatMap((element) =>
        element.type === "source_port"
          ? [[element.source_port_id, element.name] as const]
          : [],
      ),
    )
    const jumper = rendered.find(
      (element): element is SourceSimpleChip =>
        element.type === "source_component" &&
        element.ftype === "simple_chip" &&
        element.name === "JP1",
    )
    expect(jumper).toBeDefined()
    const internalPinGroups =
      jumper?.internally_connected_source_port_ids?.map((group) =>
        group.map((portId) => portNameById.get(portId)).sort(),
      ) ?? []
    expect(internalPinGroups).toHaveLength(2)
    expect(internalPinGroups).toEqual(
      expect.arrayContaining([
        ["IN", "OUT"],
        ["AUX_IN", "AUX_OUT"],
      ]),
    )
  },
)

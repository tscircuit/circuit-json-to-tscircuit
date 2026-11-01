import { expect, test } from "bun:test"
import type { CircuitJson, SourceSimpleChip } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

type SourcePortId = string

// A three-contact jumper connects IN to MID and MID to OUT.
test.each([
  { declaration: "embedded", reverse: false },
  { declaration: "embedded", reverse: true },
  { declaration: "standalone", reverse: false },
  { declaration: "standalone", reverse: true },
  { declaration: "mixed", reverse: false },
  { declaration: "mixed", reverse: true },
])(
  "preserves transitive $declaration connections with reverse=$reverse",
  async ({ declaration, reverse }) => {
    const groups = [
      ["jumper_in", "jumper_mid"],
      ["jumper_mid", "jumper_out"],
    ]
    if (reverse) groups.reverse()
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
            declaration === "mixed" ? groups.slice(0, 1) : groups,
        }),
      },
      {
        type: "pcb_component",
        pcb_component_id: "jumper_pcb",
        source_component_id: "jumper",
        center: { x: 0, y: 0 },
        width: 6,
        height: 2,
        layer: "top",
        rotation: 0,
        obstructs_within_bounds: false,
      },
    ]
    for (const [index, name] of ["IN", "MID", "OUT"].entries()) {
      const source_port_id = `jumper_${name.toLowerCase()}`
      source.push(
        {
          type: "source_port",
          source_port_id,
          source_component_id: "jumper",
          name,
          pin_number: index + 1,
          port_hints: name === "IN" ? ["IN"] : [name, "IN"],
        },
        {
          type: "pcb_port",
          pcb_port_id: `contact_${index}`,
          source_port_id,
          pcb_component_id: "jumper_pcb",
          x: index * 2 - 2,
          y: 0,
          layers: ["top", "bottom"],
        },
        {
          type: "pcb_plated_hole",
          pcb_plated_hole_id: `hole_${index}`,
          pcb_component_id: "jumper_pcb",
          pcb_port_id: `contact_${index}`,
          x: index * 2 - 2,
          y: 0,
          shape: "circle",
          outer_diameter: 1.4,
          hole_diameter: 0.8,
          layers: ["top", "bottom"],
          port_hints: [String(index + 1)],
        },
      )
    }
    if (declaration !== "embedded") {
      for (const [index, source_port_ids] of (declaration === "mixed"
        ? groups.slice(1)
        : groups
      ).entries()) {
        source.push({
          type: "source_component_internal_connection",
          source_component_internal_connection_id: `connection_${index}`,
          source_component_id: "jumper",
          source_port_ids,
        })
      }
    }
    const rendered = (await runTscircuitCode(
      convertCircuitJsonToTscircuit(source, {
        componentName: "TransitiveJumper",
      }),
    )) as CircuitJson
    const nameById = new Map<SourcePortId, string>(
      rendered.flatMap((element) =>
        element.type === "source_port"
          ? [[element.source_port_id, element.name] as const]
          : [],
      ),
    )
    const chip = rendered.find(
      (element): element is SourceSimpleChip =>
        element.type === "source_component" &&
        element.ftype === "simple_chip" &&
        element.name === "JP1",
    )
    const renderedGroups = chip?.internally_connected_source_port_ids?.map(
      (group) => group.map((portId) => nameById.get(portId)).sort(),
    )
    expect(renderedGroups).toEqual([["IN", "MID", "OUT"]])
  },
)

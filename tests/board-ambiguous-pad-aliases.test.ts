import { expect, test } from "bun:test"
import type {
  CircuitJson,
  PcbPlatedHole,
  PcbSmtPad,
  SourceSimpleChip,
} from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

type PcbPortId = string
type SourcePortId = string

test.each([
  { companionType: "smtpad", companionHint: "2", reverse: false },
  { companionType: "smtpad", companionHint: "2", reverse: true },
  { companionType: "smtpad", companionHint: "VDDQ", reverse: false },
  { companionType: "smtpad", companionHint: "VDDQ", reverse: true },
  { companionType: "plated_hole", companionHint: "2", reverse: false },
  { companionType: "plated_hole", companionHint: "2", reverse: true },
  { companionType: "plated_hole", companionHint: "VDDQ", reverse: false },
  { companionType: "plated_hole", companionHint: "VDDQ", reverse: true },
])(
  "keeps shared-port $companionType hints safe with $companionHint and reverse=$reverse",
  async ({ companionType, companionHint, reverse }) => {
    const sourceCircuitJson: CircuitJson = [
      {
        type: "pcb_board",
        pcb_board_id: "pcb_board",
        center: { x: 0, y: 0 },
        width: 10,
        height: 10,
        thickness: 1.6,
        material: "fr4",
        num_layers: 2,
      },
      {
        type: "source_component",
        source_component_id: "source_component_memory",
        ftype: "simple_chip",
        name: "U1",
      },
      {
        type: "source_port",
        source_port_id: "source_port_address",
        source_component_id: "source_component_memory",
        name: "A1",
        pin_number: 1,
        port_hints: ["A1", "P7"],
      },
      {
        type: "source_port",
        source_port_id: "source_port_power",
        source_component_id: "source_component_memory",
        name: "VDDQ",
        pin_number: 2,
        port_hints: ["VDDQ", "A1"],
      },
      {
        type: "pcb_component",
        pcb_component_id: "pcb_component_memory",
        source_component_id: "source_component_memory",
        center: { x: 0, y: 0 },
        width: 4,
        height: 4,
        layer: "top",
        rotation: 0,
        obstructs_within_bounds: false,
      },
      {
        type: "pcb_port",
        pcb_port_id: "pcb_port_address",
        source_port_id: "source_port_address",
        pcb_component_id: "pcb_component_memory",
        x: -1,
        y: 0,
        layers: ["top"],
      },
      {
        type: "pcb_port",
        pcb_port_id: "pcb_port_power",
        source_port_id: "source_port_power",
        pcb_component_id: "pcb_component_memory",
        x: 1,
        y: 0,
        layers: companionType === "plated_hole" ? ["top", "bottom"] : ["top"],
      },
      {
        type: "pcb_smtpad",
        pcb_smtpad_id: "pcb_smtpad_address",
        pcb_component_id: "pcb_component_memory",
        pcb_port_id: "pcb_port_address",
        port_hints: ["P7"],
        x: -1,
        y: 0,
        width: 1,
        height: 1,
        shape: "rect",
        layer: "top",
      },
      {
        type: "pcb_smtpad",
        pcb_smtpad_id: "pcb_smtpad_power",
        pcb_component_id: "pcb_component_memory",
        pcb_port_id: "pcb_port_power",
        // A physical BGA ball name can overlap another pin's logical name.
        port_hints: ["A1"],
        x: 1,
        y: 0,
        width: 1,
        height: 1,
        shape: "rect",
        layer: "top",
      },
    ]

    const powerPad = sourceCircuitJson.find(
      (element): element is PcbSmtPad =>
        element.type === "pcb_smtpad" &&
        element.pcb_smtpad_id === "pcb_smtpad_power",
    )
    if (!powerPad) throw new Error("Missing power pad fixture")
    const sharedContactAttributes = {
      pcb_component_id: "pcb_component_memory",
      pcb_port_id: "pcb_port_power",
      port_hints: [companionHint],
      x: 1,
      y: 0,
    }
    const companionPad: PcbSmtPad | PcbPlatedHole =
      companionType === "smtpad"
        ? {
            ...sharedContactAttributes,
            type: "pcb_smtpad",
            pcb_smtpad_id: "pcb_smtpad_power_companion",
            shape: "rect",
            width: 0.5,
            height: 0.4,
            layer: "top",
          }
        : {
            ...sharedContactAttributes,
            type: "pcb_plated_hole",
            pcb_plated_hole_id: "pcb_plated_hole_power_companion",
            shape: "circle",
            outer_diameter: 0.7,
            hole_diameter: 0.3,
            layers: ["top", "bottom"],
          }
    const orderedSourceCircuitJson: CircuitJson = [
      ...sourceCircuitJson.filter((element) => element !== powerPad),
      ...(reverse ? [companionPad, powerPad] : [powerPad, companionPad]),
    ]
    const generatedTsx = convertCircuitJsonToTscircuit(
      orderedSourceCircuitJson,
      {
        componentName: "MemoryBoard",
      },
    )
    const renderedCircuitJson = (await runTscircuitCode(
      generatedTsx,
    )) as CircuitJson

    const sourcePorts = renderedCircuitJson.filter(
      (element) => element.type === "source_port",
    )
    const pcbPorts = renderedCircuitJson.filter(
      (element) => element.type === "pcb_port",
    )
    const pads = renderedCircuitJson.filter(
      (element) =>
        element.type === "pcb_smtpad" || element.type === "pcb_plated_hole",
    )
    const sourcePortById = new Map<SourcePortId, (typeof sourcePorts)[number]>(
      sourcePorts.map((port) => [port.source_port_id, port]),
    )
    const pcbPortById = new Map<PcbPortId, (typeof pcbPorts)[number]>(
      pcbPorts.map((port) => [port.pcb_port_id, port]),
    )
    expect(sourcePorts).toHaveLength(2)
    expect(pcbPorts).toHaveLength(2)
    expect(pads).toHaveLength(3)
    for (const pad of pads) {
      if (!("x" in pad) || typeof pad.x !== "number") {
        throw new Error("Expected a centered fixture pad")
      }
      const pcbPort = pad.pcb_port_id
        ? pcbPortById.get(pad.pcb_port_id)
        : undefined
      const sourcePort = pcbPort
        ? sourcePortById.get(pcbPort.source_port_id)
        : undefined
      expect(sourcePort).toBeDefined()
      expect(sourcePort?.pin_number).toBe(pad.x === -1 ? 1 : 2)
      expect(sourcePort?.name).toBe(pad.x === -1 ? "A1" : "VDDQ")
    }
    const sourceComponent = renderedCircuitJson.find(
      (element): element is SourceSimpleChip =>
        element.type === "source_component" &&
        element.ftype === "simple_chip" &&
        element.name === "U1",
    )
    expect(sourceComponent).toBeDefined()
    expect(sourceComponent?.internally_connected_source_port_ids ?? []).toEqual(
      [],
    )
    expect(
      renderedCircuitJson.filter(
        ({ type }) => type === "source_ambiguous_port_reference",
      ),
    ).toHaveLength(0)
    expect(generatedTsx).not.toContain(
      'portHints={["imported_pcb_port_2","A1"]}',
    )
  },
)

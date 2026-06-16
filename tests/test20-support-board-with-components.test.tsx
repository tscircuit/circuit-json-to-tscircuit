import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test20 support board with resistor, capacitor, and trace", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "R1C1Board",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "export const R1C1Board = () => (
      <board width="20mm" height="10mm" thickness="1.4mm" layers={2} material="fr4" title="R1C1 Demo Board" outline={[{"x":-10,"y":-5},{"x":10,"y":-5},{"x":10,"y":5},{"x":-10,"y":5}]} boardAnchorPosition={{ x: 1, y: 2 }} anchorAlignment="top_left" solderMaskColor="blue" silkscreenColor="white">
        <resistor name="R1" resistance="1kΩ" footprint="res0402" pcbX={0} pcbY={0} />
        <capacitor name="C1" capacitance="1000pF" footprint="0402" pcbX="-2.86mm" pcbY="0mm" pcbRotation="180deg" />
        <trace from=".C1 > .pin1" to=".R1 > .pin1" />
      </board>
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(<R1C1Board />)
  `)) as any[]

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

const circuitJson: any = [
  {
    type: "source_project_metadata",
    source_project_metadata_id: "source_project_metadata_0",
    software_used_string: "@tscircuit/core@0.0.1325",
  },
  {
    type: "source_group",
    source_group_id: "source_group_0",
    is_subcircuit: true,
    was_automatically_named: true,
    subcircuit_id: "subcircuit_source_group_0",
  },
  {
    type: "source_port",
    source_port_id: "source_port_0",
    name: "pin1",
    pin_number: 1,
    port_hints: ["pin1", "anode", "pos", "left", "1"],
    source_component_id: "source_component_0",
    subcircuit_id: "subcircuit_source_group_0",
  },
  {
    type: "source_port",
    source_port_id: "source_port_1",
    name: "pin2",
    pin_number: 2,
    port_hints: ["pin2", "cathode", "neg", "right", "2"],
    source_component_id: "source_component_0",
    subcircuit_id: "subcircuit_source_group_0",
  },
  {
    type: "source_component",
    source_component_id: "source_component_0",
    ftype: "simple_resistor",
    name: "R1",
    supplier_part_numbers: { jlcpcb: ["C11702"] },
    resistance: 1000,
    display_resistance: "1kΩ",
    are_pins_interchangeable: true,
    source_group_id: "source_group_0",
  },
  {
    type: "source_port",
    source_port_id: "source_port_2",
    name: "pin1",
    pin_number: 1,
    port_hints: ["pin1", "pos", "anode", "1", "left"],
    source_component_id: "source_component_1",
    subcircuit_id: "subcircuit_source_group_0",
  },
  {
    type: "source_port",
    source_port_id: "source_port_3",
    name: "pin2",
    pin_number: 2,
    port_hints: ["pin2", "neg", "cathode", "2", "right"],
    source_component_id: "source_component_1",
    subcircuit_id: "subcircuit_source_group_0",
  },
  {
    type: "source_component",
    source_component_id: "source_component_1",
    ftype: "simple_capacitor",
    name: "C1",
    supplier_part_numbers: { jlcpcb: ["C1523"] },
    capacitance: 1e-9,
    display_capacitance: "1000pF",
    are_pins_interchangeable: true,
    source_group_id: "source_group_0",
  },
  {
    type: "source_board",
    source_board_id: "source_board_0",
    source_group_id: "source_group_0",
    title: "R1C1 Demo Board",
  },
  {
    type: "source_trace",
    source_trace_id: "source_trace_0",
    connected_source_port_ids: ["source_port_2", "source_port_0"],
    connected_source_net_ids: [],
    subcircuit_id: "subcircuit_source_group_0",
  },
  {
    type: "pcb_component",
    pcb_component_id: "pcb_component_0",
    center: { x: 0, y: 0 },
    width: 1.56,
    height: 0.64,
    layer: "top",
    rotation: 0,
    source_component_id: "source_component_0",
    subcircuit_id: "subcircuit_source_group_0",
  },
  {
    type: "pcb_component",
    pcb_component_id: "pcb_component_1",
    center: { x: -2.86, y: 0 },
    width: 1.56,
    height: 0.64,
    layer: "top",
    rotation: 180,
    source_component_id: "source_component_1",
    subcircuit_id: "subcircuit_source_group_0",
  },
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_0",
    source_board_id: "source_board_0",
    center: { x: 0, y: 0 },
    thickness: 1.4,
    num_layers: 2,
    width: 20,
    height: 10,
    material: "fr4",
    outline: [
      { x: -10, y: -5 },
      { x: 10, y: -5 },
      { x: 10, y: 5 },
      { x: -10, y: 5 },
    ],
    anchor_position: { x: 1, y: 2 },
    anchor_alignment: "top_left",
    solder_mask_color: "blue",
    silkscreen_color: "white",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_0",
    pcb_component_id: "pcb_component_0",
    layer: "top",
    shape: "rect",
    width: 0.54,
    height: 0.64,
    port_hints: ["1", "left"],
    x: -0.51,
    y: 0,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_1",
    pcb_component_id: "pcb_component_0",
    layer: "top",
    shape: "rect",
    width: 0.54,
    height: 0.64,
    port_hints: ["2", "right"],
    x: 0.51,
    y: 0,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_2",
    pcb_component_id: "pcb_component_1",
    layer: "top",
    shape: "rect",
    width: 0.54,
    height: 0.64,
    port_hints: ["1", "left"],
    x: -2.35,
    y: 0,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_3",
    pcb_component_id: "pcb_component_1",
    layer: "top",
    shape: "rect",
    width: 0.54,
    height: 0.64,
    port_hints: ["2", "right"],
    x: -3.37,
    y: 0,
  },
  {
    type: "cad_component",
    cad_component_id: "cad_component_0",
    position: { x: 0, y: 0, z: 0.7 },
    rotation: { x: 0, y: 0, z: 0 },
    pcb_component_id: "pcb_component_0",
    source_component_id: "source_component_0",
    footprinter_string: "res0402",
  },
  {
    type: "cad_component",
    cad_component_id: "cad_component_1",
    position: { x: -2.86, y: 0, z: 0.7 },
    rotation: { x: 0, y: 0, z: 180 },
    pcb_component_id: "pcb_component_1",
    source_component_id: "source_component_1",
    footprinter_string: "0402",
  },
]

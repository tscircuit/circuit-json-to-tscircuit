import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test19 support board with custom width and height", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test19Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "export const Test19Component = () => (
      <board width="25mm" height="12.5mm" thickness="1.6mm" layers={4} material="fr4">
      </board>
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(<Test19Component />)
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
    type: "source_board",
    source_board_id: "source_board_0",
    source_group_id: "source_group_0",
  },
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_0",
    source_board_id: "source_board_0",
    center: { x: 0, y: 0 },
    thickness: 1.6,
    num_layers: 4,
    width: 25,
    height: 12.5,
    material: "fr4",
    min_trace_width: 0.1,
    min_via_hole_diameter: 0.2,
    min_via_pad_diameter: 0.3,
    min_via_hole_edge_to_via_hole_edge_clearance: 0.1,
    min_trace_to_pad_edge_clearance: 0.1,
    min_pad_edge_to_pad_edge_clearance: 0.1,
    min_plated_hole_drill_edge_to_drill_edge_clearance: 0.15,
    min_board_edge_clearance: 0.2,
  },
]

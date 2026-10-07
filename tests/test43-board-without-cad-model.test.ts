import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const circuitJson: AnyCircuitElement[] = [
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_imported",
    center: { x: 0, y: 0 },
    width: 10,
    height: 10,
    thickness: 1.6,
    material: "fr4",
    num_layers: 2,
  },
  {
    type: "source_component",
    source_component_id: "source_component_imported",
    ftype: "simple_chip",
    name: "U1",
  },
  {
    type: "pcb_component",
    pcb_component_id: "pcb_component_imported",
    source_component_id: "source_component_imported",
    center: { x: 0, y: 0 },
    width: 2,
    height: 2,
    layer: "top",
    rotation: 0,
    obstructs_within_bounds: true,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_imported",
    pcb_component_id: "pcb_component_imported",
    shape: "rect",
    x: 0,
    y: 0,
    width: 1,
    height: 1,
    layer: "top",
    port_hints: ["1"],
  },
]

test("board conversion does not add a CAD model to a component without one", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ImportedBoard",
  })

  expect(generatedTscircuit).toContain("cadModel={null}")

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]

  expect(
    renderedCircuitJson.filter((element) => element.type === "cad_component"),
  ).toEqual([])
})

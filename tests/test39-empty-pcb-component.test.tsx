import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const sourceCircuitJson: AnyCircuitElement[] = [
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_source",
    center: { x: 0, y: 0 },
    width: 20,
    height: 12,
    thickness: 1.6,
    material: "fr4",
    num_layers: 2,
  },
  {
    type: "source_component",
    source_component_id: "source_component_mechanical",
    ftype: "simple_chip",
    name: "MP1",
  },
  {
    type: "pcb_component",
    pcb_component_id: "pcb_component_mechanical",
    source_component_id: "source_component_mechanical",
    center: { x: 4, y: 3 },
    width: 0,
    height: 0,
    layer: "top",
    rotation: 0,
    obstructs_within_bounds: false,
  },
]

test("empty PCB components do not create missing-footprint errors", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]

  expect(generatedTscircuit).toContain("footprint={<footprint />}")
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_component"),
  ).toHaveLength(1)
  expect(
    renderedCircuitJson.some(
      (element) => element.type === "pcb_missing_footprint_error",
    ),
  ).toBeFalse()
})

import { expect, test } from "bun:test"
import type { AnyCircuitElement, PcbBoard } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves a non-origin PCB board center", async () => {
  const sourceOutline = [
    { x: 15, y: 35 },
    { x: 35, y: 35 },
    { x: 35, y: 45 },
    { x: 15, y: 45 },
  ]
  const sourceCircuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_imported",
      center: { x: 25, y: 40 },
      width: 20,
      height: 10,
      num_layers: 2,
      thickness: 1.6,
      material: "fr4",
      outline: sourceOutline,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_imported",
      shape: "rect",
      x: 25,
      y: 40,
      width: 1,
      height: 1,
      layer: "top",
      port_hints: ["1"],
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedBoard = renderedCircuitJson.find(
    (element): element is PcbBoard => element.type === "pcb_board",
  )

  expect(generatedTscircuit).toContain("<board pcbX={25} pcbY={40}")
  expect(renderedBoard?.center).toEqual({ x: 25, y: 40 })
  expect(renderedBoard?.outline).toEqual(sourceOutline)
  expect(
    renderedCircuitJson.some(
      (element) => element.type === "pcb_component_outside_board_error",
    ),
  ).toBeFalse()
})

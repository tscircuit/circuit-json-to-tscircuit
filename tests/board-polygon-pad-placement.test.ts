import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

test("preserves polygon pad placement on rotated components", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 20,
      height: 12,
      thickness: 1.6,
      material: "fr4",
      num_layers: 2,
    },
    {
      type: "source_component",
      source_component_id: "source_component_top",
      ftype: "simple_chip",
      name: "U1",
    },
    {
      type: "source_component",
      source_component_id: "source_component_bottom",
      ftype: "simple_chip",
      name: "U2",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_top",
      source_component_id: "source_component_top",
      center: { x: -5, y: 0 },
      width: 4,
      height: 4,
      layer: "top",
      rotation: 90,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_bottom",
      source_component_id: "source_component_bottom",
      center: { x: 5, y: 0 },
      width: 4,
      height: 4,
      layer: "bottom",
      rotation: 270,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_top",
      pcb_component_id: "pcb_component_top",
      layer: "top",
      shape: "polygon",
      points: [
        { x: -5.6, y: 1.5 },
        { x: -4.4, y: 1.5 },
        { x: -4.2, y: 2.5 },
        { x: -5.6, y: 2.3 },
      ],
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_bottom",
      pcb_component_id: "pcb_component_bottom",
      layer: "bottom",
      shape: "polygon",
      points: [
        { x: 4.4, y: -2.5 },
        { x: 5.6, y: -2.5 },
        { x: 5.8, y: -1.5 },
        { x: 4.4, y: -1.7 },
      ],
    },
  ]
  const topPolygonPad = sourceCircuitJson.find(
    (element) =>
      element.type === "pcb_smtpad" &&
      element.pcb_smtpad_id === "pcb_smtpad_top",
  )
  const bottomPolygonPad = sourceCircuitJson.find(
    (element) =>
      element.type === "pcb_smtpad" &&
      element.pcb_smtpad_id === "pcb_smtpad_bottom",
  )
  if (!topPolygonPad || !bottomPolygonPad) {
    throw new Error("Expected both polygon pads")
  }
  Object.assign(topPolygonPad, { x: -5, y: 2 })
  Object.assign(bottomPolygonPad, { x: 5, y: -2 })

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "PolygonPadBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const comparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    {
      gap: 24,
      rootAttributes: {
        "aria-label":
          "Polygon pads: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )

  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

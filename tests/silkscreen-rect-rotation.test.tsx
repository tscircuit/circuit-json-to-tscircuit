import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

for (const ccwRotationDegrees of [0, 90, 180, 270]) {
  test(`preserves silkscreen rectangle orientation at ${ccwRotationDegrees} degrees`, async () => {
    const circuitJson: CircuitJson = [
      {
        type: "pcb_silkscreen_rect",
        pcb_silkscreen_rect_id: "polarity_bar",
        pcb_component_id: "diode",
        center: { x: 0, y: 0 },
        width: 0.5,
        height: 3,
        layer: "top",
        is_filled: true,
        stroke_width: 0.1,
        has_stroke: false,
        ccw_rotation: ccwRotationDegrees,
      },
    ]
    const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "PolarityBar",
    })
    const renderedCircuitJson = (await runTscircuitCode(`
${generatedTscircuit}
circuit.add(<board width="10mm" height="10mm"><PolarityBar /></board>)
`)) as CircuitJson
    const rectangle = renderedCircuitJson.find(
      (element) => element.type === "pcb_silkscreen_rect",
    )
    const isQuarterTurn = ccwRotationDegrees % 180 === 90
    expect(rectangle?.width).toBe(isQuarterTurn ? 3 : 0.5)
    expect(rectangle?.height).toBe(isQuarterTurn ? 0.5 : 3)
    expect(rectangle?.is_filled).toBe(true)
    expect(rectangle?.stroke_width).toBe(0)
  })
}

import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"
import r348CircuitJson from "./fixtures/ti-evms/tmds62levm-r348-polygon-pads.circuit.json"

test("preserves TMDS62LEVM R348 polygon pad positions", async () => {
  const sourceCircuitJson = r348CircuitJson as CircuitJson
  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "Tmds62lR348",
  })
  expect(generatedTsx).toMatchInlineSnapshot(`
    "export const Tmds62lR348 = () => (
      <board pcbX={113.03034544} pcbY={111.41557599999999} width="1mm" height="1mm" thickness="1.6mm" layers={6} material="fr4">
        <chip name="R348" pcbX={0} pcbY={0} pcbRotation="315deg" layer="bottom" noSchematicRepresentation pinLabels={{"pin2":["2","pin2","imported_pcb_port_1"],"pin1":["1","pin1","imported_pcb_port_2"]}} obstructsWithinBounds={false} footprint={<footprint>
                <smtpad portHints={["imported_pcb_port_1","2"]} layer="top" solderMaskMargin="0.0508mm" shape="polygon" points={[{"x":-0.2844873297105579,"y":-0.013560186742836322},{"x":-0.29346758583163535,"y":-0.0045799306217588764},{"x":-0.29346758583162114,"y":0.004400325499318569},{"x":-0.2844873297105579,"y":0.013380581620367593},{"x":-0.27550707358949467,"y":0.013380581620367593},{"x":-0.2665268174684172,"y":0.004400325499318569},{"x":-0.26652681746843143,"y":-0.0045799306217588764},{"x":-0.27550707358949467,"y":-0.013560186742836322}]} />
        <smtpad portHints={["imported_pcb_port_2","1"]} layer="top" solderMaskMargin="0.0508mm" shape="polygon" points={[{"x":0.27532567241586037,"y":-0.013558390691599698},{"x":0.26634541629479713,"y":-0.004578134570522252},{"x":0.2663454162947829,"y":0.004402121550526772},{"x":0.27532567241584616,"y":0.013382377671604218},{"x":0.2843059285369236,"y":0.013382377671575796},{"x":0.29328618465798684,"y":0.004402121550526772},{"x":0.2932861846579726,"y":-0.004578134570522252},{"x":0.2843059285369094,"y":-0.013558390691599698}]} />
              </footprint>} />
      </board>
    )
    export default Tmds62lR348"
  `)
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const comparisonSvg = stackSvgsHorizontally(
    [sourceCircuitJson, renderedCircuitJson].map((circuitJson) =>
      convertCircuitJsonToPcbSvg(circuitJson, {
        layer: "bottom",
        viewport: {
          minX: 112.4,
          minY: 110.8,
          maxX: 113.65,
          maxY: 112.05,
        },
        showFabricationNotes: false,
        shouldDrawErrors: false,
        shouldDrawRatsNest: false,
      }),
    ),
    {
      gap: 24,
      targetSize: 800,
      rootAttributes: {
        "aria-label": "TMDS62LEVM R348: source left, TSX roundtrip right",
        role: "img",
      },
    },
  )
  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path, "comparison")

  const sourcePads = sourceCircuitJson.filter(
    (element) => element.type === "pcb_smtpad" && element.shape === "polygon",
  )
  const renderedPads = renderedCircuitJson.filter(
    (element) => element.type === "pcb_smtpad" && element.shape === "polygon",
  )
  expect(renderedPads).toHaveLength(sourcePads.length)
  for (const [padIndex, sourcePad] of sourcePads.entries()) {
    const renderedPad = renderedPads[padIndex]!
    expect(renderedPad.layer).toBe(sourcePad.layer)
    expect(renderedPad.points).toHaveLength(sourcePad.points.length)
    for (const [vertexIndex, sourceVertex] of sourcePad.points.entries()) {
      expect(renderedPad.points[vertexIndex]!.x).toBeCloseTo(sourceVertex.x, 8)
      expect(renderedPad.points[vertexIndex]!.y).toBeCloseTo(sourceVertex.y, 8)
    }
  }
})

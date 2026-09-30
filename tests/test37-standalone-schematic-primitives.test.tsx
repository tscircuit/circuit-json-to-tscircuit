import { expect, test } from "bun:test"
import type { AnyCircuitElement, CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
export default () => (
  <board width="20mm" height="10mm" routingDisabled>
    <schematictext text="POWER STAGE" schX={0} schY={3} fontSize={0.4} color="#334155" />
    <schematicline x1={-4} y1={2} x2={4} y2={2} strokeWidth={0.08} color="#2563eb" />
    <schematicpath points={[{ x: -4, y: -2 }, { x: 0, y: -3 }, { x: 4, y: -2 }]} strokeWidth={0.08} strokeColor="#dc2626" />
    <schematicrect schX={0} schY={0} width={10} height={7} strokeWidth={0.08} color="#16a34a" isDashed />
  </board>
)
`

const standalonePrimitiveTypes = new Set<AnyCircuitElement["type"]>([
  "schematic_text",
  "schematic_line",
  "schematic_path",
  "schematic_rect",
])

test("preserves board-level schematic primitives", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as CircuitJson
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })

  expect(generatedTscircuit).toContain(
    '<schematictext text="POWER STAGE" schX={0} schY={3}',
  )
  expect(generatedTscircuit).toContain(
    "<schematicline x1={-4} y1={2} x2={4} y2={2}",
  )
  expect(generatedTscircuit).toContain(
    '<schematicpath points={[{"x":-4,"y":-2},{"x":0,"y":-3},{"x":4,"y":-2}]}',
  )
  expect(generatedTscircuit).toContain(
    "<schematicrect schX={0} schY={0} width={10} height={7}",
  )

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const countStandalonePrimitives = (circuitJson: CircuitJson): number =>
    circuitJson.filter((element) => standalonePrimitiveTypes.has(element.type))
      .length

  expect(countStandalonePrimitives(renderedCircuitJson)).toBe(
    countStandalonePrimitives(sourceCircuitJson),
  )

  const comparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToSchematicSvg(sourceCircuitJson),
      convertCircuitJsonToSchematicSvg(renderedCircuitJson),
    ],
    {
      gap: 24,
      normalizeSize: true,
      targetSize: 1200,
      rootAttributes: {
        "aria-label":
          "standalone schematic primitives: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )

  await expect(comparisonSvg).toMatchSvgSnapshot(
    import.meta.path,
    "schematic-comparison",
  )
})

import { expect, test } from "bun:test"
import type {
  CircuitJson,
  SchematicComponent,
  SchematicPort,
} from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
export default () => (
  <board width="20mm" height="10mm" routingDisabled>
    <chip
      name="U1"
      pcbX={0}
      schX={0}
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX={-0.5} width={0.5} height={0.5} />
        <smtpad portHints={["2"]} pcbX={0.5} width={0.5} height={0.5} />
      </footprint>}
      symbol={<symbol>
        <schematicrect schX={-3} schY={0} width={1.2} height={0.8} color="blue" />
        <schematicrect schX={3} schY={0} width={1.2} height={0.8} color="blue" />
        <port name="A" pinNumber={1} schX={-3.8} schY={0} direction="left" />
        <port name="B" pinNumber={2} schX={3.8} schY={0} direction="right" />
      </symbol>}
    />
  </board>
)
`

test("preserves separated units of one custom schematic component", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as CircuitJson
  const firstUnit = sourceCircuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component",
  )
  if (!firstUnit) throw new Error("Expected a schematic component")

  firstUnit.center = { x: -3, y: 0 }
  firstUnit.size = { width: 1.6, height: 1.2 }
  sourceCircuitJson.push({
    ...firstUnit,
    schematic_component_id: "schematic_component_unit_b",
    center: { x: 3, y: 0 },
  })

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })

  expect(generatedTscircuit).not.toContain("noSchematicRepresentation")
  expect(generatedTscircuit).toContain("schX={-3} schY={0} symbol={<symbol>")
  expect(generatedTscircuit).toContain(
    '<port name="A" schX={-0.7999999999999998} schY={0}',
  )
  expect(generatedTscircuit).toContain('<port name="B" schX={6.8} schY={0}')

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedPortXs = renderedCircuitJson
    .filter(
      (element): element is SchematicPort => element.type === "schematic_port",
    )
    .map((port) => port.center.x)
    .sort((firstX, secondX) => firstX - secondX)

  expect(renderedPortXs).toEqual([-3.8, 3.8])
  expect(
    renderedCircuitJson.filter((element) => element.type === "schematic_rect"),
  ).toHaveLength(2)

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
          "multi-unit custom symbol: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )

  await expect(comparisonSvg).toMatchSvgSnapshot(
    import.meta.path,
    "schematic-comparison",
  )
})

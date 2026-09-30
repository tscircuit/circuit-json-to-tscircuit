import { expect, test } from "bun:test"
import type { AnyCircuitElement, SchematicComponent } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>

const sourceTscircuit = `
export default () => (
  <board width="20mm" height="10mm">
    <chip
      name="U1"
      schX={3}
      schY={-1}
      pcbX={-2}
      schDisplayValue="CUSTOM"
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX={-0.5} width={0.5} height={0.5} />
        <smtpad portHints={["2"]} pcbX={0.5} width={0.5} height={0.5} />
      </footprint>}
      symbol={<symbol>
        <schematicrect schX={0} schY={0} width={1.2} height={0.8} color="blue" />
        <schematiccircle center={{ x: 0, y: 0 }} radius={0.2} color="blue" />
        <schematicline x1={-0.6} y1={0} x2={0.6} y2={0} color="blue" />
        <port name="IN" pinNumber={1} schX={-0.8} schY={0} direction="left" />
        <port name="OUT" pinNumber={2} schX={0.8} schY={0} direction="right" />
      </symbol>}
    />
  </board>
)
`

test("preserves custom schematic component geometry and ports", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const pcbSourceComponent = sourceCircuitJson.find(
    (element): element is SourceComponent =>
      element.type === "source_component" && element.name === "U1",
  )
  const schematicComponent = sourceCircuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component",
  )

  if (!pcbSourceComponent || !schematicComponent) {
    throw new Error("Expected source and schematic components in test fixture")
  }

  const schematicSourceComponentId = "source_component_schematic_u1"
  sourceCircuitJson.push({
    ...pcbSourceComponent,
    source_component_id: schematicSourceComponentId,
  })
  schematicComponent.source_component_id = schematicSourceComponentId

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })

  expect(generatedTscircuit).toMatchInlineSnapshot(`
    "export default () => (
      <board width="20mm" height="10mm" thickness="1.4mm" layers={2} material="fr4">
        <chip name="U1" pcbX={-2} pcbY={0} pcbRotation="0deg" layer="top" schX={3} schY={-1} symbol={<symbol>
          <port name="pin1" schX={-0.7999999999999998} schY={0} direction="left" pinNumber={1} />
          <port name="pin2" schX={0.7999999999999998} schY={0} direction="right" pinNumber={2} />
          <schematicline x1={-0.6000000000000001} y1={0} x2={0.6000000000000001} y2={0} strokeWidth={0.12} color="blue" isDashed={false}/>
          <schematicrect schX={0} schY={0} width={1.2} height={0.8} rotation={0} strokeWidth={0.12} color="blue" isFilled={false} fillColor="blue" isDashed={false} />
          <schematiccircle center={{ x: 0, y: 0 }} radius={0.2} strokeWidth={0.12} color="blue" isFilled={false} fillColor="blue" isDashed={false} />
        </symbol>} schDisplayValue="CUSTOM" pinLabels={{"pin1":["IN","pin1","1"],"pin2":["OUT","pin2","2"]}} footprint={<footprint />} />
      </board>
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedSchematicComponent = renderedCircuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component",
  )

  expect(renderedSchematicComponent).toMatchObject({
    center: { x: 3, y: -1 },
    is_box_with_pins: false,
    symbol_display_value: "CUSTOM",
  })
  expect(
    renderedCircuitJson.filter((element) => element.type === "schematic_port"),
  ).toHaveLength(2)
  expect(
    renderedCircuitJson.filter(
      (element) =>
        element.type === "schematic_rect" ||
        element.type === "schematic_circle" ||
        element.type === "schematic_line",
    ),
  ).toHaveLength(3)

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
          "custom schematic component: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )

  await expect(comparisonSvg).toMatchSvgSnapshot(
    import.meta.path,
    "schematic-comparison",
  )
})

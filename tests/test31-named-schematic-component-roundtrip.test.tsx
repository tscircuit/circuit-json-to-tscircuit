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
      name="R1"
      symbolName="resistor_right"
      schDisplayValue="10k"
      schX={4}
      schY={0}
      pcbX={-2}
      footprint="0402"
      pinLabels={{ pin1: ["INPUT"], pin2: ["OUTPUT"] }}
    />
  </board>
)
`

test("reunifies PCB and named schematic components by reference designator", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const pcbSourceComponent = sourceCircuitJson.find(
    (element): element is SourceComponent =>
      element.type === "source_component" && element.name === "R1",
  )
  const schematicComponent = sourceCircuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component",
  )

  if (!pcbSourceComponent || !schematicComponent) {
    throw new Error("Expected source and schematic components in test fixture")
  }

  const schematicSourceComponentId = "source_component_schematic_r1"
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
        <chip name="R1" pcbX={-2} pcbY={0} pcbRotation="0deg" layer="top" symbolName="resistor_right" schX={4} schY={0} schDisplayValue="10k" pinLabels={{"pin1":["INPUT","pin1","1","left"],"pin2":["OUTPUT","pin2","2","right"]}} supplierPartNumbers={{"jlcpcb":[]}} footprint={<footprint>
                <smtpad portHints={["1","left"]} pcbX="-0.51mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="0.54mm" height="0.64mm" shape="rect" />
        <smtpad portHints={["2","right"]} pcbX="0.51mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="0.54mm" height="0.64mm" shape="rect" />
        <silkscreenpath route={[{"x":0.51,"y":0.72},{"x":-0.98,"y":0.72},{"x":-0.98,"y":-0.72},{"x":0.51,"y":-0.72}]} strokeWidth={0.1} />
        <silkscreentext pcbX={0} pcbY={1.22} anchorAlignment="center" fontSize={0.4} font="tscircuit2024" pcbRotation="0deg" layer="top" text="R1" />
        <courtyardrect pcbX={0} pcbY={0} width={1.86} height={0.94} layer="top" pcbRotation="0deg" />
              </footprint>} />
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
    center: { x: 4, y: 0 },
    symbol_name: "resistor_right",
    symbol_display_value: "10k",
  })

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
          "named schematic component: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )

  await expect(comparisonSvg).toMatchSvgSnapshot(
    import.meta.path,
    "schematic-comparison",
  )
})

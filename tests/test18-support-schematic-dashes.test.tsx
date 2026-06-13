import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import type { AnyCircuitElement } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"

const circuitJson: AnyCircuitElement[] = [
  {
    type: "schematic_line",
    schematic_line_id: "schematic_line_id_1",
    schematic_component_id: "schematic_component_id_1",
    x1: 0,
    y1: 0,
    x2: 2,
    y2: 0,
    stroke_width: 0.05,
    color: "black",
    is_dashed: true,
    dash_length: 0.2,
    dash_gap: 0.1,
  },
  {
    type: "schematic_path",
    schematic_path_id: "schematic_path_id_1",
    schematic_component_id: "schematic_component_id_1",
    points: [
      { x: 0, y: 1 },
      { x: 1, y: 2 },
    ],
    fill_color: "blue",
    is_dashed: true,
    dash_length: 0.15,
    dash_gap: 0.05,
  },
]

test("test18 support schematic dashLength and dashGap", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "DashedSymbol",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
"import { type ChipProps } from "tscircuit"
export const DashedSymbol = (props: ChipProps) => (
  <chip
    symbol={<symbol>
  <schematicline x1={0} y1={0} x2={2} y2={0} strokeWidth={0.05} color="black" isDashed={true} dashLength={0.2} dashGap={0.1}/>
  <schematicpath points={[{"x":0,"y":1},{"x":1,"y":2}]} strokeColor="blue" fillColor="blue" isFilled={false} dashLength={0.15} dashGap={0.05}/>
</symbol>}
    {...props}
  />
)"
`)

  const result = await runTscircuitCode(tscircuit)

  expect(result).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        type: "schematic_line",
        is_dashed: true,
        dash_length: 0.2,
        dash_gap: 0.1,
      }),
      expect.objectContaining({
        type: "schematic_path",
        dash_length: 0.15,
        dash_gap: 0.05,
      }),
    ]),
  )

  const schematicSvg = convertCircuitJsonToSchematicSvg(
    result as AnyCircuitElement[],
  )
  await expect(schematicSvg).toMatchSvgSnapshot(import.meta.path, "schematic")
})

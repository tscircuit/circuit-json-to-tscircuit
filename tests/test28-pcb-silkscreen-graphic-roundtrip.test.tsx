import { expect, test } from "bun:test"
import type {
  AnyCircuitElement,
  BRepShape,
  PcbComponent,
  PcbSilkscreenGraphic,
} from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"
import {
  applyToPoint,
  compose,
  type Matrix,
  rotateDEG,
  translate,
} from "transformation-matrix"

const roundBrepShape = (brepShape: BRepShape): BRepShape => ({
  outer_ring: {
    vertices: brepShape.outer_ring.vertices.map((vertex) => ({
      ...vertex,
      x: Number(vertex.x.toFixed(9)),
      y: Number(vertex.y.toFixed(9)),
    })),
  },
  inner_rings: brepShape.inner_rings.map((ring) => ({
    vertices: ring.vertices.map((vertex) => ({
      ...vertex,
      x: Number(vertex.x.toFixed(9)),
      y: Number(vertex.y.toFixed(9)),
    })),
  })),
})

const transformBrepRing = ({
  matrix,
  points,
}: {
  matrix: Matrix
  points: Array<{ x: number; y: number }>
}) => ({
  vertices: points.map((point) => applyToPoint(matrix, point)),
})

const sourceTscircuit = `
export default () => (
  <board pcbX={10} pcbY={20} width="16mm" height="10mm">
    <chip
      name="U1"
      pcbX={-3}
      pcbRotation="90deg"
      noSchematicRepresentation
      footprint={<footprint>
        <smtpad portHints={["1"]} width="1mm" height="1mm" shape="rect" />
      </footprint>}
    />
  </board>
)
`

test("preserves component-owned PCB silkscreen graphics", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const pcbComponent = sourceCircuitJson.find(
    (element): element is PcbComponent => element.type === "pcb_component",
  )

  if (!pcbComponent) throw new Error("Expected the source PCB component")

  const componentTransform = compose(
    translate(pcbComponent.center.x, pcbComponent.center.y),
    rotateDEG(pcbComponent.rotation),
  )
  const sourceGraphic: PcbSilkscreenGraphic = {
    type: "pcb_silkscreen_graphic",
    pcb_silkscreen_graphic_id: "pcb_silkscreen_graphic_imported",
    pcb_component_id: pcbComponent.pcb_component_id,
    shape: "brep",
    layer: "top",
    brep_shape: {
      outer_ring: transformBrepRing({
        matrix: componentTransform,
        points: [
          { x: -2, y: -1 },
          { x: 2, y: -1 },
          { x: 2, y: 1 },
          { x: -2, y: 1 },
        ],
      }),
      inner_rings: [
        transformBrepRing({
          matrix: componentTransform,
          points: [
            { x: -0.7, y: -0.4 },
            { x: -0.7, y: 0.4 },
            { x: 0.7, y: 0.4 },
            { x: 0.7, y: -0.4 },
          ],
        }),
      ],
    },
  }
  sourceCircuitJson.push(sourceGraphic)

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedGraphic = renderedCircuitJson.find(
    (element): element is PcbSilkscreenGraphic =>
      element.type === "pcb_silkscreen_graphic",
  )

  expect(generatedTscircuit).toContain("<pcbsilkscreengraphic")
  expect(generatedTscircuit).toMatchInlineSnapshot(`
    "export default () => (
      <board pcbX={10} pcbY={20} width="16mm" height="10mm" thickness="1.4mm" layers={2} material="fr4">
        <chip name="U1" pcbX={-3} pcbY={0} pcbRotation="90deg" layer="top" cadModel={null} noSchematicRepresentation pinLabels={{"pin1":["pin1","1"]}} footprint={<footprint>
                <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="1mm" height="1mm" shape="rect" />
        <pcbsilkscreengraphic layer="top" brepShape={{"outer_ring":{"vertices":[{"x":-2,"y":-1},{"x":2,"y":-0.9999999999999991},{"x":2,"y":1.0000000000000009},{"x":-2,"y":1}]},"inner_rings":[{"vertices":[{"x":-0.6999999999999993,"y":-0.40000000000000036},{"x":-0.6999999999999993,"y":0.40000000000000036},{"x":0.6999999999999993,"y":0.40000000000000036},{"x":0.6999999999999993,"y":-0.40000000000000036}]}]}} />
              </footprint>} />
      </board>
    )"
  `)
  if (!renderedGraphic) throw new Error("Expected the rendered PCB graphic")
  expect(roundBrepShape(renderedGraphic.brep_shape)).toEqual(
    roundBrepShape(sourceGraphic.brep_shape),
  )

  const pcbComparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    { gap: 24, normalizeSize: true, targetSize: 600 },
  )
  await expect(pcbComparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

import { expect, test } from "bun:test"
import type { CircuitJson, PcbSilkscreenGraphicBRep } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test26 preserves filled silkscreen graphics", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "SilkscreenGraphic",
  })
  const renderedCircuitJson = (await runTscircuitCode(`
${generatedTscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <SilkscreenGraphic />
  </board>,
)
  `)) as CircuitJson
  const renderedGraphic = renderedCircuitJson.find(
    (element): element is PcbSilkscreenGraphicBRep =>
      element.type === "pcb_silkscreen_graphic",
  )

  expect(renderedGraphic).toBeDefined()
  expect(renderedGraphic?.layer).toBe("bottom")

  const xs = renderedGraphic?.brep_shape.outer_ring.vertices.map(
    (vertex) => vertex.x,
  )
  const ys = renderedGraphic?.brep_shape.outer_ring.vertices.map(
    (vertex) => vertex.y,
  )
  expect(Math.min(...(xs ?? []))).toBeCloseTo(-2)
  expect(Math.max(...(xs ?? []))).toBeCloseTo(2)
  expect(Math.min(...(ys ?? []))).toBeCloseTo(-2)
  expect(Math.max(...(ys ?? []))).toBeCloseTo(2)

  expect(renderedGraphic?.brep_shape.inner_rings).toHaveLength(1)
  const innerVertices =
    renderedGraphic?.brep_shape.inner_rings?.[0]?.vertices ?? []
  const innerXs = innerVertices.map((vertex) => vertex.x)
  const innerYs = innerVertices.map((vertex) => vertex.y)
  expect(Math.min(...innerXs)).toBeCloseTo(-1)
  expect(Math.max(...innerXs)).toBeCloseTo(1)
  expect(Math.min(...innerYs)).toBeCloseTo(-1)
  expect(Math.max(...innerYs)).toBeCloseTo(1)
})

const circuitJson: CircuitJson = [
  {
    type: "source_component",
    source_component_id: "source_component_0",
    name: "SilkscreenGraphic",
    ftype: "simple_chip",
    supplier_part_numbers: {},
  },
  {
    type: "pcb_component",
    source_component_id: "source_component_0",
    pcb_component_id: "pcb_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    rotation: 0,
    width: 4,
    height: 4,
    obstructs_within_bounds: true,
  },
  {
    type: "pcb_silkscreen_graphic",
    pcb_silkscreen_graphic_id: "pcb_silkscreen_graphic_0",
    pcb_component_id: "pcb_component_0",
    layer: "bottom",
    shape: "brep",
    brep_shape: {
      outer_ring: {
        vertices: [
          { x: -2, y: 0, bulge: 1 },
          { x: 2, y: 0, bulge: 1 },
        ],
      },
      inner_rings: [
        {
          vertices: [
            { x: -1, y: 0, bulge: 1 },
            { x: 1, y: 0, bulge: 1 },
          ],
        },
      ],
    },
  },
]

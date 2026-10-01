import { expect, test } from "bun:test"
import type { CircuitJson, PcbSilkscreenGraphic } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves filled silkscreen graphics, cutouts and both layers", async () => {
  const graphics: PcbSilkscreenGraphic[] = [
    {
      type: "pcb_silkscreen_graphic",
      pcb_silkscreen_graphic_id: "with_cutout",
      pcb_component_id: "component",
      shape: "brep",
      layer: "top",
      brep_shape: {
        outer_ring: {
          vertices: [
            { x: 2, y: 3 },
            { x: 6, y: 3 },
            { x: 6, y: 7 },
            { x: 2, y: 7 },
          ],
        },
        inner_rings: [
          {
            vertices: [
              { x: 3, y: 4 },
              { x: 4, y: 4 },
              { x: 4, y: 5 },
              { x: 3, y: 5 },
            ],
          },
        ],
      },
    },
    {
      type: "pcb_silkscreen_graphic",
      pcb_silkscreen_graphic_id: "bottom_triangle",
      pcb_component_id: "component",
      shape: "brep",
      layer: "bottom",
      brep_shape: {
        outer_ring: {
          vertices: [
            { x: -6, y: -5 },
            { x: -2, y: -5 },
            { x: -5, y: -1 },
          ],
        },
        inner_rings: [],
      },
    },
  ]
  const circuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "board",
      center: { x: 0, y: 0 },
      width: 20,
      height: 20,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    ...graphics,
  ]
  const rendered = (await runTscircuitCode(
    convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "GraphicBoard",
    }),
  )) as CircuitJson
  const renderedGraphics = rendered.filter(
    (element) => element.type === "pcb_silkscreen_graphic",
  )
  expect(renderedGraphics).toHaveLength(graphics.length)
  for (const graphic of graphics) {
    const actual = renderedGraphics.find(
      (element) => element.layer === graphic.layer,
    )
    expect(actual).toBeDefined()
    if (!actual)
      throw new Error("Silkscreen graphic missing from rendered board")
    const expectedRings = [
      graphic.brep_shape.outer_ring,
      ...graphic.brep_shape.inner_rings,
    ]
    const actualRings = [
      actual.brep_shape.outer_ring,
      ...actual.brep_shape.inner_rings,
    ]
    expect(actualRings).toHaveLength(expectedRings.length)
    for (const [index, ring] of expectedRings.entries()) {
      expect(actualRings[index]?.vertices).toHaveLength(ring.vertices.length)
      for (const vertex of ring.vertices) {
        expect(
          actualRings[index]?.vertices.some(
            (point) =>
              Math.hypot(point.x - vertex.x, point.y - vertex.y) < 1e-6,
          ),
        ).toBe(true)
      }
    }
  }
})

import { expect, test } from "bun:test"
import type { CircuitJson, PcbSilkscreenGraphic } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves native silkscreen rings, bulges, assets and both layers", async () => {
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
      pcb_silkscreen_graphic_id: "curved_top",
      pcb_component_id: "component",
      shape: "brep",
      layer: "top",
      brep_shape: {
        outer_ring: {
          vertices: [
            { x: -4, y: 2, bulge: 1 },
            { x: -2, y: 2, bulge: 1 },
          ],
        },
        inner_rings: [],
      },
      image_asset: {
        mimetype: "image/svg+xml",
        project_relative_path: "logo.svg",
        url: "/assets/logo.svg",
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
  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "GraphicBoard",
  })
  expect(generatedTscircuit).not.toContain("data:image/svg+xml")
  const rendered = (await runTscircuitCode(generatedTscircuit)) as CircuitJson
  const renderedGraphics = rendered.filter(
    (element) => element.type === "pcb_silkscreen_graphic",
  )
  expect(renderedGraphics).toHaveLength(graphics.length)
  for (const [index, graphic] of graphics.entries()) {
    expect(renderedGraphics[index]?.layer).toBe(graphic.layer)
    expect(renderedGraphics[index]?.brep_shape).toEqual(graphic.brep_shape)
    expect(renderedGraphics[index]?.image_asset).toEqual(graphic.image_asset)
  }
})

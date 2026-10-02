import { expect, test } from "bun:test"
import type { CircuitJson, PcbBoard } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const board: PcbBoard = {
  type: "pcb_board",
  pcb_board_id: "board",
  center: { x: 0, y: 0 },
  width: 10,
  height: 10,
  num_layers: 2,
  thickness: 1.6,
  material: "fr4",
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10">
  <image x="1" y="1" width="2" height="2" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+j3ioAAAAASUVORK5CYII=" />
  <text x="4" y="6">Image {1}: &quot;µ&quot; &amp; \\</text>
</svg>`

test.each(["board", "component"])(
  "preserves inline schematic SVG and embedded images in a %s",
  async (kind) => {
    const circuitJson: CircuitJson = [
      ...(kind === "board" ? [board] : []),
      {
        type: "schematic_graphic",
        schematic_graphic_id: "graphic",
        svg_content: svgContent,
        width: 20,
        height: 10,
      },
    ]
    const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "Graphic",
    })
    const renderedCircuitJson = await runTscircuitCode(
      kind === "board"
        ? generatedTscircuit
        : `${generatedTscircuit}
          export default () => (
            <board width={10} height={10}><Graphic name="U1" /></board>
          )`,
    )
    const graphics = renderedCircuitJson.filter(
      (element) => element.type === "schematic_graphic",
    )

    expect(graphics).toHaveLength(1)
    expect(graphics[0]).toMatchObject({
      width: 20,
      height: 10,
      asset: {
        mimetype: "image/svg+xml",
        url: `data:image/svg+xml,${encodeURIComponent(svgContent)}`,
      },
    })
  },
)

test.each([
  ["percent-encoded", undefined],
  [
    "base64",
    '<svg xmlns="http://www.w3.org/2000/svg"><text>Fallback</text></svg>',
  ],
])("preserves a %s SVG asset", async (encoding, fallback) => {
  const imageUrl =
    encoding === "base64"
      ? `data:image/svg+xml;base64,${Buffer.from(svgContent).toString("base64")}`
      : `data:image/svg+xml,${encodeURIComponent(svgContent)}`
  const renderedCircuitJson = await runTscircuitCode(
    convertCircuitJsonToTscircuit(
      [
        board,
        {
          type: "schematic_graphic",
          schematic_graphic_id: "graphic",
          asset: {
            project_relative_path: "image.svg",
            url: imageUrl,
            mimetype: "image/svg+xml",
          },
          svg_content: fallback,
        },
      ],
      { componentName: "GraphicBoard" },
    ),
  )
  const graphics = renderedCircuitJson.filter(
    (element) => element.type === "schematic_graphic",
  )

  expect(graphics).toHaveLength(1)
  expect(graphics[0]).toMatchObject({
    asset: { url: imageUrl, mimetype: "image/svg+xml" },
  })
  expect(graphics[0]?.svg_content).toBe(fallback)
  expect(graphics[0]?.width).toBeUndefined()
  expect(graphics[0]?.height).toBeUndefined()
})

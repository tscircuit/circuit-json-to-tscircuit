import { expect, test } from "bun:test"
import { createComparisonSvg } from "./fixtures/create-ti-evm-roundtrip"

test("keeps the bottom-right corners of both schematic panels visible", async () => {
  // Schematic rendering produces width/height-only SVGs without a viewBox.
  const sourceSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600">
    <rect width="1200" height="600" fill="white" />
    <rect x="1100" y="500" width="100" height="100" fill="red" />
  </svg>`
  const renderedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600">
    <rect width="1200" height="600" fill="white" />
    <rect x="1100" y="500" width="100" height="100" fill="blue" />
  </svg>`

  const comparisonSvg = createComparisonSvg({
    fixtureName: "viewport",
    kind: "schematic",
    sourceSvg,
    renderedSvg,
  })

  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path)
})

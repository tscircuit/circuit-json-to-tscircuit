import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

// Regression for https://github.com/tscircuit/circuit-json-to-tscircuit/issues/70
test("holes keep is_covered_with_solder_mask and soldermask_margin", () => {
  const circuitJson: any[] = [
    {
      type: "pcb_hole",
      pcb_hole_id: "h0",
      hole_shape: "circle",
      x: 1,
      y: 2,
      hole_diameter: 0.8,
      is_covered_with_solder_mask: true,
      soldermask_margin: 0.1,
    },
    {
      type: "pcb_hole",
      pcb_hole_id: "h1",
      hole_shape: "pill",
      x: 0,
      y: 0,
      hole_width: 1.5,
      hole_height: 0.8,
      is_covered_with_solder_mask: false,
      soldermask_margin: 0.05,
    },
    {
      type: "pcb_hole",
      pcb_hole_id: "h2",
      hole_shape: "circle",
      x: 3,
      y: 3,
      hole_diameter: 0.5,
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson)

  expect(tscircuit).toContain("coveredWithSolderMask={true}")
  expect(tscircuit).toContain("solderMaskMargin={0.1}")
  expect(tscircuit).toContain("coveredWithSolderMask={false}")
  expect(tscircuit).toContain("solderMaskMargin={0.05}")

  // holes without the fields stay unchanged
  const h2Line = tscircuit
    .split("\n")
    .find((line: string) => line.includes('pcbX="3mm"'))
  expect(h2Line).not.toContain("coveredWithSolderMask")
  expect(h2Line).not.toContain("solderMaskMargin")
})

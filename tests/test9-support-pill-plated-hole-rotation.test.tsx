import { test, expect } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { runTscircuitCode } from "tscircuit"

declare module "bun:test" {
  interface Matchers<T = unknown> {
    toMatchInlineSnapshot(snapshot?: string | null): Promise<MatcherResult>
  }
}

test("test pill and oval plated hole rotation conversion", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph1",
      shape: "pill",
      x: 1.5,
      y: -2.5,
      outer_width: 1.8,
      outer_height: 0.9,
      hole_width: 1.2,
      hole_height: 0.4,
      ccw_rotation: 90,
      layers: ["top", "bottom"],
      port_hints: ["1"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "ph2",
      shape: "oval",
      x: 3.5,
      y: 2.25,
      outer_width: 2.2,
      outer_height: 1.1,
      hole_width: 1.4,
      hole_height: 0.5,
      ccw_rotation: 45,
      layers: ["top", "bottom"],
      port_hints: ["2"],
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ComponentWithPillPlatedHoleRotation",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const ComponentWithPillPlatedHoleRotation = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <platedhole  portHints={["1"]} pcbX="1.5mm" pcbY="-2.5mm" outerHeight="0.9mm" outerWidth="1.8mm" holeHeight="0.4mm" holeWidth="1.2mm" height="0.4mm" shape="pill" pcbRotation="90deg" />
    <platedhole  portHints={["2"]} pcbX="3.5mm" pcbY="2.25mm" outerHeight="1.1mm" outerWidth="2.2mm" holeHeight="0.5mm" holeWidth="1.4mm" height="0.5mm" shape="oval" pcbRotation="45deg" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const result = await runTscircuitCode(tscircuit)
  expect(Array.isArray(result)).toBe(true)
  expect(result).not.toHaveLength(0)
}, 10000)

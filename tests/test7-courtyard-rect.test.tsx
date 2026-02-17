import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import type { AnyCircuitElement } from "circuit-json"
import { runTscircuitCode } from "tscircuit"

test("test courtyard rect conversion", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pad1",
      shape: "rect",
      x: 0,
      y: 0,
      width: 1,
      height: 1,
      layer: "top",
      port_hints: ["1"],
    } as any,
    {
      type: "pcb_courtyard_rect",
      pcb_courtyard_rect_id: "cr1",
      center: { x: 0, y: 0 },
      width: 5,
      height: 3,
      layer: "top",
    } as any,
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ComponentWithCourtyard",
  })

  // Verify courtyard rect is present in output
  expect(tscircuit).toContain("<courtyardrect")
  expect(tscircuit).toContain('width="5mm"')
  expect(tscircuit).toContain('height="3mm"')
  expect(tscircuit).toContain('pcbX="0mm"')
  expect(tscircuit).toContain('pcbY="0mm"')
  expect(tscircuit).toContain('layer="top"')

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const ComponentWithCourtyard = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" width="1mm" height="1mm" shape="rect" />
    <courtyardrect pcbX="0mm" pcbY="0mm" width="5mm" height="3mm" layer="top" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

test("test courtyard rect without layer", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_courtyard_rect",
      pcb_courtyard_rect_id: "cr1",
      center: { x: 1.5, y: -2.3 },
      width: 10,
      height: 8,
    } as any,
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "CourtyardNoLayer",
  })

  expect(tscircuit).toContain("<courtyardrect")
  expect(tscircuit).toContain('pcbX="1.5mm"')
  expect(tscircuit).toContain('pcbY="-2.3mm"')
  expect(tscircuit).toContain('width="10mm"')
  expect(tscircuit).toContain('height="8mm"')
  expect(tscircuit).not.toContain("layer=")

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const CourtyardNoLayer = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <courtyardrect pcbX="1.5mm" pcbY="-2.3mm" width="10mm" height="8mm" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

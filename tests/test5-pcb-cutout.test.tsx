import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import type { AnyCircuitElement } from "circuit-json"

declare module "bun:test" {
  interface Matchers<T = unknown> {
    toMatchInlineSnapshot(snapshot?: string | null): Promise<MatcherResult>
  }
}

test("test pcb_cutout conversion - all shapes", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_cutout",
      pcb_cutout_id: "cutout1",
      shape: "rect",
      center: { x: 0, y: 0 },
      width: 5,
      height: 3,
      rotation: 45,
    },
    {
      type: "pcb_cutout",
      pcb_cutout_id: "cutout2",
      shape: "circle",
      center: { x: 10, y: 10 },
      radius: 2.5,
    },
    {
      type: "pcb_cutout",
      pcb_cutout_id: "cutout3",
      shape: "polygon",
      points: [
        { x: 0, y: 0 },
        { x: 5, y: 0 },
        { x: 5, y: 5 },
        { x: 0, y: 5 },
      ],
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ComponentWithCutouts",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const ComponentWithCutouts = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <pcbcutout shape="rect" pcbX="0mm" pcbY="0mm" width="5mm" height="3mm" pcbRotation="45mm" />
    <pcbcutout shape="circle" pcbX="10mm" pcbY="10mm" radius="2.5mm" />
    <pcbcutout shape="polygon" points={[{"x":0,"y":0},{"x":5,"y":0},{"x":5,"y":5},{"x":0,"y":5}]} />
          </footprint>}
        {...props}
      />
    )"
  `)
})

test("test pcb_cutout conversion - rect without rotation", async () => {
  const circuitJson: AnyCircuitElement[] = [
    {
      type: "pcb_cutout",
      pcb_cutout_id: "cutout1",
      shape: "rect",
      center: { x: 2, y: 3 },
      width: 10,
      height: 5,
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ComponentWithRectCutout",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const ComponentWithRectCutout = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <pcbcutout shape="rect" pcbX="2mm" pcbY="3mm" width="10mm" height="5mm" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

test("test pcb_cutout conversion - mixed with other elements", async () => {
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
    },
    {
      type: "pcb_cutout",
      pcb_cutout_id: "cutout1",
      shape: "circle",
      center: { x: 5, y: 5 },
      radius: 1.5,
    },
    {
      type: "pcb_hole",
      pcb_hole_id: "hole1",
      hole_shape: "circle",
      x: 10,
      y: 10,
      hole_diameter: 0.5,
    },
  ]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ComponentWithMixedElements",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const ComponentWithMixedElements = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <hole pcbX="10mm" pcbY="10mm" diameter="0.5mm" />
    <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" width="1mm" height="1mm" shape="rect" />
    <pcbcutout shape="circle" pcbX="5mm" pcbY="5mm" radius="1.5mm" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

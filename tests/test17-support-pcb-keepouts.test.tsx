import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test17 support pcb keepouts", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test17Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test17Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <keepout shape="rect" pcbX="-1.5mm" pcbY="2mm" width="3.2mm" height="1.4mm" />
    <keepout shape="circle" pcbX="2.5mm" pcbY="-1mm" radius="0.9mm" />
          </footprint>}
        {...props}
      />
    )"
  `)

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <Test17Component />
  </board>,
)
  `)) as AnyCircuitElement[]

  const renderedKeepouts = renderedCircuitJson.filter(
    (elm) => elm.type === "pcb_keepout",
  )

  expect(renderedKeepouts.length).toBeGreaterThanOrEqual(2)
  expect(renderedKeepouts).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        type: "pcb_keepout",
        layers: ["top"],
        shape: "rect",
        width: 3.2,
        height: 1.4,
        center: { x: -1.5, y: 2 },
      }),
      expect.objectContaining({
        type: "pcb_keepout",
        layers: ["top"],
        shape: "circle",
        radius: 0.9,
        center: { x: 2.5, y: -1 },
      }),
    ]),
  )

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

const circuitJson: AnyCircuitElement[] = [
  {
    type: "pcb_keepout",
    pcb_keepout_id: "keepout_rect",
    shape: "rect",
    center: { x: -1.5, y: 2 },
    width: 3.2,
    height: 1.4,
    layers: ["top"],
  },
  {
    type: "pcb_keepout",
    pcb_keepout_id: "keepout_circle",
    shape: "circle",
    center: { x: 2.5, y: -1 },
    radius: 0.9,
    layers: ["top"],
  },
]

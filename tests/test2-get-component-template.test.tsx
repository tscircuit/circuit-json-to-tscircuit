import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { getComponentUsingTemplate } from "lib/get-component-using-template"

test("test2 getComponentUsingTemplate", async () => {
  const circuitJson = JSON.parse(
    await readFile(
      join(__dirname, "../assets/input-circuit-json.json"),
      "utf-8",
    ),
  )

  const tscircuitCode = getComponentUsingTemplate({
    circuitJson,
    componentName: "MyResistor",
    pinLabels: {
      pin1: ["pin1"],
      pin2: ["pin2"],
    },
    objUrl: "...",
    supplierPartNumbers: { jlcpcb: ["123456"] },
    manufacturerPartNumber: "123456",
  })

  expect(tscircuitCode).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    const pinLabels = {
      "pin1": [
        "pin1"
      ],
      "pin2": [
        "pin2"
      ]
    } as const
    export const MyResistor = (props: ChipProps<typeof pinLabels>) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1","left"]} pcbX="-0.5mm" pcbY="0mm" width="0.6000000000000001mm" height="0.6000000000000001mm" shape="rect" />
    <smtpad portHints={["2","right"]} pcbX="0.5mm" pcbY="0mm" width="0.6000000000000001mm" height="0.6000000000000001mm" shape="rect" />
          </footprint>}
        pinLabels={pinLabels}
        cadModel={{
            objUrl: "...",
            rotationOffset: { x: 0, y: 0, z: 0 },
            positionOffset: { x: 0, y: 0, z: 0 },
          }}
        supplierPartNumbers={{
      "jlcpcb": [
        "123456"
      ]
    }}
        manufacturerPartNumber="123456"
        {...props}
      />
    )"
  `)
})

import { test, expect } from "bun:test"
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
            <smtpad portHints={["pin2"]} pcbX="0.753364mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="0.8064754mm" height="0.8640064mm" shape="rect" />
    <smtpad portHints={["pin1"]} pcbX="-0.753364mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="0.8064754mm" height="0.8640064mm" shape="rect" />
    <silkscreenpath route={[{"x":0.42621199999996406,"y":-0.6606031999999686},{"x":1.3850873999999749,"y":-0.6606031999999686},{"x":1.3850873999999749,"y":0.6606031999999686},{"x":0.42621199999996406,"y":0.6606031999999686}]} strokeWidth={0.1} />
    <silkscreenpath route={[{"x":-0.42621200000007775,"y":-0.6606031999999686},{"x":-1.3850874000000886,"y":-0.6606031999999686},{"x":-1.3850874000000886,"y":0.6606031999999686},{"x":-0.42621200000007775,"y":0.6606031999999686}]} strokeWidth={0.1} />
    <silkscreentext pcbX={-0.0127} pcbY={1.6604} anchorAlignment="center" fontSize={1} font="tscircuit2024" pcbRotation="0deg" layer="top" text="unnamed_chip1" />
    <courtyardoutline outline={[{"x":-1.647000000000162,"y":0.9103999999999814},{"x":1.6216000000000577,"y":0.9103999999999814},{"x":1.6216000000000577,"y":-0.9103999999998678},{"x":-1.647000000000162,"y":-0.9103999999998678},{"x":-1.647000000000162,"y":0.9103999999999814}]} layer="top" />
          </footprint>}
        symbol={<symbol>
      <schematictext text="A_0603WAF1002T5E" x={-0.6000000000000001} y={-0.33} anchorAlignment="left" fontSize={0.18} color="#006464" rotation={0} />
      <schematictext text="" x={-0.6000000000000001} y={0.33} anchorAlignment="left" fontSize={0.18} color="#006464" rotation={0} />
    </symbol>}
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

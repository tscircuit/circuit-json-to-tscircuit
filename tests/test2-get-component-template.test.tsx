import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { Circuit } from "@tscircuit/core"
import { getComponentUsingTemplate } from "lib/get-component-using-template"

test("test2 getComponentUsingTemplate", async () => {
  const circuit = new Circuit()

  circuit.add(
    <board width="10mm" height="10mm">
      <resistor name="R1" resistance="1k" footprint="0402" />
    </board>,
  )

  const tscircuitCode = getComponentUsingTemplate({
    circuitJson: circuit.getCircuitJson(),
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
"import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"

const pinLabels = {
  "pin1": [
    "pin1"
  ],
  "pin2": [
    "pin2"
  ]
} as const

interface Props extends CommonLayoutProps {
  name: string
}

export const MyResistor = (props: Props) => {
  return (
    <chip
      {...props}
      cadModel={{
        objUrl: "...",
        rotationOffset: { x: 0, y: 0, z: 0 },
        positionOffset: { x: 0, y: 0, z: 0 },
      }}
      pinLabels={{
  "pin1": [
    "pin1"
  ],
  "pin2": [
    "pin2"
  ]
}}
      supplierPartNumbers={{
  "jlcpcb": [
    "123456"
  ]
}}
      manufacturerPartNumber="123456"
      footprint={<footprint>
        <smtpad portHints={["1","left"]} pcbX="-0.5mm" pcbY="0mm" width="0.6000000000000001mm" height="0.6000000000000001mm" shape="rect" />
<smtpad portHints={["2","right"]} pcbX="0.5mm" pcbY="0mm" width="0.6000000000000001mm" height="0.6000000000000001mm" shape="rect" />
      </footprint>}
    />
  )
}

export const useMyResistor = createUseComponent(MyResistor, pinLabels)"
`)
})

import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { Circuit } from "@tscircuit/core"

declare module "bun:test" {
  interface Matchers<T = unknown> {
    toMatchInlineSnapshot(snapshot?: string | null): Promise<MatcherResult>
  }
}

test("test1 basic circuit", async () => {
  const circuit = new Circuit()

  circuit.add(
    <group subcircuit>
      <resistor name="R1" resistance="1k" footprint="0402" />
    </group>,
  )

  const circuitJson = circuit.getCircuitJson()

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "MyResistor",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
"import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"
const pinLabels = undefined as const
interface Props extends CommonLayoutProps {
  name: string
}
export const MyResistor = (props: Props) => {
  return (
    <chip
      {...props}
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

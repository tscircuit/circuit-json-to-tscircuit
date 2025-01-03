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
    <board width="10mm" height="10mm">
      <resistor name="R1" resistance="1k" footprint="0402" />
    </board>,
  )

  const circuitJson = circuit.getCircuitJson()

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson)

  expect(tscircuit).toMatchInlineSnapshot(`""`)
})

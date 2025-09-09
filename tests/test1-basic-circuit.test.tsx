import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

declare module "bun:test" {
  interface Matchers<T = unknown> {
    toMatchInlineSnapshot(snapshot?: string | null): Promise<MatcherResult>
  }
}

test("test1 basic circuit", async () => {
  const circuitJson = JSON.parse(
    await readFile(
      join(__dirname, "../assets/input-circuit-json.json"),
      "utf-8",
    ),
  )

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "MyResistor",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const MyResistor = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["1","left"]} pcbX="-0.5mm" pcbY="0mm" width="0.6000000000000001mm" height="0.6000000000000001mm" shape="rect" />
    <smtpad portHints={["2","right"]} pcbX="0.5mm" pcbY="0mm" width="0.6000000000000001mm" height="0.6000000000000001mm" shape="rect" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

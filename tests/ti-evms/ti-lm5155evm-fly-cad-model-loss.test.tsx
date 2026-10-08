import { expect, test } from "bun:test"
import { expectTiEvmCadModelRoundtrip } from "../fixtures/expect-ti-evm-cad-model-roundtrip"

test("LM5155EVM-FLY preserves imported CAD models during TSX conversion", async () => {
  const result = await expectTiEvmCadModelRoundtrip({
    componentName: "Lm5155EvmFly",
    fixtureName: "lm5155evm-fly",
    testPath: import.meta.path,
  })

  expect(result).toMatchInlineSnapshot(`
    {
      "linkedCadModelCount": 24,
    }
  `)
}, 60_000)

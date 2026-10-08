import { expect, test } from "bun:test"
import { expectTiEvmCadModelRoundtrip } from "../fixtures/expect-ti-evm-cad-model-roundtrip"

test("DP83825EVM preserves imported CAD models during TSX conversion", async () => {
  const result = await expectTiEvmCadModelRoundtrip({
    componentName: "Dp83825Evm",
    fixtureName: "dp83825evm",
    testPath: import.meta.path,
  })

  expect(result).toMatchInlineSnapshot(`
    {
      "linkedCadModelCount": 27,
    }
  `)
}, 60_000)

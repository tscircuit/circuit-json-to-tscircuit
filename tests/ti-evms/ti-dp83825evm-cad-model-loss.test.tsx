import { expect, test } from "bun:test"
import { expectTiEvmCadModelRoundtrip } from "../fixtures/expect-ti-evm-cad-model-roundtrip"

test("DP83825EVM preserves imported CAD models during TSX conversion", async () => {
  const roundtripResult = await expectTiEvmCadModelRoundtrip({
    componentName: "Dp83825Evm",
    fixtureName: "dp83825evm",
    testPath: import.meta.path,
  })
  expect(roundtripResult).toEqual({ linkedCadModelCount: 27 })
}, 60_000)

import { expect, test } from "bun:test"
import { expectTiEvmCadModelRoundtrip } from "../fixtures/expect-ti-evm-cad-model-roundtrip"

test("LMG342X-BB-EVM preserves imported CAD models during TSX conversion", async () => {
  const roundtripResult = await expectTiEvmCadModelRoundtrip({
    componentName: "Lmg342xBbEvm",
    fixtureName: "lmg342x-bb-evm",
    testPath: import.meta.path,
  })
  expect(roundtripResult).toEqual({ linkedCadModelCount: 77 })
}, 60_000)

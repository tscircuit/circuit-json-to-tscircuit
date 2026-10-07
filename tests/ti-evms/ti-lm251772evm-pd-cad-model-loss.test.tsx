import { expect, test } from "bun:test"
import { expectTiEvmCadModelRoundtrip } from "../fixtures/expect-ti-evm-cad-model-roundtrip"

test("LM251772EVM-PD preserves imported CAD models during TSX conversion", async () => {
  const roundtripResult = await expectTiEvmCadModelRoundtrip({
    componentName: "Lm251772EvmPd",
    fixtureName: "lm251772evm-pd",
    testPath: import.meta.path,
  })
  expect(roundtripResult).toEqual({ linkedCadModelCount: 94 })
}, 60_000)

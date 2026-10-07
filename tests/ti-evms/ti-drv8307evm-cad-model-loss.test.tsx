import { expect, test } from "bun:test"
import { expectTiEvmCadModelRoundtrip } from "../fixtures/expect-ti-evm-cad-model-roundtrip"

test("DRV8307EVM preserves imported CAD models during TSX conversion", async () => {
  const roundtripResult = await expectTiEvmCadModelRoundtrip({
    componentName: "Drv8307Evm",
    fixtureName: "drv8307evm",
    testPath: import.meta.path,
  })
  expect(roundtripResult).toEqual({ linkedCadModelCount: 6 })
}, 60_000)

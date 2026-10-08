import { expect, test } from "bun:test"
import { createTiEvmCadModelLossRepro } from "../fixtures/create-ti-evm-cad-model-loss-repro"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"

test("LM5155EVM-FLY preserves imported CAD models during TSX conversion", async () => {
  const modelCounts = await createTiEvmCadModelLossRepro({
    componentName: "Lm5155EvmFly",
    fixtureName: "lm5155evm-fly",
  })

  expect(modelCounts).toMatchInlineSnapshot(`
    {
      "generatedTsxContainsCadModel": true,
      "misplacedLinkedCadModelCount": 0,
      "renderedLinkedCadModelCount": 24,
      "sourceLinkedCadModelCount": 24,
    }
  `)
  await expectTiEvmCadModelVisualRepro({
    componentName: "Lm5155EvmFly",
    fixtureName: "lm5155evm-fly",
    testPath: import.meta.path,
  })
}, 60_000)

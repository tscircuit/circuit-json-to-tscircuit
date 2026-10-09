import { expect, test } from "bun:test"
import { createTiEvmCadModelLossRepro } from "../fixtures/create-ti-evm-cad-model-loss-repro"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"

test("LMG342X-BB-EVM preserves imported CAD models during TSX conversion", async () => {
  const modelCounts = await createTiEvmCadModelLossRepro({
    componentName: "Lmg342xBbEvm",
    fixtureName: "lmg342x-bb-evm",
  })

  expect(modelCounts).toMatchInlineSnapshot(`
    {
      "generatedTsxContainsCadModel": true,
      "renderedLinkedCadModelCount": 77,
      "sourceLinkedCadModelCount": 77,
    }
  `)
  await expectTiEvmCadModelVisualRepro({
    componentName: "Lmg342xBbEvm",
    fixtureName: "lmg342x-bb-evm",
    testPath: import.meta.path,
  })
}, 60_000)

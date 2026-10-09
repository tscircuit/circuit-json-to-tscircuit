import { expect, test } from "bun:test"
import { createTiEvmCadModelLossRepro } from "../fixtures/create-ti-evm-cad-model-loss-repro"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"

test("DRV8307EVM preserves imported CAD models during TSX conversion", async () => {
  const modelCounts = await createTiEvmCadModelLossRepro({
    componentName: "Drv8307Evm",
    fixtureName: "drv8307evm",
  })

  expect(modelCounts).toMatchInlineSnapshot(`
    {
      "generatedTsxContainsCadModel": true,
      "renderedLinkedCadModelCount": 6,
      "sourceLinkedCadModelCount": 6,
    }
  `)
  await expectTiEvmCadModelVisualRepro({
    componentName: "Drv8307Evm",
    fixtureName: "drv8307evm",
    testPath: import.meta.path,
  })
}, 60_000)

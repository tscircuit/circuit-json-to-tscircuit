import { expect, test } from "bun:test"
import { createTiEvmCadModelLossRepro } from "../fixtures/create-ti-evm-cad-model-loss-repro"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"

test("DP83825EVM loses imported CAD models during TSX conversion", async () => {
  const modelCounts = await createTiEvmCadModelLossRepro({
    componentName: "Dp83825Evm",
    fixtureName: "dp83825evm",
  })

  expect(modelCounts).toMatchInlineSnapshot(`
    {
      "generatedTsxContainsCadModel": false,
      "renderedLinkedCadModelCount": 0,
      "sourceLinkedCadModelCount": 27,
    }
  `)
  await expectTiEvmCadModelVisualRepro({
    componentName: "Dp83825Evm",
    fixtureName: "dp83825evm",
    testPath: import.meta.path,
  })
}, 60_000)

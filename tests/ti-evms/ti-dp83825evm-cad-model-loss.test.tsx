import { expect, test } from "bun:test"
import { createTiEvmCadModelLossRepro } from "../fixtures/create-ti-evm-cad-model-loss-repro"

test("DP83825EVM preserves imported CAD models during TSX conversion", async () => {
  const modelCounts = await createTiEvmCadModelLossRepro({
    componentName: "Dp83825Evm",
    fixtureName: "dp83825evm",
  })

  expect(modelCounts).toMatchInlineSnapshot(`
    {
      "generatedTsxContainsCadModel": true,
      "renderedLinkedCadModelCount": 27,
      "sourceLinkedCadModelCount": 27,
    }
  `)
})

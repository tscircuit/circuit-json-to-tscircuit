import { expect, test } from "bun:test"
import { createTiEvmCadModelLossRepro } from "../fixtures/create-ti-evm-cad-model-loss-repro"

test("LM5155EVM-FLY loses imported CAD models during TSX conversion", async () => {
  const modelCounts = await createTiEvmCadModelLossRepro({
    componentName: "Lm5155EvmFly",
    fixtureName: "lm5155evm-fly",
  })

  expect(modelCounts).toMatchInlineSnapshot(`
    {
      "generatedTsxContainsCadModel": false,
      "renderedLinkedCadModelCount": 0,
      "sourceLinkedCadModelCount": 24,
    }
  `)
})

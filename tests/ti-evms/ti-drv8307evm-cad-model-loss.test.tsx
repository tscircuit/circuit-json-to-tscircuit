import { expect, test } from "bun:test"
import { createTiEvmCadModelLossRepro } from "../fixtures/create-ti-evm-cad-model-loss-repro"

test("DRV8307EVM loses imported CAD models during TSX conversion", async () => {
  const modelCounts = await createTiEvmCadModelLossRepro({
    componentName: "Drv8307Evm",
    fixtureName: "drv8307evm",
  })

  expect(modelCounts).toMatchInlineSnapshot(`
    {
      "generatedTsxContainsCadModel": false,
      "renderedLinkedCadModelCount": 0,
      "sourceLinkedCadModelCount": 6,
    }
  `)
})

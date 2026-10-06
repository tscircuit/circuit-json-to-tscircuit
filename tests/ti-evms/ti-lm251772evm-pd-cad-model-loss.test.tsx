import { expect, test } from "bun:test"
import { createTiEvmCadModelLossRepro } from "../fixtures/create-ti-evm-cad-model-loss-repro"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"

test("LM251772EVM-PD loses imported CAD models during TSX conversion", async () => {
  const modelCounts = await createTiEvmCadModelLossRepro({
    componentName: "Lm251772EvmPd",
    fixtureName: "lm251772evm-pd",
  })

  expect(modelCounts).toMatchInlineSnapshot(`
    {
      "generatedTsxContainsCadModel": false,
      "renderedLinkedCadModelCount": 0,
      "sourceLinkedCadModelCount": 94,
    }
  `)
  await expectTiEvmCadModelVisualRepro({
    componentName: "Lm251772EvmPd",
    fixtureName: "lm251772evm-pd",
    testPath: import.meta.path,
  })
}, 60_000)

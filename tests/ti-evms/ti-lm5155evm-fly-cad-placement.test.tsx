import { expect, test } from "bun:test"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"
import { createTiEvmCadPlacementRepro } from "../fixtures/create-ti-evm-cad-placement-repro"

test("LM5155EVM-FLY imported CAD placement", async () => {
  const placementSummary = await createTiEvmCadPlacementRepro({
    componentName: "Lm5155EvmFly",
    fixtureName: "lm5155evm-fly",
  })

  expect(placementSummary).toMatchInlineSnapshot(`
    {
      "firstModel": {
        "renderedLayer": undefined,
        "renderedPosition": {
          "x": 78.42795591999999,
          "y": 109.203637955,
          "z": 0.8,
        },
        "renderedRotation": {
          "x": 90,
          "y": 0,
          "z": 0,
        },
        "sourceLayer": "top",
        "sourcePosition": {
          "x": 18.64765892,
          "y": 61.3155492,
          "z": 0.8,
        },
        "sourceRotation": {
          "x": 90,
          "y": 0,
          "z": 0,
        },
      },
      "layerMismatchCount": 24,
      "linkedModelCount": 24,
      "maximumAbsolutePositionErrorByAxisMm": {
        "x": 59.780297,
        "y": 47.888089,
        "z": 0,
      },
      "maximumAbsoluteRotationErrorByAxisDegrees": {
        "x": 0,
        "y": 0,
        "z": 0,
      },
      "positionAxisMismatchCounts": {
        "x": 24,
        "y": 24,
        "z": 0,
      },
      "rotationAxisMismatchCounts": {
        "x": 0,
        "y": 0,
        "z": 0,
      },
    }
  `)
  await expectTiEvmCadModelVisualRepro({
    componentName: "Lm5155EvmFly",
    fixtureName: "lm5155evm-fly",
    testPath: import.meta.path,
  })
}, 60_000)

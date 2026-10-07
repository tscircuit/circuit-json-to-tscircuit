import { expect, test } from "bun:test"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"
import { createTiEvmCadPlacementRepro } from "../fixtures/create-ti-evm-cad-placement-repro"

test("LMG342X-BB-EVM imported CAD placement", async () => {
  const placementSummary = await createTiEvmCadPlacementRepro({
    componentName: "Lmg342xBbEvm",
    fixtureName: "lmg342x-bb-evm",
  })

  expect(placementSummary).toMatchInlineSnapshot(`
    {
      "firstModel": {
        "renderedLayer": undefined,
        "renderedPosition": {
          "x": 240.013968155,
          "y": 176.017638185,
          "z": 0.8,
        },
        "renderedRotation": {
          "x": 0,
          "y": 0,
          "z": 180,
        },
        "sourceLayer": "top",
        "sourcePosition": {
          "x": 141.52254652,
          "y": 102.8446,
          "z": 0.8,
        },
        "sourceRotation": {
          "x": 0,
          "y": 0,
          "z": 180,
        },
      },
      "layerMismatchCount": 77,
      "linkedModelCount": 77,
      "maximumAbsolutePositionErrorByAxisMm": {
        "x": 98.491422,
        "y": 73.173038,
        "z": 0,
      },
      "maximumAbsoluteRotationErrorByAxisDegrees": {
        "x": 0,
        "y": 0,
        "z": 0,
      },
      "positionAxisMismatchCounts": {
        "x": 77,
        "y": 77,
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
    componentName: "Lmg342xBbEvm",
    fixtureName: "lmg342x-bb-evm",
    testPath: import.meta.path,
  })
}, 60_000)

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
          "x": 239.719518655,
          "y": 175.72318868499997,
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
        "x": 98.196972,
        "y": 72.878589,
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

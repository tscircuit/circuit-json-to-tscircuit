import { expect, test } from "bun:test"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"
import { createTiEvmCadPlacementRepro } from "../fixtures/create-ti-evm-cad-placement-repro"

test("LM251772EVM-PD imported CAD placement", async () => {
  const placementSummary = await createTiEvmCadPlacementRepro({
    componentName: "Lm251772EvmPd",
    fixtureName: "lm251772evm-pd",
  })

  expect(placementSummary).toMatchInlineSnapshot(`
    {
      "firstModel": {
        "renderedLayer": "top",
        "renderedPosition": {
          "x": 67.52780754,
          "y": 82.96859962,
          "z": 0.8,
        },
        "renderedRotation": {
          "x": 0,
          "y": 0,
          "z": 270,
        },
        "sourceLayer": "top",
        "sourcePosition": {
          "x": 67.52780754,
          "y": 82.96859962,
          "z": 0.8,
        },
        "sourceRotation": {
          "x": 0,
          "y": 0,
          "z": 270,
        },
      },
      "layerMismatchCount": 0,
      "linkedModelCount": 94,
      "maximumAbsolutePositionErrorByAxisMm": {
        "x": 0,
        "y": 0,
        "z": 0,
      },
      "maximumAbsoluteRotationErrorByAxisDegrees": {
        "x": 0,
        "y": 0,
        "z": 0,
      },
      "positionAxisMismatchCounts": {
        "x": 0,
        "y": 0,
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
    componentName: "Lm251772EvmPd",
    fixtureName: "lm251772evm-pd",
    testPath: import.meta.path,
  })
}, 60_000)

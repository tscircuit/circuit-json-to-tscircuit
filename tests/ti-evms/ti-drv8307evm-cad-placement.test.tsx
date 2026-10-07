import { expect, test } from "bun:test"
import { expectTiEvmCadModelVisualRepro } from "../fixtures/create-ti-evm-cad-model-visual-repro"
import { createTiEvmCadPlacementRepro } from "../fixtures/create-ti-evm-cad-placement-repro"

test("DRV8307EVM imported CAD placement", async () => {
  const placementSummary = await createTiEvmCadPlacementRepro({
    componentName: "Drv8307Evm",
    fixtureName: "drv8307evm",
  })

  expect(placementSummary).toMatchInlineSnapshot(`
    {
      "firstModel": {
        "renderedLayer": "top",
        "renderedPosition": {
          "x": 35.88981646,
          "y": 51.935024399999996,
          "z": 2.21523974,
        },
        "renderedRotation": {
          "x": 0,
          "y": 0,
          "z": 180,
        },
        "sourceLayer": "top",
        "sourcePosition": {
          "x": 35.88981646,
          "y": 51.935024399999996,
          "z": 2.21523974,
        },
        "sourceRotation": {
          "x": 0,
          "y": 0,
          "z": 180,
        },
      },
      "layerMismatchCount": 0,
      "linkedModelCount": 6,
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
    componentName: "Drv8307Evm",
    fixtureName: "drv8307evm",
    testPath: import.meta.path,
  })
}, 60_000)

import { expect, test } from "bun:test"
import { createTiEvmCadPlacementRepro } from "../fixtures/create-ti-evm-cad-placement-repro"

test("DRV8307EVM imported CAD placement", async () => {
  const placementSummary = await createTiEvmCadPlacementRepro({
    componentName: "Drv8307Evm",
    fixtureName: "drv8307evm",
  })

  expect(placementSummary).toMatchInlineSnapshot(`
    {
      "firstModel": {
        "renderedLayer": undefined,
        "renderedPosition": {
          "x": 96.68928846,
          "y": 115.92761295,
          "z": 0.8152400000000001,
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
          "z": 0.8152400000000001,
        },
        "sourceRotation": {
          "x": 0,
          "y": 0,
          "z": 180,
        },
      },
      "layerMismatchCount": 6,
      "linkedModelCount": 6,
      "maximumAbsolutePositionErrorByAxisMm": {
        "x": 60.799472,
        "y": 63.992589,
        "z": 0,
      },
      "maximumAbsoluteRotationErrorByAxisDegrees": {
        "x": 0,
        "y": 0,
        "z": 0,
      },
      "positionAxisMismatchCounts": {
        "x": 6,
        "y": 6,
        "z": 0,
      },
      "rotationAxisMismatchCounts": {
        "x": 0,
        "y": 0,
        "z": 0,
      },
    }
  `)
})

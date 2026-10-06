import { expect, test } from "bun:test"
import { createTiEvmCadPlacementRepro } from "../fixtures/create-ti-evm-cad-placement-repro"

test("DP83825EVM imported CAD placement", async () => {
  const placementSummary = await createTiEvmCadPlacementRepro({
    componentName: "Dp83825Evm",
    fixtureName: "dp83825evm",
  })

  expect(placementSummary).toMatchInlineSnapshot(`
    {
      "firstModel": {
        "renderedLayer": undefined,
        "renderedPosition": {
          "x": 192.39471553999996,
          "y": 98.10917004999999,
          "z": 0.8,
        },
        "renderedRotation": {
          "x": 0,
          "y": 0,
          "z": 90,
        },
        "sourceLayer": "top",
        "sourcePosition": {
          "x": 131.82591617999998,
          "y": 43.18008128,
          "z": 0.8,
        },
        "sourceRotation": {
          "x": 0,
          "y": 0,
          "z": 90,
        },
      },
      "layerMismatchCount": 27,
      "linkedModelCount": 27,
      "maximumAbsolutePositionErrorByAxisMm": {
        "x": 60.568799,
        "y": 54.929089,
        "z": 0,
      },
      "maximumAbsoluteRotationErrorByAxisDegrees": {
        "x": 0,
        "y": 0,
        "z": 0,
      },
      "positionAxisMismatchCounts": {
        "x": 27,
        "y": 27,
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

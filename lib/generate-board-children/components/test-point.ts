import type { SourceSimpleTestPoint } from "circuit-json"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class TestPoint extends CircuitJsonDeserializer<SourceSimpleTestPoint> {
  static readonly ftype = "simple_test_point"

  static getPropsFromElement(element: SourceSimpleTestPoint) {
    return {
      footprintVariant: element.footprint_variant,
      padShape: element.pad_shape,
      padDiameter: element.pad_diameter,
      holeDiameter: element.hole_diameter,
      width: element.width,
      height: element.height,
    }
  }
}

CircuitJsonDeserializer.register(TestPoint)

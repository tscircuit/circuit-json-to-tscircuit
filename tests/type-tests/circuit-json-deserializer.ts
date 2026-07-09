import type { SourceSimpleBattery, SourceSimpleResistor } from "circuit-json"
import { CircuitJsonDeserializer } from "../../lib/generate-board-children/circuit-json-deserializer"

class WrongFtype extends CircuitJsonDeserializer<SourceSimpleBattery> {
  static readonly ftype = "simple_resistor"

  static getPropsFromElement(_element: SourceSimpleBattery) {
    return {}
  }
}

class WrongElement extends CircuitJsonDeserializer<SourceSimpleBattery> {
  static readonly ftype = "simple_battery"

  static getPropsFromElement(_element: SourceSimpleResistor) {
    return {}
  }
}

const assertInvalidRegistrations = () => {
  // @ts-expect-error ftype must match the deserializer's element type
  CircuitJsonDeserializer.register(WrongFtype)
  // @ts-expect-error getPropsFromElement must accept the deserializer's element type
  CircuitJsonDeserializer.register(WrongElement)
}

void assertInvalidRegistrations

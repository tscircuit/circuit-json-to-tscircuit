import { resistorProps } from "@tscircuit/props"
import { CircuitJsonDeserializer } from "../circuit-json-deserializer"

export class Resistor extends CircuitJsonDeserializer {
  static ftype = "simple_resistor" as const
  static tsxElementName = "resistor"
  static propsSchema = resistorProps
}

CircuitJsonDeserializer.register(Resistor)

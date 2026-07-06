import { resistorProps } from "@tscircuit/props"
import { CircuitJsonDeserializer } from "../base-classes/circuit-json-deserializer"

export class Resistor extends CircuitJsonDeserializer {
  static ftype = "simple_resistor"
  static propsSchema = resistorProps
}

CircuitJsonDeserializer.register(Resistor)

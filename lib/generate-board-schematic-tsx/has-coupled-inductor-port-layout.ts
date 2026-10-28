import type { SchematicPort, SourcePort } from "circuit-json"
import { getSchematicPortBySourcePinNumber } from "./get-schematic-port-by-source-pin-number"

const areOppositeSides = (
  firstSide: SchematicPort["side_of_component"],
  secondSide: SchematicPort["side_of_component"],
): boolean =>
  (firstSide === "top" && secondSide === "bottom") ||
  (firstSide === "bottom" && secondSide === "top") ||
  (firstSide === "left" && secondSide === "right") ||
  (firstSide === "right" && secondSide === "left")

export const hasCoupledInductorPortLayout = ({
  sourcePorts,
  schematicPorts,
}: {
  sourcePorts: SourcePort[]
  schematicPorts: SchematicPort[]
}): boolean => {
  const numberedSchematicPorts = ["1", "2", "3", "4"].map((sourcePinNumber) =>
    getSchematicPortBySourcePinNumber({
      sourcePinNumber,
      sourcePorts,
      schematicPorts,
    }),
  )
  const [pin1, pin2, pin3, pin4] = numberedSchematicPorts
  if (!pin1 || !pin2 || !pin3 || !pin4) return false
  return (
    pin1.side_of_component === pin3.side_of_component &&
    pin2.side_of_component === pin4.side_of_component &&
    areOppositeSides(pin1.side_of_component, pin2.side_of_component)
  )
}

import type { SchematicComponent, SchematicPort } from "circuit-json"
import type { SchSymbol } from "schematic-symbols"
import { compose, scale, translate } from "transformation-matrix"

export const getSymbolToSchematicTransform = ({
  symbol,
  schematic_component,
  schematicPorts,
}: {
  symbol: SchSymbol
  schematic_component: SchematicComponent
  schematicPorts: SchematicPort[]
}) => {
  // The named symbol already encodes orientation. Match ports by direction
  // rather than pin number, since imported libraries can number pins differently.
  const matches = symbol.ports
    .map((symbolPort) => {
      const symbolAngle = Math.atan2(
        symbolPort.y - symbol.center.y,
        symbolPort.x - symbol.center.x,
      )
      const schematicPort = schematicPorts.find((port) => {
        const portAngle = Math.atan2(
          port.center.y - schematic_component.center.y,
          port.center.x - schematic_component.center.x,
        )
        return (
          Math.abs(
            Math.atan2(
              Math.sin(portAngle - symbolAngle),
              Math.cos(portAngle - symbolAngle),
            ),
          ) <
          Math.PI / 4
        )
      })
      return { symbolPort, schematicPort }
    })
    .filter((match) => match.schematicPort)
  const first = matches[0]
  const second = matches[1]
  if (first?.schematicPort) {
    const symbolOrigin = second?.symbolPort ?? symbol.center
    const schematicOrigin =
      second?.schematicPort?.center ?? schematic_component.center
    const symbolDistance = Math.hypot(
      first.symbolPort.x - symbolOrigin.x,
      first.symbolPort.y - symbolOrigin.y,
    )
    const schematicDistance = Math.hypot(
      first.schematicPort.center.x - schematicOrigin.x,
      first.schematicPort.center.y - schematicOrigin.y,
    )
    if (symbolDistance > 0) {
      return compose(
        translate(schematicOrigin.x, schematicOrigin.y),
        scale(schematicDistance / symbolDistance),
        translate(-symbolOrigin.x, -symbolOrigin.y),
      )
    }
  }
  return compose(
    translate(schematic_component.center.x, schematic_component.center.y),
    scale(
      schematic_component.size.width / symbol.size.width,
      schematic_component.size.height / symbol.size.height,
    ),
    translate(-symbol.center.x, -symbol.center.y),
  )
}

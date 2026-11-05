import type {
  SchematicComponent,
  SchematicPort,
  SchematicText,
} from "circuit-json"

export const isPinDesignatorForPort = ({
  schematicText,
  schematicPort,
  schematicComponent,
  pinDesignator,
}: {
  schematicText: SchematicText
  schematicPort: SchematicPort
  schematicComponent: SchematicComponent
  pinDesignator: string
}): boolean => {
  if (schematicText.text !== pinDesignator) return false
  const portToCenter = {
    x: schematicComponent.center.x - schematicPort.center.x,
    y: schematicComponent.center.y - schematicPort.center.y,
  }
  const portToText = {
    x: schematicText.position.x - schematicPort.center.x,
    y: schematicText.position.y - schematicPort.center.y,
  }
  const portDistance = Math.hypot(portToCenter.x, portToCenter.y)
  const textDistance = Math.hypot(portToText.x, portToText.y)
  const pointsTowardComponent =
    portToCenter.x * portToText.x + portToCenter.y * portToText.y >= 0
  return (
    pointsTowardComponent && textDistance <= Math.min(0.3, portDistance * 0.6)
  )
}

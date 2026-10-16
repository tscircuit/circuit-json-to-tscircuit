import type { SchematicComponent, SchematicText } from "circuit-json"

const DEGREES_TO_RADIANS = Math.PI / 180

const distanceFromComponentCenter = ({
  schematicText,
  schematicComponent,
}: {
  schematicText: SchematicText
  schematicComponent: SchematicComponent
}): number =>
  Math.hypot(
    schematicText.position.x - schematicComponent.center.x,
    schematicText.position.y - schematicComponent.center.y,
  )

export const getNearestSchematicText = ({
  schematicTexts,
  schematicComponent,
}: {
  schematicTexts: SchematicText[]
  schematicComponent: SchematicComponent
}): SchematicText | undefined =>
  schematicTexts.toSorted(
    (firstText, secondText) =>
      distanceFromComponentCenter({
        schematicText: firstText,
        schematicComponent,
      }) -
      distanceFromComponentCenter({
        schematicText: secondText,
        schematicComponent,
      }),
  )[0]

export const getDistanceFromSchematicTextAxis = ({
  schematicText,
  schematicComponent,
}: {
  schematicText: SchematicText
  schematicComponent: SchematicComponent
}): number => {
  const rotationRadians = schematicText.rotation * DEGREES_TO_RADIANS
  const deltaX = schematicComponent.center.x - schematicText.position.x
  const deltaY = schematicComponent.center.y - schematicText.position.y
  return Math.abs(
    -deltaX * Math.sin(rotationRadians) + deltaY * Math.cos(rotationRadians),
  )
}

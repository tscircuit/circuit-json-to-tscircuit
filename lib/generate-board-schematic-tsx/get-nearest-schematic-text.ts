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

const getSchematicTextAxisDistances = ({
  schematicText,
  schematicComponent,
}: {
  schematicText: SchematicText
  schematicComponent: SchematicComponent
}): { alongAxis: number; acrossAxis: number } => {
  const rotationRadians = schematicText.rotation * DEGREES_TO_RADIANS
  const deltaX = schematicComponent.center.x - schematicText.position.x
  const deltaY = schematicComponent.center.y - schematicText.position.y
  return {
    alongAxis:
      deltaX * Math.cos(rotationRadians) + deltaY * Math.sin(rotationRadians),
    acrossAxis: Math.abs(
      -deltaX * Math.sin(rotationRadians) + deltaY * Math.cos(rotationRadians),
    ),
  }
}

const getSchematicTextAxisRange = ({
  schematicText,
  maximumDistance,
}: {
  schematicText: SchematicText
  maximumDistance: number
}): { minimum: number; maximum: number } => {
  const maximumTextAdvance =
    Array.from(schematicText.text).length * schematicText.font_size
  if (schematicText.anchor.includes("left")) {
    return {
      minimum: -maximumDistance,
      maximum: maximumTextAdvance + maximumDistance,
    }
  }
  if (schematicText.anchor.includes("right")) {
    return {
      minimum: -maximumTextAdvance - maximumDistance,
      maximum: maximumDistance,
    }
  }
  return {
    minimum: -maximumTextAdvance / 2 - maximumDistance,
    maximum: maximumTextAdvance / 2 + maximumDistance,
  }
}

export const isSchematicTextWithinComponentLabelRange = ({
  schematicText,
  schematicComponent,
  maximumDistance,
}: {
  schematicText: SchematicText
  schematicComponent: SchematicComponent
  maximumDistance: number
}): boolean => {
  const distance = getSchematicTextAxisDistances({
    schematicText,
    schematicComponent,
  })
  const textAxisRange = getSchematicTextAxisRange({
    schematicText,
    maximumDistance,
  })
  return (
    distance.alongAxis >= textAxisRange.minimum &&
    distance.alongAxis <= textAxisRange.maximum &&
    distance.acrossAxis <= maximumDistance
  )
}

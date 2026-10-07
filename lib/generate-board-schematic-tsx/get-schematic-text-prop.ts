import type { SchematicTextPart } from "circuit-json"

export const getSchematicTextProp = ({
  text,
  textParts,
}: {
  text: string
  textParts?: SchematicTextPart[]
}) => {
  if (
    !textParts?.length ||
    textParts.some((textPart) => textPart.text.length === 0) ||
    textParts.map((textPart) => textPart.text).join("") !== text
  ) {
    return text
  }

  return textParts.map((textPart) => ({
    text: textPart.text,
    ...(textPart.is_overlined ? { overline: true } : {}),
  }))
}

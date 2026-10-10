import type { SchematicPrimitive } from "./get-schematic-primitives-in-render-order"

const COMPONENT_OUTLINE_COLOR = "#840000"
const COMPONENT_BODY_COLOR = "#ffffc2"
const COMPONENT_LOCAL_LABEL_COLOR = "#0f0f0f"
const COMPONENT_REFERENCE_COLOR = "#006464"
const COMPONENT_PIN_NUMBER_COLOR = "#a90000"

type SchematicPrimitivePaint = {
  color?: string
  strokeColor?: string
  fillColor?: string
}

type FillableSchematicPrimitiveType =
  | "schematic_path"
  | "schematic_rect"
  | "schematic_circle"

const normalizeCssColorSyntax = (color: string | undefined): string =>
  color?.toLowerCase().replace(/\s+/g, "") ?? ""

const isWhiteColor = (color: string | undefined): boolean =>
  [
    "#fff",
    "#ffffff",
    "white",
    "rgb(255,255,255)",
    "rgba(255,255,255,1)",
  ].includes(normalizeCssColorSyntax(color))

const getCanonicalComponentTextColor = (
  sourceTextColor: string | undefined,
): string => {
  switch (normalizeCssColorSyntax(sourceTextColor)) {
    case "#006464":
    case "rgb(0,100,100)":
      return COMPONENT_REFERENCE_COLOR
    case "#a90000":
    case "rgb(169,0,0)":
      return COMPONENT_PIN_NUMBER_COLOR
    default:
      return COMPONENT_LOCAL_LABEL_COLOR
  }
}

const getCanonicalComponentFillColor = ({
  primitiveType,
  sourceFillColor,
  sourceStrokeColor,
  isFilled,
}: {
  primitiveType: FillableSchematicPrimitiveType
  sourceFillColor: string | undefined
  sourceStrokeColor: string | undefined
  isFilled: boolean | undefined
}): string | undefined => {
  if (!isFilled) return undefined
  const normalizedFillColor = normalizeCssColorSyntax(sourceFillColor)
  if (normalizedFillColor === "none" || normalizedFillColor === "transparent") {
    return sourceFillColor
  }
  if (primitiveType === "schematic_circle" && isWhiteColor(sourceFillColor)) {
    return sourceFillColor
  }
  if (
    !sourceFillColor ||
    normalizedFillColor === normalizeCssColorSyntax(sourceStrokeColor)
  ) {
    return COMPONENT_OUTLINE_COLOR
  }
  return COMPONENT_BODY_COLOR
}

export const getSchematicPrimitivePaint = (
  primitive: SchematicPrimitive,
): SchematicPrimitivePaint => {
  const isSymbolArtwork =
    ("schematic_component_id" in primitive &&
      Boolean(primitive.schematic_component_id)) ||
    ("schematic_symbol_id" in primitive &&
      Boolean(primitive.schematic_symbol_id))
  if (primitive.type === "schematic_text") {
    return {
      color: isSymbolArtwork
        ? getCanonicalComponentTextColor(primitive.color)
        : primitive.color,
    }
  }
  if (primitive.type === "schematic_path") {
    return {
      strokeColor: isSymbolArtwork
        ? COMPONENT_OUTLINE_COLOR
        : primitive.stroke_color,
      fillColor: isSymbolArtwork
        ? getCanonicalComponentFillColor({
            primitiveType: primitive.type,
            sourceFillColor: primitive.fill_color,
            sourceStrokeColor: primitive.stroke_color,
            isFilled: primitive.is_filled,
          })
        : primitive.fill_color,
    }
  }
  if (primitive.type === "schematic_box") return {}
  return {
    color: isSymbolArtwork ? COMPONENT_OUTLINE_COLOR : primitive.color,
    fillColor:
      primitive.type === "schematic_rect" ||
      primitive.type === "schematic_circle"
        ? isSymbolArtwork
          ? getCanonicalComponentFillColor({
              primitiveType: primitive.type,
              sourceFillColor: primitive.fill_color,
              sourceStrokeColor: primitive.color,
              isFilled: primitive.is_filled,
            })
          : primitive.fill_color
        : undefined,
  }
}

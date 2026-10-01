import { convertRect } from "./convert-rect"
import { generateSymbolElements } from "../generate-symbol-tsx"
import type { SchematicElementConverter } from "./converter-types"

export const convertPrimitives: SchematicElementConverter = (circuitJson) => [
  ...generateSymbolElements(
    circuitJson.filter(
      (element) =>
        element.type !== "schematic_text" &&
        element.type !== "schematic_path" &&
        element.type !== "schematic_rect",
    ),
  ),
  ...circuitJson.flatMap((element) => {
    if (element.type === "schematic_text") {
      return [
        `<schematictext text={${JSON.stringify(element.text)}} schX={${element.position.x}} schY={${element.position.y}} anchor={${JSON.stringify(element.anchor)}} fontSize={${element.font_size}} color={${JSON.stringify(element.color)}} schRotation={${-(element.rotation ?? 0)}} />`,
      ]
    }
    if (element.type === "schematic_rect") {
      return [
        convertRect({
          center: element.center,
          width: element.width,
          height: element.height,
          ccwRotationDegrees: element.rotation ?? 0,
          strokeWidth: element.stroke_width ?? 0.02,
          color: element.color ?? "#840000",
          fillColor: element.fill_color ?? element.color ?? "#840000",
          isFilled: element.is_filled ?? false,
        }),
      ]
    }
    if (element.type === "schematic_path") {
      return [
        `<schematicpath points={${JSON.stringify(element.points)}} strokeWidth={${element.stroke_width ?? 0.02}} strokeColor={${JSON.stringify(element.stroke_color ?? "#840000")}} fillColor={${JSON.stringify(element.fill_color ?? "none")}} isFilled={${element.is_filled ?? false}} ${element.is_dashed ? `dashLength={${element.dash_length ?? 0.1}} dashGap={${element.dash_gap ?? 0.1}}` : ""} />`,
      ]
    }
    return []
  }),
]

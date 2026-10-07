import type { SchematicElementConverter } from "./converter-types"
import { formatElement } from "./format-attributes"

export const convertSchematicGraphics: SchematicElementConverter = (
  circuitJson,
) =>
  circuitJson.flatMap((element) => {
    if (element.type !== "schematic_graphic") return []

    return [
      formatElement("schematicgraphic", {
        imageUrl: element.asset?.url,
        svgContent: element.svg_content,
        width: element.width,
        height: element.height,
      }),
    ]
  })

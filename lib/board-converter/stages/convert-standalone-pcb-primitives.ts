import { generateFootprintTsx } from "../../generate-footprint-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

export const convertStandalonePcbPrimitives: BoardConverterStage = ({
  circuitJson,
  pcbBoard,
  boardChildren,
}) => {
  const existingPcbComponentIds = new Set<string>(
    circuitJson.flatMap((element) =>
      element.type === "pcb_component" ? [element.pcb_component_id] : [],
    ),
  )
  const standaloneElements = circuitJson.filter(
    (element) =>
      !("pcb_component_id" in element) ||
      !element.pcb_component_id ||
      !existingPcbComponentIds.has(element.pcb_component_id),
  )
  const footprintTsx = generateFootprintTsx(standaloneElements)

  if (!footprintTsx) return

  const footprintContainerProps = ["noSchematicRepresentation"]
  if (pcbBoard.center.x !== 0) {
    footprintContainerProps.push(`pcbX={${-pcbBoard.center.x}}`)
  }
  if (pcbBoard.center.y !== 0) {
    footprintContainerProps.push(`pcbY={${-pcbBoard.center.y}}`)
  }

  boardChildren.push(
    `<chip${footprintContainerProps.length > 0 ? ` ${footprintContainerProps.join(" ")}` : ""} footprint={${footprintTsx}} />`,
  )
}

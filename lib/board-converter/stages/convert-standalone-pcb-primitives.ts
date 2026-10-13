import type { PcbComponent } from "circuit-json"
import { generateFootprintTsx } from "../../generate-footprint-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"

type PcbComponentId = PcbComponent["pcb_component_id"]

export const convertStandalonePcbPrimitives: BoardConverterStage = ({
  circuitJson,
  footprintConversionContext,
  pcbBoard,
  boardChildren,
}) => {
  const existingPcbComponentIds = new Set<PcbComponentId>(
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
  const footprintTsx = generateFootprintTsx(
    standaloneElements,
    footprintConversionContext,
  )

  if (!footprintTsx) return

  const footprintContainerProps = [
    `name="${footprintConversionContext.pcbChipName}"`,
    "noSchematicRepresentation",
    "obstructsWithinBounds={false}",
  ]
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

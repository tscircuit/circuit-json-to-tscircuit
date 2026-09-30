import { transformPCBElements } from "@tscircuit/circuit-json-util"
import type {
  AnyCircuitElement,
  PcbComponent,
  PcbCopperText,
  PcbSilkscreenText,
} from "circuit-json"
import { compose, inverse, rotateDEG, translate } from "transformation-matrix"

const restoreAbsoluteTextRotations = ({
  absoluteComponentElements,
  localComponentElements,
}: {
  absoluteComponentElements: AnyCircuitElement[]
  localComponentElements: AnyCircuitElement[]
}) => {
  for (const localElement of localComponentElements) {
    if (localElement.type === "pcb_silkscreen_text") {
      const absoluteElement = absoluteComponentElements.find(
        (element): element is PcbSilkscreenText =>
          element.type === "pcb_silkscreen_text" &&
          element.pcb_silkscreen_text_id ===
            localElement.pcb_silkscreen_text_id,
      )

      if (absoluteElement) {
        localElement.ccw_rotation = absoluteElement.ccw_rotation
      }
    }

    if (localElement.type === "pcb_copper_text") {
      const absoluteElement = absoluteComponentElements.find(
        (element): element is PcbCopperText =>
          element.type === "pcb_copper_text" &&
          element.pcb_copper_text_id === localElement.pcb_copper_text_id,
      )

      if (absoluteElement) {
        localElement.ccw_rotation = absoluteElement.ccw_rotation
      }
    }
  }
}

export const localizePcbComponentElements = ({
  circuitJson,
  pcbComponent,
}: {
  circuitJson: AnyCircuitElement[]
  pcbComponent: PcbComponent
}): AnyCircuitElement[] => {
  const absoluteComponentElements = circuitJson.filter(
    (element) =>
      "pcb_component_id" in element &&
      element.pcb_component_id === pcbComponent.pcb_component_id,
  )
  const localComponentElements = structuredClone(absoluteComponentElements)
  const absoluteToComponentLocalTransform = inverse(
    compose(
      translate(pcbComponent.center.x, pcbComponent.center.y),
      rotateDEG(pcbComponent.rotation),
    ),
  )

  transformPCBElements(
    localComponentElements,
    absoluteToComponentLocalTransform,
  )

  // Core treats these text rotations as board-absolute so labels remain
  // readable when their containing footprint rotates. Only their positions
  // should be converted into component-local coordinates.
  restoreAbsoluteTextRotations({
    absoluteComponentElements,
    localComponentElements,
  })

  return localComponentElements
}

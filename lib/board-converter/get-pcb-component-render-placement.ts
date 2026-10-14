import { getBoundsOfPcbElements } from "@tscircuit/circuit-json-util"
import type { AnyCircuitElement, PcbBoard, PcbComponent } from "circuit-json"
import { applyToPoint, inverse, translate } from "transformation-matrix"

type PhysicalPcbElementType =
  | "pcb_copper_text"
  | "pcb_cutout"
  | "pcb_hole"
  | "pcb_keepout"
  | "pcb_plated_hole"
  | "pcb_smtpad"
  | "pcb_trace"
  | "pcb_via"

const physicalPcbElementTypes = new Set<PhysicalPcbElementType>([
  "pcb_copper_text",
  "pcb_cutout",
  "pcb_hole",
  "pcb_keepout",
  "pcb_plated_hole",
  "pcb_smtpad",
  "pcb_trace",
  "pcb_via",
])

const isPhysicalPcbElement = (
  element: AnyCircuitElement,
): element is AnyCircuitElement & { type: PhysicalPcbElementType } =>
  physicalPcbElementTypes.has(element.type as PhysicalPcbElementType)

export interface PcbComponentRenderPlacement {
  cadModelParentCenter: { x: number; y: number }
  componentPosition: { x: number; y: number }
}

export const getPcbComponentRenderPlacement = ({
  circuitJson,
  pcbBoard,
  pcbComponent,
}: {
  circuitJson: AnyCircuitElement[]
  pcbBoard: PcbBoard
  pcbComponent: PcbComponent
}): PcbComponentRenderPlacement => {
  const componentPosition = applyToPoint(
    inverse(translate(pcbBoard.center.x, pcbBoard.center.y)),
    pcbComponent.center,
  )
  const physicalElements = circuitJson.filter(
    (element) =>
      isPhysicalPcbElement(element) &&
      "pcb_component_id" in element &&
      element.pcb_component_id === pcbComponent.pcb_component_id,
  )
  const physicalBounds = getBoundsOfPcbElements(physicalElements)
  const physicalWidth = physicalBounds.maxX - physicalBounds.minX
  const physicalHeight = physicalBounds.maxY - physicalBounds.minY

  if (
    Number.isFinite(physicalWidth) &&
    Number.isFinite(physicalHeight) &&
    physicalWidth > 0 &&
    physicalHeight > 0
  ) {
    return {
      cadModelParentCenter: {
        x: (physicalBounds.minX + physicalBounds.maxX) / 2,
        y: (physicalBounds.minY + physicalBounds.maxY) / 2,
      },
      componentPosition,
    }
  }

  // Core retains the board-local chip position when there are no physical
  // footprint primitives, so use that position as the CAD model's parent.
  return {
    cadModelParentCenter: componentPosition,
    componentPosition,
  }
}

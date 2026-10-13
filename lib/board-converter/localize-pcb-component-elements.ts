import { transformPCBElements } from "@tscircuit/circuit-json-util"
import type { AnyCircuitElement, LayerRef, PcbComponent } from "circuit-json"
import {
  type Matrix,
  applyToPoint,
  compose,
  inverse,
  rotateDEG,
  translate,
} from "transformation-matrix"

type PcbSilkscreenGraphic = Extract<
  AnyCircuitElement,
  { type: "pcb_silkscreen_graphic" }
>

const FLOATING_POINT_NOISE_THRESHOLD = 1e-12

const normalizeFloatingPointNoise = (value: unknown): void => {
  if (Array.isArray(value)) {
    for (const item of value) normalizeFloatingPointNoise(item)
    return
  }
  if (typeof value !== "object" || value === null) return

  const record = value as Record<string, unknown>
  for (const [key, property] of Object.entries(record)) {
    if (
      typeof property === "number" &&
      Math.abs(property) < FLOATING_POINT_NOISE_THRESHOLD
    ) {
      record[key] = 0
    } else {
      normalizeFloatingPointNoise(property)
    }
  }
}

const transformSilkscreenGraphic = ({
  graphic,
  transform,
}: {
  graphic: PcbSilkscreenGraphic
  transform: Matrix
}): void => {
  if (graphic.shape !== "brep") return

  graphic.brep_shape.outer_ring.vertices =
    graphic.brep_shape.outer_ring.vertices.map((vertex) =>
      applyToPoint(transform, vertex),
    )
  graphic.brep_shape.inner_rings = graphic.brep_shape.inner_rings.map(
    (ring) => ({
      ...ring,
      vertices: ring.vertices.map((vertex) => applyToPoint(transform, vertex)),
    }),
  )
}

const normalizeDegrees = (degrees: number): number =>
  ((degrees % 360) + 360) % 360

const getOppositeOuterLayer = (layer: LayerRef): LayerRef => {
  if (layer === "top") return "bottom"
  if (layer === "bottom") return "top"
  return layer
}

const localizeBottomComponentLayers = (
  localComponentElements: AnyCircuitElement[],
): void => {
  for (const localElement of localComponentElements) {
    if (
      "layer" in localElement &&
      (localElement.layer === "top" || localElement.layer === "bottom")
    ) {
      localElement.layer = getOppositeOuterLayer(localElement.layer)
    }
    if ("layers" in localElement && Array.isArray(localElement.layers)) {
      localElement.layers = localElement.layers.map((layer) =>
        layer === "top" || layer === "bottom"
          ? getOppositeOuterLayer(layer)
          : layer,
      )
    }
  }
}

const localizeTextRotations = ({
  absoluteComponentElements,
  componentRotation,
  localComponentElements,
}: {
  absoluteComponentElements: AnyCircuitElement[]
  componentRotation: number
  localComponentElements: AnyCircuitElement[]
}): void => {
  for (const [elementIndex, localElement] of localComponentElements.entries()) {
    if (
      localElement.type !== "pcb_silkscreen_text" &&
      localElement.type !== "pcb_copper_text" &&
      localElement.type !== "pcb_fabrication_note_text"
    ) {
      continue
    }

    const absoluteElement = absoluteComponentElements[elementIndex]
    if (absoluteElement?.type !== localElement.type) continue

    const absoluteRotation = normalizeDegrees(absoluteElement.ccw_rotation ?? 0)
    if (localElement.type === "pcb_silkscreen_text") {
      // SilkscreenText treats a zero rotation as "inherit from parent". An
      // equivalent full turn keeps imported board-absolute text horizontal.
      localElement.ccw_rotation = absoluteRotation || 360
    } else if (localElement.type === "pcb_copper_text") {
      localElement.ccw_rotation = absoluteRotation
    } else {
      localElement.ccw_rotation = normalizeDegrees(
        absoluteRotation - componentRotation,
      )
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

  for (const localElement of localComponentElements) {
    if (localElement.type === "pcb_silkscreen_graphic") {
      transformSilkscreenGraphic({
        graphic: localElement,
        transform: absoluteToComponentLocalTransform,
      })
    }
  }

  localizeTextRotations({
    absoluteComponentElements,
    componentRotation: pcbComponent.rotation,
    localComponentElements,
  })
  if (pcbComponent.layer === "bottom") {
    localizeBottomComponentLayers(localComponentElements)
  }
  normalizeFloatingPointNoise(localComponentElements)

  return localComponentElements
}

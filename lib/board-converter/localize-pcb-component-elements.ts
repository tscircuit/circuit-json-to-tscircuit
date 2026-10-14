import { transformPCBElements } from "@tscircuit/circuit-json-util"
import type { AnyCircuitElement, LayerRef, PcbComponent } from "circuit-json"
import {
  type Matrix,
  applyToPoint,
  compose,
  decomposeTSR,
  flipY,
  inverse,
  rotateDEG,
  translate,
} from "transformation-matrix"

type PcbSilkscreenGraphic = Extract<
  AnyCircuitElement,
  { type: "pcb_silkscreen_graphic" }
>

const FLOATING_POINT_NOISE_THRESHOLD = 1e-12
const LOCAL_COORDINATE_DECIMAL_PLACES = 12

const normalizeFloatingPointNoise = (elementPropertyValue: unknown): void => {
  if (Array.isArray(elementPropertyValue)) {
    for (const item of elementPropertyValue) normalizeFloatingPointNoise(item)
    return
  }
  if (typeof elementPropertyValue !== "object" || elementPropertyValue === null)
    return

  const record = elementPropertyValue as Record<string, unknown>
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

const normalizeRoutableElementCoordinates = (
  localComponentElements: AnyCircuitElement[],
): void => {
  for (const element of localComponentElements) {
    if (element.type !== "pcb_smtpad" && element.type !== "pcb_plated_hole") {
      continue
    }
    if (!("x" in element) || !("y" in element)) continue
    element.x = Number(element.x.toFixed(LOCAL_COORDINATE_DECIMAL_PLACES))
    element.y = Number(element.y.toFixed(LOCAL_COORDINATE_DECIMAL_PLACES))
  }
}

const transformSilkscreenGraphic = ({
  absoluteToComponentLocalTransform,
  graphic,
}: {
  absoluteToComponentLocalTransform: Matrix
  graphic: PcbSilkscreenGraphic
}): void => {
  if (graphic.shape !== "brep") return

  graphic.brep_shape.outer_ring.vertices =
    graphic.brep_shape.outer_ring.vertices.map((vertex) =>
      applyToPoint(absoluteToComponentLocalTransform, vertex),
    )
  graphic.brep_shape.inner_rings = graphic.brep_shape.inner_rings.map(
    (ring) => ({
      ...ring,
      vertices: ring.vertices.map((vertex) =>
        applyToPoint(absoluteToComponentLocalTransform, vertex),
      ),
    }),
  )
}

const normalizeDegrees = (degrees: number): number =>
  ((degrees % 360) + 360) % 360

interface PcbPrimitiveRotations {
  ccw_rotation?: number
  hole_ccw_rotation?: number
  rect_ccw_rotation?: number
}

type PcbElementWithPrimitiveRotations = AnyCircuitElement &
  PcbPrimitiveRotations

const getTransformedCcwRotationDegrees = ({
  absoluteCcwRotationDegrees,
  absoluteToComponentLocalRotationTransform,
}: {
  absoluteCcwRotationDegrees: number
  absoluteToComponentLocalRotationTransform: Matrix
}): number => {
  const transformedRotation = decomposeTSR(
    compose(
      absoluteToComponentLocalRotationTransform,
      rotateDEG(absoluteCcwRotationDegrees),
    ),
  ).rotation.angle

  return normalizeDegrees((transformedRotation * 180) / Math.PI)
}

const localizePrimitiveRotations = ({
  absoluteComponentElements,
  absoluteToComponentLocalRotationTransform,
  localComponentElements,
}: {
  absoluteComponentElements: AnyCircuitElement[]
  absoluteToComponentLocalRotationTransform: Matrix
  localComponentElements: AnyCircuitElement[]
}): void => {
  const rotationPropertyNames = [
    "ccw_rotation",
    "hole_ccw_rotation",
    "rect_ccw_rotation",
  ] as const

  for (const [elementIndex, localElement] of localComponentElements.entries()) {
    if (
      localElement.type === "pcb_silkscreen_text" ||
      localElement.type === "pcb_copper_text" ||
      localElement.type === "pcb_fabrication_note_text"
    ) {
      continue
    }
    const absoluteElement = absoluteComponentElements[elementIndex]
    if (absoluteElement?.type !== localElement.type) continue

    const absoluteRotations =
      absoluteElement as PcbElementWithPrimitiveRotations
    const localRotations = localElement as PcbElementWithPrimitiveRotations
    for (const rotationPropertyName of rotationPropertyNames) {
      const absoluteCcwRotationDegrees = absoluteRotations[rotationPropertyName]
      if (typeof absoluteCcwRotationDegrees !== "number") continue
      localRotations[rotationPropertyName] = getTransformedCcwRotationDegrees({
        absoluteCcwRotationDegrees,
        absoluteToComponentLocalRotationTransform,
      })
    }
  }
}

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
  componentCcwRotationDegrees,
  localComponentElements,
}: {
  absoluteComponentElements: AnyCircuitElement[]
  componentCcwRotationDegrees: number
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
        absoluteRotation - componentCcwRotationDegrees,
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
  const componentLocalToAbsoluteTransform = compose(
    translate(pcbComponent.center.x, pcbComponent.center.y),
    rotateDEG(pcbComponent.rotation),
  )
  let absoluteToComponentLocalTransform = inverse(
    componentLocalToAbsoluteTransform,
  )
  if (pcbComponent.layer === "bottom") {
    absoluteToComponentLocalTransform = compose(
      flipY(),
      absoluteToComponentLocalTransform,
    )
  }

  transformPCBElements(
    localComponentElements,
    absoluteToComponentLocalTransform,
  )

  for (const localElement of localComponentElements) {
    if (localElement.type === "pcb_silkscreen_graphic") {
      transformSilkscreenGraphic({
        absoluteToComponentLocalTransform,
        graphic: localElement,
      })
    }
  }

  localizeTextRotations({
    absoluteComponentElements,
    componentCcwRotationDegrees: pcbComponent.rotation,
    localComponentElements,
  })
  localizePrimitiveRotations({
    absoluteComponentElements,
    absoluteToComponentLocalRotationTransform: inverse(
      componentLocalToAbsoluteTransform,
    ),
    localComponentElements,
  })
  if (pcbComponent.layer === "bottom") {
    localizeBottomComponentLayers(localComponentElements)
  }
  normalizeRoutableElementCoordinates(localComponentElements)
  normalizeFloatingPointNoise(localComponentElements)

  return localComponentElements
}

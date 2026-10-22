import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { applyToPoint, fromString, type Matrix } from "transformation-matrix"

interface PixelCropSize {
  width: number
  height: number
}

interface SchematicPoint {
  x: number
  y: number
}

const OUTPUT_WIDTH = 480
const COMPARISON_GAP = 24

const getViewportTransform = (schematicSvg: string): Matrix => {
  const matrixText = schematicSvg.match(
    /data-real-to-screen-transform="matrix\(([^)]+)\)"/u,
  )?.[1]
  if (!matrixText) throw new Error("Schematic SVG is missing its viewport")

  const realToScreenTransform = fromString(`matrix(${matrixText})`)
  if (
    Object.values(realToScreenTransform).some(
      (transformEntry) => !Number.isFinite(transformEntry),
    )
  ) {
    throw new Error("Schematic SVG has an invalid viewport matrix")
  }
  return realToScreenTransform
}

const cropSchematicSvg = ({
  schematicSvg,
  focusPoint,
  cropSize,
}: {
  schematicSvg: string
  focusPoint: SchematicPoint
  cropSize: PixelCropSize
}): string => {
  const pixelCenter = applyToPoint(
    getViewportTransform(schematicSvg),
    focusPoint,
  )
  const outerSvgEnd = schematicSvg.indexOf(">")
  const outerSvgClose = schematicSvg.lastIndexOf("</svg>")
  if (outerSvgEnd < 0 || outerSvgClose < 0) {
    throw new Error("Schematic renderer returned invalid SVG")
  }
  const innerSvg = schematicSvg.slice(outerSvgEnd + 1, outerSvgClose)
  const outputHeight = (OUTPUT_WIDTH * cropSize.height) / cropSize.width

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${OUTPUT_WIDTH}" height="${outputHeight}" viewBox="${pixelCenter.x - cropSize.width / 2} ${pixelCenter.y - cropSize.height / 2} ${cropSize.width} ${cropSize.height}">
${innerSvg}
</svg>`
}

export const createZoomedSchematicComparison = ({
  sourceCircuitJson,
  renderedCircuitJson,
  focusPoint,
  cropSize,
  description,
}: {
  sourceCircuitJson: CircuitJson
  renderedCircuitJson: CircuitJson
  focusPoint: SchematicPoint
  cropSize: PixelCropSize
  description: string
}): string => {
  const sourceSvg = convertCircuitJsonToSchematicSvg(sourceCircuitJson)
  const renderedSvg = convertCircuitJsonToSchematicSvg(renderedCircuitJson)

  const outputHeight = (OUTPUT_WIDTH * cropSize.height) / cropSize.width
  const sourceCrop = cropSchematicSvg({
    schematicSvg: sourceSvg,
    focusPoint,
    cropSize,
  })
  const renderedCrop = cropSchematicSvg({
    schematicSvg: renderedSvg,
    focusPoint,
    cropSize,
  })
  const comparisonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${OUTPUT_WIDTH * 2 + COMPARISON_GAP}" height="${outputHeight}" viewBox="0 0 ${OUTPUT_WIDTH * 2 + COMPARISON_GAP} ${outputHeight}" aria-label="${description}: zoomed source integration on left, zoomed generated integration on right" role="img">
  <g transform="translate(0, 0)">${sourceCrop}</g>
  <g transform="translate(${OUTPUT_WIDTH + COMPARISON_GAP}, 0)">${renderedCrop}</g>
</svg>`

  return comparisonSvg.replace(/[\t ]+$/gm, "")
}

export const getSchematicComponentCenter = ({
  circuitJson,
  componentName,
}: {
  circuitJson: CircuitJson
  componentName: string
}): SchematicPoint => {
  const sourceComponent = circuitJson.find(
    (element) =>
      element.type === "source_component" &&
      element.name === componentName &&
      circuitJson.some(
        (candidate) =>
          candidate.type === "schematic_component" &&
          candidate.source_component_id === element.source_component_id,
      ),
  )
  if (sourceComponent?.type !== "source_component") {
    throw new Error(`Missing source component ${componentName}`)
  }
  const schematicComponent = circuitJson.find(
    (element) =>
      element.type === "schematic_component" &&
      element.source_component_id === sourceComponent.source_component_id,
  )
  if (schematicComponent?.type !== "schematic_component") {
    throw new Error(`Missing schematic component ${componentName}`)
  }
  return schematicComponent.center
}

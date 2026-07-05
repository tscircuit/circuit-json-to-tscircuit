import { su } from "@tscircuit/soup-util"
import type { FootprintElementConverter } from "./converter-types"
import { formatMm } from "./helpers"

const normalizeRotation = (rotation: number): number =>
  ((rotation % 360) + 360) % 360

const roundCoord = (value: number): number => Math.round(value * 1e4) / 1e4

const getRotatedRectCorners = (
  center: { x: number; y: number },
  width: number,
  height: number,
  rotationDegrees: number,
): Array<{ x: number; y: number }> => {
  const radians = (rotationDegrees * Math.PI) / 180
  const cos = Math.cos(radians)
  const sin = Math.sin(radians)
  const cornerOffsets = [
    { x: -width / 2, y: -height / 2 },
    { x: width / 2, y: -height / 2 },
    { x: width / 2, y: height / 2 },
    { x: -width / 2, y: height / 2 },
  ]
  return cornerOffsets.map((offset) => ({
    x: roundCoord(center.x + offset.x * cos - offset.y * sin),
    y: roundCoord(center.y + offset.x * sin + offset.y * cos),
  }))
}

export const convertCutouts: FootprintElementConverter = (circuitJson) => {
  const pcbCutouts = su(circuitJson).pcb_cutout.list()
  const elementStrings: string[] = []

  for (const cutout of pcbCutouts) {
    if (cutout.shape === "rect") {
      const rotation = normalizeRotation(cutout.rotation ?? 0)

      if (rotation % 90 !== 0) {
        // <cutout> has no rotation prop, so emit the rotated rect as a polygon
        const points = getRotatedRectCorners(
          cutout.center,
          cutout.width,
          cutout.height,
          rotation,
        )
        elementStrings.push(
          `<cutout shape="polygon" points={${JSON.stringify(points)}} />`,
        )
        continue
      }

      const isSideways = rotation === 90 || rotation === 270
      const width = isSideways ? cutout.height : cutout.width
      const height = isSideways ? cutout.width : cutout.height

      elementStrings.push(
        `<cutout shape="rect" pcbX="${formatMm(cutout.center.x)}" pcbY="${formatMm(cutout.center.y)}" width="${formatMm(width)}" height="${formatMm(height)}" />`,
      )
    } else if (cutout.shape === "circle") {
      elementStrings.push(
        `<cutout shape="circle" pcbX="${formatMm(cutout.center.x)}" pcbY="${formatMm(cutout.center.y)}" radius="${formatMm(cutout.radius)}" />`,
      )
    } else if (cutout.shape === "polygon") {
      elementStrings.push(
        `<cutout shape="polygon" points={${JSON.stringify(cutout.points)}} />`,
      )
    } else {
      console.warn(`Unhandled pcb_cutout shape: ${(cutout as any).shape}`)
    }
  }

  return elementStrings
}

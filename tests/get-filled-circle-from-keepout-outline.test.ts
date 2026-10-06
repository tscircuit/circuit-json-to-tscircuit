import { expect, test } from "bun:test"
import type { PcbKeepoutOutline } from "circuit-json"
import { getFilledCircleFromKeepoutOutline } from "../lib/generate-footprint-tsx/get-filled-circle-from-keepout-outline"

const createCircularKeepout = ({
  closeOutline,
  sweepDegrees,
}: {
  closeOutline: boolean
  sweepDegrees: number
}): PcbKeepoutOutline => {
  const segmentCount = 48
  const outline = Array.from({ length: segmentCount + 1 }, (_, pointIndex) => {
    const angle = ((pointIndex / segmentCount) * sweepDegrees * Math.PI) / 180
    return { x: Math.cos(angle), y: Math.sin(angle) }
  })
  if (closeOutline && sweepDegrees < 360) outline.push(outline[0]!)

  return {
    type: "pcb_keepout",
    pcb_keepout_id: "circular_outline_keepout",
    shape: "outline",
    outline,
    stroke_width: 2,
    layers: ["top"],
  }
}

test("only complete closed circular outlines become filled disks", () => {
  const fullCircle = createCircularKeepout({
    closeOutline: true,
    sweepDegrees: 360,
  })
  const openPartialArc = createCircularKeepout({
    closeOutline: false,
    sweepDegrees: 270,
  })
  const closedPartialArc = createCircularKeepout({
    closeOutline: true,
    sweepDegrees: 270,
  })

  expect(getFilledCircleFromKeepoutOutline(fullCircle)).toEqual({
    center: { x: 0, y: 0 },
    radius: 2,
  })
  expect(getFilledCircleFromKeepoutOutline(openPartialArc)).toBeNull()
  expect(getFilledCircleFromKeepoutOutline(closedPartialArc)).toBeNull()
})

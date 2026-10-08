import type { PcbSmtPad, PcbSolderPaste } from "circuit-json"

const nearlyEqual = (a: number, b: number) => Math.abs(a - b) < 1e-6

// Recover a scalar margin only when it reproduces one centered, linked aperture.
export function getSolderPasteMargin(
  pad: PcbSmtPad,
  pastes: PcbSolderPaste[],
): number | undefined {
  const paste = pastes[0]
  if (pastes.length !== 1 || !paste || !("x" in pad)) return undefined
  if (
    paste.layer !== pad.layer ||
    !nearlyEqual(paste.x, pad.x) ||
    !nearlyEqual(paste.y, pad.y)
  )
    return undefined
  if (pad.shape === "circle" && paste.shape === "circle") {
    return paste.radius - pad.radius
  }
  if (
    (pad.shape === "rect" && paste.shape === "rect") ||
    (pad.shape === "rotated_rect" && paste.shape === "rotated_rect")
  ) {
    if (pad.shape === "rotated_rect" && paste.shape === "rotated_rect") {
      const ccwRotationDifferenceDegrees =
        (((paste.ccw_rotation - pad.ccw_rotation) % 360) + 360) % 360
      if (
        !nearlyEqual(ccwRotationDifferenceDegrees, 0) &&
        !nearlyEqual(ccwRotationDifferenceDegrees, 360)
      )
        return undefined
    }
    const margin = (paste.width - pad.width) / 2
    if (nearlyEqual(margin, (paste.height - pad.height) / 2)) return margin
  }
  return undefined
}

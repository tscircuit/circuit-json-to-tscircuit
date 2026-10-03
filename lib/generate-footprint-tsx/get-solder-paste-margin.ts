import type { PcbSmtPad, PcbSolderPaste } from "circuit-json"

const nearlyEqual = (a: number, b: number) => Math.abs(a - b) < 1e-6

/** Recover the scalar margin only when it reproduces the linked aperture. */
export const getSolderPasteMargin = (
  pad: PcbSmtPad,
  pastes: PcbSolderPaste[],
): number | undefined => {
  if (pastes.length !== 1 || !("x" in pad)) return undefined
  const paste = pastes[0]
  if (
    paste.layer !== pad.layer ||
    !nearlyEqual(paste.x, pad.x) ||
    !nearlyEqual(paste.y, pad.y)
  )
    return undefined

  if (pad.shape === "circle" && paste.shape === "circle") {
    if (nearlyEqual(paste.radius, pad.radius * 0.7)) return undefined
    return paste.radius - pad.radius
  }

  if (
    (pad.shape === "rect" && paste.shape === "rect") ||
    (pad.shape === "rotated_rect" && paste.shape === "rotated_rect")
  ) {
    // The runtime already emits a 70% aperture when the prop is omitted.
    if (
      nearlyEqual(paste.width, pad.width * 0.7) &&
      nearlyEqual(paste.height, pad.height * 0.7)
    )
      return undefined
    if (
      pad.shape === "rotated_rect" &&
      paste.shape === "rotated_rect" &&
      !nearlyEqual(
        (((paste.ccw_rotation - pad.ccw_rotation) % 360) + 360) % 360,
        0,
      )
    )
      return undefined
    const margin = (paste.width - pad.width) / 2
    if (nearlyEqual(margin, (paste.height - pad.height) / 2)) return margin
  }
  return undefined
}

import type { PcbVia } from "circuit-json"

export function getViaTenting(
  via: PcbVia,
): "top_and_bottom_tented" | "top_tented" | "bottom_tented" | "exposed" {
  const legacyIsTented =
    "is_tented" in via && typeof via.is_tented === "boolean"
      ? via.is_tented
      : false
  const tentedOnTop = via.tented_on_top ?? legacyIsTented
  const tentedOnBottom = via.tented_on_bottom ?? legacyIsTented

  if (tentedOnTop && tentedOnBottom) return "top_and_bottom_tented"
  if (tentedOnTop) return "top_tented"
  if (tentedOnBottom) return "bottom_tented"
  return "exposed"
}

import type { SourceSimplePinHeader } from "circuit-json"

export const getPinHeaderAttributes = (component: SourceSimplePinHeader) => ({
  pinCount: component.pin_count,
  gender: component.gender,
})

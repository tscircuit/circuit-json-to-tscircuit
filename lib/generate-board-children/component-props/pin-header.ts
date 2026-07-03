import type { SourceSimplePinHeader } from "circuit-json"

export const getPinHeaderProps = (component: SourceSimplePinHeader) => ({
  pinCount: component.pin_count,
  gender: component.gender,
})

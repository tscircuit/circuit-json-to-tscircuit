import type { SourceSimpleMosfet } from "circuit-json"

export const getMosfetProps = (component: SourceSimpleMosfet) => ({
  channelType: component.channel_type,
  mosfetMode: component.mosfet_mode,
})

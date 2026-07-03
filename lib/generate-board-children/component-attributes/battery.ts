import type { SourceSimpleBattery } from "circuit-json"

export const getBatteryAttributes = (component: SourceSimpleBattery) => ({
  capacity: component.capacity,
})

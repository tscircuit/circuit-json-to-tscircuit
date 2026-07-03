import type { SourceSimpleBattery } from "circuit-json"

export const getBatteryProps = (component: SourceSimpleBattery) => ({
  capacity: component.capacity,
})

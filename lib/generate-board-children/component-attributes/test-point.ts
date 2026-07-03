import type { SourceSimpleTestPoint } from "circuit-json"

export const getTestPointAttributes = (component: SourceSimpleTestPoint) => ({
  footprintVariant: component.footprint_variant,
  padShape: component.pad_shape,
  padDiameter: component.pad_diameter,
  holeDiameter: component.hole_diameter,
  width: component.width,
  height: component.height,
})

import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"

export const generateSymbolTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const schematicArcs = su(circuitJson).schematic_arc.list()
  const schematicLines = su(circuitJson).schematic_line.list()

  const elementStrings: string[] = []

  for (const arc of schematicArcs) {
    const center = arc.center ?? { x: 0, y: 0 }
    const radius = arc.radius ?? 0
    const startAngle = arc.start_angle_degrees ?? 0
    const endAngle = arc.end_angle_degrees ?? 0
    const strokeWidth = arc.stroke_width ?? 0.05
    const color = arc.color ?? "black"
    const isDashed = arc.is_dashed ?? false
    const direction = arc.direction ?? "counterclockwise"

    elementStrings.push(
      `<schematicarc
  center={{ x: ${center.x}, y: ${center.y} }}
  radius={${radius}}
  startAngleDegrees={${startAngle}}
  endAngleDegrees={${endAngle}}
  strokeWidth={${strokeWidth}}
  color="${color}"
  isDashed={${isDashed}}
  direction="${direction}"
/>`,
    )
  }

  for (const line of schematicLines) {
    const x1 = line.x1 ?? 0
    const y1 = line.y1 ?? 0
    const x2 = line.x2 ?? 0
    const y2 = line.y2 ?? 0
    const strokeWidth = line.stroke_width ?? 0.05
    const color = line.color ?? "black"
    const isDashed = line.is_dashed ?? false

    elementStrings.push(
      `<schematicline x1={${x1}} y1={${y1}} x2={${x2}} y2={${y2}} strokeWidth={${strokeWidth}} color="${color}" isDashed={${isDashed}}/>`,
    )
  }

  if (elementStrings.length === 0) {
    return null
  }

  return `
<symbol>
  ${elementStrings.map((s) => s.split("\n").join("\n  ")).join("\n  ")}
</symbol>
  `.trim()
}

import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"

export const generateSymbolTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const schematicArcs = su(circuitJson).schematic_arc.list()
  const schematicLines = su(circuitJson).schematic_line.list()
  const schematicPaths = su(circuitJson).schematic_path.list()
  const schematicTexts = su(circuitJson).schematic_text.list()
  const schematicCircles = su(circuitJson).schematic_circle.list()
  const schematicBoxes = su(circuitJson).schematic_box.list()
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

  for (const box of schematicBoxes) {
    const x = box.x ?? box.x ?? 0
    const y = box.y ?? box.y ?? 0
    const width = box.width ?? 0
    const height = box.height ?? 0
    const isDashed = box.is_dashed ?? false

    elementStrings.push(
      `<schematicbox center={{ x: ${x}, y: ${y} }} width={${width}} height={${height}} isDashed={${isDashed}}/>`,
    )
  }

  for (const path of schematicPaths) {
    const points = path.points ?? []
    const fillColor = path.fill_color ?? "red"
    const isFilled = path.is_filled ?? false

    elementStrings.push(
      `<schematicpath points={${JSON.stringify(points)}} fillColor="${fillColor}" isFilled={${isFilled}}/>`,
    )
  }

  for (const text of schematicTexts) {
    const x = text.position?.x ?? 0
    const y = text.position?.y ?? 0
    const rawText = String(text.text ?? "")
    const escapedText = rawText.replace(/"/g, '\\"')
    const anchorAlignment = text.anchor ?? "center"
    const fontSize = text.font_size ?? 0.1
    const color = text.color ?? "black"
    const rotation = text.rotation ?? 0

    elementStrings.push(
      `<schematictext text="${escapedText}" x={${x}} y={${y}} anchorAlignment="${anchorAlignment}" fontSize={${fontSize}} color="${color}" rotation={${rotation}} />`,
    )
  }

  for (const circle of schematicCircles) {
    const x = circle.center?.x ?? 0
    const y = circle.center?.y ?? 0
    const radius = circle.radius ?? 0
    const strokeWidth = circle.stroke_width ?? 0.05
    const color = circle.color ?? "black"
    const isFilled = circle.is_filled ?? false
    const isDashed = circle.is_dashed ?? false

    elementStrings.push(
      `<schematiccircle center={{ x: ${x}, y: ${y} }} radius={${radius}} strokeWidth={${strokeWidth}} color="${color}" isFilled={${isFilled}} isDashed={${isDashed}} />`,
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

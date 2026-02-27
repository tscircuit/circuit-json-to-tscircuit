import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"

export const generateSymbolTsx = (
    circuitJson: AnyCircuitElement[],
): string | null => {
    const schematicArcs = su(circuitJson).schematic_arc?.list() ?? []
    const schematicBoxes = su(circuitJson).schematic_box?.list() ?? []
    const schematicLines = su(circuitJson).schematic_line?.list() ?? []
    const schematicPaths = su(circuitJson).schematic_path?.list() ?? []
    const schematicTexts = su(circuitJson).schematic_text?.list() ?? []

    const elementStrings: string[] = []

    for (const arc of schematicArcs) {
        const center = arc.center ?? { x: 0, y: 0 }
        const radius = arc.radius ?? 0
        const startAngle = arc.start_angle_degrees
        const endAngle = arc.end_angle_degrees
        const strokeWidth = arc.stroke_width ?? 0.05

        elementStrings.push(
            `<schematicarc
  center={{ x: ${center.x}, y: ${center.y} }}
  radius={${radius}}
  startAngleDegrees={${startAngle}}
  endAngleDegrees={${endAngle}}
  strokeWidth={${strokeWidth}}
/>`,
        )
    }

    for (const box of schematicBoxes) {
        const x = box.x ?? 0
        const y = box.y ?? 0
        const width = box.width ?? 0
        const height = box.height ?? 0

        elementStrings.push(
            `<schematicbox
  center={{ x: ${x}, y: ${y} }}
  width={${width}}
  height={${height}}
/>`,
        )
    }

    for (const line of schematicLines) {
        const x1 = line.x1 ?? 0
        const y1 = line.y1 ?? 0
        const x2 = line.x2 ?? 0
        const y2 = line.y2 ?? 0
        const strokeWidth = line.stroke_width ?? 0.05

        elementStrings.push(
            `<schematicline x1={${x1}} y1={${y1}} x2={${x2}} y2={${y2}} strokeWidth={${strokeWidth}} />`,
        )
    }

    for (const path of schematicPaths) {
        const pointsStr = JSON.stringify(path.points ?? [])

        elementStrings.push(
            `<schematicpath
  points={${pointsStr}}
/>`,
        )
    }

    for (const text of schematicTexts) {
        const position = text.position ?? { x: 0, y: 0 }
        const textContent = text.text ?? ""
        const rotation = text.rotation ?? 0
        const anchor = text.anchor ?? "center"

        elementStrings.push(
            `<schematictext
  text="${textContent.replace(/"/g, '\\"')}"
  center={{ x: ${position.x}, y: ${position.y} }}
  rotation={${rotation}}
  anchor="${anchor}"
/>`,
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

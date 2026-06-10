import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"

const escapeJsxText = (text: string) =>
  text.replace(/\\/g, "\\\\").replace(/"/g, '\\"')

export const generateSymbolTsx = (
  circuitJson: AnyCircuitElement[],
): string | null => {
  const schematicArcs = su(circuitJson).schematic_arc.list()
  const schematicLines = su(circuitJson).schematic_line.list()
  const schematicPaths = su(circuitJson).schematic_path.list()
  const schematicTexts = su(circuitJson).schematic_text.list()
  const schematicCircles = su(circuitJson).schematic_circle.list()
  const schematicBoxes = su(circuitJson).schematic_box.list()
  const schematicRects = su(circuitJson).schematic_rect.list()
  const schematicTables = su(circuitJson).schematic_table.list()
  const schematicTableCells = su(circuitJson).schematic_table_cell.list()
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
    const x = box.x ?? 0
    const y = box.y ?? 0
    const width = box.width ?? 0
    const height = box.height ?? 0
    const isDashed = box.is_dashed ?? false

    elementStrings.push(
      `<schematicbox center={{ x: ${x}, y: ${y} }} width={${width}} height={${height}} isDashed={${isDashed}}/>`,
    )
  }

  for (const rect of schematicRects) {
    const center = rect.center ?? { x: 0, y: 0 }
    const width = rect.width ?? 0
    const height = rect.height ?? 0
    const rotation = rect.rotation ?? 0
    const strokeWidth = rect.stroke_width ?? 0
    const color = rect.color ?? "black"
    const isFilled = rect.is_filled ?? false
    const fillColor = rect.fill_color ?? color
    const isDashed = rect.is_dashed ?? false

    elementStrings.push(
      `<schematicrect schX={${center.x}} schY={${center.y}} width={${width}} height={${height}} rotation={${rotation}} strokeWidth={${strokeWidth}} color="${color}" isFilled={${isFilled}} fillColor="${fillColor}" isDashed={${isDashed}} />`,
    )
  }

  for (const path of schematicPaths) {
    const points = path.points ?? []
    const fillColor = path.fill_color ?? "red"
    const isFilled = path.is_filled ?? false

    elementStrings.push(
      `<schematicpath points={${JSON.stringify(points)}} strokeColor="${fillColor}" fillColor="${fillColor}" isFilled={${isFilled}}/>`,
    )
  }

  for (const text of schematicTexts) {
    const x = text.position?.x ?? 0
    const y = text.position?.y ?? 0
    const rawText = String(text.text ?? "")
    const escapedText = escapeJsxText(rawText)
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

  for (const table of schematicTables) {
    const tableCells = schematicTableCells
      .filter((cell) => cell.schematic_table_id === table.schematic_table_id)
      .sort((a, b) => {
        if (a.start_row_index !== b.start_row_index) {
          return a.start_row_index - b.start_row_index
        }
        return a.start_column_index - b.start_column_index
      })

    const rowCount = table.row_heights.length
    const rowStrings: string[] = []

    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      const rowHeight = table.row_heights[rowIndex]
      const rowCells = tableCells.filter(
        (cell) => cell.start_row_index === rowIndex,
      )
      const cellStrings: string[] = []

      for (const cell of rowCells) {
        const rowSpan = cell.end_row_index - cell.start_row_index + 1
        const colSpan = cell.end_column_index - cell.start_column_index + 1
        const columnWidths = table.column_widths.slice(
          cell.start_column_index,
          cell.end_column_index + 1,
        )
        const averageColumnWidth =
          columnWidths.length > 0
            ? columnWidths.reduce((sum, width) => sum + width, 0) /
              columnWidths.length
            : cell.width / Math.max(colSpan, 1)

        const props: string[] = []
        const text = cell.text ?? ""

        if (text.length > 0) {
          props.push(`text="${escapeJsxText(text)}"`)
        }
        if (cell.horizontal_align) {
          props.push(`horizontalAlign="${cell.horizontal_align}"`)
        }
        if (cell.vertical_align) {
          props.push(`verticalAlign="${cell.vertical_align}"`)
        }
        if (cell.font_size != null) {
          props.push(`fontSize={${cell.font_size}}`)
        }
        if (rowSpan !== 1) {
          props.push(`rowSpan={${rowSpan}}`)
        }
        if (colSpan !== 1) {
          props.push(`colSpan={${colSpan}}`)
        }
        if (averageColumnWidth > 0) {
          props.push(`width={${averageColumnWidth}}`)
        }

        cellStrings.push(`<schematiccell ${props.join(" ")} />`)
      }

      rowStrings.push(
        `<schematicrow height={${rowHeight}}>
    ${cellStrings.join("\n    ")}
  </schematicrow>`,
      )
    }

    const tableProps = [
      `schX={${table.anchor_position.x}}`,
      `schY={${table.anchor_position.y}}`,
    ]
    if (table.cell_padding != null) {
      tableProps.push(`cellPadding={${table.cell_padding}}`)
    }
    if (table.border_width != null) {
      tableProps.push(`borderWidth={${table.border_width}}`)
    }
    if (table.anchor) {
      tableProps.push(`anchor="${table.anchor}"`)
    }

    elementStrings.push(
      `<schematictable ${tableProps.join(" ")}>
  ${rowStrings.map((s) => s.split("\n").join("\n  ")).join("\n  ")}
</schematictable>`,
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

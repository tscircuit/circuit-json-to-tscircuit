import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import svgpath from "svgpath"
import { parseSync, type INode } from "svgson"
import {
  applyToPoint,
  compose,
  fromDefinition,
  fromString,
  fromTransformAttribute,
  identity,
  inverse,
  type Matrix,
} from "transformation-matrix"

type SvgStyles = Record<string, string>

interface SchematicSvgContext {
  parentToSchematicTransform: Matrix
  inheritedStyles: SvgStyles
  classStyles: Record<string, SvgStyles>
}

// Preserve the rendered drawing as native schematic primitives. This is a
// graphical board symbol, not a reconstruction of editable components/nets.
export function generateBoardSchematicTsx(
  circuitJson: AnyCircuitElement[],
): string | null {
  if (!circuitJson.some((elm) => elm.type === "schematic_component"))
    return null

  const svg = parseSync(convertCircuitJsonToSchematicSvg(circuitJson))
  const screenToSchematicTransform = inverse(
    fromString(svg.attributes["data-real-to-screen-transform"]!),
  )
  const classStyles: Record<string, SvgStyles> = {}
  for (const style of svg.children.filter((node) => node.name === "style")) {
    const css = getSvgText(style)
    for (const match of css.matchAll(/\.([\w-]+)\s*\{([^}]*)\}/g)) {
      classStyles[match[1]!] = parseSvgStyles(match[2]!)
    }
  }
  const primitives = svg.children.flatMap((node) =>
    convertSchematicSvgNode(node, {
      parentToSchematicTransform: screenToSchematicTransform,
      inheritedStyles: {},
      classStyles,
    }),
  )
  if (primitives.length === 0) return null
  return `<symbol>\n${primitives.join("\n")}\n</symbol>`
}

function parseSvgStyles(css: string): SvgStyles {
  return Object.fromEntries(
    css
      .split(";")
      .map((declaration) => declaration.split(":"))
      .filter((parts) => parts.length === 2)
      .map(([property, setting]) => [property!.trim(), setting!.trim()]),
  )
}

function getSvgText(node: INode): string {
  if (node.type === "text") return node.value
  return node.children.map(getSvgText).join(node.name === "text" ? "\n" : "")
}

function convertSchematicSvgNode(
  node: INode,
  ctx: SchematicSvgContext,
): string[] {
  const classes = (node.attributes.class ?? "").split(/\s+/)
  if (
    ["style", "defs"].includes(node.name) ||
    classes.some((className) =>
      ["boundary", "schematic-boundary", "component-overlay"].includes(
        className,
      ),
    )
  ) {
    return []
  }
  const styles = {
    ...ctx.inheritedStyles,
    ...Object.assign(
      {},
      ...classes.map((className) => ctx.classStyles[className]),
    ),
    ...node.attributes,
    ...parseSvgStyles(node.attributes.style ?? ""),
  }
  if (styles.opacity === "0" || styles.display === "none") return []
  const nodeToParentTransform = node.attributes.transform
    ? compose(fromDefinition(fromTransformAttribute(node.attributes.transform)))
    : identity()
  const nodeToSchematicTransform = compose(
    ctx.parentToSchematicTransform,
    nodeToParentTransform,
  )
  if (["g", "svg"].includes(node.name)) {
    return node.children.flatMap((child) =>
      convertSchematicSvgNode(child, {
        ...ctx,
        inheritedStyles: styles,
        parentToSchematicTransform: nodeToSchematicTransform,
      }),
    )
  }

  const mmPerPx = Math.hypot(
    nodeToSchematicTransform.a,
    nodeToSchematicTransform.b,
  )
  const strokeWidth = Number.parseFloat(styles["stroke-width"] ?? "1") * mmPerPx
  const strokeColor = styles.stroke ?? "none"
  const fillColor = styles.fill ?? "none"
  const isFilled = fillColor !== "none" && fillColor !== "transparent"
  let path = node.attributes.d
  if (node.name === "line") {
    path = `M ${node.attributes.x1} ${node.attributes.y1} L ${node.attributes.x2} ${node.attributes.y2}`
  } else if (["polygon", "polyline"].includes(node.name)) {
    path = `M ${node.attributes.points}${node.name === "polygon" ? " Z" : ""}`
  } else if (node.name === "rect") {
    const x = Number(node.attributes.x ?? 0)
    const y = Number(node.attributes.y ?? 0)
    const width = Number(node.attributes.width ?? 0)
    const height = Number(node.attributes.height ?? 0)
    path = `M ${x} ${y} h ${width} v ${height} h ${-width} Z`
  }
  if (path) {
    const { a, b, c, d, e, f } = nodeToSchematicTransform
    const schematicPath = svgpath(path)
      .matrix([a, b, c, d, e, f])
      .round(6)
      .toString()
    return [
      `<schematicpath svgPath={${JSON.stringify(schematicPath)}} strokeWidth={${strokeWidth}} strokeColor={${JSON.stringify(strokeColor)}} isFilled={${isFilled}} fillColor={${JSON.stringify(fillColor)}} />`,
    ]
  }
  if (node.name === "circle") {
    const center = applyToPoint(nodeToSchematicTransform, {
      x: Number(node.attributes.cx ?? 0),
      y: Number(node.attributes.cy ?? 0),
    })
    const radius = Number(node.attributes.r ?? 0) * mmPerPx
    return [
      `<schematiccircle center={${JSON.stringify(center)}} radius={${radius}} strokeWidth={${strokeWidth}} color={${JSON.stringify(strokeColor)}} isFilled={${isFilled}} fillColor={${JSON.stringify(fillColor)}} />`,
    ]
  }
  if (node.name === "text") {
    const position = applyToPoint(nodeToSchematicTransform, {
      x: Number(node.attributes.x ?? 0),
      y: Number(node.attributes.y ?? 0),
    })
    const fontSize = Number.parseFloat(styles["font-size"] ?? "16") * mmPerPx
    const horizontalAnchor =
      styles["text-anchor"] === "end"
        ? "right"
        : styles["text-anchor"] === "middle"
          ? "center"
          : "left"
    const verticalAnchor = ["hanging", "text-before-edge"].includes(
      styles["dominant-baseline"] ?? "",
    )
      ? "top"
      : styles["dominant-baseline"] === "middle"
        ? "center"
        : "bottom"
    const anchor =
      verticalAnchor === "center" && horizontalAnchor === "center"
        ? "center"
        : `${verticalAnchor}_${horizontalAnchor}`
    const schRotation =
      (Math.atan2(nodeToSchematicTransform.b, nodeToSchematicTransform.a) *
        180) /
      Math.PI
    return [
      `<schematictext text={${JSON.stringify(getSvgText(node))}} schX={${position.x}} schY={${position.y}} fontSize={${fontSize}} color={${JSON.stringify(fillColor)}} anchor="${anchor}" schRotation={${schRotation}} />`,
    ]
  }
  return []
}

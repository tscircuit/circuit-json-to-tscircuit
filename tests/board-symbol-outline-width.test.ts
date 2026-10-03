import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import { applyToPoint, compose, scale, translate } from "transformation-matrix"

// Compare stroke/segment-length ratios so SVG auto-fit does not affect the test.
const firstPathStrokeRatio = (svg: string) => {
  const path = svg.match(/<path\b[^>]*\bd="M ([^\"]+)"[^>]*>/)?.[0]
  if (!path) throw new Error("Missing rendered symbol path")
  const coordinates = path
    .match(/\bd="M ([^\"]+)"/)![1]!
    .split(/[MLZ\s,]+/)
    .filter(Boolean)
    .map(Number)
  const width = Number.parseFloat(path.match(/\bstroke-width="([^\"]+)"/)![1]!)
  return (
    width /
    Math.hypot(
      coordinates[2]! - coordinates[0]!,
      coordinates[3]! - coordinates[1]!,
    )
  )
}

for (const [fixture, symbolName, scaleFactor] of [
  ["drv8307evm", "boxresistor_up", 1],
  ["lm251772evm-pd", "boxresistor_right", 2],
  ["lm5155evm-fly", "capacitor_down", 0.5],
  ["lmg342x-bb-evm", "capacitor_polarized_down", 1],
  ["drv8307evm", "diode_down", 1],
] as const) {
  test(`${fixture} ${symbolName} keeps rendered outline width at scale ${scaleFactor}`, async () => {
    const source = JSON.parse(
      gunzipSync(
        readFileSync(
          new URL(
            `./fixtures/ti-evms/${fixture}.circuit.json.gz`,
            import.meta.url,
          ),
        ),
      ).toString(),
    ) as CircuitJson
    const component = source.find(
      (e) => e.type === "schematic_component" && e.symbol_name === symbolName,
    )
    if (component?.type !== "schematic_component")
      throw new Error("Missing fixture symbol")
    const subset = source.filter(
      (e) =>
        e.type === "pcb_board" ||
        e === component ||
        (e.type === "source_component" &&
          e.source_component_id === component.source_component_id) ||
        (e.type === "source_port" &&
          e.source_component_id === component.source_component_id) ||
        (e.type === "schematic_port" &&
          e.schematic_component_id === component.schematic_component_id),
    )
    const schematicToScaledSchematicTransform = compose(
      translate(component.center.x, component.center.y),
      scale(scaleFactor),
      translate(-component.center.x, -component.center.y),
    )
    const scaledSize = applyToPoint(scale(scaleFactor), {
      x: component.size.width,
      y: component.size.height,
    })
    component.size = { width: scaledSize.x, height: scaledSize.y }
    for (const element of subset) {
      if (element.type === "schematic_port") {
        element.center = applyToPoint(
          schematicToScaledSchematicTransform,
          element.center,
        )
      }
    }
    const output = await runTscircuitCode(
      convertCircuitJsonToTscircuit(subset, { componentName: "SymbolOutline" }),
    )
    expect(
      firstPathStrokeRatio(convertCircuitJsonToSchematicSvg(output)),
    ).toBeCloseTo(
      firstPathStrokeRatio(convertCircuitJsonToSchematicSvg(subset)),
      8,
    )
  })
}

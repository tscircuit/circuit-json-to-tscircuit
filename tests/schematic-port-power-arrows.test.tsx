import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { gunzipSync } from "node:zlib"
import type { AnyCircuitElement } from "circuit-json"
import { getPinAttributes } from "lib/get-pin-attributes"
import { getComponentUsingTemplate } from "lib/get-component-using-template"
import { runTscircuitCode } from "tscircuit"

const BOARD = "lmg342x-bb-evm"
const COMPONENT_DISPLAY_VALUE = "SN74LVC3G14DCUTG4"
// pin 7 ("1Y") carries a real output arrowhead; pin 1 ("1A") carries neither an
// output nor an input arrow, so it must gain no power attributes.
const OUTPUT_ARROW_PIN = 7
const NO_ARROW_PIN = 1

const loadBoard = async (): Promise<AnyCircuitElement[]> =>
  JSON.parse(
    gunzipSync(
      await readFile(
        `${import.meta.dir}/fixtures/ti-evms/${BOARD}.circuit.json.gz`,
      ),
    ).toString("utf8"),
  ) as AnyCircuitElement[]

/** Scope the board to one component, mirroring how the chip path is called. */
const scopeToComponent = (
  circuitJson: AnyCircuitElement[],
  displayValue: string,
) => {
  const component = (circuitJson as AnyCircuitElement[]).find(
    (element) =>
      element.type === "schematic_component" &&
      (element as { symbol_display_value?: string }).symbol_display_value ===
        displayValue,
  )
  if (!component)
    throw new Error(`Missing component ${displayValue} in ${BOARD}`)
  const sourceComponentId = (component as { source_component_id?: string })
    .source_component_id
  // Keep every schematic element (ports carry the arrows) but only one source
  // component, since getPinAttributes refuses to merge multiple components.
  return circuitJson.filter(
    (element) =>
      element.type !== "source_component" ||
      element.source_component_id === sourceComponentId,
  )
}

test(
  "schematic_port power arrows become chip providesPower/requiresPower",
  async () => {
    const circuitJson = await loadBoard()

    // The arrow really exists in the source data, and core cannot produce it
    // without power attributes.
    const arrowPorts = circuitJson.filter(
      (element) =>
        element.type === "schematic_port" &&
        (element as { has_output_arrow?: boolean }).has_output_arrow === true,
    )
    expect(arrowPorts.length).toBeGreaterThan(0)

    const scoped = scopeToComponent(circuitJson, COMPONENT_DISPLAY_VALUE)
    const pinAttributes = getPinAttributes(scoped)
    expect(pinAttributes).toBeDefined()

    const attributes = pinAttributes as Record<string, Record<string, unknown>>

    // A real output-arrow pin gains providesPower.
    expect(attributes[`pin${OUTPUT_ARROW_PIN}`]?.providesPower).toBe(true)

    // A port with neither arrow gains no power attributes at all: absence of
    // an arrow is never read as absence of power behavior.
    expect(attributes[`pin${NO_ARROW_PIN}`]).toBeUndefined()

    // Every synthesised power flag must trace back to an arrow on the
    // component's own schematic port. Nothing is invented for silent pins.
    const arrowPins = new Set(
      scoped
        .filter((element) => element.type === "schematic_port")
        .filter(
          (element) =>
            (element as { has_output_arrow?: boolean }).has_output_arrow ===
            true,
        )
        .map(
          (element) =>
            (element as { pin_number?: number }).pin_number as number,
        ),
    )
    expect(arrowPins.has(OUTPUT_ARROW_PIN)).toBe(true)
    expect(arrowPins.has(NO_ARROW_PIN)).toBe(false)

    for (const [key, value] of Object.entries(attributes)) {
      if (!value.providesPower && !value.requiresPower) continue
      const pinNumber = Number(key.replace("pin", ""))
      expect(arrowPins.has(pinNumber)).toBe(true)
    }
  },
  { timeout: 60_000 },
)

test(
  "generated component TSX restores the output arrow on render",
  async () => {
    const circuitJson = await loadBoard()
    const scoped = scopeToComponent(circuitJson, COMPONENT_DISPLAY_VALUE)

    const generatedTscircuit = getComponentUsingTemplate({
      componentName: "ArrowComponent",
      circuitJson: scoped,
    })
    expect(generatedTscircuit).toContain("providesPower")

    const renderedCircuitJson = (await runTscircuitCode(
      generatedTscircuit,
    )) as AnyCircuitElement[]
    const ports = renderedCircuitJson.filter(
      (element) => element.type === "schematic_port",
    )
    expect(ports.length).toBeGreaterThan(0)
    expect(
      ports.some(
        (port) =>
          (port as { has_output_arrow?: boolean }).has_output_arrow === true,
      ),
    ).toBe(true)
  },
  { timeout: 120_000 },
)

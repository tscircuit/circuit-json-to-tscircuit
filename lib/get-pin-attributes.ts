import type { AnyCircuitElement } from "circuit-json"

// Explicitly select electrical attributes; source-port IDs and other metadata
// must not become chip props. Newer Circuit JSON fields are read without parsing
// through an older schema, which would strip them from imported JSON.
const attributeNames = {
  is_input: "isInput",
  is_output: "isOutput",
  is_bidirectional: "isBidirectional",
  is_passive: "isPassive",
  can_use_tri_state: "canUseTriState",
  is_using_tri_state: "isUsingTriState",
  can_use_open_collector: "canUseOpenCollector",
  is_using_open_collector: "isUsingOpenCollector",
  can_use_open_emitter: "canUseOpenEmitter",
  is_using_open_emitter: "isUsingOpenEmitter",
  is_gpio: "isGpio",
  highlight_color: "highlightColor",
  must_be_connected: "mustBeConnected",
  provides_power: "providesPower",
  requires_power: "requiresPower",
  provides_ground: "providesGround",
  requires_ground: "requiresGround",
  provides_voltage: "providesVoltage",
  requires_voltage: "requiresVoltage",
  do_not_connect: "doNotConnect",
  include_in_board_pinout: "includeInBoardPinout",
  can_use_internal_pullup: "canUseInternalPullup",
  is_using_internal_pullup: "isUsingInternalPullup",
  needs_external_pullup: "needsExternalPullup",
  can_use_internal_pulldown: "canUseInternalPulldown",
  is_using_internal_pulldown: "isUsingInternalPulldown",
  needs_external_pulldown: "needsExternalPulldown",
  can_use_open_drain: "canUseOpenDrain",
  is_using_open_drain: "isUsingOpenDrain",
  can_use_push_pull: "canUsePushPull",
  is_using_push_pull: "isUsingPushPull",
  should_have_decoupling_capacitor: "shouldHaveDecouplingCapacitor",
  recommended_decoupling_capacitor_capacitance:
    "recommendedDecouplingCapacitorCapacitance",
} as const

const capabilities = [
  "i2c_sda",
  "i2c_scl",
  "spi_mosi",
  "spi_miso",
  "spi_sck",
  "spi_cs",
  "uart_tx",
  "uart_rx",
] as const

/** Electrical props for the single component represented by a chip template. */
export const getPinAttributes = (circuitJson: AnyCircuitElement[]) => {
  const components = circuitJson.filter((e) => e.type === "source_component")
  // Pin numbers are local to a component. Never combine multiple components'
  // attributes into a single chip.
  if (components.length > 1) return undefined
  const componentId = components[0]?.source_component_id
  const pins = new Map<string, Record<string, unknown>>()
  for (const port of circuitJson) {
    if (port.type !== "source_port") continue
    if (
      componentId &&
      port.source_component_id &&
      port.source_component_id !== componentId
    )
      continue
    const source: Record<string, unknown> = { ...port }
    const attributes: Record<string, unknown> = {}
    for (const [sourceName, propName] of Object.entries(attributeNames)) {
      if (source[sourceName] !== undefined) {
        attributes[propName] = source[sourceName]
      }
    }
    const supported = capabilities.filter(
      (c) => source[`supports_${c}`] === true,
    )
    const active = capabilities.filter(
      (c) => source[`is_configured_for_${c}`] === true,
    )
    if (supported.length) attributes.capabilities = supported
    if (active.length) attributes.activeCapabilities = active
    if (Object.keys(attributes).length === 0) continue
    const key =
      port.pin_number !== undefined ? `pin${port.pin_number}` : port.name
    pins.set(key, { ...pins.get(key), ...attributes })
  }
  return pins.size ? Object.fromEntries(pins) : undefined
}

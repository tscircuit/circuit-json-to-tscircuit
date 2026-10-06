import { expect, test } from "bun:test"
import type { AnyCircuitElement, SourcePort } from "circuit-json"
import ts from "typescript"
import { convertCircuitJsonToTscircuit } from "lib"
// Source records from real EasyEDA imports enriched by parts-engine with the
// published datasheets; pinAttributes contains the original props-shaped data.
import f1c from "./fixtures/pin-attributes/f1c100s.json"
import regulator from "./fixtures/pin-attributes/ap2127k-2.8trg1.json"

const getChipProps = (source: string, props = {}) => {
  const js = ts.transpileModule(source, {
    compilerOptions: { jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS },
  }).outputText
  const module = { exports: {} as Record<string, (props: object) => any> }
  const React = {
    createElement: (type: string, props: object) => ({ type, props }),
  }
  // Evaluate only the converter output from fixed test fixtures.
  new Function("React", "module", "exports", js)(React, module, module.exports)
  return Object.values(module.exports)[0](props).props
}

const convert = (ports: Array<SourcePort & Record<string, unknown>>) =>
  convertCircuitJsonToTscircuit(ports, { componentName: "Part" })

test("preserves every F1C100S and 2.8 V regulator pin's datasheet attributes", () => {
  for (const fixture of [f1c, regulator]) {
    const source = convertCircuitJsonToTscircuit(
      fixture.circuitJson as AnyCircuitElement[],
      { componentName: "Part" },
    )
    const props = getChipProps(source)
    // Circuit JSON stores capabilities as flags, so array order is not retained.
    const normalize = (pins: Record<string, Record<string, unknown>>) =>
      Object.fromEntries(
        Object.entries(pins).map(([pin, attributes]) => [
          pin,
          Object.fromEntries(
            Object.entries(attributes).map(([key, value]) => [
              key,
              Array.isArray(value) ? [...value].sort() : value,
            ]),
          ),
        ]),
      )
    expect(normalize(props.pinAttributes)).toEqual(
      normalize(fixture.pinAttributes),
    )
    const override = { pin1: { mustBeConnected: false } }
    expect(
      getChipProps(source, { pinAttributes: override }).pinAttributes,
    ).toEqual(override)
  }
})

test("preserves false, zero, voltages, capacitance and active capabilities", () => {
  const source = convert([
    {
      type: "source_port",
      source_port_id: "port1",
      name: "VOUT",
      pin_number: 5,
      provides_power: false,
      provides_voltage: 0,
      requires_voltage: 2.8,
      must_be_connected: false,
      can_use_tri_state: false,
      supports_spi_mosi: true,
      supports_spi_miso: false,
      supports_uart_tx: true,
      is_configured_for_spi_mosi: true,
      is_configured_for_uart_tx: true,
      is_configured_for_spi_miso: false,
      should_have_decoupling_capacitor: true,
      recommended_decoupling_capacitor_capacitance: "1uF",
      unrelated_metadata: true,
    },
  ])
  expect(getChipProps(source).pinAttributes).toEqual({
    pin5: {
      providesPower: false,
      providesVoltage: 0,
      requiresVoltage: 2.8,
      mustBeConnected: false,
      canUseTriState: false,
      capabilities: ["spi_mosi", "uart_tx"],
      activeCapabilities: ["spi_mosi", "uart_tx"],
      shouldHaveDecouplingCapacitor: true,
      recommendedDecouplingCapacitorCapacitance: "1uF",
    },
  })
})

test("supports named ports and omits pins without electrical metadata", () => {
  const source = convert([
    {
      type: "source_port",
      source_port_id: "gnd",
      name: "GND",
      requires_ground: true,
    },
    { type: "source_port", source_port_id: "empty", name: "pin2" },
    {
      type: "source_port",
      source_port_id: "reset",
      name: '~RESET"',
      is_input: true,
    },
  ])
  expect(getChipProps(source).pinAttributes).toEqual({
    GND: { requiresGround: true },
    '~RESET"': { isInput: true },
  })
  expect(convert([])).not.toContain("pinAttributes")
  expect(
    convert([{ type: "source_port", source_port_id: "p", name: "pin1" }]),
  ).not.toContain("pinAttributes")
})

test("preserves direction, output mode, pull resistor and connection attributes", () => {
  const source = convert([
    {
      type: "source_port",
      source_port_id: "p",
      name: "pin1",
      is_input: true,
      is_output: false,
      is_bidirectional: true,
      is_passive: false,
      can_use_tri_state: true,
      is_using_tri_state: false,
      can_use_open_collector: true,
      is_using_open_collector: false,
      can_use_open_emitter: true,
      is_using_open_emitter: false,
      can_use_open_drain: true,
      is_using_open_drain: false,
      can_use_push_pull: true,
      is_using_push_pull: false,
      can_use_internal_pullup: true,
      is_using_internal_pullup: false,
      needs_external_pullup: true,
      can_use_internal_pulldown: true,
      is_using_internal_pulldown: false,
      needs_external_pulldown: true,
      provides_ground: false,
      requires_ground: false,
      requires_power: true,
      is_gpio: true,
      highlight_color: "red",
      do_not_connect: false,
      include_in_board_pinout: true,
      recommended_decoupling_capacitor_capacitance: 0.000001,
    },
  ])
  expect(getChipProps(source).pinAttributes).toEqual({
    pin1: {
      isInput: true,
      isOutput: false,
      isBidirectional: true,
      isPassive: false,
      canUseTriState: true,
      isUsingTriState: false,
      canUseOpenCollector: true,
      isUsingOpenCollector: false,
      canUseOpenEmitter: true,
      isUsingOpenEmitter: false,
      canUseOpenDrain: true,
      isUsingOpenDrain: false,
      canUsePushPull: true,
      isUsingPushPull: false,
      canUseInternalPullup: true,
      isUsingInternalPullup: false,
      needsExternalPullup: true,
      canUseInternalPulldown: true,
      isUsingInternalPulldown: false,
      needsExternalPulldown: true,
      providesGround: false,
      requiresGround: false,
      requiresPower: true,
      isGpio: true,
      highlightColor: "red",
      doNotConnect: false,
      includeInBoardPinout: true,
      recommendedDecouplingCapacitorCapacitance: 0.000001,
    },
  })
})

test("does not mix attributes from multiple components sharing pin numbers", () => {
  const circuitJson = [
    ...regulator.circuitJson,
    { ...regulator.circuitJson[0], source_component_id: "another_component" },
  ] as AnyCircuitElement[]
  expect(
    convertCircuitJsonToTscircuit(circuitJson, { componentName: "Part" }),
  ).not.toContain("pinAttributes")
})

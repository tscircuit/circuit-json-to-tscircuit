import { mmStr } from "@tscircuit/mm"
import type {
  AnyCircuitElement,
  CadComponent,
  SchematicComponent,
  SourcePort,
} from "circuit-json"
import { formatJsxStringAttribute } from "./format-jsx-string-attribute"
import { hasCadModelSource } from "./generate-board-cad-models-tsx/has-cad-model-source"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>

export interface TypedComponentTemplateSpec {
  tagName: string
  propsTypeName: string
  propsImportSource: "@tscircuit/props"
  typeSpecificProps: string[]
  footprintString?: string
  rawFootprinterString?: string
  hasIntrinsicFootprintProps?: boolean
  validPinCounts: number[]
  expectedDisplayValues: string[]
  expectedSymbolBaseNames: string[]
  symbolOrientationStyle: "compass" | "axis"
}

const normalizeUnitString = (value: string): string =>
  value.replace(/[\u00b5\u03bc](?=[FHAVsm\u03a9]|ohm)/gu, "u")

const hasValidRatingValue = (
  value: unknown,
  { allowZero = false }: { allowZero?: boolean } = {},
): value is number | string => {
  if (typeof value === "number") {
    return Number.isFinite(value) && (allowZero ? value >= 0 : value > 0)
  }
  if (typeof value === "string") {
    return value.trim().length > 0
  }
  return false
}

const SI_MULTIPLIERS: Record<string, number> = {
  p: 1e-12,
  n: 1e-9,
  u: 1e-6,
  "\u00b5": 1e-6,
  "\u03bc": 1e-6,
  m: 1e-3,
  "": 1,
  k: 1e3,
  K: 1e3,
  M: 1e6,
  G: 1e9,
}

const parseDisplayNumericValue = (display: string): number | undefined => {
  const match =
    /^([+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)\s*([pnu\u00b5\u03bcmkKMG])?(?:[\u03a9\u2126]|ohm|F|H|A|V|Hz|s)?$/iu.exec(
      display.trim(),
    )
  if (!match) return undefined
  const base = Number(match[1])
  if (!Number.isFinite(base)) return undefined
  const prefix = match[2] ?? ""
  // Keep case-sensitivity between 'm' (1e-3) and 'M' (1e6)
  const multiplier = SI_MULTIPLIERS[prefix]
  if (multiplier === undefined) return undefined
  return base * multiplier
}

const isLosslessDisplayForNumericValue = (
  rawValue: number,
  displayValue: string,
): boolean => {
  const parsed = parseDisplayNumericValue(displayValue)
  if (parsed === undefined) return false
  const tol = Math.max(1e-18, Math.abs(rawValue) * 1e-9)
  return Math.abs(parsed - rawValue) <= tol
}

const formatRatingProp = ({
  propName,
  rawValue,
  displayValue,
}: {
  propName: string
  rawValue: number | string
  displayValue?: string
}): string => {
  const trimmedDisplay = displayValue?.trim()
  if (trimmedDisplay && trimmedDisplay.length > 0) {
    if (
      typeof rawValue !== "number" ||
      isLosslessDisplayForNumericValue(rawValue, trimmedDisplay)
    ) {
      return `${propName}=${formatJsxStringAttribute(normalizeUnitString(trimmedDisplay))}`
    }
  }
  if (typeof rawValue === "string") {
    return `${propName}=${formatJsxStringAttribute(normalizeUnitString(rawValue.trim()))}`
  }
  return `${propName}={${rawValue}}`
}

const normalizeFootprinter = ({
  sourceComponent,
  cadComponent,
}: {
  sourceComponent: SourceComponent
  cadComponent?: CadComponent
}): {
  footprintString?: string
  rawFootprinterString?: string
  isPolarizedCapacitor?: boolean
  pinHeaderPitch?: string
} => {
  const raw =
    cadComponent && !hasCadModelSource(cadComponent)
      ? cadComponent.footprinter_string?.trim()
      : undefined
  if (!raw) return {}

  if (sourceComponent.ftype === "simple_resistor") {
    const match = /^res(\d{4})$/u.exec(raw)
    return {
      footprintString: match ? match[1] : raw,
      rawFootprinterString: raw,
    }
  }

  if (sourceComponent.ftype === "simple_capacitor") {
    const match = /^cap(\d{4})(?:_(nonpolarized|polarized))?$/u.exec(raw)
    if (match) {
      return {
        footprintString: match[1],
        rawFootprinterString: raw,
        isPolarizedCapacitor: match[2] === "polarized",
      }
    }
    return { footprintString: raw, rawFootprinterString: raw }
  }

  if (
    sourceComponent.ftype === "simple_diode" ||
    sourceComponent.ftype === "simple_led"
  ) {
    const match = /^(?:diode|led)(\d{4})(?:_color\([^)]*\))?$/u.exec(raw)
    return {
      footprintString: match ? match[1] : raw,
      rawFootprinterString: raw,
    }
  }

  if (sourceComponent.ftype === "simple_pin_header") {
    const match = /^pinrow(\d+)_p([\d.]+)(?:_nopinlabels)?$/u.exec(raw)
    if (match && Number(match[1]) === sourceComponent.pin_count) {
      return {
        rawFootprinterString: raw,
        pinHeaderPitch: `${match[2]}mm`,
      }
    }
    return { footprintString: raw, rawFootprinterString: raw }
  }

  return { footprintString: raw, rawFootprinterString: raw }
}

export const areSourcePortsCompatibleWithSpec = ({
  sourcePorts,
  spec,
  requireExactPinCount,
}: {
  sourcePorts: SourcePort[]
  spec: TypedComponentTemplateSpec
  requireExactPinCount: boolean
}): boolean => {
  if (sourcePorts.length === 0) {
    return !requireExactPinCount
  }
  if (
    requireExactPinCount &&
    !spec.validPinCounts.includes(sourcePorts.length)
  ) {
    return false
  }
  const maxPins = Math.max(...spec.validPinCounts)
  const seenPins = new Set<number>()
  for (const port of sourcePorts) {
    const pinNumber = port.pin_number
    if (
      pinNumber === undefined ||
      !Number.isSafeInteger(pinNumber) ||
      pinNumber < 1 ||
      pinNumber > maxPins ||
      seenPins.has(pinNumber)
    ) {
      return false
    }
    if (
      requireExactPinCount &&
      port.name !== `pin${pinNumber}` &&
      port.name !== String(pinNumber)
    ) {
      return false
    }
    seenPins.add(pinNumber)
  }
  if (requireExactPinCount) {
    for (let pin = 1; pin <= sourcePorts.length; pin += 1) {
      if (!seenPins.has(pin)) return false
    }
  }
  return true
}

export const getTypedComponentTemplateSpec = ({
  sourceComponent,
  cadComponent,
  schematicComponent,
}: {
  sourceComponent: SourceComponent
  cadComponent?: CadComponent
  schematicComponent?: SchematicComponent
}): TypedComponentTemplateSpec | undefined => {
  const {
    footprintString,
    rawFootprinterString,
    isPolarizedCapacitor: footprinterPolarized,
    pinHeaderPitch,
  } = normalizeFootprinter({
    sourceComponent,
    cadComponent,
  })

  switch (sourceComponent.ftype) {
    case "simple_resistor": {
      if (
        !hasValidRatingValue(sourceComponent.resistance, { allowZero: true })
      ) {
        return undefined
      }
      return {
        tagName: "resistor",
        propsTypeName: "ResistorProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: [
          formatRatingProp({
            propName: "resistance",
            rawValue: sourceComponent.resistance,
            displayValue: sourceComponent.display_resistance,
          }),
        ],
        footprintString,
        rawFootprinterString,
        validPinCounts: [2],
        expectedDisplayValues: [sourceComponent.display_resistance].filter(
          (v): v is string => Boolean(v),
        ),
        expectedSymbolBaseNames: ["boxresistor"],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_capacitor": {
      if (!hasValidRatingValue(sourceComponent.capacitance)) {
        return undefined
      }
      const isPolarized = Boolean(
        footprinterPolarized ||
          schematicComponent?.symbol_name?.startsWith("capacitor_polarized_"),
      )
      const props = [
        formatRatingProp({
          propName: "capacitance",
          rawValue: sourceComponent.capacitance,
          displayValue: sourceComponent.display_capacitance,
        }),
      ]
      if (sourceComponent.max_voltage_rating !== undefined) {
        props.push(
          formatRatingProp({
            propName: "maxVoltageRating",
            rawValue: sourceComponent.max_voltage_rating,
          }),
        )
      }
      if (sourceComponent.max_decoupling_trace_length !== undefined) {
        props.push(
          `maxDecouplingTraceLength={${sourceComponent.max_decoupling_trace_length}}`,
        )
      }
      if (isPolarized) {
        props.push("polarized")
      }
      return {
        tagName: "capacitor",
        propsTypeName: "CapacitorProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        validPinCounts: [2],
        expectedDisplayValues: [sourceComponent.display_capacitance].filter(
          (v): v is string => Boolean(v),
        ),
        expectedSymbolBaseNames: [
          isPolarized ? "capacitor_polarized" : "capacitor",
        ],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_inductor": {
      if (!hasValidRatingValue(sourceComponent.inductance)) {
        return undefined
      }
      const props = [
        formatRatingProp({
          propName: "inductance",
          rawValue: sourceComponent.inductance,
          displayValue: sourceComponent.display_inductance,
        }),
      ]
      if (sourceComponent.max_current_rating !== undefined) {
        props.push(
          formatRatingProp({
            propName: "maxCurrentRating",
            rawValue: sourceComponent.max_current_rating,
          }),
        )
      }
      return {
        tagName: "inductor",
        propsTypeName: "InductorProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        validPinCounts: [2],
        expectedDisplayValues: [
          sourceComponent.display_inductance,
          typeof sourceComponent.inductance === "string"
            ? sourceComponent.inductance
            : undefined,
        ].filter((v): v is string => Boolean(v)),
        expectedSymbolBaseNames: ["inductor"],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_diode": {
      return {
        tagName: "diode",
        propsTypeName: "DiodeProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: [],
        footprintString,
        rawFootprinterString,
        validPinCounts: [2],
        expectedDisplayValues: [],
        expectedSymbolBaseNames: ["diode"],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_led": {
      const props: string[] = []
      if (sourceComponent.color) {
        props.push(`color=${formatJsxStringAttribute(sourceComponent.color)}`)
      }
      if (sourceComponent.wavelength) {
        props.push(
          `wavelength=${formatJsxStringAttribute(sourceComponent.wavelength)}`,
        )
      }
      return {
        tagName: "led",
        propsTypeName: "LedProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        validPinCounts: [2],
        expectedDisplayValues: [sourceComponent.color].filter(
          (v): v is string => Boolean(v),
        ),
        expectedSymbolBaseNames: ["led"],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_potentiometer": {
      if (
        !hasValidRatingValue(sourceComponent.max_resistance, {
          allowZero: true,
        })
      ) {
        return undefined
      }
      const props = [
        formatRatingProp({
          propName: "maxResistance",
          rawValue: sourceComponent.max_resistance,
          displayValue: sourceComponent.display_max_resistance,
        }),
      ]
      const rawPinVariant = (sourceComponent as Record<string, unknown>)
        .pin_variant
      const isThreePinSymbol =
        rawPinVariant === "three_pin" ||
        schematicComponent?.symbol_name?.startsWith("potentiometer3_") === true
      if (typeof rawPinVariant === "string" && rawPinVariant.length > 0) {
        props.push(`pinVariant=${formatJsxStringAttribute(rawPinVariant)}`)
      } else if (isThreePinSymbol) {
        props.push('pinVariant="three_pin"')
      }
      return {
        tagName: "potentiometer",
        propsTypeName: "PotentiometerProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        validPinCounts: [2, 3],
        expectedDisplayValues: [sourceComponent.display_max_resistance].filter(
          (v): v is string => Boolean(v),
        ),
        expectedSymbolBaseNames: [
          isThreePinSymbol ? "potentiometer3" : "potentiometer2",
        ],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_crystal": {
      if (
        !hasValidRatingValue(sourceComponent.frequency) ||
        !hasValidRatingValue(sourceComponent.load_capacitance)
      ) {
        return undefined
      }
      const props = [
        formatRatingProp({
          propName: "frequency",
          rawValue: sourceComponent.frequency,
          displayValue: sourceComponent.display_frequency,
        }),
        formatRatingProp({
          propName: "loadCapacitance",
          rawValue: sourceComponent.load_capacitance,
          displayValue: sourceComponent.display_load_capacitance,
        }),
      ]
      if (sourceComponent.pin_variant) {
        props.push(
          `pinVariant=${formatJsxStringAttribute(sourceComponent.pin_variant)}`,
        )
      }
      const isFourPin = sourceComponent.pin_variant === "four_pin"
      const combinedCrystalDisplay =
        sourceComponent.display_frequency &&
        sourceComponent.display_load_capacitance
          ? `${sourceComponent.display_frequency} / ${sourceComponent.display_load_capacitance}`
          : undefined
      return {
        tagName: "crystal",
        propsTypeName: "CrystalProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        validPinCounts: isFourPin ? [4] : [2],
        expectedDisplayValues: [
          combinedCrystalDisplay,
          sourceComponent.display_frequency,
        ].filter((v): v is string => Boolean(v)),
        expectedSymbolBaseNames: [isFourPin ? "crystal_4pin" : "crystal"],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_resonator": {
      if (
        !hasValidRatingValue(sourceComponent.frequency) ||
        !hasValidRatingValue(sourceComponent.load_capacitance)
      ) {
        return undefined
      }
      const props = [
        formatRatingProp({
          propName: "frequency",
          rawValue: sourceComponent.frequency,
        }),
        formatRatingProp({
          propName: "loadCapacitance",
          rawValue: sourceComponent.load_capacitance,
        }),
      ]
      if (sourceComponent.equivalent_series_resistance !== undefined) {
        props.push(
          `equivalentSeriesResistance={${sourceComponent.equivalent_series_resistance}}`,
        )
      }
      return {
        tagName: "resonator",
        propsTypeName: "ResonatorProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        validPinCounts: [2, 3, 4],
        expectedDisplayValues: [],
        expectedSymbolBaseNames: ["crystal"],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_transistor": {
      if (typeof sourceComponent.transistor_type !== "string") {
        return undefined
      }
      const expectedSymbolBaseNames =
        sourceComponent.transistor_type === "npn"
          ? ["npn_bipolar_transistor"]
          : sourceComponent.transistor_type === "pnp"
            ? ["pnp_bipolar_transistor"]
            : []
      return {
        tagName: "transistor",
        propsTypeName: "TransistorProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: [
          `type=${formatJsxStringAttribute(sourceComponent.transistor_type)}`,
        ],
        footprintString,
        rawFootprinterString,
        validPinCounts: [3],
        expectedDisplayValues: [],
        expectedSymbolBaseNames,
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_mosfet": {
      if (
        typeof sourceComponent.channel_type !== "string" ||
        typeof sourceComponent.mosfet_mode !== "string"
      ) {
        return undefined
      }
      const expectedSymbolBaseNames =
        (sourceComponent.channel_type === "n" ||
          sourceComponent.channel_type === "p") &&
        (sourceComponent.mosfet_mode === "enhancement" ||
          sourceComponent.mosfet_mode === "depletion")
          ? [
              `${sourceComponent.channel_type}_channel_${sourceComponent.mosfet_mode === "enhancement" ? "e" : "d"}_mosfet_transistor`,
            ]
          : []
      return {
        tagName: "mosfet",
        propsTypeName: "MosfetProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: [
          `channelType=${formatJsxStringAttribute(sourceComponent.channel_type)}`,
          `mosfetMode=${formatJsxStringAttribute(sourceComponent.mosfet_mode)}`,
        ],
        footprintString,
        rawFootprinterString,
        validPinCounts: [3],
        expectedDisplayValues: [],
        expectedSymbolBaseNames,
        symbolOrientationStyle: "axis",
      }
    }

    case "simple_pin_header": {
      if (
        typeof sourceComponent.pin_count !== "number" ||
        !Number.isSafeInteger(sourceComponent.pin_count) ||
        sourceComponent.pin_count <= 0
      ) {
        return undefined
      }
      const props = [`pinCount={${sourceComponent.pin_count}}`]
      if (pinHeaderPitch) {
        props.push(`pitch=${formatJsxStringAttribute(pinHeaderPitch)}`)
      }
      if (sourceComponent.gender) {
        props.push(`gender=${formatJsxStringAttribute(sourceComponent.gender)}`)
      }
      return {
        tagName: "pinheader",
        propsTypeName: "PinHeaderProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        hasIntrinsicFootprintProps: Boolean(pinHeaderPitch),
        validPinCounts: [sourceComponent.pin_count],
        expectedDisplayValues: [],
        expectedSymbolBaseNames: [],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_push_button":
    case "simple_switch": {
      return {
        tagName: "pushbutton",
        propsTypeName: "PushButtonProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: [],
        footprintString,
        rawFootprinterString,
        validPinCounts: [2, 4],
        expectedDisplayValues: [],
        expectedSymbolBaseNames: ["push_button_normally_open_momentary"],
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_fuse": {
      if (!hasValidRatingValue(sourceComponent.current_rating_amps)) {
        return undefined
      }
      const props = [
        formatRatingProp({
          propName: "currentRating",
          rawValue: sourceComponent.current_rating_amps,
        }),
      ]
      if (sourceComponent.voltage_rating_volts !== undefined) {
        props.push(
          formatRatingProp({
            propName: "voltageRating",
            rawValue: sourceComponent.voltage_rating_volts,
          }),
        )
      }
      const fuseCurrentStr = `${sourceComponent.current_rating_amps}A`
      const fuseDisplayValues =
        sourceComponent.voltage_rating_volts !== undefined
          ? [`${fuseCurrentStr} / ${sourceComponent.voltage_rating_volts}V`]
          : [fuseCurrentStr, `${fuseCurrentStr} / V`]
      return {
        tagName: "fuse",
        propsTypeName: "FuseProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        validPinCounts: [2],
        expectedDisplayValues: fuseDisplayValues,
        expectedSymbolBaseNames: ["fuse"],
        symbolOrientationStyle: "axis",
      }
    }

    case "simple_power_source": {
      if (!hasValidRatingValue(sourceComponent.voltage, { allowZero: true })) {
        return undefined
      }
      const isBatterySymbol =
        schematicComponent?.symbol_name?.startsWith("battery_") === true
      return {
        tagName: isBatterySymbol ? "battery" : "powersource",
        propsTypeName: isBatterySymbol ? "BatteryProps" : "PowerSourceProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: [
          formatRatingProp({
            propName: "voltage",
            rawValue: sourceComponent.voltage,
          }),
        ],
        footprintString,
        rawFootprinterString,
        validPinCounts: [2],
        expectedDisplayValues: [],
        expectedSymbolBaseNames: [
          isBatterySymbol ? "battery" : "power_factor_meter",
        ],
        symbolOrientationStyle: isBatterySymbol ? "compass" : "axis",
      }
    }

    case "simple_voltage_source": {
      const props: string[] = []
      if (sourceComponent.voltage !== undefined) {
        props.push(
          formatRatingProp({
            propName: "voltage",
            rawValue: sourceComponent.voltage,
          }),
        )
      }
      if (sourceComponent.frequency !== undefined) {
        props.push(
          formatRatingProp({
            propName: "frequency",
            rawValue: sourceComponent.frequency,
          }),
        )
      }
      if (sourceComponent.peak_to_peak_voltage !== undefined) {
        props.push(
          formatRatingProp({
            propName: "peakToPeakVoltage",
            rawValue: sourceComponent.peak_to_peak_voltage,
          }),
        )
      }
      if (sourceComponent.wave_shape) {
        props.push(
          `waveShape=${formatJsxStringAttribute(sourceComponent.wave_shape)}`,
        )
      }
      if (sourceComponent.phase !== undefined) {
        props.push(`phase={${sourceComponent.phase}}`)
      }
      if (sourceComponent.duty_cycle !== undefined) {
        props.push(`dutyCycle={${sourceComponent.duty_cycle}}`)
      }
      const expectedSymbolBaseNames =
        sourceComponent.wave_shape === "square"
          ? ["square_wave"]
          : !sourceComponent.wave_shape ||
              sourceComponent.wave_shape === "sinewave"
            ? ["ac_voltmeter"]
            : []
      const vsDisplayValues: string[] = []
      if (sourceComponent.voltage !== undefined) {
        vsDisplayValues.push(`${sourceComponent.voltage}V`)
        if (sourceComponent.frequency !== undefined) {
          vsDisplayValues.push(
            `${sourceComponent.voltage}V ${sourceComponent.frequency}Hz`,
          )
        }
      }
      return {
        tagName: "voltagesource",
        propsTypeName: "VoltageSourceProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString,
        rawFootprinterString,
        validPinCounts: [2],
        expectedDisplayValues: vsDisplayValues,
        expectedSymbolBaseNames,
        symbolOrientationStyle: "compass",
      }
    }

    case "simple_test_point": {
      const props: string[] = []
      if (sourceComponent.footprint_variant) {
        props.push(
          `footprintVariant=${formatJsxStringAttribute(sourceComponent.footprint_variant)}`,
        )
      }
      if (sourceComponent.pad_shape) {
        props.push(
          `padShape=${formatJsxStringAttribute(sourceComponent.pad_shape)}`,
        )
      }
      if (sourceComponent.pad_diameter !== undefined) {
        props.push(`padDiameter="${mmStr(sourceComponent.pad_diameter)}"`)
      }
      if (sourceComponent.hole_diameter !== undefined) {
        props.push(`holeDiameter="${mmStr(sourceComponent.hole_diameter)}"`)
      }
      if (sourceComponent.width !== undefined) {
        props.push(`width="${mmStr(sourceComponent.width)}"`)
      }
      if (sourceComponent.height !== undefined) {
        props.push(`height="${mmStr(sourceComponent.height)}"`)
      }
      const hasIntrinsicFootprintProps = props.length > 0
      return {
        tagName: "testpoint",
        propsTypeName: "TestpointProps",
        propsImportSource: "@tscircuit/props",
        typeSpecificProps: props,
        footprintString: hasIntrinsicFootprintProps
          ? undefined
          : footprintString,
        rawFootprinterString,
        hasIntrinsicFootprintProps,
        validPinCounts: [1],
        expectedDisplayValues: [],
        expectedSymbolBaseNames: ["testpoint"],
        symbolOrientationStyle: "compass",
      }
    }

    default:
      return undefined
  }
}

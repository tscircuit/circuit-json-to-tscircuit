import type {
  AnyCircuitElement,
  AnySourceComponent,
  CadComponent,
  PcbComponent,
  PcbSmtPadCircle,
} from "circuit-json"

const supportedFtypes = new Set([
  "simple_battery",
  "simple_capacitor",
  "simple_chip",
  "simple_connector",
  "simple_crystal",
  "simple_current_source",
  "simple_diode",
  "simple_fiducial",
  "simple_fuse",
  "simple_inductor",
  "simple_led",
  "simple_mosfet",
  "simple_op_amp",
  "simple_pin_header",
  "simple_pinout",
  "simple_potentiometer",
  "simple_power_source",
  "simple_push_button",
  "simple_resistor",
  "simple_resonator",
  "simple_switch",
  "simple_test_point",
  "simple_transistor",
  "simple_voltage_probe",
  "simple_voltage_source",
] as const)

type SupportedFtype = typeof supportedFtypes extends Set<infer Ftype>
  ? Ftype
  : never
type SupportedComponent = Extract<AnySourceComponent, { ftype: SupportedFtype }>

const isSupportedComponent = (
  element: AnyCircuitElement,
): element is SupportedComponent =>
  element.type === "source_component" &&
  supportedFtypes.has(element.ftype as SupportedFtype)

const isCadComponent = (element: AnyCircuitElement): element is CadComponent =>
  element.type === "cad_component"

const isPcbComponent = (element: AnyCircuitElement): element is PcbComponent =>
  element.type === "pcb_component"

const isBoardFiducial = (
  element: AnyCircuitElement,
): element is PcbSmtPadCircle =>
  element.type === "pcb_smtpad" &&
  element.shape === "circle" &&
  element.pcb_component_id == null &&
  element.soldermask_margin !== undefined

const formatJsxAttribute = (
  attributeName: string,
  attributeContent: unknown,
) => {
  if (attributeContent === undefined) return undefined

  const serializedContent = JSON.stringify(attributeContent)
  if (typeof attributeContent === "string") {
    return `  ${attributeName}=${serializedContent}`
  }

  return `  ${attributeName}={${serializedContent}}`
}

const compactAttributes = (...attributes: Array<string | undefined>) =>
  attributes.filter((attribute): attribute is string => attribute !== undefined)

const getComponentAttributes = (component: SupportedComponent): string[] => {
  switch (component.ftype) {
    case "simple_resistor":
      return compactAttributes(
        formatJsxAttribute(
          "resistance",
          component.display_resistance?.replace(/Ω$/, "") ??
            component.resistance,
        ),
      )
    case "simple_capacitor":
      return compactAttributes(
        formatJsxAttribute(
          "capacitance",
          component.display_capacitance ?? component.capacitance,
        ),
        formatJsxAttribute("maxVoltageRating", component.max_voltage_rating),
      )
    case "simple_inductor":
      return compactAttributes(
        formatJsxAttribute(
          "inductance",
          component.display_inductance ?? component.inductance,
        ),
        formatJsxAttribute("maxCurrentRating", component.max_current_rating),
      )
    case "simple_potentiometer":
      return compactAttributes(
        formatJsxAttribute(
          "maxResistance",
          component.display_max_resistance ?? component.max_resistance,
        ),
      )
    case "simple_crystal":
      return compactAttributes(
        formatJsxAttribute("frequency", component.frequency),
        formatJsxAttribute("loadCapacitance", component.load_capacitance),
        formatJsxAttribute("pinVariant", component.pin_variant),
      )
    case "simple_resonator":
      return compactAttributes(
        formatJsxAttribute("frequency", component.frequency),
        formatJsxAttribute("loadCapacitance", component.load_capacitance),
      )
    case "simple_pin_header":
      return compactAttributes(
        formatJsxAttribute("pinCount", component.pin_count),
        formatJsxAttribute("gender", component.gender),
      )
    case "simple_connector":
      return compactAttributes(
        formatJsxAttribute("standard", component.standard),
      )
    case "simple_transistor":
      return compactAttributes(
        formatJsxAttribute("type", component.transistor_type),
      )
    case "simple_mosfet":
      return compactAttributes(
        formatJsxAttribute("channelType", component.channel_type),
        formatJsxAttribute("mosfetMode", component.mosfet_mode),
      )
    case "simple_fuse":
      return compactAttributes(
        formatJsxAttribute("currentRating", component.current_rating_amps),
        formatJsxAttribute("voltageRating", component.voltage_rating_volts),
      )
    case "simple_battery":
      return compactAttributes(
        formatJsxAttribute("capacity", component.capacity),
      )
    case "simple_power_source":
      return compactAttributes(formatJsxAttribute("voltage", component.voltage))
    case "simple_current_source":
      return compactAttributes(
        formatJsxAttribute("current", component.current),
        formatJsxAttribute("frequency", component.frequency),
        formatJsxAttribute("peakToPeakCurrent", component.peak_to_peak_current),
        formatJsxAttribute("waveShape", component.wave_shape),
        formatJsxAttribute("phase", component.phase),
        formatJsxAttribute("dutyCycle", component.duty_cycle),
      )
    case "simple_voltage_source":
      return compactAttributes(
        formatJsxAttribute("voltage", component.voltage),
        formatJsxAttribute("frequency", component.frequency),
        formatJsxAttribute("peakToPeakVoltage", component.peak_to_peak_voltage),
        formatJsxAttribute("waveShape", component.wave_shape),
        formatJsxAttribute("phase", component.phase),
        formatJsxAttribute("dutyCycle", component.duty_cycle),
      )
    case "simple_led":
      return compactAttributes(
        formatJsxAttribute("color", component.color),
        formatJsxAttribute("wavelength", component.wavelength),
      )
    case "simple_test_point":
      return compactAttributes(
        formatJsxAttribute("footprintVariant", component.footprint_variant),
        formatJsxAttribute("padShape", component.pad_shape),
        formatJsxAttribute("padDiameter", component.pad_diameter),
        formatJsxAttribute("holeDiameter", component.hole_diameter),
        formatJsxAttribute("width", component.width),
        formatJsxAttribute("height", component.height),
      )
    default:
      return []
  }
}

export const generateBoardChildren = (
  circuitJson: AnyCircuitElement[],
): string[] => {
  const components = circuitJson.filter(isSupportedComponent)
  const cadComponentsBySourceId = new Map(
    circuitJson
      .filter(isCadComponent)
      .map((component) => [component.source_component_id, component]),
  )
  const pcbComponentsBySourceId = new Map(
    circuitJson
      .filter(isPcbComponent)
      .map((component) => [component.source_component_id, component]),
  )
  const fiducials = circuitJson.filter(isBoardFiducial)

  const componentChildren = components.map((component) => {
    const cadComponent = cadComponentsBySourceId.get(
      component.source_component_id,
    )
    const pcbComponent = pcbComponentsBySourceId.get(
      component.source_component_id,
    )
    const footprintAttribute = formatJsxAttribute(
      "footprint",
      cadComponent?.footprinter_string,
    )
    const jsxElementName =
      component.ftype === "simple_power_source"
        ? "battery"
        : component.ftype.replace(/^simple_/, "").replaceAll("_", "")
    const componentAttributes = getComponentAttributes(component)

    return compactAttributes(
      `<${jsxElementName}`,
      ...componentAttributes,
      footprintAttribute,
      `  name=${JSON.stringify(component.name)}`,
      formatJsxAttribute("pcbX", pcbComponent?.center.x),
      formatJsxAttribute("pcbY", pcbComponent?.center.y),
      formatJsxAttribute("pcbRotation", pcbComponent?.rotation),
      formatJsxAttribute("layer", pcbComponent?.layer),
      "/>",
    ).join("\n")
  })

  const fiducialChildren = fiducials.map((fiducial, index) =>
    compactAttributes(
      "<fiducial",
      formatJsxAttribute("name", `FID${index + 1}`),
      formatJsxAttribute("padDiameter", fiducial.radius * 2),
      formatJsxAttribute("soldermaskPullback", fiducial.soldermask_margin),
      formatJsxAttribute("pcbX", fiducial.x),
      formatJsxAttribute("pcbY", fiducial.y),
      formatJsxAttribute("layer", fiducial.layer),
      "/>",
    ).join("\n"),
  )

  return [...componentChildren, ...fiducialChildren]
}

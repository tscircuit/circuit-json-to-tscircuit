import type { JsxProps } from "../format-jsx-element"
import type { SupportedSourceComponent } from "../source-component-types"
import { getBatteryProps } from "./battery"
import { getCapacitorProps } from "./capacitor"
import { getConnectorProps } from "./connector"
import { getCrystalProps } from "./crystal"
import { getCurrentSourceProps } from "./current-source"
import { getFuseProps } from "./fuse"
import { getInductorProps } from "./inductor"
import { getLedProps } from "./led"
import { getMosfetProps } from "./mosfet"
import { getPinHeaderProps } from "./pin-header"
import { getPotentiometerProps } from "./potentiometer"
import { getPowerSourceProps } from "./power-source"
import { getResistorProps } from "./resistor"
import { getResonatorProps } from "./resonator"
import { getTestPointProps } from "./test-point"
import { getTransistorProps } from "./transistor"
import { getVoltageSourceProps } from "./voltage-source"

export const getComponentProps = (
  component: SupportedSourceComponent,
): JsxProps => {
  switch (component.ftype) {
    case "simple_battery":
      return getBatteryProps(component)
    case "simple_capacitor":
      return getCapacitorProps(component)
    case "simple_connector":
      return getConnectorProps(component)
    case "simple_crystal":
      return getCrystalProps(component)
    case "simple_current_source":
      return getCurrentSourceProps(component)
    case "simple_fuse":
      return getFuseProps(component)
    case "simple_inductor":
      return getInductorProps(component)
    case "simple_led":
      return getLedProps(component)
    case "simple_mosfet":
      return getMosfetProps(component)
    case "simple_pin_header":
      return getPinHeaderProps(component)
    case "simple_potentiometer":
      return getPotentiometerProps(component)
    case "simple_power_source":
      return getPowerSourceProps(component)
    case "simple_resistor":
      return getResistorProps(component)
    case "simple_resonator":
      return getResonatorProps(component)
    case "simple_test_point":
      return getTestPointProps(component)
    case "simple_transistor":
      return getTransistorProps(component)
    case "simple_voltage_source":
      return getVoltageSourceProps(component)
    default:
      return {}
  }
}

import type { JsxAttributes } from "../format-jsx-element"
import type { SupportedSourceComponent } from "../source-component-types"
import { getBatteryAttributes } from "./battery"
import { getCapacitorAttributes } from "./capacitor"
import { getConnectorAttributes } from "./connector"
import { getCrystalAttributes } from "./crystal"
import { getCurrentSourceAttributes } from "./current-source"
import { getFuseAttributes } from "./fuse"
import { getInductorAttributes } from "./inductor"
import { getLedAttributes } from "./led"
import { getMosfetAttributes } from "./mosfet"
import { getPinHeaderAttributes } from "./pin-header"
import { getPotentiometerAttributes } from "./potentiometer"
import { getPowerSourceAttributes } from "./power-source"
import { getResistorAttributes } from "./resistor"
import { getResonatorAttributes } from "./resonator"
import { getTestPointAttributes } from "./test-point"
import { getTransistorAttributes } from "./transistor"
import { getVoltageSourceAttributes } from "./voltage-source"

export const getComponentAttributes = (
  component: SupportedSourceComponent,
): JsxAttributes => {
  switch (component.ftype) {
    case "simple_battery":
      return getBatteryAttributes(component)
    case "simple_capacitor":
      return getCapacitorAttributes(component)
    case "simple_connector":
      return getConnectorAttributes(component)
    case "simple_crystal":
      return getCrystalAttributes(component)
    case "simple_current_source":
      return getCurrentSourceAttributes(component)
    case "simple_fuse":
      return getFuseAttributes(component)
    case "simple_inductor":
      return getInductorAttributes(component)
    case "simple_led":
      return getLedAttributes(component)
    case "simple_mosfet":
      return getMosfetAttributes(component)
    case "simple_pin_header":
      return getPinHeaderAttributes(component)
    case "simple_potentiometer":
      return getPotentiometerAttributes(component)
    case "simple_power_source":
      return getPowerSourceAttributes(component)
    case "simple_resistor":
      return getResistorAttributes(component)
    case "simple_resonator":
      return getResonatorAttributes(component)
    case "simple_test_point":
      return getTestPointAttributes(component)
    case "simple_transistor":
      return getTransistorAttributes(component)
    case "simple_voltage_source":
      return getVoltageSourceAttributes(component)
    default:
      return {}
  }
}

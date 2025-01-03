import type { CircuitJson } from "circuit-json"
import {
  getComponentUsingTemplate,
  type ComponentTemplateParams,
} from "./get-component-using-template"

export const convertCircuitJsonToTscircuit = (
  circuitJson: CircuitJson,
  opts: Omit<ComponentTemplateParams, "circuitJson">,
) => {
  return getComponentUsingTemplate({
    circuitJson,
    ...opts,
  })
}

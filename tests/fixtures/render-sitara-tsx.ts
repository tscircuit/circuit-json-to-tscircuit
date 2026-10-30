import type { CircuitJson } from "circuit-json"
import { CircuitRunner } from "tscircuit"

export async function renderSitaraTsx({
  generatedTscircuit,
  view,
}: {
  generatedTscircuit: string
  view: "pcb" | "schematic"
}): Promise<CircuitJson> {
  // These fixtures separate PCB and schematic documents. Disable generation of
  // the other view without modifying the converter's generated module.
  const renderProps =
    view === "pcb" ? "{ schematicDisabled: true }" : "{ pcbDisabled: true }"
  const circuitRunner = new CircuitRunner()
  try {
    await circuitRunner.executeWithFsMap({
      fsMap: {
        "generated.circuit.tsx": generatedTscircuit,
        "index.circuit.tsx": `
      import { cloneElement } from "react"
      import ImportedBoard from "./generated.circuit"
      export default () => cloneElement(ImportedBoard(), ${renderProps})
    `,
      },
      mainComponentPath: "index.circuit.tsx",
    })
    await circuitRunner.renderUntilSettled()
    return (await circuitRunner.getCircuitJson()) as CircuitJson
  } finally {
    await circuitRunner.kill()
  }
}

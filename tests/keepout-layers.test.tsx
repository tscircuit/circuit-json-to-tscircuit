import { expect, test } from "bun:test"
import type { AnyCircuitElement, LayerRef } from "circuit-json"
import { runTscircuitCode } from "tscircuit"
import { convertCircuitJsonToTscircuit } from "../lib"

for (const shape of ["rect", "circle"] as const) {
  for (const layers of [
    ["top"],
    ["bottom"],
    ["top", "inner1", "bottom"],
  ] as LayerRef[][]) {
    test(`${shape} keepout retains ${layers.join("/")} through generated TSX`, async () => {
      const input: AnyCircuitElement[] = [
        {
          type: "pcb_keepout",
          pcb_keepout_id: "keepout",
          shape,
          center: { x: 2, y: -1 },
          layers,
          ...(shape === "rect" ? { width: 3, height: 2 } : { radius: 1 }),
        } as AnyCircuitElement,
      ]
      const code = convertCircuitJsonToTscircuit(input, {
        componentName: "KeepoutLayers",
      })
      const result = (await runTscircuitCode(`${code}
        circuit.add(<board width="20mm" height="20mm" layers={4}><KeepoutLayers /></board>)
      `)) as AnyCircuitElement[]
      const keepouts = result.filter(
        (element) => element.type === "pcb_keepout",
      )
      expect(keepouts.length).toBeGreaterThan(0)
      for (const keepout of keepouts) {
        expect(keepout).toMatchObject({
          shape,
          layers,
          center: { x: 2, y: -1 },
          ...(shape === "rect" ? { width: 3, height: 2 } : { radius: 1 }),
        })
      }
    })
  }
}

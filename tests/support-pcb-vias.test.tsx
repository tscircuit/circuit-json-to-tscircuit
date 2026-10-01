import { expect, test } from "bun:test"
import type { CircuitJson, PcbVia } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import { convertVias } from "../lib/generate-footprint-tsx/convert-vias"

test("preserves via geometry, copper layers and tenting", async () => {
  const vias: (PcbVia & { is_tented?: boolean })[] = [
    {
      type: "pcb_via",
      pcb_via_id: "through",
      x: -2,
      y: 3,
      hole_diameter: 0.3,
      outer_diameter: 0.6,
      layers: ["top", "inner1", "inner2", "bottom"],
      is_tented: true,
    },
    {
      type: "pcb_via",
      pcb_via_id: "blind",
      x: 4,
      y: -1,
      hole_diameter: 0.2,
      outer_diameter: 0.5,
      layers: ["top", "inner1"],
      tented_on_top: true,
      tented_on_bottom: false,
    },
    {
      type: "pcb_via",
      pcb_via_id: "buried",
      x: 1,
      y: 2,
      hole_diameter: 0.25,
      outer_diameter: 0.55,
      layers: ["inner1", "inner2"],
      is_tented: false,
    },
  ]
  const circuitJson: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "board",
      center: { x: 0, y: 0 },
      width: 20,
      height: 20,
      num_layers: 4,
      thickness: 1.6,
      material: "fr4",
    },
    ...vias,
  ]
  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "ViaBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedVias = renderedCircuitJson.filter(
    (element) => element.type === "pcb_via",
  )
  expect(renderedVias).toHaveLength(vias.length)
  for (const [index, via] of vias.entries()) {
    expect(renderedVias[index]).toMatchObject({
      x: via.x,
      y: via.y,
      hole_diameter: via.hole_diameter,
      outer_diameter: via.outer_diameter,
      layers: via.layers,
      tented_on_top: via.tented_on_top ?? via.is_tented,
      tented_on_bottom: via.tented_on_bottom ?? via.is_tented,
    })
  }
})

test("rejects vias without copper layer endpoints", () => {
  expect(() =>
    convertVias([
      {
        type: "pcb_via",
        pcb_via_id: "missing_layers",
        x: 0,
        y: 0,
        hole_diameter: 0.3,
        outer_diameter: 0.6,
        layers: [],
      },
    ]),
  ).toThrow("Via missing_layers has no copper layer endpoints")
})

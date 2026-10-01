import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("through-hole ports use only layers present in the converted board", async () => {
  for (const num_layers of [2, 4, 6, 10]) {
    const layers = [
      "top",
      ...Array.from({ length: num_layers - 2 }, (_, i) => `inner${i + 1}`),
      "bottom",
    ]
    const circuitJson = [
      {
        type: "pcb_board",
        pcb_board_id: "board",
        center: { x: 0, y: 0 },
        width: 10,
        height: 10,
        num_layers,
        thickness: 1.6,
        material: "fr4",
      },
      {
        type: "pcb_plated_hole",
        pcb_plated_hole_id: "hole",
        pcb_component_id: "component",
        shape: "circle",
        x: 0,
        y: 0,
        outer_diameter: 2,
        hole_diameter: 1,
        layers,
        port_hints: ["1"],
      },
    ] as any
    const tsx = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "LayerBoard",
    })
    const rendered = await runTscircuitCode(tsx)
    const ports = rendered.filter((el) => el.type === "pcb_port")
    expect(ports).toHaveLength(1)
    expect(ports[0].layers.map(String).sort()).toEqual([...layers].sort())
    expect(rendered.filter((el) => el.type === "pcb_board")[0].num_layers).toBe(
      num_layers,
    )
  }
}, 15000)

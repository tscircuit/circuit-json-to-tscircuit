import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("plain label anchors support all connection sides", async () => {
  const cases = [
    { side: "left", x: 0.09, y: 0, rotation: 0, anchor: "center_left" },
    { side: "right", x: -0.09, y: 0, rotation: 0, anchor: "center_right" },
    { side: "top", x: 0, y: -0.09, rotation: -90, anchor: "center_left" },
    { side: "bottom", x: 0, y: 0.09, rotation: 90, anchor: "center_left" },
  ] as const
  for (const c of cases) {
    const source: CircuitJson = [
      {
        type: "pcb_board",
        pcb_board_id: "board",
        center: { x: 0, y: 0 },
        width: 10,
        height: 10,
        num_layers: 2,
        thickness: 1.6,
        material: "fr4",
      },
      {
        type: "schematic_net_label",
        schematic_net_label_id: "label",
        text: "DATA",
        center: { x: 2, y: 3 },
        anchor_position: { x: 2, y: 3 },
        anchor_side: c.side,
        source_net_id: "net",
      },
    ]
    const output = await runTscircuitCode(
      convertCircuitJsonToTscircuit(source, { componentName: "LabelBoard" }),
    )
    const text = output.find(
      (e) => e.type === "schematic_text" && e.text === "DATA",
    )
    if (text?.type !== "schematic_text") throw new Error("Missing label")
    expect(text.position.x).toBeCloseTo(2 + c.x, 6)
    expect(text.position.y).toBeCloseTo(3 + c.y, 6)
    expect(text.anchor).toBe(c.anchor)
    expect((((text.rotation ?? 0) % 360) + 360) % 360).toBe(
      (c.rotation + 360) % 360,
    )
  }
})

import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("native plain labels preserve rendering on every connection side", async () => {
  for (const side of ["left", "right", "top", "bottom"] as const) {
    const input = await runTscircuitCode(`export default () => (
      <board width={10} height={10}>
        <netlabel net="DATA" schX={2} schY={3} anchorSide="${side}" />
      </board>
    )`)
    const output = await runTscircuitCode(
      convertCircuitJsonToTscircuit(input, { componentName: "LabelBoard" }),
    )
    const labels = (json: CircuitJson) =>
      json.filter((e) => e.type === "schematic_net_label")
    expect(labels(output)).toHaveLength(1)
    const original = labels(input)[0]
    expect(labels(output)[0]).toMatchObject({
      text: original.text,
      anchor_side: original.anchor_side,
      anchor_position: original.anchor_position,
      center: original.center,
    })
    // Compare actual renderer output, not a copy of converter constants.
    const render = (json: CircuitJson) =>
      convertCircuitJsonToSchematicSvg(labels(json), { includeVersion: false })
    expect(render(output)).toBe(render(input))
  }
  for (const name of ["HV VSYS", "net.name", "", 'A"B', "CENTER_ONLY"]) {
    const input: CircuitJson = [
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
        text: name,
        center: { x: 2, y: 3 },
        anchor_position: name === "CENTER_ONLY" ? undefined : { x: 2, y: 3 },
        anchor_side: "left",
        source_net_id: "net",
      },
    ]
    const tsx = convertCircuitJsonToTscircuit(input, {
      componentName: "Fallback",
    })
    expect(tsx).not.toContain("<netlabel")
    const fallback = await runTscircuitCode(tsx)
    expect(fallback).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: "schematic_text", text: name }),
      ]),
    )
  }
})

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
    const sourceLabels = input.filter((e) => e.type === "schematic_net_label")
    const renderedLabels = output.filter(
      (e) => e.type === "schematic_net_label",
    )
    expect(renderedLabels).toHaveLength(1)
    const original = sourceLabels[0]!
    expect(renderedLabels[0]).toMatchObject({
      text: original.text,
      anchor_side: original.anchor_side,
      anchor_position: original.anchor_position,
      center: original.center,
    })
    expect(
      convertCircuitJsonToSchematicSvg(renderedLabels, {
        includeVersion: false,
      }),
    ).toBe(
      convertCircuitJsonToSchematicSvg(sourceLabels, { includeVersion: false }),
    )
  }
  for (const name of [
    "HV VSYS",
    "BUS/DATA",
    "net.name",
    "",
    'A"B',
    "CENTER_ONLY",
    "VCC-P",
    "VCC+P",
    "3V3",
    "1",
    "-VCC",
  ]) {
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

import { expect, test } from "bun:test"
import { readFileSync } from "node:fs"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("LM251772EVM-PD plain net labels keep their connection-side placement", async () => {
  const source = JSON.parse(
    gunzipSync(
      readFileSync(
        new URL(
          "./fixtures/ti-evms/lm251772evm-pd.circuit.json.gz",
          import.meta.url,
        ),
      ),
    ).toString(),
  ) as CircuitJson
  // Exercise the complete imported schematic without running the copper solver.
  const schematic = source.filter(
    (e) => !e.type.startsWith("pcb_") || e.type === "pcb_board",
  )
  const generated = convertCircuitJsonToTscircuit(schematic, {
    componentName: "Lm251772Labels",
  })
  const output = await runTscircuitCode(generated)
  const labels = source.filter(
    (e) => e.type === "schematic_net_label" && !e.symbol_name,
  )
  expect(labels).toHaveLength(6)
  for (const label of labels) {
    if (label.type !== "schematic_net_label") continue
    const sign = label.anchor_side === "left" ? 1 : -1
    const text = output.find(
      (e) =>
        e.type === "schematic_text" &&
        e.text === label.text &&
        Math.abs(e.position.y - label.anchor_position!.y) < 1e-6,
    )
    expect(text?.type).toBe("schematic_text")
    if (text?.type !== "schematic_text")
      throw new Error(`Missing ${label.text}`)
    expect(text.position.x).toBeCloseTo(
      label.anchor_position!.x + sign * 0.09,
      6,
    )
    expect(text.anchor).toBe(sign === 1 ? "center_left" : "center_right")
    expect(text.color).toBe("#840000")
    expect(text.font_size).toBe(0.18)
  }
})

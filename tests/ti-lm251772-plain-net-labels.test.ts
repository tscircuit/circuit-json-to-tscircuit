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
    const rendered = output.filter(
      (e) =>
        e.type === "schematic_net_label" &&
        e.text === label.text &&
        e.anchor_position?.x === label.anchor_position!.x &&
        e.anchor_position?.y === label.anchor_position!.y,
    )
    expect(rendered).toHaveLength(1)
    expect(rendered[0]).toMatchObject({
      text: label.text,
      anchor_side: label.anchor_side,
      anchor_position: label.anchor_position,
    })
  }
})

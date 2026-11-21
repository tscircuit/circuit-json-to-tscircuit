import type { CircuitJson } from "circuit-json"
import { runTscircuitCode as runPinnedCompiler } from "tscircuit"

// Round-trip fixtures exercise raw JSON from the pinned compiler, including
// fields from its bundled schema. Parsing it here would change that input.
export async function runTscircuitCode(
  ...args: Parameters<typeof runPinnedCompiler>
): Promise<CircuitJson> {
  return (await runPinnedCompiler(...args)) as CircuitJson
}

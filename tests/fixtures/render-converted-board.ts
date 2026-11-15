import { RootCircuit } from "@tscircuit/core"
import { createRequire } from "node:module"
import type { ReactElement } from "react"
import { JsxEmit, ModuleKind, transpileModule } from "typescript"

/** Render generated TSX using the core version explicitly pinned by this test project. */
export async function renderConvertedBoard(tsx: string) {
  const compiled = transpileModule(tsx, {
    compilerOptions: { module: ModuleKind.CommonJS, jsx: JsxEmit.ReactJSX },
  }).outputText
  const exports: { default?: () => ReactElement } = {}
  new Function("require", "exports", compiled)(
    createRequire(import.meta.url),
    exports,
  )
  if (!exports.default)
    throw new Error("Converted board has no default component")
  const circuit = new RootCircuit()
  circuit.add(exports.default())
  await circuit.renderUntilSettled()
  return circuit.getCircuitJson()
}

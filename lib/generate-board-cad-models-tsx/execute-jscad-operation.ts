import jscad from "@jscad/modeling"
import { executeJscadOperations, type JscadOperation } from "jscad-planner"

export function executeJscadOperation(operation: JscadOperation): unknown {
  // @ts-expect-error @jscad/modeling overloads differ from the planner adapter.
  return executeJscadOperations(jscad, operation)
}

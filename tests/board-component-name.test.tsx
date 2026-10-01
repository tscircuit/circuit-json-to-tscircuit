import { expect, test } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"
import { getBoardUsingTemplate } from "../lib/get-board-using-template"
import { runTscircuitCode } from "tscircuit"

const board = [
  {
    type: "pcb_board",
    pcb_board_id: "board",
    center: { x: 0, y: 0 },
    width: 20,
    height: 10,
    num_layers: 2,
    thickness: 1.6,
    material: "fr4",
  },
] as any

test("board conversion exports the requested name while retaining the default export", async () => {
  const tsx = convertCircuitJsonToTscircuit(board, {
    componentName: "MyNamedBoard",
  })
  expect(tsx).toContain("export const MyNamedBoard =")
  expect(tsx).toContain("export default MyNamedBoard")
  const rendered = await runTscircuitCode(tsx)
  expect(rendered.filter((el) => el.type === "pcb_board")).toHaveLength(1)
  expect(getBoardUsingTemplate({ circuitJson: board })).toContain(
    "export default () =>",
  )
}, 15000)

import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("floating-point coordinate residue is emitted as ordinary millimeters", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(
    [
      {
        type: "pcb_smtpad",
        pcb_smtpad_id: "tiny_residue_pad",
        shape: "rect",
        x: -7.105427357601002e-15,
        y: 3.552713678800501e-15,
        width: 1,
        height: 1,
        layer: "top",
        port_hints: ["1"],
      },
    ],
    { componentName: "ResidueComponent" },
  )

  expect(generatedTscircuit).toMatch(/pcbX="-?0mm" pcbY="0mm"/)
  expect(generatedTscircuit).not.toMatch(/[eE][+-]?\d+mm/)

  const renderedCircuitJson = (await runTscircuitCode(`
${generatedTscircuit}

circuit.add(
  <board width="10mm" height="10mm">
    <ResidueComponent />
  </board>,
)
  `)) as AnyCircuitElement[]

  expect(
    renderedCircuitJson.find(
      (element) =>
        element.type === "pcb_smtpad" && "x" in element && element.x === 0,
    ),
  ).toMatchObject({ x: 0, y: 0 })
})

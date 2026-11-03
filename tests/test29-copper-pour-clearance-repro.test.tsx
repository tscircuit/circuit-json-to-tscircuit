import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"
import {
  createCopperPourClearanceCircuit,
  hasCopperPourAt,
} from "./fixtures/copper-pour-clearance"

test("shows zero-clearance copper around a newly routed trace", async () => {
  const input = await createCopperPourClearanceCircuit()
  const tsx = convertCircuitJsonToTscircuit(input, {
    componentName: "ClearanceBoard",
  })
  const rendered = await runTscircuitCode(tsx)
  expect(tsx).toContain("traceMargin={0}")
  expect(rendered.some((element) => element.type === "pcb_trace")).toBe(true)
  expect(hasCopperPourAt(rendered, { x: 0, y: 0.2 })).toBe(true)

  const comparison = stackSvgsHorizontally(
    [input, rendered].map((circuitJson) =>
      convertCircuitJsonToPcbSvg(circuitJson, {
        width: 600,
        height: 400,
        backgroundColor: "white",
        includeVersion: false,
        showSolderMask: false,
        shouldDrawRatsNest: false,
      }),
    ),
    {
      gap: 24,
      normalizeSize: false,
      rootAttributes: {
        "aria-label":
          "Unrouted pour definition on left; core output with zero clearance on right",
      },
    },
  )
  await expect(comparison).toMatchSvgSnapshot(import.meta.path)
}, 30000)

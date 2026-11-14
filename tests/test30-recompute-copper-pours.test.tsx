import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"
import {
  createCopperPourClearanceCircuit,
  hasCopperPourAt,
} from "./fixtures/copper-pour-clearance"

test("recomputes copper using board clearances around new routing", async () => {
  const input = await createCopperPourClearanceCircuit()
  const preservedTsx = convertCircuitJsonToTscircuit(input, {
    componentName: "ClearanceBoard",
  })
  expect(
    convertCircuitJsonToTscircuit(input, {
      componentName: "ClearanceBoard",
      copperPourMode: "preserve",
    }),
  ).toBe(preservedTsx)
  const tsx = convertCircuitJsonToTscircuit(input, {
    componentName: "ClearanceBoard",
    copperPourMode: "recompute",
  })
  expect(tsx).toContain(
    "padMargin={0.3} traceMargin={0.3} clearance={0.3} boardEdgeMargin={0.4} cutoutMargin={0.3}",
  )
  const preserved = await runTscircuitCode(preservedTsx)
  const recomputed = await runTscircuitCode(tsx)
  expect(recomputed.some((element) => element.type === "pcb_trace")).toBe(true)
  expect(hasCopperPourAt(preserved, { x: 0, y: 0.2 })).toBe(true)
  expect(hasCopperPourAt(recomputed, { x: 0, y: 0.2 })).toBe(false)
  expect(hasCopperPourAt(recomputed, { x: 0, y: 1 })).toBe(true)
  const ground = recomputed.find(
    (element) => element.type === "source_net" && element.name === "GND",
  )
  if (ground?.type !== "source_net")
    throw new Error("Expected rendered GND net")
  expect(
    recomputed
      .filter((element) => element.type === "pcb_copper_pour")
      .every((pour) => pour.source_net_id === ground.source_net_id),
  ).toBe(true)
  const missingClearance = input.map((element) =>
    element.type === "pcb_board"
      ? {
          ...element,
          min_different_net_trace_edge_to_trace_edge_clearance: undefined,
        }
      : element,
  )
  expect(() =>
    convertCircuitJsonToTscircuit(missingClearance, {
      componentName: "ClearanceBoard",
      copperPourMode: "recompute",
    }),
  ).toThrow("min_different_net_trace_edge_to_trace_edge_clearance")
  const invalidClearance = input.map((element) =>
    element.type === "pcb_board"
      ? { ...element, min_board_edge_clearance: -0.1 }
      : element,
  )
  expect(() =>
    convertCircuitJsonToTscircuit(invalidClearance, {
      componentName: "ClearanceBoard",
      copperPourMode: "recompute",
    }),
  ).toThrow("min_board_edge_clearance")
  const comparison = stackSvgsHorizontally(
    [preserved, recomputed].map((circuitJson) =>
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
          "Zero-clearance import on left; freshly computed copper with 0.3 mm routing clearance on right",
      },
    },
  )
  await expect(comparison).toMatchSvgSnapshot(import.meta.path)
}, 30000)

import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { hasCopperPourAt } from "./fixtures/copper-pour-clearance"
import { renderConvertedBoard } from "./fixtures/render-converted-board"

test("regenerates scoped copper with runtime net aliases and preserves authored copper", async () => {
  const original = await renderConvertedBoard(`
    const footprint = <footprint><smtpad shape="rect" width={1} height={1} portHints={["1"]} /></footprint>
    export default () => <board width={18} height={12}>
      <net name="GND" /><net name="HV" /><net name="LV" />
      <chip name="H" footprint={footprint} pcbX={-5} connections={{pin1:"net.HV"}} />
      <chip name="L" footprint={footprint} pcbX={5} connections={{pin1:"net.LV"}} />
      <pcbnotetext text="HV: 1.5 mm; LV: 0.2 mm; fixed: 0.8 mm; cutout: 0.4 mm" pcbY={4} fontSize={0.4} />
    </board>
  `)
  const ground = original.find(
    (element) => element.type === "source_net" && element.name === "GND",
  )!
  const high = original.find(
    (element) => element.type === "source_net" && element.name === "HV",
  )!
  if (ground.type !== "source_net" || high.type !== "source_net")
    throw new Error("Missing fixture nets")
  const aliasId = "source_net_hv_alias"
  const input: CircuitJson = [
    ...original.filter(
      (element) => element.type !== "pcb_trace" && element.type !== "pcb_via",
    ),
    {
      type: "pcb_cutout",
      pcb_cutout_id: "slot",
      shape: "rect",
      center: { x: 0, y: 3 },
      width: 2,
      height: 0.5,
    },
    { ...high, source_net_id: aliasId, name: "HV_ALIAS" },
    {
      type: "source_trace",
      source_trace_id: "source_trace_hv_alias",
      connected_source_port_ids: [],
      connected_source_net_ids: [high.source_net_id, aliasId],
    },
    {
      type: "pcb_copper_pour",
      pcb_copper_pour_id: "fixed",
      shape: "polygon",
      layer: "top",
      covered_with_solder_mask: false,
      source_net_id: high.source_net_id,
      is_static: true,
      clearance: 0.1,
      clearance_rules: [],
      board_edge_margin: 0,
      points: [
        { x: -0.5, y: -1 },
        { x: 0.5, y: -1 },
        { x: 0.5, y: 1 },
        { x: -0.5, y: 1 },
      ],
    },
    {
      type: "pcb_copper_pour",
      pcb_copper_pour_id: "definition",
      shape: "polygon",
      layer: "top",
      covered_with_solder_mask: false,
      source_net_id: ground.source_net_id,
      clearance: 0.1,
      board_edge_margin: 0.4,
      clearance_rules: [
        { clearance: 1.5, source_net_ids: [aliasId], object_types: ["smtpad"] },
        {
          clearance: 0.8,
          source_net_ids: [aliasId],
          object_types: ["copper_region"],
        },
        { clearance: 0.2, object_types: ["smtpad"] },
      ],
      points: [
        { x: -8, y: -5 },
        { x: 8, y: -5 },
        { x: 8, y: 5 },
        { x: -8, y: 5 },
      ],
    },
  ]
  const before = JSON.stringify(input)
  const tsx = convertCircuitJsonToTscircuit(input, {
    componentName: "ImportedBoard",
    copperPourMode: "recompute",
  })
  const rendered = await renderConvertedBoard(tsx)
  expect(JSON.stringify(input)).toBe(before)
  expect(hasCopperPourAt(rendered, { x: -3.1, y: 0 })).toBe(false)
  expect(hasCopperPourAt(rendered, { x: -2.9, y: 0 })).toBe(true)
  expect(hasCopperPourAt(rendered, { x: 5.65, y: 0 })).toBe(false)
  expect(hasCopperPourAt(rendered, { x: 5.75, y: 0 })).toBe(true)
  expect(hasCopperPourAt(rendered, { x: 1.2, y: 0 })).toBe(false)
  expect(hasCopperPourAt(rendered, { x: 1.4, y: 0 })).toBe(true)
  expect(hasCopperPourAt(rendered, { x: 0, y: 0 })).toBe(true)
  expect(hasCopperPourAt(rendered, { x: 0, y: 2.5 })).toBe(false)
  expect(hasCopperPourAt(rendered, { x: 0, y: 2.2 })).toBe(true)
  // Board-edge spacing must not shrink an authored polygon boundary inside the board.
  expect(hasCopperPourAt(rendered, { x: 7.9, y: 3 })).toBe(true)
  expect(
    rendered.filter(
      (element) => element.type === "pcb_copper_pour" && element.is_static,
    ),
  ).toHaveLength(1)
  const svg = stackSvgsHorizontally(
    [input, rendered].map((circuitJson) =>
      convertCircuitJsonToPcbSvg(circuitJson, {
        width: 700,
        height: 480,
        backgroundColor: "white",
        includeVersion: false,
        showSolderMask: false,
        shouldDrawRatsNest: false,
      }),
    ),
    { gap: 24, normalizeSize: false },
  )
  await expect(svg).toMatchSvgSnapshot(import.meta.path)
}, 30000)

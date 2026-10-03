import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves netless pours and special-character net names", async () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_special",
      name: 'GND "A"',
      member_source_group_ids: [],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_special",
      center: { x: 0, y: 0 },
      width: 12,
      height: 8,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_copper_pour",
      pcb_copper_pour_id: "pcb_copper_pour_special",
      source_net_id: "source_net_special",
      layer: "top",
      covered_with_solder_mask: false,
      shape: "polygon",
      points: [
        { x: -5, y: -2 },
        { x: -1, y: -2 },
        { x: -1, y: 2 },
        { x: -5, y: 2 },
      ],
    },
    {
      type: "pcb_copper_pour",
      pcb_copper_pour_id: "pcb_copper_pour_unassigned",
      layer: "bottom",
      covered_with_solder_mask: false,
      shape: "polygon",
      points: [
        { x: 1, y: -2 },
        { x: 5, y: -2 },
        { x: 5, y: 2 },
        { x: 1, y: 2 },
      ],
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "SpecialCopperPourBoard",
  })
  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  const renderedPours = renderedCircuitJson.filter(
    (element) => element.type === "pcb_copper_pour",
  )

  expect(renderedPours).toHaveLength(2)
  expect(
    renderedCircuitJson.some(
      (element) => element.type === "source_net" && element.name === 'GND "A"',
    ),
  ).toBe(true)

  const netlessPour = renderedPours.find((pour) => pour.layer === "bottom")
  if (!netlessPour || netlessPour.shape !== "polygon") {
    throw new Error("Expected the netless polygon pour to retain its shape")
  }
  expect(netlessPour.source_net_id).toBeUndefined()
  expect(netlessPour.points).toEqual([
    { x: 1, y: -2 },
    { x: 5, y: -2 },
    { x: 5, y: 2 },
    { x: 1, y: 2 },
  ])
})

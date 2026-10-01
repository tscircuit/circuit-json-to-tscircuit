import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves authored PCB copper pour geometry", async () => {
  const circuitJson: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_0",
      name: "GND",
      member_source_group_ids: [],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board_0",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_copper_pour",
      pcb_copper_pour_id: "pcb_copper_pour_0",
      source_net_id: "source_net_0",
      layer: "top",
      shape: "brep",
      brep_shape: {
        outer_ring: {
          vertices: [
            { x: -4, y: -2 },
            { x: 4, y: -2 },
            { x: 4, y: 2 },
            { x: -4, y: 2 },
          ],
        },
        inner_rings: [
          {
            vertices: [
              { x: -2, y: -1 },
              { x: -2, y: 1 },
              { x: -1, y: 1 },
              { x: -1, y: -1 },
            ],
          },
          {
            vertices: [
              { x: 1, y: -1 },
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 2, y: -1 },
            ],
          },
        ],
      },
      covered_with_solder_mask: false,
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "CopperPourBoard",
  })
  const renderedCircuitJson = await runTscircuitCode(generatedTscircuit)
  const copperPour = renderedCircuitJson.find(
    (element) => element.type === "pcb_copper_pour",
  )

  if (!copperPour || copperPour.shape !== "brep") {
    throw new Error("Expected a rendered BRep copper pour")
  }

  expect(copperPour).toMatchObject({
    layer: "top",
    source_net_id: expect.any(String),
    covered_with_solder_mask: false,
  })
  expect(copperPour.brep_shape.outer_ring.vertices).toEqual(
    expect.arrayContaining([
      { x: -4, y: -2 },
      { x: 4, y: -2 },
      { x: 4, y: 2 },
      { x: -4, y: 2 },
    ]),
  )
  expect(copperPour.brep_shape.inner_rings).toEqual([
    {
      vertices: expect.arrayContaining([
        { x: -2, y: -1 },
        { x: -2, y: 1 },
        { x: -1, y: 1 },
        { x: -1, y: -1 },
      ]),
    },
    {
      vertices: expect.arrayContaining([
        { x: 1, y: -1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 2, y: -1 },
      ]),
    },
  ])
})

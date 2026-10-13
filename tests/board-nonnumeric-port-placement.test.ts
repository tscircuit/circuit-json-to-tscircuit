import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("keeps nonnumeric component ports separate from numbered pins", async () => {
  const source: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_shield",
      name: "SHIELD",
      member_source_group_ids: [],
    },
    {
      type: "source_component",
      source_component_id: "source_component_connector",
      ftype: "simple_chip",
      name: "J1",
    },
    {
      type: "source_port",
      source_port_id: "source_port_pin_1",
      source_component_id: "source_component_connector",
      name: "1",
      pin_number: 1,
      port_hints: ["1", "pin1"],
    },
    {
      type: "source_port",
      source_port_id: "source_port_shield_1",
      source_component_id: "source_component_connector",
      name: "S1",
      port_hints: ["S1"],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_shield",
      connected_source_port_ids: ["source_port_shield_1"],
      connected_source_net_ids: ["source_net_shield"],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 20,
      height: 20,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pcb_component_connector",
      source_component_id: "source_component_connector",
      center: { x: 4, y: 3 },
      width: 6,
      height: 4,
      layer: "bottom",
      rotation: 270,
      obstructs_within_bounds: false,
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_pin_1",
      source_port_id: "source_port_pin_1",
      pcb_component_id: "pcb_component_connector",
      x: 4,
      y: 4,
      layers: ["top", "bottom"],
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_shield_1",
      source_port_id: "source_port_shield_1",
      pcb_component_id: "pcb_component_connector",
      x: 4,
      y: 0,
      layers: ["top", "bottom"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "pcb_plated_hole_pin_1",
      pcb_component_id: "pcb_component_connector",
      pcb_port_id: "pcb_port_pin_1",
      x: 4,
      y: 4,
      shape: "circle",
      outer_diameter: 1.4,
      hole_diameter: 0.8,
      layers: ["top", "bottom"],
      port_hints: ["1"],
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "pcb_plated_hole_shield_1",
      pcb_component_id: "pcb_component_connector",
      pcb_port_id: "pcb_port_shield_1",
      x: 4,
      y: 0,
      shape: "circle",
      outer_diameter: 2,
      hole_diameter: 1.2,
      layers: ["top", "bottom"],
      port_hints: ["S1"],
    },
  ]

  const generated = convertCircuitJsonToTscircuit(source, {
    componentName: "ConnectorBoard",
  })
  expect(generated).toContain('"pin2":["S1","imported_pcb_port_2"]')
  expect(generated).not.toMatch(/"pin1":\[[^\]]*"S1"/u)
  expect(generated).toContain(
    '<net name={"SHIELD"} connectsTo={[".J1 > .imported_pcb_port_2"]} />',
  )

  const rendered = (await runTscircuitCode(generated)) as CircuitJson
  expect(
    rendered.filter(
      (element) => element.type === "source_trace_not_connected_error",
    ),
  ).toHaveLength(0)
  expect(
    rendered.some(
      (element) =>
        element.type === "source_port" &&
        element.port_hints?.includes("S1") === true,
    ),
  ).toBeTrue()
})

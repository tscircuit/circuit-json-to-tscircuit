import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves imported pad and via net connectivity", async () => {
  const source: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_power",
      name: "12V+",
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
      source_port_id: "source_port_power",
      source_component_id: "source_component_connector",
      name: "POWER",
      pin_number: 1,
      port_hints: ["1", "pin1"],
    },
    {
      type: "source_trace",
      source_trace_id: "source_trace_power",
      connected_source_port_ids: ["source_port_power"],
      connected_source_net_ids: ["source_net_power"],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_power",
      source_port_id: "source_port_power",
      x: 0,
      y: 0,
      layers: ["top"],
      pcb_component_id: "pcb_component_connector",
    },
    {
      type: "pcb_smtpad",
      pcb_smtpad_id: "pcb_smtpad_power",
      pcb_component_id: "pcb_component_connector",
      pcb_port_id: "pcb_port_power",
      port_hints: ["1"],
      x: 0,
      y: 0,
      layer: "top",
      shape: "rect",
      width: 1,
      height: 1,
    },
    {
      type: "pcb_via",
      pcb_via_id: "pcb_via_power",
      source_net_id: "source_net_power",
      source_trace_id: "source_trace_power",
      x: 2,
      y: 0,
      outer_diameter: 0.6,
      hole_diameter: 0.3,
      layers: ["top", "bottom"],
    },
    {
      type: "pcb_copper_pour",
      pcb_copper_pour_id: "pcb_copper_pour_power",
      source_net_id: "source_net_power",
      layer: "top",
      shape: "rect",
      center: { x: 0, y: 0 },
      width: 8,
      height: 4,
    },
  ]

  const generated = convertCircuitJsonToTscircuit(source, {
    componentName: "ConnectedBoard",
  })
  const rendered = (await runTscircuitCode(generated)) as CircuitJson
  const net = rendered.find(
    (element) => element.type === "source_net" && element.name === "NET_12V_",
  )
  const pad = rendered.find((element) => element.type === "pcb_smtpad")
  const via = rendered.find((element) => element.type === "pcb_via")
  const pour = rendered.find((element) => element.type === "pcb_copper_pour")

  if (!net || !pad?.pcb_port_id) throw new Error("Missing connected pad net")
  const pcbPort = rendered.find(
    (element) =>
      element.type === "pcb_port" && element.pcb_port_id === pad.pcb_port_id,
  )
  if (!pcbPort) throw new Error("Missing rendered PCB port")
  const sourceTrace = rendered.find(
    (element) =>
      element.type === "source_trace" &&
      element.connected_source_port_ids.includes(pcbPort.source_port_id),
  )

  expect(sourceTrace?.connected_source_net_ids).toContain(net.source_net_id)
  expect(via).toMatchObject({ source_net_id: net.source_net_id })
  expect(pour).toMatchObject({ source_net_id: net.source_net_id })
})

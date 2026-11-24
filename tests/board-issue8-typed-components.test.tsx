import { expect, test } from "bun:test"
import type { CircuitJson, PcbTrace } from "circuit-json"
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
import { convertCircuitJsonToTscircuit } from "lib"
import { getBoardUsingTemplate } from "../lib/get-board-using-template"
import { runTscircuitCode } from "tscircuit"
import issue8Fixture from "./fixtures/issue8-resistor-capacitor-board.json"

test("converts Issue #8 resistor and capacitor board Circuit JSON into typed components while preserving imported route and pad geometry", async () => {
  const inputCircuitJson = issue8Fixture as unknown as CircuitJson

  const defaultExportTsx = getBoardUsingTemplate({
    circuitJson: inputCircuitJson,
  })
  expect(defaultExportTsx).toContain(
    '<resistor name="R1" resistance="1kΩ" footprint={<footprint>',
  )
  expect(defaultExportTsx).toContain(
    '<capacitor name="C1" capacitance="1nF" footprint={<footprint>',
  )
  expect(defaultExportTsx).toContain(
    '<trace from=".R1 > .pin1" to=".C1 > .pin1" />',
  )
  expect(defaultExportTsx).toContain("routingDisabled")

  const namedExportTsx = convertCircuitJsonToTscircuit(inputCircuitJson, {
    componentName: "Issue8Board",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    namedExportTsx,
  )) as CircuitJson

  expect(
    renderedCircuitJson.filter((element) => element.type.includes("error")),
  ).toEqual([])

  const sourceComponents = renderedCircuitJson.filter(
    (element) => element.type === "source_component",
  )
  const r1Source = sourceComponents.find((c) => c.name === "R1")
  const c1Source = sourceComponents.find((c) => c.name === "C1")
  expect(r1Source).toMatchObject({
    ftype: "simple_resistor",
    name: "R1",
    resistance: 1000,
    supplier_part_numbers: {
      jlcpcb: ["C11702", "C25543", "C226166"],
    },
  })
  expect(c1Source).toMatchObject({
    ftype: "simple_capacitor",
    name: "C1",
    capacitance: 1e-9,
    supplier_part_numbers: {
      jlcpcb: ["C106205", "C1523", "C14442"],
    },
  })

  const schematicComponents = renderedCircuitJson.filter(
    (element) => element.type === "schematic_component",
  )
  expect(schematicComponents.map((c) => c.center)).toEqual([
    { x: 3, y: 0 },
    { x: -3, y: 0 },
  ])

  const r1Pin1 = renderedCircuitJson.find(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id === r1Source?.source_component_id &&
      element.pin_number === 1,
  )
  const c1Pin1 = renderedCircuitJson.find(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id === c1Source?.source_component_id &&
      element.pin_number === 1,
  )
  if (r1Pin1?.type !== "source_port" || c1Pin1?.type !== "source_port") {
    throw new Error("Expected rendered R1.pin1 and C1.pin1 source ports")
  }

  const connectivity =
    getFullConnectivityMapFromCircuitJson(renderedCircuitJson)
  expect(
    connectivity.areIdsConnected(r1Pin1.source_port_id, c1Pin1.source_port_id),
  ).toBe(true)

  const inputTrace = inputCircuitJson.find(
    (element): element is PcbTrace => element.type === "pcb_trace",
  )
  const renderedTrace = renderedCircuitJson.find(
    (element): element is PcbTrace => element.type === "pcb_trace",
  )
  expect(renderedTrace?.route).toHaveLength(inputTrace!.route.length)
  expect(
    renderedTrace?.route.map((pt) =>
      pt.route_type === "wire"
        ? { x: pt.x, y: pt.y, width: pt.width, layer: pt.layer }
        : pt,
    ),
  ).toEqual(
    inputTrace!.route.map((pt) =>
      pt.route_type === "wire"
        ? { x: pt.x, y: pt.y, width: pt.width, layer: pt.layer }
        : pt,
    ),
  )

  const smtPads = renderedCircuitJson.filter(
    (element) => element.type === "pcb_smtpad" && element.shape === "rect",
  )
  expect(
    smtPads.map((pad) =>
      pad.shape === "rect"
        ? {
            x: Number(pad.x.toFixed(4)),
            y: Number(pad.y.toFixed(4)),
            width: Number(pad.width.toFixed(4)),
            height: Number(pad.height.toFixed(4)),
          }
        : null,
    ),
  ).toEqual([
    { x: 2.5, y: 0, width: 0.6, height: 0.6 },
    { x: 3.5, y: 0, width: 0.6, height: 0.6 },
    { x: -3.5, y: 0, width: 0.6, height: 0.6 },
    { x: -2.5, y: 0, width: 0.6, height: 0.6 },
  ])
  expect(
    renderedCircuitJson.filter((element) => element.type === "schematic_trace"),
  ).toHaveLength(1)
})

test("emits compact intrinsic footprint strings and autoroutes when library geometry matches and no pre-routed pcb_trace exists", async () => {
  const unroutedCircuitJson = (
    (await runTscircuitCode(`
      export default () => (
        <board width="10mm" height="10mm" routingDisabled>
          <resistor name="R1" resistance="1k" footprint="0402" pcbX={3} schX={3} />
          <capacitor name="C1" capacitance="1nF" footprint="0402" pcbX={-3} schX={-3} />
          <trace from=".R1 > .pin1" to=".C1 > .pin1" />
        </board>
      )
    `)) as CircuitJson
  )
    .filter((element) => element.type !== "pcb_trace")
    .map((element) =>
      element.type === "source_component"
        ? { ...element, supplier_part_numbers: undefined }
        : element,
    )

  const tsx = getBoardUsingTemplate({ circuitJson: unroutedCircuitJson })
  expect(tsx).toBe(
    `export default () => (
  <board width="10mm" height="10mm" thickness="1.4mm" layers={2} material="fr4">
    <resistor name="R1" resistance="1kΩ" footprint="0402" pcbX={3} schX={3} />
    <capacitor name="C1" capacitance="1nF" footprint="0402" pcbX={-3} schX={-3} />
    <trace from=".R1 > .pin1" to=".C1 > .pin1" />
  </board>
)`,
  )
})

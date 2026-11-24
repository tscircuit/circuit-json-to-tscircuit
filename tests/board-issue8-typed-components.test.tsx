import { expect, test } from "bun:test"
import type { CircuitJson, PcbTrace } from "circuit-json"
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
import { convertCircuitJsonToTscircuit } from "lib"
import { getBoardUsingTemplate } from "../lib/get-board-using-template"
import { getComponentUsingTemplate } from "../lib/get-component-using-template"
import { runTscircuitCode } from "tscircuit"
import issue8Fixture from "./fixtures/issue8-resistor-capacitor-board.json"

test("converts modern Issue #8 resistor and capacitor board into typed components while preserving explicit PCB route", async () => {
  const routedBoardCircuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="10mm" height="10mm" thickness="1.4mm" layers={4}>
        <resistor
          name="R1"
          resistance="1k"
          footprint="0402"
          pcbX={3}
          schX={3}
          supplierPartNumbers={{ jlcpcb: ["C11702", "C25543", "C226166"] }}
        />
        <capacitor
          name="C1"
          capacitance="1nF"
          footprint="0402"
          pcbX={-3}
          schX={-3}
          supplierPartNumbers={{ jlcpcb: ["C106205", "C1523", "C14442"] }}
        />
        <trace from=".R1 > .pin1" to=".C1 > .pin1" />
      </board>
    )
  `)) as CircuitJson

  const defaultExportTsx = getBoardUsingTemplate({
    circuitJson: routedBoardCircuitJson,
  })
  expect(defaultExportTsx).toContain(
    '<resistor name="R1" resistance="1kΩ" footprint="0402" pcbX={3} schX={3} supplierPartNumbers={{"jlcpcb":["C11702","C25543","C226166"]}} />',
  )
  expect(defaultExportTsx).toContain(
    '<capacitor name="C1" capacitance="1nF" footprint="0402" pcbX={-3} schX={-3} supplierPartNumbers={{"jlcpcb":["C106205","C1523","C14442"]}} />',
  )
  expect(defaultExportTsx).toContain(
    '<trace from=".R1 > .pin1" to=".C1 > .pin1" />',
  )

  const namedExportTsx = convertCircuitJsonToTscircuit(routedBoardCircuitJson, {
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

  const inputTrace = routedBoardCircuitJson.find(
    (element): element is PcbTrace => element.type === "pcb_trace",
  )
  const renderedTrace = renderedCircuitJson.find(
    (element): element is PcbTrace => element.type === "pcb_trace",
  )
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
}, 20_000)

test("generates typed component templates from Issue #8 fixture and preserves legacy scaled schematic and pad geometry on board roundtrip", async () => {
  const inputCircuitJson = issue8Fixture as unknown as CircuitJson

  const r1Only = inputCircuitJson.filter(
    (el) =>
      ("source_component_id" in el &&
        el.source_component_id === "source_component_0") ||
      ("pcb_component_id" in el && el.pcb_component_id === "pcb_component_0"),
  )
  const r1Template = getComponentUsingTemplate({
    circuitJson: r1Only,
    componentName: "R1Template",
  })
  expect(r1Template).toContain(
    'import { type ResistorProps } from "@tscircuit/props"',
  )
  expect(r1Template).toContain("<resistor")
  expect(r1Template).toContain('resistance="1kΩ"')

  const boardTsx = convertCircuitJsonToTscircuit(inputCircuitJson, {
    componentName: "LegacyIssue8Board",
  })
  const renderedBoard = (await runTscircuitCode(boardTsx)) as CircuitJson
  expect(renderedBoard.filter((el) => el.type.includes("error"))).toEqual([])

  const inputTrace = inputCircuitJson.find(
    (el): el is PcbTrace => el.type === "pcb_trace",
  )
  const renderedTrace = renderedBoard.find(
    (el): el is PcbTrace => el.type === "pcb_trace",
  )
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
}, 20_000)

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
}, 20_000)

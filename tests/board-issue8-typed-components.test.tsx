import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
import { convertCircuitJsonToTscircuit } from "lib"
import { getBoardUsingTemplate } from "../lib/get-board-using-template"
import { runTscircuitCode } from "tscircuit"
import issue8Fixture from "./fixtures/issue8-resistor-capacitor-board.json"

test("converts Issue #8 resistor and capacitor board Circuit JSON into typed components and trace", async () => {
  const inputCircuitJson = issue8Fixture as unknown as CircuitJson

  const defaultExportTsx = getBoardUsingTemplate({
    circuitJson: inputCircuitJson,
  })
  expect(defaultExportTsx).toBe(
    `export default () => (
  <board width="10mm" height="10mm" thickness="1.4mm" layers={4}>
    <resistor name="R1" resistance="1kΩ" footprint="0402" pcbX={3} schX={3} supplierPartNumbers={{"jlcpcb":["C11702","C25543","C226166"]}} />
    <capacitor name="C1" capacitance="1nF" footprint="0402" pcbX={-3} schX={-3} supplierPartNumbers={{"jlcpcb":["C106205","C1523","C14442"]}} />
    <trace from=".R1 > .pin1" to=".C1 > .pin1" />
  </board>
)`,
  )

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
  expect(sourceComponents).toHaveLength(2)
  expect(sourceComponents[0]).toMatchObject({
    ftype: "simple_resistor",
    name: "R1",
    resistance: 1000,
    supplier_part_numbers: {
      jlcpcb: ["C11702", "C25543", "C226166"],
    },
  })
  expect(sourceComponents[1]).toMatchObject({
    ftype: "simple_capacitor",
    name: "C1",
    capacitance: 1e-9,
    supplier_part_numbers: {
      jlcpcb: ["C106205", "C1523", "C14442"],
    },
  })

  const pcbComponents = renderedCircuitJson.filter(
    (element) => element.type === "pcb_component",
  )
  expect(pcbComponents.map((c) => c.center)).toEqual([
    { x: 3, y: 0 },
    { x: -3, y: 0 },
  ])

  const schematicComponents = renderedCircuitJson.filter(
    (element) => element.type === "schematic_component",
  )
  expect(schematicComponents.map((c) => c.center)).toEqual([
    { x: 3, y: 0 },
    { x: -3, y: 0 },
  ])

  const cadComponents = renderedCircuitJson.filter(
    (element) => element.type === "cad_component",
  )
  expect(cadComponents).toHaveLength(2)
  expect(cadComponents.every((c) => Boolean(c.footprinter_string))).toBe(true)

  const r1Pin1 = renderedCircuitJson.find(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id ===
        sourceComponents[0]?.source_component_id &&
      element.pin_number === 1,
  )
  const c1Pin1 = renderedCircuitJson.find(
    (element) =>
      element.type === "source_port" &&
      element.source_component_id ===
        sourceComponents[1]?.source_component_id &&
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
  expect(
    renderedCircuitJson.filter((element) => element.type === "pcb_trace"),
  ).toHaveLength(1)
  expect(
    renderedCircuitJson.filter((element) => element.type === "schematic_trace"),
  ).toHaveLength(1)
})

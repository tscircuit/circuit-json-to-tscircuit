import { expect, test } from "bun:test"
import type { CircuitJson, SourcePort, SourceSimpleChip } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

type PcbPortId = string
type SourcePortId = string

// U29 from PROC114E3_BRD.PcbDoc and source schematic sheet 16:
// address A1 is ball P7 (DDR_A1); ball A1 is VDDQ (VDD_DDR4).
test("SK-AM62 U29 keeps address A1 separate from power ball A1", async () => {
  const source = (await Bun.file(
    new URL("./fixtures/sk-am62-u29-pin-aliases.circuit.json", import.meta.url),
  ).json()) as CircuitJson
  const generatedTsx = convertCircuitJsonToTscircuit(source, {
    componentName: "SkAm62U29",
  })
  const rendered = (await runTscircuitCode(generatedTsx)) as CircuitJson
  const sourcePorts = rendered.filter(
    (element) => element.type === "source_port",
  )
  const pcbPorts = rendered.filter((element) => element.type === "pcb_port")
  const pads = rendered.filter((element) => element.type === "pcb_smtpad")
  const sourcePortById = new Map<SourcePortId, (typeof sourcePorts)[number]>(
    sourcePorts.map((port) => [port.source_port_id, port]),
  )
  const pcbPortById = new Map<PcbPortId, (typeof pcbPorts)[number]>(
    pcbPorts.map((port) => [port.pcb_port_id, port]),
  )
  expect(sourcePorts).toHaveLength(2)
  expect(pads).toHaveLength(2)
  for (const sourcePcbPort of source.filter(
    (element) => element.type === "pcb_port",
  )) {
    const sourcePin = source.find(
      (element): element is SourcePort =>
        element.type === "source_port" &&
        element.source_port_id === sourcePcbPort.source_port_id,
    )
    const pad = pads.find(
      (element) =>
        "x" in element &&
        "y" in element &&
        Math.abs(element.x - sourcePcbPort.x) < 1e-6 &&
        Math.abs(element.y - sourcePcbPort.y) < 1e-6,
    )
    expect(pad).toBeDefined()
    const pcbPort = pad?.pcb_port_id
      ? pcbPortById.get(pad.pcb_port_id)
      : undefined
    const renderedPin = pcbPort
      ? sourcePortById.get(pcbPort.source_port_id)
      : undefined
    expect(renderedPin).toBeDefined()
    expect(renderedPin?.name).toBe(sourcePin?.name)
  }
  const chip = rendered.find(
    (element): element is SourceSimpleChip =>
      element.type === "source_component" &&
      element.ftype === "simple_chip" &&
      element.name === "U29",
  )
  expect(chip).toBeDefined()
  expect(chip?.internally_connected_source_port_ids ?? []).toEqual([])
})

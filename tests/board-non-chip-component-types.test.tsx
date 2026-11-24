import { expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves typed non-chip components, rotations, and custom footprints in board conversion", async () => {
  const sourceCircuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="60mm" height="40mm">
        <resistor
          name="R_CUSTOM"
          resistance="4.7k"
          pcbX={-20}
          pcbY={8}
          pcbRotation="90deg"
          layer="bottom"
          schX={-8}
          schY={4}
          schRotation={90}
          footprint={<footprint>
            <smtpad portHints={["1"]} pcbX="-0.5mm" pcbY="0mm" width="0.6mm" height="0.6mm" shape="rect" layer="top" />
            <smtpad portHints={["2"]} pcbX="0.5mm" pcbY="0mm" width="0.6mm" height="0.6mm" shape="rect" layer="top" />
          </footprint>}
        />
        <inductor name="L1" inductance="10uH" footprint="0603" pcbX={-10} pcbY={8} schX={-4} schY={4} schRotation={180} />
        <diode name="D1" footprint="sod123" pcbX={0} pcbY={8} schX={0} schY={4} schRotation={270} />
        <led name="LED1" color="green" footprint="0603" pcbX={10} pcbY={8} schX={4} schY={4} />
        <transistor name="Q1" type="npn" footprint="sot23" pcbX={20} pcbY={8} schX={8} schY={4} />
        <mosfet name="M1" channelType="n" mosfetMode="enhancement" footprint="sot23" pcbX={-20} pcbY={-6} schX={-8} schY={-4} />
        <potentiometer name="RV1" maxResistance="10k" footprint="pinrow3" pcbX={-8} pcbY={-6} schX={-4} schY={-4} />
        <crystal name="Y1" frequency="16MHz" loadCapacitance="18pF" footprint="hc49" pcbX={8} pcbY={-6} schX={4} schY={-4} />
        <fuse name="F1" currentRating="2A" voltageRating="32V" footprint="0603" pcbX={22} pcbY={-6} schX={8} schY={-4} />
        <testpoint name="TP1" footprintVariant="pad" padShape="circle" padDiameter="1.2mm" pcbX={0} pcbY={-14} schX={0} schY={-8} />
        <trace from=".L1 > .pin1" to=".D1 > .pin1" />
      </board>
    )
  `)) as CircuitJson

  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "TypedComponentsBoard",
  })

  expect(generatedTsx).toContain('<resistor name="R_CUSTOM"')
  expect(generatedTsx).toContain(
    '<inductor name="L1" inductance="10uH" footprint="0603"',
  )
  expect(generatedTsx).toContain('<diode name="D1" footprint="sod123"')
  expect(generatedTsx).toContain(
    '<led name="LED1" color="green" footprint="0603"',
  )
  expect(generatedTsx).toContain(
    '<transistor name="Q1" type="npn" footprint="sot23"',
  )
  expect(generatedTsx).toContain(
    '<mosfet name="M1" channelType="n" mosfetMode="enhancement" footprint="sot23"',
  )
  expect(generatedTsx).toContain(
    '<potentiometer name="RV1" maxResistance="10kΩ" footprint="pinrow3"',
  )
  expect(generatedTsx).toContain('<crystal name="Y1" frequency="16MHz"')
  expect(generatedTsx).toContain(
    '<fuse name="F1" currentRating={2} voltageRating={32} footprint="0603"',
  )
  expect(generatedTsx).toContain(
    '<testpoint name="TP1" footprintVariant="pad" padShape="circle" padDiameter="1.2mm"',
  )

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson

  expect(
    renderedCircuitJson.filter((element) => element.type.includes("error")),
  ).toEqual([])

  const ftypeByName = Object.fromEntries(
    renderedCircuitJson.flatMap((element) =>
      element.type === "source_component"
        ? [[element.name, element.ftype]]
        : [],
    ),
  )
  expect(ftypeByName).toMatchObject({
    R_CUSTOM: "simple_resistor",
    L1: "simple_inductor",
    D1: "simple_diode",
    LED1: "simple_led",
    Q1: "simple_transistor",
    M1: "simple_mosfet",
    RV1: "simple_potentiometer",
    Y1: "simple_crystal",
    F1: "simple_fuse",
    TP1: "simple_test_point",
  })

  const rCustomSource = renderedCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_CUSTOM",
  )
  const rCustomPcb = renderedCircuitJson.find(
    (el) =>
      el.type === "pcb_component" &&
      el.source_component_id === rCustomSource?.source_component_id,
  )
  const rCustomSch = renderedCircuitJson.find(
    (el) =>
      el.type === "schematic_component" &&
      el.source_component_id === rCustomSource?.source_component_id,
  )
  if (
    rCustomPcb?.type !== "pcb_component" ||
    rCustomSch?.type !== "schematic_component"
  ) {
    throw new Error("Missing R_CUSTOM rendered placement")
  }
  expect(rCustomPcb.layer).toBe("bottom")
  expect(rCustomPcb.rotation).toBe(90)
  expect(rCustomSch.symbol_name).toBe("boxresistor_up")
}, 20_000)

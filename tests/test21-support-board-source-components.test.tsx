import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
export default () => (
  <board width="70mm" height="50mm">
    <battery capacity="1000mAh" footprint="pinrow2" name="BAT1" pcbX={-28} pcbY={18} />
    <capacitor capacitance="1000pF" footprint="0402" name="C1" pcbX={-14} pcbY={18} />
    <chip footprint="dip8" name="U1" pcbX={0} pcbY={18} />
    <connector standard="usb_c" name="J1" pcbX={14} pcbY={18} />
    <crystal frequency="16MHz" loadCapacitance="18pF" footprint="hc49" name="Y1" pcbX={28} pcbY={18} />

    <diode footprint="sod123" name="D1" pcbX={-28} pcbY={9} />
    <transistor type="npn" footprint="sot23" name="Q2" pcbX={-14} pcbY={9} />
    <fuse currentRating="2A" voltageRating="32V" footprint="0603" name="F1" pcbX={0} pcbY={9} />
    <inductor inductance="10uH" footprint="0603" name="L1" pcbX={14} pcbY={9} />
    <led color="red" footprint="0603" name="LED1" pcbX={28} pcbY={9} />

    <mosfet channelType="n" mosfetMode="enhancement" footprint="sot23" name="Q1" pcbX={-28} pcbY={0} />
    <opamp footprint="soic8" name="U2" pcbX={-14} pcbY={0} />
    <pinheader pinCount={4} gender="male" footprint="pinrow4" name="J2" pcbX={0} pcbY={0} />
    <pinout footprint="dip8" name="U3" pcbX={14} pcbY={0} />
    <potentiometer maxResistance="10k" footprint="pinrow3" name="RV1" pcbX={28} pcbY={0} />

    <pushbutton footprint="pushbutton" name="SW1" pcbX={-28} pcbY={-9} />
    <resistor resistance="1k" footprint="0402" name="R1" pcbX={-14} pcbY={-9} />
    <resonator frequency="16MHz" loadCapacitance="5pF" footprint="hc49" name="X1" pcbX={0} pcbY={-9} />
    <switch type="spst" footprint="pinrow2" name="SW2" pcbX={14} pcbY={-9} />
    <testpoint footprintVariant="pad" padShape="circle" padDiameter="1mm" name="TP1" pcbX={28} pcbY={-9} />

  </board>
)
`

test("preserves board source components", async () => {
  const circuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const converted = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Circuit",
  })

  const rendered = (await runTscircuitCode(converted)) as AnyCircuitElement[]
  const pcbSvg = convertCircuitJsonToPcbSvg(rendered)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")

  expect(
    rendered.filter((element) => element.type === "source_component"),
  ).toHaveLength(20)
  expect(
    rendered.some(
      (element) =>
        element.type === "pcb_component" &&
        element.center.x === -14 &&
        element.center.y === -9,
    ),
  ).toBe(true)
  expect(rendered.some((element) => element.type === "source_trace")).toBe(
    false,
  )
}, 30_000)

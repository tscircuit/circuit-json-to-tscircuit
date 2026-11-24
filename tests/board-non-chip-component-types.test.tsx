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
    '<potentiometer name="RV1" maxResistance="10kΩ" pinVariant="two_pin" footprint="pinrow3"',
  )
  expect(generatedTsx).toContain('<crystal name="Y1" frequency="16MHz"')
  expect(generatedTsx).toContain(
    '<fuse name="F1" currentRating={2} voltageRating={32} footprint="0603"',
  )
  expect(generatedTsx).toContain(
    '<testpoint name="TP1" footprintVariant="pad" padShape="circle" padDiameter="1.2mm"',
  )
  expect(generatedTsx).not.toContain("<schematicline")

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

test("retains custom localized footprint and non-default schematic symbols instead of overwriting them", async () => {
  const baseCircuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="20mm" height="12mm" routingDisabled>
        <resistor name="R_MOD" resistance="1k" footprint="0402" pcbX={-4} schX={-3} />
        <diode name="D_SCHOTTKY" footprint="sod123" pcbX={4} schX={3} />
      </board>
    )
  `)) as CircuitJson

  const rModSource = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_MOD",
  )
  const rModPcb = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "pcb_component" }> =>
      el.type === "pcb_component" &&
      el.source_component_id === rModSource?.source_component_id,
  )
  const dSchottkySource = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "D_SCHOTTKY",
  )

  const modifiedCircuitJson: CircuitJson = baseCircuitJson.map((element) => {
    if (
      element.type === "pcb_smtpad" &&
      element.pcb_component_id === rModPcb?.pcb_component_id &&
      element.shape === "rect"
    ) {
      return {
        ...element,
        width: 0.72,
        height: 0.9,
      }
    }
    if (
      element.type === "schematic_component" &&
      element.source_component_id === dSchottkySource?.source_component_id
    ) {
      return {
        ...element,
        symbol_name: "schottky_diode_right",
      }
    }
    return element
  })

  const generatedTsx = convertCircuitJsonToTscircuit(modifiedCircuitJson, {
    componentName: "ModifiedBoard",
  })

  expect(generatedTsx).toContain(
    '<resistor name="R_MOD" resistance="1kΩ" footprint={<footprint>',
  )
  expect(generatedTsx).not.toContain(
    'name="R_MOD" resistance="1kΩ" footprint="0402"',
  )
  expect(generatedTsx).not.toContain('<diode name="D_SCHOTTKY"')
  expect(generatedTsx).toContain('<chip name="D_SCHOTTKY"')

  const rendered = (await runTscircuitCode(generatedTsx)) as CircuitJson
  expect(rendered.filter((el) => el.type.includes("error"))).toEqual([])

  const renderedRModSource = rendered.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_MOD",
  )
  const renderedRModPcb = rendered.find(
    (el): el is Extract<CircuitJson[number], { type: "pcb_component" }> =>
      el.type === "pcb_component" &&
      el.source_component_id === renderedRModSource?.source_component_id,
  )
  const renderedRModPads = rendered.filter(
    (
      el,
    ): el is Extract<
      CircuitJson[number],
      { type: "pcb_smtpad"; shape: "rect" }
    > =>
      el.type === "pcb_smtpad" &&
      el.pcb_component_id === renderedRModPcb?.pcb_component_id &&
      el.shape === "rect",
  )
  expect(renderedRModPads).toHaveLength(2)
  for (const pad of renderedRModPads) {
    expect(pad.width).toBeCloseTo(0.72, 4)
    expect(pad.height).toBeCloseTo(0.9, 4)
  }
  expect(
    rendered.filter((el) => el.type === "schematic_path").length,
  ).toBeGreaterThan(0)
  expect(
    rendered.some(
      (el) => el.type === "schematic_text" && el.text === "D_SCHOTTKY",
    ),
  ).toBe(true)
}, 20_000)

test("preserves precise numeric ratings, unreproducible schematic labels, and silkscreen styling overrides", async () => {
  const baseCircuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="28mm" height="12mm" routingDisabled>
        <resistor name="R_PRECISE" resistance={1234.5} footprint="0402" pcbX={-8} schX={-6} />
        <resistor name="R_SILK" resistance="10k" footprint="0402" pcbX={0} schX={0} />
        <diode name="D_TVS" footprint="sod123" pcbX={8} schX={6} />
      </board>
    )
  `)) as CircuitJson

  const rPreciseSrc = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_PRECISE",
  )
  const rSilkSrc = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_SILK",
  )
  const rSilkPcb = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "pcb_component" }> =>
      el.type === "pcb_component" &&
      el.source_component_id === rSilkSrc?.source_component_id,
  )
  const dTvsSrc = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "D_TVS",
  )

  const customized: CircuitJson = baseCircuitJson.map((element) => {
    if (
      element.type === "source_component" &&
      element.source_component_id === rPreciseSrc?.source_component_id &&
      element.ftype === "simple_resistor"
    ) {
      return {
        ...element,
        resistance: 1234.5,
        display_resistance: "1.2kΩ",
      }
    }
    if (
      element.type === "schematic_component" &&
      element.source_component_id === rPreciseSrc?.source_component_id
    ) {
      return {
        ...element,
        symbol_display_value: "1.2kΩ",
      }
    }
    if (
      element.type === "pcb_silkscreen_path" &&
      element.pcb_component_id === rSilkPcb?.pcb_component_id
    ) {
      return {
        ...element,
        stroke_width: 0.35,
      }
    }
    if (
      element.type === "schematic_component" &&
      element.source_component_id === dTvsSrc?.source_component_id
    ) {
      return {
        ...element,
        symbol_display_value: "D1 / TVS-5V",
      }
    }
    return element
  })

  const generatedTsx = convertCircuitJsonToTscircuit(customized, {
    componentName: "PrecisionBoard",
  })

  expect(generatedTsx).toContain(
    '<resistor name="R_PRECISE" resistance={1234.5} footprint="0402"',
  )
  expect(generatedTsx).toContain(
    '<resistor name="R_SILK" resistance="10kΩ" footprint={<footprint>',
  )
  expect(generatedTsx).not.toContain('<diode name="D_TVS"')
  expect(generatedTsx).toContain('text={"D1 / TVS-5V"}')

  const rendered = (await runTscircuitCode(generatedTsx)) as CircuitJson
  expect(rendered.filter((el) => el.type.includes("error"))).toEqual([])
  const renderedPrecise = rendered.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_PRECISE",
  )
  expect(renderedPrecise).toMatchObject({
    ftype: "simple_resistor",
    resistance: 1234.5,
  })
}, 20_000)

test("preserves scaled schematic symbols, custom source port names, and rotated silkscreen text", async () => {
  const baseCircuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="32mm" height="14mm" routingDisabled>
        <resistor name="R_SCALED" resistance="2.2k" footprint="0402" pcbX={-10} schX={-8} />
        <resistor name="R_PORT" resistance="3.3k" footprint="0402" pcbX={0} schX={0} />
        <resistor name="R_TXTROT" resistance="4.7k" footprint="0402" pcbX={10} schX={8} />
        <resistor name="R_TXTSIZE" resistance="5.1k" footprint="0402" pcbX={0} pcbY={4} schX={0} schY={4} />
      </board>
    )
  `)) as CircuitJson

  const rScaledSrc = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_SCALED",
  )
  const rScaledSch = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "schematic_component" }> =>
      el.type === "schematic_component" &&
      el.source_component_id === rScaledSrc?.source_component_id,
  )
  const rPortSrc = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_PORT",
  )
  const rTxtRotSrc = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_TXTROT",
  )
  const rTxtRotPcb = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "pcb_component" }> =>
      el.type === "pcb_component" &&
      el.source_component_id === rTxtRotSrc?.source_component_id,
  )
  const rTxtSizeSrc = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "source_component" }> =>
      el.type === "source_component" && el.name === "R_TXTSIZE",
  )
  const rTxtSizePcb = baseCircuitJson.find(
    (el): el is Extract<CircuitJson[number], { type: "pcb_component" }> =>
      el.type === "pcb_component" &&
      el.source_component_id === rTxtSizeSrc?.source_component_id,
  )

  const customized: CircuitJson = baseCircuitJson.map((element) => {
    if (
      element.type === "schematic_component" &&
      element.schematic_component_id === rScaledSch?.schematic_component_id
    ) {
      return {
        ...element,
        size: {
          width: element.size.width * 2,
          height: element.size.height * 2,
        },
      }
    }
    if (
      element.type === "schematic_port" &&
      element.schematic_component_id === rScaledSch?.schematic_component_id &&
      rScaledSch
    ) {
      return {
        ...element,
        center: {
          x: rScaledSch.center.x + (element.center.x - rScaledSch.center.x) * 2,
          y: rScaledSch.center.y + (element.center.y - rScaledSch.center.y) * 2,
        },
      }
    }
    if (
      element.type === "source_port" &&
      element.source_component_id === rPortSrc?.source_component_id &&
      element.pin_number === 1
    ) {
      return {
        ...element,
        name: "CUSTOM_TERMINAL_A",
      }
    }
    if (
      element.type === "pcb_silkscreen_text" &&
      element.pcb_component_id === rTxtRotPcb?.pcb_component_id
    ) {
      return {
        ...element,
        ccw_rotation: 90,
      }
    }
    if (
      element.type === "pcb_silkscreen_text" &&
      element.pcb_component_id === rTxtSizePcb?.pcb_component_id
    ) {
      return {
        ...element,
        font_size: 1.25,
      }
    }
    return element
  })

  const generatedTsx = convertCircuitJsonToTscircuit(customized, {
    componentName: "InvariantsBoard",
  })

  expect(generatedTsx).not.toContain('<resistor name="R_SCALED"')
  expect(generatedTsx).toContain('<chip name="R_SCALED"')
  expect(generatedTsx).not.toContain('<resistor name="R_PORT"')
  expect(generatedTsx).toContain("CUSTOM_TERMINAL_A")
  expect(generatedTsx).toContain(
    '<resistor name="R_TXTROT" resistance="4.7kΩ" footprint={<footprint>',
  )
  expect(generatedTsx).toContain('pcbRotation="90deg"')
  expect(generatedTsx).toContain(
    '<resistor name="R_TXTSIZE" resistance="5.1kΩ" footprint={<footprint>',
  )
  expect(generatedTsx).toContain("fontSize={1.25}")

  const rendered = (await runTscircuitCode(generatedTsx)) as CircuitJson
  expect(rendered.filter((el) => el.type.includes("error"))).toEqual([])
}, 20_000)

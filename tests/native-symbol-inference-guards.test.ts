import { expect, test } from "bun:test"
import type { SchematicText } from "circuit-json"
import { getNativeSymbolTextReplacements } from "../lib/generate-board-schematic-tsx/get-native-symbol-text-replacements"
import { resolveNativeSchematicSymbolName } from "../lib/generate-board-schematic-tsx/resolve-native-schematic-symbol-name"
import {
  getNativeSymbolInferenceFixture,
  replaceComponentPortTraces,
} from "./helpers/get-native-symbol-inference-fixture"

test("does not infer a redundant-anode Schottky from separate anode nets", () => {
  const context = getNativeSymbolInferenceFixture({
    fixtureName: "lm5155evm-fly",
    componentName: "D1",
  })
  const assignments = context.sourcePorts.map((sourcePort, portIndex) => ({
    sourcePort,
    sourceTraceId: `source_trace_separate_${portIndex}`,
  }))
  const circuitJson = replaceComponentPortTraces({ ...context, assignments })

  expect(
    resolveNativeSchematicSymbolName({
      circuitJson,
      schematicComponent: context.schematicComponent,
    }),
  ).toBeUndefined()
})

test("does not infer an ordinary redundant-anode diode as Schottky", () => {
  const context = getNativeSymbolInferenceFixture({
    fixtureName: "lm5155evm-fly",
    componentName: "D1",
  })
  const ordinaryDiodeCircuitJson = context.circuitJson.filter(
    (element) =>
      element.type !== "schematic_line" ||
      ![
        "schematic_line_altium_1235_line",
        "schematic_line_altium_1236_line",
        "schematic_line_altium_1237_line",
        "schematic_line_altium_1238_line",
      ].includes(element.schematic_line_id),
  )

  expect(
    resolveNativeSchematicSymbolName({
      circuitJson: ordinaryDiodeCircuitJson,
      schematicComponent: context.schematicComponent,
    }),
  ).toBeUndefined()
})

test("does not infer a four-terminal capacitor without paired electrodes", () => {
  const context = getNativeSymbolInferenceFixture({
    fixtureName: "lmg342x-bb-evm",
    componentName: "C22",
  })
  const assignments = context.sourcePorts.map((sourcePort, portIndex) => ({
    sourcePort,
    sourceTraceId: `source_trace_separate_${portIndex}`,
  }))
  const circuitJson = replaceComponentPortTraces({ ...context, assignments })

  expect(
    resolveNativeSchematicSymbolName({
      circuitJson,
      schematicComponent: context.schematicComponent,
    }),
  ).toBeUndefined()
})

test("does not infer a coupled inductor with different winding pairs", () => {
  const context = getNativeSymbolInferenceFixture({
    fixtureName: "lmg342x-bb-evm",
    componentName: "L3",
  })
  const circuitJson = context.circuitJson.map((element) => {
    if (element.type !== "schematic_port") return element
    const sourcePort = context.sourcePorts.find(
      (candidate) => candidate.source_port_id === element.source_port_id,
    )
    if (sourcePort?.pin_number === 2) {
      return { ...element, side_of_component: "top" as const }
    }
    if (sourcePort?.pin_number === 3) {
      return { ...element, side_of_component: "bottom" as const }
    }
    return element
  })

  expect(
    resolveNativeSchematicSymbolName({
      circuitJson,
      schematicComponent: context.schematicComponent,
    }),
  ).toBeUndefined()
})

test("keeps imported five-terminal MOSFET value placement", () => {
  const context = getNativeSymbolInferenceFixture({
    fixtureName: "lm251772evm-pd",
    componentName: "Q7",
  })
  const importedValueText = context.circuitJson.find(
    (element) =>
      element.type === "schematic_text" &&
      element.text === "ISC0703NLSATMA1" &&
      element.rotation === 90,
  )
  expect(importedValueText?.type).toBe("schematic_text")
  if (importedValueText?.type !== "schematic_text") return

  const replacement = getNativeSymbolTextReplacements(context.circuitJson).find(
    (candidate) =>
      candidate.schematicComponentId ===
      context.schematicComponent.schematic_component_id,
  )
  expect(replacement?.includeNativeDisplayText).toBe(false)
  expect(
    replacement?.importedTextIds.has(importedValueText.schematic_text_id),
  ).toBe(false)
})

test("does not infer an N-channel symbol for a P-channel MOSFET", () => {
  const context = getNativeSymbolInferenceFixture({
    fixtureName: "lm251772evm-pd",
    componentName: "Q7",
  })
  const pChannelCircuitJson = context.circuitJson.map((element) =>
    element.type === "source_component" &&
    element.source_component_id ===
      context.schematicComponent.source_component_id
      ? { ...element, display_value: "P-channel MOSFET" }
      : element,
  )

  expect(
    resolveNativeSchematicSymbolName({
      circuitJson: pChannelCircuitJson,
      schematicComponent: context.schematicComponent,
    }),
  ).toBeUndefined()
})

test("keeps both imported coupled-inductor winding values", () => {
  const context = getNativeSymbolInferenceFixture({
    fixtureName: "lmg342x-bb-evm",
    componentName: "L3",
  })
  const importedValueTexts = context.circuitJson.filter(
    (element): element is SchematicText =>
      element.type === "schematic_text" && element.text === "47uH",
  )
  expect(importedValueTexts).toHaveLength(2)

  const replacement = getNativeSymbolTextReplacements(context.circuitJson).find(
    (candidate) =>
      candidate.schematicComponentId ===
      context.schematicComponent.schematic_component_id,
  )
  expect(replacement?.includeNativeDisplayText).toBe(false)
  for (const importedValueText of importedValueTexts) {
    expect(
      replacement?.importedTextIds.has(importedValueText.schematic_text_id),
    ).toBe(false)
  }
})

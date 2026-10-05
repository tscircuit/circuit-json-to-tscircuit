import { expect, test } from "bun:test"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"

test(
  "TI LM251772EVM-PD Circuit JSON to tscircuit round trip",
  async () => {
    const result = await createTiEvmRoundtrip({
      componentName: "Lm251772EvmPd",
      fixtureName: "lm251772evm-pd",
    })

    const denseBoxComponent = result.sourceCircuitJson.find(
      (elm) =>
        elm.type === "schematic_component" &&
        elm.is_box_with_pins &&
        elm.size.height > 4,
    )
    if (denseBoxComponent?.type !== "schematic_component")
      throw new Error("Missing dense source box component")
    const sourcePort = result.sourceCircuitJson.find(
      (elm) =>
        elm.type === "schematic_port" &&
        elm.schematic_component_id ===
          denseBoxComponent.schematic_component_id &&
        elm.side_of_component === "left",
    )
    if (sourcePort?.type !== "schematic_port")
      throw new Error("Missing source box port")
    if (sourcePort.display_pin_label_font_size === undefined)
      throw new Error("Missing source box port label font size")
    const sourcePortDefinition = result.sourceCircuitJson.find(
      (elm) =>
        elm.type === "source_port" &&
        elm.source_port_id === sourcePort.source_port_id,
    )
    if (sourcePortDefinition?.type !== "source_port")
      throw new Error("Missing source port definition")
    const renderedPinLabel = result.renderedCircuitJson.find(
      (elm) =>
        elm.type === "schematic_text" &&
        elm.text === sourcePortDefinition.name &&
        elm.position.x ===
          denseBoxComponent.center.x - denseBoxComponent.size.width / 2 + 0.1 &&
        elm.position.y === sourcePort.center.y,
    )
    expect(renderedPinLabel).toMatchObject({
      anchor: "center_left",
      font_size: sourcePort.display_pin_label_font_size,
    })

    expect(result.generatedTscircuit).toMatchSnapshot()
    await expect(result.pcbComparisonSvg).toMatchSvgSnapshot(
      import.meta.path,
      "pcb-comparison",
    )
    await expect(result.schematicComparisonSvg).toMatchSvgSnapshot(
      import.meta.path,
      "schematic-comparison",
    )
  },
  { timeout: 120_000 },
)

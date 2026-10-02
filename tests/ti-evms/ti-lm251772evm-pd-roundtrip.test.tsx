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
      font_size: 0.15,
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

    // These 4 keepouts are circular mounting-screw keepouts expressed as
    // shape:"outline"; they must survive the round trip as shape:"circle".
    const keepouts = result.renderedCircuitJson.filter(
      (element) => element.type === "pcb_keepout",
    )
    expect(keepouts).toHaveLength(4)
    expect(keepouts.every((keepout) => keepout.shape === "circle")).toBe(true)
  },
  // Raised from 120s: this board's conversion and render time grew to ~160s
  // after upstream began preserving board schematics with native primitives
  // (starting in #131). Confirmed on a pristine e25350f checkout with no
  // keepout changes: 162s against this test's existing 120s budget. Unrelated
  // to the pcb_keepout work in this branch.
  { timeout: 240_000 },
)

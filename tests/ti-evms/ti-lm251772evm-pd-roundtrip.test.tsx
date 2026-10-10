import { expect, test } from "bun:test"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"

const pointsMatch = (
  firstPoint: { x: number; y: number },
  secondPoint: { x: number; y: number },
) =>
  Math.abs(firstPoint.x - secondPoint.x) < 0.00001 &&
  Math.abs(firstPoint.y - secondPoint.y) < 0.00001

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

    const sourceKeepouts = result.sourceCircuitJson.filter(
      (element) => element.type === "pcb_keepout",
    )
    const renderedKeepouts = result.renderedCircuitJson.filter(
      (element) => element.type === "pcb_keepout",
    )
    expect(sourceKeepouts).toHaveLength(4)
    expect(renderedKeepouts).toHaveLength(sourceKeepouts.length)
    expect(
      renderedKeepouts.every(
        (keepout) =>
          keepout.shape === "circle" && keepout.layers.includes("top"),
      ),
    ).toBe(true)

    const sourceSchematicGraphics = result.sourceCircuitJson.filter(
      (element) => element.type === "schematic_graphic",
    )
    const renderedSchematicGraphics = result.renderedCircuitJson.filter(
      (element) => element.type === "schematic_graphic",
    )
    expect(sourceSchematicGraphics).toHaveLength(1)
    expect(renderedSchematicGraphics).toHaveLength(
      sourceSchematicGraphics.length,
    )
    expect(renderedSchematicGraphics[0]?.asset?.url).toStartWith(
      "data:image/svg+xml",
    )

    const j2Port = result.sourceCircuitJson.find(
      (element) =>
        element.type === "schematic_port" &&
        element.schematic_port_id === "schematic_port_altium_326",
    )
    if (j2Port?.type !== "schematic_port")
      throw new Error("Missing LM251772EVM-PD J2 port")
    const j2Component = result.sourceCircuitJson.find(
      (element) =>
        element.type === "schematic_component" &&
        element.schematic_component_id === j2Port.schematic_component_id,
    )
    if (
      j2Component?.type !== "schematic_component" ||
      !j2Component.is_box_with_pins ||
      j2Port.side_of_component !== "right"
    ) {
      throw new Error("LM251772EVM-PD J2 must be a right-facing box pin")
    }
    const j2BodyEdge = {
      x: j2Component.center.x + j2Component.size.width / 2,
      y: j2Port.center.y,
    }
    const sourceTraceEdge = result.sourceCircuitJson
      .filter((element) => element.type === "schematic_trace")
      .flatMap((trace) => trace.edges)
      .find((edge) => edge.to_schematic_port_id === j2Port.schematic_port_id)
    if (!sourceTraceEdge) throw new Error("Missing trace connected to J2")
    const renderedWireIndex = result.renderedCircuitJson.findIndex(
      (element) =>
        element.type === "schematic_line" &&
        element.color === "#009600" &&
        pointsMatch({ x: element.x1, y: element.y1 }, sourceTraceEdge.from) &&
        pointsMatch({ x: element.x2, y: element.y2 }, sourceTraceEdge.to),
    )
    const renderedPinIndex = result.renderedCircuitJson.findIndex(
      (element) =>
        element.type === "schematic_line" &&
        ((pointsMatch({ x: element.x1, y: element.y1 }, j2BodyEdge) &&
          pointsMatch({ x: element.x2, y: element.y2 }, j2Port.center)) ||
          (pointsMatch({ x: element.x2, y: element.y2 }, j2BodyEdge) &&
            pointsMatch({ x: element.x1, y: element.y1 }, j2Port.center))),
    )
    expect(renderedWireIndex).toBeGreaterThanOrEqual(0)
    expect(renderedPinIndex).toBeGreaterThan(renderedWireIndex)

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

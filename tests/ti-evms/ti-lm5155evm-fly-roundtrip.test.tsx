import { expect, test } from "bun:test"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"

test(
  "TI LM5155EVM-FLY Circuit JSON to tscircuit round trip",
  async () => {
    const result = await createTiEvmRoundtrip({
      componentName: "Lm5155EvmFly",
      fixtureName: "lm5155evm-fly",
    })

    // The imported drawing must survive evaluation, not just TSX generation.
    const schematicTexts = result.renderedCircuitJson.filter(
      (elm) => elm.type === "schematic_text",
    )
    expect(schematicTexts.some((elm) => elm.text === "U1")).toBe(true)
    expect(schematicTexts.some((elm) => elm.text === "LM5155DSST")).toBe(true)
    expect(schematicTexts.some((elm) => elm.text === "T1")).toBe(true)
    const schematicPaths = result.renderedCircuitJson.filter(
      (elm) => elm.type === "schematic_path",
    )
    expect(schematicPaths.length).toBeGreaterThan(300)
    // Direct converters must preserve source primitive coordinates and styling.
    const sourcePath = result.sourceCircuitJson.find(
      (elm) => elm.type === "schematic_path",
    )
    if (sourcePath?.type !== "schematic_path")
      throw new Error("Missing source path")
    const convertedPath = schematicPaths.find(
      (path) =>
        JSON.stringify(path.points) === JSON.stringify(sourcePath.points),
    )
    expect(convertedPath?.stroke_color).toBe(sourcePath.stroke_color)
    expect(convertedPath?.stroke_width).toBe(sourcePath.stroke_width)
    expect(convertedPath?.fill_color).toBe(sourcePath.fill_color)

    const sourceWire = result.sourceCircuitJson.find(
      (elm) => elm.type === "schematic_trace",
    )
    if (sourceWire?.type !== "schematic_trace")
      throw new Error("Missing source wire")
    const firstEdge = sourceWire.edges[0]!
    expect(
      schematicPaths.some((path) =>
        path.points.some(
          (point) =>
            Math.abs(point.x - firstEdge.from.x) < 0.00001 &&
            Math.abs(point.y - firstEdge.from.y) < 0.00001,
        ),
      ),
    ).toBe(true)

    expect(result.generatedTscircuit).toMatchInlineSnapshot(`
      "export const Lm5155EvmFly = () => (
        <board width="85.09mm" height="41.91mm" outline={[{ x: 17.5768, y: 38.9636 }, { x: 17.5768, y: 80.8736 }, { x: 102.6668, y: 80.8736 }, { x: 102.6668, y: 38.9636 }, { x: 17.5768, y: 38.9636 }]} thickness="1.6mm" layers={2} material="fr4">
          <chip footprint={<footprint>
              <platedhole  portHints={["1"]} pcbX="73.2028mm" pcbY="51.663599999999995mm" outerDiameter="1.905mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="31.927799999999998mm" pcbY="59.029599999999995mm" outerDiameter="1.905mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="28.4988mm" pcbY="53.187599999999996mm" holeShape="circle" padShape="rect" holeDiameter="1.016mm" rectPadWidth="1.54999944mm" rectPadHeight="1.54999944mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="28.4988mm" pcbY="50.6476mm" outerDiameter="1.54999944mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="28.4988mm" pcbY="48.1076mm" outerDiameter="1.54999944mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["4"]} pcbX="28.4988mm" pcbY="45.5676mm" outerDiameter="1.54999944mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["5"]} pcbX="28.4988mm" pcbY="43.0276mm" outerDiameter="1.54999944mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="22.148799999999998mm" pcbY="63.81560008mm" holeShape="circle" padShape="rect" holeDiameter="1.29999994mm" rectPadWidth="1.79999894mm" rectPadHeight="1.79999894mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="22.148799999999998mm" pcbY="58.81559992mm" outerDiameter="1.79999894mm" holeDiameter="1.29999994mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="98.09479999999999mm" pcbY="53.227599919999996mm" holeShape="circle" padShape="rect" holeDiameter="1.29999994mm" rectPadWidth="1.79999894mm" rectPadHeight="1.79999894mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="98.09479999999999mm" pcbY="58.22760008mm" outerDiameter="1.79999894mm" holeDiameter="1.29999994mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="19.8628mm" pcbY="68.9356mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="99.1108mm" pcbY="63.373mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="19.8628mm" pcbY="54.203599999999994mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="99.1108mm" pcbY="48.6156mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="44.6278mm" pcbY="42.9514mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <via pcbX="38.5647946mm" pcbY="49.8505988mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="40.714797919999995mm" pcbY="49.8505988mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="39.639796260000004mm" pcbY="49.8505988mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="50.7238mm" pcbY="54.584599999999995mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="51.9938mm" pcbY="54.584599999999995mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="51.9938mm" pcbY="55.6006mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="30.784799999999997mm" pcbY="42.1386mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="33.4518mm" pcbY="42.1386mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="32.94279924mm" pcbY="45.94820376mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.623999999999995mm" pcbY="59.1312mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.2176mm" pcbY="58.2168mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.2176mm" pcbY="57.1246mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.3352mm" pcbY="59.8424mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.1226mm" pcbY="60.6044mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="33.0708mm" pcbY="50.901599999999995mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="52.120799999999996mm" pcbY="68.4276mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="49.580799999999996mm" pcbY="71.9836mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="48.3108mm" pcbY="71.9836mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="49.580799999999996mm" pcbY="70.96759999999999mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="43.4848mm" pcbY="59.5376mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="43.4848mm" pcbY="58.0136mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.7708mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="47.294799999999995mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="64.05879999999999mm" pcbY="52.9336mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.0928mm" pcbY="40.7416mm" holeDiameter="0.6095999999999999mm" outerDiameter="0.9144mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="88.1888mm" pcbY="40.7162mm" holeDiameter="0.6095999999999999mm" outerDiameter="0.9144mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="33.0708mm" pcbY="54.4576mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.42479999999999mm" pcbY="42.773599999999995mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.4408mm" pcbY="42.773599999999995mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.090599999999995mm" pcbY="70.0532mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.090599999999995mm" pcbY="67.5132mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.97379626mm" pcbY="53.8226mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="38.11579626mm" pcbY="52.5526mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.41779626mm" pcbY="46.9646mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.43319628mm" pcbY="53.8226mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.89379626mm" pcbY="45.9486mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.22779626mm" pcbY="49.2506mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.8228mm" pcbY="68.9356mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="64.6938mm" pcbY="78.71459999999999mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="64.82079999999999mm" pcbY="77.0636mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.4108mm" pcbY="53.4416mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.1248mm" pcbY="53.4416mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.99879892mm" pcbY="72.8185996mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="72.7456mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9006mm" pcbY="68.7832mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9006mm" pcbY="67.5132mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9006mm" pcbY="70.0532mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.6306mm" pcbY="70.0532mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.6306mm" pcbY="68.7832mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.6306mm" pcbY="67.5132mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.3606mm" pcbY="70.0532mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.3606mm" pcbY="68.7832mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="49.580799999999996mm" pcbY="68.4276mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="49.580799999999996mm" pcbY="67.1576mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="48.3108mm" pcbY="68.4276mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="48.3108mm" pcbY="67.1576mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="48.3108mm" pcbY="70.96759999999999mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="50.7238mm" pcbY="55.6006mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="49.580799999999996mm" pcbY="69.6976mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="48.3108mm" pcbY="69.6976mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.1708mm" pcbY="55.4736mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.2028mm" pcbY="55.4736mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.18679999999999mm" pcbY="55.4736mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.47279999999999mm" pcbY="55.4736mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.4888mm" pcbY="55.4736mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.5048mm" pcbY="55.4736mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.1708mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.2028mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.18679999999999mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.47279999999999mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.4888mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.5048mm" pcbY="56.7436mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="56.6928mm" pcbY="52.9336mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="36.8808mm" pcbY="65.6336mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="36.8808mm" pcbY="61.8236mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="36.8808mm" pcbY="63.093599999999995mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="36.8808mm" pcbY="64.36359999999999mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="38.1508mm" pcbY="61.8236mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="38.1508mm" pcbY="65.6336mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="38.1508mm" pcbY="63.093599999999995mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="38.1508mm" pcbY="64.36359999999999mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="43.495137799999995mm" pcbY="44.90654468mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="34.30579626mm" pcbY="51.7906mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.97379626mm" pcbY="52.2986mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.3606mm" pcbY="67.5132mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.090599999999995mm" pcbY="68.7832mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="34.0868mm" pcbY="66.1416mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="32.3088mm" pcbY="66.1416mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="50.8508mm" pcbY="68.4276mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="50.8508mm" pcbY="71.9836mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="33.8328mm" pcbY="74.01559999999999mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="32.3088mm" pcbY="74.01559999999999mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="38.36979626mm" pcbY="43.916599999999995mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="56.6928mm" pcbY="78.33359999999999mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="56.6928mm" pcbY="77.3176mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="55.6768mm" pcbY="77.3176mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="55.6768mm" pcbY="78.33359999999999mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.6158mm" pcbY="65.6336mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="76.90829932mm" pcbY="65.63359745999999mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="76.90829932mm" pcbY="64.36359746mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="76.90829932mm" pcbY="66.90359745999999mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="75.63829932mm" pcbY="64.36359746mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="74.36829931999999mm" pcbY="64.36359746mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="74.36829931999999mm" pcbY="66.90359745999999mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="74.36829931999999mm" pcbY="65.63359745999999mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="75.63829932mm" pcbY="66.90359745999999mm" holeDiameter="0.254mm" outerDiameter="0.5588mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="35.1028mm" pcbY="54.3929824mm" holeDiameter="0.254mm" outerDiameter="0.6604mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="52.57179986mm" pcbY="48.79734207999999mm" holeDiameter="0.254mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <smtpad portHints={["1"]} pcbX="40.88979629999999mm" pcbY="50.800596899999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="40.38979476mm" pcbY="50.800596899999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["3"]} pcbX="39.88979576mm" pcbY="50.800596899999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["4"]} pcbX="39.389796759999996mm" pcbY="50.800596899999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["5"]} pcbX="38.889795219999996mm" pcbY="50.800596899999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["6"]} pcbX="38.38979622mm" pcbY="50.800596899999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["7"]} pcbX="38.38979622mm" pcbY="48.900598159999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["8"]} pcbX="38.889795219999996mm" pcbY="48.900598159999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["9"]} pcbX="39.389796759999996mm" pcbY="48.900598159999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["10"]} pcbX="39.88979576mm" pcbY="48.900598159999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["11"]} pcbX="40.38979476mm" pcbY="48.900598159999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["12"]} pcbX="40.88979629999999mm" pcbY="48.900598159999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" shape="rect" />
      <smtpad portHints={["13"]} pcbX="39.639796260000004mm" pcbY="49.85059626mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.055000029699999994mm" width="1.00000054mm" height="2.64999978mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="50.215799999999994mm" pcbY="50.07760114mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="50.215799999999994mm" pcbY="48.6776014mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["6"]} pcbX="68.32179884mm" pcbY="67.07760015999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.052399996799999994mm" width="2.08000092mm" height="1.30999992mm" shape="rect" />
      <smtpad portHints={["7"]} pcbX="68.32179884mm" pcbY="64.57760008mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.052399996799999994mm" width="2.08000092mm" height="1.30999992mm" shape="rect" />
      <smtpad portHints={["9"]} pcbX="68.32179884mm" pcbY="59.57759992mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.052399996799999994mm" width="2.08000092mm" height="1.30999992mm" shape="rect" />
      <smtpad portHints={["10"]} pcbX="68.32179884mm" pcbY="57.077599840000005mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.052399996799999994mm" width="2.08000092mm" height="1.30999992mm" shape="rect" />
      <smtpad portHints={["5"]} pcbX="51.92179862mm" pcbY="67.07760015999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.052399996799999994mm" width="2.08000092mm" height="1.30999992mm" shape="rect" />
      <smtpad portHints={["3"]} pcbX="51.92179862mm" pcbY="62.0776mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.052399996799999994mm" width="2.08000092mm" height="1.30999992mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="51.92179862mm" pcbY="59.57759992mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.052399996799999994mm" width="2.08000092mm" height="1.30999992mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="51.92179862mm" pcbY="57.077599840000005mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.052399996799999994mm" width="2.08000092mm" height="1.30999992mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="36.8808mm" pcbY="56.42760113999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="36.8808mm" pcbY="55.027601399999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="84.56779886mm" pcbY="40.766999999999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="85.9677986mm" pcbY="40.766999999999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="80.0608mm" pcbY="66.45759886mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="80.0608mm" pcbY="67.8575986mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="91.9988mm" pcbY="56.80860113999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="91.9988mm" pcbY="55.408601399999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="32.0548mm" pcbY="50.1045988mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="32.0548mm" pcbY="49.5965988mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="38.38978606mm" pcbY="49.123599999999996mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="38.38978606mm" pcbY="49.6316mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="36.8808mm" pcbY="50.71260114mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="36.8808mm" pcbY="49.3126014mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="67.8688mm" pcbY="42.076601139999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="67.8688mm" pcbY="40.6766014mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["3"]} pcbX="35.31180136mm" pcbY="44.04359746mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.14999969999999999mm" width="0.5999987999999999mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="32.91180108mm" pcbY="43.09359936mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.14999969999999999mm" width="0.5999987999999999mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="32.91180108mm" pcbY="44.9935981mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.14999969999999999mm" width="0.5999987999999999mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="49.5308001mm" pcbY="56.47760358mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.5999987999999999mm" height="0.5999987999999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="49.5308001mm" pcbY="54.2776029mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.5999987999999999mm" height="0.5999987999999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="88.1888mm" pcbY="40.7162mm" layer="top" solderMaskMargin="0.04999989999999999mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="82.0928mm" pcbY="40.7416mm" layer="top" solderMaskMargin="0.04999989999999999mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="51.10482032mm" pcbY="53.60237437999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="51.10482032mm" pcbY="52.20237464mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="36.83mm" pcbY="53.37960114mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="36.83mm" pcbY="51.9796014mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="42.749795119999995mm" pcbY="50.7746mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="44.14979486mm" pcbY="50.7746mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="41.41779626mm" pcbY="43.562597659999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="41.41779626mm" pcbY="44.9625974mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.749795119999995mm" pcbY="53.8226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="44.14979486mm" pcbY="53.8226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="38.36979626mm" pcbY="46.39460114mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="38.36979626mm" pcbY="44.9946014mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="36.84579626mm" pcbY="43.47059886mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="36.84579626mm" pcbY="44.870598599999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="44.75479746mm" pcbY="67.9196mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.27mm" height="1.6001999999999998mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="46.786797459999995mm" pcbY="67.9196mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.27mm" height="1.6001999999999998mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="22.14872888mm" pcbY="76.55567620000001mm" layer="top" solderMaskMargin="0.49999899999999997mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="98.34872379999999mm" pcbY="76.55567620000001mm" layer="top" solderMaskMargin="0.49999899999999997mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="98.34872379999999mm" pcbY="43.2816762mm" layer="top" solderMaskMargin="0.49999899999999997mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["2"]} pcbX="44.75479746mm" pcbY="71.9934044mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.27mm" height="1.6001999999999998mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="46.786797459999995mm" pcbY="71.9934044mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.27mm" height="1.6001999999999998mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="44.75479746mm" pcbY="69.9516mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.27mm" height="1.6001999999999998mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="46.786797459999995mm" pcbY="69.9516mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.27mm" height="1.6001999999999998mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="34.11379512mm" pcbY="48.9966mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="35.51379486mm" pcbY="48.9966mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="39.89379626mm" pcbY="44.96259994mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="39.89379626mm" pcbY="43.5626002mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="35.5137974mm" pcbY="50.520599999999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="34.113797659999996mm" pcbY="50.520599999999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="40.233599999999996mm" pcbY="55.81800114mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="40.233599999999996mm" pcbY="54.418001399999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="35.32179626mm" pcbY="51.85259886mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="35.32179626mm" pcbY="53.252598600000006mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.749795119999995mm" pcbY="49.2506mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="44.14979486mm" pcbY="49.2506mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="44.1497974mm" pcbY="47.7266mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="42.74979766mm" pcbY="47.7266mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="51.43680086mm" pcbY="70.96759999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.5999993399999999mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="54.83679914mm" pcbY="70.96759999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.5999993399999999mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="32.50080114mm" pcbY="53.187599999999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="31.100801399999998mm" pcbY="53.187599999999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="75.23479999999999mm" pcbY="46.77560114mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="75.23479999999999mm" pcbY="45.3756014mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="73.71079999999999mm" pcbY="42.83559886mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="73.71079999999999mm" pcbY="44.235598599999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="73.77279886mm" pcbY="41.5036mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="75.17279860000001mm" pcbY="41.5036mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="67.80680113999999mm" pcbY="47.218599999999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="66.40680139999999mm" pcbY="47.218599999999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="67.8688mm" pcbY="44.246599339999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="67.8688mm" pcbY="45.64659908mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="75.7428mm" pcbY="61.49559964mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.69999968mm" height="1.29999994mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="75.7428mm" pcbY="58.59560036mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.69999968mm" height="1.29999994mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="72.18679999999999mm" pcbY="61.49559964mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.69999968mm" height="1.29999994mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="72.18679999999999mm" pcbY="58.59560036mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.69999968mm" height="1.29999994mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="78.2828mm" pcbY="60.74560114mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="78.2828mm" pcbY="59.34560139999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="33.0708mm" pcbY="63.15760037999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.9999996199999996mm" height="2.50000008mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="33.0708mm" pcbY="71.15759962mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.9999996199999996mm" height="2.50000008mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="88.1888mm" pcbY="70.90359962000001mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.9999996199999996mm" height="2.00000108mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="88.1888mm" pcbY="62.90360037999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.9999996199999996mm" height="2.00000108mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="40.6049988mm" pcbY="52.2478mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.762mm" height="0.762mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="39.1825988mm" pcbY="52.2478mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.762mm" height="0.762mm" shape="rect" />
      <smtpad portHints={["3"]} pcbX="72.14979982mm" pcbY="45.17260206mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.050999898mm" width="0.5999987999999999mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="69.74979954mm" pcbY="44.222603959999994mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.050999898mm" width="0.5999987999999999mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="69.74979954mm" pcbY="46.1226027mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.050999898mm" width="0.5999987999999999mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="71.88080112mm" pcbY="66.67360046mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.27mm" height="1.39999974mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="71.88080112mm" pcbY="64.59359954mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.27mm" height="1.39999974mm" shape="rect" />
      <smtpad portHints={["3"]} pcbX="75.59330068mm" pcbY="65.63360254mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="4.72000072mm" height="4.80000056mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="65.3288mm" pcbY="42.203601139999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="65.3288mm" pcbY="40.8036014mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["4"]} pcbX="57.3777999mm" pcbY="42.1386mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8000009399999999mm" height="1.44999964mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="57.3777999mm" pcbY="43.4086mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8000009399999999mm" height="1.44999964mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="63.6278001mm" pcbY="43.4086mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8000009399999999mm" height="1.44999964mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="63.6278001mm" pcbY="42.1386mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8000009399999999mm" height="1.44999964mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.97579924mm" pcbY="64.4906mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.9100007199999999mm" height="0.50999898mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="42.97579924mm" pcbY="63.2206mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.9100007199999999mm" height="0.50999898mm" shape="rect" />
      <smtpad portHints={["3"]} pcbX="42.97579924mm" pcbY="61.950599999999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.9100007199999999mm" height="0.50999898mm" shape="rect" />
      <smtpad portHints={["4"]} pcbX="42.97579924mm" pcbY="60.6806mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.9100007199999999mm" height="0.50999898mm" shape="rect" />
      <smtpad portHints={["5"]} pcbX="48.565800759999995mm" pcbY="60.6806mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.9100007199999999mm" height="0.50999898mm" shape="rect" />
      <smtpad portHints={["6"]} pcbX="48.565800759999995mm" pcbY="61.950599999999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.9100007199999999mm" height="0.50999898mm" shape="rect" />
      <smtpad portHints={["7"]} pcbX="48.565800759999995mm" pcbY="63.2206mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.9100007199999999mm" height="0.50999898mm" shape="rect" />
      <smtpad portHints={["8"]} pcbX="48.565800759999995mm" pcbY="64.4906mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.9100007199999999mm" height="0.50999898mm" shape="rect" />
      <smtpad portHints={["9"]} pcbX="46.775801799999996mm" pcbY="62.5856mm" layer="top" solderMaskMargin="-2.50000008mm" cornerRadius="0.0449000118mm" width="4.49000118mm" height="4.57000102mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="47.603628439999994mm" pcbY="74.2093004mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.5999993399999999mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="44.20363016mm" pcbY="74.2093004mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.5999993399999999mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="44.16142806mm" pcbY="52.2986mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.76142832mm" pcbY="52.2986mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="38.25049754mm" pcbY="53.630601399999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="38.25049754mm" pcbY="55.030601139999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="44.14979486mm" pcbY="46.2026mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.749795119999995mm" pcbY="46.2026mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="85.3948mm" pcbY="50.45760038mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.9999996199999996mm" height="2.00000108mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="85.3948mm" pcbY="58.45759962mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.9999996199999996mm" height="2.00000108mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="71.61279556mm" pcbY="41.50359746mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.0493499013mm" width="0.46999906mm" height="0.5999987999999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="69.71279682mm" pcbY="40.85359876mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.0493499013mm" width="0.46999906mm" height="0.5999987999999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="69.71279682mm" pcbY="42.153598699999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.0493499013mm" width="0.46999906mm" height="0.5999987999999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="46.482mm" pcbY="58.547mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.053399969400000004mm" width="3.43000076mm" height="1.7799989799999998mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="62.502801080000005mm" pcbY="52.5526mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.4000008200000003mm" height="1.5999993399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="58.50280146mm" pcbY="52.5526mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.4000008200000003mm" height="1.5999993399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="62.502801080000005mm" pcbY="78.0796mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.4000008200000003mm" height="1.5999993399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="58.50280146mm" pcbY="78.0796mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.4000008200000003mm" height="1.5999993399999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="57.4548mm" pcbY="70.49159891999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.00000108mm" height="2.00000108mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="57.4548mm" pcbY="74.49159854mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.00000108mm" height="2.00000108mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.5848mm" pcbY="67.8575986mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="81.5848mm" pcbY="66.45759886mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="47.8359978mm" pcbY="53.52965672mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="47.8359978mm" pcbY="54.92965646mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="41.46579972mm" pcbY="63.3476mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.74999958mm" height="0.6500012399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="39.91580028mm" pcbY="63.3476mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.74999958mm" height="0.6500012399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="69.21280035999999mm" pcbY="71.2216mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.69999968mm" height="1.29999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="72.11279964mm" pcbY="71.2216mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="2.69999968mm" height="1.29999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="49.04379828mm" pcbY="74.14259745999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.4000008200000003mm" height="1.29999994mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="54.94379918mm" pcbY="74.14259745999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.4000008200000003mm" height="1.29999994mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="73.8378mm" pcbY="68.98640254mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.762mm" height="0.762mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="73.8378mm" pcbY="70.40880254mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.762mm" height="0.762mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="66.34479999999999mm" pcbY="45.64659908mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="66.34479999999999mm" pcbY="44.246599339999996mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="54.01380104mm" pcbY="52.158600279999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="52.51380149999999mm" pcbY="52.158600279999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="48.4894001mm" pcbY="50.7125986mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.5999987999999999mm" height="0.5999987999999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="48.4894001mm" pcbY="48.51259792mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.5999987999999999mm" height="0.5999987999999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="73.71079999999999mm" pcbY="46.775598599999995mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="73.71079999999999mm" pcbY="45.37559886mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={180} shape="rotated_rect" />
      <silkscreenpath route={[{"x":72.26080035999999,"y":63.08360002},{"x":72.25951709177262,"y":63.103178909675144},{"x":72.25568924416561,"y":63.12242279911966},{"x":72.24938231271283,"y":63.14100242004972},{"x":72.24070421076004,"y":63.158599869999996},{"x":72.22980342303768,"y":63.17491405172287},{"x":72.21686646504595,"y":63.18966582504595},{"x":72.20211469172287,"y":63.202602783037676},{"x":72.18580050999999,"y":63.21350357076004},{"x":72.16820306004973,"y":63.22218167271283},{"x":72.14962343911967,"y":63.228488604165605},{"x":72.13037954967515,"y":63.23231645177261},{"x":72.11080066,"y":63.233599719999994},{"x":72.09122177032485,"y":63.23231645177261},{"x":72.07197788088033,"y":63.228488604165605},{"x":72.05339825995027,"y":63.22218167271283},{"x":72.03580081,"y":63.21350357076004},{"x":72.01948662827712,"y":63.202602783037676},{"x":72.00473485495405,"y":63.18966582504595},{"x":71.99179789696231,"y":63.17491405172287},{"x":71.98089710923996,"y":63.158599869999996},{"x":71.97221900728717,"y":63.14100242004972},{"x":71.96591207583438,"y":63.12242279911966},{"x":71.96208422822738,"y":63.103178909675144},{"x":71.96080096,"y":63.08360002},{"x":71.96208422822738,"y":63.064021130324846},{"x":71.96591207583438,"y":63.04477724088033},{"x":71.97221900728717,"y":63.02619761995027},{"x":71.98089710923996,"y":63.008600169999994},{"x":71.99179789696231,"y":62.99228598827712},{"x":72.00473485495405,"y":62.97753421495404},{"x":72.01948662827712,"y":62.964597256962314},{"x":72.03580081,"y":62.95369646923995},{"x":72.05339825995027,"y":62.94501836728716},{"x":72.07197788088033,"y":62.938711435834385},{"x":72.09122177032485,"y":62.93488358822738},{"x":72.11080066,"y":62.93360032},{"x":72.13037954967515,"y":62.93488358822738},{"x":72.14962343911967,"y":62.938711435834385},{"x":72.16820306004973,"y":62.94501836728716},{"x":72.18580050999999,"y":62.95369646923995},{"x":72.20211469172287,"y":62.964597256962314},{"x":72.21686646504595,"y":62.97753421495404},{"x":72.22980342303768,"y":62.99228598827712},{"x":72.24070421076004,"y":63.008600169999994},{"x":72.24938231271283,"y":63.02619761995027},{"x":72.25568924416561,"y":63.04477724088033},{"x":72.25951709177262,"y":63.064021130324846},{"x":72.26080035999999,"y":63.08360002}]} strokeWidth={0.29999939999999997} />
      <silkscreenpath route={[{"x":62.06848393999999,"y":42.07359886},{"x":62.066064190047236,"y":42.110517110102045},{"x":62.0588463427815,"y":42.146803678709176},{"x":62.046953897570695,"y":42.181837692571975},{"x":62.030590337449574,"y":42.21501971},{"x":62.01003564746865,"y":42.24578197747526},{"x":61.98564152407232,"y":42.27359814407233},{"x":61.95782535747525,"y":42.29799226746865},{"x":61.92706309,"y":42.31854695744958},{"x":61.89388107257197,"y":42.3349105175707},{"x":61.858847058709166,"y":42.3468029627815},{"x":61.822560490102035,"y":42.35402081004723},{"x":61.785642239999994,"y":42.35644056},{"x":61.748723989897954,"y":42.35402081004723},{"x":61.71243742129083,"y":42.3468029627815},{"x":61.677403407428024,"y":42.3349105175707},{"x":61.64422138999999,"y":42.31854695744958},{"x":61.613459122524745,"y":42.29799226746865},{"x":61.58564295592767,"y":42.27359814407233},{"x":61.56124883253134,"y":42.24578197747526},{"x":61.54069414255042,"y":42.21501971},{"x":61.5243305824293,"y":42.181837692571975},{"x":61.51243813721849,"y":42.146803678709176},{"x":61.50522028995276,"y":42.110517110102045},{"x":61.50280054,"y":42.07359886},{"x":61.50522028995276,"y":42.03668060989795},{"x":61.51243813721849,"y":42.000394041290825},{"x":61.5243305824293,"y":41.96536002742802},{"x":61.54069414255042,"y":41.93217801},{"x":61.56124883253134,"y":41.90141574252474},{"x":61.58564295592767,"y":41.87359957592767},{"x":61.613459122524745,"y":41.84920545253135},{"x":61.64422138999999,"y":41.828650762550424},{"x":61.677403407428024,"y":41.8122872024293},{"x":61.71243742129083,"y":41.80039475721849},{"x":61.748723989897954,"y":41.79317690995277},{"x":61.785642239999994,"y":41.79075716},{"x":61.822560490102035,"y":41.79317690995277},{"x":61.858847058709166,"y":41.80039475721849},{"x":61.89388107257197,"y":41.8122872024293},{"x":61.92706309,"y":41.828650762550424},{"x":61.95782535747525,"y":41.84920545253135},{"x":61.98564152407232,"y":41.87359957592767},{"x":62.01003564746865,"y":41.90141574252474},{"x":62.030590337449574,"y":41.93217801},{"x":62.046953897570695,"y":41.96536002742802},{"x":62.0588463427815,"y":42.000394041290825},{"x":62.066064190047236,"y":42.03668060989795},{"x":62.06848393999999,"y":42.07359886}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":21.1963,"y":68.9356},{"x":21.184891722641975,"y":69.10965667732545},{"x":21.150862089356472,"y":69.28073519664422},{"x":21.094793356603798,"y":69.44590835705884},{"x":21.017644875946548,"y":69.60235},{"x":20.92073667927836,"y":69.74738336558312},{"x":20.80572689271226,"y":69.87852689271226},{"x":20.67458336558313,"y":69.99353667927836},{"x":20.52955,"y":70.09044487594655},{"x":20.373108357058847,"y":70.1675933566038},{"x":20.20793519664421,"y":70.22366208935647},{"x":20.03685667732544,"y":70.25769172264197},{"x":19.8628,"y":70.2691},{"x":19.68874332267456,"y":70.25769172264197},{"x":19.51766480335579,"y":70.22366208935647},{"x":19.35249164294115,"y":70.1675933566038},{"x":19.19605,"y":70.09044487594655},{"x":19.05101663441687,"y":69.99353667927836},{"x":18.91987310728774,"y":69.87852689271226},{"x":18.804863320721637,"y":69.74738336558312},{"x":18.707955124053452,"y":69.60235},{"x":18.6308066433962,"y":69.44590835705884},{"x":18.574737910643528,"y":69.28073519664422},{"x":18.54070827735802,"y":69.10965667732545},{"x":18.5293,"y":68.9356},{"x":18.54070827735802,"y":68.76154332267456},{"x":18.574737910643528,"y":68.59046480335579},{"x":18.6308066433962,"y":68.42529164294115},{"x":18.707955124053452,"y":68.26885},{"x":18.804863320721637,"y":68.12381663441687},{"x":18.91987310728774,"y":67.99267310728774},{"x":19.05101663441687,"y":67.87766332072164},{"x":19.19605,"y":67.78075512405344},{"x":19.352491642941153,"y":67.70360664339618},{"x":19.51766480335579,"y":67.64753791064352},{"x":19.68874332267456,"y":67.61350827735802},{"x":19.8628,"y":67.6021},{"x":20.03685667732544,"y":67.61350827735802},{"x":20.20793519664421,"y":67.64753791064352},{"x":20.373108357058847,"y":67.70360664339618},{"x":20.52955,"y":67.78075512405344},{"x":20.67458336558313,"y":67.87766332072164},{"x":20.80572689271226,"y":67.99267310728774},{"x":20.92073667927836,"y":68.12381663441687},{"x":21.017644875946548,"y":68.26885},{"x":21.094793356603798,"y":68.42529164294115},{"x":21.150862089356472,"y":68.59046480335579},{"x":21.184891722641975,"y":68.76154332267456},{"x":21.1963,"y":68.9356}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":100.4443,"y":63.373},{"x":100.43289172264197,"y":63.54705667732544},{"x":100.39886208935647,"y":63.71813519664421},{"x":100.3427933566038,"y":63.883308357058844},{"x":100.26564487594655,"y":64.03975},{"x":100.16873667927835,"y":64.18478336558313},{"x":100.05372689271225,"y":64.31592689271226},{"x":99.92258336558312,"y":64.43093667927836},{"x":99.77754999999999,"y":64.52784487594656},{"x":99.62110835705884,"y":64.6049933566038},{"x":99.4559351966442,"y":64.66106208935648},{"x":99.28485667732544,"y":64.69509172264198},{"x":99.1108,"y":64.70649999999999},{"x":98.93674332267456,"y":64.69509172264198},{"x":98.76566480335578,"y":64.66106208935648},{"x":98.60049164294115,"y":64.6049933566038},{"x":98.44404999999999,"y":64.52784487594656},{"x":98.29901663441687,"y":64.43093667927836},{"x":98.16787310728773,"y":64.31592689271226},{"x":98.05286332072163,"y":64.18478336558313},{"x":97.95595512405345,"y":64.03975},{"x":97.87880664339619,"y":63.883308357058844},{"x":97.82273791064353,"y":63.71813519664421},{"x":97.78870827735803,"y":63.54705667732544},{"x":97.7773,"y":63.373},{"x":97.78870827735803,"y":63.19894332267455},{"x":97.82273791064353,"y":63.02786480335578},{"x":97.87880664339619,"y":62.86269164294115},{"x":97.95595512405345,"y":62.70625},{"x":98.05286332072163,"y":62.56121663441687},{"x":98.16787310728773,"y":62.43007310728774},{"x":98.29901663441687,"y":62.315063320721634},{"x":98.44404999999999,"y":62.218155124053446},{"x":98.60049164294115,"y":62.14100664339619},{"x":98.76566480335578,"y":62.084937910643525},{"x":98.93674332267456,"y":62.050908277358026},{"x":99.1108,"y":62.0395},{"x":99.28485667732544,"y":62.050908277358026},{"x":99.4559351966442,"y":62.084937910643525},{"x":99.62110835705884,"y":62.14100664339619},{"x":99.77754999999999,"y":62.218155124053446},{"x":99.92258336558312,"y":62.315063320721634},{"x":100.05372689271225,"y":62.43007310728774},{"x":100.16873667927835,"y":62.56121663441687},{"x":100.26564487594655,"y":62.70625},{"x":100.3427933566038,"y":62.86269164294115},{"x":100.39886208935647,"y":63.02786480335578},{"x":100.43289172264197,"y":63.19894332267455},{"x":100.4443,"y":63.373}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":21.1963,"y":54.203599999999994},{"x":21.184891722641975,"y":54.37765667732544},{"x":21.150862089356472,"y":54.54873519664421},{"x":21.094793356603798,"y":54.71390835705885},{"x":21.017644875946548,"y":54.870349999999995},{"x":20.92073667927836,"y":55.01538336558312},{"x":20.80572689271226,"y":55.14652689271226},{"x":20.67458336558313,"y":55.26153667927836},{"x":20.52955,"y":55.35844487594655},{"x":20.373108357058847,"y":55.4355933566038},{"x":20.20793519664421,"y":55.49166208935647},{"x":20.03685667732544,"y":55.52569172264197},{"x":19.8628,"y":55.537099999999995},{"x":19.68874332267456,"y":55.52569172264197},{"x":19.51766480335579,"y":55.49166208935647},{"x":19.35249164294115,"y":55.4355933566038},{"x":19.19605,"y":55.35844487594655},{"x":19.05101663441687,"y":55.26153667927836},{"x":18.91987310728774,"y":55.14652689271226},{"x":18.804863320721637,"y":55.01538336558312},{"x":18.707955124053452,"y":54.870349999999995},{"x":18.6308066433962,"y":54.71390835705885},{"x":18.574737910643528,"y":54.54873519664421},{"x":18.54070827735802,"y":54.37765667732544},{"x":18.5293,"y":54.203599999999994},{"x":18.54070827735802,"y":54.029543322674556},{"x":18.574737910643528,"y":53.85846480335579},{"x":18.6308066433962,"y":53.69329164294115},{"x":18.707955124053452,"y":53.53685},{"x":18.804863320721637,"y":53.39181663441687},{"x":18.91987310728774,"y":53.26067310728774},{"x":19.05101663441687,"y":53.14566332072164},{"x":19.19605,"y":53.04875512405344},{"x":19.352491642941153,"y":52.97160664339619},{"x":19.51766480335579,"y":52.91553791064352},{"x":19.68874332267456,"y":52.88150827735802},{"x":19.8628,"y":52.8701},{"x":20.03685667732544,"y":52.88150827735802},{"x":20.20793519664421,"y":52.91553791064352},{"x":20.373108357058847,"y":52.97160664339619},{"x":20.52955,"y":53.04875512405344},{"x":20.67458336558313,"y":53.14566332072164},{"x":20.80572689271226,"y":53.26067310728774},{"x":20.92073667927836,"y":53.39181663441687},{"x":21.017644875946548,"y":53.53685},{"x":21.094793356603798,"y":53.69329164294115},{"x":21.150862089356472,"y":53.85846480335579},{"x":21.184891722641975,"y":54.029543322674556},{"x":21.1963,"y":54.203599999999994}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":100.4443,"y":48.6156},{"x":100.43289172264197,"y":48.78965667732544},{"x":100.39886208935647,"y":48.960735196644215},{"x":100.3427933566038,"y":49.12590835705885},{"x":100.26564487594655,"y":49.28235},{"x":100.16873667927835,"y":49.427383365583125},{"x":100.05372689271225,"y":49.55852689271226},{"x":99.92258336558312,"y":49.67353667927836},{"x":99.77754999999999,"y":49.770444875946545},{"x":99.62110835705884,"y":49.847593356603795},{"x":99.4559351966442,"y":49.90366208935647},{"x":99.28485667732544,"y":49.93769172264197},{"x":99.1108,"y":49.9491},{"x":98.93674332267456,"y":49.93769172264197},{"x":98.76566480335578,"y":49.90366208935647},{"x":98.60049164294115,"y":49.847593356603795},{"x":98.44404999999999,"y":49.770444875946545},{"x":98.29901663441687,"y":49.67353667927836},{"x":98.16787310728773,"y":49.55852689271226},{"x":98.05286332072163,"y":49.427383365583125},{"x":97.95595512405345,"y":49.28235},{"x":97.87880664339619,"y":49.12590835705885},{"x":97.82273791064353,"y":48.960735196644215},{"x":97.78870827735803,"y":48.78965667732544},{"x":97.7773,"y":48.6156},{"x":97.78870827735803,"y":48.44154332267456},{"x":97.82273791064353,"y":48.27046480335579},{"x":97.87880664339619,"y":48.10529164294115},{"x":97.95595512405345,"y":47.94885},{"x":98.05286332072163,"y":47.80381663441687},{"x":98.16787310728773,"y":47.67267310728774},{"x":98.29901663441687,"y":47.55766332072164},{"x":98.44404999999999,"y":47.46075512405345},{"x":98.60049164294115,"y":47.3836066433962},{"x":98.76566480335578,"y":47.32753791064353},{"x":98.93674332267456,"y":47.29350827735802},{"x":99.1108,"y":47.2821},{"x":99.28485667732544,"y":47.29350827735802},{"x":99.4559351966442,"y":47.32753791064353},{"x":99.62110835705884,"y":47.3836066433962},{"x":99.77754999999999,"y":47.46075512405345},{"x":99.92258336558312,"y":47.55766332072164},{"x":100.05372689271225,"y":47.67267310728774},{"x":100.16873667927835,"y":47.80381663441687},{"x":100.26564487594655,"y":47.94885},{"x":100.3427933566038,"y":48.10529164294115},{"x":100.39886208935647,"y":48.270464803355786},{"x":100.43289172264197,"y":48.44154332267456},{"x":100.4443,"y":48.6156}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":45.9613,"y":42.9514},{"x":45.94989172264197,"y":43.12545667732544},{"x":45.91586208935647,"y":43.296535196644214},{"x":45.859793356603795,"y":43.461708357058846},{"x":45.782644875946545,"y":43.61815},{"x":45.685736679278364,"y":43.76318336558313},{"x":45.57072689271226,"y":43.89432689271226},{"x":45.43958336558313,"y":44.00933667927836},{"x":45.29455,"y":44.106244875946544},{"x":45.13810835705885,"y":44.1833933566038},{"x":44.972935196644215,"y":44.23946208935647},{"x":44.80185667732544,"y":44.27349172264197},{"x":44.6278,"y":44.2849},{"x":44.45374332267456,"y":44.27349172264197},{"x":44.282664803355786,"y":44.23946208935647},{"x":44.11749164294115,"y":44.1833933566038},{"x":43.96105,"y":44.106244875946544},{"x":43.81601663441687,"y":44.00933667927836},{"x":43.68487310728774,"y":43.89432689271226},{"x":43.56986332072164,"y":43.76318336558313},{"x":43.47295512405345,"y":43.61815},{"x":43.3958066433962,"y":43.461708357058846},{"x":43.33973791064353,"y":43.296535196644214},{"x":43.30570827735802,"y":43.12545667732544},{"x":43.2943,"y":42.9514},{"x":43.30570827735802,"y":42.77734332267456},{"x":43.33973791064353,"y":42.60626480335579},{"x":43.3958066433962,"y":42.44109164294115},{"x":43.47295512405345,"y":42.28465},{"x":43.56986332072164,"y":42.13961663441687},{"x":43.68487310728774,"y":42.00847310728774},{"x":43.81601663441687,"y":41.89346332072164},{"x":43.96105,"y":41.79655512405345},{"x":44.11749164294115,"y":41.7194066433962},{"x":44.282664803355786,"y":41.66333791064353},{"x":44.45374332267456,"y":41.62930827735803},{"x":44.6278,"y":41.6179},{"x":44.80185667732544,"y":41.62930827735803},{"x":44.972935196644215,"y":41.66333791064353},{"x":45.13810835705885,"y":41.7194066433962},{"x":45.29455,"y":41.79655512405345},{"x":45.43958336558313,"y":41.89346332072164},{"x":45.57072689271226,"y":42.00847310728774},{"x":45.685736679278364,"y":42.13961663441687},{"x":45.782644875946545,"y":42.28465},{"x":45.859793356603795,"y":42.44109164294115},{"x":45.91586208935647,"y":42.606264803355785},{"x":45.94989172264197,"y":42.77734332267456},{"x":45.9613,"y":42.9514}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":101.554407,"y":75.7936},{"x":101.52046357210075,"y":76.31147663393563},{"x":101.41921406986528,"y":76.82049225508207},{"x":101.2523909003485,"y":77.31193746503575},{"x":101.02284845423297,"y":77.77740349999999},{"x":100.73451426641287,"y":78.208926107065},{"x":100.39232181478322,"y":78.59912181478322},{"x":100.002126107065,"y":78.94131426641287},{"x":99.57060349999999,"y":79.22964845423296},{"x":99.10513746503575,"y":79.4591909003485},{"x":98.61369225508207,"y":79.62601406986528},{"x":98.10467663393563,"y":79.72726357210075},{"x":97.5868,"y":79.761207},{"x":97.06892336606437,"y":79.72726357210077},{"x":96.55990774491792,"y":79.62601406986528},{"x":96.06846253496424,"y":79.4591909003485},{"x":95.6029965,"y":79.22964845423296},{"x":95.171473892935,"y":78.94131426641287},{"x":94.78127818521678,"y":78.59912181478322},{"x":94.4390857335871,"y":78.208926107065},{"x":94.15075154576702,"y":77.77740349999999},{"x":93.92120909965149,"y":77.31193746503575},{"x":93.7543859301347,"y":76.82049225508207},{"x":93.65313642789924,"y":76.31147663393563},{"x":93.619193,"y":75.7936},{"x":93.65313642789923,"y":75.27572336606437},{"x":93.7543859301347,"y":74.76670774491792},{"x":93.92120909965149,"y":74.27526253496424},{"x":94.15075154576702,"y":73.8097965},{"x":94.43908573358712,"y":73.378273892935},{"x":94.78127818521678,"y":72.98807818521678},{"x":95.171473892935,"y":72.64588573358712},{"x":95.6029965,"y":72.35755154576702},{"x":96.06846253496424,"y":72.12800909965149},{"x":96.55990774491792,"y":71.9611859301347},{"x":97.06892336606437,"y":71.85993642789924},{"x":97.5868,"y":71.825993},{"x":98.10467663393563,"y":71.85993642789924},{"x":98.61369225508207,"y":71.9611859301347},{"x":99.10513746503575,"y":72.12800909965149},{"x":99.57060349999999,"y":72.35755154576702},{"x":100.002126107065,"y":72.64588573358712},{"x":100.3923218147832,"y":72.98807818521678},{"x":100.73451426641287,"y":73.378273892935},{"x":101.02284845423297,"y":73.8097965},{"x":101.2523909003485,"y":74.27526253496424},{"x":101.41921406986528,"y":74.76670774491792},{"x":101.52046357210075,"y":75.27572336606437},{"x":101.554407,"y":75.7936}]} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenpath route={[{"x":99.01440699999999,"y":44.0436},{"x":98.98046357210075,"y":44.56147663393562},{"x":98.87921406986528,"y":45.07049225508208},{"x":98.71239090034851,"y":45.561937465035754},{"x":98.48284845423296,"y":46.0274035},{"x":98.19451426641288,"y":46.458926107065},{"x":97.85232181478321,"y":46.84912181478321},{"x":97.462126107065,"y":47.19131426641289},{"x":97.0306035,"y":47.479648454232965},{"x":96.56513746503575,"y":47.7091909003485},{"x":96.07369225508208,"y":47.87601406986529},{"x":95.56467663393562,"y":47.97726357210076},{"x":95.04679999999999,"y":48.011207},{"x":94.52892336606438,"y":47.97726357210076},{"x":94.01990774491792,"y":47.87601406986529},{"x":93.52846253496425,"y":47.7091909003485},{"x":93.0629965,"y":47.479648454232965},{"x":92.63147389293499,"y":47.19131426641289},{"x":92.24127818521677,"y":46.84912181478321},{"x":91.8990857335871,"y":46.458926107065},{"x":91.61075154576703,"y":46.0274035},{"x":91.38120909965149,"y":45.56193746503576},{"x":91.21438593013471,"y":45.07049225508208},{"x":91.11313642789924,"y":44.56147663393562},{"x":91.079193,"y":44.0436},{"x":91.11313642789924,"y":43.525723366064376},{"x":91.21438593013471,"y":43.01670774491792},{"x":91.38120909965149,"y":42.52526253496424},{"x":91.61075154576703,"y":42.0597965},{"x":91.89908573358711,"y":41.628273892935},{"x":92.24127818521677,"y":41.238078185216786},{"x":92.63147389293499,"y":40.895885733587114},{"x":93.0629965,"y":40.60755154576704},{"x":93.52846253496425,"y":40.37800909965149},{"x":94.01990774491792,"y":40.211185930134704},{"x":94.52892336606438,"y":40.109936427899235},{"x":95.04679999999999,"y":40.075993},{"x":95.56467663393562,"y":40.109936427899235},{"x":96.07369225508208,"y":40.211185930134704},{"x":96.56513746503575,"y":40.37800909965149},{"x":97.0306035,"y":40.60755154576703},{"x":97.462126107065,"y":40.895885733587114},{"x":97.85232181478321,"y":41.238078185216786},{"x":98.19451426641288,"y":41.62827389293499},{"x":98.48284845423296,"y":42.0597965},{"x":98.71239090034851,"y":42.52526253496424},{"x":98.87921406986528,"y":43.016707744917916},{"x":98.98046357210075,"y":43.525723366064376},{"x":99.01440699999999,"y":44.0436}]} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenpath route={[{"x":26.624406999999998,"y":75.7936},{"x":26.59046357210076,"y":76.31147663393563},{"x":26.48921406986529,"y":76.82049225508207},{"x":26.322390900348505,"y":77.31193746503575},{"x":26.092848454232968,"y":77.77740349999999},{"x":25.804514266412887,"y":78.208926107065},{"x":25.462321814783213,"y":78.59912181478322},{"x":25.072126107065003,"y":78.94131426641287},{"x":24.640603499999997,"y":79.22964845423296},{"x":24.175137465035757,"y":79.4591909003485},{"x":23.683692255082075,"y":79.62601406986528},{"x":23.174676633935622,"y":79.72726357210075},{"x":22.6568,"y":79.761207},{"x":22.138923366064375,"y":79.72726357210077},{"x":21.62990774491792,"y":79.62601406986528},{"x":21.13846253496424,"y":79.4591909003485},{"x":20.6729965,"y":79.22964845423296},{"x":20.241473892934994,"y":78.94131426641287},{"x":19.851278185216785,"y":78.59912181478322},{"x":19.509085733587114,"y":78.208926107065},{"x":19.220751545767033,"y":77.77740349999999},{"x":18.99120909965149,"y":77.31193746503575},{"x":18.824385930134707,"y":76.82049225508207},{"x":18.723136427899238,"y":76.31147663393563},{"x":18.689193,"y":75.7936},{"x":18.723136427899238,"y":75.27572336606437},{"x":18.824385930134707,"y":74.76670774491792},{"x":18.99120909965149,"y":74.27526253496424},{"x":19.220751545767033,"y":73.8097965},{"x":19.509085733587114,"y":73.378273892935},{"x":19.851278185216785,"y":72.98807818521678},{"x":20.241473892934994,"y":72.64588573358712},{"x":20.672996499999996,"y":72.35755154576702},{"x":21.13846253496424,"y":72.12800909965149},{"x":21.629907744917922,"y":71.9611859301347},{"x":22.138923366064375,"y":71.85993642789924},{"x":22.6568,"y":71.825993},{"x":23.174676633935626,"y":71.85993642789924},{"x":23.68369225508208,"y":71.9611859301347},{"x":24.175137465035757,"y":72.12800909965149},{"x":24.640603499999997,"y":72.35755154576702},{"x":25.072126107065003,"y":72.64588573358712},{"x":25.462321814783213,"y":72.98807818521678},{"x":25.804514266412887,"y":73.378273892935},{"x":26.09284845423296,"y":73.8097965},{"x":26.322390900348505,"y":74.27526253496424},{"x":26.48921406986529,"y":74.76670774491792},{"x":26.59046357210076,"y":75.27572336606437},{"x":26.624406999999998,"y":75.7936}]} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenpath route={[{"x":26.624406999999998,"y":44.0436},{"x":26.59046357210076,"y":44.56147663393562},{"x":26.48921406986529,"y":45.07049225508208},{"x":26.322390900348505,"y":45.561937465035754},{"x":26.092848454232968,"y":46.0274035},{"x":25.804514266412887,"y":46.458926107065},{"x":25.462321814783213,"y":46.84912181478321},{"x":25.072126107065003,"y":47.19131426641289},{"x":24.640603499999997,"y":47.479648454232965},{"x":24.175137465035757,"y":47.7091909003485},{"x":23.683692255082075,"y":47.87601406986529},{"x":23.174676633935622,"y":47.97726357210076},{"x":22.6568,"y":48.011207},{"x":22.138923366064375,"y":47.97726357210076},{"x":21.62990774491792,"y":47.87601406986529},{"x":21.13846253496424,"y":47.7091909003485},{"x":20.6729965,"y":47.479648454232965},{"x":20.241473892934994,"y":47.19131426641289},{"x":19.851278185216785,"y":46.84912181478321},{"x":19.509085733587114,"y":46.458926107065},{"x":19.220751545767033,"y":46.0274035},{"x":18.99120909965149,"y":45.56193746503576},{"x":18.824385930134707,"y":45.07049225508208},{"x":18.723136427899238,"y":44.56147663393562},{"x":18.689193,"y":44.0436},{"x":18.723136427899238,"y":43.525723366064376},{"x":18.824385930134707,"y":43.01670774491792},{"x":18.99120909965149,"y":42.52526253496424},{"x":19.220751545767033,"y":42.0597965},{"x":19.509085733587114,"y":41.628273892935},{"x":19.851278185216785,"y":41.238078185216786},{"x":20.241473892934994,"y":40.895885733587114},{"x":20.672996499999996,"y":40.60755154576704},{"x":21.13846253496424,"y":40.37800909965149},{"x":21.629907744917922,"y":40.211185930134704},{"x":22.138923366064375,"y":40.109936427899235},{"x":22.6568,"y":40.075993},{"x":23.174676633935626,"y":40.109936427899235},{"x":23.68369225508208,"y":40.211185930134704},{"x":24.175137465035757,"y":40.37800909965149},{"x":24.640603499999997,"y":40.60755154576703},{"x":25.072126107065003,"y":40.895885733587114},{"x":25.462321814783213,"y":41.238078185216786},{"x":25.804514266412887,"y":41.62827389293499},{"x":26.09284845423296,"y":42.0597965},{"x":26.322390900348505,"y":42.52526253496424},{"x":26.48921406986529,"y":43.016707744917916},{"x":26.59046357210076,"y":43.525723366064376},{"x":26.624406999999998,"y":44.0436}]} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenrect pcbX={32.89930047} pcbY={44.44359666} width={0.8249996199999985} height={0.19999960000000058} layer="top" strokeWidth={0.19999960000000058} filled={true} />
      <silkscreenrect pcbX={49.5308001} pcbY={53.57422102} width={0.508} height={1.7271999999999998} layer="top" strokeWidth={0.508} filled={true} />
      <silkscreenrect pcbX={26.988803020000002} pcbY={53.107601429999995} width={0.9999980000000029} height={0.4799965000000009} layer="top" strokeWidth={0.4799965000000009} filled={true} />
      <silkscreenrect pcbX={57.4548} pcbY={75.89520127} width={0.508} height={3.149602540000005} layer="top" strokeWidth={0.508} filled={true} />
      <silkscreenrect pcbX={48.48908006} pcbY={51.41599572} width={0.508} height={1.7271999999999998} layer="top" strokeWidth={0.508} filled={true} />
      <silkscreenline x1={49.89079938} y1={49.30648} x2={49.89079938} y2={49.448719999999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={50.54080062} y1={49.30648} x2={50.54080062} y2={49.448719999999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={55.041799999999995} y1={69.0626} x2={65.0748} y2={69.0626} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.5178} y1={54.7116} x2={53.5178} y2={55.0926} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.1368} y1={54.7116} x2={53.5178} y2={54.7116} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.1368} y1={54.7116} x2={53.1368} y2={55.0926} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.1368} y1={55.0926} x2={66.9798} y2={55.0926} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={36.555799379999996} y1={55.656479999999995} x2={36.555799379999996} y2={55.79872} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.20580062} y1={55.656479999999995} x2={37.20580062} y2={55.79872} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={85.19667999999999} y1={40.44199938} x2={85.33892} y2={40.44199938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={85.19667999999999} y1={41.09200062} x2={85.33892} y2={41.09200062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={80.38580062} y1={67.08648} x2={80.38580062} y2={67.22872} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={79.73579937999999} y1={67.08648} x2={79.73579937999999} y2={67.22872} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={91.67379937999999} y1={56.037479999999995} x2={91.67379937999999} y2={56.17972} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={92.32380062} y1={56.037479999999995} x2={92.32380062} y2={56.17972} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={68.5038} y1={46.456599999999995} x2={68.7578} y2={46.456599999999995} strokeWidth={0.2032} />
      <silkscreenline x1={68.5038} y1={46.7106} x2={68.7578} y2={46.456599999999995} strokeWidth={0.2032} />
      <silkscreenline x1={68.5038} y1={46.456599999999995} x2={68.5038} y2={46.7106} strokeWidth={0.2032} />
      <silkscreenline x1={68.5038} y1={46.456599999999995} x2={69.1388} y2={47.0916} strokeWidth={0.2032} />
      <silkscreenline x1={35.7378} y1={54.0766} x2={35.9918} y2={54.0766} strokeWidth={0.2032} />
      <silkscreenline x1={35.7378} y1={54.0766} x2={35.991802539999995} y2={54.33060254} strokeWidth={0.2032} />
      <silkscreenline x1={35.9918} y1={54.0766} x2={35.9918} y2={54.3306} strokeWidth={0.2032} />
      <silkscreenline x1={35.6108} y1={54.4576} x2={35.9918} y2={54.0766} strokeWidth={0.2032} />
      <silkscreenline x1={35.6108} y1={54.4576} x2={35.6108} y2={55.6006} strokeWidth={0.2032} />
      <silkscreenline x1={36.555799379999996} y1={49.94148} x2={36.555799379999996} y2={50.08372} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.20580062} y1={49.94148} x2={37.20580062} y2={50.08372} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={67.54379938} y1={41.30548} x2={67.54379938} y2={41.44772} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={68.19380062} y1={41.30548} x2={68.19380062} y2={41.44772} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.81180236} y1={42.543597919999996} x2={34.81180236} y2={43.34359886} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.31180336} y1={42.543597919999996} x2={34.81180236} y2={42.543597919999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.81180236} y1={44.7435986} x2={34.81180236} y2={45.543597} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.31180336} y1={45.543597} x2={34.81180236} y2={45.543597} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={48.7561001} y1={55.47760304} x2={48.7561001} y2={56.90260146} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={50.305500099999996} y1={53.5742007} x2={50.305500099999996} y2={55.47760304} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={50.305500099999996} y1={55.47760304} x2={50.305500099999996} y2={56.90260146} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={48.7561001} y1={53.5742007} x2={48.7561001} y2={55.47760304} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={27.22879746} y1={54.207603039999995} x2={27.478799499999997} y2={54.45760254} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.478799499999997} y1={54.45760254} x2={29.5188005} y2={54.45760254} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={52.16760204} x2={27.22879746} y2={54.207603039999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.7688} y1={52.16760204} x2={29.7688} y2={54.207603039999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={52.16760204} x2={27.478799499999997} y2={51.91760254} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={54.45760254} x2={29.7688} y2={54.207603039999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={51.91760254} x2={29.7688} y2={52.16760204} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={51.6676005} x2={27.478799499999997} y2={51.91760254} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={49.627599499999995} x2={27.22879746} y2={51.6676005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.7688} y1={49.627599499999995} x2={29.7688} y2={51.6676005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={49.627599499999995} x2={27.478799499999997} y2={49.3776} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={51.91760254} x2={29.7688} y2={51.6676005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={49.3776} x2={29.7688} y2={49.627599499999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={49.1276005} x2={27.478799499999997} y2={49.3776} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={47.087599499999996} x2={27.22879746} y2={49.1276005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.7688} y1={47.087599499999996} x2={29.7688} y2={49.1276005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={47.087599499999996} x2={27.478799499999997} y2={46.837599999999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={49.3776} x2={29.7688} y2={49.1276005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={46.837599999999995} x2={29.7688} y2={47.087599499999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={46.58759796} x2={27.478799499999997} y2={46.837599999999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={44.54759696} x2={27.22879746} y2={46.58759796} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.7688} y1={44.54759696} x2={29.7688} y2={46.58759796} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={44.54759696} x2={27.478799499999997} y2={44.29759746} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={46.837599999999995} x2={29.7688} y2={46.58759796} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={44.29759746} x2={29.7688} y2={44.54759696} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={44.04759796} x2={27.478799499999997} y2={44.29759746} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={42.00759696} x2={27.22879746} y2={44.04759796} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.7688} y1={42.00759696} x2={29.7688} y2={44.04759796} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.22879746} y1={42.00759696} x2={27.478799499999997} y2={41.75759746} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={44.29759746} x2={29.7688} y2={44.04759796} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={29.5188005} y1={41.75759746} x2={29.7688} y2={42.00759696} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.478799499999997} y1={41.75759746} x2={29.5188005} y2={41.75759746} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={50.7798197} y1={52.83125324} x2={50.7798197} y2={52.973493239999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={51.42982094} y1={52.83125324} x2={51.42982094} y2={52.973493239999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={36.50499938} y1={52.60847999999999} x2={36.50499938} y2={52.75072} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.155000619999996} y1={52.60847999999999} x2={37.155000619999996} y2={52.75072} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={50.449599379999995} x2={43.52091626} y2={50.449599379999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={51.09960062} x2={43.52091626} y2={51.09960062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={41.74279688} y1={44.1914788} x2={41.74279688} y2={44.3337188} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={41.09279564} y1={44.1914788} x2={41.09279564} y2={44.3337188} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={53.49759937999999} x2={43.52091626} y2={53.49759937999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={54.147600620000006} x2={43.52091626} y2={54.147600620000006} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={38.044795640000004} y1={45.62348} x2={38.044795640000004} y2={45.765719999999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={38.69479688} y1={45.62348} x2={38.69479688} y2={45.765719999999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.17079688} y1={44.09948} x2={37.17079688} y2={44.241719999999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={36.52079564} y1={44.09948} x2={36.52079564} y2={44.241719999999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.8912} y1={68.9356} x2={44.754799999999996} y2={68.9356} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={67.9196} x2={43.8912} y2={68.9356} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={66.9036} x2={43.8912} y2={67.9196} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={66.9036} x2={44.754799999999996} y2={66.9036} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={46.7868} y1={66.9036} x2={47.6504} y2={66.9036} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.6504} y1={66.9036} x2={47.6504} y2={67.9196} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.6504} y1={67.9196} x2={47.6504} y2={68.9356} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={46.7868} y1={68.9356} x2={47.6504} y2={68.9356} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={73.0094044} x2={44.754799999999996} y2={73.0094044} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={71.9934044} x2={43.8912} y2={73.0094044} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={70.9774044} x2={43.8912} y2={71.9934044} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={70.9774044} x2={44.754799999999996} y2={70.9774044} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={46.7868} y1={70.9774044} x2={47.6504} y2={70.9774044} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.6504} y1={70.9774044} x2={47.6504} y2={71.9934044} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.6504} y1={71.9934044} x2={47.6504} y2={73.0094044} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={46.7868} y1={73.0094044} x2={47.6504} y2={73.0094044} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={70.96759999999999} x2={44.754799999999996} y2={70.96759999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={69.9516} x2={43.8912} y2={70.96759999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={68.9356} x2={43.8912} y2={69.9516} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.8912} y1={68.9356} x2={44.754799999999996} y2={68.9356} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={46.7868} y1={68.9356} x2={47.6504} y2={68.9356} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.6504} y1={68.9356} x2={47.6504} y2={69.9516} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.6504} y1={69.9516} x2={47.6504} y2={70.96759999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={46.7868} y1={70.96759999999999} x2={47.6504} y2={70.96759999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={34.742676259999996} y1={48.671599379999996} x2={34.88491626} y2={48.671599379999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.742676259999996} y1={49.32160062} x2={34.88491626} y2={49.32160062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={39.56879564} y1={44.1914788} x2={39.56879564} y2={44.3337188} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={40.21879688} y1={44.1914788} x2={40.21879688} y2={44.3337188} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.742676259999996} y1={50.84560062} x2={34.88491626} y2={50.84560062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.742676259999996} y1={50.19559938} x2={34.88491626} y2={50.19559938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={39.90859938} y1={55.046879999999994} x2={39.90859938} y2={55.18912} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={40.55860062} y1={55.046879999999994} x2={40.55860062} y2={55.18912} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={35.646796880000004} y1={52.48147999999999} x2={35.646796880000004} y2={52.623720000000006} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.99679564} y1={52.48147999999999} x2={34.99679564} y2={52.623720000000006} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={48.92559938} x2={43.52091626} y2={48.92559938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={49.575600619999996} x2={43.52091626} y2={49.575600619999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={48.051600619999995} x2={43.52091626} y2={48.051600619999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={47.40159938} x2={43.52091626} y2={47.40159938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={52.23679925999999} y1={71.96760054} x2={54.036800740000004} y2={71.96760054} strokeWidth={0.16999966} />
      <silkscreenline x1={52.23679925999999} y1={69.96759945999999} x2={54.036800740000004} y2={69.96759945999999} strokeWidth={0.16999966} />
      <silkscreenline x1={31.72968} y1={53.51260062} x2={31.871919999999996} y2={53.51260062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={31.72968} y1={52.86259937999999} x2={31.871919999999996} y2={52.86259937999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={74.90979938} y1={46.00448} x2={74.90979938} y2={46.146719999999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={75.55980062} y1={46.00448} x2={75.55980062} y2={46.146719999999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={74.03580062} y1={43.46448} x2={74.03580062} y2={43.606719999999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={73.38579938} y1={43.46448} x2={73.38579938} y2={43.606719999999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={74.40168} y1={41.17859938} x2={74.54392} y2={41.17859938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={74.40168} y1={41.828600619999996} x2={74.54392} y2={41.828600619999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={67.03568} y1={47.54360062} x2={67.17792} y2={47.54360062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={67.03568} y1={46.89359938} x2={67.17792} y2={46.89359938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={68.19380062} y1={44.87548047999999} x2={68.19380062} y2={45.01772048} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={67.54379938} y1={44.87548047999999} x2={67.54379938} y2={45.01772048} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={74.17502056000001} y1={62.36207999999999} x2={77.31057944} y2={62.36207999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={77.31057944} y1={61.55670188} x2={77.31057944} y2={62.36207999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={74.17502056000001} y1={61.55670188} x2={74.17502056000001} y2={62.36207999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={74.17502056000001} y1={57.72912} x2={74.17502056000001} y2={58.534498119999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={77.31057944} y1={57.72912} x2={77.31057944} y2={58.534498119999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={74.17502056000001} y1={57.72912} x2={77.31057944} y2={57.72912} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={70.61902056} y1={62.36207999999999} x2={73.75457943999999} y2={62.36207999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={73.75457943999999} y1={61.55670188} x2={73.75457943999999} y2={62.36207999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={70.61902056} y1={61.55670188} x2={70.61902056} y2={62.36207999999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={70.61902056} y1={57.72912} x2={70.61902056} y2={58.534498119999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={73.75457943999999} y1={57.72912} x2={73.75457943999999} y2={58.534498119999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={70.61902056} y1={57.72912} x2={73.75457943999999} y2={57.72912} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={77.95779938} y1={59.97447999999999} x2={77.95779938} y2={60.11672} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={78.60780062} y1={59.97447999999999} x2={78.60780062} y2={60.11672} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={17.64879884} y1={66.31560015999999} x2={18.148800379999997} y2={66.31560015999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={26.14879962} y1={66.31560015999999} x2={26.64880116} y2={66.31560015999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={25.84880022} y1={66.91559896} x2={26.14879962} y2={66.91559896} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={25.84880022} y1={66.31560015999999} x2={25.84880022} y2={66.91559896} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={26.14879962} y1={66.31560015999999} x2={26.14879962} y2={66.91559896} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={18.148800379999997} y1={66.31560015999999} x2={18.148800379999997} y2={66.91559896} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={18.448799779999998} y1={66.31560015999999} x2={18.448799779999998} y2={66.91559896} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={18.148800379999997} y1={66.91559896} x2={18.448799779999998} y2={66.91559896} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={18.448799779999998} y1={66.31560015999999} x2={25.84880022} y2={66.31560015999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={26.64880116} y1={56.315599840000004} x2={26.64880116} y2={66.31560015999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={17.64879884} y1={56.315599840000004} x2={26.64880116} y2={56.315599840000004} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={17.64879884} y1={56.315599840000004} x2={17.64879884} y2={66.31560015999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={27.820800339999998} y1={71.20400034} x2={29.02439966} y2={72.40759966} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={37.32040034} y1={72.40759966} x2={38.32079966} y2={71.40720034} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={29.02439966} y1={72.40759966} x2={31.470599999999997} y2={72.40759966} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={27.820800339999998} y1={61.907600339999995} x2={27.820800339999998} y2={71.20400034} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={27.820800339999998} y1={61.907600339999995} x2={31.470599999999997} y2={61.907600339999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={34.694723599999996} y1={72.40759966} x2={37.32040034} y2={72.40759966} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={38.32079966} y1={61.907600339999995} x2={38.32079966} y2={71.40720034} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={34.6673678} y1={61.907600339999995} x2={38.32079966} y2={61.907600339999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={93.43879966} y1={63.39059966} x2={93.43879966} y2={72.15359966} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={82.93880034} y1={63.39059966} x2={82.93880034} y2={72.15359966} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.63879964} y1={61.65360034} x2={91.70180033999999} y2={61.65360034} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={91.70180033999999} y1={61.65360034} x2={93.43879966} y2={63.39059966} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.63879964} y1={72.15359966} x2={93.43879966} y2={72.15359966} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={82.93880034} y1={63.39059966} x2={84.67579966} y2={61.65360034} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={84.67579966} y1={61.65360034} x2={86.73880036} y2={61.65360034} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={82.93880034} y1={72.15359966} x2={86.73880036} y2={72.15359966} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={38.572996260000004} y1={51.6382} x2={38.572996260000004} y2={52.2478} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={38.572996260000004} y1={51.6382} x2={39.46199626} y2={51.6382} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={38.572996260000004} y1={52.8574} x2={39.46199626} y2={52.8574} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={38.572996260000004} y1={52.2478} x2={38.572996260000004} y2={52.8574} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.21459626} y1={52.2478} x2={41.21459626} y2={52.8574} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={40.32559626} y1={52.8574} x2={41.21459626} y2={52.8574} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={40.32559626} y1={51.6382} x2={41.21459626} y2={51.6382} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.21459626} y1={51.6382} x2={41.21459626} y2={52.2478} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={71.14980182} y1={46.67260159999999} x2={71.64980082} y2={46.67260159999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={71.64980082} y1={45.8726032} x2={71.64980082} y2={46.67260159999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={71.14980182} y1={43.67260252} x2={71.64980082} y2={43.67260252} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={71.64980082} y1={43.67260252} x2={71.64980082} y2={44.472603459999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={65.00379937999999} y1={41.43248} x2={65.00379937999999} y2={41.57472} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={65.65380062} y1={41.43248} x2={65.65380062} y2={41.57472} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={58.50279891999999} y1={44.27359954} x2={60.5028} y2={44.27359954} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={58.50279891999999} y1={42.773599999999995} x2={58.50279891999999} y2={44.27359954} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={62.502801080000005} y1={42.773599999999995} x2={62.502801080000005} y2={44.27359954} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.5028} y1={44.27359954} x2={62.502801080000005} y2={44.27359954} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.5028} y1={41.27360046} x2={62.502801080000005} y2={41.27360046} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={62.502801080000005} y1={41.27360046} x2={62.502801080000005} y2={42.773599999999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={58.50279891999999} y1={41.27360046} x2={58.50279891999999} y2={42.773599999999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={58.50279891999999} y1={41.27360046} x2={60.5028} y2={41.27360046} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.77080092} y1={59.985600119999994} x2={42.97080052} y2={59.985600119999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={48.57079948} y1={59.985600119999994} x2={48.77079908} y2={59.985600119999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={48.57079948} y1={65.18559988} x2={48.77079908} y2={65.18559988} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={42.77080092} y1={65.18559988} x2={43.77079892} y2={65.18559988} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={102.09479962} y1={50.727599839999996} x2={102.59480115999999} y2={50.727599839999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={93.59479884} y1={50.727599839999996} x2={94.09480038} y2={50.727599839999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={94.09480038} y1={50.127601039999995} x2={94.39479978} y2={50.127601039999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={94.39479978} y1={50.127601039999995} x2={94.39479978} y2={50.727599839999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={94.09480038} y1={50.127601039999995} x2={94.09480038} y2={50.727599839999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={102.09479962} y1={50.127601039999995} x2={102.09479962} y2={50.727599839999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={101.79480022} y1={50.127601039999995} x2={101.79480022} y2={50.727599839999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={101.79480022} y1={50.127601039999995} x2={102.09479962} y2={50.127601039999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={94.39479978} y1={50.727599839999996} x2={101.79480022} y2={50.727599839999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={93.59479884} y1={50.727599839999996} x2={93.59479884} y2={60.727600159999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={93.59479884} y1={60.727600159999994} x2={102.59480115999999} y2={60.727600159999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={102.59480115999999} y1={50.727599839999996} x2={102.59480115999999} y2={60.727600159999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={45.003628559999996} y1={73.20929986} x2={46.80363004} y2={73.20929986} strokeWidth={0.16999966} />
      <silkscreenline x1={45.003628559999996} y1={75.20930093999999} x2={46.80363004} y2={75.20930093999999} strokeWidth={0.16999966} />
      <silkscreenline x1={43.39030946} y1={52.623600620000005} x2={43.53254946} y2={52.623600620000005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.39030946} y1={51.973599379999996} x2={43.53254946} y2={51.973599379999996} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={38.575498159999995} y1={54.259479999999996} x2={38.575498159999995} y2={54.401720000000005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.92549691999999} y1={54.259479999999996} x2={37.92549691999999} y2={54.401720000000005} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={46.52760062} x2={43.52091626} y2={46.52760062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={43.37867626} y1={45.87759938} x2={43.52091626} y2={45.87759938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={80.14480034} y1={49.20760034} x2={80.14480034} y2={57.97060034} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={90.64479965999999} y1={49.20760034} x2={90.64479965999999} y2={57.97060034} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={81.88179966} y1={59.70759966} x2={83.94480035999999} y2={59.70759966} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={80.14480034} y1={57.97060034} x2={81.88179966} y2={59.70759966} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={80.14480034} y1={49.20760034} x2={83.94480035999999} y2={49.20760034} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={88.90780034} y1={59.70759966} x2={90.64479965999999} y2={57.97060034} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={86.84479964} y1={59.70759966} x2={88.90780034} y2={59.70759966} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={86.84479964} y1={49.20760034} x2={90.64479965999999} y2={49.20760034} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={71.43779972} y1={40.2844} x2={71.43779972} y2={40.4876} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={71.1708} y1={40.2844} x2={71.43779972} y2={40.2844} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={69.5198} y1={42.7228} x2={70.5358} y2={42.7228} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={71.1708} y1={42.7228} x2={71.43779972} y2={42.7228} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={71.43779972} y1={42.5196} x2={71.43779972} y2={42.7228} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={59.702801599999994} y1={54.252599139999994} x2={61.30280093999999} y2={54.252599139999994} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={59.702801599999994} y1={50.852600859999995} x2={61.30280093999999} y2={50.852600859999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={59.702801599999994} y1={79.77959913999999} x2={61.30280093999999} y2={79.77959913999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={59.702801599999994} y1={76.37960086} x2={61.30280093999999} y2={76.37960086} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={58.940702540000004} y1={69.6976} x2={58.940702540000004} y2={75.819} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={55.968897459999994} y1={69.6976} x2={55.968897459999994} y2={75.819} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={81.25979937999999} y1={67.08648} x2={81.25979937999999} y2={67.22872} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={81.90980062} y1={67.08648} x2={81.90980062} y2={67.22872} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={48.16099842} y1={54.15853532} x2={48.16099842} y2={54.30077532} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={47.51099718} y1={54.15853532} x2={47.51099718} y2={54.30077532} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={40.690799999999996} y1={65.24759874} x2={41.79080034} y2={65.24759874} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.79080034} y1={65.04759913999999} x2={41.79080034} y2={65.24759874} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={39.59079966} y1={65.04759913999999} x2={39.59079966} y2={65.24759874} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={39.59079966} y1={65.24759874} x2={40.690799999999996} y2={65.24759874} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={39.59079966} y1={61.44760125999999} x2={40.690799999999996} y2={61.44760125999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={39.59079966} y1={61.44760125999999} x2={39.59079966} y2={61.647600860000004} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.79080034} y1={61.44760125999999} x2={41.79080034} y2={61.647600860000004} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={40.690799999999996} y1={61.44760125999999} x2={41.79080034} y2={61.44760125999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={68.34632} y1={69.65382056} x2={68.34632} y2={72.78937943999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={68.34632} y1={72.78937943999999} x2={69.15169811999999} y2={72.78937943999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={68.34632} y1={69.65382056} x2={69.15169811999999} y2={69.65382056} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={72.17390188} y1={69.65382056} x2={72.97927999999999} y2={69.65382056} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={72.17390188} y1={72.78937943999999} x2={72.97927999999999} y2={72.78937943999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={72.97927999999999} y1={69.65382056} x2={72.97927999999999} y2={72.78937943999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={50.093798719999995} y1={75.74259934} x2={53.89379874} y2={75.74259934} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={50.093798719999995} y1={72.54259812} x2={53.89379874} y2={72.54259812} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={73.8378} y1={71.0184} x2={74.4474} y2={71.0184} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={74.4474} y1={70.1294} x2={74.4474} y2={71.0184} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={73.2282} y1={70.1294} x2={73.2282} y2={71.0184} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={73.2282} y1={71.0184} x2={73.8378} y2={71.0184} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={73.2282} y1={68.3768} x2={73.8378} y2={68.3768} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={73.2282} y1={68.3768} x2={73.2282} y2={69.2658} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={74.4474} y1={68.3768} x2={74.4474} y2={69.2658} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={73.8378} y1={68.3768} x2={74.4474} y2={68.3768} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.452799999999996} y1={48.8696} x2={41.452799999999996} y2={50.901599999999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.452799999999996} y1={50.901599999999995} x2={41.7068} y2={50.901599999999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.7068} y1={50.6476} x2={41.7068} y2={50.901599999999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.452799999999996} y1={50.6476} x2={41.7068} y2={50.6476} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={66.01979938} y1={44.87548047999999} x2={66.01979938} y2={45.01772048} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={66.66980062} y1={44.87548047999999} x2={66.66980062} y2={45.01772048} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={49.2641001} y1={49.51259846} x2={49.2641001} y2={51.4160008} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.7147001} y1={48.08760004} x2={47.7147001} y2={49.51259846} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.7147001} y1={49.51259846} x2={47.7147001} y2={51.4160008} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={49.2641001} y1={48.08760004} x2={49.2641001} y2={49.51259846} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={73.38579938} y1={46.00448} x2={73.38579938} y2={46.146719999999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={74.03580062} y1={46.00448} x2={74.03580062} y2={46.146719999999995} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={41.9608} y1={53.21779806} x2={41.9608} y2={54.52759986} strokeWidth={0.254} />
      <silkscreenline x1={41.549601939999995} y1={52.806599999999996} x2={41.9608} y2={53.21779806} strokeWidth={0.254} />
      <silkscreenline x1={41.549601939999995} y1={52.806599999999996} x2={41.549601939999995} y2={53.12440226} strokeWidth={0.254} />
      <silkscreenline x1={41.549601939999995} y1={53.12440226} x2={41.85438162} y2={52.81962258} strokeWidth={0.254} />
      <silkscreenline x1={41.56262451999999} y1={52.81962258} x2={41.85438162} y2={52.81962258} strokeWidth={0.254} />
      <fabricationnotepath route={[{"x":45.0088,"y":28.2956},{"x":45.0088,"y":28.549599999999998}]} strokeWidth={0.254} color="#ec4899" />
      <fabricationnotetext pcbX={40.439797199999994} pcbY={49.8505988} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={20.243700939999997} pcbY={51.842136599999996} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={99.49170093999999} pcbY={61.0115366} anchorAlignment="center" text="TP2" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={45.00870094} pcbY={40.5899366} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={20.243700939999997} pcbY={66.5741366} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={99.49170093999999} pcbY={46.254136599999995} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={23.418799999999997} pcbY={100.1776} anchorAlignment="center" text="Install label in silkscreened box after final wash.  Text shall be 8 pt font.  Text shall be per the Label Table in the PDF schematic." font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={49.94079928} pcbY={50.42760044} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={60.5217992} pcbY={60.47760066} anchorAlignment="center" text="T1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={36.60579928} pcbY={56.77760044} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={84.21779955999999} pcbY={40.491999279999995} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={80.33580072} pcbY={66.10759956} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={91.72379928} pcbY={57.15860044} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={36.60579928} pcbY={51.06260044} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={67.59379928} pcbY={42.42660044} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={33.936800299999994} pcbY={45.26859628} anchorAlignment="center" text="Q2" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={49.80580082} pcbY={53.977600960000004} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={74.47279999999999} pcbY={51.9176} anchorAlignment="center" text="TP9" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={30.657799999999998} pcbY={58.7756} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={27.998801} pcbY={50.107601079999995} anchorAlignment="center" text="J4" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={50.8298196} pcbY={53.952373679999994} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={36.55499928} pcbY={53.72960044} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={42.39979582} pcbY={50.49959928} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={41.69279698} pcbY={43.21259836} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={42.39979582} pcbY={53.54759928} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={38.09479554} pcbY={46.74460044} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={37.120796979999994} pcbY={43.120599559999995} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={47.3964} pcbY={68.3514} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.889} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={47.3964} pcbY={72.4252044} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.889} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={47.3964} pcbY={70.3834} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.889} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={33.76379582} pcbY={48.72159928} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={39.61879554} pcbY={45.312599240000004} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={35.863796699999995} pcbY={50.795600719999996} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={39.958599279999994} pcbY={56.16800044} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={35.59679697999999} pcbY={51.50259956} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={42.39979582} pcbY={48.97559928} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={44.4997967} pcbY={48.00160072} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={51.636800459999996} pcbY={70.5676008} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.8128} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={32.85080044} pcbY={53.46260071999999} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={74.95979928} pcbY={47.12560044} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={73.98580071999999} pcbY={42.48559956} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={73.42279956} pcbY={41.22859928} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={68.15680044} pcbY={47.493600719999996} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={68.14380071999999} pcbY={43.89660004} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={75.36779947999999} pcbY={61.44559974} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={71.81179947999999} pcbY={61.44559974} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={78.00779928} pcbY={61.09560044} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={21.6408} pcbY={62.8396} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={32.562799999999996} pcbY={68.6816} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={89.08880074} pcbY={65.30360066} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={38.73000636} pcbY={51.93040414} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={70.69579968} pcbY={46.06160206} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.508} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={74.210799} pcbY={63.83360105999999} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={65.05379928} pcbY={42.55360044} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={62.42779996} pcbY={43.34860012} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={1.143} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={43.77079892} pcbY={61.88559886} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={1.8499988399999998} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={98.6028} pcbY={54.203599999999994} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={47.403628839999996} pcbY={74.60929959999999} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.8128} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={42.41142901999999} pcbY={52.02359928} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={37.975496820000004} pcbY={55.38060044} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={42.39979582} pcbY={45.927599279999995} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={84.49479926} pcbY={56.057599339999996} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={70.41280049999999} pcbY={42.403600739999995} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={0.8000009399999999} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={45.681999059999995} pcbY={58.347000400000006} anchorAlignment="bottom_left" text="TP5" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={62.377800060000006} pcbY={53.052598999999994} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={62.377800060000006} pcbY={78.579599} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={57.1246} pcbY={75.2602} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={81.85980072} pcbY={66.10759956} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={47.56099708} pcbY={55.27965576} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={40.31579948} pcbY={64.74759974} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={69.26280025999999} pcbY={70.84659948} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={53.84379884} pcbY={74.64259899999999} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={74.15519585999999} pcbY={68.5338101} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={66.61980071999999} pcbY={43.89660004} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={54.46380014} pcbY={52.4836009} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={48.214399379999996} pcbY={51.01260054} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={73.98580071999999} pcbY={45.025599559999996} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotedimension from={{ x: 19.6088, y: 28.549599999999998 }} to={{ x: 45.0088, y: 28.549599999999998 }} text="1000.00 mil" font="tscircuit2024" fontSize={1.524} color="#ec4899" arrowSize={1.524} offset={1.27} />
      <fabricationnotedimension from={{ x: 17.5768, y: 38.9636 }} to={{ x: 102.6668, y: 38.9636 }} text="3350.00 mil" font="tscircuit2024" fontSize={1.524} color="#ec4899" arrowSize={1.524} offset={1.778} />
      <fabricationnotedimension from={{ x: 17.5768, y: 38.9636 }} to={{ x: 17.576800000000002, y: 80.8736 }} text="1650.00 mil" font="tscircuit2024" fontSize={1.524} color="#ec4899" arrowSize={1.524} offset={1.524} />
      <silkscreentext pcbX={19.1008} pcbY={50.901599999999995} anchorAlignment="center" fontSize={2.54} font="tscircuit2024" pcbRotation="180deg" mirrored={false} layer="top" text="-" />
      <silkscreentext pcbX={23.418799999999997} pcbY={42.5196} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="PGND" />
      <silkscreentext pcbX={23.418799999999997} pcbY={45.059599999999996} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VAUX" />
      <silkscreentext pcbX={24.9428} pcbY={47.599599999999995} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SS" />
      <silkscreentext pcbX={23.1648} pcbY={50.1396} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="COMP" />
      <silkscreentext pcbX={22.4028} pcbY={52.6796} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="PGOOD" />
      <silkscreentext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text=".Layer_Name" />
      <silkscreentext pcbX={18.5928} pcbY={72.49159999999999} anchorAlignment="center" fontSize={1.8499988399999998} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VIN" />
      <silkscreentext pcbX={22.9108} pcbY={74.01559999999999} anchorAlignment="center" fontSize={2.54} font="tscircuit2024" pcbRotation="180deg" mirrored={false} layer="top" text="+" />
      <silkscreentext pcbX={19.3548} pcbY={49.8856} anchorAlignment="center" fontSize={1.8499988399999998} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VIN" />
      <silkscreentext pcbX={95.04679999999999} pcbY={65.12559999999999} anchorAlignment="center" fontSize={1.8499988399999998} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="+ VOUT" />
      <silkscreentext pcbX={96.3168} pcbY={45.3136} anchorAlignment="center" fontSize={1.8499988399999998} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="- VOUT" />
      <silkscreentext pcbX={42.4688} pcbY={78.14177919999999} anchorAlignment="center" fontSize={2.032} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="'.PRJ_Number'.PCB_Rev" />
      <silkscreentext pcbX={50.7571629} pcbY={45.6946} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R26" />
      <silkscreentext pcbX={54.279799999999994} pcbY={53.347599679999995} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="T1" />
      <silkscreentext pcbX={67.18979958} pcbY={40.41513634} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R15" />
      <silkscreentext pcbX={32.34650122} pcbY={46.49469746} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q2" />
      <silkscreentext pcbX={37.388799999999996} pcbY={45.9486} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C25" />
      <silkscreentext pcbX={31.0388} pcbY={56.7436} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J3" />
      <silkscreentext pcbX={27.7368} pcbY={55.2196} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J4" />
      <silkscreentext pcbX={88.56905324} pcbY={41.374816919999994} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP6" />
      <silkscreentext pcbX={30.784799999999997} pcbY={53.9496} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R9" />
      <silkscreentext pcbX={51.2572} pcbY={76.4032} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R4" />
      <silkscreentext pcbX={48.0314} pcbY={70.2818} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C16" />
      <silkscreentext pcbX={39.928799999999995} pcbY={46.837599999999995} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U1" />
      <silkscreentext pcbX={70.66279999999999} pcbY={47.3456} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U3" />
      <silkscreentext pcbX={59.486799999999995} pcbY={45.059599999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U2" />
      <silkscreentext pcbX={45.14432678} pcbY={47.0916} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R16" />
      <silkscreentext pcbX={45.2628} pcbY={48.6156} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R6" />
      <silkscreentext pcbX={75.9968} pcbY={40.995599999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R13" />
      <silkscreentext pcbX={69.9008} pcbY={73.5076} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R1" />
      <silkscreentext pcbX={35.7378} pcbY={55.9816} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R10" />
      <silkscreentext pcbX={34.41943332} pcbY={52.38624524} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R18" />
      <silkscreentext pcbX={62.026799999999994} pcbY={39.7256} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R14" />
      <silkscreentext pcbX={40.69975604} pcbY={56.83300292} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R8" />
      <silkscreentext pcbX={41.9608} pcbY={40.4876} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R17" />
      <silkscreentext pcbX={37.2618} pcbY={57.327799999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R11" />
      <silkscreentext pcbX={75.7428} pcbY={47.8536} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R19" />
      <silkscreentext pcbX={74.2188} pcbY={47.8536} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R22" />
      <silkscreentext pcbX={30.784799999999997} pcbY={49.8856} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R20" />
      <silkscreentext pcbX={65.58279999999999} pcbY={48.09359952} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R21" />
      <silkscreentext pcbX={45.2628} pcbY={50.1396} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R5" />
      <silkscreentext pcbX={45.516799999999996} pcbY={65.3796} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q1" />
      <silkscreentext pcbX={91.7448} pcbY={59.5376} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J2" />
      <silkscreentext pcbX={27.2288} pcbY={59.5376} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J1" />
      <silkscreentext pcbX={60.5028} pcbY={71.9836} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="D3" />
      <silkscreentext pcbX={47.675799999999995} pcbY={55.59300032} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="D2" />
      <silkscreentext pcbX={74.7268} pcbY={68.5546} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D1" />
      <silkscreentext pcbX={42.41142901999999} pcbY={54.909999400000004} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C17" />
      <silkscreentext pcbX={45.2628} pcbY={45.5676} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C21" />
      <silkscreentext pcbX={75.62326506} pcbY={42.29669468} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C20" />
      <silkscreentext pcbX={40.4368} pcbY={40.233599999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C22" />
      <silkscreentext pcbX={74.47279999999999} pcbY={71.72959999999999} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C1" />
      <silkscreentext pcbX={69.9008} pcbY={47.4726} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C23" />
      <silkscreentext pcbX={38.7858} pcbY={55.8546} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C19" />
      <silkscreentext pcbX={30.5308} pcbY={48.361599999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C26" />
      <silkscreentext pcbX={65.2331182} pcbY={44.49728972} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C24" />
      <silkscreentext pcbX={44.93288956} pcbY={51.823599679999994} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C18" />
      <silkscreentext pcbX={79.0448} pcbY={55.9816} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C12" />
      <silkscreentext pcbX={92.5068} pcbY={52.425599999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C11" />
      <silkscreentext pcbX={76.5048} pcbY={54.8386} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C10" />
      <silkscreentext pcbX={72.4408} pcbY={55.727599999999995} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C9" />
      <silkscreentext pcbX={91.2368} pcbY={72.6186} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C8" />
      <silkscreentext pcbX={80.5688} pcbY={60.0456} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C7" />
      <silkscreentext pcbX={41.452799999999996} pcbY={69.5706} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C4" />
      <silkscreentext pcbX={41.452799999999996} pcbY={71.6026} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C3" />
      <silkscreentext pcbX={28.7528} pcbY={72.9996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C2" />
      <silkscreentext pcbX={59.2328} pcbY={49.2506} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C28" />
      <silkscreentext pcbX={46.2788} pcbY={55.104657380000006} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C15" />
      <silkscreentext pcbX={41.452799999999996} pcbY={73.7616} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C6" />
      <silkscreentext pcbX={41.3258} pcbY={67.2846} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C5" />
      <silkscreentext pcbX={52.120799999999996} pcbY={49.51259846} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R2" />
      <silkscreentext pcbX={37.388799999999996} pcbY={40.233599999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R24" />
      <silkscreentext pcbX={38.9128} pcbY={40.233599999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R23" />
      <silkscreentext pcbX={45.35479626} pcbY={53.4416} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R3" />
      <silkscreentext pcbX={39.4208} pcbY={65.88759999999999} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R12" />
      <silkscreentext pcbX={72.18679999999999} pcbY={39.7256} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D4" />
      <silkscreentext pcbX={40.9448} pcbY={58.0136} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP5" />
      <silkscreentext pcbX={84.5058} pcbY={41.7576} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R7" />
      <silkscreentext pcbX={94.51339999999999} pcbY={62.5856} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP2" />
      <silkscreentext pcbX={19.8628} pcbY={70.7136} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP1" />
      <silkscreentext pcbX={94.5388} pcbY={47.8536} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP4" />
      <silkscreentext pcbX={18.5928} pcbY={51.4096} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP3" />
      <silkscreentext pcbX={46.532799999999995} pcbY={43.0276} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP8" />
      <silkscreentext pcbX={46.532799999999995} pcbY={41.5036} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={79.4258} pcbY={41.40909421999999} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP7" />
      <silkscreentext pcbX={71.6788} pcbY={53.3146} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP9" />
      <silkscreentext pcbX={59.9948} pcbY={74.77759999999999} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C27" />
      <silkscreentext pcbX={80.69579999999999} pcbY={63.093599999999995} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C13" />
      <silkscreentext pcbX={82.21979999999999} pcbY={63.2206} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C14" />
      <silkscreentext pcbX={49.0433995} pcbY={45.765719999999995} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="D5" />
      <silkscreentext pcbX={52.763801} pcbY={50.08372} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R25" />
      <silkscreentext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="bottom" text=".Layer_Name" />
      <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} />
      <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} layer="bottom" />
      <courtyardoutline outline={[{"x":49.69079978,"y":50.577600139999994},{"x":50.74080022,"y":50.577600139999994},{"x":50.74080022,"y":48.17759986},{"x":49.69079978,"y":48.17759986}]} layer="top" />
      <courtyardoutline outline={[{"x":36.35579978,"y":56.927600139999996},{"x":37.405800219999996,"y":56.927600139999996},{"x":37.405800219999996,"y":54.52759986},{"x":36.35579978,"y":54.52759986}]} layer="top" />
      <courtyardoutline outline={[{"x":84.06779986,"y":40.24199978},{"x":84.06779986,"y":41.29200022},{"x":86.46780014,"y":41.29200022},{"x":86.46780014,"y":40.24199978}]} layer="top" />
      <courtyardoutline outline={[{"x":80.58580022,"y":68.35760013999999},{"x":79.53579977999999,"y":68.35760013999999},{"x":79.53579977999999,"y":65.95759986},{"x":80.58580022,"y":65.95759986}]} layer="top" />
      <courtyardoutline outline={[{"x":91.47379978,"y":57.308600139999996},{"x":92.52380022,"y":57.308600139999996},{"x":92.52380022,"y":54.90859986},{"x":91.47379978,"y":54.90859986}]} layer="top" />
      <courtyardoutline outline={[{"x":36.35579978,"y":51.21260013999999},{"x":37.405800219999996,"y":51.21260013999999},{"x":37.405800219999996,"y":48.81259986},{"x":36.35579978,"y":48.81259986}]} layer="top" />
      <courtyardoutline outline={[{"x":67.34379978,"y":42.57660014},{"x":68.39380022,"y":42.57660014},{"x":68.39380022,"y":40.17659986},{"x":67.34379978,"y":40.17659986}]} layer="top" />
      <courtyardoutline outline={[{"x":32.186801259999996,"y":42.29359842},{"x":36.03680118,"y":42.29359842},{"x":36.03680118,"y":45.79359904},{"x":32.186801259999996,"y":45.79359904}]} layer="top" />
      <courtyardoutline outline={[{"x":50.5798201,"y":54.10237338},{"x":51.62982054,"y":54.10237338},{"x":51.62982054,"y":51.702373099999996},{"x":50.5798201,"y":51.702373099999996}]} layer="top" />
      <courtyardoutline outline={[{"x":36.304999779999996,"y":53.879600139999994},{"x":37.35500022,"y":53.879600139999994},{"x":37.35500022,"y":51.47959986},{"x":36.304999779999996,"y":51.47959986}]} layer="top" />
      <courtyardoutline outline={[{"x":42.24979612,"y":50.24959978},{"x":42.24979612,"y":51.299600219999995},{"x":44.6497964,"y":51.299600219999995},{"x":44.6497964,"y":50.24959978}]} layer="top" />
      <courtyardoutline outline={[{"x":41.94279648,"y":45.46259894},{"x":40.89279604,"y":45.46259894},{"x":40.89279604,"y":43.06259866},{"x":41.94279648,"y":43.06259866}]} layer="top" />
      <courtyardoutline outline={[{"x":42.24979612,"y":53.29759978},{"x":42.24979612,"y":54.34760022},{"x":44.6497964,"y":54.34760022},{"x":44.6497964,"y":53.29759978}]} layer="top" />
      <courtyardoutline outline={[{"x":37.84479604,"y":46.894600139999994},{"x":38.89479648,"y":46.894600139999994},{"x":38.89479648,"y":44.49459986},{"x":37.84479604,"y":44.49459986}]} layer="top" />
      <courtyardoutline outline={[{"x":37.370796479999996,"y":45.37060013999999},{"x":36.32079604,"y":45.37060013999999},{"x":36.32079604,"y":42.97059986},{"x":37.370796479999996,"y":42.97059986}]} layer="top" />
      <courtyardoutline outline={[{"x":33.613796119999996,"y":48.47159978},{"x":33.613796119999996,"y":49.521600219999996},{"x":36.0137964,"y":49.521600219999996},{"x":36.0137964,"y":48.47159978}]} layer="top" />
      <courtyardoutline outline={[{"x":39.36879604,"y":45.46259894},{"x":40.41879648,"y":45.46259894},{"x":40.41879648,"y":43.06259866},{"x":39.36879604,"y":43.06259866}]} layer="top" />
      <courtyardoutline outline={[{"x":33.613796119999996,"y":51.04560022},{"x":33.613796119999996,"y":49.99559978},{"x":36.0137964,"y":49.99559978},{"x":36.0137964,"y":51.04560022}]} layer="top" />
      <courtyardoutline outline={[{"x":39.70859978,"y":56.318000139999995},{"x":40.75860022,"y":56.318000139999995},{"x":40.75860022,"y":53.91799986},{"x":39.70859978,"y":53.91799986}]} layer="top" />
      <courtyardoutline outline={[{"x":35.846796479999995,"y":53.75260014},{"x":34.796796040000004,"y":53.75260014},{"x":34.796796040000004,"y":51.35259986},{"x":35.846796479999995,"y":51.35259986}]} layer="top" />
      <courtyardoutline outline={[{"x":42.24979612,"y":48.725599779999996},{"x":42.24979612,"y":49.77560022},{"x":44.6497964,"y":49.77560022},{"x":44.6497964,"y":48.725599779999996}]} layer="top" />
      <courtyardoutline outline={[{"x":42.24979612,"y":48.25160022},{"x":42.24979612,"y":47.201599779999995},{"x":44.6497964,"y":47.201599779999995},{"x":44.6497964,"y":48.25160022}]} layer="top" />
      <courtyardoutline outline={[{"x":30.600799860000002,"y":53.71260022},{"x":30.600799860000002,"y":52.66259978},{"x":33.000800139999996,"y":52.66259978},{"x":33.000800139999996,"y":53.71260022}]} layer="top" />
      <courtyardoutline outline={[{"x":74.70979978,"y":47.275600139999995},{"x":75.75980022,"y":47.275600139999995},{"x":75.75980022,"y":44.87559986},{"x":74.70979978,"y":44.87559986}]} layer="top" />
      <courtyardoutline outline={[{"x":74.23580022,"y":44.735600139999995},{"x":73.18579978,"y":44.735600139999995},{"x":73.18579978,"y":42.33559986},{"x":74.23580022,"y":42.33559986}]} layer="top" />
      <courtyardoutline outline={[{"x":73.27279986,"y":40.978599779999996},{"x":73.27279986,"y":42.02860022},{"x":75.67280013999999,"y":42.02860022},{"x":75.67280013999999,"y":40.978599779999996}]} layer="top" />
      <courtyardoutline outline={[{"x":65.90679986,"y":47.74360022},{"x":65.90679986,"y":46.69359978},{"x":68.30680013999999,"y":46.69359978},{"x":68.30680013999999,"y":47.74360022}]} layer="top" />
      <courtyardoutline outline={[{"x":68.39380022,"y":46.14660062},{"x":67.34379978,"y":46.14660062},{"x":67.34379978,"y":43.74660034},{"x":68.39380022,"y":43.74660034}]} layer="top" />
      <courtyardoutline outline={[{"x":74.14280065999999,"y":62.39560037999999},{"x":77.34279934,"y":62.39560037999999},{"x":77.34279934,"y":57.69559962},{"x":74.14280065999999,"y":57.69559962}]} layer="top" />
      <courtyardoutline outline={[{"x":70.58680066,"y":62.39560037999999},{"x":73.78679934,"y":62.39560037999999},{"x":73.78679934,"y":57.69559962},{"x":70.58680066,"y":57.69559962}]} layer="top" />
      <courtyardoutline outline={[{"x":77.75779978,"y":61.24560013999999},{"x":78.80780022,"y":61.24560013999999},{"x":78.80780022,"y":58.84559986},{"x":77.75779978,"y":58.84559986}]} layer="top" />
      <courtyardoutline outline={[{"x":69.02479972,"y":43.42260302},{"x":72.87479964,"y":43.42260302},{"x":72.87479964,"y":46.92260364},{"x":69.02479972,"y":46.92260364}]} layer="top" />
      <courtyardoutline outline={[{"x":64.80379977999999,"y":42.70360014},{"x":65.85380022,"y":42.70360014},{"x":65.85380022,"y":40.30359986},{"x":64.80379977999999,"y":40.30359986}]} layer="top" />
      <courtyardoutline outline={[{"x":42.26142932,"y":51.77359978},{"x":44.6614296,"y":51.77359978},{"x":44.6614296,"y":52.823600219999996},{"x":42.26142932,"y":52.823600219999996}]} layer="top" />
      <courtyardoutline outline={[{"x":38.77549776,"y":55.53060014},{"x":38.77549776,"y":53.130599860000004},{"x":37.725497319999995,"y":53.130599860000004},{"x":37.725497319999995,"y":55.53060014}]} layer="top" />
      <courtyardoutline outline={[{"x":42.24979612,"y":45.677599779999994},{"x":44.6497964,"y":45.677599779999994},{"x":44.6497964,"y":46.72760022},{"x":42.24979612,"y":46.72760022}]} layer="top" />
      <courtyardoutline outline={[{"x":59.20479903999999,"y":75.54159898},{"x":55.704798419999996,"y":75.54159898},{"x":55.704798419999996,"y":69.44159848},{"x":59.20479903999999,"y":69.44159848}]} layer="top" />
      <courtyardoutline outline={[{"x":82.10980022,"y":65.95759986},{"x":82.10980022,"y":68.35760013999999},{"x":81.05979977999999,"y":68.35760013999999},{"x":81.05979977999999,"y":65.95759986}]} layer="top" />
      <courtyardoutline outline={[{"x":48.36099802,"y":55.42965545999999},{"x":48.36099802,"y":53.02965518},{"x":47.31099758,"y":53.02965518},{"x":47.31099758,"y":55.42965545999999}]} layer="top" />
      <courtyardoutline outline={[{"x":68.31279962,"y":69.62160066},{"x":68.31279962,"y":72.82159933999999},{"x":73.01280037999999,"y":72.82159933999999},{"x":73.01280037999999,"y":69.62160066}]} layer="top" />
      <courtyardoutline outline={[{"x":55.843799919999995,"y":72.19259882},{"x":48.14380008,"y":72.19259882},{"x":48.14380008,"y":76.09259863999999},{"x":55.843799919999995,"y":76.09259863999999}]} layer="top" />
      <courtyardoutline outline={[{"x":66.86980022,"y":43.74660034},{"x":66.86980022,"y":46.14660062},{"x":65.81979978,"y":46.14660062},{"x":65.81979978,"y":43.74660034}]} layer="top" />
      <courtyardoutline outline={[{"x":51.838801579999995,"y":52.958598679999994},{"x":51.838801579999995,"y":51.35859934},{"x":54.68880096,"y":51.35859934},{"x":54.68880096,"y":52.958598679999994}]} layer="top" />
      <courtyardoutline outline={[{"x":74.23580022,"y":44.87559986},{"x":74.23580022,"y":47.275600139999995},{"x":73.18579978,"y":47.275600139999995},{"x":73.18579978,"y":44.87559986}]} layer="top" />
            </footprint>} symbol={<symbol>
      <schematicpath points={[{"x":0.6127147985000001,"y":2.641720704},{"x":1.0827147985,"y":2.631720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.3327147985,"y":3.2917207040000003},{"x":1.3327147985,"y":2.851720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.3427147985,"y":2.1917207039999997},{"x":1.3427147985,"y":2.731720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.1227147985,"y":2.851720704},{"x":1.3427147985,"y":2.851720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.1227147985,"y":2.891720704},{"x":1.1227147985,"y":2.811720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.1227147985,"y":2.641720704},{"x":1.3427147985,"y":2.641720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.1227147985,"y":2.661720704},{"x":1.1227147985,"y":2.591720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.1227147985,"y":2.771720704},{"x":1.1227147985,"y":2.701720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.3027147985,"y":2.701720704},{"x":1.3027147985,"y":2.771720704},{"x":1.2327147985,"y":2.741720704},{"x":1.3027147985,"y":2.701720704}]} isFilled={true} />
      <schematicpath points={[{"x":1.1227147985,"y":2.741720704},{"x":1.3427147985,"y":2.731720704}]} isFilled={false} />
      <schematicpath points={[{"x":1.0827147985,"y":2.851720704},{"x":1.0827147985,"y":2.631720704}]} isFilled={false} />
      <schematiccircle center={{"x":1.1927147985,"y":2.741720704}} radius={0.29} isFilled={false} />
      <schematictext text={"Q1"} schX={1.0327147985} schY={3.101720704} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"100V"} schX={1.0327147985} schY={2.321720704} anchor={"center_right"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.2589393238000004,"y":2.741720704},{"x":-2.3589593238,"y":2.741720704}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.7589193238000003,"y":2.741720704},{"x":-2.8589393238,"y":2.741720704}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.3589593238,"y":2.661740704},{"x":-2.7589193238000003,"y":2.661740704},{"x":-2.7589193238000003,"y":2.821700704},{"x":-2.3589593238,"y":2.821700704},{"x":-2.3589593238,"y":2.661740704}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R8"} schX={-2.5589393238} schY={2.901720704} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-2.5589393238} schY={2.581720704} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":0.48278138029999995,"y":2.010595183},{"x":0.38276138029999995,"y":2.010595183}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.0171986197,"y":2.010595183},{"x":-0.1172186197,"y":2.010595183}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.38276138029999995,"y":1.930615183},{"x":-0.0171986197,"y":1.930615183},{"x":-0.0171986197,"y":2.090575183},{"x":0.38276138029999995,"y":2.090575183},{"x":0.38276138029999995,"y":1.930615183}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R11"} schX={0.18278138029999996} schY={2.170595183} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"100"} schX={0.18278138030000002} schY={1.850595183} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.9139069013,"y":1.070860352},{"x":-0.9139069013,"y":1.310860352}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.9139069013,"y":1.430860352},{"x":-0.9139069013,"y":1.670860352}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.7538869013,"y":1.310860352},{"x":-1.0739269013,"y":1.310860352}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.7538869013,"y":1.430860352},{"x":-1.0739269013,"y":1.430860352}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C19"} schX={-0.7989069013} schY={1.570860352} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"470pF"} schX={-0.7989069013} schY={1.170860352} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.2589393238000004,"y":2.010595183},{"x":-2.3589593238,"y":2.010595183}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.7589193238000003,"y":2.010595183},{"x":-2.8589393238,"y":2.010595183}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.3589593238,"y":1.930615183},{"x":-2.7589193238000003,"y":1.930615183},{"x":-2.7589193238000003,"y":2.090575183},{"x":-2.3589593238,"y":2.090575183},{"x":-2.3589593238,"y":1.930615183}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R10"} schX={-2.5589393238} schY={2.170595183} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-2.5589393238} schY={1.850595183} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.3867531264,"y":4.595362436299999},{"x":-4.3867531264,"y":4.355362436299999}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.3867531264,"y":4.2353624363},{"x":-4.3867531264,"y":3.9953624362999998}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.546773126400001,"y":4.355362436299999},{"x":-4.2267331264,"y":4.355362436299999}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.546773126400001,"y":4.2353624363},{"x":-4.2267331264,"y":4.2353624363}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C17"} schX={-4.291753126400001} schY={4.4953624363} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"1uF"} schX={-4.291753126400001} schY={4.095362436299999} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.9668828161,"y":3.1728462251000003},{"x":-10.9668828161,"y":3.2728662251}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-10.9668828161,"y":3.6728262251},{"x":-10.9668828161,"y":3.7728462251}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-11.0468628161,"y":3.2728662251},{"x":-11.0468628161,"y":3.6728262251},{"x":-10.8869028161,"y":3.6728262251},{"x":-10.8869028161,"y":3.2728662251},{"x":-11.0468628161,"y":3.2728662251}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R6"} schX={-10.8068828161} schY={3.6328462251} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"100k"} schX={-10.8068828161} schY={3.3128462251} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.9668828161,"y":-0.3},{"x":-10.9668828161,"y":-0.19998}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-10.9668828161,"y":0.19998},{"x":-10.9668828161,"y":0.3}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-11.0468628161,"y":-0.19998},{"x":-11.0468628161,"y":0.19998},{"x":-10.8869028161,"y":0.19998},{"x":-10.8869028161,"y":-0.19998},{"x":-11.0468628161,"y":-0.19998}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R16"} schX={-10.8068828161} schY={0.16} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"9.76k"} schX={-10.8068828161} schY={-0.16} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.6980083372,"y":-0.20860930989999998},{"x":-11.6980083372,"y":0.03139069010000001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-11.6980083372,"y":0.1513906901},{"x":-11.6980083372,"y":0.3913906901}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-11.5379883372,"y":0.031390690100000014},{"x":-11.858028337199999,"y":0.0313906901}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-11.5379883372,"y":0.1513906901},{"x":-11.858028337199999,"y":0.1513906901}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C21"} schX={-11.583008337199999} schY={0.2913906901} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"220pF"} schX={-11.583008337199999} schY={-0.1086093099} anchor={"top_left"} fontSize={0.18} />
      <schematicrect schX={-3.6556276053728585} schY={-0.18278138026864177} width={0.4} height={0.4} />
      <schematicline x1={-3.8556276053728586} y1={-0.18278138026864177} x2={-4.021190365910144} y2={-0.18278138026864177} />
      <schematictext text={"1"} schX={-3.8556276053728586} schY={-0.18278138026864177} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1"} schX={-3.938408985641501} schY={-0.18278138026864177} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-3.4556276053728583} y1={-0.18278138026864177} x2={-3.290064844835573} y2={-0.18278138026864177} />
      <schematictext text={"1"} schX={-3.4556276053728583} schY={-0.18278138026864177} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"2"} schX={-3.3728462251042157} schY={-0.18278138026864177} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.0529759148,"y":-0.3},{"x":-10.0529759148,"y":-0.19998}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-10.0529759148,"y":0.19998},{"x":-10.0529759148,"y":0.3}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-10.1329559148,"y":-0.19998},{"x":-10.1329559148,"y":0.19998},{"x":-9.972995914799998,"y":0.19998},{"x":-9.972995914799998,"y":-0.19998},{"x":-10.1329559148,"y":-0.19998}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R17"} schX={-9.8929759148} schY={0.16} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"86.6k"} schX={-9.8929759148} schY={-0.16} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.9562876332,"y":-0.20860930989999998},{"x":-8.9562876332,"y":0.03139069010000001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.9562876332,"y":0.1513906901},{"x":-8.9562876332,"y":0.3913906901}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.796267633200001,"y":0.031390690100000014},{"x":-9.1163076332,"y":0.0313906901}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.796267633200001,"y":0.1513906901},{"x":-9.1163076332,"y":0.1513906901}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C22"} schX={-8.8412876332} schY={0.2913906901} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.01uF"} schX={-8.8412876332} schY={-0.1086093099} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.8390690134,"y":4.2039717462},{"x":-8.9390890134,"y":4.2039717462}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.3390490134,"y":4.2039717462},{"x":-9.439069013400001,"y":4.2039717462}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.9390890134,"y":4.1239917462},{"x":-9.3390490134,"y":4.1239917462},{"x":-9.3390490134,"y":4.2839517462},{"x":-8.9390890134,"y":4.2839517462},{"x":-8.9390890134,"y":4.1239917462}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R5"} schX={-9.1390690134} schY={4.3639717462} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-9.1390690134} schY={4.0439717461999996} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.5907248726,"y":3.4470182955000004},{"x":-8.5907248726,"y":3.6870182955}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.5907248726,"y":3.8070182955000003},{"x":-8.5907248726,"y":4.0470182955}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.4307048726,"y":3.6870182955},{"x":-8.750744872599999,"y":3.6870182955}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.4307048726,"y":3.8070182955000003},{"x":-8.750744872599999,"y":3.8070182955000003}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C18"} schX={-8.475724872599999} schY={3.9470182955000004} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={-8.475724872599999} schY={3.5470182955} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.0317855489,"y":6.0699311024},{"x":-6.0317855489,"y":6.3099311024}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.0317855489,"y":6.429931102399999},{"x":-6.0317855489,"y":6.6699311024}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.8717655489,"y":6.3099311024},{"x":-6.191805548900001,"y":6.3099311024}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.8717655489,"y":6.429931102399999},{"x":-6.191805548900001,"y":6.429931102399999}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C2"} schX={-5.9167855489} schY={6.5699311024} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"100uF"} schX={-5.9167855489} schY={6.1699311024} anchor={"top_left"} fontSize={0.18} />
      <schematicrect schX={7.338672417786011} schY={-3.1072834645669287} width={0.4} height={0.4} />
      <schematicline x1={7.538672417786011} y1={-3.1072834645669287} x2={7.6768179712830005} y2={-3.1072834645669287} />
      <schematictext text={"REF"} schX={7.538672417786011} schY={-3.1072834645669287} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"1"} schX={7.607745194534505} schY={-3.1072834645669287} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={7.311255210745717} y1={-2.9072834645669285} x2={7.311255210745717} y2={-2.7417207040296425} />
      <schematictext text={"K"} schX={7.311255210745717} schY={-2.9072834645669285} anchor={"center"} fontSize={0.18} />
      <schematictext text={"2"} schX={7.311255210745717} schY={-2.8245020842982855} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={7.311255210745717} y1={-3.307283464566929} x2={7.311255210745717} y2={-3.472846225104215} />
      <schematictext text={"A"} schX={7.311255210745717} schY={-3.307283464566929} anchor={"center"} fontSize={0.18} />
      <schematictext text={"3"} schX={7.311255210745717} schY={-3.390064844835572} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":11.8807897175,"y":-1.3966882816000001},{"x":11.8807897175,"y":-1.2966682816000001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.8807897175,"y":-0.8967082816},{"x":11.8807897175,"y":-0.7966882816}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.8008097175,"y":-1.2966682816000001},{"x":11.8008097175,"y":-0.8967082816},{"x":11.960769717500002,"y":-0.8967082816},{"x":11.960769717500002,"y":-1.2966682816000001},{"x":11.8008097175,"y":-1.2966682816000001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R19"} schX={12.040789717500001} schY={-0.9366882816000001} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"30.0k"} schX={12.040789717500001} schY={-1.2566882816} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":3.4728462251,"y":-0.6655627605},{"x":3.4728462251,"y":-0.5655427605}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":3.4728462251,"y":-0.16558276049999998},{"x":3.4728462251,"y":-0.06556276049999998}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":3.3928662251,"y":-0.5655427605},{"x":3.3928662251,"y":-0.16558276049999998},{"x":3.5528262251,"y":-0.16558276049999998},{"x":3.5528262251,"y":-0.5655427605},{"x":3.3928662251,"y":-0.5655427605}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R18"} schX={3.6328462251} schY={-0.20556276049999997} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"4.99k"} schX={3.6328462251} schY={-0.5255627605} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.0317855489,"y":-3.1331113941999997},{"x":-6.0317855489,"y":-2.8931113942}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.0317855489,"y":-2.7731113942},{"x":-6.0317855489,"y":-2.5331113942}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.8717655489,"y":-2.8931113942},{"x":-6.191805548900001,"y":-2.8931113942}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.8717655489,"y":-2.7731113942},{"x":-6.191805548900001,"y":-2.7731113942}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C26"} schX={-5.9167855489} schY={-2.6331113941999997} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.22uF"} schX={-5.9167855489} schY={-3.0331113942} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":7.1284738305,"y":-0.1172186197},{"x":7.1284738305,"y":-0.0171986197}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.1284738305,"y":0.38276138029999995},{"x":7.1284738305,"y":0.48278138029999995}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.0484938305,"y":-0.0171986197},{"x":7.0484938305,"y":0.38276138029999995},{"x":7.2084538305,"y":0.38276138029999995},{"x":7.2084538305,"y":-0.0171986197},{"x":7.0484938305,"y":-0.0171986197}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R14"} schX={7.2884738305} schY={0.3427813803} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1.00k"} schX={7.2884738305} schY={0.022781380299999987} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":9.3476783233,"y":-2.5589393238},{"x":9.1076783233,"y":-2.5589393238}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.987678323299999,"y":-2.5589393238},{"x":8.747678323299999,"y":-2.5589393238}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.1076783233,"y":-2.3989193238000004},{"x":9.1076783233,"y":-2.7189593238}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.987678323299999,"y":-2.3989193238000004},{"x":8.987678323299999,"y":-2.7189593238}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C24"} schX={9.0476783233} schY={-2.3189393238000005} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0.22uF"} schX={9.0476783233} schY={-2.7989393238} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":10.718538675300001,"y":-2.5589393238},{"x":10.6185186753,"y":-2.5589393238}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":10.2185586753,"y":-2.5589393238},{"x":10.1185386753,"y":-2.5589393238}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":10.6185186753,"y":-2.6389193238},{"x":10.2185586753,"y":-2.6389193238},{"x":10.2185586753,"y":-2.4789593238000003},{"x":10.6185186753,"y":-2.4789593238000003},{"x":10.6185186753,"y":-2.6389193238}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R21"} schX={10.4185386753} schY={-2.3989393238} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"1.00k"} schX={10.4185386753} schY={-2.7189393238000004} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":6.0576134784999995,"y":7.8595993516},{"x":5.817613478499999,"y":7.8595993516}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.6976134785,"y":7.8595993516},{"x":5.4576134785,"y":7.8595993516}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.817613478499999,"y":8.0196193516},{"x":5.817613478499999,"y":7.6995793516}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.6976134785,"y":8.0196193516},{"x":5.6976134785,"y":7.6995793516}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C1"} schX={5.7576134785} schY={8.0995993516} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"680pF"} schX={5.7576134785} schY={7.6195993516} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":0.32278138030000003,"y":3.6556276054},{"x":0.0627813803,"y":3.5256276054}]} isFilled={false} />
      <schematicpath points={[{"x":0.0627813803,"y":3.7956276054},{"x":0.32278138030000003,"y":3.6556276054}]} isFilled={false} />
      <schematicpath points={[{"x":0.0627813803,"y":3.5256276054},{"x":0.0627813803,"y":3.7956276054}]} isFilled={false} />
      <schematicpath points={[{"x":0.32278138030000003,"y":3.7956276054},{"x":0.32278138030000003,"y":3.5256276054}]} isFilled={false} />
      <schematicpath points={[{"x":0.0627813803,"y":3.6556276054},{"x":-0.3372186197,"y":3.6556276054}]} isFilled={false} />
      <schematicpath points={[{"x":0.7027813803,"y":3.6556276054},{"x":0.3327813803,"y":3.6556276054}]} isFilled={false} />
      <schematictext text={"D3"} schX={0.17278138029999998} schY={3.8856276054} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"150V"} schX={0.1827813803} schY={3.3456276054} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.0317855489,"y":-1.710595183},{"x":-6.0317855489,"y":-1.810615183}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.0317855489,"y":-2.210575183},{"x":-6.0317855489,"y":-2.3105951829999998}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.9518055489,"y":-1.810615183},{"x":-5.9518055489,"y":-2.210575183},{"x":-6.1117655489,"y":-2.210575183},{"x":-6.1117655489,"y":-1.810615183},{"x":-5.9518055489,"y":-1.810615183}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R20"} schX={-5.8717855489} schY={-1.850595183} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1.00k"} schX={-5.8717855489} schY={-2.170595183} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.9562876332,"y":0.9794696619000001},{"x":8.9562876332,"y":1.0794896619}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.9562876332,"y":1.4794496619000002},{"x":8.9562876332,"y":1.5794696619000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.8763076332,"y":1.0794896619},{"x":8.8763076332,"y":1.4794496619000002},{"x":9.036267633200001,"y":1.4794496619000002},{"x":9.036267633200001,"y":1.0794896619},{"x":8.8763076332,"y":1.0794896619}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R13"} schX={9.1162876332} schY={1.4394696619} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"100k"} schX={9.1162876332} schY={1.1194696619000002} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.9562876332,"y":-0.025827929599999966},{"x":8.9562876332,"y":0.21417207040000003}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.9562876332,"y":0.3341720704},{"x":8.9562876332,"y":0.5741720704}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.1163076332,"y":0.21417207040000003},{"x":8.796267633200001,"y":0.21417207040000003}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.1163076332,"y":0.3341720704},{"x":8.796267633200001,"y":0.3341720704}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C20"} schX={9.0712876332} schY={0.47417207040000003} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"4.7uF"} schX={9.0712876332} schY={0.07417207040000001} anchor={"top_left"} fontSize={0.18} />
      <schematicrect schX={10.418538675312647} schY={0.7494036591014375} width={0.4} height={0.7676817971283002} />
      <schematicline x1={10.418538675312647} y1={0.36556276053728737} x2={10.418538675312647} y2={0} />
      <schematictext text={"A"} schX={10.418538675312647} schY={0.36556276053728737} anchor={"center"} fontSize={0.18} />
      <schematictext text={"1"} schX={10.418538675312647} schY={0.18278138026864368} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={10.218538675312647} y1={0.7311255210745724} x2={9.870194534506716} y2={0.7311255210745724} />
      <schematictext text={"C"} schX={10.218538675312647} schY={0.7311255210745724} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"3"} schX={10.044366604909682} schY={0.7311255210745724} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={10.418538675312647} y1={1.1332445576655876} x2={10.418538675312647} y2={1.4622510421491448} />
      <schematictext text={"K"} schX={10.418538675312647} schY={1.1332445576655876} anchor={"center"} fontSize={0.18} />
      <schematictext text={"2"} schX={10.418538675312647} schY={1.2977477999073663} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":6.5801296897,"y":6.3043683418},{"x":6.5801296897,"y":6.005025341800001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.5801296897,"y":5.9656853418},{"x":6.5801296897,"y":5.7043683418}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.420109689699999,"y":5.9301133418},{"x":6.420109689699999,"y":5.9301133418},{"x":6.430777689699999,"y":5.934824341800001},{"x":6.4414456897,"y":5.9392423418},{"x":6.4521136897,"y":5.9433633418000005},{"x":6.4627816897,"y":5.9471863418},{"x":6.4734496897,"y":5.9507053418},{"x":6.4841176897,"y":5.953918341800001},{"x":6.4947856897,"y":5.9568213418000004},{"x":6.5054536896999995,"y":5.9594113418},{"x":6.516121689699999,"y":5.9616843418},{"x":6.526789689699999,"y":5.9636363418},{"x":6.5374576897,"y":5.9652653418},{"x":6.5481256897,"y":5.9665673418},{"x":6.5587936897,"y":5.9675383418},{"x":6.5694616897,"y":5.9681753418},{"x":6.5801296897,"y":5.9684753418000005},{"x":6.5907976897,"y":5.9681753418},{"x":6.6014656896999995,"y":5.9675383418},{"x":6.612133689699999,"y":5.9665673418},{"x":6.622801689699999,"y":5.9652653418},{"x":6.6334696897,"y":5.9636363418},{"x":6.6441376897,"y":5.9616843418},{"x":6.6548056897,"y":5.9594113418},{"x":6.6654736897,"y":5.9568213418000004},{"x":6.6761416897,"y":5.953918341800001},{"x":6.6868096897,"y":5.9507053418},{"x":6.6974776896999995,"y":5.9471863418},{"x":6.708145689699999,"y":5.9433633418000005},{"x":6.718813689699999,"y":5.9392423418},{"x":6.7294816897,"y":5.934824341800001},{"x":6.7401496897,"y":5.9301133418},{"x":6.7401496897,"y":5.9301133418}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.420109689699999,"y":6.003983341800001},{"x":6.7401496897,"y":6.003983341800001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.3801296896999995,"y":6.1603943418},{"x":6.3801296896999995,"y":6.0902143418}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.4152196897,"y":6.125304341800001},{"x":6.3450396897,"y":6.125304341800001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C7"} schX={6.8601296897} schY={6.3043683418} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"270uF"} schX={6.8801296896999995} schY={5.7043683418} anchor={"center_left"} fontSize={0.18} />
      <schematiccircle center={{"x":7.1301296896999995,"y":5.7043683418}} radius={0} isFilled={false} />
      <schematiccircle center={{"x":6.0301296897,"y":6.3043683418}} radius={0} isFilled={false} />
      <schematicpath points={[{"x":7.3112552107,"y":6.3043683418},{"x":7.3112552107,"y":6.005025341800001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.3112552107,"y":5.9656853418},{"x":7.3112552107,"y":5.7043683418}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.1512352106999995,"y":5.9301133418},{"x":7.1512352106999995,"y":5.9301133418},{"x":7.161903210699999,"y":5.934824341800001},{"x":7.1725712107,"y":5.9392423418},{"x":7.1832392107,"y":5.9433633418000005},{"x":7.1939072107,"y":5.9471863418},{"x":7.2045752107,"y":5.9507053418},{"x":7.2152432107,"y":5.953918341800001},{"x":7.2259112107,"y":5.9568213418000004},{"x":7.2365792106999995,"y":5.9594113418},{"x":7.247247210699999,"y":5.9616843418},{"x":7.257915210699999,"y":5.9636363418},{"x":7.2685832107,"y":5.9652653418},{"x":7.2792512107,"y":5.9665673418},{"x":7.2899192107,"y":5.9675383418},{"x":7.3005872107,"y":5.9681753418},{"x":7.3112552107,"y":5.9684753418000005},{"x":7.3219232107,"y":5.9681753418},{"x":7.3325912106999995,"y":5.9675383418},{"x":7.343259210699999,"y":5.9665673418},{"x":7.353927210699999,"y":5.9652653418},{"x":7.3645952107,"y":5.9636363418},{"x":7.3752632107,"y":5.9616843418},{"x":7.3859312107,"y":5.9594113418},{"x":7.3965992107,"y":5.9568213418000004},{"x":7.4072672107,"y":5.953918341800001},{"x":7.4179352107,"y":5.9507053418},{"x":7.4286032106999995,"y":5.9471863418},{"x":7.439271210699999,"y":5.9433633418000005},{"x":7.449939210699999,"y":5.9392423418},{"x":7.4606072107,"y":5.934824341800001},{"x":7.4712752107,"y":5.9301133418},{"x":7.4712752107,"y":5.9301133418}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.1512352106999995,"y":6.003983341800001},{"x":7.4712752107,"y":6.003983341800001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.1112552106999996,"y":6.1603943418},{"x":7.1112552106999996,"y":6.0902143418}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.1463452107,"y":6.125304341800001},{"x":7.0761652107,"y":6.125304341800001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C8"} schX={7.5912552107} schY={6.3043683418} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"270uF"} schX={7.6112552106999996} schY={5.7043683418} anchor={"center_left"} fontSize={0.18} />
      <schematiccircle center={{"x":7.8612552106999996,"y":5.7043683418}} radius={0} isFilled={false} />
      <schematiccircle center={{"x":6.7612552107,"y":6.3043683418}} radius={0} isFilled={false} />
      <schematicpath points={[{"x":-10.0529759148,"y":6.0059576193},{"x":-10.0529759148,"y":6.2459576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-10.0529759148,"y":6.3659576193},{"x":-10.0529759148,"y":6.6059576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.8929559148,"y":6.2459576193},{"x":-10.212995914799999,"y":6.2459576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.8929559148,"y":6.3659576193},{"x":-10.212995914799999,"y":6.3659576193}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C3"} schX={-9.937975914799999} schY={6.5059576193} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={-9.937975914799999} schY={6.1059576193} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.0423807318,"y":5.640394858700001},{"x":8.0423807318,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.0423807318,"y":6.0003948587},{"x":8.0423807318,"y":6.2403948587}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.2024007318,"y":5.880394858700001},{"x":7.8823607317999995,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.2024007318,"y":6.0003948587},{"x":7.8823607317999995,"y":6.0003948587}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C9"} schX={8.1573807318} schY={6.140394858700001} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10uF"} schX={8.1573807318} schY={5.7403948587} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.7735062529,"y":5.640394858700001},{"x":8.7735062529,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.7735062529,"y":6.0003948587},{"x":8.7735062529,"y":6.2403948587}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.9335262529,"y":5.880394858700001},{"x":8.613486252900001,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.9335262529,"y":6.0003948587},{"x":8.613486252900001,"y":6.0003948587}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C10"} schX={8.888506252900001} schY={6.140394858700001} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10uF"} schX={8.888506252900001} schY={5.7403948587} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":9.504631774,"y":5.640394858700001},{"x":9.504631774,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.504631774,"y":6.0003948587},{"x":9.504631774,"y":6.2403948587}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.664651774,"y":5.880394858700001},{"x":9.344611774,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.664651774,"y":6.0003948587},{"x":9.344611774,"y":6.0003948587}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C11"} schX={9.619631774} schY={6.140394858700001} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={9.619631774} schY={5.7403948587} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":10.4185386753,"y":5.640394858700001},{"x":10.4185386753,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":10.4185386753,"y":6.0003948587},{"x":10.4185386753,"y":6.2403948587}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":10.5785586753,"y":5.880394858700001},{"x":10.258518675300001,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":10.5785586753,"y":6.0003948587},{"x":10.258518675300001,"y":6.0003948587}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C12"} schX={10.5335386753} schY={6.140394858700001} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"1000pF"} schX={10.5335386753} schY={5.7403948587} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":10.078803844400001,"y":-1.8278138027},{"x":9.838803844400001,"y":-1.8278138027}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.7188038444,"y":-1.8278138027},{"x":9.4788038444,"y":-1.8278138027}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.838803844400001,"y":-1.6677938026999999},{"x":9.838803844400001,"y":-1.9878338027}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.7188038444,"y":-1.6677938026999999},{"x":9.7188038444,"y":-1.9878338027}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C23"} schX={9.7788038444} schY={-1.5878138027} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0.01uF"} schX={9.7788038444} schY={-2.0678138027} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.8536417323,"y":-4.9350972673},{"x":1.6136417323,"y":-4.9350972673}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4936417323,"y":-4.9350972673},{"x":1.2536417323,"y":-4.9350972673}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.6136417323,"y":-4.7750772672999995},{"x":1.6136417323,"y":-5.0951172673}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4936417323,"y":-4.7750772672999995},{"x":1.4936417323,"y":-5.0951172673}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C28"} schX={1.5536417323} schY={-4.6950972672999995} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"1000pF"} schX={1.5536417323} schY={-5.1750972673} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.2900648448,"y":5.5092693377},{"x":-3.2900648448,"y":5.2692693377}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.2900648448,"y":5.149269337700001},{"x":-3.2900648448,"y":4.9092693377000005}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.4500848447999997,"y":5.2692693377},{"x":-3.1300448448,"y":5.2692693377}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.4500848447999997,"y":5.149269337700001},{"x":-3.1300448448,"y":5.149269337700001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C15"} schX={-3.1950648447999996} schY={5.4092693377000005} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"4.7uF"} schX={-3.1950648447999996} schY={5.0092693377} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.9562876332,"y":-6.3317855489},{"x":-8.9562876332,"y":-6.2317655489}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.9562876332,"y":-5.8318055489},{"x":-8.9562876332,"y":-5.7317855489000005}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.036267633200001,"y":-6.2317655489},{"x":-9.036267633200001,"y":-5.8318055489},{"x":-8.8763076332,"y":-5.8318055489},{"x":-8.8763076332,"y":-6.2317655489},{"x":-9.036267633200001,"y":-6.2317655489}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R24"} schX={-8.7962876332} schY={-5.8717855489} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"9.76k"} schX={-8.7962876332} schY={-6.1917855489} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.9562876332,"y":-5.052315887},{"x":-8.9562876332,"y":-4.952295887}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.9562876332,"y":-4.552335887},{"x":-8.9562876332,"y":-4.452315887}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.036267633200001,"y":-4.952295887},{"x":-9.036267633200001,"y":-4.552335887},{"x":-8.8763076332,"y":-4.552335887},{"x":-8.8763076332,"y":-4.952295887},{"x":-9.036267633200001,"y":-4.952295887}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R23"} schX={-8.7962876332} schY={-4.592315887} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"30.0k"} schX={-8.7962876332} schY={-4.912315887} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.3867531264,"y":5.1834414081},{"x":-4.3867531264,"y":5.2834614081}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.3867531264,"y":5.6834214081},{"x":-4.3867531264,"y":5.7834414081}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.4667331264,"y":5.2834614081},{"x":-4.4667331264,"y":5.6834214081},{"x":-4.3067731264,"y":5.6834214081},{"x":-4.3067731264,"y":5.2834614081},{"x":-4.4667331264,"y":5.2834614081}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R3"} schX={-4.2267531264} schY={5.6434414081} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0"} schX={-4.2267531264} schY={5.3234414081} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.0423807318,"y":6.0059576193},{"x":-8.0423807318,"y":6.2459576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.0423807318,"y":6.3659576193},{"x":-8.0423807318,"y":6.6059576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.8823607317999995,"y":6.2459576193},{"x":-8.2024007318,"y":6.2459576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.8823607317999995,"y":6.3659576193},{"x":-8.2024007318,"y":6.3659576193}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C5"} schX={-7.9273807318} schY={6.5059576193} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"1uF"} schX={-7.9273807318} schY={6.1059576193} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.9456924502,"y":6.0059576193},{"x":-6.9456924502,"y":6.2459576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.9456924502,"y":6.3659576193},{"x":-6.9456924502,"y":6.6059576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.7856724502,"y":6.2459576193},{"x":-7.1057124502,"y":6.2459576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.7856724502,"y":6.3659576193},{"x":-7.1057124502,"y":6.3659576193}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C6"} schX={-6.8306924502} schY={6.5059576193} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"4.7uF"} schX={-6.8306924502} schY={6.1059576193} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.9562876332,"y":6.0059576193},{"x":-8.9562876332,"y":6.2459576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.9562876332,"y":6.3659576193},{"x":-8.9562876332,"y":6.6059576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.796267633200001,"y":6.2459576193},{"x":-9.1163076332,"y":6.2459576193}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.796267633200001,"y":6.3659576193},{"x":-9.1163076332,"y":6.3659576193}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C4"} schX={-8.8412876332} schY={6.5059576193} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"1uF"} schX={-8.8412876332} schY={6.1059576193} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.3655627605,"y":4.3609251969},{"x":-0.3655627605,"y":4.6009251969000005}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.3655627605,"y":4.7209251969},{"x":-0.3655627605,"y":4.9609251969}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.20554276049999998,"y":4.6009251969000005},{"x":-0.5255827605,"y":4.6009251969000005}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.20554276049999998,"y":4.7209251969},{"x":-0.5255827605,"y":4.7209251969}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C16"} schX={-0.2505627605} schY={4.8609251969} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.33uF"} schX={-0.2505627604999999} schY={4.4609251969} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.256287633200001,"y":2.010595183},{"x":-9.1562676332,"y":2.010595183}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.7563076332,"y":2.010595183},{"x":-8.6562876332,"y":2.010595183}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.1562676332,"y":2.090575183},{"x":-8.7563076332,"y":2.090575183},{"x":-8.7563076332,"y":1.930615183},{"x":-9.1562676332,"y":1.930615183},{"x":-9.1562676332,"y":2.090575183}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R9"} schX={-8.9562876332} schY={2.170595183} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"100k"} schX={-8.9562876332} schY={1.850595183} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.9566882816000001,"y":6.0317855489},{"x":-1.2166882816000002,"y":5.9017855489}]} isFilled={false} />
      <schematicpath points={[{"x":-1.2166882816000002,"y":6.1717855489},{"x":-0.9566882816000001,"y":6.0317855489}]} isFilled={false} />
      <schematicpath points={[{"x":-1.2166882816000002,"y":5.9017855489},{"x":-1.2166882816000002,"y":6.1717855489}]} isFilled={false} />
      <schematicpath points={[{"x":-0.9566882816000001,"y":6.1717855489},{"x":-0.9566882816000001,"y":5.9017855489}]} isFilled={false} />
      <schematicpath points={[{"x":-1.2166882816000002,"y":6.0317855489},{"x":-1.6166882816,"y":6.0317855489}]} isFilled={false} />
      <schematicpath points={[{"x":-0.5766882816000001,"y":6.0317855489},{"x":-0.9466882816000001,"y":6.0317855489}]} isFilled={false} />
      <schematictext text={"D2"} schX={-1.1066882816} schY={6.261785548900001} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"100V"} schX={-1.0966882816} schY={5.7217855489} anchor={"top_center"} fontSize={0.18} />
      <schematicrect schX={-6.397348309402503} schY={1.6450324224177866} width={2.193376563223715} height={4.38675312644743} />
      <schematicline x1={-7.4940365910143605} y1={3.4728462251042167} x2={-7.859599351551646} y2={3.4728462251042167} />
      <schematictext text={"BIAS"} schX={-7.4940365910143605} schY={3.4728462251042167} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1"} schX={-7.676817971283003} schY={3.4728462251042167} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-5.300660027790645} y1={3.4728462251042167} x2={-4.93509726725336} y2={3.4728462251042167} />
      <schematictext text={"VCC"} schX={-5.300660027790645} schY={3.4728462251042167} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"2"} schX={-5.117878647522002} schY={3.4728462251042167} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-5.300660027790645} y1={2.924502084298288} x2={-4.93509726725336} y2={2.924502084298288} />
      <schematictext text={"GATE"} schX={-5.300660027790645} schY={2.924502084298288} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"3"} schX={-5.117878647522002} schY={2.924502084298288} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-5.300660027790645} y1={1.2794696618805013} x2={-4.93509726725336} y2={1.2794696618805013} />
      <schematictext text={"PGND"} schX={-5.300660027790645} schY={1.2794696618805013} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"4"} schX={-5.117878647522002} schY={1.2794696618805013} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-5.300660027790645} y1={2.0105951829550737} x2={-4.93509726725336} y2={2.0105951829550737} />
      <schematictext text={"CS"} schX={-5.300660027790645} schY={2.0105951829550737} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"5"} schX={-5.117878647522002} schY={2.0105951829550737} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-7.4940365910143605} y1={-0.18278138026864177} x2={-7.859599351551646} y2={-0.18278138026864177} />
      <schematictext text={"COMP"} schX={-7.4940365910143605} schY={-0.18278138026864177} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"6"} schX={-7.676817971283003} schY={-0.18278138026864177} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-5.300660027790645} y1={-0.18278138026864177} x2={-4.93509726725336} y2={-0.18278138026864177} />
      <schematictext text={"AGND"} schX={-5.300660027790645} schY={-0.18278138026864177} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"7"} schX={-5.117878647522002} schY={-0.18278138026864177} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-5.300660027790645} y1={0.5483441408059289} x2={-4.93509726725336} y2={0.5483441408059289} />
      <schematictext text={"FB"} schX={-5.300660027790645} schY={0.5483441408059289} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"8"} schX={-5.117878647522002} schY={0.5483441408059289} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-7.4940365910143605} y1={0.5483441408059289} x2={-7.859599351551646} y2={0.5483441408059289} />
      <schematictext text={"SS"} schX={-7.4940365910143605} schY={0.5483441408059289} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"9"} schX={-7.676817971283003} schY={0.5483441408059289} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-7.4940365910143605} y1={1.2794696618805013} x2={-7.859599351551646} y2={1.2794696618805013} />
      <schematictext text={"RT"} schX={-7.4940365910143605} schY={1.2794696618805013} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10"} schX={-7.676817971283003} schY={1.2794696618805013} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-7.4940365910143605} y1={2.0105951829550737} x2={-7.859599351551646} y2={2.0105951829550737} />
      <schematictext text={"PGOOD"} schX={-7.4940365910143605} schY={2.0105951829550737} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"11"} schX={-7.676817971283003} schY={2.0105951829550737} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-7.4940365910143605} y1={2.7417207040296443} x2={-7.859599351551646} y2={2.7417207040296443} />
      <schematictext text={"UVLO/SYNC"} schX={-7.4940365910143605} schY={2.7417207040296443} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"12"} schX={-7.676817971283003} schY={2.7417207040296443} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-5.300660027790645} y1={0} x2={-4.93509726725336} y2={0} />
      <schematictext text={"EP"} schX={-5.300660027790645} schY={0} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"13"} schX={-5.117878647522002} schY={0} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.0966882816,"y":1.1622510420999999},{"x":1.0966882816,"y":1.2622710420999999}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.0966882816,"y":1.6622310421},{"x":1.0966882816,"y":1.7622510421}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.0167082816000002,"y":1.2622710420999999},{"x":1.0167082816000002,"y":1.6622310421},{"x":1.1766682816,"y":1.6622310421},{"x":1.1766682816,"y":1.2622710420999999},{"x":1.0167082816000002,"y":1.2622710420999999}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R12"} schX={1.2566882816} schY={1.6222510420999998} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0.02"} schX={1.2566882816} schY={1.3022510421} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":1.6450324224,"y":3.7115215377},{"x":1.6450324224,"y":3.9115215377}]} isFilled={false} />
      <schematicpath points={[{"x":1.5450324223999998,"y":4.0115215377},{"x":1.5455454900608103,"y":4.0014047055012565},{"x":1.5470794282747504,"y":3.9913916856911342},{"x":1.549618496759995,"y":3.9815852254026645},{"x":1.5531366412379768,"y":3.9720859521886682},{"x":1.5575977607855418,"y":3.962991341446892},{"x":1.5629560782792722,"y":3.954394716190521},{"x":1.5691566101307208,"y":3.946384289427778},{"x":1.5761357304924313,"y":3.939042258977088},{"x":1.5838218241452335,"y":3.93244396400623},{"x":1.5921360213673037,"y":3.926657111950525},{"x":1.6009930072442364,"y":3.921741083742926},{"x":1.6103018971155179,"y":3.917746324485292},{"x":1.619967169174128,"y":3.91471382581338},{"x":1.6298896446495423,"y":3.912674705267189},{"x":1.6399675055161287,"y":3.911649886982895},{"x":1.6500973392838711,"y":3.911649886982895},{"x":1.6601752001504575,"y":3.912674705267189},{"x":1.6700976756258719,"y":3.91471382581338},{"x":1.679762947684482,"y":3.917746324485292},{"x":1.6890718375557634,"y":3.921741083742926},{"x":1.6979288234326961,"y":3.926657111950525},{"x":1.706243020654766,"y":3.93244396400623},{"x":1.7139291143075686,"y":3.939042258977088},{"x":1.720908234669279,"y":3.946384289427778},{"x":1.7271087665207276,"y":3.954394716190521},{"x":1.732467084014458,"y":3.962991341446892},{"x":1.736928203562023,"y":3.9720859521886682},{"x":1.7404463480400048,"y":3.9815852254026645},{"x":1.7429854165252494,"y":3.9913916856911342},{"x":1.7445193547391895,"y":4.0014047055012565},{"x":1.7450324224,"y":4.0115215377}]} isFilled={false} />
      <schematictext text={"TP5"} schX={1.6450324224} schY={4.0365215377000006} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":11.5152269569,"y":6.8188050022999995},{"x":11.5152269569,"y":7.0188050023}]} isFilled={false} />
      <schematicpath points={[{"x":11.4152269569,"y":7.118805002299999},{"x":11.41574002456081,"y":7.1086881701012565},{"x":11.41727396277475,"y":7.098675150291133},{"x":11.419813031259995,"y":7.088868690002664},{"x":11.423331175737976,"y":7.079369416788668},{"x":11.427792295285542,"y":7.070274806046892},{"x":11.433150612779272,"y":7.061678180790521},{"x":11.43935114463072,"y":7.053667754027778},{"x":11.446330264992431,"y":7.0463257235770875},{"x":11.454016358645234,"y":7.03972742860623},{"x":11.462330555867304,"y":7.033940576550525},{"x":11.471187541744236,"y":7.0290245483429254},{"x":11.480496431615517,"y":7.025029789085291},{"x":11.490161703674127,"y":7.021997290413379},{"x":11.500084179149543,"y":7.019958169867189},{"x":11.510162040016128,"y":7.018933351582894},{"x":11.52029187378387,"y":7.018933351582894},{"x":11.530369734650456,"y":7.019958169867189},{"x":11.540292210125871,"y":7.021997290413379},{"x":11.549957482184482,"y":7.025029789085291},{"x":11.559266372055763,"y":7.0290245483429254},{"x":11.568123357932695,"y":7.033940576550525},{"x":11.576437555154765,"y":7.03972742860623},{"x":11.584123648807568,"y":7.0463257235770875},{"x":11.591102769169279,"y":7.053667754027778},{"x":11.597303301020727,"y":7.061678180790521},{"x":11.602661618514457,"y":7.070274806046892},{"x":11.607122738062023,"y":7.079369416788668},{"x":11.610640882540004,"y":7.088868690002664},{"x":11.613179951025248,"y":7.098675150291133},{"x":11.614713889239189,"y":7.1086881701012565},{"x":11.615226956899999,"y":7.118805002299999}]} isFilled={false} />
      <schematictext text={"TP2"} schX={11.5152269569} schY={7.1438050023} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":11.5152269569,"y":4.879203334900001},{"x":11.5152269569,"y":4.6792033349}]} isFilled={false} />
      <schematicpath points={[{"x":11.615226956899999,"y":4.579203334900001},{"x":11.614713889239189,"y":4.589320167098744},{"x":11.613179951025248,"y":4.599333186908867},{"x":11.610640882540004,"y":4.6091396471973365},{"x":11.607122738062023,"y":4.618638920411332},{"x":11.602661618514457,"y":4.627733531153108},{"x":11.597303301020727,"y":4.636330156409479},{"x":11.591102769169279,"y":4.644340583172222},{"x":11.584123648807568,"y":4.651682613622913},{"x":11.576437555154765,"y":4.65828090859377},{"x":11.568123357932695,"y":4.664067760649475},{"x":11.559266372055763,"y":4.668983788857075},{"x":11.549957482184482,"y":4.672978548114709},{"x":11.540292210125871,"y":4.676011046786621},{"x":11.530369734650456,"y":4.678050167332811},{"x":11.52029187378387,"y":4.679074985617106},{"x":11.510162040016128,"y":4.679074985617106},{"x":11.500084179149543,"y":4.678050167332811},{"x":11.490161703674127,"y":4.676011046786621},{"x":11.480496431615517,"y":4.672978548114709},{"x":11.471187541744236,"y":4.668983788857075},{"x":11.462330555867304,"y":4.664067760649475},{"x":11.454016358645234,"y":4.65828090859377},{"x":11.446330264992431,"y":4.651682613622913},{"x":11.43935114463072,"y":4.644340583172222},{"x":11.433150612779272,"y":4.636330156409479},{"x":11.427792295285542,"y":4.627733531153108},{"x":11.423331175737976,"y":4.618638920411332},{"x":11.419813031259995,"y":4.6091396471973365},{"x":11.41727396277475,"y":4.599333186908867},{"x":11.41574002456081,"y":4.589320167098744},{"x":11.4152269569,"y":4.579203334900001}]} isFilled={false} />
      <schematictext text={"TP4"} schX={11.5152269569} schY={4.5542033349} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-12.4291338583,"y":7.3671491431},{"x":-12.4291338583,"y":7.5671491431}]} isFilled={false} />
      <schematicpath points={[{"x":-12.5291338583,"y":7.6671491431},{"x":-12.52862079063919,"y":7.657032310901257},{"x":-12.52708685242525,"y":7.647019291091134},{"x":-12.524547783940005,"y":7.637212830802664},{"x":-12.521029639462023,"y":7.6277135575886685},{"x":-12.516568519914458,"y":7.618618946846892},{"x":-12.511210202420727,"y":7.610022321590521},{"x":-12.50500967056928,"y":7.602011894827778},{"x":-12.498030550207568,"y":7.594669864377088},{"x":-12.490344456554766,"y":7.58807156940623},{"x":-12.482030259332696,"y":7.582284717350525},{"x":-12.473173273455764,"y":7.577368689142926},{"x":-12.463864383584482,"y":7.573373929885292},{"x":-12.454199111525872,"y":7.57034143121338},{"x":-12.444276636050457,"y":7.568302310667189},{"x":-12.434198775183871,"y":7.567277492382894},{"x":-12.42406894141613,"y":7.567277492382894},{"x":-12.413991080549543,"y":7.568302310667189},{"x":-12.404068605074128,"y":7.57034143121338},{"x":-12.394403333015518,"y":7.573373929885292},{"x":-12.385094443144236,"y":7.577368689142926},{"x":-12.376237457267305,"y":7.582284717350525},{"x":-12.367923260045234,"y":7.58807156940623},{"x":-12.360237166392432,"y":7.594669864377088},{"x":-12.35325804603072,"y":7.602011894827778},{"x":-12.347057514179273,"y":7.610022321590521},{"x":-12.341699196685543,"y":7.618618946846892},{"x":-12.337238077137977,"y":7.6277135575886685},{"x":-12.333719932659996,"y":7.637212830802664},{"x":-12.331180864174751,"y":7.647019291091134},{"x":-12.32964692596081,"y":7.657032310901257},{"x":-12.3291338583,"y":7.6671491431}]} isFilled={false} />
      <schematictext text={"TP1"} schX={-12.4291338583} schY={7.6921491431} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-12.4291338583,"y":5.2447660954},{"x":-12.4291338583,"y":5.0447660954}]} isFilled={false} />
      <schematicpath points={[{"x":-12.3291338583,"y":4.9447660954},{"x":-12.32964692596081,"y":4.954882927598743},{"x":-12.331180864174751,"y":4.964895947408866},{"x":-12.333719932659996,"y":4.974702407697336},{"x":-12.337238077137977,"y":4.984201680911331},{"x":-12.341699196685543,"y":4.993296291653108},{"x":-12.347057514179273,"y":5.001892916909479},{"x":-12.35325804603072,"y":5.009903343672222},{"x":-12.360237166392432,"y":5.017245374122912},{"x":-12.367923260045234,"y":5.02384366909377},{"x":-12.376237457267305,"y":5.029630521149475},{"x":-12.385094443144236,"y":5.034546549357074},{"x":-12.394403333015518,"y":5.038541308614708},{"x":-12.404068605074128,"y":5.04157380728662},{"x":-12.413991080549543,"y":5.043612927832811},{"x":-12.42406894141613,"y":5.044637746117106},{"x":-12.434198775183871,"y":5.044637746117106},{"x":-12.444276636050457,"y":5.043612927832811},{"x":-12.454199111525872,"y":5.04157380728662},{"x":-12.463864383584482,"y":5.038541308614708},{"x":-12.473173273455764,"y":5.034546549357074},{"x":-12.482030259332696,"y":5.029630521149475},{"x":-12.490344456554766,"y":5.02384366909377},{"x":-12.498030550207568,"y":5.017245374122912},{"x":-12.50500967056928,"y":5.009903343672222},{"x":-12.511210202420727,"y":5.001892916909479},{"x":-12.516568519914458,"y":4.993296291653108},{"x":-12.521029639462023,"y":4.984201680911331},{"x":-12.524547783940005,"y":4.974702407697336},{"x":-12.52708685242525,"y":4.964895947408866},{"x":-12.52862079063919,"y":4.954882927598743},{"x":-12.5291338583,"y":4.9447660954}]} isFilled={false} />
      <schematictext text={"TP3"} schX={-12.4291338583} schY={4.9197660954} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":11.8807897175,"y":2.8072834646000002},{"x":11.8807897175,"y":2.9073034646}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.8807897175,"y":3.3072634646},{"x":11.8807897175,"y":3.4072834646}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.8008097175,"y":2.9073034646},{"x":11.8008097175,"y":3.3072634646},{"x":11.960769717500002,"y":3.3072634646},{"x":11.960769717500002,"y":2.9073034646},{"x":11.8008097175,"y":2.9073034646}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R7"} schX={12.040789717500001} schY={3.2672834646} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10.0"} schX={12.040789717500001} schY={2.9472834646} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.9652964335000003,"y":-0.7311255211},{"x":-3.7652964335,"y":-0.7311255211}]} isFilled={false} />
      <schematicpath points={[{"x":-3.6652964335,"y":-0.6311255211},{"x":-3.6754132656987433,"y":-0.6316385887608105},{"x":-3.685426285508866,"y":-0.6331725269747505},{"x":-3.6952327457973357,"y":-0.635711595459995},{"x":-3.704732019011332,"y":-0.6392297399379769},{"x":-3.7138266297531084,"y":-0.6436908594855417},{"x":-3.7224232550094793,"y":-0.6490491769792723},{"x":-3.7304336817722223,"y":-0.6552497088307209},{"x":-3.7377757122229123,"y":-0.6622288291924313},{"x":-3.74437400719377,"y":-0.6699149228452337},{"x":-3.7501608592494753,"y":-0.6782291200673037},{"x":-3.7550768874570744,"y":-0.6870861059442365},{"x":-3.759071646714708,"y":-0.6963949958155179},{"x":-3.7621041453866204,"y":-0.7060602678741279},{"x":-3.764143265932811,"y":-0.7159827433495423},{"x":-3.7651680842171054,"y":-0.7260606042161286},{"x":-3.7651680842171054,"y":-0.7361904379838712},{"x":-3.764143265932811,"y":-0.7462682988504576},{"x":-3.7621041453866204,"y":-0.756190774325872},{"x":-3.759071646714708,"y":-0.765856046384482},{"x":-3.7550768874570744,"y":-0.7751649362557634},{"x":-3.7501608592494753,"y":-0.7840219221326962},{"x":-3.74437400719377,"y":-0.7923361193547662},{"x":-3.7377757122229123,"y":-0.8000222130075686},{"x":-3.7304336817722223,"y":-0.807001333369279},{"x":-3.7224232550094793,"y":-0.8132018652207276},{"x":-3.7138266297531084,"y":-0.8185601827144582},{"x":-3.704732019011332,"y":-0.823021302262023},{"x":-3.6952327457973357,"y":-0.8265394467400049},{"x":-3.685426285508866,"y":-0.8290785152252494},{"x":-3.6754132656987433,"y":-0.8306124534391894},{"x":-3.6652964335,"y":-0.8311255210999999}]} isFilled={false} />
      <schematictext text={"TP8"} schX={-3.6402964335} schY={-0.7311255211} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.2079434924,"y":-4.0211903659},{"x":8.4079434924,"y":-4.0211903659}]} isFilled={false} />
      <schematicpath points={[{"x":8.507943492399999,"y":-3.9211903659},{"x":8.497826660201255,"y":-3.9217034335608103},{"x":8.487813640391133,"y":-3.9232373717747504},{"x":8.478007180102663,"y":-3.925776440259995},{"x":8.468507906888668,"y":-3.9292945847379768},{"x":8.459413296146892,"y":-3.9337557042855416},{"x":8.45081667089052,"y":-3.939114021779272},{"x":8.442806244127777,"y":-3.9453145536307206},{"x":8.435464213677088,"y":-3.9522936739924313},{"x":8.42886591870623,"y":-3.9599797676452337},{"x":8.423079066650525,"y":-3.9682939648673035},{"x":8.418163038442925,"y":-3.9771509507442366},{"x":8.414168279185292,"y":-3.986459840615518},{"x":8.411135780513378,"y":-3.996125112674128},{"x":8.409096659967188,"y":-4.006047588149542},{"x":8.408071841682894,"y":-4.016125449016129},{"x":8.408071841682894,"y":-4.026255282783871},{"x":8.409096659967188,"y":-4.036333143650458},{"x":8.411135780513378,"y":-4.046255619125872},{"x":8.414168279185292,"y":-4.055920891184482},{"x":8.418163038442925,"y":-4.065229781055764},{"x":8.423079066650525,"y":-4.074086766932696},{"x":8.42886591870623,"y":-4.0824009641547665},{"x":8.435464213677088,"y":-4.090087057807568},{"x":8.442806244127777,"y":-4.097066178169279},{"x":8.45081667089052,"y":-4.103266710020727},{"x":8.459413296146892,"y":-4.108625027514458},{"x":8.468507906888668,"y":-4.113086147062023},{"x":8.478007180102663,"y":-4.116604291540005},{"x":8.487813640391133,"y":-4.119143360025249},{"x":8.497826660201255,"y":-4.1206772982391895},{"x":8.507943492399999,"y":-4.1211903658999995}]} isFilled={false} />
      <schematictext text={"TP9"} schX={8.5329434924} schY={-4.0211903659} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":12.4850277906,"y":3.6556276054},{"x":12.6850277906,"y":3.6556276054}]} isFilled={false} />
      <schematicpath points={[{"x":12.7850277906,"y":3.7556276054},{"x":12.774910958401255,"y":3.7551145377391895},{"x":12.764897938591133,"y":3.7535805995252494},{"x":12.755091478302663,"y":3.7510415310400047},{"x":12.745592205088668,"y":3.747523386562023},{"x":12.736497594346892,"y":3.743062267014458},{"x":12.72790096909052,"y":3.7377039495207276},{"x":12.719890542327777,"y":3.7315034176692787},{"x":12.712548511877088,"y":3.7245242973075685},{"x":12.70595021690623,"y":3.716838203654766},{"x":12.700163364850525,"y":3.7085240064326963},{"x":12.695247336642925,"y":3.699667020555763},{"x":12.691252577385292,"y":3.6903581306844817},{"x":12.688220078713378,"y":3.680692858625872},{"x":12.686180958167188,"y":3.6707703831504577},{"x":12.685156139882894,"y":3.6606925222838713},{"x":12.685156139882894,"y":3.6505626885161284},{"x":12.686180958167188,"y":3.640484827649542},{"x":12.688220078713378,"y":3.630562352174128},{"x":12.691252577385292,"y":3.620897080115518},{"x":12.695247336642925,"y":3.6115881902442366},{"x":12.700163364850525,"y":3.6027312043673034},{"x":12.70595021690623,"y":3.5944170071452337},{"x":12.712548511877088,"y":3.5867309134924312},{"x":12.719890542327777,"y":3.5797517931307206},{"x":12.72790096909052,"y":3.573551261279272},{"x":12.736497594346892,"y":3.5681929437855415},{"x":12.745592205088668,"y":3.5637318242379767},{"x":12.755091478302663,"y":3.560213679759995},{"x":12.764897938591133,"y":3.5576746112747504},{"x":12.774910958401255,"y":3.5561406730608103},{"x":12.7850277906,"y":3.5556276054}]} isFilled={false} />
      <schematictext text={"TP6"} schX={12.8100277906} schY={3.6556276054} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":12.4850277906,"y":2.5589393238},{"x":12.6850277906,"y":2.5589393238}]} isFilled={false} />
      <schematicpath points={[{"x":12.7850277906,"y":2.6589393238000003},{"x":12.774910958401255,"y":2.65842625613919},{"x":12.764897938591133,"y":2.6568923179252497},{"x":12.755091478302663,"y":2.654353249440005},{"x":12.745592205088668,"y":2.6508351049620233},{"x":12.736497594346892,"y":2.6463739854144586},{"x":12.72790096909052,"y":2.641015667920728},{"x":12.719890542327777,"y":2.634815136069279},{"x":12.712548511877088,"y":2.627836015707569},{"x":12.70595021690623,"y":2.6201499220547664},{"x":12.700163364850525,"y":2.6118357248326967},{"x":12.695247336642925,"y":2.6029787389557635},{"x":12.691252577385292,"y":2.593669849084482},{"x":12.688220078713378,"y":2.584004577025872},{"x":12.686180958167188,"y":2.574082101550458},{"x":12.685156139882894,"y":2.5640042406838717},{"x":12.685156139882894,"y":2.5538744069161288},{"x":12.686180958167188,"y":2.5437965460495424},{"x":12.688220078713378,"y":2.5338740705741283},{"x":12.691252577385292,"y":2.5242087985155184},{"x":12.695247336642925,"y":2.514899908644237},{"x":12.700163364850525,"y":2.506042922767304},{"x":12.70595021690623,"y":2.497728725545234},{"x":12.712548511877088,"y":2.4900426318924316},{"x":12.719890542327777,"y":2.483063511530721},{"x":12.72790096909052,"y":2.4768629796792725},{"x":12.736497594346892,"y":2.471504662185542},{"x":12.745592205088668,"y":2.467043542637977},{"x":12.755091478302663,"y":2.4635253981599954},{"x":12.764897938591133,"y":2.4609863296747507},{"x":12.774910958401255,"y":2.4594523914608106},{"x":12.7850277906,"y":2.4589393238}]} isFilled={false} />
      <schematictext text={"TP7"} schX={12.8100277906} schY={2.5589393238} anchor={"center_left"} fontSize={0.18} />
      <schematicrect schX={2.1933765632237154} schY={0.3655627605372871} width={0.4} height={0.4} />
      <schematicline x1={1.9933765632237155} y1={0.3655627605372871} x2={1.6450324224177848} y2={0.3655627605372871} />
      <schematictext text={"1"} schX={1.9933765632237155} schY={0.3655627605372871} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1"} schX={1.81920449282075} schY={0.3655627605372871} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.8536417323,"y":-4.0211903659},{"x":1.6136417323,"y":-4.0211903659}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4936417323,"y":-4.0211903659},{"x":1.2536417323,"y":-4.0211903659}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.6136417323,"y":-3.8611703659},{"x":1.6136417323,"y":-4.1812103659}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4936417323,"y":-3.8611703659},{"x":1.4936417323,"y":-4.1812103659}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C27"} schX={1.5536417323} schY={-3.7811903658999997} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"1000pF"} schX={1.5536417323} schY={-4.2611903659} anchor={"top_center"} fontSize={0.18} />
      <schematicrect schX={4.569534506716071} schY={-2.558939323761} width={0.4} height={0.4} />
      <schematicline x1={4.569534506716071} y1={-2.758939323761} x2={4.569534506716071} y2={-2.924502084298286} />
      <schematictext text={"1"} schX={4.569534506716071} schY={-2.758939323761} anchor={"center"} fontSize={0.18} />
      <schematictext text={"1"} schX={4.569534506716071} schY={-2.841720704029643} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={4.569534506716071} y1={-2.3589393237609997} x2={4.569534506716071} y2={-2.1933765632237145} />
      <schematictext text={"2"} schX={4.569534506716071} schY={-2.3589393237609997} anchor={"center"} fontSize={0.18} />
      <schematictext text={"2"} schX={4.569534506716071} schY={-2.276157943492357} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":11.3324455767,"y":5.640394858700001},{"x":11.3324455767,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.3324455767,"y":6.0003948587},{"x":11.3324455767,"y":6.2403948587}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.492465576699999,"y":5.880394858700001},{"x":11.1724255767,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.492465576699999,"y":6.0003948587},{"x":11.1724255767,"y":6.0003948587}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C13"} schX={11.4474455767} schY={6.140394858700001} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={11.4474455767} schY={5.7403948587} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":12.246352478,"y":5.640394858700001},{"x":12.246352478,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.246352478,"y":6.0003948587},{"x":12.246352478,"y":6.2403948587}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.406372478,"y":5.880394858700001},{"x":12.086332478000001,"y":5.880394858700001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.406372478,"y":6.0003948587},{"x":12.086332478000001,"y":6.0003948587}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C14"} schX={12.361352478} schY={6.140394858700001} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.01uF"} schX={12.361352478} schY={5.7403948587} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":4.452315887,"y":7.8595993516},{"x":4.552335887,"y":7.8595993516}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.952295887,"y":7.8595993516},{"x":5.052315887,"y":7.8595993516}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.552335887,"y":7.9395793516},{"x":4.952295887,"y":7.9395793516},{"x":4.952295887,"y":7.7796193516},{"x":4.552335887,"y":7.7796193516},{"x":4.552335887,"y":7.9395793516}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R1"} schX={4.752315887} schY={8.0195993516} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"15.0"} schX={4.752315887} schY={7.6995993516} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-7.1284738305,"y":-2.7675486335999997},{"x":-7.1284738305,"y":-2.5275486336}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.1284738305,"y":-2.4075486336},{"x":-7.1284738305,"y":-2.1675486336}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.9684538305,"y":-2.5275486336},{"x":-7.2884938305,"y":-2.5275486336}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.9684538305,"y":-2.4075486336},{"x":-7.2884938305,"y":-2.4075486336}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C25"} schX={-7.0134738305} schY={-2.2675486335999997} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.01uF"} schX={-7.0134738305} schY={-2.6675486336} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.0423807318,"y":-0.1172186197},{"x":8.0423807318,"y":-0.0171986197}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.0423807318,"y":0.38276138029999995},{"x":8.0423807318,"y":0.48278138029999995}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.9624007318,"y":-0.0171986197},{"x":7.9624007318,"y":0.38276138029999995},{"x":8.1223607318,"y":0.38276138029999995},{"x":8.1223607318,"y":-0.0171986197},{"x":7.9624007318,"y":-0.0171986197}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R15"} schX={8.2023807318} schY={0.3427813803} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10.2k"} schX={8.2023807318} schY={0.022781380299999987} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.375757295000001,"y":4.2039717462},{"x":-10.115757295000002,"y":4.3339717462}]} isFilled={false} />
      <schematicpath points={[{"x":-10.115757295000002,"y":4.0639717462},{"x":-10.375757295000001,"y":4.2039717462}]} isFilled={false} />
      <schematicpath points={[{"x":-10.115757295000002,"y":4.3339717462},{"x":-10.115757295000002,"y":4.0639717462}]} isFilled={false} />
      <schematicpath points={[{"x":-10.375757295000001,"y":4.0639717462},{"x":-10.375757295000001,"y":4.3339717462}]} isFilled={false} />
      <schematicpath points={[{"x":-10.115757295000002,"y":4.2039717462},{"x":-9.715757295000001,"y":4.2039717462}]} isFilled={false} />
      <schematicpath points={[{"x":-10.755757295,"y":4.2039717462},{"x":-10.385757295000001,"y":4.2039717462}]} isFilled={false} />
      <schematictext text={"D5"} schX={-10.225757295000001} schY={3.9739717461999997} anchor={"top_center"} fontSize={0.18} />
      <schematictext text={"100V"} schX={-10.235757295} schY={4.513971746199999} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.5589393238,"y":4.6350972673},{"x":-2.5589393238,"y":4.7351172673}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.5589393238,"y":5.1350772673},{"x":-2.5589393238,"y":5.2350972673}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.6389193238,"y":4.7351172673},{"x":-2.6389193238,"y":5.1350772673},{"x":-2.4789593238000003,"y":5.1350772673},{"x":-2.4789593238000003,"y":4.7351172673},{"x":-2.6389193238,"y":4.7351172673}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R25"} schX={-2.3989393238} schY={5.0950972673} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10.0k"} schX={-2.3989393238} schY={4.7750972673} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-1.2794696619,"y":4.452315887},{"x":-1.2794696619,"y":4.552335887}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-1.2794696619,"y":4.952295887},{"x":-1.2794696619,"y":5.052315887}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-1.3594496619,"y":4.552335887},{"x":-1.3594496619,"y":4.952295887},{"x":-1.1994896619000002,"y":4.952295887},{"x":-1.1994896619000002,"y":4.552335887},{"x":-1.3594496619,"y":4.552335887}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R4"} schX={-1.1194696619000002} schY={4.912315887} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"30.1k"} schX={-1.1194696619000002} schY={4.592315887} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":11.8807897175,"y":-3.9556276053999997},{"x":11.8807897175,"y":-3.8556076054}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.8807897175,"y":-3.4556476054},{"x":11.8807897175,"y":-3.3556276054}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.8008097175,"y":-3.8556076054},{"x":11.8008097175,"y":-3.4556476054},{"x":11.960769717500002,"y":-3.4556476054},{"x":11.960769717500002,"y":-3.8556076054},{"x":11.8008097175,"y":-3.8556076054}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R22"} schX={12.040789717500001} schY={-3.4956276053999997} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"9.76k"} schX={12.040789717500001} schY={-3.8156276054} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-1.8933765632000001,"y":6.0317855489},{"x":-1.9933965632000001,"y":6.0317855489}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.3933565632000002,"y":6.0317855489},{"x":-2.4933765632,"y":6.0317855489}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-1.9933965632000001,"y":5.9518055489},{"x":-2.3933565632000002,"y":5.9518055489},{"x":-2.3933565632000002,"y":6.1117655489},{"x":-1.9933965632000001,"y":6.1117655489},{"x":-1.9933965632000001,"y":5.9518055489}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R2"} schX={-2.1933765632} schY={6.1917855489} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"100"} schX={-2.1933765632} schY={5.8717855489} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.752975914799999,"y":4.9350972673},{"x":-9.8529959148,"y":4.9350972673}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-10.2529559148,"y":4.9350972673},{"x":-10.3529759148,"y":4.9350972673}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.8529959148,"y":4.8551172673},{"x":-10.2529559148,"y":4.8551172673},{"x":-10.2529559148,"y":5.0150772673},{"x":-9.8529959148,"y":5.0150772673},{"x":-9.8529959148,"y":4.8551172673}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R26"} schX={-10.0529759148} schY={5.0950972673} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-10.0529759148} schY={4.7750972673} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.914502084298288,"y":-0.07556276053728533},{"x":-2.924502084298288,"y":-0.4055627605372853}]} isFilled={true} />
      <schematicpath points={[{"x":-3.144502084298288,"y":-0.40556276053728535},{"x":-2.7045020842982876,"y":-0.4055627605372853}]} isFilled={true} />
      <schematicpath points={[{"x":-3.0945020842982878,"y":-0.4855627605372853},{"x":-2.754502084298288,"y":-0.4855627605372853}]} isFilled={true} />
      <schematicpath points={[{"x":-2.984502084298288,"y":-0.5555627605372853},{"x":-2.864502084298288,"y":-0.5555627605372853}]} isFilled={true} />
      <schematictext text={""} schX={-2.944502084298288} schY={-0.6755627605372854} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.93509726725336,"y":5.026138933920026},{"x":-5.05509726725336,"y":4.93509726725336}]} isFilled={false} />
      <schematicpath points={[{"x":-4.93509726725336,"y":5.026138933920026},{"x":-4.81509726725336,"y":4.93509726725336}]} isFilled={false} />
      <schematicpath points={[{"x":-4.93509726725336,"y":5.026138933920026},{"x":-4.93509726725336,"y":4.824888933920026}]} isFilled={false} />
      <schematictext text={""} schX={-4.93509726725336} schY={5.054888933920027} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.2800648448355734,"y":3.9456276053728585},{"x":-3.290064844835573,"y":3.6156276053728584}]} isFilled={true} />
      <schematicpath points={[{"x":-3.5100648448355733,"y":3.6156276053728584},{"x":-3.070064844835573,"y":3.6156276053728584}]} isFilled={true} />
      <schematicpath points={[{"x":-3.460064844835573,"y":3.5356276053728584},{"x":-3.1200648448355732,"y":3.5356276053728584}]} isFilled={true} />
      <schematicpath points={[{"x":-3.350064844835573,"y":3.4656276053728585},{"x":-3.230064844835573,"y":3.4656276053728585}]} isFilled={true} />
      <schematictext text={""} schX={-3.310064844835573} schY={3.3456276053728584} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.4722510421491413,"y":5.22509726725336},{"x":1.4622510421491413,"y":4.89509726725336}]} isFilled={true} />
      <schematicpath points={[{"x":1.2422510421491413,"y":4.89509726725336},{"x":1.6822510421491412,"y":4.89509726725336}]} isFilled={true} />
      <schematicpath points={[{"x":1.2922510421491413,"y":4.81509726725336},{"x":1.6322510421491412,"y":4.81509726725336}]} isFilled={true} />
      <schematicpath points={[{"x":1.4022510421491412,"y":4.745097267253359},{"x":1.5222510421491413,"y":4.745097267253359}]} isFilled={true} />
      <schematictext text={""} schX={1.4422510421491412} schY={4.62509726725336} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.946287633163504,"y":-0.8066882816118559},{"x":-8.956287633163504,"y":-1.136688281611856}]} isFilled={true} />
      <schematicpath points={[{"x":-9.176287633163504,"y":-1.136688281611856},{"x":-8.736287633163503,"y":-1.136688281611856}]} isFilled={true} />
      <schematicpath points={[{"x":-9.126287633163503,"y":-1.216688281611856},{"x":-8.786287633163504,"y":-1.2166882816118558}]} isFilled={true} />
      <schematicpath points={[{"x":-9.016287633163504,"y":-1.2866882816118559},{"x":-8.896287633163503,"y":-1.2866882816118559}]} isFilled={true} />
      <schematictext text={""} schX={-8.976287633163503} schY={-1.406688281611856} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.1066882816118577,"y":0.4727813802686435},{"x":1.0966882816118577,"y":0.14278138026864354}]} isFilled={true} />
      <schematicpath points={[{"x":0.8766882816118577,"y":0.14278138026864354},{"x":1.3166882816118577,"y":0.14278138026864357}]} isFilled={true} />
      <schematicpath points={[{"x":0.9266882816118577,"y":0.06278138026864354},{"x":1.2666882816118576,"y":0.06278138026864356}]} isFilled={true} />
      <schematicpath points={[{"x":1.0366882816118577,"y":-0.007218619731356457},{"x":1.1566882816118578,"y":-0.007218619731356457}]} isFilled={true} />
      <schematictext text={""} schX={1.0766882816118577} schY={-0.12721861973135645} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.559534506716073,"y":-0.2583441408059271},{"x":-4.569534506716073,"y":-0.5883441408059271}]} isFilled={true} />
      <schematicpath points={[{"x":-4.789534506716072,"y":-0.5883441408059271},{"x":-4.349534506716073,"y":-0.5883441408059271}]} isFilled={true} />
      <schematicpath points={[{"x":-4.739534506716073,"y":-0.6683441408059271},{"x":-4.399534506716073,"y":-0.6683441408059271}]} isFilled={true} />
      <schematicpath points={[{"x":-4.629534506716072,"y":-0.738344140805927},{"x":-4.509534506716073,"y":-0.738344140805927}]} isFilled={true} />
      <schematictext text={""} schX={-4.589534506716072} schY={-0.8583441408059271} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.580724872626218,"y":3.7628462251042167},{"x":-8.590724872626218,"y":3.4328462251042167}]} isFilled={true} />
      <schematicpath points={[{"x":-8.810724872626219,"y":3.4328462251042167},{"x":-8.370724872626218,"y":3.4328462251042167}]} isFilled={true} />
      <schematicpath points={[{"x":-8.760724872626218,"y":3.3528462251042166},{"x":-8.420724872626218,"y":3.3528462251042166}]} isFilled={true} />
      <schematicpath points={[{"x":-8.650724872626219,"y":3.2828462251042168},{"x":-8.530724872626218,"y":3.2828462251042168}]} isFilled={true} />
      <schematictext text={""} schX={-8.610724872626218} schY={3.1628462251042166} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.505226956924504,"y":5.590660027790645},{"x":-11.515226956924504,"y":5.260660027790645}]} isFilled={true} />
      <schematicpath points={[{"x":-11.735226956924505,"y":5.260660027790645},{"x":-11.295226956924504,"y":5.260660027790645}]} isFilled={true} />
      <schematicpath points={[{"x":-11.685226956924504,"y":5.180660027790645},{"x":-11.345226956924504,"y":5.180660027790645}]} isFilled={true} />
      <schematicpath points={[{"x":-11.575226956924505,"y":5.110660027790645},{"x":-11.455226956924504,"y":5.110660027790645}]} isFilled={true} />
      <schematictext text={""} schX={-11.535226956924504} schY={4.990660027790645} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":3.8384089856415002,"y":4.66127422031805},{"x":3.9584089856415003,"y":4.752315886984716}]} isFilled={false} />
      <schematicpath points={[{"x":3.8384089856415002,"y":4.66127422031805},{"x":3.7184089856415,"y":4.752315886984716}]} isFilled={false} />
      <schematicpath points={[{"x":3.8384089856415002,"y":4.66127422031805},{"x":3.8384089856415002,"y":4.86252422031805}]} isFilled={false} />
      <schematictext text={""} schX={3.8384089856415002} schY={4.632524220318049} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":9.139069013432145,"y":7.036734116875096},{"x":9.019069013432146,"y":6.94569245020843}]} isFilled={false} />
      <schematicpath points={[{"x":9.139069013432145,"y":7.036734116875096},{"x":9.259069013432145,"y":6.94569245020843}]} isFilled={false} />
      <schematicpath points={[{"x":9.139069013432145,"y":7.036734116875096},{"x":9.139069013432145,"y":6.835484116875096}]} isFilled={false} />
      <schematictext text={""} schX={9.139069013432145} schY={7.065484116875097} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":11.880789717461788,"y":-4.295013412845453},{"x":12.000789717461787,"y":-4.203971746178786}]} isFilled={false} />
      <schematicpath points={[{"x":11.880789717461788,"y":-4.295013412845453},{"x":11.760789717461789,"y":-4.203971746178786}]} isFilled={false} />
      <schematicpath points={[{"x":11.880789717461788,"y":-4.295013412845453},{"x":11.880789717461788,"y":-4.093763412845453}]} isFilled={false} />
      <schematictext text={""} schX={11.880789717461788} schY={-4.323763412845453} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":7.311255210745717,"y":-4.295013412845453},{"x":7.431255210745717,"y":-4.203971746178786}]} isFilled={false} />
      <schematicpath points={[{"x":7.311255210745717,"y":-4.295013412845453},{"x":7.191255210745717,"y":-4.203971746178786}]} isFilled={false} />
      <schematicpath points={[{"x":7.311255210745717,"y":-4.295013412845453},{"x":7.311255210745717,"y":-4.093763412845453}]} isFilled={false} />
      <schematictext text={""} schX={7.311255210745717} schY={-4.323763412845453} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":3.4728462251042167,"y":0.27382304693531023},{"x":3.3528462251042166,"y":0.18278138026864355}]} isFilled={false} />
      <schematicpath points={[{"x":3.4728462251042167,"y":0.27382304693531023},{"x":3.592846225104217,"y":0.18278138026864355}]} isFilled={false} />
      <schematicpath points={[{"x":3.4728462251042167,"y":0.27382304693531023},{"x":3.4728462251042167,"y":0.0725730469353102}]} isFilled={false} />
      <schematictext text={""} schX={3.4728462251042167} schY={0.30257304693531023} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":11.880789717461788,"y":3.9294506523081685},{"x":11.760789717461789,"y":3.838408985641502}]} isFilled={false} />
      <schematicpath points={[{"x":11.880789717461788,"y":3.9294506523081685},{"x":12.000789717461787,"y":3.838408985641502}]} isFilled={false} />
      <schematicpath points={[{"x":11.880789717461788,"y":3.9294506523081685},{"x":11.880789717461788,"y":3.7282006523081686}]} isFilled={false} />
      <schematictext text={""} schX={11.880789717461788} schY={3.9582006523081685} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":8.956287633163502,"y":-0.27382304693530846},{"x":9.076287633163501,"y":-0.18278138026864177}]} isFilled={false} />
      <schematicpath points={[{"x":8.956287633163502,"y":-0.27382304693530846},{"x":8.836287633163503,"y":-0.18278138026864177}]} isFilled={false} />
      <schematicpath points={[{"x":8.956287633163502,"y":-0.27382304693530846},{"x":8.956287633163502,"y":-0.07257304693530843}]} isFilled={false} />
      <schematictext text={""} schX={8.956287633163502} schY={-0.30257304693530845} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":0.3755627605372853,"y":-5.193441408059287},{"x":0.3655627605372853,"y":-5.523441408059287}]} isFilled={true} />
      <schematicpath points={[{"x":0.1455627605372853,"y":-5.523441408059287},{"x":0.5855627605372853,"y":-5.523441408059287}]} isFilled={true} />
      <schematicpath points={[{"x":0.1955627605372853,"y":-5.603441408059287},{"x":0.5355627605372854,"y":-5.603441408059287}]} isFilled={true} />
      <schematicpath points={[{"x":0.3055627605372853,"y":-5.673441408059287},{"x":0.4255627605372853,"y":-5.673441408059287}]} isFilled={true} />
      <schematictext text={""} schX={0.34556276053728535} schY={-5.793441408059286} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":2.558939323760999,"y":-5.574483074725953},{"x":2.678939323760999,"y":-5.483441408059287}]} isFilled={false} />
      <schematicpath points={[{"x":2.558939323760999,"y":-5.574483074725953},{"x":2.438939323760999,"y":-5.483441408059287}]} isFilled={false} />
      <schematicpath points={[{"x":2.558939323760999,"y":-5.574483074725953},{"x":2.558939323760999,"y":-5.373233074725953}]} isFilled={false} />
      <schematictext text={""} schX={2.558939323760999} schY={-5.603233074725954} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.946287633163504,"y":-6.2901296896711445},{"x":-8.956287633163504,"y":-6.620129689671145}]} isFilled={true} />
      <schematicpath points={[{"x":-9.176287633163504,"y":-6.620129689671145},{"x":-8.736287633163503,"y":-6.620129689671145}]} isFilled={true} />
      <schematicpath points={[{"x":-9.126287633163503,"y":-6.700129689671145},{"x":-8.786287633163504,"y":-6.700129689671145}]} isFilled={true} />
      <schematicpath points={[{"x":-9.016287633163504,"y":-6.770129689671145},{"x":-8.896287633163503,"y":-6.770129689671145}]} isFilled={true} />
      <schematictext text={""} schX={-8.976287633163503} schY={-6.890129689671144} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.290064844835573,"y":6.305608595800526},{"x":-3.4100648448355733,"y":6.214566929133859}]} isFilled={false} />
      <schematicpath points={[{"x":-3.290064844835573,"y":6.305608595800526},{"x":-3.170064844835573,"y":6.214566929133859}]} isFilled={false} />
      <schematicpath points={[{"x":-3.290064844835573,"y":6.305608595800526},{"x":-3.290064844835573,"y":6.104358595800526}]} isFilled={false} />
      <schematictext text={""} schX={-3.290064844835573} schY={6.334358595800526} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-4.11293007951212},{"x":-9.076287633163503,"y":-4.203971746178786}]} isFilled={false} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-4.11293007951212},{"x":-8.836287633163504,"y":-4.203971746178786}]} isFilled={false} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-4.11293007951212},{"x":-8.956287633163504,"y":-4.31418007951212}]} isFilled={false} />
      <schematictext text={""} schX={-8.956287633163504} schY={-4.0841800795121195} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.021785548865216,"y":-3.3656276053728575},{"x":-6.031785548865216,"y":-3.6956276053728576}]} isFilled={true} />
      <schematicpath points={[{"x":-6.251785548865215,"y":-3.6956276053728576},{"x":-5.811785548865216,"y":-3.6956276053728576}]} isFilled={true} />
      <schematicpath points={[{"x":-6.201785548865216,"y":-3.7756276053728577},{"x":-5.861785548865216,"y":-3.7756276053728577}]} isFilled={true} />
      <schematicpath points={[{"x":-6.091785548865215,"y":-3.8456276053728575},{"x":-5.971785548865216,"y":-3.8456276053728575}]} isFilled={true} />
      <schematictext text={""} schX={-6.051785548865215} schY={-3.9656276053728576} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.687413154238076,"y":2.284418229890382},{"x":-9.807413154238075,"y":2.1933765632237154}]} isFilled={false} />
      <schematicpath points={[{"x":-9.687413154238076,"y":2.284418229890382},{"x":-9.567413154238077,"y":2.1933765632237154}]} isFilled={false} />
      <schematicpath points={[{"x":-9.687413154238076,"y":2.284418229890382},{"x":-9.687413154238076,"y":2.083168229890382}]} isFilled={false} />
      <schematictext text={""} schX={-9.687413154238076} schY={2.313168229890382} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":4.579534506716071,"y":-3.3656276053728575},{"x":4.569534506716071,"y":-3.6956276053728576}]} isFilled={true} />
      <schematicpath points={[{"x":4.349534506716071,"y":-3.6956276053728576},{"x":4.789534506716071,"y":-3.6956276053728576}]} isFilled={true} />
      <schematicpath points={[{"x":4.399534506716071,"y":-3.7756276053728577},{"x":4.739534506716071,"y":-3.7756276053728577}]} isFilled={true} />
      <schematicpath points={[{"x":4.509534506716071,"y":-3.8456276053728575},{"x":4.6295345067160705,"y":-3.8456276053728575}]} isFilled={true} />
      <schematictext text={""} schX={4.549534506716071} schY={-3.9656276053728576} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.203971746178786},{"x":-11.88078971746179,"y":-4.083971746178786}]} isFilled={false} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.203971746178786},{"x":-11.88078971746179,"y":-4.3239717461787865}]} isFilled={false} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.203971746178786},{"x":-11.990998050795122,"y":-4.203971746178786}]} isFilled={false} />
      <schematictext text={""} schX={-11.760998050795124} schY={-4.203971746178786} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.569534506716072},{"x":-11.88078971746179,"y":-4.449534506716072}]} isFilled={false} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.569534506716072},{"x":-11.88078971746179,"y":-4.689534506716072}]} isFilled={false} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.569534506716072},{"x":-11.990998050795122,"y":-4.569534506716072}]} isFilled={false} />
      <schematictext text={""} schX={-11.760998050795124} schY={-4.569534506716072} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.935097267253358},{"x":-11.88078971746179,"y":-4.815097267253358}]} isFilled={false} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.935097267253358},{"x":-11.88078971746179,"y":-5.055097267253358}]} isFilled={false} />
      <schematicpath points={[{"x":-11.789748050795122,"y":-4.935097267253358},{"x":-11.990998050795122,"y":-4.935097267253358}]} isFilled={false} />
      <schematictext text={""} schX={-11.760998050795124} schY={-4.935097267253358} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.230110680098813,"y":1.6450324224177866},{"x":-9.139069013432145,"y":1.5250324224177865}]} isFilled={false} />
      <schematicpath points={[{"x":-9.230110680098813,"y":1.6450324224177866},{"x":-9.139069013432145,"y":1.7650324224177867}]} isFilled={false} />
      <schematicpath points={[{"x":-9.230110680098813,"y":1.6450324224177866},{"x":-9.028860680098813,"y":1.6450324224177866}]} isFilled={false} />
      <schematictext text={""} schX={-9.258860680098811} schY={1.6450324224177866} anchor={"center_right"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.04732929983017,"y":-2.1933765632237145},{"x":-8.956287633163504,"y":-2.3133765632237147}]} isFilled={false} />
      <schematicpath points={[{"x":-9.04732929983017,"y":-2.1933765632237145},{"x":-8.956287633163504,"y":-2.0733765632237144}]} isFilled={false} />
      <schematicpath points={[{"x":-9.04732929983017,"y":-2.1933765632237145},{"x":-8.846079299830171,"y":-2.1933765632237145}]} isFilled={false} />
      <schematictext text={""} schX={-9.07607929983017} schY={-2.1933765632237145} anchor={"center_right"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.230110680098813,"y":0.5483441408059289},{"x":-9.139069013432145,"y":0.42834414080592886}]} isFilled={false} />
      <schematicpath points={[{"x":-9.230110680098813,"y":0.5483441408059289},{"x":-9.139069013432145,"y":0.6683441408059289}]} isFilled={false} />
      <schematicpath points={[{"x":-9.230110680098813,"y":0.5483441408059289},{"x":-9.028860680098813,"y":0.5483441408059289}]} isFilled={false} />
      <schematictext text={""} schX={-9.258860680098811} schY={0.5483441408059289} anchor={"center_right"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.784101435849932,"y":-5.026836980855334},{"x":-10.904101435849931,"y":-5.117878647522001}]} isFilled={false} />
      <schematicpath points={[{"x":-10.784101435849932,"y":-5.026836980855334},{"x":-10.664101435849933,"y":-5.117878647522001}]} isFilled={false} />
      <schematicpath points={[{"x":-10.784101435849932,"y":-5.026836980855334},{"x":-10.784101435849932,"y":-5.228086980855334}]} isFilled={false} />
      <schematictext text={""} schX={-10.784101435849932} schY={-4.998086980855334} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.774101435849932,"y":-5.741785548865216},{"x":-10.784101435849932,"y":-6.071785548865216}]} isFilled={true} />
      <schematicpath points={[{"x":-11.004101435849932,"y":-6.071785548865216},{"x":-10.564101435849931,"y":-6.071785548865216}]} isFilled={true} />
      <schematicpath points={[{"x":-10.954101435849932,"y":-6.151785548865216},{"x":-10.614101435849932,"y":-6.151785548865216}]} isFilled={true} />
      <schematicpath points={[{"x":-10.844101435849932,"y":-6.221785548865216},{"x":-10.724101435849931,"y":-6.221785548865216}]} isFilled={true} />
      <schematictext text={""} schX={-10.804101435849931} schY={-6.341785548865215} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-7.2202135440790505,"y":-5.483441408059287},{"x":-7.311255210745717,"y":-5.363441408059287}]} isFilled={false} />
      <schematicpath points={[{"x":-7.2202135440790505,"y":-5.483441408059287},{"x":-7.311255210745717,"y":-5.603441408059287}]} isFilled={false} />
      <schematicpath points={[{"x":-7.2202135440790505,"y":-5.483441408059287},{"x":-7.42146354407905,"y":-5.483441408059287}]} isFilled={false} />
      <schematictext text={""} schX={-7.19146354407905} schY={-5.483441408059287} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.478492840049406,"y":0.5483441408059289},{"x":-4.569534506716073,"y":0.6683441408059289}]} isFilled={false} />
      <schematicpath points={[{"x":-4.478492840049406,"y":0.5483441408059289},{"x":-4.569534506716073,"y":0.42834414080592886}]} isFilled={false} />
      <schematicpath points={[{"x":-4.478492840049406,"y":0.5483441408059289},{"x":-4.679742840049406,"y":0.5483441408059289}]} isFilled={false} />
      <schematictext text={""} schX={-4.449742840049406} schY={0.5483441408059289} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.60132005558129,"y":7.402296877412383},{"x":-10.72132005558129,"y":7.311255210745717}]} isFilled={false} />
      <schematicpath points={[{"x":-10.60132005558129,"y":7.402296877412383},{"x":-10.48132005558129,"y":7.311255210745717}]} isFilled={false} />
      <schematicpath points={[{"x":-10.60132005558129,"y":7.402296877412383},{"x":-10.60132005558129,"y":7.2010468774123835}]} isFilled={false} />
      <schematictext text={""} schX={-10.60132005558129} schY={7.431046877412384} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":0.3655627605372853,"y":-3.7473673189748338},{"x":0.24556276053728532,"y":-3.8384089856415002}]} isFilled={false} />
      <schematicpath points={[{"x":0.3655627605372853,"y":-3.7473673189748338},{"x":0.4855627605372853,"y":-3.8384089856415002}]} isFilled={false} />
      <schematicpath points={[{"x":0.3655627605372853,"y":-3.7473673189748338},{"x":0.3655627605372853,"y":-3.9486173189748337}]} isFilled={false} />
      <schematictext text={""} schX={0.3655627605372853} schY={-3.7186173189748337} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.477794793114097,"y":-2.376157943492357},{"x":-4.386753126447431,"y":-2.4961579434923573}]} isFilled={false} />
      <schematicpath points={[{"x":-4.477794793114097,"y":-2.376157943492357},{"x":-4.386753126447431,"y":-2.256157943492357}]} isFilled={false} />
      <schematicpath points={[{"x":-4.477794793114097,"y":-2.376157943492357},{"x":-4.276544793114097,"y":-2.376157943492357}]} isFilled={false} />
      <schematictext text={""} schX={-4.506544793114098} schY={-2.376157943492357} anchor={"center_right"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.462846225104215,"y":-3.3656276053728575},{"x":-3.472846225104215,"y":-3.6956276053728576}]} isFilled={true} />
      <schematicpath points={[{"x":-3.692846225104215,"y":-3.6956276053728576},{"x":-3.2528462251042147,"y":-3.6956276053728576}]} isFilled={true} />
      <schematicpath points={[{"x":-3.642846225104215,"y":-3.7756276053728577},{"x":-3.302846225104215,"y":-3.7756276053728577}]} isFilled={true} />
      <schematicpath points={[{"x":-3.532846225104215,"y":-3.8456276053728575},{"x":-3.412846225104215,"y":-3.8456276053728575}]} isFilled={true} />
      <schematictext text={""} schX={-3.492846225104215} schY={-3.9656276053728576} anchor={"top_center"} fontSize={0.18} />
      <schematictext text={"NT1"} schX={-3.8556276053728578} schY={0.1472186197313583} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"Net-Tie"} schX={-3.8556276053728578} schY={-0.5127813802686418} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"1"} schX={4.935097267253358} schY={6.76291106993979} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={6.031785548865216} schY={6.580129689671146} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={4.935097267253358} schY={6.397348309402503} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":5.117878647522002,"y":6.21456692913386},{"x":5.849004168596575,"y":6.21456692913386},{"x":5.849004168596575,"y":6.9456924502084325},{"x":5.117878647522002,"y":6.9456924502084325},{"x":5.117878647522002,"y":6.21456692913386}]} strokeWidth={0.05} strokeColor={"#1f2937"} fillColor={"#ffffff"} isFilled={true} />
      <schematicpath points={[{"x":5.337216303844372,"y":6.397348309402503},{"x":5.629666512274202,"y":6.580129689671146},{"x":5.337216303844372,"y":6.76291106993979}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematictext text={"40V"} schX={5.300660027790645} schY={5.849004168596574} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematicline x1={5.1178786475220015} y1={6.76291106993979} x2={4.752315886984714} y2={6.76291106993979} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={5.849004168596572} y1={6.580129689671146} x2={6.214566929133859} y2={6.580129689671146} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={5.1178786475220015} y1={6.397348309402503} x2={4.752315886984714} y2={6.397348309402503} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={5.666222788327929} y1={6.580129689671146} x2={5.300660027790645} y2={6.580129689671146} strokeWidth={0.05} color={"#1f2937"} isDashed={false} />
      <schematicline x1={5.629666512274202} y1={6.397348309402503} x2={5.629666512274202} y2={6.76291106993979} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={5.629666512274202} y1={6.397348309402503} x2={5.666222788327929} y2={6.397348309402503} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={5.666222788327929} y1={6.397348309402503} x2={5.666222788327929} y2={6.433904585456233} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={5.629666512274202} y1={6.76291106993979} x2={5.593110236220472} y2={6.76291106993979} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={5.593110236220472} y1={6.76291106993979} x2={5.593110236220472} y2={6.72635479388606} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicpath points={[{"x":5.300660027790645,"y":6.76291106993979},{"x":5.1178786475220015,"y":6.76291106993979}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":5.300660027790645,"y":6.397348309402503},{"x":5.1178786475220015,"y":6.397348309402503}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":5.300660027790645,"y":6.397348309402503},{"x":5.300660027790645,"y":6.76291106993979}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":5.666222788327929,"y":6.580129689671146},{"x":5.849004168596572,"y":6.580129689671146}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"D1"} schX={5.099600509495136} schY={6.94569245020843} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"U3"} schX={7.138672417786012} schY={-2.7772834645669287} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"LMV431BIMF/NOPB"} schX={7.138672417786012} schY={-3.437283464566929} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"1"} schX={6.580129689671143} schY={-1.2794696618804995} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={6.580129689671143} schY={-1.6450324224177848} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"4"} schX={4.752315886984714} schY={-1.2794696618804995} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={4.752315886984714} schY={-1.6450324224177848} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":6.305957619268181,"y":-1.3708603520148213},{"x":6.013507410838351,"y":-1.3708603520148213},{"x":6.159732515053268,"y":-1.5170854562297347}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":6.013507410838351,"y":-1.5353635942565997},{"x":6.013507410838351,"y":-1.5536417322834648},{"x":6.305957619268181,"y":-1.5536417322834648},{"x":6.305957619268181,"y":-1.5353635942565997}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":5.830726030569707,"y":-1.4988073182028714},{"x":5.7941697545159805,"y":-1.4988073182028714},{"x":5.7941697545159805,"y":-1.462251042149143}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":5.922116720704029,"y":-1.4988073182028714},{"x":5.885560444650302,"y":-1.4988073182028714},{"x":5.885560444650302,"y":-1.462251042149143}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":5.264103751736915,"y":-1.6267542843909215},{"x":5.24582561371005,"y":-1.6267542843909215},{"x":5.24582561371005,"y":-1.2977477999073646},{"x":5.264103751736915,"y":-1.2977477999073646}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":5.172713061602593,"y":-1.6267542843909215},{"x":5.136156785548867,"y":-1.5901980083371932},{"x":5.136156785548867,"y":-1.6267542843909215}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicline x1={6.397348309402503} y1={-1.2794696618804995} x2={6.762911069939786} y2={-1.2794696618804995} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={6.397348309402503} y1={-1.6450324224177848} x2={6.762911069939786} y2={-1.6450324224177848} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={4.935097267253358} y1={-1.2794696618804995} x2={4.569534506716071} y2={-1.2794696618804995} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={4.935097267253358} y1={-1.6450324224177848} x2={4.569534506716071} y2={-1.6450324224177848} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={5.264103751736915} y1={-1.3891384900416845} x2={5.1178786475220015} y2={-1.2794696618804995} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={5.885560444650302} y1={-1.4988073182028714} x2={5.9952292728114855} y2={-1.3891384900416845} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={5.7941697545159805} y1={-1.4988073182028714} x2={5.903838582677167} y2={-1.3891384900416845} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={5.24582561371005} y1={-1.5170854562297347} x2={5.1178786475220015} y2={-1.6450324224177848} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.935097267253358} y1={-1.2794696618804995} x2={4.935097267253358} y2={-1.8278138026864283} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={6.159732515053268} y1={-1.2794696618804995} x2={6.159732515053268} y2={-1.6450324224177848} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={6.397348309402503} y1={-1.2794696618804995} x2={6.397348309402503} y2={-1.8278138026864283} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={6.397348309402503} y1={-1.8278138026864283} x2={4.935097267253358} y2={-1.8278138026864283} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={6.159732515053268} y1={-1.2794696618804995} x2={6.397348309402503} y2={-1.2794696618804995} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={6.159732515053268} y1={-1.6450324224177848} x2={6.397348309402503} y2={-1.6450324224177848} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={6.397348309402503} y1={-1.096688281611856} x2={4.935097267253358} y2={-1.096688281611856} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicpath points={[{"x":4.935097267253358,"y":-1.2794696618804995},{"x":4.935097267253358,"y":-1.096688281611856}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":6.397348309402503,"y":-1.2794696618804995},{"x":6.397348309402503,"y":-1.096688281611856}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":4.935097267253358,"y":-1.6450324224177848},{"x":5.1178786475220015,"y":-1.6450324224177848}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":5.1178786475220015,"y":-1.2794696618804995},{"x":4.935097267253358,"y":-1.2794696618804995}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematictext text={"U2"} schX={4.916819129226493} schY={-1.0784101435849927} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"PS2811-1-M-A"} schX={4.916819129226493} schY={-2.028873320981935} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"D4"} schX={10.218538675312647} schY={1.2632445576655886} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"30V"} schX={10.218538675312647} schY={0.2355627605372863} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"1"} schX={13.343040759610933} schY={5.849004168596574} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={13.343040759610933} schY={6.031785548865216} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":13.525822139879576,"y":5.666222788327931},{"x":13.891384900416863,"y":5.666222788327931},{"x":13.891384900416863,"y":6.21456692913386},{"x":13.525822139879576,"y":6.21456692913386},{"x":13.525822139879576,"y":5.666222788327931}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":13.70860352014822,"y":6.031785548865216}} radius={0.05483441408059288} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":13.653769106067626,"y":5.794169754515981},{"x":13.763437934228813,"y":5.794169754515981},{"x":13.763437934228813,"y":5.903838582677166},{"x":13.653769106067626,"y":5.903838582677166},{"x":13.653769106067626,"y":5.794169754515981}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematicpath points={[{"x":13.525822139879576,"y":6.031785548865216},{"x":13.653769106067625,"y":6.031785548865216}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":13.525822139879576,"y":5.849004168596574},{"x":13.653769106067625,"y":5.849004168596574}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={13.525822139879576} y1={5.849004168596574} x2={13.160259379342289} y2={5.849004168596574} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={13.525822139879576} y1={6.031785548865216} x2={13.160259379342289} y2={6.031785548865216} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"J2"} schX={13.507544001852711} schY={6.214566929133859} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"ED350/2"} schX={13.507544001852711} schY={5.483441408059289} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={-13.891384900416861} schY={6.397348309402503} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-13.891384900416861} schY={6.214566929133859} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-14.43972904122279,"y":6.031785548865217},{"x":-14.074166280685503,"y":6.031785548865217},{"x":-14.074166280685503,"y":6.580129689671145},{"x":-14.43972904122279,"y":6.580129689671145},{"x":-14.43972904122279,"y":6.031785548865217}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-14.256947660954147,"y":6.214566929133859}} radius={0.05483441408059288} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-14.31178207503474,"y":6.34251389532191},{"x":-14.202113246873553,"y":6.34251389532191},{"x":-14.202113246873553,"y":6.452182723483095},{"x":-14.31178207503474,"y":6.452182723483095},{"x":-14.31178207503474,"y":6.34251389532191}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematicpath points={[{"x":-14.074166280685505,"y":6.214566929133859},{"x":-14.202113246873555,"y":6.214566929133859}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-14.074166280685505,"y":6.397348309402503},{"x":-14.202113246873555,"y":6.397348309402503}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-14.074166280685505} y1={6.397348309402503} x2={-13.70860352014822} y2={6.397348309402503} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-14.074166280685505} y1={6.214566929133859} x2={-13.70860352014822} y2={6.214566929133859} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"J1"} schX={-14.43972904122279} schY={6.580129689671146} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"ED350/2"} schX={-14.43972904122279} schY={5.849004168596574} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"U1"} schX={-7.4940365910143605} schY={3.968408985641503} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"LM5155DSST"} schX={-7.4940365910143605} schY={-0.6783441408059296} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"5"} schX={-13.16025937934229} schY={-5.300660027790643} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"4"} schX={-13.16025937934229} schY={-5.117878647522001} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"1"} schX={-13.16025937934229} schY={-4.569534506716072} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-13.16025937934229} schY={-4.752315886984715} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={-13.16025937934229} schY={-4.935097267253358} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-13.70860352014822,"y":-5.483441408059287},{"x":-13.343040759610933,"y":-5.483441408059287},{"x":-13.343040759610933,"y":-4.386753126447429},{"x":-13.70860352014822,"y":-4.386753126447429},{"x":-13.70860352014822,"y":-5.483441408059287}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-4.752315886984715}} radius={0.05483441408059288} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-4.569534506716072}} radius={0.05483441408059288} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-4.935097267253358}} radius={0.05483441408059288} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-5.117878647522001}} radius={0.05483441408059288} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-5.300660027790643}} radius={0.05483441408059288} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-13.58065655396017,"y":-4.624368920796664},{"x":-13.470987725798983,"y":-4.624368920796664},{"x":-13.470987725798983,"y":-4.514700092635479},{"x":-13.58065655396017,"y":-4.514700092635479},{"x":-13.58065655396017,"y":-4.624368920796664}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicline x1={-13.343040759610933} y1={-5.300660027790643} x2={-12.977477999073647} y2={-5.300660027790643} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-13.343040759610933} y1={-5.117878647522001} x2={-12.977477999073647} y2={-5.117878647522001} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-13.343040759610933,"y":-4.752315886984715},{"x":-13.470987725798983,"y":-4.752315886984715}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-13.343040759610933,"y":-4.569534506716072},{"x":-13.470987725798983,"y":-4.569534506716072}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-13.343040759610933,"y":-4.935097267253358},{"x":-13.470987725798983,"y":-4.935097267253358}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-13.343040759610933} y1={-4.569534506716072} x2={-12.977477999073647} y2={-4.569534506716072} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-13.343040759610933} y1={-4.752315886984715} x2={-12.977477999073647} y2={-4.752315886984715} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-13.343040759610933} y1={-4.935097267253358} x2={-12.977477999073647} y2={-4.935097267253358} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-13.343040759610933,"y":-5.117878647522001},{"x":-13.470987725798983,"y":-5.117878647522001}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-13.343040759610933,"y":-5.300660027790643},{"x":-13.470987725798983,"y":-5.300660027790643}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematictext text={"J4"} schX={-13.70860352014822} schY={-4.386753126447429} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"J3"} schX={1.9933765632237161} schY={0.6955627605372872} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"1040"} schX={1.9933765632237161} schY={0.03556276053728702} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"NT2"} schX={4.369534506716072} schY={-2.228939323761} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"Net-Tie"} schX={4.369534506716072} schY={-2.888939323761} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"3"} schX={-3.472846225104215} schY={-2.7417207040296434} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"1"} schX={-3.8384089856415002} schY={-2.376157943492357} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-3.472846225104215} schY={-2.010595182955072} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematicpath points={[{"x":-3.6556276053728585,"y":-2.321323529411764},{"x":-3.5459587772116734,"y":-2.3030453913848996},{"x":-3.600793191292265,"y":-2.229932839277443}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicline x1={-3.472846225104215} y1={-2.558939323761} x2={-3.472846225104215} y2={-2.924502084298286} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-3.6556276053728585} y1={-2.376157943492357} x2={-4.021190365910144} y2={-2.376157943492357} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-3.472846225104215} y1={-2.1933765632237145} x2={-3.472846225104215} y2={-1.8278138026864283} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-3.6556276053728585} y1={-2.5406611857341357} x2={-3.6556276053728585} y2={-2.2116547012505787} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={-3.472846225104215} y1={-2.558939323761} x2={-3.6556276053728585} y2={-2.4309923575729497} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={-3.600793191292265} y1={-2.2847672533580354} x2={-3.472846225104215} y2={-2.1933765632237145} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematictext text={"Q2"} schX={-3.4180118110236233} schY={-2.357879805465493} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"FMMT718TA"} schX={-3.4180118110236233} schY={-2.5406611857341357} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"2"} schX={1.8278138026864283} schY={6.031785548865216} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"7"} schX={3.290064844835573} schY={6.76291106993979} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"5"} schX={1.8278138026864283} schY={6.214566929133859} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"6"} schX={3.290064844835573} schY={6.580129689671146} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"1"} schX={1.8278138026864283} schY={5.300660027790645} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={1.8278138026864283} schY={6.94569245020843} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"9"} schX={3.290064844835573} schY={5.66622278832793} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"10"} schX={3.290064844835573} schY={5.849004168596574} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":2.01059518295507,"y":5.1178786475220015},{"x":3.107283464566928,"y":5.1178786475220015},{"x":3.107283464566928,"y":7.128473830477073},{"x":2.01059518295507,"y":7.128473830477073},{"x":2.01059518295507,"y":5.1178786475220015}]} strokeWidth={0.05} strokeColor={"#1f2937"} fillColor={"#ffffb0"} isFilled={true} />
      <schematicline x1={2.010595182955072} y1={6.031785548865216} x2={1.6450324224177848} y2={6.031785548865216} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.1072834645669296} y1={6.76291106993979} x2={3.4728462251042167} y2={6.76291106993979} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={2.010595182955072} y1={6.214566929133859} x2={1.6450324224177848} y2={6.214566929133859} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.1072834645669296} y1={6.580129689671146} x2={3.4728462251042167} y2={6.580129689671146} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={2.010595182955072} y1={5.300660027790645} x2={1.6450324224177848} y2={5.300660027790645} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={2.010595182955072} y1={6.94569245020843} x2={1.6450324224177848} y2={6.94569245020843} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.1072834645669296} y1={5.66622278832793} x2={3.4728462251042167} y2={5.66622278832793} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.1072834645669296} y1={5.849004168596574} x2={3.4728462251042167} y2={5.849004168596574} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":5.849004168596574},{"x":2.3880868222799556,"y":5.849786028619816},{"x":2.3998115946441843,"y":5.852118230847774},{"x":2.411131646479177,"y":5.855960870653714},{"x":2.421853288559518,"y":5.861248199405182},{"x":2.431793070616621,"y":5.867889749441311},{"x":2.4407809202236557,"y":5.875771881999599},{"x":2.4486630527819457,"y":5.884759731606634},{"x":2.4553046028180745,"y":5.894699513663735},{"x":2.460591931569539,"y":5.905421155744079},{"x":2.464434571375481,"y":5.91674120757907},{"x":2.466766773603439,"y":5.928465979943301},{"x":2.4675486336266808,"y":5.940394858730896},{"x":2.466766773603439,"y":5.9523237375184905},{"x":2.464434571375481,"y":5.964048509882723},{"x":2.460591931569539,"y":5.975368561717712},{"x":2.4553046028180745,"y":5.986090203798057},{"x":2.4486630527819457,"y":5.996029985855159},{"x":2.4407809202236557,"y":6.005017835462194},{"x":2.431793070616621,"y":6.012899968020481},{"x":2.421853288559518,"y":6.019541518056609},{"x":2.411131646479177,"y":6.024828846808077},{"x":2.3998115946441843,"y":6.028671486614019},{"x":2.3880868222799556,"y":6.031003688841974},{"x":2.376157943492359,"y":6.031785548865216}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":5.66622278832793},{"x":2.3880868222799556,"y":5.667004648351172},{"x":2.3998115946441843,"y":5.66933685057913},{"x":2.411131646479177,"y":5.6731794903850705},{"x":2.421853288559518,"y":5.678466819136538},{"x":2.431793070616621,"y":5.685108369172667},{"x":2.4407809202236557,"y":5.692990501730955},{"x":2.4486630527819457,"y":5.70197835133799},{"x":2.4553046028180745,"y":5.711918133395091},{"x":2.460591931569539,"y":5.722639775475436},{"x":2.464434571375481,"y":5.733959827310427},{"x":2.466766773603439,"y":5.745684599674657},{"x":2.4675486336266808,"y":5.757613478462252},{"x":2.466766773603439,"y":5.769542357249847},{"x":2.464434571375481,"y":5.781267129614077},{"x":2.460591931569539,"y":5.792587181449068},{"x":2.4553046028180745,"y":5.803308823529413},{"x":2.4486630527819457,"y":5.813248605586514},{"x":2.4407809202236557,"y":5.822236455193549},{"x":2.431793070616621,"y":5.830118587751837},{"x":2.421853288559518,"y":5.836760137787966},{"x":2.411131646479177,"y":5.842047466539434},{"x":2.3998115946441843,"y":5.845890106345374},{"x":2.3880868222799556,"y":5.848222308573332},{"x":2.376157943492359,"y":5.849004168596574}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":5.483441408059289},{"x":2.3880868222799556,"y":5.4842232680825305},{"x":2.3998115946441843,"y":5.486555470310488},{"x":2.411131646479177,"y":5.490398110116429},{"x":2.421853288559518,"y":5.495685438867897},{"x":2.431793070616621,"y":5.502326988904025},{"x":2.4407809202236557,"y":5.510209121462314},{"x":2.4486630527819457,"y":5.5191969710693485},{"x":2.4553046028180745,"y":5.5291367531264495},{"x":2.460591931569539,"y":5.539858395206794},{"x":2.464434571375481,"y":5.551178447041785},{"x":2.466766773603439,"y":5.5629032194060155},{"x":2.4675486336266808,"y":5.57483209819361},{"x":2.466766773603439,"y":5.586760976981205},{"x":2.464434571375481,"y":5.598485749345436},{"x":2.460591931569539,"y":5.609805801180427},{"x":2.4553046028180745,"y":5.620527443260771},{"x":2.4486630527819457,"y":5.630467225317872},{"x":2.4407809202236557,"y":5.639455074924907},{"x":2.431793070616621,"y":5.647337207483195},{"x":2.421853288559518,"y":5.653978757519324},{"x":2.411131646479177,"y":5.659266086270792},{"x":2.3998115946441843,"y":5.663108726076732},{"x":2.3880868222799556,"y":5.66544092830469},{"x":2.376157943492359,"y":5.666222788327932}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":5.300660027790645},{"x":2.3880868222799556,"y":5.301441887813887},{"x":2.3998115946441843,"y":5.303774090041845},{"x":2.411131646479177,"y":5.307616729847785},{"x":2.421853288559518,"y":5.312904058599253},{"x":2.431793070616621,"y":5.319545608635382},{"x":2.4407809202236557,"y":5.32742774119367},{"x":2.4486630527819457,"y":5.336415590800705},{"x":2.4553046028180745,"y":5.346355372857806},{"x":2.460591931569539,"y":5.357077014938151},{"x":2.464434571375481,"y":5.3683970667731415},{"x":2.466766773603439,"y":5.380121839137372},{"x":2.4675486336266808,"y":5.392050717924967},{"x":2.466766773603439,"y":5.403979596712562},{"x":2.464434571375481,"y":5.415704369076792},{"x":2.460591931569539,"y":5.427024420911783},{"x":2.4553046028180745,"y":5.437746062992128},{"x":2.4486630527819457,"y":5.447685845049229},{"x":2.4407809202236557,"y":5.4566736946562635},{"x":2.431793070616621,"y":5.464555827214552},{"x":2.421853288559518,"y":5.471197377250681},{"x":2.411131646479177,"y":5.476484706002148},{"x":2.3998115946441843,"y":5.480327345808089},{"x":2.3880868222799556,"y":5.482659548036047},{"x":2.376157943492359,"y":5.483441408059289}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.394436081519224,"y":5.940394858730896},{"x":2.3942797095145743,"y":5.942780634488415},{"x":2.393813269068982,"y":5.945125588961261},{"x":2.3930447411077935,"y":5.9473895993282575},{"x":2.3919872753575007,"y":5.949533927744326},{"x":2.3906589653502763,"y":5.951521884155749},{"x":2.3890825388386183,"y":5.953319454077157},{"x":2.3872849689172106,"y":5.954895880588811},{"x":2.3852970125057915,"y":5.956224190596039},{"x":2.3831526840897226,"y":5.957281656346332},{"x":2.3808886737227226,"y":5.95805018430752},{"x":2.3785437192498797,"y":5.958516624753113},{"x":2.376157943492359,"y":5.958672996757759},{"x":2.3737721677348382,"y":5.958516624753113},{"x":2.3714272132619953,"y":5.95805018430752},{"x":2.3691632028949954,"y":5.957281656346332},{"x":2.3670188744789264,"y":5.956224190596039},{"x":2.3650309180675073,"y":5.954895880588811},{"x":2.3632333481460996,"y":5.953319454077157},{"x":2.3616569216344416,"y":5.951521884155749},{"x":2.3603286116272173,"y":5.949533927744326},{"x":2.3592711458769244,"y":5.9473895993282575},{"x":2.358502617915736,"y":5.945125588961261},{"x":2.3580361774701437,"y":5.942780634488415},{"x":2.357879805465494,"y":5.940394858730896},{"x":2.3580361774701437,"y":5.938009082973377},{"x":2.358502617915736,"y":5.93566412850053},{"x":2.3592711458769244,"y":5.933400118133532},{"x":2.3603286116272173,"y":5.931255789717463},{"x":2.3616569216344416,"y":5.929267833306044},{"x":2.3632333481460996,"y":5.927470263384636},{"x":2.3650309180675073,"y":5.925893836872978},{"x":2.3670188744789264,"y":5.924565526865752},{"x":2.3691632028949954,"y":5.923508061115459},{"x":2.3714272132619953,"y":5.922739533154271},{"x":2.3737721677348382,"y":5.92227309270868},{"x":2.376157943492359,"y":5.922116720704031},{"x":2.3785437192498797,"y":5.92227309270868},{"x":2.3808886737227226,"y":5.922739533154271},{"x":2.3831526840897226,"y":5.923508061115459},{"x":2.3852970125057915,"y":5.924565526865752},{"x":2.3872849689172106,"y":5.925893836872978},{"x":2.3890825388386183,"y":5.927470263384636},{"x":2.3906589653502763,"y":5.929267833306044},{"x":2.3919872753575007,"y":5.931255789717463},{"x":2.3930447411077935,"y":5.933400118133532},{"x":2.393813269068982,"y":5.93566412850053},{"x":2.3942797095145743,"y":5.938009082973377},{"x":2.394436081519224,"y":5.940394858730896}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.5223830477072724,"y":6.94569245020843},{"x":2.5223830477072724,"y":5.300660027790645}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.595495599814729,"y":6.94569245020843},{"x":2.595495599814729,"y":5.300660027790645}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":6.031785548865216},{"x":2.010595182955072,"y":6.031785548865216}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":5.300660027790645},{"x":2.010595182955072,"y":5.300660027790645}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":6.76291106993979},{"x":2.3880868222799556,"y":6.763692929963032},{"x":2.3998115946441843,"y":6.76602513219099},{"x":2.411131646479177,"y":6.769867771996932},{"x":2.421853288559518,"y":6.775155100748396},{"x":2.431793070616621,"y":6.781796650784525},{"x":2.4407809202236557,"y":6.789678783342815},{"x":2.4486630527819457,"y":6.79866663294985},{"x":2.4553046028180745,"y":6.8086064150069525},{"x":2.460591931569539,"y":6.819328057087294},{"x":2.464434571375481,"y":6.830648108922286},{"x":2.466766773603439,"y":6.842372881286515},{"x":2.4675486336266808,"y":6.854301760074112},{"x":2.466766773603439,"y":6.866230638861708},{"x":2.464434571375481,"y":6.877955411225937},{"x":2.460591931569539,"y":6.88927546306093},{"x":2.4553046028180745,"y":6.899997105141271},{"x":2.4486630527819457,"y":6.9099368871983735},{"x":2.4407809202236557,"y":6.918924736805408},{"x":2.431793070616621,"y":6.926806869363698},{"x":2.421853288559518,"y":6.933448419399827},{"x":2.411131646479177,"y":6.9387357481512915},{"x":2.3998115946441843,"y":6.942578387957234},{"x":2.3880868222799556,"y":6.9449105901851915},{"x":2.376157943492359,"y":6.945692450208433}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":6.580129689671146},{"x":2.3880868222799556,"y":6.580911549694388},{"x":2.3998115946441843,"y":6.583243751922346},{"x":2.411131646479177,"y":6.587086391728288},{"x":2.421853288559518,"y":6.592373720479753},{"x":2.431793070616621,"y":6.599015270515881},{"x":2.4407809202236557,"y":6.606897403074171},{"x":2.4486630527819457,"y":6.615885252681206},{"x":2.4553046028180745,"y":6.625825034738309},{"x":2.460591931569539,"y":6.63654667681865},{"x":2.464434571375481,"y":6.647866728653643},{"x":2.466766773603439,"y":6.6595915010178715},{"x":2.4675486336266808,"y":6.671520379805468},{"x":2.466766773603439,"y":6.683449258593065},{"x":2.464434571375481,"y":6.695174030957293},{"x":2.460591931569539,"y":6.706494082792286},{"x":2.4553046028180745,"y":6.717215724872627},{"x":2.4486630527819457,"y":6.72715550692973},{"x":2.4407809202236557,"y":6.736143356536765},{"x":2.431793070616621,"y":6.744025489095055},{"x":2.421853288559518,"y":6.750667039131184},{"x":2.411131646479177,"y":6.755954367882648},{"x":2.3998115946441843,"y":6.75979700768859},{"x":2.3880868222799556,"y":6.762129209916548},{"x":2.376157943492359,"y":6.76291106993979}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":6.397348309402503},{"x":2.3880868222799556,"y":6.398130169425745},{"x":2.3998115946441843,"y":6.400462371653703},{"x":2.411131646479177,"y":6.404305011459645},{"x":2.421853288559518,"y":6.409592340211109},{"x":2.431793070616621,"y":6.416233890247238},{"x":2.4407809202236557,"y":6.424116022805528},{"x":2.4486630527819457,"y":6.433103872412563},{"x":2.4553046028180745,"y":6.443043654469665},{"x":2.460591931569539,"y":6.4537652965500065},{"x":2.464434571375481,"y":6.465085348384999},{"x":2.466766773603439,"y":6.476810120749228},{"x":2.4675486336266808,"y":6.4887389995368245},{"x":2.466766773603439,"y":6.500667878324421},{"x":2.464434571375481,"y":6.51239265068865},{"x":2.460591931569539,"y":6.5237127025236425},{"x":2.4553046028180745,"y":6.534434344603984},{"x":2.4486630527819457,"y":6.544374126661086},{"x":2.4407809202236557,"y":6.553361976268121},{"x":2.431793070616621,"y":6.561244108826411},{"x":2.421853288559518,"y":6.56788565886254},{"x":2.411131646479177,"y":6.573172987614004},{"x":2.3998115946441843,"y":6.5770156274199465},{"x":2.3880868222799556,"y":6.579347829647904},{"x":2.376157943492359,"y":6.580129689671146}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":6.214566929133859},{"x":2.3880868222799556,"y":6.215348789157101},{"x":2.3998115946441843,"y":6.217680991385059},{"x":2.411131646479177,"y":6.221523631191001},{"x":2.421853288559518,"y":6.2268109599424655},{"x":2.431793070616621,"y":6.233452509978594},{"x":2.4407809202236557,"y":6.241334642536884},{"x":2.4486630527819457,"y":6.250322492143919},{"x":2.4553046028180745,"y":6.260262274201022},{"x":2.460591931569539,"y":6.270983916281363},{"x":2.464434571375481,"y":6.282303968116356},{"x":2.466766773603439,"y":6.294028740480584},{"x":2.4675486336266808,"y":6.305957619268181},{"x":2.466766773603439,"y":6.317886498055778},{"x":2.464434571375481,"y":6.329611270420006},{"x":2.460591931569539,"y":6.340931322254999},{"x":2.4553046028180745,"y":6.35165296433534},{"x":2.4486630527819457,"y":6.361592746392443},{"x":2.4407809202236557,"y":6.370580595999478},{"x":2.431793070616621,"y":6.378462728557768},{"x":2.421853288559518,"y":6.3851042785938965},{"x":2.411131646479177,"y":6.390391607345361},{"x":2.3998115946441843,"y":6.394234247151303},{"x":2.3880868222799556,"y":6.396566449379261},{"x":2.376157943492359,"y":6.397348309402503}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.394436081519224,"y":6.854301760074112},{"x":2.3942797095145743,"y":6.856687535831632},{"x":2.393813269068982,"y":6.859032490304475},{"x":2.3930447411077935,"y":6.861296500671475},{"x":2.3919872753575007,"y":6.863440829087544},{"x":2.3906589653502763,"y":6.865428785498963},{"x":2.3890825388386183,"y":6.867226355420371},{"x":2.3872849689172106,"y":6.868802781932029},{"x":2.3852970125057915,"y":6.870131091939253},{"x":2.3831526840897226,"y":6.871188557689546},{"x":2.3808886737227226,"y":6.871957085650735},{"x":2.3785437192498797,"y":6.872423526096327},{"x":2.376157943492359,"y":6.872579898100977},{"x":2.3737721677348382,"y":6.872423526096327},{"x":2.3714272132619953,"y":6.871957085650735},{"x":2.3691632028949954,"y":6.871188557689546},{"x":2.3670188744789264,"y":6.870131091939253},{"x":2.3650309180675073,"y":6.868802781932029},{"x":2.3632333481460996,"y":6.867226355420371},{"x":2.3616569216344416,"y":6.865428785498963},{"x":2.3603286116272173,"y":6.863440829087544},{"x":2.3592711458769244,"y":6.861296500671475},{"x":2.358502617915736,"y":6.859032490304475},{"x":2.3580361774701437,"y":6.856687535831632},{"x":2.357879805465494,"y":6.854301760074112},{"x":2.3580361774701437,"y":6.851915984316591},{"x":2.358502617915736,"y":6.849571029843748},{"x":2.3592711458769244,"y":6.847307019476748},{"x":2.3603286116272173,"y":6.845162691060679},{"x":2.3616569216344416,"y":6.84317473464926},{"x":2.3632333481460996,"y":6.841377164727852},{"x":2.3650309180675073,"y":6.839800738216194},{"x":2.3670188744789264,"y":6.83847242820897},{"x":2.3691632028949954,"y":6.837414962458677},{"x":2.3714272132619953,"y":6.836646434497489},{"x":2.3737721677348382,"y":6.836179994051896},{"x":2.376157943492359,"y":6.836023622047247},{"x":2.3785437192498797,"y":6.836179994051896},{"x":2.3808886737227226,"y":6.836646434497489},{"x":2.3831526840897226,"y":6.837414962458677},{"x":2.3852970125057915,"y":6.83847242820897},{"x":2.3872849689172106,"y":6.839800738216194},{"x":2.3890825388386183,"y":6.841377164727852},{"x":2.3906589653502763,"y":6.84317473464926},{"x":2.3919872753575007,"y":6.845162691060679},{"x":2.3930447411077935,"y":6.847307019476748},{"x":2.393813269068982,"y":6.849571029843748},{"x":2.3942797095145743,"y":6.851915984316591},{"x":2.394436081519224,"y":6.854301760074112}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":6.94569245020843},{"x":2.010595182955072,"y":6.94569245020843}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.376157943492359,"y":6.214566929133859},{"x":2.010595182955072,"y":6.214566929133859}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7417207040296425,"y":6.76291106993979},{"x":2.729791825242046,"y":6.762129209916548},{"x":2.7180670528778172,"y":6.75979700768859},{"x":2.7067470010428245,"y":6.755954367882648},{"x":2.6960253589624834,"y":6.750667039131184},{"x":2.6860855769053806,"y":6.744025489095055},{"x":2.677097727298346,"y":6.736143356536765},{"x":2.6692155947400558,"y":6.72715550692973},{"x":2.662574044703927,"y":6.717215724872627},{"x":2.6572867159524627,"y":6.706494082792286},{"x":2.6534440761465206,"y":6.695174030957293},{"x":2.6511118739185626,"y":6.683449258593065},{"x":2.6503300138953207,"y":6.671520379805468},{"x":2.6511118739185626,"y":6.6595915010178715},{"x":2.6534440761465206,"y":6.647866728653643},{"x":2.6572867159524627,"y":6.63654667681865},{"x":2.662574044703927,"y":6.625825034738309},{"x":2.6692155947400558,"y":6.615885252681206},{"x":2.677097727298346,"y":6.606897403074171},{"x":2.6860855769053806,"y":6.599015270515881},{"x":2.6960253589624834,"y":6.592373720479753},{"x":2.7067470010428245,"y":6.587086391728288},{"x":2.7180670528778172,"y":6.583243751922346},{"x":2.729791825242046,"y":6.580911549694388},{"x":2.7417207040296425,"y":6.580129689671146}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7417207040296425,"y":6.580129689671146},{"x":2.729791825242046,"y":6.579347829647904},{"x":2.7180670528778172,"y":6.5770156274199465},{"x":2.7067470010428245,"y":6.573172987614004},{"x":2.6960253589624834,"y":6.56788565886254},{"x":2.6860855769053806,"y":6.561244108826411},{"x":2.677097727298346,"y":6.553361976268121},{"x":2.6692155947400558,"y":6.544374126661086},{"x":2.662574044703927,"y":6.534434344603984},{"x":2.6572867159524627,"y":6.5237127025236425},{"x":2.6534440761465206,"y":6.51239265068865},{"x":2.6511118739185626,"y":6.500667878324421},{"x":2.6503300138953207,"y":6.4887389995368245},{"x":2.6511118739185626,"y":6.476810120749228},{"x":2.6534440761465206,"y":6.465085348384999},{"x":2.6572867159524627,"y":6.4537652965500065},{"x":2.662574044703927,"y":6.443043654469665},{"x":2.6692155947400558,"y":6.433103872412563},{"x":2.677097727298346,"y":6.424116022805528},{"x":2.6860855769053806,"y":6.416233890247238},{"x":2.6960253589624834,"y":6.409592340211109},{"x":2.7067470010428245,"y":6.404305011459645},{"x":2.7180670528778172,"y":6.400462371653703},{"x":2.729791825242046,"y":6.398130169425745},{"x":2.7417207040296425,"y":6.397348309402503}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7417207040296425,"y":6.397348309402503},{"x":2.729791825242046,"y":6.396566449379261},{"x":2.7180670528778172,"y":6.394234247151303},{"x":2.7067470010428245,"y":6.390391607345361},{"x":2.6960253589624834,"y":6.3851042785938965},{"x":2.6860855769053806,"y":6.378462728557768},{"x":2.677097727298346,"y":6.370580595999478},{"x":2.6692155947400558,"y":6.361592746392443},{"x":2.662574044703927,"y":6.35165296433534},{"x":2.6572867159524627,"y":6.340931322254999},{"x":2.6534440761465206,"y":6.329611270420006},{"x":2.6511118739185626,"y":6.317886498055778},{"x":2.6503300138953207,"y":6.305957619268181},{"x":2.6511118739185626,"y":6.294028740480584},{"x":2.6534440761465206,"y":6.282303968116356},{"x":2.6572867159524627,"y":6.270983916281363},{"x":2.662574044703927,"y":6.260262274201022},{"x":2.6692155947400558,"y":6.250322492143919},{"x":2.677097727298346,"y":6.241334642536884},{"x":2.6860855769053806,"y":6.233452509978594},{"x":2.6960253589624834,"y":6.2268109599424655},{"x":2.7067470010428245,"y":6.221523631191001},{"x":2.7180670528778172,"y":6.217680991385059},{"x":2.729791825242046,"y":6.215348789157101},{"x":2.7417207040296425,"y":6.214566929133859}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7417207040296425,"y":6.214566929133859},{"x":2.729791825242046,"y":6.213785069110617},{"x":2.7180670528778172,"y":6.211452866882659},{"x":2.7067470010428245,"y":6.207610227076717},{"x":2.6960253589624834,"y":6.202322898325253},{"x":2.6860855769053806,"y":6.195681348289124},{"x":2.677097727298346,"y":6.187799215730834},{"x":2.6692155947400558,"y":6.178811366123799},{"x":2.662574044703927,"y":6.168871584066697},{"x":2.6572867159524627,"y":6.1581499419863555},{"x":2.6534440761465206,"y":6.146829890151363},{"x":2.6511118739185626,"y":6.135105117787134},{"x":2.6503300138953207,"y":6.1231762389995374},{"x":2.6511118739185626,"y":6.111247360211941},{"x":2.6534440761465206,"y":6.099522587847712},{"x":2.6572867159524627,"y":6.088202536012719},{"x":2.662574044703927,"y":6.077480893932378},{"x":2.6692155947400558,"y":6.067541111875276},{"x":2.677097727298346,"y":6.058553262268241},{"x":2.6860855769053806,"y":6.050671129709951},{"x":2.6960253589624834,"y":6.044029579673822},{"x":2.7067470010428245,"y":6.038742250922358},{"x":2.7180670528778172,"y":6.0348996111164155},{"x":2.729791825242046,"y":6.0325674088884575},{"x":2.7417207040296425,"y":6.031785548865216}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7599988420565076,"y":6.671520379805468},{"x":2.759842470051858,"y":6.673906155562989},{"x":2.7593760296062655,"y":6.676251110035832},{"x":2.758607501645077,"y":6.678515120402832},{"x":2.757550035894784,"y":6.680659448818901},{"x":2.75622172588756,"y":6.68264740523032},{"x":2.754645299375902,"y":6.684444975151727},{"x":2.752847729454494,"y":6.686021401663385},{"x":2.750859773043075,"y":6.68734971167061},{"x":2.748715444627006,"y":6.688407177420903},{"x":2.746451434260006,"y":6.689175705382091},{"x":2.7441064797871633,"y":6.689642145827683},{"x":2.7417207040296425,"y":6.689798517832333},{"x":2.7393349282721218,"y":6.689642145827683},{"x":2.736989973799279,"y":6.689175705382091},{"x":2.734725963432279,"y":6.688407177420903},{"x":2.73258163501621,"y":6.68734971167061},{"x":2.730593678604791,"y":6.686021401663385},{"x":2.728796108683383,"y":6.684444975151727},{"x":2.727219682171725,"y":6.68264740523032},{"x":2.725891372164501,"y":6.680659448818901},{"x":2.724833906414208,"y":6.678515120402832},{"x":2.7240653784530195,"y":6.676251110035832},{"x":2.7235989380074273,"y":6.673906155562989},{"x":2.7234425660027775,"y":6.671520379805468},{"x":2.7235989380074273,"y":6.669134604047947},{"x":2.7240653784530195,"y":6.6667896495751044},{"x":2.724833906414208,"y":6.6645256392081045},{"x":2.725891372164501,"y":6.6623813107920355},{"x":2.727219682171725,"y":6.660393354380616},{"x":2.728796108683383,"y":6.658595784459209},{"x":2.730593678604791,"y":6.657019357947551},{"x":2.73258163501621,"y":6.655691047940326},{"x":2.734725963432279,"y":6.6546335821900335},{"x":2.736989973799279,"y":6.653865054228845},{"x":2.7393349282721218,"y":6.653398613783253},{"x":2.7417207040296425,"y":6.653242241778603},{"x":2.7441064797871633,"y":6.653398613783253},{"x":2.746451434260006,"y":6.653865054228845},{"x":2.748715444627006,"y":6.6546335821900335},{"x":2.750859773043075,"y":6.655691047940326},{"x":2.752847729454494,"y":6.657019357947551},{"x":2.754645299375902,"y":6.658595784459209},{"x":2.75622172588756,"y":6.660393354380616},{"x":2.757550035894784,"y":6.6623813107920355},{"x":2.758607501645077,"y":6.6645256392081045},{"x":2.7593760296062655,"y":6.6667896495751044},{"x":2.759842470051858,"y":6.669134604047947},{"x":2.7599988420565076,"y":6.671520379805468}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7417207040296425,"y":6.76291106993979},{"x":3.1072834645669296,"y":6.76291106993979}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7417207040296425,"y":5.66622278832793},{"x":3.1072834645669296,"y":5.66622278832793}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7417207040296425,"y":6.031785548865216},{"x":2.729791825242046,"y":6.031003688841974},{"x":2.7180670528778172,"y":6.028671486614019},{"x":2.7067470010428245,"y":6.024828846808077},{"x":2.6960253589624834,"y":6.019541518056609},{"x":2.6860855769053806,"y":6.012899968020481},{"x":2.677097727298346,"y":6.005017835462194},{"x":2.6692155947400558,"y":5.996029985855159},{"x":2.662574044703927,"y":5.986090203798057},{"x":2.6572867159524627,"y":5.975368561717712},{"x":2.6534440761465206,"y":5.964048509882723},{"x":2.6511118739185626,"y":5.9523237375184905},{"x":2.6503300138953207,"y":5.940394858730896},{"x":2.6511118739185626,"y":5.928465979943301},{"x":2.6534440761465206,"y":5.91674120757907},{"x":2.6572867159524627,"y":5.905421155744079},{"x":2.662574044703927,"y":5.894699513663735},{"x":2.6692155947400558,"y":5.884759731606634},{"x":2.677097727298346,"y":5.875771881999599},{"x":2.6860855769053806,"y":5.867889749441311},{"x":2.6960253589624834,"y":5.861248199405182},{"x":2.7067470010428245,"y":5.855960870653714},{"x":2.7180670528778172,"y":5.852118230847774},{"x":2.729791825242046,"y":5.849786028619816},{"x":2.7417207040296425,"y":5.849004168596574}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.924502084298286,"y":6.580129689671146},{"x":2.9125732055106894,"y":6.579347829647904},{"x":2.900848433146461,"y":6.5770156274199465},{"x":2.889528381311468,"y":6.573172987614004},{"x":2.878806739231127,"y":6.56788565886254},{"x":2.868866957174024,"y":6.561244108826411},{"x":2.8598791075669894,"y":6.553361976268121},{"x":2.8519969750086993,"y":6.544374126661086},{"x":2.8453554249725705,"y":6.534434344603984},{"x":2.8400680962211062,"y":6.5237127025236425},{"x":2.836225456415164,"y":6.51239265068865},{"x":2.833893254187206,"y":6.500667878324421},{"x":2.8331113941639643,"y":6.4887389995368245},{"x":2.833893254187206,"y":6.476810120749228},{"x":2.836225456415164,"y":6.465085348384999},{"x":2.8400680962211062,"y":6.4537652965500065},{"x":2.8453554249725705,"y":6.443043654469665},{"x":2.8519969750086993,"y":6.433103872412563},{"x":2.8598791075669894,"y":6.424116022805528},{"x":2.868866957174024,"y":6.416233890247238},{"x":2.878806739231127,"y":6.409592340211109},{"x":2.889528381311468,"y":6.404305011459645},{"x":2.900848433146461,"y":6.400462371653703},{"x":2.9125732055106894,"y":6.398130169425745},{"x":2.924502084298286,"y":6.397348309402503}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.924502084298286,"y":6.397348309402503},{"x":2.9125732055106894,"y":6.396566449379261},{"x":2.900848433146461,"y":6.394234247151303},{"x":2.889528381311468,"y":6.390391607345361},{"x":2.878806739231127,"y":6.3851042785938965},{"x":2.868866957174024,"y":6.378462728557768},{"x":2.8598791075669894,"y":6.370580595999478},{"x":2.8519969750086993,"y":6.361592746392443},{"x":2.8453554249725705,"y":6.35165296433534},{"x":2.8400680962211062,"y":6.340931322254999},{"x":2.836225456415164,"y":6.329611270420006},{"x":2.833893254187206,"y":6.317886498055778},{"x":2.8331113941639643,"y":6.305957619268181},{"x":2.833893254187206,"y":6.294028740480584},{"x":2.836225456415164,"y":6.282303968116356},{"x":2.8400680962211062,"y":6.270983916281363},{"x":2.8453554249725705,"y":6.260262274201022},{"x":2.8519969750086993,"y":6.250322492143919},{"x":2.8598791075669894,"y":6.241334642536884},{"x":2.868866957174024,"y":6.233452509978594},{"x":2.878806739231127,"y":6.2268109599424655},{"x":2.889528381311468,"y":6.221523631191001},{"x":2.900848433146461,"y":6.217680991385059},{"x":2.9125732055106894,"y":6.215348789157101},{"x":2.924502084298286,"y":6.214566929133859}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.924502084298286,"y":6.214566929133859},{"x":2.9125732055106894,"y":6.213785069110617},{"x":2.900848433146461,"y":6.211452866882659},{"x":2.889528381311468,"y":6.207610227076717},{"x":2.878806739231127,"y":6.202322898325253},{"x":2.868866957174024,"y":6.195681348289124},{"x":2.8598791075669894,"y":6.187799215730834},{"x":2.8519969750086993,"y":6.178811366123799},{"x":2.8453554249725705,"y":6.168871584066697},{"x":2.8400680962211062,"y":6.1581499419863555},{"x":2.836225456415164,"y":6.146829890151363},{"x":2.833893254187206,"y":6.135105117787134},{"x":2.8331113941639643,"y":6.1231762389995374},{"x":2.833893254187206,"y":6.111247360211941},{"x":2.836225456415164,"y":6.099522587847712},{"x":2.8400680962211062,"y":6.088202536012719},{"x":2.8453554249725705,"y":6.077480893932378},{"x":2.8519969750086993,"y":6.067541111875276},{"x":2.8598791075669894,"y":6.058553262268241},{"x":2.868866957174024,"y":6.050671129709951},{"x":2.878806739231127,"y":6.044029579673822},{"x":2.889528381311468,"y":6.038742250922358},{"x":2.900848433146461,"y":6.0348996111164155},{"x":2.9125732055106894,"y":6.0325674088884575},{"x":2.924502084298286,"y":6.031785548865216}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.924502084298286,"y":6.031785548865216},{"x":2.9125732055106894,"y":6.031003688841974},{"x":2.900848433146461,"y":6.028671486614019},{"x":2.889528381311468,"y":6.024828846808077},{"x":2.878806739231127,"y":6.019541518056609},{"x":2.868866957174024,"y":6.012899968020481},{"x":2.8598791075669894,"y":6.005017835462194},{"x":2.8519969750086993,"y":5.996029985855159},{"x":2.8453554249725705,"y":5.986090203798057},{"x":2.8400680962211062,"y":5.975368561717712},{"x":2.836225456415164,"y":5.964048509882723},{"x":2.833893254187206,"y":5.9523237375184905},{"x":2.8331113941639643,"y":5.940394858730896},{"x":2.833893254187206,"y":5.928465979943301},{"x":2.836225456415164,"y":5.91674120757907},{"x":2.8400680962211062,"y":5.905421155744079},{"x":2.8453554249725705,"y":5.894699513663735},{"x":2.8519969750086993,"y":5.884759731606634},{"x":2.8598791075669894,"y":5.875771881999599},{"x":2.868866957174024,"y":5.867889749441311},{"x":2.878806739231127,"y":5.861248199405182},{"x":2.889528381311468,"y":5.855960870653714},{"x":2.900848433146461,"y":5.852118230847774},{"x":2.9125732055106894,"y":5.849786028619816},{"x":2.924502084298286,"y":5.849004168596574}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.942780222325151,"y":6.4887389995368245},{"x":2.9426238503205013,"y":6.491124775294345},{"x":2.942157409874909,"y":6.493469729767188},{"x":2.9413888819137206,"y":6.495733740134188},{"x":2.9403314161634277,"y":6.497878068550257},{"x":2.9390031061562034,"y":6.499866024961676},{"x":2.9374266796445454,"y":6.501663594883084},{"x":2.9356291097231377,"y":6.503240021394742},{"x":2.9336411533117186,"y":6.504568331401966},{"x":2.9314968248956497,"y":6.505625797152259},{"x":2.9292328145286497,"y":6.5063943251134475},{"x":2.926887860055807,"y":6.50686076555904},{"x":2.924502084298286,"y":6.50701713756369},{"x":2.9221163085407653,"y":6.50686076555904},{"x":2.9197713540679224,"y":6.5063943251134475},{"x":2.9175073437009225,"y":6.505625797152259},{"x":2.9153630152848535,"y":6.504568331401966},{"x":2.9133750588734344,"y":6.503240021394742},{"x":2.9115774889520267,"y":6.501663594883084},{"x":2.9100010624403687,"y":6.499866024961676},{"x":2.9086727524331444,"y":6.497878068550257},{"x":2.9076152866828515,"y":6.495733740134188},{"x":2.906846758721663,"y":6.493469729767188},{"x":2.906380318276071,"y":6.491124775294345},{"x":2.906223946271421,"y":6.4887389995368245},{"x":2.906380318276071,"y":6.486353223779304},{"x":2.906846758721663,"y":6.484008269306461},{"x":2.9076152866828515,"y":6.481744258939461},{"x":2.9086727524331444,"y":6.479599930523392},{"x":2.9100010624403687,"y":6.477611974111973},{"x":2.9115774889520267,"y":6.475814404190565},{"x":2.9133750588734344,"y":6.474237977678907},{"x":2.9153630152848535,"y":6.472909667671683},{"x":2.9175073437009225,"y":6.47185220192139},{"x":2.9197713540679224,"y":6.471083673960202},{"x":2.9221163085407653,"y":6.470617233514609},{"x":2.924502084298286,"y":6.4704608615099595},{"x":2.926887860055807,"y":6.470617233514609},{"x":2.9292328145286497,"y":6.471083673960202},{"x":2.9314968248956497,"y":6.47185220192139},{"x":2.9336411533117186,"y":6.472909667671683},{"x":2.9356291097231377,"y":6.474237977678907},{"x":2.9374266796445454,"y":6.475814404190565},{"x":2.9390031061562034,"y":6.477611974111973},{"x":2.9403314161634277,"y":6.479599930523392},{"x":2.9413888819137206,"y":6.481744258939461},{"x":2.942157409874909,"y":6.484008269306461},{"x":2.9426238503205013,"y":6.486353223779304},{"x":2.942780222325151,"y":6.4887389995368245}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.924502084298286,"y":6.580129689671146},{"x":3.1072834645669296,"y":6.580129689671146}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.924502084298286,"y":5.849004168596574},{"x":3.1072834645669296,"y":5.849004168596574}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":2.7417207040296425,"y":5.849004168596574},{"x":2.729791825242046,"y":5.848222308573332},{"x":2.7180670528778172,"y":5.845890106345374},{"x":2.7067470010428245,"y":5.842047466539434},{"x":2.6960253589624834,"y":5.836760137787966},{"x":2.6860855769053806,"y":5.830118587751837},{"x":2.677097727298346,"y":5.822236455193549},{"x":2.6692155947400558,"y":5.813248605586514},{"x":2.662574044703927,"y":5.803308823529413},{"x":2.6572867159524627,"y":5.792587181449068},{"x":2.6534440761465206,"y":5.781267129614077},{"x":2.6511118739185626,"y":5.769542357249847},{"x":2.6503300138953207,"y":5.757613478462252},{"x":2.6511118739185626,"y":5.745684599674657},{"x":2.6534440761465206,"y":5.733959827310427},{"x":2.6572867159524627,"y":5.722639775475436},{"x":2.662574044703927,"y":5.711918133395091},{"x":2.6692155947400558,"y":5.70197835133799},{"x":2.677097727298346,"y":5.692990501730955},{"x":2.6860855769053806,"y":5.685108369172667},{"x":2.6960253589624834,"y":5.678466819136538},{"x":2.7067470010428245,"y":5.6731794903850705},{"x":2.7180670528778172,"y":5.66933685057913},{"x":2.729791825242046,"y":5.667004648351172},{"x":2.7417207040296425,"y":5.66622278832793}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematictext text={"T1"} schX={1.9923170449282068} schY={7.128473830477073} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"750317933"} schX={1.9923170449282068} schY={4.93509726725336} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={12.429133858267718} schY={-9.321850393700787} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematictext text={"2"} schX={12.886087308939324} schY={-9.321850393700787} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematictext text={"LM5155 Flyback EVM Schematic"} schX={9.340128531727654} schY={-9.139069013432145} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematictext text={"Not shown in title block"} schX={12.246352477999075} schY={-8.773506252894858} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"ti-lm5155evm-fly.SchDoc"} schX={8.810062528948588} schY={-9.50463177396943} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":8.407943492357575,"y":-9.139069013432145},{"x":13.160259379342289,"y":-9.139069013432145}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":15.170854562297361,"y":-9.50463177396943},{"x":8.407943492357575,"y":-9.50463177396943}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Sheet Title:"} schX={8.462777906438166} schY={-9.139069013432145} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Size:"} schX={12.301186892079667} schY={-9.50463177396943} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Mod. Date:"} schX={11.369001852709587} schY={-8.773506252894858} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"File:"} schX={8.462777906438166} schY={-9.50463177396943} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Sheet:"} schX={11.935624131542383} schY={-9.321850393700787} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"of"} schX={12.648471514590089} schY={-9.321850393700787} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"B"} schX={12.703305928670684} schY={-9.50463177396943} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":8.407943492357575,"y":-9.139069013432145},{"x":13.160259379342289,"y":-9.139069013432145}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":-8.042380731820288,"y":-9.139069013432145},{"x":5.666222788327929,"y":-9.139069013432145}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":13.160259379342289,"y":-9.321850393700787},{"x":8.407943492357575,"y":-9.321850393700787}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"http://www.ti.com"} schX={13.525822139879576} schY={-9.50463177396943} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Contact:"} schX={8.462777906438166} schY={-9.687413154238074} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"N/A"} schX={9.139069013432145} schY={-9.687413154238074} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":11.33244557665586,"y":-8.590724872626216},{"x":11.33244557665586,"y":-8.773506252894858}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":8.407943492357575,"y":-8.956287633163502},{"x":13.160259379342289,"y":-8.956287633163502}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"LM5155EVM-FLY"} schX={9.41324108383511} schY={-8.956287633163502} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematictext text={"Project Title:"} schX={8.462777906438166} schY={-8.956287633163502} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":8.407943492357575,"y":-9.687413154238074},{"x":8.407943492357575,"y":-8.590724872626216},{"x":15.170854562297361,"y":-8.590724872626216}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Designed for:"} schX={8.462777906438166} schY={-8.773506252894858} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Public Release"} schX={9.468075497915702} schY={-8.773506252894858} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":11.880789717461788,"y":-9.139069013432145},{"x":11.880789717461788,"y":-9.321850393700787}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Assembly Variant:"} schX={8.462777906438166} schY={-9.321850393700787} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"=variantName"} schX={9.815360120426124} schY={-9.321850393700787} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematictext text={"© Texas Instruments"} schX={13.343040759610933} schY={-9.687413154238074} anchor={"bottom_left"} fontSize={0.14622510421491433} color={"#1f2937"} schRotation={0} />
      <schematictext text={"2018"} schX={14.622510421491434} schY={-9.687413154238074} anchor={"bottom_left"} fontSize={0.14622510421491433} color={"#000080"} schRotation={0} />
      <schematictext text={"Drawn By:"} schX={5.721057202408524} schY={-9.50463177396943} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Engineer:"} schX={5.721057202408524} schY={-9.687413154238074} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"=DrawnBy"} schX={6.4887389995368245} schY={-9.50463177396943} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematictext text={"N/A"} schX={6.4887389995368245} schY={-9.687413154238074} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":13.160259379342289,"y":-9.50463177396943},{"x":13.160259379342289,"y":-8.590724872626216}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Texas Instruments and/or its licensors do not warrant the accuracy or completeness of this specification or any information contained therein."} schX={-7.950989127779066} schY={-9.139069927339046} anchor={"top_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Texas Instruments and/or its licensors do not warrant that this design will meet the specifications, will be suitable for your application or"} schX={-7.950989127779066} schY={-9.32185130760769} anchor={"top_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"fit for any particular purpose, or will operate in an implementation. Texas Instruments and/or its licensors do not warrant that the design is"} schX={-7.950989127779066} schY={-9.504632687876333} anchor={"top_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":5.666222788327929,"y":-9.687413154238074},{"x":5.666222788327929,"y":-8.590724872626216}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":5.666222788327929,"y":-9.50463177396943},{"x":8.407943492357575,"y":-9.50463177396943}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":8.407943492357575,"y":-9.321850393700787},{"x":5.666222788327929,"y":-9.321850393700787}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":12.246352477999075,"y":-9.321850393700787},{"x":12.246352477999075,"y":-9.50463177396943}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":8.407943492357575,"y":-8.773506252894858},{"x":13.160259379342289,"y":-8.773506252894858}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":5.666222788327929,"y":-9.139069013432145},{"x":8.407943492357575,"y":-9.139069013432145}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":-8.042380731820288,"y":-9.139069013432145},{"x":-8.042380731820288,"y":-9.687413154238074}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"=VersionControl_RevNumber"} schX={6.580129689671143} schY={-9.321850393700787} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"SVN Rev:"} schX={5.721057202408524} schY={-9.321850393700787} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"BMC029"} schX={6.397348309402503} schY={-9.139069013432145} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematictext text={"Number:"} schX={5.721057202408524} schY={-9.139069013432145} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":5.666222788327929,"y":-8.956287633163502},{"x":8.407943492357575,"y":-8.956287633163502}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Rev:"} schX={7.548871005094952} schY={-9.139069013432145} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":7.4940365910143605,"y":-8.956287633163502},{"x":7.4940365910143605,"y":-9.139069013432145}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"A"} schX={8.042380731820288} schY={-9.139069013432145} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":5.666222788327929,"y":-8.773506252894858},{"x":8.407943492357575,"y":-8.773506252894858}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"TID #:"} schX={5.721057202408524} schY={-8.956287633163502} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"N/A"} schX={6.580129689671143} schY={-8.86489694302918} anchor={"center_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":5.666222788327929,"y":-8.590724872626216},{"x":8.407943492357575,"y":-8.590724872626216}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Orderable:"} schX={5.721057202408524} schY={-8.773506252894858} anchor={"bottom_left"} fontSize={0.1827813802686429} color={"#1f2937"} schRotation={0} />
      <schematictext text={"=EVM_orderable"} schX={6.580129689671143} schY={-8.682115562760538} anchor={"center_left"} fontSize={0.1827813802686429} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":1.0966882816118577,"y":1.0966882816118577},{"x":1.0966882816118577,"y":0.3655627605372871}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":0.3655627605372871},{"x":1.0966882816118577,"y":0.18278138026864355}]} />
      <schematicpath points={[{"x":1.6450324224177848,"y":0.3655627605372871},{"x":1.0966882816118577,"y":0.3655627605372871}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":4.021190365910146},{"x":-4.386753126447431,"y":3.838408985641502}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":4.93509726725336},{"x":-3.290064844835573,"y":4.386753126447431}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":4.386753126447431},{"x":-3.290064844835573,"y":3.838408985641502}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":3.838408985641502},{"x":-4.386753126447431,"y":3.838408985641502}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":3.6556276053728585},{"x":-3.290064844835573,"y":3.838408985641502}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":4.386753126447431},{"x":-2.5589393237610008,"y":4.386753126447431}]} />
      <schematicpath points={[{"x":-2.5589393237610008,"y":4.386753126447431},{"x":-2.5589393237610008,"y":4.569534506716074}]} />
      <schematicpath points={[{"x":-11.698008337193148,"y":5.66622278832793},{"x":-11.515226956924504,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-11.515226956924504,"y":5.66622278832793},{"x":-10.05297591477536,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":5.66622278832793},{"x":-8.956287633163504,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":5.66622278832793},{"x":-8.042380731820288,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-8.042380731820288,"y":5.66622278832793},{"x":-6.945692450208432,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-6.945692450208432,"y":5.66622278832793},{"x":-6.031785548865216,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":5.66622278832793},{"x":-6.031785548865216,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-13.70860352014822,"y":6.214566929133859},{"x":-12.429133858267718,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":6.214566929133859},{"x":-12.429133858267718,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":5.66622278832793},{"x":-11.698008337193148,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-8.042380731820288,"y":6.031785548865216},{"x":-8.042380731820288,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-6.945692450208432,"y":6.031785548865216},{"x":-6.945692450208432,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":6.031785548865216},{"x":-10.05297591477536,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":6.031785548865216},{"x":-8.956287633163504,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-11.515226956924504,"y":5.300660027790645},{"x":-11.515226956924504,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":5.66622278832793},{"x":-12.429133858267718,"y":5.300660027790645}]} />
      <schematicpath points={[{"x":0.3655627605372853,"y":-5.483441408059287},{"x":0.3655627605372853,"y":-4.935097267253358}]} />
      <schematicpath points={[{"x":0.3655627605372853,"y":-4.935097267253358},{"x":1.2794696618805013,"y":-4.935097267253358}]} />
      <schematicpath points={[{"x":1.6450324224177848,"y":5.300660027790645},{"x":1.4622510421491413,"y":5.300660027790645}]} />
      <schematicpath points={[{"x":1.4622510421491413,"y":5.300660027790645},{"x":1.4622510421491413,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":-4.93509726725336,"y":0},{"x":-4.569534506716073,"y":0}]} />
      <schematicpath points={[{"x":-4.569534506716073,"y":0},{"x":-4.569534506716073,"y":0.18278138026864355}]} />
      <schematicpath points={[{"x":-4.569534506716073,"y":0.18278138026864355},{"x":-2.924502084298288,"y":0.18278138026864355}]} />
      <schematicpath points={[{"x":-4.93509726725336,"y":1.2794696618805013},{"x":-2.924502084298288,"y":1.2794696618805013}]} />
      <schematicpath points={[{"x":-2.924502084298288,"y":1.2794696618805013},{"x":-2.924502084298288,"y":0.7311255210745724}]} />
      <schematicpath points={[{"x":-2.924502084298288,"y":0.7311255210745724},{"x":-2.924502084298288,"y":0.18278138026864355}]} />
      <schematicpath points={[{"x":-2.924502084298288,"y":0.18278138026864355},{"x":-2.924502084298288,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-2.924502084298288,"y":-0.18278138026864177},{"x":-3.290064844835573,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-2.924502084298288,"y":-0.18278138026864177},{"x":-2.924502084298288,"y":-0.3655627605372853}]} />
      <schematicpath points={[{"x":-0.9139069013432142,"y":1.0966882816118577},{"x":-0.9139069013432142,"y":0.7311255210745724}]} />
      <schematicpath points={[{"x":-2.924502084298288,"y":0.7311255210745724},{"x":-0.9139069013432142,"y":0.7311255210745724}]} />
      <schematicpath points={[{"x":-12.977477999073647,"y":-5.300660027790643},{"x":-12.794696618805004,"y":-5.300660027790643}]} />
      <schematicpath points={[{"x":-12.794696618805004,"y":-5.300660027790643},{"x":-12.794696618805004,"y":-5.6662227883279295}]} />
      <schematicpath points={[{"x":-12.794696618805004,"y":-5.6662227883279295},{"x":-10.784101435849932,"y":-5.6662227883279295}]} />
      <schematicpath points={[{"x":-10.784101435849932,"y":-5.6662227883279295},{"x":-10.784101435849932,"y":-6.031785548865216}]} />
      <schematicpath points={[{"x":4.569534506716071,"y":-2.924502084298286},{"x":4.569534506716071,"y":-3.6556276053728576}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-3.2900648448355714},{"x":-6.031785548865216,"y":-3.1072834645669287}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-3.2900648448355714},{"x":-7.128473830477073,"y":-3.2900648448355714}]} />
      <schematicpath points={[{"x":-7.128473830477073,"y":-3.2900648448355714},{"x":-7.128473830477073,"y":-2.7417207040296425}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-3.6556276053728576},{"x":-6.031785548865216,"y":-3.2900648448355714}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":1.162251042149144},{"x":1.0966882816118577,"y":1.0966882816118577}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":3.9953624363131084},{"x":-4.386753126447431,"y":4.021190365910146}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":4.909269337656323},{"x":-3.290064844835573,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":-2.5589393237610008,"y":4.635097267253359},{"x":-2.5589393237610008,"y":4.569534506716074}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":6.0699311023622045},{"x":-6.031785548865216,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-8.042380731820288,"y":6.00595761926818},{"x":-8.042380731820288,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-6.945692450208432,"y":6.00595761926818},{"x":-6.945692450208432,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":6.00595761926818},{"x":-10.05297591477536,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":6.00595761926818},{"x":-8.956287633163504,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":5.244766095414544},{"x":-12.429133858267718,"y":5.300660027790645}]} />
      <schematicpath points={[{"x":1.2536417322834623,"y":-4.935097267253358},{"x":1.2794696618805013,"y":-4.935097267253358}]} />
      <schematicpath points={[{"x":-0.9139069013432142,"y":1.0708603520148223},{"x":-0.9139069013432142,"y":1.0966882816118577}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-3.133111394163964},{"x":-6.031785548865216,"y":-3.1072834645669287}]} />
      <schematicpath points={[{"x":-7.128473830477073,"y":-2.767548633626679},{"x":-7.128473830477073,"y":-2.7417207040296425}]} />
      <schematicpath points={[{"x":-8.590724872626218,"y":3.4470182955071795},{"x":-8.590724872626218,"y":3.4728462251042167}]} />
      <schematicpath points={[{"x":-0.18278138026864355,"y":2.0105951829550737},{"x":-0.9139069013432142,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-0.9139069013432142,"y":2.0105951829550737},{"x":-0.9139069013432142,"y":1.6450324224177866}]} />
      <schematicpath points={[{"x":-2.1933765632237154,"y":2.0105951829550737},{"x":-0.9139069013432142,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-0.11721861973135894,"y":2.0105951829550737},{"x":-0.18278138026864355,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-0.9139069013432142,"y":1.6708603520148237},{"x":-0.9139069013432142,"y":1.6450324224177866}]} />
      <schematicpath points={[{"x":-2.258939323761,"y":2.0105951829550737},{"x":-2.1933765632237154,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":0.3655627605372853,"y":2.7417207040296443},{"x":-2.1933765632237154,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":0.6127147985178318,"y":2.6417207040296447},{"x":0.3655627605372853,"y":2.6417207040296447}]} />
      <schematicpath points={[{"x":0.3655627605372853,"y":2.6417207040296447},{"x":0.3655627605372853,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":-2.258939323761,"y":2.7417207040296443},{"x":-2.1933765632237154,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":2.1933765632237154},{"x":1.0966882816118577,"y":1.8278138026864301}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":1.8278138026864301},{"x":0.9139069013432142,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":0.9139069013432142,"y":2.0105951829550737},{"x":0.5483441408059271,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":1.3427147985178323,"y":2.1917207040296436},{"x":1.3427147985178323,"y":2.1933765632237154}]} />
      <schematicpath points={[{"x":1.3427147985178323,"y":2.1933765632237154},{"x":1.0966882816118577,"y":2.1933765632237154}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":1.7622510421491455},{"x":1.0966882816118577,"y":1.8278138026864301}]} />
      <schematicpath points={[{"x":0.4827813802686407,"y":2.0105951829550737},{"x":0.5483441408059271,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-3.6556276053728585,"y":2.0105951829550737},{"x":-4.93509726725336,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-3.6556276053728585,"y":2.0105951829550737},{"x":-2.924502084298288,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-2.8589393237610015,"y":2.0105951829550737},{"x":-2.924502084298288,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-2.924502084298288,"y":2.7417207040296443},{"x":-4.203971746178787,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":-4.93509726725336,"y":2.924502084298288},{"x":-4.203971746178787,"y":2.924502084298288}]} />
      <schematicpath points={[{"x":-4.203971746178787,"y":2.924502084298288},{"x":-4.203971746178787,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":-2.8589393237610015,"y":2.7417207040296443},{"x":-2.924502084298288,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":-4.93509726725336,"y":4.752315886984716},{"x":-4.386753126447431,"y":4.752315886984716}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":4.752315886984716},{"x":-4.386753126447431,"y":4.569534506716074}]} />
      <schematicpath points={[{"x":-4.93509726725336,"y":3.4728462251042167},{"x":-4.93509726725336,"y":4.752315886984716}]} />
      <schematicpath points={[{"x":-4.93509726725336,"y":4.752315886984716},{"x":-4.93509726725336,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":4.752315886984716},{"x":-4.386753126447431,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":3.4728462251042167,"y":0},{"x":3.4728462251042167,"y":0.18278138026864355}]} />
      <schematicpath points={[{"x":-9.321850393700789,"y":2.0105951829550737},{"x":-9.687413154238076,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-9.687413154238076,"y":2.0105951829550737},{"x":-9.687413154238076,"y":2.1933765632237154}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":4.59536243631311},{"x":-4.386753126447431,"y":4.569534506716074}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":5.183441408059288},{"x":-4.386753126447431,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":3.4728462251042167,"y":-0.0655627605372846},{"x":3.4728462251042167,"y":0}]} />
      <schematicpath points={[{"x":-9.256287633163502,"y":2.0105951829550737},{"x":-9.321850393700789,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-0.18278138026864355,"y":6.94569245020843},{"x":-0.3655627605372871,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":6.94569245020843},{"x":-6.031785548865216,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":6.94569245020843},{"x":-6.945692450208432,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-6.945692450208432,"y":6.94569245020843},{"x":-8.042380731820288,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-8.042380731820288,"y":6.94569245020843},{"x":-8.956287633163504,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":6.94569245020843},{"x":-10.05297591477536,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":6.94569245020843},{"x":-10.60132005558129,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-10.60132005558129,"y":6.94569245020843},{"x":-10.966882816118575,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":6.94569245020843},{"x":-12.429133858267718,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":3.838408985641502},{"x":-10.966882816118575,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":4.203971746178787},{"x":-10.966882816118575,"y":4.569534506716074}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":4.569534506716074},{"x":-10.966882816118575,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":4.93509726725336},{"x":-10.966882816118575,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":5.66622278832793},{"x":-0.3655627605372871,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":5.300660027790645},{"x":-0.3655627605372871,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-0.9139069013432142,"y":5.300660027790645},{"x":-0.3655627605372871,"y":5.300660027790645}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":5.300660027790645},{"x":-0.3655627605372871,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":-0.9139069013432142,"y":5.300660027790645},{"x":-1.2794696618805013,"y":5.300660027790645}]} />
      <schematicpath points={[{"x":-1.2794696618805013,"y":5.300660027790645},{"x":-1.2794696618805013,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":1.6450324224177848,"y":6.214566929133859},{"x":0.7311255210745706,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":0.7311255210745706,"y":6.214566929133859},{"x":0.7311255210745706,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":0.7311255210745706,"y":6.94569245020843},{"x":-0.18278138026864355,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":6.94569245020843},{"x":-12.429133858267718,"y":6.397348309402503}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":6.397348309402503},{"x":-13.70860352014822,"y":6.397348309402503}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":6.580129689671146},{"x":-6.031785548865216,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-6.945692450208432,"y":6.580129689671146},{"x":-6.945692450208432,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-8.042380731820288,"y":6.580129689671146},{"x":-8.042380731820288,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":6.580129689671146},{"x":-8.956287633163504,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":6.580129689671146},{"x":-10.05297591477536,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":6.94569245020843},{"x":-12.429133858267718,"y":7.311255210745717}]} />
      <schematicpath points={[{"x":-10.784101435849932,"y":4.203971746178787},{"x":-10.966882816118575,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-10.60132005558129,"y":7.311255210745717},{"x":-10.60132005558129,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":-10.418538675312647,"y":4.93509726725336},{"x":-10.966882816118575,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":0.3655627605372853,"y":-3.8384089856415002},{"x":0.3655627605372853,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":0.3655627605372853,"y":-4.021190365910143},{"x":1.2794696618805013,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":3.7728462251042174},{"x":-10.966882816118575,"y":3.838408985641502}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":4.960925196850395},{"x":-0.3655627605372871,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":-1.2794696618805013,"y":5.052315886984717},{"x":-1.2794696618805013,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":6.669931102362206},{"x":-6.031785548865216,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":-6.945692450208432,"y":6.605957619268182},{"x":-6.945692450208432,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":-8.042380731820288,"y":6.605957619268182},{"x":-8.042380731820288,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":6.605957619268182},{"x":-8.956287633163504,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":6.605957619268182},{"x":-10.05297591477536,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":7.367149143121818},{"x":-12.429133858267718,"y":7.311255210745717}]} />
      <schematicpath points={[{"x":-10.755757295044004,"y":4.203971746178787},{"x":-10.784101435849932,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-10.35297591477536,"y":4.93509726725336},{"x":-10.418538675312647,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":1.2536417322834623,"y":-4.021190365910143},{"x":1.2794696618805013,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":-11.698008337193148,"y":-0.18278138026864177},{"x":-11.698008337193148,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-11.698008337193148,"y":-0.7311255210745706},{"x":-10.966882816118575,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":-0.7311255210745706},{"x":-10.784101435849932,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":-0.3655627605372853},{"x":-10.966882816118575,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":-0.7311255210745706},{"x":-10.784101435849932,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":-0.3655627605372853},{"x":-10.05297591477536,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":-0.7311255210745706},{"x":-8.956287633163504,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-0.18278138026864177},{"x":-8.956287633163504,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-1.096688281611856},{"x":-8.956287633163504,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-4.569534506716073,"y":-0.5483441408059271},{"x":-4.569534506716073,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-4.93509726725336,"y":-0.18278138026864177},{"x":-4.569534506716073,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-4.569534506716073,"y":-0.18278138026864177},{"x":-4.021190365910144,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-4.203971746178787,"y":-0.7311255210745706},{"x":-4.203971746178787,"y":-0.5483441408059271}]} />
      <schematicpath points={[{"x":-4.203971746178787,"y":-0.5483441408059271},{"x":-4.569534506716073,"y":-0.5483441408059271}]} />
      <schematicpath points={[{"x":-4.203971746178787,"y":-0.7311255210745706},{"x":-4.021190365910144,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-6.5801296896711445},{"x":-8.956287633163504,"y":-6.397348309402501}]} />
      <schematicpath points={[{"x":-3.472846225104215,"y":-3.6556276053728576},{"x":-3.472846225104215,"y":-2.924502084298286}]} />
      <schematicpath points={[{"x":-11.698008337193148,"y":-0.20860930986567894},{"x":-11.698008337193148,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":-0.3000000000000007},{"x":-10.966882816118575,"y":-0.3655627605372853}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":-0.3000000000000007},{"x":-10.05297591477536,"y":-0.3655627605372853}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-0.20860930986567894},{"x":-8.956287633163504,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-3.965296433534043,"y":-0.7311255210745706},{"x":-4.021190365910144,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-6.3317855488652155},{"x":-8.956287633163504,"y":-6.397348309402501}]} />
      <schematicpath points={[{"x":-11.698008337193148,"y":0.3655627605372871},{"x":-11.698008337193148,"y":2.5589393237610008}]} />
      <schematicpath points={[{"x":-7.859599351551646,"y":2.7417207040296443},{"x":-10.966882816118575,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":-11.698008337193148,"y":2.5589393237610008},{"x":-10.966882816118575,"y":2.5589393237610008}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":0.3655627605372871},{"x":-10.966882816118575,"y":2.5589393237610008}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":2.5589393237610008},{"x":-10.966882816118575,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":2.7417207040296443},{"x":-10.966882816118575,"y":3.1072834645669296}]} />
      <schematicpath points={[{"x":-11.698008337193148,"y":0.3913906901343225},{"x":-11.698008337193148,"y":0.3655627605372871}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":0.3000000000000007},{"x":-10.966882816118575,"y":0.3655627605372871}]} />
      <schematicpath points={[{"x":-10.966882816118575,"y":3.172846225104216},{"x":-10.966882816118575,"y":3.1072834645669296}]} />
      <schematicpath points={[{"x":-7.859599351551646,"y":1.2794696618805013},{"x":-10.05297591477536,"y":1.2794696618805013}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":0.3655627605372871},{"x":-10.05297591477536,"y":1.2794696618805013}]} />
      <schematicpath points={[{"x":-10.05297591477536,"y":0.3000000000000007},{"x":-10.05297591477536,"y":0.3655627605372871}]} />
      <schematicpath points={[{"x":-7.859599351551646,"y":0.5483441408059289},{"x":-8.956287633163504,"y":0.5483441408059289}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":0.5483441408059289},{"x":-8.956287633163504,"y":0.3655627605372871}]} />
      <schematicpath points={[{"x":-9.139069013432145,"y":0.5483441408059289},{"x":-8.956287633163504,"y":0.5483441408059289}]} />
      <schematicpath points={[{"x":-12.977477999073647,"y":-4.935097267253358},{"x":-11.88078971746179,"y":-4.935097267253358}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":-2.376157943492357},{"x":-4.021190365910144,"y":-2.376157943492357}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":0.3913906901343225},{"x":-8.956287633163504,"y":0.3655627605372871}]} />
      <schematicpath points={[{"x":-8.77350625289486,"y":4.203971746178787},{"x":-8.590724872626218,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-8.590724872626218,"y":4.203971746178787},{"x":-8.590724872626218,"y":4.021190365910146}]} />
      <schematicpath points={[{"x":-8.590724872626218,"y":4.203971746178787},{"x":-7.859599351551646,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-7.859599351551646,"y":4.203971746178787},{"x":-7.859599351551646,"y":3.4728462251042167}]} />
      <schematicpath points={[{"x":-8.839069013432146,"y":4.203971746178787},{"x":-8.77350625289486,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-8.590724872626218,"y":4.047018295507181},{"x":-8.590724872626218,"y":4.021190365910146}]} />
      <schematicpath points={[{"x":6.214566929133859,"y":6.580129689671146},{"x":6.397348309402503,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":6.397348309402503,"y":6.580129689671146},{"x":6.580129689671143,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":6.580129689671143,"y":6.580129689671146},{"x":7.311255210745717,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":6.580129689671146},{"x":8.042380731820288,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":6.580129689671146},{"x":8.225162112088931,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":8.225162112088931,"y":6.580129689671146},{"x":8.773506252894858,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":8.773506252894858,"y":6.580129689671146},{"x":9.139069013432145,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":9.139069013432145,"y":6.580129689671146},{"x":9.139069013432145,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":6.031785548865216,"y":7.859599351551648},{"x":6.397348309402503,"y":7.859599351551648}]} />
      <schematicpath points={[{"x":6.397348309402503,"y":7.859599351551648},{"x":6.397348309402503,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":6.580129689671143,"y":6.214566929133859},{"x":6.580129689671143,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":6.214566929133859},{"x":7.311255210745717,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":6.214566929133859},{"x":8.042380731820288,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":8.773506252894858,"y":6.214566929133859},{"x":8.773506252894858,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":9.504631773969432,"y":6.214566929133859},{"x":9.504631773969432,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":6.214566929133859},{"x":10.418538675312647,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":9.139069013432145,"y":6.580129689671146},{"x":9.504631773969432,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":9.504631773969432,"y":6.580129689671146},{"x":10.418538675312647,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":6.580129689671146},{"x":11.33244557665586,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":11.33244557665586,"y":6.580129689671146},{"x":11.515226956924504,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":6.580129689671146},{"x":12.246352477999075,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":12.246352477999075,"y":6.580129689671146},{"x":13.160259379342289,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":13.160259379342289,"y":6.580129689671146},{"x":13.160259379342289,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":6.76291106993979},{"x":11.515226956924504,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":12.246352477999075,"y":6.214566929133859},{"x":12.246352477999075,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":11.33244557665586,"y":6.214566929133859},{"x":11.33244557665586,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":3.4728462251042167},{"x":11.880789717461788,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":3.6556276053728585},{"x":11.880789717461788,"y":3.838408985641502}]} />
      <schematicpath points={[{"x":12.429133858267718,"y":3.6556276053728585},{"x":11.880789717461788,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":6.057613478462251,"y":7.859599351551648},{"x":6.031785548865216,"y":7.859599351551648}]} />
      <schematicpath points={[{"x":6.580129689671143,"y":6.304368341824922},{"x":6.580129689671143,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":6.304368341824922},{"x":7.311255210745717,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":6.240394858730895},{"x":8.042380731820288,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":8.773506252894858,"y":6.240394858730895},{"x":8.773506252894858,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":9.504631773969432,"y":6.240394858730895},{"x":9.504631773969432,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":6.240394858730895},{"x":10.418538675312647,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":6.818805002315891},{"x":11.515226956924504,"y":6.76291106993979}]} />
      <schematicpath points={[{"x":12.246352477999075,"y":6.240394858730895},{"x":12.246352477999075,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":11.33244557665586,"y":6.240394858730895},{"x":11.33244557665586,"y":6.214566929133859}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":3.4072834645669303},{"x":11.880789717461788,"y":3.4728462251042167}]} />
      <schematicpath points={[{"x":12.48502779064382,"y":3.6556276053728585},{"x":12.429133858267718,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":6.397348309402503,"y":5.1178786475220015},{"x":6.580129689671143,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":6.580129689671143,"y":5.1178786475220015},{"x":7.311255210745717,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":5.1178786475220015},{"x":8.042380731820288,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":5.1178786475220015},{"x":8.773506252894858,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":8.773506252894858,"y":5.1178786475220015},{"x":8.956287633163502,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":3.4728462251042167,"y":5.849004168596574},{"x":3.8384089856415002,"y":5.849004168596574}]} />
      <schematicpath points={[{"x":3.8384089856415002,"y":5.849004168596574},{"x":3.8384089856415002,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":3.8384089856415002,"y":5.66622278832793},{"x":3.8384089856415002,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":3.8384089856415002,"y":5.1178786475220015},{"x":3.8384089856415002,"y":4.752315886984716}]} />
      <schematicpath points={[{"x":6.397348309402503,"y":5.1178786475220015},{"x":3.8384089856415002,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":6.580129689671143,"y":5.66622278832793},{"x":6.580129689671143,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":5.66622278832793},{"x":7.311255210745717,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":5.66622278832793},{"x":8.042380731820288,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":8.773506252894858,"y":5.66622278832793},{"x":8.773506252894858,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":9.504631773969432,"y":5.66622278832793},{"x":9.504631773969432,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":5.66622278832793},{"x":10.418538675312647,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":13.160259379342289,"y":5.849004168596574},{"x":13.160259379342289,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":13.160259379342289,"y":5.1178786475220015},{"x":12.246352477999075,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":12.246352477999075,"y":5.1178786475220015},{"x":11.515226956924504,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":5.1178786475220015},{"x":11.33244557665586,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":11.33244557665586,"y":5.1178786475220015},{"x":10.418538675312647,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":5.1178786475220015},{"x":9.504631773969432,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":9.504631773969432,"y":5.1178786475220015},{"x":8.956287633163502,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":3.4728462251042167,"y":5.66622278832793},{"x":3.8384089856415002,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":5.1178786475220015},{"x":11.515226956924504,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":11.33244557665586,"y":5.66622278832793},{"x":11.33244557665586,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":12.246352477999075,"y":5.66622278832793},{"x":12.246352477999075,"y":5.1178786475220015}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":-4.203971746178786},{"x":11.880789717461788,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":-4.203971746178786},{"x":7.311255210745717,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":-4.021190365910143},{"x":7.311255210745717,"y":-3.472846225104215}]} />
      <schematicpath points={[{"x":7.859599351551644,"y":-4.021190365910143},{"x":7.311255210745717,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":0},{"x":8.956287633163502,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":1.8278138026864283,"y":-4.935097267253358},{"x":2.558939323760999,"y":-4.935097267253358}]} />
      <schematicpath points={[{"x":2.558939323760999,"y":-4.935097267253358},{"x":2.558939323760999,"y":-5.483441408059287}]} />
      <schematicpath points={[{"x":1.8278138026864283,"y":-4.021190365910143},{"x":2.558939323760999,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":2.558939323760999,"y":-4.021190365910143},{"x":2.558939323760999,"y":-4.935097267253358}]} />
      <schematicpath points={[{"x":6.580129689671143,"y":5.704368341824921},{"x":6.580129689671143,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":5.704368341824921},{"x":7.311255210745717,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":5.640394858730895},{"x":8.042380731820288,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":8.773506252894858,"y":5.640394858730895},{"x":8.773506252894858,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":9.504631773969432,"y":5.640394858730895},{"x":9.504631773969432,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":5.640394858730895},{"x":10.418538675312647,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":4.879203334877259},{"x":11.515226956924504,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":11.33244557665586,"y":5.640394858730895},{"x":11.33244557665586,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":12.246352477999075,"y":5.640394858730895},{"x":12.246352477999075,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":-3.9556276053728574},{"x":11.880789717461788,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":8.207943492357575,"y":-4.021190365910143},{"x":7.859599351551644,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":-0.025827929597035393},{"x":8.956287633163502,"y":0}]} />
      <schematicpath points={[{"x":1.8536417322834637,"y":-4.935097267253358},{"x":1.8278138026864283,"y":-4.935097267253358}]} />
      <schematicpath points={[{"x":1.8536417322834637,"y":-4.021190365910143},{"x":1.8278138026864283,"y":-4.021190365910143}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":2.0105951829550737},{"x":11.880789717461788,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":7.128473830477073,"y":0.913906901343216},{"x":7.128473830477073,"y":0.5483441408059289}]} />
      <schematicpath points={[{"x":7.128473830477073,"y":0.913906901343216},{"x":7.128473830477073,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":7.128473830477073,"y":2.0105951829550737},{"x":8.042380731820288,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":2.0105951829550737},{"x":8.956287633163502,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":2.0105951829550737},{"x":10.418538675312647,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":2.0105951829550737},{"x":11.880789717461788,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":2.7417207040296443},{"x":11.880789717461788,"y":2.5589393237610008}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":2.5589393237610008},{"x":11.880789717461788,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":12.429133858267718,"y":2.5589393237610008},{"x":11.880789717461788,"y":2.5589393237610008}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":1.6450324224177866},{"x":8.956287633163502,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":1.4622510421491448},{"x":10.418538675312647,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":0.5483441408059289},{"x":8.042380731820288,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":-0.7966882816118552},{"x":11.880789717461788,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":7.128473830477073,"y":0.48278138026864426},{"x":7.128473830477073,"y":0.5483441408059289}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":2.807283464566929},{"x":11.880789717461788,"y":2.7417207040296443}]} />
      <schematicpath points={[{"x":12.48502779064382,"y":2.5589393237610008},{"x":12.429133858267718,"y":2.5589393237610008}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":1.579469661880502},{"x":8.956287633163502,"y":1.6450324224177866}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":0.48278138026864426},{"x":8.042380731820288,"y":0.5483441408059289}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":-3.1072834645669287},{"x":11.880789717461788,"y":-3.2900648448355714}]} />
      <schematicpath points={[{"x":10.78410143584993,"y":-2.558939323761},{"x":11.515226956924504,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":-2.558939323761},{"x":11.515226956924504,"y":-3.1072834645669287}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":-1.462251042149143},{"x":11.880789717461788,"y":-3.1072834645669287}]} />
      <schematicpath points={[{"x":10.05297591477536,"y":-1.8278138026864283},{"x":11.515226956924504,"y":-1.8278138026864283}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":-1.8278138026864283},{"x":11.515226956924504,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":-3.1072834645669287},{"x":11.880789717461788,"y":-3.1072834645669287}]} />
      <schematicpath points={[{"x":11.515226956924504,"y":-3.1072834645669287},{"x":7.6768179712830005,"y":-3.1072834645669287}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":-3.3556276053728578},{"x":11.880789717461788,"y":-3.2900648448355714}]} />
      <schematicpath points={[{"x":10.718538675312647,"y":-2.558939323761},{"x":10.78410143584993,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":11.880789717461788,"y":-1.3966882816118567},{"x":11.880789717461788,"y":-1.462251042149143}]} />
      <schematicpath points={[{"x":10.078803844372395,"y":-1.8278138026864283},{"x":10.05297591477536,"y":-1.8278138026864283}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":-2.376157943492357},{"x":7.311255210745717,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":-2.558939323761},{"x":7.311255210745717,"y":-2.7417207040296425}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":-2.376157943492357},{"x":7.311255210745717,"y":-1.6450324224177848}]} />
      <schematicpath points={[{"x":7.311255210745717,"y":-1.6450324224177848},{"x":6.762911069939786,"y":-1.6450324224177848}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":-1.2794696618804995},{"x":8.042380731820288,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":8.407943492357575,"y":-2.558939323761},{"x":8.042380731820288,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":-2.558939323761},{"x":7.311255210745717,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":-1.2794696618804995},{"x":10.418538675312647,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":10.418538675312647,"y":-1.2794696618804995},{"x":10.418538675312647,"y":0}]} />
      <schematicpath points={[{"x":9.504631773969432,"y":-1.8278138026864283},{"x":8.407943492357575,"y":-1.8278138026864283}]} />
      <schematicpath points={[{"x":8.407943492357575,"y":-1.8278138026864283},{"x":8.407943492357575,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":8.407943492357575,"y":-2.558939323761},{"x":8.773506252894858,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":-0.18278138026864177},{"x":8.042380731820288,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":9.478803844372393,"y":-1.8278138026864283},{"x":9.504631773969432,"y":-1.8278138026864283}]} />
      <schematicpath points={[{"x":8.747678323297823,"y":-2.558939323761},{"x":8.773506252894858,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":8.042380731820288,"y":-0.11721861973135717},{"x":8.042380731820288,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-8.225162112088931,"y":-0.18278138026864177},{"x":-8.225162112088931,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-8.225162112088931,"y":-1.2794696618804995},{"x":-7.128473830477073,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-7.128473830477073,"y":-1.2794696618804995},{"x":-6.031785548865216,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-1.2794696618804995},{"x":-3.472846225104215,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-3.472846225104215,"y":-1.2794696618804995},{"x":3.4728462251042167,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":3.4728462251042167,"y":-1.2794696618804995},{"x":4.569534506716071,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-8.225162112088931,"y":-0.18278138026864177},{"x":-7.859599351551646,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-2.1933765632237145},{"x":-8.225162112088931,"y":-2.1933765632237145}]} />
      <schematicpath points={[{"x":-8.225162112088931,"y":-2.1933765632237145},{"x":-8.225162112088931,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":3.4728462251042167,"y":-0.7311255210745706},{"x":3.4728462251042167,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-7.128473830477073,"y":-2.1933765632237145},{"x":-7.128473830477073,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-1.6450324224177848},{"x":-6.031785548865216,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-3.472846225104215,"y":-1.8278138026864283},{"x":-3.472846225104215,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":-12.977477999073647,"y":-4.752315886984715},{"x":-12.429133858267718,"y":-4.752315886984715}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":-4.752315886984715},{"x":-12.429133858267718,"y":-4.569534506716072}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":-4.569534506716072},{"x":-11.88078971746179,"y":-4.569534506716072}]} />
      <schematicpath points={[{"x":3.4728462251042167,"y":-0.665562760537286},{"x":3.4728462251042167,"y":-0.7311255210745706}]} />
      <schematicpath points={[{"x":-7.128473830477073,"y":-2.167548633626679},{"x":-7.128473830477073,"y":-2.1933765632237145}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-1.7105951829550712},{"x":-6.031785548865216,"y":-1.6450324224177848}]} />
      <schematicpath points={[{"x":7.128473830477073,"y":-0.18278138026864177},{"x":7.128473830477073,"y":-1.096688281611856}]} />
      <schematicpath points={[{"x":7.128473830477073,"y":-1.096688281611856},{"x":7.128473830477073,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":7.128473830477073,"y":-1.2794696618804995},{"x":6.762911069939786,"y":-1.2794696618804995}]} />
      <schematicpath points={[{"x":7.128473830477073,"y":-0.11721861973135717},{"x":7.128473830477073,"y":-0.18278138026864177}]} />
      <schematicpath points={[{"x":9.321850393700789,"y":-2.558939323761},{"x":10.05297591477536,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":9.347678323297824,"y":-2.558939323761},{"x":9.321850393700789,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":10.118538675312646,"y":-2.558939323761},{"x":10.05297591477536,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":4.203971746178787,"y":7.4940365910143605},{"x":4.203971746178787,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":4.386753126447431,"y":7.859599351551648},{"x":4.203971746178787,"y":7.859599351551648}]} />
      <schematicpath points={[{"x":4.203971746178787,"y":7.859599351551648},{"x":4.203971746178787,"y":7.4940365910143605}]} />
      <schematicpath points={[{"x":4.752315886984714,"y":6.76291106993979},{"x":4.752315886984714,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":4.752315886984714,"y":6.580129689671146},{"x":4.752315886984714,"y":6.397348309402503}]} />
      <schematicpath points={[{"x":3.8384089856415002,"y":6.580129689671146},{"x":3.8384089856415002,"y":6.76291106993979}]} />
      <schematicpath points={[{"x":3.8384089856415002,"y":6.580129689671146},{"x":4.203971746178787,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":4.752315886984714,"y":6.580129689671146},{"x":4.203971746178787,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":3.8384089856415002,"y":6.76291106993979},{"x":3.4728462251042167,"y":6.76291106993979}]} />
      <schematicpath points={[{"x":3.8384089856415002,"y":6.580129689671146},{"x":3.4728462251042167,"y":6.580129689671146}]} />
      <schematicpath points={[{"x":4.452315886984714,"y":7.859599351551648},{"x":4.386753126447431,"y":7.859599351551648}]} />
      <schematicpath points={[{"x":5.1178786475220015,"y":7.859599351551648},{"x":5.483441408059289,"y":7.859599351551648}]} />
      <schematicpath points={[{"x":5.052315886984715,"y":7.859599351551648},{"x":5.1178786475220015,"y":7.859599351551648}]} />
      <schematicpath points={[{"x":5.45761347846225,"y":7.859599351551648},{"x":5.483441408059289,"y":7.859599351551648}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":4.203971746178787},{"x":-0.3655627605372871,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":-1.2794696618805013,"y":4.386753126447431},{"x":-1.2794696618805013,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-1.2794696618805013,"y":4.203971746178787},{"x":-0.9139069013432142,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":4.203971746178787},{"x":-0.3655627605372871,"y":4.386753126447431}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":4.203971746178787},{"x":-0.9139069013432142,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-0.3372186197313578,"y":3.6556276053728585},{"x":-0.3655627605372871,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":-1.2794696618805013,"y":4.4523158869847155},{"x":-1.2794696618805013,"y":4.386753126447431}]} />
      <schematicpath points={[{"x":-0.3655627605372871,"y":4.360925196850394},{"x":-0.3655627605372871,"y":4.386753126447431}]} />
      <schematicpath points={[{"x":0.7311255210745706,"y":3.6556276053728585},{"x":1.0966882816118577,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":3.290064844835573},{"x":1.0966882816118577,"y":3.4728462251042167}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":3.4728462251042167},{"x":1.0966882816118577,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":3.6556276053728585},{"x":1.0966882816118577,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":6.94569245020843},{"x":1.6450324224177848,"y":6.94569245020843}]} />
      <schematicpath points={[{"x":1.0966882816118577,"y":3.4728462251042167},{"x":1.6450324224177848,"y":3.4728462251042167}]} />
      <schematicpath points={[{"x":1.6450324224177848,"y":3.4728462251042167},{"x":1.6450324224177848,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":0.7027813802686431,"y":3.6556276053728585},{"x":0.7311255210745706,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":1.3327147985178343,"y":3.291720704029645},{"x":1.3327147985178343,"y":3.290064844835573}]} />
      <schematicpath points={[{"x":1.3327147985178343,"y":3.290064844835573},{"x":1.0966882816118577,"y":3.290064844835573}]} />
      <schematicpath points={[{"x":1.6450324224177848,"y":3.7115215377489594},{"x":1.6450324224177848,"y":3.6556276053728585}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-2.558939323761},{"x":-6.031785548865216,"y":-2.376157943492357}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-2.5331113941639645},{"x":-6.031785548865216,"y":-2.558939323761}]} />
      <schematicpath points={[{"x":-6.031785548865216,"y":-2.3105951829550717},{"x":-6.031785548865216,"y":-2.376157943492357}]} />
      <schematicpath points={[{"x":9.870194534506716,"y":0.7311255210745724},{"x":8.956287633163502,"y":0.7311255210745724}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":0.5483441408059289},{"x":8.956287633163502,"y":0.7311255210745724}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":0.7311255210745724},{"x":8.956287633163502,"y":0.913906901343216}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":0.574172070402966},{"x":8.956287633163502,"y":0.5483441408059289}]} />
      <schematicpath points={[{"x":8.956287633163502,"y":0.9794696618805006},{"x":8.956287633163502,"y":0.913906901343216}]} />
      <schematicpath points={[{"x":-7.311255210745717,"y":-5.483441408059287},{"x":-8.956287633163504,"y":-5.483441408059287}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-5.483441408059287},{"x":-8.956287633163504,"y":-5.6662227883279295}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-5.117878647522001},{"x":-8.956287633163504,"y":-5.483441408059287}]} />
      <schematicpath points={[{"x":-4.93509726725336,"y":0.5483441408059289},{"x":-4.569534506716073,"y":0.5483441408059289}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-5.731785548865216},{"x":-8.956287633163504,"y":-5.6662227883279295}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-5.052315886984715},{"x":-8.956287633163504,"y":-5.117878647522001}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":6.214566929133859},{"x":-3.290064844835573,"y":6.1231762389995374}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":6.1231762389995374},{"x":-3.290064844835573,"y":5.940394858730896}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":5.940394858730896},{"x":-3.290064844835573,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":5.66622278832793},{"x":-3.290064844835573,"y":5.483441408059289}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":5.849004168596574},{"x":-4.386753126447431,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":6.031785548865216},{"x":-3.381455534969895,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-3.381455534969895,"y":6.031785548865216},{"x":-3.290064844835573,"y":5.940394858730896}]} />
      <schematicpath points={[{"x":-2.5589393237610008,"y":6.031785548865216},{"x":-3.1986741547012514,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-3.1986741547012514,"y":6.031785548865216},{"x":-3.290064844835573,"y":6.1231762389995374}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":5.66622278832793},{"x":-2.5589393237610008,"y":5.66622278832793}]} />
      <schematicpath points={[{"x":-2.5589393237610008,"y":5.66622278832793},{"x":-2.5589393237610008,"y":5.300660027790645}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-4.203971746178786},{"x":-8.956287633163504,"y":-4.386753126447429}]} />
      <schematicpath points={[{"x":-12.977477999073647,"y":-5.117878647522001},{"x":-12.429133858267718,"y":-5.117878647522001}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":-5.117878647522001},{"x":-12.429133858267718,"y":-5.300660027790643}]} />
      <schematicpath points={[{"x":-12.429133858267718,"y":-5.300660027790643},{"x":-10.784101435849932,"y":-5.300660027790643}]} />
      <schematicpath points={[{"x":-10.784101435849932,"y":-5.300660027790643},{"x":-10.784101435849932,"y":-5.117878647522001}]} />
      <schematicpath points={[{"x":-3.290064844835573,"y":5.509269337656324},{"x":-3.290064844835573,"y":5.483441408059289}]} />
      <schematicpath points={[{"x":-4.386753126447431,"y":5.783441408059289},{"x":-4.386753126447431,"y":5.849004168596574}]} />
      <schematicpath points={[{"x":-2.493376563223716,"y":6.031785548865216},{"x":-2.5589393237610008,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-2.5589393237610008,"y":5.23509726725336},{"x":-2.5589393237610008,"y":5.300660027790645}]} />
      <schematicpath points={[{"x":-8.956287633163504,"y":-4.4523158869847155},{"x":-8.956287633163504,"y":-4.386753126447429}]} />
      <schematicpath points={[{"x":1.6450324224177848,"y":6.031785548865216},{"x":-0.5483441408059289,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-0.5766882816118581,"y":6.031785548865216},{"x":-0.5483441408059289,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-7.859599351551646,"y":2.0105951829550737},{"x":-8.225162112088931,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-8.225162112088931,"y":2.0105951829550737},{"x":-8.590724872626218,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-9.139069013432145,"y":1.6450324224177866},{"x":-8.225162112088931,"y":1.6450324224177866}]} />
      <schematicpath points={[{"x":-8.225162112088931,"y":1.6450324224177866},{"x":-8.225162112088931,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-12.977477999073647,"y":-4.569534506716072},{"x":-12.794696618805004,"y":-4.569534506716072}]} />
      <schematicpath points={[{"x":-12.794696618805004,"y":-4.569534506716072},{"x":-12.794696618805004,"y":-4.203971746178786}]} />
      <schematicpath points={[{"x":-12.794696618805004,"y":-4.203971746178786},{"x":-11.88078971746179,"y":-4.203971746178786}]} />
      <schematicpath points={[{"x":-8.656287633163505,"y":2.0105951829550737},{"x":-8.590724872626218,"y":2.0105951829550737}]} />
      <schematicpath points={[{"x":-1.8278138026864301,"y":6.031785548865216},{"x":-1.6450324224177866,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-1.8933765632237147,"y":6.031785548865216},{"x":-1.8278138026864301,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":-1.6166882816118573,"y":6.031785548865216},{"x":-1.6450324224177866,"y":6.031785548865216}]} />
      <schematicpath points={[{"x":4.569534506716071,"y":-2.1933765632237145},{"x":4.569534506716071,"y":-1.6450324224177848}]} />
      <schematicpath points={[{"x":-9.687413154238076,"y":4.203971746178787},{"x":-9.504631773969432,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-9.687413154238076,"y":4.93509726725336},{"x":-9.504631773969432,"y":4.93509726725336}]} />
      <schematicpath points={[{"x":-9.504631773969432,"y":4.93509726725336},{"x":-9.504631773969432,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-9.715757295044003,"y":4.203971746178787},{"x":-9.687413154238076,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-9.439069013432146,"y":4.203971746178787},{"x":-9.504631773969432,"y":4.203971746178787}]} />
      <schematicpath points={[{"x":-9.75297591477536,"y":4.93509726725336},{"x":-9.687413154238076,"y":4.93509726725336}]} />
      </symbol>} />
        </board>
      )
      export default Lm5155EvmFly"
    `)
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

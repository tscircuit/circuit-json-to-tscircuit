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
      "export default () => (
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
      <fabricationnotetext pcbX={40.439797199999994} pcbY={49.8505988} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={20.243700939999997} pcbY={51.842136599999996} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={99.49170093999999} pcbY={61.0115366} anchorAlignment="center" text="TP2" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={45.00870094} pcbY={40.5899366} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={20.243700939999997} pcbY={66.5741366} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={99.49170093999999} pcbY={46.254136599999995} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={23.418799999999997} pcbY={100.1776} anchorAlignment="center" text="Install label in silkscreened box after final wash.  Text shall be 8 pt font.  Text shall be per the Label Table in the PDF schematic." font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={49.94079928} pcbY={50.42760044} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={60.5217992} pcbY={60.47760066} anchorAlignment="center" text="T1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={36.60579928} pcbY={56.77760044} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={84.21779955999999} pcbY={40.491999279999995} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={80.33580072} pcbY={66.10759956} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={91.72379928} pcbY={57.15860044} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={36.60579928} pcbY={51.06260044} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={67.59379928} pcbY={42.42660044} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={33.936800299999994} pcbY={45.26859628} anchorAlignment="center" text="Q2" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
      <fabricationnotetext pcbX={49.80580082} pcbY={53.977600960000004} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={74.47279999999999} pcbY={51.9176} anchorAlignment="center" text="TP9" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
      <fabricationnotetext pcbX={30.657799999999998} pcbY={58.7756} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
      <fabricationnotetext pcbX={27.998801} pcbY={50.107601079999995} anchorAlignment="center" text="J4" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={50.8298196} pcbY={53.952373679999994} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={36.55499928} pcbY={53.72960044} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={42.39979582} pcbY={50.49959928} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={41.69279698} pcbY={43.21259836} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={42.39979582} pcbY={53.54759928} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={38.09479554} pcbY={46.74460044} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={37.120796979999994} pcbY={43.120599559999995} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={47.3964} pcbY={68.3514} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.889} color="#ec4899" />
      <fabricationnotetext pcbX={47.3964} pcbY={72.4252044} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.889} color="#ec4899" />
      <fabricationnotetext pcbX={47.3964} pcbY={70.3834} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.889} color="#ec4899" />
      <fabricationnotetext pcbX={33.76379582} pcbY={48.72159928} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={39.61879554} pcbY={45.312599240000004} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={35.863796699999995} pcbY={50.795600719999996} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={39.958599279999994} pcbY={56.16800044} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={35.59679697999999} pcbY={51.50259956} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={42.39979582} pcbY={48.97559928} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={44.4997967} pcbY={48.00160072} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={51.636800459999996} pcbY={70.5676008} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.8128} color="#ec4899" />
      <fabricationnotetext pcbX={32.85080044} pcbY={53.46260071999999} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={74.95979928} pcbY={47.12560044} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={73.98580071999999} pcbY={42.48559956} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={73.42279956} pcbY={41.22859928} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={68.15680044} pcbY={47.493600719999996} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={68.14380071999999} pcbY={43.89660004} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={75.36779947999999} pcbY={61.44559974} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={71.81179947999999} pcbY={61.44559974} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={78.00779928} pcbY={61.09560044} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={21.6408} pcbY={62.8396} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={32.562799999999996} pcbY={68.6816} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={89.08880074} pcbY={65.30360066} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={38.73000636} pcbY={51.93040414} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
      <fabricationnotetext pcbX={70.69579968} pcbY={46.06160206} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.508} color="#ec4899" />
      <fabricationnotetext pcbX={74.210799} pcbY={63.83360105999999} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={65.05379928} pcbY={42.55360044} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={62.42779996} pcbY={43.34860012} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={1.143} color="#ec4899" />
      <fabricationnotetext pcbX={43.77079892} pcbY={61.88559886} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={1.8499988399999998} color="#ec4899" />
      <fabricationnotetext pcbX={98.6028} pcbY={54.203599999999994} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={47.403628839999996} pcbY={74.60929959999999} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.8128} color="#ec4899" />
      <fabricationnotetext pcbX={42.41142901999999} pcbY={52.02359928} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={37.975496820000004} pcbY={55.38060044} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={42.39979582} pcbY={45.927599279999995} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={84.49479926} pcbY={56.057599339999996} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={70.41280049999999} pcbY={42.403600739999995} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={0.8000009399999999} color="#ec4899" />
      <fabricationnotetext pcbX={45.681999059999995} pcbY={58.347000400000006} anchorAlignment="bottom_left" text="TP5" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={62.377800060000006} pcbY={53.052598999999994} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={62.377800060000006} pcbY={78.579599} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={57.1246} pcbY={75.2602} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={81.85980072} pcbY={66.10759956} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={47.56099708} pcbY={55.27965576} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={40.31579948} pcbY={64.74759974} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={69.26280025999999} pcbY={70.84659948} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={53.84379884} pcbY={74.64259899999999} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={74.15519585999999} pcbY={68.5338101} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
      <fabricationnotetext pcbX={66.61980071999999} pcbY={43.89660004} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
      <fabricationnotetext pcbX={54.46380014} pcbY={52.4836009} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
      <fabricationnotetext pcbX={48.214399379999996} pcbY={51.01260054} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={73.98580071999999} pcbY={45.025599559999996} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
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
      <schematicpath svgPath={"M1.096688 1.096688L1.096688 0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.096688 0.365563L1.096688 0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.645032 0.365563L1.096688 0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753 4.02119L-4.386753 3.838409"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 4.935097L-3.290065 4.386753-3.290065 3.838409-4.386753 3.838409"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 3.655628L-3.290065 3.838409"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 4.386753L-2.558939 4.386753-2.558939 4.569535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.698008 5.666223L-11.515227 5.666223-10.052976 5.666223-8.956288 5.666223-8.042381 5.666223-6.945692 5.666223-6.031786 5.666223-6.031786 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.708604 6.214567L-12.429134 6.214567-12.429134 5.666223-11.698008 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.042381 6.031786L-8.042381 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.945692 6.031786L-6.945692 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976 6.031786L-10.052976 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288 6.031786L-8.956288 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.515227 5.30066L-11.515227 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.429134 5.666223L-12.429134 5.30066"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.365563-5.483441L0.365563-4.935097 1.27947-4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.645032 5.30066L1.462251 5.30066 1.462251 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097 0L-4.569535 0-4.569535 0.182781-2.924502 0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097 1.27947L-2.924502 1.27947-2.924502 0.731126-2.924502 0.182781-2.924502-0.182781-3.290065-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.924502-0.182781L-2.924502-0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.913907 1.096688L-0.913907 0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.924502 0.731126L-0.913907 0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.977478-5.30066L-12.794697-5.30066-12.794697-5.666223-10.784101-5.666223-10.784101-6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.569535-2.924502L4.569535-3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-3.290065L-6.031786-3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-3.290065L-7.128474-3.290065-7.128474-2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-3.655628L-6.031786-3.290065"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.096688 1.162251L1.096688 1.096688"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753 3.995362L-4.386753 4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 4.909269L-3.290065 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.558939 4.635097L-2.558939 4.569535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786 6.069931L-6.031786 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.042381 6.005958L-8.042381 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.945692 6.005958L-6.945692 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976 6.005958L-10.052976 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288 6.005958L-8.956288 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.429134 5.244766L-12.429134 5.30066"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.253642-4.935097L1.27947-4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.913907 1.07086L-0.913907 1.096688"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-3.133111L-6.031786-3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.128474-2.767549L-7.128474-2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.590725 3.447018L-8.590725 3.472846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.182781 2.010595L-0.913907 2.010595-0.913907 1.645032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.193377 2.010595L-0.913907 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.117219 2.010595L-0.182781 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.913907 1.67086L-0.913907 1.645032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.258939 2.010595L-2.193377 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.365563 2.741721L-2.193377 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.612715 2.641721L0.365563 2.641721 0.365563 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.258939 2.741721L-2.193377 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.096688 2.193377L1.096688 1.827814"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.096688 1.827814L0.913907 2.010595 0.548344 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.342715 2.191721L1.342715 2.193377 1.096688 2.193377"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.096688 1.762251L1.096688 1.827814"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.482781 2.010595L0.548344 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.655628 2.010595L-4.935097 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.655628 2.010595L-2.924502 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.858939 2.010595L-2.924502 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.924502 2.741721L-4.203972 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097 2.924502L-4.203972 2.924502-4.203972 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.858939 2.741721L-2.924502 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097 4.752316L-4.386753 4.752316-4.386753 4.569535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097 3.472846L-4.935097 4.752316-4.935097 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753 4.752316L-4.386753 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.472846 0L3.472846 0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.32185 2.010595L-9.687413 2.010595-9.687413 2.193377"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753 4.595362L-4.386753 4.569535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753 5.183441L-4.386753 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.472846-0.065563L3.472846 0"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.256288 2.010595L-9.32185 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.182781 6.945692L-0.365563 6.945692-6.031786 6.945692-6.945692 6.945692-8.042381 6.945692-8.956288 6.945692-10.052976 6.945692-10.60132 6.945692-10.966883 6.945692-12.429134 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.966883 3.838409L-10.966883 4.203972-10.966883 4.569535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.966883 4.569535L-10.966883 4.935097-10.966883 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.365563 5.666223L-0.365563 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.365563 5.30066L-0.365563 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.913907 5.30066L-0.365563 5.30066-0.365563 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.913907 5.30066L-1.27947 5.30066-1.27947 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.645032 6.214567L0.731126 6.214567 0.731126 6.945692-0.182781 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.429134 6.945692L-12.429134 6.397348-13.708604 6.397348"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786 6.58013L-6.031786 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.945692 6.58013L-6.945692 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.042381 6.58013L-8.042381 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288 6.58013L-8.956288 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976 6.58013L-10.052976 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.429134 6.945692L-12.429134 7.311255"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.784101 4.203972L-10.966883 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.60132 7.311255L-10.60132 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.418539 4.935097L-10.966883 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.365563-3.838409L0.365563-4.02119 1.27947-4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.966883 3.772846L-10.966883 3.838409"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.365563 4.960925L-0.365563 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.27947 5.052316L-1.27947 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786 6.669931L-6.031786 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.945692 6.605958L-6.945692 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.042381 6.605958L-8.042381 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288 6.605958L-8.956288 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976 6.605958L-10.052976 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.429134 7.367149L-12.429134 7.311255"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.755757 4.203972L-10.784101 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.352976 4.935097L-10.418539 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.253642-4.02119L1.27947-4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.698008-0.182781L-11.698008-0.731126-10.966883-0.731126-10.784101-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.966883-0.365563L-10.966883-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976-0.731126L-10.784101-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976-0.365563L-10.052976-0.731126-8.956288-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-0.182781L-8.956288-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-1.096688L-8.956288-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.569535-0.548344L-4.569535-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097-0.182781L-4.569535-0.182781-4.02119-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.203972-0.731126L-4.203972-0.548344-4.569535-0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.203972-0.731126L-4.02119-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-6.58013L-8.956288-6.397348"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.472846-3.655628L-3.472846-2.924502"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.698008-0.208609L-11.698008-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.966883-0.3L-10.966883-0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976-0.3L-10.052976-0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-0.208609L-8.956288-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.965296-0.731126L-4.02119-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-6.331786L-8.956288-6.397348"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.698008 0.365563L-11.698008 2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.859599 2.741721L-10.966883 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.698008 2.558939L-10.966883 2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.966883 0.365563L-10.966883 2.558939-10.966883 2.741721-10.966883 3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.698008 0.391391L-11.698008 0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.966883 0.3L-10.966883 0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.966883 3.172846L-10.966883 3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.859599 1.27947L-10.052976 1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976 0.365563L-10.052976 1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976 0.3L-10.052976 0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.859599 0.548344L-8.956288 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288 0.548344L-8.956288 0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.139069 0.548344L-8.956288 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.977478-4.935097L-11.88079-4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753-2.376158L-4.02119-2.376158"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288 0.391391L-8.956288 0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.773506 4.203972L-8.590725 4.203972-8.590725 4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.590725 4.203972L-7.859599 4.203972-7.859599 3.472846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.839069 4.203972L-8.773506 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.590725 4.047018L-8.590725 4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.214567 6.58013L6.397348 6.58013 6.58013 6.58013 7.311255 6.58013 8.042381 6.58013 8.225162 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.225162 6.58013L8.773506 6.58013 9.139069 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.139069 6.58013L9.139069 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.031786 7.859599L6.397348 7.859599 6.397348 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.58013 6.214567L6.58013 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255 6.214567L7.311255 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381 6.214567L8.042381 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.773506 6.214567L8.773506 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.504632 6.214567L9.504632 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.418539 6.214567L10.418539 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.139069 6.58013L9.504632 6.58013 10.418539 6.58013 11.332446 6.58013 11.515227 6.58013 12.246352 6.58013 13.160259 6.58013 13.160259 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.515227 6.762911L11.515227 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.246352 6.214567L12.246352 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.332446 6.214567L11.332446 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079 3.472846L11.88079 3.655628 11.88079 3.838409"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.429134 3.655628L11.88079 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.057613 7.859599L6.031786 7.859599"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.58013 6.304368L6.58013 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255 6.304368L7.311255 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381 6.240395L8.042381 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.773506 6.240395L8.773506 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.504632 6.240395L9.504632 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.418539 6.240395L10.418539 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.515227 6.818805L11.515227 6.762911"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.246352 6.240395L12.246352 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.332446 6.240395L11.332446 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079 3.407283L11.88079 3.472846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.485028 3.655628L12.429134 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.397348 5.117879L6.58013 5.117879 7.311255 5.117879 8.042381 5.117879 8.773506 5.117879 8.956288 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.472846 5.849004L3.838409 5.849004 3.838409 5.666223 3.838409 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.838409 5.117879L3.838409 4.752316"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.397348 5.117879L3.838409 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.58013 5.666223L6.58013 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255 5.666223L7.311255 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381 5.666223L8.042381 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.773506 5.666223L8.773506 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.504632 5.666223L9.504632 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.418539 5.666223L10.418539 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.160259 5.849004L13.160259 5.117879 12.246352 5.117879 11.515227 5.117879 11.332446 5.117879 10.418539 5.117879 9.504632 5.117879 8.956288 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.472846 5.666223L3.838409 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.515227 5.117879L11.515227 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.332446 5.666223L11.332446 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.246352 5.666223L12.246352 5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-4.203972L11.88079-4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255-4.203972L7.311255-4.02119 7.311255-3.472846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.859599-4.02119L7.311255-4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288 0L8.956288-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.827814-4.935097L2.558939-4.935097 2.558939-5.483441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.827814-4.02119L2.558939-4.02119 2.558939-4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.58013 5.704368L6.58013 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255 5.704368L7.311255 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381 5.640395L8.042381 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.773506 5.640395L8.773506 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.504632 5.640395L9.504632 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.418539 5.640395L10.418539 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.515227 4.879203L11.515227 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.332446 5.640395L11.332446 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.246352 5.640395L12.246352 5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-3.955628L11.88079-4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.207943-4.02119L7.859599-4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288-0.025828L8.956288 0"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.853642-4.935097L1.827814-4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.853642-4.02119L1.827814-4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079 2.010595L11.88079-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.128474 0.913907L7.128474 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.128474 0.913907L7.128474 2.010595 8.042381 2.010595 8.956288 2.010595 10.418539 2.010595 11.88079 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079 2.741721L11.88079 2.558939 11.88079 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.429134 2.558939L11.88079 2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288 1.645032L8.956288 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.418539 1.462251L10.418539 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381 0.548344L8.042381 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-0.796688L11.88079-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.128474 0.482781L7.128474 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079 2.807283L11.88079 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.485028 2.558939L12.429134 2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288 1.57947L8.956288 1.645032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381 0.482781L8.042381 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-3.107283L11.88079-3.290065"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.784101-2.558939L11.515227-2.558939 11.515227-3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-1.462251L11.88079-3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.052976-1.827814L11.515227-1.827814 11.515227-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.515227-3.107283L11.88079-3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.515227-3.107283L7.676818-3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-3.355628L11.88079-3.290065"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.718539-2.558939L10.784101-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-1.396688L11.88079-1.462251"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.078804-1.827814L10.052976-1.827814"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255-2.376158L7.311255-2.558939 7.311255-2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255-2.376158L7.311255-1.645032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255-1.645032L6.762911-1.645032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381-1.27947L8.042381-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.407943-2.558939L8.042381-2.558939 7.311255-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381-1.27947L10.418539-1.27947 10.418539 0"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.504632-1.827814L8.407943-1.827814 8.407943-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.407943-2.558939L8.773506-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381-0.182781L8.042381-1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.478804-1.827814L9.504632-1.827814"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.747678-2.558939L8.773506-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381-0.117219L8.042381-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.225162-0.182781L-8.225162-1.27947-7.128474-1.27947-6.031786-1.27947-3.472846-1.27947 3.472846-1.27947 4.569535-1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.225162-0.182781L-7.859599-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-2.193377L-8.225162-2.193377-8.225162-1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.472846-0.731126L3.472846-1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.128474-2.193377L-7.128474-1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-1.645032L-6.031786-1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.472846-1.827814L-3.472846-1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.977478-4.752316L-12.429134-4.752316-12.429134-4.569535-11.88079-4.569535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.472846-0.665563L3.472846-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.128474-2.167549L-7.128474-2.193377"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-1.710595L-6.031786-1.645032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.128474-0.182781L7.128474-1.096688"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.128474-1.096688L7.128474-1.27947 6.762911-1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.128474-0.117219L7.128474-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.32185-2.558939L10.052976-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.347678-2.558939L9.32185-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.118539-2.558939L10.052976-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.203972 7.494037L4.203972 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.386753 7.859599L4.203972 7.859599 4.203972 7.494037"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.752316 6.762911L4.752316 6.58013 4.752316 6.397348"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.838409 6.58013L3.838409 6.762911"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.838409 6.58013L4.203972 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.752316 6.58013L4.203972 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.838409 6.762911L3.472846 6.762911"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.838409 6.58013L3.472846 6.58013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.452316 7.859599L4.386753 7.859599"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.117879 7.859599L5.483441 7.859599"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.052316 7.859599L5.117879 7.859599"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.457613 7.859599L5.483441 7.859599"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.365563 4.203972L-0.365563 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.27947 4.386753L-1.27947 4.203972-0.913907 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.365563 4.203972L-0.365563 4.386753"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.365563 4.203972L-0.913907 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.337219 3.655628L-0.365563 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.27947 4.452316L-1.27947 4.386753"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.365563 4.360925L-0.365563 4.386753"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.731126 3.655628L1.096688 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.096688 3.290065L1.096688 3.472846 1.096688 3.655628 1.096688 6.945692 1.645032 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.096688 3.472846L1.645032 3.472846 1.645032 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.702781 3.655628L0.731126 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.332715 3.291721L1.332715 3.290065 1.096688 3.290065"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.645032 3.711522L1.645032 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-2.558939L-6.031786-2.376158"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-2.533111L-6.031786-2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-2.310595L-6.031786-2.376158"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.870195 0.731126L8.956288 0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288 0.548344L8.956288 0.731126 8.956288 0.913907"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288 0.574172L8.956288 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288 0.97947L8.956288 0.913907"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.311255-5.483441L-8.956288-5.483441-8.956288-5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-5.117879L-8.956288-5.483441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097 0.548344L-4.569535 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-5.731786L-8.956288-5.666223"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-5.052316L-8.956288-5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 6.214567L-3.290065 6.123176-3.290065 5.940395-3.290065 5.666223-3.290065 5.483441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753 5.849004L-4.386753 6.031786-3.381456 6.031786-3.290065 5.940395"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.558939 6.031786L-3.198674 6.031786-3.290065 6.123176"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 5.666223L-2.558939 5.666223-2.558939 5.30066"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-4.203972L-8.956288-4.386753"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.977478-5.117879L-12.429134-5.117879-12.429134-5.30066-10.784101-5.30066-10.784101-5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 5.509269L-3.290065 5.483441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753 5.783441L-4.386753 5.849004"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.493377 6.031786L-2.558939 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.558939 5.235097L-2.558939 5.30066"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-4.452316L-8.956288-4.386753"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.645032 6.031786L-0.548344 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.576688 6.031786L-0.548344 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.859599 2.010595L-8.225162 2.010595-8.590725 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.139069 1.645032L-8.225162 1.645032-8.225162 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.977478-4.569535L-12.794697-4.569535-12.794697-4.203972-11.88079-4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.656288 2.010595L-8.590725 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.827814 6.031786L-1.645032 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.893377 6.031786L-1.827814 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.616688 6.031786L-1.645032 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.569535-2.193377L4.569535-1.645032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.687413 4.203972L-9.504632 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.687413 4.935097L-9.504632 4.935097-9.504632 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.715757 4.203972L-9.687413 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.439069 4.203972L-9.504632 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.752976 4.935097L-9.687413 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-12.42913385826772,"y":5.66622278832793}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.515226956924504,"y":5.66622278832793}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.05297591477536,"y":5.66622278832793}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.956287633163505,"y":5.66622278832793}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.042380731820288,"y":5.66622278832793}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.945692450208433,"y":5.66622278832793}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.031785548865216,"y":-3.290064844835573}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.290064844835573,"y":3.838408985641503}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.290064844835573,"y":4.386753126447431}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-2.9245020842982896,"y":-0.18278138026864177}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-2.9245020842982896,"y":0.18278138026864355}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-2.9245020842982896,"y":0.7311255210745724}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.0966882816118577,"y":0.3655627605372853}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.9139069013432142,"y":2.0105951829550737}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.0966882816118577,"y":1.8278138026864301}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.0966882816118577,"y":2.1933765632237154}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.935097267253358,"y":4.752315886984716}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.386753126447431,"y":4.752315886984716}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-12.42913385826772,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.966882816118575,"y":4.203971746178787}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.966882816118575,"y":4.93509726725336}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.966882816118575,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.60132005558129,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.05297591477536,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.956287633163505,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.042380731820288,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.945692450208433,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.031785548865216,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.3655627605372871,"y":5.300660027790645}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.3655627605372871,"y":6.94569245020843}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.966882816118575,"y":-0.7311255210745706}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.05297591477536,"y":-0.7311255210745706}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.956287633163505,"y":-0.7311255210745706}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.569534506716071,"y":-0.5483441408059271}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.569534506716071,"y":-0.18278138026864177}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.966882816118575,"y":2.5589393237610008}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.966882816118575,"y":2.7417207040296443}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.956287633163505,"y":0.5483441408059289}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.590724872626218,"y":4.203971746178787}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.397348309402503,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.580129689671143,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.311255210745717,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.042380731820288,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.773506252894858,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.139069013432145,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.504631773969432,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.418538675312647,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.332445576655857,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.515226956924508,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.880789717461788,"y":3.6556276053728585}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.246352477999075,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.558939323760999,"y":-4.935097267253358}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.8384089856415002,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.8384089856415002,"y":5.66622278832793}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.580129689671143,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.311255210745717,"y":-4.021190365910144}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.311255210745717,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.042380731820288,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.773506252894858,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.504631773969432,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.418538675312647,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.332445576655857,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.515226956924508,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.246352477999075,"y":5.1178786475220015}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.042380731820288,"y":2.0105951829550737}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.956287633163502,"y":2.0105951829550737}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.418538675312647,"y":2.0105951829550737}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.880789717461788,"y":2.0105951829550737}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.880789717461788,"y":2.5589393237610008}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.515226956924508,"y":-3.1072834645669296}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.515226956924508,"y":-2.5589393237610008}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.880789717461788,"y":-3.1072834645669296}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.311255210745717,"y":-2.5589393237610008}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.042380731820288,"y":-2.5589393237610008}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.042380731820288,"y":-1.2794696618804995}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.407943492357575,"y":-2.5589393237610008}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.225162112088933,"y":-1.2794696618804995}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.128473830477073,"y":-1.2794696618804995}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.031785548865216,"y":-1.2794696618804995}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.472846225104213,"y":-1.2794696618804995}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.4728462251042203,"y":-1.2794696618804995}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.8384089856415002,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.203971746178787,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.752315886984714,"y":6.580129689671146}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.3655627605372871,"y":4.203971746178787}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.0966882816118577,"y":3.290064844835573}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.0966882816118577,"y":3.4728462251042167}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.0966882816118577,"y":3.6556276053728585}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.956287633163502,"y":0.7311255210745724}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.956287633163505,"y":-5.483441408059287}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.290064844835573,"y":5.66622278832793}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.290064844835573,"y":5.940394858730896}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.290064844835573,"y":6.1231762389995374}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.225162112088933,"y":2.0105951829550737}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-9.504631773969432,"y":4.203971746178787}} radius={0.03} strokeWidth={0.031605671993175426} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematicpath svgPath={"M8.407943-9.139069L13.160259-9.139069"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M15.170855-9.504632L8.407943-9.504632"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.407943-9.139069L13.160259-9.139069"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.042381-9.139069L5.666223-9.139069"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.160259-9.32185L8.407943-9.32185"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.332446-8.590725L11.332446-8.773506"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.407943-8.956288L13.160259-8.956288"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.407943-9.687413L8.407943-8.590725 15.170855-8.590725"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-9.139069L11.88079-9.32185"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.160259-9.504632L13.160259-8.590725"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223-9.687413L5.666223-8.590725"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223-9.504632L8.407943-9.504632"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.407943-9.32185L5.666223-9.32185"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.246352-9.32185L12.246352-9.504632"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.407943-8.773506L13.160259-8.773506"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223-9.139069L8.407943-9.139069"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.042381-9.139069L-8.042381-9.687413"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223-8.956288L8.407943-8.956288"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.494037-8.956288L7.494037-9.139069"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223-8.773506L8.407943-8.773506"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223-8.590725L8.407943-8.590725"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematictext text={"Symbol not found: n_channel_e_mosfet_transistor_gate_left_drain_top"} schX={1.0327147985178335} schY={2.7417207040296443} fontSize={0.05} color={"red"} anchor="center" schRotation={0} />
      <schematicpath svgPath={"M-2.01803 2.718993L-2.170758 2.718993"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.459848 2.718993L-2.61803 2.718993"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.31803 2.648084L-2.459848 2.648084-2.459848 2.795357-2.170758 2.795357-2.170758 2.648084-2.31803 2.648084"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R8"} schX={-2.307121141942819} schY={2.8550599858478263} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-2.307121141942819} schY={2.599290513120553} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M0.72369 1.987868L0.570963 1.987868"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.281872 1.987868L0.12369 1.987868"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.42369 1.916959L0.281872 1.916959 0.281872 2.064232 0.570963 2.064232 0.570963 1.916959 0.42369 1.916959"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R11"} schX={0.4345995620868237} schY={2.1239344647732556} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"100"} schX={0.4345995620868237} schY={1.8681649920459833} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.913907 0.811769L-0.913907 1.073588"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.913907 1.16086L-0.913907 1.411769"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.772089 1.073588L-1.06118 1.073588"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.772089 1.16086L-1.06118 1.16086"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C19"} schX={-0.8620887195250333} schY={1.2208603520148236} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"470pF"} schX={-0.8620887195250333} schY={1.002678533833004} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-2.01803 1.987868L-2.170758 1.987868"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.459848 1.987868L-2.61803 1.987868"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.31803 1.916959L-2.459848 1.916959-2.459848 2.064232-2.170758 2.064232-2.170758 1.916959-2.31803 1.916959"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R10"} schX={-2.307121141942819} schY={2.1239344647732556} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-2.307121141942819} schY={1.8681649920459824} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.386753 4.336272L-4.386753 4.074453"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.386753 3.987181L-4.386753 3.736272"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.528571 4.074453L-4.23948 4.074453"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.528571 3.987181L-4.23948 3.987181"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C17"} schX={-4.324025853720158} schY={4.14536243631311} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1uF"} schX={-4.324025853720158} schY={3.927180618131291} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-10.975974 2.900119L-10.975974 3.052846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.975974 3.341937L-10.975974 3.500119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.046883 3.200119L-11.046883 3.341937-10.89961 3.341937-10.89961 3.052846-11.046883 3.052846-11.046883 3.200119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R6"} schX={-10.823543534300395} schY={3.2764825887405813} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"100k"} schX={-10.823543534300395} schY={3.1019371341951256} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-10.975974-0.572727L-10.975974-0.42"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.975974-0.130909L-10.975974 0.027273"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.046883-0.272727L-11.046883-0.130909-10.89961-0.130909-10.89961-0.42-11.046883-0.42-11.046883-0.272727"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R16"} schX={-10.823543534300395} schY={-0.1963636363636354} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"9.76k"} schX={-10.823543534300395} schY={-0.3709090909090911} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-11.698008-0.4677L-11.698008-0.205882"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.698008-0.118609L-11.698008 0.1323"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.55619-0.205882L-11.845281-0.205882"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.55619-0.118609L-11.845281-0.118609"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C21"} schX={-11.646190155374967} schY={-0.05860930986567858} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"220pF"} schX={-11.646190155374967} schY={-0.2767911280474973} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-3.855628 0.017219h0.4v-0.4h-0.4Z"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"NT1"} schX={-3.8556276053728595} schY={0.1472186197313583} fontSize={0.18000000000000002} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Net-Tie"} schX={-3.8556276053728595} schY={-0.5127813802686418} fontSize={0.18000000000000002} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-3.838409-0.182781L-4.02119-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-3.929799675775822} schY={-0.1627813802686422} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-3.472846-0.182781L-3.290065-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={-3.381455534969895} schY={-0.1627813802686422} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-10.062067-0.572727L-10.062067-0.42"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.062067-0.130909L-10.062067 0.027273"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.132976-0.272727L-10.132976-0.130909-9.985703-0.130909-9.985703-0.42-10.132976-0.42-10.132976-0.272727"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R17"} schX={-9.909636632957177} schY={-0.1963636363636354} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"86.6k"} schX={-9.909636632957177} schY={-0.3709090909090911} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-8.956288-0.4677L-8.956288-0.205882"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-0.118609L-8.956288 0.1323"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.814469-0.205882L-9.10356-0.205882"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.814469-0.118609L-9.10356-0.118609"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C22"} schX={-8.904469451345323} schY={-0.05860930986567858} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.01uF"} schX={-8.904469451345323} schY={-0.2767911280474973} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-8.59816 4.181244L-8.750887 4.181244"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.039978 4.181244L-9.19816 4.181244"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.89816 4.110335L-9.039978 4.110335-9.039978 4.257608-8.750887 4.257608-8.750887 4.110335-8.89816 4.110335"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R5"} schX={-8.887250831613965} schY={4.317311027996969} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-8.887250831613965} schY={4.061541555269698} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-8.590725 3.187927L-8.590725 3.449746"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.590725 3.537018L-8.590725 3.787927"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.448907 3.449746L-8.737998 3.449746"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.448907 3.537018L-8.737998 3.537018"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C18"} schX={-8.538906690808036} schY={3.5970182955071808} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-8.538906690808036} schY={3.378836477325362} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-6.031786 5.81084L-6.031786 6.072658"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786 6.159931L-6.031786 6.41084"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.889967 6.072658L-6.179058 6.072658"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.889967 6.159931L-6.179058 6.159931"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C2"} schX={-5.979967367047035} schY={6.219931102362207} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"100uF"} schX={-5.979967367047035} schY={6.001749284180388} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M5.117879 6.945692h0.731125v-0.731125h-0.731125Z"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M5.337216 6.397348L5.629667 6.58013 5.337216 6.762911"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M5.117879 6.762911L4.752316 6.762911"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.849004 6.58013L6.214567 6.58013"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.117879 6.397348L4.752316 6.397348"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223 6.58013L5.30066 6.58013"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.629667 6.397348L5.629667 6.762911"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.629667 6.397348L5.666223 6.397348"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223 6.397348L5.666223 6.433905"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.629667 6.762911L5.59311 6.762911"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.59311 6.762911L5.59311 6.726355"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.30066 6.762911L5.117879 6.762911"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.30066 6.397348L5.117879 6.397348"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.30066 6.397348L5.30066 6.762911"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.666223 6.58013L5.849004 6.58013"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.138672-2.907283h0.4v-0.4h-0.4Z"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U3"} schX={7.138672417786012} schY={-2.7772834645669295} fontSize={0.18000000000000002} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"LMV431BIMF/NOPB"} schX={7.138672417786012} schY={-3.4372834645669297} fontSize={0.18000000000000002} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M7.494037-3.107283L7.676818-3.107283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={7.585427281148679} schY={-3.0872834645669283} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M7.311255-2.924502L7.311255-2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={7.291255210745721} schY={-2.8331113941639643} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematicpath svgPath={"M7.311255-3.290065L7.311255-3.472846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={7.291255210745719} schY={-3.381455534969895} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematicpath svgPath={"M11.871699-1.669416L11.871699-1.516688"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.871699-1.227597L11.871699-1.069416"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.80079-1.369416L11.80079-1.227597 11.948062-1.227597 11.948062-1.516688 11.80079-1.516688 11.80079-1.369416"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R19"} schX={12.024128999279974} schY={-1.2930519179754931} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30.0k"} schX={12.024128999279974} schY={-1.467597372520947} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M3.463755-0.93829L3.463755-0.785563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.463755-0.496472L3.463755-0.33829"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.392846-0.63829L3.392846-0.496472 3.540119-0.496472 3.540119-0.785563 3.392846-0.785563 3.392846-0.63829"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R18"} schX={3.6161855069224025} schY={-0.5619263969009225} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"4.99k"} schX={3.6161855069224025} schY={-0.7364718514463764} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M6.305958-1.37086L6.013507-1.37086 6.159733-1.517085"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M6.013507-1.535364L6.013507-1.553642 6.305958-1.553642 6.305958-1.535364"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M5.830726-1.498807L5.79417-1.498807 5.79417-1.462251"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M5.922117-1.498807L5.88556-1.498807 5.88556-1.462251"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M5.264104-1.626754L5.245826-1.626754 5.245826-1.297748 5.264104-1.297748"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M5.172713-1.626754L5.136157-1.590198 5.136157-1.626754"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M6.397348-1.27947L6.762911-1.27947"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.397348-1.645032L6.762911-1.645032"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.935097-1.27947L4.569535-1.27947"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.935097-1.645032L4.569535-1.645032"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.264104-1.389138L5.117879-1.27947"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.88556-1.498807L5.995229-1.389138"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.79417-1.498807L5.903839-1.389138"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.245826-1.517085L5.117879-1.645032"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.935097-1.27947L4.935097-1.827814"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.159733-1.27947L6.159733-1.645032"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.397348-1.27947L6.397348-1.827814"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.397348-1.827814L4.935097-1.827814"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.159733-1.27947L6.397348-1.27947"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.159733-1.645032L6.397348-1.645032"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.397348-1.096688L4.935097-1.096688"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.935097-1.27947L4.935097-1.096688"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.397348-1.27947L6.397348-1.096688"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.935097-1.645032L5.117879-1.645032"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.117879-1.27947L4.935097-1.27947"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-3.392202L-6.031786-3.130384"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.031786-3.043111L-6.031786-2.792202"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.889967-3.130384L-6.179058-3.130384"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.889967-3.043111L-6.179058-3.043111"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C26"} schX={-5.979967367047035} schY={-2.9831113941639646} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.22uF"} schX={-5.979967367047035} schY={-3.2012932123457833} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M7.119383-0.389946L7.119383-0.237219"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.119383 0.051872L7.119383 0.210054"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.048474-0.089946L7.048474 0.051872 7.195747 0.051872 7.195747-0.237219 7.048474-0.237219 7.048474-0.089946"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R14"} schX={7.271813112295256} schY={-0.013582256094991862} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"1.00k"} schX={7.271813112295256} schY={-0.18812771064044753} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.597678-2.56803L9.33586-2.56803"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.248587-2.56803L8.997678-2.56803"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.33586-2.426212L9.33586-2.715303"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.248587-2.426212L9.248587-2.715303"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C24"} schX={9.29222377784328} schY={-2.34984841467009} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.22uF"} schX={9.297678323297824} schY={-2.808030232851909} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M10.959448-2.581667L10.80672-2.581667"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.51763-2.581667L10.359448-2.581667"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.659448-2.652576L10.51763-2.652576 10.51763-2.505303 10.80672-2.505303 10.80672-2.652576 10.659448-2.652576"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R21"} schX={10.670356857130827} schY={-2.445600041942818} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1.00k"} schX={10.670356857130827} schY={-2.7013695146700893} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M6.307613 7.850508L6.045795 7.850508"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.958523 7.850508L5.707613 7.850508"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.045795 7.992327L6.045795 7.703236"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.958523 7.992327L5.958523 7.703236"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C1"} schX={6.002158933007706} schY={8.068690260642558} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"680pF"} schX={6.00761347846225} schY={7.6105084424607385} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M0.322781 3.655628L0.062781 3.525628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.062781 3.795628L0.322781 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.062781 3.525628L0.062781 3.795628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.322781 3.795628L0.322781 3.525628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.062781 3.655628L-0.337219 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.702781 3.655628L0.332781 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D3"} schX={0.17278138026864198} schY={3.885627605372859} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"150V"} schX={0.18278138026864} schY={3.345627605372858} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-6.040876-1.983322L-6.040876-2.13605"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.040876-2.425141L-6.040876-2.583322"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.969967-2.283322L-5.969967-2.425141-6.11724-2.425141-6.11724-2.13605-5.969967-2.13605-5.969967-2.283322"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R20"} schX={-5.94299172159249} schY={-2.185140637500524} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"1.00k"} schX={-5.94299172159249} schY={-2.3596860920459797} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M8.947197 0.706742L8.947197 0.85947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.947197 1.148561L8.947197 1.306742"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.876288 1.006742L8.876288 1.148561 9.02356 1.148561 9.02356 0.85947 8.876288 0.85947 8.876288 1.006742"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R13"} schX={9.099626914981684} schY={1.0831060255168659} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"100k"} schX={9.099626914981684} schY={0.9085605709714102} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M8.956288-0.284919L8.956288-0.023101"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288 0.064172L8.956288 0.315081"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.098106-0.023101L8.809015-0.023101"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.098106 0.064172L8.809015 0.064172"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C20"} schX={9.008105814981683} schY={0.12417207040296674} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4.7uF"} schX={9.008105814981683} schY={-0.09400974777885196} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M10.218539 1.133245h0.4v-0.767682h-0.4Z"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"D4"} schX={10.21853867531265} schY={1.2632445576655886} fontSize={0.18000000000000002} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"30V"} schX={10.21853867531265} schY={0.2355627605372863} fontSize={0.18000000000000002} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M10.418539 0.365563L10.418539 0"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={10.398538675312652} schY={0.18278138026864355} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematicpath svgPath={"M10.235757 0.731126L9.870195 0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={10.05297591477536} schY={0.751125521074572} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M10.418539 1.096688L10.418539 1.462251"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={10.398538675312647} schY={1.2794696618804977} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematicpath svgPath={"M13.525822 6.214567h0.365563v-0.548344h-0.365563Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":13.708603520148216,"y":6.031785548865216}} radius={0.054834414080592885} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M13.653769 5.903839h0.109669v-0.109669h-0.109669Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M13.525822 6.031786L13.653769 6.031786"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.525822 5.849004L13.653769 5.849004"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.525822 5.849004L13.160259 5.849004"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.525822 6.031786L13.160259 6.031786"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.439729 6.58013h0.365563v-0.548344h-0.365563Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-14.256947660954147,"y":6.214566929133859}} radius={0.054834414080592885} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M-14.311782 6.452183h0.109669v-0.109669h-0.109669Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M-14.074166 6.214567L-14.202113 6.214567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.074166 6.397348L-14.202113 6.397348"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.074166 6.397348L-13.708604 6.397348"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.074166 6.214567L-13.708604 6.214567"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.597857 6.10149L6.597857 5.828762"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.597857 5.774217L6.597857 5.50149"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.440281 5.828762L6.761493 5.828762"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.755433 5.743914L6.755433 5.743914 6.755433 5.743914 6.755433 5.743914 6.755433 5.743914 6.755433 5.743914 6.755433 5.743914 6.755433 5.743914 6.755433 5.743914 6.749372 5.743914 6.749372 5.743914 6.749372 5.743914 6.749372 5.743914 6.749372 5.749974 6.749372 5.749974 6.749372 5.749974 6.749372 5.749974 6.743312 5.749974 6.743312 5.749974 6.743312 5.749974 6.743312 5.749974 6.743312 5.749974 6.743312 5.749974 6.743312 5.749974 6.743312 5.749974 6.737251 5.749974 6.737251 5.749974 6.737251 5.749974 6.737251 5.756035 6.737251 5.756035 6.737251 5.756035 6.737251 5.756035 6.737251 5.756035 6.73119 5.756035 6.73119 5.756035 6.73119 5.756035 6.73119 5.756035 6.73119 5.756035 6.73119 5.756035 6.73119 5.756035 6.73119 5.756035 6.72513 5.756035 6.72513 5.756035 6.72513 5.756035 6.72513 5.756035 6.72513 5.762096 6.72513 5.762096 6.72513 5.762096 6.719069 5.762096 6.719069 5.762096 6.719069 5.762096 6.719069 5.762096 6.719069 5.762096 6.719069 5.762096 6.719069 5.762096 6.719069 5.762096 6.713008 5.762096 6.713008 5.762096 6.713008 5.762096 6.713008 5.762096 6.713008 5.762096 6.713008 5.762096 6.713008 5.762096 6.713008 5.762096 6.706948 5.768156 6.706948 5.768156 6.706948 5.768156 6.706948 5.768156 6.706948 5.768156 6.706948 5.768156 6.706948 5.768156 6.706948 5.768156 6.700887 5.768156 6.700887 5.768156 6.700887 5.768156 6.700887 5.768156 6.700887 5.768156 6.700887 5.768156 6.700887 5.768156 6.694827 5.768156 6.694827 5.768156 6.694827 5.768156 6.694827 5.768156 6.694827 5.768156 6.694827 5.768156 6.694827 5.768156 6.694827 5.774217 6.688766 5.774217 6.688766 5.774217 6.688766 5.774217 6.688766 5.774217 6.688766 5.774217 6.688766 5.774217 6.688766 5.774217 6.688766 5.774217 6.682705 5.774217 6.682705 5.774217 6.682705 5.774217 6.682705 5.774217 6.682705 5.774217 6.682705 5.774217 6.682705 5.774217 6.682705 5.774217 6.676645 5.774217 6.676645 5.774217 6.676645 5.774217 6.676645 5.774217 6.676645 5.774217 6.676645 5.774217 6.670584 5.774217 6.670584 5.774217 6.670584 5.774217 6.670584 5.774217 6.670584 5.774217 6.670584 5.774217 6.664524 5.780277 6.664524 5.780277 6.664524 5.780277 6.664524 5.780277 6.664524 5.780277 6.664524 5.780277 6.658463 5.780277 6.658463 5.780277 6.658463 5.780277 6.658463 5.780277 6.658463 5.780277 6.658463 5.780277 6.652402 5.780277 6.652402 5.780277 6.652402 5.780277 6.652402 5.780277 6.652402 5.780277 6.652402 5.780277 6.646342 5.780277 6.646342 5.780277 6.646342 5.780277 6.646342 5.780277 6.646342 5.780277 6.640281 5.780277 6.640281 5.780277 6.640281 5.780277 6.640281 5.780277 6.640281 5.780277 6.640281 5.780277 6.634221 5.780277 6.634221 5.780277 6.634221 5.780277 6.634221 5.780277 6.634221 5.780277 6.634221 5.780277 6.62816 5.780277 6.62816 5.780277 6.62816 5.780277 6.62816 5.780277 6.62816 5.780277 6.62816 5.780277 6.622099 5.780277 6.622099 5.780277 6.622099 5.780277 6.622099 5.780277 6.622099 5.780277 6.622099 5.780277 6.616039 5.780277 6.616039 5.780277 6.616039 5.780277 6.616039 5.780277 6.616039 5.780277 6.609978 5.780277 6.609978 5.780277 6.609978 5.780277 6.609978 5.780277 6.609978 5.780277 6.609978 5.780277 6.603918 5.780277 6.603918 5.786338 6.603918 5.786338 6.603918 5.786338 6.603918 5.786338 6.603918 5.786338 6.597857 5.780277 6.597857 5.780277 6.597857 5.780277 6.597857 5.780277 6.597857 5.780277 6.597857 5.780277 6.591796 5.780277 6.591796 5.780277 6.591796 5.780277 6.591796 5.780277 6.591796 5.780277 6.591796 5.780277 6.585736 5.780277 6.585736 5.780277 6.585736 5.780277 6.585736 5.780277 6.585736 5.780277 6.579675 5.780277 6.579675 5.780277 6.579675 5.780277 6.579675 5.780277 6.579675 5.780277 6.579675 5.780277 6.573615 5.780277 6.573615 5.780277 6.573615 5.780277 6.573615 5.780277 6.573615 5.780277 6.573615 5.780277 6.573615 5.780277 6.573615 5.780277 6.567554 5.780277 6.567554 5.780277 6.567554 5.780277 6.567554 5.780277 6.567554 5.780277 6.567554 5.780277 6.567554 5.780277 6.561493 5.780277 6.561493 5.780277 6.561493 5.780277 6.561493 5.780277 6.561493 5.780277 6.561493 5.780277 6.555433 5.780277 6.555433 5.780277 6.555433 5.780277 6.555433 5.780277 6.555433 5.780277 6.555433 5.780277 6.555433 5.780277 6.549372 5.780277 6.549372 5.780277 6.549372 5.780277 6.549372 5.780277 6.549372 5.780277 6.549372 5.780277 6.549372 5.780277 6.543312 5.780277 6.543312 5.780277 6.543312 5.780277 6.543312 5.780277 6.543312 5.780277 6.543312 5.780277 6.543312 5.780277 6.537251 5.780277 6.537251 5.780277 6.537251 5.780277 6.537251 5.780277 6.537251 5.774217 6.537251 5.774217 6.537251 5.774217 6.53119 5.774217 6.53119 5.774217 6.53119 5.774217 6.53119 5.774217 6.53119 5.774217 6.53119 5.774217 6.52513 5.774217 6.52513 5.774217 6.52513 5.774217 6.52513 5.774217 6.52513 5.774217 6.52513 5.774217 6.52513 5.774217 6.519069 5.774217 6.519069 5.774217 6.519069 5.774217 6.519069 5.774217 6.519069 5.774217 6.519069 5.774217 6.519069 5.774217 6.513008 5.774217 6.513008 5.774217 6.513008 5.774217 6.513008 5.774217 6.513008 5.774217 6.513008 5.774217 6.513008 5.774217 6.506948 5.774217 6.506948 5.774217 6.506948 5.768156 6.506948 5.768156 6.506948 5.768156 6.506948 5.768156 6.506948 5.768156 6.500887 5.768156 6.500887 5.768156 6.500887 5.768156 6.500887 5.768156 6.500887 5.768156 6.500887 5.768156 6.500887 5.768156 6.494827 5.768156 6.494827 5.768156 6.494827 5.768156 6.494827 5.768156 6.494827 5.768156 6.494827 5.768156 6.494827 5.768156 6.488766 5.768156 6.488766 5.768156 6.488766 5.768156 6.488766 5.768156 6.488766 5.768156 6.488766 5.768156 6.488766 5.762096 6.488766 5.762096 6.488766 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.482705 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.476645 5.762096 6.470584 5.762096 6.470584 5.762096 6.470584 5.762096 6.470584 5.762096 6.470584 5.756035 6.470584 5.756035 6.470584 5.756035 6.470584 5.756035 6.470584 5.756035 6.470584 5.756035 6.470584 5.756035 6.470584 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.464524 5.756035 6.458463 5.756035 6.458463 5.756035 6.458463 5.756035 6.458463 5.756035 6.458463 5.756035 6.458463 5.756035 6.458463 5.749974 6.458463 5.749974 6.458463 5.749974 6.458463 5.749974 6.458463 5.749974 6.458463 5.749974 6.458463 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.452402 5.749974 6.446342 5.749974 6.446342 5.749974 6.446342 5.749974 6.446342 5.749974 6.446342 5.743914 6.446342 5.743914 6.446342 5.743914 6.446342 5.743914 6.446342 5.743914 6.446342 5.743914 6.446342 5.743914 6.446342 5.743914 6.446342 5.743914 6.440281 5.743914 6.440281 5.743914 6.440281 5.743914 6.440281 5.743914 6.440281 5.743914 6.440281 5.743914 6.440281 5.743914 6.440281 5.743914 6.440281 5.743914"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.458463 5.986338L6.458463 5.90149 6.458463 5.90149 6.458463 5.986338"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.416039 5.949974L6.500887 5.949974 6.500887 5.943914 6.416039 5.943914"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C7"} schX={6.736920810883266} schY={5.889368341824923} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"270uF"} schX={6.736920810883266} schY={5.7075501600067415} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M7.328982 6.10149L7.328982 5.828762"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.328982 5.774217L7.328982 5.50149"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.171407 5.828762L7.492619 5.828762"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.486558 5.743914L7.486558 5.743914 7.486558 5.743914 7.486558 5.743914 7.486558 5.743914 7.486558 5.743914 7.486558 5.743914 7.486558 5.743914 7.486558 5.743914 7.480498 5.743914 7.480498 5.743914 7.480498 5.743914 7.480498 5.743914 7.480498 5.749974 7.480498 5.749974 7.480498 5.749974 7.480498 5.749974 7.474437 5.749974 7.474437 5.749974 7.474437 5.749974 7.474437 5.749974 7.474437 5.749974 7.474437 5.749974 7.474437 5.749974 7.474437 5.749974 7.468376 5.749974 7.468376 5.749974 7.468376 5.749974 7.468376 5.756035 7.468376 5.756035 7.468376 5.756035 7.468376 5.756035 7.468376 5.756035 7.462316 5.756035 7.462316 5.756035 7.462316 5.756035 7.462316 5.756035 7.462316 5.756035 7.462316 5.756035 7.462316 5.756035 7.462316 5.756035 7.456255 5.756035 7.456255 5.756035 7.456255 5.756035 7.456255 5.756035 7.456255 5.762096 7.456255 5.762096 7.456255 5.762096 7.450195 5.762096 7.450195 5.762096 7.450195 5.762096 7.450195 5.762096 7.450195 5.762096 7.450195 5.762096 7.450195 5.762096 7.450195 5.762096 7.444134 5.762096 7.444134 5.762096 7.444134 5.762096 7.444134 5.762096 7.444134 5.762096 7.444134 5.762096 7.444134 5.762096 7.444134 5.762096 7.438073 5.768156 7.438073 5.768156 7.438073 5.768156 7.438073 5.768156 7.438073 5.768156 7.438073 5.768156 7.438073 5.768156 7.438073 5.768156 7.432013 5.768156 7.432013 5.768156 7.432013 5.768156 7.432013 5.768156 7.432013 5.768156 7.432013 5.768156 7.432013 5.768156 7.425952 5.768156 7.425952 5.768156 7.425952 5.768156 7.425952 5.768156 7.425952 5.768156 7.425952 5.768156 7.425952 5.768156 7.425952 5.774217 7.419892 5.774217 7.419892 5.774217 7.419892 5.774217 7.419892 5.774217 7.419892 5.774217 7.419892 5.774217 7.419892 5.774217 7.419892 5.774217 7.413831 5.774217 7.413831 5.774217 7.413831 5.774217 7.413831 5.774217 7.413831 5.774217 7.413831 5.774217 7.413831 5.774217 7.413831 5.774217 7.40777 5.774217 7.40777 5.774217 7.40777 5.774217 7.40777 5.774217 7.40777 5.774217 7.40777 5.774217 7.40171 5.774217 7.40171 5.774217 7.40171 5.774217 7.40171 5.774217 7.40171 5.774217 7.40171 5.774217 7.395649 5.780277 7.395649 5.780277 7.395649 5.780277 7.395649 5.780277 7.395649 5.780277 7.395649 5.780277 7.389589 5.780277 7.389589 5.780277 7.389589 5.780277 7.389589 5.780277 7.389589 5.780277 7.389589 5.780277 7.383528 5.780277 7.383528 5.780277 7.383528 5.780277 7.383528 5.780277 7.383528 5.780277 7.383528 5.780277 7.377467 5.780277 7.377467 5.780277 7.377467 5.780277 7.377467 5.780277 7.377467 5.780277 7.371407 5.780277 7.371407 5.780277 7.371407 5.780277 7.371407 5.780277 7.371407 5.780277 7.371407 5.780277 7.365346 5.780277 7.365346 5.780277 7.365346 5.780277 7.365346 5.780277 7.365346 5.780277 7.365346 5.780277 7.359286 5.780277 7.359286 5.780277 7.359286 5.780277 7.359286 5.780277 7.359286 5.780277 7.359286 5.780277 7.353225 5.780277 7.353225 5.780277 7.353225 5.780277 7.353225 5.780277 7.353225 5.780277 7.353225 5.780277 7.347164 5.780277 7.347164 5.780277 7.347164 5.780277 7.347164 5.780277 7.347164 5.780277 7.341104 5.780277 7.341104 5.780277 7.341104 5.780277 7.341104 5.780277 7.341104 5.780277 7.341104 5.780277 7.335043 5.780277 7.335043 5.786338 7.335043 5.786338 7.335043 5.786338 7.335043 5.786338 7.335043 5.786338 7.328982 5.780277 7.328982 5.780277 7.328982 5.780277 7.328982 5.780277 7.328982 5.780277 7.328982 5.780277 7.322922 5.780277 7.322922 5.780277 7.322922 5.780277 7.322922 5.780277 7.322922 5.780277 7.322922 5.780277 7.316861 5.780277 7.316861 5.780277 7.316861 5.780277 7.316861 5.780277 7.316861 5.780277 7.310801 5.780277 7.310801 5.780277 7.310801 5.780277 7.310801 5.780277 7.310801 5.780277 7.310801 5.780277 7.30474 5.780277 7.30474 5.780277 7.30474 5.780277 7.30474 5.780277 7.30474 5.780277 7.30474 5.780277 7.30474 5.780277 7.30474 5.780277 7.298679 5.780277 7.298679 5.780277 7.298679 5.780277 7.298679 5.780277 7.298679 5.780277 7.298679 5.780277 7.298679 5.780277 7.292619 5.780277 7.292619 5.780277 7.292619 5.780277 7.292619 5.780277 7.292619 5.780277 7.292619 5.780277 7.286558 5.780277 7.286558 5.780277 7.286558 5.780277 7.286558 5.780277 7.286558 5.780277 7.286558 5.780277 7.286558 5.780277 7.280498 5.780277 7.280498 5.780277 7.280498 5.780277 7.280498 5.780277 7.280498 5.780277 7.280498 5.780277 7.280498 5.780277 7.274437 5.780277 7.274437 5.780277 7.274437 5.780277 7.274437 5.780277 7.274437 5.780277 7.274437 5.780277 7.274437 5.780277 7.268376 5.780277 7.268376 5.780277 7.268376 5.780277 7.268376 5.780277 7.268376 5.774217 7.268376 5.774217 7.268376 5.774217 7.262316 5.774217 7.262316 5.774217 7.262316 5.774217 7.262316 5.774217 7.262316 5.774217 7.262316 5.774217 7.256255 5.774217 7.256255 5.774217 7.256255 5.774217 7.256255 5.774217 7.256255 5.774217 7.256255 5.774217 7.256255 5.774217 7.250195 5.774217 7.250195 5.774217 7.250195 5.774217 7.250195 5.774217 7.250195 5.774217 7.250195 5.774217 7.250195 5.774217 7.244134 5.774217 7.244134 5.774217 7.244134 5.774217 7.244134 5.774217 7.244134 5.774217 7.244134 5.774217 7.244134 5.774217 7.238073 5.774217 7.238073 5.774217 7.238073 5.768156 7.238073 5.768156 7.238073 5.768156 7.238073 5.768156 7.238073 5.768156 7.232013 5.768156 7.232013 5.768156 7.232013 5.768156 7.232013 5.768156 7.232013 5.768156 7.232013 5.768156 7.232013 5.768156 7.225952 5.768156 7.225952 5.768156 7.225952 5.768156 7.225952 5.768156 7.225952 5.768156 7.225952 5.768156 7.225952 5.768156 7.219892 5.768156 7.219892 5.768156 7.219892 5.768156 7.219892 5.768156 7.219892 5.768156 7.219892 5.768156 7.219892 5.762096 7.219892 5.762096 7.219892 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.213831 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20777 5.762096 7.20171 5.762096 7.20171 5.762096 7.20171 5.762096 7.20171 5.762096 7.20171 5.756035 7.20171 5.756035 7.20171 5.756035 7.20171 5.756035 7.20171 5.756035 7.20171 5.756035 7.20171 5.756035 7.20171 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.195649 5.756035 7.189589 5.756035 7.189589 5.756035 7.189589 5.756035 7.189589 5.756035 7.189589 5.756035 7.189589 5.756035 7.189589 5.749974 7.189589 5.749974 7.189589 5.749974 7.189589 5.749974 7.189589 5.749974 7.189589 5.749974 7.189589 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.183528 5.749974 7.177467 5.749974 7.177467 5.749974 7.177467 5.749974 7.177467 5.749974 7.177467 5.743914 7.177467 5.743914 7.177467 5.743914 7.177467 5.743914 7.177467 5.743914 7.177467 5.743914 7.177467 5.743914 7.177467 5.743914 7.177467 5.743914 7.171407 5.743914 7.171407 5.743914 7.171407 5.743914 7.171407 5.743914 7.171407 5.743914 7.171407 5.743914 7.171407 5.743914 7.171407 5.743914 7.171407 5.743914"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.189589 5.986338L7.189589 5.90149 7.189589 5.90149 7.189589 5.986338"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.147164 5.949974L7.232013 5.949974 7.232013 5.943914 7.147164 5.943914"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C8"} schX={7.46804633195784} schY={5.889368341824923} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"270uF"} schX={7.46804633195784} schY={5.7075501600067415} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-10.052976 5.746867L-10.052976 6.008685"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.052976 6.095958L-10.052976 6.346867"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.911158 6.008685L-10.200249 6.008685"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.911158 6.095958L-10.200249 6.095958"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C3"} schX={-10.001157732957177} schY={6.1559576192681815} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-10.001157732957177} schY={5.937775801086363} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M8.042381 5.381304L8.042381 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.042381 5.730395L8.042381 5.981304"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.184199 5.643122L7.895108 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.184199 5.730395L7.895108 5.730395"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C9"} schX={8.094198913638468} schY={5.790394858730895} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10uF"} schX={8.094198913638468} schY={5.572213040549077} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M8.773506 5.381304L8.773506 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.773506 5.730395L8.773506 5.981304"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.915324 5.643122L8.626234 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.915324 5.730395L8.626234 5.730395"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C10"} schX={8.825324434713039} schY={5.790394858730895} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10uF"} schX={8.825324434713039} schY={5.572213040549077} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M9.504632 5.381304L9.504632 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.504632 5.730395L9.504632 5.981304"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.64645 5.643122L9.357359 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.64645 5.730395L9.357359 5.730395"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C11"} schX={9.556449955787613} schY={5.790394858730895} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={9.556449955787613} schY={5.572213040549077} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M10.418539 5.381304L10.418539 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.418539 5.730395L10.418539 5.981304"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.560357 5.643122L10.271266 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.560357 5.730395L10.271266 5.730395"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C12"} schX={10.470356857130831} schY={5.790394858730895} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1000pF"} schX={10.470356857130831} schY={5.572213040549077} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M10.328804-1.836905L10.066986-1.836905"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.979713-1.836905L9.728804-1.836905"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.066986-1.695087L10.066986-1.984177"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.979713-1.695087L9.979713-1.984177"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C23"} schX={10.023349298917847} schY={-1.6187228935955194} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.01uF"} schX={10.028803844372394} schY={-2.0769047117773383} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M2.103642-4.944188L1.841824-4.944188"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.754551-4.944188L1.503642-4.944188"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.841824-4.80237L1.841824-5.091461"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.754551-4.80237L1.754551-5.091461"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C28"} schX={1.798187186828919} schY={-4.726006358162449} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1000pF"} schX={1.803641732283463} schY={-5.184188176344268} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-3.290065 5.250178L-3.290065 4.98836"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 4.901088L-3.290065 4.650178"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.431883 4.98836L-3.142792 4.98836"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.431883 4.901088L-3.142792 4.901088"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C15"} schX={-3.2273375721083006} schY={5.059269337656325} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4.7uF"} schX={-3.2273375721083006} schY={4.841087519474506} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-8.965379-6.604513L-8.965379-6.451786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.965379-6.162695L-8.965379-6.004513"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.036288-6.304513L-9.036288-6.162695-8.889015-6.162695-8.889015-6.451786-9.036288-6.451786-9.036288-6.304513"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R24"} schX={-8.812948351345321} schY={-6.228149185228853} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"9.76k"} schX={-8.812948351345321} schY={-6.402694639774307} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-8.965379-5.325043L-8.965379-5.172316"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.965379-4.883225L-8.965379-4.725043"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.036288-5.025043L-9.036288-4.883225-8.889015-4.883225-8.889015-5.172316-9.036288-5.172316-9.036288-5.025043"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R23"} schX={-8.812948351345321} schY={-4.948679523348353} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30.0k"} schX={-8.812948351345321} schY={-5.123224977893809} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.395844 4.910714L-4.395844 5.063441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.395844 5.352532L-4.395844 5.510714"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.466753 5.210714L-4.466753 5.352532-4.31948 5.352532-4.31948 5.063441-4.466753 5.063441-4.466753 5.210714"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R3"} schX={-4.243413844629249} schY={5.287077771695653} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0"} schX={-4.243413844629249} schY={5.112532317150199} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-8.042381 5.746867L-8.042381 6.008685"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.042381 6.095958L-8.042381 6.346867"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.900563 6.008685L-8.189653 6.008685"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.900563 6.095958L-8.189653 6.095958"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C5"} schX={-7.990562550002105} schY={6.1559576192681815} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1uF"} schX={-7.990562550002105} schY={5.937775801086363} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-6.945692 5.746867L-6.945692 6.008685"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.945692 6.095958L-6.945692 6.346867"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.803874 6.008685L-7.092965 6.008685"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.803874 6.095958L-7.092965 6.095958"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C6"} schX={-6.893874268390251} schY={6.1559576192681815} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4.7uF"} schX={-6.893874268390251} schY={5.937775801086363} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-8.956288 5.746867L-8.956288 6.008685"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288 6.095958L-8.956288 6.346867"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.814469 6.008685L-9.10356 6.008685"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.814469 6.095958L-9.10356 6.095958"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C4"} schX={-8.904469451345323} schY={6.1559576192681815} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1uF"} schX={-8.904469451345323} schY={5.937775801086363} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-0.365563 4.101834L-0.365563 4.363652"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.365563 4.450925L-0.365563 4.701834"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.223745 4.363652L-0.512835 4.363652"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.223745 4.450925L-0.512835 4.450925"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C16"} schX={-0.3137445787191062} schY={4.510925196850395} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.33uF"} schX={-0.3137445787191062} schY={4.292743378668576} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-9.015379 1.987868L-8.862651 1.987868"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.57356 1.987868L-8.415379 1.987868"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.715379 2.058777L-8.57356 2.058777-8.57356 1.911504-8.862651 1.911504-8.862651 2.058777-8.715379 2.058777"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R9"} schX={-8.726287633163503} schY={2.0857526465914367} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"100k"} schX={-8.726287633163503} schY={1.8736195375005291} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.956688 6.031786L-1.216688 5.901786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.216688 6.171786L-0.956688 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.216688 5.901786L-1.216688 6.171786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.956688 6.171786L-0.956688 5.901786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.216688 6.031786L-1.616688 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.576688 6.031786L-0.946688 6.031786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D2"} schX={-1.1066882816118557} schY={6.261785548865216} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"100V"} schX={-1.0966882816118577} schY={5.721785548865217} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-7.494037 3.838409h2.193377v-4.386753h-2.193377Z"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U1"} schX={-7.494036591014362} schY={3.968408985641503} fontSize={0.18000000000000002} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"LM5155DSST"} schX={-7.494036591014362} schY={-0.6783441408059296} fontSize={0.18000000000000002} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-7.494037 3.472846L-7.859599 3.472846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-7.676817971283004} schY={3.4928462251042163} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"BIAS"} schX={-7.394036591014359} schY={3.4728462251042167} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-5.30066 3.472846L-4.935097 3.472846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={-5.117878647522005} schY={3.4928462251042163} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VCC"} schX={-5.4006600277906465} schY={3.4728462251042167} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-5.30066 2.924502L-4.935097 2.924502"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.20066 2.924502L-5.287263 2.874502-5.287263 2.974502Z"} strokeWidth={0.006666666666666668} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"3"} schX={-5.117878647522005} schY={2.9445020842982874} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"GATE"} schX={-5.4006600277906465} schY={2.924502084298288} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-5.30066 1.27947L-4.935097 1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={-5.117878647522005} schY={1.2994696618805017} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"PGND"} schX={-5.4006600277906465} schY={1.2794696618805004} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-5.30066 2.010595L-4.935097 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={-5.117878647522005} schY={2.0305951829550732} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"CS"} schX={-5.4006600277906465} schY={2.0105951829550737} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-7.494037-0.182781L-7.859599-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.594037-0.182781L-7.507434-0.132781-7.507434-0.232781Z"} strokeWidth={0.006666666666666668} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"6"} schX={-7.676817971283004} schY={-0.1627813802686422} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"COMP"} schX={-7.394036591014359} schY={-0.18278138026864177} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-5.30066-0.182781L-4.935097-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={-5.117878647522005} schY={-0.1627813802686422} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"AGND"} schX={-5.4006600277906465} schY={-0.18278138026864177} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-5.30066 0.548344L-4.935097 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={-5.117878647522005} schY={0.5683441408059284} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"FB"} schX={-5.4006600277906465} schY={0.5483441408059289} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-7.494037 0.548344L-7.859599 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"9"} schX={-7.676817971283004} schY={0.5683441408059284} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"SS"} schX={-7.394036591014359} schY={0.5483441408059289} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-7.494037 1.27947L-7.859599 1.27947"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"10"} schX={-7.676817971283004} schY={1.2994696618805017} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"RT"} schX={-7.394036591014359} schY={1.2794696618805004} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-7.494037 2.010595L-7.859599 2.010595"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"11"} schX={-7.676817971283004} schY={2.0305951829550732} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"PGOOD"} schX={-7.394036591014359} schY={2.0105951829550737} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-7.494037 2.741721L-7.859599 2.741721"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"12"} schX={-7.676817971283004} schY={2.761720704029644} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"UVLO/SYNC"} schX={-7.394036591014359} schY={2.7417207040296443} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-5.30066 0L-4.935097 0"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"13"} schX={-5.117878647522005} schY={0.019999999999999574} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"EP"} schX={-5.4006600277906465} schY={0} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M1.087597 0.889524L1.087597 1.042251"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.087597 1.331342L1.087597 1.489524"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.016688 1.189524L1.016688 1.331342 1.163961 1.331342 1.163961 1.042251 1.016688 1.042251 1.016688 1.189524"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R12"} schX={1.24002756343004} schY={1.2658874057855094} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0.02"} schX={1.24002756343004} schY={1.0913419512400537} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M1.645032 3.711522L1.645032 3.911522"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.545032 4.011522L1.554936 3.968133 1.582683 3.933338 1.62278 3.914029 1.667285 3.914029 1.707381 3.933338 1.735129 3.968133 1.745032 4.011522"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP5"} schX={1.6450324224177848} schY={4.036521537748959} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M11.515227 6.818805L11.515227 7.018805"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.415227 7.118805L11.42513 7.075417 11.452878 7.040622 11.492975 7.021312 11.537479 7.021312 11.577576 7.040622 11.605324 7.075417 11.615227 7.118805"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP2"} schX={11.515226956924508} schY={7.14380500231589} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M11.515227 4.879203L11.515227 4.679203"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.615227 4.579203L11.605324 4.622592 11.577576 4.657386 11.537479 4.676696 11.492975 4.676696 11.452878 4.657386 11.42513 4.622592 11.415227 4.579203"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP4"} schX={11.515226956924508} schY={4.5542033348772595} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-12.429134 7.367149L-12.429134 7.567149"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.529134 7.667149L-12.519231 7.623761-12.491483 7.588966-12.451386 7.569656-12.406882 7.569656-12.366785 7.588966-12.339037 7.623761-12.329134 7.667149"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP1"} schX={-12.42913385826772} schY={7.692149143121817} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-12.429134 5.244766L-12.429134 5.044766"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.329134 4.944766L-12.339037 4.988154-12.366785 5.022949-12.406882 5.042259-12.451386 5.042259-12.491483 5.022949-12.519231 4.988154-12.529134 4.944766"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP3"} schX={-12.42913385826772} schY={4.919766095414546} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M11.871699 2.534556L11.871699 2.687283"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.871699 2.976374L11.871699 3.134556"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.80079 2.834556L11.80079 2.976374 11.948062 2.976374 11.948062 2.687283 11.80079 2.687283 11.80079 2.834556"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R7"} schX={12.024128999279974} schY={2.910919828203294} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10.0"} schX={12.024128999279974} schY={2.7363743736578385} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.965296-0.731126L-3.765296-0.731126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.665296-0.631126L-3.708685-0.641029-3.74348-0.668777-3.762789-0.708873-3.762789-0.753378-3.74348-0.793475-3.708685-0.821222-3.665296-0.831126"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP8"} schX={-3.640296433534047} schY={-0.7311255210745706} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M8.207943-4.02119L8.407943-4.02119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.507943-3.92119L8.464555-3.931093 8.42976-3.958841 8.410451-3.998938 8.410451-4.043442 8.42976-4.083539 8.464555-4.111287 8.507943-4.12119"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP9"} schX={8.532943492357575} schY={-4.021190365910144} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M12.485028 3.655628L12.685028 3.655628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.785028 3.755628L12.741639 3.745724 12.706845 3.717977 12.687535 3.67788 12.687535 3.633376 12.706845 3.593279 12.741639 3.565531 12.785028 3.555628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP6"} schX={12.810027790643822} schY={3.6556276053728585} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M12.485028 2.558939L12.685028 2.558939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.785028 2.658939L12.741639 2.649036 12.706845 2.621288 12.687535 2.581191 12.687535 2.536687 12.706845 2.49659 12.741639 2.468842 12.785028 2.458939"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP7"} schX={12.810027790643822} schY={2.5589393237610008} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-13.708604-4.386753h0.365563v-1.096688h-0.365563Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-4.752315886984716}} radius={0.054834414080592885} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-4.569534506716073}} radius={0.054834414080592885} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-4.935097267253358}} radius={0.054834414080592885} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-5.1178786475220015}} radius={0.054834414080592885} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-13.525822139879576,"y":-5.300660027790643}} radius={0.054834414080592885} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-13.580657-4.5147h0.109669v-0.109669h-0.109669Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-13.343041-5.30066L-12.977478-5.30066"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-5.117879L-12.977478-5.117879"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-4.752316L-13.470988-4.752316"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-4.569535L-13.470988-4.569535"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-4.935097L-13.470988-4.935097"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-4.569535L-12.977478-4.569535"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-4.752316L-12.977478-4.752316"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-4.935097L-12.977478-4.935097"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-5.117879L-13.470988-5.117879"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.343041-5.30066L-13.470988-5.30066"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.993377 0.565563h0.4v-0.4h-0.4Z"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"J3"} schX={1.9933765632237161} schY={0.6955627605372863} fontSize={0.18000000000000002} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1040"} schX={1.9933765632237161} schY={0.03556276053728702} fontSize={0.18000000000000002} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M2.010595 0.365563L1.645032 0.365563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={1.8278138026864283} schY={0.38556276053728666} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M2.103642-4.030281L1.841824-4.030281"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.754551-4.030281L1.503642-4.030281"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.841824-3.888463L1.841824-4.177554"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.754551-3.888463L1.754551-4.177554"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C27"} schX={1.798187186828919} schY={-3.812099456819233} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1000pF"} schX={1.803641732283463} schY={-4.270281275001052} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M4.369535-2.358939h0.4v-0.4h-0.4Z"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"NT2"} schX={4.369534506716072} schY={-2.2289393237610007} fontSize={0.18000000000000002} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Net-Tie"} schX={4.369534506716072} schY={-2.888939323761001} fontSize={0.18000000000000002} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M4.569535-2.741721L4.569535-2.924502"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={4.549534506716071} schY={-2.8331113941639643} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematicpath svgPath={"M4.569535-2.376158L4.569535-2.193377"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={4.549534506716071} schY={-2.2847672533580337} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematicpath svgPath={"M11.332446 5.381304L11.332446 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.332446 5.730395L11.332446 5.981304"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.474264 5.643122L11.185173 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.474264 5.730395L11.185173 5.730395"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C13"} schX={11.384263758474042} schY={5.790394858730895} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={11.384263758474042} schY={5.572213040549077} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M12.246352 5.381304L12.246352 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.246352 5.730395L12.246352 5.981304"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.388171 5.643122L12.09908 5.643122"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.388171 5.730395L12.09908 5.730395"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C14"} schX={12.29817065981726} schY={5.790394858730895} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.01uF"} schX={12.29817065981726} schY={5.572213040549077} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M4.693225 7.836872L4.845952 7.836872"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.135043 7.836872L5.293225 7.836872"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.993225 7.907781L5.135043 7.907781 5.135043 7.760508 4.845952 7.760508 4.845952 7.907781 4.993225 7.907781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R1"} schX={4.982315886984711} schY={7.9347568151880115} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"15.0"} schX={4.982315886984711} schY={7.722623706097102} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-7.128474-3.02664L-7.128474-2.764821"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.128474-2.677549L-7.128474-2.42664"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.986656-2.764821L-7.275747-2.764821"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.986656-2.677549L-7.275747-2.677549"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C25"} schX={-7.076655648658891} schY={-2.6175486336266793} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.01uF"} schX={-7.076655648658891} schY={-2.835730451808498} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-3.655628-2.321324L-3.545959-2.303045-3.600793-2.229933"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-3.472846-2.558939L-3.472846-2.924502"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.655628-2.376158L-4.02119-2.376158"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.472846-2.193377L-3.472846-1.827814"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.655628-2.540661L-3.655628-2.211655"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.472846-2.558939L-3.655628-2.430992"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.600793-2.284767L-3.472846-2.193377"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.03329-0.389946L8.03329-0.237219"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.03329 0.051872L8.03329 0.210054"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.962381-0.089946L7.962381 0.051872 8.109653 0.051872 8.109653-0.237219 7.962381-0.237219 7.962381-0.089946"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R15"} schX={8.18572001363847} schY={-0.013582256094991862} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10.2k"} schX={8.18572001363847} schY={-0.18812771064044753} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M2.010595 7.128474h1.096688v-2.010595h-1.096688Z"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={true} fillColor={"#ffffb0"} />
      <schematicpath svgPath={"M2.010595 6.031786L1.645032 6.031786"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.107283 6.762911L3.472846 6.762911"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.010595 6.214567L1.645032 6.214567"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.107283 6.58013L3.472846 6.58013"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.010595 5.30066L1.645032 5.30066"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.010595 6.945692L1.645032 6.945692"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.107283 5.666223L3.472846 5.666223"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.107283 5.849004L3.472846 5.849004"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 5.849004L2.388087 5.849786 2.399812 5.852118 2.411132 5.855961 2.421853 5.861248 2.431793 5.86789 2.440781 5.875772 2.448663 5.88476 2.455305 5.8947 2.460592 5.905421 2.464435 5.916741 2.466767 5.928466 2.467549 5.940395 2.466767 5.952324 2.464435 5.964049 2.460592 5.975369 2.455305 5.98609 2.448663 5.99603 2.440781 6.005018 2.431793 6.0129 2.421853 6.019542 2.411132 6.024829 2.399812 6.028671 2.388087 6.031004 2.376158 6.031786"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 5.666223L2.388087 5.667005 2.399812 5.669337 2.411132 5.673179 2.421853 5.678467 2.431793 5.685108 2.440781 5.692991 2.448663 5.701978 2.455305 5.711918 2.460592 5.72264 2.464435 5.73396 2.466767 5.745685 2.467549 5.757613 2.466767 5.769542 2.464435 5.781267 2.460592 5.792587 2.455305 5.803309 2.448663 5.813249 2.440781 5.822236 2.431793 5.830119 2.421853 5.83676 2.411132 5.842047 2.399812 5.84589 2.388087 5.848222 2.376158 5.849004"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 5.483441L2.388087 5.484223 2.399812 5.486555 2.411132 5.490398 2.421853 5.495685 2.431793 5.502327 2.440781 5.510209 2.448663 5.519197 2.455305 5.529137 2.460592 5.539858 2.464435 5.551178 2.466767 5.562903 2.467549 5.574832 2.466767 5.586761 2.464435 5.598486 2.460592 5.609806 2.455305 5.620527 2.448663 5.630467 2.440781 5.639455 2.431793 5.647337 2.421853 5.653979 2.411132 5.659266 2.399812 5.663109 2.388087 5.665441 2.376158 5.666223"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 5.30066L2.388087 5.301442 2.399812 5.303774 2.411132 5.307617 2.421853 5.312904 2.431793 5.319546 2.440781 5.327428 2.448663 5.336416 2.455305 5.346355 2.460592 5.357077 2.464435 5.368397 2.466767 5.380122 2.467549 5.392051 2.466767 5.40398 2.464435 5.415704 2.460592 5.427024 2.455305 5.437746 2.448663 5.447686 2.440781 5.456674 2.431793 5.464556 2.421853 5.471197 2.411132 5.476485 2.399812 5.480327 2.388087 5.48266 2.376158 5.483441"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.394436 5.940395L2.39428 5.942781 2.393813 5.945126 2.393045 5.94739 2.391987 5.949534 2.390659 5.951522 2.389083 5.953319 2.387285 5.954896 2.385297 5.956224 2.383153 5.957282 2.380889 5.95805 2.378544 5.958517 2.376158 5.958673 2.373772 5.958517 2.371427 5.95805 2.369163 5.957282 2.367019 5.956224 2.365031 5.954896 2.363233 5.953319 2.361657 5.951522 2.360329 5.949534 2.359271 5.94739 2.358503 5.945126 2.358036 5.942781 2.35788 5.940395 2.358036 5.938009 2.358503 5.935664 2.359271 5.9334 2.360329 5.931256 2.361657 5.929268 2.363233 5.92747 2.365031 5.925894 2.367019 5.924566 2.369163 5.923508 2.371427 5.92274 2.373772 5.922273 2.376158 5.922117 2.378544 5.922273 2.380889 5.92274 2.383153 5.923508 2.385297 5.924566 2.387285 5.925894 2.389083 5.92747 2.390659 5.929268 2.391987 5.931256 2.393045 5.9334 2.393813 5.935664 2.39428 5.938009 2.394436 5.940395"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.522383 6.945692L2.522383 5.30066"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.595496 6.945692L2.595496 5.30066"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 6.031786L2.010595 6.031786"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 5.30066L2.010595 5.30066"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 6.762911L2.388087 6.763693 2.399812 6.766025 2.411132 6.769868 2.421853 6.775155 2.431793 6.781797 2.440781 6.789679 2.448663 6.798667 2.455305 6.808606 2.460592 6.819328 2.464435 6.830648 2.466767 6.842373 2.467549 6.854302 2.466767 6.866231 2.464435 6.877955 2.460592 6.889275 2.455305 6.899997 2.448663 6.909937 2.440781 6.918925 2.431793 6.926807 2.421853 6.933448 2.411132 6.938736 2.399812 6.942578 2.388087 6.944911 2.376158 6.945692"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 6.58013L2.388087 6.580912 2.399812 6.583244 2.411132 6.587086 2.421853 6.592374 2.431793 6.599015 2.440781 6.606897 2.448663 6.615885 2.455305 6.625825 2.460592 6.636547 2.464435 6.647867 2.466767 6.659592 2.467549 6.67152 2.466767 6.683449 2.464435 6.695174 2.460592 6.706494 2.455305 6.717216 2.448663 6.727156 2.440781 6.736143 2.431793 6.744025 2.421853 6.750667 2.411132 6.755954 2.399812 6.759797 2.388087 6.762129 2.376158 6.762911"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 6.397348L2.388087 6.39813 2.399812 6.400462 2.411132 6.404305 2.421853 6.409592 2.431793 6.416234 2.440781 6.424116 2.448663 6.433104 2.455305 6.443044 2.460592 6.453765 2.464435 6.465085 2.466767 6.47681 2.467549 6.488739 2.466767 6.500668 2.464435 6.512393 2.460592 6.523713 2.455305 6.534434 2.448663 6.544374 2.440781 6.553362 2.431793 6.561244 2.421853 6.567886 2.411132 6.573173 2.399812 6.577016 2.388087 6.579348 2.376158 6.58013"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 6.214567L2.388087 6.215349 2.399812 6.217681 2.411132 6.221524 2.421853 6.226811 2.431793 6.233453 2.440781 6.241335 2.448663 6.250322 2.455305 6.260262 2.460592 6.270984 2.464435 6.282304 2.466767 6.294029 2.467549 6.305958 2.466767 6.317886 2.464435 6.329611 2.460592 6.340931 2.455305 6.351653 2.448663 6.361593 2.440781 6.370581 2.431793 6.378463 2.421853 6.385104 2.411132 6.390392 2.399812 6.394234 2.388087 6.396566 2.376158 6.397348"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.394436 6.854302L2.39428 6.856688 2.393813 6.859032 2.393045 6.861297 2.391987 6.863441 2.390659 6.865429 2.389083 6.867226 2.387285 6.868803 2.385297 6.870131 2.383153 6.871189 2.380889 6.871957 2.378544 6.872424 2.376158 6.87258 2.373772 6.872424 2.371427 6.871957 2.369163 6.871189 2.367019 6.870131 2.365031 6.868803 2.363233 6.867226 2.361657 6.865429 2.360329 6.863441 2.359271 6.861297 2.358503 6.859032 2.358036 6.856688 2.35788 6.854302 2.358036 6.851916 2.358503 6.849571 2.359271 6.847307 2.360329 6.845163 2.361657 6.843175 2.363233 6.841377 2.365031 6.839801 2.367019 6.838472 2.369163 6.837415 2.371427 6.836646 2.373772 6.83618 2.376158 6.836024 2.378544 6.83618 2.380889 6.836646 2.383153 6.837415 2.385297 6.838472 2.387285 6.839801 2.389083 6.841377 2.390659 6.843175 2.391987 6.845163 2.393045 6.847307 2.393813 6.849571 2.39428 6.851916 2.394436 6.854302"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 6.945692L2.010595 6.945692"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376158 6.214567L2.010595 6.214567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.741721 6.762911L2.729792 6.762129 2.718067 6.759797 2.706747 6.755954 2.696025 6.750667 2.686086 6.744025 2.677098 6.736143 2.669216 6.727156 2.662574 6.717216 2.657287 6.706494 2.653444 6.695174 2.651112 6.683449 2.65033 6.67152 2.651112 6.659592 2.653444 6.647867 2.657287 6.636547 2.662574 6.625825 2.669216 6.615885 2.677098 6.606897 2.686086 6.599015 2.696025 6.592374 2.706747 6.587086 2.718067 6.583244 2.729792 6.580912 2.741721 6.58013"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.741721 6.58013L2.729792 6.579348 2.718067 6.577016 2.706747 6.573173 2.696025 6.567886 2.686086 6.561244 2.677098 6.553362 2.669216 6.544374 2.662574 6.534434 2.657287 6.523713 2.653444 6.512393 2.651112 6.500668 2.65033 6.488739 2.651112 6.47681 2.653444 6.465085 2.657287 6.453765 2.662574 6.443044 2.669216 6.433104 2.677098 6.424116 2.686086 6.416234 2.696025 6.409592 2.706747 6.404305 2.718067 6.400462 2.729792 6.39813 2.741721 6.397348"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.741721 6.397348L2.729792 6.396566 2.718067 6.394234 2.706747 6.390392 2.696025 6.385104 2.686086 6.378463 2.677098 6.370581 2.669216 6.361593 2.662574 6.351653 2.657287 6.340931 2.653444 6.329611 2.651112 6.317886 2.65033 6.305958 2.651112 6.294029 2.653444 6.282304 2.657287 6.270984 2.662574 6.260262 2.669216 6.250322 2.677098 6.241335 2.686086 6.233453 2.696025 6.226811 2.706747 6.221524 2.718067 6.217681 2.729792 6.215349 2.741721 6.214567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.741721 6.214567L2.729792 6.213785 2.718067 6.211453 2.706747 6.20761 2.696025 6.202323 2.686086 6.195681 2.677098 6.187799 2.669216 6.178811 2.662574 6.168872 2.657287 6.15815 2.653444 6.14683 2.651112 6.135105 2.65033 6.123176 2.651112 6.111247 2.653444 6.099523 2.657287 6.088203 2.662574 6.077481 2.669216 6.067541 2.677098 6.058553 2.686086 6.050671 2.696025 6.04403 2.706747 6.038742 2.718067 6.0349 2.729792 6.032567 2.741721 6.031786"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.759999 6.67152L2.759842 6.673906 2.759376 6.676251 2.758608 6.678515 2.75755 6.680659 2.756222 6.682647 2.754645 6.684445 2.752848 6.686021 2.75086 6.68735 2.748715 6.688407 2.746451 6.689176 2.744106 6.689642 2.741721 6.689799 2.739335 6.689642 2.73699 6.689176 2.734726 6.688407 2.732582 6.68735 2.730594 6.686021 2.728796 6.684445 2.72722 6.682647 2.725891 6.680659 2.724834 6.678515 2.724065 6.676251 2.723599 6.673906 2.723443 6.67152 2.723599 6.669135 2.724065 6.66679 2.724834 6.664526 2.725891 6.662381 2.72722 6.660393 2.728796 6.658596 2.730594 6.657019 2.732582 6.655691 2.734726 6.654634 2.73699 6.653865 2.739335 6.653399 2.741721 6.653242 2.744106 6.653399 2.746451 6.653865 2.748715 6.654634 2.75086 6.655691 2.752848 6.657019 2.754645 6.658596 2.756222 6.660393 2.75755 6.662381 2.758608 6.664526 2.759376 6.66679 2.759842 6.669135 2.759999 6.67152"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.741721 6.762911L3.107283 6.762911"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.741721 5.666223L3.107283 5.666223"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.741721 6.031786L2.729792 6.031004 2.718067 6.028671 2.706747 6.024829 2.696025 6.019542 2.686086 6.0129 2.677098 6.005018 2.669216 5.99603 2.662574 5.98609 2.657287 5.975369 2.653444 5.964049 2.651112 5.952324 2.65033 5.940395 2.651112 5.928466 2.653444 5.916741 2.657287 5.905421 2.662574 5.8947 2.669216 5.88476 2.677098 5.875772 2.686086 5.86789 2.696025 5.861248 2.706747 5.855961 2.718067 5.852118 2.729792 5.849786 2.741721 5.849004"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.924502 6.58013L2.912573 6.579348 2.900848 6.577016 2.889528 6.573173 2.878807 6.567886 2.868867 6.561244 2.859879 6.553362 2.851997 6.544374 2.845355 6.534434 2.840068 6.523713 2.836225 6.512393 2.833893 6.500668 2.833111 6.488739 2.833893 6.47681 2.836225 6.465085 2.840068 6.453765 2.845355 6.443044 2.851997 6.433104 2.859879 6.424116 2.868867 6.416234 2.878807 6.409592 2.889528 6.404305 2.900848 6.400462 2.912573 6.39813 2.924502 6.397348"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.924502 6.397348L2.912573 6.396566 2.900848 6.394234 2.889528 6.390392 2.878807 6.385104 2.868867 6.378463 2.859879 6.370581 2.851997 6.361593 2.845355 6.351653 2.840068 6.340931 2.836225 6.329611 2.833893 6.317886 2.833111 6.305958 2.833893 6.294029 2.836225 6.282304 2.840068 6.270984 2.845355 6.260262 2.851997 6.250322 2.859879 6.241335 2.868867 6.233453 2.878807 6.226811 2.889528 6.221524 2.900848 6.217681 2.912573 6.215349 2.924502 6.214567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.924502 6.214567L2.912573 6.213785 2.900848 6.211453 2.889528 6.20761 2.878807 6.202323 2.868867 6.195681 2.859879 6.187799 2.851997 6.178811 2.845355 6.168872 2.840068 6.15815 2.836225 6.14683 2.833893 6.135105 2.833111 6.123176 2.833893 6.111247 2.836225 6.099523 2.840068 6.088203 2.845355 6.077481 2.851997 6.067541 2.859879 6.058553 2.868867 6.050671 2.878807 6.04403 2.889528 6.038742 2.900848 6.0349 2.912573 6.032567 2.924502 6.031786"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.924502 6.031786L2.912573 6.031004 2.900848 6.028671 2.889528 6.024829 2.878807 6.019542 2.868867 6.0129 2.859879 6.005018 2.851997 5.99603 2.845355 5.98609 2.840068 5.975369 2.836225 5.964049 2.833893 5.952324 2.833111 5.940395 2.833893 5.928466 2.836225 5.916741 2.840068 5.905421 2.845355 5.8947 2.851997 5.88476 2.859879 5.875772 2.868867 5.86789 2.878807 5.861248 2.889528 5.855961 2.900848 5.852118 2.912573 5.849786 2.924502 5.849004"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.94278 6.488739L2.942624 6.491125 2.942157 6.49347 2.941389 6.495734 2.940331 6.497878 2.939003 6.499866 2.937427 6.501664 2.935629 6.50324 2.933641 6.504568 2.931497 6.505626 2.929233 6.506394 2.926888 6.506861 2.924502 6.507017 2.922116 6.506861 2.919771 6.506394 2.917507 6.505626 2.915363 6.504568 2.913375 6.50324 2.911577 6.501664 2.910001 6.499866 2.908673 6.497878 2.907615 6.495734 2.906847 6.49347 2.90638 6.491125 2.906224 6.488739 2.90638 6.486353 2.906847 6.484008 2.907615 6.481744 2.908673 6.4796 2.910001 6.477612 2.911577 6.475814 2.913375 6.474238 2.915363 6.47291 2.917507 6.471852 2.919771 6.471084 2.922116 6.470617 2.924502 6.470461 2.926888 6.470617 2.929233 6.471084 2.931497 6.471852 2.933641 6.47291 2.935629 6.474238 2.937427 6.475814 2.939003 6.477612 2.940331 6.4796 2.941389 6.481744 2.942157 6.484008 2.942624 6.486353 2.94278 6.488739"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.924502 6.58013L3.107283 6.58013"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.924502 5.849004L3.107283 5.849004"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.741721 5.849004L2.729792 5.848222 2.718067 5.84589 2.706747 5.842047 2.696025 5.83676 2.686086 5.830119 2.677098 5.822236 2.669216 5.813249 2.662574 5.803309 2.657287 5.792587 2.653444 5.781267 2.651112 5.769542 2.65033 5.757613 2.651112 5.745685 2.653444 5.73396 2.657287 5.72264 2.662574 5.711918 2.669216 5.701978 2.677098 5.692991 2.686086 5.685108 2.696025 5.678467 2.706747 5.673179 2.718067 5.669337 2.729792 5.667005 2.741721 5.666223"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.375757 4.203972L-10.115757 4.333972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.115757 4.063972L-10.375757 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.115757 4.333972L-10.115757 4.063972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.375757 4.063972L-10.375757 4.333972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.115757 4.203972L-9.715757 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.755757 4.203972L-10.385757 4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D5"} schX={-10.225757295044005} schY={3.973971746178788} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematictext text={"100V"} schX={-10.235757295044005} schY={4.513971746178788} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-2.56803 4.36237L-2.56803 4.515097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.56803 4.804188L-2.56803 4.96237"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.638939 4.66237L-2.638939 4.804188-2.491667 4.804188-2.491667 4.515097-2.638939 4.515097-2.638939 4.66237"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R25"} schX={-2.4156000419428203} schY={4.738733630889725} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10.0k"} schX={-2.4156000419428203} schY={4.5641881763442695} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.288561 4.179589L-1.288561 4.332316"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.288561 4.621407L-1.288561 4.779589"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.35947 4.479589L-1.35947 4.621407-1.212197 4.621407-1.212197 4.332316-1.35947 4.332316-1.35947 4.479589"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R4"} schX={-1.136130380062319} schY={4.555952250621082} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30.1k"} schX={-1.136130380062319} schY={4.381406796075626} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M11.871699-4.228355L11.871699-4.075628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.871699-3.786537L11.871699-3.628355"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.80079-3.928355L11.80079-3.786537 11.948062-3.786537 11.948062-4.075628 11.80079-4.075628 11.80079-3.928355"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R22"} schX={12.024128999279966} schY={-3.8519912417364957} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"9.76k"} schX={12.024128999279966} schY={-4.0265366962819495} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.652467 6.009058L-1.805195 6.009058"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.094286 6.009058L-2.252467 6.009058"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.952467 5.938149L-2.094286 5.938149-2.094286 6.085422-1.805195 6.085422-1.805195 5.938149-1.952467 5.938149"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R2"} schX={-1.9415583814055353} schY={6.1451248306833985} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"100"} schX={-1.9415583814055353} schY={5.889355357956125} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-9.512067 4.91237L-9.664794 4.91237"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.953885 4.91237L-10.112067 4.91237"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.812067 4.841461L-9.953885 4.841461-9.953885 4.988734-9.664794 4.988734-9.664794 4.841461-9.812067 4.841461"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R26"} schX={-9.801157732957181} schY={5.048436549071542} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-9.801157732957181} schY={4.792667076344269} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-2.924502-0.365563L-2.934502-0.695563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.154502-0.695563L-2.714502-0.695563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.104502-0.775563L-2.764502-0.775563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.994502-0.845563L-2.874502-0.845563"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={-2.9545020842982908} schY={-0.9655627605372867} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.935097 5.136347L-5.055097 5.045306"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097 5.136347L-4.815097 5.045306"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.935097 5.136347L-4.935097 4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VCC"} schX={-4.935097267253358} schY={5.16509726725336} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-3.290065 3.655628L-3.300065 3.325628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.520065 3.325628L-3.080065 3.325628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.470065 3.245628L-3.130065 3.245628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.360065 3.175628L-3.240065 3.175628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={-3.3200648448355743} schY={3.055627605372859} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.462251 4.935097L1.452251 4.605097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.232251 4.605097L1.672251 4.605097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.282251 4.525097L1.622251 4.525097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.392251 4.455097L1.512251 4.455097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={1.4322510421491437} schY={4.335097267253359} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-8.956288-1.096688L-8.966288-1.426688"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.186288-1.426688L-8.746288-1.426688"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.136288-1.506688L-8.796288-1.506688"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.026288-1.576688L-8.906288-1.576688"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-8.986287633163505} schY={-1.6966882816118574} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.096688 0.182781L1.086688-0.147219"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.866688-0.147219L1.306688-0.147219"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.916688-0.227219L1.256688-0.227219"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.026688-0.297219L1.146688-0.297219"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={1.0666882816118566} schY={-0.4172186197313579} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.569535-0.548344L-4.579535-0.878344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.799535-0.878344L-4.359535-0.878344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.749535-0.958344L-4.409535-0.958344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.639535-1.028344L-4.519535-1.028344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-4.599534506716072} schY={-1.1483441408059285} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-8.590725 3.472846L-8.600725 3.142846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.820725 3.142846L-8.380725 3.142846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.770725 3.062846L-8.430725 3.062846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.660725 2.992846L-8.540725 2.992846"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={-8.620724872626218} schY={2.872846225104217} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.515227 5.30066L-11.525227 4.97066"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.745227 4.97066L-11.305227 4.97066"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.695227 4.89066L-11.355227 4.89066"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.585227 4.82066L-11.465227 4.82066"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={-11.545226956924504} schY={4.700660027790645} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M3.838409 4.551066L3.958409 4.642108"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.838409 4.551066L3.718409 4.642108"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.838409 4.551066L3.838409 4.752316"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"ISO_GND"} schX={3.8384089856415002} schY={4.522315886984717} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.139069 7.146942L9.019069 7.055901"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.139069 7.146942L9.259069 7.055901"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.139069 7.146942L9.139069 6.945692"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VOUT"} schX={9.139069013432145} schY={7.17569245020843} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M11.88079-4.405222L12.00079-4.31418"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-4.405222L11.76079-4.31418"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079-4.405222L11.88079-4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"ISO_GND"} schX={11.880789717461788} schY={-4.433971746178788} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M7.311255-4.405222L7.431255-4.31418"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255-4.405222L7.191255-4.31418"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.311255-4.405222L7.311255-4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"ISO_GND"} schX={7.311255210745717} schY={-4.433971746178788} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M3.472846 0.384031L3.352846 0.29299"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.472846 0.384031L3.592846 0.29299"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.472846 0.384031L3.472846 0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VCC"} schX={3.4728462251042203} schY={0.41278138026864397} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M11.88079 4.039659L11.76079 3.948617"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079 4.039659L12.00079 3.948617"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.88079 4.039659L11.88079 3.838409"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VOUT"} schX={11.880789717461788} schY={4.068408985641502} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M8.956288-0.384031L9.076288-0.29299"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288-0.384031L8.836288-0.29299"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.956288-0.384031L8.956288-0.182781"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"ISO_GND"} schX={8.956287633163502} schY={-0.4127813802686422} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M0.365563-5.483441L0.355563-5.813441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.135563-5.813441L0.575563-5.813441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.185563-5.893441L0.525563-5.893441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.295563-5.963441L0.415563-5.963441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={0.33556276053728595} schY={-6.083441408059288} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M2.558939-5.684691L2.678939-5.59365"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.558939-5.684691L2.438939-5.59365"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.558939-5.684691L2.558939-5.483441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"ISO_GND"} schX={2.558939323760999} schY={-5.713441408059289} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-8.956288-6.58013L-8.966288-6.91013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.186288-6.91013L-8.746288-6.91013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.136288-6.99013L-8.796288-6.99013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.026288-7.06013L-8.906288-7.06013"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-8.986287633163505} schY={-7.180129689671148} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-3.290065 6.415817L-3.410065 6.324775"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 6.415817L-3.170065 6.324775"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.290065 6.415817L-3.290065 6.214567"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VAUX"} schX={-3.290064844835573} schY={6.44456692913386} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-8.956288-4.002722L-9.076288-4.093763"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-4.002722L-8.836288-4.093763"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.956288-4.002722L-8.956288-4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VAUX"} schX={-8.956287633163505} schY={-3.973971746178787} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-6.031786-3.655628L-6.041786-3.985628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.261786-3.985628L-5.821786-3.985628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.211786-4.065628L-5.871786-4.065628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.101786-4.135628L-5.981786-4.135628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={-6.061785548865217} schY={-4.25562760537286} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-9.687413 2.394627L-9.807413 2.303585"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.687413 2.394627L-9.567413 2.303585"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.687413 2.394627L-9.687413 2.193377"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VCC"} schX={-9.687413154238078} schY={2.423376563223716} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M4.569535-3.655628L4.559535-3.985628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.339535-3.985628L4.779535-3.985628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.389535-4.065628L4.729535-4.065628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.499535-4.135628L4.619535-4.135628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={4.539534506716073} schY={-4.25562760537286} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.67954-4.203972L-11.770581-4.083972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.67954-4.203972L-11.770581-4.323972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.67954-4.203972L-11.88079-4.203972"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGOOD"} schX={-11.650789717461791} schY={-4.2039717461787856} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-11.67954-4.569535L-11.770581-4.449535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.67954-4.569535L-11.770581-4.689535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.67954-4.569535L-11.88079-4.569535"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"COMP"} schX={-11.650789717461791} schY={-4.569534506716073} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-11.67954-4.935097L-11.770581-4.815097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.67954-4.935097L-11.770581-5.055097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.67954-4.935097L-11.88079-4.935097"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"SS"} schX={-11.650789717461791} schY={-4.935097267253358} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.340319 1.645032L-9.249277 1.525032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.340319 1.645032L-9.249277 1.765032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.340319 1.645032L-9.139069 1.645032"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGOOD"} schX={-9.369069013432146} schY={1.6450324224177866} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-9.157538-2.193377L-9.066496-2.313377"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.157538-2.193377L-9.066496-2.073377"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.157538-2.193377L-8.956288-2.193377"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"COMP"} schX={-9.186287633163502} schY={-2.1933765632237154} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-9.340319 0.548344L-9.249277 0.428344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.340319 0.548344L-9.249277 0.668344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.340319 0.548344L-9.139069 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"SS"} schX={-9.369069013432146} schY={0.5483441408059289} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.784101-4.916629L-10.904101-5.00767"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.784101-4.916629L-10.664101-5.00767"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.784101-4.916629L-10.784101-5.117879"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VAUX"} schX={-10.784101435849932} schY={-4.887878647522001} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-10.784101-6.031786L-10.794101-6.361786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.014101-6.361786L-10.574101-6.361786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.964101-6.441786L-10.624101-6.441786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.854101-6.511786L-10.734101-6.511786"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"PGND"} schX={-10.814101435849931} schY={-6.631785548865217} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-7.110005-5.483441L-7.201047-5.363441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.110005-5.483441L-7.201047-5.603441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.110005-5.483441L-7.311255-5.483441"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"FB"} schX={-7.0812552107457165} schY={-5.483441408059287} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.368285 0.548344L-4.459326 0.668344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.368285 0.548344L-4.459326 0.428344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.368285 0.548344L-4.569535 0.548344"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"FB"} schX={-4.339534506716074} schY={0.5483441408059289} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-10.60132 7.512505L-10.72132 7.421464"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.60132 7.512505L-10.48132 7.421464"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.60132 7.512505L-10.60132 7.311255"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VIN"} schX={-10.60132005558129} schY={7.541255210745717} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M0.365563-3.637159L0.245563-3.728201"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.365563-3.637159L0.485563-3.728201"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.365563-3.637159L0.365563-3.838409"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VIN"} schX={0.36556276053728354} schY={-3.6084089856415} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-4.588003-2.376158L-4.496961-2.496158"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.588003-2.376158L-4.496961-2.256158"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.588003-2.376158L-4.386753-2.376158"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"SS"} schX={-4.616753126447431} schY={-2.376157943492359} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.472846-3.655628L-3.482846-3.985628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.702846-3.985628L-3.262846-3.985628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.652846-4.065628L-3.312846-4.065628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.542846-4.135628L-3.422846-4.135628"} strokeWidth={0.020000000000000004} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-3.5028462251042143} schY={-4.25562760537286} fontSize={0.18000000000000002} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematictext text={"1"} schX={4.935097267253358} schY={6.76291106993979} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={6.031785548865216} schY={6.580129689671146} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={4.935097267253358} schY={6.397348309402503} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"40V"} schX={5.300660027790645} schY={5.849004168596574} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"D1"} schX={5.099600509495136} schY={6.94569245020843} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={6.580129689671143} schY={-1.2794696618804995} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={6.580129689671143} schY={-1.6450324224177848} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4"} schX={4.752315886984714} schY={-1.2794696618804995} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={4.752315886984714} schY={-1.6450324224177848} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"U2"} schX={4.916819129226493} schY={-1.0784101435849927} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"PS2811-1-M-A"} schX={4.916819129226493} schY={-2.028873320981935} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={13.343040759610929} schY={5.849004168596574} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={13.343040759610929} schY={6.031785548865216} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"J2"} schX={13.507544001852715} schY={6.214566929133859} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ED350/2"} schX={13.507544001852715} schY={5.483441408059289} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-13.891384900416863} schY={6.397348309402503} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-13.891384900416863} schY={6.214566929133859} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"J1"} schX={-14.43972904122279} schY={6.580129689671146} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ED350/2"} schX={-14.43972904122279} schY={5.849004168596574} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"5"} schX={-13.160259379342293} schY={-5.300660027790643} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4"} schX={-13.160259379342293} schY={-5.1178786475220015} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1"} schX={-13.160259379342293} schY={-4.569534506716073} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-13.160259379342293} schY={-4.752315886984716} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={-13.160259379342293} schY={-4.935097267253358} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"J4"} schX={-13.70860352014822} schY={-4.386753126447429} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"3"} schX={-3.472846225104215} schY={-2.741720704029646} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"1"} schX={-3.8384089856415002} schY={-2.376157943492359} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-3.472846225104215} schY={-2.010595182955072} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"Q2"} schX={-3.4180118110236215} schY={-2.357879805465494} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"FMMT718TA"} schX={-3.4180118110236215} schY={-2.5406611857341357} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2"} schX={1.8278138026864283} schY={6.031785548865216} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"7"} schX={3.290064844835573} schY={6.76291106993979} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"5"} schX={1.8278138026864283} schY={6.214566929133859} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"6"} schX={3.290064844835573} schY={6.580129689671146} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1"} schX={1.8278138026864283} schY={5.300660027790645} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={1.8278138026864283} schY={6.94569245020843} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"9"} schX={3.290064844835573} schY={5.66622278832793} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"10"} schX={3.290064844835573} schY={5.849004168596574} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"T1"} schX={1.9923170449282068} schY={7.128473830477073} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"750317933"} schX={1.9923170449282068} schY={4.93509726725336} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={12.429133858267718} schY={-9.32185039370079} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2"} schX={12.886087308939324} schY={-9.32185039370079} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"LM5155 Flyback EVM Schematic"} schX={9.340128531727654} schY={-9.139069013432147} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Not shown in title block"} schX={12.246352477999075} schY={-8.77350625289486} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ti-lm5155evm-fly.SchDoc"} schX={8.810062528948588} schY={-9.50463177396943} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Sheet Title:"} schX={8.462777906438166} schY={-9.139069013432147} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Size:"} schX={12.301186892079663} schY={-9.50463177396943} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Mod. Date:"} schX={11.369001852709587} schY={-8.77350625289486} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"File:"} schX={8.462777906438166} schY={-9.50463177396943} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Sheet:"} schX={11.935624131542383} schY={-9.32185039370079} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"of"} schX={12.648471514590085} schY={-9.32185039370079} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"B"} schX={12.703305928670687} schY={-9.50463177396943} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"http://www.ti.com"} schX={13.52582213987958} schY={-9.50463177396943} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Contact:"} schX={8.462777906438166} schY={-9.687413154238078} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"N/A"} schX={9.139069013432145} schY={-9.687413154238078} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"LM5155EVM-FLY"} schX={9.41324108383511} schY={-8.9562876331635} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Project Title:"} schX={8.462777906438166} schY={-8.9562876331635} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Designed for:"} schX={8.462777906438166} schY={-8.77350625289486} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Public Release"} schX={9.468075497915702} schY={-8.77350625289486} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Assembly Variant:"} schX={8.462777906438166} schY={-9.32185039370079} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"=variantName"} schX={9.815360120426124} schY={-9.32185039370079} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"© Texas Instruments"} schX={13.343040759610929} schY={-9.687413154238078} fontSize={0.14622510421491436} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2018"} schX={14.622510421491434} schY={-9.687413154238078} fontSize={0.14622510421491436} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Drawn By:"} schX={5.721057202408524} schY={-9.50463177396943} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Engineer:"} schX={5.721057202408524} schY={-9.687413154238078} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"=DrawnBy"} schX={6.4887389995368245} schY={-9.50463177396943} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"N/A"} schX={6.4887389995368245} schY={-9.687413154238078} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Texas Instruments and/or its licensors do not warrant the accuracy or completeness of this specification or any information contained therein."} schX={-7.950989127779067} schY={-9.139069927339046} fontSize={0.18278138026864293} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"Texas Instruments and/or its licensors do not warrant that this design will meet the specifications, will be suitable for your application or"} schX={-7.950989127779067} schY={-9.321851307607693} fontSize={0.18278138026864293} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"fit for any particular purpose, or will operate in an implementation. Texas Instruments and/or its licensors do not warrant that the design is"} schX={-7.950989127779067} schY={-9.504632687876333} fontSize={0.18278138026864293} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"=VersionControl_RevNumber"} schX={6.580129689671143} schY={-9.32185039370079} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"SVN Rev:"} schX={5.721057202408524} schY={-9.32185039370079} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"BMC029"} schX={6.397348309402503} schY={-9.139069013432147} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Number:"} schX={5.721057202408524} schY={-9.139069013432147} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Rev:"} schX={7.548871005094952} schY={-9.139069013432147} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"A"} schX={8.042380731820288} schY={-9.139069013432147} fontSize={0.18278138026864293} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"TID #:"} schX={5.721057202408524} schY={-8.9562876331635} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"N/A"} schX={6.580129689671143} schY={-8.864896943029182} fontSize={0.18278138026864293} color={"#000080"} anchor="center_left" schRotation={0} />
      <schematictext text={"Orderable:"} schX={5.721057202408524} schY={-8.77350625289486} fontSize={0.18278138026864293} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"=EVM_orderable"} schX={6.580129689671143} schY={-8.682115562760538} fontSize={0.18278138026864293} color={"#000080"} anchor="center_left" schRotation={0} />
      </symbol>} />
        </board>
      )"
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

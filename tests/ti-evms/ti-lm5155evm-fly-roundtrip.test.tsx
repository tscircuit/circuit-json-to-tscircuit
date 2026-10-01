import { expect, test } from "bun:test"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"

test(
  "TI LM5155EVM-FLY Circuit JSON to tscircuit round trip",
  async () => {
    const result = await createTiEvmRoundtrip({
      componentName: "Lm5155EvmFly",
      fixtureName: "lm5155evm-fly",
    })

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
      <silkscreenrect pcbX={32.89930047} pcbY={44.44359666} width={0.8249996199999985} height={0.19999960000000058} layer="top" strokeWidth={0.19999960000000058} stroke="none" filled={true} />
      <silkscreenrect pcbX={49.5308001} pcbY={53.57422102} width={0.508} height={1.7271999999999998} layer="top" strokeWidth={0.508} stroke="none" filled={true} />
      <silkscreenrect pcbX={26.988803020000002} pcbY={53.107601429999995} width={0.9999980000000029} height={0.4799965000000009} layer="top" strokeWidth={0.4799965000000009} stroke="none" filled={true} />
      <silkscreenrect pcbX={57.4548} pcbY={75.89520127} width={0.508} height={3.149602540000005} layer="top" strokeWidth={0.508} stroke="none" filled={true} />
      <silkscreenrect pcbX={48.48908006} pcbY={51.41599572} width={0.508} height={1.7271999999999998} layer="top" strokeWidth={0.508} stroke="none" filled={true} />
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
            </footprint>} />
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

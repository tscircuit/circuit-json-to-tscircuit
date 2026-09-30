import { expect, test } from "bun:test"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"

test(
  "TI LM251772EVM-PD Circuit JSON to tscircuit round trip",
  async () => {
    const result = await createTiEvmRoundtrip({
      componentName: "Lm251772EvmPd",
      fixtureName: "lm251772evm-pd",
    })

    expect(result.generatedTscircuit).toMatchInlineSnapshot(`
      "export default () => (
        <board width="104.14mm" height="91.44mm" outline={[{ x: 17.5768, y: 38.9636 }, { x: 17.5768, y: 130.40359999999998 }, { x: 121.71679491999998, y: 130.40359999999998 }, { x: 121.71679999999999, y: 38.9636 }, { x: 17.5768, y: 38.9636 }]} thickness="1.6mm" layers={4} material="fr4">
          <chip footprint={<footprint>
              <platedhole  portHints={["1"]} pcbX="116.6368mm" pcbY="111.22659999999999mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="180deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="114.0968mm" pcbY="111.22659999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="111.5568mm" pcbY="111.22659999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="116.6368mm" pcbY="125.3236mm" outerDiameter="5.842mm" holeDiameter="3.175mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="116.6368mm" pcbY="44.0436mm" outerDiameter="5.842mm" holeDiameter="3.175mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="22.6568mm" pcbY="125.3236mm" outerDiameter="5.842mm" holeDiameter="3.175mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="22.6568mm" pcbY="44.0436mm" outerDiameter="5.842mm" holeDiameter="3.175mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="41.50579964mm" pcbY="48.8845987mm" holeShape="circle" padShape="rect" holeDiameter="1.04000046mm" rectPadWidth="1.58999936mm" rectPadHeight="1.58999936mm" rectBorderRadius="0.04769998079999999mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["3"]} pcbX="44.04579964mm" pcbY="48.8845987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["5"]} pcbX="46.58579964mm" pcbY="48.8845987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["7"]} pcbX="49.12579964mm" pcbY="48.8845987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["9"]} pcbX="51.66579964mm" pcbY="48.8845987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="41.50579964mm" pcbY="51.4245987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["4"]} pcbX="44.04579964mm" pcbY="51.4245987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["6"]} pcbX="46.58579964mm" pcbY="51.4245987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["8"]} pcbX="49.12579964mm" pcbY="51.4245987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["10"]} pcbX="51.66579964mm" pcbY="51.4245987mm" outerDiameter="1.58999936mm" holeDiameter="1.04000046mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="61.90579947999999mm" pcbY="46.76098598mm" holeShape="circle" padShape="rect" holeDiameter="1.69999914mm" rectPadWidth="2.59999988mm" rectPadHeight="2.59999988mm" rectBorderRadius="0.0519999976mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["4"]} pcbX="69.90579872mm" pcbY="41.76098836mm" outerDiameter="1.54999944mm" holeDiameter="1.00000054mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="58.905800400000004mm" pcbY="41.76098836mm" outerDiameter="1.54999944mm" holeDiameter="1.00000054mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="66.90579964mm" pcbY="46.76098598mm" outerDiameter="2.59999988mm" holeDiameter="1.69999914mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="74.1458004mm" pcbY="41.95268977999999mm" outerDiameter="1.54999944mm" holeDiameter="1.00000054mm" shape="circle" />
      <platedhole  portHints={["4"]} pcbX="85.14579872mm" pcbY="41.95268977999999mm" outerDiameter="1.54999944mm" holeDiameter="1.00000054mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="82.14579963999999mm" pcbY="51.9526901mm" holeShape="circle" padShape="rect" holeDiameter="1.69999914mm" rectPadWidth="2.59999988mm" rectPadHeight="2.59999988mm" rectBorderRadius="0.0519999976mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="77.14579948mm" pcbY="51.9526901mm" outerDiameter="2.59999988mm" holeDiameter="1.69999914mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="68.3768mm" pcbY="125.3236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="65.8368mm" pcbY="125.3236mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["3"]} pcbX="116.6368mm" pcbY="84.6836mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="114.0968mm" pcbY="84.6836mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="111.5568mm" pcbY="84.6836mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="92.5068mm" pcbY="125.3236mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="106.4768mm" pcbY="125.3236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="103.93679999999999mm" pcbY="125.3236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="101.3968mm" pcbY="125.3236mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="114.0968mm" pcbY="107.5436mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="116.6368mm" pcbY="107.5436mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="111.5568mm" pcbY="118.97359999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="114.0968mm" pcbY="118.97359999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="116.6368mm" pcbY="118.97359999999999mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="180deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["5"]} pcbX="106.4768mm" pcbY="121.48460082mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.10000034mm" shape="circle" />
      <platedhole  portHints={["4"]} pcbX="103.93679999999999mm" pcbY="121.48460082mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.10000034mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="101.3968mm" pcbY="121.48460082mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.10000034mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="98.85679999999999mm" pcbY="121.48460082mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.10000034mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="96.3168mm" pcbY="121.48460082mm" holeShape="circle" padShape="rect" holeDiameter="1.10000034mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="114.0968mm" pcbY="99.9236mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="116.6368mm" pcbY="99.9236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="114.0968mm" pcbY="103.7336mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="116.6368mm" pcbY="103.7336mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="114.0968mm" pcbY="115.1636mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="116.6368mm" pcbY="115.1636mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="96.3168mm" pcbY="125.3236mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="75.9968mm" pcbY="125.3236mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="111.5568mm" pcbY="92.3036mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="114.0968mm" pcbY="92.3036mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="116.6368mm" pcbY="92.3036mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="180deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="110.2868mm" pcbY="125.3236mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="116.6368mm" pcbY="80.8736mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="111.5568mm" pcbY="88.4936mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="114.0968mm" pcbY="88.4936mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="116.6368mm" pcbY="88.4936mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="180deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="114.0968mm" pcbY="96.11359999999999mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="116.6368mm" pcbY="96.11359999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="116.6368mm" pcbY="77.0636mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="72.18679999999999mm" pcbY="125.3236mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="46.7868mm" pcbY="122.78359999999999mm" holeShape="circle" padShape="rect" holeDiameter="1.016mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="46.7868mm" pcbY="125.3236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="49.3268mm" pcbY="122.78359999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["4"]} pcbX="49.3268mm" pcbY="125.3236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["5"]} pcbX="51.8668mm" pcbY="122.78359999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["6"]} pcbX="51.8668mm" pcbY="125.3236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["7"]} pcbX="54.4068mm" pcbY="122.78359999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["8"]} pcbX="54.4068mm" pcbY="125.3236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["9"]} pcbX="56.946799999999996mm" pcbY="122.78359999999999mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["10"]} pcbX="56.946799999999996mm" pcbY="125.3236mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.016mm" shape="circle" />
      <platedhole  portHints={["6"]} pcbX="116.76379999999999mm" pcbY="64.82260086000001mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["5"]} pcbX="116.76379999999999mm" pcbY="62.28260086mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["4"]} pcbX="116.76379999999999mm" pcbY="59.74260086mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="116.76379999999999mm" pcbY="57.202600860000004mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="116.76379999999999mm" pcbY="54.662600860000005mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="116.76379999999999mm" pcbY="52.12260086mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="106.60379999999999mm" pcbY="50.1396mm" outerDiameter="11.99999886mm" holeDiameter="6.858mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="84.8868mm" pcbY="64.74459999999999mm" outerDiameter="2.2098mm" holeDiameter="1.6001999999999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="84.8868mm" pcbY="68.8086mm" outerDiameter="2.2098mm" holeDiameter="1.6001999999999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="22.6568mm" pcbY="74.77759999999999mm" outerDiameter="2.2098mm" holeDiameter="1.6001999999999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="32.8168mm" pcbY="50.1396mm" outerDiameter="11.99999886mm" holeDiameter="6.858mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="66.34479999999999mm" pcbY="85.5726mm" outerDiameter="2.2098mm" holeDiameter="1.6001999999999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="61.8998mm" pcbY="85.5726mm" outerDiameter="2.2098mm" holeDiameter="1.6001999999999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="22.7838mm" pcbY="51.9176mm" holeShape="circle" padShape="rect" holeDiameter="1.1500002399999998mm" rectPadWidth="1.6499992399999999mm" rectPadHeight="1.6499992399999999mm" rectBorderRadius="0.41249980999999997mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="22.7838mm" pcbY="54.4576mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="22.7838mm" pcbY="56.9976mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["4"]} pcbX="22.7838mm" pcbY="59.5376mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["5"]} pcbX="22.7838mm" pcbY="62.0776mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["6"]} pcbX="22.7838mm" pcbY="64.6176mm" outerDiameter="1.6499992399999999mm" holeDiameter="1.1500002399999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="22.6568mm" pcbY="80.8736mm" outerDiameter="2.2098mm" holeDiameter="1.6001999999999998mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="106.60379999999999mm" pcbY="66.7766mm" outerDiameter="11.99999886mm" holeDiameter="6.858mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="32.8168mm" pcbY="66.5226mm" outerDiameter="11.99999886mm" holeDiameter="6.858mm" shape="circle" />
      <smtpad portHints={["2"]} pcbX="69.9008mm" pcbY="79.85062262mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.7499990399999998mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="69.9008mm" pcbY="82.5506223mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.7499990399999998mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="57.936119839999996mm" pcbY="82.83842208mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.7499990399999998mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="57.936119839999996mm" pcbY="85.53842175999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="1.7499990399999998mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="67.52780754mm" pcbY="82.643599mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="67.52780754mm" pcbY="83.29360023999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.49999899999999997mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="82.89280093999999mm" pcbY="96.3676mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="84.41680093999999mm" pcbY="96.3676mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="82.65579862mm" pcbY="103.30264835999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="84.17979862mm" pcbY="103.30264835999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="71.72959999999999mm" pcbY="81.53979627999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="71.72959999999999mm" pcbY="80.01579628mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="78.47430076mm" pcbY="55.62359969999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="81.77429923999999mm" pcbY="55.62359969999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["5-6-7-8"]} pcbX="76.53330134mm" pcbY="84.9595837mm" layer="top" solderMaskMargin="-999.9999989799999mm" cornerRadius="0.044099988mm" width="4.4099988mm" height="4.454999979999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["4"]} pcbX="72.57079974mm" pcbY="83.0545837mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="72.57079974mm" pcbY="84.32458369999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="72.57079974mm" pcbY="85.59458369999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="72.57079974mm" pcbY="86.8645837mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="78.79079999999999mm" pcbY="119.9896mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="80.31479999999999mm" pcbY="119.9896mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="101.3968mm" pcbY="115.26210119999999mm" layer="top" solderMaskMargin="0.49999899999999997mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="98.425mm" pcbY="42.5196mm" layer="top" solderMaskMargin="0.49999899999999997mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="39.4325475mm" pcbY="42.5196mm" layer="top" solderMaskMargin="0.49999899999999997mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="30.973560099999997mm" pcbY="123.86136009999998mm" layer="top" solderMaskMargin="0.49999899999999997mm" radius="0.50000027mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="84.99279928mm" pcbY="109.48459942mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="84.99279928mm" pcbY="109.98460096mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="84.99279928mm" pcbY="110.48459996mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["4"]} pcbX="84.99279928mm" pcbY="110.98459895999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["5"]} pcbX="84.99279928mm" pcbY="111.4846005mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["6"]} pcbX="84.99279928mm" pcbY="111.98459949999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["7"]} pcbX="84.99279928mm" pcbY="112.48460104mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["8"]} pcbX="84.99279928mm" pcbY="112.98460003999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["9"]} pcbX="84.99279928mm" pcbY="113.48459904mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["10"]} pcbX="84.99279928mm" pcbY="113.98460057999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["11"]} pcbX="84.34280057999999mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["12"]} pcbX="83.84279903999999mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["13"]} pcbX="83.34280003999999mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["14"]} pcbX="82.84280104mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["15"]} pcbX="82.3427995mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["16"]} pcbX="81.8428005mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["17"]} pcbX="81.34279896mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["18"]} pcbX="80.84279996000001mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["19"]} pcbX="80.34280096mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["20"]} pcbX="79.84279941999999mm" pcbY="114.63459928mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["21"]} pcbX="79.19280072mm" pcbY="113.98460057999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["22"]} pcbX="79.19280072mm" pcbY="113.48459904mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["23"]} pcbX="79.19280072mm" pcbY="112.98460003999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["24"]} pcbX="79.19280072mm" pcbY="112.48460104mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["25"]} pcbX="79.19280072mm" pcbY="111.98459949999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["26"]} pcbX="79.19280072mm" pcbY="111.4846005mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["27"]} pcbX="79.19280072mm" pcbY="110.98459895999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["28"]} pcbX="79.19280072mm" pcbY="110.48459996mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["29"]} pcbX="79.19280072mm" pcbY="109.98460096mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["30"]} pcbX="79.19280072mm" pcbY="109.48459942mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.5999987999999999mm" height="0.24999949999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["31"]} pcbX="79.84279941999999mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["32"]} pcbX="80.34280096mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["33"]} pcbX="80.84279996000001mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["34"]} pcbX="81.34279896mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["35"]} pcbX="81.8428005mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["36"]} pcbX="82.3427995mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["37"]} pcbX="82.84280104mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["38"]} pcbX="83.34280003999999mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["39"]} pcbX="83.84279903999999mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["40"]} pcbX="84.34280057999999mm" pcbY="108.83460072mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.24999949999999999mm" height="0.5999987999999999mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["41"]} pcbX="82.0928mm" pcbY="111.7346mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="3.30000102mm" height="3.30000102mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="79.93379999999999mm" pcbY="57.9745983mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="81.45779999999999mm" pcbY="57.9745983mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.22034556mm" pcbY="59.93400256mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.91499944mm" height="1.2200001mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="77.94534576mm" pcbY="59.93400256mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.91499944mm" height="1.2200001mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.62026601999999mm" pcbY="103.3526mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="80.09626601999999mm" pcbY="103.3526mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.7118mm" pcbY="87.18359246mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="81.7118mm" pcbY="88.53360753999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="87.1728mm" pcbY="88.87359923999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="87.1728mm" pcbY="85.57360076mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="79.93379999999999mm" pcbY="88.53360753999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="79.93379999999999mm" pcbY="87.18359246mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="84.1248mm" pcbY="88.87359923999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="84.1248mm" pcbY="85.57360076mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="93.2688mm" pcbY="88.87359923999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="93.2688mm" pcbY="85.57360076mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="90.2208mm" pcbY="88.87359923999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="90.2208mm" pcbY="85.57360076mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["5-6-7-8"]} pcbX="78.70929901999999mm" pcbY="92.9386mm" layer="top" solderMaskMargin="-999.9999989799999mm" cornerRadius="0.044099988mm" width="4.4099988mm" height="4.454999979999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["4"]} pcbX="82.67180062mm" pcbY="94.8436mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="82.67180062mm" pcbY="93.5736mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="82.67180062mm" pcbY="92.3036mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="82.67180062mm" pcbY="91.03359999999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["5-6-7-8"]} pcbX="78.70929901999999mm" pcbY="99.9236mm" layer="top" solderMaskMargin="-999.9999989799999mm" cornerRadius="0.044099988mm" width="4.4099988mm" height="4.454999979999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["4"]} pcbX="82.67180062mm" pcbY="101.8286mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="82.67180062mm" pcbY="100.5586mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="82.67180062mm" pcbY="99.2886mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="82.67180062mm" pcbY="98.01859999999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9249994199999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="84.5058mm" pcbY="121.7676mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="84.5058mm" pcbY="120.2436mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="83.1088mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="83.1088mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="84.5058mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="84.5058mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="81.7118mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="81.7118mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="83.1088mm" pcbY="121.7676mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.5848mm" pcbY="121.7676mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="83.1088mm" pcbY="120.2436mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.5848mm" pcbY="120.2436mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="88.6968mm" pcbY="105.1306mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="88.6968mm" pcbY="106.14659999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="66.06897124mm" pcbY="82.89360104mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9000007400000001mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="66.06897124mm" pcbY="81.39360149999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.49999899999999997mm" height="0.9000007400000001mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="76.8858mm" pcbY="113.51259999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="76.8858mm" pcbY="114.5286mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="76.8858mm" pcbY="115.2906mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="76.8858mm" pcbY="116.30659999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="79.30537605999999mm" pcbY="110.4773mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="79.81337606mm" pcbY="110.4773mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="53.0098mm" pcbY="99.2886mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="53.0098mm" pcbY="97.7646mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["9"]} pcbX="72.18679999999999mm" pcbY="59.66159772mm" layer="top" solderMaskMargin="-2.99999908mm" cornerRadius="0.10849997349999997mm" width="4.339998939999999mm" height="5.39999936mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="74.09179999999999mm" pcbY="63.561597539999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.86000082mm" height="0.50999898mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="72.8218mm" pcbY="63.561597539999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.86000082mm" height="0.50999898mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="71.5518mm" pcbY="63.561597539999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.86000082mm" height="0.50999898mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["4"]} pcbX="70.2818mm" pcbY="63.561597539999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.86000082mm" height="0.50999898mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["5"]} pcbX="70.2818mm" pcbY="57.921598659999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.86000082mm" height="0.50999898mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["6"]} pcbX="71.5518mm" pcbY="57.921598659999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.86000082mm" height="0.50999898mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["7"]} pcbX="72.8218mm" pcbY="57.921598659999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.86000082mm" height="0.50999898mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["8"]} pcbX="74.09179999999999mm" pcbY="57.921598659999994mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.0994498011mm" width="0.86000082mm" height="0.50999898mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.68579982mm" pcbY="80.2535987mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="49.98580046mm" pcbY="80.2535987mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="42.68579982mm" pcbY="71.10959869999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="49.98580046mm" pcbY="71.10959869999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="42.68579982mm" pcbY="61.965598699999994mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="49.98580046mm" pcbY="61.965598699999994mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="45.320800899999995mm" pcbY="86.37860042mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="48.62079938mm" pcbY="86.37860042mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="45.320800899999995mm" pcbY="89.55360042mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="48.62079938mm" pcbY="89.55360042mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="45.4478009mm" pcbY="92.95359869999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="48.74779938mm" pcbY="92.95359869999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="49.12879938mm" pcbY="98.64959696mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="49.12879938mm" pcbY="95.34959848mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="51.415800139999995mm" pcbY="96.68359886mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="51.415800139999995mm" pcbY="98.03359869999998mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="55.803799999999995mm" pcbY="97.7646mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="54.279799999999994mm" pcbY="97.7646mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1-2-3"]} pcbX="55.98379964mm" pcbY="94.77259937999999mm" layer="top" solderMaskMargin="-999.9999989799999mm" radius="0.40500046mm" shape="circle" />
      <smtpad portHints={["4"]} pcbX="55.98379964mm" pcbY="96.07259932mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0492999014mm" width="0.33999932mm" height="0.9000007400000001mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["5-6-7-8"]} pcbX="53.813798899999995mm" pcbY="95.0976mm" layer="top" solderMaskMargin="-999.9999989799999mm" radius="1.03049959mm" shape="circle" />
      <smtpad portHints={["2"]} pcbX="55.803799999999995mm" pcbY="92.4306mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="54.279799999999994mm" pcbY="92.4306mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["5-6-7-8"]} pcbX="53.813798899999995mm" pcbY="89.7636mm" layer="top" solderMaskMargin="-999.9999989799999mm" radius="1.03049959mm" shape="circle" />
      <smtpad portHints={["4"]} pcbX="55.98379964mm" pcbY="90.73859931999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0492999014mm" width="0.33999932mm" height="0.9000007400000001mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1-2-3"]} pcbX="55.98379964mm" pcbY="89.43859937999999mm" layer="top" solderMaskMargin="-999.9999989799999mm" radius="0.40500046mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="90.34779999999999mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="90.34779999999999mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="77.2922mm" pcbY="61.7145959mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.09999979999999999mm" width="0.73000108mm" height="0.39999919999999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="77.9526mm" pcbY="61.7145959mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.09999979999999999mm" width="0.73000108mm" height="0.39999919999999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="78.613mm" pcbY="61.7145959mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.09999979999999999mm" width="0.73000108mm" height="0.39999919999999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["4"]} pcbX="79.2734mm" pcbY="61.7145959mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.09999979999999999mm" width="0.73000108mm" height="0.39999919999999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["8"]} pcbX="77.2922mm" pcbY="64.79459736mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.09999979999999999mm" width="0.7100011199999999mm" height="0.39999919999999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["7"]} pcbX="77.9526mm" pcbY="64.79459736mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.09999979999999999mm" width="0.7100011199999999mm" height="0.39999919999999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["6"]} pcbX="78.613mm" pcbY="64.79459736mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.09999979999999999mm" width="0.7100011199999999mm" height="0.39999919999999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["5"]} pcbX="79.2734mm" pcbY="64.79459736mm" layer="top" solderMaskMargin="-0.04999989999999999mm" cornerRadius="0.09999979999999999mm" width="0.7100011199999999mm" height="0.39999919999999994mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["9"]} pcbX="78.2828mm" pcbY="63.99459896mm" layer="top" solderMaskMargin="-2.00000108mm" cornerRadius="0.10395002069999999mm" width="2.31000046mm" height="3.30000102mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="96.8248mm" pcbY="118.97359999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="98.3488mm" pcbY="118.97359999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="105.96879745999999mm" pcbY="118.7958mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="104.44479745999999mm" pcbY="118.7958mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="74.3458mm" pcbY="117.06859999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="75.8698mm" pcbY="117.06859999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="74.3458mm" pcbY="115.6716mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="75.8698mm" pcbY="115.6716mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="74.3458mm" pcbY="112.8776mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="75.8698mm" pcbY="112.8776mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="74.3458mm" pcbY="114.27459999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="75.8698mm" pcbY="114.27459999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="90.34779999999999mm" pcbY="107.6706mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="88.82379999999999mm" pcbY="107.6706mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="76.8858mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="77.9018mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="87.4268mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="87.4268mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="77.1398mm" pcbY="119.9896mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="77.1398mm" pcbY="118.4656mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="80.31479999999999mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="80.31479999999999mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="88.82379999999999mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="88.82379999999999mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="86.0298mm" pcbY="107.79759999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="86.0298mm" pcbY="106.2736mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="87.164799mm" pcbY="120.11659999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="88.68879899999999mm" pcbY="120.11659999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="93.6498mm" pcbY="106.52759999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="94.66579999999999mm" pcbY="106.52759999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="86.0298mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="86.0298mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="78.9178mm" pcbY="117.3226mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="78.9178mm" pcbY="118.8466mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="87.4268mm" pcbY="107.79759999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="87.4268mm" pcbY="106.2736mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="88.82379999999999mm" pcbY="114.65559999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="90.34779999999999mm" pcbY="114.65559999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="90.34779999999999mm" pcbY="116.0526mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="88.82379999999999mm" pcbY="116.0526mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="88.82379999999999mm" pcbY="113.2586mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="90.34779999999999mm" pcbY="113.2586mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="88.82379999999999mm" pcbY="111.8616mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="90.34779999999999mm" pcbY="111.8616mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="88.82379999999999mm" pcbY="110.46459999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="90.34779999999999mm" pcbY="110.46459999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="80.8228mm" pcbY="107.6706mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="79.8068mm" pcbY="107.6706mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="77.9018mm" pcbY="108.8136mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="77.9018mm" pcbY="110.3376mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="78.02879999999999mm" pcbY="113.0046mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="78.02879999999999mm" pcbY="111.98859999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.6095999999999999mm" height="0.381mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="88.82379999999999mm" pcbY="109.0676mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="90.34779999999999mm" pcbY="109.0676mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="93.7768mm" pcbY="105.2576mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="95.3008mm" pcbY="105.2576mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="84.6328mm" pcbY="106.2736mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="84.6328mm" pcbY="107.79759999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="89.96679999999999mm" pcbY="105.00359999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="89.96679999999999mm" pcbY="106.52759999999999mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="92.7608mm" pcbY="105.2576mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="91.2368mm" pcbY="105.2576mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="68.76032221999999mm" pcbY="63.70235164mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="68.76032221999999mm" pcbY="65.22635164mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="67.2338mm" pcbY="65.03860754mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="67.2338mm" pcbY="63.688592459999995mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["3"]} pcbX="66.23379946mm" pcbY="61.5305983mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.9000007400000001mm" height="0.70000114mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="68.23380054mm" pcbY="62.48059894mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.9000007400000001mm" height="0.70000114mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="68.23380054mm" pcbY="60.580597659999995mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.9000007400000001mm" height="0.70000114mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="66.17779245999999mm" pcbY="58.8635983mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="67.52780754mm" pcbY="58.8635983mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="100.39582917999999mm" pcbY="56.646859019999994mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="100.39582917999999mm" pcbY="59.9468575mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0495000153mm" width="1.10000034mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="73.5057966mm" pcbY="96.3526013mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.18000126mm" height="14.359999219999999mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="62.905797480000004mm" pcbY="96.3526013mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="3.18000126mm" height="14.359999219999999mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="78.9178mm" pcbY="66.12659876mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.70000114mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="78.9178mm" pcbY="67.42660124mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.70000114mm" height="2.20000068mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="57.84325998mm" pcbY="93.15960032mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.70000114mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="59.14326246mm" pcbY="93.15960032mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.70000114mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="57.82834001999999mm" pcbY="96.52760222mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.70000114mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="59.128342499999995mm" pcbY="96.52760222mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0490000798mm" width="0.70000114mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="89.42179981999999mm" pcbY="62.21959869999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="96.72180046mm" pcbY="62.21959869999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="89.42179981999999mm" pcbY="71.3635987mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="96.72180046mm" pcbY="71.3635987mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="114.2238mm" pcbY="57.797593320000004mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="114.2238mm" pcbY="59.1476084mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.048750092999999994mm" width="0.6500012399999999mm" height="0.70000114mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="25.3238mm" pcbY="57.467599060000005mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.9500006400000001mm" height="1.00000054mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="25.3238mm" pcbY="59.0675984mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.9500006400000001mm" height="1.00000054mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="89.42179981999999mm" pcbY="80.50759869999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="96.72180046mm" pcbY="80.50759869999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.055000017mm" width="4.19999922mm" height="2.20000068mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="74.2941364mm" pcbY="81.3552475mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="72.7701364mm" pcbY="81.3552475mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="57.75334144mm" pcbY="87.44876846mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.050000027mm" width="1.00000054mm" height="1.25000004mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="57.75334144mm" pcbY="89.44876954mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.050000027mm" width="1.00000054mm" height="1.25000004mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="69.9008mm" pcbY="84.63842102mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.050000027mm" width="1.00000054mm" height="1.25000004mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="69.9008mm" pcbY="86.6384221mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.050000027mm" width="1.00000054mm" height="1.25000004mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["5-6-7-8"]} pcbX="56.5238011mm" pcbY="100.5586mm" layer="top" solderMaskMargin="-999.9999989799999mm" radius="1.03049959mm" shape="circle" />
      <smtpad portHints={["4"]} pcbX="54.353800359999994mm" pcbY="99.58360067999999mm" layer="top" solderMaskMargin="0mm" cornerRadius="0.0492999014mm" width="0.33999932mm" height="0.9000007400000001mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1-2-3"]} pcbX="54.353800359999994mm" pcbY="100.88360062mm" layer="top" solderMaskMargin="-999.9999989799999mm" radius="0.40500046mm" shape="circle" />
      <smtpad portHints={["1"]} pcbX="80.29518866mm" pcbY="96.41755164mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.81918866mm" pcbY="96.41755164mm" layer="top" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.77429923999999mm" pcbY="61.9368459mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="81.77429923999999mm" pcbY="63.4608459mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="66.90579964mm" pcbY="51.0435987mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="2.74299934mm" height="2.159mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="62.485798319999994mm" pcbY="51.0435987mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="2.74299934mm" height="2.159mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="77.14579948mm" pcbY="56.123598699999995mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="2.74299934mm" height="2.159mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="81.56580079999999mm" pcbY="56.123598699999995mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="2.74299934mm" height="2.159mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="60.3758mm" pcbY="120.87859999999999mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="60.3758mm" pcbY="122.40259999999999mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="58.8518mm" pcbY="120.87859999999999mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="58.8518mm" pcbY="122.40259999999999mm" layer="bottom" solderMaskMargin="0.04999989999999999mm" width="0.889mm" height="0.508mm" ccwRotation={180} shape="rotated_rect" />
      <silkscreenpath route={[{"x":67.83255166000001,"y":83.8708},{"x":67.83189975843669,"y":83.88074609584717},{"x":67.82995520796322,"y":83.89052201123681},{"x":67.82675128037735,"y":83.89996047754622},{"x":67.82234279576836,"y":83.9089},{"x":67.8168051845302,"y":83.91718762089046},{"x":67.81023319672641,"y":83.92468153672641},{"x":67.80273928089046,"y":83.93125352453019},{"x":67.79445166000001,"y":83.93679113576836},{"x":67.78551213754622,"y":83.94119962037735},{"x":67.77607367123682,"y":83.94440354796322},{"x":67.76629775584718,"y":83.94634809843669},{"x":67.75635166,"y":83.947},{"x":67.74640556415282,"y":83.94634809843669},{"x":67.73662964876318,"y":83.94440354796322},{"x":67.72719118245378,"y":83.94119962037735},{"x":67.71825166,"y":83.93679113576836},{"x":67.70996403910954,"y":83.93125352453019},{"x":67.70247012327359,"y":83.92468153672641},{"x":67.6958981354698,"y":83.91718762089046},{"x":67.69036052423164,"y":83.9089},{"x":67.68595203962265,"y":83.89996047754622},{"x":67.68274811203678,"y":83.89052201123681},{"x":67.68080356156331,"y":83.88074609584717},{"x":67.68015166,"y":83.8708},{"x":67.68080356156331,"y":83.86085390415282},{"x":67.68274811203678,"y":83.85107798876318},{"x":67.68595203962265,"y":83.84163952245378},{"x":67.69036052423164,"y":83.8327},{"x":67.6958981354698,"y":83.82441237910953},{"x":67.70247012327359,"y":83.81691846327358},{"x":67.70996403910954,"y":83.8103464754698},{"x":67.71825166,"y":83.80480886423163},{"x":67.72719118245378,"y":83.80040037962264},{"x":67.73662964876318,"y":83.79719645203677},{"x":67.74640556415282,"y":83.7952519015633},{"x":67.75635166,"y":83.7946},{"x":67.76629775584718,"y":83.7952519015633},{"x":67.77607367123682,"y":83.79719645203677},{"x":67.78551213754622,"y":83.80040037962264},{"x":67.79445166000001,"y":83.80480886423163},{"x":67.80273928089046,"y":83.8103464754698},{"x":67.81023319672641,"y":83.81691846327358},{"x":67.8168051845302,"y":83.82441237910953},{"x":67.82234279576836,"y":83.8327},{"x":67.82675128037735,"y":83.84163952245378},{"x":67.82995520796322,"y":83.85107798876318},{"x":67.83189975843669,"y":83.86085390415282},{"x":67.83255166000001,"y":83.8708}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":71.68330088,"y":86.8645837},{"x":71.68223147894548,"y":86.88089960716421},{"x":71.67904157353048,"y":86.89693634463323},{"x":71.67378574392103,"y":86.91241951938272},{"x":71.66655391881896,"y":86.92708420999999},{"x":71.65746983675682,"y":86.94067949956275},{"x":71.64668892889723,"y":86.95297276889723},{"x":71.63439565956276,"y":86.96375367675681},{"x":71.62080037,"y":86.97283775881895},{"x":71.60613567938273,"y":86.98006958392102},{"x":71.59065250463324,"y":86.98532541353048},{"x":71.57461576716422,"y":86.98851531894547},{"x":71.55829986,"y":86.98958472},{"x":71.54198395283578,"y":86.98851531894547},{"x":71.52594721536676,"y":86.98532541353048},{"x":71.51046404061726,"y":86.98006958392102},{"x":71.49579935,"y":86.97283775881895},{"x":71.48220406043725,"y":86.96375367675681},{"x":71.46991079110278,"y":86.95297276889723},{"x":71.45912988324318,"y":86.94067949956275},{"x":71.45004580118103,"y":86.92708420999999},{"x":71.44281397607897,"y":86.91241951938272},{"x":71.43755814646951,"y":86.89693634463323},{"x":71.43436824105451,"y":86.88089960716421},{"x":71.43329884,"y":86.8645837},{"x":71.43436824105451,"y":86.84826779283577},{"x":71.43755814646951,"y":86.83223105536675},{"x":71.44281397607897,"y":86.81674788061726},{"x":71.45004580118103,"y":86.80208318999999},{"x":71.45912988324318,"y":86.78848790043725},{"x":71.46991079110278,"y":86.77619463110277},{"x":71.48220406043725,"y":86.76541372324317},{"x":71.49579935,"y":86.75632964118103},{"x":71.51046404061726,"y":86.74909781607896},{"x":71.52594721536676,"y":86.74384198646952},{"x":71.54198395283578,"y":86.7406520810545},{"x":71.55829986,"y":86.73958268},{"x":71.57461576716422,"y":86.7406520810545},{"x":71.59065250463324,"y":86.74384198646952},{"x":71.60613567938273,"y":86.74909781607896},{"x":71.62080037,"y":86.75632964118103},{"x":71.63439565956276,"y":86.76541372324317},{"x":71.64668892889723,"y":86.77619463110277},{"x":71.65746983675682,"y":86.78848790043725},{"x":71.66655391881896,"y":86.80208318999999},{"x":71.67378574392103,"y":86.81674788061726},{"x":71.67904157353048,"y":86.83223105536675},{"x":71.68223147894548,"y":86.84826779283577},{"x":71.68330088,"y":86.8645837}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":21.439007160000003,"y":108.69385424},{"x":21.43808524080916,"y":108.70792000874707},{"x":21.435335257529598,"y":108.72174510829112},{"x":21.430804263137663,"y":108.73509298734585},{"x":21.424569784203634,"y":108.74773526},{"x":21.4167384943906,"y":108.7594556134633},{"x":21.407444389238496,"y":108.7700535092385},{"x":21.396846493463297,"y":108.7793476143906},{"x":21.38512614,"y":108.78717890420364},{"x":21.372483867345863,"y":108.79341338313768},{"x":21.359135988291097,"y":108.79794437752959},{"x":21.345310888747065,"y":108.80069436080916},{"x":21.33124512,"y":108.80161627999999},{"x":21.317179351252936,"y":108.80069436080916},{"x":21.303354251708903,"y":108.79794437752959},{"x":21.290006372654137,"y":108.79341338313768},{"x":21.2773641,"y":108.78717890420364},{"x":21.265643746536703,"y":108.7793476143906},{"x":21.255045850761505,"y":108.7700535092385},{"x":21.2457517456094,"y":108.7594556134633},{"x":21.237920455796367,"y":108.74773526},{"x":21.231685976862337,"y":108.73509298734585},{"x":21.227154982470402,"y":108.72174510829112},{"x":21.224404999190842,"y":108.70792000874707},{"x":21.223483079999998,"y":108.69385424},{"x":21.224404999190842,"y":108.67978847125293},{"x":21.227154982470402,"y":108.66596337170888},{"x":21.231685976862337,"y":108.65261549265414},{"x":21.237920455796367,"y":108.63997322},{"x":21.2457517456094,"y":108.6282528665367},{"x":21.255045850761505,"y":108.61765497076149},{"x":21.265643746536703,"y":108.6083608656094},{"x":21.2773641,"y":108.60052957579636},{"x":21.290006372654137,"y":108.59429509686233},{"x":21.303354251708903,"y":108.58976410247041},{"x":21.317179351252936,"y":108.58701411919084},{"x":21.33124512,"y":108.58609220000001},{"x":21.345310888747065,"y":108.58701411919084},{"x":21.359135988291097,"y":108.58976410247041},{"x":21.372483867345863,"y":108.59429509686233},{"x":21.38512614,"y":108.60052957579636},{"x":21.396846493463297,"y":108.6083608656094},{"x":21.407444389238496,"y":108.61765497076149},{"x":21.4167384943906,"y":108.6282528665367},{"x":21.424569784203634,"y":108.63997322},{"x":21.430804263137663,"y":108.65261549265414},{"x":21.435335257529598,"y":108.66596337170888},{"x":21.43808524080916,"y":108.67978847125293},{"x":21.439007160000003,"y":108.69385424}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":21.50904512,"y":111.33545424},{"x":21.507524016352264,"y":111.35866179697673},{"x":21.502986731914195,"y":111.38147226621923},{"x":21.495510900880507,"y":111.40349535427453},{"x":21.485224436792873,"y":111.42435424},{"x":21.472303343903782,"y":111.44369202207774},{"x":21.45696870569497,"y":111.46117782569496},{"x":21.43948290207775,"y":111.47651246390379},{"x":21.42014512,"y":111.48943355679287},{"x":21.399286234274513,"y":111.4997200208805},{"x":21.377263146219228,"y":111.5071958519142},{"x":21.354452676976724,"y":111.51173313635226},{"x":21.33124512,"y":111.51325424},{"x":21.308037563023277,"y":111.51173313635226},{"x":21.285227093780772,"y":111.5071958519142},{"x":21.263204005725488,"y":111.4997200208805},{"x":21.24234512,"y":111.48943355679287},{"x":21.223007337922247,"y":111.47651246390379},{"x":21.20552153430503,"y":111.46117782569496},{"x":21.19018689609622,"y":111.44369202207774},{"x":21.177265803207128,"y":111.42435424},{"x":21.166979339119493,"y":111.40349535427453},{"x":21.159503508085805,"y":111.38147226621923},{"x":21.154966223647737,"y":111.35866179697673},{"x":21.15344512,"y":111.33545424},{"x":21.154966223647737,"y":111.31224668302328},{"x":21.159503508085805,"y":111.28943621378076},{"x":21.166979339119493,"y":111.26741312572547},{"x":21.177265803207128,"y":111.24655424},{"x":21.19018689609622,"y":111.22721645792225},{"x":21.20552153430503,"y":111.20973065430503},{"x":21.223007337922247,"y":111.19439601609622},{"x":21.24234512,"y":111.18147492320712},{"x":21.263204005725488,"y":111.17118845911949},{"x":21.285227093780772,"y":111.1637126280858},{"x":21.308037563023277,"y":111.15917534364773},{"x":21.33124512,"y":111.15765424},{"x":21.354452676976724,"y":111.15917534364773},{"x":21.377263146219228,"y":111.1637126280858},{"x":21.399286234274513,"y":111.17118845911949},{"x":21.42014512,"y":111.18147492320712},{"x":21.43948290207775,"y":111.19439601609622},{"x":21.45696870569497,"y":111.20973065430503},{"x":21.472303343903782,"y":111.22721645792225},{"x":21.485224436792873,"y":111.24655424},{"x":21.495510900880507,"y":111.26741312572547},{"x":21.502986731914195,"y":111.28943621378076},{"x":21.507524016352264,"y":111.31224668302328},{"x":21.50904512,"y":111.33545424}]} strokeWidth={0.35559999999999997} />
      <silkscreenpath route={[{"x":21.35664512,"y":109.27805424},{"x":21.356427819478895,"y":109.28136960528238},{"x":21.355779635987744,"y":109.2846282437456},{"x":21.354711660125787,"y":109.28777439918208},{"x":21.353242165256123,"y":109.29075424},{"x":21.351396294843397,"y":109.29351678029683},{"x":21.34920563224214,"y":109.29601475224214},{"x":21.346707660296822,"y":109.2982054148434},{"x":21.34394512,"y":109.30005128525612},{"x":21.340965279182072,"y":109.30152078012577},{"x":21.337819123745604,"y":109.30258875598774},{"x":21.33456048528239,"y":109.3032369394789},{"x":21.33124512,"y":109.30345424},{"x":21.327929754717612,"y":109.3032369394789},{"x":21.324671116254397,"y":109.30258875598774},{"x":21.32152496081793,"y":109.30152078012577},{"x":21.31854512,"y":109.30005128525612},{"x":21.31578257970318,"y":109.2982054148434},{"x":21.31328460775786,"y":109.29601475224214},{"x":21.311093945156603,"y":109.29351678029683},{"x":21.309248074743877,"y":109.29075424},{"x":21.307778579874213,"y":109.28777439918208},{"x":21.306710604012256,"y":109.2846282437456},{"x":21.306062420521105,"y":109.28136960528238},{"x":21.30584512,"y":109.27805424},{"x":21.306062420521105,"y":109.27473887471761},{"x":21.306710604012256,"y":109.2714802362544},{"x":21.307778579874213,"y":109.26833408081792},{"x":21.309248074743877,"y":109.26535424},{"x":21.311093945156603,"y":109.26259169970317},{"x":21.31328460775786,"y":109.26009372775786},{"x":21.31578257970318,"y":109.25790306515661},{"x":21.31854512,"y":109.25605719474389},{"x":21.32152496081793,"y":109.25458769987422},{"x":21.324671116254397,"y":109.25351972401225},{"x":21.327929754717612,"y":109.25287154052111},{"x":21.33124512,"y":109.25265424},{"x":21.33456048528239,"y":109.25287154052111},{"x":21.337819123745604,"y":109.25351972401225},{"x":21.340965279182072,"y":109.25458769987422},{"x":21.34394512,"y":109.25605719474389},{"x":21.346707660296822,"y":109.25790306515661},{"x":21.34920563224214,"y":109.26009372775786},{"x":21.351396294843397,"y":109.26259169970317},{"x":21.353242165256123,"y":109.26535424},{"x":21.354711660125787,"y":109.26833408081792},{"x":21.355779635987744,"y":109.2714802362544},{"x":21.356427819478895,"y":109.27473887471761},{"x":21.35664512,"y":109.27805424}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":22.492782039999998,"y":98.26370238},{"x":22.492193872679522,"y":98.27267607920984},{"x":22.490439434424022,"y":98.28149623593822},{"x":22.487548744158467,"y":98.29001193485811},{"x":22.48357126239475,"y":98.29807747},{"x":22.478575044948624,"y":98.3055548378214},{"x":22.472645578485796,"y":98.3123160984858},{"x":22.465884317821406,"y":98.31824556494861},{"x":22.45840695,"y":98.32324178239475},{"x":22.450341414858116,"y":98.32721926415846},{"x":22.441825715938226,"y":98.33010995442402},{"x":22.433005559209846,"y":98.33186439267952},{"x":22.42403186,"y":98.33245256},{"x":22.415058160790156,"y":98.33186439267952},{"x":22.406238004061773,"y":98.33010995442402},{"x":22.397722305141883,"y":98.32721926415846},{"x":22.389656770000002,"y":98.32324178239475},{"x":22.382179402178593,"y":98.31824556494861},{"x":22.375418141514203,"y":98.3123160984858},{"x":22.369488675051375,"y":98.3055548378214},{"x":22.364492457605248,"y":98.29807747},{"x":22.360514975841532,"y":98.29001193485811},{"x":22.357624285575977,"y":98.28149623593822},{"x":22.355869847320477,"y":98.27267607920984},{"x":22.35528168,"y":98.26370238},{"x":22.355869847320477,"y":98.25472868079015},{"x":22.357624285575977,"y":98.24590852406176},{"x":22.360514975841532,"y":98.23739282514188},{"x":22.364492457605248,"y":98.22932729},{"x":22.369488675051375,"y":98.22184992217859},{"x":22.375418141514203,"y":98.2150886615142},{"x":22.382179402178593,"y":98.20915919505137},{"x":22.389656770000002,"y":98.20416297760524},{"x":22.397722305141883,"y":98.20018549584154},{"x":22.406238004061773,"y":98.19729480557596},{"x":22.415058160790156,"y":98.19554036732048},{"x":22.42403186,"y":98.19495219999999},{"x":22.433005559209846,"y":98.19554036732048},{"x":22.441825715938226,"y":98.19729480557596},{"x":22.450341414858116,"y":98.20018549584154},{"x":22.45840695,"y":98.20416297760524},{"x":22.465884317821406,"y":98.20915919505137},{"x":22.472645578485796,"y":98.2150886615142},{"x":22.478575044948624,"y":98.22184992217859},{"x":22.48357126239475,"y":98.22932729},{"x":22.487548744158467,"y":98.23739282514188},{"x":22.490439434424022,"y":98.24590852406176},{"x":22.492193872679522,"y":98.25472868079015},{"x":22.492782039999998,"y":98.26370238}]} strokeWidth={0.13750036} />
      <silkscreenpath route={[{"x":22.93803388,"y":101.52780049999998},{"x":22.93722113259096,"y":101.54020062922918},{"x":22.934796796697352,"y":101.5523885888093},{"x":22.930802353378464,"y":101.56415583937277},{"x":22.925306148666955,"y":101.57530104},{"x":22.918402224149276,"y":101.58563349321817},{"x":22.910208707888042,"y":101.59497640788803},{"x":22.90086579321817,"y":101.60316992414927},{"x":22.890533339999998,"y":101.61007384866694},{"x":22.87938813937279,"y":101.61557005337845},{"x":22.867620888809306,"y":101.61956449669734},{"x":22.855432929229192,"y":101.62198883259094},{"x":22.8430328,"y":101.62280158},{"x":22.830632670770807,"y":101.62198883259094},{"x":22.81844471119069,"y":101.61956449669734},{"x":22.806677460627206,"y":101.61557005337845},{"x":22.795532259999998,"y":101.61007384866694},{"x":22.78519980678183,"y":101.60316992414927},{"x":22.775856892111953,"y":101.59497640788803},{"x":22.767663375850724,"y":101.58563349321817},{"x":22.76075945133304,"y":101.57530104},{"x":22.75526324662153,"y":101.56415583937277},{"x":22.751268803302647,"y":101.5523885888093},{"x":22.748844467409036,"y":101.54020062922918},{"x":22.74803172,"y":101.52780049999998},{"x":22.748844467409036,"y":101.5154003707708},{"x":22.751268803302647,"y":101.50321241119069},{"x":22.75526324662153,"y":101.49144516062721},{"x":22.76075945133304,"y":101.48029995999998},{"x":22.767663375850724,"y":101.46996750678181},{"x":22.775856892111953,"y":101.46062459211196},{"x":22.78519980678183,"y":101.45243107585071},{"x":22.795532259999998,"y":101.44552715133304},{"x":22.806677460627206,"y":101.44003094662153},{"x":22.81844471119069,"y":101.43603650330265},{"x":22.830632670770807,"y":101.43361216740904},{"x":22.8430328,"y":101.43279941999998},{"x":22.855432929229192,"y":101.43361216740904},{"x":22.867620888809306,"y":101.43603650330265},{"x":22.87938813937279,"y":101.44003094662153},{"x":22.890533339999998,"y":101.44552715133304},{"x":22.90086579321817,"y":101.45243107585071},{"x":22.910208707888042,"y":101.46062459211196},{"x":22.918402224149276,"y":101.46996750678181},{"x":22.925306148666955,"y":101.48029995999998},{"x":22.930802353378464,"y":101.49144516062721},{"x":22.934796796697352,"y":101.50321241119069},{"x":22.93722113259096,"y":101.5154003707708},{"x":22.93803388,"y":101.52780049999998}]} strokeWidth={0.18999961999999998} />
      <silkscreenpath route={[{"x":22.73403124,"y":98.26370238},{"x":22.731379152330067,"y":98.30416541866198},{"x":22.7234682672756,"y":98.34393612351397},{"x":22.710433942273188,"y":98.38233400676944},{"x":22.692499198237428,"y":98.41870207},{"x":22.669970903611212,"y":98.4524180455606},{"x":22.643234523761624,"y":98.48290504376162},{"x":22.612747525560618,"y":98.50964142361121},{"x":22.57903155,"y":98.53216971823743},{"x":22.54266348676945,"y":98.55010446227318},{"x":22.50426560351397,"y":98.56313878727559},{"x":22.464494898661975,"y":98.57104967233006},{"x":22.42403186,"y":98.57370175999999},{"x":22.383568821338024,"y":98.57104967233006},{"x":22.343798116486028,"y":98.56313878727559},{"x":22.30540023323055,"y":98.55010446227318},{"x":22.26903217,"y":98.53216971823743},{"x":22.235316194439385,"y":98.50964142361121},{"x":22.204829196238375,"y":98.48290504376162},{"x":22.178092816388787,"y":98.4524180455606},{"x":22.155564521762575,"y":98.41870207},{"x":22.13762977772681,"y":98.38233400676944},{"x":22.124595452724403,"y":98.34393612351397},{"x":22.11668456766993,"y":98.30416541866198},{"x":22.11403248,"y":98.26370238},{"x":22.11668456766993,"y":98.22323934133802},{"x":22.124595452724403,"y":98.18346863648601},{"x":22.13762977772681,"y":98.14507075323054},{"x":22.155564521762575,"y":98.10870268999999},{"x":22.178092816388787,"y":98.07498671443938},{"x":22.204829196238375,"y":98.04449971623836},{"x":22.235316194439385,"y":98.01776333638878},{"x":22.26903217,"y":97.99523504176257},{"x":22.30540023323055,"y":97.9773002977268},{"x":22.343798116486028,"y":97.96426597272439},{"x":22.383568821338024,"y":97.95635508766992},{"x":22.42403186,"y":97.953703},{"x":22.464494898661975,"y":97.95635508766992},{"x":22.50426560351397,"y":97.96426597272439},{"x":22.54266348676945,"y":97.9773002977268},{"x":22.57903155,"y":97.99523504176257},{"x":22.612747525560618,"y":98.01776333638878},{"x":22.643234523761624,"y":98.04449971623836},{"x":22.669970903611212,"y":98.07498671443938},{"x":22.692499198237428,"y":98.10870268999999},{"x":22.710433942273188,"y":98.14507075323054},{"x":22.7234682672756,"y":98.18346863648601},{"x":22.731379152330067,"y":98.22323934133802},{"x":22.73403124,"y":98.26370238}]} strokeWidth={0.19999959999999997} />
      <silkscreenpath route={[{"x":85.96780113999999,"y":109.48459942},{"x":85.96673173894548,"y":109.50091532716421},{"x":85.96354183353047,"y":109.51695206463324},{"x":85.95828600392103,"y":109.53243523938275},{"x":85.95105417881896,"y":109.54709993},{"x":85.94197009675682,"y":109.56069521956275},{"x":85.93118918889722,"y":109.57298848889722},{"x":85.91889591956274,"y":109.58376939675681},{"x":85.90530063,"y":109.59285347881897},{"x":85.89063593938273,"y":109.60008530392102},{"x":85.87515276463324,"y":109.60534113353047},{"x":85.85911602716422,"y":109.60853103894547},{"x":85.84280011999999,"y":109.60960044},{"x":85.82648421283578,"y":109.60853103894547},{"x":85.81044747536676,"y":109.60534113353047},{"x":85.79496430061727,"y":109.60008530392102},{"x":85.78029961,"y":109.59285347881897},{"x":85.76670432043724,"y":109.58376939675681},{"x":85.75441105110276,"y":109.57298848889722},{"x":85.74363014324318,"y":109.56069521956275},{"x":85.73454606118104,"y":109.54709993},{"x":85.72731423607897,"y":109.53243523938275},{"x":85.72205840646951,"y":109.51695206463324},{"x":85.7188685010545,"y":109.50091532716421},{"x":85.7177991,"y":109.48459942},{"x":85.7188685010545,"y":109.46828351283578},{"x":85.72205840646951,"y":109.45224677536675},{"x":85.72731423607897,"y":109.43676360061725},{"x":85.73454606118104,"y":109.42209891},{"x":85.74363014324318,"y":109.40850362043724},{"x":85.75441105110276,"y":109.39621035110277},{"x":85.76670432043724,"y":109.3854294432432},{"x":85.78029961,"y":109.37634536118102},{"x":85.79496430061727,"y":109.36911353607897},{"x":85.81044747536676,"y":109.36385770646952},{"x":85.82648421283578,"y":109.36066780105452},{"x":85.84280011999999,"y":109.3595984},{"x":85.85911602716422,"y":109.36066780105452},{"x":85.87515276463324,"y":109.36385770646952},{"x":85.89063593938273,"y":109.36911353607897},{"x":85.90530063,"y":109.37634536118102},{"x":85.91889591956274,"y":109.3854294432432},{"x":85.93118918889722,"y":109.39621035110277},{"x":85.94197009675682,"y":109.40850362043724},{"x":85.95105417881896,"y":109.42209891},{"x":85.95828600392103,"y":109.43676360061725},{"x":85.96354183353047,"y":109.45224677536675},{"x":85.96673173894548,"y":109.46828351283578},{"x":85.96780113999999,"y":109.48459942}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":83.80930151999999,"y":91.03359999999999},{"x":83.80823211894548,"y":91.04991590716422},{"x":83.80504221353047,"y":91.06595264463324},{"x":83.79978638392103,"y":91.08143581938273},{"x":83.79255455881896,"y":91.09610051},{"x":83.7834704767568,"y":91.10969579956274},{"x":83.77268956889722,"y":91.12198906889722},{"x":83.76039629956274,"y":91.13276997675682},{"x":83.74680100999998,"y":91.14185405881896},{"x":83.73213631938273,"y":91.14908588392103},{"x":83.71665314463323,"y":91.15434171353047},{"x":83.7006164071642,"y":91.15753161894548},{"x":83.68430049999999,"y":91.15860101999999},{"x":83.66798459283578,"y":91.15753161894548},{"x":83.65194785536676,"y":91.15434171353047},{"x":83.63646468061725,"y":91.14908588392103},{"x":83.62179998999999,"y":91.14185405881896},{"x":83.60820470043724,"y":91.13276997675682},{"x":83.59591143110276,"y":91.12198906889722},{"x":83.58513052324318,"y":91.10969579956274},{"x":83.57604644118102,"y":91.09610051},{"x":83.56881461607895,"y":91.08143581938273},{"x":83.56355878646951,"y":91.06595264463324},{"x":83.5603688810545,"y":91.04991590716422},{"x":83.55929947999999,"y":91.03359999999999},{"x":83.5603688810545,"y":91.01728409283578},{"x":83.56355878646951,"y":91.00124735536676},{"x":83.56881461607895,"y":90.98576418061727},{"x":83.57604644118102,"y":90.97109949},{"x":83.58513052324318,"y":90.95750420043724},{"x":83.59591143110276,"y":90.94521093110276},{"x":83.60820470043724,"y":90.93443002324318},{"x":83.62179998999999,"y":90.92534594118104},{"x":83.63646468061725,"y":90.91811411607897},{"x":83.65194785536676,"y":90.91285828646951},{"x":83.66798459283578,"y":90.90966838105452},{"x":83.68430049999999,"y":90.90859898},{"x":83.7006164071642,"y":90.90966838105452},{"x":83.71665314463323,"y":90.91285828646951},{"x":83.73213631938273,"y":90.91811411607897},{"x":83.74680100999998,"y":90.92534594118104},{"x":83.76039629956274,"y":90.93443002324318},{"x":83.77268956889722,"y":90.94521093110276},{"x":83.7834704767568,"y":90.95750420043724},{"x":83.79255455881896,"y":90.97109949},{"x":83.79978638392103,"y":90.98576418061727},{"x":83.80504221353047,"y":91.00124735536676},{"x":83.80823211894548,"y":91.01728409283578},{"x":83.80930151999999,"y":91.03359999999999}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":83.80930151999999,"y":98.01859999999999},{"x":83.80823211894548,"y":98.03491590716422},{"x":83.80504221353047,"y":98.05095264463324},{"x":83.79978638392103,"y":98.06643581938273},{"x":83.79255455881896,"y":98.08110051},{"x":83.7834704767568,"y":98.09469579956274},{"x":83.77268956889722,"y":98.10698906889722},{"x":83.76039629956274,"y":98.11776997675682},{"x":83.74680100999998,"y":98.12685405881896},{"x":83.73213631938273,"y":98.13408588392103},{"x":83.71665314463323,"y":98.13934171353048},{"x":83.7006164071642,"y":98.14253161894548},{"x":83.68430049999999,"y":98.14360101999999},{"x":83.66798459283578,"y":98.14253161894548},{"x":83.65194785536676,"y":98.13934171353048},{"x":83.63646468061725,"y":98.13408588392103},{"x":83.62179998999999,"y":98.12685405881896},{"x":83.60820470043724,"y":98.11776997675682},{"x":83.59591143110276,"y":98.10698906889722},{"x":83.58513052324318,"y":98.09469579956274},{"x":83.57604644118102,"y":98.08110051},{"x":83.56881461607895,"y":98.06643581938273},{"x":83.56355878646951,"y":98.05095264463324},{"x":83.5603688810545,"y":98.03491590716422},{"x":83.55929947999999,"y":98.01859999999999},{"x":83.5603688810545,"y":98.00228409283578},{"x":83.56355878646951,"y":97.98624735536676},{"x":83.56881461607895,"y":97.97076418061727},{"x":83.57604644118102,"y":97.95609949},{"x":83.58513052324318,"y":97.94250420043724},{"x":83.59591143110276,"y":97.93021093110276},{"x":83.60820470043724,"y":97.91943002324318},{"x":83.62179998999999,"y":97.91034594118103},{"x":83.63646468061725,"y":97.90311411607897},{"x":83.65194785536676,"y":97.89785828646951},{"x":83.66798459283578,"y":97.89466838105452},{"x":83.68430049999999,"y":97.89359898},{"x":83.7006164071642,"y":97.89466838105452},{"x":83.71665314463323,"y":97.89785828646951},{"x":83.73213631938273,"y":97.90311411607897},{"x":83.74680100999998,"y":97.91034594118103},{"x":83.76039629956274,"y":97.91943002324318},{"x":83.77268956889722,"y":97.93021093110276},{"x":83.7834704767568,"y":97.94250420043724},{"x":83.79255455881896,"y":97.95609949},{"x":83.79978638392103,"y":97.97076418061727},{"x":83.80504221353047,"y":97.98624735536676},{"x":83.80823211894548,"y":98.00228409283578},{"x":83.80930151999999,"y":98.01859999999999}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":57.1088012,"y":94.12260067999999},{"x":57.10773179894549,"y":94.13891658716422},{"x":57.10454189353048,"y":94.15495332463324},{"x":57.099286063921035,"y":94.17043649938273},{"x":57.09205423881897,"y":94.18510119},{"x":57.08297015675682,"y":94.19869647956274},{"x":57.07218924889723,"y":94.21098974889722},{"x":57.059895979562754,"y":94.22177065675682},{"x":57.04630069,"y":94.23085473881896},{"x":57.031635999382736,"y":94.23808656392103},{"x":57.016152824633245,"y":94.24334239353048},{"x":57.00011608716422,"y":94.24653229894548},{"x":56.98380018,"y":94.24760169999999},{"x":56.96748427283578,"y":94.24653229894548},{"x":56.95144753536676,"y":94.24334239353048},{"x":56.93596436061727,"y":94.23808656392103},{"x":56.92129967,"y":94.23085473881896},{"x":56.90770438043725,"y":94.22177065675682},{"x":56.895411111102774,"y":94.21098974889722},{"x":56.884630203243184,"y":94.19869647956274},{"x":56.87554612118104,"y":94.18510119},{"x":56.86831429607897,"y":94.17043649938273},{"x":56.86305846646952,"y":94.15495332463324},{"x":56.85986856105451,"y":94.13891658716422},{"x":56.858799160000004,"y":94.12260067999999},{"x":56.85986856105451,"y":94.10628477283578},{"x":56.86305846646952,"y":94.09024803536676},{"x":56.86831429607897,"y":94.07476486061726},{"x":56.87554612118104,"y":94.06010017},{"x":56.884630203243184,"y":94.04650488043724},{"x":56.895411111102774,"y":94.03421161110276},{"x":56.90770438043725,"y":94.02343070324318},{"x":56.92129967,"y":94.01434662118103},{"x":56.93596436061727,"y":94.00711479607897},{"x":56.95144753536676,"y":94.00185896646951},{"x":56.96748427283578,"y":93.99866906105451},{"x":56.98380018,"y":93.99759965999999},{"x":57.00011608716422,"y":93.99866906105451},{"x":57.016152824633245,"y":94.00185896646951},{"x":57.031635999382736,"y":94.00711479607897},{"x":57.04630069,"y":94.01434662118103},{"x":57.059895979562754,"y":94.02343070324318},{"x":57.07218924889723,"y":94.03421161110276},{"x":57.08297015675682,"y":94.04650488043724},{"x":57.09205423881897,"y":94.06010017},{"x":57.099286063921035,"y":94.07476486061726},{"x":57.10454189353048,"y":94.09024803536676},{"x":57.10773179894549,"y":94.10628477283578},{"x":57.1088012,"y":94.12260067999999}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":56.46250074,"y":87.63458469999999},{"x":56.46143133894549,"y":87.65090060716422},{"x":56.45824143353048,"y":87.66693734463324},{"x":56.452985603921036,"y":87.68242051938273},{"x":56.44575377881897,"y":87.69708521},{"x":56.43666969675682,"y":87.71068049956274},{"x":56.42588878889723,"y":87.72297376889722},{"x":56.413595519562755,"y":87.73375467675682},{"x":56.40000023,"y":87.74283875881896},{"x":56.38533553938274,"y":87.75007058392103},{"x":56.369852364633246,"y":87.75532641353048},{"x":56.353815627164224,"y":87.75851631894548},{"x":56.337499720000004,"y":87.75958571999999},{"x":56.321183812835784,"y":87.75851631894548},{"x":56.30514707536676,"y":87.75532641353048},{"x":56.28966390061727,"y":87.75007058392103},{"x":56.274999210000004,"y":87.74283875881896},{"x":56.26140392043725,"y":87.73375467675682},{"x":56.249110651102775,"y":87.72297376889722},{"x":56.238329743243185,"y":87.71068049956274},{"x":56.22924566118104,"y":87.69708521},{"x":56.22201383607897,"y":87.68242051938273},{"x":56.21675800646952,"y":87.66693734463324},{"x":56.21356810105451,"y":87.65090060716422},{"x":56.212498700000005,"y":87.63458469999999},{"x":56.21356810105451,"y":87.61826879283578},{"x":56.21675800646952,"y":87.60223205536676},{"x":56.22201383607897,"y":87.58674888061726},{"x":56.22924566118104,"y":87.57208419},{"x":56.238329743243185,"y":87.55848890043724},{"x":56.249110651102775,"y":87.54619563110276},{"x":56.26140392043725,"y":87.53541472324318},{"x":56.274999210000004,"y":87.52633064118103},{"x":56.28966390061727,"y":87.51909881607897},{"x":56.30514707536676,"y":87.51384298646951},{"x":56.321183812835784,"y":87.51065308105451},{"x":56.337499720000004,"y":87.50958367999999},{"x":56.353815627164224,"y":87.51065308105451},{"x":56.369852364633246,"y":87.51384298646951},{"x":56.38533553938274,"y":87.51909881607897},{"x":56.40000023,"y":87.52633064118103},{"x":56.413595519562755,"y":87.53541472324318},{"x":56.42588878889723,"y":87.54619563110276},{"x":56.43666969675682,"y":87.55848890043724},{"x":56.44575377881897,"y":87.57208419},{"x":56.452985603921036,"y":87.58674888061726},{"x":56.45824143353048,"y":87.60223205536676},{"x":56.46143133894549,"y":87.61826879283578},{"x":56.46250074,"y":87.63458469999999}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":93.8403,"y":125.3236},{"x":93.82889172264197,"y":125.49765667732544},{"x":93.79486208935647,"y":125.66873519664419},{"x":93.73879335660381,"y":125.83390835705885},{"x":93.66164487594655,"y":125.99034999999999},{"x":93.56473667927835,"y":126.13538336558314},{"x":93.44972689271225,"y":126.26652689271225},{"x":93.31858336558312,"y":126.38153667927835},{"x":93.17354999999999,"y":126.47844487594655},{"x":93.01710835705885,"y":126.55559335660381},{"x":92.8519351966442,"y":126.61166208935646},{"x":92.68085667732544,"y":126.64569172264198},{"x":92.5068,"y":126.6571},{"x":92.33274332267455,"y":126.64569172264198},{"x":92.16166480335578,"y":126.61166208935646},{"x":91.99649164294115,"y":126.55559335660381},{"x":91.84004999999999,"y":126.47844487594655},{"x":91.69501663441687,"y":126.38153667927835},{"x":91.56387310728773,"y":126.26652689271225},{"x":91.44886332072163,"y":126.13538336558314},{"x":91.35195512405345,"y":125.99034999999999},{"x":91.27480664339619,"y":125.83390835705885},{"x":91.21873791064353,"y":125.66873519664419},{"x":91.18470827735803,"y":125.49765667732544},{"x":91.1733,"y":125.3236},{"x":91.18470827735803,"y":125.14954332267455},{"x":91.21873791064353,"y":124.97846480335579},{"x":91.27480664339619,"y":124.81329164294115},{"x":91.35195512405345,"y":124.65684999999999},{"x":91.44886332072163,"y":124.51181663441686},{"x":91.56387310728773,"y":124.38067310728773},{"x":91.69501663441687,"y":124.26566332072163},{"x":91.84004999999999,"y":124.16875512405345},{"x":91.99649164294115,"y":124.09160664339619},{"x":92.16166480335578,"y":124.03553791064354},{"x":92.33274332267455,"y":124.00150827735801},{"x":92.5068,"y":123.9901},{"x":92.68085667732544,"y":124.00150827735801},{"x":92.8519351966442,"y":124.03553791064354},{"x":93.01710835705885,"y":124.09160664339619},{"x":93.17354999999999,"y":124.16875512405345},{"x":93.31858336558312,"y":124.26566332072163},{"x":93.44972689271225,"y":124.38067310728773},{"x":93.56473667927835,"y":124.51181663441686},{"x":93.66164487594655,"y":124.65684999999999},{"x":93.73879335660381,"y":124.81329164294115},{"x":93.79486208935647,"y":124.97846480335579},{"x":93.82889172264197,"y":125.14954332267455},{"x":93.8403,"y":125.3236}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":97.6503,"y":125.3236},{"x":97.63889172264197,"y":125.49765667732544},{"x":97.60486208935647,"y":125.66873519664419},{"x":97.5487933566038,"y":125.83390835705885},{"x":97.47164487594655,"y":125.99034999999999},{"x":97.37473667927836,"y":126.13538336558314},{"x":97.25972689271225,"y":126.26652689271225},{"x":97.12858336558313,"y":126.38153667927835},{"x":96.98355,"y":126.47844487594655},{"x":96.82710835705885,"y":126.55559335660381},{"x":96.66193519664421,"y":126.61166208935646},{"x":96.49085667732544,"y":126.64569172264198},{"x":96.3168,"y":126.6571},{"x":96.14274332267455,"y":126.64569172264198},{"x":95.97166480335578,"y":126.61166208935646},{"x":95.80649164294115,"y":126.55559335660381},{"x":95.65005,"y":126.47844487594655},{"x":95.50501663441688,"y":126.38153667927835},{"x":95.37387310728774,"y":126.26652689271225},{"x":95.25886332072163,"y":126.13538336558314},{"x":95.16195512405345,"y":125.99034999999999},{"x":95.08480664339619,"y":125.83390835705885},{"x":95.02873791064353,"y":125.66873519664419},{"x":94.99470827735803,"y":125.49765667732544},{"x":94.9833,"y":125.3236},{"x":94.99470827735803,"y":125.14954332267455},{"x":95.02873791064353,"y":124.97846480335579},{"x":95.08480664339619,"y":124.81329164294115},{"x":95.16195512405345,"y":124.65684999999999},{"x":95.25886332072163,"y":124.51181663441686},{"x":95.37387310728774,"y":124.38067310728773},{"x":95.50501663441688,"y":124.26566332072163},{"x":95.65005,"y":124.16875512405345},{"x":95.80649164294115,"y":124.09160664339619},{"x":95.97166480335578,"y":124.03553791064354},{"x":96.14274332267455,"y":124.00150827735801},{"x":96.3168,"y":123.9901},{"x":96.49085667732544,"y":124.00150827735801},{"x":96.66193519664421,"y":124.03553791064354},{"x":96.82710835705885,"y":124.09160664339619},{"x":96.98355,"y":124.16875512405345},{"x":97.12858336558313,"y":124.26566332072163},{"x":97.25972689271225,"y":124.38067310728773},{"x":97.37473667927836,"y":124.51181663441686},{"x":97.47164487594655,"y":124.65684999999999},{"x":97.5487933566038,"y":124.81329164294115},{"x":97.60486208935647,"y":124.97846480335579},{"x":97.63889172264197,"y":125.14954332267455},{"x":97.6503,"y":125.3236}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":77.3303,"y":125.3236},{"x":77.31889172264196,"y":125.49765667732544},{"x":77.28486208935647,"y":125.66873519664419},{"x":77.2287933566038,"y":125.83390835705885},{"x":77.15164487594654,"y":125.99034999999999},{"x":77.05473667927836,"y":126.13538336558314},{"x":76.93972689271226,"y":126.26652689271225},{"x":76.80858336558312,"y":126.38153667927835},{"x":76.66355,"y":126.47844487594655},{"x":76.50710835705884,"y":126.55559335660381},{"x":76.34193519664422,"y":126.61166208935646},{"x":76.17085667732545,"y":126.64569172264198},{"x":75.9968,"y":126.6571},{"x":75.82274332267455,"y":126.64569172264198},{"x":75.65166480335579,"y":126.61166208935646},{"x":75.48649164294115,"y":126.55559335660381},{"x":75.33005,"y":126.47844487594655},{"x":75.18501663441687,"y":126.38153667927835},{"x":75.05387310728774,"y":126.26652689271225},{"x":74.93886332072164,"y":126.13538336558314},{"x":74.84195512405344,"y":125.99034999999999},{"x":74.76480664339618,"y":125.83390835705885},{"x":74.70873791064352,"y":125.66873519664419},{"x":74.67470827735802,"y":125.49765667732544},{"x":74.66329999999999,"y":125.3236},{"x":74.67470827735802,"y":125.14954332267455},{"x":74.70873791064352,"y":124.97846480335579},{"x":74.76480664339618,"y":124.81329164294115},{"x":74.84195512405344,"y":124.65684999999999},{"x":74.93886332072164,"y":124.51181663441686},{"x":75.05387310728774,"y":124.38067310728773},{"x":75.18501663441687,"y":124.26566332072163},{"x":75.33005,"y":124.16875512405345},{"x":75.48649164294115,"y":124.09160664339619},{"x":75.65166480335579,"y":124.03553791064354},{"x":75.82274332267455,"y":124.00150827735801},{"x":75.9968,"y":123.9901},{"x":76.17085667732545,"y":124.00150827735801},{"x":76.34193519664422,"y":124.03553791064354},{"x":76.50710835705884,"y":124.09160664339619},{"x":76.66355,"y":124.16875512405345},{"x":76.80858336558312,"y":124.26566332072163},{"x":76.93972689271226,"y":124.38067310728773},{"x":77.05473667927836,"y":124.51181663441686},{"x":77.15164487594654,"y":124.65684999999999},{"x":77.2287933566038,"y":124.81329164294115},{"x":77.28486208935647,"y":124.97846480335579},{"x":77.31889172264196,"y":125.14954332267455},{"x":77.3303,"y":125.3236}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":111.6203,"y":125.3236},{"x":111.60889172264199,"y":125.49765667732544},{"x":111.57486208935646,"y":125.66873519664419},{"x":111.51879335660381,"y":125.83390835705885},{"x":111.44164487594655,"y":125.99034999999999},{"x":111.34473667927836,"y":126.13538336558314},{"x":111.22972689271225,"y":126.26652689271225},{"x":111.09858336558314,"y":126.38153667927835},{"x":110.95354999999999,"y":126.47844487594655},{"x":110.79710835705885,"y":126.55559335660381},{"x":110.63193519664419,"y":126.61166208935646},{"x":110.46085667732544,"y":126.64569172264198},{"x":110.2868,"y":126.6571},{"x":110.11274332267455,"y":126.64569172264198},{"x":109.94166480335579,"y":126.61166208935646},{"x":109.77649164294115,"y":126.55559335660381},{"x":109.62004999999999,"y":126.47844487594655},{"x":109.47501663441686,"y":126.38153667927835},{"x":109.34387310728773,"y":126.26652689271225},{"x":109.22886332072163,"y":126.13538336558314},{"x":109.13195512405345,"y":125.99034999999999},{"x":109.05480664339619,"y":125.83390835705885},{"x":108.99873791064354,"y":125.66873519664419},{"x":108.96470827735801,"y":125.49765667732544},{"x":108.9533,"y":125.3236},{"x":108.96470827735801,"y":125.14954332267455},{"x":108.99873791064351,"y":124.97846480335579},{"x":109.05480664339619,"y":124.81329164294115},{"x":109.13195512405345,"y":124.65684999999999},{"x":109.22886332072163,"y":124.51181663441686},{"x":109.34387310728773,"y":124.38067310728773},{"x":109.47501663441686,"y":124.26566332072163},{"x":109.62004999999999,"y":124.16875512405345},{"x":109.77649164294115,"y":124.09160664339619},{"x":109.94166480335579,"y":124.03553791064354},{"x":110.11274332267455,"y":124.00150827735801},{"x":110.2868,"y":123.9901},{"x":110.46085667732544,"y":124.00150827735801},{"x":110.63193519664419,"y":124.03553791064354},{"x":110.79710835705885,"y":124.09160664339619},{"x":110.95354999999999,"y":124.16875512405345},{"x":111.09858336558314,"y":124.26566332072163},{"x":111.22972689271225,"y":124.38067310728773},{"x":111.34473667927836,"y":124.51181663441686},{"x":111.44164487594655,"y":124.65684999999999},{"x":111.51879335660381,"y":124.81329164294115},{"x":111.57486208935646,"y":124.97846480335579},{"x":111.60889172264199,"y":125.14954332267455},{"x":111.6203,"y":125.3236}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":117.9703,"y":80.8736},{"x":117.95889172264198,"y":81.04765667732543},{"x":117.92486208935645,"y":81.2187351966442},{"x":117.8687933566038,"y":81.38390835705884},{"x":117.79164487594655,"y":81.54035},{"x":117.69473667927836,"y":81.68538336558312},{"x":117.57972689271226,"y":81.81652689271226},{"x":117.44858336558313,"y":81.93153667927835},{"x":117.30355,"y":82.02844487594655},{"x":117.14710835705884,"y":82.1055933566038},{"x":116.9819351966442,"y":82.16166208935647},{"x":116.81085667732543,"y":82.19569172264197},{"x":116.6368,"y":82.2071},{"x":116.46274332267456,"y":82.19569172264197},{"x":116.29166480335579,"y":82.16166208935647},{"x":116.12649164294115,"y":82.1055933566038},{"x":115.97005,"y":82.02844487594655},{"x":115.82501663441685,"y":81.93153667927835},{"x":115.69387310728774,"y":81.81652689271226},{"x":115.57886332072164,"y":81.68538336558312},{"x":115.48195512405344,"y":81.54035},{"x":115.40480664339618,"y":81.38390835705884},{"x":115.34873791064354,"y":81.2187351966442},{"x":115.31470827735801,"y":81.04765667732543},{"x":115.3033,"y":80.8736},{"x":115.31470827735801,"y":80.69954332267456},{"x":115.34873791064351,"y":80.52846480335579},{"x":115.40480664339618,"y":80.36329164294115},{"x":115.48195512405344,"y":80.20685},{"x":115.57886332072164,"y":80.06181663441687},{"x":115.69387310728774,"y":79.93067310728773},{"x":115.82501663441685,"y":79.81566332072164},{"x":115.97005,"y":79.71875512405344},{"x":116.12649164294115,"y":79.64160664339619},{"x":116.29166480335579,"y":79.58553791064352},{"x":116.46274332267456,"y":79.55150827735802},{"x":116.6368,"y":79.5401},{"x":116.81085667732543,"y":79.55150827735802},{"x":116.9819351966442,"y":79.58553791064352},{"x":117.14710835705884,"y":79.64160664339619},{"x":117.30355,"y":79.71875512405344},{"x":117.44858336558313,"y":79.81566332072164},{"x":117.57972689271226,"y":79.93067310728773},{"x":117.69473667927836,"y":80.06181663441687},{"x":117.79164487594655,"y":80.20685},{"x":117.8687933566038,"y":80.36329164294115},{"x":117.92486208935645,"y":80.52846480335579},{"x":117.95889172264198,"y":80.69954332267456},{"x":117.9703,"y":80.8736}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":117.9703,"y":77.0636},{"x":117.95889172264198,"y":77.23765667732545},{"x":117.92486208935645,"y":77.40873519664422},{"x":117.8687933566038,"y":77.57390835705884},{"x":117.79164487594655,"y":77.73035},{"x":117.69473667927836,"y":77.87538336558312},{"x":117.57972689271226,"y":78.00652689271226},{"x":117.44858336558313,"y":78.12153667927836},{"x":117.30355,"y":78.21844487594655},{"x":117.14710835705884,"y":78.2955933566038},{"x":116.9819351966442,"y":78.35166208935647},{"x":116.81085667732543,"y":78.38569172264197},{"x":116.6368,"y":78.3971},{"x":116.46274332267456,"y":78.38569172264197},{"x":116.29166480335579,"y":78.35166208935647},{"x":116.12649164294115,"y":78.2955933566038},{"x":115.97005,"y":78.21844487594655},{"x":115.82501663441685,"y":78.12153667927836},{"x":115.69387310728774,"y":78.00652689271226},{"x":115.57886332072164,"y":77.87538336558312},{"x":115.48195512405344,"y":77.73035},{"x":115.40480664339618,"y":77.57390835705884},{"x":115.34873791064354,"y":77.40873519664422},{"x":115.31470827735801,"y":77.23765667732545},{"x":115.3033,"y":77.0636},{"x":115.31470827735801,"y":76.88954332267456},{"x":115.34873791064351,"y":76.71846480335579},{"x":115.40480664339618,"y":76.55329164294115},{"x":115.48195512405344,"y":76.39685},{"x":115.57886332072164,"y":76.25181663441687},{"x":115.69387310728774,"y":76.12067310728774},{"x":115.82501663441685,"y":76.00566332072164},{"x":115.97005,"y":75.90875512405344},{"x":116.12649164294115,"y":75.83160664339619},{"x":116.29166480335579,"y":75.77553791064352},{"x":116.46274332267456,"y":75.74150827735802},{"x":116.6368,"y":75.7301},{"x":116.81085667732543,"y":75.74150827735802},{"x":116.9819351966442,"y":75.77553791064352},{"x":117.14710835705884,"y":75.83160664339619},{"x":117.30355,"y":75.90875512405344},{"x":117.44858336558313,"y":76.00566332072164},{"x":117.57972689271226,"y":76.12067310728774},{"x":117.69473667927836,"y":76.25181663441687},{"x":117.79164487594655,"y":76.39685},{"x":117.8687933566038,"y":76.55329164294115},{"x":117.92486208935645,"y":76.71846480335579},{"x":117.95889172264198,"y":76.88954332267456},{"x":117.9703,"y":77.0636}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":73.52029999999999,"y":125.3236},{"x":73.50889172264198,"y":125.49765667732544},{"x":73.47486208935646,"y":125.66873519664419},{"x":73.4187933566038,"y":125.83390835705885},{"x":73.34164487594656,"y":125.99034999999999},{"x":73.24473667927836,"y":126.13538336558314},{"x":73.12972689271226,"y":126.26652689271225},{"x":72.99858336558312,"y":126.38153667927835},{"x":72.85355,"y":126.47844487594655},{"x":72.69710835705885,"y":126.55559335660381},{"x":72.53193519664421,"y":126.61166208935646},{"x":72.36085667732544,"y":126.64569172264198},{"x":72.18679999999999,"y":126.6571},{"x":72.01274332267455,"y":126.64569172264198},{"x":71.84166480335578,"y":126.61166208935646},{"x":71.67649164294114,"y":126.55559335660381},{"x":71.52005,"y":126.47844487594655},{"x":71.37501663441687,"y":126.38153667927835},{"x":71.24387310728774,"y":126.26652689271225},{"x":71.12886332072163,"y":126.13538336558314},{"x":71.03195512405344,"y":125.99034999999999},{"x":70.9548066433962,"y":125.83390835705885},{"x":70.89873791064352,"y":125.66873519664419},{"x":70.86470827735802,"y":125.49765667732544},{"x":70.85329999999999,"y":125.3236},{"x":70.86470827735802,"y":125.14954332267455},{"x":70.89873791064352,"y":124.97846480335579},{"x":70.9548066433962,"y":124.81329164294115},{"x":71.03195512405344,"y":124.65684999999999},{"x":71.12886332072163,"y":124.51181663441686},{"x":71.24387310728774,"y":124.38067310728773},{"x":71.37501663441687,"y":124.26566332072163},{"x":71.52005,"y":124.16875512405345},{"x":71.67649164294114,"y":124.09160664339619},{"x":71.84166480335578,"y":124.03553791064354},{"x":72.01274332267455,"y":124.00150827735801},{"x":72.18679999999999,"y":123.9901},{"x":72.36085667732544,"y":124.00150827735801},{"x":72.53193519664421,"y":124.03553791064354},{"x":72.69710835705885,"y":124.09160664339619},{"x":72.85355,"y":124.16875512405345},{"x":72.99858336558312,"y":124.26566332072163},{"x":73.12972689271226,"y":124.38067310728773},{"x":73.24473667927836,"y":124.51181663441686},{"x":73.34164487594656,"y":124.65684999999999},{"x":73.4187933566038,"y":124.81329164294115},{"x":73.47486208935646,"y":124.97846480335579},{"x":73.50889172264198,"y":125.14954332267455},{"x":73.52029999999999,"y":125.3236}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":60.731643745121346,"y":120.82804384000005},{"x":60.74695191145068,"y":120.82896980243295},{"x":60.76203685141542,"y":120.8317342099742},{"x":60.77667859241356,"y":120.83629675129863},{"x":60.790663624688165,"y":120.84259089421661},{"x":60.80378801478339,"y":120.850524855864},{"x":60.81586037935627,"y":120.85998294110432},{"x":60.826704675979485,"y":120.87082722962604},{"x":60.83616277023878,"y":120.882899587133},{"x":60.84409674169108,"y":120.89602397130095},{"x":60.85039089505695,"y":120.91000899887335},{"x":60.85495344731988,"y":120.92465073646294},{"x":60.85771786613073,"y":120.93973567436244},{"x":60.85864383999999,"y":120.95504384}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":42.87544384000004,"y":120.95504393487866},{"x":42.876369803312656,"y":120.93973576130418},{"x":42.8791342134674,"y":120.92465081441202},{"x":42.88369675906273,"y":120.91000906711417},{"x":42.88999090778347,"y":120.89602402946232},{"x":42.89792487659369,"y":120.88289963518444},{"x":42.907382970142564,"y":120.87082726786633},{"x":42.91822726786632,"y":120.85998297014257},{"x":42.93029963518444,"y":120.8505248765937},{"x":42.943424029462314,"y":120.84259090778346},{"x":42.957409067114185,"y":120.83629675906272},{"x":42.97205081441201,"y":120.83173421346741},{"x":42.98713576130417,"y":120.82896980331266},{"x":43.00244393487865,"y":120.82804384000005}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":43.43424384,"y":128.06704384},{"x":43.430332430620105,"y":128.126720415083},{"x":43.41866512777936,"y":128.18537590742088},{"x":43.39944156226416,"y":128.24200670527733},{"x":43.37299065461025,"y":128.29564384},{"x":43.33976498718115,"y":128.3453695653428},{"x":43.30033306035849,"y":128.3903330603585},{"x":43.25536956534279,"y":128.42976498718116},{"x":43.20564384,"y":128.46299065461025},{"x":43.15200670527732,"y":128.48944156226415},{"x":43.09537590742087,"y":128.50866512777935},{"x":43.03672041508301,"y":128.5203324306201},{"x":42.97704384,"y":128.52424384},{"x":42.91736726491699,"y":128.5203324306201},{"x":42.85871177257913,"y":128.50866512777935},{"x":42.80208097472268,"y":128.48944156226415},{"x":42.74844384,"y":128.46299065461025},{"x":42.69871811465721,"y":128.42976498718116},{"x":42.65375461964151,"y":128.3903330603585},{"x":42.61432269281885,"y":128.3453695653428},{"x":42.58109702538975,"y":128.29564384},{"x":42.55464611773584,"y":128.24200670527733},{"x":42.53542255222064,"y":128.18537590742088},{"x":42.523755249379896,"y":128.126720415083},{"x":42.51984384,"y":128.06704384}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":43.00244393487865,"y":127.17804383999996},{"x":42.98713576130417,"y":127.17711787668735},{"x":42.972050814412015,"y":127.1743534665326},{"x":42.957409067114185,"y":127.16979092093727},{"x":42.943424029462314,"y":127.16349677221655},{"x":42.93029963518444,"y":127.15556280340631},{"x":42.91822726786632,"y":127.14610470985744},{"x":42.907382970142564,"y":127.13526041213368},{"x":42.89792487659369,"y":127.12318804481556},{"x":42.88999090778347,"y":127.11006365053768},{"x":42.88369675906273,"y":127.09607861288583},{"x":42.8791342134674,"y":127.08143686558799},{"x":42.876369803312656,"y":127.06635191869583},{"x":42.87544384000004,"y":127.05104374512135}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":61.214243839999995,"y":128.06704384},{"x":61.210332430620106,"y":128.126720415083},{"x":61.19866512777936,"y":128.18537590742088},{"x":61.17944156226415,"y":128.24200670527733},{"x":61.152990654610235,"y":128.29564384},{"x":61.11976498718114,"y":128.3453695653428},{"x":61.080333060358484,"y":128.3903330603585},{"x":61.035369565342776,"y":128.42976498718116},{"x":60.985643839999994,"y":128.46299065461025},{"x":60.93200670527731,"y":128.48944156226415},{"x":60.87537590742087,"y":128.50866512777935},{"x":60.816720415083005,"y":128.5203324306201},{"x":60.757043839999994,"y":128.52424384},{"x":60.697367264916984,"y":128.5203324306201},{"x":60.63871177257912,"y":128.50866512777935},{"x":60.58208097472268,"y":128.48944156226415},{"x":60.528443839999994,"y":128.46299065461025},{"x":60.47871811465721,"y":128.42976498718116},{"x":60.433754619641505,"y":128.3903330603585},{"x":60.39432269281884,"y":128.3453695653428},{"x":60.36109702538975,"y":128.29564384},{"x":60.334646117735836,"y":128.24200670527733},{"x":60.31542255222063,"y":128.18537590742088},{"x":60.30375524937988,"y":128.126720415083},{"x":60.299843839999994,"y":128.06704384}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":60.85864383999999,"y":127.05104384},{"x":60.85771786613073,"y":127.06635200563757},{"x":60.85495344731988,"y":127.08143694353707},{"x":60.85039089505695,"y":127.09607868112666},{"x":60.84409674169108,"y":127.11006370869906},{"x":60.83616277023878,"y":127.12318809286701},{"x":60.826704675979485,"y":127.13526045037396},{"x":60.81586037935627,"y":127.14610473889567},{"x":60.80378801478339,"y":127.155562824136},{"x":60.790663624688165,"y":127.1634967857834},{"x":60.77667859241356,"y":127.16979092870137},{"x":60.76203685141542,"y":127.1743534700258},{"x":60.74695191145068,"y":127.17711787756706},{"x":60.731643745121346,"y":127.17804383999996}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":86.6648,"y":64.74459999999999},{"x":86.64958896352263,"y":64.97667556976725},{"x":86.60421611914197,"y":65.20478026219227},{"x":86.52945780880506,"y":65.42501114274513},{"x":86.42659316792873,"y":65.6336},{"x":86.29738223903782,"y":65.8269778207775},{"x":86.14403585694969,"y":66.00183585694968},{"x":85.9691778207775,"y":66.15518223903781},{"x":85.77579999999999,"y":66.28439316792873},{"x":85.56721114274514,"y":66.38725780880506},{"x":85.34698026219228,"y":66.46201611914196},{"x":85.11887556976724,"y":66.50738896352263},{"x":84.8868,"y":66.5226},{"x":84.65472443023275,"y":66.50738896352263},{"x":84.42661973780771,"y":66.46201611914196},{"x":84.20638885725486,"y":66.38725780880506},{"x":83.9978,"y":66.28439316792873},{"x":83.8044221792225,"y":66.15518223903781},{"x":83.62956414305032,"y":66.00183585694968},{"x":83.47621776096219,"y":65.8269778207775},{"x":83.34700683207127,"y":65.6336},{"x":83.24414219119492,"y":65.42501114274513},{"x":83.16938388085804,"y":65.20478026219227},{"x":83.12401103647736,"y":64.97667556976725},{"x":83.1088,"y":64.74459999999999},{"x":83.12401103647736,"y":64.51252443023274},{"x":83.16938388085804,"y":64.28441973780772},{"x":83.24414219119492,"y":64.06418885725488},{"x":83.34700683207127,"y":63.855599999999995},{"x":83.47621776096219,"y":63.662222179222496},{"x":83.62956414305032,"y":63.487364143050314},{"x":83.8044221792225,"y":63.33401776096218},{"x":83.9978,"y":63.20480683207127},{"x":84.20638885725488,"y":63.10194219119493},{"x":84.42661973780771,"y":63.02718388085803},{"x":84.65472443023275,"y":62.98181103647736},{"x":84.8868,"y":62.9666},{"x":85.11887556976724,"y":62.98181103647736},{"x":85.34698026219228,"y":63.02718388085803},{"x":85.56721114274514,"y":63.10194219119493},{"x":85.77579999999999,"y":63.20480683207127},{"x":85.9691778207775,"y":63.33401776096218},{"x":86.14403585694969,"y":63.487364143050314},{"x":86.29738223903782,"y":63.662222179222496},{"x":86.42659316792873,"y":63.855599999999995},{"x":86.52945780880506,"y":64.06418885725488},{"x":86.60421611914197,"y":64.28441973780772},{"x":86.64958896352263,"y":64.51252443023274},{"x":86.6648,"y":64.74459999999999}]} strokeWidth={0.20299933999999997} />
      <silkscreenpath route={[{"x":86.6648,"y":68.8086},{"x":86.64958896352263,"y":69.04067556976725},{"x":86.60421611914197,"y":69.26878026219228},{"x":86.52945780880506,"y":69.48901114274513},{"x":86.42659316792873,"y":69.6976},{"x":86.29738223903782,"y":69.89097782077751},{"x":86.14403585694969,"y":70.06583585694969},{"x":85.9691778207775,"y":70.2191822390378},{"x":85.77579999999999,"y":70.34839316792872},{"x":85.56721114274514,"y":70.45125780880507},{"x":85.34698026219228,"y":70.52601611914196},{"x":85.11887556976724,"y":70.57138896352264},{"x":84.8868,"y":70.5866},{"x":84.65472443023275,"y":70.57138896352264},{"x":84.42661973780771,"y":70.52601611914196},{"x":84.20638885725486,"y":70.45125780880507},{"x":83.9978,"y":70.34839316792872},{"x":83.8044221792225,"y":70.2191822390378},{"x":83.62956414305032,"y":70.06583585694969},{"x":83.47621776096219,"y":69.89097782077751},{"x":83.34700683207127,"y":69.6976},{"x":83.24414219119492,"y":69.48901114274513},{"x":83.16938388085804,"y":69.26878026219228},{"x":83.12401103647736,"y":69.04067556976725},{"x":83.1088,"y":68.8086},{"x":83.12401103647736,"y":68.57652443023275},{"x":83.16938388085804,"y":68.34841973780772},{"x":83.24414219119492,"y":68.12818885725487},{"x":83.34700683207127,"y":67.9196},{"x":83.47621776096219,"y":67.72622217922249},{"x":83.62956414305032,"y":67.55136414305031},{"x":83.8044221792225,"y":67.39801776096218},{"x":83.9978,"y":67.26880683207126},{"x":84.20638885725488,"y":67.16594219119493},{"x":84.42661973780771,"y":67.09118388085804},{"x":84.65472443023275,"y":67.04581103647736},{"x":84.8868,"y":67.03059999999999},{"x":85.11887556976724,"y":67.04581103647736},{"x":85.34698026219228,"y":67.09118388085804},{"x":85.56721114274514,"y":67.16594219119493},{"x":85.77579999999999,"y":67.26880683207126},{"x":85.9691778207775,"y":67.39801776096218},{"x":86.14403585694969,"y":67.55136414305031},{"x":86.29738223903782,"y":67.72622217922249},{"x":86.42659316792873,"y":67.9196},{"x":86.52945780880506,"y":68.12818885725487},{"x":86.60421611914197,"y":68.34841973780772},{"x":86.64958896352263,"y":68.57652443023275},{"x":86.6648,"y":68.8086}]} strokeWidth={0.20299933999999997} />
      <silkscreenpath route={[{"x":24.4348,"y":74.77759999999999},{"x":24.419588963522635,"y":75.00967556976725},{"x":24.374216119141963,"y":75.23778026219227},{"x":24.299457808805066,"y":75.45801114274514},{"x":24.196593167928732,"y":75.6666},{"x":24.067382239037816,"y":75.8599778207775},{"x":23.914035856949678,"y":76.03483585694968},{"x":23.739177820777503,"y":76.18818223903781},{"x":23.5458,"y":76.31739316792873},{"x":23.33721114274513,"y":76.42025780880506},{"x":23.11698026219228,"y":76.49501611914197},{"x":22.88887556976725,"y":76.54038896352263},{"x":22.6568,"y":76.5556},{"x":22.424724430232747,"y":76.54038896352263},{"x":22.196619737807715,"y":76.49501611914197},{"x":21.97638885725487,"y":76.42025780880506},{"x":21.767799999999998,"y":76.31739316792873},{"x":21.574422179222495,"y":76.18818223903781},{"x":21.39956414305032,"y":76.03483585694968},{"x":21.246217760962182,"y":75.8599778207775},{"x":21.117006832071265,"y":75.6666},{"x":21.01414219119493,"y":75.45801114274514},{"x":20.939383880858035,"y":75.23778026219227},{"x":20.894011036477362,"y":75.00967556976725},{"x":20.8788,"y":74.77759999999999},{"x":20.894011036477362,"y":74.54552443023275},{"x":20.939383880858035,"y":74.31741973780773},{"x":21.01414219119493,"y":74.09718885725488},{"x":21.117006832071265,"y":73.8886},{"x":21.246217760962182,"y":73.6952221792225},{"x":21.399564143050316,"y":73.52036414305032},{"x":21.57442217922249,"y":73.36701776096218},{"x":21.767799999999998,"y":73.23780683207127},{"x":21.97638885725487,"y":73.13494219119492},{"x":22.19661973780772,"y":73.06018388085803},{"x":22.424724430232747,"y":73.01481103647735},{"x":22.6568,"y":72.9996},{"x":22.888875569767254,"y":73.01481103647735},{"x":23.116980262192282,"y":73.06018388085803},{"x":23.33721114274513,"y":73.13494219119492},{"x":23.5458,"y":73.23780683207127},{"x":23.739177820777503,"y":73.36701776096218},{"x":23.914035856949678,"y":73.52036414305032},{"x":24.067382239037816,"y":73.6952221792225},{"x":24.196593167928732,"y":73.8886},{"x":24.299457808805066,"y":74.09718885725488},{"x":24.374216119141963,"y":74.31741973780773},{"x":24.419588963522635,"y":74.54552443023275},{"x":24.4348,"y":74.77759999999999}]} strokeWidth={0.20299933999999997} />
      <silkscreenpath route={[{"x":68.1228,"y":85.5726},{"x":68.10758896352263,"y":85.80467556976724},{"x":68.06221611914197,"y":86.03278026219228},{"x":67.98745780880506,"y":86.25301114274514},{"x":67.88459316792873,"y":86.46159999999999},{"x":67.75538223903781,"y":86.6549778207775},{"x":67.60203585694968,"y":86.82983585694969},{"x":67.4271778207775,"y":86.98318223903782},{"x":67.2338,"y":87.11239316792873},{"x":67.02521114274514,"y":87.21525780880506},{"x":66.80498026219227,"y":87.29001611914197},{"x":66.57687556976725,"y":87.33538896352263},{"x":66.34479999999999,"y":87.3506},{"x":66.11272443023275,"y":87.33538896352263},{"x":65.88461973780772,"y":87.29001611914197},{"x":65.66438885725486,"y":87.21525780880506},{"x":65.4558,"y":87.11239316792873},{"x":65.2624221792225,"y":86.98318223903782},{"x":65.08756414305032,"y":86.82983585694969},{"x":64.93421776096218,"y":86.6549778207775},{"x":64.80500683207127,"y":86.46159999999999},{"x":64.70214219119492,"y":86.25301114274514},{"x":64.62738388085803,"y":86.03278026219228},{"x":64.58201103647735,"y":85.80467556976724},{"x":64.5668,"y":85.5726},{"x":64.58201103647735,"y":85.34052443023275},{"x":64.62738388085803,"y":85.11241973780771},{"x":64.70214219119492,"y":84.89218885725488},{"x":64.80500683207127,"y":84.6836},{"x":64.93421776096218,"y":84.4902221792225},{"x":65.08756414305032,"y":84.31536414305032},{"x":65.2624221792225,"y":84.16201776096219},{"x":65.4558,"y":84.03280683207127},{"x":65.66438885725488,"y":83.92994219119493},{"x":65.88461973780772,"y":83.85518388085804},{"x":66.11272443023275,"y":83.80981103647736},{"x":66.34479999999999,"y":83.7946},{"x":66.57687556976725,"y":83.80981103647736},{"x":66.80498026219227,"y":83.85518388085804},{"x":67.02521114274514,"y":83.92994219119493},{"x":67.2338,"y":84.03280683207127},{"x":67.4271778207775,"y":84.16201776096219},{"x":67.60203585694968,"y":84.31536414305032},{"x":67.75538223903781,"y":84.4902221792225},{"x":67.88459316792873,"y":84.6836},{"x":67.98745780880506,"y":84.89218885725488},{"x":68.06221611914197,"y":85.11241973780771},{"x":68.10758896352263,"y":85.34052443023275},{"x":68.1228,"y":85.5726}]} strokeWidth={0.17779999999999999} />
      <silkscreenpath route={[{"x":63.6778,"y":85.5726},{"x":63.66258896352264,"y":85.80467556976724},{"x":63.61721611914196,"y":86.03278026219228},{"x":63.54245780880506,"y":86.25301114274514},{"x":63.43959316792873,"y":86.46159999999999},{"x":63.310382239037814,"y":86.6549778207775},{"x":63.15703585694968,"y":86.82983585694969},{"x":62.9821778207775,"y":86.98318223903782},{"x":62.788799999999995,"y":87.11239316792873},{"x":62.580211142745135,"y":87.21525780880506},{"x":62.35998026219227,"y":87.29001611914197},{"x":62.131875569767246,"y":87.33538896352263},{"x":61.8998,"y":87.3506},{"x":61.667724430232745,"y":87.33538896352263},{"x":61.43961973780772,"y":87.29001611914197},{"x":61.21938885725486,"y":87.21525780880506},{"x":61.010799999999996,"y":87.11239316792873},{"x":60.8174221792225,"y":86.98318223903782},{"x":60.642564143050315,"y":86.82983585694969},{"x":60.489217760962184,"y":86.6549778207775},{"x":60.36000683207127,"y":86.46159999999999},{"x":60.25714219119493,"y":86.25301114274514},{"x":60.18238388085803,"y":86.03278026219228},{"x":60.13701103647736,"y":85.80467556976724},{"x":60.1218,"y":85.5726},{"x":60.13701103647736,"y":85.34052443023275},{"x":60.18238388085803,"y":85.11241973780771},{"x":60.25714219119493,"y":84.89218885725488},{"x":60.36000683207127,"y":84.6836},{"x":60.489217760962184,"y":84.4902221792225},{"x":60.642564143050315,"y":84.31536414305032},{"x":60.8174221792225,"y":84.16201776096219},{"x":61.010799999999996,"y":84.03280683207127},{"x":61.21938885725488,"y":83.92994219119493},{"x":61.43961973780772,"y":83.85518388085804},{"x":61.667724430232745,"y":83.80981103647736},{"x":61.8998,"y":83.7946},{"x":62.131875569767246,"y":83.80981103647736},{"x":62.35998026219227,"y":83.85518388085804},{"x":62.580211142745135,"y":83.92994219119493},{"x":62.788799999999995,"y":84.03280683207127},{"x":62.9821778207775,"y":84.16201776096219},{"x":63.15703585694968,"y":84.31536414305032},{"x":63.310382239037814,"y":84.4902221792225},{"x":63.43959316792873,"y":84.6836},{"x":63.54245780880506,"y":84.89218885725488},{"x":63.61721611914196,"y":85.11241973780771},{"x":63.66258896352264,"y":85.34052443023275},{"x":63.6778,"y":85.5726}]} strokeWidth={0.20299933999999997} />
      <silkscreenpath route={[{"x":60.505797199999996,"y":88.95260086},{"x":60.50921924860637,"y":88.90039048753293},{"x":60.51942684222503,"y":88.84907344901423},{"x":60.53624532609911,"y":88.79952779320071},{"x":60.55938693130654,"y":88.75260126},{"x":60.58845569856617,"y":88.70909677540565},{"x":60.6229542532108,"y":88.66975871321081},{"x":60.66229231540565,"y":88.63526015856617},{"x":60.7057968,"y":88.60619139130655},{"x":60.752723333200706,"y":88.58304978609911},{"x":60.80226898901422,"y":88.56623130222503},{"x":60.85358602753293,"y":88.55602370860638},{"x":60.9057964,"y":88.55260166}]} strokeWidth={0.19999959999999997} />
      <silkscreenpath route={[{"x":75.50579767999999,"y":88.55260166},{"x":75.55800805246706,"y":88.55602370860638},{"x":75.60932509098576,"y":88.56623130222503},{"x":75.65887074679928,"y":88.58304978609911},{"x":75.70579727999998,"y":88.60619139130655},{"x":75.74930176459434,"y":88.63526015856617},{"x":75.7886398267892,"y":88.66975871321081},{"x":75.82313838143382,"y":88.70909677540565},{"x":75.85220714869345,"y":88.75260126},{"x":75.87534875390088,"y":88.79952779320071},{"x":75.89216723777496,"y":88.84907344901423},{"x":75.90237483139362,"y":88.90039048753293},{"x":75.90579688,"y":88.95260086}]} strokeWidth={0.19999959999999997} />
      <silkscreenpath route={[{"x":60.9057964,"y":104.15260093999999},{"x":60.85358602753293,"y":104.14917889139363},{"x":60.80226898901422,"y":104.13897129777496},{"x":60.752723333200706,"y":104.12215281390087},{"x":60.7057968,"y":104.09901120869344},{"x":60.66229231540565,"y":104.06994244143381},{"x":60.6229542532108,"y":104.03544388678918},{"x":60.58845569856617,"y":103.99610582459434},{"x":60.55938693130654,"y":103.95260133999999},{"x":60.53624532609911,"y":103.90567480679928},{"x":60.51942684222503,"y":103.85612915098577},{"x":60.50921924860637,"y":103.80481211246706},{"x":60.505797199999996,"y":103.75260173999999}]} strokeWidth={0.19999959999999997} />
      <silkscreenpath route={[{"x":75.90579688,"y":103.75260173999999},{"x":75.90237483139362,"y":103.80481211246706},{"x":75.89216723777496,"y":103.85612915098577},{"x":75.87534875390088,"y":103.90567480679928},{"x":75.85220714869345,"y":103.95260133999999},{"x":75.82313838143382,"y":103.99610582459434},{"x":75.7886398267892,"y":104.03544388678918},{"x":75.74930176459434,"y":104.06994244143381},{"x":75.70579727999998,"y":104.09901120869344},{"x":75.65887074679928,"y":104.12215281390087},{"x":75.60932509098576,"y":104.13897129777496},{"x":75.55800805246706,"y":104.14917889139363},{"x":75.50579767999999,"y":104.15260093999999}]} strokeWidth={0.19999959999999997} />
      <silkscreenpath route={[{"x":24.4348,"y":80.8736},{"x":24.419588963522635,"y":81.10567556976724},{"x":24.374216119141963,"y":81.33378026219228},{"x":24.299457808805066,"y":81.55401114274513},{"x":24.196593167928732,"y":81.76259999999999},{"x":24.067382239037816,"y":81.9559778207775},{"x":23.914035856949678,"y":82.13083585694969},{"x":23.739177820777503,"y":82.28418223903782},{"x":23.5458,"y":82.41339316792872},{"x":23.33721114274513,"y":82.51625780880507},{"x":23.11698026219228,"y":82.59101611914195},{"x":22.88887556976725,"y":82.63638896352263},{"x":22.6568,"y":82.6516},{"x":22.424724430232747,"y":82.63638896352263},{"x":22.196619737807715,"y":82.59101611914195},{"x":21.97638885725487,"y":82.51625780880507},{"x":21.767799999999998,"y":82.41339316792872},{"x":21.574422179222495,"y":82.28418223903782},{"x":21.39956414305032,"y":82.13083585694969},{"x":21.246217760962182,"y":81.9559778207775},{"x":21.117006832071265,"y":81.76259999999999},{"x":21.01414219119493,"y":81.55401114274513},{"x":20.939383880858035,"y":81.33378026219228},{"x":20.894011036477362,"y":81.10567556976724},{"x":20.8788,"y":80.8736},{"x":20.894011036477362,"y":80.64152443023275},{"x":20.939383880858035,"y":80.41341973780771},{"x":21.01414219119493,"y":80.19318885725487},{"x":21.117006832071265,"y":79.9846},{"x":21.246217760962182,"y":79.79122217922249},{"x":21.399564143050316,"y":79.6163641430503},{"x":21.57442217922249,"y":79.46301776096217},{"x":21.767799999999998,"y":79.33380683207128},{"x":21.97638885725487,"y":79.23094219119493},{"x":22.19661973780772,"y":79.15618388085804},{"x":22.424724430232747,"y":79.11081103647736},{"x":22.6568,"y":79.09559999999999},{"x":22.888875569767254,"y":79.11081103647736},{"x":23.116980262192282,"y":79.15618388085804},{"x":23.33721114274513,"y":79.23094219119493},{"x":23.5458,"y":79.33380683207128},{"x":23.739177820777503,"y":79.46301776096217},{"x":23.914035856949678,"y":79.6163641430503},{"x":24.067382239037816,"y":79.79122217922249},{"x":24.196593167928732,"y":79.9846},{"x":24.299457808805066,"y":80.19318885725487},{"x":24.374216119141963,"y":80.41341973780771},{"x":24.419588963522635,"y":80.64152443023275},{"x":24.4348,"y":80.8736}]} strokeWidth={0.20299933999999997} />
      <silkscreenpath route={[{"x":53.47880083999999,"y":101.53359932},{"x":53.47773143894548,"y":101.54991522716422},{"x":53.47454153353048,"y":101.56595196463324},{"x":53.469285703921024,"y":101.58143513938273},{"x":53.46205387881896,"y":101.59609983},{"x":53.45296979675681,"y":101.60969511956274},{"x":53.44218888889722,"y":101.62198838889722},{"x":53.42989561956274,"y":101.63276929675682},{"x":53.41630032999999,"y":101.64185337881896},{"x":53.40163563938273,"y":101.64908520392103},{"x":53.386152464633234,"y":101.65434103353047},{"x":53.37011572716421,"y":101.65753093894548},{"x":53.35379981999999,"y":101.65860033999999},{"x":53.33748391283578,"y":101.65753093894548},{"x":53.32144717536676,"y":101.65434103353047},{"x":53.30596400061726,"y":101.64908520392103},{"x":53.29129930999999,"y":101.64185337881896},{"x":53.27770402043724,"y":101.63276929675682},{"x":53.26541075110276,"y":101.62198838889722},{"x":53.25462984324318,"y":101.60969511956274},{"x":53.24554576118103,"y":101.59609983},{"x":53.23831393607896,"y":101.58143513938273},{"x":53.233058106469514,"y":101.56595196463324},{"x":53.22986820105451,"y":101.54991522716422},{"x":53.22879879999999,"y":101.53359932},{"x":53.22986820105451,"y":101.51728341283578},{"x":53.233058106469514,"y":101.50124667536676},{"x":53.23831393607896,"y":101.48576350061727},{"x":53.24554576118103,"y":101.47109881},{"x":53.25462984324318,"y":101.45750352043724},{"x":53.26541075110276,"y":101.44521025110276},{"x":53.27770402043724,"y":101.43442934324318},{"x":53.29129930999999,"y":101.42534526118104},{"x":53.30596400061726,"y":101.41811343607897},{"x":53.32144717536676,"y":101.41285760646952},{"x":53.33748391283578,"y":101.4096677010545},{"x":53.35379981999999,"y":101.4085983},{"x":53.37011572716421,"y":101.4096677010545},{"x":53.386152464633234,"y":101.41285760646952},{"x":53.40163563938273,"y":101.41811343607897},{"x":53.41630032999999,"y":101.42534526118104},{"x":53.42989561956274,"y":101.43442934324318},{"x":53.44218888889722,"y":101.44521025110276},{"x":53.45296979675681,"y":101.45750352043724},{"x":53.46205387881896,"y":101.47109881},{"x":53.469285703921024,"y":101.48576350061727},{"x":53.47454153353048,"y":101.50124667536676},{"x":53.47773143894548,"y":101.51728341283578},{"x":53.47880083999999,"y":101.53359932}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":40.280800819999996,"y":48.8845987},{"x":40.27973141894548,"y":48.900914607164225},{"x":40.27654151353047,"y":48.91695134463324},{"x":40.27128568392103,"y":48.93243451938273},{"x":40.26405385881896,"y":48.94709921},{"x":40.25496977675681,"y":48.96069449956274},{"x":40.24418886889723,"y":48.972987768897234},{"x":40.23189559956274,"y":48.98376867675681},{"x":40.21830031,"y":48.99285275881896},{"x":40.20363561938273,"y":49.00008458392103},{"x":40.18815244463323,"y":49.005340413530476},{"x":40.17211570716422,"y":49.00853031894549},{"x":40.1557998,"y":49.00959972},{"x":40.13948389283577,"y":49.00853031894549},{"x":40.123447155366755,"y":49.005340413530476},{"x":40.10796398061726,"y":49.00008458392103},{"x":40.09329929,"y":48.99285275881896},{"x":40.07970400043725,"y":48.98376867675681},{"x":40.06741073110276,"y":48.972987768897234},{"x":40.056629823243185,"y":48.96069449956274},{"x":40.047545741181025,"y":48.94709921},{"x":40.040313916078965,"y":48.93243451938273},{"x":40.03505808646952,"y":48.91695134463324},{"x":40.031868181054506,"y":48.900914607164225},{"x":40.03079878,"y":48.8845987},{"x":40.031868181054506,"y":48.86828279283578},{"x":40.03505808646952,"y":48.852246055366756},{"x":40.040313916078965,"y":48.836762880617265},{"x":40.047545741181025,"y":48.82209819},{"x":40.056629823243185,"y":48.808502900437254},{"x":40.06741073110276,"y":48.79620963110276},{"x":40.07970400043725,"y":48.785428723243186},{"x":40.09329929,"y":48.77634464118103},{"x":40.10796398061726,"y":48.769112816078966},{"x":40.123447155366755,"y":48.76385698646952},{"x":40.13948389283577,"y":48.760667081054514},{"x":40.1557998,"y":48.75959768},{"x":40.17211570716422,"y":48.760667081054514},{"x":40.18815244463323,"y":48.76385698646952},{"x":40.20363561938273,"y":48.769112816078966},{"x":40.21830031,"y":48.77634464118103},{"x":40.23189559956274,"y":48.785428723243186},{"x":40.24418886889723,"y":48.79620963110276},{"x":40.25496977675681,"y":48.808502900437254},{"x":40.26405385881896,"y":48.82209819},{"x":40.27128568392103,"y":48.836762880617265},{"x":40.27654151353047,"y":48.852246055366756},{"x":40.27973141894548,"y":48.86828279283578},{"x":40.280800819999996,"y":48.8845987}]} strokeWidth={0.24999949999999999} layer="bottom" />
      <silkscreenpath route={[{"x":60.18080166,"y":46.76098598},{"x":60.179732258945485,"y":46.77730188716422},{"x":60.17654235353048,"y":46.793338624633236},{"x":60.17128652392103,"y":46.808821799382734},{"x":60.164054698818966,"y":46.82348649},{"x":60.15497061675682,"y":46.837081779562745},{"x":60.14418970889723,"y":46.84937504889724},{"x":60.13189643956275,"y":46.860155956756806},{"x":60.11830115,"y":46.869240038818965},{"x":60.103636459382734,"y":46.87647186392103},{"x":60.08815328463324,"y":46.88172769353047},{"x":60.07211654716422,"y":46.884917598945485},{"x":60.05580064,"y":46.885987},{"x":60.03948473283578,"y":46.884917598945485},{"x":60.02344799536676,"y":46.88172769353047},{"x":60.00796482061727,"y":46.87647186392103},{"x":59.99330013,"y":46.869240038818965},{"x":59.97970484043725,"y":46.860155956756806},{"x":59.96741157110277,"y":46.84937504889724},{"x":59.95663066324318,"y":46.837081779562745},{"x":59.94754658118104,"y":46.82348649},{"x":59.94031475607897,"y":46.808821799382734},{"x":59.93505892646952,"y":46.793338624633236},{"x":59.93186902105452,"y":46.77730188716422},{"x":59.93079962,"y":46.76098598},{"x":59.93186902105452,"y":46.744670072835774},{"x":59.93505892646952,"y":46.72863333536676},{"x":59.94031475607897,"y":46.71315016061726},{"x":59.94754658118104,"y":46.69848547},{"x":59.95663066324318,"y":46.68489018043725},{"x":59.96741157110277,"y":46.672596911102765},{"x":59.97970484043725,"y":46.66181600324319},{"x":59.99330013,"y":46.65273192118103},{"x":60.00796482061727,"y":46.64550009607896},{"x":60.02344799536676,"y":46.64024426646952},{"x":60.03948473283578,"y":46.63705436105451},{"x":60.05580064,"y":46.63598496},{"x":60.07211654716422,"y":46.63705436105451},{"x":60.08815328463324,"y":46.64024426646952},{"x":60.103636459382734,"y":46.64550009607896},{"x":60.11830115,"y":46.65273192118103},{"x":60.13189643956275,"y":46.66181600324319},{"x":60.14418970889723,"y":46.672596911102765},{"x":60.15497061675682,"y":46.68489018043725},{"x":60.164054698818966,"y":46.69848547},{"x":60.17128652392103,"y":46.71315016061726},{"x":60.17654235353048,"y":46.72863333536676},{"x":60.179732258945485,"y":46.744670072835774},{"x":60.18080166,"y":46.76098598}]} strokeWidth={0.24999949999999999} layer="bottom" />
      <silkscreenpath route={[{"x":84.1207995,"y":51.9526901},{"x":84.1197300989455,"y":51.96900600716422},{"x":84.11654019353048,"y":51.98504274463323},{"x":84.11128436392103,"y":52.00052591938273},{"x":84.10405253881898,"y":52.01519061},{"x":84.09496845675682,"y":52.02878589956275},{"x":84.08418754889723,"y":52.04107916889723},{"x":84.07189427956276,"y":52.05186007675682},{"x":84.05829899,"y":52.06094415881896},{"x":84.04363429938275,"y":52.06817598392103},{"x":84.02815112463324,"y":52.073431813530476},{"x":84.01211438716422,"y":52.07662171894548},{"x":83.99579848,"y":52.07769112},{"x":83.97948257283579,"y":52.07662171894548},{"x":83.96344583536677,"y":52.073431813530476},{"x":83.94796266061726,"y":52.06817598392103},{"x":83.93329797,"y":52.06094415881896},{"x":83.91970268043725,"y":52.05186007675682},{"x":83.90740941110278,"y":52.04107916889723},{"x":83.89662850324318,"y":52.02878589956275},{"x":83.88754442118103,"y":52.01519061},{"x":83.88031259607897,"y":52.00052591938273},{"x":83.87505676646953,"y":51.98504274463323},{"x":83.87186686105451,"y":51.96900600716422},{"x":83.87079746,"y":51.9526901},{"x":83.87186686105451,"y":51.93637419283577},{"x":83.87505676646953,"y":51.920337455366756},{"x":83.88031259607897,"y":51.90485428061726},{"x":83.88754442118103,"y":51.89018959},{"x":83.89662850324318,"y":51.876594300437255},{"x":83.90740941110278,"y":51.86430103110276},{"x":83.91970268043725,"y":51.853520123243186},{"x":83.93329797,"y":51.84443604118103},{"x":83.94796266061726,"y":51.837204216078966},{"x":83.96344583536677,"y":51.83194838646952},{"x":83.97948257283579,"y":51.82875848105451},{"x":83.99579848,"y":51.82768908},{"x":84.01211438716422,"y":51.82875848105451},{"x":84.02815112463324,"y":51.83194838646952},{"x":84.04363429938275,"y":51.837204216078966},{"x":84.05829899,"y":51.84443604118103},{"x":84.07189427956276,"y":51.853520123243186},{"x":84.08418754889723,"y":51.86430103110276},{"x":84.09496845675682,"y":51.876594300437255},{"x":84.10405253881898,"y":51.89018959},{"x":84.11128436392103,"y":51.90485428061726},{"x":84.11654019353048,"y":51.920337455366756},{"x":84.1197300989455,"y":51.93637419283577},{"x":84.1207995,"y":51.9526901}]} strokeWidth={0.24999949999999999} layer="bottom" />
      <silkscreenrect pcbX={68.37888534} pcbY={51.04353646999999} width={0.508} height={4.165602539999999} layer="bottom" strokeWidth={0.508} filled={true} />
      <silkscreenrect pcbX={75.67274171999999} pcbY={56.12364569} width={0.508} height={4.165602540000005} layer="bottom" strokeWidth={0.508} filled={true} />
      <silkscreenrect pcbX={77.09398855999999} pcbY={59.93389334} width={0.508} height={2.3367999999999998} layer="top" strokeWidth={0.508} filled={true} />
      <silkscreenline x1={69.12580027999999} y1={80.80062326000001} x2={69.12580027999999} y2={81.60062165999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={70.67579972} y1={80.80062326000001} x2={70.67579972} y2={81.60062165999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={57.16112012} y1={83.78842272} x2={57.16112012} y2={84.58842112} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={58.71111956} y1={83.78842272} x2={58.71111956} y2={84.58842112} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={79.39930018} y1={57.04860066} x2={80.84929982} y2={57.04860066} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={79.39930018} y1={54.19859874} x2={80.84929982} y2={54.19859874} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={72.38580137999999} y1={87.63458469999999} x2={78.48579934} y2={87.63458469999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={72.38580137999999} y1={82.28458269999999} x2={72.38580137999999} y2={82.42958368} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={72.38580137999999} y1={87.48958371999998} x2={72.38580137999999} y2={87.63458469999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={72.38580137999999} y1={82.28458269999999} x2={78.48579934} y2={82.28458269999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={78.48579934} y1={82.28458269999999} x2={78.48579934} y2={82.37958377999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={78.48579934} y1={87.53958362} x2={78.48579934} y2={87.63458469999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={18.61344512} y1={108.05885424} x2={21.33124512} y2={112.76622099999999} strokeWidth={0.35559999999999997} />
      <silkscreenline x1={21.33124512} y1={112.76622099999999} x2={24.04904512} y2={108.05885424} strokeWidth={0.35559999999999997} />
      <silkscreenline x1={18.61344512} y1={108.05885424} x2={24.04904512} y2={108.05885424} strokeWidth={0.35559999999999997} />
      <silkscreenline x1={66.64685172} y1={111.41276675999998} x2={69.36465172} y2={106.7054} strokeWidth={0.35559999999999997} />
      <silkscreenline x1={63.92905172} y1={106.7054} x2={66.64685172} y2={111.41276675999998} strokeWidth={0.35559999999999997} />
      <silkscreenline x1={63.92905172} y1={106.7054} x2={69.36465172} y2={106.7054} strokeWidth={0.35559999999999997} />
      <silkscreenline x1={84.84279957999999} y1={108.68460101999999} x2={85.14279898} y2={108.68460101999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={79.04280102} y1={108.68460101999999} x2={79.34280042} y2={108.68460101999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={79.04280102} y1={114.48459958000001} x2={79.04280102} y2={114.78459898} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={79.04280102} y1={108.68460101999999} x2={79.04280102} y2={108.98460041999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={84.84279957999999} y1={114.78459898} x2={85.14279898} y2={114.78459898} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={79.04280102} y1={114.78459898} x2={79.34280042} y2={114.78459898} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={85.14279898} y1={114.48459958000001} x2={85.14279898} y2={114.78459898} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={85.14279898} y1={108.68460101999999} x2={85.14279898} y2={108.98460041999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={77.16984566} y1={58.85450256} x2={81.61484565999999} y2={58.85450256} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={77.16984566} y1={61.01350256} x2={81.61484565999999} y2={61.01350256} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={80.98680018} y1={87.00859916} x2={80.98680018} y2={88.70860083999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={82.43679981999999} y1={87.00859916} x2={82.43679981999999} y2={88.70860083999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.59780096} y1={86.49860018} x2={88.59780096} y2={87.94859982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={85.74779903999999} y1={86.49860018} x2={85.74779903999999} y2={87.94859982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={80.65879982} y1={87.00859916} x2={80.65879982} y2={88.70860083999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={79.20880018} y1={87.00859916} x2={79.20880018} y2={88.70860083999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={85.54980096} y1={86.49860018} x2={85.54980096} y2={87.94859982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={82.69979903999999} y1={86.49860018} x2={82.69979903999999} y2={87.94859982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={94.69380096} y1={86.49860018} x2={94.69380096} y2={87.94859982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={91.84379904} y1={86.49860018} x2={91.84379904} y2={87.94859982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={91.64580096} y1={86.49860018} x2={91.64580096} y2={87.94859982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.79579903999999} y1={86.49860018} x2={88.79579903999999} y2={87.94859982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.75680102} y1={90.263599} x2={82.85679898} y2={90.263599} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={82.85679898} y1={95.46860002} x2={82.85679898} y2={95.613601} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={82.85679898} y1={90.263599} x2={82.85679898} y2={90.40859998} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.75680102} y1={95.613601} x2={82.85679898} y2={95.613601} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.75680102} y1={95.51859992} x2={76.75680102} y2={95.613601} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.75680102} y1={90.263599} x2={76.75680102} y2={90.35860008} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.75680102} y1={97.248599} x2={82.85679898} y2={97.248599} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={82.85679898} y1={102.45360002} x2={82.85679898} y2={102.598601} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={82.85679898} y1={97.248599} x2={82.85679898} y2={97.39359998} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.75680102} y1={102.598601} x2={82.85679898} y2={102.598601} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.75680102} y1={102.50359992} x2={76.75680102} y2={102.598601} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.75680102} y1={97.248599} x2={76.75680102} y2={97.34360008} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={73.91944575999999} y1={118.36399999999999} x2={75.9714} y2={118.36399999999999} strokeWidth={0.127} />
      <silkscreenline x1={75.9714} y1={118.36399999999999} x2={76.5556} y2={117.7798} strokeWidth={0.127} />
      <silkscreenline x1={85.2678} y1={116.68759999999999} x2={85.2678} y2={119.4086004} strokeWidth={0.127} />
      <silkscreenline x1={77.3938} y1={111.8616} x2={77.5208} y2={111.8616} strokeWidth={0.127} />
      <silkscreenline x1={76.7842} y1={111.252} x2={77.3938} y2={111.8616} strokeWidth={0.127} />
      <silkscreenline x1={76.327} y1={111.252} x2={76.7842} y2={111.252} strokeWidth={0.127} />
      <silkscreenline x1={76.327} y1={110.871} x2={76.327} y2={111.252} strokeWidth={0.127} />
      <silkscreenline x1={77.0128} y1={109.5756} x2={77.2668} y2={109.5756} strokeWidth={0.127} />
      <silkscreenline x1={76.327} y1={108.8898} x2={77.0128} y2={109.5756} strokeWidth={0.127} />
      <silkscreenline x1={76.327} y1={109.70259999999999} x2={76.327} y2={110.871} strokeWidth={0.127} />
      <silkscreenline x1={76.327} y1={107.4674} x2={76.327} y2={108.8898} strokeWidth={0.127} />
      <silkscreenline x1={85.2678} y1={119.4086004} x2={85.2678} y2={124.7648} strokeWidth={0.127} />
      <silkscreenline x1={81.00059999999999} y1={119.4086004} x2={85.2678} y2={119.4086004} strokeWidth={0.127} />
      <silkscreenline x1={81.00059999999999} y1={115.46839999999999} x2={81.00059999999999} y2={124.7648} strokeWidth={0.127} />
      <silkscreenline x1={65.46897243999999} y1={81.94360040000001} x2={65.46897243999999} y2={82.34359959999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={66.66897003999999} y1={81.94360040000001} x2={66.66897003999999} y2={82.34359959999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={42.08580102} y1={76.00359958} x2={42.08580102} y2={78.77859784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={81.72859955999999} x2={42.08580102} y2={84.50359782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={84.50359782} x2={49.58580126} y2={84.50359782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={49.58580126} y1={84.50359782} x2={50.58579926} y2={83.50359981999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={50.58579926} y1={81.72859955999999} x2={50.58579926} y2={83.50359981999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={76.00359958} x2={49.58580126} y2={76.00359958} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={49.58580126} y1={76.00359958} x2={50.58579926} y2={77.00359758} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={50.58579926} y1={77.00359758} x2={50.58579926} y2={78.77859784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={66.85959958} x2={42.08580102} y2={69.63459784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={72.58459956} x2={42.08580102} y2={75.35959782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={75.35959782} x2={49.58580126} y2={75.35959782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={49.58580126} y1={75.35959782} x2={50.58579926} y2={74.35959981999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={50.58579926} y1={72.58459956} x2={50.58579926} y2={74.35959981999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={66.85959958} x2={49.58580126} y2={66.85959958} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={49.58580126} y1={66.85959958} x2={50.58579926} y2={67.85959758} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={50.58579926} y1={67.85959758} x2={50.58579926} y2={69.63459784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={57.715599579999996} x2={42.08580102} y2={60.49059784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={63.440599559999995} x2={42.08580102} y2={66.21559782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={66.21559782} x2={49.58580126} y2={66.21559782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={49.58580126} y1={66.21559782} x2={50.58579926} y2={65.21559982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={50.58579926} y1={63.440599559999995} x2={50.58579926} y2={65.21559982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={42.08580102} y1={57.715599579999996} x2={49.58580126} y2={57.715599579999996} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={49.58580126} y1={57.715599579999996} x2={50.58579926} y2={58.71559758} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={50.58579926} y1={58.71559758} x2={50.58579926} y2={60.49059784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={46.24580032} y1={87.80360137999999} x2={47.695799959999995} y2={87.80360137999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={46.24580032} y1={84.95359945999999} x2={47.695799959999995} y2={84.95359945999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={46.24580032} y1={90.97860137999999} x2={47.695799959999995} y2={90.97860137999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={46.24580032} y1={88.12859945999999} x2={47.695799959999995} y2={88.12859945999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={46.37280032} y1={94.37859965999999} x2={47.82279996} y2={94.37859965999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={46.37280032} y1={91.52859774} x2={47.82279996} y2={91.52859774} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={50.553800339999995} y1={96.27459789999999} x2={50.553800339999995} y2={97.72459753999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={47.70379842} y1={96.27459789999999} x2={47.70379842} y2={97.72459753999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={52.833800860000004} y1={93.39760086} x2={52.833800860000004} y2={93.57759795999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={52.833800860000004} y1={96.61760204} x2={52.833800860000004} y2={96.79759913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={52.833800860000004} y1={96.79759913999999} x2={56.233799139999995} y2={96.79759913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={56.233799139999995} y1={93.39760086} x2={56.233799139999995} y2={93.57759795999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={56.233799139999995} y1={96.6175995} x2={56.233799139999995} y2={96.79759913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={52.833800860000004} y1={93.39760086} x2={56.233799139999995} y2={93.39760086} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={52.833800860000004} y1={88.06360086} x2={56.233799139999995} y2={88.06360086} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={56.233799139999995} y1={91.28359950000001} x2={56.233799139999995} y2={91.46359913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={56.233799139999995} y1={88.06360086} x2={56.233799139999995} y2={88.24359796} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={52.833800860000004} y1={91.46359913999999} x2={56.233799139999995} y2={91.46359913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={52.833800860000004} y1={91.28360203999999} x2={52.833800860000004} y2={91.46359913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={52.833800860000004} y1={88.06360086} x2={52.833800860000004} y2={88.24359796} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={76.53280096} y1={61.4995976} x2={76.53280096} y2={62.24959609999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={76.53280096} y1={61.4995976} x2={76.73280056} y2={61.4995976} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={76.53280096} y1={64.99959568} x2={76.73280056} y2={64.99959568} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={76.53280096} y1={64.79959608} x2={76.53280096} y2={64.99959568} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={80.03279903999999} y1={64.79959608} x2={80.03279903999999} y2={64.99959568} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={79.83279944} y1={64.99959568} x2={80.03279903999999} y2={64.99959568} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={80.03279903999999} y1={61.4995976} x2={80.03279903999999} y2={61.69959719999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={79.83279944} y1={61.4995976} x2={80.03279903999999} y2={61.4995976} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={49.77154384} y1={119.93904384} x2={50.40654384} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.757043839999994} y1={122.37729144} x2={60.85864383999999} y2={122.37729144} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={54.63564383999999} y1={120.19304384} x2={54.63564383999999} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={56.71844383999999} y1={120.82804384} x2={60.73164384} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.80339944} y1={119.93904384} x2={48.501543840000004} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.43424384} y1={128.06704384} x2={60.299843839999994} y2={128.06704384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.85944384} y1={119.93904384} x2={41.85944384} y2={128.06704384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={57.70904383999999} y1={119.93904384} x2={57.70904383999999} y2={120.19304384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.962543839999995} y1={120.19304384} x2={54.63564383999999} y2={120.19304384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={48.501543840000004} y1={119.93904384} x2={49.77154384} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={49.77154384} y1={119.93904384} x2={49.77154384} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.67206944} y1={120.19304384} x2={53.67206944} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.87544384} y1={125.47827584} x2={42.87544384} y2={127.05104384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.757043839999994} y1={125.62882164} x2={60.757043839999994} y2={125.66674384000001} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={61.214243839999995} y1={128.06704384} x2={61.87464384} y2={128.06704384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={50.40654384} y1={119.93904384} x2={53.32754384} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.00244384} y1={127.17804384} x2={60.73164384} y2={127.17804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.757043839999994} y1={125.62882164} x2={60.85864383999999} y2={125.62882164} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.67206944} y1={120.19304384} x2={53.962543839999995} y2={120.19304384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.962543839999995} y1={120.82804384} x2={54.63564383999999} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={49.77154384} y1={121.6914} x2={53.962543839999995} y2={121.6914} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={56.71844383999999} y1={120.19304384} x2={56.71844383999999} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.97704384} y1={122.40444404} x2={42.97704384} y2={125.60166904} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.46904384} y1={122.52781184} x2={42.87544384} y2={122.52781184} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.85864383999999} y1={120.95504384} x2={60.85864383999999} y2={122.47904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.85944384} y1={119.93904384} x2={45.771399439999996} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={54.63564383999999} y1={120.82804384} x2={56.71844383999999} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.46904384} y1={122.52781184} x2={42.46904384} y2={125.47827584} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.85864383999999} y1={125.52704384} x2={61.26504384} y2={125.52704384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.962543839999995} y1={120.19304384} x2={53.962543839999995} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={45.771399439999996} y1={119.88824384} x2={47.80339944} y2={119.88824384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={61.26504384} y1={122.47904384} x2={61.26504384} y2={125.52704384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={45.28844384} y1={122.40444404} x2={45.28844384} y2={125.60166904} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={49.77154384} y1={120.82804384} x2={49.77154384} y2={121.6914} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={47.80339944} y1={119.88824384} x2={47.80339944} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.757043839999994} y1={122.33934384} x2={60.757043839999994} y2={122.37729144} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={56.71844383999999} y1={120.19304384} x2={57.70904383999999} y2={120.19304384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.32754384} y1={119.93904384} x2={53.64504383999999} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={45.771399439999996} y1={119.88824384} x2={45.771399439999996} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={58.445643839999995} y1={122.33934384} x2={58.445643839999995} y2={125.66674384000001} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.64504383999999} y1={119.93904384} x2={53.64504383999999} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={43.00244384} y1={120.82804384} x2={48.501543840000004} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.87544384} y1={125.60166904} x2={45.28844384} y2={125.60166904} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={48.501543840000004} y1={120.82804384} x2={49.77154384} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.85864383999999} y1={122.47904384} x2={61.26504384} y2={122.47904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.962543839999995} y1={120.82804384} x2={53.962543839999995} y2={121.6914} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.757043839999994} y1={122.37729144} x2={60.757043839999994} y2={125.62882164} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={54.63564383999999} y1={120.19304384} x2={56.71844383999999} y2={120.19304384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.87544384} y1={122.40444404} x2={45.28844384} y2={122.40444404} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={60.85864383999999} y1={125.52704384} x2={60.85864383999999} y2={127.05104384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={58.445643839999995} y1={125.66674384000001} x2={60.757043839999994} y2={125.66674384000001} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={58.445643839999995} y1={122.33934384} x2={60.757043839999994} y2={122.33934384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.46904384} y1={125.47827584} x2={42.87544384} y2={125.47827584} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={53.64504383999999} y1={120.82804384} x2={53.67206944} y2={120.82804384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={42.87544384} y1={120.95504384} x2={42.87544384} y2={122.52781184} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={61.87464384} y1={119.93904384} x2={61.87464384} y2={128.06704384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={57.70904383999999} y1={119.93904384} x2={61.87464384} y2={119.93904384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={41.85944384} y1={128.06704384} x2={42.51984384} y2={128.06704384} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={67.95879982} y1={63.513599160000005} x2={67.95879982} y2={65.21360084} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={66.50880018000001} y1={63.513599160000005} x2={66.50880018000001} y2={65.21360084} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={67.94879984} y1={61.30559748} x2={67.94879984} y2={61.75559911999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={66.51880016} y1={63.08059774} x2={67.40880091999999} y2={63.08059774} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={66.51880016} y1={59.98059886} x2={66.51880016} y2={60.80559848} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={66.51880016} y1={62.255598119999995} x2={66.51880016} y2={63.08059774} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={66.51880016} y1={59.98059886} x2={67.40880091999999} y2={59.98059886} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={66.00279916000001} y1={59.58859811999999} x2={67.70280084} y2={59.58859811999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={66.00279916000001} y1={58.138598480000006} x2={67.70280084} y2={58.138598480000006} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={98.97082822} y1={57.57185844} x2={98.97082822} y2={59.02185808} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={101.82083014} y1={57.57185844} x2={101.82083014} y2={59.02185808} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={60.505797199999996} y1={88.95260086} x2={60.505797199999996} y2={103.75260173999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={75.90579688} y1={88.95260086} x2={75.90579688} y2={103.75260173999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={60.9057964} y1={104.15260094} x2={75.50579767999999} y2={104.15260094} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={60.8057966} y1={88.55260166} x2={75.60579748} y2={88.55260166} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={77.41780046} y1={66.05160018000001} x2={77.41780046} y2={67.50159982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={80.41779954} y1={66.05160018000001} x2={80.41779954} y2={67.50159982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={57.76826139999999} y1={94.65959986} x2={59.218261039999994} y2={94.65959986} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={57.76826139999999} y1={91.65960077999999} x2={59.218261039999994} y2={91.65960077999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={57.75334144} y1={98.02760176} x2={59.20334108} y2={98.02760176} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={57.75334144} y1={95.02760268} x2={59.20334108} y2={95.02760268} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={63.69459955999999} x2={88.82180102} y2={65.46959982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={65.46959982} x2={89.82179901999999} y2={66.46959782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={89.82179901999999} y1={66.46959782} x2={97.32179925999999} y2={66.46959782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={58.969597580000006} x2={88.82180102} y2={60.74459784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={58.969597580000006} x2={89.82179901999999} y2={57.96959957999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={89.82179901999999} y1={57.96959957999999} x2={97.32179925999999} y2={57.96959957999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={97.32179925999999} y1={57.96959957999999} x2={97.32179925999999} y2={60.74459784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={97.32179925999999} y1={63.69459955999999} x2={97.32179925999999} y2={66.46959782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={72.83859955999999} x2={88.82180102} y2={74.61359981999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={74.61359981999999} x2={89.82179901999999} y2={75.61359782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={89.82179901999999} y1={75.61359782} x2={97.32179925999999} y2={75.61359782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={68.11359758} x2={88.82180102} y2={69.88859784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={68.11359758} x2={89.82179901999999} y2={67.11359958} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={89.82179901999999} y1={67.11359958} x2={97.32179925999999} y2={67.11359958} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={97.32179925999999} y1={67.11359958} x2={97.32179925999999} y2={69.88859784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={97.32179925999999} y1={72.83859955999999} x2={97.32179925999999} y2={75.61359782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={113.49880017999999} y1={57.62260001999999} x2={113.49880017999999} y2={59.3226017} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={114.94879982} y1={57.62260001999999} x2={114.94879982} y2={59.3226017} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={24.6312436} y1={56.74405212} x2={24.6312436} y2={57.403999999999996} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={24.6312436} y1={56.74405212} x2={26.01468} y2={56.74405212} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={26.01468} y1={56.74405212} x2={26.01468} y2={57.403999999999996} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={26.01468} y1={59.1312} x2={26.01468} y2={59.79114788} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={24.6312436} y1={59.79114788} x2={26.01468} y2={59.79114788} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={24.6312436} y1={59.1312} x2={24.6312436} y2={59.79114788} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={88.82180102} y1={81.98259956} x2={88.82180102} y2={83.75759982} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={83.75759982} x2={89.82179901999999} y2={84.75759782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={89.82179901999999} y1={84.75759782} x2={97.32179925999999} y2={84.75759782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={77.25759758000001} x2={88.82180102} y2={79.03259784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={88.82180102} y1={77.25759758000001} x2={89.82179901999999} y2={76.25759957999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={89.82179901999999} y1={76.25759957999999} x2={97.32179925999999} y2={76.25759957999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={97.32179925999999} y1={76.25759957999999} x2={97.32179925999999} y2={79.03259784} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={97.32179925999999} y1={81.98259956} x2={97.32179925999999} y2={84.75759782} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={57.0033404} y1={88.24876939999999} x2={57.0033404} y2={88.6487686} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={58.50334247999999} y1={88.24876939999999} x2={58.50334247999999} y2={88.6487686} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={69.15079896} y1={85.43842196} x2={69.15079896} y2={85.83842116} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={70.65080103999999} y1={85.43842196} x2={70.65080103999999} y2={85.83842116} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={54.10380086} y1={102.25859913999999} x2={57.50379913999999} y2={102.25859913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={54.10380086} y1={98.85860086} x2={54.10380086} y2={99.03860049999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={54.10380086} y1={102.07860203999999} x2={54.10380086} y2={102.25859913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={54.10380086} y1={98.85860086} x2={57.50379913999999} y2={98.85860086} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={57.50379913999999} y1={98.85860086} x2={57.50379913999999} y2={99.03859796} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={57.50379913999999} y1={102.07860203999999} x2={57.50379913999999} y2={102.25859913999999} strokeWidth={0.14999969999999999} />
      <silkscreenline x1={39.8558004} y1={38.7205982} x2={53.315798879999996} y2={38.7205982} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={53.315798879999996} y1={38.7205982} x2={53.315798879999996} y2={47.3605987} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={39.8558004} y1={47.3605987} x2={53.315798879999996} y2={47.3605987} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={39.8558004} y1={38.7205982} x2={39.8558004} y2={47.3605987} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={57.75580015999999} y1={40.51098832} x2={57.75580015999999} y2={40.61098812} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={71.05579896} y1={40.51098832} x2={71.05579896} y2={40.61098812} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={69.35579981999999} y1={40.51098578} x2={71.05579896} y2={40.51098578} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={57.75580015999999} y1={40.51098578} x2={59.4557993} y2={40.51098578} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={69.35579981999999} y1={38.860989079999996} x2={69.35579981999999} y2={40.51098832} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={59.4557993} y1={38.86098654} x2={59.4557993} y2={40.51098578} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={68.67579864} y1={38.86098654} x2={69.35579981999999} y2={38.86098654} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={59.4557993} y1={38.86098654} x2={60.13580047999999} y2={38.86098654} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={60.13580047999999} y1={32.86098838} x2={60.13580047999999} y2={38.86098654} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={60.13580047999999} y1={38.86098654} x2={68.67579864} y2={38.86098654} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={68.67579864} y1={32.86098838} x2={68.67579864} y2={38.86098654} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={60.13580047999999} y1={32.86098838} x2={68.67579864} y2={32.86098838} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={57.75580015999999} y1={42.91098606} x2={57.75580015999999} y2={43.01098586} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={57.75580015999999} y1={43.01098586} x2={71.05579896} y2={43.01098586} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={71.05579896} y1={42.91098606} x2={71.05579896} y2={43.01098586} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={74.6957993} y1={38.852688359999995} x2={84.59579982} y2={38.852688359999995} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={84.59579982} y1={38.852688359999995} x2={84.59579982} y2={40.802689539999996} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={84.59579982} y1={40.802689539999996} x2={86.29579896} y2={40.802689539999996} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={74.6957993} y1={38.852688359999995} x2={74.6957993} y2={40.802689539999996} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={72.99580015999999} y1={40.802689539999996} x2={74.6957993} y2={40.802689539999996} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={86.29579896} y1={40.802689539999996} x2={86.29579896} y2={43.10269002} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={84.59579982} y1={43.10269002} x2={86.29579896} y2={43.10269002} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={84.59579982} y1={43.10269002} x2={84.59579982} y2={47.852690679999995} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={74.6957993} y1={47.852690679999995} x2={84.59579982} y2={47.852690679999995} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={74.6957993} y1={43.10269002} x2={74.6957993} y2={47.852690679999995} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={72.99580015999999} y1={40.802689539999996} x2={72.99580015999999} y2={43.10269002} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={72.99580015999999} y1={43.10269002} x2={74.6957993} y2={43.10269002} strokeWidth={0.14999969999999999} layer="bottom" />
      <silkscreenline x1={61.520798979999995} y1={49.049696159999996} x2={61.520798979999995} y2={49.278194559999996} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenline x1={61.520798979999995} y1={49.049696159999996} x2={68.30259898} y2={49.049696159999996} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenline x1={61.520798979999995} y1={53.03750124} x2={68.30259898} y2={53.03750124} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenline x1={61.520798979999995} y1={52.80900284} x2={61.520798979999995} y2={53.03750124} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenline x1={82.53080014} y1={57.889002839999996} x2={82.53080014} y2={58.117501239999996} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenline x1={75.74900013999999} y1={58.117501239999996} x2={82.53080014} y2={58.117501239999996} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenline x1={75.74900013999999} y1={54.12969616} x2={82.53080014} y2={54.12969616} strokeWidth={0.17779999999999999} layer="bottom" />
      <silkscreenline x1={82.53080014} y1={54.12969616} x2={82.53080014} y2={54.35819456} strokeWidth={0.17779999999999999} layer="bottom" />
      <fabricationnotepath route={[{"x":121.71679999999999,"y":38.9636},{"x":17.576799999999995,"y":38.96360000000001}]} strokeWidth={0.254} color="#ec4899" />
      <fabricationnotepath route={[{"x":17.5768,"y":130.40359999999998},{"x":17.5768,"y":38.9636}]} strokeWidth={0.254} color="#ec4899" />
      <fabricationnotetext pcbX={110.66770094} pcbY={122.96213660000001} anchorAlignment="center" text="TP9" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={98.67826339999999} pcbY={125.70450094} anchorAlignment="center" text="TP12" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={73.6353366} pcbY={124.94269905999998} anchorAlignment="center" text="TP7" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={69.8253366} pcbY={124.94269905999998} anchorAlignment="center" text="TP10" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={114.2753366} pcbY={80.49269906} anchorAlignment="center" text="TP11" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={94.86826339999999} pcbY={125.70450094} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={114.2753366} pcbY={76.68269906} anchorAlignment="center" text="TP13" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={69.5008008} pcbY={82.67562332} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.8128} color="#ec4899" />
      <fabricationnotetext pcbX={57.53612063999999} pcbY={85.66342277999999} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.8128} color="#ec4899" />
      <fabricationnotetext pcbX={67.57779728} pcbY={82.91860988} anchorAlignment="bottom_left" text="RT1" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={82.82980132} pcbY={96.14259918} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={82.592799} pcbY={103.07764754} anchorAlignment="center" text="C43" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={115.62079999999999} pcbY={111.7346} anchorAlignment="center" text="JP9" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={71.50459918} pcbY={81.6027959} anchorAlignment="center" text="C42" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={80.07431534} pcbY={55.57361504} anchorAlignment="bottom_left" text="C41" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={75.48459122} pcbY={84.90959396} anchorAlignment="bottom_left" text="Q5" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={78.72780037999999} pcbY={119.76459918} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={82.09279492} pcbY={111.90120114000001} anchorAlignment="bottom_left" text="U1" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={81.52079962} pcbY={58.199599119999995} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={77.62704566} pcbY={59.60380256} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={80.0332664} pcbY={103.12759918} anchorAlignment="center" text="R32" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={81.76178719999999} pcbY={87.8086128} anchorAlignment="bottom_left" text="C13" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={87.2227872} pcbY={87.1736128} anchorAlignment="bottom_left" text="C22" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={79.98378466} pcbY={87.80861026} anchorAlignment="bottom_left" text="C10" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={84.1747872} pcbY={87.1736128} anchorAlignment="bottom_left" text="C21" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={93.31878719999999} pcbY={87.1736128} anchorAlignment="bottom_left" text="C5" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={90.27078719999999} pcbY={87.1736128} anchorAlignment="bottom_left" text="C6" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={79.75801168} pcbY={92.9885872} anchorAlignment="bottom_left" text="Q8" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={79.75801168} pcbY={99.9735872} anchorAlignment="bottom_left" text="Q7" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={84.28079918} pcbY={121.83059962} anchorAlignment="center" text="R29" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={82.88379918} pcbY={118.90959962} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={84.73080082} pcbY={117.25960038} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={81.48679918} pcbY={118.90959962} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={83.17179962} pcbY={121.99260081999999} anchorAlignment="center" text="C36" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={83.17179962} pcbY={120.46860081999999} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={88.84679969999999} pcbY={105.08860109999999} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" />
      <fabricationnotetext pcbX={66.36897064} pcbY={81.14359945999999} anchorAlignment="center" text="R43" font="tscircuit2024" fontSize={0.51999896} color="#ec4899" />
      <fabricationnotetext pcbX={76.7358003} pcbY={114.57059890000001} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" />
      <fabricationnotetext pcbX={76.7358003} pcbY={116.3485989} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" />
      <fabricationnotetext pcbX={52.78479918} pcbY={99.35159962} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={71.6788} pcbY={62.2655981} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={46.335800139999996} pcbY={80.0869874} anchorAlignment="bottom_left" text="C17" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={46.335800139999996} pcbY={70.94298739999999} anchorAlignment="bottom_left" text="C18" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={46.335800139999996} pcbY={61.798987399999994} anchorAlignment="bottom_left" text="C19" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={47.0207848} pcbY={86.42858508} anchorAlignment="bottom_left" text="C20" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={47.0207848} pcbY={89.60358508} anchorAlignment="bottom_left" text="C14" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={47.1477848} pcbY={93.00358336} anchorAlignment="bottom_left" text="C9" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={49.17878658} pcbY={96.94961052} anchorAlignment="bottom_left" text="C40" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={51.415800139999995} pcbY={97.35859878} anchorAlignment="bottom_left" text="C12" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={54.216800379999995} pcbY={97.53959918} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={54.4838128} pcbY={95.14758212} anchorAlignment="bottom_left" text="Q2" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={54.216800379999995} pcbY={92.20559918} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={54.4838128} pcbY={89.81358211999999} anchorAlignment="bottom_left" text="Q4" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={90.12279918} pcbY={118.90959962} anchorAlignment="center" text="R36" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={78.60780062} pcbY={62.07459772} anchorAlignment="center" text="Q3" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
      <fabricationnotetext pcbX={65.58279999999999} pcbY={124.81559999999999} anchorAlignment="center" text="JP12" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={112.5728} pcbY={84.1756} anchorAlignment="center" text="JP1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={102.41279999999999} pcbY={124.81559999999999} anchorAlignment="center" text="JP7" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={113.8428} pcbY={107.0356} anchorAlignment="center" text="JP8" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={115.62079999999999} pcbY={119.4816} anchorAlignment="center" text="JP5" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={99.69680086} pcbY={121.08460162} anchorAlignment="center" text="JP2" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={113.8428} pcbY={99.4156} anchorAlignment="center" text="JP10" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={113.8428} pcbY={103.2256} anchorAlignment="center" text="JP11" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={113.8428} pcbY={114.65559999999999} anchorAlignment="center" text="J11" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={115.62079999999999} pcbY={92.8116} anchorAlignment="center" text="JP4" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={115.62079999999999} pcbY={89.0016} anchorAlignment="center" text="JP3" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={113.8428} pcbY={95.6056} anchorAlignment="center" text="JP6" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={98.41179962} pcbY={119.19860082} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={104.38179783999999} pcbY={118.57079918} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={50.3428} pcbY={123.5456} anchorAlignment="center" text="J12" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={75.93279962} pcbY={117.29360082} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={75.93279962} pcbY={115.89660081999999} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={75.93279962} pcbY={113.10260081999999} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={75.93279962} pcbY={114.49960082} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={88.76080037999999} pcbY={107.44559918} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={76.8438011} pcbY={117.1726003} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" />
      <fabricationnotetext pcbX={87.65180081999999} pcbY={117.25960038} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={77.36480082} pcbY={118.40260038} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={80.53980082} pcbY={117.25960038} anchorAlignment="center" text="C38" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={88.59879918} pcbY={118.90959962} anchorAlignment="center" text="R30" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={86.25480082} pcbY={106.21060037999999} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={88.75179862} pcbY={120.34160082} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={93.6078011} pcbY={106.3776003} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" />
      <fabricationnotetext pcbX={85.80479918} pcbY={118.90959962} anchorAlignment="center" text="R31" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={78.69279918} pcbY={118.90959962} anchorAlignment="center" text="R34" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={87.65180081999999} pcbY={106.21060037999999} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={90.41079962} pcbY={114.88060082} anchorAlignment="center" text="R37" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={88.76080037999999} pcbY={115.82759917999999} anchorAlignment="center" text="R38" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={90.41079962} pcbY={113.48360081999999} anchorAlignment="center" text="R42" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={90.41079962} pcbY={112.08660081999999} anchorAlignment="center" text="R41" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={90.41079962} pcbY={110.68960082} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={80.8647989} pcbY={107.82059969999999} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" />
      <fabricationnotetext pcbX={77.67679918} pcbY={110.40059962} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={77.8788003} pcbY={113.0465989} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" />
      <fabricationnotetext pcbX={90.41079962} pcbY={109.29260081999999} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={95.36379962} pcbY={105.48260081999999} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={84.40779918} pcbY={107.86059962} anchorAlignment="center" text="R35" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={89.74179918} pcbY={106.59059962} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={91.17380037999999} pcbY={105.03259918} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={68.98532304} pcbY={63.63935202} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={67.1838128} pcbY={64.41358212} anchorAlignment="bottom_left" text="C1" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={67.18381534} pcbY={61.480613639999994} anchorAlignment="bottom_left" text="D1" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={66.80281534} pcbY={58.81361363999999} anchorAlignment="bottom_left" text="C2" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={117.2718} pcbY={56.94860086} anchorAlignment="center" text="J4" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={105.2068} pcbY={49.3776} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1.524} color="#ec4899" />
      <fabricationnotetext pcbX={85.1408} pcbY={63.3476} anchorAlignment="center" text="TP2" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={85.1408} pcbY={67.41159999999999} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={21.2598} pcbY={74.5236} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={31.4198} pcbY={49.3776} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1.524} color="#ec4899" />
      <fabricationnotetext pcbX={100.44581384} pcbY={58.2468736} anchorAlignment="bottom_left" text="C3" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={66.0908} pcbY={86.9696} anchorAlignment="center" text="TP6" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={61.645799999999994} pcbY={86.9696} anchorAlignment="center" text="TP5" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={66.20579595999999} pcbY={95.95260210000001} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={78.96778719999999} pcbY={66.7266128} anchorAlignment="bottom_left" text="R3" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={58.44327656} pcbY={93.10961058} anchorAlignment="bottom_left" text="R4" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={23.2918} pcbY={56.7436} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
      <fabricationnotetext pcbX={58.4283566} pcbY={96.47761756} anchorAlignment="bottom_left" text="R6" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={93.07180014} pcbY={62.38621} anchorAlignment="bottom_left" text="C4" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={93.07180014} pcbY={71.53021} anchorAlignment="bottom_left" text="C7" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={114.27378465999999} pcbY={58.4226162} anchorAlignment="bottom_left" text="C8" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={25.704675539999997} pcbY={56.87105212} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={93.07180014} pcbY={80.67421} anchorAlignment="bottom_left" text="C23" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={22.4028} pcbY={82.2706} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
      <fabricationnotetext pcbX={105.2068} pcbY={66.0146} anchorAlignment="center" text="J5" font="tscircuit2024" fontSize={1.524} color="#ec4899" />
      <fabricationnotetext pcbX={31.4198} pcbY={65.7606} anchorAlignment="center" text="J6" font="tscircuit2024" fontSize={1.524} color="#ec4899" />
      <fabricationnotetext pcbX={74.35713602} pcbY={81.58024832} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={58.00334094} pcbY={87.52376957999999} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.508} color="#ec4899" />
      <fabricationnotetext pcbX={70.1507995} pcbY={84.71342214} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.508} color="#ec4899" />
      <fabricationnotetext pcbX={55.85378719999999} pcbY={100.5086128} anchorAlignment="bottom_left" text="Q6" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
      <fabricationnotetext pcbX={80.23218904} pcbY={96.19255082} anchorAlignment="center" text="R33" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
      <fabricationnotetext pcbX={81.99930006} pcbY={63.523845519999995} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.4572} color="#ec4899" layer="bottom" />
      <fabricationnotetext pcbX={46.6357843} pcbY={45.42006918} anchorAlignment="bottom_left" text="J7" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" layer="bottom" />
      <fabricationnotetext pcbX={64.40579955999999} pcbY={40.6275921} anchorAlignment="bottom_left" text="J9" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" layer="bottom" />
      <fabricationnotetext pcbX={79.69577914} pcbY={46.002699459999995} anchorAlignment="bottom_left" text="J10" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" layer="bottom" />
      <fabricationnotetext pcbX={67.00719898} pcbY={50.5355987} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={1.016} color="#ec4899" layer="bottom" />
      <fabricationnotetext pcbX={77.04440014} pcbY={56.63159869999999} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={1.016} color="#ec4899" layer="bottom" />
      <fabricationnotetext pcbX={60.600800819999996} pcbY={122.46559962} anchorAlignment="center" text="R40" font="tscircuit2024" fontSize={0.4572} color="#ec4899" layer="bottom" />
      <fabricationnotetext pcbX={59.076800819999995} pcbY={122.46559962} anchorAlignment="center" text="R39" font="tscircuit2024" fontSize={0.4572} color="#ec4899" layer="bottom" />
      <fabricationnotedimension from={{ x: 17.5768, y: 28.8036 }} to={{ x: 42.9768, y: 28.8036 }} text="1000.00 mil" font="tscircuit2024" fontSize={1.524} color="#ec4899" arrowSize={1.524} offset={1.524} />
      <fabricationnotedimension from={{ x: 17.5768, y: 130.40359999999998 }} to={{ x: 17.576799999999995, y: 38.96360000000001 }} text="3600.00 mil" font="tscircuit2024" fontSize={1.524} color="#ec4899" arrowSize={1.524} offset={2.54} />
      <fabricationnotedimension from={{ x: 121.71679999999999, y: 38.9636 }} to={{ x: 17.5768, y: 38.9636 }} text="4100.00 mil" font="tscircuit2024" fontSize={1.524} color="#ec4899" arrowSize={1.524} offset={2.5654} />
      <silkscreentext pcbX={37.0580412} pcbY={121.54144093999999} anchorAlignment="bottom_left" fontSize={0.508} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="USB2ANY
      5: VBUS
      6: GND
      9: SCL
      10:SDA" />
      <silkscreentext pcbX={115.31599999999999} pcbY={82.3976} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="PPHV" />
      <silkscreentext pcbX={115.3169525} pcbY={86.1437825} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VOUT1" />
      <silkscreentext pcbX={115.31504749999999} pcbY={89.9664825} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={115.31504749999999} pcbY={112.78775258} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={115.31504749999999} pcbY={105.29475258} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={115.31504749999999} pcbY={101.41475272} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={115.31504749999999} pcbY={97.67475258} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={115.31504749999999} pcbY={93.81560103999999} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={115.31504749999999} pcbY={120.51618009999999} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={100.6338475} pcbY={123.0653749} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND   VCC2" />
      <silkscreentext pcbX={112.06479999999999} pcbY={80.65881759999999} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="nRST" />
      <silkscreentext pcbX={109.77879999999999} pcbY={76.85515744} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SS/ATRK" />
      <silkscreentext pcbX={19.7104} pcbY={73.66} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="VIN" />
      <silkscreentext pcbX={19.7104} pcbY={79.756} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={82.43679981999999} pcbY={63.232997739999995} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="VOUT" />
      <silkscreentext pcbX={82.43679728} pcbY={67.26600212} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="VOUT1" />
      <silkscreentext pcbX={62.750699999999995} pcbY={81.25547121999999} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SW2" />
      <silkscreentext pcbX={59.92141432} pcbY={81.25547121999999} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SW1" />
      <silkscreentext pcbX={108.9161144} pcbY={128.016} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VCC2" />
      <silkscreentext pcbX={110.5612216} pcbY={116.81489209999998} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="FPWM      PSM" />
      <silkscreentext pcbX={95.28681983999999} pcbY={128.016} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="COMP" />
      <silkscreentext pcbX={90.7168366} pcbY={128.016} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={74.8792} pcbY={128.016} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
      <silkscreentext pcbX={71.0692} pcbY={128.016} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VCC1" />
      <silkscreentext pcbX={110.7948} pcbY={82.4099825} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="PS" />
      <silkscreentext pcbX={110.7957525} pcbY={86.1314} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VIN" />
      <silkscreentext pcbX={110.78917643999999} pcbY={89.9541} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VIN" />
      <silkscreentext pcbX={111.33828888000001} pcbY={109.03986066} anchorAlignment="bottom_left" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="1                0" />
      <silkscreentext pcbX={65.9892} pcbY={122.45980080000001} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VCC1" />
      <silkscreentext pcbX={118.3132} pcbY={51.66433152} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VOUT" />
      <silkscreentext pcbX={118.3132} pcbY={56.28600375999999} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="S+" />
      <silkscreentext pcbX={118.3132} pcbY={58.96700424} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="S-" />
      <silkscreentext pcbX={118.3132} pcbY={64.08384694} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={19.825197839999998} pcbY={56.79999816} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="S+" />
      <silkscreentext pcbX={19.81897738} pcbY={58.96999889999999} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="S-" />
      <silkscreentext pcbX={18.9992} pcbY={64.51599999999999} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={18.9992} pcbY={51.33664358} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VIN" />
      <silkscreentext pcbX={24.8048907} pcbY={113.03725424} anchorAlignment="center" fontSize={2.54} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="'.PRJ_Title'" />
      <silkscreentext pcbX={106.68090424} pcbY={110.7776931} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="ADDR" />
      <silkscreentext pcbX={61.849} pcbY={40.80919702} anchorAlignment="bottom_left" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Input" />
      <silkscreentext pcbX={76.68520096} pcbY={40.80919702} anchorAlignment="bottom_left" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Output" />
      <silkscreentext pcbX={113.03152146} pcbY={68.9356} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="5V - 48V" />
      <silkscreentext pcbX={31.102813079999997} pcbY={41.021} anchorAlignment="bottom_center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VIN" />
      <silkscreentext pcbX={104.91101446} pcbY={75.184} anchorAlignment="bottom_center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={104.2762202} pcbY={41.021} anchorAlignment="bottom_center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VOUT" />
      <silkscreentext pcbX={113.1062} pcbY={70.4342} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Max.5.0A" />
      <silkscreentext pcbX={30.99701446} pcbY={75.184} anchorAlignment="bottom_center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={20.21755164} pcbY={68.9356} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="9-36V" />
      <silkscreentext pcbX={20.21755164} pcbY={70.4342} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Max.14A" />
      <silkscreentext pcbX={106.68090424} pcbY={84.1756} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VOUT" />
      <silkscreentext pcbX={104.39564338} pcbY={91.694} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="EN/UVLO" />
      <silkscreentext pcbX={108.96690424} pcbY={95.3262} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SYNC" />
      <silkscreentext pcbX={109.72865785999998} pcbY={99.07244091999999} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SDA" />
      <silkscreentext pcbX={109.72865785999998} pcbY={102.9716} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SCL" />
      <silkscreentext pcbX={108.96690424} pcbY={106.8197} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="CFG2" />
      <silkscreentext pcbX={109.72865785999998} pcbY={114.7572} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="CDC" />
      <silkscreentext pcbX={107.05463984} pcbY={118.53112184} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="MODE" />
      <silkscreentext pcbX={101.2952} pcbY={128.016} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="ILIMCOMP" />
      <silkscreentext pcbX={106.80786359999999} pcbY={87.90939999999999} anchorAlignment="bottom_right" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="BIAS" />
      <silkscreentext pcbX={24.7032907} pcbY={111.2012} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="'.PRJ_Number' Rev.:.PCB_Rev" />
      <silkscreentext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text=".Layer_Name" />
      <silkscreentext pcbX={84.91659419999999} pcbY={95.96950071999998} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C44" />
      <silkscreentext pcbX={84.03728684} pcbY={101.88881832} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C43" />
      <silkscreentext pcbX={72.04953585999999} pcbY={77.52524246} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C42" />
      <silkscreentext pcbX={75.62537834} pcbY={55.378189979999995} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C41" />
      <silkscreentext pcbX={24.3965984} pcbY={107.93201933999998} anchorAlignment="center_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="CAUTION.  READ USER GUIDE BEFORE USE" />
      <silkscreentext pcbX={82.41495327999999} pcbY={57.6035424} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R5" />
      <silkscreentext pcbX={82.33651046} pcbY={59.81381992} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D2" />
      <silkscreentext pcbX={78.94410678} pcbY={82.29268022} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q5" />
      <silkscreentext pcbX={78.39017087999999} pcbY={113.5534432} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C25" />
      <silkscreentext pcbX={52.98748356} pcbY={99.8619288} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R28" />
      <silkscreentext pcbX={76.69420271999999} pcbY={103.12001219999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q7" />
      <silkscreentext pcbX={50.35139536} pcbY={92.32283542} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C40" />
      <silkscreentext pcbX={68.05097642} pcbY={79.04613858} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="RT1" />
      <silkscreentext pcbX={66.54678333999999} pcbY={79.0189174} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R43" />
      <silkscreentext pcbX={65.9814784} pcbY={126.99475744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP12" />
      <silkscreentext pcbX={86.36452374} pcbY={111.35178898000001} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U1" />
      <silkscreentext pcbX={21.75442944} pcbY={83.30675744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP8" />
      <silkscreentext pcbX={75.09495776} pcbY={126.99000255999998} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP7" />
      <silkscreentext pcbX={84.24765472} pcbY={61.5696635} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP2" />
      <silkscreentext pcbX={71.00177824} pcbY={126.99475744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP10" />
      <silkscreentext pcbX={109.38442944} pcbY={126.86775743999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP9" />
      <silkscreentext pcbX={118.56951647999999} pcbY={80.50641759999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP11" />
      <silkscreentext pcbX={63.28395776} pcbY={82.4959869} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP6" />
      <silkscreentext pcbX={118.4987216} pcbY={76.70275744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP13" />
      <silkscreentext pcbX={60.28974733999999} pcbY={82.55934212} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP5" />
      <silkscreentext pcbX={84.05575264} pcbY={70.9814176} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP1" />
      <silkscreentext pcbX={21.75495776} pcbY={76.95675743999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP3" />
      <silkscreentext pcbX={95.13441983999999} pcbY={126.98841759999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP12" />
      <silkscreentext pcbX={91.60654272} pcbY={126.99000255999998} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP4" />
      <silkscreentext pcbX={71.31031712} pcbY={115.33615744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R15" />
      <silkscreentext pcbX={51.63595972} pcbY={92.06975743999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R13" />
      <silkscreentext pcbX={78.04395871999999} pcbY={96.05670908} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R33" />
      <silkscreentext pcbX={84.99364001999999} pcbY={103.96228128} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R35" />
      <silkscreentext pcbX={56.779960100000004} pcbY={79.41250310000001} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R23" />
      <silkscreentext pcbX={77.4256389} pcbY={120.71897624} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R9" />
      <silkscreentext pcbX={71.28703039999999} pcbY={113.91375744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R18" />
      <silkscreentext pcbX={87.45744256} pcbY={121.08460923999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R25" />
      <silkscreentext pcbX={91.12654368} pcbY={108.7004176} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R24" />
      <silkscreentext pcbX={91.0687536} pcbY={103.7324189} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R21" />
      <silkscreentext pcbX={86.51487396} pcbY={121.15804571999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R31" />
      <silkscreentext pcbX={57.321099479999994} pcbY={95.78399689999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R6" />
      <silkscreentext pcbX={89.27174932} pcbY={121.08830747999998} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R30" />
      <silkscreentext pcbX={82.28362004} pcbY={116.68226345999999} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="270deg" mirrored={false} layer="top" text="R19" />
      <silkscreentext pcbX={75.68584304} pcbY={81.09147358} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R20" />
      <silkscreentext pcbX={91.12865696} pcbY={112.8914176} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R42" />
      <silkscreentext pcbX={78.45955098} pcbY={68.28890076} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R3" />
      <silkscreentext pcbX={54.10529692} pcbY={102.69762289999998} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R14" />
      <silkscreentext pcbX={69.01780202} pcbY={78.41106746} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R26" />
      <silkscreentext pcbX={93.91819672} pcbY={103.73400385999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R7" />
      <silkscreentext pcbX={71.28755871999999} pcbY={112.56121759999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R17" />
      <silkscreentext pcbX={90.5644366} pcbY={121.0872483} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R36" />
      <silkscreentext pcbX={71.31295872} pcbY={116.68235743999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R16" />
      <silkscreentext pcbX={91.1957536} pcbY={111.49441759999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R41" />
      <silkscreentext pcbX={91.1244304} pcbY={115.69175743999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R38" />
      <silkscreentext pcbX={104.62089058000001} pcbY={116.84814324} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R2" />
      <silkscreentext pcbX={91.12495872} pcbY={114.29475744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R37" />
      <silkscreentext pcbX={68.74650207999998} pcbY={66.23153886} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R1" />
      <silkscreentext pcbX={83.2944486} pcbY={116.67944659999999} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="270deg" mirrored={false} layer="top" text="R12" />
      <silkscreentext pcbX={79.26560728} pcbY={120.97178752} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R34" />
      <silkscreentext pcbX={81.26762004} pcbY={116.68038385999999} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="270deg" mirrored={false} layer="top" text="R10" />
      <silkscreentext pcbX={90.29386056} pcbY={102.6327259} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R22" />
      <silkscreentext pcbX={91.12495872} pcbY={110.09741759999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R27" />
      <silkscreentext pcbX={84.75824551999999} pcbY={122.7982304} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R29" />
      <silkscreentext pcbX={96.95966637999999} pcbY={117.03228308} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R8" />
      <silkscreentext pcbX={57.32585436} pcbY={91.80758626} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R4" />
      <silkscreentext pcbX={79.94815862} pcbY={103.94744259999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R32" />
      <silkscreentext pcbX={59.20515972} pcbY={100.93850271999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="Q6" />
      <silkscreentext pcbX={76.42817328} pcbY={96.02237335999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q8" />
      <silkscreentext pcbX={71.53420541999999} pcbY={56.2371367} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q1" />
      <silkscreentext pcbX={74.8697004} pcbY={64.401192} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q3" />
      <silkscreentext pcbX={50.7834011} pcbY={91.01848700000001} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q2" />
      <silkscreentext pcbX={54.84125176} pcbY={85.77386197999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q4" />
      <silkscreentext pcbX={65.76887531999999} pcbY={104.83876162} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="L1" />
      <silkscreentext pcbX={103.09201632} pcbY={126.88272058} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP7" />
      <silkscreentext pcbX={118.33201631999998} pcbY={88.13275743999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP3" />
      <silkscreentext pcbX={118.33201631999998} pcbY={95.75275744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP6" />
      <silkscreentext pcbX={118.33148800000001} pcbY={107.18275743999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP8" />
      <silkscreentext pcbX={118.4028112} pcbY={84.32275743999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP1" />
      <silkscreentext pcbX={118.32937472} pcbY={118.61434239999998} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP5" />
      <silkscreentext pcbX={118.33148800000001} pcbY={110.73875744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP9" />
      <silkscreentext pcbX={118.11857504} pcbY={103.37275744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP11" />
      <silkscreentext pcbX={118.04883679999999} pcbY={99.56275744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP10" />
      <silkscreentext pcbX={100.55571456} pcbY={118.61275744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP2" />
      <silkscreentext pcbX={118.33360128} pcbY={91.9443424} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP4" />
      <silkscreentext pcbX={32.18948096} pcbY={56.76375744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J2" />
      <silkscreentext pcbX={32.31278272} pcbY={73.14675744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J6" />
      <silkscreentext pcbX={118.45934143999999} pcbY={114.80275744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J11" />
      <silkscreentext pcbX={106.09714112} pcbY={73.40234240000001} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J5" />
      <silkscreentext pcbX={22.27978272} pcbY={66.54275744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J3" />
      <silkscreentext pcbX={106.1705776} pcbY={56.890757439999994} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J1" />
      <silkscreentext pcbX={63.14964256} pcbY={123.2690448} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="J12" />
      <silkscreentext pcbX={116.13436767999998} pcbY={66.9253424} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J4" />
      <silkscreentext pcbX={64.21256144} pcbY={61.09991589999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D1" />
      <silkscreentext pcbX={85.50639743999999} pcbY={82.65566399999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C22" />
      <silkscreentext pcbX={91.11016576} pcbY={107.30500002000001} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C37" />
      <silkscreentext pcbX={49.6811808} pcbY={89.54685672} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C9" />
      <silkscreentext pcbX={86.95098687999999} pcbY={59.93400256} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C4" />
      <silkscreentext pcbX={86.75240206} pcbY={73.28400126} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C7" />
      <silkscreentext pcbX={68.89276543999999} pcbY={87.45483906} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C32" />
      <silkscreentext pcbX={81.45816576} pcbY={123.94200255999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C36" />
      <silkscreentext pcbX={87.04352416} pcbY={123.18000255999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C35" />
      <silkscreentext pcbX={78.66363743999999} pcbY={123.18000255999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C39" />
      <silkscreentext pcbX={87.74496802} pcbY={103.8543897} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C26" />
      <silkscreentext pcbX={80.6607861} pcbY={121.00543744} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C38" />
      <silkscreentext pcbX={73.91944575999999} pcbY={118.55559219999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C16" />
      <silkscreentext pcbX={67.47239744} pcbY={65.9889968} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C1" />
      <silkscreentext pcbX={96.98148751999999} pcbY={56.12854154} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C3" />
      <silkscreentext pcbX={82.07739744} pcbY={84.42996576} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C13" />
      <silkscreentext pcbX={76.10839743999999} pcbY={107.41696576} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C27" />
      <silkscreentext pcbX={87.03039743999999} pcbY={83.19020191999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C6" />
      <silkscreentext pcbX={95.62798756000001} pcbY={106.16200255999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C15" />
      <silkscreentext pcbX={51.16163758} pcbY={64.01300126} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C19" />
      <silkscreentext pcbX={49.66727176} pcbY={86.00839288} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C20" />
      <silkscreentext pcbX={49.71259044} pcbY={87.84481287999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C14" />
      <silkscreentext pcbX={88.4273949} pcbY={83.15056268000001} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C5" />
      <silkscreentext pcbX={66.2021155} pcbY={57.109001860000006} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C2" />
      <silkscreentext pcbX={51.034637579999995} pcbY={73.03000125999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C18" />
      <silkscreentext pcbX={51.728029639999995} pcbY={98.77236531999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C12" />
      <silkscreentext pcbX={76.10839743999999} pcbY={109.64676064} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C31" />
      <silkscreentext pcbX={113.19239744000001} pcbY={57.7896736} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C8" />
      <silkscreentext pcbX={27.21339744} pcbY={57.449760639999994} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C11" />
      <silkscreentext pcbX={78.39017087999999} pcbY={115.20761311999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C24" />
      <silkscreentext pcbX={80.29939743999999} pcbY={84.4310224} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C10" />
      <silkscreentext pcbX={51.035165899999996} pcbY={81.92000125999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C17" />
      <silkscreentext pcbX={81.45975071999999} pcbY={122.79900255999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C34" />
      <silkscreentext pcbX={89.0623949} pcbY={102.79777763999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C29" />
      <silkscreentext pcbX={86.49571474} pcbY={103.87993956} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C28" />
      <silkscreentext pcbX={56.712424039999995} pcbY={80.78616557999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C30" />
      <silkscreentext pcbX={84.10939744} pcbY={82.72276063999999} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C21" />
      <silkscreentext pcbX={79.31391808000001} pcbY={105.54175488} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C33" />
      <silkscreentext pcbX={86.52964152} pcbY={77.96800256} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C23" />
      <silkscreentext pcbX={108.86439999999999} pcbY={40.99593528} anchorAlignment="bottom_left" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="VOUT" />
      <silkscreentext pcbX={108.25588458} pcbY={75.184} anchorAlignment="bottom_left" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="GND" />
      <silkscreentext pcbX={34.188892759999995} pcbY={75.184} anchorAlignment="bottom_left" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="GND" />
      <silkscreentext pcbX={33.756246940000004} pcbY={40.99593528} anchorAlignment="bottom_left" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="VIN" />
      <silkscreentext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="bottom" text=".Layer_Name" />
      <silkscreentext pcbX={38.834816919999994} pcbY={44.0803411} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="J7" />
      <silkscreentext pcbX={59.21264256} pcbY={119.9749696} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={true} layer="bottom" text="R39" />
      <silkscreentext pcbX={83.29012297999999} pcbY={63.52250694} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={true} layer="bottom" text="R11" />
      <silkscreentext pcbX={60.73664256} pcbY={119.97338464} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="90deg" mirrored={true} layer="bottom" text="R40" />
      <silkscreentext pcbX={58.52034524} pcbY={46.11075614} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="J9" />
      <silkscreentext pcbX={74.93199643999999} pcbY={51.591847539999996} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="J10" />
      <silkscreentext pcbX={65.33705754} pcbY={53.857756140000006} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="D3" />
      <silkscreentext pcbX={81.46434812} pcbY={58.55200126} anchorAlignment="center" fontSize={1.143} font="tscircuit2024" pcbRotation="0deg" mirrored={true} layer="bottom" text="D4" />
      <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} />
      <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} layer="bottom" />
      <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} layer="inner2" />
      <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} layer="inner1" />
      <courtyardoutline outline={[{"x":70.87579932,"y":83.20062354},{"x":70.87579932,"y":79.20062138},{"x":68.92580068,"y":79.20062138},{"x":68.92580068,"y":83.20062354}]} layer="top" />
      <courtyardoutline outline={[{"x":58.91111916,"y":86.188423},{"x":58.91111916,"y":82.18842083999999},{"x":56.961120519999994,"y":82.18842083999999},{"x":56.961120519999994,"y":86.188423}]} layer="top" />
      <courtyardoutline outline={[{"x":26.04879982,"y":59.817599439999995},{"x":24.598800179999998,"y":59.817599439999995},{"x":24.598800179999998,"y":56.71759801999999},{"x":26.04879982,"y":56.71759801999999}]} layer="top" />
      <courtyardoutline outline={[{"x":61.145798459999995,"y":53.29359674},{"x":68.2457995,"y":53.29359674},{"x":68.2457995,"y":48.79359812},{"x":61.145798459999995,"y":48.79359812}]} layer="bottom" />
      <courtyardoutline outline={[{"x":82.90580066,"y":58.37359928},{"x":75.80579962,"y":58.37359928},{"x":75.80579962,"y":53.87360066},{"x":82.90580066,"y":53.87360066}]} layer="bottom" />
            </footprint>} symbol={<symbol>
      <schematicpath svgPath={"M-1.528485 4.394396L-1.528485 4.267022-2.101667 4.267022-2.165354 4.267022"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 1.528485L-0.891616 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 0.891616L-1.528485 0.891616-1.528485 1.528485-0.891616 1.528485"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.120102 4.267022L-2.165354 4.267022"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 1.573738L-0.891616 1.528485"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 1.865354L-0.891616 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.59773 3.8849L8.59773 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.610005 2.802223L11.909449 2.802223 11.909449 1.01899 5.413386 1.01899 5.413386 3.056971 4.903891 3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.604447 2.611163L5.604447 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.40667 2.229041L8.40667 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.986568 2.993284L5.986568 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932 2.547476L7.132932 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.368689 2.547476L6.368689 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.515053 2.929597L7.515053 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.960862 2.483789L7.960862 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.903891 2.929597L4.903891 3.056971 4.903891 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 2.993284L6.750811 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.496063 5.222325L6.496063 4.075961 6.496063 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143 3.311718L4.649143-0.191061"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.394396 3.311718L4.649143 3.311718 4.903891 3.311718 5.604447 3.311718 5.986568 3.311718 6.368689 3.311718 6.496063 3.311718 6.750811 3.311718 7.132932 3.311718 7.515053 3.311718 7.960862 3.311718 8.40667 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.40667 3.311718L8.59773 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.081519 1.01899L-10.954145 1.01899-10.699398 1.01899"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.59773 3.863224L8.59773 3.8849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.546109 3.311718L8.59773 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.604447 2.713733L5.604447 2.611163"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.40667 2.274294L8.40667 2.229041"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.986568 3.095855L5.986568 2.993284"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932 2.650046L7.132932 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.368689 2.650046L6.368689 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.515053 3.095855L7.515053 2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.960862 2.650046L7.960862 2.483789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.903891 3.032168L4.903891 2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 3.095855L6.750811 2.993284"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143-0.145808L4.649143-0.191061"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.107226 3.8849L9.107226 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.610005 3.056971L12.482631 3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.482631 2.86591L12.482631 2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.298286 2.229041L9.298286 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.610005 2.929597L12.482631 2.929597 12.482631 3.056971 12.482631 3.757527"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.654701 3.566466L11.654701 3.757527"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.107226 3.311718L9.298286 3.311718 9.616721 3.311718 9.616721 3.757527 9.616721 5.73182 9.616721 6.050255 10.189903 6.050255"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.616721 3.311718L9.616721 2.993284"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.317277 7.196619L9.935155 7.196619 9.42566 7.196619 8.151922 7.196619 7.323993 7.196619 7.323993 5.73182 9.616721 5.73182"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.151922 6.687124L8.151922 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.928439 3.757527L12.546318 3.757527 12.482631 3.757527"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.482631 3.757527L11.654701 3.757527"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.616721 3.757527L11.654701 3.757527"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.107226 3.863224L9.107226 3.8849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.146109 3.311718L9.107226 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.482631 3.032168L12.482631 2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.298286 2.274294L9.298286 2.229041"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.654701 3.669037L11.654701 3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.022024 6.305674L10.189903 6.305674 10.189903 6.050255"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.616721 3.159541L9.616721 2.993284"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.149398 7.462038L10.317277 7.462038 10.317277 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.935155 7.241871L9.935155 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.42566 7.299189L9.42566 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.401112 4.203335L-1.401112 4.394396"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.375405 2.165354L-3.375405 2.292728-3.69384 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.292728 2.292728L-2.420102 2.292728-2.420102 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 0.955303L-0.891616 1.01899"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.126216-0.254748L-10.126216-0.382121-9.489347-0.382121"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.954145-4.585456L-10.954145-4.458082-11.081519-4.458082"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.222325-6.814497L-5.604447-6.814497-5.604447-7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.687124-3.566466L-6.687124-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.305002-3.248031L-6.305002-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.859194-3.566466L-5.859194-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679-3.566466L-7.387679-3.948587-7.005558-3.948587-6.687124-3.948587-6.305002-3.948587-5.859194-3.948587-4.840204-3.948587-4.840204-3.630153"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.005558-3.311718L-7.005558-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-3.056971L-1.655859-2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.01899-2.929597L-1.01899-2.802223-1.082677-2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-2.929597L-1.01899-2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.01899-2.929597L-1.01899-3.184345-1.01899-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.496063 0.82793L-6.750811 0.82793-7.069245 0.82793"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.979852-4.967578L-8.979852-5.413386-8.725104-5.413386"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.725104-5.413386L-8.534044-5.413386-8.534044-5.286012"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.795507-1.464799L-5.413386-1.464799-5.413386-1.655859"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.528485-8.215609L1.528485-7.960862 1.273738-7.960862"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.382121-8.215609L-0.382121-7.960862-0.636869-7.960862"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.382121-6.687124L-0.382121-6.432376-0.636869-6.432376"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.196619-0.573182L-7.069245-0.573182"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.273738-6.050255L1.273738-6.432376 1.528485-6.432376 1.528485-6.687124"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.5849 2.292728L-3.69384 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.401667 2.292728L-2.292728 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 0.973738L-0.891616 1.01899"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.126216-0.363687L-10.126216-0.254748"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.489347-0.427374L-9.489347-0.382121"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.687124-3.675405L-6.687124-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.305002-3.356971L-6.305002-3.248031"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.859194-3.675405L-5.859194-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679-3.675405L-7.387679-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.840204-3.675405L-4.840204-3.630153"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.005558-3.356971L-7.005558-3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.037425-2.802223L-1.082677-2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.496063 0.712622L-6.496063 0.82793"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.069245 0.71899L-7.069245 0.82793"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.979852-5.076517L-8.979852-4.967578"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044-5.394951L-8.534044-5.286012"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.458638-1.655859L-5.413386-1.655859"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.528485-8.006114L1.528485-7.960862"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.382121-8.006114L-0.382121-7.960862"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.382121-6.477629L-0.382121-6.432376"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.114497-0.573182L-7.069245-0.573182"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.528485-6.477629L1.528485-6.432376"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.611163-4.67082L-2.611163-4.649143"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.993284-4.67082L-2.993284-4.649143"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.826772 3.69384L-11.208893 3.69384-11.399954 3.69384-11.527327 3.69384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.654701 3.056971L-11.399954 3.056971-11.399954 3.69384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.654701 2.929597L-11.399954 2.929597-11.399954 3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.54076 2.929597L-5.54076 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 2.86591L-11.399954 2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.654701 2.802223L-5.668133 2.802223-5.54076 2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.254748 2.611163L-0.254748 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.177629 2.547476L-6.177629 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082 3.184345L-4.458082 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.043539 2.547476L-9.043539 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.573182 3.311718L-0.254748 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.573182 3.311718L-0.573182 4.394396-0.318434 4.394396"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.298286 3.311718L-9.298286 0.891616"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.208893 3.69384L-11.208893 4.075961-11.336267 4.075961"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.024548 2.547476L-8.024548 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044 2.547476L-8.534044 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.750811 2.547476L-6.750811 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679 2.547476L-7.387679 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.826772 3.69384L-10.572024 3.69384-9.298286 3.69384-9.298286 3.311718-9.043539 3.311718-8.534044 3.311718-8.024548 3.311718-7.387679 3.311718-6.750811 3.311718-6.177629 3.311718-5.54076 3.311718-4.458082 3.311718-0.573182 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.763085 0.382121L-11.017832 0.382121-11.145206 0.382121"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.547476-0.509495L2.674849-0.509495 3.120658-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-6.177629L8.151922-6.177629"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.572024-6.177629L8.916165-6.177629"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.699398 1.273738L-10.954145 1.273738-11.081519 1.273738"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.986568-5.222325L-5.477073-5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.826772 3.672163L-10.826772 3.69384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 3.038536L-11.399954 2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.54076 3.032168L-5.54076 2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.254748 2.790157L-0.254748 2.611163"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.177629 2.650046L-6.177629 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082 3.229597L-4.458082 3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.043539 2.713733L-9.043539 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.298286 0.936869L-9.298286 0.891616"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.024548 2.713733L-8.024548 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044 2.713733L-8.534044 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.750811 2.650046L-6.750811 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679 2.650046L-7.387679 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.592728-0.509495L2.547476-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-6.03975L8.916165-6.177629"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.522325-5.222325L-5.477073-5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.654701 2.674849L-5.668133 2.674849-5.54076 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 2.611163L-11.399954 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.654701 2.547476L-11.399954 2.547476-11.399954 2.420102"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.654701 2.420102L-11.399954 2.420102-11.399954 1.910607-10.890459 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.591014 1.910607L-11.399954 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.482631 2.611163L12.482631 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.610005 2.420102L12.482631 2.420102"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.928439 1.84692L12.482631 1.84692"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.482631 1.655859L12.482631 1.84692 12.482631 2.420102 12.482631 2.547476 12.610005 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.654701 3.248031L11.654701 3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.604447 2.037981L5.604447 2.229041"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.610005 2.674849L12.036823 2.674849 12.036823 0.891616 5.286012 0.891616 5.286012 2.547476 4.903891 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.986568 2.611163L5.986568 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932 2.165354L7.132932 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 2.611163L6.750811 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.368689 2.165354L6.368689 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.941871 1.910607L6.941871 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 2.037981L6.941871 2.037981 7.132932 2.037981 7.515053 2.037981 7.515053 2.674849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.515053 2.037981L7.960862 2.037981 7.960862 2.229041"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.903891 2.674849L4.903891 2.547476 4.903891 2.037981 5.604447 2.037981 5.986568 2.037981 6.368689 2.037981 6.750811 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-2.420102L1.01899-2.86591"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.528485-3.948587L-1.528485-3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.528485-3.184345L-1.655859-3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.043539 2.292728L-9.043539 2.037981-8.534044 2.037981-8.024548 2.037981-7.387679 2.037981-6.750811 2.037981-6.177629 2.037981-6.177629 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044 2.292728L-8.534044 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.024548 2.292728L-8.024548 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.750811 2.165354L-6.750811 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679 2.165354L-7.387679 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.616721 2.611163L9.616721 2.738536"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.151922-6.55975L8.151922-6.814497 8.151922-6.941871"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.151922-6.941871L8.916165-6.941871"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-8.725104L8.279296-8.725104"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.279296-8.59773L8.151922-8.59773"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.151922-8.342983L8.279296-8.342983 8.279296-8.59773 8.279296-8.725104"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.151922-7.706114L8.279296-7.706114"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.189903-2.037981L8.916165-2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.680408-4.71283L8.916165-4.71283"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.897175-3.439092L7.897175-3.056971 7.960862-3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.502779-4.075961L3.502779-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.802223-3.948587L2.802223-4.075961 3.248031-4.075961"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.012274-3.948587L4.012274-4.075961"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.458082-4.075961L4.458082-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.585456-4.075961L4.585456-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.375405-3.948587L3.375405-4.075961"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.248031-3.948587L3.248031-4.075961 3.375405-4.075961 3.502779-4.075961 3.630153-4.075961 4.012274-4.075961 4.458082-4.075961 4.585456-4.075961 4.71283-4.075961 4.71283-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.630153-4.075961L3.630153-4.203335"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.54076 2.432168L-5.54076 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 2.438536L-11.399954 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.890459 1.88893L-10.890459 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.482631 2.432168L12.482631 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.654701 3.069037L11.654701 3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.604447 2.113733L5.604447 2.229041"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.903891 2.432168L4.903891 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.986568 2.495855L5.986568 2.611163"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932 2.050046L7.132932 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 2.495855L6.750811 2.611163"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.368689 2.050046L6.368689 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.515053 2.495855L7.515053 2.674849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.960862 2.050046L7.960862 2.229041"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.043539 2.113733L-9.043539 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.177629 2.050046L-6.177629 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044 2.113733L-8.534044 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.024548 2.113733L-8.024548 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.750811 2.050046L-6.750811 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679 2.050046L-7.387679 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.616721 2.559541L9.616721 2.738536"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-7.07975L8.916165-6.941871"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-8.862983L8.916165-8.725104"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.802223-4.057527L2.802223-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.012274-4.057527L4.012274-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.254748 2.190157L-0.254748 2.356415"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.050255 0.712622L-6.050255 0.82793"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.418944 6.444442L12.418944 6.55975"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 2.674849L-0.891616 2.547476-0.891616 2.420102"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 2.547476L-1.146364 2.547476-1.146364 4.267022-1.273738 4.267022-1.273738 4.394396"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 2.629597L-0.891616 2.674849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 2.465354L-0.891616 2.420102"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.273738 1.783233L1.273738 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-0.509495L-1.528485-0.509495 0.063687-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.063687-0.509495L0.891616-0.509495 0.891616 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.063687-0.509495L0.063687-0.636869-0.636869-0.636869"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899 3.311718L1.01899-0.509495 1.01899-1.655859"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.273738-0.509495L1.01899-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.509495 3.311718L0.82793 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.445808 4.394396L0.82793 4.394396 0.82793 3.311718 0.891616 3.311718 1.01899 3.311718 1.146364 3.311718 1.273738 3.311718 1.401112 3.311718 1.401112 2.993284"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.273738 1.828485L1.273738 1.783233"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.52793-0.636869L-0.636869-0.636869"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.164799-0.509495L1.273738-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.146364 3.290042L1.146364 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.362228 3.311718L1.401112 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.362228 2.993284L1.401112 2.993284"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417 1.528485L8.40667 1.528485"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 0.509495L-1.528485 0.509495 8.40667 0.509495 8.40667 1.528485 8.40667 1.719546"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.552478 1.528485L8.661417 1.528485"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.40667 1.674294L8.40667 1.719546"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.043539 1.528485L9.298286 1.528485"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 0.382121L-1.528485 0.382121 9.298286 0.382121 9.298286 1.528485 9.298286 1.719546"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.152478 1.528485L9.043539 1.528485"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.298286 1.674294L9.298286 1.719546"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.464799 1.082677L1.273738 1.082677"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 0.127374L-1.528485 0.127374 1.273738 0.127374 1.273738 1.082677 1.273738 1.273738"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.355859 1.082677L1.464799 1.082677"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.273738 1.228485L1.273738 1.273738"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.84692 1.082677L2.037981 1.082677"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 0L-1.528485 0 2.037981 0 2.037981 1.082677 2.037981 1.273738"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.955859 1.082677L1.84692 1.082677"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.037981 1.228485L2.037981 1.273738"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.655859-0.509495L2.037981-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.764799-0.509495L1.655859-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.992728-0.509495L2.037981-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-0.509495L-4.776517-0.509495-4.967578-0.509495"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.821214-6.941871L-3.821214-7.069245"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.203335-7.069245L-3.821214-7.069245-3.056971-7.069245-3.056971-6.368689-3.056971-5.986568"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.165354-7.451366L1.974294-7.451366 1.528485-7.451366"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.146364-7.451366L1.273738-7.451366 1.528485-7.451366"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.273738-7.833488L1.273738-7.451366"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.42566-4.458082L9.043539-4.458082 8.916165-4.458082"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.821214-6.987124L-3.821214-6.941871"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.528485-7.406114L1.528485-7.451366"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-0.636869L-4.776517-0.636869-4.967578-0.636869"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.439092-7.323993L-3.439092-6.941871"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.222325-7.069245L-5.222325-7.323993-3.439092-7.323993-2.674849-7.323993-2.674849-6.368689-2.674849-5.986568"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.764243-7.451366L-0.636869-7.451366-0.382121-7.451366 0.063687-7.451366 0.254748-7.451366"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.636869-7.833488L-0.636869-7.451366"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-4.203335L9.043539-4.203335 9.42566-4.203335"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.439092-6.987124L-3.439092-6.941871"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.382121-7.406114L-0.382121-7.451366"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.763085-0.82793L-11.081519-0.82793-11.145206-0.82793"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082 0.891616L-5.286012 0.891616-5.54076 0.891616-5.54076 1.210051-6.050255 1.210051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.54076 1.655859L-5.54076 1.210051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.54076-0.891616L-5.986568-0.891616-6.113942-0.891616"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 4.394396L-2.101667 4.394396-2.165354 4.394396-2.165354 4.521769-2.738536 4.521769-2.738536 4.267022-2.674849 4.267022"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.528485-5.413386L1.528485-5.349699 1.528485-5.158638"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.273738-5.795507L1.273738-5.349699 1.528485-5.349699"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.317277-4.203335L-10.699398-4.203335-11.081519-4.203335"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.050255 1.312622L-6.050255 1.210051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.54076 1.634182L-5.54076 1.655859"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.586012-0.891616L-5.54076-0.891616"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.720102 4.267022L-2.674849 4.267022"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.528485-5.368133L1.528485-5.413386"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-1.528485L-1.528485-1.528485-0.636869-1.528485-0.636869-3.566466 1.592172-3.566466 1.910607-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.592172-3.566466L1.592172-4.71283 1.910607-4.71283"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.865354-3.566466L1.910607-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.865354-4.71283L1.910607-4.71283"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-1.655859L-4.776517-1.655859-4.903891-1.655859"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.858638-1.655859L-4.903891-1.655859"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-2.674849L-4.840204-2.674849-4.967578-2.674849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.165354-5.922881L1.783233-5.922881 1.528485-5.922881 1.273738-5.922881"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.528485-5.877629L1.528485-5.922881"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.528485-5.968133L1.528485-5.922881"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.687124-3.184345L-6.687124-3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.687124-3.075405L-6.687124-3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.687124-3.102223L-6.687124-3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.420102-3.566466L2.802223-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.802223-3.566466L2.86591-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.465354-3.566466L2.420102-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.802223-3.457527L2.802223-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.69384-6.432376L-3.69384-6.305002"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.203335-6.814497L-4.075961-6.814497-4.075961-6.432376-3.821214-6.432376-3.69384-6.432376-3.439092-6.432376"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.821214-6.387124L-3.821214-6.432376"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.439092-6.387124L-3.439092-6.432376"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-1.910607L-1.528485-1.910607-1.401112-1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.680408 5.222325L9.998842 5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.769801 6.241315L8.088235 6.241315"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.95359 5.222325L9.998842 5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.972927 6.241315L8.088235 6.241315"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.687124-2.547476L-6.305002-2.547476-6.305002-1.910607-4.840204-1.910607-4.458082-1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.305002-2.86591L-6.305002-2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.687124-2.502223L-6.687124-2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.305002-1.932283L-6.305002-1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.305002-2.756971L-6.305002-2.86591"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.840204-3.120658L-4.840204-2.929597-4.649143-2.929597-4.637742-2.929597-4.458082-2.929597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.840204-3.075405L-4.840204-3.120658"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082 2.292728L-4.075961 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082 1.401112L-4.458082 2.292728-4.458082 2.674849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.1849 2.292728L-4.075961 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082 2.629597L-4.458082 2.674849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.120658 3.311718L3.248031 3.311718 3.375405 3.311718 3.375405 2.802223 3.375405-1.273738 3.375405-1.401112 3.375405-2.483789 3.375405-3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-1.273738L-1.528485-1.273738 0.573182-1.273738 0.573182-1.401112 0.254748-1.401112"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.573182-1.273738L3.375405-1.273738"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.585456-3.056971L4.585456-2.483789 3.375405-2.483789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143-1.210051L4.649143-1.401112 3.375405-1.401112"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.502779 3.311718L3.375405 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.502779 3.311718L3.502779 3.439092"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.502779 3.311718L3.502779 3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.439092 2.802223L3.375405 2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.266449 3.468311L3.120658 3.468311 3.120658 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.248031 3.290042L3.248031 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.363687-1.401112L0.254748-1.401112"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143-1.31899L4.649143-1.210051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.330153 2.802223L3.439092 2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.859194-2.165354L-4.967578-2.165354-4.458082-2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.859194-2.165354L-5.859194-3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.859194-2.187031L-5.859194-2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.859194-3.075405L-5.859194-3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.145206-2.229041L-8.40667-2.229041-8.40667-0.254748-6.55975-0.254748-4.840204-0.254748-4.458082-0.254748"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.55975-0.573182L-6.55975-0.254748"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.514497-0.573182L-6.55975-0.573182"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-1.146364L-1.528485-1.146364 3.8849-1.146364 3.8849 1.528485"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.8849 1.483233L3.8849 1.528485"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-1.401112L-1.528485-1.401112-0.127374-1.401112"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.236313-1.401112L-0.127374-1.401112"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-0.636869L-1.528485-0.636869-1.01899-0.636869"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.12793-0.636869L-1.01899-0.636869"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 3.757527L-0.891616 3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.01899 3.757527L-1.01899 4.394396-1.146364 4.394396"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 3.056971L-1.655859 3.757527-1.01899 3.757527-0.891616 3.757527-0.764243 3.757527-0.764243 4.967578 6.623437 4.967578 6.623437 5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616 3.229597L-0.891616 3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 3.102223L-1.655859 3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.005558-2.738536L-7.387679-2.738536-7.387679-3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-1.401112L-4.71283-1.401112-7.005558-1.401112-7.642427-1.401112-7.642427-6.177629-11.017832-6.177629-11.145206-6.177629"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.005558-2.802223L-7.005558-2.738536-7.005558-1.401112"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.42566-1.273738L9.043539-1.273738 8.916165-1.273738"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679-3.075405L-7.387679-3.184345"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.005558-2.756971L-7.005558-2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.910607 2.292728L-1.655859 2.292728-1.655859 1.401112"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 2.547476L-1.655859 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.801667 2.292728L-1.910607 2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 2.502223L-1.655859 2.547476"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.298286 0.382121L-9.298286 0.254748"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.145206 0.254748L-11.017832 0.254748-10.126216 0.254748-9.489347 0.254748-9.298286 0.254748-8.852478 0.254748-8.852478 0.382121-5.094951 0.382121-4.458082 0.382121"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.126216 0.127374L-10.126216 0.254748"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.489347 0.254748L-9.489347 0.127374"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.680408-1.783233L9.043539-1.783233 8.916165-1.783233"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.298286 0.336869L-9.298286 0.382121"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.126216 0.236313L-10.126216 0.127374"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.489347 0.172626L-9.489347 0.127374"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.463641 5.859194L11.463641 6.050255"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.081519 6.050255L11.081519 5.986568"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 5.222325L6.750811 4.840204 12.100509 4.840204 12.100509 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.081519 7.196619L11.591014 7.196619 12.100509 7.196619 12.418944 7.196619 12.737378 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.418944 6.941871L12.418944 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.954145 6.050255L11.081519 6.050255 11.463641 6.050255 11.591014 6.050255 11.591014 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.151922-7.960862L8.916165-7.960862"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.572024-7.960862L8.916165-7.960862"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.463641 5.904447L11.463641 5.859194"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.081519 6.213608L11.081519 5.986568"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.249398 7.452038L11.081519 7.452038 11.081519 7.196619"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.418944 7.044442L12.418944 6.941871"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.122024 6.315674L10.954145 6.315674 10.954145 6.050255"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-7.822983L8.916165-7.960862"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.081519 5.349699L11.081519 5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.572024 5.54076L10.572024 5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.508337 5.222325L10.572024 5.222325 11.081519 5.222325 11.463641 5.222325 11.463641 5.349699"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.081519 5.173608L11.081519 5.349699"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.672024 5.585674L10.672024 5.54076 10.572024 5.54076"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.55359 5.222325L10.508337 5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.463641 5.304447L11.463641 5.349699"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.037981 3.311718L2.037981 1.783233"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.910607 2.993284L1.910607 3.311718 2.037981 3.311718 2.356415 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.037981 1.828485L2.037981 1.783233"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.962228 2.993284L1.910607 2.993284"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.962228 3.311718L1.910607 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.210624 3.47356L2.356415 3.47356 2.356415 3.311718"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.254748 2.420102L0.254748 2.483789 0.254748 2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.254748 2.465354L0.254748 2.420102"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.636869 2.420102L0.636869 3.8849 0.191061 3.8849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.636869 2.465354L0.636869 2.420102"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.254748 1.84692L0.254748 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-0.382121L-1.528485-0.382121 0.254748-0.382121 0.254748 1.84692 0.636869 1.84692 0.636869 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.254748 1.865354L0.254748 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.636869 1.865354L0.636869 1.910607"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.509495-2.165354L0.191061-2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.236313-2.165354L0.191061-2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.496063 1.210051L-6.496063 1.337425-5.349699 1.337425-5.349699 1.01899-5.286012 1.01899-4.458082 1.01899"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.496063 1.592172L-6.496063 1.337425"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-2.420102L9.107226-2.420102 9.42566-2.420102"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.496063 1.312622L-6.496063 1.210051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.496063 1.570496L-6.496063 1.592172"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.145206-0.955303L-8.59773-0.955303-8.59773 0-4.840204 0-4.458082 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.031264-0.891616L-4.71283-0.891616-4.458082-0.891616"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-3.948587L9.107226-3.948587 9.42566-3.948587"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.986012-0.891616L-5.031264-0.891616"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-3.184345L-4.458082-3.821214-4.458082-5.222325-4.649143-5.222325-4.967578-5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.649143-5.222325L-4.649143-5.158638"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.922325-5.222325L-4.967578-5.222325"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.649143-5.180315L-4.649143-5.158638"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-2.420102L-4.776517-2.420102-4.967578-2.420102"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.254748-5.922881L0.063687-5.922881-0.382121-5.922881"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.636869-6.305002L-0.636869-5.922881-0.382121-5.922881"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.382121-5.877629L-0.382121-5.922881"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.069245 1.528485L-7.069245 1.210051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082 0.636869L-4.776517 0.636869-4.903891 0.636869-4.903891 1.528485-7.069245 1.528485-10.189903 1.528485-10.189903 1.146364-11.081519 1.146364"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.069245 1.31899L-7.069245 1.210051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.42566 6.814497L9.42566 6.687124 9.935155 6.687124 10.699398 6.687124"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.42566 6.699189L9.42566 6.814497"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.935155 6.641871L9.935155 6.687124"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.599398 6.732038L10.599398 6.687124 10.699398 6.687124"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.470357 6.241315L8.788791 6.241315 8.788791 6.432376"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.572927 6.241315L8.470357 6.241315"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.979852-4.330709L-8.979852-4.585456"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.081519-4.330709L-9.807781-4.330709-8.979852-4.330709-8.534044-4.330709-8.024548-4.330709-8.024548-1.146364-5.158638-1.146364-4.458082-1.146364"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.979852-4.476517L-8.979852-4.585456"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044-4.285456L-8.534044-4.330709"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-2.292728L9.03006-2.292728 9.42566-2.292728"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.470357-3.056971L9.42566-3.056971 9.680408-3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.42566-3.056971L9.42566-3.69384 9.043539-3.69384 8.916165-3.69384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.635155-3.056971L9.680408-3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-1.528485L9.043539-1.528485 10.44465-1.528485 10.44465-3.056971 10.189903-3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.235155-3.056971L10.189903-3.056971"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859-0.764243L-1.528485-0.764243-0.382121-0.764243-0.382121-2.165354-0.318434-2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.363687-2.165354L-0.318434-2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.420102-4.71283L3.821214-4.71283 3.821214-3.566466 4.012274-3.566466 4.075961-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.465354-4.71283L2.420102-4.71283"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.012274-3.457527L4.012274-3.566466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143-0.700556L4.649143-0.82793"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143-0.745808L4.649143-0.700556"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143-0.71899L4.649143-0.82793"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044-4.903891L-8.534044-4.840204"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044-4.794951L-8.534044-4.903891"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044-4.885456L-8.534044-4.840204"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.8849 2.802223L3.8849 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.821214 2.802223L3.8849 2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.8849 2.083233L3.8849 2.037981"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.930153 2.802223L3.821214 2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.592172-2.802223L-1.655859-2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.637425-2.802223L-1.592172-2.802223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-0.8916164891153286,"y":1.5284854099119949}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.6491431218156585,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.903890690134322,"y":3.0569708198239907}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.903890690134322,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":5.60444650301066,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":5.986567855488655,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.3686892079666535,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.496062992125985,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.750810560444652,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.1329319129226505,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.515053265400649,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.96086150995832,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.406669754515981,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.597730430754982,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.151922186197314,"y":7.196618805002315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.107225567392312,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.298286243631313,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.425660027790645,"y":7.196618805002315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.616720704029646,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.616720704029646,"y":3.7575266327003227}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.616720704029646,"y":5.731820287169984}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.935155164427979,"y":7.196618805002315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.189902732746646,"y":6.0502547475683155}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.317276516905977,"y":7.196618805002315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.654701250578974,"y":3.7575266327003227}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.482630847614637,"y":2.929597035664659}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.482630847614637,"y":3.0569708198239907}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.482630847614637,"y":3.7575266327003227}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-9.489346919870309,"y":-0.38212135247800205}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.72510421491431,"y":-5.413385826771654}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.0055581287633135,"y":-3.9485873089393255}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.750810560444647,"y":0.8279295970356646}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.687123668364981,"y":-3.9485873089393255}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.305002315886981,"y":-3.9485873089393255}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-5.8591940713293145,"y":-3.9485873089393255}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.840203798054651,"y":-3.9485873089393255}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-1.6558591940713292,"y":-2.92959703566466}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-1.0189902732746603,"y":-3.1843446039833267}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-1.0189902732746603,"y":-2.92959703566466}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.3821213524779985,"y":-7.960861509958315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.3821213524779985,"y":-6.432376100046319}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.5284854099119976,"y":-7.960861509958315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.5284854099119976,"y":-6.432376100046319}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.399953682260302,"y":2.929597035664659}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.399953682260302,"y":3.0569708198239907}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.399953682260302,"y":3.693839740620656}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.208893006021302,"y":3.693839740620656}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.826771653543304,"y":3.693839740620656}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-9.298286243631306,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-9.043538675312641,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.534043538675311,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.024548402037977,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.387679481241314,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.750810560444647,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.177628531727649,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-5.540759610930984,"y":2.929597035664659}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-5.540759610930984,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.458082445576654,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.5731820287169924,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.2547475683186633,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.916164891153315,"y":-6.1776285317276525}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.399953682260302,"y":1.9106067623899934}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.399953682260302,"y":2.4201018990273244}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.399953682260302,"y":2.5474756831866587}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.89045854562297,"y":1.9106067623899934}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.534043538675311,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.024548402037977,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.387679481241314,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.750810560444647,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.177628531727649,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-5.540759610930984,"y":2.5474756831866587}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-1.528485409911994,"y":-3.1843446039833267}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.2480314960629926,"y":-4.075961093098657}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":-4.075961093098657}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.5027790643816594,"y":-4.075961093098657}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.6301528485409946,"y":-4.075961093098657}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.012274201018993,"y":-4.075961093098657}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.4580824455766574,"y":-4.075961093098657}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.585456229735989,"y":-4.075961093098657}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.903890690134322,"y":2.5474756831866587}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":5.60444650301066,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":5.986567855488655,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.3686892079666535,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.750810560444652,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":6.941871236683653,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.1329319129226505,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.515053265400649,"y":2.037980546549327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.151922186197314,"y":-6.941871236683651}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.151922186197314,"y":-6.814497452524318}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.279295970356653,"y":-8.725104214914312}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.279295970356653,"y":-8.59773043075498}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.482630847614637,"y":1.8469198703103276}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.482630847614637,"y":2.4201018990273244}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.482630847614637,"y":2.5474756831866587}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.8916164891153286,"y":2.5474756831866587}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.06368689207966938,"y":-0.5094951366373337}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.8279295970356664,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.8916164891153322,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.0189902732746674,"y":-0.5094951366373337}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.0189902732746674,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.146364057433999,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.2737378415933307,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.401111625752666,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.406669754515981,"y":1.5284854099119949}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.298286243631313,"y":1.5284854099119949}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.2737378415933307,"y":1.0826771653543288}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.0379805465493313,"y":1.0826771653543288}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.8212135247799868,"y":-7.069245020842983}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.2737378415933307,"y":-7.451366373320983}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.5284854099119976,"y":-7.451366373320983}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.4390921723019883,"y":-7.32399258916165}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.6368689207966653,"y":-7.451366373320983}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.3821213524779985,"y":-7.451366373320983}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-5.540759610930984,"y":1.2100509495136622}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.5284854099119976,"y":-5.349698934691988}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.592172301991667,"y":-3.566465956461327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.5284854099119976,"y":-5.922880963408986}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.8022232515053282,"y":-3.566465956461327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.8212135247799868,"y":-6.432376100046319}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-3.6938397406206533,"y":-6.432376100046319}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.305002315886981,"y":-2.5474756831866614}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.305002315886981,"y":-1.910606762389996}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.458082445576654,"y":2.2927281148679928}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.5731820287170031,"y":-1.2737378415933307}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.2480314960629926,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":-2.4837887911069956}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":-1.4011116257526641}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":-1.2737378415933307}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":2.8022232515053256}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.5027790643816594,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-5.8591940713293145,"y":-2.165354330708661}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.559749884205649,"y":-0.2547475683186686}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-1.0189902732746603,"y":3.7575266327003227}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.8916164891153286,"y":3.7575266327003227}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.0055581287633135,"y":-2.7385363594256606}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.0055581287633135,"y":-1.4011116257526641}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-1.6558591940713292,"y":2.2927281148679928}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-10.126215840666973,"y":0.2547475683186642}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-9.489346919870309,"y":0.2547475683186642}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-9.298286243631306,"y":0.2547475683186642}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.916164891153315,"y":-7.960861509958315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.954145437702646,"y":6.0502547475683155}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.081519221861974,"y":6.0502547475683155}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.081519221861974,"y":7.196618805002315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.463640574339973,"y":6.0502547475683155}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.591014358499308,"y":7.196618805002315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.100509495136638,"y":7.196618805002315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":12.41894395553497,"y":7.196618805002315}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.572024085224644,"y":5.2223251505326544}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.081519221861974,"y":5.2223251505326544}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.9106067623899996,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.0379805465493313,"y":3.3117183881426584}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.2547475683186704,"y":1.8469198703103276}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.49606299212598,"y":1.3374247336729956}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.649143121815651,"y":-5.222325150532656}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-0.3821213524779985,"y":-5.922880963408986}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.069245020842981,"y":1.5284854099119949}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.425660027790645,"y":6.687123668364982}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.935155164427979,"y":6.687123668364982}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.979851783232975,"y":-4.330708661417322}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.534043538675311,"y":-4.330708661417322}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.425660027790645,"y":-3.0569708198239933}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":4.012274201018993,"y":-3.566465956461327}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.884900416859658,"y":2.8022232515053256}} radius={0.03} strokeWidth={0.03203791492974523} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematicpath svgPath={"M-1.706809-2.343678L-1.60491-2.241779"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.60491-2.343678L-1.706809-2.241779"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.706809-2.471051L-1.60491-2.369152"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.60491-2.471051L-1.706809-2.369152"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.706809-2.598425L-1.60491-2.496526"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.60491-2.598425L-1.706809-2.496526"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.273275-6.610699L-5.171376-6.5088"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.171376-6.610699L-5.273275-6.5088"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.254284-6.610699L-4.152385-6.5088"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.152385-6.610699L-4.254284-6.5088"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.273275-6.738073L-5.171376-6.636174"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.171376-6.738073L-5.273275-6.636174"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.254284-6.738073L-4.152385-6.636174"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.152385-6.738073L-4.254284-6.636174"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.273275-6.992821L-5.171376-6.890922"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.171376-6.992821L-5.273275-6.890922"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.254284-6.992821L-4.152385-6.890922"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.152385-6.992821L-4.254284-6.890922"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.222325-7.387679h3.056971v-0.636869h-3.056971Z"} strokeWidth={0} strokeColor={"transparent"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M-10.25359 0.82793h0.82793v-0.382122h-0.82793Z"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={true} fillColor={"#fff2cc"} />
      <schematicpath svgPath={"M-5.604447-4.394396h0.82793v-0.19106h-0.82793Z"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={true} fillColor={"#fff2cc"} />
      <schematicpath svgPath={"M-1.974294 5.477073h1.146364v-0.445809h-1.146364Z"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={true} fillColor={"#fff2cc"} />
      <schematicpath svgPath={"M7.132932 0.063687h4.330709v-9.234599h-4.330709Z"} strokeWidth={0.05} strokeColor={"#800000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.082677-5.158638h1.528485v-0.573182h-1.528485Z"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={true} fillColor={"#fff2cc"} />
      <schematicpath svgPath={"M10.189903-0.127374h1.01899v-0.254747h-1.01899Z"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={true} fillColor={"#fff2cc"} />
      <schematicpath svgPath={"M9.553034-3.375405h1.528485v-0.318435h-1.528485Z"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={true} fillColor={"#fff2cc"} />
      <schematicpath svgPath={"M9.043539-10.189903L12.355257-10.189903"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.756369-10.44465L9.043539-10.44465"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.043539-10.189903L12.355257-10.189903"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.420102-10.189903L7.132932-10.189903"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.355257-10.317277L9.043539-10.317277"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.081519-9.807781L11.081519-9.935155"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932-10.062529L12.355257-10.062529"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.043539-10.572024L9.043539-9.807781 13.756369-9.807781"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.463641-10.189903L11.463641-10.317277"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.355257-10.44465L12.355257-9.807781"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932-10.572024L7.132932-9.807781"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932-10.44465L9.043539-10.44465"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.043539-10.317277L7.132932-10.317277"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.718388-10.317277L11.718388-10.44465"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.043539-9.935155L12.355257-9.935155"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932-10.189903L9.043539-10.189903"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.420102-10.189903L-2.420102-10.572024"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.40667-10.062529L8.40667-10.189903"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932-10.062529L9.043539-10.062529"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932-9.935155L9.043539-9.935155"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932-9.807781L9.043539-9.807781"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.783233 4.903891h0.764243v-0.254748h-0.764243Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-1.2737378415933271,"y":4.776516905974987}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-1.1463640574339955,"y":4.776516905974987}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-1.4011116257526623,"y":4.776516905974987}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-1.528485409911994,"y":4.776516905974987}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-1.6558591940713292,"y":4.776516905974987}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-1.184576 4.814729h0.076424v-0.076424h-0.076424Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-1.655859 4.649143L-1.655859 4.394396"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.528485 4.649143L-1.528485 4.394396"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.273738 4.649143L-1.273738 4.738305"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.146364 4.649143L-1.146364 4.738305"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.401112 4.649143L-1.401112 4.738305"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.146364 4.649143L-1.146364 4.394396"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.273738 4.649143L-1.273738 4.394396"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.401112 4.649143L-1.401112 4.394396"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.528485 4.649143L-1.528485 4.738305"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.655859 4.649143L-1.655859 4.738305"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.107226 3.863224L9.107226 4.063224"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.007226 4.163224L9.017129 4.119835 9.044877 4.085041 9.084973 4.065731 9.129478 4.065731 9.169575 4.085041 9.197322 4.119835 9.207226 4.163224"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C34"} schX={9.107225567392312} schY={4.188223714682721} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M8.59773 3.863224L8.59773 4.063224"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.49773 4.163224L8.507634 4.119835 8.535381 4.085041 8.575478 4.065731 8.619983 4.065731 8.660079 4.085041 8.687827 4.119835 8.69773 4.163224"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP1"} schX={8.597730430754982} schY={4.188223714682721} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-10.826772 3.672163L-10.826772 3.872163"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.926772 3.972163L-10.916869 3.928775-10.889121 3.89398-10.849024 3.87467-10.80452 3.87467-10.764423 3.89398-10.736675 3.928775-10.726772 3.972163"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP3"} schX={-10.826771653543304} schY={3.9971630384437216} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-11.727327 3.89384h0.4v-0.4h-0.4Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"J2"} schX={-11.727327466419636} schY={4.023839740620656} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"108-0740-001"} schX={-11.727327466419636} schY={3.363839740620655} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-11.782075 3.69384L-11.527327 3.69384"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-11.65470125057897} schY={3.7138397406206556} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M12.728439 3.957527h0.4v-0.4h-0.4Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"J1"} schX={12.728439092172305} schY={4.087526632700324} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"108-0740-001"} schX={12.728439092172305} schY={3.4275266327003235} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M13.183187 3.757527L12.928439 3.757527"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={13.05581287633164} schY={3.777526632700323} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M3.248031 3.290042L3.248031 3.490042"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.148031 3.590042L3.157935 3.546653 3.185683 3.511859 3.225779 3.492549 3.270284 3.492549 3.31038 3.511859 3.338128 3.546653 3.348031 3.590042"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP6"} schX={3.2480314960629926} schY={3.615041685965723} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-4.467173 2.35687L-4.467173 2.509597"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.467173 2.798688L-4.467173 2.95687"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.538082 2.65687L-4.538082 2.798688-4.39081 2.798688-4.39081 2.509597-4.538082 2.509597-4.538082 2.65687"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R7"} schX={-4.314743163758472} schY={2.7332333993010236} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0"} schX={-4.314743163758472} schY={2.558687944755569} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-0.900707 2.35687L-0.900707 2.509597"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.900707 2.798688L-0.900707 2.95687"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.971616 2.65687L-0.971616 2.798688-0.824344 2.798688-0.824344 2.509597-0.971616 2.509597-0.971616 2.65687"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R8"} schX={-0.74827720729715} schY={2.7332333993010236} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10.0"} schX={-0.74827720729715} schY={2.558687944755569} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-12.164196 3.184345h0.254747v-0.891617h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-12.036822603056969,"y":2.929597035664659}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-12.036822603056969,"y":2.8022232515053256}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-12.036822603056969,"y":2.674849467345992}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-12.036822603056969,"y":2.5474756831866587}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-12.036822603056969,"y":2.4201018990273244}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-12.075035 3.095183h0.076425v-0.076424h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.909449 2.547476L-11.654701 2.547476"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.674849L-11.654701 2.674849"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.929597L-11.99861 2.929597"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 3.056971L-11.99861 3.056971"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.802223L-11.99861 2.802223"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 3.056971L-11.654701 3.056971"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.929597L-11.654701 2.929597"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.802223L-11.654701 2.802223"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.674849L-11.99861 2.674849"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.547476L-11.99861 2.547476"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.420102L-11.654701 2.420102"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 2.420102L-11.99861 2.420102"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 3.184345h0.254748v-0.891617h-0.254748Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":12.99212598425197,"y":2.929597035664659}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":12.99212598425197,"y":2.8022232515053256}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":12.99212598425197,"y":2.674849467345992}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":12.99212598425197,"y":2.5474756831866587}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":12.99212598425197,"y":2.4201018990273244}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M12.953914 3.095183h0.076424v-0.076424h-0.076424Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M12.864752 2.547476L12.610005 2.547476"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.674849L12.610005 2.674849"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.929597L12.953914 2.929597"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 3.056971L12.953914 3.056971"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.802223L12.953914 2.802223"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 3.056971L12.610005 3.056971"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.929597L12.610005 2.929597"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.802223L12.610005 2.802223"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.674849L12.953914 2.674849"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.547476L12.953914 2.547476"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.420102L12.610005 2.420102"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.864752 2.420102L12.953914 2.420102"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.66495 2.229496L-1.66495 2.382223"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.66495 2.671314L-1.66495 2.829496"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.735859 2.529496L-1.735859 2.671314-1.588586 2.671314-1.588586 2.382223-1.735859 2.382223-1.735859 2.529496"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R9"} schX={-1.5125199122531434} schY={2.60585961514169} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0"} schX={-1.5125199122531434} schY={2.4313141605962354} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-0.254748 1.931067L-0.254748 2.192885"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.254748 2.280157L-0.254748 2.531067"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.112929 2.192885L-0.40202 2.192885"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.112929 2.280157L-0.40202 2.280157"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C12"} schX={-0.20292938650048242} schY={2.340157480314959} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GCM188L81H104KA57D"} schX={-0.20292938650048242} schY={2.121975662133141} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-10.890459 1.88893L-10.890459 2.08893"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.990459 2.18893L-10.980555 2.145542-10.952808 2.110747-10.912711 2.091437-10.868206 2.091437-10.82811 2.110747-10.800362 2.145542-10.790459 2.18893"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP8"} schX={-10.89045854562297} schY={2.21393006021306} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M8.397579 1.401566L8.397579 1.554294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.397579 1.843385L8.397579 2.001566"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.32667 1.701566L8.32667 1.843385 8.473942 1.843385 8.473942 1.554294 8.32667 1.554294 8.32667 1.701566"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R15"} schX={8.550009036334163} schY={1.7779300181060265} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0"} schX={8.550009036334163} schY={1.6033845635605717} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.289195 1.401566L9.289195 1.554294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.289195 1.843385L9.289195 2.001566"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.218286 1.701566L9.218286 1.843385 9.365559 1.843385 9.365559 1.554294 9.218286 1.554294 9.218286 1.701566"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R16"} schX={9.4416255254495} schY={1.7779300181060265} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0"} schX={9.4416255254495} schY={1.6033845635605717} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-11.791014 2.110607h0.4v-0.4h-0.4Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"J5"} schX={-11.791014358499304} schY={2.2406067623899943} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"108-0740-001"} schX={-11.791014358499304} schY={1.5806067623899942} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-11.845762 1.910607L-11.591014 1.910607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-11.718388142658636} schY={1.9306067623899938} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M12.728439 2.04692h0.4v-0.4h-0.4Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"J6"} schX={12.728439092172305} schY={2.1769198703103276} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"108-0740-001"} schX={12.728439092172305} schY={1.5169198703103275} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M13.183187 1.84692L12.928439 1.84692"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={13.05581287633164} schY={1.866919870310328} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-5.54076 1.634182L-5.54076 1.834182"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.64076 1.934182L-5.630856 1.890794-5.603109 1.855999-5.563012 1.83669-5.518508 1.83669-5.478411 1.855999-5.450663 1.890794-5.44076 1.934182"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP9"} schX={-5.540759610930984} schY={1.9591824918943948} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M0.627778 1.592627L0.627778 1.745354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.627778 2.034445L0.627778 2.192627"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.556869 1.892627L0.556869 2.034445 0.704142 2.034445 0.704142 1.745354 0.556869 1.745354 0.556869 1.892627"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R14"} schX={0.7802082026148476} schY={1.9689906943450248} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"3.0"} schX={0.7802082026148476} schY={1.7944452397995692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-6.496063 1.053531L-6.496063 0.791712"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.496063 0.70444L-6.496063 0.453531"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.637881 0.791712L-6.34879 0.791712"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.637881 0.70444L-6.34879 0.70444"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C26"} schX={-6.433335719398707} schY={0.8626215840666962} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"22µF"} schX={-6.433335719398707} schY={0.6444397658848784} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-6.050255 1.053531L-6.050255 0.791712"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.050255 0.70444L-6.050255 0.453531"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.192073 0.791712L-5.902982 0.791712"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.192073 0.70444L-5.902982 0.70444"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C27"} schX={-5.987527474841043} schY={0.8626215840666962} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"22µF"} schX={-5.987527474841043} schY={0.6444397658848784} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-9.307377 0.064142L-9.307377 0.216869"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.307377 0.50596L-9.307377 0.664142"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.378286 0.364142L-9.378286 0.50596-9.231014 0.50596-9.231014 0.216869-9.378286 0.216869-9.378286 0.364142"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R21"} schX={-9.154946961813126} schY={0.44050528443302994} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"75.0k"} schX={-9.154946961813126} schY={0.2659598298875743} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-11.654701 0.509495h0.254747v-0.509495h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-11.527327466419635,"y":0.2547475683186642}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-11.527327466419635,"y":0.3821213524779976}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.56554 0.165586h0.076425v-0.076424h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.399954 0.254748L-11.489115 0.254748"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 0.127374L-11.489115 0.127374"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 0.127374L-11.145206 0.127374"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 0.254748L-11.145206 0.254748"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 0.382121L-11.489115 0.382121"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 0.382121L-11.145206 0.382121"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.654701-0.700556h0.254747v-0.509495h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-11.527327466419635,"y":-0.955303381194998}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-11.527327466419635,"y":-0.8279295970356646}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.56554-1.044465h0.076425v-0.076424h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.399954-0.955303L-11.489115-0.955303"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-1.082677L-11.489115-1.082677"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-1.082677L-11.145206-1.082677"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-0.955303L-11.145206-0.955303"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-0.82793L-11.489115-0.82793"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-0.82793L-11.145206-0.82793"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.305002-1.932283L-6.305002-1.732283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.405002-1.632283L-6.395099-1.675672-6.367351-1.710467-6.327254-1.729776-6.28275-1.729776-6.242653-1.710467-6.214905-1.675672-6.205002-1.632283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP12"} schX={-6.305002315886981} schY={-1.6072834645669314} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M0.477222-2.188082L0.324495-2.188082"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.035404-2.188082L-0.122778-2.188082"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.177222-2.258991L0.035404-2.258991 0.035404-2.111718 0.324495-2.111718 0.324495-2.258991 0.177222-2.258991"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R28"} schX={0.1881312897385179} schY={-2.05201504889048} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3.0"} schX={0.1881312897385179} schY={-2.3077845216177533} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-1.146364-6.177629h0.254748v-0.382121h-0.254748Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-1.0189902732746603,"y":-6.432376100046319}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-1.057202-6.26679h0.076424v-0.076424h-0.076424Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-0.891616-6.432376L-0.980778-6.432376"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616-6.305002L-0.980778-6.305002"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616-6.305002L-0.636869-6.305002"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616-6.432376L-0.636869-6.432376"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.859194-2.187031L-5.859194-1.987031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.959194-1.887031L-5.949291-1.930419-5.921543-1.965214-5.881446-1.984524-5.836942-1.984524-5.796845-1.965214-5.769097-1.930419-5.759194-1.887031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP13"} schX={-5.8591940713293145} schY={-1.8620310328855982} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-1.473738-2.984345h0.4v-0.4h-0.4Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"NT3"} schX={-1.47373784159333} schY={-2.854344603983325} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Net-Tie"} schX={-1.47373784159333} schY={-3.514344603983327} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-1.401112-3.184345L-1.528485-3.184345"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-1.4647985178323282} schY={-3.1643446039833254} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-1.146364-3.184345L-1.01899-3.184345"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={-1.0826771653543261} schY={-3.1643446039833254} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-2.993284-4.67082L-2.993284-4.47082"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.093284-4.37082L-3.083381-4.414208-3.055633-4.449003-3.015536-4.468313-2.971032-4.468313-2.930935-4.449003-2.903187-4.414208-2.893284-4.37082"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP4"} schX={-2.993283927744324} schY={-4.3458198239925885} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-2.611163-4.67082L-2.611163-4.47082"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.711163-4.37082L-2.701259-4.414208-2.673512-4.449003-2.633415-4.468313-2.58891-4.468313-2.548814-4.449003-2.521066-4.414208-2.511163-4.37082"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP7"} schX={-2.6111625752663237} schY={-4.3458198239925885} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-11.591014-4.075961h0.254747v-0.509495h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-11.46364057433997,"y":-4.330708661417322}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-11.46364057433997,"y":-4.203334877257991}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.501853-4.41987h0.076425v-0.076425h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.336267-4.330709L-11.425428-4.330709"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267-4.458082L-11.425428-4.458082"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267-4.458082L-11.081519-4.458082"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267-4.330709L-11.081519-4.330709"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267-4.203335L-11.425428-4.203335"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267-4.203335L-11.081519-4.203335"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.830304-7.259851L-3.830304-7.107124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.830304-6.818033L-3.830304-6.659851"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.901214-6.959851L-3.901214-6.818033-3.753941-6.818033-3.753941-7.107124-3.901214-7.107124-3.901214-6.959851"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R39"} schX={-3.6778742429618063} schY={-6.88348730472862} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"2.00k"} schX={-3.6778742429618063} schY={-7.058032759274074} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.448183-7.259851L-3.448183-7.107124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.448183-6.818033L-3.448183-6.659851"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.519092-6.959851L-3.519092-6.818033-3.371819-6.818033-3.371819-7.107124-3.519092-7.107124-3.519092-6.959851"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R40"} schX={-3.295752890483808} schY={-6.88348730472862} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"2.00k"} schX={-3.295752890483808} schY={-7.058032759274074} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.967578-6.432376h0.509496v-0.764243h-0.509496Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-4.585456229735987,"y":-6.687123668364986}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.585456229735987,"y":-6.559749884205653}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.585456229735987,"y":-6.814497452524318}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.585456229735987,"y":-6.941871236683651}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.585456229735987,"y":-7.069245020842983}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.840203798054651,"y":-6.941871236683651}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.840203798054651,"y":-7.069245020842983}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.840203798054651,"y":-6.814497452524318}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.840203798054651,"y":-6.687123668364986}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-4.840203798054651,"y":-6.559749884205653}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-4.623668-6.521538h0.076424v-0.076424h-0.076424Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-4.458082-6.55975L-4.203335-6.55975"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-6.55975L-5.222325-6.55975"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-6.687124L-4.203335-6.687124"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-6.687124L-5.222325-6.687124"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-6.814497L-4.203335-6.814497"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-6.814497L-5.222325-6.814497"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-6.941871L-4.203335-6.941871"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-6.941871L-5.222325-6.941871"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-7.069245L-4.203335-7.069245"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-7.069245L-5.222325-7.069245"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-6.687124L-4.547244-6.687124"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-6.55975L-4.547244-6.55975"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-6.814497L-4.547244-6.814497"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-6.941871L-4.547244-6.941871"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.458082-7.069245L-4.547244-7.069245"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-6.941871L-4.878416-6.941871"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-7.069245L-4.878416-7.069245"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-6.814497L-4.878416-6.814497"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-6.687124L-4.878416-6.687124"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.967578-6.55975L-4.878416-6.55975"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.203137 3.288991L2.05041 3.288991"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.761319 3.288991L1.603137 3.288991"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.903137 3.218082L1.761319 3.218082 1.761319 3.365355 2.05041 3.365355 2.05041 3.218082 1.903137 3.218082"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R4"} schX={1.9140460650974802} schY={3.4250576699608404} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"5m"} schX={1.9140460650974802} schY={3.1692881972335663} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M2.203137 2.970557L2.05041 2.970557"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.761319 2.970557L1.603137 2.970557"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.903137 2.899648L1.761319 2.899648 1.761319 3.04692 2.05041 3.04692 2.05041 2.899648 1.903137 2.899648"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R6"} schX={1.9140460650974802} schY={3.106623209562507} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"5m"} schX={1.9140460650974802} schY={2.8508537368352336} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-6.696215-3.374951L-6.696215-3.222223"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.696215-2.933132L-6.696215-2.774951"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.767124-3.074951L-6.767124-2.933132-6.619851-2.933132-6.619851-3.222223-6.767124-3.222223-6.767124-3.074951"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R29"} schX={-6.543784386546799} schY={-2.9985868878689637} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"7.15k"} schX={-6.543784386546799} schY={-3.1731323424144193} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-6.687124-3.934496L-6.687124-3.672678"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.687124-3.585405L-6.687124-3.334496"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.545305-3.672678L-6.834396-3.672678"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.545305-3.585405L-6.834396-3.585405"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C36"} schX={-6.635305486546798} schY={-3.525405280222328} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.012uF"} schX={-6.635305486546798} schY={-3.743587098404147} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-5.859194-3.934496L-5.859194-3.672678"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.859194-3.585405L-5.859194-3.334496"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.717376-3.672678L-6.006467-3.672678"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.717376-3.585405L-6.006467-3.585405"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C37"} schX={-5.807375889511134} schY={-3.525405280222328} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.02uF"} schX={-5.807375889511134} schY={-3.743587098404147} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-7.014649-3.629698L-7.014649-3.476971"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.014649-3.18788L-7.014649-3.029698"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.085558-3.329698L-7.085558-3.18788-6.938285-3.18788-6.938285-3.476971-7.085558-3.476971-7.085558-3.329698"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R30"} schX={-6.862218846945131} schY={-3.2533344561876305} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"40.2k"} schX={-6.862218846945131} schY={-3.427879910733086} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-11.399954 2.179445L-11.399954 2.441264"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954 2.528536L-11.399954 2.779445"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.258136 2.441264L-11.547226 2.441264"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.258136 2.528536L-11.547226 2.528536"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C11"} schX={-11.348135500442119} schY={2.5885363594256585} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-11.348135500442119} schY={2.3703545412438407} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-7.387679 2.390955L-7.387679 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679 2.041864L-7.387679 1.790955"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.529498 2.129137L-7.240407 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.529498 2.041864L-7.240407 2.041864"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C14"} schX={-7.324952208514041} schY={2.200046317739692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={-7.324952208514041} schY={1.981864499557874} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-6.177629 2.390955L-6.177629 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.177629 2.041864L-6.177629 1.790955"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.319447 2.129137L-6.030356 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.319447 2.041864L-6.030356 2.041864"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C20"} schX={-6.114901259000376} schY={2.200046317739692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={-6.114901259000376} schY={1.981864499557874} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-5.54076 2.773077L-5.54076 2.511259"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.54076 2.423986L-5.54076 2.173077"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.682578 2.511259L-5.393487 2.511259"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.682578 2.423986L-5.393487 2.423986"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C9"} schX={-5.478032338203711} schY={2.582167670217693} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={-5.478032338203711} schY={2.363985852035875} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-0.900707 1.592627L-0.900707 1.745354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.900707 2.034445L-0.900707 2.192627"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.971616 1.892627L-0.971616 2.034445-0.824344 2.034445-0.824344 1.745354-0.971616 1.745354-0.971616 1.892627"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R12"} schX={-0.74827720729715} schY={1.9689906943450248} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"82.0k"} schX={-0.74827720729715} schY={1.7944452397995692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-0.900707 0.701011L-0.900707 0.853738"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.900707 1.142829L-0.900707 1.301011"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.971616 1.001011L-0.971616 1.142829-0.824344 1.142829-0.824344 0.853738-0.971616 0.853738-0.971616 1.001011"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R19"} schX={-0.74827720729715} schY={1.0773742052296926} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"4.30k"} schX={-0.74827720729715} schY={0.9028287506842378} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M0.191061 4.190597L-0.063687 4.190597"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.012737 4.22881L-0.063687 4.22881"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.165586 4.22881L0.165586 4.394396"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.038212 4.22881L-0.038212 4.394396"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.063687 4.267022L0.063687 4.394396"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.063687 4.254284L0.025475 4.317971"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.063687 4.254284L0.101899 4.317971"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.025475 4.317971L0.101899 4.317971"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.05095 4.305234L0.089162 4.305234"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.140111 4.22881L0.191061 4.22881"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.038212 4.22881L0.089162 4.22881"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.165586 4.394396L0.165586 4.483557"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.165586 4.483557L-0.038212 4.483557"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.038212 4.483557L-0.038212 4.394396"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-0.038212135247800205,"y":4.394395553496987}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":0.16558591940713896,"y":4.394395553496987}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.038212 4.483557L0.089162 4.458082"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.089162 4.458082L0.089162 4.509032"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.089162 4.509032L0.038212 4.483557"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.038212 4.483557L0.038212 4.509032"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.038212 4.483557L0.038212 4.458082"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.191061 4.190597L0.191061 4.139648"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.063687 4.394396L0.191061 4.394396"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.038212 4.394396L-0.063687 4.394396"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.191061 4.139648L0.191061 3.8849"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.191061 4.394396L0.445808 4.394396"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.063687 4.394396L-0.318434 4.394396"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.787018 3.288991L8.939746 3.288991"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.228837 3.288991L9.387018 3.288991"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.087018 3.3599L9.228837 3.3599 9.228837 3.212627 8.939746 3.212627 8.939746 3.3599 9.087018 3.3599"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R3"} schX={9.076109309865682} schY={3.3868758517790214} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"10m"} schX={9.076109309865682} schY={3.174742742688113} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-6.496063 1.570496L-6.496063 1.770496"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.596063 1.870496L-6.58616 1.827107-6.558412 1.792312-6.518315 1.773003-6.473811 1.773003-6.433714 1.792312-6.405966 1.827107-6.396063 1.870496"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP10"} schX={-6.49606299212598} schY={1.8954955998147272} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-4.745103-0.914344L-4.89783-0.914344"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.186921-0.914344L-5.345103-0.914344"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.045103-0.985253L-5.186921-0.985253-5.186921-0.83798-4.89783-0.83798-4.89783-0.985253-5.045103-0.985253"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R25"} schX={-5.0341938607941366} schY={-0.7782772072971529} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"10.0k"} schX={-5.0341938607941366} schY={-1.0340466800244243} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-1.146364-7.706114h0.254748v-0.382121h-0.254748Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-1.0189902732746603,"y":-7.960861509958315}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-1.057202-7.795276h0.076424v-0.076424h-0.076424Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-0.891616-7.960862L-0.980778-7.960862"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616-7.833488L-0.980778-7.833488"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616-7.833488L-0.636869-7.833488"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.891616-7.960862L-0.636869-7.960862"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.986568 2.836764L5.986568 2.574945"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.986568 2.487673L5.986568 2.236764"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.84475 2.574945L6.133841 2.574945"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.84475 2.487673L6.133841 2.487673"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C5"} schX={6.0492951282159275} schY={2.645854562297359} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={6.0492951282159275} schY={2.427672744115541} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M6.368689 2.390955L6.368689 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.368689 2.041864L6.368689 1.790955"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.226871 2.129137L6.515962 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.226871 2.041864L6.515962 2.041864"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C21"} schX={6.4314164806939225} schY={2.200046317739692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={6.4314164806939225} schY={1.981864499557874} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M6.750811 2.836764L6.750811 2.574945"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 2.487673L6.750811 2.236764"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.608992 2.574945L6.898083 2.574945"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.608992 2.487673L6.898083 2.487673"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C6"} schX={6.8135378331719245} schY={2.645854562297359} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={6.8135378331719245} schY={2.427672744115541} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M7.132932 2.390955L7.132932 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.132932 2.041864L7.132932 1.790955"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.991114 2.129137L7.280205 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.991114 2.041864L7.280205 2.041864"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C22"} schX={7.195659185649923} schY={2.200046317739692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={7.195659185649923} schY={1.981864499557874} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M11.654701 3.409946L11.654701 3.148128"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.654701 3.060855L11.654701 2.809946"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.512883 3.148128L11.801974 3.148128"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.512883 3.060855L11.801974 3.060855"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C3"} schX={11.717428523306246} schY={3.2190365910143592} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={11.717428523306246} schY={3.0008547728325405} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M7.960862 2.390955L7.960862 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.960862 2.041864L7.960862 1.790955"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.819043 2.129137L8.108134 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.819043 2.041864L8.108134 2.041864"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C23"} schX={8.02358878268559} schY={2.200046317739692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"27µF"} schX={8.02358878268559} schY={1.981864499557874} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M7.515053 2.836764L7.515053 2.574945"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.515053 2.487673L7.515053 2.236764"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.373235 2.574945L7.662326 2.574945"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.373235 2.487673L7.662326 2.487673"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C7"} schX={7.577780538127918} schY={2.645854562297359} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"27µF"} schX={7.577780538127918} schY={2.427672744115541} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M9.616721 2.900451L9.616721 2.638632"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.616721 2.55136L9.616721 2.300451"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.474903 2.638632L9.763993 2.638632"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.474903 2.55136L9.763993 2.55136"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C4"} schX={9.679447976756915} schY={2.7095414543770264} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"27µF"} schX={9.679447976756915} schY={2.4913596361952086} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-6.305002-3.616062L-6.305002-3.354244"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.305002-3.266971L-6.305002-3.016062"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.163184-3.354244L-6.452275-3.354244"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.163184-3.266971L-6.452275-3.266971"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C34"} schX={-6.253184134068798} schY={-3.2069708198239937} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"220pF"} schX={-6.253184134068798} schY={-3.4251526380058124} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-7.387679-3.934496L-7.387679-3.672678"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.387679-3.585405L-7.387679-3.334496"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.245861-3.672678L-7.534952-3.672678"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.245861-3.585405L-7.534952-3.585405"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C35"} schX={-7.335861299423131} schY={-3.525405280222328} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"56pF"} schX={-7.335861299423131} schY={-3.743587098404147} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M10.194499 5.199598L10.347226 5.199598"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.636317 5.199598L10.794499 5.199598"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.494499 5.270507L10.636317 5.270507 10.636317 5.123234 10.347226 5.123234 10.347226 5.270507 10.494499 5.270507"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R11"} schX={10.483589624826308} schY={5.2974826141690174} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"43k"} schX={10.483589624826308} schY={5.085349505078108} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-9.043539 2.454642L-9.043539 2.192824"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.043539 2.105551L-9.043539 1.854642"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.185357 2.192824L-8.896266 2.192824"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.185357 2.105551L-8.896266 2.105551"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C17"} schX={-8.980811402585369} schY={2.2637332098193603} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"27µF"} schX={-8.980811402585369} schY={2.0455513916375425} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-8.534044 2.454642L-8.534044 2.192824"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044 2.105551L-8.534044 1.854642"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.675862 2.192824L-8.386771 2.192824"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.675862 2.105551L-8.386771 2.105551"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C18"} schX={-8.471316265948037} schY={2.2637332098193603} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"27µF"} schX={-8.471316265948037} schY={2.0455513916375425} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-8.024548 2.454642L-8.024548 2.192824"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.024548 2.105551L-8.024548 1.854642"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.166367 2.192824L-7.877276 2.192824"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.166367 2.105551L-7.877276 2.105551"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C19"} schX={-7.961821129310703} schY={2.2637332098193603} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"27µF"} schX={-7.961821129310703} schY={2.0455513916375425} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematictext text={"Symbol not found: p_channel_e_mosfet_transistor_gate_bottom_drain_left"} schX={10.572024085224644} schY={6.0056739231125515} fontSize={0.05} color={"red"} anchor="center" schRotation={0} />
      <schematicpath svgPath={"M-9.498438-0.700101L-9.498438-0.547374"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.498438-0.258283L-9.498438-0.100101"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.569347-0.400101L-9.569347-0.258283-9.422074-0.258283-9.422074-0.547374-9.569347-0.547374-9.569347-0.400101"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R22"} schX={-9.346007638052125} schY={-0.32373742052296883} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"12.7k"} schX={-9.346007638052125} schY={-0.4982828750684245} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M1.264647 0.955758L1.264647 1.108485"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.264647 1.397576L1.264647 1.555758"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.193738 1.255758L1.193738 1.397576 1.341011 1.397576 1.341011 1.108485 1.193738 1.108485 1.193738 1.255758"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R17"} schX={1.4170771234115165} schY={1.3321217735483595} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10.0"} schX={1.4170771234115165} schY={1.1575763190029047} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M2.02889 0.955758L2.02889 1.108485"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.02889 1.397576L2.02889 1.555758"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.957981 1.255758L1.957981 1.397576 2.105253 1.397576 2.105253 1.108485 1.957981 1.108485 1.957981 1.255758"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R18"} schX={2.18131982836751} schY={1.3321217735483595} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10.0"} schX={2.18131982836751} schY={1.1575763190029047} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M11.081519 5.553608L10.951519 5.813608"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.221519 5.813608L11.081519 5.553608"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.951519 5.813608L11.221519 5.813608"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.221519 5.553608L10.951519 5.553608"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.081519 5.813608L11.081519 6.213608"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.081519 5.173608L11.081519 5.543608"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D2"} schX={11.311519221861975} schY={5.703608151922182} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10V"} schX={10.771519221861976} schY={5.693608151922183} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M11.45455 5.031719L11.45455 5.184447"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.45455 5.473537L11.45455 5.631719"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.383641 5.331719L11.383641 5.473537 11.530913 5.473537 11.530913 5.184447 11.383641 5.184447 11.383641 5.331719"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R5"} schX={11.606979856158155} schY={5.408082866647017} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"180k"} schX={11.606979856158155} schY={5.233537412101562} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-7.069245 1.059899L-7.069245 0.798081"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.069245 0.710808L-7.069245 0.459899"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.211063 0.798081L-6.921972 0.798081"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.211063 0.710808L-6.921972 0.710808"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C28"} schX={-7.006517748115707} schY={0.8689902732746635} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-7.006517748115707} schY={0.6508084550928457} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-3.3349 2.283637L-3.596719 2.283637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.683991 2.283637L-3.9349 2.283637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.596719 2.425455L-3.596719 2.136364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.683991 2.425455L-3.683991 2.136364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C15"} schX={-3.640354962314202} schY={2.5018190239589027} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-3.634900416859656} schY={2.0436372057770846} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-1.551667 2.283637L-1.813486 2.283637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.900758 2.283637L-2.151667 2.283637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.813486 2.425455L-1.813486 2.136364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.900758 2.425455L-1.900758 2.136364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C16"} schX={-1.8571219840835411} schY={2.5018190239589027} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-1.8516674386289935} schY={2.0436372057770846} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.27793-0.64596L-0.539748-0.64596"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.627021-0.64596L-0.87793-0.64596"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.539748-0.504142L-0.539748-0.793233"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.627021-0.504142L-0.627021-0.793233"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C31"} schX={-0.5833841424902069} schY={-0.42777801170575636} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-0.5779295970356628} schY={-0.8859598298875753} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M0.613687-1.410203L0.351869-1.410203"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.264596-1.410203L0.013687-1.410203"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.351869-1.268384L0.351869-1.557475"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.264596-1.268384L0.264596-1.557475"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C33"} schX={0.3082323466251218} schY={-1.1920207166617551} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={0.3136868920796694} schY={-1.650202534843574} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M0.245657 1.592627L0.245657 1.745354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.245657 2.034445L0.245657 2.192627"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.174748 1.892627L0.174748 2.034445 0.32202 2.034445 0.32202 1.745354 0.174748 1.745354 0.174748 1.892627"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R13"} schX={0.39808685013685263} schY={1.9689906943450248} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"3.0"} schX={0.39808685013685263} schY={1.7944452397995692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M0.254748 3.10792L0 3.10792"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.05095 3.146132L0 3.146132"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.229273 3.146132L0.229273 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.025475 3.146132L0.025475 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.127374 3.184345L0.127374 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.127374 3.171607L0.089162 3.235294"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.127374 3.171607L0.165586 3.235294"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.089162 3.235294L0.165586 3.235294"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.114636 3.222557L0.152849 3.222557"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.203798 3.146132L0.254748 3.146132"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.101899 3.146132L0.152849 3.146132"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.229273 3.311718L0.229273 3.40088"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.229273 3.40088L0.025475 3.40088"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.025475 3.40088L0.025475 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":0.025474756831872725,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":0.22927281148680123,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.101899 3.40088L0.152849 3.375405"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.152849 3.375405L0.152849 3.426355"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.152849 3.426355L0.101899 3.40088"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.101899 3.40088L0.101899 3.426355"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.101899 3.40088L0.101899 3.375405"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.254748 3.10792L0.254748 3.056971"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.127374 3.311718L0.254748 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.025475 3.311718L0 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.254748 3.056971L0.254748 2.802223"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.254748 3.311718L0.509495 3.311718"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0 3.311718L-0.254748 3.311718"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.815192-2.165354L0.815192-1.910607"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.853404-1.961556L0.853404-1.910607"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.853404-2.13988L1.01899-2.13988"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.853404-1.936082L1.01899-1.936082"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.891616-2.037981L1.01899-2.037981"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.878879-2.037981L0.942566-1.999768"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.878879-2.037981L0.942566-2.076193"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.942566-1.999768L0.942566-2.076193"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.929829-2.025243L0.929829-2.063455"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.853404-2.114405L0.853404-2.165354"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.853404-2.012506L0.853404-2.063455"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-2.13988L1.108152-2.13988"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.108152-2.13988L1.108152-1.936082"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.108152-1.936082L1.01899-1.936082"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":1.0189902732746674,"y":-1.9360815192218617}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":1.0189902732746674,"y":-2.1398795738767955}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.108152-2.012506L1.082677-2.063455"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-2.063455L1.133627-2.063455"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.133627-2.063455L1.108152-2.012506"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.108152-2.012506L1.133627-2.012506"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.108152-2.012506L1.082677-2.012506"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.815192-2.165354L0.764243-2.165354"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-2.037981L1.01899-2.165354"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-1.936082L1.01899-1.910607"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.764243-2.165354L0.509495-2.165354"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-2.165354L1.01899-2.420102"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-1.910607L1.01899-1.655859"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.519395-8.278841L1.519395-8.126114"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.519395-7.837023L1.519395-7.678841"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.448485-7.978841L1.448485-7.837023 1.595758-7.837023 1.595758-8.126114 1.448485-8.126114 1.448485-7.978841"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R42"} schX={1.6718246917301798} schY={-7.902477578003287} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"8.25k"} schX={1.6718246917301798} schY={-8.07702303254874} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M0.764243-7.706114h0.254747v-0.382121h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.8916164891153322,"y":-7.960861509958315}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M0.853404-7.795276h0.076425v-0.076424h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M1.01899-7.960862L0.929829-7.960862"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-7.833488L0.929829-7.833488"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-7.833488L1.273738-7.833488"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-7.960862L1.273738-7.960862"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.654701-6.050255h0.254747v-0.382121h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-11.527327466419635,"y":-6.305002315886986}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.56554-6.139416h0.076425v-0.076425h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.399954-6.305002L-11.489115-6.305002"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-6.177629L-11.489115-6.177629"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-6.177629L-11.145206-6.177629"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-6.305002L-11.145206-6.305002"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.391212-8.278841L-0.391212-8.126114"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.391212-7.837023L-0.391212-7.678841"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.462121-7.978841L-0.462121-7.837023-0.314849-7.837023-0.314849-8.126114-0.462121-8.126114-0.462121-7.978841"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R41"} schX={-0.23878207065981627} schY={-7.902477578003287} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"3.83k"} schX={-0.23878207065981627} schY={-8.07702303254874} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-11.591014 1.401112h0.254747v-0.509496h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-11.46364057433997,"y":1.1463640574339964}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":-11.46364057433997,"y":1.273737841593328}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.501853 1.057202h0.076425v-0.076424h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.336267 1.146364L-11.425428 1.146364"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267 1.01899L-11.425428 1.01899"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267 1.01899L-11.081519 1.01899"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267 1.146364L-11.081519 1.146364"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267 1.273738L-11.425428 1.273738"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.336267 1.273738L-11.081519 1.273738"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.217729-1.678586L-5.065002-1.678586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.775911-1.678586L-4.617729-1.678586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.917729-1.607677L-4.775911-1.607677-4.775911-1.75495-5.065002-1.75495-5.065002-1.607677-4.917729-1.607677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R27"} schX={-4.928638258452985} schY={-1.5807017304349653} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-4.928638258452985} schY={-1.7928348395258755} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.796516-2.824951L-0.949243-2.824951"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.238334-2.824951L-1.396516-2.824951"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.096516-2.89586L-1.238334-2.89586-1.238334-2.748587-0.949243-2.748587-0.949243-2.89586-1.096516-2.89586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R10"} schX={-1.0856065518548128} schY={-2.6888839696871454} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-1.0856065518548128} schY={-2.9446534424144186} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-1.879193 4.244294L-2.03192 4.244294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.321011 4.244294L-2.479193 4.244294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.179193 4.173385L-2.321011 4.173385-2.321011 4.320658-2.03192 4.320658-2.03192 4.173385-2.179193 4.173385"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R2"} schX={-2.168283717209146} schY={4.3803610511558375} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-2.168283717209146} schY={4.124591578428564} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.681416-5.245052L-4.834143-5.245052"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.123234-5.245052L-5.281416-5.245052"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.981416-5.315962L-5.123234-5.315962-5.123234-5.168689-4.834143-5.168689-4.834143-5.315962-4.981416-5.315962"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R35"} schX={-4.9705069687144725} schY={-5.108985868714473} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-4.9705069687144725} schY={-5.364755341441747} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.649143-5.180315L-4.649143-4.980315"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.749143-4.880315L-4.73924-4.923703-4.711492-4.958498-4.671395-4.977808-4.626891-4.977808-4.586794-4.958498-4.559046-4.923703-4.549143-4.880315"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP11"} schX={-4.649143121815651} schY={-4.855314960629922} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M1.519395-6.150356L1.519395-6.303083"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.519395-6.592174L1.519395-6.750356"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.590304-6.450356L1.590304-6.592174 1.443031-6.592174 1.443031-6.303083 1.590304-6.303083 1.590304-6.450356"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R38"} schX={1.6172792371847216} schY={-6.352173986273108} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0"} schX={1.6172792371847216} schY={-6.526719440818564} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M2.568661 3.474364L2.568661 3.474364 2.559063 3.483962 2.559063 3.483962 2.559063 3.49356 2.559063 3.49356 2.559063 3.49356 2.549465 3.503158 2.549465 3.503158 2.549465 3.512756 2.549465 3.512756 2.539867 3.522355 2.539867 3.522355 2.539867 3.522355 2.539867 3.531953 2.530269 3.531953 2.530269 3.531953 2.530269 3.541551 2.530269 3.541551 2.520671 3.541551 2.520671 3.551149 2.520671 3.551149 2.520671 3.551149 2.511072 3.551149 2.511072 3.551149 2.511072 3.560747 2.511072 3.560747 2.501474 3.560747 2.501474 3.560747 2.501474 3.560747 2.501474 3.560747 2.491876 3.560747 2.491876 3.560747 2.491876 3.560747 2.491876 3.560747 2.482278 3.560747 2.482278 3.570345 2.482278 3.570345 2.482278 3.570345 2.47268 3.570345 2.47268 3.570345 2.47268 3.570345 2.47268 3.570345 2.463082 3.570345 2.463082 3.570345 2.463082 3.560747 2.463082 3.560747 2.453484 3.560747 2.453484 3.560747 2.453484 3.560747 2.453484 3.560747 2.443886 3.560747 2.443886 3.560747 2.443886 3.560747 2.443886 3.560747 2.434287 3.560747 2.434287 3.551149 2.434287 3.551149 2.434287 3.551149 2.424689 3.551149 2.424689 3.551149 2.424689 3.541551 2.424689 3.541551 2.415091 3.541551 2.415091 3.531953 2.415091 3.531953 2.415091 3.531953 2.405493 3.522355 2.405493 3.522355 2.405493 3.522355 2.405493 3.512756 2.395895 3.512756 2.395895 3.503158 2.395895 3.503158 2.395895 3.49356 2.386297 3.49356 2.386297 3.49356 2.386297 3.483962 2.386297 3.483962 2.376699 3.474364 2.376699 3.474364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.760624 3.474364L2.760624 3.474364 2.751026 3.483962 2.751026 3.483962 2.751026 3.49356 2.751026 3.49356 2.741428 3.49356 2.741428 3.503158 2.741428 3.503158 2.741428 3.512756 2.731829 3.512756 2.731829 3.522355 2.731829 3.522355 2.731829 3.522355 2.722231 3.531953 2.722231 3.531953 2.722231 3.531953 2.722231 3.541551 2.712633 3.541551 2.712633 3.541551 2.712633 3.551149 2.712633 3.551149 2.703035 3.551149 2.703035 3.551149 2.703035 3.551149 2.703035 3.560747 2.693437 3.560747 2.693437 3.560747 2.693437 3.560747 2.693437 3.560747 2.683839 3.560747 2.683839 3.560747 2.683839 3.560747 2.683839 3.560747 2.674241 3.560747 2.674241 3.560747 2.674241 3.570345 2.674241 3.570345 2.664643 3.570345 2.664643 3.570345 2.664643 3.570345 2.664643 3.570345 2.655044 3.570345 2.655044 3.570345 2.655044 3.570345 2.655044 3.560747 2.645446 3.560747 2.645446 3.560747 2.645446 3.560747 2.645446 3.560747 2.635848 3.560747 2.635848 3.560747 2.635848 3.560747 2.635848 3.560747 2.62625 3.560747 2.62625 3.560747 2.62625 3.551149 2.62625 3.551149 2.616652 3.551149 2.616652 3.551149 2.616652 3.551149 2.616652 3.541551 2.607054 3.541551 2.607054 3.541551 2.607054 3.531953 2.607054 3.531953 2.597456 3.531953 2.597456 3.522355 2.597456 3.522355 2.597456 3.522355 2.587857 3.512756 2.587857 3.512756 2.587857 3.503158 2.587857 3.503158 2.578259 3.49356 2.578259 3.49356 2.578259 3.49356 2.578259 3.483962 2.568661 3.483962 2.568661 3.474364 2.568661 3.474364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.952586 3.474364L2.952586 3.474364 2.942988 3.483962 2.942988 3.483962 2.942988 3.49356 2.942988 3.49356 2.93339 3.49356 2.93339 3.503158 2.93339 3.503158 2.93339 3.512756 2.923792 3.512756 2.923792 3.522355 2.923792 3.522355 2.923792 3.522355 2.914194 3.531953 2.914194 3.531953 2.914194 3.531953 2.914194 3.541551 2.904596 3.541551 2.904596 3.541551 2.904596 3.551149 2.904596 3.551149 2.894998 3.551149 2.894998 3.551149 2.894998 3.551149 2.894998 3.560747 2.8854 3.560747 2.8854 3.560747 2.8854 3.560747 2.8854 3.560747 2.875801 3.560747 2.875801 3.560747 2.875801 3.560747 2.875801 3.560747 2.866203 3.560747 2.866203 3.560747 2.866203 3.570345 2.866203 3.570345 2.856605 3.570345 2.856605 3.570345 2.856605 3.570345 2.856605 3.570345 2.847007 3.570345 2.847007 3.570345 2.847007 3.570345 2.847007 3.560747 2.837409 3.560747 2.837409 3.560747 2.837409 3.560747 2.837409 3.560747 2.827811 3.560747 2.827811 3.560747 2.827811 3.560747 2.827811 3.560747 2.818213 3.560747 2.818213 3.560747 2.818213 3.551149 2.818213 3.551149 2.808615 3.551149 2.808615 3.551149 2.808615 3.551149 2.808615 3.541551 2.799016 3.541551 2.799016 3.541551 2.799016 3.531953 2.799016 3.531953 2.789418 3.531953 2.789418 3.522355 2.789418 3.522355 2.789418 3.522355 2.77982 3.512756 2.77982 3.512756 2.77982 3.503158 2.77982 3.503158 2.770222 3.49356 2.770222 3.49356 2.770222 3.49356 2.770222 3.483962 2.760624 3.483962 2.760624 3.474364 2.760624 3.474364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.144549 3.474364L3.134951 3.474364 3.134951 3.483962 3.134951 3.483962 3.134951 3.49356 3.134951 3.49356 3.125353 3.49356 3.125353 3.503158 3.125353 3.503158 3.125353 3.512756 3.115755 3.512756 3.115755 3.522355 3.115755 3.522355 3.115755 3.522355 3.106157 3.531953 3.106157 3.531953 3.106157 3.531953 3.106157 3.541551 3.096558 3.541551 3.096558 3.541551 3.096558 3.551149 3.096558 3.551149 3.08696 3.551149 3.08696 3.551149 3.08696 3.551149 3.08696 3.560747 3.077362 3.560747 3.077362 3.560747 3.077362 3.560747 3.077362 3.560747 3.067764 3.560747 3.067764 3.560747 3.067764 3.560747 3.067764 3.560747 3.058166 3.560747 3.058166 3.560747 3.058166 3.570345 3.058166 3.570345 3.048568 3.570345 3.048568 3.570345 3.048568 3.570345 3.048568 3.570345 3.03897 3.570345 3.03897 3.570345 3.03897 3.570345 3.03897 3.560747 3.029372 3.560747 3.029372 3.560747 3.029372 3.560747 3.029372 3.560747 3.019773 3.560747 3.019773 3.560747 3.019773 3.560747 3.019773 3.560747 3.010175 3.560747 3.010175 3.560747 3.010175 3.551149 3.010175 3.551149 3.000577 3.551149 3.000577 3.551149 3.000577 3.551149 3.000577 3.541551 2.990979 3.541551 2.990979 3.541551 2.990979 3.531953 2.990979 3.531953 2.981381 3.531953 2.981381 3.522355 2.981381 3.522355 2.981381 3.522355 2.971783 3.512756 2.971783 3.512756 2.971783 3.503158 2.971783 3.503158 2.962185 3.49356 2.962185 3.49356 2.962185 3.49356 2.962185 3.483962 2.952586 3.483962 2.952586 3.474364 2.952586 3.474364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.376699 3.474364L2.232727 3.474364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.288521 3.464766L3.144549 3.464766"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"L1"} schX={2.760623859425664} schY={3.714317183655732} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"5.3uH"} schX={2.760623859425664} schY={3.2728031530279154} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M6.368689 5.73182h0.509495v-0.254747h-0.509495Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":6.623436776285324,"y":5.604446503010652}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":6.750810560444652,"y":5.604446503010652}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M6.457851 5.642659h0.076424v-0.076425h-0.076424Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M6.623437 5.477073L6.623437 5.566234"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.496063 5.477073L6.496063 5.566234"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.496063 5.477073L6.496063 5.222325"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.623437 5.477073L6.623437 5.222325"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 5.477073L6.750811 5.566234"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.750811 5.477073L6.750811 5.222325"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.519395-5.640861L1.519395-5.793588"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.519395-6.082679L1.519395-6.240861"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.590304-5.940861L1.590304-6.082679 1.443031-6.082679 1.443031-5.793588 1.590304-5.793588 1.590304-5.940861"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R36"} schX={1.6172792371847216} schY={-5.842678849635774} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0"} schX={1.6172792371847216} schY={-6.01722430418123} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M8.916165-8.482983L8.786165-8.222983"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.056165-8.222983L8.916165-8.482983"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.786165-8.222983L9.056165-8.222983"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.056165-8.482983L8.786165-8.482983"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-8.222983L8.916165-7.822983"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-8.862983L8.916165-8.492983"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D4"} schX={9.146164891153315} schY={-8.332982862436316} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"48V"} schX={8.606164891153316} schY={-8.342982862436314} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M8.916165-6.69975L8.786165-6.43975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.056165-6.43975L8.916165-6.69975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.786165-6.43975L9.056165-6.43975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.056165-6.69975L8.786165-6.69975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-6.43975L8.916165-6.03975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165-7.07975L8.916165-6.70975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D3"} schX={9.146164891153315} schY={-6.549749884205653} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"48V"} schX={8.606164891153316} schY={-6.5597498842056545} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.260306-5.668133h0.636869v-1.401112h-0.636869Z"} strokeWidth={0.05} strokeColor={"#800000"} isFilled={true} fillColor={"#ffffb0"} />
      <schematiccircle center={{"x":7.578740157480318,"y":-5.922880963408986}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.616952-5.922881L7.897175-5.922881"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":7.578740157480318,"y":-6.1776285317276525}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.616952-6.177629L7.897175-6.177629"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":7.578740157480318,"y":-6.559749884205653}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.616952-6.55975L7.897175-6.55975"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":7.578740157480318,"y":-6.814497452524318}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.616952-6.814497L7.897175-6.814497"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.897175-5.922881L8.151922-5.922881"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.897175-6.177629L8.151922-6.177629"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.897175-6.55975L8.151922-6.55975"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.897175-6.814497L8.151922-6.814497"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.260306-7.451366h0.636869v-1.401112h-0.636869Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"J10"} schX={7.260305697081986} schY={-7.321366373320982} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"XT30PW-M"} schX={7.260305697081986} schY={-8.982477999073646} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M7.897175-7.706114L8.151922-7.706114"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={8.024548402037983} schY={-7.686113941639649} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"-"} schX={7.79717461787865} schY={-7.70611394163965} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.897175-7.960862L8.151922-7.960862"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={8.024548402037983} schY={-7.9408615099583155} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"+"} schX={7.79717461787865} schY={-7.960861509958315} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.897175-8.342983L8.151922-8.342983"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={8.024548402037983} schY={-8.322982862436314} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"MNT_1"} schX={7.79717461787865} schY={-8.342982862436314} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.897175-8.59773L8.151922-8.59773"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={8.024548402037983} schY={-8.57773043075498} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"MNT_2"} schX={7.79717461787865} schY={-8.59773043075498} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.849295-3.948133L-4.849295-3.795405"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.849295-3.506314L-4.849295-3.348133"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.920204-3.648133L-4.920204-3.506314-4.772931-3.506314-4.772931-3.795405-4.920204-3.795405-4.920204-3.648133"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R31"} schX={-4.69686451623647} schY={-3.571768916585965} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"97.6k"} schX={-4.69686451623647} schY={-3.746314371131417} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-0.391212-6.750356L-0.391212-6.597629"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.391212-6.308538L-0.391212-6.150356"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.462121-6.450356L-0.462121-6.308538-0.314849-6.308538-0.314849-6.597629-0.462121-6.597629-0.462121-6.450356"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R37"} schX={-0.23878207065981627} schY={-6.373992168091291} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"2.7k"} schX={-0.23878207065981627} schY={-6.5485376226367435} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-6.873588-0.595909L-6.720861-0.595909"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.43177-0.595909L-6.273588-0.595909"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.573588-0.525L-6.43177-0.525-6.43177-0.672273-6.720861-0.672273-6.720861-0.525-6.573588-0.525"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R24"} schX={-6.584497452524314} schY={-0.4980245650806374} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={-6.584497452524314} schY={-0.7101576741715458} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.654701-2.101667h0.254747v-0.382122h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":-11.527327466419635,"y":-2.356415006947664}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.56554-2.190829h0.076425v-0.076424h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M-11.399954-2.356415L-11.489115-2.356415"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-2.229041L-11.489115-2.229041"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-2.229041L-11.145206-2.229041"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.399954-2.356415L-11.145206-2.356415"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.903891 2.773077L4.903891 2.511259"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.903891 2.423986L4.903891 2.173077"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.762073 2.511259L5.051163 2.511259"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.762073 2.423986L5.051163 2.423986"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C10"} schX={4.966617962861594} schY={2.582167670217693} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GRM188R72A104KA35D"} schX={4.966617962861594} schY={2.363985852035875} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M12.482631 2.773077L12.482631 2.511259"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.482631 2.423986L12.482631 2.173077"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.340813 2.511259L12.629904 2.511259"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.340813 2.423986L12.629904 2.423986"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C8"} schX={12.54535812034191} schY={2.582167670217693} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GRM188R72A104KA35D"} schX={12.54535812034191} schY={2.363985852035875} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M8.822927 6.232225L8.561109 6.232225"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.473836 6.232225L8.222927 6.232225"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.561109 6.374043L8.561109 6.084952"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.473836 6.374043L8.473836 6.084952"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C2"} schX={8.517472735694135} schY={6.450406332898227} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"GRM188R72A104KA35D"} schX={8.522927281148682} schY={5.992224514716408} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.42566 7.040099L9.42566 6.77828"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.42566 6.691008L9.42566 6.440099"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.283842 6.77828L9.572933 6.77828"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.283842 6.691008L9.572933 6.691008"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C1"} schX={9.488387300517918} schY={6.849189439555348} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GRM188R72A104KA35D"} schX={9.488387300517918} schY={6.631007621373529} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M8.40667 6.814497L8.40667 6.55975"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417 6.814497L8.661417 6.55975"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.40667 6.814497L8.661417 6.687124"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.40667 6.55975L8.661417 6.687124"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417 6.687124L8.916165 6.687124"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165 6.687124L8.916165 6.814497"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165 6.814497L8.916165 6.55975"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.916165 6.55975L9.170912 6.687124"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.170912 6.687124L8.916165 6.814497"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.170912 6.687124L9.170912 6.814497"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.170912 6.814497L9.170912 6.55975"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.40667 6.687124L8.151922 6.687124"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.170912 6.687124L9.42566 6.687124"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.788791 6.687124L8.788791 6.432376"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.78879110699398,"y":6.687123668364982}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.926064 6.369144L9.926064 6.521871"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.926064 6.810962L9.926064 6.969144"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.855155 6.669144L9.855155 6.810962 10.002428 6.810962 10.002428 6.521871 9.855155 6.521871 9.855155 6.669144"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R1"} schX={10.078494446246161} schY={6.745507600320013} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"5.10k"} schX={10.078494446246161} schY={6.570962145774558} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"Symbol not found: n_channel_e_mosfet_transistor_gate_bottom_drain_right"} schX={10.69939786938398} schY={7.152037980546548} fontSize={0.05} color={"red"} anchor="center" schRotation={0} />
      <schematicpath svgPath={"M8.279296-1.01899h0.382121v-1.528486h-0.382121Z"} strokeWidth={0.05} strokeColor={"#800000"} isFilled={true} fillColor={"#ffffb0"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-1.2737378415933307}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-1.273738L8.661417-1.273738"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-1.5284854099119976}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-1.528485L8.661417-1.528485"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-1.7832329782306626}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-1.783233L8.661417-1.783233"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-2.0379805465493295}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-2.037981L8.661417-2.037981"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-2.2927281148679945}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-2.292728L8.661417-2.292728"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-1.273738L8.916165-1.273738"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-1.528485L8.916165-1.528485"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-1.783233L8.916165-1.783233"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-2.037981L8.916165-2.037981"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-2.292728L8.916165-2.292728"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.279296-3.439092h0.382121v-1.528486h-0.382121Z"} strokeWidth={0.05} strokeColor={"#800000"} isFilled={true} fillColor={"#ffffb0"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-3.6938397406206587}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-3.69384L8.661417-3.69384"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-3.9485873089393255}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-3.948587L8.661417-3.948587"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-4.203334877257991}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-4.203335L8.661417-4.203335"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-4.458082445576656}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-4.458082L8.661417-4.458082"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":8.470356646595643,"y":-4.7128300138953225}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.508569-4.71283L8.661417-4.71283"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-3.69384L8.916165-3.69384"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-3.948587L8.916165-3.948587"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-4.203335L8.916165-4.203335"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-4.458082L8.916165-4.458082"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.661417-4.71283L8.916165-4.71283"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.680408-2.165354h0.254747v-0.382122h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":9.807781380268644,"y":-2.420101899027328}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M9.769569-2.254516h0.076425v-0.076424h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M9.680408-2.420102L9.769569-2.420102"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.680408-2.292728L9.769569-2.292728"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.680408-2.292728L9.42566-2.292728"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.680408-2.420102L9.42566-2.420102"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.476064-3.079698L10.323337-3.079698"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.034246-3.079698L9.876064-3.079698"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.176064-3.150607L10.034246-3.150607 10.034246-3.003334 10.323337-3.003334 10.323337-3.150607 10.176064-3.150607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R43"} schX={10.186973346246155} schY={-2.9436315380058122} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"10.0k"} schX={10.186973346246155} schY={-3.1994010107330837} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-6.750811 2.390955L-6.750811 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.750811 2.041864L-6.750811 1.790955"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.892629 2.129137L-6.603538 2.129137"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.892629 2.041864L-6.603538 2.041864"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C40"} schX={-6.688083287717374} schY={2.200046317739692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={-6.688083287717374} schY={1.981864499557874} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-10.126216-0.622778L-10.126216-0.36096"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.126216-0.273687L-10.126216-0.022778"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.984398-0.36096L-10.273489-0.36096"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.984398-0.273687L-10.273489-0.273687"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C29"} schX={-10.074397658848792} schY={-0.21368689207966796} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-10.074397658848792} schY={-0.43186871026148665} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M2.233637-0.532222L2.386364-0.532222"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.675455-0.532222L2.833637-0.532222"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.533637-0.461313L2.675455-0.461313 2.675455-0.608586 2.386364-0.608586 2.386364-0.461313 2.533637-0.461313"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R23"} schX={2.5227281148679985} schY={-0.4343376730009698} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3.0"} schX={2.5227281148679985} schY={-0.64647078209188} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M4.640052-1.018536L4.640052-0.865808"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.640052-0.576717L4.640052-0.418536"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.569143-0.718536L4.569143-0.576717 4.716416-0.576717 4.716416-0.865808 4.569143-0.865808 4.569143-0.718536"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R26"} schX={4.792482403633841} schY={-0.6421718809213033} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"3.0"} schX={4.792482403633841} schY={-0.8167173354667572} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M2.205859 1.073586L1.944041 1.073586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.856768 1.073586L1.605859 1.073586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.944041 1.215404L1.944041 0.926314"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.856768 1.215404L1.856768 0.926314"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C25"} schX={1.9004046486167852} schY={1.2917680744452378} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"270pF"} schX={1.9058591940713328} schY={0.8335862562634189} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.402478 1.519395L9.14066 1.519395"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.053387 1.519395L8.802478 1.519395"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.14066 1.661213L9.14066 1.372122"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.053387 1.661213L9.053387 1.372122"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C24"} schX={9.097023453619098} schY={1.7375763190029039} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={9.102477999073646} schY={1.279394500821085} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M3.171607-3.566466L3.171607-3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.209819-3.362668L3.209819-3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.209819-3.540991L3.375405-3.540991"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.209819-3.337193L3.375405-3.337193"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.235294-3.439092L3.375405-3.439092"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.222557-3.439092L3.286244-3.40088"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.222557-3.439092L3.286244-3.477304"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.286244-3.40088L3.286244-3.477304"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.273506-3.426355L3.273506-3.464567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.209819-3.515516L3.209819-3.566466"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.209819-3.413617L3.209819-3.464567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.375405-3.540991L3.464567-3.540991"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.464567-3.540991L3.464567-3.337193"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.464567-3.337193L3.375405-3.337193"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":-3.3371931449745276}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":-3.5409911996294596}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.464567-3.413617L3.439092-3.464567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.439092-3.464567L3.490042-3.464567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.490042-3.464567L3.464567-3.413617"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.464567-3.413617L3.490042-3.413617"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.464567-3.413617L3.439092-3.413617"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.248031-3.69384L3.502779-3.69384"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.375405-3.69384L3.375405-3.439092"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":3.3754052802223278,"y":-3.6938397406206587}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.171607-3.566466L3.120658-3.566466"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.375405-3.337193L3.375405-3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.120658-3.566466L2.86591-3.566466"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.375405-3.311718L3.375405-3.056971"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.248031-3.69384L3.248031-3.948587"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.375405-3.69384L3.375405-3.948587"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.502779-3.69384L3.502779-3.948587"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.381658-3.566466L4.381658-3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.41987-3.362668L4.41987-3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.41987-3.540991L4.585456-3.540991"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.41987-3.337193L4.585456-3.337193"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.445345-3.439092L4.585456-3.439092"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.432608-3.439092L4.496295-3.40088"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.432608-3.439092L4.496295-3.477304"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.496295-3.40088L4.496295-3.477304"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.483557-3.426355L4.483557-3.464567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.41987-3.515516L4.41987-3.566466"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.41987-3.413617L4.41987-3.464567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.585456-3.540991L4.674618-3.540991"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.674618-3.540991L4.674618-3.337193"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.674618-3.337193L4.585456-3.337193"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":4.585456229735989,"y":-3.3371931449745276}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":4.585456229735989,"y":-3.5409911996294596}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.674618-3.413617L4.649143-3.464567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143-3.464567L4.700093-3.464567"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.700093-3.464567L4.674618-3.413617"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.674618-3.413617L4.700093-3.413617"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.674618-3.413617L4.649143-3.413617"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.458082-3.69384L4.71283-3.69384"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.585456-3.69384L4.585456-3.439092"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":4.585456229735989,"y":-3.6938397406206587}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.381658-3.566466L4.330709-3.566466"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.585456-3.337193L4.585456-3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.330709-3.566466L4.075961-3.566466"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.585456-3.311718L4.585456-3.056971"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.458082-3.69384L4.458082-3.948587"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.585456-3.69384L4.585456-3.948587"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.71283-3.69384L4.71283-3.948587"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.604447 2.454642L5.604447 2.192824"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.604447 2.105551L5.604447 1.854642"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.462628 2.192824L5.751719 2.192824"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.462628 2.105551L5.751719 2.105551"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C13"} schX={5.667173775737929} schY={2.2637332098193603} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GRM188R72A104KA35D"} schX={5.667173775737929} schY={2.0455513916375425} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-8.543134-5.158184L-8.543134-5.005456"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.543134-4.716365L-8.543134-4.558184"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.614044-4.858184L-8.614044-4.716365-8.466771-4.716365-8.466771-5.005456-8.614044-5.005456-8.614044-4.858184"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R34"} schX={-8.390704256857127} schY={-4.781819866099628} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"20.0k"} schX={-8.390704256857127} schY={-4.95636532064508} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-8.534044-5.654042L-8.534044-5.392224"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.534044-5.304951L-8.534044-5.054042"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.392225-5.392224L-8.681316-5.392224"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.392225-5.304951L-8.681316-5.304951"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C39"} schX={-8.482225356857128} schY={-5.244951366373321} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.047uF"} schX={-8.482225356857128} schY={-5.463133184555138} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-8.979852-5.335608L-8.979852-5.07379"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.979852-4.986517L-8.979852-4.735608"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.838034-5.07379L-9.127125-5.07379"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.838034-4.986517L-9.127125-4.986517"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C38"} schX={-8.928033601414793} schY={-4.926516905974992} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4700pF"} schX={-8.928033601414793} schY={-5.144698724156809} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M3.87581 1.210506L3.87581 1.363233"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.87581 1.652324L3.87581 1.810506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.8049 1.510506L3.8049 1.652324 3.952173 1.652324 3.952173 1.363233 3.8049 1.363233 3.8049 1.510506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R20"} schX={4.028239698677837} schY={1.5868693418670263} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0"} schX={4.028239698677837} schY={1.4123238873215715} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M3.8849 3.10792L4.139648 3.10792"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.088698 3.146132L4.139648 3.146132"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.910375 3.146132L3.910375 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.114173 3.146132L4.114173 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.012274 3.171607L4.012274 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.012274 3.15887L4.050486 3.222557"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.012274 3.15887L3.974062 3.222557"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.050486 3.222557L3.974062 3.222557"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.025012 3.209819L3.986799 3.209819"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.93585 3.146132L3.8849 3.146132"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.037749 3.146132L3.986799 3.146132"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.910375 3.311718L3.910375 3.40088"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.910375 3.40088L4.114173 3.40088"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.114173 3.40088L4.114173 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":4.114173228346459,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":3.910375173691527,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.037749 3.40088L3.986799 3.375405"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.986799 3.375405L3.986799 3.426355"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.986799 3.426355L4.037749 3.40088"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.037749 3.40088L4.037749 3.426355"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.037749 3.40088L4.037749 3.375405"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.757527 3.184345L3.757527 3.439092"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.757527 3.311718L4.012274 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":3.7575266327003263,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.8849 3.10792L3.8849 3.056971"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.114173 3.311718L4.139648 3.311718"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.8849 3.056971L3.8849 2.802223"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.139648 3.311718L4.394396 3.311718"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.757527 3.184345L3.502779 3.184345"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.757527 3.311718L3.502779 3.311718"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.757527 3.439092L3.502779 3.439092"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.418944 6.785351L12.418944 6.523533"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.418944 6.43626L12.418944 6.185351"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.277126 6.523533L12.566217 6.523533"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.277126 6.43626L12.566217 6.43626"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C41"} schX={12.481671228262243} schY={6.594441871236684} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10µF"} schX={12.481671228262243} schY={6.376260053054866} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M0.764243-5.668133h0.254747v-0.509496h-0.254747Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.8916164891153322,"y":-5.922880963408986}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematiccircle center={{"x":0.8916164891153322,"y":-5.795507179249652}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M0.853404-6.012043h0.076425v-0.076424h-0.076425Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#0000ff"} />
      <schematicpath svgPath={"M1.01899-5.922881L0.929829-5.922881"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-6.050255L0.929829-6.050255"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-6.050255L1.273738-6.050255"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-5.922881L1.273738-5.922881"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-5.795507L0.929829-5.795507"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.01899-5.795507L1.273738-5.795507"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.203335 1.655859h2.292728v-4.967577h-2.292728Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U1"} schX={-4.203334877257987} schY={1.785859194071329} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"LM251772RHAR"} schX={-4.203334877257987} schY={-3.441718388142659} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335 1.01899L-4.458082 1.01899"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-4.3307086614173205} schY={1.0389902732746625} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VCC1"} schX={-4.103334877257987} schY={1.018990273274663} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335 0.891616L-4.458082 0.891616"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"29"} schX={-4.3307086614173205} schY={0.9116164891153291} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VCC2"} schX={-4.103334877257987} schY={0.8916164891153295} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335 1.401112L-4.458082 1.401112"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"36"} schX={-4.3307086614173205} schY={1.421111625752662} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VIN"} schX={-4.103334877257987} schY={1.4011116257526615} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-2.802223L-1.655859-2.802223"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"15"} schX={-1.7832329782306608} schY={-2.782223251505327} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"AGND"} schX={-2.0106067623899904} schY={-2.8022232515053265} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-0.509495L-1.655859-0.509495"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"23"} schX={-1.7832329782306608} schY={-0.48949513663733235} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"SW1"} schX={-2.0106067623899904} schY={-0.5094951366373337} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-1.273738L-1.655859-1.273738"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"33"} schX={-1.7832329782306608} schY={-1.2537378415933311} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"SW2"} schX={-2.0106067623899904} schY={-1.2737378415933307} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-0.382121L-1.655859-0.382121"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"24"} schX={-1.7832329782306608} schY={-0.3621213524780007} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HO1"} schX={-2.0106067623899904} schY={-0.38212135247800205} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-1.146364L-1.655859-1.146364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"32"} schX={-1.7832329782306608} schY={-1.1263640574339977} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HO2"} schX={-2.0106067623899904} schY={-1.146364057433999} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-0.636869L-1.655859-0.636869"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"25"} schX={-1.7832329782306608} schY={-0.6168689207966658} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HB1"} schX={-2.0106067623899904} schY={-0.6368689207966671} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-1.401112L-1.655859-1.401112"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"31"} schX={-1.7832329782306608} schY={-1.3811116257526646} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HB2"} schX={-2.0106067623899904} schY={-1.4011116257526641} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-0.764243L-1.655859-0.764243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"27"} schX={-1.7832329782306608} schY={-0.7442427049559992} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"LO1"} schX={-2.0106067623899904} schY={-0.7642427049560006} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-1.528485L-1.655859-1.528485"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"30"} schX={-1.7832329782306608} schY={-1.508485409911998} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"LO2"} schX={-2.0106067623899904} schY={-1.5284854099119976} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-0.891616L-4.458082-0.891616"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"11"} schX={-4.3307086614173205} schY={-0.8716164891153326} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"FLT"} schX={-4.103334877257987} schY={-0.891616489115334} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-3.184345L-4.458082-3.184345"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"38"} schX={-4.3307086614173205} schY={-3.1643446039833254} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"RST"} schX={-4.103334877257987} schY={-3.1843446039833267} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-2.674849L-4.458082-2.674849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"9"} schX={-4.3307086614173205} schY={-2.6548494673459935} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"ADDR(CFG1)"} schX={-4.103334877257987} schY={-2.674849467345993} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335 0.636869L-4.458082 0.636869"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"40"} schX={-4.3307086614173205} schY={0.6568689207966649} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"BIAS"} schX={-4.103334877257987} schY={0.6368689207966645} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-1.401112L-4.458082-1.401112"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"10"} schX={-4.3307086614173205} schY={-1.3811116257526646} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"CDC"} schX={-4.103334877257987} schY={-1.4011116257526641} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-2.420102L-4.458082-2.420102"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={-4.3307086614173205} schY={-2.4001018990273284} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"CFG2"} schX={-4.103334877257987} schY={-2.420101899027328} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-1.910607L-4.458082-1.910607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"13"} schX={-4.3307086614173205} schY={-1.8906067623899965} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"COMP"} schX={-4.103334877257987} schY={-1.910606762389996} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.910607 0.127374L-1.655859 0.127374"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"22"} schX={-1.7832329782306608} schY={0.147373784159333} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"CSA"} schX={-2.0106067623899904} schY={0.12737378415933254} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607 0L-1.655859 0"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"21"} schX={-1.7832329782306608} schY={0.019999999999999574} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"CSB"} schX={-2.0106067623899904} schY={0} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-1.910607L-1.655859-1.910607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"35"} schX={-1.7832329782306608} schY={-1.8906067623899965} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"DRV1"} schX={-2.0106067623899904} schY={-1.910606762389996} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-1.655859L-4.458082-1.655859"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={-4.3307086614173205} schY={-1.6358591940713296} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"DTRK"} schX={-4.103334877257987} schY={-1.6558591940713292} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335 0.382121L-4.458082 0.382121"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"37"} schX={-4.3307086614173205} schY={0.4021213524779981} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"EN/UVLO"} schX={-4.103334877257987} schY={0.3821213524779976} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.910607 0.891616L-1.655859 0.891616"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"14"} schX={-1.7832329782306608} schY={0.9116164891153291} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"FB/INT"} schX={-2.0106067623899904} schY={0.8916164891153295} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-1.146364L-4.458082-1.146364"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"16"} schX={-4.3307086614173205} schY={-1.1263640574339977} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"ILIMCOMP"} schX={-4.103334877257987} schY={-1.146364057433999} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.910607 0.382121L-1.655859 0.382121"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"19"} schX={-1.7832329782306608} schY={0.4021213524779981} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"ISNSN"} schX={-2.0106067623899904} schY={0.3821213524779976} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607 0.509495L-1.655859 0.509495"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"20"} schX={-1.7832329782306608} schY={0.5294951366373315} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"ISNSP"} schX={-2.0106067623899904} schY={0.509495136637331} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.203335 0L-4.458082 0"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={-4.3307086614173205} schY={0.019999999999999574} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"MODE"} schX={-4.103334877257987} schY={0} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-2.929597L-4.458082-2.929597"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"12"} schX={-4.3307086614173205} schY={-2.9095970356646603} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"RT"} schX={-4.103334877257987} schY={-2.92959703566466} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-0.509495L-4.458082-0.509495"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={-4.3307086614173205} schY={-0.48949513663733235} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"SCL"} schX={-4.103334877257987} schY={-0.5094951366373337} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-0.636869L-4.458082-0.636869"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.203335-0.636869L-4.289937-0.686869-4.289937-0.586869Z"} strokeWidth={0.006666666666666667} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematicpath svgPath={"M-4.389937-0.636869L-4.303335-0.586869-4.303335-0.686869Z"} strokeWidth={0.006666666666666667} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"5"} schX={-4.3307086614173205} schY={-0.6168689207966658} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"SDA"} schX={-4.103334877257987} schY={-0.6368689207966671} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-2.165354L-4.458082-2.165354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={-4.3307086614173205} schY={-2.1453543307086615} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"SS/ATRK"} schX={-4.103334877257987} schY={-2.165354330708661} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.203335-0.254748L-4.458082-0.254748"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={-4.3307086614173205} schY={-0.23474756831866728} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"SYNC"} schX={-4.103334877257987} schY={-0.2547475683186686} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.910607 1.401112L-1.655859 1.401112"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"18"} schX={-1.7832329782306608} schY={1.421111625752662} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VOUT"} schX={-2.0106067623899904} schY={1.4011116257526615} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-2.292728L-1.675859-2.292728"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-1.6558591940713292,"y":-2.2927281148679945}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"26"} schX={-1.7832329782306608} schY={-2.272728114867995} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"NC"} schX={-2.0106067623899904} schY={-2.2927281148679945} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-2.420102L-1.675859-2.420102"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-1.6558591940713292,"y":-2.420101899027328}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"34"} schX={-1.7832329782306608} schY={-2.4001018990273284} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"NC"} schX={-2.0106067623899904} schY={-2.420101899027328} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-2.547476L-1.675859-2.547476"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-1.6558591940713292,"y":-2.5474756831866614}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"39"} schX={-1.7832329782306608} schY={-2.527475683186662} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"NC"} schX={-2.0106067623899904} schY={-2.5474756831866614} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-2.929597L-1.655859-2.929597"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"17"} schX={-1.7832329782306608} schY={-2.9095970356646603} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"AGND"} schX={-2.0106067623899904} schY={-2.92959703566466} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-3.056971L-1.655859-3.056971"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"41"} schX={-1.7832329782306608} schY={-3.0369708198239938} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"GND"} schX={-2.0106067623899904} schY={-3.0569708198239933} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.910607-3.184345L-1.655859-3.184345"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"28"} schX={-1.7832329782306608} schY={-3.1643446039833254} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"PGND"} schX={-2.0106067623899904} schY={-3.1843446039833267} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.152385-0.509495L-4.203335-0.48402-4.203335-0.53497-4.152385-0.509495"} strokeWidth={0.02} strokeColor={"#a90000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.180153 2.793132L3.918335 2.793132"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.831062 2.793132L3.580153 2.793132"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.918335 2.934951L3.918335 2.64586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.831062 2.934951L3.831062 2.64586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C42"} schX={3.874698303086447} schY={3.0113141605962355} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4700pF"} schX={3.8801528485409946} schY={2.5531323424144166} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M2.106263-3.589193L2.258991-3.589193"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.548082-3.589193L2.706263-3.589193"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.406263-3.518284L2.548082-3.518284 2.548082-3.665557 2.258991-3.665557 2.258991-3.518284 2.406263-3.518284"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R32"} schX={2.3953543307086633} schY={-3.4913084928249596} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3.9"} schX={2.3953543307086633} schY={-3.7034416019158716} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M2.106263-4.735557L2.258991-4.735557"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.548082-4.735557L2.706263-4.735557"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.406263-4.664648L2.548082-4.664648 2.548082-4.811921 2.258991-4.811921 2.258991-4.664648 2.406263-4.664648"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R33"} schX={2.3953543307086633} schY={-4.637672550258959} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3.9"} schX={2.3953543307086633} schY={-4.849805659349869} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M2.802223-4.316618L2.802223-4.054799"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.802223-3.967527L2.802223-3.716618"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.944041-4.054799L2.654951-4.054799"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.944041-3.967527L2.654951-3.967527"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C43"} schX={2.854041433323509} schY={-3.9075266327003266} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"680pF"} schX={2.854041433323509} schY={-4.1257084508821436} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M4.012274-4.316618L4.012274-4.054799"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.012274-3.967527L4.012274-3.716618"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.154092-4.054799L3.865001-4.054799"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.154092-3.967527L3.865001-3.967527"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C44"} schX={4.064092382837174} schY={-3.9075266327003266} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"680pF"} schX={4.064092382837174} schY={-4.1257084508821436} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M8.015609-2.856971h0.4v-0.4h-0.4Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"RT1"} schX={8.01560907827698} schY={-2.7269708198239933} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"10k"} schX={8.01560907827698} schY={-3.3869708198239934} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M8.342983-3.056971L8.470357-3.056971"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={8.406669754515981} schY={-3.0369708198239938} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M8.088235-3.056971L7.960862-3.056971"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={8.024548402037986} schY={-3.0369708198239938} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M2.014799-0.518586L1.75298-0.518586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.665708-0.518586L1.414799-0.518586"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.75298-0.376768L1.75298-0.665859"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.665708-0.376768L1.665708-0.665859"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C30"} schX={1.7093439723777841} schY={-0.30040422754642293} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"680pF"} schX={1.7147985178323317} schY={-0.7585860457282418} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M4.649143-1.578081L4.649143-1.316263"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.649143-1.22899L4.649143-0.978081"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.790961-1.316263L4.50187-1.316263"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.790961-1.22899L4.50187-1.22899"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C32"} schX={4.700961303633839} schY={-1.1689902732746642} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1000pF"} schX={4.700961303633839} schY={-1.387172091456483} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M1.146364 3.290042L1.146364 3.490042"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.046364 3.590042L1.056267 3.546653 1.084015 3.511859 1.124112 3.492549 1.168616 3.492549 1.208713 3.511859 1.236461 3.546653 1.246364 3.590042"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP5"} schX={1.146364057433999} schY={3.615041685965723} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-1.401112 4.203335L-1.411112 3.873335"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.631112 3.873335L-1.191112 3.873335"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.581112 3.793335L-1.241112 3.793335"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.471112 3.723335L-1.351112 3.723335"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-1.4311116257526564} schY={3.6033348772579883} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.616721 2.611163L9.606721 2.281163"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.386721 2.281163L9.826721 2.281163"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.436721 2.201163L9.776721 2.201163"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.546721 2.131163L9.666721 2.131163"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={9.586720704029648} schY={2.0111625752663267} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-5.54076 2.547476L-5.55076 2.217476"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.77076 2.217476L-5.33076 2.217476"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.72076 2.137476L-5.38076 2.137476"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.61076 2.067476L-5.49076 2.067476"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-5.570759610930985} schY={1.947475683186659} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.254748 2.356415L-0.264748 2.026415"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.484748 2.026415L-0.044748 2.026415"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.434748 1.946415L-0.094748 1.946415"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.324748 1.876415L-0.204748 1.876415"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-0.2847475683186609} schY={1.7564150069476598} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M11.654701 3.248031L11.644701 2.918031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.424701 2.918031L11.864701 2.918031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.474701 2.838031L11.814701 2.838031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.584701 2.768031L11.704701 2.768031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={11.624701250578976} schY={2.6480314960629903} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-3.375405 2.165354L-3.385405 1.835354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.605405 1.835354L-3.165405 1.835354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.555405 1.755354L-3.215405 1.755354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.445405 1.685354L-3.325405 1.685354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-3.405405280222322} schY={1.5653543307086597} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-6.177629 2.037981L-6.187629 1.707981"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.407629 1.707981L-5.967629 1.707981"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.357629 1.627981L-6.017629 1.627981"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.247629 1.557981L-6.127629 1.557981"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-6.207628531727648} schY={1.4379805465493263} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-10.890459 1.910607L-10.900459 1.580607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.120459 1.580607L-10.680459 1.580607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.070459 1.500607L-10.730459 1.500607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.960459 1.430607L-10.840459 1.430607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-10.92045854562297} schY={1.3106067623899937} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M6.941871 1.910607L6.931871 1.580607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.711871 1.580607L7.151871 1.580607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.761871 1.500607L7.101871 1.500607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.871871 1.430607L6.991871 1.430607"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={6.911871236683655} schY={1.3106067623899937} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-2.420102 2.165354L-2.430102 1.835354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.650102 1.835354L-2.210102 1.835354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.600102 1.755354L-2.260102 1.755354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.490102 1.685354L-2.370102 1.685354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-2.450101899027324} schY={1.5653543307086597} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.891616 0.955303L-0.901616 0.625303"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.121616 0.625303L-0.681616 0.625303"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.071616 0.545303L-0.731616 0.545303"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.961616 0.475303L-0.841616 0.475303"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-0.9216164891153262} schY={0.3553033811949975} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-6.050255 0.82793L-6.060255 0.49793"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.280255 0.49793L-5.840255 0.49793"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.230255 0.41793L-5.890255 0.41793"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.120255 0.34793L-6.000255 0.34793"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-6.080254747568315} schY={0.22792959703566407} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M12.482631 1.655859L12.472631 1.325859"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.252631 1.325859L12.692631 1.325859"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.302631 1.245859L12.642631 1.245859"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.412631 1.175859L12.532631 1.175859"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={12.452630847614639} schY={1.0558591940713287} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.145206 0.127374L-11.155206-0.202626"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.375206-0.202626L-10.935206-0.202626"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.325206-0.282626L-10.985206-0.282626"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.215206-0.352626L-11.095206-0.352626"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-11.175206113941638} schY={-0.472626215840668} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-9.489347-0.382121L-9.499347-0.712121"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.719347-0.712121L-9.279347-0.712121"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.669347-0.792121L-9.329347-0.792121"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.559347-0.862121L-9.439347-0.862121"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-9.519346919870308} schY={-0.9821213524780017} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.145206-1.082677L-11.155206-1.412677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.375206-1.412677L-10.935206-1.412677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.325206-1.492677L-10.985206-1.492677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.215206-1.562677L-11.095206-1.562677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-11.175206113941638} schY={-1.6826771653543329} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.01899-2.86591L1.00899-3.19591"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.78899-3.19591L1.22899-3.19591"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.83899-3.27591L1.17899-3.27591"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.94899-3.34591L1.06899-3.34591"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={0.9889902732746663} schY={-3.4659101435849937} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.145206-2.356415L-11.155206-2.686415"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.375206-2.686415L-10.935206-2.686415"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.325206-2.766415L-10.985206-2.766415"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.215206-2.836415L-11.095206-2.836415"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-11.175206113941638} schY={-2.9564150069476636} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-1.528485-3.948587L-1.538485-4.278587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.758485-4.278587L-1.318485-4.278587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.708485-4.358587L-1.368485-4.358587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.598485-4.428587L-1.478485-4.428587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-1.5584854099119916} schY={-4.548587308939325} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-1.01899-3.948587L-1.02899-4.278587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.24899-4.278587L-0.80899-4.278587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.19899-4.358587L-0.85899-4.358587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.08899-4.428587L-0.96899-4.428587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-1.0489902732746614} schY={-4.548587308939325} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.840204-3.948587L-4.850204-4.278587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.070204-4.278587L-4.630204-4.278587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.020204-4.358587L-4.680204-4.358587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.910204-4.428587L-4.790204-4.428587"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-4.870203798054652} schY={-4.548587308939325} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M3.630153-4.203335L3.620153-4.533335"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.400153-4.533335L3.840153-4.533335"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.450153-4.613335L3.790153-4.613335"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.560153-4.683335L3.680153-4.683335"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={3.600152848540997} schY={-4.803334877257992} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-2.611163-4.649143L-2.621163-4.979143"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.841163-4.979143L-2.401163-4.979143"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.791163-5.059143L-2.451163-5.059143"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.681163-5.129143L-2.561163-5.129143"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-2.641162575266325} schY={-5.249143121815656} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-2.993284-4.649143L-3.003284-4.979143"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.223284-4.979143L-2.783284-4.979143"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.173284-5.059143L-2.833284-5.059143"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.063284-5.129143L-2.943284-5.129143"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-3.0232839277443233} schY={-5.249143121815656} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-10.954145-4.585456L-10.964145-4.915456"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.184145-4.915456L-10.744145-4.915456"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.134145-4.995456L-10.794145-4.995456"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.024145-5.065456L-10.904145-5.065456"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-10.984145437702637} schY={-5.1854562297359905} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-3.69384-6.103752L-3.81384-6.194794"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.69384-6.103752L-3.57384-6.194794"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.69384-6.103752L-3.69384-6.305002"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VBUS"} schX={-3.6938397406206533} schY={-6.0750023158869855} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-5.604447-7.196619L-5.614447-7.526619"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.834447-7.526619L-5.394447-7.526619"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.784447-7.606619L-5.444447-7.606619"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.674447-7.676619L-5.554447-7.676619"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-5.6344465030106505} schY={-7.796618805002316} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.528485-8.215609L1.518485-8.545609"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.298485-8.545609L1.738485-8.545609"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.348485-8.625609L1.688485-8.625609"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.458485-8.695609L1.578485-8.695609"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={1.498485409912} schY={-8.81560907827698} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-6.750811 0.82793L-6.760811 0.49793"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.980811 0.49793L-6.540811 0.49793"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.930811 0.41793L-6.590811 0.41793"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.820811 0.34793L-6.700811 0.34793"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-6.780810560444648} schY={0.22792959703566407} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-8.725104-5.413386L-8.735104-5.743386"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.955104-5.743386L-8.515104-5.743386"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.905104-5.823386L-8.565104-5.823386"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.795104-5.893386L-8.675104-5.893386"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-8.75510421491431} schY={-6.013385826771655} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.145206-6.305002L-11.155206-6.635002"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.375206-6.635002L-10.935206-6.635002"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.325206-6.715002L-10.985206-6.715002"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.215206-6.785002L-11.095206-6.785002"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-11.175206113941638} schY={-6.905002315886987} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-5.795507-1.464799L-5.805507-1.794799"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.025507-1.794799L-5.585507-1.794799"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.975507-1.874799L-5.635507-1.874799"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.865507-1.944799L-5.745507-1.944799"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-5.82550717924965} schY={-2.0647985178323296} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.382121-8.215609L-0.392121-8.545609"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.612121-8.545609L-0.172121-8.545609"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.562121-8.625609L-0.222121-8.625609"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.452121-8.695609L-0.332121-8.695609"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-0.41212135247799253} schY={-8.81560907827698} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.382121-6.687124L-0.392121-7.017124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.612121-7.017124L-0.172121-7.017124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.562121-7.097124L-0.222121-7.097124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.452121-7.167124L-0.332121-7.167124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-0.41212135247799253} schY={-7.287123668364988} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.528485-6.687124L1.518485-7.017124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.298485-7.017124L1.738485-7.017124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.348485-7.097124L1.688485-7.097124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.458485-7.167124L1.578485-7.167124"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={1.498485409912} schY={-7.287123668364988} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M8.279296-8.725104L8.269296-9.055104"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.049296-9.055104L8.489296-9.055104"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.099296-9.135104L8.439296-9.135104"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.209296-9.205104L8.329296-9.205104"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={8.249295970356652} schY={-9.32510421491431} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M8.151922-6.941871L8.141922-7.271871"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.921922-7.271871L8.361922-7.271871"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.971922-7.351871L8.311922-7.351871"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.081922-7.421871L8.201922-7.421871"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={8.121922186197317} schY={-7.541871236683653} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M8.151922-5.922881L8.481922-5.932881"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.481922-6.152881L8.481922-5.712881"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.561922-6.102881L8.561922-5.762881"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.631922-5.992881L8.631922-5.872881"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={8.751922186197312} schY={-5.9528809634089885} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M8.279296-7.706114L8.609296-7.716114"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.609296-7.936114L8.609296-7.496114"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.689296-7.886114L8.689296-7.546114"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.759296-7.776114L8.759296-7.656114"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={8.879295970356647} schY={-7.736113941639649} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M10.572024-6.177629L10.626024-6.069629 11.542957-6.069629 11.542957-6.285629 10.626024-6.285629Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgba(255, 255, 255, 0.6)"} />
      <schematictext text={"HV_VSYS"} schX={10.662024085224644} schY={-6.1776285317276525} fontSize={0.18} color={"rgb(132, 0, 0)"} anchor="bottom_left" schRotation={0} />
      <schematicpath svgPath={"M10.572024-7.960862L10.626024-7.852862 11.210557-7.852862 11.210557-8.068862 10.626024-8.068862Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgba(255, 255, 255, 0.6)"} />
      <schematictext text={"PPHV"} schX={10.662024085224644} schY={-7.960861509958315} fontSize={0.18} color={"rgb(132, 0, 0)"} anchor="bottom_left" schRotation={0} />
      <schematicpath svgPath={"M-0.764243-7.451366L-0.818243-7.559366-1.285309-7.559366-1.285309-7.343366-0.818243-7.343366Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgba(255, 255, 255, 0.6)"} />
      <schematictext text={"SDA"} schX={-0.8542427049559969} schY={-7.451366373320983} fontSize={0.18} color={"rgb(132, 0, 0)"} anchor="bottom_right" schRotation={0} />
      <schematicpath svgPath={"M1.146364-7.451366L1.092364-7.559366 0.645297-7.559366 0.645297-7.343366 1.092364-7.343366Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgba(255, 255, 255, 0.6)"} />
      <schematictext text={"SCL"} schX={1.0563640574339992} schY={-7.451366373320983} fontSize={0.18} color={"rgb(132, 0, 0)"} anchor="bottom_right" schRotation={0} />
      <schematicpath svgPath={"M12.737378 7.196619L12.791378 7.304619 13.375912 7.304619 13.375912 7.088619 12.791378 7.088619Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgba(255, 255, 255, 0.6)"} />
      <schematictext text={"PPHV"} schX={12.827378415933303} schY={7.196618805002315} fontSize={0.18} color={"rgb(132, 0, 0)"} anchor="bottom_left" schRotation={0} />
      <schematicpath svgPath={"M-7.196619-0.573182L-7.206619-0.903182"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.426619-0.903182L-6.986619-0.903182"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.376619-0.983182L-7.036619-0.983182"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.266619-1.053182L-7.146619-1.053182"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"AGND"} schX={-7.226618805002314} schY={-1.173182028717001} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.336267 4.075961L-11.390267 3.967961-12.3072 3.967961-12.3072 4.183961-11.390267 4.183961Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgba(255, 255, 255, 0.6)"} />
      <schematictext text={"HV_VSYS"} schX={-11.426266790180637} schY={4.0759610930986545} fontSize={0.18} color={"rgb(132, 0, 0)"} anchor="bottom_right" schRotation={0} />
      <schematicpath svgPath={"M9.680408-4.71283L9.670408-5.04283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.450408-5.04283L9.890408-5.04283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.500408-5.12283L9.840408-5.12283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.610408-5.19283L9.730408-5.19283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={9.65040759610931} schY={-5.312830013895324} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M10.189903-2.037981L10.179903-2.367981"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.959903-2.367981L10.399903-2.367981"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.009903-2.447981L10.349903-2.447981"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.119903-2.517981L10.239903-2.517981"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={10.159902732746644} schY={-2.637980546549331} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M7.897175-3.439092L7.887175-3.769092"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.667175-3.769092L8.107175-3.769092"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.717175-3.849092L8.057175-3.849092"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.827175-3.919092L7.947175-3.919092"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={7.8671746178786535} schY={-4.039092172301993} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M12.418944 6.55975L12.408944 6.22975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.188944 6.22975L12.628944 6.22975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.238944 6.14975L12.578944 6.14975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.348944 6.07975L12.468944 6.07975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={12.388943955534973} schY={5.9597498842056496} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematictext text={"5"} schX={-1.6558591940713274} schY={4.521769337656318} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"4"} schX={-1.528485409911994} schY={4.521769337656318} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"1"} schX={-1.1463640574339937} schY={4.521769337656318} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"2"} schX={-1.2737378415933271} schY={4.5217693376563215} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"3"} schX={-1.4011116257526606} schY={4.521769337656318} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"JP2"} schX={-2.1016674386289935} schY={4.712830013895319} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"5"} schX={-11.782075034738304} schY={2.5474756831866587} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4"} schX={-11.782075034738304} schY={2.674849467345992} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1"} schX={-11.782075034738304} schY={3.0569708198239907} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-11.782075034738304} schY={2.929597035664659} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={-11.782075034738304} schY={2.8022232515053256} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"6"} schX={-11.782075034738304} schY={2.4201018990273244} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"J3"} schX={-12.1641963872163} schY={3.184344603983324} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"5"} schX={12.737378415933303} schY={2.5474756831866587} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4"} schX={12.737378415933303} schY={2.674849467345992} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1"} schX={12.737378415933303} schY={3.0569708198239907} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={12.737378415933303} schY={2.929597035664659} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={12.737378415933303} schY={2.8022232515053256} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"6"} schX={12.737378415933303} schY={2.4201018990273244} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"J4"} schX={12.8520148216767} schY={3.184344603983324} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-11.272579898100968} schY={0.12737378415933254} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-11.272579898100968} schY={0.2547475683186642} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={-11.272579898100968} schY={0.3821213524779976} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP4"} schX={-11.65470125057897} schY={0.509495136637331} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-11.272579898100968} schY={-1.0826771653543314} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-11.272579898100968} schY={-0.955303381194998} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={-11.272579898100968} schY={-0.8279295970356646} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP5"} schX={-11.65470125057897} schY={-0.700555812876333} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-0.764242704955997} schY={-6.305002315886986} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-0.764242704955997} schY={-6.432376100046319} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP8"} schX={-1.1463640574339955} schY={-6.1776285317276525} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-11.208893006021302} schY={-4.458082445576656} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-11.208893006021302} schY={-4.330708661417322} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={-11.208893006021302} schY={-4.203334877257991} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP7"} schX={-11.5910143584993} schY={-4.075961093098657} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-4.3307086614173205} schY={-6.559749884205653} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-5.094951366373319} schY={-6.559749884205653} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={-4.3307086614173205} schY={-6.687123668364986} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4"} schX={-5.094951366373319} schY={-6.687123668364986} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"5"} schX={-4.3307086614173205} schY={-6.814497452524318} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"6"} schX={-5.094951366373319} schY={-6.814497452524318} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"7"} schX={-4.3307086614173205} schY={-6.941871236683651} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"8"} schX={-5.094951366373319} schY={-6.941871236683651} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"9"} schX={-4.3307086614173205} schY={-7.069245020842983} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"10"} schX={-5.094951366373319} schY={-7.069245020842983} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"J12"} schX={-4.967577582213984} schY={-6.432376100046319} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4"} schX={0.1910606762390028} schY={4.012274201018988} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"Q2"} schX={3.552713678800501e-15} schY={4.649143121815653} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ISZ034N06LM5ATMA1"} schX={-0.4458082445576643} schY={4.521769337656321} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-0.764242704955997} schY={-7.8334877257989834} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-0.764242704955997} schY={-7.960861509958315} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP10"} schX={-1.1463640574339955} schY={-7.70611394163965} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4"} schX={0.2547475683186686} schY={2.92959703566466} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"Q4"} schX={3.552713678800501e-15} schY={3.5664659564613235} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ISZ034N06LM5ATMA1"} schX={-0.5094951366373301} schY={3.439092172301992} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4"} schX={0.6368689207966689} schY={-2.165354330708661} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"Q6"} schX={0.7005558128763312} schY={-1.8469198703103302} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ISZ034N06LM5ATMA1"} schX={1.273737841593336} schY={-2.8659101435849905} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={-90} />
      <schematictext text={"1"} schX={1.146364057433999} schY={-7.8334877257989834} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={1.146364057433999} schY={-7.960861509958315} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP11"} schX={0.7642427049560041} schY={-7.70611394163965} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-11.272579898100968} schY={-6.1776285317276525} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-11.272579898100968} schY={-6.305002315886986} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"J11"} schX={-11.65470125057897} schY={-6.050254747568319} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-11.208893006021302} schY={1.018990273274663} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-11.208893006021302} schY={1.1463640574339964} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={-11.208893006021302} schY={1.273737841593328} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP3"} schX={-11.5910143584993} schY={1.4011116257526615} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={6.496062992125985} schY={5.34969893469199} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"2"} schX={6.62343677628532} schY={5.34969893469199} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"3"} schX={6.750810560444653} schY={5.349698934691986} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"JP1"} schX={6.305002315886988} schY={5.7955071792496495} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"-"} schX={7.808012968967116} schY={-5.770032422417788} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"+"} schX={7.808012968967116} schY={-6.024779990736453} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"MNT_1"} schX={7.808012968967116} schY={-6.406901343214452} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"MNT_2"} schX={7.808012968967116} schY={-6.661648911533117} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"J9"} schX={7.260305697081986} schY={-5.668133395090319} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-11.272579898100968} schY={-2.2290412227883305} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-11.272579898100968} schY={-2.356415006947664} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP6"} schX={-11.65470125057897} schY={-2.101667438628997} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={8.279295970356646} schY={6.687123668364982} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={9.298286243631313} schY={6.687123668364982} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={8.78879110699398} schY={6.559749884205644} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"D1"} schX={8.39393237610005} schY={6.827234830940248} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"BAS70-04-E3-18"} schX={8.852477999073646} schY={6.368689207966648} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={8.572255673923113} schY={-1.1208893006021334} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"3"} schX={8.572255673923113} schY={-1.3756368689207985} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"5"} schX={8.572255673923113} schY={-1.6303844372394654} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"7"} schX={8.572255673923113} schY={-1.8851320055581287} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"9"} schX={8.572255673923113} schY={-2.1398795738767955} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"J7"} schX={8.279295970356653} schY={-1.0189902732746656} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2"} schX={8.572255673923113} schY={-3.5409911996294596} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"4"} schX={8.572255673923113} schY={-3.7957387679481247} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"6"} schX={8.572255673923113} schY={-4.0504863362667916} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"8"} schX={8.572255673923113} schY={-4.305233904585458} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"10"} schX={8.572255673923113} schY={-4.559981472904125} fontSize={0.12737378415933304} color={"#000080"} anchor="top_right" schRotation={0} />
      <schematictext text={"J7"} schX={8.279295970356653} schY={-3.4390921723019936} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={9.553033811949977} schY={-2.2927281148679945} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={9.553033811949977} schY={-2.420101899027328} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP12"} schX={9.667670217693374} schY={-2.674849467345993} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4"} schX={2.9932839277443257} schY={-3.566465956461327} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1"} schX={3.2480314960629926} schY={-3.8212135247799885} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"2"} schX={3.3754052802223296} schY={-3.821213524779992} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"3"} schX={3.5027790643816594} schY={-3.821213524779992} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"Q7"} schX={3.056970819823995} schY={-3.2480314960629926} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ISC0703NLSATMA1"} schX={3.6938397406206605} schY={-3.884900416859658} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={-90} />
      <schematictext text={"4"} schX={4.203334877257991} schY={-3.566465956461327} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1"} schX={4.458082445576659} schY={-3.8212135247799957} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"2"} schX={4.585456229735989} schY={-3.8212135247799885} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"3"} schX={4.712830013895326} schY={-3.821213524779992} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"Q8"} schX={4.26702176933766} schY={-3.2480314960629926} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ISC0703NLSATMA1"} schX={4.751042149143128} schY={-3.5537285780453924} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4"} schX={3.884900416859659} schY={2.92959703566466} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"1"} schX={3.630152848540991} schY={3.184344603983324} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={3.630152848540991} schY={3.3117183881426584} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={3.630152848540991} schY={3.439092172301992} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"Q5"} schX={3.884900416859658} schY={3.5664659564613235} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ISC0703NLSATMA1"} schX={3.884900416859658} schY={3.439092172301992} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={1.146364057433999} schY={-6.050254747568319} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={1.146364057433999} schY={-5.922880963408986} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={1.146364057433999} schY={-5.795507179249652} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP9"} schX={0.7642427049560041} schY={-5.668133395090319} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"VCC2"} schX={-1.8893777983634372} schY={4.458082445576653} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"FB"} schX={-1.9742936544696619} schY={4.330708661417321} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VIN"} schX={-10.402192373012193} schY={3.757526632700321} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VOUT"} schX={12.758607379959866} schY={3.8212135247799894} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"FB"} schX={-1.4011116257526623} schY={1.5921723019916607} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HO1_G"} schX={0.1910606762390028} schY={2.738536359425659} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={90} />
      <schematictext text={"VIN"} schX={-10.784313725490193} schY={1.3374247336729939} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HO2_G"} schX={3.821213524779994} schY={2.2927281148679945} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={90} />
      <schematictext text={"VCC1"} schX={-5.073722402346764} schY={1.0826771653543288} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ISNSP"} schX={-1.2737378415933271} schY={0.5731820287169969} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VIN"} schX={-10.84800061756986} schY={0.44580824455766344} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ISNSN"} schX={-1.2737378415933271} schY={0.44580824455766344} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CSA/SW1"} schX={-1.1888219854871025} schY={0.19106067623899836} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"MODE"} schX={-4.627914157789098} schY={0.06368689207966582} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CSB"} schX={-1.3586536976995518} schY={0.06368689207966582} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HO1"} schX={-1.3586536976995518} schY={-0.31843446039833445} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SW1"} schX={-1.3586536976995518} schY={-0.4458082445576661} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HB1"} schX={-1.3586536976995518} schY={-0.5731820287169995} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"LO1"} schX={-1.3586536976995518} schY={-0.700555812876333} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VCC2"} schX={-10.869229581596414} schY={-0.7642427049560006} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HO2"} schX={-1.3586536976995518} schY={-1.0826771653543314} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SW2"} schX={-1.3586536976995518} schY={-1.2100509495136649} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HB2"} schX={-1.3586536976995518} schY={-1.337424733673} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"LO2"} schX={-1.3586536976995518} schY={-1.4647985178323335} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"DTRK"} schX={-4.56422726570943} schY={-1.5921723019916634} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"LO1_G"} schX={0.4458082445576679} schY={-2.101667438628997} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SS/ATRK"} schX={-4.627914157789098} schY={-2.101667438628997} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"LO2_G"} schX={2.674849467346} schY={-3.5027790643816594} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VCC2"} schX={-10.487108229118418} schY={-4.139647985178325} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VCC2"} schX={-5.073722402346764} schY={0.9553033811949954} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"DRV1"} schX={-1.3161957696464377} schY={-1.846919870310332} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"nRST"} schX={-4.521769337656318} schY={-3.6089238845144376} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={90} />
      <schematictext text={"VCC2"} schX={-5.774278215223093} schY={-0.8279295970356664} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SCL"} schX={-3.1206577119036556} schY={-6.198857495754208} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={90} />
      <schematictext text={"SDA"} schX={-2.738536359425657} schY={-6.198857495754208} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={90} />
      <schematictext text={"DRV1"} schX={9.892697236374868} schY={5.28601204261232} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"BIAS"} schX={-4.56422726570943} schY={0.7005558128763303} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CDC"} schX={-4.542998301682875} schY={-1.337424733673} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CFG2"} schX={-4.56422726570943} schY={-2.356415006947664} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SYNC"} schX={-4.627914157789098} schY={-0.19106067623900103} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ADDR"} schX={-4.627914157789098} schY={-2.611162575266329} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"RT"} schX={-4.521769337656318} schY={-2.8659101435849923} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"COMP"} schX={-4.627914157789098} schY={-1.846919870310332} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"EN/UVLO"} schX={-4.755287941948431} schY={0.44580824455766344} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"nFLT"} schX={-4.500540373629766} schY={-0.8279295970356664} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SCL"} schX={-4.606685193762543} schY={-0.4458082445576661} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SDA"} schX={-4.606685193762543} schY={-0.5731820287169995} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ILIMCOMP"} schX={-4.776516905974985} schY={-1.0826771653543314} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SCL"} schX={2.1441253666821076} schY={-7.387679481241316} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ADDR"} schX={1.9955226184962243} schY={-5.85919407132932} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CDC"} schX={-10.84800061756986} schY={-6.113941639647987} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"EN/UVLO"} schX={-10.678168905357417} schY={0.31843446039833} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VIN"} schX={-5.816736143276204} schY={-5.15863825845299} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SDA"} schX={0.23351860429211158} schY={-7.387679481241316} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CFG2"} schX={0.2759765323452221} schY={-5.85919407132932} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VCC2"} schX={1.7407750501775539} schY={-5.094951366373323} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"DRV1"} schX={7.982090473984872} schY={6.305002315886982} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ILIMCOMP"} schX={-9.42566002779064} schY={-4.267021769337656} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"nFLT"} schX={9.319515207657869} schY={-3.884900416859658} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VCC1_J"} schX={9.327265477844684} schY={-2.2290412227883305} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CDC"} schX={9.213370387525092} schY={-1.2100509495136649} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"EN/UVLO"} schX={9.383202099737534} schY={-1.7195460861509986} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SDA"} schX={9.213370387525092} schY={-4.139647985178325} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"SCL"} schX={9.213370387525092} schY={-4.39439555349699} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VCC1"} schX={9.319515207657869} schY={-2.356415006947664} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"PDCTRL_GOOD"} schX={9.553033811949977} schY={-1.4647985178323335} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"PTC"} schX={9.213370387525092} schY={-3.630152848540991} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VIN"} schX={2.8446811795584424} schY={-0.4458082445576661} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VOUT1"} schX={-10.699397869383972} schY={1.0826771653543288} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VOUT1"} schX={6.432376100046319} schY={4.330708661417322} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} anchor="center" schRotation={90} />
      <schematictext text={"1"} schX={11.845761926817975} schY={-10.317276516905975} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2"} schX={12.164196387216304} schY={-10.317276516905975} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"=title"} schX={9.693144974525246} schY={-10.189902732746644} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1/25/2022"} schX={11.71838814265864} schY={-9.935155164427977} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ti-lm251772evm-pd.SchDoc"} schX={9.323761000463175} schY={-10.44465030106531} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Sheet Title:"} schX={9.081750810560447} schY={-10.189902732746644} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Size:"} schX={11.75660027790644} schY={-10.44465030106531} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Mod. Date:"} schX={11.10699397869384} schY={-9.935155164427977} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"File:"} schX={9.081750810560447} schY={-10.44465030106531} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Sheet:"} schX={11.501852709587773} schY={-10.317276516905975} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"of"} schX={11.998610467809169} schY={-10.317276516905975} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={12.036822603056972} schY={-10.44465030106531} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"http://www.ti.com"} schX={12.610004631773972} schY={-10.44465030106531} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Contact:"} schX={9.081750810560447} schY={-10.572024085224642} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"http://www.ti.com/support"} schX={9.553033811949977} schY={-10.572024085224642} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"LM251772EVM-PD"} schX={9.744094488188978} schY={-10.062528948587309} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Project Title:"} schX={9.081750810560447} schY={-10.062528948587309} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Designed for:"} schX={9.081750810560447} schY={-9.935155164427977} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Public Release"} schX={9.782306623436781} schY={-9.935155164427977} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Assembly Variant:"} schX={9.081750810560447} schY={-10.317276516905975} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"=variantName"} schX={10.02431681333951} schY={-10.317276516905975} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"© Texas Instruments"} schX={12.482630847614637} schY={-10.572024085224642} fontSize={0.10189902732746642} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2025"} schX={13.374247336729969} schY={-10.572024085224642} fontSize={0.10189902732746642} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Drawn By:"} schX={7.171144048170454} schY={-10.44465030106531} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Engineer:"} schX={7.171144048170454} schY={-10.572024085224642} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"=DrawnBy"} schX={7.706113941639654} schY={-10.44465030106531} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={""} schX={7.706113941639654} schY={-10.572024085224642} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Texas Instruments and/or its licensors do not warrant the accuracy or completeness of this specification or any information contained therein."} schX={-2.3564143700787383} schY={-10.189903369615566} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"Texas Instruments and/or its licensors do not warrant that this design will meet the specifications, will be suitable for your application or"} schX={-2.3564143700787383} schY={-10.317277153774898} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"fit for any particular purpose, or will operate in an implementation. Texas Instruments and/or its licensors do not warrant that the design is"} schX={-2.3564143700787383} schY={-10.444650937934233} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"=VersionControl_RevNumber"} schX={7.769800833719316} schY={-10.317276516905975} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"SVN Rev:"} schX={7.171144048170454} schY={-10.317276516905975} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"SR135"} schX={7.642427049559984} schY={-10.189902732746644} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Number:"} schX={7.171144048170454} schY={-10.189902732746644} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Rev:"} schX={8.444881889763781} schY={-10.189902732746644} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"B"} schX={8.78879110699398} schY={-10.189902732746644} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"TID #:"} schX={7.171144048170454} schY={-10.062528948587309} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"N/A"} schX={7.769800833719316} schY={-9.998842056507643} fontSize={0.12737378415933304} color={"#000080"} anchor="center_left" schRotation={0} />
      <schematictext text={"Orderable:"} schX={7.171144048170454} schY={-9.935155164427977} fontSize={0.12737378415933304} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"=EVM_orderable"} schX={7.769800833719316} schY={-9.871468272348308} fontSize={0.12737378415933304} color={"#000080"} anchor="center_left" schRotation={0} />
      <schematictext text={"VOUT = 5V-48V"} schX={12.610004631773972} schY={3.439092172301992} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Max. 5.0A"} schX={12.610004631773972} schY={3.3117183881426584} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"AC_A"} schX={-0.8279295970356593} schY={3.1206577119036583} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"VOUT"} schX={13.183186660490971} schY={2.929597035664659} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"S+"} schX={13.183186660490971} schY={2.738536359425658} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"AC_B"} schX={-0.8279295970356593} schY={2.6111625752663263} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"S-"} schX={13.183186660490971} schY={2.6111625752663263} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GND"} schX={13.183186660490971} schY={2.4201018990273244} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"I2C interface communication with USB2ANY:"} schX={-5.222324513663731} schY={-7.387680118110236} fontSize={0.14011116257526632} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"VBUS is not required to be connected "} schX={-5.222324513663731} schY={-7.527791280685504} fontSize={0.14011116257526632} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"USB2ANY interface has an internal 3.3V"} schX={-5.222324513663731} schY={-7.66790244326077} fontSize={0.14011116257526632} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"VBUS supply"} schX={-5.222324513663731} schY={-7.808013605836036} fontSize={0.14011116257526632} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"UVLO Levels:"} schX={-10.240852246410373} schY={0.8151922186197291} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"8.125V / 8.5V"} schX={-10.240852246410373} schY={0.6878184344603975} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"Fsw: 320kHz"} schX={-5.591709124594718} schY={-4.407132931912923} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"Set Jumper on Pin 4 -5"} schX={-1.9615562760537273} schY={5.464335340435387} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"to enable output voltage"} schX={-1.9615562760537273} schY={5.3369615562760515} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"setting via I2C"} schX={-1.9615562760537273} schY={5.209587772116718} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"CFG4"} schX={1.9742936544696654} schY={-7.578740157480317} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"CFG3"} schX={0.06368689207966938} schY={-7.578740157480317} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Connected to PD Controller Power Path"} schX={9.425660027790645} schY={-7.8334877257989834} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"System Power (High Voltage/High Current)"} schX={9.170912459471978} schY={-6.050254747568319} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"SYNC_OUT: Disable"} schX={-1.069939786938395} schY={-5.171375636868921} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"SYNC_IN_FALLING: Disable"} schX={-1.069939786938395} schY={-5.298749421028255} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"Force BIAS: Enable"} schX={-1.069939786938395} schY={-5.426123205187588} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"Reserved: Disable"} schX={-1.069939786938395} schY={-5.55349698934692} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"DC2DC EVM"} schX={7.769800833719316} schY={-0.4458082445576661} fontSize={0.4075961093098657} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Place J7B next to J7"} schX={10.202640111162577} schY={-0.140111162575268} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"to extend connector"} schX={10.202640111162577} schY={-0.26748494673460144} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"Place TMP61 part on same layer"} schX={9.565771190365911} schY={-3.388142658638259} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"and close to Inductor"} schX={9.565771190365911} schY={-3.5155164427975922} fontSize={0.12737378415933304} color={"#1f2937"} anchor="top_left" schRotation={0} />
      <schematictext text={"VIN"} schX={-12.227883279295966} schY={2.929597035664659} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_right" schRotation={0} />
      <schematictext text={"S+"} schX={-12.227883279295966} schY={2.738536359425658} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_right" schRotation={0} />
      <schematictext text={"S-"} schX={-12.227883279295966} schY={2.6111625752663263} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_right" schRotation={0} />
      <schematictext text={"GND"} schX={-12.227883279295966} schY={2.4201018990273244} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_right" schRotation={0} />
      <schematictext text={"9V - 36V"} schX={-12.291570171375632} schY={3.693839740620656} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_right" schRotation={0} />
      <schematictext text={"Max.: 14A"} schX={-12.291570171375632} schY={3.5664659564613235} fontSize={0.12737378415933304} color={"#000080"} anchor="bottom_right" schRotation={0} />
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

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
      "export const Lm251772EvmPd = () => (
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
      <via pcbX="81.0938434mm" pcbY="96.58120638mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.81830166mm" pcbY="103.40255164mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.84294981999999mm" pcbY="61.7844459mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="68.19369393999999mm" pcbY="83.35378554mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="66.66897003999999mm" pcbY="81.31689349999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="118.42109919999999mm" pcbY="56.31990006mm" holeDiameter="0.4064mm" outerDiameter="0.8635999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.0746276mm" pcbY="81.30529585999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.94930015999999mm" pcbY="46.98659894mm" holeDiameter="0.2032mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.94930015999999mm" pcbY="48.96073266mm" holeDiameter="0.2032mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.45746833999999mm" pcbY="46.98659894mm" holeDiameter="0.2032mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.45746833999999mm" pcbY="49.04775306mm" holeDiameter="0.2032mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.45746833999999mm" pcbY="54.9021mm" holeDiameter="0.2032mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.45746833999999mm" pcbY="56.728847679999994mm" holeDiameter="0.2032mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.33281222000001mm" pcbY="58.97659782mm" holeDiameter="0.2032mm" outerDiameter="0.6095999999999999mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.49279974mm" pcbY="111.15959987999999mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.49279974mm" pcbY="112.30960012000001mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.66780012mm" pcbY="112.30960012000001mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.51779988mm" pcbY="112.30960012000001mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.66780012mm" pcbY="111.15959987999999mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.51779988mm" pcbY="111.15959987999999mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.69280026mm" pcbY="111.15959987999999mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.69280026mm" pcbY="112.30960012000001mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.66780012mm" pcbY="110.33460026mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.51779988mm" pcbY="110.33460026mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.66780012mm" pcbY="113.13459973999998mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.51779988mm" pcbY="113.13459973999998mm" holeDiameter="0.19999959999999997mm" outerDiameter="0.49999899999999997mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="68.16280754mm" pcbY="58.8635983mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.4568mm" pcbY="86.60076406mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="88.4936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="78.33359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="77.0636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="75.7936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="74.5236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="73.25359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="69.4436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="68.1736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="78.33359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="77.0636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="75.7936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="74.5236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="73.25359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="69.4436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="68.1736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="89.7636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="88.4936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="87.22359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="85.9536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="84.6836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="83.4136mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.85679999999999mm" pcbY="82.14359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.57182416mm" pcbY="75.7990864mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.57182416mm" pcbY="74.5290864mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.57182416mm" pcbY="73.2590864mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.57182416mm" pcbY="69.4490864mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.57182416mm" pcbY="68.17908639999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="75.7936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="74.5236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="73.25359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="69.4436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="68.1736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="84.6836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="83.4136mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="82.14359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="78.33359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="77.0636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="84.6836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="83.4136mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="82.14359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="78.33359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="77.0636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="88.4936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="87.22359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="85.9536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="89.7636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="88.4936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="87.22359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.5868mm" pcbY="85.9536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.49827576mm" pcbY="92.32444832mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.41827576mm" pcbY="91.05444831999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.22827576mm" pcbY="91.05444831999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.03827576mm" pcbY="91.05444831999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.7768mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.7768mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.30827576mm" pcbY="91.05444831999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.2368mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.2368mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.96679999999999mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.7768mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.5068mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="89.7636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.96679999999999mm" pcbY="94.8436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.96679999999999mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.96679999999999mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.6968mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.5068mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.4268mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="96.11359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="96.11359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.4268mm" pcbY="96.11359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.6968mm" pcbY="96.11359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.4268mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="94.8436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="94.8436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.4268mm" pcbY="94.8436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.6968mm" pcbY="94.8436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8842346mm" pcbY="98.66266272mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.1542346mm" pcbY="98.66266272mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.42423459999999mm" pcbY="98.66266272mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8842346mm" pcbY="93.58266272mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.1542346mm" pcbY="93.58266272mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.42423459999999mm" pcbY="93.58266272mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.69423459999999mm" pcbY="93.58266272mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="97.3836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="97.3836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.4268mm" pcbY="97.3836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.4268mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.6968mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4368mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.96299764mm" pcbY="92.3298128mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.692997639999994mm" pcbY="92.3298128mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.42299764mm" pcbY="92.3298128mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4368mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.4970134mm" pcbY="94.87777824mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2270134mm" pcbY="94.87777824mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9570134mm" pcbY="94.87777824mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.6870134mm" pcbY="94.87777824mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4170134mm" pcbY="94.87777824mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.4970134mm" pcbY="96.14499439999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2270134mm" pcbY="96.14499439999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9570134mm" pcbY="96.14499439999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.6870134mm" pcbY="96.14499439999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4170134mm" pcbY="96.14499439999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.4970134mm" pcbY="97.41221056mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2270134mm" pcbY="97.41221056mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9570134mm" pcbY="97.41221056mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.6870134mm" pcbY="97.41221056mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4170134mm" pcbY="97.41221056mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="46.7868mm" pcbY="98.6536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.516799999999996mm" pcbY="98.6536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="98.6536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="98.6536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="98.6536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="50.596799999999995mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="49.3268mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="48.056799999999996mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="46.7868mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.516799999999996mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="99.9236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="51.8668mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="50.596799999999995mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="49.3268mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="48.056799999999996mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="46.7868mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.516799999999996mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="101.19359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4368mm" pcbY="75.7936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4368mm" pcbY="77.0636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4368mm" pcbY="78.33359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4368mm" pcbY="82.14359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.4368mm" pcbY="83.4136mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.69535984mm" pcbY="74.5326678mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.69535984mm" pcbY="75.8026678mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.69535984mm" pcbY="77.07266779999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.69535984mm" pcbY="78.3426678mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.962576mm" pcbY="73.2626678mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.962576mm" pcbY="74.5326678mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.962576mm" pcbY="75.8026678mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.962576mm" pcbY="77.07266779999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.962576mm" pcbY="78.3426678mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="73.25359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="74.5236mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="75.7936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="77.0636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="78.33359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.42814114mm" pcbY="84.70939624mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.42814114mm" pcbY="85.97939624mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.42814114mm" pcbY="87.24939624mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.42814114mm" pcbY="88.51939624mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="40.42814114mm" pcbY="89.78939624mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="82.14359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="83.4136mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="84.6836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="85.9536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="87.22359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="88.4936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.7068mm" pcbY="89.7636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="82.14359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="83.4136mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="84.6836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="85.9536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="87.22359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="88.4936mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.9768mm" pcbY="89.7636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="82.14359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="83.4136mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="84.6836mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="93.5736mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="92.3036mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="91.03359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="89.7636mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="87.22359999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="85.9536mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.5058mm" pcbY="116.68759999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="53.315798879999996mm" pcbY="47.2980004mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.06179999999999mm" pcbY="114.08409999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.4588mm" pcbY="109.32159999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.83530112mm" pcbY="106.83910051999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.4268mm" pcbY="107.1626mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="68.00401944000001mm" pcbY="81.75803561999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.9348mm" pcbY="119.6086mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.71079999999999mm" pcbY="116.1796mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.71079999999999mm" pcbY="113.7666mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="53.0098mm" pcbY="98.5266mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.7588mm" pcbY="112.75059999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.7588mm" pcbY="111.8616mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="56.74579964mm" pcbY="94.77259937999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="55.041799999999995mm" pcbY="92.4306mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="55.041799999999995mm" pcbY="97.7646mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.1558mm" pcbY="106.7816mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.07679999999999mm" pcbY="106.7816mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.71079999999999mm" pcbY="117.06859999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.71079999999999mm" pcbY="112.8776mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="77.1398mm" pcbY="119.35459999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.7608mm" pcbY="105.8926mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.8718mm" pcbY="105.2576mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.8068mm" pcbY="106.7816mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="57.8358mm" pcbY="94.8436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="59.135802479999995mm" pcbY="94.8436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="77.9018mm" pcbY="111.22659999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="77.9018mm" pcbY="108.17859999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.4268mm" pcbY="116.68759999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.5688mm" pcbY="66.11159752mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.5688mm" pcbY="67.41159999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.5058mm" pcbY="118.21159999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.5848mm" pcbY="107.5436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.0298mm" pcbY="107.1626mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.6328mm" pcbY="107.1626mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.31479999999999mm" pcbY="117.9576mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.4738mm" pcbY="120.2436mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.4588mm" pcbY="111.8616mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.4588mm" pcbY="113.2586mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.4588mm" pcbY="114.65559999999999mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.4588mm" pcbY="116.0526mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="90.34779999999999mm" pcbY="118.0846mm" holeDiameter="0.2032mm" outerDiameter="0.508mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
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
      <fabricationnotetext pcbX={110.66770094} pcbY={122.96213660000001} anchorAlignment="center" text="TP9" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={98.67826339999999} pcbY={125.70450094} anchorAlignment="center" text="TP12" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={73.6353366} pcbY={124.94269905999998} anchorAlignment="center" text="TP7" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={69.8253366} pcbY={124.94269905999998} anchorAlignment="center" text="TP10" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={114.2753366} pcbY={80.49269906} anchorAlignment="center" text="TP11" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={94.86826339999999} pcbY={125.70450094} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={114.2753366} pcbY={76.68269906} anchorAlignment="center" text="TP13" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={69.5008008} pcbY={82.67562332} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.8128} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={57.53612063999999} pcbY={85.66342277999999} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.8128} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={67.57779728} pcbY={82.91860988} anchorAlignment="bottom_left" text="RT1" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={82.82980132} pcbY={96.14259918} anchorAlignment="center" text="C44" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={82.592799} pcbY={103.07764754} anchorAlignment="center" text="C43" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={115.62079999999999} pcbY={111.7346} anchorAlignment="center" text="JP9" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={71.50459918} pcbY={81.6027959} anchorAlignment="center" text="C42" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={80.07431534} pcbY={55.57361504} anchorAlignment="bottom_left" text="C41" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={75.48459122} pcbY={84.90959396} anchorAlignment="bottom_left" text="Q5" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={78.72780037999999} pcbY={119.76459918} anchorAlignment="center" text="C39" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={82.09279492} pcbY={111.90120114000001} anchorAlignment="bottom_left" text="U1" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={81.52079962} pcbY={58.199599119999995} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={77.62704566} pcbY={59.60380256} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={80.0332664} pcbY={103.12759918} anchorAlignment="center" text="R32" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="326.1383677891deg" />
      <fabricationnotetext pcbX={81.76178719999999} pcbY={87.8086128} anchorAlignment="bottom_left" text="C13" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={87.2227872} pcbY={87.1736128} anchorAlignment="bottom_left" text="C22" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={79.98378466} pcbY={87.80861026} anchorAlignment="bottom_left" text="C10" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={84.1747872} pcbY={87.1736128} anchorAlignment="bottom_left" text="C21" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={93.31878719999999} pcbY={87.1736128} anchorAlignment="bottom_left" text="C5" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={90.27078719999999} pcbY={87.1736128} anchorAlignment="bottom_left" text="C6" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={79.75801168} pcbY={92.9885872} anchorAlignment="bottom_left" text="Q8" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={79.75801168} pcbY={99.9735872} anchorAlignment="bottom_left" text="Q7" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={84.28079918} pcbY={121.83059962} anchorAlignment="center" text="R29" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={82.88379918} pcbY={118.90959962} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={84.73080082} pcbY={117.25960038} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={81.48679918} pcbY={118.90959962} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={83.17179962} pcbY={121.99260081999999} anchorAlignment="center" text="C36" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={83.17179962} pcbY={120.46860081999999} anchorAlignment="center" text="C34" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={88.84679969999999} pcbY={105.08860109999999} anchorAlignment="center" text="C29" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={66.36897064} pcbY={81.14359945999999} anchorAlignment="center" text="R43" font="tscircuit2024" fontSize={0.51999896} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={76.7358003} pcbY={114.57059890000001} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={76.7358003} pcbY={116.3485989} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={52.78479918} pcbY={99.35159962} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={71.6788} pcbY={62.2655981} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={46.335800139999996} pcbY={80.0869874} anchorAlignment="bottom_left" text="C17" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={46.335800139999996} pcbY={70.94298739999999} anchorAlignment="bottom_left" text="C18" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={46.335800139999996} pcbY={61.798987399999994} anchorAlignment="bottom_left" text="C19" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={47.0207848} pcbY={86.42858508} anchorAlignment="bottom_left" text="C20" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={47.0207848} pcbY={89.60358508} anchorAlignment="bottom_left" text="C14" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={47.1477848} pcbY={93.00358336} anchorAlignment="bottom_left" text="C9" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={49.17878658} pcbY={96.94961052} anchorAlignment="bottom_left" text="C40" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={51.415800139999995} pcbY={97.35859878} anchorAlignment="bottom_left" text="C12" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={54.216800379999995} pcbY={97.53959918} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={54.4838128} pcbY={95.14758212} anchorAlignment="bottom_left" text="Q2" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={54.216800379999995} pcbY={92.20559918} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={54.4838128} pcbY={89.81358211999999} anchorAlignment="bottom_left" text="Q4" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={90.12279918} pcbY={118.90959962} anchorAlignment="center" text="R36" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={78.60780062} pcbY={62.07459772} anchorAlignment="center" text="Q3" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={65.58279999999999} pcbY={124.81559999999999} anchorAlignment="center" text="JP12" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={112.5728} pcbY={84.1756} anchorAlignment="center" text="JP1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={102.41279999999999} pcbY={124.81559999999999} anchorAlignment="center" text="JP7" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={113.8428} pcbY={107.0356} anchorAlignment="center" text="JP8" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={115.62079999999999} pcbY={119.4816} anchorAlignment="center" text="JP5" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={99.69680086} pcbY={121.08460162} anchorAlignment="center" text="JP2" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={113.8428} pcbY={99.4156} anchorAlignment="center" text="JP10" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={113.8428} pcbY={103.2256} anchorAlignment="center" text="JP11" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={113.8428} pcbY={114.65559999999999} anchorAlignment="center" text="J11" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={115.62079999999999} pcbY={92.8116} anchorAlignment="center" text="JP4" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={115.62079999999999} pcbY={89.0016} anchorAlignment="center" text="JP3" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={113.8428} pcbY={95.6056} anchorAlignment="center" text="JP6" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={98.41179962} pcbY={119.19860082} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={104.38179783999999} pcbY={118.57079918} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={50.3428} pcbY={123.5456} anchorAlignment="center" text="J12" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={75.93279962} pcbY={117.29360082} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={75.93279962} pcbY={115.89660081999999} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={75.93279962} pcbY={113.10260081999999} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={75.93279962} pcbY={114.49960082} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={88.76080037999999} pcbY={107.44559918} anchorAlignment="center" text="C37" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={76.8438011} pcbY={117.1726003} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={87.65180081999999} pcbY={117.25960038} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={77.36480082} pcbY={118.40260038} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={80.53980082} pcbY={117.25960038} anchorAlignment="center" text="C38" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={88.59879918} pcbY={118.90959962} anchorAlignment="center" text="R30" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={86.25480082} pcbY={106.21060037999999} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={88.75179862} pcbY={120.34160082} anchorAlignment="center" text="C35" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={93.6078011} pcbY={106.3776003} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={85.80479918} pcbY={118.90959962} anchorAlignment="center" text="R31" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={78.69279918} pcbY={118.90959962} anchorAlignment="center" text="R34" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={87.65180081999999} pcbY={106.21060037999999} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={90.41079962} pcbY={114.88060082} anchorAlignment="center" text="R37" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={88.76080037999999} pcbY={115.82759917999999} anchorAlignment="center" text="R38" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={90.41079962} pcbY={113.48360081999999} anchorAlignment="center" text="R42" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={90.41079962} pcbY={112.08660081999999} anchorAlignment="center" text="R41" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={90.41079962} pcbY={110.68960082} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={80.8647989} pcbY={107.82059969999999} anchorAlignment="center" text="C33" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={77.67679918} pcbY={110.40059962} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={77.8788003} pcbY={113.0465989} anchorAlignment="center" text="C31" font="tscircuit2024" fontSize={0.30479999999999996} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={90.41079962} pcbY={109.29260081999999} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={95.36379962} pcbY={105.48260081999999} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={84.40779918} pcbY={107.86059962} anchorAlignment="center" text="R35" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={89.74179918} pcbY={106.59059962} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={91.17380037999999} pcbY={105.03259918} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={68.98532304} pcbY={63.63935202} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={67.1838128} pcbY={64.41358212} anchorAlignment="bottom_left" text="C1" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={67.18381534} pcbY={61.480613639999994} anchorAlignment="bottom_left" text="D1" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={66.80281534} pcbY={58.81361363999999} anchorAlignment="bottom_left" text="C2" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={117.2718} pcbY={56.94860086} anchorAlignment="center" text="J4" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={105.2068} pcbY={49.3776} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1.524} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={85.1408} pcbY={63.3476} anchorAlignment="center" text="TP2" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={85.1408} pcbY={67.41159999999999} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={21.2598} pcbY={74.5236} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={31.4198} pcbY={49.3776} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1.524} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={100.44581384} pcbY={58.2468736} anchorAlignment="bottom_left" text="C3" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={66.0908} pcbY={86.9696} anchorAlignment="center" text="TP6" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={61.645799999999994} pcbY={86.9696} anchorAlignment="center" text="TP5" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={66.20579595999999} pcbY={95.95260210000001} anchorAlignment="center" text="L1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={78.96778719999999} pcbY={66.7266128} anchorAlignment="bottom_left" text="R3" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={58.44327656} pcbY={93.10961058} anchorAlignment="bottom_left" text="R4" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={23.2918} pcbY={56.7436} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={58.4283566} pcbY={96.47761756} anchorAlignment="bottom_left" text="R6" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={93.07180014} pcbY={62.38621} anchorAlignment="bottom_left" text="C4" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={93.07180014} pcbY={71.53021} anchorAlignment="bottom_left" text="C7" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={114.27378465999999} pcbY={58.4226162} anchorAlignment="bottom_left" text="C8" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={25.704675539999997} pcbY={56.87105212} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={93.07180014} pcbY={80.67421} anchorAlignment="bottom_left" text="C23" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={22.4028} pcbY={82.2706} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={105.2068} pcbY={66.0146} anchorAlignment="center" text="J5" font="tscircuit2024" fontSize={1.524} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={31.4198} pcbY={65.7606} anchorAlignment="center" text="J6" font="tscircuit2024" fontSize={1.524} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={74.35713602} pcbY={81.58024832} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={58.00334094} pcbY={87.52376957999999} anchorAlignment="center" text="C30" font="tscircuit2024" fontSize={0.508} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={70.1507995} pcbY={84.71342214} anchorAlignment="center" text="C32" font="tscircuit2024" fontSize={0.508} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={55.85378719999999} pcbY={100.5086128} anchorAlignment="bottom_left" text="Q6" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={80.23218904} pcbY={96.19255082} anchorAlignment="center" text="R33" font="tscircuit2024" fontSize={0.4572} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={81.99930006} pcbY={63.523845519999995} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.4572} color="#ec4899" layer="bottom" pcbRotation="90deg" />
      <fabricationnotetext pcbX={46.6357843} pcbY={45.42006918} anchorAlignment="bottom_left" text="J7" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" layer="bottom" pcbRotation="180deg" />
      <fabricationnotetext pcbX={64.40579955999999} pcbY={40.6275921} anchorAlignment="bottom_left" text="J9" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" layer="bottom" pcbRotation="180deg" />
      <fabricationnotetext pcbX={79.69577914} pcbY={46.002699459999995} anchorAlignment="bottom_left" text="J10" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" layer="bottom" pcbRotation="180deg" />
      <fabricationnotetext pcbX={67.00719898} pcbY={50.5355987} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={1.016} color="#ec4899" layer="bottom" pcbRotation="0deg" />
      <fabricationnotetext pcbX={77.04440014} pcbY={56.63159869999999} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={1.016} color="#ec4899" layer="bottom" pcbRotation="180deg" />
      <fabricationnotetext pcbX={60.600800819999996} pcbY={122.46559962} anchorAlignment="center" text="R40" font="tscircuit2024" fontSize={0.4572} color="#ec4899" layer="bottom" pcbRotation="90deg" />
      <fabricationnotetext pcbX={59.076800819999995} pcbY={122.46559962} anchorAlignment="center" text="R39" font="tscircuit2024" fontSize={0.4572} color="#ec4899" layer="bottom" pcbRotation="90deg" />
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
      <schematicpath points={[{"x":9.1072255674,"y":3.8632237147},{"x":9.1072255674,"y":4.0632237147}]} isFilled={false} />
      <schematicpath points={[{"x":9.0072255674,"y":4.1632237147},{"x":9.00773863506081,"y":4.153106882501257},{"x":9.009272573274751,"y":4.143093862691134},{"x":9.011811641759996,"y":4.133287402402664},{"x":9.015329786237977,"y":4.123788129188669},{"x":9.019790905785543,"y":4.1146935184468925},{"x":9.025149223279273,"y":4.1060968931905215},{"x":9.031349755130721,"y":4.0980864664277785},{"x":9.038328875492432,"y":4.090744435977088},{"x":9.046014969145235,"y":4.08414614100623},{"x":9.054329166367305,"y":4.078359288950526},{"x":9.063186152244237,"y":4.073443260742926},{"x":9.072495042115518,"y":4.069448501485292},{"x":9.082160314174129,"y":4.06641600281338},{"x":9.092082789649544,"y":4.064376882267189},{"x":9.10216065051613,"y":4.063352063982895},{"x":9.112290484283871,"y":4.063352063982895},{"x":9.122368345150457,"y":4.064376882267189},{"x":9.132290820625872,"y":4.06641600281338},{"x":9.141956092684483,"y":4.069448501485292},{"x":9.151264982555764,"y":4.073443260742926},{"x":9.160121968432696,"y":4.078359288950526},{"x":9.168436165654766,"y":4.08414614100623},{"x":9.176122259307569,"y":4.090744435977088},{"x":9.18310137966928,"y":4.0980864664277785},{"x":9.189301911520728,"y":4.1060968931905215},{"x":9.194660229014458,"y":4.1146935184468925},{"x":9.199121348562024,"y":4.123788129188669},{"x":9.202639493040005,"y":4.133287402402664},{"x":9.20517856152525,"y":4.143093862691134},{"x":9.20671249973919,"y":4.153106882501257},{"x":9.2072255674,"y":4.1632237147}]} isFilled={false} />
      <schematictext text={"C34"} schX={9.1072255674} schY={4.1882237147} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":8.5977304308,"y":3.8632237147},{"x":8.5977304308,"y":4.0632237147}]} isFilled={false} />
      <schematicpath points={[{"x":8.4977304308,"y":4.1632237147},{"x":8.49824349846081,"y":4.153106882501257},{"x":8.499777436674751,"y":4.143093862691134},{"x":8.502316505159996,"y":4.133287402402664},{"x":8.505834649637977,"y":4.123788129188669},{"x":8.510295769185543,"y":4.1146935184468925},{"x":8.515654086679273,"y":4.1060968931905215},{"x":8.521854618530721,"y":4.0980864664277785},{"x":8.528833738892432,"y":4.090744435977088},{"x":8.536519832545235,"y":4.08414614100623},{"x":8.544834029767305,"y":4.078359288950526},{"x":8.553691015644237,"y":4.073443260742926},{"x":8.562999905515518,"y":4.069448501485292},{"x":8.572665177574128,"y":4.06641600281338},{"x":8.582587653049544,"y":4.064376882267189},{"x":8.59266551391613,"y":4.063352063982895},{"x":8.602795347683871,"y":4.063352063982895},{"x":8.612873208550457,"y":4.064376882267189},{"x":8.622795684025872,"y":4.06641600281338},{"x":8.632460956084483,"y":4.069448501485292},{"x":8.641769845955764,"y":4.073443260742926},{"x":8.650626831832696,"y":4.078359288950526},{"x":8.658941029054766,"y":4.08414614100623},{"x":8.666627122707569,"y":4.090744435977088},{"x":8.67360624306928,"y":4.0980864664277785},{"x":8.679806774920728,"y":4.1060968931905215},{"x":8.685165092414458,"y":4.1146935184468925},{"x":8.689626211962024,"y":4.123788129188669},{"x":8.693144356440005,"y":4.133287402402664},{"x":8.69568342492525,"y":4.143093862691134},{"x":8.69721736313919,"y":4.153106882501257},{"x":8.6977304308,"y":4.1632237147}]} isFilled={false} />
      <schematictext text={"TP1"} schX={8.5977304308} schY={4.1882237147} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.8267716535,"y":3.6721630384},{"x":-10.8267716535,"y":3.8721630384}]} isFilled={false} />
      <schematicpath points={[{"x":-10.9267716535,"y":3.9721630384},{"x":-10.92625858583919,"y":3.962046206201257},{"x":-10.924724647625249,"y":3.952033186391134},{"x":-10.922185579140004,"y":3.9422267261026644},{"x":-10.918667434662023,"y":3.932727452888668},{"x":-10.914206315114457,"y":3.923632842146892},{"x":-10.908847997620727,"y":3.915036216890521},{"x":-10.90264746576928,"y":3.907025790127778},{"x":-10.895668345407568,"y":3.899683759677088},{"x":-10.887982251754766,"y":3.89308546470623},{"x":-10.879668054532695,"y":3.887298612650525},{"x":-10.870811068655764,"y":3.882382584442926},{"x":-10.861502178784482,"y":3.878387825185292},{"x":-10.851836906725872,"y":3.8753553265133798},{"x":-10.841914431250457,"y":3.873316205967189},{"x":-10.83183657038387,"y":3.872291387682895},{"x":-10.821706736616129,"y":3.872291387682895},{"x":-10.811628875749543,"y":3.873316205967189},{"x":-10.801706400274128,"y":3.8753553265133798},{"x":-10.792041128215518,"y":3.878387825185292},{"x":-10.782732238344236,"y":3.882382584442926},{"x":-10.773875252467304,"y":3.887298612650525},{"x":-10.765561055245234,"y":3.89308546470623},{"x":-10.757874961592432,"y":3.899683759677088},{"x":-10.75089584123072,"y":3.907025790127778},{"x":-10.744695309379273,"y":3.915036216890521},{"x":-10.739336991885542,"y":3.923632842146892},{"x":-10.734875872337977,"y":3.932727452888668},{"x":-10.731357727859995,"y":3.9422267261026644},{"x":-10.72881865937475,"y":3.952033186391134},{"x":-10.72728472116081,"y":3.962046206201257},{"x":-10.7267716535,"y":3.9721630384}]} isFilled={false} />
      <schematictext text={"TP3"} schX={-10.8267716535} schY={3.9971630384} anchor={"bottom_center"} fontSize={0.18} />
      <schematicrect schX={-11.527327466419639} schY={3.693839740620657} width={0.4} height={0.4} />
      <schematicline x1={-11.32732746641964} y1={3.693839740620657} x2={-11.527327466419639} y2={3.693839740620657} />
      <schematictext text={"1"} schX={-11.32732746641964} schY={3.693839740620657} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"1"} schX={-11.427327466419639} schY={3.693839740620657} anchor={"bottom_center"} fontSize={0.18} />
      <schematicrect schX={12.928439092172303} schY={3.7575266327003245} width={0.4} height={0.4} />
      <schematicline x1={12.728439092172303} y1={3.7575266327003245} x2={12.928439092172303} y2={3.7575266327003245} />
      <schematictext text={"1"} schX={12.728439092172303} schY={3.7575266327003245} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1"} schX={12.828439092172303} schY={3.7575266327003245} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":3.2480314961,"y":3.290041686},{"x":3.2480314961,"y":3.490041686}]} isFilled={false} />
      <schematicpath points={[{"x":3.1480314960999998,"y":3.590041686},{"x":3.1485445637608103,"y":3.579924853801257},{"x":3.1500785019747504,"y":3.569911833991134},{"x":3.152617570459995,"y":3.5601053737026644},{"x":3.1561357149379767,"y":3.550606100488668},{"x":3.1605968344855415,"y":3.541511489746892},{"x":3.165955151979272,"y":3.532914864490521},{"x":3.172155683830721,"y":3.524904437727778},{"x":3.179134804192431,"y":3.517562407277088},{"x":3.1868208978452337,"y":3.51096411230623},{"x":3.1951350950673034,"y":3.505177260250525},{"x":3.2039920809442366,"y":3.500261232042926},{"x":3.213300970815518,"y":3.496266472785292},{"x":3.222966242874128,"y":3.4932339741133798},{"x":3.232888718349542,"y":3.491194853567189},{"x":3.2429665792161284,"y":3.490170035282895},{"x":3.2530964129838713,"y":3.490170035282895},{"x":3.2631742738504577,"y":3.491194853567189},{"x":3.273096749325872,"y":3.4932339741133798},{"x":3.2827620213844817,"y":3.496266472785292},{"x":3.292070911255763,"y":3.500261232042926},{"x":3.3009278971326963,"y":3.505177260250525},{"x":3.309242094354766,"y":3.51096411230623},{"x":3.3169281880075685,"y":3.517562407277088},{"x":3.323907308369279,"y":3.524904437727778},{"x":3.3301078402207276,"y":3.532914864490521},{"x":3.335466157714458,"y":3.541511489746892},{"x":3.339927277262023,"y":3.550606100488668},{"x":3.3434454217400047,"y":3.5601053737026644},{"x":3.3459844902252494,"y":3.569911833991134},{"x":3.3475184284391895,"y":3.579924853801257},{"x":3.3480314961,"y":3.590041686}]} isFilled={false} />
      <schematictext text={"TP6"} schX={3.2480314961} schY={3.615041686} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.4580824456,"y":2.6295970357000003},{"x":-4.4580824456,"y":2.7296170357}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.4580824456,"y":3.1295770357},{"x":-4.4580824456,"y":3.2295970357}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.5380624456,"y":2.7296170357},{"x":-4.5380624456,"y":3.1295770357},{"x":-4.3781024456,"y":3.1295770357},{"x":-4.3781024456,"y":2.7296170357},{"x":-4.5380624456,"y":2.7296170357}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R7"} schX={-4.2980824455999995} schY={3.0895970357} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0"} schX={-4.2980824455999995} schY={2.7695970357} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.8916164891,"y":2.6295970357000003},{"x":-0.8916164891,"y":2.7296170357}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.8916164891,"y":3.1295770357},{"x":-0.8916164891,"y":3.2295970357}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.9715964891000001,"y":2.7296170357},{"x":-0.9715964891,"y":3.1295770357},{"x":-0.8116364891,"y":3.1295770357},{"x":-0.8116364891000001,"y":2.7296170357},{"x":-0.9715964891000001,"y":2.7296170357}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R8"} schX={-0.7316164891} schY={3.0895970357} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10.0"} schX={-0.7316164891} schY={2.7695970357} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-1.6558591941,"y":2.5022232515000002},{"x":-1.6558591941,"y":2.6022432515}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-1.6558591941,"y":3.0022032515},{"x":-1.6558591941,"y":3.1022232515}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-1.7358391941,"y":2.6022432515},{"x":-1.7358391941,"y":3.0022032515},{"x":-1.5758791941,"y":3.0022032515},{"x":-1.5758791941,"y":2.6022432515},{"x":-1.7358391941,"y":2.6022432515}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R9"} schX={-1.4958591941000001} schY={2.9622232515} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0"} schX={-1.4958591941000001} schY={2.6422232515} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.2547475683,"y":2.1901574803000003},{"x":-0.2547475683,"y":2.4301574803}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.2547475683,"y":2.5501574803000002},{"x":-0.2547475683,"y":2.7901574803}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.09472756830000001,"y":2.4301574803},{"x":-0.4147675683,"y":2.4301574803}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.09472756830000001,"y":2.5501574803000002},{"x":-0.4147675683,"y":2.5501574803000002}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C12"} schX={-0.1397475683} schY={2.6901574803000003} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"GCM188L81H104KA57D"} schX={-0.13974756829999999} schY={2.2901574803} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.8904585456,"y":1.8889300602},{"x":-10.8904585456,"y":2.0889300602}]} isFilled={false} />
      <schematicpath points={[{"x":-10.9904585456,"y":2.1889300602},{"x":-10.98994547793919,"y":2.178813228001257},{"x":-10.988411539725249,"y":2.168800208191134},{"x":-10.985872471240004,"y":2.1589937479026644},{"x":-10.982354326762023,"y":2.149494474688668},{"x":-10.977893207214457,"y":2.1403998639468917},{"x":-10.972534889720727,"y":2.131803238690521},{"x":-10.966334357869279,"y":2.123792811927778},{"x":-10.959355237507568,"y":2.116450781477088},{"x":-10.951669143854765,"y":2.10985248650623},{"x":-10.943354946632695,"y":2.104065634450525},{"x":-10.934497960755763,"y":2.099149606242926},{"x":-10.925189070884482,"y":2.095154846985292},{"x":-10.915523798825872,"y":2.0921223483133797},{"x":-10.905601323350457,"y":2.090083227767189},{"x":-10.89552346248387,"y":2.089058409482895},{"x":-10.885393628716129,"y":2.089058409482895},{"x":-10.875315767849543,"y":2.090083227767189},{"x":-10.865393292374128,"y":2.0921223483133797},{"x":-10.855728020315517,"y":2.095154846985292},{"x":-10.846419130444236,"y":2.099149606242926},{"x":-10.837562144567304,"y":2.104065634450525},{"x":-10.829247947345234,"y":2.10985248650623},{"x":-10.821561853692431,"y":2.116450781477088},{"x":-10.81458273333072,"y":2.123792811927778},{"x":-10.808382201479272,"y":2.131803238690521},{"x":-10.803023883985542,"y":2.1403998639468917},{"x":-10.798562764437976,"y":2.149494474688668},{"x":-10.795044619959995,"y":2.1589937479026644},{"x":-10.79250555147475,"y":2.168800208191134},{"x":-10.79097161326081,"y":2.178813228001257},{"x":-10.7904585456,"y":2.1889300602}]} isFilled={false} />
      <schematictext text={"TP8"} schX={-10.8904585456} schY={2.2139300602} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":8.4066697545,"y":1.6742936545},{"x":8.4066697545,"y":1.7743136545}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.4066697545,"y":2.1742736545},{"x":8.4066697545,"y":2.2742936545}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.326689754499998,"y":1.7743136545},{"x":8.326689754499998,"y":2.1742736545},{"x":8.4866497545,"y":2.1742736545},{"x":8.4866497545,"y":1.7743136545},{"x":8.326689754499998,"y":1.7743136545}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R15"} schX={8.5666697545} schY={2.1342936545} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0"} schX={8.5666697545} schY={1.8142936545000001} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":9.2982862436,"y":1.6742936545},{"x":9.2982862436,"y":1.7743136545}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.2982862436,"y":2.1742736545},{"x":9.2982862436,"y":2.2742936545}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.218306243599999,"y":1.7743136545},{"x":9.218306243599999,"y":2.1742736545},{"x":9.3782662436,"y":2.1742736545},{"x":9.3782662436,"y":1.7743136545},{"x":9.218306243599999,"y":1.7743136545}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R16"} schX={9.4582862436} schY={2.1342936545} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0"} schX={9.4582862436} schY={1.8142936545000001} anchor={"center_left"} fontSize={0.18} />
      <schematicrect schX={-11.591014358499304} schY={1.9106067623899943} width={0.4} height={0.4} />
      <schematicline x1={-11.391014358499305} y1={1.9106067623899943} x2={-11.591014358499304} y2={1.9106067623899943} />
      <schematictext text={"1"} schX={-11.391014358499305} schY={1.9106067623899943} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"1"} schX={-11.491014358499305} schY={1.9106067623899943} anchor={"bottom_center"} fontSize={0.18} />
      <schematicrect schX={12.928439092172303} schY={1.8469198703103284} width={0.4} height={0.4} />
      <schematicline x1={12.728439092172303} y1={1.8469198703103284} x2={12.928439092172303} y2={1.8469198703103284} />
      <schematictext text={"1"} schX={12.728439092172303} schY={1.8469198703103284} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1"} schX={12.828439092172303} schY={1.8469198703103284} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-5.5407596109,"y":1.6341824919},{"x":-5.5407596109,"y":1.8341824919}]} isFilled={false} />
      <schematicpath points={[{"x":-5.6407596109,"y":1.9341824919000001},{"x":-5.64024654323919,"y":1.9240656597012569},{"x":-5.638712605025249,"y":1.914052639891134},{"x":-5.636173536540006,"y":1.9042461796026642},{"x":-5.6326553920620235,"y":1.8947469063886682},{"x":-5.628194272514459,"y":1.885652295646892},{"x":-5.622835955020728,"y":1.8770556703905208},{"x":-5.61663542316928,"y":1.8690452436277778},{"x":-5.609656302807569,"y":1.861703213177088},{"x":-5.601970209154767,"y":1.8551049182062302},{"x":-5.593656011932697,"y":1.8493180661505249},{"x":-5.584799026055764,"y":1.8444020379429258},{"x":-5.575490136184483,"y":1.840407278685292},{"x":-5.565824864125872,"y":1.8373747800133797},{"x":-5.555902388650458,"y":1.835335659467189},{"x":-5.545824527783871,"y":1.8343108411828948},{"x":-5.535694694016129,"y":1.8343108411828948},{"x":-5.5256168331495426,"y":1.8353356594671888},{"x":-5.515694357674128,"y":1.8373747800133795},{"x":-5.506029085615518,"y":1.840407278685292},{"x":-5.496720195744237,"y":1.8444020379429258},{"x":-5.487863209867304,"y":1.8493180661505249},{"x":-5.479549012645234,"y":1.8551049182062302},{"x":-5.471862918992432,"y":1.861703213177088},{"x":-5.464883798630721,"y":1.8690452436277778},{"x":-5.458683266779273,"y":1.8770556703905208},{"x":-5.453324949285542,"y":1.885652295646892},{"x":-5.448863829737977,"y":1.8947469063886682},{"x":-5.445345685259995,"y":1.9042461796026642},{"x":-5.442806616774751,"y":1.914052639891134},{"x":-5.441272678560811,"y":1.9240656597012569},{"x":-5.440759610900001,"y":1.9341824919000001}]} isFilled={false} />
      <schematictext text={"TP9"} schX={-5.5407596109} schY={1.9591824919} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":0.6368689208,"y":1.8653543307},{"x":0.6368689208,"y":1.9653743307}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.6368689208,"y":2.3653343307},{"x":0.6368689208,"y":2.4653543307}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.5568889208,"y":1.9653743307},{"x":0.5568889208000001,"y":2.3653343307},{"x":0.7168489208000001,"y":2.3653343307},{"x":0.7168489208,"y":1.9653743307},{"x":0.5568889208,"y":1.9653743307}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R14"} schX={0.7968689208} schY={2.3253543307} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"3.0"} schX={0.7968689208} schY={2.0053543307} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.4960629921,"y":1.3126215841},{"x":-6.4960629921,"y":1.0726215841}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.4960629921,"y":0.9526215840999999},{"x":-6.4960629921,"y":0.7126215840999999}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.6560829921,"y":1.0726215841},{"x":-6.336042992099999,"y":1.0726215841}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.6560829921,"y":0.9526215841},{"x":-6.336042992099999,"y":0.9526215840999999}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C26"} schX={-6.4010629921} schY={1.2126215840999999} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"22µF"} schX={-6.4010629921} schY={0.8126215841} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.0502547476,"y":1.3126215841},{"x":-6.0502547476,"y":1.0726215841}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.0502547476,"y":0.9526215840999999},{"x":-6.0502547476,"y":0.7126215840999999}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.210274747600001,"y":1.0726215841},{"x":-5.8902347476,"y":1.0726215841}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.210274747600001,"y":0.9526215841},{"x":-5.8902347476,"y":0.9526215840999999}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C27"} schX={-5.955254747600001} schY={1.2126215840999999} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"22µF"} schX={-5.955254747600001} schY={0.8126215841} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.2982862436,"y":0.3368689208},{"x":-9.2982862436,"y":0.4368889208}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.2982862436,"y":0.8368489208000001},{"x":-9.2982862436,"y":0.9368689208000001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.3782662436,"y":0.4368889208},{"x":-9.3782662436,"y":0.8368489208000001},{"x":-9.218306243599999,"y":0.8368489208000001},{"x":-9.218306243599999,"y":0.4368889208},{"x":-9.3782662436,"y":0.4368889208}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R21"} schX={-9.1382862436} schY={0.7968689208} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"75.0k"} schX={-9.1382862436} schY={0.4768689208} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.3050023159,"y":-1.9322834646},{"x":-6.3050023159,"y":-1.7322834646}]} isFilled={false} />
      <schematicpath points={[{"x":-6.4050023159,"y":-1.6322834646},{"x":-6.40448924823919,"y":-1.6424002967987432},{"x":-6.402955310025249,"y":-1.6524133166088661},{"x":-6.400416241540006,"y":-1.662219776897336},{"x":-6.3968980970620235,"y":-1.671719050111332},{"x":-6.392436977514459,"y":-1.6808136608531081},{"x":-6.387078660020728,"y":-1.6894102861094793},{"x":-6.38087812816928,"y":-1.6974207128722223},{"x":-6.3738990078075695,"y":-1.704762743322912},{"x":-6.366212914154767,"y":-1.7113610382937698},{"x":-6.357898716932697,"y":-1.7171478903494752},{"x":-6.349041731055764,"y":-1.7220639185570743},{"x":-6.339732841184483,"y":-1.726058677814708},{"x":-6.330067569125872,"y":-1.7290911764866204},{"x":-6.320145093650458,"y":-1.731130297032811},{"x":-6.310067232783871,"y":-1.7321551153171053},{"x":-6.299937399016129,"y":-1.7321551153171053},{"x":-6.289859538149543,"y":-1.7311302970328113},{"x":-6.279937062674128,"y":-1.7290911764866206},{"x":-6.270271790615518,"y":-1.726058677814708},{"x":-6.260962900744237,"y":-1.7220639185570743},{"x":-6.252105914867304,"y":-1.7171478903494752},{"x":-6.243791717645234,"y":-1.7113610382937698},{"x":-6.236105623992432,"y":-1.704762743322912},{"x":-6.229126503630721,"y":-1.6974207128722223},{"x":-6.222925971779273,"y":-1.6894102861094793},{"x":-6.217567654285542,"y":-1.6808136608531081},{"x":-6.213106534737977,"y":-1.671719050111332},{"x":-6.209588390259995,"y":-1.662219776897336},{"x":-6.207049321774751,"y":-1.6524133166088661},{"x":-6.205515383560811,"y":-1.6424002967987432},{"x":-6.205002315900001,"y":-1.6322834646}]} isFilled={false} />
      <schematictext text={"TP12"} schX={-6.3050023159} schY={-1.6072834646} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":0.23631310789999999,"y":-2.1653543307},{"x":0.1362931079,"y":-2.1653543307}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.2636668921,"y":-2.1653543307},{"x":-0.3636868921,"y":-2.1653543307}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.1362931079,"y":-2.2453343307},{"x":-0.2636668921,"y":-2.2453343307},{"x":-0.2636668921,"y":-2.0853743307},{"x":0.1362931079,"y":-2.0853743307},{"x":0.1362931079,"y":-2.2453343307}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R28"} schX={-0.06368689210000002} schY={-2.0053543307} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"3.0"} schX={-0.06368689209999999} schY={-2.3253543307} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-5.8591940713,"y":-2.1870310329000002},{"x":-5.8591940713,"y":-1.9870310329}]} isFilled={false} />
      <schematicpath points={[{"x":-5.9591940713,"y":-1.8870310329},{"x":-5.95868100363919,"y":-1.8971478650987432},{"x":-5.957147065425249,"y":-1.9071608849088661},{"x":-5.954607996940005,"y":-1.916967345197336},{"x":-5.951089852462023,"y":-1.926466618411332},{"x":-5.9466287329144585,"y":-1.9355612291531081},{"x":-5.941270415420727,"y":-1.9441578544094793},{"x":-5.9350698835692794,"y":-1.9521682811722223},{"x":-5.928090763207569,"y":-1.959510311622912},{"x":-5.920404669554767,"y":-1.9661086065937698},{"x":-5.912090472332697,"y":-1.9718954586494752},{"x":-5.903233486455764,"y":-1.9768114868570743},{"x":-5.893924596584482,"y":-1.980806246114708},{"x":-5.884259324525872,"y":-1.9838387447866204},{"x":-5.874336849050458,"y":-1.985877865332811},{"x":-5.864258988183871,"y":-1.9869026836171053},{"x":-5.854129154416129,"y":-1.9869026836171053},{"x":-5.844051293549542,"y":-1.9858778653328113},{"x":-5.834128818074128,"y":-1.9838387447866206},{"x":-5.824463546015518,"y":-1.980806246114708},{"x":-5.815154656144236,"y":-1.9768114868570743},{"x":-5.806297670267304,"y":-1.9718954586494752},{"x":-5.7979834730452335,"y":-1.9661086065937698},{"x":-5.790297379392432,"y":-1.959510311622912},{"x":-5.783318259030721,"y":-1.9521682811722223},{"x":-5.777117727179273,"y":-1.9441578544094793},{"x":-5.771759409685542,"y":-1.9355612291531081},{"x":-5.767298290137977,"y":-1.926466618411332},{"x":-5.763780145659995,"y":-1.916967345197336},{"x":-5.761241077174751,"y":-1.9071608849088661},{"x":-5.7597071389608105,"y":-1.8971478650987432},{"x":-5.7591940713000005,"y":-1.8870310329}]} isFilled={false} />
      <schematictext text={"TP13"} schX={-5.8591940713} schY={-1.8620310329} anchor={"bottom_center"} fontSize={0.18} />
      <schematicrect schX={-1.2737378415933307} schY={-3.184344603983326} width={0.4} height={0.4} />
      <schematicline x1={-1.4737378415933307} y1={-3.184344603983326} x2={-1.5284854099119958} y2={-3.184344603983326} />
      <schematictext text={"1"} schX={-1.4737378415933307} schY={-3.184344603983326} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1"} schX={-1.5011116257526633} schY={-3.184344603983326} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.0737378415933307} y1={-3.184344603983326} x2={-1.0189902732746638} y2={-3.184344603983326} />
      <schematictext text={"2"} schX={-1.0737378415933307} schY={-3.184344603983326} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"2"} schX={-1.0463640574339972} schY={-3.184344603983326} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.9932839277,"y":-4.6708198240000005},{"x":-2.9932839277,"y":-4.470819824}]} isFilled={false} />
      <schematicpath points={[{"x":-3.0932839277,"y":-4.370819824000001},{"x":-3.0927708600391894,"y":-4.3809366561987435},{"x":-3.0912369218252493,"y":-4.390949676008867},{"x":-3.0886978533400047,"y":-4.400756136297336},{"x":-3.085179708862023,"y":-4.410255409511332},{"x":-3.080718589314458,"y":-4.419350020253108},{"x":-3.0753602718207276,"y":-4.427946645509479},{"x":-3.0691597399692787,"y":-4.435957072272222},{"x":-3.0621806196075685,"y":-4.4432991027229125},{"x":-3.054494525954766,"y":-4.44989739769377},{"x":-3.0461803287326963,"y":-4.455684249749475},{"x":-3.037323342855763,"y":-4.460600277957075},{"x":-3.0280144529844817,"y":-4.464595037214709},{"x":-3.018349180925872,"y":-4.467627535886621},{"x":-3.0084267054504576,"y":-4.469666656432811},{"x":-2.9983488445838713,"y":-4.470691474717106},{"x":-2.9882190108161284,"y":-4.470691474717106},{"x":-2.978141149949542,"y":-4.469666656432811},{"x":-2.968218674474128,"y":-4.467627535886621},{"x":-2.958553402415518,"y":-4.464595037214709},{"x":-2.9492445125442366,"y":-4.460600277957075},{"x":-2.9403875266673034,"y":-4.455684249749475},{"x":-2.9320733294452337,"y":-4.44989739769377},{"x":-2.924387235792431,"y":-4.4432991027229125},{"x":-2.9174081154307205,"y":-4.435957072272222},{"x":-2.911207583579272,"y":-4.427946645509479},{"x":-2.9058492660855415,"y":-4.419350020253108},{"x":-2.9013881465379767,"y":-4.410255409511332},{"x":-2.897870002059995,"y":-4.400756136297336},{"x":-2.8953309335747504,"y":-4.390949676008867},{"x":-2.8937969953608103,"y":-4.3809366561987435},{"x":-2.8932839276999998,"y":-4.370819824000001}]} isFilled={false} />
      <schematictext text={"TP4"} schX={-2.9932839277} schY={-4.345819824} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.6111625753,"y":-4.6708198240000005},{"x":-2.6111625753,"y":-4.470819824}]} isFilled={false} />
      <schematicpath points={[{"x":-2.7111625753,"y":-4.370819824000001},{"x":-2.7106495076391894,"y":-4.3809366561987435},{"x":-2.7091155694252493,"y":-4.390949676008867},{"x":-2.7065765009400047,"y":-4.400756136297336},{"x":-2.703058356462023,"y":-4.410255409511332},{"x":-2.698597236914458,"y":-4.419350020253108},{"x":-2.6932389194207276,"y":-4.427946645509479},{"x":-2.687038387569279,"y":-4.435957072272222},{"x":-2.6800592672075685,"y":-4.4432991027229125},{"x":-2.672373173554766,"y":-4.44989739769377},{"x":-2.6640589763326963,"y":-4.455684249749475},{"x":-2.655201990455763,"y":-4.460600277957075},{"x":-2.6458931005844817,"y":-4.464595037214709},{"x":-2.636227828525872,"y":-4.467627535886621},{"x":-2.6263053530504576,"y":-4.469666656432811},{"x":-2.6162274921838713,"y":-4.470691474717106},{"x":-2.6060976584161284,"y":-4.470691474717106},{"x":-2.596019797549542,"y":-4.469666656432811},{"x":-2.586097322074128,"y":-4.467627535886621},{"x":-2.576432050015518,"y":-4.464595037214709},{"x":-2.5671231601442366,"y":-4.460600277957075},{"x":-2.5582661742673034,"y":-4.455684249749475},{"x":-2.5499519770452337,"y":-4.44989739769377},{"x":-2.542265883392431,"y":-4.4432991027229125},{"x":-2.5352867630307205,"y":-4.435957072272222},{"x":-2.529086231179272,"y":-4.427946645509479},{"x":-2.5237279136855415,"y":-4.419350020253108},{"x":-2.5192667941379767,"y":-4.410255409511332},{"x":-2.515748649659995,"y":-4.400756136297336},{"x":-2.5132095811747504,"y":-4.390949676008867},{"x":-2.5116756429608103,"y":-4.3809366561987435},{"x":-2.5111625752999998,"y":-4.370819824000001}]} isFilled={false} />
      <schematictext text={"TP7"} schX={-2.6111625753} schY={-4.345819824} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.8212135248,"y":-6.9871236684},{"x":-3.8212135248,"y":-6.8871036684}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.8212135248,"y":-6.4871436684},{"x":-3.8212135248,"y":-6.3871236684}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.9011935248,"y":-6.8871036684},{"x":-3.9011935248,"y":-6.4871436684},{"x":-3.7412335248,"y":-6.4871436684},{"x":-3.7412335248,"y":-6.8871036684},{"x":-3.9011935248,"y":-6.8871036684}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R39"} schX={-3.6612135248} schY={-6.5271236684} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"2.00k"} schX={-3.6612135248} schY={-6.8471236684} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.4390921723,"y":-6.9871236684},{"x":-3.4390921723,"y":-6.8871036684}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.4390921723,"y":-6.4871436684},{"x":-3.4390921723,"y":-6.3871236684}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.5190721723,"y":-6.8871036684},{"x":-3.5190721723,"y":-6.4871436684},{"x":-3.3591121723,"y":-6.4871436684},{"x":-3.3591121723,"y":-6.8871036684},{"x":-3.5190721723,"y":-6.8871036684}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R40"} schX={-3.2790921723} schY={-6.5271236684} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"2.00k"} schX={-3.2790921723} schY={-6.8471236684} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":1.9622278833,"y":3.3117183881},{"x":1.8622078833,"y":3.3117183881}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4622478832999999,"y":3.3117183881},{"x":1.3622278832999999,"y":3.3117183881}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.8622078833,"y":3.2317383881},{"x":1.4622478832999999,"y":3.2317383881},{"x":1.4622478832999999,"y":3.3916983881},{"x":1.8622078833,"y":3.3916983881},{"x":1.8622078833,"y":3.2317383881}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R4"} schX={1.6622278833} schY={3.4717183881} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"5m"} schX={1.6622278833} schY={3.1517183881} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.9622278833,"y":2.9932839277},{"x":1.8622078833,"y":2.9932839277}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4622478832999999,"y":2.9932839277},{"x":1.3622278832999999,"y":2.9932839277}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.8622078833,"y":2.9133039277},{"x":1.4622478832999999,"y":2.9133039277},{"x":1.4622478832999999,"y":3.0732639277},{"x":1.8622078833,"y":3.0732639277},{"x":1.8622078833,"y":2.9133039277}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R6"} schX={1.6622278833} schY={3.1532839277} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"5m"} schX={1.6622278833} schY={2.8332839276999997} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.6871236684,"y":-3.1022232515},{"x":-6.6871236684,"y":-3.0022032515}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.6871236684,"y":-2.6022432515},{"x":-6.6871236684,"y":-2.5022232515000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.7671036684,"y":-3.0022032515},{"x":-6.7671036684,"y":-2.6022432515},{"x":-6.6071436684,"y":-2.6022432515},{"x":-6.6071436684,"y":-3.0022032515},{"x":-6.7671036684,"y":-3.0022032515}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R29"} schX={-6.5271236684} schY={-2.6422232515} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"7.15k"} schX={-6.5271236684} schY={-2.9622232515} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.6871236684,"y":-3.6754052801999997},{"x":-6.6871236684,"y":-3.4354052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.6871236684,"y":-3.3154052802},{"x":-6.6871236684,"y":-3.0754052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.5271036684,"y":-3.4354052802},{"x":-6.8471436684,"y":-3.4354052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.5271036684,"y":-3.3154052802},{"x":-6.8471436684,"y":-3.3154052802}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C36"} schX={-6.5721236684} schY={-3.1754052801999997} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.012uF"} schX={-6.5721236684} schY={-3.5754052802} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-5.8591940713,"y":-3.6754052801999997},{"x":-5.8591940713,"y":-3.4354052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.8591940713,"y":-3.3154052802},{"x":-5.8591940713,"y":-3.0754052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.6991740713,"y":-3.4354052802},{"x":-6.0192140713,"y":-3.4354052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.6991740713,"y":-3.3154052802},{"x":-6.0192140713,"y":-3.3154052802}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C37"} schX={-5.7441940713} schY={-3.1754052801999997} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.02uF"} schX={-5.7441940713} schY={-3.5754052802} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-7.0055581288,"y":-3.3569708198},{"x":-7.0055581288,"y":-3.2569508198}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.0055581288,"y":-2.8569908198},{"x":-7.0055581288,"y":-2.7569708198000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.0855381288,"y":-3.2569508198},{"x":-7.0855381288,"y":-2.8569908198},{"x":-6.9255781288,"y":-2.8569908198},{"x":-6.9255781288,"y":-3.2569508198},{"x":-7.0855381288,"y":-3.2569508198}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R30"} schX={-6.8455581288} schY={-2.8969708198} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"40.2k"} schX={-6.8455581288} schY={-3.2169708198} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.3999536823,"y":2.4385363594},{"x":-11.3999536823,"y":2.6785363594}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-11.3999536823,"y":2.7985363594},{"x":-11.3999536823,"y":3.0385363593999997}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-11.2399336823,"y":2.6785363594},{"x":-11.559973682299999,"y":2.6785363594}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-11.2399336823,"y":2.7985363594},{"x":-11.559973682299999,"y":2.7985363594}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C11"} schX={-11.2849536823} schY={2.9385363594} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={-11.2849536823} schY={2.5385363593999997} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-7.3876794812,"y":2.6500463176999998},{"x":-7.3876794812,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.3876794812,"y":2.2900463177},{"x":-7.3876794812,"y":2.0500463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.5476994812000004,"y":2.4100463177},{"x":-7.2276594812,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.5476994812000004,"y":2.2900463177},{"x":-7.2276594812,"y":2.2900463177}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C14"} schX={-7.2926794812} schY={2.5500463177} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={-7.2926794812} schY={2.1500463176999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.1776285317,"y":2.6500463176999998},{"x":-6.1776285317,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.1776285317,"y":2.2900463177},{"x":-6.1776285317,"y":2.0500463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.3376485317,"y":2.4100463177},{"x":-6.0176085317,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.3376485317,"y":2.2900463177},{"x":-6.0176085317,"y":2.2900463177}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C20"} schX={-6.0826285317} schY={2.5500463177} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={-6.0826285317} schY={2.1500463176999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-5.5407596109,"y":3.0321676701999998},{"x":-5.5407596109,"y":2.7921676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.5407596109,"y":2.6721676702},{"x":-5.5407596109,"y":2.4321676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.700779610900001,"y":2.7921676702},{"x":-5.3807396109,"y":2.7921676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.700779610900001,"y":2.6721676702},{"x":-5.3807396109,"y":2.6721676702}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C9"} schX={-5.445759610900001} schY={2.9321676702} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={-5.445759610900001} schY={2.5321676701999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.8916164891,"y":1.8653543307},{"x":-0.8916164891,"y":1.9653743307}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.8916164891,"y":2.3653343307},{"x":-0.8916164891,"y":2.4653543307}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.9715964891000001,"y":1.9653743307},{"x":-0.9715964891,"y":2.3653343307},{"x":-0.8116364891,"y":2.3653343307},{"x":-0.8116364891000001,"y":1.9653743307},{"x":-0.9715964891000001,"y":1.9653743307}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R12"} schX={-0.7316164891} schY={2.3253543307} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"82.0k"} schX={-0.7316164891} schY={2.0053543307} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.8916164891,"y":0.9737378416},{"x":-0.8916164891,"y":1.0737578416}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.8916164891,"y":1.4737178416},{"x":-0.8916164891,"y":1.5737378416}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.9715964891000001,"y":1.0737578416},{"x":-0.9715964891,"y":1.4737178416},{"x":-0.8116364891,"y":1.4737178416},{"x":-0.8116364891000001,"y":1.0737578416},{"x":-0.9715964891000001,"y":1.0737578416}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R19"} schX={-0.7316164891} schY={1.4337378416} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"4.30k"} schX={-0.7316164891} schY={1.1137378416000001} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.546109309899999,"y":3.3117183881},{"x":8.6461293099,"y":3.3117183881}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.0460893099,"y":3.3117183881},{"x":9.1461093099,"y":3.3117183881}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.6461293099,"y":3.3916983881},{"x":9.0460893099,"y":3.3916983881},{"x":9.0460893099,"y":3.2317383881},{"x":8.6461293099,"y":3.2317383881},{"x":8.6461293099,"y":3.3916983881}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R3"} schX={8.8461093099} schY={3.4717183881} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"10m"} schX={8.8461093099} schY={3.1517183881} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.4960629921,"y":1.5704955998},{"x":-6.4960629921,"y":1.7704955998}]} isFilled={false} />
      <schematicpath points={[{"x":-6.596062992099999,"y":1.8704955998000001},{"x":-6.595549924439189,"y":1.8603787676012569},{"x":-6.594015986225249,"y":1.850365747791134},{"x":-6.591476917740005,"y":1.8405592875026642},{"x":-6.587958773262023,"y":1.8310600142886682},{"x":-6.583497653714458,"y":1.821965403546892},{"x":-6.578139336220727,"y":1.8133687782905208},{"x":-6.571938804369279,"y":1.8053583515277778},{"x":-6.564959684007569,"y":1.798016321077088},{"x":-6.557273590354766,"y":1.7914180261062302},{"x":-6.548959393132696,"y":1.7856311740505248},{"x":-6.540102407255763,"y":1.7807151458429258},{"x":-6.530793517384482,"y":1.776720386585292},{"x":-6.521128245325872,"y":1.7736878879133797},{"x":-6.5112057698504575,"y":1.771648767367189},{"x":-6.501127908983871,"y":1.7706239490828948},{"x":-6.490998075216129,"y":1.7706239490828948},{"x":-6.480920214349542,"y":1.7716487673671888},{"x":-6.470997738874128,"y":1.7736878879133795},{"x":-6.461332466815517,"y":1.776720386585292},{"x":-6.452023576944236,"y":1.7807151458429258},{"x":-6.443166591067303,"y":1.7856311740505248},{"x":-6.434852393845233,"y":1.7914180261062302},{"x":-6.4271663001924315,"y":1.798016321077088},{"x":-6.42018717983072,"y":1.8053583515277778},{"x":-6.413986647979272,"y":1.8133687782905208},{"x":-6.408628330485541,"y":1.821965403546892},{"x":-6.404167210937977,"y":1.8310600142886682},{"x":-6.400649066459994,"y":1.8405592875026642},{"x":-6.398109997974751,"y":1.850365747791134},{"x":-6.39657605976081,"y":1.8603787676012569},{"x":-6.3960629921,"y":1.8704955998000001}]} isFilled={false} />
      <schematictext text={"TP10"} schX={-6.4960629921} schY={1.8954955998} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.9860120426000005,"y":-0.8916164891},{"x":-5.0860320426,"y":-0.8916164891}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.4859920426,"y":-0.8916164891},{"x":-5.5860120426,"y":-0.8916164891}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.0860320426,"y":-0.9715964891},{"x":-5.4859920426,"y":-0.9715964891000001},{"x":-5.4859920426,"y":-0.8116364891000001},{"x":-5.0860320426,"y":-0.8116364891},{"x":-5.0860320426,"y":-0.9715964891}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R25"} schX={-5.2860120426} schY={-0.7316164891} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"10.0k"} schX={-5.2860120426} schY={-1.0516164891} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":5.9865678555,"y":3.0958545623},{"x":5.9865678555,"y":2.8558545623000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.9865678555,"y":2.7358545623},{"x":5.9865678555,"y":2.4958545623000004}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.826547855499999,"y":2.8558545623000002},{"x":6.1465878555,"y":2.8558545623000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.826547855499999,"y":2.7358545623},{"x":6.1465878555,"y":2.7358545623}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C5"} schX={6.0815678554999995} schY={2.9958545623000004} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={6.0815678554999995} schY={2.5958545623} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":6.368689208,"y":2.6500463176999998},{"x":6.368689208,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.368689208,"y":2.2900463177},{"x":6.368689208,"y":2.0500463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.208669208,"y":2.4100463177},{"x":6.528709208,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.208669208,"y":2.2900463177},{"x":6.528709208,"y":2.2900463177}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C21"} schX={6.463689208} schY={2.5500463177} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={6.463689208} schY={2.1500463176999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":6.7508105604,"y":3.0958545623},{"x":6.7508105604,"y":2.8558545623000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.7508105604,"y":2.7358545623},{"x":6.7508105604,"y":2.4958545623000004}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.590790560399999,"y":2.8558545623000002},{"x":6.9108305604,"y":2.8558545623000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.590790560399999,"y":2.7358545623},{"x":6.9108305604,"y":2.7358545623}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C6"} schX={6.8458105603999995} schY={2.9958545623000004} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={6.8458105603999995} schY={2.5958545623} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":7.1329319129,"y":2.6500463176999998},{"x":7.1329319129,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.1329319129,"y":2.2900463177},{"x":7.1329319129,"y":2.0500463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.9729119129,"y":2.4100463177},{"x":7.2929519129,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":6.9729119129,"y":2.2900463177},{"x":7.2929519129,"y":2.2900463177}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C22"} schX={7.2279319129} schY={2.5500463177} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={7.2279319129} schY={2.1500463176999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":11.6547012506,"y":3.669036591},{"x":11.6547012506,"y":3.429036591}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.6547012506,"y":3.309036591},{"x":11.6547012506,"y":3.069036591}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.494681250600001,"y":3.429036591},{"x":11.8147212506,"y":3.429036591}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.494681250600001,"y":3.309036591},{"x":11.8147212506,"y":3.309036591}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C3"} schX={11.749701250600001} schY={3.569036591} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={11.749701250600001} schY={3.169036591} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":7.96086151,"y":2.6500463176999998},{"x":7.96086151,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.96086151,"y":2.2900463177},{"x":7.96086151,"y":2.0500463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.80084151,"y":2.4100463177},{"x":8.12088151,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.80084151,"y":2.2900463177},{"x":8.12088151,"y":2.2900463177}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C23"} schX={8.05586151} schY={2.5500463177} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"27µF"} schX={8.05586151} schY={2.1500463176999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":7.5150532654,"y":3.0958545623},{"x":7.5150532654,"y":2.8558545623000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.5150532654,"y":2.7358545623},{"x":7.5150532654,"y":2.4958545623000004}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.3550332653999995,"y":2.8558545623000002},{"x":7.6750732654,"y":2.8558545623000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":7.3550332653999995,"y":2.7358545623},{"x":7.6750732654,"y":2.7358545623}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C7"} schX={7.6100532653999995} schY={2.9958545623000004} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"27µF"} schX={7.6100532653999995} schY={2.5958545623} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":9.616720704,"y":3.1595414544},{"x":9.616720704,"y":2.9195414544}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.616720704,"y":2.7995414544},{"x":9.616720704,"y":2.5595414544}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.456700704000001,"y":2.9195414544},{"x":9.776740704,"y":2.9195414544}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.456700704000001,"y":2.7995414544},{"x":9.776740704,"y":2.7995414544}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C4"} schX={9.711720704000001} schY={3.0595414544} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"27µF"} schX={9.711720704000001} schY={2.6595414544} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.3050023159,"y":-3.3569708198},{"x":-6.3050023159,"y":-3.1169708198}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.3050023159,"y":-2.9969708198},{"x":-6.3050023159,"y":-2.7569708198000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.1449823159,"y":-3.1169708198},{"x":-6.465022315900001,"y":-3.1169708198}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.1449823159,"y":-2.9969708198},{"x":-6.465022315900001,"y":-2.9969708198}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C34"} schX={-6.1900023159} schY={-2.8569708198} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"220pF"} schX={-6.1900023159} schY={-3.2569708198000002} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-7.3876794812,"y":-3.6754052801999997},{"x":-7.3876794812,"y":-3.4354052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.3876794812,"y":-3.3154052802},{"x":-7.3876794812,"y":-3.0754052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.2276594812,"y":-3.4354052802},{"x":-7.5476994812000004,"y":-3.4354052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.2276594812,"y":-3.3154052802},{"x":-7.5476994812000004,"y":-3.3154052802}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C35"} schX={-7.2726794812} schY={-3.1754052801999997} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"56pF"} schX={-7.2726794812} schY={-3.5754052802} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":9.9535896248,"y":5.2223251505},{"x":10.0536096248,"y":5.2223251505}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":10.4535696248,"y":5.2223251505},{"x":10.5535896248,"y":5.2223251505}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":10.0536096248,"y":5.3023051505},{"x":10.4535696248,"y":5.3023051505},{"x":10.4535696248,"y":5.1423451505},{"x":10.0536096248,"y":5.1423451505},{"x":10.0536096248,"y":5.3023051505}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R11"} schX={10.2535896248} schY={5.3823251505} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"43k"} schX={10.2535896248} schY={5.0623251504999995} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.0435386753,"y":2.7137332098},{"x":-9.0435386753,"y":2.4737332098}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.0435386753,"y":2.3537332098},{"x":-9.0435386753,"y":2.1137332098000003}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.2035586753,"y":2.4737332098},{"x":-8.883518675300001,"y":2.4737332098}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.2035586753,"y":2.3537332098},{"x":-8.883518675300001,"y":2.3537332098}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C17"} schX={-8.9485386753} schY={2.6137332098000003} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"27µF"} schX={-8.9485386753} schY={2.2137332098} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.5340435387,"y":2.7137332098},{"x":-8.5340435387,"y":2.4737332098}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.5340435387,"y":2.3537332098},{"x":-8.5340435387,"y":2.1137332098000003}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.6940635387,"y":2.4737332098},{"x":-8.374023538700001,"y":2.4737332098}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.6940635387,"y":2.3537332098},{"x":-8.374023538700001,"y":2.3537332098}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C18"} schX={-8.4390435387} schY={2.6137332098000003} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"27µF"} schX={-8.4390435387} schY={2.2137332098} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.024548402,"y":2.7137332098},{"x":-8.024548402,"y":2.4737332098}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.024548402,"y":2.3537332098},{"x":-8.024548402,"y":2.1137332098000003}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.184568402,"y":2.4737332098},{"x":-7.864528402,"y":2.4737332098}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.184568402,"y":2.3537332098},{"x":-7.864528402,"y":2.3537332098}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C19"} schX={-7.929548402000001} schY={2.6137332098000003} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"27µF"} schX={-7.929548402000001} schY={2.2137332098} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":10.6720240852,"y":5.5856739231},{"x":10.6820240852,"y":6.0556739231}]} isFilled={false} />
      <schematicpath points={[{"x":10.0220240852,"y":6.3056739231},{"x":10.462024085200001,"y":6.3056739231}]} isFilled={false} />
      <schematicpath points={[{"x":11.122024085200001,"y":6.3156739231},{"x":10.5820240852,"y":6.315673923099999}]} isFilled={false} />
      <schematicpath points={[{"x":10.462024085200001,"y":6.0956739231},{"x":10.462024085200001,"y":6.315673923099999}]} isFilled={false} />
      <schematicpath points={[{"x":10.4220240852,"y":6.0956739231},{"x":10.5020240852,"y":6.0956739231}]} isFilled={false} />
      <schematicpath points={[{"x":10.6720240852,"y":6.0956739231},{"x":10.6720240852,"y":6.315673923099999}]} isFilled={false} />
      <schematicpath points={[{"x":10.6520240852,"y":6.0956739231},{"x":10.722024085200001,"y":6.0956739231}]} isFilled={false} />
      <schematicpath points={[{"x":10.542024085200001,"y":6.0956739231},{"x":10.6120240852,"y":6.0956739231}]} isFilled={false} />
      <schematicpath points={[{"x":10.542024085200001,"y":6.2056739231},{"x":10.6120240852,"y":6.2056739231},{"x":10.5820240852,"y":6.275673923099999},{"x":10.542024085200001,"y":6.2056739231}]} isFilled={true} />
      <schematicpath points={[{"x":10.5720240852,"y":6.0956739231},{"x":10.5820240852,"y":6.315673923099999}]} isFilled={false} />
      <schematicpath points={[{"x":10.462024085200001,"y":6.0556739231},{"x":10.6820240852,"y":6.0556739231}]} isFilled={false} />
      <schematiccircle center={{"x":10.5720240852,"y":6.1656739231}} radius={0.29} isFilled={false} />
      <schematictext text={"Q3"} schX={10.222024085200001} schY={6.0056739231} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"-60V"} schX={10.9220240852} schY={6.0056739231} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.4893469199,"y":-0.4273737842},{"x":-9.4893469199,"y":-0.3273537842}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.4893469199,"y":0.07260621579999998},{"x":-9.4893469199,"y":0.17262621579999998}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.5693269199,"y":-0.3273537842},{"x":-9.5693269199,"y":0.07260621579999998},{"x":-9.409366919899998,"y":0.07260621579999998},{"x":-9.409366919899998,"y":-0.3273537842},{"x":-9.5693269199,"y":-0.3273537842}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R22"} schX={-9.329346919899999} schY={0.0326262158} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"12.7k"} schX={-9.329346919899999} schY={-0.28737378420000004} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":1.2737378416,"y":1.2284854099},{"x":1.2737378416,"y":1.3285054099}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.2737378416,"y":1.7284654099},{"x":1.2737378416,"y":1.8284854099}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.1937578416,"y":1.3285054099},{"x":1.1937578416,"y":1.7284654099},{"x":1.3537178416,"y":1.7284654099},{"x":1.3537178416,"y":1.3285054099},{"x":1.1937578416,"y":1.3285054099}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R17"} schX={1.4337378416} schY={1.6884854099} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10.0"} schX={1.4337378416} schY={1.3684854099000001} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":2.0379805465,"y":1.2284854099},{"x":2.0379805465,"y":1.3285054099}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":2.0379805465,"y":1.7284654099},{"x":2.0379805465,"y":1.8284854099}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.9580005465,"y":1.3285054099},{"x":1.9580005465,"y":1.7284654099},{"x":2.1179605465,"y":1.7284654099},{"x":2.1179605465,"y":1.3285054099},{"x":1.9580005465,"y":1.3285054099}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R18"} schX={2.1979805465} schY={1.6884854099} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10.0"} schX={2.1979805465} schY={1.3684854099000001} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":11.0815192219,"y":5.553608151900001},{"x":10.9515192219,"y":5.8136081519000005}]} isFilled={false} />
      <schematicpath points={[{"x":11.221519221900001,"y":5.8136081519000005},{"x":11.0815192219,"y":5.553608151900001}]} isFilled={false} />
      <schematicpath points={[{"x":10.9515192219,"y":5.8136081519000005},{"x":11.221519221900001,"y":5.8136081519000005}]} isFilled={false} />
      <schematicpath points={[{"x":11.221519221900001,"y":5.553608151900001},{"x":10.9515192219,"y":5.553608151900001}]} isFilled={false} />
      <schematicpath points={[{"x":11.0815192219,"y":5.8136081519000005},{"x":11.0815192219,"y":6.213608151900001}]} isFilled={false} />
      <schematicpath points={[{"x":11.0815192219,"y":5.1736081519},{"x":11.0815192219,"y":5.5436081519}]} isFilled={false} />
      <schematictext text={"D2"} schX={11.311519221900001} schY={5.7036081519} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10V"} schX={10.7715192219} schY={5.6936081519} anchor={"center_right"} fontSize={0.18} />
      <schematicpath points={[{"x":11.4636405743,"y":5.304446503},{"x":11.4636405743,"y":5.404466503}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.4636405743,"y":5.804426503},{"x":11.4636405743,"y":5.904446503}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":11.383660574299999,"y":5.404466503},{"x":11.383660574299999,"y":5.804426503},{"x":11.5436205743,"y":5.804426503},{"x":11.5436205743,"y":5.404466503},{"x":11.383660574299999,"y":5.404466503}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R5"} schX={11.6236405743} schY={5.764446503} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"180k"} schX={11.6236405743} schY={5.444446503} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-7.0692450208,"y":1.3189902733},{"x":-7.0692450208,"y":1.0789902733}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.0692450208,"y":0.9589902733},{"x":-7.0692450208,"y":0.7189902733}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.229265020800001,"y":1.0789902733},{"x":-6.9092250208,"y":1.0789902733}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.229265020800001,"y":0.9589902733000001},{"x":-6.9092250208,"y":0.9589902733}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C28"} schX={-6.974245020800001} schY={1.2189902733} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={-6.974245020800001} schY={0.8189902733000001} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.5849004169,"y":2.2927281149},{"x":-3.8249004169,"y":2.2927281149}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.9449004169,"y":2.2927281149},{"x":-4.1849004169,"y":2.2927281149}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.8249004169,"y":2.4527481149},{"x":-3.8249004169,"y":2.1327081149000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-3.9449004169,"y":2.4527481149},{"x":-3.9449004169,"y":2.1327081149000002}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C15"} schX={-3.8849004169} schY={2.5327281149000003} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={-3.8849004169} schY={2.0527281149} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-1.8016674385999998,"y":2.2927281149},{"x":-2.0416674385999998,"y":2.2927281149}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.1616674386,"y":2.2927281149},{"x":-2.4016674385999996,"y":2.2927281149}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.0416674385999998,"y":2.4527481149},{"x":-2.0416674385999998,"y":2.1327081149000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.1616674386,"y":2.4527481149},{"x":-2.1616674386,"y":2.1327081149000002}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C16"} schX={-2.1016674386} schY={2.5327281149000003} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={-2.1016674386} schY={2.0527281149} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.527929597,"y":-0.6368689208},{"x":-0.767929597,"y":-0.6368689208}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.8879295970000001,"y":-0.6368689208},{"x":-1.127929597,"y":-0.6368689208}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.767929597,"y":-0.4768489208},{"x":-0.767929597,"y":-0.7968889208000001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.8879295970000001,"y":-0.4768489208},{"x":-0.8879295970000001,"y":-0.7968889208000001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C31"} schX={-0.827929597} schY={-0.3968689208} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={-0.827929597} schY={-0.8768689208} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":0.3636868921,"y":-1.4011116258},{"x":0.1236868921,"y":-1.4011116258}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.0036868921000000054,"y":-1.4011116258},{"x":-0.23631310789999999,"y":-1.4011116258}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.1236868921,"y":-1.2410916258},{"x":0.1236868921,"y":-1.5611316258}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.0036868921000000054,"y":-1.2410916258},{"x":0.0036868921000000054,"y":-1.5611316258}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C33"} schX={0.0636868921} schY={-1.1611116258} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={0.0636868921} schY={-1.6411116258} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":0.2547475683,"y":1.8653543307},{"x":0.2547475683,"y":1.9653743307}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.2547475683,"y":2.3653343307},{"x":0.2547475683,"y":2.4653543307}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":0.1747675683,"y":1.9653743307},{"x":0.1747675683,"y":2.3653343307},{"x":0.3347275683,"y":2.3653343307},{"x":0.3347275683,"y":1.9653743307},{"x":0.1747675683,"y":1.9653743307}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R13"} schX={0.41474756830000004} schY={2.3253543307} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"3.0"} schX={0.41474756830000004} schY={2.0053543307} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":1.5284854099,"y":-8.0061139416},{"x":1.5284854099,"y":-7.9060939416}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.5284854099,"y":-7.5061339416},{"x":1.5284854099,"y":-7.4061139416}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4485054099,"y":-7.9060939416},{"x":1.4485054099,"y":-7.5061339416},{"x":1.6084654099,"y":-7.5061339416},{"x":1.6084654099,"y":-7.9060939416},{"x":1.4485054099,"y":-7.9060939416}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R42"} schX={1.6884854099} schY={-7.5461139416} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"8.25k"} schX={1.6884854099} schY={-7.8661139416} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.3821213525,"y":-8.0061139416},{"x":-0.3821213525,"y":-7.9060939416}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.3821213525,"y":-7.5061339416},{"x":-0.3821213525,"y":-7.4061139416}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.4621013525,"y":-7.9060939416},{"x":-0.4621013525,"y":-7.5061339416},{"x":-0.3021413525,"y":-7.5061339416},{"x":-0.3021413525,"y":-7.9060939416},{"x":-0.4621013525,"y":-7.9060939416}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R41"} schX={-0.2221213525} schY={-7.5461139416} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"3.83k"} schX={-0.2221213525} schY={-7.8661139416} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-5.4586382585,"y":-1.6558591941},{"x":-5.3586182585,"y":-1.6558591941}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.9586582585,"y":-1.6558591941},{"x":-4.8586382585,"y":-1.6558591941}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.3586182585,"y":-1.5758791941},{"x":-4.9586582585,"y":-1.5758791941},{"x":-4.9586582585,"y":-1.7358391941},{"x":-5.3586182585,"y":-1.7358391941},{"x":-5.3586182585,"y":-1.5758791941}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R27"} schX={-5.1586382585} schY={-1.4958591941000001} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-5.1586382585} schY={-1.8158591941} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-1.0374247337,"y":-2.8022232515},{"x":-1.1374447337,"y":-2.8022232515}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-1.5374047337,"y":-2.8022232515},{"x":-1.6374247337,"y":-2.8022232515}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-1.1374447337,"y":-2.8822032515},{"x":-1.5374047337,"y":-2.8822032515},{"x":-1.5374047337,"y":-2.7222432515},{"x":-1.1374447337,"y":-2.7222432515},{"x":-1.1374447337,"y":-2.8822032515}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R10"} schX={-1.3374247337} schY={-2.6422232515} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-1.3374247337} schY={-2.9622232515} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.1201018990000002,"y":4.2670217693},{"x":-2.220121899,"y":4.2670217693}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.620081899,"y":4.2670217693},{"x":-2.720101899,"y":4.2670217693}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-2.220121899,"y":4.1870417693},{"x":-2.620081899,"y":4.1870417693},{"x":-2.620081899,"y":4.3470017693},{"x":-2.220121899,"y":4.3470017693},{"x":-2.220121899,"y":4.1870417693}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R2"} schX={-2.420101899} schY={4.4270217693000005} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-2.420101899} schY={4.1070217693} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.9223251505,"y":-5.2223251505},{"x":-5.0223451505,"y":-5.2223251505}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.4223051505,"y":-5.2223251505},{"x":-5.5223251504999995,"y":-5.2223251505}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-5.0223451505,"y":-5.3023051505},{"x":-5.4223051505,"y":-5.3023051505},{"x":-5.4223051505,"y":-5.1423451505},{"x":-5.0223451505,"y":-5.1423451505},{"x":-5.0223451505,"y":-5.3023051505}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R35"} schX={-5.2223251505} schY={-5.0623251504999995} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-5.2223251505} schY={-5.3823251505} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.6491431218,"y":-5.1803149606000005},{"x":-4.6491431218,"y":-4.9803149606}]} isFilled={false} />
      <schematicpath points={[{"x":-4.7491431217999995,"y":-4.880314960600001},{"x":-4.7486300541391895,"y":-4.8904317927987435},{"x":-4.747096115925249,"y":-4.900444812608867},{"x":-4.744557047440005,"y":-4.910251272897336},{"x":-4.741038902962023,"y":-4.919750546111332},{"x":-4.736577783414458,"y":-4.928845156853108},{"x":-4.731219465920727,"y":-4.937441782109479},{"x":-4.725018934069279,"y":-4.945452208872222},{"x":-4.718039813707569,"y":-4.9527942393229125},{"x":-4.7103537200547665,"y":-4.95939253429377},{"x":-4.702039522832696,"y":-4.965179386349475},{"x":-4.693182536955764,"y":-4.970095414557075},{"x":-4.683873647084482,"y":-4.974090173814709},{"x":-4.674208375025872,"y":-4.977122672486621},{"x":-4.664285899550458,"y":-4.979161793032811},{"x":-4.654208038683871,"y":-4.980186611317106},{"x":-4.644078204916129,"y":-4.980186611317106},{"x":-4.634000344049542,"y":-4.979161793032811},{"x":-4.624077868574128,"y":-4.977122672486621},{"x":-4.614412596515518,"y":-4.974090173814709},{"x":-4.605103706644236,"y":-4.970095414557075},{"x":-4.5962467207673035,"y":-4.965179386349475},{"x":-4.587932523545233,"y":-4.95939253429377},{"x":-4.580246429892432,"y":-4.9527942393229125},{"x":-4.573267309530721,"y":-4.945452208872222},{"x":-4.567066777679273,"y":-4.937441782109479},{"x":-4.5617084601855415,"y":-4.928845156853108},{"x":-4.557247340637977,"y":-4.919750546111332},{"x":-4.553729196159995,"y":-4.910251272897336},{"x":-4.551190127674751,"y":-4.900444812608867},{"x":-4.54965618946081,"y":-4.8904317927987435},{"x":-4.5491431218,"y":-4.880314960600001}]} isFilled={false} />
      <schematictext text={"TP11"} schX={-4.6491431218} schY={-4.8553149606} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.5284854099,"y":-5.8776285317},{"x":1.5284854099,"y":-5.9776485317}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.5284854099,"y":-6.3776085317},{"x":1.5284854099,"y":-6.4776285317}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.6084654099,"y":-5.9776485317},{"x":1.6084654099,"y":-6.3776085317},{"x":1.4485054099,"y":-6.3776085317},{"x":1.4485054099,"y":-5.9776485317},{"x":1.6084654099,"y":-5.9776485317}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R38"} schX={1.6884854099} schY={-6.0176285317} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0"} schX={1.6884854099} schY={-6.3376285317} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":2.5405688594000004,"y":3.47100546831211},{"x":2.5380793194000004,"y":3.475838929085986},{"x":2.5355897794000004,"y":3.4806579387934447},{"x":2.5331002394000004,"y":3.4854481354636992},{"x":2.5306106994000004,"y":3.4901953347679187},{"x":2.5281211594000004,"y":3.4948856174703304},{"x":2.5256316194000004,"y":3.49950541524494},{"x":2.5231420794000003,"y":3.504041594328771},{"x":2.5206525394000003,"y":3.5084815364958817},{"x":2.5181629994000003,"y":3.512813216852924},{"x":2.5156734594000003,"y":3.5170252779766096},{"x":2.5131839194000003,"y":3.5211070999360015},{"x":2.5106943794000003,"y":3.5250488657679186},{"x":2.5082048394000003,"y":3.5288416220017798},{"x":2.5057152994000003,"y":3.532477333860727},{"x":2.5032257594000002,"y":3.535948934798696},{"x":2.5007362194000002,"y":3.539250370068022},{"x":2.4982466794000002,"y":3.5423766340489733},{"x":2.4957571394,"y":3.545323801111062},{"x":2.4932675994,"y":3.5480890498158617},{"x":2.4907780594,"y":3.55067068031211},{"x":2.4882885194,"y":3.5530681248158613},{"x":2.4857989794,"y":3.5552819511110623},{"x":2.4833094394,"y":3.5573138590489735},{"x":2.4808198994,"y":3.559166670068022},{"x":2.4783303594,"y":3.560844309798696},{"x":2.4758408194,"y":3.5623517838607275},{"x":2.4733512794,"y":3.56369514700178},{"x":2.4708617394,"y":3.5648814657679186},{"x":2.4683721994,"y":3.5659187749360015},{"x":2.4658826594,"y":3.5668160279766097},{"x":2.4633931194,"y":3.567583041852924},{"x":2.4609035794,"y":3.568230436495882},{"x":2.4584140394,"y":3.568769569328771},{"x":2.4559244994,"y":3.56921246524494},{"x":2.4534349594,"y":3.5695717424703304},{"x":2.4509454194,"y":3.5698605347679186},{"x":2.4484558794,"y":3.5700924104636993},{"x":2.4459663394,"y":3.5702812887934448},{"x":2.4434767994,"y":3.5704413540859856},{"x":2.4409872594,"y":3.57058696831211},{"x":2.4384977219,"y":3.5704413540859856},{"x":2.4360081844000003,"y":3.5702812887934448},{"x":2.4335186469,"y":3.5700924104636993},{"x":2.4310291094000003,"y":3.5698605347679186},{"x":2.4285395719,"y":3.5695717424703304},{"x":2.4260500344,"y":3.56921246524494},{"x":2.4235604969000004,"y":3.568769569328771},{"x":2.4210709594,"y":3.568230436495882},{"x":2.4185814219000004,"y":3.567583041852924},{"x":2.4160918844,"y":3.5668160279766097},{"x":2.4136023469000003,"y":3.5659187749360015},{"x":2.4111128094000005,"y":3.5648814657679186},{"x":2.4086232719000003,"y":3.56369514700178},{"x":2.4061337344000004,"y":3.5623517838607275},{"x":2.4036441969,"y":3.560844309798696},{"x":2.4011546594000004,"y":3.559166670068022},{"x":2.3986651219000006,"y":3.5573138590489735},{"x":2.3961755844000003,"y":3.5552819511110623},{"x":2.3936860469000005,"y":3.5530681248158613},{"x":2.3911965094000003,"y":3.55067068031211},{"x":2.3887069719000005,"y":3.5480890498158617},{"x":2.3862174344000002,"y":3.545323801111062},{"x":2.3837278969000004,"y":3.5423766340489733},{"x":2.3812383594000006,"y":3.539250370068022},{"x":2.3787488219000004,"y":3.535948934798696},{"x":2.3762592844000006,"y":3.532477333860727},{"x":2.3737697469000003,"y":3.5288416220017798},{"x":2.3712802094000005,"y":3.5250488657679186},{"x":2.3687906719000003,"y":3.5211070999360015},{"x":2.3663011344000004,"y":3.5170252779766096},{"x":2.3638115969000006,"y":3.512813216852924},{"x":2.3613220594000004,"y":3.5084815364958817},{"x":2.3588325219000006,"y":3.504041594328771},{"x":2.3563429844000003,"y":3.49950541524494},{"x":2.3538534469000005,"y":3.4948856174703304},{"x":2.3513639094000007,"y":3.4901953347679187},{"x":2.3488743719000005,"y":3.4854481354636992},{"x":2.3463848344000007,"y":3.4806579387934447},{"x":2.3438952969000004,"y":3.475838929085986},{"x":2.3414057594000006,"y":3.47100546831211}]} isFilled={false} />
      <schematicpath points={[{"x":2.739731859400001,"y":3.471006168312109},{"x":2.7372423219000006,"y":3.4758396315859854},{"x":2.734752784400001,"y":3.480658643793444},{"x":2.7322632469000006,"y":3.4854488429636987},{"x":2.7297737094000007,"y":3.490196044767918},{"x":2.727284171900001,"y":3.49488632997033},{"x":2.7247946344000007,"y":3.4995061302449395},{"x":2.722305096900001,"y":3.5040423118287705},{"x":2.7198155594000006,"y":3.5084822564958813},{"x":2.717326021900001,"y":3.5128139393529234},{"x":2.714836484400001,"y":3.517026002976609},{"x":2.7123469469000008,"y":3.521107827436001},{"x":2.709857409400001,"y":3.5250495957679178},{"x":2.7073678719000007,"y":3.5288423545017795},{"x":2.704878334400001,"y":3.5324780688607267},{"x":2.702388796900001,"y":3.5359496722986954},{"x":2.699899259400001,"y":3.539251110068021},{"x":2.697409721900001,"y":3.5423773765489726},{"x":2.694920184400001,"y":3.5453245461110616},{"x":2.692430646900001,"y":3.548089797315861},{"x":2.689941109400001,"y":3.5506714303121094},{"x":2.687451571900001,"y":3.553068877315861},{"x":2.684962034400001,"y":3.5552827061110617},{"x":2.682472496900001,"y":3.5573146165489726},{"x":2.679982959400001,"y":3.559167430068021},{"x":2.6774934219000013,"y":3.5608450722986955},{"x":2.675003884400001,"y":3.562352548860727},{"x":2.6725143469000012,"y":3.5636959145017792},{"x":2.670024809400001,"y":3.564882235767918},{"x":2.667535271900001,"y":3.5659195474360006},{"x":2.6650457344000014,"y":3.566816802976609},{"x":2.662556196900001,"y":3.5675838193529237},{"x":2.6600666594000013,"y":3.568231216495881},{"x":2.657577121900001,"y":3.5687703518287703},{"x":2.6550875844000013,"y":3.5692132502449394},{"x":2.6525980469000014,"y":3.56957252997033},{"x":2.650108509400001,"y":3.569861324767918},{"x":2.6476189719000014,"y":3.5700932029636987},{"x":2.645129434400001,"y":3.570282083793444},{"x":2.6426398969000013,"y":3.570442151585985},{"x":2.6401503594000015,"y":3.5705877683121092},{"x":2.6376608194000015,"y":3.570442151585985},{"x":2.6351712794000015,"y":3.570282083793444},{"x":2.6326817394000015,"y":3.5700932029636987},{"x":2.6301921994000015,"y":3.569861324767918},{"x":2.6277026594000015,"y":3.56957252997033},{"x":2.6252131194000015,"y":3.5692132502449394},{"x":2.6227235794000014,"y":3.5687703518287703},{"x":2.6202340394000014,"y":3.568231216495881},{"x":2.6177444994000014,"y":3.5675838193529237},{"x":2.6152549594000014,"y":3.566816802976609},{"x":2.6127654194000014,"y":3.5659195474360006},{"x":2.6102758794000014,"y":3.564882235767918},{"x":2.6077863394000014,"y":3.5636959145017792},{"x":2.6052967994000014,"y":3.562352548860727},{"x":2.6028072594000013,"y":3.5608450722986955},{"x":2.6003177194000013,"y":3.559167430068021},{"x":2.5978281794000013,"y":3.5573146165489726},{"x":2.5953386394000013,"y":3.5552827061110617},{"x":2.5928490994000013,"y":3.553068877315861},{"x":2.5903595594000013,"y":3.5506714303121094},{"x":2.5878700194000013,"y":3.548089797315861},{"x":2.5853804794000013,"y":3.5453245461110616},{"x":2.5828909394000013,"y":3.5423773765489726},{"x":2.5804013994000012,"y":3.539251110068021},{"x":2.5779118594000012,"y":3.5359496722986954},{"x":2.575422319400001,"y":3.5324780688607267},{"x":2.572932779400001,"y":3.5288423545017795},{"x":2.570443239400001,"y":3.5250495957679178},{"x":2.567953699400001,"y":3.521107827436001},{"x":2.565464159400001,"y":3.517026002976609},{"x":2.562974619400001,"y":3.5128139393529234},{"x":2.560485079400001,"y":3.5084822564958813},{"x":2.557995539400001,"y":3.5040423118287705},{"x":2.555505999400001,"y":3.4995061302449395},{"x":2.553016459400001,"y":3.49488632997033},{"x":2.550526919400001,"y":3.490196044767918},{"x":2.548037379400001,"y":3.4854488429636987},{"x":2.545547839400001,"y":3.480658643793444},{"x":2.543058299400001,"y":3.4758396315859854},{"x":2.540568759400001,"y":3.471006168312109}]} isFilled={false} />
      <schematicpath points={[{"x":2.9388949594000007,"y":3.471006168312109},{"x":2.9364054194,"y":3.4758396315859854},{"x":2.9339158794000006,"y":3.480658643793444},{"x":2.9314263394000006,"y":3.4854488429636987},{"x":2.9289367994000006,"y":3.490196044767918},{"x":2.9264472594000006,"y":3.49488632997033},{"x":2.9239577194,"y":3.4995061302449395},{"x":2.9214681794000006,"y":3.5040423118287705},{"x":2.9189786394000006,"y":3.5084822564958813},{"x":2.9164890994000006,"y":3.5128139393529234},{"x":2.9139995594000005,"y":3.517026002976609},{"x":2.9115100194000005,"y":3.521107827436001},{"x":2.9090204794000005,"y":3.5250495957679178},{"x":2.9065309394000005,"y":3.5288423545017795},{"x":2.9040413994000005,"y":3.5324780688607267},{"x":2.9015518594000005,"y":3.5359496722986954},{"x":2.8990623194000005,"y":3.539251110068021},{"x":2.8965727794000005,"y":3.5423773765489726},{"x":2.8940832394000005,"y":3.5453245461110616},{"x":2.8915936994000004,"y":3.548089797315861},{"x":2.8891041594000004,"y":3.5506714303121094},{"x":2.8866146194000004,"y":3.553068877315861},{"x":2.8841250794000004,"y":3.5552827061110617},{"x":2.8816355394000004,"y":3.5573146165489726},{"x":2.8791459994000004,"y":3.559167430068021},{"x":2.8766564594000004,"y":3.5608450722986955},{"x":2.8741669194000004,"y":3.562352548860727},{"x":2.8716773794000003,"y":3.5636959145017792},{"x":2.8691878394000003,"y":3.564882235767918},{"x":2.8666982994000003,"y":3.5659195474360006},{"x":2.8642087594000003,"y":3.566816802976609},{"x":2.8617192194000003,"y":3.5675838193529237},{"x":2.8592296794000003,"y":3.568231216495881},{"x":2.8567401394000003,"y":3.5687703518287703},{"x":2.8542505994000003,"y":3.5692132502449394},{"x":2.8517610594000002,"y":3.56957252997033},{"x":2.8492715194000002,"y":3.569861324767918},{"x":2.8467819794,"y":3.5700932029636987},{"x":2.8442924394,"y":3.570282083793444},{"x":2.8418028994,"y":3.570442151585985},{"x":2.8393133594,"y":3.5705877683121092},{"x":2.8368238219,"y":3.570442151585985},{"x":2.8343342844,"y":3.570282083793444},{"x":2.8318447469,"y":3.5700932029636987},{"x":2.8293552094,"y":3.569861324767918},{"x":2.8268656719000003,"y":3.56957252997033},{"x":2.8243761344,"y":3.5692132502449394},{"x":2.8218865969,"y":3.5687703518287703},{"x":2.8193970594,"y":3.568231216495881},{"x":2.8169075219,"y":3.5675838193529237},{"x":2.8144179844000003,"y":3.566816802976609},{"x":2.8119284469,"y":3.5659195474360006},{"x":2.8094389094000003,"y":3.564882235767918},{"x":2.8069493719,"y":3.5636959145017792},{"x":2.8044598344000002,"y":3.562352548860727},{"x":2.8019702969000004,"y":3.5608450722986955},{"x":2.7994807594,"y":3.559167430068021},{"x":2.7969912219000004,"y":3.5573146165489726},{"x":2.7945016844,"y":3.5552827061110617},{"x":2.7920121469000003,"y":3.553068877315861},{"x":2.7895226094000005,"y":3.5506714303121094},{"x":2.7870330719000003,"y":3.548089797315861},{"x":2.7845435344000005,"y":3.5453245461110616},{"x":2.7820539969,"y":3.5423773765489726},{"x":2.7795644594000004,"y":3.539251110068021},{"x":2.7770749219000006,"y":3.5359496722986954},{"x":2.7745853844000004,"y":3.5324780688607267},{"x":2.7720958469000005,"y":3.5288423545017795},{"x":2.7696063094000003,"y":3.5250495957679178},{"x":2.7671167719000005,"y":3.521107827436001},{"x":2.7646272344000007,"y":3.517026002976609},{"x":2.7621376969000004,"y":3.5128139393529234},{"x":2.7596481594000006,"y":3.5084822564958813},{"x":2.7571586219000004,"y":3.5040423118287705},{"x":2.7546690844000006,"y":3.4995061302449395},{"x":2.7521795469000008,"y":3.49488632997033},{"x":2.7496900094000005,"y":3.490196044767918},{"x":2.7472004719000007,"y":3.4854488429636987},{"x":2.7447109344000005,"y":3.480658643793444},{"x":2.7422213969000007,"y":3.4758396315859854},{"x":2.739731859400001,"y":3.471006168312109}]} isFilled={false} />
      <schematicpath points={[{"x":3.1380579594,"y":3.471006168312109},{"x":3.1355684219000004,"y":3.4758396315859854},{"x":3.1330788844000006,"y":3.480658643793444},{"x":3.1305893469000003,"y":3.4854488429636987},{"x":3.1280998094000005,"y":3.490196044767918},{"x":3.1256102719000003,"y":3.49488632997033},{"x":3.1231207344000005,"y":3.4995061302449395},{"x":3.1206311969000007,"y":3.5040423118287705},{"x":3.1181416594000004,"y":3.5084822564958813},{"x":3.1156521219000006,"y":3.5128139393529234},{"x":3.1131625844000004,"y":3.517026002976609},{"x":3.1106730469000006,"y":3.521107827436001},{"x":3.1081835094000008,"y":3.5250495957679178},{"x":3.1056939719000005,"y":3.5288423545017795},{"x":3.1032044344000007,"y":3.5324780688607267},{"x":3.1007148969000005,"y":3.5359496722986954},{"x":3.0982253594000007,"y":3.539251110068021},{"x":3.095735821900001,"y":3.5423773765489726},{"x":3.0932462844000006,"y":3.5453245461110616},{"x":3.090756746900001,"y":3.548089797315861},{"x":3.0882672094000005,"y":3.5506714303121094},{"x":3.0857776719000007,"y":3.553068877315861},{"x":3.083288134400001,"y":3.5552827061110617},{"x":3.0807985969000007,"y":3.5573146165489726},{"x":3.078309059400001,"y":3.559167430068021},{"x":3.0758195219000006,"y":3.5608450722986955},{"x":3.073329984400001,"y":3.562352548860727},{"x":3.070840446900001,"y":3.5636959145017792},{"x":3.0683509094000008,"y":3.564882235767918},{"x":3.065861371900001,"y":3.5659195474360006},{"x":3.0633718344000007,"y":3.566816802976609},{"x":3.060882296900001,"y":3.5675838193529237},{"x":3.058392759400001,"y":3.568231216495881},{"x":3.055903221900001,"y":3.5687703518287703},{"x":3.053413684400001,"y":3.5692132502449394},{"x":3.050924146900001,"y":3.56957252997033},{"x":3.048434609400001,"y":3.569861324767918},{"x":3.045945071900001,"y":3.5700932029636987},{"x":3.043455534400001,"y":3.570282083793444},{"x":3.040965996900001,"y":3.570442151585985},{"x":3.038476459400001,"y":3.5705877683121092},{"x":3.035986919400001,"y":3.570442151585985},{"x":3.033497379400001,"y":3.570282083793444},{"x":3.031007839400001,"y":3.5700932029636987},{"x":3.028518299400001,"y":3.569861324767918},{"x":3.026028759400001,"y":3.56957252997033},{"x":3.023539219400001,"y":3.5692132502449394},{"x":3.021049679400001,"y":3.5687703518287703},{"x":3.018560139400001,"y":3.568231216495881},{"x":3.0160705994000008,"y":3.5675838193529237},{"x":3.0135810594000008,"y":3.566816802976609},{"x":3.0110915194000007,"y":3.5659195474360006},{"x":3.0086019794000007,"y":3.564882235767918},{"x":3.0061124394000007,"y":3.5636959145017792},{"x":3.0036228994000007,"y":3.562352548860727},{"x":3.0011333594000007,"y":3.5608450722986955},{"x":2.9986438194000007,"y":3.559167430068021},{"x":2.9961542794000007,"y":3.5573146165489726},{"x":2.9936647394000007,"y":3.5552827061110617},{"x":2.9911751994000007,"y":3.553068877315861},{"x":2.9886856594000006,"y":3.5506714303121094},{"x":2.9861961194000006,"y":3.548089797315861},{"x":2.9837065794000006,"y":3.5453245461110616},{"x":2.9812170394000006,"y":3.5423773765489726},{"x":2.9787274994000006,"y":3.539251110068021},{"x":2.9762379594000006,"y":3.5359496722986954},{"x":2.9737484194000006,"y":3.5324780688607267},{"x":2.9712588794000006,"y":3.5288423545017795},{"x":2.9687693394000005,"y":3.5250495957679178},{"x":2.9662797994000005,"y":3.521107827436001},{"x":2.9637902594000005,"y":3.517026002976609},{"x":2.9613007194000005,"y":3.5128139393529234},{"x":2.9588111794000005,"y":3.5084822564958813},{"x":2.9563216394000005,"y":3.5040423118287705},{"x":2.9538320994000005,"y":3.4995061302449395},{"x":2.9513425594000005,"y":3.49488632997033},{"x":2.9488530194000004,"y":3.490196044767918},{"x":2.9463634794000004,"y":3.4854488429636987},{"x":2.9438739394000004,"y":3.480658643793444},{"x":2.9413843994000004,"y":3.4758396315859854},{"x":2.9388948594000004,"y":3.471006168312109}]} isFilled={false} />
      <schematicpath points={[{"x":2.3382752594000005,"y":3.4722882683121097},{"x":2.2112448594000007,"y":3.4722882683121097}]} isFilled={false} />
      <schematicpath points={[{"x":3.2667643594000007,"y":3.4677212683121095},{"x":3.1397339593999996,"y":3.4677212683121095}]} isFilled={false} />
      <schematictext text={"L1"} schX={2.736521759400001} schY={3.7248059683121095} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"5.3uH"} schX={2.73635115410516} schY={3.26485867748789} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.5284854099,"y":-5.3681333951},{"x":1.5284854099,"y":-5.4681533951}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.5284854099,"y":-5.8681133951},{"x":1.5284854099,"y":-5.9681333951}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.6084654099,"y":-5.4681533951},{"x":1.6084654099,"y":-5.8681133951},{"x":1.4485054099,"y":-5.8681133951},{"x":1.4485054099,"y":-5.4681533951},{"x":1.6084654099,"y":-5.4681533951}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R36"} schX={1.6884854099} schY={-5.5081333951} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0"} schX={1.6884854099} schY={-5.8281333951} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.9161648912,"y":-8.4829828624},{"x":8.786164891199999,"y":-8.2229828624}]} isFilled={false} />
      <schematicpath points={[{"x":9.0561648912,"y":-8.2229828624},{"x":8.9161648912,"y":-8.4829828624}]} isFilled={false} />
      <schematicpath points={[{"x":8.786164891199999,"y":-8.2229828624},{"x":9.0561648912,"y":-8.2229828624}]} isFilled={false} />
      <schematicpath points={[{"x":9.0561648912,"y":-8.4829828624},{"x":8.786164891199999,"y":-8.4829828624}]} isFilled={false} />
      <schematicpath points={[{"x":8.9161648912,"y":-8.2229828624},{"x":8.9161648912,"y":-7.8229828624}]} isFilled={false} />
      <schematicpath points={[{"x":8.9161648912,"y":-8.8629828624},{"x":8.9161648912,"y":-8.4929828624}]} isFilled={false} />
      <schematictext text={"D4"} schX={9.1461648912} schY={-8.3329828624} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"48V"} schX={8.606164891199999} schY={-8.342982862400001} anchor={"center_right"} fontSize={0.18} />
      <schematicpath points={[{"x":8.9161648912,"y":-6.6997498842},{"x":8.786164891199999,"y":-6.4397498842}]} isFilled={false} />
      <schematicpath points={[{"x":9.0561648912,"y":-6.4397498842},{"x":8.9161648912,"y":-6.6997498842}]} isFilled={false} />
      <schematicpath points={[{"x":8.786164891199999,"y":-6.4397498842},{"x":9.0561648912,"y":-6.4397498842}]} isFilled={false} />
      <schematicpath points={[{"x":9.0561648912,"y":-6.6997498842},{"x":8.786164891199999,"y":-6.6997498842}]} isFilled={false} />
      <schematicpath points={[{"x":8.9161648912,"y":-6.4397498842},{"x":8.9161648912,"y":-6.039749884200001}]} isFilled={false} />
      <schematicpath points={[{"x":8.9161648912,"y":-7.079749884200001},{"x":8.9161648912,"y":-6.709749884200001}]} isFilled={false} />
      <schematictext text={"D3"} schX={9.1461648912} schY={-6.549749884200001} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"48V"} schX={8.606164891199999} schY={-6.5597498842} anchor={"center_right"} fontSize={0.18} />
      <schematicrect schX={7.578740157480317} schY={-8.151922186197314} width={0.6368689207966651} height={1.4011116257526632} />
      <schematicline x1={7.897174617878649} y1={-7.706113941639648} x2={8.151922186197313} y2={-7.706113941639648} />
      <schematictext text={"-"} schX={7.897174617878649} schY={-7.706113941639648} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"1"} schX={8.024548402037981} schY={-7.706113941639648} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={7.897174617878649} y1={-7.960861509958314} x2={8.151922186197313} y2={-7.960861509958314} />
      <schematictext text={"+"} schX={7.897174617878649} schY={-7.960861509958314} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"2"} schX={8.024548402037981} schY={-7.960861509958314} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={7.897174617878649} y1={-8.342982862436314} x2={8.151922186197313} y2={-8.342982862436314} />
      <schematictext text={"MNT_1"} schX={7.897174617878649} schY={-8.342982862436314} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"3"} schX={8.024548402037981} schY={-8.342982862436314} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={7.897174617878649} y1={-8.597730430754979} x2={8.151922186197313} y2={-8.597730430754979} />
      <schematictext text={"MNT_2"} schX={7.897174617878649} schY={-8.597730430754979} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"4"} schX={8.024548402037981} schY={-8.597730430754979} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.8402037981,"y":-3.6754052801999997},{"x":-4.8402037981,"y":-3.5753852802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.8402037981,"y":-3.1754252802},{"x":-4.8402037981,"y":-3.0754052802}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-4.9201837981,"y":-3.5753852802},{"x":-4.9201837981,"y":-3.1754252802},{"x":-4.7602237981,"y":-3.1754252802},{"x":-4.7602237981,"y":-3.5753852802},{"x":-4.9201837981,"y":-3.5753852802}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R31"} schX={-4.6802037981} schY={-3.2154052801999997} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"97.6k"} schX={-4.6802037981} schY={-3.5354052802} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.3821213525,"y":-6.4776285317},{"x":-0.3821213525,"y":-6.3776085317}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.3821213525,"y":-5.9776485317},{"x":-0.3821213525,"y":-5.8776285317}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-0.4621013525,"y":-6.3776085317},{"x":-0.4621013525,"y":-5.9776485317},{"x":-0.3021413525,"y":-5.9776485317},{"x":-0.3021413525,"y":-6.3776085317},{"x":-0.4621013525,"y":-6.3776085317}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R37"} schX={-0.2221213525} schY={-6.0176285317} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"2.7k"} schX={-0.2221213525} schY={-6.3376285317} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-7.1144974525,"y":-0.5731820287},{"x":-7.0144774525,"y":-0.5731820287}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.6145174525,"y":-0.5731820287},{"x":-6.514497452500001,"y":-0.5731820287}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-7.0144774525,"y":-0.4932020287},{"x":-6.6145174525,"y":-0.4932020287},{"x":-6.6145174525,"y":-0.6531620287},{"x":-7.0144774525,"y":-0.6531620287},{"x":-7.0144774525,"y":-0.4932020287}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R24"} schX={-6.8144974525} schY={-0.4131820287} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0"} schX={-6.8144974525} schY={-0.7331820287} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":4.9038906901,"y":3.0321676701999998},{"x":4.9038906901,"y":2.7921676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.9038906901,"y":2.6721676702},{"x":4.9038906901,"y":2.4321676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.7438706901,"y":2.7921676702},{"x":5.0639106901,"y":2.7921676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.7438706901,"y":2.6721676702},{"x":5.0639106901,"y":2.6721676702}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C10"} schX={4.9988906901} schY={2.9321676702} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"GRM188R72A104KA35D"} schX={4.9988906901} schY={2.5321676701999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":12.4826308476,"y":3.0321676701999998},{"x":12.4826308476,"y":2.7921676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.4826308476,"y":2.6721676702},{"x":12.4826308476,"y":2.4321676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.3226108476,"y":2.7921676702},{"x":12.642650847599999,"y":2.7921676702}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.3226108476,"y":2.6721676702},{"x":12.642650847599999,"y":2.6721676702}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C8"} schX={12.5776308476} schY={2.9321676702} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"GRM188R72A104KA35D"} schX={12.5776308476} schY={2.5321676701999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":8.5729272811,"y":6.2413154238},{"x":8.3329272811,"y":6.2413154238}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.212927281099999,"y":6.2413154238},{"x":7.9729272811,"y":6.2413154238}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.3329272811,"y":6.4013354238},{"x":8.3329272811,"y":6.081295423799999}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.212927281099999,"y":6.4013354238},{"x":8.212927281099999,"y":6.081295423799999}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C2"} schX={8.2729272811} schY={6.4813154238} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"GRM188R72A104KA35D"} schX={8.2729272811} schY={6.0013154237999995} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":9.4256600278,"y":7.2991894396},{"x":9.4256600278,"y":7.0591894396}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.4256600278,"y":6.939189439600001},{"x":9.4256600278,"y":6.6991894396000005}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.2656400278,"y":7.0591894396},{"x":9.585680027799999,"y":7.0591894396}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.2656400278,"y":6.939189439600001},{"x":9.585680027799999,"y":6.939189439600001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C1"} schX={9.5206600278} schY={7.1991894396000005} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"GRM188R72A104KA35D"} schX={9.5206600278} schY={6.7991894396} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":9.9351551644,"y":6.6418712367},{"x":9.9351551644,"y":6.7418912367}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.9351551644,"y":7.1418512367},{"x":9.9351551644,"y":7.2418712367}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.855175164399999,"y":6.7418912367},{"x":9.855175164399999,"y":7.1418512367},{"x":10.0151351644,"y":7.1418512367},{"x":10.0151351644,"y":6.7418912367},{"x":9.855175164399999,"y":6.7418912367}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R1"} schX={10.0951551644} schY={7.1018712367} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"5.10k"} schX={10.0951551644} schY={6.7818712367} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":10.5993978694,"y":6.7320379805},{"x":10.5893978694,"y":7.2020379805}]} isFilled={false} />
      <schematicpath points={[{"x":11.249397869400001,"y":7.4520379805},{"x":10.8093978694,"y":7.4520379805}]} isFilled={false} />
      <schematicpath points={[{"x":10.1493978694,"y":7.4620379805},{"x":10.6893978694,"y":7.4620379805}]} isFilled={false} />
      <schematicpath points={[{"x":10.8093978694,"y":7.2420379805},{"x":10.8093978694,"y":7.4620379805}]} isFilled={false} />
      <schematicpath points={[{"x":10.8493978694,"y":7.2420379805},{"x":10.7693978694,"y":7.2420379805}]} isFilled={false} />
      <schematicpath points={[{"x":10.5993978694,"y":7.2420379805},{"x":10.5993978694,"y":7.4620379805}]} isFilled={false} />
      <schematicpath points={[{"x":10.6193978694,"y":7.2420379805},{"x":10.5493978694,"y":7.2420379805}]} isFilled={false} />
      <schematicpath points={[{"x":10.7293978694,"y":7.2420379805},{"x":10.659397869400001,"y":7.2420379805}]} isFilled={false} />
      <schematicpath points={[{"x":10.659397869400001,"y":7.422037980500001},{"x":10.7293978694,"y":7.422037980500001},{"x":10.6993978694,"y":7.3520379805000005},{"x":10.659397869400001,"y":7.422037980500001}]} isFilled={true} />
      <schematicpath points={[{"x":10.6993978694,"y":7.2420379805},{"x":10.6893978694,"y":7.4620379805}]} isFilled={false} />
      <schematicpath points={[{"x":10.8093978694,"y":7.2020379805},{"x":10.5893978694,"y":7.2020379805}]} isFilled={false} />
      <schematiccircle center={{"x":10.6993978694,"y":7.3120379805}} radius={0.29} isFilled={false} />
      <schematictext text={"Q1"} schX={11.0493978694} schY={7.1520379805} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"60V"} schX={10.3493978694} schY={7.1520379805} anchor={"center_right"} fontSize={0.18} />
      <schematicpath points={[{"x":10.2351551644,"y":-3.0569708198},{"x":10.1351351644,"y":-3.0569708198}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":9.7351751644,"y":-3.0569708198},{"x":9.635155164399999,"y":-3.0569708198}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":10.1351351644,"y":-3.1369508198},{"x":9.7351751644,"y":-3.1369508198},{"x":9.7351751644,"y":-2.9769908198},{"x":10.1351351644,"y":-2.9769908198},{"x":10.1351351644,"y":-3.1369508198}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R43"} schX={9.9351551644} schY={-2.8969708198} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"10.0k"} schX={9.9351551644} schY={-3.2169708198} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.7508105604,"y":2.6500463176999998},{"x":-6.7508105604,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.7508105604,"y":2.2900463177},{"x":-6.7508105604,"y":2.0500463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.9108305604,"y":2.4100463177},{"x":-6.590790560399999,"y":2.4100463177}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-6.9108305604,"y":2.2900463177},{"x":-6.590790560399999,"y":2.2900463177}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C40"} schX={-6.6558105604} schY={2.5500463177} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={-6.6558105604} schY={2.1500463176999998} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.1262158407,"y":-0.3636868921},{"x":-10.1262158407,"y":-0.1236868921}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-10.1262158407,"y":-0.0036868921000000054},{"x":-10.1262158407,"y":0.23631310789999999}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.966195840700001,"y":-0.1236868921},{"x":-10.2862358407,"y":-0.1236868921}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-9.966195840700001,"y":-0.0036868920999999985},{"x":-10.2862358407,"y":-0.0036868921000000124}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C29"} schX={-10.0112158407} schY={0.1363131079} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={-10.0112158407} schY={-0.2636868921} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":1.9927281149,"y":-0.5094951366},{"x":2.0927481149,"y":-0.5094951366}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":2.4927081149,"y":-0.5094951366},{"x":2.5927281149,"y":-0.5094951366}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":2.0927481149,"y":-0.4295151366},{"x":2.4927081149,"y":-0.4295151366},{"x":2.4927081149,"y":-0.5894751366},{"x":2.0927481149,"y":-0.5894751366},{"x":2.0927481149,"y":-0.4295151366}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R23"} schX={2.2927281149} schY={-0.3494951366} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"3.0"} schX={2.2927281149} schY={-0.6694951366} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":4.6491431218,"y":-0.7458082446000001},{"x":4.6491431218,"y":-0.6457882446000001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.6491431218,"y":-0.24582824460000002},{"x":4.6491431218,"y":-0.14580824460000003}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.5691631218,"y":-0.6457882446000001},{"x":4.5691631218,"y":-0.24582824460000002},{"x":4.7291231218,"y":-0.24582824460000002},{"x":4.7291231218,"y":-0.6457882446000001},{"x":4.5691631218,"y":-0.6457882446000001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R26"} schX={4.8091431218} schY={-0.2858082446} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"3.0"} schX={4.8091431218} schY={-0.6058082446} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":1.9558591941,"y":1.0826771654},{"x":1.7158591941,"y":1.0826771654}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.5958591941,"y":1.0826771654},{"x":1.3558591941,"y":1.0826771654}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.7158591941,"y":1.2426971654},{"x":1.7158591941,"y":0.9226571654}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.5958591941,"y":1.2426971654},{"x":1.5958591941,"y":0.9226571654}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C25"} schX={1.6558591941} schY={1.3226771654} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"270pF"} schX={1.6558591941} schY={0.8426771654} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":9.1524779991,"y":1.5284854099},{"x":8.9124779991,"y":1.5284854099}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.792477999099999,"y":1.5284854099},{"x":8.552477999099999,"y":1.5284854099}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.9124779991,"y":1.6885054099},{"x":8.9124779991,"y":1.3684654099}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":8.792477999099999,"y":1.6885054099},{"x":8.792477999099999,"y":1.3684654099}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C24"} schX={8.8524779991} schY={1.7684854099} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"0.1uF"} schX={8.8524779991} schY={1.2884854099} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":5.604446503,"y":2.7137332098},{"x":5.604446503,"y":2.4737332098}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.604446503,"y":2.3537332098},{"x":5.604446503,"y":2.1137332098000003}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.444426503,"y":2.4737332098},{"x":5.764466503,"y":2.4737332098}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":5.444426503,"y":2.3537332098},{"x":5.764466503,"y":2.3537332098}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C13"} schX={5.699446503} schY={2.6137332098000003} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"GRM188R72A104KA35D"} schX={5.699446503} schY={2.2137332098} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.5340435387,"y":-4.8854562297},{"x":-8.5340435387,"y":-4.7854362297}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.5340435387,"y":-4.3854762297},{"x":-8.5340435387,"y":-4.2854562297}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.614023538700001,"y":-4.7854362297},{"x":-8.614023538700001,"y":-4.3854762297},{"x":-8.4540635387,"y":-4.3854762297},{"x":-8.4540635387,"y":-4.7854362297},{"x":-8.614023538700001,"y":-4.7854362297}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R34"} schX={-8.3740435387} schY={-4.4254562297} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"20.0k"} schX={-8.3740435387} schY={-4.7454562297} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.5340435387,"y":-5.3949513664},{"x":-8.5340435387,"y":-5.1549513664}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.5340435387,"y":-5.0349513664000005},{"x":-8.5340435387,"y":-4.7949513664}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.374023538700001,"y":-5.1549513664},{"x":-8.6940635387,"y":-5.1549513664}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.374023538700001,"y":-5.0349513664000005},{"x":-8.6940635387,"y":-5.0349513664000005}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C39"} schX={-8.4190435387} schY={-4.8949513664} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"0.047uF"} schX={-8.4190435387} schY={-5.2949513664} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.9798517832,"y":-5.076516906},{"x":-8.9798517832,"y":-4.836516906}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.9798517832,"y":-4.716516906000001},{"x":-8.9798517832,"y":-4.4765169060000005}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.819831783200001,"y":-4.836516906},{"x":-9.1398717832,"y":-4.836516906}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":-8.819831783200001,"y":-4.716516906000001},{"x":-9.1398717832,"y":-4.716516906000001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C38"} schX={-8.8648517832} schY={-4.576516906} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"4700pF"} schX={-8.8648517832} schY={-4.9765169060000005} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":3.8849004169,"y":1.4832329782},{"x":3.8849004169,"y":1.5832529782}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":3.8849004169,"y":1.9832129782},{"x":3.8849004169,"y":2.0832329782}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":3.8049204169,"y":1.5832529782},{"x":3.8049204169,"y":1.9832129782},{"x":3.9648804169,"y":1.9832129782},{"x":3.9648804169,"y":1.5832529782},{"x":3.8049204169,"y":1.5832529782}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R20"} schX={4.0449004169} schY={1.9432329782} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"0"} schX={4.0449004169} schY={1.6232329782000001} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":12.4189439555,"y":7.0444418712},{"x":12.4189439555,"y":6.8044418712}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.4189439555,"y":6.684441871200001},{"x":12.4189439555,"y":6.4444418712000004}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.2589239555,"y":6.8044418712},{"x":12.578963955499999,"y":6.8044418712}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":12.2589239555,"y":6.684441871200001},{"x":12.578963955499999,"y":6.684441871200001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C41"} schX={12.5139439555} schY={6.9444418712000004} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"10µF"} schX={12.5139439555} schY={6.5444418712} anchor={"top_left"} fontSize={0.18} />
      <schematicrect schX={-3.0569708198239915} schY={-0.8279295970356646} width={2.2927281148679945} height={4.967577582213988} />
      <schematicline x1={-4.203334877257989} y1={1.0189902732746638} x2={-4.458082445576656} y2={1.0189902732746638} />
      <schematictext text={"VCC1"} schX={-4.203334877257989} schY={1.0189902732746638} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1"} schX={-4.330708661417322} schY={1.0189902732746638} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={0.8916164891153304} x2={-4.458082445576656} y2={0.8916164891153304} />
      <schematictext text={"VCC2"} schX={-4.203334877257989} schY={0.8916164891153304} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"29"} schX={-4.330708661417322} schY={0.8916164891153304} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={1.4011116257526623} x2={-4.458082445576656} y2={1.4011116257526623} />
      <schematictext text={"VIN"} schX={-4.203334877257989} schY={1.4011116257526623} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"36"} schX={-4.330708661417322} schY={1.4011116257526623} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-2.8022232515053265} x2={-1.6558591940713292} y2={-2.8022232515053265} />
      <schematictext text={"AGND"} schX={-1.9106067623899943} schY={-2.8022232515053265} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"15"} schX={-1.7832329782306617} schY={-2.8022232515053265} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-0.5094951366373319} x2={-1.6558591940713292} y2={-0.5094951366373319} />
      <schematictext text={"SW1"} schX={-1.9106067623899943} schY={-0.5094951366373319} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"23"} schX={-1.7832329782306617} schY={-0.5094951366373319} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-1.2737378415933307} x2={-1.6558591940713292} y2={-1.2737378415933307} />
      <schematictext text={"SW2"} schX={-1.9106067623899943} schY={-1.2737378415933307} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"33"} schX={-1.7832329782306617} schY={-1.2737378415933307} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-0.3821213524780003} x2={-1.6558591940713292} y2={-0.3821213524780003} />
      <schematictext text={"HO1"} schX={-1.9106067623899943} schY={-0.3821213524780003} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"24"} schX={-1.7832329782306617} schY={-0.3821213524780003} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-1.1463640574339973} x2={-1.6558591940713292} y2={-1.1463640574339973} />
      <schematictext text={"HO2"} schX={-1.9106067623899943} schY={-1.1463640574339973} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"32"} schX={-1.7832329782306617} schY={-1.1463640574339973} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-0.6368689207966653} x2={-1.6558591940713292} y2={-0.6368689207966653} />
      <schematictext text={"HB1"} schX={-1.9106067623899943} schY={-0.6368689207966653} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"25"} schX={-1.7832329782306617} schY={-0.6368689207966653} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-1.4011116257526641} x2={-1.6558591940713292} y2={-1.4011116257526641} />
      <schematictext text={"HB2"} schX={-1.9106067623899943} schY={-1.4011116257526641} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"31"} schX={-1.7832329782306617} schY={-1.4011116257526641} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-0.7642427049559988} x2={-1.6558591940713292} y2={-0.7642427049559988} />
      <schematictext text={"LO1"} schX={-1.9106067623899943} schY={-0.7642427049559988} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"27"} schX={-1.7832329782306617} schY={-0.7642427049559988} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-1.5284854099119976} x2={-1.6558591940713292} y2={-1.5284854099119976} />
      <schematictext text={"LO2"} schX={-1.9106067623899943} schY={-1.5284854099119976} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"30"} schX={-1.7832329782306617} schY={-1.5284854099119976} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-0.8916164891153322} x2={-4.458082445576656} y2={-0.8916164891153322} />
      <schematictext text={"F\\\\L\\\\T\\\\"} schX={-4.203334877257989} schY={-0.8916164891153322} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"11"} schX={-4.330708661417322} schY={-0.8916164891153322} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-3.184344603983326} x2={-4.458082445576656} y2={-3.184344603983326} />
      <schematictext text={"R\\\\S\\\\T\\\\"} schX={-4.203334877257989} schY={-3.184344603983326} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"38"} schX={-4.330708661417322} schY={-3.184344603983326} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-2.674849467345993} x2={-4.458082445576656} y2={-2.674849467345993} />
      <schematictext text={"ADDR(CFG1)"} schX={-4.203334877257989} schY={-2.674849467345993} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"9"} schX={-4.330708661417322} schY={-2.674849467345993} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={0.6368689207966653} x2={-4.458082445576656} y2={0.6368689207966653} />
      <schematictext text={"BIAS"} schX={-4.203334877257989} schY={0.6368689207966653} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"40"} schX={-4.330708661417322} schY={0.6368689207966653} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-1.4011116257526641} x2={-4.458082445576656} y2={-1.4011116257526641} />
      <schematictext text={"CDC"} schX={-4.203334877257989} schY={-1.4011116257526641} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"10"} schX={-4.330708661417322} schY={-1.4011116257526641} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-2.420101899027328} x2={-4.458082445576656} y2={-2.420101899027328} />
      <schematictext text={"CFG2"} schX={-4.203334877257989} schY={-2.420101899027328} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"8"} schX={-4.330708661417322} schY={-2.420101899027328} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-1.910606762389996} x2={-4.458082445576656} y2={-1.910606762389996} />
      <schematictext text={"COMP"} schX={-4.203334877257989} schY={-1.910606762389996} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"13"} schX={-4.330708661417322} schY={-1.910606762389996} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={0.12737378415933343} x2={-1.6558591940713292} y2={0.12737378415933343} />
      <schematictext text={"CSA"} schX={-1.9106067623899943} schY={0.12737378415933343} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"22"} schX={-1.7832329782306617} schY={0.12737378415933343} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={0} x2={-1.6558591940713292} y2={0} />
      <schematictext text={"CSB"} schX={-1.9106067623899943} schY={0} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"21"} schX={-1.7832329782306617} schY={0} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-1.910606762389996} x2={-1.6558591940713292} y2={-1.910606762389996} />
      <schematictext text={"DRV1"} schX={-1.9106067623899943} schY={-1.910606762389996} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"35"} schX={-1.7832329782306617} schY={-1.910606762389996} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-1.6558591940713292} x2={-4.458082445576656} y2={-1.6558591940713292} />
      <schematictext text={"DTRK"} schX={-4.203334877257989} schY={-1.6558591940713292} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"4"} schX={-4.330708661417322} schY={-1.6558591940713292} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={0.3821213524779985} x2={-4.458082445576656} y2={0.3821213524779985} />
      <schematictext text={"EN/UVLO"} schX={-4.203334877257989} schY={0.3821213524779985} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"37"} schX={-4.330708661417322} schY={0.3821213524779985} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={0.8916164891153304} x2={-1.6558591940713292} y2={0.8916164891153304} />
      <schematictext text={"FB/I\\\\N\\\\T\\\\"} schX={-1.9106067623899943} schY={0.8916164891153304} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"14"} schX={-1.7832329782306617} schY={0.8916164891153304} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-1.1463640574339973} x2={-4.458082445576656} y2={-1.1463640574339973} />
      <schematictext text={"ILIMCOMP"} schX={-4.203334877257989} schY={-1.1463640574339973} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"16"} schX={-4.330708661417322} schY={-1.1463640574339973} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={0.3821213524779985} x2={-1.6558591940713292} y2={0.3821213524779985} />
      <schematictext text={"ISNSN"} schX={-1.9106067623899943} schY={0.3821213524779985} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"19"} schX={-1.7832329782306617} schY={0.3821213524779985} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={0.5094951366373319} x2={-1.6558591940713292} y2={0.5094951366373319} />
      <schematictext text={"ISNSP"} schX={-1.9106067623899943} schY={0.5094951366373319} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"20"} schX={-1.7832329782306617} schY={0.5094951366373319} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={0} x2={-4.458082445576656} y2={0} />
      <schematictext text={"MODE"} schX={-4.203334877257989} schY={0} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"7"} schX={-4.330708661417322} schY={0} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-2.92959703566466} x2={-4.458082445576656} y2={-2.92959703566466} />
      <schematictext text={"RT"} schX={-4.203334877257989} schY={-2.92959703566466} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"12"} schX={-4.330708661417322} schY={-2.92959703566466} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-0.5094951366373319} x2={-4.458082445576656} y2={-0.5094951366373319} />
      <schematictext text={"SCL"} schX={-4.203334877257989} schY={-0.5094951366373319} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"6"} schX={-4.330708661417322} schY={-0.5094951366373319} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-0.6368689207966653} x2={-4.458082445576656} y2={-0.6368689207966653} />
      <schematictext text={"SDA"} schX={-4.203334877257989} schY={-0.6368689207966653} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"5"} schX={-4.330708661417322} schY={-0.6368689207966653} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-2.165354330708661} x2={-4.458082445576656} y2={-2.165354330708661} />
      <schematictext text={"SS/ATRK"} schX={-4.203334877257989} schY={-2.165354330708661} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"2"} schX={-4.330708661417322} schY={-2.165354330708661} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-4.203334877257989} y1={-0.25474756831866685} x2={-4.458082445576656} y2={-0.25474756831866685} />
      <schematictext text={"SYNC"} schX={-4.203334877257989} schY={-0.25474756831866685} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"3"} schX={-4.330708661417322} schY={-0.25474756831866685} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={1.4011116257526623} x2={-1.6558591940713292} y2={1.4011116257526623} />
      <schematictext text={"VOUT"} schX={-1.9106067623899943} schY={1.4011116257526623} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"18"} schX={-1.7832329782306617} schY={1.4011116257526623} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-2.2927281148679945} x2={-1.6558591940713292} y2={-2.2927281148679945} />
      <schematictext text={"NC"} schX={-1.9106067623899943} schY={-2.2927281148679945} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"26"} schX={-1.7832329782306617} schY={-2.2927281148679945} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-2.420101899027328} x2={-1.6558591940713292} y2={-2.420101899027328} />
      <schematictext text={"NC"} schX={-1.9106067623899943} schY={-2.420101899027328} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"34"} schX={-1.7832329782306617} schY={-2.420101899027328} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-2.5474756831866614} x2={-1.6558591940713292} y2={-2.5474756831866614} />
      <schematictext text={"NC"} schX={-1.9106067623899943} schY={-2.5474756831866614} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"39"} schX={-1.7832329782306617} schY={-2.5474756831866614} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-2.92959703566466} x2={-1.6558591940713292} y2={-2.92959703566466} />
      <schematictext text={"AGND"} schX={-1.9106067623899943} schY={-2.92959703566466} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"17"} schX={-1.7832329782306617} schY={-2.92959703566466} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-3.0569708198239933} x2={-1.6558591940713292} y2={-3.0569708198239933} />
      <schematictext text={"GND"} schX={-1.9106067623899943} schY={-3.0569708198239933} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"41"} schX={-1.7832329782306617} schY={-3.0569708198239933} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={-1.9106067623899943} y1={-3.184344603983326} x2={-1.6558591940713292} y2={-3.184344603983326} />
      <schematictext text={"PGND"} schX={-1.9106067623899943} schY={-3.184344603983326} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"28"} schX={-1.7832329782306617} schY={-3.184344603983326} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":3.9301528484999997,"y":2.8022232515},{"x":3.6901528485,"y":2.8022232515}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":3.5701528485,"y":2.8022232515},{"x":3.3301528485,"y":2.8022232515}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":3.6901528485,"y":2.9622432515},{"x":3.6901528485,"y":2.6422032515000002}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":3.5701528485,"y":2.9622432515},{"x":3.5701528485,"y":2.6422032515000002}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C42"} schX={3.6301528485} schY={3.0422232515000003} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"4700pF"} schX={3.6301528485} schY={2.5622232515} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.8653543307,"y":-3.5664659565},{"x":1.9653743307,"y":-3.5664659565}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":2.3653343307,"y":-3.5664659565},{"x":2.4653543307,"y":-3.5664659565}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.9653743307,"y":-3.4864859565},{"x":2.3653343307,"y":-3.4864859565},{"x":2.3653343307,"y":-3.6464459565},{"x":1.9653743307,"y":-3.6464459565},{"x":1.9653743307,"y":-3.4864859565}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R32"} schX={2.1653543307} schY={-3.4064659565} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"3.9"} schX={2.1653543307} schY={-3.7264659565000002} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.8653543307,"y":-4.7128300139},{"x":1.9653743307,"y":-4.7128300139}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":2.3653343307,"y":-4.7128300139},{"x":2.4653543307,"y":-4.7128300139}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.9653743307,"y":-4.6328500139},{"x":2.3653343307,"y":-4.6328500139},{"x":2.3653343307,"y":-4.7928100139},{"x":1.9653743307,"y":-4.7928100139},{"x":1.9653743307,"y":-4.6328500139}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"R33"} schX={2.1653543307} schY={-4.5528300138999995} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"3.9"} schX={2.1653543307} schY={-4.8728300139} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":2.8022232515,"y":-4.0575266327},{"x":2.8022232515,"y":-3.8175266327}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":2.8022232515,"y":-3.6975266327},{"x":2.8022232515,"y":-3.4575266327}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":2.9622432515,"y":-3.8175266327},{"x":2.6422032515000002,"y":-3.8175266327}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":2.9622432515,"y":-3.6975266327},{"x":2.6422032515000002,"y":-3.6975266327}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C43"} schX={2.9172232515000003} schY={-3.5575266326999997} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"680pF"} schX={2.9172232515000003} schY={-3.9575266327} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":4.012274201,"y":-4.0575266327},{"x":4.012274201,"y":-3.8175266327}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.012274201,"y":-3.6975266327},{"x":4.012274201,"y":-3.4575266327}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.172294201000001,"y":-3.8175266327},{"x":3.8522542010000005,"y":-3.8175266327}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.172294201000001,"y":-3.6975266327},{"x":3.8522542010000005,"y":-3.6975266327}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C44"} schX={4.1272742010000005} schY={-3.5575266326999997} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"680pF"} schX={4.1272742010000005} schY={-3.9575266327} anchor={"top_left"} fontSize={0.18} />
      <schematicrect schX={8.215609078276978} schY={-3.0569708198239933} width={0.4} height={0.4} />
      <schematicline x1={8.415609078276978} y1={-3.0569708198239933} x2={8.470356646595645} y2={-3.0569708198239933} />
      <schematictext text={"2"} schX={8.415609078276978} schY={-3.0569708198239933} anchor={"center_right"} fontSize={0.18} />
      <schematictext text={"2"} schX={8.442982862436311} schY={-3.0569708198239933} anchor={"bottom_center"} fontSize={0.18} />
      <schematicline x1={8.015609078276979} y1={-3.0569708198239933} x2={7.960861509958315} y2={-3.0569708198239933} />
      <schematictext text={"1"} schX={8.015609078276979} schY={-3.0569708198239933} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"1"} schX={7.988235294117647} schY={-3.0569708198239933} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.7647985178,"y":-0.5094951366},{"x":1.5247985178,"y":-0.5094951366}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4047985178,"y":-0.5094951366},{"x":1.1647985178,"y":-0.5094951366}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.5247985178,"y":-0.3494751366},{"x":1.5247985178,"y":-0.6695151366000001}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":1.4047985178,"y":-0.3494751366},{"x":1.4047985178,"y":-0.6695151366000001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C30"} schX={1.4647985178} schY={-0.2694951366} anchor={"bottom_center"} fontSize={0.18} />
      <schematictext text={"680pF"} schX={1.4647985178} schY={-0.7494951366} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":4.6491431218,"y":-1.3189902733},{"x":4.6491431218,"y":-1.0789902733}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.6491431218,"y":-0.9589902733},{"x":4.6491431218,"y":-0.7189902733}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.8091631218,"y":-1.0789902733},{"x":4.4891231218,"y":-1.0789902733}]} strokeWidth={0.012} isFilled={false} />
      <schematicpath points={[{"x":4.8091631218,"y":-0.9589902733},{"x":4.4891231218,"y":-0.9589902733000001}]} strokeWidth={0.012} isFilled={false} />
      <schematictext text={"C32"} schX={4.7641431218} schY={-0.8189902733000001} anchor={"bottom_left"} fontSize={0.18} />
      <schematictext text={"1000pF"} schX={4.7641431218} schY={-1.2189902733} anchor={"top_left"} fontSize={0.18} />
      <schematicpath points={[{"x":1.1463640574,"y":3.290041686},{"x":1.1463640574,"y":3.490041686}]} isFilled={false} />
      <schematicpath points={[{"x":1.0463640574,"y":3.590041686},{"x":1.0468771250608104,"y":3.579924853801257},{"x":1.0484110632747505,"y":3.569911833991134},{"x":1.0509501317599952,"y":3.5601053737026644},{"x":1.054468276237977,"y":3.550606100488668},{"x":1.058929395785542,"y":3.541511489746892},{"x":1.0642877132792723,"y":3.532914864490521},{"x":1.070488245130721,"y":3.524904437727778},{"x":1.0774673654924314,"y":3.517562407277088},{"x":1.0851534591452336,"y":3.51096411230623},{"x":1.0934676563673038,"y":3.505177260250525},{"x":1.1023246422442365,"y":3.500261232042926},{"x":1.111633532115518,"y":3.496266472785292},{"x":1.121298804174128,"y":3.4932339741133798},{"x":1.1312212796495424,"y":3.491194853567189},{"x":1.1412991405161288,"y":3.490170035282895},{"x":1.1514289742838713,"y":3.490170035282895},{"x":1.1615068351504576,"y":3.491194853567189},{"x":1.171429310625872,"y":3.4932339741133798},{"x":1.181094582684482,"y":3.496266472785292},{"x":1.1904034725557635,"y":3.500261232042926},{"x":1.1992604584326962,"y":3.505177260250525},{"x":1.2075746556547662,"y":3.51096411230623},{"x":1.2152607493075687,"y":3.517562407277088},{"x":1.222239869669279,"y":3.524904437727778},{"x":1.2284404015207278,"y":3.532914864490521},{"x":1.2337987190144581,"y":3.541511489746892},{"x":1.2382598385620232,"y":3.550606100488668},{"x":1.2417779830400049,"y":3.5601053737026644},{"x":1.2443170515252495,"y":3.569911833991134},{"x":1.2458509897391896,"y":3.579924853801257},{"x":1.2463640574000001,"y":3.590041686}]} isFilled={false} />
      <schematictext text={"TP5"} schX={1.1463640574} schY={3.615041686} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-1.3911116257526623,"y":4.493334877257989},{"x":-1.4011116257526623,"y":4.163334877257989}]} isFilled={true} />
      <schematicpath points={[{"x":-1.6211116257526623,"y":4.163334877257989},{"x":-1.1811116257526624,"y":4.163334877257989}]} isFilled={true} />
      <schematicpath points={[{"x":-1.5711116257526623,"y":4.083334877257989},{"x":-1.2311116257526624,"y":4.083334877257989}]} isFilled={true} />
      <schematicpath points={[{"x":-1.4611116257526624,"y":4.013334877257988},{"x":-1.3411116257526623,"y":4.013334877257988}]} isFilled={true} />
      <schematictext text={""} schX={-1.4211116257526624} schY={3.8933348772579888} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":9.626720704029644,"y":2.9011625752663273},{"x":9.616720704029644,"y":2.571162575266327}]} isFilled={true} />
      <schematicpath points={[{"x":9.396720704029644,"y":2.571162575266327},{"x":9.836720704029645,"y":2.571162575266327}]} isFilled={true} />
      <schematicpath points={[{"x":9.446720704029644,"y":2.491162575266327},{"x":9.786720704029644,"y":2.491162575266327}]} isFilled={true} />
      <schematicpath points={[{"x":9.556720704029644,"y":2.4211625752663273},{"x":9.676720704029645,"y":2.4211625752663273}]} isFilled={true} />
      <schematictext text={""} schX={9.596720704029645} schY={2.301162575266327} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-5.530759610930987,"y":2.8374756831866597},{"x":-5.540759610930987,"y":2.5074756831866596}]} isFilled={true} />
      <schematicpath points={[{"x":-5.760759610930987,"y":2.5074756831866596},{"x":-5.320759610930987,"y":2.5074756831866596}]} isFilled={true} />
      <schematicpath points={[{"x":-5.710759610930987,"y":2.4274756831866595},{"x":-5.370759610930987,"y":2.4274756831866595}]} isFilled={true} />
      <schematicpath points={[{"x":-5.600759610930987,"y":2.3574756831866597},{"x":-5.4807596109309875,"y":2.3574756831866597}]} isFilled={true} />
      <schematictext text={""} schX={-5.560759610930987} schY={2.2374756831866596} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.2447475683186651,"y":2.6464150069476604},{"x":-0.2547475683186651,"y":2.3164150069476603}]} isFilled={true} />
      <schematicpath points={[{"x":-0.47474756831866505,"y":2.3164150069476603},{"x":-0.03474756831866507,"y":2.3164150069476603}]} isFilled={true} />
      <schematicpath points={[{"x":-0.4247475683186651,"y":2.2364150069476603},{"x":-0.08474756831866506,"y":2.2364150069476603}]} isFilled={true} />
      <schematicpath points={[{"x":-0.31474756831866507,"y":2.1664150069476604},{"x":-0.19474756831866508,"y":2.1664150069476604}]} isFilled={true} />
      <schematictext text={""} schX={-0.27474756831866504} schY={2.0464150069476603} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":11.664701250578972,"y":3.538031496062991},{"x":11.654701250578972,"y":3.2080314960629908}]} isFilled={true} />
      <schematicpath points={[{"x":11.434701250578971,"y":3.2080314960629908},{"x":11.874701250578973,"y":3.2080314960629908}]} isFilled={true} />
      <schematicpath points={[{"x":11.484701250578972,"y":3.1280314960629907},{"x":11.824701250578972,"y":3.1280314960629907}]} isFilled={true} />
      <schematicpath points={[{"x":11.594701250578971,"y":3.058031496062991},{"x":11.714701250578972,"y":3.058031496062991}]} isFilled={true} />
      <schematictext text={""} schX={11.634701250578972} schY={2.9380314960629907} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.3654052802223244,"y":2.455354330708661},{"x":-3.3754052802223242,"y":2.125354330708661}]} isFilled={true} />
      <schematicpath points={[{"x":-3.5954052802223244,"y":2.125354330708661},{"x":-3.155405280222324,"y":2.125354330708661}]} isFilled={true} />
      <schematicpath points={[{"x":-3.545405280222324,"y":2.045354330708661},{"x":-3.2054052802223243,"y":2.045354330708661}]} isFilled={true} />
      <schematicpath points={[{"x":-3.4354052802223243,"y":1.9753543307086612},{"x":-3.315405280222324,"y":1.9753543307086612}]} isFilled={true} />
      <schematictext text={""} schX={-3.3954052802223242} schY={1.855354330708661} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.167628531727652,"y":2.3279805465493277},{"x":-6.177628531727652,"y":1.9979805465493277}]} isFilled={true} />
      <schematicpath points={[{"x":-6.397628531727651,"y":1.9979805465493277},{"x":-5.957628531727652,"y":1.9979805465493277}]} isFilled={true} />
      <schematicpath points={[{"x":-6.3476285317276515,"y":1.9179805465493276},{"x":-6.007628531727652,"y":1.9179805465493278}]} isFilled={true} />
      <schematicpath points={[{"x":-6.237628531727651,"y":1.8479805465493278},{"x":-6.117628531727652,"y":1.8479805465493278}]} isFilled={true} />
      <schematictext text={""} schX={-6.197628531727651} schY={1.7279805465493276} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.880458545622973,"y":2.2006067623899943},{"x":-10.890458545622973,"y":1.8706067623899942}]} isFilled={true} />
      <schematicpath points={[{"x":-11.110458545622974,"y":1.8706067623899942},{"x":-10.670458545622973,"y":1.8706067623899942}]} isFilled={true} />
      <schematicpath points={[{"x":-11.060458545622973,"y":1.7906067623899942},{"x":-10.720458545622973,"y":1.7906067623899944}]} isFilled={true} />
      <schematicpath points={[{"x":-10.950458545622974,"y":1.7206067623899943},{"x":-10.830458545622973,"y":1.7206067623899943}]} isFilled={true} />
      <schematictext text={""} schX={-10.910458545622973} schY={1.6006067623899942} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":6.951871236683651,"y":2.2006067623899943},{"x":6.941871236683651,"y":1.8706067623899942}]} isFilled={true} />
      <schematicpath points={[{"x":6.7218712366836515,"y":1.8706067623899942},{"x":7.161871236683651,"y":1.8706067623899942}]} isFilled={true} />
      <schematicpath points={[{"x":6.771871236683651,"y":1.7906067623899942},{"x":7.111871236683651,"y":1.7906067623899944}]} isFilled={true} />
      <schematicpath points={[{"x":6.881871236683652,"y":1.7206067623899943},{"x":7.001871236683651,"y":1.7206067623899943}]} isFilled={true} />
      <schematictext text={""} schX={6.921871236683652} schY={1.6006067623899942} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.410101899027328,"y":2.455354330708661},{"x":-2.420101899027328,"y":2.125354330708661}]} isFilled={true} />
      <schematicpath points={[{"x":-2.640101899027328,"y":2.125354330708661},{"x":-2.200101899027328,"y":2.125354330708661}]} isFilled={true} />
      <schematicpath points={[{"x":-2.590101899027328,"y":2.045354330708661},{"x":-2.250101899027328,"y":2.045354330708661}]} isFilled={true} />
      <schematicpath points={[{"x":-2.480101899027328,"y":1.9753543307086612},{"x":-2.360101899027328,"y":1.9753543307086612}]} isFilled={true} />
      <schematictext text={""} schX={-2.440101899027328} schY={1.855354330708661} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.8816164891153304,"y":1.245303381194998},{"x":-0.8916164891153304,"y":0.915303381194998}]} isFilled={true} />
      <schematicpath points={[{"x":-1.1116164891153304,"y":0.915303381194998},{"x":-0.6716164891153305,"y":0.915303381194998}]} isFilled={true} />
      <schematicpath points={[{"x":-1.0616164891153304,"y":0.835303381194998},{"x":-0.7216164891153304,"y":0.835303381194998}]} isFilled={true} />
      <schematicpath points={[{"x":-0.9516164891153304,"y":0.7653033811949981},{"x":-0.8316164891153304,"y":0.7653033811949981}]} isFilled={true} />
      <schematictext text={""} schX={-0.9116164891153304} schY={0.645303381194998} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.040254747568318,"y":1.1179295970356646},{"x":-6.050254747568318,"y":0.7879295970356646}]} isFilled={true} />
      <schematicpath points={[{"x":-6.270254747568318,"y":0.7879295970356646},{"x":-5.830254747568318,"y":0.7879295970356646}]} isFilled={true} />
      <schematicpath points={[{"x":-6.220254747568318,"y":0.7079295970356646},{"x":-5.880254747568318,"y":0.7079295970356646}]} isFilled={true} />
      <schematicpath points={[{"x":-6.110254747568318,"y":0.6379295970356647},{"x":-5.9902547475683185,"y":0.6379295970356647}]} isFilled={true} />
      <schematictext text={""} schX={-6.070254747568318} schY={0.5179295970356645} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":12.492630847614635,"y":1.9458591940713292},{"x":12.482630847614635,"y":1.6158591940713292}]} isFilled={true} />
      <schematicpath points={[{"x":12.262630847614634,"y":1.6158591940713292},{"x":12.702630847614635,"y":1.6158591940713292}]} isFilled={true} />
      <schematicpath points={[{"x":12.312630847614635,"y":1.535859194071329},{"x":12.652630847614635,"y":1.5358591940713293}]} isFilled={true} />
      <schematicpath points={[{"x":12.422630847614634,"y":1.4658591940713293},{"x":12.542630847614635,"y":1.4658591940713293}]} isFilled={true} />
      <schematictext text={""} schX={12.462630847614635} schY={1.3458591940713291} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.13520611394164,"y":0.4173737841593334},{"x":-11.14520611394164,"y":0.08737378415933342}]} isFilled={true} />
      <schematicpath points={[{"x":-11.36520611394164,"y":0.08737378415933342},{"x":-10.92520611394164,"y":0.08737378415933345}]} isFilled={true} />
      <schematicpath points={[{"x":-11.31520611394164,"y":0.007373784159333416},{"x":-10.97520611394164,"y":0.0073737841593334436}]} isFilled={true} />
      <schematicpath points={[{"x":-11.20520611394164,"y":-0.06262621584066658},{"x":-11.08520611394164,"y":-0.06262621584066658}]} isFilled={true} />
      <schematictext text={""} schX={-11.16520611394164} schY={-0.18262621584066657} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-9.479346919870311,"y":-0.0921213524780003},{"x":-9.48934691987031,"y":-0.42212135247800026}]} isFilled={true} />
      <schematicpath points={[{"x":-9.709346919870312,"y":-0.4221213524780003},{"x":-9.26934691987031,"y":-0.42212135247800026}]} isFilled={true} />
      <schematicpath points={[{"x":-9.65934691987031,"y":-0.5021213524780003},{"x":-9.319346919870311,"y":-0.5021213524780003}]} isFilled={true} />
      <schematicpath points={[{"x":-9.549346919870311,"y":-0.5721213524780002},{"x":-9.42934691987031,"y":-0.5721213524780002}]} isFilled={true} />
      <schematictext text={""} schX={-9.50934691987031} schY={-0.6921213524780003} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.13520611394164,"y":-0.7926771653543314},{"x":-11.14520611394164,"y":-1.1226771653543315}]} isFilled={true} />
      <schematicpath points={[{"x":-11.36520611394164,"y":-1.1226771653543315},{"x":-10.92520611394164,"y":-1.1226771653543315}]} isFilled={true} />
      <schematicpath points={[{"x":-11.31520611394164,"y":-1.2026771653543316},{"x":-10.97520611394164,"y":-1.2026771653543313}]} isFilled={true} />
      <schematicpath points={[{"x":-11.20520611394164,"y":-1.2726771653543314},{"x":-11.08520611394164,"y":-1.2726771653543314}]} isFilled={true} />
      <schematictext text={""} schX={-11.16520611394164} schY={-1.3926771653543315} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.0289902732746639,"y":-2.575910143584993},{"x":1.0189902732746638,"y":-2.905910143584993}]} isFilled={true} />
      <schematicpath points={[{"x":0.7989902732746639,"y":-2.905910143584993},{"x":1.2389902732746638,"y":-2.905910143584993}]} isFilled={true} />
      <schematicpath points={[{"x":0.8489902732746638,"y":-2.9859101435849933},{"x":1.1889902732746638,"y":-2.9859101435849933}]} isFilled={true} />
      <schematicpath points={[{"x":0.9589902732746639,"y":-3.055910143584993},{"x":1.078990273274664,"y":-3.055910143584993}]} isFilled={true} />
      <schematictext text={""} schX={0.9989902732746638} schY={-3.1759101435849932} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.13520611394164,"y":-2.066415006947662},{"x":-11.14520611394164,"y":-2.396415006947662}]} isFilled={true} />
      <schematicpath points={[{"x":-11.36520611394164,"y":-2.396415006947662},{"x":-10.92520611394164,"y":-2.396415006947662}]} isFilled={true} />
      <schematicpath points={[{"x":-11.31520611394164,"y":-2.4764150069476623},{"x":-10.97520611394164,"y":-2.4764150069476623}]} isFilled={true} />
      <schematicpath points={[{"x":-11.20520611394164,"y":-2.546415006947662},{"x":-11.08520611394164,"y":-2.546415006947662}]} isFilled={true} />
      <schematictext text={""} schX={-11.16520611394164} schY={-2.666415006947662} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-1.5184854099119958,"y":-3.6585873089393237},{"x":-1.5284854099119958,"y":-3.988587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-1.7484854099119957,"y":-3.988587308939324},{"x":-1.3084854099119958,"y":-3.988587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-1.6984854099119957,"y":-4.068587308939324},{"x":-1.3584854099119958,"y":-4.068587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-1.5884854099119958,"y":-4.138587308939324},{"x":-1.4684854099119957,"y":-4.138587308939324}]} isFilled={true} />
      <schematictext text={""} schX={-1.5484854099119958} schY={-4.258587308939323} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-1.0089902732746638,"y":-3.6585873089393237},{"x":-1.0189902732746638,"y":-3.988587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-1.2389902732746638,"y":-3.988587308939324},{"x":-0.7989902732746639,"y":-3.988587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-1.1889902732746638,"y":-4.068587308939324},{"x":-0.8489902732746638,"y":-4.068587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-1.078990273274664,"y":-4.138587308939324},{"x":-0.9589902732746638,"y":-4.138587308939324}]} isFilled={true} />
      <schematictext text={""} schX={-1.0389902732746639} schY={-4.258587308939323} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-4.830203798054654,"y":-3.6585873089393237},{"x":-4.840203798054654,"y":-3.988587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-5.060203798054654,"y":-3.988587308939324},{"x":-4.620203798054654,"y":-3.988587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-5.010203798054654,"y":-4.068587308939324},{"x":-4.670203798054654,"y":-4.068587308939324}]} isFilled={true} />
      <schematicpath points={[{"x":-4.900203798054654,"y":-4.138587308939324},{"x":-4.780203798054655,"y":-4.138587308939324}]} isFilled={true} />
      <schematictext text={""} schX={-4.860203798054654} schY={-4.258587308939323} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":3.6401528485409926,"y":-3.9133348772579906},{"x":3.630152848540993,"y":-4.243334877257991}]} isFilled={true} />
      <schematicpath points={[{"x":3.4101528485409927,"y":-4.243334877257991},{"x":3.850152848540993,"y":-4.243334877257991}]} isFilled={true} />
      <schematicpath points={[{"x":3.460152848540993,"y":-4.323334877257991},{"x":3.800152848540993,"y":-4.323334877257991}]} isFilled={true} />
      <schematicpath points={[{"x":3.570152848540993,"y":-4.393334877257991},{"x":3.690152848540993,"y":-4.393334877257991}]} isFilled={true} />
      <schematictext text={""} schX={3.610152848540993} schY={-4.51333487725799} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.6011625752663274,"y":-4.359143121815656},{"x":-2.6111625752663272,"y":-4.689143121815656}]} isFilled={true} />
      <schematicpath points={[{"x":-2.8311625752663274,"y":-4.689143121815656},{"x":-2.391162575266327,"y":-4.689143121815656}]} isFilled={true} />
      <schematicpath points={[{"x":-2.781162575266327,"y":-4.769143121815656},{"x":-2.4411625752663273,"y":-4.769143121815656}]} isFilled={true} />
      <schematicpath points={[{"x":-2.6711625752663273,"y":-4.839143121815656},{"x":-2.551162575266327,"y":-4.839143121815656}]} isFilled={true} />
      <schematictext text={""} schX={-2.6311625752663272} schY={-4.959143121815655} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-2.983283927744326,"y":-4.359143121815656},{"x":-2.9932839277443257,"y":-4.689143121815656}]} isFilled={true} />
      <schematicpath points={[{"x":-3.213283927744326,"y":-4.689143121815656},{"x":-2.7732839277443255,"y":-4.689143121815656}]} isFilled={true} />
      <schematicpath points={[{"x":-3.1632839277443257,"y":-4.769143121815656},{"x":-2.823283927744326,"y":-4.769143121815656}]} isFilled={true} />
      <schematicpath points={[{"x":-3.0532839277443258,"y":-4.839143121815656},{"x":-2.9332839277443257,"y":-4.839143121815656}]} isFilled={true} />
      <schematictext text={""} schX={-3.0132839277443257} schY={-4.959143121815655} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-10.94414543770264,"y":-4.295456229735989},{"x":-10.954145437702639,"y":-4.625456229735989}]} isFilled={true} />
      <schematicpath points={[{"x":-11.17414543770264,"y":-4.625456229735989},{"x":-10.734145437702638,"y":-4.625456229735989}]} isFilled={true} />
      <schematicpath points={[{"x":-11.124145437702639,"y":-4.705456229735989},{"x":-10.78414543770264,"y":-4.705456229735989}]} isFilled={true} />
      <schematicpath points={[{"x":-11.01414543770264,"y":-4.7754562297359895},{"x":-10.894145437702639,"y":-4.7754562297359895}]} isFilled={true} />
      <schematictext text={""} schX={-10.974145437702639} schY={-4.895456229735989} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-3.693839740620657,"y":-6.2139606492203185},{"x":-3.813839740620657,"y":-6.305002315886985}]} isFilled={false} />
      <schematicpath points={[{"x":-3.693839740620657,"y":-6.2139606492203185},{"x":-3.573839740620657,"y":-6.305002315886985}]} isFilled={false} />
      <schematicpath points={[{"x":-3.693839740620657,"y":-6.2139606492203185},{"x":-3.693839740620657,"y":-6.4152106492203185}]} isFilled={false} />
      <schematictext text={""} schX={-3.693839740620657} schY={-6.185210649220318} anchor={"bottom_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-5.594446503010653,"y":-6.906618805002316},{"x":-5.604446503010653,"y":-7.236618805002316}]} isFilled={true} />
      <schematicpath points={[{"x":-5.824446503010653,"y":-7.236618805002316},{"x":-5.384446503010653,"y":-7.236618805002316}]} isFilled={true} />
      <schematicpath points={[{"x":-5.774446503010653,"y":-7.316618805002316},{"x":-5.434446503010653,"y":-7.316618805002316}]} isFilled={true} />
      <schematicpath points={[{"x":-5.664446503010653,"y":-7.386618805002317},{"x":-5.544446503010653,"y":-7.386618805002317}]} isFilled={true} />
      <schematictext text={""} schX={-5.6244465030106525} schY={-7.506618805002316} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.5384854099119958,"y":-7.92560907827698},{"x":1.5284854099119958,"y":-8.25560907827698}]} isFilled={true} />
      <schematicpath points={[{"x":1.3084854099119958,"y":-8.25560907827698},{"x":1.7484854099119957,"y":-8.25560907827698}]} isFilled={true} />
      <schematicpath points={[{"x":1.3584854099119958,"y":-8.33560907827698},{"x":1.6984854099119957,"y":-8.33560907827698}]} isFilled={true} />
      <schematicpath points={[{"x":1.4684854099119957,"y":-8.40560907827698},{"x":1.5884854099119958,"y":-8.40560907827698}]} isFilled={true} />
      <schematictext text={""} schX={1.5084854099119958} schY={-8.52560907827698} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-6.74081056044465,"y":1.1179295970356646},{"x":-6.75081056044465,"y":0.7879295970356646}]} isFilled={true} />
      <schematicpath points={[{"x":-6.97081056044465,"y":0.7879295970356646},{"x":-6.5308105604446505,"y":0.7879295970356646}]} isFilled={true} />
      <schematicpath points={[{"x":-6.92081056044465,"y":0.7079295970356646},{"x":-6.58081056044465,"y":0.7079295970356646}]} isFilled={true} />
      <schematicpath points={[{"x":-6.81081056044465,"y":0.6379295970356647},{"x":-6.690810560444651,"y":0.6379295970356647}]} isFilled={true} />
      <schematictext text={""} schX={-6.77081056044465} schY={0.5179295970356645} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-8.715104214914312,"y":-5.123385826771654},{"x":-8.725104214914312,"y":-5.453385826771654}]} isFilled={true} />
      <schematicpath points={[{"x":-8.945104214914313,"y":-5.453385826771654},{"x":-8.505104214914311,"y":-5.453385826771654}]} isFilled={true} />
      <schematicpath points={[{"x":-8.895104214914312,"y":-5.533385826771654},{"x":-8.555104214914312,"y":-5.533385826771654}]} isFilled={true} />
      <schematicpath points={[{"x":-8.785104214914313,"y":-5.603385826771654},{"x":-8.665104214914312,"y":-5.603385826771654}]} isFilled={true} />
      <schematictext text={""} schX={-8.745104214914312} schY={-5.723385826771653} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-11.13520611394164,"y":-6.015002315886985},{"x":-11.14520611394164,"y":-6.345002315886985}]} isFilled={true} />
      <schematicpath points={[{"x":-11.36520611394164,"y":-6.345002315886985},{"x":-10.92520611394164,"y":-6.345002315886985}]} isFilled={true} />
      <schematicpath points={[{"x":-11.31520611394164,"y":-6.425002315886985},{"x":-10.97520611394164,"y":-6.425002315886985}]} isFilled={true} />
      <schematicpath points={[{"x":-11.20520611394164,"y":-6.495002315886985},{"x":-11.08520611394164,"y":-6.495002315886985}]} isFilled={true} />
      <schematictext text={""} schX={-11.16520611394164} schY={-6.615002315886985} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-5.785507179249652,"y":-1.17479851783233},{"x":-5.795507179249652,"y":-1.50479851783233}]} isFilled={true} />
      <schematicpath points={[{"x":-6.015507179249652,"y":-1.50479851783233},{"x":-5.5755071792496524,"y":-1.50479851783233}]} isFilled={true} />
      <schematicpath points={[{"x":-5.965507179249652,"y":-1.58479851783233},{"x":-5.625507179249652,"y":-1.5847985178323298}]} isFilled={true} />
      <schematicpath points={[{"x":-5.855507179249652,"y":-1.65479851783233},{"x":-5.735507179249653,"y":-1.65479851783233}]} isFilled={true} />
      <schematictext text={""} schX={-5.815507179249652} schY={-1.77479851783233} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.3721213524779985,"y":-7.92560907827698},{"x":-0.3821213524779985,"y":-8.25560907827698}]} isFilled={true} />
      <schematicpath points={[{"x":-0.6021213524779985,"y":-8.25560907827698},{"x":-0.1621213524779985,"y":-8.25560907827698}]} isFilled={true} />
      <schematicpath points={[{"x":-0.5521213524779985,"y":-8.33560907827698},{"x":-0.2121213524779985,"y":-8.33560907827698}]} isFilled={true} />
      <schematicpath points={[{"x":-0.4421213524779985,"y":-8.40560907827698},{"x":-0.3221213524779985,"y":-8.40560907827698}]} isFilled={true} />
      <schematictext text={""} schX={-0.40212135247799846} schY={-8.52560907827698} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":-0.3721213524779985,"y":-6.397123668364984},{"x":-0.3821213524779985,"y":-6.727123668364984}]} isFilled={true} />
      <schematicpath points={[{"x":-0.6021213524779985,"y":-6.727123668364984},{"x":-0.1621213524779985,"y":-6.727123668364984}]} isFilled={true} />
      <schematicpath points={[{"x":-0.5521213524779985,"y":-6.8071236683649845},{"x":-0.2121213524779985,"y":-6.8071236683649845}]} isFilled={true} />
      <schematicpath points={[{"x":-0.4421213524779985,"y":-6.877123668364985},{"x":-0.3221213524779985,"y":-6.877123668364985}]} isFilled={true} />
      <schematictext text={""} schX={-0.40212135247799846} schY={-6.997123668364984} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":1.5384854099119958,"y":-6.397123668364984},{"x":1.5284854099119958,"y":-6.727123668364984}]} isFilled={true} />
      <schematicpath points={[{"x":1.3084854099119958,"y":-6.727123668364984},{"x":1.7484854099119957,"y":-6.727123668364984}]} isFilled={true} />
      <schematicpath points={[{"x":1.3584854099119958,"y":-6.8071236683649845},{"x":1.6984854099119957,"y":-6.8071236683649845}]} isFilled={true} />
      <schematicpath points={[{"x":1.4684854099119957,"y":-6.877123668364985},{"x":1.5884854099119958,"y":-6.877123668364985}]} isFilled={true} />
      <schematictext text={""} schX={1.5084854099119958} schY={-6.997123668364984} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":8.289295970356648,"y":-8.435104214914313},{"x":8.279295970356648,"y":-8.765104214914311}]} isFilled={true} />
      <schematicpath points={[{"x":8.059295970356647,"y":-8.765104214914311},{"x":8.499295970356648,"y":-8.765104214914311}]} isFilled={true} />
      <schematicpath points={[{"x":8.109295970356648,"y":-8.845104214914311},{"x":8.449295970356648,"y":-8.845104214914311}]} isFilled={true} />
      <schematicpath points={[{"x":8.219295970356647,"y":-8.915104214914312},{"x":8.339295970356648,"y":-8.915104214914312}]} isFilled={true} />
      <schematictext text={""} schX={8.259295970356648} schY={-9.035104214914313} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":8.161922186197312,"y":-6.65187123668365},{"x":8.151922186197313,"y":-6.98187123668365}]} isFilled={true} />
      <schematicpath points={[{"x":7.931922186197313,"y":-6.98187123668365},{"x":8.371922186197313,"y":-6.98187123668365}]} isFilled={true} />
      <schematicpath points={[{"x":7.981922186197313,"y":-7.0618712366836505},{"x":8.321922186197312,"y":-7.0618712366836505}]} isFilled={true} />
      <schematicpath points={[{"x":8.091922186197312,"y":-7.131871236683651},{"x":8.211922186197313,"y":-7.131871236683651}]} isFilled={true} />
      <schematictext text={""} schX={8.131922186197313} schY={-7.25187123668365} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":7.8619221861973125,"y":-5.912880963408986},{"x":8.191922186197312,"y":-5.922880963408986}]} isFilled={true} />
      <schematicpath points={[{"x":8.191922186197312,"y":-6.142880963408985},{"x":8.191922186197312,"y":-5.702880963408986}]} isFilled={true} />
      <schematicpath points={[{"x":8.271922186197312,"y":-6.0928809634089856},{"x":8.271922186197312,"y":-5.752880963408986}]} isFilled={true} />
      <schematicpath points={[{"x":8.341922186197312,"y":-5.982880963408985},{"x":8.341922186197312,"y":-5.862880963408986}]} isFilled={true} />
      <schematictext text={""} schX={8.461922186197313} schY={-5.942880963408985} anchor={"center_left"} fontSize={0.18} />
      <schematicpath points={[{"x":7.989295970356648,"y":-7.6961139416396485},{"x":8.319295970356647,"y":-7.706113941639648}]} isFilled={true} />
      <schematicpath points={[{"x":8.319295970356647,"y":-7.926113941639648},{"x":8.319295970356647,"y":-7.4861139416396485}]} isFilled={true} />
      <schematicpath points={[{"x":8.399295970356647,"y":-7.876113941639648},{"x":8.399295970356647,"y":-7.536113941639648}]} isFilled={true} />
      <schematicpath points={[{"x":8.469295970356647,"y":-7.766113941639648},{"x":8.469295970356647,"y":-7.646113941639649}]} isFilled={true} />
      <schematictext text={""} schX={8.589295970356648} schY={-7.726113941639648} anchor={"center_left"} fontSize={0.18} />
      <schematictext text={"HV_VSYS"} schX={10.572024085224642} schY={-6.1776285317276525} fontSize={0.18} />
      <schematictext text={"PPHV"} schX={10.572024085224642} schY={-7.960861509958314} fontSize={0.18} />
      <schematictext text={"SDA"} schX={-0.7642427049559988} schY={-7.451366373320982} fontSize={0.18} />
      <schematictext text={"SCL"} schX={1.1463640574339973} schY={-7.451366373320982} fontSize={0.18} />
      <schematictext text={"PPHV"} schX={12.737378415933302} schY={7.196618805002316} fontSize={0.18} />
      <schematicpath points={[{"x":-7.186618805002316,"y":-0.28318202871699955},{"x":-7.196618805002315,"y":-0.6131820287169996}]} isFilled={true} />
      <schematicpath points={[{"x":-7.416618805002315,"y":-0.6131820287169996},{"x":-6.976618805002316,"y":-0.6131820287169996}]} isFilled={true} />
      <schematicpath points={[{"x":-7.366618805002315,"y":-0.6931820287169995},{"x":-7.0266188050023155,"y":-0.6931820287169995}]} isFilled={true} />
      <schematicpath points={[{"x":-7.256618805002315,"y":-0.7631820287169995},{"x":-7.136618805002316,"y":-0.7631820287169995}]} isFilled={true} />
      <schematictext text={""} schX={-7.216618805002315} schY={-0.8831820287169996} anchor={"top_center"} fontSize={0.18} />
      <schematictext text={"HV_VSYS"} schX={-11.33626679018064} schY={4.075961093098655} fontSize={0.18} />
      <schematicpath points={[{"x":9.69040759610931,"y":-4.4228300138953225},{"x":9.68040759610931,"y":-4.752830013895323}]} isFilled={true} />
      <schematicpath points={[{"x":9.46040759610931,"y":-4.752830013895323},{"x":9.90040759610931,"y":-4.752830013895323}]} isFilled={true} />
      <schematicpath points={[{"x":9.51040759610931,"y":-4.832830013895323},{"x":9.85040759610931,"y":-4.832830013895323}]} isFilled={true} />
      <schematicpath points={[{"x":9.62040759610931,"y":-4.902830013895323},{"x":9.74040759610931,"y":-4.902830013895323}]} isFilled={true} />
      <schematictext text={""} schX={9.66040759610931} schY={-5.022830013895322} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":10.19990273274664,"y":-1.7479805465493294},{"x":10.18990273274664,"y":-2.0779805465493295}]} isFilled={true} />
      <schematicpath points={[{"x":9.96990273274664,"y":-2.0779805465493295},{"x":10.409902732746641,"y":-2.0779805465493295}]} isFilled={true} />
      <schematicpath points={[{"x":10.01990273274664,"y":-2.1579805465493296},{"x":10.35990273274664,"y":-2.1579805465493296}]} isFilled={true} />
      <schematicpath points={[{"x":10.12990273274664,"y":-2.2279805465493294},{"x":10.24990273274664,"y":-2.2279805465493294}]} isFilled={true} />
      <schematictext text={""} schX={10.16990273274664} schY={-2.3479805465493295} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":7.907174617878649,"y":-3.149092172301992},{"x":7.897174617878649,"y":-3.479092172301992}]} isFilled={true} />
      <schematicpath points={[{"x":7.6771746178786495,"y":-3.479092172301992},{"x":8.11717461787865,"y":-3.479092172301992}]} isFilled={true} />
      <schematicpath points={[{"x":7.727174617878649,"y":-3.559092172301992},{"x":8.06717461787865,"y":-3.559092172301992}]} isFilled={true} />
      <schematicpath points={[{"x":7.83717461787865,"y":-3.6290921723019918},{"x":7.957174617878649,"y":-3.6290921723019918}]} isFilled={true} />
      <schematictext text={""} schX={7.87717461787865} schY={-3.749092172301992} anchor={"top_center"} fontSize={0.18} />
      <schematicpath points={[{"x":12.428943955534969,"y":6.849749884205651},{"x":12.418943955534969,"y":6.519749884205651}]} isFilled={true} />
      <schematicpath points={[{"x":12.198943955534968,"y":6.519749884205651},{"x":12.63894395553497,"y":6.519749884205651}]} isFilled={true} />
      <schematicpath points={[{"x":12.248943955534969,"y":6.439749884205651},{"x":12.588943955534969,"y":6.439749884205651}]} isFilled={true} />
      <schematicpath points={[{"x":12.358943955534968,"y":6.369749884205651},{"x":12.47894395553497,"y":6.369749884205651}]} isFilled={true} />
      <schematictext text={""} schX={12.39894395553497} schY={6.249749884205651} anchor={"top_center"} fontSize={0.18} />
      <schematictext text={"5"} schX={-1.6558591940713292} schY={4.5217693376563215} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"4"} schX={-1.5284854099119958} schY={4.5217693376563215} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"1"} schX={-1.1463640574339973} schY={4.5217693376563215} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"2"} schX={-1.2737378415933307} schY={4.5217693376563215} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"3"} schX={-1.4011116257526623} schY={4.5217693376563215} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematicpath points={[{"x":-1.7832329782306613,"y":4.649143121815655},{"x":-1.0189902732746634,"y":4.649143121815655},{"x":-1.0189902732746634,"y":4.903890690134322},{"x":-1.7832329782306613,"y":4.903890690134322},{"x":-1.7832329782306613,"y":4.649143121815655}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-1.2737378415933307,"y":4.776516905974988}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-1.1463640574339973,"y":4.776516905974988}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-1.4011116257526623,"y":4.776516905974988}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-1.5284854099119958,"y":4.776516905974988}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-1.6558591940713292,"y":4.776516905974988}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-1.1845761926817973,"y":4.738304770727188},{"x":-1.1081519221861973,"y":4.738304770727188},{"x":-1.1081519221861973,"y":4.8147290412227886},{"x":-1.1845761926817973,"y":4.8147290412227886},{"x":-1.1845761926817973,"y":4.738304770727188}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicline x1={-1.6558591940713292} y1={4.649143121815655} x2={-1.6558591940713292} y2={4.394395553496988} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-1.5284854099119958} y1={4.649143121815655} x2={-1.5284854099119958} y2={4.394395553496988} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-1.2737378415933307,"y":4.649143121815655},{"x":-1.2737378415933307,"y":4.738304770727188}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-1.1463640574339973,"y":4.649143121815655},{"x":-1.1463640574339973,"y":4.738304770727188}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-1.4011116257526623,"y":4.649143121815655},{"x":-1.4011116257526623,"y":4.738304770727188}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-1.1463640574339973} y1={4.649143121815655} x2={-1.1463640574339973} y2={4.394395553496988} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-1.2737378415933307} y1={4.649143121815655} x2={-1.2737378415933307} y2={4.394395553496988} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-1.4011116257526623} y1={4.649143121815655} x2={-1.4011116257526623} y2={4.394395553496988} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":4.649143121815655},{"x":-1.5284854099119958,"y":4.738304770727188}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":4.649143121815655},{"x":-1.6558591940713292,"y":4.738304770727188}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematictext text={"JP2"} schX={-2.1016674386289953} schY={4.712830013895321} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"J2"} schX={-11.727327466419638} schY={4.023839740620657} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"108-0740-001"} schX={-11.727327466419638} schY={3.363839740620657} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"J1"} schX={12.728439092172303} schY={4.087526632700325} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"108-0740-001"} schX={12.728439092172303} schY={3.4275266327003244} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"5"} schX={-11.782075034738305} schY={2.5474756831866596} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"4"} schX={-11.782075034738305} schY={2.674849467345993} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"1"} schX={-11.782075034738305} schY={3.0569708198239915} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-11.782075034738305} schY={2.92959703566466} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={-11.782075034738305} schY={2.8022232515053265} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"6"} schX={-11.782075034738305} schY={2.420101899027326} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-12.164196387216304,"y":2.292728114867993},{"x":-11.909448818897637,"y":2.292728114867993},{"x":-11.909448818897637,"y":3.1843446039833245},{"x":-12.164196387216304,"y":3.1843446039833245},{"x":-12.164196387216304,"y":2.292728114867993}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-12.03682260305697,"y":2.92959703566466}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-12.03682260305697,"y":2.8022232515053265}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-12.03682260305697,"y":2.674849467345993}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-12.03682260305697,"y":2.5474756831866596}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-12.03682260305697,"y":2.420101899027326}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-12.07503473830477,"y":3.018758684576192},{"x":-11.99861046780917,"y":3.018758684576192},{"x":-11.99861046780917,"y":3.0951829550717913},{"x":-12.07503473830477,"y":3.0951829550717913},{"x":-12.07503473830477,"y":3.018758684576192}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicline x1={-11.909448818897637} y1={2.5474756831866596} x2={-11.654701250578972} y2={2.5474756831866596} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.909448818897637} y1={2.674849467345993} x2={-11.654701250578972} y2={2.674849467345993} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-11.909448818897637,"y":2.92959703566466},{"x":-11.99861046780917,"y":2.92959703566466}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.909448818897637,"y":3.0569708198239915},{"x":-11.99861046780917,"y":3.0569708198239915}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.909448818897637,"y":2.8022232515053265},{"x":-11.99861046780917,"y":2.8022232515053265}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.909448818897637} y1={3.0569708198239915} x2={-11.654701250578972} y2={3.0569708198239915} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.909448818897637} y1={2.92959703566466} x2={-11.654701250578972} y2={2.92959703566466} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.909448818897637} y1={2.8022232515053265} x2={-11.654701250578972} y2={2.8022232515053265} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-11.909448818897637,"y":2.674849467345993},{"x":-11.99861046780917,"y":2.674849467345993}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.909448818897637,"y":2.5474756831866596},{"x":-11.99861046780917,"y":2.5474756831866596}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.909448818897637} y1={2.420101899027326} x2={-11.654701250578972} y2={2.420101899027326} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-11.909448818897637,"y":2.420101899027326},{"x":-11.99861046780917,"y":2.420101899027326}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematictext text={"J3"} schX={-12.164196387216304} schY={3.184344603983325} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"5"} schX={12.737378415933302} schY={2.5474756831866596} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"4"} schX={12.737378415933302} schY={2.674849467345993} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"1"} schX={12.737378415933302} schY={3.0569708198239915} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={12.737378415933302} schY={2.92959703566466} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={12.737378415933302} schY={2.8022232515053265} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"6"} schX={12.737378415933302} schY={2.420101899027326} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":12.864752200092635,"y":2.292728114867993},{"x":13.119499768411302,"y":2.292728114867993},{"x":13.119499768411302,"y":3.1843446039833245},{"x":12.864752200092635,"y":3.1843446039833245},{"x":12.864752200092635,"y":2.292728114867993}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":12.992125984251969,"y":2.92959703566466}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":12.992125984251969,"y":2.8022232515053265}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":12.992125984251969,"y":2.674849467345993}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":12.992125984251969,"y":2.5474756831866596}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":12.992125984251969,"y":2.420101899027326}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":12.953913849004168,"y":3.018758684576192},{"x":13.030338119499769,"y":3.018758684576192},{"x":13.030338119499769,"y":3.0951829550717913},{"x":12.953913849004168,"y":3.0951829550717913},{"x":12.953913849004168,"y":3.018758684576192}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicline x1={12.864752200092637} y1={2.5474756831866596} x2={12.61000463177397} y2={2.5474756831866596} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={12.864752200092637} y1={2.674849467345993} x2={12.61000463177397} y2={2.674849467345993} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":12.864752200092637,"y":2.92959703566466},{"x":12.953913849004168,"y":2.92959703566466}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":12.864752200092637,"y":3.0569708198239915},{"x":12.953913849004168,"y":3.0569708198239915}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":12.864752200092637,"y":2.8022232515053265},{"x":12.953913849004168,"y":2.8022232515053265}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={12.864752200092637} y1={3.0569708198239915} x2={12.61000463177397} y2={3.0569708198239915} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={12.864752200092637} y1={2.92959703566466} x2={12.61000463177397} y2={2.92959703566466} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={12.864752200092637} y1={2.8022232515053265} x2={12.61000463177397} y2={2.8022232515053265} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":12.864752200092637,"y":2.674849467345993},{"x":12.953913849004168,"y":2.674849467345993}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":12.864752200092637,"y":2.5474756831866596},{"x":12.953913849004168,"y":2.5474756831866596}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={12.864752200092637} y1={2.420101899027326} x2={12.61000463177397} y2={2.420101899027326} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":12.864752200092637,"y":2.420101899027326},{"x":12.953913849004168,"y":2.420101899027326}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematictext text={"J4"} schX={12.852014821676702} schY={3.184344603983325} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"J5"} schX={-11.791014358499305} schY={2.2406067623899943} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"108-0740-001"} schX={-11.791014358499305} schY={1.5806067623899942} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"J6"} schX={12.728439092172303} schY={2.1769198703103285} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"108-0740-001"} schX={12.728439092172303} schY={1.5169198703103284} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"1"} schX={-11.272579898100972} schY={0.12737378415933343} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-11.272579898100972} schY={0.2547475683186651} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={-11.272579898100972} schY={0.3821213524779985} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-11.654701250578972,"y":-9.992007221626409e-16},{"x":-11.399953682260305,"y":-9.992007221626409e-16},{"x":-11.399953682260305,"y":0.5094951366373311},{"x":-11.654701250578972,"y":0.5094951366373311},{"x":-11.654701250578972,"y":-9.992007221626409e-16}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-11.527327466419639,"y":0.2547475683186651}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-11.527327466419639,"y":0.3821213524779985}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-11.565539601667439,"y":0.08916164891153353},{"x":-11.489115331171838,"y":0.08916164891153353},{"x":-11.489115331171838,"y":0.16558591940713333},{"x":-11.565539601667439,"y":0.16558591940713333},{"x":-11.565539601667439,"y":0.08916164891153353}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":-11.399953682260305,"y":0.2547475683186651},{"x":-11.489115331171838,"y":0.2547475683186651}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.399953682260305,"y":0.12737378415933343},{"x":-11.489115331171838,"y":0.12737378415933343}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.399953682260305} y1={0.12737378415933343} x2={-11.14520611394164} y2={0.12737378415933343} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.399953682260305} y1={0.2547475683186651} x2={-11.14520611394164} y2={0.2547475683186651} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-11.399953682260305,"y":0.3821213524779985},{"x":-11.489115331171838,"y":0.3821213524779985}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.399953682260305} y1={0.3821213524779985} x2={-11.14520611394164} y2={0.3821213524779985} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP4"} schX={-11.654701250578972} schY={0.5094951366373319} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={-11.272579898100972} schY={-1.0826771653543314} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-11.272579898100972} schY={-0.955303381194998} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={-11.272579898100972} schY={-0.8279295970356646} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-11.654701250578972,"y":-1.210050949513664},{"x":-11.399953682260305,"y":-1.210050949513664},{"x":-11.399953682260305,"y":-0.700555812876332},{"x":-11.654701250578972,"y":-0.700555812876332},{"x":-11.654701250578972,"y":-1.210050949513664}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-11.527327466419639,"y":-0.955303381194998}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-11.527327466419639,"y":-0.8279295970356646}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-11.565539601667439,"y":-1.1208893006021314},{"x":-11.489115331171838,"y":-1.1208893006021314},{"x":-11.489115331171838,"y":-1.0444650301065315},{"x":-11.565539601667439,"y":-1.0444650301065315},{"x":-11.565539601667439,"y":-1.1208893006021314}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":-11.399953682260305,"y":-0.955303381194998},{"x":-11.489115331171838,"y":-0.955303381194998}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.399953682260305,"y":-1.0826771653543314},{"x":-11.489115331171838,"y":-1.0826771653543314}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.399953682260305} y1={-1.0826771653543314} x2={-11.14520611394164} y2={-1.0826771653543314} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.399953682260305} y1={-0.955303381194998} x2={-11.14520611394164} y2={-0.955303381194998} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-11.399953682260305,"y":-0.8279295970356646},{"x":-11.489115331171838,"y":-0.8279295970356646}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.399953682260305} y1={-0.8279295970356646} x2={-11.14520611394164} y2={-0.8279295970356646} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP5"} schX={-11.654701250578972} schY={-0.700555812876333} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={-0.7642427049559988} schY={-6.305002315886985} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-0.7642427049559988} schY={-6.432376100046318} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-1.1463640574339968,"y":-6.559749884205651},{"x":-0.8916164891153309,"y":-6.559749884205651},{"x":-0.8916164891153309,"y":-6.1776285317276525},{"x":-1.1463640574339968,"y":-6.1776285317276525},{"x":-1.1463640574339968,"y":-6.559749884205651}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-1.0189902732746638,"y":-6.432376100046318}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-1.0572024085224638,"y":-6.343214451134785},{"x":-0.980778138026864,"y":-6.343214451134785},{"x":-0.980778138026864,"y":-6.266790180639185},{"x":-1.0572024085224638,"y":-6.266790180639185},{"x":-1.0572024085224638,"y":-6.343214451134785}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":-6.432376100046318},{"x":-0.9807781380268636,"y":-6.432376100046318}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":-6.305002315886985},{"x":-0.9807781380268636,"y":-6.305002315886985}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-0.8916164891153304} y1={-6.305002315886985} x2={-0.6368689207966653} y2={-6.305002315886985} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-0.8916164891153304} y1={-6.432376100046318} x2={-0.6368689207966653} y2={-6.432376100046318} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP8"} schX={-1.1463640574339973} schY={-6.1776285317276525} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"NT3"} schX={-1.47373784159333} schY={-2.854344603983326} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"Net-Tie"} schX={-1.47373784159333} schY={-3.514344603983326} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"1"} schX={-11.208893006021306} schY={-4.458082445576657} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-11.208893006021306} schY={-4.330708661417323} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={-11.208893006021306} schY={-4.203334877257991} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-11.591014358499306,"y":-4.585456229735989},{"x":-11.33626679018064,"y":-4.585456229735989},{"x":-11.33626679018064,"y":-4.075961093098657},{"x":-11.591014358499306,"y":-4.075961093098657},{"x":-11.591014358499306,"y":-4.585456229735989}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-11.463640574339973,"y":-4.330708661417323}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-11.463640574339973,"y":-4.203334877257991}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-11.501852709587773,"y":-4.496294580824457},{"x":-11.425428439092173,"y":-4.496294580824457},{"x":-11.425428439092173,"y":-4.419870310328856},{"x":-11.501852709587773,"y":-4.419870310328856},{"x":-11.501852709587773,"y":-4.496294580824457}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":-11.33626679018064,"y":-4.330708661417323},{"x":-11.425428439092173,"y":-4.330708661417323}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.33626679018064,"y":-4.458082445576657},{"x":-11.425428439092173,"y":-4.458082445576657}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.33626679018064} y1={-4.458082445576657} x2={-11.081519221861972} y2={-4.458082445576657} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.33626679018064} y1={-4.330708661417323} x2={-11.081519221861972} y2={-4.330708661417323} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-11.33626679018064,"y":-4.203334877257991},{"x":-11.425428439092173,"y":-4.203334877257991}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.33626679018064} y1={-4.203334877257991} x2={-11.081519221861972} y2={-4.203334877257991} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP7"} schX={-11.591014358499304} schY={-4.075961093098657} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={-4.330708661417322} schY={-6.559749884205651} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-5.094951366373321} schY={-6.559749884205651} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={-4.330708661417322} schY={-6.687123668364984} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"4"} schX={-5.094951366373321} schY={-6.687123668364984} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"5"} schX={-4.330708661417322} schY={-6.814497452524317} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"6"} schX={-5.094951366373321} schY={-6.814497452524317} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"7"} schX={-4.330708661417322} schY={-6.94187123668365} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"8"} schX={-5.094951366373321} schY={-6.94187123668365} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"9"} schX={-4.330708661417322} schY={-7.069245020842983} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"10"} schX={-5.094951366373321} schY={-7.069245020842983} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-4.9675775822139885,"y":-7.196618805002316},{"x":-4.458082445576657,"y":-7.196618805002316},{"x":-4.458082445576657,"y":-6.4323761000463175},{"x":-4.9675775822139885,"y":-6.4323761000463175},{"x":-4.9675775822139885,"y":-7.196618805002316}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-4.585456229735989,"y":-6.687123668364984}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.585456229735989,"y":-6.559749884205651}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.585456229735989,"y":-6.814497452524317}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.585456229735989,"y":-6.94187123668365}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.585456229735989,"y":-7.069245020842983}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.840203798054654,"y":-6.94187123668365}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.840203798054654,"y":-7.069245020842983}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.840203798054654,"y":-6.814497452524317}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.840203798054654,"y":-6.687123668364984}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-4.840203798054654,"y":-6.559749884205651}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-4.623668364983789,"y":-6.597962019453451},{"x":-4.547244094488189,"y":-6.597962019453451},{"x":-4.547244094488189,"y":-6.521537748957851},{"x":-4.623668364983789,"y":-6.521537748957851},{"x":-4.623668364983789,"y":-6.597962019453451}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicline x1={-4.458082445576656} y1={-6.559749884205651} x2={-4.203334877257989} y2={-6.559749884205651} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.967577582213988} y1={-6.559749884205651} x2={-5.2223251505326544} y2={-6.559749884205651} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.458082445576656} y1={-6.687123668364984} x2={-4.203334877257989} y2={-6.687123668364984} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.967577582213988} y1={-6.687123668364984} x2={-5.2223251505326544} y2={-6.687123668364984} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.458082445576656} y1={-6.814497452524317} x2={-4.203334877257989} y2={-6.814497452524317} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.967577582213988} y1={-6.814497452524317} x2={-5.2223251505326544} y2={-6.814497452524317} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.458082445576656} y1={-6.94187123668365} x2={-4.203334877257989} y2={-6.94187123668365} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.967577582213988} y1={-6.94187123668365} x2={-5.2223251505326544} y2={-6.94187123668365} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.458082445576656} y1={-7.069245020842983} x2={-4.203334877257989} y2={-7.069245020842983} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-4.967577582213988} y1={-7.069245020842983} x2={-5.2223251505326544} y2={-7.069245020842983} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-6.687123668364984},{"x":-4.547244094488189,"y":-6.687123668364984}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-6.559749884205651},{"x":-4.547244094488189,"y":-6.559749884205651}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-6.814497452524317},{"x":-4.547244094488189,"y":-6.814497452524317}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-6.94187123668365},{"x":-4.547244094488189,"y":-6.94187123668365}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-7.069245020842983},{"x":-4.547244094488189,"y":-7.069245020842983}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.967577582213988,"y":-6.94187123668365},{"x":-4.878415933302454,"y":-6.94187123668365}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.967577582213988,"y":-7.069245020842983},{"x":-4.878415933302454,"y":-7.069245020842983}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.967577582213988,"y":-6.814497452524317},{"x":-4.878415933302454,"y":-6.814497452524317}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.967577582213988,"y":-6.687123668364984},{"x":-4.878415933302454,"y":-6.687123668364984}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-4.967577582213988,"y":-6.559749884205651},{"x":-4.878415933302454,"y":-6.559749884205651}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematictext text={"J12"} schX={-4.967577582213988} schY={-6.432376100046318} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"4"} schX={0.19106067623899925} schY={4.01227420101899} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"1-2-3"} schX={0.3184344603983327} schY={4.394395553496988} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"5-6-7-8"} schX={-0.19106067623899925} schY={4.394395553496988} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicline x1={0.19106067623899925} y1={4.190597498842056} x2={-0.06368689207966582} y2={4.190597498842056} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={-0.01273737841593281} y1={4.228809634089856} x2={-0.06368689207966582} y2={4.228809634089856} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.16558591940713363} y1={4.228809634089856} x2={0.16558591940713363} y2={4.394395553496988} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={-0.038212135247800205} y1={4.228809634089856} x2={-0.038212135247800205} y2={4.394395553496988} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.06368689207966582} y1={4.267021769337656} x2={0.06368689207966582} y2={4.394395553496988} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.06368689207966582} y1={4.254284390921722} x2={0.025474756831867396} y2={4.317971283001389} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.06368689207966582} y1={4.254284390921722} x2={0.10189902732746603} y2={4.317971283001389} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.025474756831867396} y1={4.317971283001389} x2={0.10189902732746603} y2={4.317971283001389} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.050949513663733015} y1={4.305233904585455} x2={0.08916164891153322} y2={4.305233904585455} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.14011116257526623} y1={4.228809634089856} x2={0.19106067623899925} y2={4.228809634089856} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.038212135247800205} y1={4.228809634089856} x2={0.08916164891153322} y2={4.228809634089856} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.16558591940713363} y1={4.394395553496988} x2={0.16558591940713363} y2={4.483557202408521} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.16558591940713363} y1={4.483557202408521} x2={-0.038212135247800205} y2={4.483557202408521} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={-0.038212135247800205} y1={4.483557202408521} x2={-0.038212135247800205} y2={4.394395553496988} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":-0.038212135247800205,"y":4.394395553496988}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematiccircle center={{"x":0.16558591940713363,"y":4.394395553496988}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={0.038212135247800205} y1={4.483557202408521} x2={0.08916164891153322} y2={4.458082445576656} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.08916164891153322} y1={4.458082445576656} x2={0.08916164891153322} y2={4.509031959240389} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.08916164891153322} y1={4.509031959240389} x2={0.038212135247800205} y2={4.483557202408521} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.038212135247800205} y1={4.483557202408521} x2={0.038212135247800205} y2={4.509031959240389} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.038212135247800205} y1={4.483557202408521} x2={0.038212135247800205} y2={4.458082445576656} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.19106067623899925} y1={4.190597498842056} x2={0.19106067623899925} y2={4.139647985178323} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.06368689207966582} y1={4.394395553496988} x2={0.19106067623899925} y2={4.394395553496988} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={-0.038212135247800205} y1={4.394395553496988} x2={-0.06368689207966582} y2={4.394395553496988} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.19106067623899925} y1={4.139647985178323} x2={0.19106067623899925} y2={3.884900416859656} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={0.19106067623899925} y1={4.394395553496988} x2={0.4458082445576661} y2={4.394395553496988} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-0.06368689207966582} y1={4.394395553496988} x2={-0.3184344603983327} y2={4.394395553496988} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"Q2"} schX={0} schY={4.649143121815655} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"ISZ034N06LM5ATMA1"} schX={-0.4458082445576661} schY={4.5217693376563215} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"1"} schX={-0.7642427049559988} schY={-7.833487725798982} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-0.7642427049559988} schY={-7.960861509958314} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-1.1463640574339968,"y":-8.088235294117647},{"x":-0.8916164891153309,"y":-8.088235294117647},{"x":-0.8916164891153309,"y":-7.706113941639648},{"x":-1.1463640574339968,"y":-7.706113941639648},{"x":-1.1463640574339968,"y":-8.088235294117647}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-1.0189902732746638,"y":-7.960861509958314}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-1.0572024085224638,"y":-7.871699861046782},{"x":-0.980778138026864,"y":-7.871699861046782},{"x":-0.980778138026864,"y":-7.7952755905511815},{"x":-1.0572024085224638,"y":-7.7952755905511815},{"x":-1.0572024085224638,"y":-7.871699861046782}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":-7.960861509958314},{"x":-0.9807781380268636,"y":-7.960861509958314}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":-7.833487725798982},{"x":-0.9807781380268636,"y":-7.833487725798982}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-0.8916164891153304} y1={-7.833487725798982} x2={-0.6368689207966653} y2={-7.833487725798982} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-0.8916164891153304} y1={-7.960861509958314} x2={-0.6368689207966653} y2={-7.960861509958314} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP10"} schX={-1.1463640574339973} schY={-7.706113941639648} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"4"} schX={0.25474756831866685} schY={2.92959703566466} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"1-2-3"} schX={0.3821213524779985} schY={3.3117183881426584} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"5-6-7-8"} schX={-0.12737378415933165} schY={3.3117183881426584} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicline x1={0.25474756831866685} y1={3.1079203334877246} x2={0} y2={3.1079203334877246} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.050949513663733015} y1={3.1461324687355248} x2={0} y2={3.1461324687355248} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.22927281148679945} y1={3.1461324687355248} x2={0.22927281148679945} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.025474756831867396} y1={3.1461324687355248} x2={0.025474756831867396} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.12737378415933343} y1={3.184344603983325} x2={0.12737378415933343} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.12737378415933343} y1={3.171607225567392} x2={0.08916164891153322} y2={3.235294117647058} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.12737378415933343} y1={3.171607225567392} x2={0.16558591940713363} y2={3.235294117647058} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.08916164891153322} y1={3.235294117647058} x2={0.16558591940713363} y2={3.235294117647058} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.11463640574340062} y1={3.222556739231125} x2={0.15284854099119904} y2={3.222556739231125} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.20379805465493384} y1={3.1461324687355248} x2={0.25474756831866685} y2={3.1461324687355248} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.10189902732746603} y1={3.1461324687355248} x2={0.15284854099119904} y2={3.1461324687355248} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.22927281148679945} y1={3.3117183881426584} x2={0.22927281148679945} y2={3.4008800370541916} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.22927281148679945} y1={3.4008800370541916} x2={0.025474756831867396} y2={3.4008800370541916} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.025474756831867396} y1={3.4008800370541916} x2={0.025474756831867396} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":0.025474756831867396,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematiccircle center={{"x":0.22927281148679945,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={0.10189902732746603} y1={3.4008800370541916} x2={0.15284854099119904} y2={3.3754052802223242} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.15284854099119904} y1={3.3754052802223242} x2={0.15284854099119904} y2={3.4263547938860572} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.15284854099119904} y1={3.4263547938860572} x2={0.10189902732746603} y2={3.4008800370541916} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.10189902732746603} y1={3.4008800370541916} x2={0.10189902732746603} y2={3.4263547938860572} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.10189902732746603} y1={3.4008800370541916} x2={0.10189902732746603} y2={3.3754052802223242} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.25474756831866685} y1={3.1079203334877246} x2={0.25474756831866685} y2={3.0569708198239915} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.12737378415933343} y1={3.3117183881426584} x2={0.25474756831866685} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.025474756831867396} y1={3.3117183881426584} x2={0} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.25474756831866685} y1={3.0569708198239915} x2={0.25474756831866685} y2={2.8022232515053265} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={0.25474756831866685} y1={3.3117183881426584} x2={0.5094951366373319} y2={3.3117183881426584} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={0} y1={3.3117183881426584} x2={-0.2547475683186651} y2={3.3117183881426584} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"Q4"} schX={0} schY={3.5664659564613235} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"ISZ034N06LM5ATMA1"} schX={-0.5094951366373319} schY={3.439092172301992} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"4"} schX={0.6368689207966653} schY={-2.165354330708661} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"1-2-3"} schX={1.0189902732746638} schY={-2.2927281148679945} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"5-6-7-8"} schX={1.0189902732746638} schY={-1.7832329782306626} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematicline x1={0.8151922186197318} y1={-2.165354330708661} x2={0.8151922186197318} y2={-1.910606762389996} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.853404353867532} y1={-1.961556276053729} x2={0.853404353867532} y2={-1.910606762389996} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.853404353867532} y1={-2.1398795738767955} x2={1.0189902732746638} y2={-2.1398795738767955} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.853404353867532} y1={-1.9360815192218617} x2={1.0189902732746638} y2={-1.9360815192218617} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.8916164891153304} y1={-2.0379805465493295} x2={1.0189902732746638} y2={-2.0379805465493295} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.8788791106993976} y1={-2.0379805465493295} x2={0.9425660027790652} y2={-1.9997684113015293} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.8788791106993976} y1={-2.0379805465493295} x2={0.9425660027790652} y2={-2.076192681797128} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.9425660027790652} y1={-1.9997684113015293} x2={0.9425660027790652} y2={-2.076192681797128} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.9298286243631306} y1={-2.025243168133395} x2={0.9298286243631306} y2={-2.063455303381195} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.853404353867532} y1={-2.114404817044928} x2={0.853404353867532} y2={-2.165354330708661} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.853404353867532} y1={-2.012505789717462} x2={0.853404353867532} y2={-2.063455303381195} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.0189902732746638} y1={-2.1398795738767955} x2={1.108151922186197} y2={-2.1398795738767955} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.108151922186197} y1={-2.1398795738767955} x2={1.108151922186197} y2={-1.9360815192218617} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.108151922186197} y1={-1.9360815192218617} x2={1.0189902732746638} y2={-1.9360815192218617} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":1.0189902732746638,"y":-1.9360815192218617}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematiccircle center={{"x":1.0189902732746638,"y":-2.1398795738767955}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={1.108151922186197} y1={-2.012505789717462} x2={1.0826771653543314} y2={-2.063455303381195} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.0826771653543314} y1={-2.063455303381195} x2={1.1336266790180645} y2={-2.063455303381195} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.1336266790180645} y1={-2.063455303381195} x2={1.108151922186197} y2={-2.012505789717462} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.108151922186197} y1={-2.012505789717462} x2={1.1336266790180645} y2={-2.012505789717462} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.108151922186197} y1={-2.012505789717462} x2={1.0826771653543314} y2={-2.012505789717462} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.8151922186197318} y1={-2.165354330708661} x2={0.7642427049559988} y2={-2.165354330708661} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.0189902732746638} y1={-2.0379805465493295} x2={1.0189902732746638} y2={-2.165354330708661} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={1.0189902732746638} y1={-1.9360815192218617} x2={1.0189902732746638} y2={-1.910606762389996} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={0.7642427049559988} y1={-2.165354330708661} x2={0.5094951366373319} y2={-2.165354330708661} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={1.0189902732746638} y1={-2.165354330708661} x2={1.0189902732746638} y2={-2.420101899027328} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={1.0189902732746638} y1={-1.910606762389996} x2={1.0189902732746638} y2={-1.6558591940713292} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"Q6"} schX={0.7005558128763312} schY={-1.8469198703103284} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"ISZ034N06LM5ATMA1"} schX={1.2737378415933307} schY={-2.865910143584993} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={90} />
      <schematictext text={"1"} schX={1.1463640574339973} schY={-7.833487725798982} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={1.1463640574339973} schY={-7.960861509958314} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":0.7642427049559974,"y":-8.088235294117647},{"x":1.0189902732746634,"y":-8.088235294117647},{"x":1.0189902732746634,"y":-7.706113941639648},{"x":0.7642427049559974,"y":-7.706113941639648},{"x":0.7642427049559974,"y":-8.088235294117647}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":0.8916164891153304,"y":-7.960861509958314}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":0.8534043538675306,"y":-7.871699861046782},{"x":0.9298286243631303,"y":-7.871699861046782},{"x":0.9298286243631303,"y":-7.7952755905511815},{"x":0.8534043538675306,"y":-7.7952755905511815},{"x":0.8534043538675306,"y":-7.871699861046782}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":1.0189902732746638,"y":-7.960861509958314},{"x":0.9298286243631306,"y":-7.960861509958314}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":1.0189902732746638,"y":-7.833487725798982},{"x":0.9298286243631306,"y":-7.833487725798982}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={1.0189902732746638} y1={-7.833487725798982} x2={1.2737378415933307} y2={-7.833487725798982} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={1.0189902732746638} y1={-7.960861509958314} x2={1.2737378415933307} y2={-7.960861509958314} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP11"} schX={0.7642427049559988} schY={-7.706113941639648} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={-11.272579898100972} schY={-6.1776285317276525} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-11.272579898100972} schY={-6.305002315886985} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-11.654701250578972,"y":-6.4323761000463175},{"x":-11.399953682260305,"y":-6.4323761000463175},{"x":-11.399953682260305,"y":-6.050254747568319},{"x":-11.654701250578972,"y":-6.050254747568319},{"x":-11.654701250578972,"y":-6.4323761000463175}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-11.527327466419639,"y":-6.305002315886985}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-11.565539601667439,"y":-6.215840666975453},{"x":-11.489115331171838,"y":-6.215840666975453},{"x":-11.489115331171838,"y":-6.139416396479852},{"x":-11.565539601667439,"y":-6.139416396479852},{"x":-11.565539601667439,"y":-6.215840666975453}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":-11.399953682260305,"y":-6.305002315886985},{"x":-11.489115331171838,"y":-6.305002315886985}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.399953682260305,"y":-6.1776285317276525},{"x":-11.489115331171838,"y":-6.1776285317276525}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.399953682260305} y1={-6.1776285317276525} x2={-11.14520611394164} y2={-6.1776285317276525} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.399953682260305} y1={-6.305002315886985} x2={-11.14520611394164} y2={-6.305002315886985} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"J11"} schX={-11.654701250578972} schY={-6.050254747568319} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={-11.208893006021306} schY={1.0189902732746638} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-11.208893006021306} schY={1.1463640574339973} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={-11.208893006021306} schY={1.273737841593329} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-11.591014358499306,"y":0.8916164891153312},{"x":-11.33626679018064,"y":0.8916164891153312},{"x":-11.33626679018064,"y":1.4011116257526632},{"x":-11.591014358499306,"y":1.4011116257526632},{"x":-11.591014358499306,"y":0.8916164891153312}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-11.463640574339973,"y":1.1463640574339973}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":-11.463640574339973,"y":1.273737841593329}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-11.501852709587773,"y":0.980778138026864},{"x":-11.425428439092173,"y":0.980778138026864},{"x":-11.425428439092173,"y":1.0572024085224638},{"x":-11.501852709587773,"y":1.0572024085224638},{"x":-11.501852709587773,"y":0.980778138026864}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":-11.33626679018064,"y":1.1463640574339973},{"x":-11.425428439092173,"y":1.1463640574339973}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.33626679018064,"y":1.0189902732746638},{"x":-11.425428439092173,"y":1.0189902732746638}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.33626679018064} y1={1.0189902732746638} x2={-11.081519221861972} y2={1.0189902732746638} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.33626679018064} y1={1.1463640574339973} x2={-11.081519221861972} y2={1.1463640574339973} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":-11.33626679018064,"y":1.273737841593329},{"x":-11.425428439092173,"y":1.273737841593329}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.33626679018064} y1={1.273737841593329} x2={-11.081519221861972} y2={1.273737841593329} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP3"} schX={-11.591014358499304} schY={1.4011116257526623} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={6.496062992125983} schY={5.349698934691986} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"2"} schX={6.623436776285319} schY={5.349698934691986} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"3"} schX={6.75081056044465} schY={5.349698934691986} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematicpath points={[{"x":6.368689207966653,"y":5.4770727188513195},{"x":6.8781843446039845,"y":5.4770727188513195},{"x":6.8781843446039845,"y":5.731820287169986},{"x":6.368689207966653,"y":5.731820287169986},{"x":6.368689207966653,"y":5.4770727188513195}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":6.623436776285319,"y":5.604446503010653}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":6.75081056044465,"y":5.604446503010653}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":6.457850856878183,"y":5.566234367762853},{"x":6.534275127373784,"y":5.566234367762853},{"x":6.534275127373784,"y":5.642658638258453},{"x":6.457850856878183,"y":5.642658638258453},{"x":6.457850856878183,"y":5.566234367762853}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":6.623436776285319,"y":5.477072718851321},{"x":6.623436776285319,"y":5.566234367762853}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":6.496062992125983,"y":5.477072718851321},{"x":6.496062992125983,"y":5.566234367762853}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={6.496062992125983} y1={5.477072718851321} x2={6.496062992125983} y2={5.2223251505326544} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={6.623436776285319} y1={5.477072718851321} x2={6.623436776285319} y2={5.2223251505326544} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":6.75081056044465,"y":5.477072718851321},{"x":6.75081056044465,"y":5.566234367762853}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={6.75081056044465} y1={5.477072718851321} x2={6.75081056044465} y2={5.2223251505326544} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP1"} schX={6.305002315886986} schY={5.79550717924965} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":7.260305697081984,"y":-7.069245020842983},{"x":7.897174617878649,"y":-7.069245020842983},{"x":7.897174617878649,"y":-5.6681333950903205},{"x":7.260305697081984,"y":-5.6681333950903205},{"x":7.260305697081984,"y":-7.069245020842983}]} strokeWidth={0.05} strokeColor={"#800000"} fillColor={"#ffffb0"} isFilled={true} />
      <schematiccircle center={{"x":7.578740157480317,"y":-5.922880963408986}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={7.616952292728113} y1={-5.922880963408986} x2={7.897174617878649} y2={-5.922880963408986} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":7.578740157480317,"y":-6.1776285317276525}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={7.616952292728113} y1={-6.1776285317276525} x2={7.897174617878649} y2={-6.1776285317276525} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":7.578740157480317,"y":-6.559749884205651}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={7.616952292728113} y1={-6.559749884205651} x2={7.897174617878649} y2={-6.559749884205651} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":7.578740157480317,"y":-6.814497452524317}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={7.616952292728113} y1={-6.814497452524317} x2={7.897174617878649} y2={-6.814497452524317} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematictext text={"-"} schX={7.808012968967114} schY={-5.770032422417787} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"+"} schX={7.808012968967114} schY={-6.0247799907364525} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"MNT_1"} schX={7.808012968967114} schY={-6.406901343214452} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"MNT_2"} schX={7.808012968967114} schY={-6.661648911533118} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicline x1={7.897174617878649} y1={-5.922880963408986} x2={8.151922186197313} y2={-5.922880963408986} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={7.897174617878649} y1={-6.1776285317276525} x2={8.151922186197313} y2={-6.1776285317276525} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={7.897174617878649} y1={-6.559749884205651} x2={8.151922186197313} y2={-6.559749884205651} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={7.897174617878649} y1={-6.814497452524317} x2={8.151922186197313} y2={-6.814497452524317} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"J9"} schX={7.260305697081984} schY={-5.66813339509032} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"J10"} schX={7.260305697081984} schY={-7.321366373320982} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"XT30PW-M"} schX={7.260305697081984} schY={-8.982477999073645} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"1"} schX={-11.272579898100972} schY={-2.2290412227883287} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={-11.272579898100972} schY={-2.356415006947662} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":-11.654701250578972,"y":-2.4837887911069942},{"x":-11.399953682260305,"y":-2.4837887911069942},{"x":-11.399953682260305,"y":-2.101667438628995},{"x":-11.654701250578972,"y":-2.101667438628995},{"x":-11.654701250578972,"y":-2.4837887911069942}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":-11.527327466419639,"y":-2.356415006947662}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":-11.565539601667439,"y":-2.2672533580361285},{"x":-11.489115331171838,"y":-2.2672533580361285},{"x":-11.489115331171838,"y":-2.190829087540529},{"x":-11.565539601667439,"y":-2.190829087540529},{"x":-11.565539601667439,"y":-2.2672533580361285}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":-11.399953682260305,"y":-2.356415006947662},{"x":-11.489115331171838,"y":-2.356415006947662}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":-11.399953682260305,"y":-2.2290412227883287},{"x":-11.489115331171838,"y":-2.2290412227883287}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={-11.399953682260305} y1={-2.2290412227883287} x2={-11.14520611394164} y2={-2.2290412227883287} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={-11.399953682260305} y1={-2.356415006947662} x2={-11.14520611394164} y2={-2.356415006947662} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP6"} schX={-11.654701250578972} schY={-2.1016674386289953} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"1"} schX={8.279295970356644} schY={6.687123668364983} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={9.298286243631312} schY={6.687123668364983} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={8.788791106993978} schY={6.559749884205647} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematicline x1={8.40666975451598} y1={6.814497452524318} x2={8.40666975451598} y2={6.559749884205651} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={6.814497452524318} x2={8.661417322834646} y2={6.559749884205651} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={8.40666975451598} y1={6.814497452524318} x2={8.661417322834646} y2={6.687123668364983} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={8.40666975451598} y1={6.559749884205651} x2={8.661417322834646} y2={6.687123668364983} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={6.687123668364983} x2={8.916164891153313} y2={6.687123668364983} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={8.916164891153313} y1={6.687123668364983} x2={8.916164891153313} y2={6.814497452524318} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={8.916164891153313} y1={6.814497452524318} x2={8.916164891153313} y2={6.559749884205651} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={8.916164891153313} y1={6.559749884205651} x2={9.170912459471976} y2={6.687123668364983} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={9.170912459471976} y1={6.687123668364983} x2={8.916164891153313} y2={6.814497452524318} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={9.170912459471976} y1={6.687123668364983} x2={9.170912459471976} y2={6.814497452524318} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={9.170912459471976} y1={6.814497452524318} x2={9.170912459471976} y2={6.559749884205651} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={8.40666975451598} y1={6.687123668364983} x2={8.151922186197313} y2={6.687123668364983} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={9.170912459471976} y1={6.687123668364983} x2={9.425660027790643} y2={6.687123668364983} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.788791106993978} y1={6.687123668364983} x2={8.788791106993978} y2={6.432376100046316} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematiccircle center={{"x":8.788791106993978,"y":6.687123668364983}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematictext text={"D1"} schX={8.393932376100045} schY={6.827234830940249} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"BAS70-04-E3-18"} schX={8.852477999073644} schY={6.36868920796665} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":8.279295970356646,"y":-2.5474756831866605},{"x":8.661417322834644,"y":-2.5474756831866605},{"x":8.661417322834644,"y":-1.0189902732746645},{"x":8.279295970356646,"y":-1.0189902732746645},{"x":8.279295970356646,"y":-2.5474756831866605}]} strokeWidth={0.05} strokeColor={"#800000"} fillColor={"#ffffb0"} isFilled={true} />
      <schematiccircle center={{"x":8.470356646595645,"y":-1.2737378415933307}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-1.2737378415933307} x2={8.661417322834646} y2={-1.2737378415933307} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":8.470356646595645,"y":-1.5284854099119976}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-1.5284854099119976} x2={8.661417322834646} y2={-1.5284854099119976} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":8.470356646595645,"y":-1.7832329782306626}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-1.7832329782306626} x2={8.661417322834646} y2={-1.7832329782306626} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":8.470356646595645,"y":-2.0379805465493295}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-2.0379805465493295} x2={8.661417322834646} y2={-2.0379805465493295} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":8.470356646595645,"y":-2.2927281148679945}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-2.2927281148679945} x2={8.661417322834646} y2={-2.2927281148679945} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematictext text={"1"} schX={8.572255673923111} schY={-1.1208893006021317} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"3"} schX={8.572255673923111} schY={-1.3756368689207967} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"5"} schX={8.572255673923111} schY={-1.6303844372394636} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"7"} schX={8.572255673923111} schY={-1.8851320055581287} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"9"} schX={8.572255673923111} schY={-2.1398795738767955} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicline x1={8.661417322834646} y1={-1.2737378415933307} x2={8.916164891153313} y2={-1.2737378415933307} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={-1.5284854099119976} x2={8.916164891153313} y2={-1.5284854099119976} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={-1.7832329782306626} x2={8.916164891153313} y2={-1.7832329782306626} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={-2.0379805465493295} x2={8.916164891153313} y2={-2.0379805465493295} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={-2.2927281148679945} x2={8.916164891153313} y2={-2.2927281148679945} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"J7"} schX={8.279295970356648} schY={-1.0189902732746638} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":8.279295970356646,"y":-4.9675775822139885},{"x":8.661417322834644,"y":-4.9675775822139885},{"x":8.661417322834644,"y":-3.4390921723019927},{"x":8.279295970356646,"y":-3.4390921723019927},{"x":8.279295970356646,"y":-4.9675775822139885}]} strokeWidth={0.05} strokeColor={"#800000"} fillColor={"#ffffb0"} isFilled={true} />
      <schematiccircle center={{"x":8.470356646595645,"y":-3.693839740620658}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-3.693839740620658} x2={8.661417322834646} y2={-3.693839740620658} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":8.470356646595645,"y":-3.9485873089393237}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-3.9485873089393237} x2={8.661417322834646} y2={-3.9485873089393237} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":8.470356646595645,"y":-4.203334877257991}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-4.203334877257991} x2={8.661417322834646} y2={-4.203334877257991} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":8.470356646595645,"y":-4.458082445576657}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-4.458082445576657} x2={8.661417322834646} y2={-4.458082445576657} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":8.470356646595645,"y":-4.7128300138953225}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={8.508568781843445} y1={-4.7128300138953225} x2={8.661417322834646} y2={-4.7128300138953225} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematictext text={"2"} schX={8.572255673923111} schY={-3.5409911996294587} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"4"} schX={8.572255673923111} schY={-3.7957387679481247} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"6"} schX={8.572255673923111} schY={-4.050486336266791} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"8"} schX={8.572255673923111} schY={-4.305233904585457} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"10"} schX={8.572255673923111} schY={-4.559981472904123} anchor={"top_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicline x1={8.661417322834646} y1={-3.693839740620658} x2={8.916164891153313} y2={-3.693839740620658} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={-3.9485873089393237} x2={8.916164891153313} y2={-3.9485873089393237} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={-4.203334877257991} x2={8.916164891153313} y2={-4.203334877257991} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={-4.458082445576657} x2={8.916164891153313} y2={-4.458082445576657} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={8.661417322834646} y1={-4.7128300138953225} x2={8.916164891153313} y2={-4.7128300138953225} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"J7"} schX={8.279295970356648} schY={-3.439092172301992} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"1"} schX={9.553033811949975} schY={-2.2927281148679945} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={9.553033811949975} schY={-2.420101899027328} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":9.680407596109308,"y":-2.547475683186662},{"x":9.935155164427975,"y":-2.547475683186662},{"x":9.935155164427975,"y":-2.1653543307086625},{"x":9.680407596109308,"y":-2.1653543307086625},{"x":9.680407596109308,"y":-2.547475683186662}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":9.807781380268642,"y":-2.420101899027328}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":9.769569245020842,"y":-2.3309402501157943},{"x":9.845993515516442,"y":-2.3309402501157943},{"x":9.845993515516442,"y":-2.254515979620195},{"x":9.769569245020842,"y":-2.254515979620195},{"x":9.769569245020842,"y":-2.3309402501157943}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":9.68040759610931,"y":-2.420101899027328},{"x":9.769569245020842,"y":-2.420101899027328}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":9.68040759610931,"y":-2.2927281148679945},{"x":9.769569245020842,"y":-2.2927281148679945}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={9.68040759610931} y1={-2.2927281148679945} x2={9.425660027790643} y2={-2.2927281148679945} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={9.68040759610931} y1={-2.420101899027328} x2={9.425660027790643} y2={-2.420101899027328} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP12"} schX={9.667670217693376} schY={-2.674849467345993} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"4"} schX={2.993283927744324} schY={-3.5664659564613252} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"5-6-7-8"} schX={3.375405280222326} schY={-3.1843446039833267} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"1"} schX={3.248031496062991} schY={-3.8212135247799903} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"2"} schX={3.375405280222326} schY={-3.8212135247799903} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"3"} schX={3.5027790643816576} schY={-3.8212135247799903} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematicline x1={3.171607225567394} y1={-3.5664659564613252} x2={3.171607225567394} y2={-3.3117183881426593} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.2098193608151906} y1={-3.3626679018063923} x2={3.2098193608151906} y2={-3.3117183881426593} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.2098193608151906} y1={-3.5409911996294587} x2={3.375405280222326} y2={-3.5409911996294587} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.2098193608151906} y1={-3.337193144974526} x2={3.375405280222326} y2={-3.337193144974526} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.2352941176470598} y1={-3.439092172301992} x2={3.375405280222326} y2={-3.439092172301992} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.222556739231125} y1={-3.439092172301992} x2={3.286243631310791} y2={-3.4008800370541925} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.222556739231125} y1={-3.439092172301992} x2={3.286243631310791} y2={-3.477304307549792} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.286243631310791} y1={-3.4008800370541925} x2={3.286243631310791} y2={-3.477304307549792} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.27350625289486} y1={-3.426354793886059} x2={3.27350625289486} y2={-3.4645669291338583} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.2098193608151906} y1={-3.5155164427975922} x2={3.2098193608151906} y2={-3.5664659564613252} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.2098193608151906} y1={-3.4136174154701253} x2={3.2098193608151906} y2={-3.4645669291338583} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.375405280222326} y1={-3.5409911996294587} x2={3.4645669291338574} y2={-3.5409911996294587} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.4645669291338574} y1={-3.5409911996294587} x2={3.4645669291338574} y2={-3.337193144974526} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.4645669291338574} y1={-3.337193144974526} x2={3.375405280222326} y2={-3.337193144974526} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":3.375405280222326,"y":-3.337193144974526}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematiccircle center={{"x":3.375405280222326,"y":-3.5409911996294587}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={3.4645669291338574} y1={-3.4136174154701253} x2={3.439092172301992} y2={-3.4645669291338583} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.439092172301992} y1={-3.4645669291338583} x2={3.4900416859657266} y2={-3.4645669291338583} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.4900416859657266} y1={-3.4645669291338583} x2={3.4645669291338574} y2={-3.4136174154701253} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.4645669291338574} y1={-3.4136174154701253} x2={3.4900416859657266} y2={-3.4136174154701253} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.4645669291338574} y1={-3.4136174154701253} x2={3.439092172301992} y2={-3.4136174154701253} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.248031496062991} y1={-3.693839740620658} x2={3.5027790643816576} y2={-3.693839740620658} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.375405280222326} y1={-3.693839740620658} x2={3.375405280222326} y2={-3.439092172301992} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":3.375405280222326,"y":-3.693839740620658}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={3.171607225567394} y1={-3.5664659564613252} x2={3.120657711903659} y2={-3.5664659564613252} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.375405280222326} y1={-3.337193144974526} x2={3.375405280222326} y2={-3.3117183881426593} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.120657711903659} y1={-3.5664659564613252} x2={2.8659101435849923} y2={-3.5664659564613252} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.375405280222326} y1={-3.3117183881426593} x2={3.375405280222326} y2={-3.0569708198239933} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.248031496062991} y1={-3.693839740620658} x2={3.248031496062991} y2={-3.9485873089393237} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.375405280222326} y1={-3.693839740620658} x2={3.375405280222326} y2={-3.9485873089393237} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.5027790643816576} y1={-3.693839740620658} x2={3.5027790643816576} y2={-3.9485873089393237} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"Q7"} schX={3.0569708198239933} schY={-3.2480314960629926} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"ISC0703NLSATMA1"} schX={3.6938397406206587} schY={-3.884900416859658} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={90} />
      <schematictext text={"4"} schX={4.203334877257989} schY={-3.5664659564613252} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"5-6-7-8"} schX={4.585456229735987} schY={-3.1843446039833267} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"1"} schX={4.458082445576656} schY={-3.8212135247799903} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"2"} schX={4.585456229735987} schY={-3.8212135247799903} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"3"} schX={4.7128300138953225} schY={-3.8212135247799903} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematicline x1={4.381658175081055} y1={-3.5664659564613252} x2={4.381658175081055} y2={-3.3117183881426593} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.4198703103288555} y1={-3.3626679018063923} x2={4.4198703103288555} y2={-3.3117183881426593} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.4198703103288555} y1={-3.5409911996294587} x2={4.585456229735987} y2={-3.5409911996294587} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.4198703103288555} y1={-3.337193144974526} x2={4.585456229735987} y2={-3.337193144974526} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.445345067160721} y1={-3.439092172301992} x2={4.585456229735987} y2={-3.439092172301992} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.43260768874479} y1={-3.439092172301992} x2={4.496294580824456} y2={-3.4008800370541925} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.43260768874479} y1={-3.439092172301992} x2={4.496294580824456} y2={-3.477304307549792} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.496294580824456} y1={-3.4008800370541925} x2={4.496294580824456} y2={-3.477304307549792} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.483557202408521} y1={-3.426354793886059} x2={4.483557202408521} y2={-3.4645669291338583} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.4198703103288555} y1={-3.5155164427975922} x2={4.4198703103288555} y2={-3.5664659564613252} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.4198703103288555} y1={-3.4136174154701253} x2={4.4198703103288555} y2={-3.4645669291338583} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.585456229735987} y1={-3.5409911996294587} x2={4.674617878647522} y2={-3.5409911996294587} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.674617878647522} y1={-3.5409911996294587} x2={4.674617878647522} y2={-3.337193144974526} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.674617878647522} y1={-3.337193144974526} x2={4.585456229735987} y2={-3.337193144974526} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":4.585456229735987,"y":-3.337193144974526}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematiccircle center={{"x":4.585456229735987,"y":-3.5409911996294587}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={4.674617878647522} y1={-3.4136174154701253} x2={4.649143121815657} y2={-3.4645669291338583} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.649143121815657} y1={-3.4645669291338583} x2={4.700092635479388} y2={-3.4645669291338583} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.700092635479388} y1={-3.4645669291338583} x2={4.674617878647522} y2={-3.4136174154701253} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.674617878647522} y1={-3.4136174154701253} x2={4.700092635479388} y2={-3.4136174154701253} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.674617878647522} y1={-3.4136174154701253} x2={4.649143121815657} y2={-3.4136174154701253} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.458082445576656} y1={-3.693839740620658} x2={4.7128300138953225} y2={-3.693839740620658} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.585456229735987} y1={-3.693839740620658} x2={4.585456229735987} y2={-3.439092172301992} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":4.585456229735987,"y":-3.693839740620658}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={4.381658175081055} y1={-3.5664659564613252} x2={4.330708661417324} y2={-3.5664659564613252} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.585456229735987} y1={-3.337193144974526} x2={4.585456229735987} y2={-3.3117183881426593} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.330708661417324} y1={-3.5664659564613252} x2={4.075961093098657} y2={-3.5664659564613252} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={4.585456229735987} y1={-3.3117183881426593} x2={4.585456229735987} y2={-3.0569708198239933} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={4.458082445576656} y1={-3.693839740620658} x2={4.458082445576656} y2={-3.9485873089393237} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={4.585456229735987} y1={-3.693839740620658} x2={4.585456229735987} y2={-3.9485873089393237} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={4.7128300138953225} y1={-3.693839740620658} x2={4.7128300138953225} y2={-3.9485873089393237} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"Q8"} schX={4.267021769337655} schY={-3.2480314960629926} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"ISC0703NLSATMA1"} schX={4.751042149143123} schY={-3.5537285780453916} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"4"} schX={3.884900416859656} schY={2.92959703566466} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={-90} />
      <schematictext text={"5-6-7-8"} schX={4.267021769337658} schY={3.3117183881426584} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"1"} schX={3.6301528485409893} schY={3.184344603983325} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={3.6301528485409893} schY={3.3117183881426584} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={3.6301528485409893} schY={3.439092172301992} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicline x1={3.884900416859656} y1={3.1079203334877246} x2={4.139647985178323} y2={3.1079203334877246} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.088698471514592} y1={3.1461324687355248} x2={4.139647985178323} y2={3.1461324687355248} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.9103751736915253} y1={3.1461324687355248} x2={3.9103751736915253} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.114173228346457} y1={3.1461324687355248} x2={4.114173228346457} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.012274201018991} y1={3.171607225567392} x2={4.012274201018991} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.012274201018991} y1={3.1588698471514594} x2={4.0504863362667916} y2={3.222556739231125} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.012274201018991} y1={3.1588698471514594} x2={3.974062065771191} y2={3.222556739231125} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.0504863362667916} y1={3.222556739231125} x2={3.974062065771191} y2={3.222556739231125} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.025011579434922} y1={3.2098193608151924} x2={3.986799444187122} y2={3.2098193608151924} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.935849930523391} y1={3.1461324687355248} x2={3.884900416859656} y2={3.1461324687355248} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.037748957850857} y1={3.1461324687355248} x2={3.986799444187122} y2={3.1461324687355248} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.9103751736915253} y1={3.3117183881426584} x2={3.9103751736915253} y2={3.4008800370541916} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.9103751736915253} y1={3.4008800370541916} x2={4.114173228346457} y2={3.4008800370541916} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.114173228346457} y1={3.4008800370541916} x2={4.114173228346457} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":4.114173228346457,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematiccircle center={{"x":3.9103751736915253,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={4.037748957850857} y1={3.4008800370541916} x2={3.986799444187122} y2={3.3754052802223242} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.986799444187122} y1={3.3754052802223242} x2={3.986799444187122} y2={3.4263547938860572} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.986799444187122} y1={3.4263547938860572} x2={4.037748957850857} y2={3.4008800370541916} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.037748957850857} y1={3.4008800370541916} x2={4.037748957850857} y2={3.4263547938860572} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.037748957850857} y1={3.4008800370541916} x2={4.037748957850857} y2={3.3754052802223242} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.7575266327003245} y1={3.184344603983325} x2={3.7575266327003245} y2={3.439092172301992} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.7575266327003245} y1={3.3117183881426584} x2={4.012274201018991} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematiccircle center={{"x":3.7575266327003245,"y":3.3117183881426584}} radius={0.012737378415933302} strokeWidth={0.05} color={"#0000ff"} fillColor={"#ffffff"} isFilled={false} isDashed={false} />
      <schematicline x1={3.884900416859656} y1={3.1079203334877246} x2={3.884900416859656} y2={3.0569708198239915} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={4.114173228346457} y1={3.3117183881426584} x2={4.139647985178323} y2={3.3117183881426584} strokeWidth={0.05} color={"#0000ff"} isDashed={false} />
      <schematicline x1={3.884900416859656} y1={3.0569708198239915} x2={3.884900416859656} y2={2.8022232515053265} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={4.139647985178323} y1={3.3117183881426584} x2={4.39439555349699} y2={3.3117183881426584} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.7575266327003245} y1={3.184344603983325} x2={3.5027790643816576} y2={3.184344603983325} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.7575266327003245} y1={3.3117183881426584} x2={3.5027790643816576} y2={3.3117183881426584} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={3.7575266327003245} y1={3.439092172301992} x2={3.5027790643816576} y2={3.439092172301992} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"Q5"} schX={3.884900416859656} schY={3.5664659564613235} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"ISC0703NLSATMA1"} schX={3.884900416859656} schY={3.439092172301992} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"1"} schX={1.1463640574339973} schY={-6.050254747568319} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"2"} schX={1.1463640574339973} schY={-5.922880963408986} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematictext text={"3"} schX={1.1463640574339973} schY={-5.795507179249653} anchor={"bottom_center"} fontSize={0.15} color={"#a90000"} schRotation={0} />
      <schematicpath points={[{"x":0.7642427049559974,"y":-6.177628531727652},{"x":1.0189902732746634,"y":-6.177628531727652},{"x":1.0189902732746634,"y":-5.66813339509032},{"x":0.7642427049559974,"y":-5.66813339509032},{"x":0.7642427049559974,"y":-6.177628531727652}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#ffffff"} isFilled={true} />
      <schematiccircle center={{"x":0.8916164891153304,"y":-5.922880963408986}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematiccircle center={{"x":0.8916164891153304,"y":-5.795507179249653}} radius={0.03821213524779991} strokeWidth={0.05} color={"#0000ff"} fillColor={"#0000ff"} isFilled={true} isDashed={false} />
      <schematicpath points={[{"x":0.8534043538675306,"y":-6.088466882816119},{"x":0.9298286243631303,"y":-6.088466882816119},{"x":0.9298286243631303,"y":-6.012042612320519},{"x":0.8534043538675306,"y":-6.012042612320519},{"x":0.8534043538675306,"y":-6.088466882816119}]} strokeWidth={0.05} strokeColor={"#0000ff"} fillColor={"#0000ff"} isFilled={true} />
      <schematicpath points={[{"x":1.0189902732746638,"y":-5.922880963408986},{"x":0.9298286243631306,"y":-5.922880963408986}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicpath points={[{"x":1.0189902732746638,"y":-6.050254747568319},{"x":0.9298286243631306,"y":-6.050254747568319}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={1.0189902732746638} y1={-6.050254747568319} x2={1.2737378415933307} y2={-6.050254747568319} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicline x1={1.0189902732746638} y1={-5.922880963408986} x2={1.2737378415933307} y2={-5.922880963408986} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematicpath points={[{"x":1.0189902732746638,"y":-5.795507179249653},{"x":0.9298286243631306,"y":-5.795507179249653}]} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} />
      <schematicline x1={1.0189902732746638} y1={-5.795507179249653} x2={1.2737378415933307} y2={-5.795507179249653} strokeWidth={0.1} color={"#1f2937"} isDashed={false} />
      <schematictext text={"JP9"} schX={0.7642427049559988} schY={-5.66813339509032} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":-4.152385363594256,"y":-0.5094951366373319},{"x":-4.203334877257989,"y":-0.48402037980546453},{"x":-4.203334877257989,"y":-0.5349698934691993},{"x":-4.152385363594256,"y":-0.5094951366373319}]} strokeWidth={0.02} strokeColor={"#a90000"} fillColor={"transparent"} isFilled={false} />
      <schematictext text={"U1"} schX={-4.203334877257989} schY={1.78585919407133} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"LM251772RHAR"} schX={-4.203334877257989} schY={-3.4417183881426583} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"RT1"} schX={8.015609078276979} schY={-2.7269708198239933} anchor={"bottom_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"10k"} schX={8.015609078276979} schY={-3.3869708198239934} anchor={"top_left"} fontSize={0.18} color={"#006464"} schRotation={0} />
      <schematictext text={"VCC2"} schX={-1.8893777983634408} schY={4.458082445576654} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"FB"} schX={-1.9742936544696619} schY={4.330708661417322} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VIN"} schX={-10.402192373012197} schY={3.7575266327003227} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VOUT"} schX={12.75860737995986} schY={3.8212135247799903} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"FB"} schX={-1.4011116257526623} schY={1.5921723019916616} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"HO1_G"} schX={0.19106067623900103} schY={2.7385363594256606} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={-90} />
      <schematictext text={"VIN"} schX={-10.784313725490197} schY={1.3374247336729947} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"HO2_G"} schX={3.8212135247799903} schY={2.2927281148679945} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={-90} />
      <schematictext text={"VCC1"} schX={-5.073722402346766} schY={1.0826771653543297} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"ISNSP"} schX={-1.273737841593329} schY={0.5731820287169977} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VIN"} schX={-10.848000617569863} schY={0.4458082445576643} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"ISNSN"} schX={-1.273737841593329} schY={0.4458082445576643} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"CSA/SW1"} schX={-1.1888219854871078} schY={0.19106067623899925} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"MODE"} schX={-4.6279141577891} schY={0.06368689207966582} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"CSB"} schX={-1.3586536976995518} schY={0.06368689207966582} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"HO1"} schX={-1.3586536976995518} schY={-0.31843446039833445} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SW1"} schX={-1.3586536976995518} schY={-0.4458082445576661} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"HB1"} schX={-1.3586536976995518} schY={-0.5731820287169995} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"LO1"} schX={-1.3586536976995518} schY={-0.700555812876333} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VCC2"} schX={-10.869229581596418} schY={-0.7642427049559988} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"HO2"} schX={-1.3586536976995518} schY={-1.0826771653543314} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SW2"} schX={-1.3586536976995518} schY={-1.2100509495136649} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"HB2"} schX={-1.3586536976995518} schY={-1.3374247336729983} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"LO2"} schX={-1.3586536976995518} schY={-1.4647985178323317} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"DTRK"} schX={-4.564227265709434} schY={-1.5921723019916634} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"LO1_G"} schX={0.4458082445576661} schY={-2.1016674386289953} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SS/ATRK"} schX={-4.6279141577891} schY={-2.1016674386289953} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"LO2_G"} schX={2.674849467345995} schY={-3.5027790643816585} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VCC2"} schX={-10.48710822911842} schY={-4.139647985178324} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VCC2"} schX={-5.073722402346766} schY={0.9553033811949962} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"DRV1"} schX={-1.3161957696464412} schY={-1.8469198703103302} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"nRST"} schX={-4.5217693376563215} schY={-3.608923884514436} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={-90} />
      <schematictext text={"VCC2"} schX={-5.774278215223097} schY={-0.8279295970356664} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SCL"} schX={-3.1206577119036574} schY={-6.198857495754208} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={-90} />
      <schematictext text={"SDA"} schX={-2.738536359425659} schY={-6.198857495754208} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={-90} />
      <schematictext text={"DRV1"} schX={9.892697236374866} schY={5.28601204261232} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"BIAS"} schX={-4.564227265709434} schY={0.7005558128763312} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"CDC"} schX={-4.5429983016828785} schY={-1.3374247336729983} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"CFG2"} schX={-4.564227265709434} schY={-2.356415006947662} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SYNC"} schX={-4.6279141577891} schY={-0.19106067623900103} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"ADDR"} schX={-4.6279141577891} schY={-2.6111625752663272} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"RT"} schX={-4.5217693376563215} schY={-2.865910143584993} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"COMP"} schX={-4.6279141577891} schY={-1.8469198703103302} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"EN/UVLO"} schX={-4.755287941948433} schY={0.4458082445576643} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"nFLT"} schX={-4.500540373629768} schY={-0.8279295970356664} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SCL"} schX={-4.606685193762544} schY={-0.4458082445576661} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SDA"} schX={-4.606685193762544} schY={-0.5731820287169995} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"ILIMCOMP"} schX={-4.776516905974988} schY={-1.0826771653543314} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SCL"} schX={2.144125366682106} schY={-7.387679481241316} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"ADDR"} schX={1.995522618496219} schY={-5.859194071329319} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"CDC"} schX={-10.848000617569863} schY={-6.113941639647986} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"EN/UVLO"} schX={-10.678168905357419} schY={0.3184344603983309} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VIN"} schX={-5.8167361432762075} schY={-5.158638258452988} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SDA"} schX={0.2335186042921098} schY={-7.387679481241316} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"CFG2"} schX={0.27597653234522035} schY={-5.859194071329319} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VCC2"} schX={1.7407750501775503} schY={-5.094951366373321} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"DRV1"} schX={7.98209047398487} schY={6.305002315886984} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"ILIMCOMP"} schX={-9.425660027790643} schY={-4.267021769337656} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"nFLT"} schX={9.319515207657867} schY={-3.884900416859657} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VCC1_J"} schX={9.327265477844682} schY={-2.2290412227883287} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"CDC"} schX={9.21337038752509} schY={-1.2100509495136649} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"EN/UVLO"} schX={9.383202099737533} schY={-1.7195460861509968} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SDA"} schX={9.21337038752509} schY={-4.139647985178324} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"SCL"} schX={9.21337038752509} schY={-4.39439555349699} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VCC1"} schX={9.319515207657867} schY={-2.356415006947662} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"PDCTRL_GOOD"} schX={9.553033811949978} schY={-1.4647985178323317} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"PTC"} schX={9.21337038752509} schY={-3.630152848540991} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VIN"} schX={2.8446811795584406} schY={-0.4458082445576661} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VOUT1"} schX={-10.699397869383974} schY={1.0826771653543297} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={0} />
      <schematictext text={"VOUT1"} schX={6.4323761000463175} schY={4.330708661417322} anchor={"center"} fontSize={0.12737378415933304} color={"rgb(132, 0, 0)"} schRotation={-90} />
      <schematictext text={"1"} schX={11.845761926817973} schY={-10.317276516905975} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"2"} schX={12.164196387216302} schY={-10.317276516905975} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"=title"} schX={9.693144974525245} schY={-10.189902732746642} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"1/25/2022"} schX={11.718388142658638} schY={-9.935155164427977} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"ti-lm251772evm-pd.SchDoc"} schX={9.323761000463177} schY={-10.444650301065309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":9.043538675312645,"y":-10.189902732746642},{"x":12.355257063455303,"y":-10.189902732746642}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":13.756368689207966,"y":-10.444650301065309},{"x":9.043538675312645,"y":-10.444650301065309}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Sheet Title:"} schX={9.081750810560445} schY={-10.189902732746642} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Size:"} schX={11.756600277906438} schY={-10.444650301065309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Mod. Date:"} schX={11.106993978693838} schY={-9.935155164427977} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"File:"} schX={9.081750810560445} schY={-10.444650301065309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Sheet:"} schX={11.501852709587771} schY={-10.317276516905975} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"of"} schX={11.99861046780917} schY={-10.317276516905975} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"C"} schX={12.03682260305697} schY={-10.444650301065309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":9.043538675312645,"y":-10.189902732746642},{"x":12.355257063455303,"y":-10.189902732746642}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":-2.420101899027328,"y":-10.189902732746642},{"x":7.132931912922649,"y":-10.189902732746642}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":12.355257063455303,"y":-10.317276516905975},{"x":9.043538675312645,"y":-10.317276516905975}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"http://www.ti.com"} schX={12.61000463177397} schY={-10.444650301065309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Contact:"} schX={9.081750810560445} schY={-10.57202408522464} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"http://www.ti.com/support"} schX={9.553033811949978} schY={-10.57202408522464} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":11.081519221861972,"y":-9.807781380268644},{"x":11.081519221861972,"y":-9.935155164427977}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":7.132931912922649,"y":-10.062528948587309},{"x":12.355257063455303,"y":-10.062528948587309}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"LM251772EVM-PD"} schX={9.744094488188976} schY={-10.062528948587309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"Project Title:"} schX={9.081750810560445} schY={-10.062528948587309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":9.043538675312645,"y":-10.57202408522464},{"x":9.043538675312645,"y":-9.807781380268644},{"x":13.756368689207966,"y":-9.807781380268644}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Designed for:"} schX={9.081750810560445} schY={-9.935155164427977} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Public Release"} schX={9.782306623436776} schY={-9.935155164427977} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":11.463640574339971,"y":-10.189902732746642},{"x":11.463640574339971,"y":-10.317276516905975}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Assembly Variant:"} schX={9.081750810560445} schY={-10.317276516905975} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"=variantName"} schX={10.024316813339508} schY={-10.317276516905975} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"© Texas Instruments"} schX={12.482630847614635} schY={-10.57202408522464} anchor={"bottom_left"} fontSize={0.10189902732746642} color={"#1f2937"} schRotation={0} />
      <schematictext text={"2025"} schX={13.374247336729967} schY={-10.57202408522464} anchor={"bottom_left"} fontSize={0.10189902732746642} color={"#000080"} schRotation={0} />
      <schematictext text={"Drawn By:"} schX={7.171144048170449} schY={-10.444650301065309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Engineer:"} schX={7.171144048170449} schY={-10.57202408522464} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"=DrawnBy"} schX={7.706113941639648} schY={-10.444650301065309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={""} schX={7.706113941639648} schY={-10.57202408522464} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":12.355257063455303,"y":-10.444650301065309},{"x":12.355257063455303,"y":-9.807781380268644}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Texas Instruments and/or its licensors do not warrant the accuracy or completeness of this specification or any information contained therein."} schX={-2.35641437007874} schY={-10.189903369615562} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Texas Instruments and/or its licensors do not warrant that this design will meet the specifications, will be suitable for your application or"} schX={-2.35641437007874} schY={-10.317277153774896} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"fit for any particular purpose, or will operate in an implementation. Texas Instruments and/or its licensors do not warrant that the design is"} schX={-2.35641437007874} schY={-10.44465093793423} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":7.132931912922649,"y":-10.57202408522464},{"x":7.132931912922649,"y":-9.807781380268644}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":7.132931912922649,"y":-10.444650301065309},{"x":9.043538675312645,"y":-10.444650301065309}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":9.043538675312645,"y":-10.317276516905975},{"x":7.132931912922649,"y":-10.317276516905975}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":11.718388142658638,"y":-10.317276516905975},{"x":11.718388142658638,"y":-10.444650301065309}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":9.043538675312645,"y":-9.935155164427977},{"x":12.355257063455303,"y":-9.935155164427977}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":7.132931912922649,"y":-10.189902732746642},{"x":9.043538675312645,"y":-10.189902732746642}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":-2.420101899027328,"y":-10.189902732746642},{"x":-2.420101899027328,"y":-10.57202408522464}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"=VersionControl_RevNumber"} schX={7.769800833719314} schY={-10.317276516905975} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"SVN Rev:"} schX={7.171144048170449} schY={-10.317276516905975} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"SR135"} schX={7.642427049559982} schY={-10.189902732746642} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"Number:"} schX={7.171144048170449} schY={-10.189902732746642} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Rev:"} schX={8.44488188976378} schY={-10.189902732746642} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":8.40666975451598,"y":-10.062528948587309},{"x":8.40666975451598,"y":-10.189902732746642}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"B"} schX={8.788791106993978} schY={-10.189902732746642} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":7.132931912922649,"y":-10.062528948587309},{"x":9.043538675312645,"y":-10.062528948587309}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematicpath points={[{"x":7.132931912922649,"y":-9.935155164427977},{"x":9.043538675312645,"y":-9.935155164427977}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"TID #:"} schX={7.171144048170449} schY={-10.062528948587309} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"N/A"} schX={7.769800833719314} schY={-9.998842056507643} anchor={"center_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":7.132931912922649,"y":-9.807781380268644},{"x":9.043538675312645,"y":-9.807781380268644}]} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} />
      <schematictext text={"Orderable:"} schX={7.171144048170449} schY={-9.935155164427977} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"=EVM_orderable"} schX={7.769800833719314} schY={-9.87146827234831} anchor={"center_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"VOUT = 5V-48V"} schX={12.61000463177397} schY={3.439092172301992} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"Max. 5.0A"} schX={12.61000463177397} schY={3.3117183881426584} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"AC_A"} schX={-0.8279295970356646} schY={3.120657711903659} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"VOUT"} schX={13.18318666049097} schY={2.92959703566466} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"S+"} schX={13.18318666049097} schY={2.738536359425659} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"AC_B"} schX={-0.8279295970356646} schY={2.6111625752663272} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"S-"} schX={13.18318666049097} schY={2.6111625752663272} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"GND"} schX={13.18318666049097} schY={2.420101899027326} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicline x1={-1.7068087077350622} y1={-2.3436776285317276} x2={-1.6049096804075962} y2={-2.2417786012042615} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-1.6049096804075962} y1={-2.3436776285317276} x2={-1.7068087077350622} y2={-2.2417786012042615} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-1.7068087077350622} y1={-2.471051412691061} x2={-1.6049096804075962} y2={-2.369152385363595} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-1.6049096804075962} y1={-2.471051412691061} x2={-1.7068087077350622} y2={-2.369152385363595} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-1.7068087077350622} y1={-2.5984251968503944} x2={-1.6049096804075962} y2={-2.4965261695229284} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-1.6049096804075962} y1={-2.5984251968503944} x2={-1.7068087077350622} y2={-2.4965261695229284} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-5.2732746641963875} y1={-6.610699397869384} x2={-5.171375636868921} y2={-6.508800370541918} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-5.171375636868921} y1={-6.610699397869384} x2={-5.2732746641963875} y2={-6.508800370541918} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-4.254284390921724} y1={-6.610699397869384} x2={-4.152385363594256} y2={-6.508800370541918} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-4.152385363594256} y1={-6.610699397869384} x2={-4.254284390921724} y2={-6.508800370541918} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-5.2732746641963875} y1={-6.738073182028717} x2={-5.171375636868921} y2={-6.636174154701251} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-5.171375636868921} y1={-6.738073182028717} x2={-5.2732746641963875} y2={-6.636174154701251} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-4.254284390921724} y1={-6.738073182028717} x2={-4.152385363594256} y2={-6.636174154701251} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-4.152385363594256} y1={-6.738073182028717} x2={-4.254284390921724} y2={-6.636174154701251} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-5.2732746641963875} y1={-6.992820750347383} x2={-5.171375636868921} y2={-6.8909217230199165} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-5.171375636868921} y1={-6.992820750347383} x2={-5.2732746641963875} y2={-6.8909217230199165} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-4.254284390921724} y1={-6.992820750347383} x2={-4.152385363594256} y2={-6.8909217230199165} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicline x1={-4.152385363594256} y1={-6.992820750347383} x2={-4.254284390921724} y2={-6.8909217230199165} strokeWidth={0.02} color={"#ff0000"} isDashed={false} />
      <schematicpath points={[{"x":-5.222325150532653,"y":-8.024548402037981},{"x":-2.1653543307086607,"y":-8.024548402037981},{"x":-2.1653543307086607,"y":-7.387679481241316},{"x":-5.222325150532653,"y":-7.387679481241316},{"x":-5.222325150532653,"y":-8.024548402037981}]} strokeWidth={0} strokeColor={"transparent"} fillColor={"#ffffff"} isFilled={true} />
      <schematictext text={"I2C interface communication with USB2ANY:"} schX={-5.222324513663732} schY={-7.387680118110236} anchor={"top_left"} fontSize={0.14011116257526632} color={"#1f2937"} schRotation={0} />
      <schematictext text={"VBUS is not required to be connected "} schX={-5.222324513663732} schY={-7.527791280685503} anchor={"top_left"} fontSize={0.14011116257526632} color={"#1f2937"} schRotation={0} />
      <schematictext text={"USB2ANY interface has an internal 3.3V"} schX={-5.222324513663732} schY={-7.667902443260769} anchor={"top_left"} fontSize={0.14011116257526632} color={"#1f2937"} schRotation={0} />
      <schematictext text={"VBUS supply"} schX={-5.222324513663732} schY={-7.808013605836035} anchor={"top_left"} fontSize={0.14011116257526632} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":-10.253589624826308,"y":0.4458082445576658},{"x":-9.425660027790645,"y":0.4458082445576658},{"x":-9.425660027790645,"y":0.8279295970356648},{"x":-10.253589624826308,"y":0.8279295970356648},{"x":-10.253589624826308,"y":0.4458082445576658}]} strokeWidth={0.05} strokeColor={"#1f2937"} fillColor={"#fff2cc"} isFilled={true} />
      <schematictext text={"UVLO Levels:"} schX={-10.240852246410375} schY={0.81519221861973} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"8.125V / 8.5V"} schX={-10.240852246410375} schY={0.6878184344603984} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":-5.604446503010652,"y":-4.585456229735989},{"x":-4.7765169059749875,"y":-4.585456229735989},{"x":-4.7765169059749875,"y":-4.39439555349699},{"x":-5.604446503010652,"y":-4.39439555349699},{"x":-5.604446503010652,"y":-4.585456229735989}]} strokeWidth={0.05} strokeColor={"#1f2937"} fillColor={"#fff2cc"} isFilled={true} />
      <schematictext text={"Fsw: 320kHz"} schX={-5.59170912459472} schY={-4.407132931912923} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":-1.974293654469661,"y":5.031264474293654},{"x":-0.8279295970356637,"y":5.031264474293654},{"x":-0.8279295970356637,"y":5.47707271885132},{"x":-1.974293654469661,"y":5.47707271885132},{"x":-1.974293654469661,"y":5.031264474293654}]} strokeWidth={0.05} strokeColor={"#1f2937"} fillColor={"#fff2cc"} isFilled={true} />
      <schematictext text={"Set Jumper on Pin 4 -5"} schX={-1.961556276053729} schY={5.464335340435387} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"to enable output voltage"} schX={-1.961556276053729} schY={5.3369615562760515} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"setting via I2C"} schX={-1.961556276053729} schY={5.20958777211672} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"CFG4"} schX={1.9742936544696619} schY={-7.578740157480315} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"CFG3"} schX={0.06368689207966582} schY={-7.578740157480315} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":7.1329319129226505,"y":-9.170912459471978},{"x":11.463640574339973,"y":-9.170912459471978},{"x":11.463640574339973,"y":0.06368689207966582},{"x":7.1329319129226505,"y":0.06368689207966582},{"x":7.1329319129226505,"y":-9.170912459471978}]} strokeWidth={0.05} strokeColor={"#800000"} fillColor={"#ffffb0"} isFilled={false} />
      <schematictext text={"Connected to PD Controller Power Path"} schX={9.425660027790643} schY={-7.833487725798982} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"System Power (High Voltage/High Current)"} schX={9.170912459471976} schY={-6.050254747568319} anchor={"bottom_left"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":-1.0826771653543308,"y":-5.731820287169986},{"x":0.44580824455766543,"y":-5.731820287169986},{"x":0.44580824455766543,"y":-5.158638258452989},{"x":-1.0826771653543308,"y":-5.158638258452989},{"x":-1.0826771653543308,"y":-5.731820287169986}]} strokeWidth={0.05} strokeColor={"#1f2937"} fillColor={"#fff2cc"} isFilled={true} />
      <schematictext text={"SYNC_OUT: Disable"} schX={-1.0699397869383969} schY={-5.171375636868921} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"SYNC_IN_FALLING: Disable"} schX={-1.0699397869383969} schY={-5.298749421028254} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Force BIAS: Enable"} schX={-1.0699397869383969} schY={-5.426123205187587} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"Reserved: Disable"} schX={-1.0699397869383969} schY={-5.55349698934692} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"DC2DC EVM"} schX={7.769800833719314} schY={-0.4458082445576661} anchor={"bottom_left"} fontSize={0.4075961093098657} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":10.189902732746642,"y":-0.3821213524779999},{"x":11.208893006021306,"y":-0.3821213524779999},{"x":11.208893006021306,"y":-0.1273737841593338},{"x":10.189902732746642,"y":-0.1273737841593338},{"x":10.189902732746642,"y":-0.3821213524779999}]} strokeWidth={0.05} strokeColor={"#1f2937"} fillColor={"#fff2cc"} isFilled={true} />
      <schematictext text={"Place J7B next to J7"} schX={10.202640111162575} schY={-0.14011116257526623} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"to extend connector"} schX={10.202640111162575} schY={-0.26748494673459966} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematicpath points={[{"x":9.553033811949977,"y":-3.693839740620658},{"x":11.081519221861974,"y":-3.693839740620658},{"x":11.081519221861974,"y":-3.375405280222325},{"x":9.553033811949977,"y":-3.375405280222325},{"x":9.553033811949977,"y":-3.693839740620658}]} strokeWidth={0.05} strokeColor={"#1f2937"} fillColor={"#fff2cc"} isFilled={true} />
      <schematictext text={"Place TMP61 part on same layer"} schX={9.56577119036591} schY={-3.388142658638259} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"and close to Inductor"} schX={9.56577119036591} schY={-3.5155164427975922} anchor={"top_left"} fontSize={0.12737378415933304} color={"#1f2937"} schRotation={0} />
      <schematictext text={"VIN"} schX={-12.22788327929597} schY={2.92959703566466} anchor={"bottom_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"S+"} schX={-12.22788327929597} schY={2.738536359425659} anchor={"bottom_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"S-"} schX={-12.22788327929597} schY={2.6111625752663272} anchor={"bottom_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"GND"} schX={-12.22788327929597} schY={2.420101899027326} anchor={"bottom_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"9V - 36V"} schX={-12.291570171375636} schY={3.693839740620657} anchor={"bottom_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematictext text={"Max.: 14A"} schX={-12.291570171375636} schY={3.5664659564613235} anchor={"bottom_right"} fontSize={0.12737378415933304} color={"#000080"} schRotation={0} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":4.394395553496988},{"x":-1.5284854099119958,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":4.267021769337656},{"x":-2.1016674386289953,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":-2.1016674386289953,"y":4.267021769337656},{"x":-2.165354330708661,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":1.5284854099119958},{"x":-0.8916164891153304,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":0.8916164891153304},{"x":-1.5284854099119958,"y":0.8916164891153304}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":0.8916164891153304},{"x":-1.5284854099119958,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":1.5284854099119958},{"x":-0.8916164891153304,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-2.1201018990273273,"y":4.267021769337656},{"x":-2.165354330708661,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":1.5737378415933296},{"x":-0.8916164891153304,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":1.8653543307086604},{"x":-0.8916164891153304,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":8.59773043075498,"y":3.884900416859656},{"x":8.59773043075498,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":12.61000463177397,"y":2.8022232515053265},{"x":11.909448818897639,"y":2.8022232515053265}]} />
      <schematicpath points={[{"x":11.909448818897639,"y":2.8022232515053265},{"x":11.909448818897639,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":11.909448818897639,"y":1.0189902732746638},{"x":5.413385826771654,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":5.413385826771654,"y":1.0189902732746638},{"x":5.413385826771654,"y":3.0569708198239915}]} />
      <schematicpath points={[{"x":5.413385826771654,"y":3.0569708198239915},{"x":4.90389069013432,"y":3.0569708198239915}]} />
      <schematicpath points={[{"x":5.604446503010655,"y":2.6111625752663272},{"x":5.604446503010655,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":8.40666975451598,"y":2.229041222788327},{"x":8.40666975451598,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":5.986567855488653,"y":2.9932839277443257},{"x":5.986567855488653,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":7.132931912922649,"y":2.5474756831866596},{"x":7.132931912922649,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":6.368689207966652,"y":2.5474756831866596},{"x":6.368689207966652,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":7.515053265400647,"y":2.92959703566466},{"x":7.515053265400647,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":7.960861509958315,"y":2.483788791106994},{"x":7.960861509958315,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":4.90389069013432,"y":2.92959703566466},{"x":4.90389069013432,"y":3.0569708198239915}]} />
      <schematicpath points={[{"x":4.90389069013432,"y":3.0569708198239915},{"x":4.90389069013432,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":6.75081056044465,"y":2.9932839277443257},{"x":6.75081056044465,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":6.496062992125983,"y":5.2223251505326544},{"x":6.496062992125983,"y":4.075961093098655}]} />
      <schematicpath points={[{"x":6.496062992125983,"y":4.075961093098655},{"x":6.496062992125983,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":3.3117183881426584},{"x":4.649143121815657,"y":-0.19106067623899925}]} />
      <schematicpath points={[{"x":4.39439555349699,"y":3.3117183881426584},{"x":4.649143121815657,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":3.3117183881426584},{"x":4.90389069013432,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":4.90389069013432,"y":3.3117183881426584},{"x":5.604446503010655,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":5.604446503010655,"y":3.3117183881426584},{"x":5.986567855488653,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":5.986567855488653,"y":3.3117183881426584},{"x":6.368689207966652,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":6.368689207966652,"y":3.3117183881426584},{"x":6.496062992125983,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":6.496062992125983,"y":3.3117183881426584},{"x":6.75081056044465,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":6.75081056044465,"y":3.3117183881426584},{"x":7.132931912922649,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":7.132931912922649,"y":3.3117183881426584},{"x":7.515053265400647,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":7.515053265400647,"y":3.3117183881426584},{"x":7.960861509958315,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":7.960861509958315,"y":3.3117183881426584},{"x":8.40666975451598,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":8.40666975451598,"y":3.3117183881426584},{"x":8.59773043075498,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-11.081519221861972,"y":1.0189902732746638},{"x":-10.954145437702639,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":-10.954145437702639,"y":1.0189902732746638},{"x":-10.699397869383974,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":8.59773043075498,"y":3.8632237146827233},{"x":8.59773043075498,"y":3.884900416859656}]} />
      <schematicpath points={[{"x":8.54610930986568,"y":3.3117183881426584},{"x":8.59773043075498,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":5.604446503010655,"y":2.7137332098193614},{"x":5.604446503010655,"y":2.6111625752663272}]} />
      <schematicpath points={[{"x":8.40666975451598,"y":2.2742936544696626},{"x":8.40666975451598,"y":2.229041222788327}]} />
      <schematicpath points={[{"x":5.986567855488653,"y":3.09585456229736},{"x":5.986567855488653,"y":2.9932839277443257}]} />
      <schematicpath points={[{"x":7.132931912922649,"y":2.650046317739694},{"x":7.132931912922649,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":6.368689207966652,"y":2.650046317739694},{"x":6.368689207966652,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":7.515053265400647,"y":3.09585456229736},{"x":7.515053265400647,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":7.960861509958315,"y":2.650046317739694},{"x":7.960861509958315,"y":2.483788791106994}]} />
      <schematicpath points={[{"x":4.90389069013432,"y":3.032167670217694},{"x":4.90389069013432,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":6.75081056044465,"y":3.09585456229736},{"x":6.75081056044465,"y":2.9932839277443257}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":-0.1458082445576654},{"x":4.649143121815657,"y":-0.19106067623899925}]} />
      <schematicpath points={[{"x":9.10722556739231,"y":3.884900416859656},{"x":9.10722556739231,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":12.61000463177397,"y":3.0569708198239915},{"x":12.482630847614635,"y":3.0569708198239915}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":2.8659101435849923},{"x":12.482630847614635,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":9.298286243631312,"y":2.229041222788327},{"x":9.298286243631312,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":12.61000463177397,"y":2.92959703566466},{"x":12.482630847614635,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":2.92959703566466},{"x":12.482630847614635,"y":3.0569708198239915}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":3.0569708198239915},{"x":12.482630847614635,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":11.654701250578972,"y":3.5664659564613235},{"x":11.654701250578972,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":9.10722556739231,"y":3.3117183881426584},{"x":9.298286243631312,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":9.298286243631312,"y":3.3117183881426584},{"x":9.616720704029644,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":3.3117183881426584},{"x":9.616720704029644,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":3.7575266327003245},{"x":9.616720704029644,"y":5.731820287169985}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":5.731820287169985},{"x":9.616720704029644,"y":6.050254747568317}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":6.050254747568317},{"x":10.18990273274664,"y":6.050254747568317}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":3.3117183881426584},{"x":9.616720704029644,"y":2.9932839277443257}]} />
      <schematicpath points={[{"x":10.317276516905975,"y":7.196618805002316},{"x":9.935155164427977,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":9.935155164427977,"y":7.196618805002316},{"x":9.425660027790643,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":7.196618805002316},{"x":8.151922186197313,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":8.151922186197313,"y":7.196618805002316},{"x":7.32399258916165,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":7.32399258916165,"y":7.196618805002316},{"x":7.32399258916165,"y":5.731820287169985}]} />
      <schematicpath points={[{"x":7.32399258916165,"y":5.731820287169985},{"x":9.616720704029644,"y":5.731820287169985}]} />
      <schematicpath points={[{"x":8.151922186197313,"y":6.687123668364983},{"x":8.151922186197313,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":12.928439092172303,"y":3.7575266327003245},{"x":12.546317739694304,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":12.546317739694304,"y":3.7575266327003245},{"x":12.482630847614635,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":3.7575266327003245},{"x":11.654701250578972,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":3.7575266327003245},{"x":11.654701250578972,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":9.10722556739231,"y":3.8632237146827233},{"x":9.10722556739231,"y":3.884900416859656}]} />
      <schematicpath points={[{"x":9.14610930986568,"y":3.3117183881426584},{"x":9.10722556739231,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":3.032167670217694},{"x":12.482630847614635,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":9.298286243631312,"y":2.2742936544696626},{"x":9.298286243631312,"y":2.229041222788327}]} />
      <schematicpath points={[{"x":11.654701250578972,"y":3.6690365910143594},{"x":11.654701250578972,"y":3.5664659564613235}]} />
      <schematicpath points={[{"x":10.022024085224642,"y":6.305673923112554},{"x":10.18990273274664,"y":6.305673923112554}]} />
      <schematicpath points={[{"x":10.18990273274664,"y":6.305673923112554},{"x":10.18990273274664,"y":6.050254747568317}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":3.1595414543770275},{"x":9.616720704029644,"y":2.9932839277443257}]} />
      <schematicpath points={[{"x":10.149397869383973,"y":7.4620379805465475},{"x":10.317276516905975,"y":7.4620379805465475}]} />
      <schematicpath points={[{"x":10.317276516905975,"y":7.4620379805465475},{"x":10.317276516905975,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":9.935155164427977,"y":7.24187123668365},{"x":9.935155164427977,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":7.299189439555349},{"x":9.425660027790643,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":-1.4011116257526623,"y":4.203334877257989},{"x":-1.4011116257526623,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":-3.3754052802223242,"y":2.165354330708661},{"x":-3.3754052802223242,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-3.3754052802223242,"y":2.2927281148679945},{"x":-3.693839740620657,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-2.2927281148679945,"y":2.2927281148679945},{"x":-2.420101899027328,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-2.420101899027328,"y":2.2927281148679945},{"x":-2.420101899027328,"y":2.165354330708661}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":0.955303381194998},{"x":-0.8916164891153304,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":-10.126215840666976,"y":-0.25474756831866685},{"x":-10.126215840666976,"y":-0.3821213524780003}]} />
      <schematicpath points={[{"x":-10.126215840666976,"y":-0.3821213524780003},{"x":-9.48934691987031,"y":-0.3821213524780003}]} />
      <schematicpath points={[{"x":-10.954145437702639,"y":-4.585456229735989},{"x":-10.954145437702639,"y":-4.458082445576657}]} />
      <schematicpath points={[{"x":-10.954145437702639,"y":-4.458082445576657},{"x":-11.081519221861972,"y":-4.458082445576657}]} />
      <schematicpath points={[{"x":-5.2223251505326544,"y":-6.814497452524317},{"x":-5.604446503010653,"y":-6.814497452524317}]} />
      <schematicpath points={[{"x":-5.604446503010653,"y":-6.814497452524317},{"x":-5.604446503010653,"y":-7.196618805002316}]} />
      <schematicpath points={[{"x":-6.6871236683649835,"y":-3.5664659564613252},{"x":-6.6871236683649835,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-6.305002315886984,"y":-3.2480314960629926},{"x":-6.305002315886984,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-5.859194071329318,"y":-3.5664659564613252},{"x":-5.859194071329318,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":-3.5664659564613252},{"x":-7.387679481241316,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":-3.9485873089393237},{"x":-7.005558128763316,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-7.005558128763316,"y":-3.9485873089393237},{"x":-6.6871236683649835,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-6.6871236683649835,"y":-3.9485873089393237},{"x":-6.305002315886984,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-6.305002315886984,"y":-3.9485873089393237},{"x":-5.859194071329318,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-5.859194071329318,"y":-3.9485873089393237},{"x":-4.840203798054654,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":-3.9485873089393237},{"x":-4.840203798054654,"y":-3.630152848540992}]} />
      <schematicpath points={[{"x":-7.005558128763316,"y":-3.3117183881426593},{"x":-7.005558128763316,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-3.0569708198239933},{"x":-1.6558591940713292,"y":-2.92959703566466}]} />
      <schematicpath points={[{"x":-1.0189902732746638,"y":-2.92959703566466},{"x":-1.0189902732746638,"y":-2.8022232515053265}]} />
      <schematicpath points={[{"x":-1.0189902732746638,"y":-2.8022232515053265},{"x":-1.0826771653543297,"y":-2.8022232515053265}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-2.92959703566466},{"x":-1.0189902732746638,"y":-2.92959703566466}]} />
      <schematicpath points={[{"x":-1.0189902732746638,"y":-2.92959703566466},{"x":-1.0189902732746638,"y":-3.184344603983326}]} />
      <schematicpath points={[{"x":-1.0189902732746638,"y":-3.184344603983326},{"x":-1.0189902732746638,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-6.496062992125984,"y":0.8279295970356646},{"x":-6.75081056044465,"y":0.8279295970356646}]} />
      <schematicpath points={[{"x":-6.75081056044465,"y":0.8279295970356646},{"x":-7.069245020842983,"y":0.8279295970356646}]} />
      <schematicpath points={[{"x":-8.979851783232977,"y":-4.9675775822139885},{"x":-8.979851783232977,"y":-5.413385826771654}]} />
      <schematicpath points={[{"x":-8.979851783232977,"y":-5.413385826771654},{"x":-8.725104214914312,"y":-5.413385826771654}]} />
      <schematicpath points={[{"x":-8.725104214914312,"y":-5.413385826771654},{"x":-8.534043538675313,"y":-5.413385826771654}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":-5.413385826771654},{"x":-8.534043538675313,"y":-5.286012042612321}]} />
      <schematicpath points={[{"x":-5.795507179249652,"y":-1.46479851783233},{"x":-5.413385826771654,"y":-1.46479851783233}]} />
      <schematicpath points={[{"x":-5.413385826771654,"y":-1.46479851783233},{"x":-5.413385826771654,"y":-1.6558591940713292}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-8.21560907827698},{"x":1.5284854099119958,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-7.960861509958314},{"x":1.2737378415933307,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-8.21560907827698},{"x":-0.3821213524779985,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-7.960861509958314},{"x":-0.6368689207966653,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-6.687123668364984},{"x":-0.3821213524779985,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-6.432376100046318},{"x":-0.6368689207966653,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-7.196618805002315,"y":-0.5731820287169995},{"x":-7.069245020842983,"y":-0.5731820287169995}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":-6.050254747568319},{"x":1.2737378415933307,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":-6.432376100046318},{"x":1.5284854099119958,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-6.432376100046318},{"x":1.5284854099119958,"y":-6.687123668364984}]} />
      <schematicpath points={[{"x":-3.584900416859657,"y":2.2927281148679945},{"x":-3.693839740620657,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-2.401667438628996,"y":2.2927281148679945},{"x":-2.2927281148679945,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":0.9737378415933282},{"x":-0.8916164891153304,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":-10.126215840666976,"y":-0.3636868920796683},{"x":-10.126215840666976,"y":-0.25474756831866685}]} />
      <schematicpath points={[{"x":-9.48934691987031,"y":-0.42737378415933414},{"x":-9.48934691987031,"y":-0.3821213524780003}]} />
      <schematicpath points={[{"x":-6.6871236683649835,"y":-3.675405280222326},{"x":-6.6871236683649835,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":-6.305002315886984,"y":-3.356970819823993},{"x":-6.305002315886984,"y":-3.2480314960629926}]} />
      <schematicpath points={[{"x":-5.859194071329318,"y":-3.675405280222326},{"x":-5.859194071329318,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":-3.675405280222326},{"x":-7.387679481241316,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":-3.675405280222326},{"x":-4.840203798054654,"y":-3.630152848540992}]} />
      <schematicpath points={[{"x":-7.005558128763316,"y":-3.356970819823993},{"x":-7.005558128763316,"y":-3.3117183881426593}]} />
      <schematicpath points={[{"x":-1.0374247336729958,"y":-2.8022232515053265},{"x":-1.0826771653543297,"y":-2.8022232515053265}]} />
      <schematicpath points={[{"x":-6.496062992125984,"y":0.7126215840666958},{"x":-6.496062992125984,"y":0.8279295970356646}]} />
      <schematicpath points={[{"x":-7.069245020842983,"y":0.7189902732746631},{"x":-7.069245020842983,"y":0.8279295970356646}]} />
      <schematicpath points={[{"x":-8.979851783232977,"y":-5.076516905974989},{"x":-8.979851783232977,"y":-4.9675775822139885}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":-5.394951366373321},{"x":-8.534043538675313,"y":-5.286012042612321}]} />
      <schematicpath points={[{"x":-5.458638258452988,"y":-1.6558591940713292},{"x":-5.413385826771654,"y":-1.6558591940713292}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-8.006113941639647},{"x":1.5284854099119958,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-8.006113941639647},{"x":-0.3821213524779985,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-6.477628531727652},{"x":-0.3821213524779985,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-7.114497452524317,"y":-0.5731820287169995},{"x":-7.069245020842983,"y":-0.5731820287169995}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-6.477628531727652},{"x":1.5284854099119958,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-2.6111625752663272,"y":-4.6708198239925895},{"x":-2.6111625752663272,"y":-4.649143121815656}]} />
      <schematicpath points={[{"x":-2.9932839277443257,"y":-4.6708198239925895},{"x":-2.9932839277443257,"y":-4.649143121815656}]} />
      <schematicpath points={[{"x":-10.826771653543307,"y":3.693839740620657},{"x":-11.208893006021306,"y":3.693839740620657}]} />
      <schematicpath points={[{"x":-11.208893006021306,"y":3.693839740620657},{"x":-11.399953682260305,"y":3.693839740620657}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":3.693839740620657},{"x":-11.527327466419639,"y":3.693839740620657}]} />
      <schematicpath points={[{"x":-11.654701250578972,"y":3.0569708198239915},{"x":-11.399953682260305,"y":3.0569708198239915}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":3.0569708198239915},{"x":-11.399953682260305,"y":3.693839740620657}]} />
      <schematicpath points={[{"x":-11.654701250578972,"y":2.92959703566466},{"x":-11.399953682260305,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":2.92959703566466},{"x":-11.399953682260305,"y":3.0569708198239915}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":2.92959703566466},{"x":-5.540759610930987,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":2.8659101435849923},{"x":-11.399953682260305,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":-11.654701250578972,"y":2.8022232515053265},{"x":-5.668133395090319,"y":2.8022232515053265}]} />
      <schematicpath points={[{"x":-5.668133395090319,"y":2.8022232515053265},{"x":-5.540759610930987,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":-0.2547475683186651,"y":2.6111625752663272},{"x":-0.2547475683186651,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-6.177628531727652,"y":2.5474756831866596},{"x":-6.177628531727652,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":3.184344603983325},{"x":-4.458082445576656,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-9.043538675312645,"y":2.5474756831866596},{"x":-9.043538675312645,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-0.5731820287169977,"y":3.3117183881426584},{"x":-0.2547475683186651,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-0.5731820287169977,"y":3.3117183881426584},{"x":-0.5731820287169977,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":-0.5731820287169977,"y":4.394395553496988},{"x":-0.3184344603983327,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":-9.29828624363131,"y":3.3117183881426584},{"x":-9.29828624363131,"y":0.8916164891153304}]} />
      <schematicpath points={[{"x":-11.208893006021306,"y":3.693839740620657},{"x":-11.208893006021306,"y":4.075961093098655}]} />
      <schematicpath points={[{"x":-11.208893006021306,"y":4.075961093098655},{"x":-11.33626679018064,"y":4.075961093098655}]} />
      <schematicpath points={[{"x":-8.02454840203798,"y":2.5474756831866596},{"x":-8.02454840203798,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":2.5474756831866596},{"x":-8.534043538675313,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-6.75081056044465,"y":2.5474756831866596},{"x":-6.75081056044465,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":2.5474756831866596},{"x":-7.387679481241316,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-10.826771653543307,"y":3.693839740620657},{"x":-10.57202408522464,"y":3.693839740620657}]} />
      <schematicpath points={[{"x":-10.57202408522464,"y":3.693839740620657},{"x":-9.29828624363131,"y":3.693839740620657}]} />
      <schematicpath points={[{"x":-9.29828624363131,"y":3.693839740620657},{"x":-9.29828624363131,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-9.29828624363131,"y":3.3117183881426584},{"x":-9.043538675312645,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-9.043538675312645,"y":3.3117183881426584},{"x":-8.534043538675313,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":3.3117183881426584},{"x":-8.02454840203798,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-8.02454840203798,"y":3.3117183881426584},{"x":-7.387679481241316,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":3.3117183881426584},{"x":-6.75081056044465,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-6.75081056044465,"y":3.3117183881426584},{"x":-6.177628531727652,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-6.177628531727652,"y":3.3117183881426584},{"x":-5.540759610930987,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":3.3117183881426584},{"x":-4.458082445576656,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":3.3117183881426584},{"x":-0.5731820287169977,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-10.76308476146364,"y":0.3821213524779985},{"x":-11.017832329782307,"y":0.3821213524779985}]} />
      <schematicpath points={[{"x":-11.017832329782307,"y":0.3821213524779985},{"x":-11.14520611394164,"y":0.3821213524779985}]} />
      <schematicpath points={[{"x":2.5474756831866596,"y":-0.5094951366373319},{"x":2.674849467345995,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":2.674849467345995,"y":-0.5094951366373319},{"x":3.120657711903659,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-6.1776285317276525},{"x":8.151922186197313,"y":-6.1776285317276525}]} />
      <schematicpath points={[{"x":10.572024085224642,"y":-6.1776285317276525},{"x":8.916164891153313,"y":-6.1776285317276525}]} />
      <schematicpath points={[{"x":-10.699397869383974,"y":1.273737841593329},{"x":-10.954145437702639,"y":1.273737841593329}]} />
      <schematicpath points={[{"x":-10.954145437702639,"y":1.273737841593329},{"x":-11.081519221861972,"y":1.273737841593329}]} />
      <schematicpath points={[{"x":-5.9865678554886514,"y":-5.2223251505326544},{"x":-5.4770727188513195,"y":-5.2223251505326544}]} />
      <schematicpath points={[{"x":-10.826771653543307,"y":3.672163038443724},{"x":-10.826771653543307,"y":3.693839740620657}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":3.0385363594256596},{"x":-11.399953682260305,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":3.032167670217694},{"x":-5.540759610930987,"y":2.92959703566466}]} />
      <schematicpath points={[{"x":-0.2547475683186651,"y":2.79015748031496},{"x":-0.2547475683186651,"y":2.6111625752663272}]} />
      <schematicpath points={[{"x":-6.177628531727652,"y":2.650046317739694},{"x":-6.177628531727652,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":3.2295970356646606},{"x":-4.458082445576656,"y":3.184344603983325}]} />
      <schematicpath points={[{"x":-9.043538675312645,"y":2.7137332098193614},{"x":-9.043538675312645,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-9.29828624363131,"y":0.9368689207966661},{"x":-9.29828624363131,"y":0.8916164891153304}]} />
      <schematicpath points={[{"x":-8.02454840203798,"y":2.7137332098193614},{"x":-8.02454840203798,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":2.7137332098193614},{"x":-8.534043538675313,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-6.75081056044465,"y":2.650046317739694},{"x":-6.75081056044465,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":2.650046317739694},{"x":-7.387679481241316,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":2.592728114867997,"y":-0.5094951366373319},{"x":2.5474756831866596,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-6.039749884205651},{"x":8.916164891153313,"y":-6.1776285317276525}]} />
      <schematicpath points={[{"x":-5.522325150532655,"y":-5.2223251505326544},{"x":-5.4770727188513195,"y":-5.2223251505326544}]} />
      <schematicpath points={[{"x":-11.654701250578972,"y":2.674849467345993},{"x":-5.668133395090319,"y":2.674849467345993}]} />
      <schematicpath points={[{"x":-5.668133395090319,"y":2.674849467345993},{"x":-5.540759610930987,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":2.6111625752663272},{"x":-11.399953682260305,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-11.654701250578972,"y":2.5474756831866596},{"x":-11.399953682260305,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":2.5474756831866596},{"x":-11.399953682260305,"y":2.420101899027326}]} />
      <schematicpath points={[{"x":-11.654701250578972,"y":2.420101899027326},{"x":-11.399953682260305,"y":2.420101899027326}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":2.420101899027326},{"x":-11.399953682260305,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":1.9106067623899943},{"x":-10.890458545622973,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":-11.591014358499304,"y":1.9106067623899943},{"x":-11.399953682260305,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":2.6111625752663272},{"x":12.482630847614635,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":12.61000463177397,"y":2.420101899027326},{"x":12.482630847614635,"y":2.420101899027326}]} />
      <schematicpath points={[{"x":12.928439092172303,"y":1.8469198703103284},{"x":12.482630847614635,"y":1.8469198703103284}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":1.6558591940713292},{"x":12.482630847614635,"y":1.8469198703103284}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":1.8469198703103284},{"x":12.482630847614635,"y":2.420101899027326}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":2.420101899027326},{"x":12.482630847614635,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":2.5474756831866596},{"x":12.61000463177397,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":11.654701250578972,"y":3.248031496062991},{"x":11.654701250578972,"y":3.184344603983325}]} />
      <schematicpath points={[{"x":5.604446503010655,"y":2.0379805465493277},{"x":5.604446503010655,"y":2.229041222788327}]} />
      <schematicpath points={[{"x":12.61000463177397,"y":2.674849467345993},{"x":12.03682260305697,"y":2.674849467345993}]} />
      <schematicpath points={[{"x":12.03682260305697,"y":2.674849467345993},{"x":12.03682260305697,"y":0.8916164891153304}]} />
      <schematicpath points={[{"x":12.03682260305697,"y":0.8916164891153304},{"x":5.286012042612322,"y":0.8916164891153304}]} />
      <schematicpath points={[{"x":5.286012042612322,"y":0.8916164891153304},{"x":5.286012042612322,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":5.286012042612322,"y":2.5474756831866596},{"x":4.90389069013432,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":5.986567855488653,"y":2.6111625752663272},{"x":5.986567855488653,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":7.132931912922649,"y":2.165354330708661},{"x":7.132931912922649,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":6.75081056044465,"y":2.6111625752663272},{"x":6.75081056044465,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":6.368689207966652,"y":2.165354330708661},{"x":6.368689207966652,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":6.941871236683651,"y":1.9106067623899943},{"x":6.941871236683651,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":6.75081056044465,"y":2.0379805465493277},{"x":6.941871236683651,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":6.941871236683651,"y":2.0379805465493277},{"x":7.132931912922649,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":7.132931912922649,"y":2.0379805465493277},{"x":7.515053265400647,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":7.515053265400647,"y":2.0379805465493277},{"x":7.515053265400647,"y":2.674849467345993}]} />
      <schematicpath points={[{"x":7.515053265400647,"y":2.0379805465493277},{"x":7.960861509958315,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":7.960861509958315,"y":2.0379805465493277},{"x":7.960861509958315,"y":2.229041222788327}]} />
      <schematicpath points={[{"x":4.90389069013432,"y":2.674849467345993},{"x":4.90389069013432,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":4.90389069013432,"y":2.5474756831866596},{"x":4.90389069013432,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":4.90389069013432,"y":2.0379805465493277},{"x":5.604446503010655,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":5.604446503010655,"y":2.0379805465493277},{"x":5.986567855488653,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":5.986567855488653,"y":2.0379805465493277},{"x":6.368689207966652,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":6.368689207966652,"y":2.0379805465493277},{"x":6.75081056044465,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":1.0189902732746638,"y":-2.420101899027328},{"x":1.0189902732746638,"y":-2.865910143584993}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-3.9485873089393237},{"x":-1.5284854099119958,"y":-3.184344603983326}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-3.184344603983326},{"x":-1.6558591940713292,"y":-3.184344603983326}]} />
      <schematicpath points={[{"x":-9.043538675312645,"y":2.2927281148679945},{"x":-9.043538675312645,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-9.043538675312645,"y":2.0379805465493277},{"x":-8.534043538675313,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":2.0379805465493277},{"x":-8.02454840203798,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-8.02454840203798,"y":2.0379805465493277},{"x":-7.387679481241316,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":2.0379805465493277},{"x":-6.75081056044465,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-6.75081056044465,"y":2.0379805465493277},{"x":-6.177628531727652,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-6.177628531727652,"y":2.0379805465493277},{"x":-6.177628531727652,"y":2.165354330708661}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":2.2927281148679945},{"x":-8.534043538675313,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-8.02454840203798,"y":2.2927281148679945},{"x":-8.02454840203798,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-6.75081056044465,"y":2.165354330708661},{"x":-6.75081056044465,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":2.165354330708661},{"x":-7.387679481241316,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":2.6111625752663272},{"x":9.616720704029644,"y":2.738536359425659}]} />
      <schematicpath points={[{"x":8.151922186197313,"y":-6.559749884205651},{"x":8.151922186197313,"y":-6.814497452524317}]} />
      <schematicpath points={[{"x":8.151922186197313,"y":-6.814497452524317},{"x":8.151922186197313,"y":-6.94187123668365}]} />
      <schematicpath points={[{"x":8.151922186197313,"y":-6.94187123668365},{"x":8.916164891153313,"y":-6.94187123668365}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-8.725104214914312},{"x":8.279295970356648,"y":-8.725104214914312}]} />
      <schematicpath points={[{"x":8.279295970356648,"y":-8.597730430754979},{"x":8.151922186197313,"y":-8.597730430754979}]} />
      <schematicpath points={[{"x":8.151922186197313,"y":-8.342982862436314},{"x":8.279295970356648,"y":-8.342982862436314}]} />
      <schematicpath points={[{"x":8.279295970356648,"y":-8.342982862436314},{"x":8.279295970356648,"y":-8.597730430754979}]} />
      <schematicpath points={[{"x":8.279295970356648,"y":-8.597730430754979},{"x":8.279295970356648,"y":-8.725104214914312}]} />
      <schematicpath points={[{"x":8.151922186197313,"y":-7.706113941639648},{"x":8.279295970356648,"y":-7.706113941639648}]} />
      <schematicpath points={[{"x":10.18990273274664,"y":-2.0379805465493295},{"x":8.916164891153313,"y":-2.0379805465493295}]} />
      <schematicpath points={[{"x":9.68040759610931,"y":-4.7128300138953225},{"x":8.916164891153313,"y":-4.7128300138953225}]} />
      <schematicpath points={[{"x":7.897174617878649,"y":-3.439092172301992},{"x":7.897174617878649,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":7.897174617878649,"y":-3.0569708198239933},{"x":7.960861509958315,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":3.5027790643816576,"y":-4.075961093098657},{"x":3.5027790643816576,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":2.8022232515053265,"y":-3.9485873089393237},{"x":2.8022232515053265,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":2.8022232515053265,"y":-4.075961093098657},{"x":3.248031496062991,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":4.012274201018991,"y":-3.9485873089393237},{"x":4.012274201018991,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":4.458082445576656,"y":-4.075961093098657},{"x":4.458082445576656,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":4.585456229735987,"y":-4.075961093098657},{"x":4.585456229735987,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":3.375405280222326,"y":-3.9485873089393237},{"x":3.375405280222326,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":3.248031496062991,"y":-3.9485873089393237},{"x":3.248031496062991,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":3.248031496062991,"y":-4.075961093098657},{"x":3.375405280222326,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":3.375405280222326,"y":-4.075961093098657},{"x":3.5027790643816576,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":3.5027790643816576,"y":-4.075961093098657},{"x":3.630152848540993,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":3.630152848540993,"y":-4.075961093098657},{"x":4.012274201018991,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":4.012274201018991,"y":-4.075961093098657},{"x":4.458082445576656,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":4.458082445576656,"y":-4.075961093098657},{"x":4.585456229735987,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":4.585456229735987,"y":-4.075961093098657},{"x":4.7128300138953225,"y":-4.075961093098657}]} />
      <schematicpath points={[{"x":4.7128300138953225,"y":-4.075961093098657},{"x":4.7128300138953225,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":3.630152848540993,"y":-4.075961093098657},{"x":3.630152848540993,"y":-4.203334877257991}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":2.4321676702176926},{"x":-5.540759610930987,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-11.399953682260305,"y":2.438536359425658},{"x":-11.399953682260305,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-10.890458545622973,"y":1.8889300602130614},{"x":-10.890458545622973,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":12.482630847614635,"y":2.4321676702176926},{"x":12.482630847614635,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":11.654701250578972,"y":3.069036591014358},{"x":11.654701250578972,"y":3.184344603983325}]} />
      <schematicpath points={[{"x":5.604446503010655,"y":2.11373320981936},{"x":5.604446503010655,"y":2.229041222788327}]} />
      <schematicpath points={[{"x":4.90389069013432,"y":2.4321676702176926},{"x":4.90389069013432,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":5.986567855488653,"y":2.4958545622973585},{"x":5.986567855488653,"y":2.6111625752663272}]} />
      <schematicpath points={[{"x":7.132931912922649,"y":2.0500463177396924},{"x":7.132931912922649,"y":2.165354330708661}]} />
      <schematicpath points={[{"x":6.75081056044465,"y":2.4958545622973585},{"x":6.75081056044465,"y":2.6111625752663272}]} />
      <schematicpath points={[{"x":6.368689207966652,"y":2.0500463177396924},{"x":6.368689207966652,"y":2.165354330708661}]} />
      <schematicpath points={[{"x":7.515053265400647,"y":2.4958545622973585},{"x":7.515053265400647,"y":2.674849467345993}]} />
      <schematicpath points={[{"x":7.960861509958315,"y":2.0500463177396924},{"x":7.960861509958315,"y":2.229041222788327}]} />
      <schematicpath points={[{"x":-9.043538675312645,"y":2.11373320981936},{"x":-9.043538675312645,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-6.177628531727652,"y":2.0500463177396924},{"x":-6.177628531727652,"y":2.165354330708661}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":2.11373320981936},{"x":-8.534043538675313,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-8.02454840203798,"y":2.11373320981936},{"x":-8.02454840203798,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-6.75081056044465,"y":2.0500463177396924},{"x":-6.75081056044465,"y":2.165354330708661}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":2.0500463177396924},{"x":-7.387679481241316,"y":2.165354330708661}]} />
      <schematicpath points={[{"x":9.616720704029644,"y":2.559541454377026},{"x":9.616720704029644,"y":2.738536359425659}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-7.0797498842056505},{"x":8.916164891153313,"y":-6.94187123668365}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-8.862982862436313},{"x":8.916164891153313,"y":-8.725104214914312}]} />
      <schematicpath points={[{"x":2.8022232515053265,"y":-4.057526632700324},{"x":2.8022232515053265,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":4.012274201018991,"y":-4.057526632700324},{"x":4.012274201018991,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-0.2547475683186651,"y":2.1901574803149586},{"x":-0.2547475683186651,"y":2.3564150069476604}]} />
      <schematicpath points={[{"x":-6.050254747568318,"y":0.7126215840666958},{"x":-6.050254747568318,"y":0.8279295970356646}]} />
      <schematicpath points={[{"x":12.418943955534969,"y":6.444441871236684},{"x":12.418943955534969,"y":6.559749884205651}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":2.674849467345993},{"x":-0.8916164891153304,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":2.5474756831866596},{"x":-0.8916164891153304,"y":2.420101899027326}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":2.5474756831866596},{"x":-1.1463640574339973,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-1.1463640574339973,"y":2.5474756831866596},{"x":-1.1463640574339973,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":-1.1463640574339973,"y":4.267021769337656},{"x":-1.2737378415933307,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":-1.2737378415933307,"y":4.267021769337656},{"x":-1.2737378415933307,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":2.629597035664659},{"x":-0.8916164891153304,"y":2.674849467345993}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":2.465354330708662},{"x":-0.8916164891153304,"y":2.420101899027326}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":1.7832329782306626},{"x":1.2737378415933307,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-0.5094951366373319},{"x":-1.5284854099119958,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-0.5094951366373319},{"x":0.06368689207966582,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":0.06368689207966582,"y":-0.5094951366373319},{"x":0.8916164891153304,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":0.8916164891153304,"y":-0.5094951366373319},{"x":0.8916164891153304,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":0.06368689207966582,"y":-0.5094951366373319},{"x":0.06368689207966582,"y":-0.6368689207966653}]} />
      <schematicpath points={[{"x":0.06368689207966582,"y":-0.6368689207966653},{"x":-0.6368689207966653,"y":-0.6368689207966653}]} />
      <schematicpath points={[{"x":1.0189902732746638,"y":3.3117183881426584},{"x":1.0189902732746638,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":1.0189902732746638,"y":-0.5094951366373319},{"x":1.0189902732746638,"y":-1.6558591940713292}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":-0.5094951366373319},{"x":1.0189902732746638,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":0.5094951366373319,"y":3.3117183881426584},{"x":0.8279295970356646,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":0.4458082445576661,"y":4.394395553496988},{"x":0.8279295970356646,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":0.8279295970356646,"y":4.394395553496988},{"x":0.8279295970356646,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":0.8279295970356646,"y":3.3117183881426584},{"x":0.8916164891153304,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":0.8916164891153304,"y":3.3117183881426584},{"x":1.0189902732746638,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":1.0189902732746638,"y":3.3117183881426584},{"x":1.1463640574339973,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":1.1463640574339973,"y":3.3117183881426584},{"x":1.2737378415933307,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":3.3117183881426584},{"x":1.4011116257526641,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":1.4011116257526641,"y":3.3117183881426584},{"x":1.4011116257526641,"y":2.9932839277443257}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":1.8284854099119965},{"x":1.2737378415933307,"y":1.7832329782306626}]} />
      <schematicpath points={[{"x":-0.5279295970356639,"y":-0.6368689207966653},{"x":-0.6368689207966653,"y":-0.6368689207966653}]} />
      <schematicpath points={[{"x":1.1647985178323292,"y":-0.5094951366373319},{"x":1.2737378415933307,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":1.1463640574339973,"y":3.2900416859657255},{"x":1.1463640574339973,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":1.3622278832792958,"y":3.3117183881426584},{"x":1.4011116257526641,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":1.3622278832792958,"y":2.9932839277443257},{"x":1.4011116257526641,"y":2.9932839277443257}]} />
      <schematicpath points={[{"x":8.661417322834646,"y":1.5284854099119958},{"x":8.40666975451598,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":0.5094951366373319},{"x":-1.5284854099119958,"y":0.5094951366373319}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":0.5094951366373319},{"x":8.40666975451598,"y":0.5094951366373319}]} />
      <schematicpath points={[{"x":8.40666975451598,"y":0.5094951366373319},{"x":8.40666975451598,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":8.40666975451598,"y":1.5284854099119958},{"x":8.40666975451598,"y":1.719546086150995}]} />
      <schematicpath points={[{"x":8.552477999073643,"y":1.5284854099119958},{"x":8.661417322834646,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":8.40666975451598,"y":1.6742936544696612},{"x":8.40666975451598,"y":1.719546086150995}]} />
      <schematicpath points={[{"x":9.043538675312645,"y":1.5284854099119958},{"x":9.298286243631312,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":0.3821213524779985},{"x":-1.5284854099119958,"y":0.3821213524779985}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":0.3821213524779985},{"x":9.298286243631312,"y":0.3821213524779985}]} />
      <schematicpath points={[{"x":9.298286243631312,"y":0.3821213524779985},{"x":9.298286243631312,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":9.298286243631312,"y":1.5284854099119958},{"x":9.298286243631312,"y":1.719546086150995}]} />
      <schematicpath points={[{"x":9.152477999073644,"y":1.5284854099119958},{"x":9.043538675312645,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":9.298286243631312,"y":1.6742936544696612},{"x":9.298286243631312,"y":1.719546086150995}]} />
      <schematicpath points={[{"x":1.46479851783233,"y":1.0826771653543297},{"x":1.2737378415933307,"y":1.0826771653543297}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":0.12737378415933343},{"x":-1.5284854099119958,"y":0.12737378415933343}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":0.12737378415933343},{"x":1.2737378415933307,"y":0.12737378415933343}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":0.12737378415933343},{"x":1.2737378415933307,"y":1.0826771653543297}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":1.0826771653543297},{"x":1.2737378415933307,"y":1.273737841593329}]} />
      <schematicpath points={[{"x":1.3558591940713285,"y":1.0826771653543297},{"x":1.46479851783233,"y":1.0826771653543297}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":1.228485409911995},{"x":1.2737378415933307,"y":1.273737841593329}]} />
      <schematicpath points={[{"x":1.8469198703103284,"y":1.0826771653543297},{"x":2.0379805465493295,"y":1.0826771653543297}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":0},{"x":-1.5284854099119958,"y":0}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":0},{"x":2.0379805465493295,"y":0}]} />
      <schematicpath points={[{"x":2.0379805465493295,"y":0},{"x":2.0379805465493295,"y":1.0826771653543297}]} />
      <schematicpath points={[{"x":2.0379805465493295,"y":1.0826771653543297},{"x":2.0379805465493295,"y":1.273737841593329}]} />
      <schematicpath points={[{"x":1.95585919407133,"y":1.0826771653543297},{"x":1.8469198703103284,"y":1.0826771653543297}]} />
      <schematicpath points={[{"x":2.0379805465493295,"y":1.228485409911995},{"x":2.0379805465493295,"y":1.273737841593329}]} />
      <schematicpath points={[{"x":1.6558591940713292,"y":-0.5094951366373319},{"x":2.0379805465493295,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":1.7647985178323307,"y":-0.5094951366373319},{"x":1.6558591940713292,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":1.9927281148679956,"y":-0.5094951366373319},{"x":2.0379805465493295,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-0.5094951366373319},{"x":-4.776516905974988,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":-4.776516905974988,"y":-0.5094951366373319},{"x":-4.967577582213988,"y":-0.5094951366373319}]} />
      <schematicpath points={[{"x":-3.8212135247799903,"y":-6.94187123668365},{"x":-3.8212135247799903,"y":-7.069245020842983}]} />
      <schematicpath points={[{"x":-4.203334877257989,"y":-7.069245020842983},{"x":-3.8212135247799903,"y":-7.069245020842983}]} />
      <schematicpath points={[{"x":-3.8212135247799903,"y":-7.069245020842983},{"x":-3.0569708198239915,"y":-7.069245020842983}]} />
      <schematicpath points={[{"x":-3.0569708198239915,"y":-7.069245020842983},{"x":-3.0569708198239915,"y":-6.368689207966652}]} />
      <schematicpath points={[{"x":-3.0569708198239915,"y":-6.368689207966652},{"x":-3.0569708198239915,"y":-5.986567855488652}]} />
      <schematicpath points={[{"x":2.165354330708661,"y":-7.451366373320982},{"x":1.9742936544696619,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":1.9742936544696619,"y":-7.451366373320982},{"x":1.5284854099119958,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":1.1463640574339973,"y":-7.451366373320982},{"x":1.2737378415933307,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":-7.451366373320982},{"x":1.5284854099119958,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":-7.833487725798982},{"x":1.2737378415933307,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":-4.458082445576657},{"x":9.043538675312645,"y":-4.458082445576657}]} />
      <schematicpath points={[{"x":9.043538675312645,"y":-4.458082445576657},{"x":8.916164891153313,"y":-4.458082445576657}]} />
      <schematicpath points={[{"x":-3.8212135247799903,"y":-6.987123668364984},{"x":-3.8212135247799903,"y":-6.94187123668365}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-7.406113941639648},{"x":1.5284854099119958,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-0.6368689207966653},{"x":-4.776516905974988,"y":-0.6368689207966653}]} />
      <schematicpath points={[{"x":-4.776516905974988,"y":-0.6368689207966653},{"x":-4.967577582213988,"y":-0.6368689207966653}]} />
      <schematicpath points={[{"x":-3.439092172301992,"y":-7.32399258916165},{"x":-3.439092172301992,"y":-6.94187123668365}]} />
      <schematicpath points={[{"x":-5.2223251505326544,"y":-7.069245020842983},{"x":-5.2223251505326544,"y":-7.32399258916165}]} />
      <schematicpath points={[{"x":-5.2223251505326544,"y":-7.32399258916165},{"x":-3.439092172301992,"y":-7.32399258916165}]} />
      <schematicpath points={[{"x":-3.439092172301992,"y":-7.32399258916165},{"x":-2.674849467345993,"y":-7.32399258916165}]} />
      <schematicpath points={[{"x":-2.674849467345993,"y":-7.32399258916165},{"x":-2.674849467345993,"y":-6.368689207966652}]} />
      <schematicpath points={[{"x":-2.674849467345993,"y":-6.368689207966652},{"x":-2.674849467345993,"y":-5.986567855488652}]} />
      <schematicpath points={[{"x":-0.7642427049559988,"y":-7.451366373320982},{"x":-0.6368689207966653,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":-0.6368689207966653,"y":-7.451366373320982},{"x":-0.3821213524779985,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-7.451366373320982},{"x":0.06368689207966582,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":0.06368689207966582,"y":-7.451366373320982},{"x":0.25474756831866685,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":-0.6368689207966653,"y":-7.833487725798982},{"x":-0.6368689207966653,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-4.203334877257991},{"x":9.043538675312645,"y":-4.203334877257991}]} />
      <schematicpath points={[{"x":9.043538675312645,"y":-4.203334877257991},{"x":9.425660027790643,"y":-4.203334877257991}]} />
      <schematicpath points={[{"x":-3.439092172301992,"y":-6.987123668364984},{"x":-3.439092172301992,"y":-6.94187123668365}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-7.406113941639648},{"x":-0.3821213524779985,"y":-7.451366373320982}]} />
      <schematicpath points={[{"x":-10.76308476146364,"y":-0.8279295970356646},{"x":-11.081519221861972,"y":-0.8279295970356646}]} />
      <schematicpath points={[{"x":-11.081519221861972,"y":-0.8279295970356646},{"x":-11.14520611394164,"y":-0.8279295970356646}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":0.8916164891153304},{"x":-5.28601204261232,"y":0.8916164891153304}]} />
      <schematicpath points={[{"x":-5.28601204261232,"y":0.8916164891153304},{"x":-5.540759610930987,"y":0.8916164891153304}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":0.8916164891153304},{"x":-5.540759610930987,"y":1.210050949513663}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":1.210050949513663},{"x":-6.050254747568318,"y":1.210050949513663}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":1.6558591940713292},{"x":-5.540759610930987,"y":1.210050949513663}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":-0.8916164891153322},{"x":-5.9865678554886514,"y":-0.8916164891153322}]} />
      <schematicpath points={[{"x":-5.9865678554886514,"y":-0.8916164891153322},{"x":-6.113941639647985,"y":-0.8916164891153322}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":4.394395553496988},{"x":-2.1016674386289953,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":-2.1016674386289953,"y":4.394395553496988},{"x":-2.165354330708661,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":-2.165354330708661,"y":4.394395553496988},{"x":-2.165354330708661,"y":4.5217693376563215}]} />
      <schematicpath points={[{"x":-2.165354330708661,"y":4.5217693376563215},{"x":-2.7385363594256606,"y":4.5217693376563215}]} />
      <schematicpath points={[{"x":-2.7385363594256606,"y":4.5217693376563215},{"x":-2.7385363594256606,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":-2.7385363594256606,"y":4.267021769337656},{"x":-2.674849467345993,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-5.413385826771654},{"x":1.5284854099119958,"y":-5.349698934691987}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-5.349698934691987},{"x":1.5284854099119958,"y":-5.158638258452988}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":-5.795507179249653},{"x":1.2737378415933307,"y":-5.349698934691987}]} />
      <schematicpath points={[{"x":1.2737378415933307,"y":-5.349698934691987},{"x":1.5284854099119958,"y":-5.349698934691987}]} />
      <schematicpath points={[{"x":-10.317276516905974,"y":-4.203334877257991},{"x":-10.699397869383974,"y":-4.203334877257991}]} />
      <schematicpath points={[{"x":-10.699397869383974,"y":-4.203334877257991},{"x":-11.081519221861972,"y":-4.203334877257991}]} />
      <schematicpath points={[{"x":-6.050254747568318,"y":1.3126215840666973},{"x":-6.050254747568318,"y":1.210050949513663}]} />
      <schematicpath points={[{"x":-5.540759610930987,"y":1.6341824918943963},{"x":-5.540759610930987,"y":1.6558591940713292}]} />
      <schematicpath points={[{"x":-5.586012042612321,"y":-0.8916164891153322},{"x":-5.540759610930987,"y":-0.8916164891153322}]} />
      <schematicpath points={[{"x":-2.7201018990273287,"y":4.267021769337656},{"x":-2.674849467345993,"y":4.267021769337656}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-5.36813339509032},{"x":1.5284854099119958,"y":-5.413385826771654}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-1.5284854099119976},{"x":-1.5284854099119958,"y":-1.5284854099119976}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-1.5284854099119976},{"x":-0.6368689207966653,"y":-1.5284854099119976}]} />
      <schematicpath points={[{"x":-0.6368689207966653,"y":-1.5284854099119976},{"x":-0.6368689207966653,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":-0.6368689207966653,"y":-3.5664659564613252},{"x":1.5921723019916634,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":1.5921723019916634,"y":-3.5664659564613252},{"x":1.910606762389996,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":1.5921723019916634,"y":-3.5664659564613252},{"x":1.5921723019916634,"y":-4.7128300138953225}]} />
      <schematicpath points={[{"x":1.5921723019916634,"y":-4.7128300138953225},{"x":1.910606762389996,"y":-4.7128300138953225}]} />
      <schematicpath points={[{"x":1.8653543307086604,"y":-3.5664659564613252},{"x":1.910606762389996,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":1.8653543307086604,"y":-4.7128300138953225},{"x":1.910606762389996,"y":-4.7128300138953225}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-1.6558591940713292},{"x":-4.776516905974988,"y":-1.6558591940713292}]} />
      <schematicpath points={[{"x":-4.776516905974988,"y":-1.6558591940713292},{"x":-4.903890690134322,"y":-1.6558591940713292}]} />
      <schematicpath points={[{"x":-4.858638258452986,"y":-1.6558591940713292},{"x":-4.903890690134322,"y":-1.6558591940713292}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-2.674849467345993},{"x":-4.840203798054654,"y":-2.674849467345993}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":-2.674849467345993},{"x":-4.967577582213988,"y":-2.674849467345993}]} />
      <schematicpath points={[{"x":2.165354330708661,"y":-5.922880963408986},{"x":1.7832329782306626,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":1.7832329782306626,"y":-5.922880963408986},{"x":1.5284854099119958,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-5.922880963408986},{"x":1.2737378415933307,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-5.877628531727653},{"x":1.5284854099119958,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":1.5284854099119958,"y":-5.9681333950903195},{"x":1.5284854099119958,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":-6.6871236683649835,"y":-3.184344603983326},{"x":-6.6871236683649835,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":-6.6871236683649835,"y":-3.075405280222326},{"x":-6.6871236683649835,"y":-3.184344603983326}]} />
      <schematicpath points={[{"x":-6.6871236683649835,"y":-3.1022232515053263},{"x":-6.6871236683649835,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":2.420101899027328,"y":-3.5664659564613252},{"x":2.8022232515053265,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":2.8022232515053265,"y":-3.5664659564613252},{"x":2.8659101435849923,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":2.465354330708662,"y":-3.5664659564613252},{"x":2.420101899027328,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":2.8022232515053265,"y":-3.4575266327003247},{"x":2.8022232515053265,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":-3.693839740620657,"y":-6.432376100046318},{"x":-3.693839740620657,"y":-6.305002315886985}]} />
      <schematicpath points={[{"x":-4.203334877257989,"y":-6.814497452524317},{"x":-4.075961093098657,"y":-6.814497452524317}]} />
      <schematicpath points={[{"x":-4.075961093098657,"y":-6.814497452524317},{"x":-4.075961093098657,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-4.075961093098657,"y":-6.432376100046318},{"x":-3.8212135247799903,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-3.8212135247799903,"y":-6.432376100046318},{"x":-3.693839740620657,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-3.693839740620657,"y":-6.432376100046318},{"x":-3.439092172301992,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-3.8212135247799903,"y":-6.387123668364985},{"x":-3.8212135247799903,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-3.439092172301992,"y":-6.387123668364985},{"x":-3.439092172301992,"y":-6.432376100046318}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-1.910606762389996},{"x":-1.5284854099119958,"y":-1.910606762389996}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-1.910606762389996},{"x":-1.4011116257526623,"y":-1.910606762389996}]} />
      <schematicpath points={[{"x":9.68040759610931,"y":5.2223251505326544},{"x":9.998842056507643,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":7.769800833719314,"y":6.241315423807318},{"x":8.088235294117647,"y":6.241315423807318}]} />
      <schematicpath points={[{"x":9.953589624826309,"y":5.2223251505326544},{"x":9.998842056507643,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":7.97292728114868,"y":6.241315423807318},{"x":8.088235294117647,"y":6.241315423807318}]} />
      <schematicpath points={[{"x":-6.6871236683649835,"y":-2.5474756831866614},{"x":-6.305002315886984,"y":-2.5474756831866614}]} />
      <schematicpath points={[{"x":-6.305002315886984,"y":-2.5474756831866614},{"x":-6.305002315886984,"y":-1.910606762389996}]} />
      <schematicpath points={[{"x":-6.305002315886984,"y":-1.910606762389996},{"x":-4.840203798054654,"y":-1.910606762389996}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":-1.910606762389996},{"x":-4.458082445576656,"y":-1.910606762389996}]} />
      <schematicpath points={[{"x":-6.305002315886984,"y":-2.865910143584993},{"x":-6.305002315886984,"y":-2.5474756831866614}]} />
      <schematicpath points={[{"x":-6.6871236683649835,"y":-2.5022232515053258},{"x":-6.6871236683649835,"y":-2.5474756831866614}]} />
      <schematicpath points={[{"x":-6.305002315886984,"y":-1.932283464566929},{"x":-6.305002315886984,"y":-1.910606762389996}]} />
      <schematicpath points={[{"x":-6.305002315886984,"y":-2.7569708198239926},{"x":-6.305002315886984,"y":-2.865910143584993}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":-3.120657711903659},{"x":-4.840203798054654,"y":-2.92959703566466}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":-2.92959703566466},{"x":-4.649143121815655,"y":-2.92959703566466}]} />
      <schematicpath points={[{"x":-4.649143121815655,"y":-2.92959703566466},{"x":-4.637742403890691,"y":-2.92959703566466}]} />
      <schematicpath points={[{"x":-4.637742403890691,"y":-2.92959703566466},{"x":-4.458082445576656,"y":-2.92959703566466}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":-3.075405280222326},{"x":-4.840203798054654,"y":-3.120657711903659}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":2.2927281148679945},{"x":-4.075961093098657,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":1.4011116257526623},{"x":-4.458082445576656,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":2.2927281148679945},{"x":-4.458082445576656,"y":2.674849467345993}]} />
      <schematicpath points={[{"x":-4.184900416859659,"y":2.2927281148679945},{"x":-4.075961093098657,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":2.629597035664659},{"x":-4.458082445576656,"y":2.674849467345993}]} />
      <schematicpath points={[{"x":3.120657711903659,"y":3.3117183881426584},{"x":3.248031496062991,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":3.248031496062991,"y":3.3117183881426584},{"x":3.375405280222326,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":3.375405280222326,"y":3.3117183881426584},{"x":3.375405280222326,"y":2.8022232515053265}]} />
      <schematicpath points={[{"x":3.375405280222326,"y":2.8022232515053265},{"x":3.375405280222326,"y":-1.2737378415933307}]} />
      <schematicpath points={[{"x":3.375405280222326,"y":-1.2737378415933307},{"x":3.375405280222326,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":3.375405280222326,"y":-1.4011116257526641},{"x":3.375405280222326,"y":-2.483788791106994}]} />
      <schematicpath points={[{"x":3.375405280222326,"y":-2.483788791106994},{"x":3.375405280222326,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-1.2737378415933307},{"x":-1.5284854099119958,"y":-1.2737378415933307}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-1.2737378415933307},{"x":0.5731820287169995,"y":-1.2737378415933307}]} />
      <schematicpath points={[{"x":0.5731820287169995,"y":-1.2737378415933307},{"x":0.5731820287169995,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":0.5731820287169995,"y":-1.4011116257526641},{"x":0.25474756831866685,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":0.5731820287169995,"y":-1.2737378415933307},{"x":3.375405280222326,"y":-1.2737378415933307}]} />
      <schematicpath points={[{"x":4.585456229735987,"y":-3.0569708198239933},{"x":4.585456229735987,"y":-2.483788791106994}]} />
      <schematicpath points={[{"x":4.585456229735987,"y":-2.483788791106994},{"x":3.375405280222326,"y":-2.483788791106994}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":-1.2100509495136649},{"x":4.649143121815657,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":-1.4011116257526641},{"x":3.375405280222326,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":3.5027790643816576,"y":3.3117183881426584},{"x":3.375405280222326,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":3.5027790643816576,"y":3.3117183881426584},{"x":3.5027790643816576,"y":3.439092172301992}]} />
      <schematicpath points={[{"x":3.5027790643816576,"y":3.3117183881426584},{"x":3.5027790643816576,"y":3.184344603983325}]} />
      <schematicpath points={[{"x":3.439092172301992,"y":2.8022232515053265},{"x":3.375405280222326,"y":2.8022232515053265}]} />
      <schematicpath points={[{"x":3.26644885942566,"y":3.4683110683418246},{"x":3.120657711903659,"y":3.4683110683418246}]} />
      <schematicpath points={[{"x":3.120657711903659,"y":3.4683110683418246},{"x":3.120657711903659,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":3.248031496062991,"y":3.2900416859657255},{"x":3.248031496062991,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":0.36368689207966653,"y":-1.4011116257526641},{"x":0.25474756831866685,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":-1.3189902732746646},{"x":4.649143121815657,"y":-1.2100509495136649}]} />
      <schematicpath points={[{"x":3.330152848540992,"y":2.8022232515053265},{"x":3.439092172301992,"y":2.8022232515053265}]} />
      <schematicpath points={[{"x":-5.859194071329318,"y":-2.165354330708661},{"x":-4.967577582213988,"y":-2.165354330708661}]} />
      <schematicpath points={[{"x":-4.967577582213988,"y":-2.165354330708661},{"x":-4.458082445576656,"y":-2.165354330708661}]} />
      <schematicpath points={[{"x":-5.859194071329318,"y":-2.165354330708661},{"x":-5.859194071329318,"y":-3.184344603983326}]} />
      <schematicpath points={[{"x":-5.859194071329318,"y":-2.1870310328855957},{"x":-5.859194071329318,"y":-2.165354330708661}]} />
      <schematicpath points={[{"x":-5.859194071329318,"y":-3.075405280222326},{"x":-5.859194071329318,"y":-3.184344603983326}]} />
      <schematicpath points={[{"x":-11.14520611394164,"y":-2.2290412227883287},{"x":-8.40666975451598,"y":-2.2290412227883287}]} />
      <schematicpath points={[{"x":-8.40666975451598,"y":-2.2290412227883287},{"x":-8.40666975451598,"y":-0.25474756831866685}]} />
      <schematicpath points={[{"x":-8.40666975451598,"y":-0.25474756831866685},{"x":-6.559749884205651,"y":-0.25474756831866685}]} />
      <schematicpath points={[{"x":-6.559749884205651,"y":-0.25474756831866685},{"x":-4.840203798054654,"y":-0.25474756831866685}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":-0.25474756831866685},{"x":-4.458082445576656,"y":-0.25474756831866685}]} />
      <schematicpath points={[{"x":-6.559749884205651,"y":-0.5731820287169995},{"x":-6.559749884205651,"y":-0.25474756831866685}]} />
      <schematicpath points={[{"x":-6.514497452524317,"y":-0.5731820287169995},{"x":-6.559749884205651,"y":-0.5731820287169995}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-1.1463640574339973},{"x":-1.5284854099119958,"y":-1.1463640574339973}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-1.1463640574339973},{"x":3.884900416859656,"y":-1.1463640574339973}]} />
      <schematicpath points={[{"x":3.884900416859656,"y":-1.1463640574339973},{"x":3.884900416859656,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":3.884900416859656,"y":1.483232978230662},{"x":3.884900416859656,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-1.4011116257526641},{"x":-1.5284854099119958,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-1.4011116257526641},{"x":-0.12737378415933343,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":-0.23631310792033489,"y":-1.4011116257526641},{"x":-0.12737378415933343,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-0.6368689207966653},{"x":-1.5284854099119958,"y":-0.6368689207966653}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-0.6368689207966653},{"x":-1.0189902732746638,"y":-0.6368689207966653}]} />
      <schematicpath points={[{"x":-1.1279295970356653,"y":-0.6368689207966653},{"x":-1.0189902732746638,"y":-0.6368689207966653}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":3.7575266327003245},{"x":-0.8916164891153304,"y":3.184344603983325}]} />
      <schematicpath points={[{"x":-1.0189902732746638,"y":3.7575266327003245},{"x":-1.0189902732746638,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":-1.0189902732746638,"y":4.394395553496988},{"x":-1.1463640574339973,"y":4.394395553496988}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":3.0569708198239915},{"x":-1.6558591940713292,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":3.7575266327003245},{"x":-1.0189902732746638,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":-1.0189902732746638,"y":3.7575266327003245},{"x":-0.8916164891153304,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":3.7575266327003245},{"x":-0.7642427049559988,"y":3.7575266327003245}]} />
      <schematicpath points={[{"x":-0.7642427049559988,"y":3.7575266327003245},{"x":-0.7642427049559988,"y":4.967577582213988}]} />
      <schematicpath points={[{"x":-0.7642427049559988,"y":4.967577582213988},{"x":6.623436776285319,"y":4.967577582213988}]} />
      <schematicpath points={[{"x":6.623436776285319,"y":4.967577582213988},{"x":6.623436776285319,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":-0.8916164891153304,"y":3.2295970356646606},{"x":-0.8916164891153304,"y":3.184344603983325}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":3.102223251505327},{"x":-1.6558591940713292,"y":3.0569708198239915}]} />
      <schematicpath points={[{"x":-7.005558128763316,"y":-2.7385363594256606},{"x":-7.387679481241316,"y":-2.7385363594256606}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":-2.7385363594256606},{"x":-7.387679481241316,"y":-3.184344603983326}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-1.4011116257526641},{"x":-4.7128300138953225,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":-4.7128300138953225,"y":-1.4011116257526641},{"x":-7.005558128763316,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":-7.005558128763316,"y":-1.4011116257526641},{"x":-7.6424270495599815,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":-7.6424270495599815,"y":-1.4011116257526641},{"x":-7.6424270495599815,"y":-6.1776285317276525}]} />
      <schematicpath points={[{"x":-7.6424270495599815,"y":-6.1776285317276525},{"x":-11.017832329782307,"y":-6.1776285317276525}]} />
      <schematicpath points={[{"x":-11.017832329782307,"y":-6.1776285317276525},{"x":-11.14520611394164,"y":-6.1776285317276525}]} />
      <schematicpath points={[{"x":-7.005558128763316,"y":-2.8022232515053265},{"x":-7.005558128763316,"y":-2.7385363594256606}]} />
      <schematicpath points={[{"x":-7.005558128763316,"y":-2.7385363594256606},{"x":-7.005558128763316,"y":-1.4011116257526641}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":-1.2737378415933307},{"x":9.043538675312645,"y":-1.2737378415933307}]} />
      <schematicpath points={[{"x":9.043538675312645,"y":-1.2737378415933307},{"x":8.916164891153313,"y":-1.2737378415933307}]} />
      <schematicpath points={[{"x":-7.387679481241316,"y":-3.075405280222326},{"x":-7.387679481241316,"y":-3.184344603983326}]} />
      <schematicpath points={[{"x":-7.005558128763316,"y":-2.7569708198239926},{"x":-7.005558128763316,"y":-2.8022232515053265}]} />
      <schematicpath points={[{"x":-1.910606762389996,"y":2.2927281148679945},{"x":-1.6558591940713292,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":2.2927281148679945},{"x":-1.6558591940713292,"y":1.4011116257526623}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":2.5474756831866596},{"x":-1.6558591940713292,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-1.8016674386289946,"y":2.2927281148679945},{"x":-1.910606762389996,"y":2.2927281148679945}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":2.5022232515053258},{"x":-1.6558591940713292,"y":2.5474756831866596}]} />
      <schematicpath points={[{"x":-9.29828624363131,"y":0.3821213524779985},{"x":-9.29828624363131,"y":0.2547475683186651}]} />
      <schematicpath points={[{"x":-11.14520611394164,"y":0.2547475683186651},{"x":-11.017832329782307,"y":0.2547475683186651}]} />
      <schematicpath points={[{"x":-11.017832329782307,"y":0.2547475683186651},{"x":-10.126215840666976,"y":0.2547475683186651}]} />
      <schematicpath points={[{"x":-10.126215840666976,"y":0.2547475683186651},{"x":-9.48934691987031,"y":0.2547475683186651}]} />
      <schematicpath points={[{"x":-9.48934691987031,"y":0.2547475683186651},{"x":-9.29828624363131,"y":0.2547475683186651}]} />
      <schematicpath points={[{"x":-9.29828624363131,"y":0.2547475683186651},{"x":-8.852477999073646,"y":0.2547475683186651}]} />
      <schematicpath points={[{"x":-8.852477999073646,"y":0.2547475683186651},{"x":-8.852477999073646,"y":0.3821213524779985}]} />
      <schematicpath points={[{"x":-8.852477999073646,"y":0.3821213524779985},{"x":-5.094951366373321,"y":0.3821213524779985}]} />
      <schematicpath points={[{"x":-5.094951366373321,"y":0.3821213524779985},{"x":-4.458082445576656,"y":0.3821213524779985}]} />
      <schematicpath points={[{"x":-10.126215840666976,"y":0.12737378415933343},{"x":-10.126215840666976,"y":0.2547475683186651}]} />
      <schematicpath points={[{"x":-9.48934691987031,"y":0.2547475683186651},{"x":-9.48934691987031,"y":0.12737378415933343}]} />
      <schematicpath points={[{"x":9.68040759610931,"y":-1.7832329782306626},{"x":9.043538675312645,"y":-1.7832329782306626}]} />
      <schematicpath points={[{"x":9.043538675312645,"y":-1.7832329782306626},{"x":8.916164891153313,"y":-1.7832329782306626}]} />
      <schematicpath points={[{"x":-9.29828624363131,"y":0.33686892079666464},{"x":-9.29828624363131,"y":0.3821213524779985}]} />
      <schematicpath points={[{"x":-10.126215840666976,"y":0.2363131079203331},{"x":-10.126215840666976,"y":0.12737378415933343}]} />
      <schematicpath points={[{"x":-9.48934691987031,"y":0.17262621584066729},{"x":-9.48934691987031,"y":0.12737378415933343}]} />
      <schematicpath points={[{"x":11.463640574339971,"y":5.85919407132932},{"x":11.463640574339971,"y":6.050254747568317}]} />
      <schematicpath points={[{"x":11.081519221861972,"y":6.050254747568317},{"x":11.081519221861972,"y":5.9865678554886514}]} />
      <schematicpath points={[{"x":6.75081056044465,"y":5.2223251505326544},{"x":6.75081056044465,"y":4.840203798054654}]} />
      <schematicpath points={[{"x":6.75081056044465,"y":4.840203798054654},{"x":12.100509495136636,"y":4.840203798054654}]} />
      <schematicpath points={[{"x":12.100509495136636,"y":4.840203798054654},{"x":12.100509495136636,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":11.081519221861972,"y":7.196618805002316},{"x":11.591014358499306,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":11.591014358499306,"y":7.196618805002316},{"x":12.100509495136636,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":12.100509495136636,"y":7.196618805002316},{"x":12.418943955534969,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":12.418943955534969,"y":7.196618805002316},{"x":12.737378415933302,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":12.418943955534969,"y":6.9418712366836495},{"x":12.418943955534969,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":10.95414543770264,"y":6.050254747568317},{"x":11.081519221861972,"y":6.050254747568317}]} />
      <schematicpath points={[{"x":11.081519221861972,"y":6.050254747568317},{"x":11.463640574339971,"y":6.050254747568317}]} />
      <schematicpath points={[{"x":11.463640574339971,"y":6.050254747568317},{"x":11.591014358499306,"y":6.050254747568317}]} />
      <schematicpath points={[{"x":11.591014358499306,"y":6.050254747568317},{"x":11.591014358499306,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":8.151922186197313,"y":-7.960861509958314},{"x":8.916164891153313,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":10.572024085224642,"y":-7.960861509958314},{"x":8.916164891153313,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":11.463640574339971,"y":5.904446503010654},{"x":11.463640574339971,"y":5.85919407132932}]} />
      <schematicpath points={[{"x":11.081519221861972,"y":6.213608151922184},{"x":11.081519221861972,"y":5.9865678554886514}]} />
      <schematicpath points={[{"x":11.249397869383975,"y":7.4520379805465495},{"x":11.081519221861972,"y":7.4520379805465495}]} />
      <schematicpath points={[{"x":11.081519221861972,"y":7.4520379805465495},{"x":11.081519221861972,"y":7.196618805002316}]} />
      <schematicpath points={[{"x":12.418943955534969,"y":7.044441871236685},{"x":12.418943955534969,"y":6.9418712366836495}]} />
      <schematicpath points={[{"x":11.122024085224643,"y":6.315673923112552},{"x":10.95414543770264,"y":6.315673923112552}]} />
      <schematicpath points={[{"x":10.95414543770264,"y":6.315673923112552},{"x":10.95414543770264,"y":6.050254747568317}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-7.822982862436314},{"x":8.916164891153313,"y":-7.960861509958314}]} />
      <schematicpath points={[{"x":11.081519221861972,"y":5.349698934691986},{"x":11.081519221861972,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":10.572024085224642,"y":5.540759610930987},{"x":10.572024085224642,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":10.508337193144973,"y":5.2223251505326544},{"x":10.572024085224642,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":10.572024085224642,"y":5.2223251505326544},{"x":11.081519221861972,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":11.081519221861972,"y":5.2223251505326544},{"x":11.463640574339971,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":11.463640574339971,"y":5.2223251505326544},{"x":11.463640574339971,"y":5.349698934691986}]} />
      <schematicpath points={[{"x":11.081519221861972,"y":5.173608151922185},{"x":11.081519221861972,"y":5.349698934691986}]} />
      <schematicpath points={[{"x":10.672024085224644,"y":5.585673923112552},{"x":10.672024085224644,"y":5.540759610930987}]} />
      <schematicpath points={[{"x":10.672024085224644,"y":5.540759610930987},{"x":10.572024085224642,"y":5.540759610930987}]} />
      <schematicpath points={[{"x":10.55358962482631,"y":5.2223251505326544},{"x":10.508337193144973,"y":5.2223251505326544}]} />
      <schematicpath points={[{"x":11.463640574339971,"y":5.304446503010652},{"x":11.463640574339971,"y":5.349698934691986}]} />
      <schematicpath points={[{"x":2.0379805465493295,"y":3.3117183881426584},{"x":2.0379805465493295,"y":1.7832329782306626}]} />
      <schematicpath points={[{"x":1.910606762389996,"y":2.9932839277443257},{"x":1.910606762389996,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":1.910606762389996,"y":3.3117183881426584},{"x":2.0379805465493295,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":2.0379805465493295,"y":3.3117183881426584},{"x":2.356415006947662,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":2.0379805465493295,"y":1.8284854099119965},{"x":2.0379805465493295,"y":1.7832329782306626}]} />
      <schematicpath points={[{"x":1.9622278832792972,"y":2.9932839277443257},{"x":1.910606762389996,"y":2.9932839277443257}]} />
      <schematicpath points={[{"x":1.9622278832792972,"y":3.3117183881426584},{"x":1.910606762389996,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":2.2106238594256613,"y":3.473560168341825},{"x":2.356415006947662,"y":3.473560168341825}]} />
      <schematicpath points={[{"x":2.356415006947662,"y":3.473560168341825},{"x":2.356415006947662,"y":3.3117183881426584}]} />
      <schematicpath points={[{"x":0.25474756831866685,"y":2.420101899027326},{"x":0.25474756831866685,"y":2.483788791106994}]} />
      <schematicpath points={[{"x":0.25474756831866685,"y":2.483788791106994},{"x":0.25474756831866685,"y":2.8022232515053265}]} />
      <schematicpath points={[{"x":0.25474756831866685,"y":2.465354330708662},{"x":0.25474756831866685,"y":2.420101899027326}]} />
      <schematicpath points={[{"x":0.6368689207966653,"y":2.420101899027326},{"x":0.6368689207966653,"y":3.884900416859656}]} />
      <schematicpath points={[{"x":0.6368689207966653,"y":3.884900416859656},{"x":0.19106067623899925,"y":3.884900416859656}]} />
      <schematicpath points={[{"x":0.6368689207966653,"y":2.465354330708662},{"x":0.6368689207966653,"y":2.420101899027326}]} />
      <schematicpath points={[{"x":0.25474756831866685,"y":1.8469198703103284},{"x":0.25474756831866685,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-0.3821213524780003},{"x":-1.5284854099119958,"y":-0.3821213524780003}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-0.3821213524780003},{"x":0.25474756831866685,"y":-0.3821213524780003}]} />
      <schematicpath points={[{"x":0.25474756831866685,"y":-0.3821213524780003},{"x":0.25474756831866685,"y":1.8469198703103284}]} />
      <schematicpath points={[{"x":0.25474756831866685,"y":1.8469198703103284},{"x":0.6368689207966653,"y":1.8469198703103284}]} />
      <schematicpath points={[{"x":0.6368689207966653,"y":1.8469198703103284},{"x":0.6368689207966653,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":0.25474756831866685,"y":1.8653543307086604},{"x":0.25474756831866685,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":0.6368689207966653,"y":1.8653543307086604},{"x":0.6368689207966653,"y":1.9106067623899943}]} />
      <schematicpath points={[{"x":0.5094951366373319,"y":-2.165354330708661},{"x":0.19106067623899925,"y":-2.165354330708661}]} />
      <schematicpath points={[{"x":0.23631310792033489,"y":-2.165354330708661},{"x":0.19106067623899925,"y":-2.165354330708661}]} />
      <schematicpath points={[{"x":-6.496062992125984,"y":1.210050949513663},{"x":-6.496062992125984,"y":1.3374247336729965}]} />
      <schematicpath points={[{"x":-6.496062992125984,"y":1.3374247336729965},{"x":-5.349698934691986,"y":1.3374247336729965}]} />
      <schematicpath points={[{"x":-5.349698934691986,"y":1.3374247336729965},{"x":-5.349698934691986,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":-5.349698934691986,"y":1.0189902732746638},{"x":-5.28601204261232,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":-5.28601204261232,"y":1.0189902732746638},{"x":-4.458082445576656,"y":1.0189902732746638}]} />
      <schematicpath points={[{"x":-6.496062992125984,"y":1.5921723019916616},{"x":-6.496062992125984,"y":1.3374247336729965}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-2.420101899027328},{"x":9.10722556739231,"y":-2.420101899027328}]} />
      <schematicpath points={[{"x":9.10722556739231,"y":-2.420101899027328},{"x":9.425660027790643,"y":-2.420101899027328}]} />
      <schematicpath points={[{"x":-6.496062992125984,"y":1.3126215840666973},{"x":-6.496062992125984,"y":1.210050949513663}]} />
      <schematicpath points={[{"x":-6.496062992125984,"y":1.5704955998147287},{"x":-6.496062992125984,"y":1.5921723019916616}]} />
      <schematicpath points={[{"x":-11.14520611394164,"y":-0.955303381194998},{"x":-8.597730430754979,"y":-0.955303381194998}]} />
      <schematicpath points={[{"x":-8.597730430754979,"y":-0.955303381194998},{"x":-8.597730430754979,"y":0}]} />
      <schematicpath points={[{"x":-8.597730430754979,"y":0},{"x":-4.840203798054654,"y":0}]} />
      <schematicpath points={[{"x":-4.840203798054654,"y":0},{"x":-4.458082445576656,"y":0}]} />
      <schematicpath points={[{"x":-5.031264474293653,"y":-0.8916164891153322},{"x":-4.7128300138953225,"y":-0.8916164891153322}]} />
      <schematicpath points={[{"x":-4.7128300138953225,"y":-0.8916164891153322},{"x":-4.458082445576656,"y":-0.8916164891153322}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-3.9485873089393237},{"x":9.10722556739231,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":9.10722556739231,"y":-3.9485873089393237},{"x":9.425660027790643,"y":-3.9485873089393237}]} />
      <schematicpath points={[{"x":-4.98601204261232,"y":-0.8916164891153322},{"x":-5.031264474293653,"y":-0.8916164891153322}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-3.184344603983326},{"x":-4.458082445576656,"y":-3.821213524779991}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-3.821213524779991},{"x":-4.458082445576656,"y":-5.2223251505326544}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-5.2223251505326544},{"x":-4.649143121815655,"y":-5.2223251505326544}]} />
      <schematicpath points={[{"x":-4.649143121815655,"y":-5.2223251505326544},{"x":-4.967577582213988,"y":-5.2223251505326544}]} />
      <schematicpath points={[{"x":-4.649143121815655,"y":-5.2223251505326544},{"x":-4.649143121815655,"y":-5.158638258452988}]} />
      <schematicpath points={[{"x":-4.922325150532654,"y":-5.2223251505326544},{"x":-4.967577582213988,"y":-5.2223251505326544}]} />
      <schematicpath points={[{"x":-4.649143121815655,"y":-5.1803149606299215},{"x":-4.649143121815655,"y":-5.158638258452988}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":-2.420101899027328},{"x":-4.776516905974988,"y":-2.420101899027328}]} />
      <schematicpath points={[{"x":-4.776516905974988,"y":-2.420101899027328},{"x":-4.967577582213988,"y":-2.420101899027328}]} />
      <schematicpath points={[{"x":0.25474756831866685,"y":-5.922880963408986},{"x":0.06368689207966582,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":0.06368689207966582,"y":-5.922880963408986},{"x":-0.3821213524779985,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":-0.6368689207966653,"y":-6.305002315886985},{"x":-0.6368689207966653,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":-0.6368689207966653,"y":-5.922880963408986},{"x":-0.3821213524779985,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-5.877628531727653},{"x":-0.3821213524779985,"y":-5.922880963408986}]} />
      <schematicpath points={[{"x":-7.069245020842983,"y":1.5284854099119958},{"x":-7.069245020842983,"y":1.210050949513663}]} />
      <schematicpath points={[{"x":-4.458082445576656,"y":0.6368689207966653},{"x":-4.776516905974988,"y":0.6368689207966653}]} />
      <schematicpath points={[{"x":-4.776516905974988,"y":0.6368689207966653},{"x":-4.903890690134322,"y":0.6368689207966653}]} />
      <schematicpath points={[{"x":-4.903890690134322,"y":0.6368689207966653},{"x":-4.903890690134322,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-4.903890690134322,"y":1.5284854099119958},{"x":-7.069245020842983,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-7.069245020842983,"y":1.5284854099119958},{"x":-10.189902732746642,"y":1.5284854099119958}]} />
      <schematicpath points={[{"x":-10.189902732746642,"y":1.5284854099119958},{"x":-10.189902732746642,"y":1.1463640574339973}]} />
      <schematicpath points={[{"x":-10.189902732746642,"y":1.1463640574339973},{"x":-11.081519221861972,"y":1.1463640574339973}]} />
      <schematicpath points={[{"x":-7.069245020842983,"y":1.3189902732746646},{"x":-7.069245020842983,"y":1.210050949513663}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":6.814497452524318},{"x":9.425660027790643,"y":6.687123668364983}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":6.687123668364983},{"x":9.935155164427977,"y":6.687123668364983}]} />
      <schematicpath points={[{"x":9.935155164427977,"y":6.687123668364983},{"x":10.699397869383974,"y":6.687123668364983}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":6.699189439555347},{"x":9.425660027790643,"y":6.814497452524318}]} />
      <schematicpath points={[{"x":9.935155164427977,"y":6.641871236683649},{"x":9.935155164427977,"y":6.687123668364983}]} />
      <schematicpath points={[{"x":10.599397869383973,"y":6.732037980546547},{"x":10.599397869383973,"y":6.687123668364983}]} />
      <schematicpath points={[{"x":10.599397869383973,"y":6.687123668364983},{"x":10.699397869383974,"y":6.687123668364983}]} />
      <schematicpath points={[{"x":8.470356646595645,"y":6.241315423807318},{"x":8.788791106993978,"y":6.241315423807318}]} />
      <schematicpath points={[{"x":8.788791106993978,"y":6.241315423807318},{"x":8.788791106993978,"y":6.432376100046316}]} />
      <schematicpath points={[{"x":8.572927281148681,"y":6.241315423807318},{"x":8.470356646595645,"y":6.241315423807318}]} />
      <schematicpath points={[{"x":-8.979851783232977,"y":-4.330708661417323},{"x":-8.979851783232977,"y":-4.585456229735989}]} />
      <schematicpath points={[{"x":-11.081519221861972,"y":-4.330708661417323},{"x":-9.807781380268644,"y":-4.330708661417323}]} />
      <schematicpath points={[{"x":-9.807781380268644,"y":-4.330708661417323},{"x":-8.979851783232977,"y":-4.330708661417323}]} />
      <schematicpath points={[{"x":-8.979851783232977,"y":-4.330708661417323},{"x":-8.534043538675313,"y":-4.330708661417323}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":-4.330708661417323},{"x":-8.02454840203798,"y":-4.330708661417323}]} />
      <schematicpath points={[{"x":-8.02454840203798,"y":-4.330708661417323},{"x":-8.02454840203798,"y":-1.1463640574339973}]} />
      <schematicpath points={[{"x":-8.02454840203798,"y":-1.1463640574339973},{"x":-5.158638258452987,"y":-1.1463640574339973}]} />
      <schematicpath points={[{"x":-5.158638258452987,"y":-1.1463640574339973},{"x":-4.458082445576656,"y":-1.1463640574339973}]} />
      <schematicpath points={[{"x":-8.979851783232977,"y":-4.476516905974989},{"x":-8.979851783232977,"y":-4.585456229735989}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":-4.285456229735989},{"x":-8.534043538675313,"y":-4.330708661417323}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-2.2927281148679945},{"x":9.030059981472904,"y":-2.2927281148679945}]} />
      <schematicpath points={[{"x":9.030059981472904,"y":-2.2927281148679945},{"x":9.425660027790643,"y":-2.2927281148679945}]} />
      <schematicpath points={[{"x":8.470356646595645,"y":-3.0569708198239933},{"x":9.425660027790643,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":-3.0569708198239933},{"x":9.68040759610931,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":-3.0569708198239933},{"x":9.425660027790643,"y":-3.693839740620658}]} />
      <schematicpath points={[{"x":9.425660027790643,"y":-3.693839740620658},{"x":9.043538675312645,"y":-3.693839740620658}]} />
      <schematicpath points={[{"x":9.043538675312645,"y":-3.693839740620658},{"x":8.916164891153313,"y":-3.693839740620658}]} />
      <schematicpath points={[{"x":9.635155164427976,"y":-3.0569708198239933},{"x":9.68040759610931,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":8.916164891153313,"y":-1.5284854099119976},{"x":9.043538675312645,"y":-1.5284854099119976}]} />
      <schematicpath points={[{"x":9.043538675312645,"y":-1.5284854099119976},{"x":10.444650301065307,"y":-1.5284854099119976}]} />
      <schematicpath points={[{"x":10.444650301065307,"y":-1.5284854099119976},{"x":10.444650301065307,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":10.444650301065307,"y":-3.0569708198239933},{"x":10.18990273274664,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":10.235155164427978,"y":-3.0569708198239933},{"x":10.18990273274664,"y":-3.0569708198239933}]} />
      <schematicpath points={[{"x":-1.6558591940713292,"y":-0.7642427049559988},{"x":-1.5284854099119958,"y":-0.7642427049559988}]} />
      <schematicpath points={[{"x":-1.5284854099119958,"y":-0.7642427049559988},{"x":-0.3821213524779985,"y":-0.7642427049559988}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-0.7642427049559988},{"x":-0.3821213524779985,"y":-2.165354330708661}]} />
      <schematicpath points={[{"x":-0.3821213524779985,"y":-2.165354330708661},{"x":-0.3184344603983327,"y":-2.165354330708661}]} />
      <schematicpath points={[{"x":-0.36368689207966653,"y":-2.165354330708661},{"x":-0.3184344603983327,"y":-2.165354330708661}]} />
      <schematicpath points={[{"x":2.420101899027328,"y":-4.7128300138953225},{"x":3.8212135247799903,"y":-4.7128300138953225}]} />
      <schematicpath points={[{"x":3.8212135247799903,"y":-4.7128300138953225},{"x":3.8212135247799903,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":3.8212135247799903,"y":-3.5664659564613252},{"x":4.012274201018991,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":4.012274201018991,"y":-3.5664659564613252},{"x":4.075961093098657,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":2.465354330708662,"y":-4.7128300138953225},{"x":2.420101899027328,"y":-4.7128300138953225}]} />
      <schematicpath points={[{"x":4.012274201018991,"y":-3.4575266327003247},{"x":4.012274201018991,"y":-3.5664659564613252}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":-0.700555812876333},{"x":4.649143121815657,"y":-0.8279295970356646}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":-0.7458082445576668},{"x":4.649143121815657,"y":-0.700555812876333}]} />
      <schematicpath points={[{"x":4.649143121815657,"y":-0.7189902732746631},{"x":4.649143121815657,"y":-0.8279295970356646}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":-4.903890690134322},{"x":-8.534043538675313,"y":-4.840203798054655}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":-4.794951366373321},{"x":-8.534043538675313,"y":-4.903890690134322}]} />
      <schematicpath points={[{"x":-8.534043538675313,"y":-4.885456229735989},{"x":-8.534043538675313,"y":-4.840203798054655}]} />
      <schematicpath points={[{"x":3.884900416859656,"y":2.8022232515053265},{"x":3.884900416859656,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":3.8212135247799903,"y":2.8022232515053265},{"x":3.884900416859656,"y":2.8022232515053265}]} />
      <schematicpath points={[{"x":3.884900416859656,"y":2.0832329782306633},{"x":3.884900416859656,"y":2.0379805465493277}]} />
      <schematicpath points={[{"x":3.9301528485409936,"y":2.8022232515053265},{"x":3.8212135247799903,"y":2.8022232515053265}]} />
      <schematicpath points={[{"x":-1.5921723019916634,"y":-2.8022232515053265},{"x":-1.6558591940713292,"y":-2.8022232515053265}]} />
      <schematicpath points={[{"x":-1.6374247336729972,"y":-2.8022232515053265},{"x":-1.5921723019916634,"y":-2.8022232515053265}]} />
      </symbol>} />
        </board>
      )
      export default Lm251772EvmPd"
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

import { expect, test } from "bun:test"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"

test(
  "TI DRV8307EVM Circuit JSON to tscircuit round trip",
  async () => {
    const result = await createTiEvmRoundtrip({
      componentName: "Drv8307Evm",
      fixtureName: "drv8307evm",
    })

    expect(result.generatedTscircuit).toMatchInlineSnapshot(`
      "export const Drv8307Evm = () => (
        <board width="87.7316mm" height="75.00010400000001mm" outline={[{ x: 17.5768, y: 38.9636 }, { x: 17.5768, y: 113.963704 }, { x: 105.30839999999999, y: 113.963704 }, { x: 105.30839999999999, y: 38.9636 }, { x: 17.5768, y: 38.9636 }]} thickness="1.6mm" layers={2} material="fr4">
          <chip footprint={<footprint>
              <platedhole  portHints={["0"]} pcbX="21.6408mm" pcbY="43.0276mm" outerDiameter="4.318mm" holeDiameter="3.81mm" shape="circle" />
      <platedhole  portHints={["0"]} pcbX="21.6408mm" pcbY="109.8296mm" outerDiameter="4.318mm" holeDiameter="3.81mm" shape="circle" />
      <platedhole  portHints={["0"]} pcbX="101.1428mm" pcbY="109.8296mm" outerDiameter="4.318mm" holeDiameter="3.81mm" shape="circle" />
      <platedhole  portHints={["0"]} pcbX="101.1428mm" pcbY="43.0276mm" outerDiameter="4.318mm" holeDiameter="3.81mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="101.11080108mm" pcbY="94.04960108mm" outerDiameter="1.524mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="101.11080108mm" pcbY="104.20960108mm" outerDiameter="1.524mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="102.41279999999999mm" pcbY="67.1576mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="81.47079972mm" pcbY="102.2096mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="85.78879972mm" pcbY="102.2096mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="90.2208mm" pcbY="102.2096mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="77.15279972mm" pcbY="102.2096mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="68.51679972000001mm" pcbY="102.2096mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="72.83479972mm" pcbY="102.2096mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="56.832228220000005mm" pcbY="105.2576mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="56.832228220000005mm" pcbY="107.79759999999999mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="56.832228220000005mm" pcbY="110.3376mm" holeShape="circle" padShape="rect" holeDiameter="0.9652mm" rectPadWidth="1.524mm" rectPadHeight="1.524mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["3"]} pcbX="39.6748mm" pcbY="105.2576mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="39.6748mm" pcbY="107.79759999999999mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="39.6748mm" pcbY="110.3376mm" holeShape="circle" padShape="rect" holeDiameter="0.9652mm" rectPadWidth="1.524mm" rectPadHeight="1.524mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="77.82830256mm" pcbY="45.09301624mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="50.396302559999995mm" pcbY="45.09301624mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="68.68430256mm" pcbY="45.09301624mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="59.54030256mm" pcbY="45.09301624mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="33.8328mm" pcbY="96.6216mm" holeShape="circle" padShape="rect" holeDiameter="0.9652mm" rectPadWidth="1.524mm" rectPadHeight="1.524mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="33.8328mm" pcbY="99.16159999999999mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="20.8788mm" pcbY="99.16159999999999mm" holeShape="circle" padShape="rect" holeDiameter="0.9652mm" rectPadWidth="1.524mm" rectPadHeight="1.524mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="20.8788mm" pcbY="96.6216mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="27.29540134mm" pcbY="99.07039875999999mm" holeShape="circle" padShape="rect" holeDiameter="1.0668mm" rectPadWidth="1.5748mm" rectPadHeight="1.5748mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="49.3643539mm" pcbY="105.28856514mm" outerDiameter="1.5748mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="49.3643539mm" pcbY="107.82856514000001mm" holeShape="circle" padShape="rect" holeDiameter="0.9652mm" rectPadWidth="1.5748mm" rectPadHeight="1.5748mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["3"]} pcbX="23.6728mm" pcbY="55.38918818mm" outerDiameter="1.016mm" holeDiameter="0.5499989mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="23.6728mm" pcbY="52.84918818mm" outerDiameter="1.016mm" holeDiameter="0.5499989mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="23.6728mm" pcbY="50.30918818mm" holeShape="circle" padShape="rect" holeDiameter="0.5499989mm" rectPadWidth="1.016mm" rectPadHeight="1.016mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="24.14880108mm" pcbY="71.95160108mm" outerDiameter="1.524mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="24.14880108mm" pcbY="82.11160108mm" outerDiameter="1.524mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="38.6588mm" pcbY="96.6216mm" holeShape="circle" padShape="rect" holeDiameter="0.9652mm" rectPadWidth="1.524mm" rectPadHeight="1.524mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="38.6588mm" pcbY="99.16159999999999mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="31.8008mm" pcbY="105.2576mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="31.8008mm" pcbY="107.79759999999999mm" outerDiameter="1.524mm" holeDiameter="0.9652mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="31.8008mm" pcbY="110.3376mm" holeShape="circle" padShape="rect" holeDiameter="0.9652mm" rectPadWidth="1.524mm" rectPadHeight="1.524mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="100.88080154mm" pcbY="55.98743692mm" holeShape="circle" padShape="rect" holeDiameter="1.29999994mm" rectPadWidth="1.79999894mm" rectPadHeight="1.79999894mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="100.88080154mm" pcbY="61.06743692mm" outerDiameter="1.79999894mm" holeDiameter="1.29999994mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="100.9002808mm" pcbY="77.01559908mm" holeShape="circle" padShape="rect" holeDiameter="1.29999994mm" rectPadWidth="1.79999894mm" rectPadHeight="1.79999894mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="100.9002808mm" pcbY="82.09559908mm" outerDiameter="1.79999894mm" holeDiameter="1.29999994mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="100.9002808mm" pcbY="87.17559908mm" outerDiameter="1.79999894mm" holeDiameter="1.29999994mm" shape="circle" />
      <platedhole  portHints={["8"]} pcbX="91.54879835999999mm" pcbY="110.08359999999999mm" outerDiameter="1.69999914mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["7"]} pcbX="88.04880028mm" pcbY="110.08359999999999mm" outerDiameter="1.69999914mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["6"]} pcbX="84.54879966mm" pcbY="110.08359999999999mm" outerDiameter="1.69999914mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["5"]} pcbX="81.04879903999999mm" pcbY="110.08359999999999mm" outerDiameter="1.69999914mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["4"]} pcbX="77.54879842mm" pcbY="110.08359999999999mm" outerDiameter="1.69999914mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["3"]} pcbX="74.04880034mm" pcbY="110.08359999999999mm" outerDiameter="1.69999914mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["2"]} pcbX="70.54879972mm" pcbY="110.08359999999999mm" outerDiameter="1.69999914mm" holeDiameter="1.20000014mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="67.0487991mm" pcbY="110.08359999999999mm" holeShape="circle" padShape="rect" holeDiameter="1.20000014mm" rectPadWidth="1.69999914mm" rectPadHeight="1.69999914mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="0deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["1"]} pcbX="102.41279999999999mm" pcbY="48.48040596mm" outerDiameter="1.778mm" holeDiameter="1.3208mm" shape="circle" />
      <platedhole  portHints={["1"]} pcbX="91.26080046mm" pcbY="62.032598820000004mm" holeShape="circle" padShape="rect" holeDiameter="0.8000009399999999mm" rectPadWidth="1.39999974mm" rectPadHeight="1.39999974mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="180deg" shape="circular_hole_with_rect_pad" />
      <platedhole  portHints={["2"]} pcbX="86.2608003mm" pcbY="62.032598820000004mm" outerDiameter="1.39999974mm" holeDiameter="0.8000009399999999mm" shape="circle" />
      <via pcbX="75.23479999999999mm" pcbY="58.267599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.02879999999999mm" pcbY="58.0136mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.5048mm" pcbY="59.2836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.5048mm" pcbY="56.7436mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="41.4648015mm" pcbY="47.8536mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.928799999999995mm" pcbY="69.9516mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="35.864799999999995mm" pcbY="69.9516mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="52.6288mm" pcbY="53.4416mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="55.1688mm" pcbY="53.4416mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="44.2468mm" pcbY="82.90559999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="43.230799999999995mm" pcbY="85.69959999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="43.230799999999995mm" pcbY="93.82759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.46244134mm" pcbY="82.61160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="43.7388mm" pcbY="63.855599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="50.596799999999995mm" pcbY="60.0456mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="50.596799999999995mm" pcbY="78.33359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="31.546799999999998mm" pcbY="85.69959999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="27.482799999999997mm" pcbY="86.44460232mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="27.482799999999997mm" pcbY="80.8736mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="28.4988mm" pcbY="82.14359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="29.29030972mm" pcbY="91.76609028mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="34.8488mm" pcbY="83.6676mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="29.2608mm" pcbY="83.4136mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="43.230799999999995mm" pcbY="75.7936mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="46.532799999999995mm" pcbY="82.90559999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="45.2628mm" pcbY="95.35159999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="37.1348mm" pcbY="95.6056mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="52.3748mm" pcbY="98.6536mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="50.8796544mm" pcbY="95.6056mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="49.580799999999996mm" pcbY="94.58959999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="42.2148mm" pcbY="87.7316mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="59.48844084mm" pcbY="47.8536mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.43044134mm" pcbY="47.8536mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="34.44899892mm" pcbY="72.19760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="29.2608mm" pcbY="78.1932904mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="30.033800739999997mm" pcbY="71.92760062mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="25.703352199999998mm" pcbY="80.77306172mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="24.6888mm" pcbY="87.53659911999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="28.4988mm" pcbY="89.7636mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="31.8008mm" pcbY="81.45260062mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="30.0228mm" pcbY="75.7936mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="37.56698608mm" pcbY="83.4136mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="31.541095159999998mm" pcbY="80.15260067999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="31.563122039999996mm" pcbY="78.8409904mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="25.09922082mm" pcbY="66.5336617mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="59.7408mm" pcbY="104.82364861999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="34.3408mm" pcbY="106.0196mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="43.992799999999995mm" pcbY="110.3376mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="32.66769438mm" pcbY="75.97760013999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="33.5788mm" pcbY="76.8096mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="36.1188mm" pcbY="46.40125594mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="33.324799999999996mm" pcbY="61.0616mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="66.09244084mm" pcbY="47.8536mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.9808mm" pcbY="49.8856mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.9808mm" pcbY="52.425599999999996mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="55.9308mm" pcbY="101.7016mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="37.6428mm" pcbY="66.64959999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="34.8488mm" pcbY="62.8396mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="46.15255184mm" pcbY="55.3792517mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="24.6888mm" pcbY="90.0176mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="58.97818024mm" pcbY="96.18794072mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.18588522mm" pcbY="96.02249274mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="58.929877059999995mm" pcbY="98.72973142mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.75925212mm" pcbY="98.67302846mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="57.91158344mm" pcbY="99.608386mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="67.2642038mm" pcbY="99.65292236mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="56.832228220000005mm" pcbY="100.93291217999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="77.14085664mm" pcbY="104.28023086mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="31.41333316mm" pcbY="91.68252428mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="59.56549936mm" pcbY="79.764636mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="58.04678002mm" pcbY="79.2257369mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="37.38894731999999mm" pcbY="87.6205512mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="37.4055767mm" pcbY="89.0493647mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="37.39829452mm" pcbY="90.36748245999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="99.8728mm" pcbY="68.4276mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.09479999999999mm" pcbY="69.1896mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.3168mm" pcbY="69.1896mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.6028mm" pcbY="67.41159999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="99.1108mm" pcbY="65.88759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.8248mm" pcbY="67.41159999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.04679999999999mm" pcbY="67.41159999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.2688mm" pcbY="67.41159999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.4908mm" pcbY="67.41159999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.33279999999999mm" pcbY="65.88759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.5548mm" pcbY="65.88759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.7768mm" pcbY="65.88759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.9988mm" pcbY="65.88759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="90.2208mm" pcbY="65.88759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.8408mm" pcbY="64.36359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.5068mm" pcbY="64.36359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="64.1096mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.3788mm" pcbY="62.0776mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="87.1728mm" pcbY="58.267599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.44279999999999mm" pcbY="62.5856mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.1888mm" pcbY="64.36359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.1888mm" pcbY="60.8076mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.1888mm" pcbY="59.2836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.6648mm" pcbY="60.0456mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.91879999999999mm" pcbY="56.7436mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.5848mm" pcbY="91.03359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.83879999999999mm" pcbY="89.50959999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="99.3648mm" pcbY="48.8696mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="101.9048mm" pcbY="53.9496mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="100.6348mm" pcbY="52.6796mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.3488mm" pcbY="57.5056mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="100.3808mm" pcbY="58.267599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="102.41279999999999mm" pcbY="58.267599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="102.6668mm" pcbY="69.9516mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="46.3296mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.80879999999999mm" pcbY="50.1396mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.80879999999999mm" pcbY="52.6796mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.5388mm" pcbY="51.4096mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.9988mm" pcbY="49.77075136mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="89.20479999999999mm" pcbY="49.6316mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.5388mm" pcbY="48.8696mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.80879999999999mm" pcbY="47.599599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.5388mm" pcbY="46.3296mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.80879999999999mm" pcbY="45.059599999999996mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.5388mm" pcbY="43.7896mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.5388mm" pcbY="53.9496mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.4108mm" pcbY="50.3936mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.6328mm" pcbY="49.3776mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.6328mm" pcbY="59.791599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.3788mm" pcbY="56.7436mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.83879999999999mm" pcbY="56.7436mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.2988mm" pcbY="56.7436mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.1088mm" pcbY="58.267599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.1088mm" pcbY="63.3476mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.1088mm" pcbY="60.8076mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.02879999999999mm" pcbY="63.3476mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.5388mm" pcbY="96.6216mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.80879999999999mm" pcbY="97.3836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="97.8916mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="96.6216mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.5388mm" pcbY="95.0976mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.5388mm" pcbY="93.82759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.80879999999999mm" pcbY="93.06559999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="92.3036mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.80879999999999mm" pcbY="95.8596mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="95.0976mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.80879999999999mm" pcbY="94.3356mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="93.5736mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="99.3648mm" pcbY="53.9496mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.3488mm" pcbY="55.2196mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.83080147999999mm" pcbY="55.2196mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="53.9496mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.3488mm" pcbY="52.6796mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.3488mm" pcbY="50.1396mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="51.4096mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.86080147999999mm" pcbY="62.0776mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.5688mm" pcbY="63.3476mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.2988mm" pcbY="62.0776mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.5688mm" pcbY="60.849113759999994mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="48.8696mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.0788mm" pcbY="99.9236mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.3488mm" pcbY="47.599599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="102.1588mm" pcbY="97.3836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="101.65079999999999mm" pcbY="100.6856mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="99.6188mm" pcbY="92.3036mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="102.1588mm" pcbY="92.3036mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="99.6188mm" pcbY="97.3836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.83879999999999mm" pcbY="59.5376mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.5688mm" pcbY="58.267599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.2988mm" pcbY="59.5376mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.7588mm" pcbY="62.0776mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.4888mm" pcbY="60.8076mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.2188mm" pcbY="56.9976mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.94879999999999mm" pcbY="58.267599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.6788mm" pcbY="59.5376mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="70.66279999999999mm" pcbY="60.553599999999996mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="68.8848mm" pcbY="62.5856mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.6788mm" pcbY="62.0776mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="70.4088mm" pcbY="63.3476mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="69.1388mm" pcbY="64.6176mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="69.1388mm" pcbY="67.14376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="69.1388mm" pcbY="69.6976mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="69.1388mm" pcbY="72.2376mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.2988mm" pcbY="69.6976mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.02879999999999mm" pcbY="70.95376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="70.4088mm" pcbY="70.96759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.6788mm" pcbY="69.6976mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="70.4088mm" pcbY="73.52143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.6788mm" pcbY="72.25143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.4888mm" pcbY="73.52143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.2188mm" pcbY="72.2376mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.7588mm" pcbY="72.25143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.94879999999999mm" pcbY="73.5076mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.4888mm" pcbY="70.96759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.2188mm" pcbY="69.68376208mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.7588mm" pcbY="69.6976mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.94879999999999mm" pcbY="70.95376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.94879999999999mm" pcbY="68.44143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.6788mm" pcbY="67.1576mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.2188mm" pcbY="67.17143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="70.4088mm" pcbY="68.4276mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.94879999999999mm" pcbY="65.88759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.6788mm" pcbY="64.60376208mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.2188mm" pcbY="64.6176mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="70.4088mm" pcbY="65.87376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.4888mm" pcbY="63.36143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.2188mm" pcbY="62.0776mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.94879999999999mm" pcbY="63.3476mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="74.2188mm" pcbY="59.52376208mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.94879999999999mm" pcbY="60.79376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.02879999999999mm" pcbY="68.44143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.7588mm" pcbY="67.1576mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.2988mm" pcbY="67.17143792mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.4888mm" pcbY="68.4276mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.02879999999999mm" pcbY="65.88759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.7588mm" pcbY="64.60376208mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.2988mm" pcbY="64.6176mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.4888mm" pcbY="65.87376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.1088mm" pcbY="68.4276mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.83879999999999mm" pcbY="67.14376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.3788mm" pcbY="67.1576mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.5688mm" pcbY="68.41376208mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.1088mm" pcbY="65.87376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.83879999999999mm" pcbY="64.58992416000001mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.3788mm" pcbY="64.60376208mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.5688mm" pcbY="65.85992416mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.1888mm" pcbY="68.4276mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.91879999999999mm" pcbY="67.14376207999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.6488mm" pcbY="68.41376208mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.6488mm" pcbY="65.85992416mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="99.6188mm" pcbY="64.36359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.0628mm" pcbY="64.36359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.28479999999999mm" pcbY="64.36359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.10481328mm" pcbY="75.23784546mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.2375359mm" pcbY="70.78627956mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.3628mm" pcbY="70.96759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.9968mm" pcbY="76.3016mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="82.60079999999999mm" pcbY="69.6976mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.5848mm" pcbY="76.3016mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.8548mm" pcbY="88.74759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.8708mm" pcbY="89.7636mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.8548mm" pcbY="90.5256mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.6328mm" pcbY="88.74759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="72.4408mm" pcbY="88.74759999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.9968mm" pcbY="87.7316mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="81.07679999999999mm" pcbY="80.61959999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.55279999999999mm" pcbY="82.90559999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.02879999999999mm" pcbY="82.90559999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="77.2668mm" pcbY="83.6676mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.02879999999999mm" pcbY="84.6836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.79079999999999mm" pcbY="83.6676mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.55279999999999mm" pcbY="84.6836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="80.31479999999999mm" pcbY="83.6676mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.07679999999999mm" pcbY="84.6836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.07679999999999mm" pcbY="82.6516mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.60079999999999mm" pcbY="84.6836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.83879999999999mm" pcbY="83.6676mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.83879999999999mm" pcbY="81.6356mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.60079999999999mm" pcbY="82.6516mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.60079999999999mm" pcbY="80.61959999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.3628mm" pcbY="81.6356mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.1248mm" pcbY="80.61959999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.15679999999999mm" pcbY="81.6356mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="81.6356mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.1248mm" pcbY="82.6516mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.3628mm" pcbY="83.6676mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="76.5048mm" pcbY="78.54760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="84.1248mm" pcbY="84.6836mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.6488mm" pcbY="82.6516mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.8868mm" pcbY="83.6676mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.54444133999999mm" pcbY="83.62760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.81444134mm" pcbY="83.88160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.54444133999999mm" pcbY="85.15160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.81444134mm" pcbY="85.40560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.81444134mm" pcbY="86.92960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.54444133999999mm" pcbY="86.67560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.27444134mm" pcbY="85.65960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.00444134mm" pcbY="85.65960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.00444134mm" pcbY="87.18360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.27444134mm" pcbY="87.18360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.00444134mm" pcbY="88.70760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.03644134mm" pcbY="88.19960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.54444133999999mm" pcbY="73.72160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.56044134mm" pcbY="74.73760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.29044134mm" pcbY="75.24560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.02044133999999mm" pcbY="74.73760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.75044134mm" pcbY="74.73760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.75044134mm" pcbY="76.00760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.02044133999999mm" pcbY="76.00760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.75044134mm" pcbY="77.27760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.02044133999999mm" pcbY="77.27760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.29044134mm" pcbY="76.76960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.56044134mm" pcbY="76.26160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="95.56044134mm" pcbY="77.78560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.08444134mm" pcbY="84.13560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.08444134mm" pcbY="85.65960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.08444134mm" pcbY="76.26160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="97.08444134mm" pcbY="77.78560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.16244134mm" pcbY="71.68960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.40044134mm" pcbY="72.70560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.89244133999999mm" pcbY="73.97560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.87644134mm" pcbY="74.99160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.87644134mm" pcbY="73.21360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.38444134mm" pcbY="71.94360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.16244134mm" pcbY="93.53360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="86.16244134mm" pcbY="92.26360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.89244133999999mm" pcbY="92.26360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.89244133999999mm" pcbY="93.53360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.62244134mm" pcbY="93.02560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="65.32644033999999mm" pcbY="85.80159877999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="65.32644033999999mm" pcbY="84.78559878mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="65.32644033999999mm" pcbY="83.76959878mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="66.34244034mm" pcbY="83.76959878mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="67.35844034mm" pcbY="83.76959878mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="67.35844034mm" pcbY="84.78559878mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="66.34243526mm" pcbY="84.78558862mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="66.34244034mm" pcbY="85.80159877999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="67.35844034mm" pcbY="85.80159877999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.68444133999999mm" pcbY="81.84960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="71.43044134mm" pcbY="83.37360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="70.66844134mm" pcbY="82.61160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.86044134mm" pcbY="73.97560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.86044134mm" pcbY="72.19760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="81.80744116mm" pcbY="73.07688965999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.06144116mm" pcbY="74.99160008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.35244134mm" pcbY="93.27960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.90844134mm" pcbY="90.99360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="84.63844134mm" pcbY="90.99360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.40044134mm" pcbY="89.72360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.62244134mm" pcbY="91.75560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.35244134mm" pcbY="92.00960008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.29044134mm" pcbY="78.29360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.02044133999999mm" pcbY="78.54760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.75044134mm" pcbY="78.54760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="96.32244134mm" pcbY="79.05560008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="82.87427926mm" pcbY="76.00760008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="75.40027846mm" pcbY="84.53559928mm" holeDiameter="0.381mm" outerDiameter="0.762mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="75.49444134mm" pcbY="86.16760008mm" holeDiameter="0.381mm" outerDiameter="0.762mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="73.98427926mm" pcbY="85.91360008mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="73.98427926mm" pcbY="83.61376216mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="90.72879999999999mm" pcbY="64.36359999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="79.94384316mm" pcbY="73.82914113999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.0148mm" pcbY="96.6216mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.4908mm" pcbY="96.6216mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.2688mm" pcbY="97.8916mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.9988mm" pcbY="97.8916mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.7928mm" pcbY="98.1456mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="85.6488mm" pcbY="58.267599999999995mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="102.9208mm" pcbY="72.49159999999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="88.6968mm" pcbY="42.5196mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="91.4908mm" pcbY="42.5196mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.02879999999999mm" pcbY="60.8076mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="39.928799999999995mm" pcbY="57.5056mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="93.70907851999999mm" pcbY="101.28433896mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="98.04157938mm" pcbY="105.34160034mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="94.56043063999999mm" pcbY="107.00436307999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="92.479368mm" pcbY="104.0199977mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="83.40173311999999mm" pcbY="105.34160034mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="54.534836320000004mm" pcbY="102.76737637999999mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="65.60368641999999mm" pcbY="75.26483042mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="64.2920609mm" pcbY="74.17110896mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="65.73968563999999mm" pcbY="73.14408028mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="37.8968mm" pcbY="77.3176mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="38.6588mm" pcbY="61.0616mm" holeDiameter="0.381mm" outerDiameter="0.635mm" fromLayer="top" toLayer="bottom" tented="both_sides" />
      <via pcbX="78.79079999999999mm" pcbY="91.99012082mm" holeDiameter="0.381mm" outerDiameter="0.762mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <via pcbX="80.74590149999999mm" pcbY="95.46922232mm" holeDiameter="0.381mm" outerDiameter="0.762mm" fromLayer="top" toLayer="bottom" tented="exposed" />
      <smtpad portHints={["2"]} pcbX="79.8068mm" pcbY="51.397598499999994mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="79.8068mm" pcbY="49.89759896mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="44.9967985mm" pcbY="56.9976mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="43.49679896mm" pcbY="56.9976mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="87.81044159999999mm" pcbY="84.51660008mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["2"]} pcbX="87.81044159999999mm" pcbY="83.24660008mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["3"]} pcbX="87.81044159999999mm" pcbY="81.97660008mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["4"]} pcbX="87.81044159999999mm" pcbY="80.70660008mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["8"]} pcbX="92.81044176mm" pcbY="84.51660008mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["7"]} pcbX="92.81044176mm" pcbY="83.24660008mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["6"]} pcbX="92.81044176mm" pcbY="81.97660008mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["5"]} pcbX="92.81044176mm" pcbY="80.70660008mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["1"]} pcbX="87.81044159999999mm" pcbY="73.62522231999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["2"]} pcbX="87.81044159999999mm" pcbY="72.35522232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["3"]} pcbX="87.81044159999999mm" pcbY="71.08522232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["4"]} pcbX="87.81044159999999mm" pcbY="69.81522231999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["8"]} pcbX="92.81044176mm" pcbY="73.62522231999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["7"]} pcbX="92.81044176mm" pcbY="72.35522232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["6"]} pcbX="92.81044176mm" pcbY="71.08522232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["5"]} pcbX="92.81044176mm" pcbY="69.81522231999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["2"]} pcbX="62.026799999999994mm" pcbY="105.5236015mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="62.026799999999994mm" pcbY="107.02360104mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="62.776801039999995mm" pcbY="93.3196mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="61.27680149999999mm" pcbY="93.3196mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="66.84080103999999mm" pcbY="93.3196mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="65.3408015mm" pcbY="93.3196mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="71.1782803mm" pcbY="93.28259981999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="69.67828075999999mm" pcbY="93.28259981999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="41.4648015mm" pcbY="91.7956mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.96480104mm" pcbY="91.7956mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="41.4648015mm" pcbY="83.9216mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.96480104mm" pcbY="83.9216mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="45.28100671999999mm" pcbY="46.625151859999995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="46.78100626mm" pcbY="46.625151859999995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="41.4648015mm" pcbY="46.5836mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.96480104mm" pcbY="46.5836mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="100.8767985mm" pcbY="70.96759999999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="99.37679896mm" pcbY="70.96759999999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="68.64279896mm" pcbY="78.0796mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="70.1427985mm" pcbY="78.0796mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="66.58680104mm" pcbY="78.0796mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="65.08680149999999mm" pcbY="78.0796mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="63.28480104mm" pcbY="78.0796mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="61.78480149999999mm" pcbY="78.0796mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="26.01079888mm" pcbY="87.78308833999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="27.51079842mm" pcbY="87.78308833999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="25.95053738mm" pcbY="90.27159999999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="27.45053692mm" pcbY="90.27159999999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="25.95053738mm" pcbY="92.23210916mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="27.45053692mm" pcbY="92.23210916mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="66.0908mm" pcbY="49.8976015mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="66.0908mm" pcbY="51.39760104mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="52.6288mm" pcbY="51.397598499999994mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="52.6288mm" pcbY="49.89759896mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="56.6928mm" pcbY="49.8976015mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="56.6928mm" pcbY="51.39760104mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="62.2808mm" pcbY="51.397598499999994mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="62.2808mm" pcbY="49.89759896mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="77.2668mm" pcbY="51.397598499999994mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="77.2668mm" pcbY="49.89759896mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="49.8348mm" pcbY="51.397598499999994mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="49.8348mm" pcbY="49.89759896mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="72.83479972mm" pcbY="49.909603mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="72.83479972mm" pcbY="51.409602539999995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="72.83479972mm" pcbY="47.88136728mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="72.83479972mm" pcbY="46.381367739999995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["11"]} pcbX="38.96879938mm" pcbY="78.2025995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["12"]} pcbX="38.96879938mm" pcbY="78.85260074mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["13"]} pcbX="38.96879938mm" pcbY="79.50259944mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["14"]} pcbX="38.96879938mm" pcbY="80.15260067999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["15"]} pcbX="38.96879938mm" pcbY="80.80259937999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["16"]} pcbX="38.96879938mm" pcbY="81.45260062mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["17"]} pcbX="38.96879938mm" pcbY="82.10259932mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["18"]} pcbX="38.96879938mm" pcbY="82.75260055999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["19"]} pcbX="38.96879938mm" pcbY="83.40259925999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["20"]} pcbX="38.96879938mm" pcbY="84.0526005mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["10"]} pcbX="33.26880062mm" pcbY="78.2025995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["9"]} pcbX="33.26880062mm" pcbY="78.85260074mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["8"]} pcbX="33.26880062mm" pcbY="79.50259944mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["7"]} pcbX="33.26880062mm" pcbY="80.15260067999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["6"]} pcbX="33.26880062mm" pcbY="80.80259937999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["5"]} pcbX="33.26880062mm" pcbY="81.45260062mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["4"]} pcbX="33.26880062mm" pcbY="82.10259932mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["3"]} pcbX="33.26880062mm" pcbY="82.75260055999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["2"]} pcbX="33.26880062mm" pcbY="83.40259925999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["1"]} pcbX="33.26880062mm" pcbY="84.0526005mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["11"]} pcbX="38.96879938mm" pcbY="62.2005995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["12"]} pcbX="38.96879938mm" pcbY="62.850600740000004mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["13"]} pcbX="38.96879938mm" pcbY="63.500599439999995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["14"]} pcbX="38.96879938mm" pcbY="64.15060068mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["15"]} pcbX="38.96879938mm" pcbY="64.80059938mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["16"]} pcbX="38.96879938mm" pcbY="65.45060062mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["17"]} pcbX="38.96879938mm" pcbY="66.10059932mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["18"]} pcbX="38.96879938mm" pcbY="66.75060056mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["19"]} pcbX="38.96879938mm" pcbY="67.40059925999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["20"]} pcbX="38.96879938mm" pcbY="68.05060049999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["10"]} pcbX="33.26880062mm" pcbY="62.2005995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["9"]} pcbX="33.26880062mm" pcbY="62.850600740000004mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["8"]} pcbX="33.26880062mm" pcbY="63.500599439999995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["7"]} pcbX="33.26880062mm" pcbY="64.15060068mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["6"]} pcbX="33.26880062mm" pcbY="64.80059938mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["5"]} pcbX="33.26880062mm" pcbY="65.45060062mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["4"]} pcbX="33.26880062mm" pcbY="66.10059932mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["3"]} pcbX="33.26880062mm" pcbY="66.75060056mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["2"]} pcbX="33.26880062mm" pcbY="67.40059925999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["1"]} pcbX="33.26880062mm" pcbY="68.05060049999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["1"]} pcbX="72.4408mm" pcbY="79.10759896mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="72.4408mm" pcbY="80.6075985mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="63.28480104mm" pcbY="76.0476mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="61.78480149999999mm" pcbY="76.0476mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="42.96479849999999mm" pcbY="69.9516mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="41.46479896mm" pcbY="69.9516mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="42.952797mm" pcbY="79.6036mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="41.45279746mm" pcbY="79.6036mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="42.96479849999999mm" pcbY="74.2696mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="41.46479896mm" pcbY="74.2696mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="42.96479849999999mm" pcbY="71.9836mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="41.46479896mm" pcbY="71.9836mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="41.4648015mm" pcbY="81.8896mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.96480104mm" pcbY="81.8896mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="41.452799999999996mm" pcbY="77.3176mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.95279954mm" pcbY="77.3176mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="35.88991552mm" pcbY="49.93494712mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="2.00000108mm" height="2.00000108mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="35.88991552mm" pcbY="53.934946739999994mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="2.00000108mm" height="2.00000108mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="85.0787986mm" pcbY="69.6976mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="83.67879886mm" pcbY="69.6976mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="79.2367986mm" pcbY="85.9536mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="77.83679886mm" pcbY="85.9536mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="85.8407986mm" pcbY="79.3496mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="84.44079886mm" pcbY="79.3496mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="84.3167986mm" pcbY="94.58959999999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="82.91679886mm" pcbY="94.58959999999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="79.2367986mm" pcbY="87.7316mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="77.83679886mm" pcbY="87.7316mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="85.8407986mm" pcbY="77.3176mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="84.44079886mm" pcbY="77.3176mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.8500008399999999mm" height="0.8000009399999999mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="52.882799999999996mm" pcbY="110.84560254mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.27mm" height="1.6001999999999998mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="52.882799999999996mm" pcbY="108.81360254mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.27mm" height="1.6001999999999998mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="41.4648015mm" pcbY="67.9196mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="42.96480104mm" pcbY="67.9196mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="78.79079999999999mm" pcbY="81.59760159999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="3.50000062mm" height="1.49999954mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="78.79079999999999mm" pcbY="75.4976011mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="3.50000062mm" height="1.49999954mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["6"]} pcbX="36.814800639999994mm" pcbY="73.57759986mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.6500012399999999mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["5"]} pcbX="35.864799999999995mm" pcbY="73.57759986mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.6500012399999999mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["4"]} pcbX="34.9148019mm" pcbY="73.57759986mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.6500012399999999mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["3"]} pcbX="34.9148019mm" pcbY="75.97760013999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.6500012399999999mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="35.864799999999995mm" pcbY="75.97760013999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.6500012399999999mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["1"]} pcbX="36.814800639999994mm" pcbY="75.97760013999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.6500012399999999mm" height="1.10000034mm" shape="rect" />
      <smtpad portHints={["2"]} pcbX="59.540312719999996mm" pcbY="51.47241166mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.20000014mm" height="1.20000014mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="59.540312719999996mm" pcbY="49.372410779999996mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.20000014mm" height="1.20000014mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="82.55615442mm" pcbY="51.47241166mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.20000014mm" height="1.20000014mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="82.55615442mm" pcbY="49.372410779999996mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="1.20000014mm" height="1.20000014mm" ccwRotation={90} shape="rotated_rect" />
      <smtpad portHints={["11"]} pcbX="38.96879938mm" pcbY="85.8225995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["12"]} pcbX="38.96879938mm" pcbY="86.47260074mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["13"]} pcbX="38.96879938mm" pcbY="87.12259944mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["14"]} pcbX="38.96879938mm" pcbY="87.77260068mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["15"]} pcbX="38.96879938mm" pcbY="88.42259938mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["16"]} pcbX="38.96879938mm" pcbY="89.07260062mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["17"]} pcbX="38.96879938mm" pcbY="89.72259932mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["18"]} pcbX="38.96879938mm" pcbY="90.37260056mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["19"]} pcbX="38.96879938mm" pcbY="91.02259925999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["20"]} pcbX="38.96879938mm" pcbY="91.67260049999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["10"]} pcbX="33.26880062mm" pcbY="85.8225995mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["9"]} pcbX="33.26880062mm" pcbY="86.47260074mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["8"]} pcbX="33.26880062mm" pcbY="87.12259944mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["7"]} pcbX="33.26880062mm" pcbY="87.77260068mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["6"]} pcbX="33.26880062mm" pcbY="88.42259938mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["5"]} pcbX="33.26880062mm" pcbY="89.07260062mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["4"]} pcbX="33.26880062mm" pcbY="89.72259932mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["3"]} pcbX="33.26880062mm" pcbY="90.37260056mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["2"]} pcbX="33.26880062mm" pcbY="91.02259925999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["1"]} pcbX="33.26880062mm" pcbY="91.67260049999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.3499993mm" height="1.69999914mm" radius="0.17499965mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["41"]} pcbX="66.34244034mm" pcbY="84.78559878mm" layer="top" solderMaskMargin="0.06999986mm" width="2.89999928mm" height="2.89999928mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["40"]} pcbX="69.31744074mm" pcbY="87.03559935999999mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["39"]} pcbX="69.31744074mm" pcbY="86.53560035999999mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["38"]} pcbX="69.31744074mm" pcbY="86.03559882mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["37"]} pcbX="69.31744074mm" pcbY="85.53559981999999mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["36"]} pcbX="69.31744074mm" pcbY="85.03559828mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["35"]} pcbX="69.31744074mm" pcbY="84.53559928mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["34"]} pcbX="69.31744074mm" pcbY="84.03560028mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["33"]} pcbX="69.31744074mm" pcbY="83.53559874mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["32"]} pcbX="69.31744074mm" pcbY="83.03559974mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["31"]} pcbX="69.31744074mm" pcbY="82.5355982mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["30"]} pcbX="68.59244091999999mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["29"]} pcbX="68.09244192mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["28"]} pcbX="67.59244038mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["27"]} pcbX="67.09244138mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["26"]} pcbX="66.59243984mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["25"]} pcbX="66.09244084mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["24"]} pcbX="65.59244184mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["23"]} pcbX="65.09244029999999mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["22"]} pcbX="64.5924413mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["21"]} pcbX="64.09243975999999mm" pcbY="81.81059838mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["20"]} pcbX="63.367439940000004mm" pcbY="82.5355982mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["19"]} pcbX="63.367439940000004mm" pcbY="83.03559974mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["18"]} pcbX="63.367439940000004mm" pcbY="83.53559874mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["17"]} pcbX="63.367439940000004mm" pcbY="84.03560028mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["16"]} pcbX="63.367439940000004mm" pcbY="84.53559928mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["15"]} pcbX="63.367439940000004mm" pcbY="85.03559828mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["14"]} pcbX="63.367439940000004mm" pcbY="85.53559981999999mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["13"]} pcbX="63.367439940000004mm" pcbY="86.03559882mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["12"]} pcbX="63.367439940000004mm" pcbY="86.53560035999999mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["11"]} pcbX="63.367439940000004mm" pcbY="87.03559935999999mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" pcbRotation="270deg" shape="pill" />
      <smtpad portHints={["10"]} pcbX="64.09243975999999mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["9"]} pcbX="64.5924413mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["8"]} pcbX="65.09244029999999mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["7"]} pcbX="65.59244184mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["6"]} pcbX="66.09244084mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["5"]} pcbX="66.59243984mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["4"]} pcbX="67.09244138mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["3"]} pcbX="67.59244038mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["2"]} pcbX="68.09244192mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["1"]} pcbX="68.59244091999999mm" pcbY="87.76059918mm" layer="top" solderMaskMargin="0.06999986mm" width="0.27999944mm" height="0.8500008399999999mm" radius="0.13999972mm" shape="pill" />
      <smtpad portHints={["1"]} pcbX="31.9257553mm" pcbY="53.80132242mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="2.00000108mm" height="2.00000108mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="31.9257553mm" pcbY="49.8013228mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="2.00000108mm" height="2.00000108mm" ccwRotation={180} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="89.96161078mm" pcbY="46.39638422mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="2.794mm" height="3.81mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["2"]} pcbX="89.96161078mm" pcbY="53.508384219999996mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="2.794mm" height="3.81mm" ccwRotation={270} shape="rotated_rect" />
      <smtpad portHints={["1"]} pcbX="87.81044159999999mm" pcbY="95.46922232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["2"]} pcbX="87.81044159999999mm" pcbY="94.19922231999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["3"]} pcbX="87.81044159999999mm" pcbY="92.92922232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["4"]} pcbX="87.81044159999999mm" pcbY="91.65922232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["8"]} pcbX="92.81044176mm" pcbY="95.46922232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["7"]} pcbX="92.81044176mm" pcbY="94.19922231999999mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["6"]} pcbX="92.81044176mm" pcbY="92.92922232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["5"]} pcbX="92.81044176mm" pcbY="91.65922232mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="2.00000108mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["5"]} pcbX="46.45463404mm" pcbY="49.674188179999994mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="1.54999944mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["6"]} pcbX="46.45463404mm" pcbY="50.94418818mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="1.54999944mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["7"]} pcbX="46.45463404mm" pcbY="52.21418818mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="1.54999944mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["8"]} pcbX="46.45463404mm" pcbY="53.48418818mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="1.54999944mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["4"]} pcbX="41.05463468mm" pcbY="49.674188179999994mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="1.54999944mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["3"]} pcbX="41.05463468mm" pcbY="50.94418818mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="1.54999944mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["2"]} pcbX="41.05463468mm" pcbY="52.21418818mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="1.54999944mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <smtpad portHints={["1"]} pcbX="41.05463468mm" pcbY="53.48418818mm" layer="top" solderMaskMargin="0.07619999999999999mm" width="0.5999987999999999mm" height="1.54999944mm" radius="0.29999939999999997mm" pcbRotation="90deg" shape="pill" />
      <silkscreenpath route={[{"x":103.97489999999999,"y":67.1576},{"x":103.96153601795203,"y":67.36149496486694},{"x":103.92167273324614,"y":67.56190123035465},{"x":103.85599221773587,"y":67.7553897896975},{"x":103.76561828325167,"y":67.93865},{"x":103.65209725286894,"y":68.10854622825453},{"x":103.5173715028915,"y":68.2621715028915},{"x":103.36374622825453,"y":68.39689725286894},{"x":103.19385,"y":68.51041828325167},{"x":103.0105897896975,"y":68.60079221773587},{"x":102.81710123035465,"y":68.66647273324615},{"x":102.61669496486694,"y":68.70633601795203},{"x":102.41279999999999,"y":68.7197},{"x":102.20890503513306,"y":68.70633601795203},{"x":102.00849876964534,"y":68.66647273324615},{"x":101.81501021030249,"y":68.60079221773587},{"x":101.63175,"y":68.51041828325167},{"x":101.46185377174547,"y":68.39689725286894},{"x":101.30822849710849,"y":68.2621715028915},{"x":101.17350274713105,"y":68.10854622825453},{"x":101.05998171674833,"y":67.93865},{"x":100.96960778226412,"y":67.7553897896975},{"x":100.90392726675385,"y":67.56190123035465},{"x":100.86406398204797,"y":67.36149496486694},{"x":100.85069999999999,"y":67.1576},{"x":100.86406398204797,"y":66.95370503513305},{"x":100.90392726675385,"y":66.75329876964534},{"x":100.96960778226412,"y":66.5598102103025},{"x":101.05998171674833,"y":66.37655},{"x":101.17350274713105,"y":66.20665377174547},{"x":101.30822849710849,"y":66.05302849710849},{"x":101.46185377174547,"y":65.91830274713105},{"x":101.63175,"y":65.80478171674832},{"x":101.81501021030249,"y":65.71440778226412},{"x":102.00849876964534,"y":65.64872726675385},{"x":102.20890503513306,"y":65.60886398204796},{"x":102.41279999999999,"y":65.5955},{"x":102.61669496486695,"y":65.60886398204796},{"x":102.81710123035465,"y":65.64872726675385},{"x":103.0105897896975,"y":65.71440778226412},{"x":103.19385,"y":65.80478171674832},{"x":103.36374622825453,"y":65.91830274713105},{"x":103.5173715028915,"y":66.05302849710849},{"x":103.65209725286894,"y":66.20665377174547},{"x":103.76561828325167,"y":66.37655},{"x":103.85599221773587,"y":66.55981021030249},{"x":103.92167273324614,"y":66.75329876964534},{"x":103.96153601795203,"y":66.95370503513305},{"x":103.97489999999999,"y":67.1576}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":83.03289972,"y":102.2096},{"x":83.01953573795203,"y":102.41349496486693},{"x":82.97967245324615,"y":102.61390123035464},{"x":82.91399193773589,"y":102.80738978969751},{"x":82.82361800325168,"y":102.99065},{"x":82.71009697286894,"y":103.16054622825452},{"x":82.5753712228915,"y":103.3141715028915},{"x":82.42174594825453,"y":103.44889725286895},{"x":82.25184972,"y":103.56241828325167},{"x":82.06858950969752,"y":103.65279221773588},{"x":81.87510095035465,"y":103.71847273324614},{"x":81.67469468486694,"y":103.75833601795202},{"x":81.47079972,"y":103.7717},{"x":81.26690475513307,"y":103.75833601795202},{"x":81.06649848964535,"y":103.71847273324614},{"x":80.87300993030249,"y":103.65279221773588},{"x":80.68974972000001,"y":103.56241828325167},{"x":80.51985349174548,"y":103.44889725286895},{"x":80.3662282171085,"y":103.3141715028915},{"x":80.23150246713107,"y":103.16054622825452},{"x":80.11798143674832,"y":102.99065},{"x":80.02760750226412,"y":102.80738978969751},{"x":79.96192698675385,"y":102.61390123035464},{"x":79.92206370204798,"y":102.41349496486693},{"x":79.90869972,"y":102.2096},{"x":79.92206370204798,"y":102.00570503513306},{"x":79.96192698675385,"y":101.80529876964535},{"x":80.02760750226412,"y":101.6118102103025},{"x":80.11798143674832,"y":101.42855},{"x":80.23150246713107,"y":101.25865377174547},{"x":80.3662282171085,"y":101.10502849710849},{"x":80.51985349174548,"y":100.97030274713106},{"x":80.68974972000001,"y":100.85678171674832},{"x":80.87300993030249,"y":100.76640778226411},{"x":81.06649848964535,"y":100.70072726675384},{"x":81.26690475513307,"y":100.66086398204797},{"x":81.47079972,"y":100.6475},{"x":81.67469468486695,"y":100.66086398204797},{"x":81.87510095035465,"y":100.70072726675384},{"x":82.06858950969752,"y":100.76640778226411},{"x":82.25184972,"y":100.85678171674832},{"x":82.42174594825453,"y":100.97030274713106},{"x":82.5753712228915,"y":101.10502849710849},{"x":82.71009697286894,"y":101.25865377174547},{"x":82.82361800325168,"y":101.42855},{"x":82.91399193773589,"y":101.61181021030248},{"x":82.97967245324615,"y":101.80529876964535},{"x":83.01953573795203,"y":102.00570503513306},{"x":83.03289972,"y":102.2096}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":87.93544261999999,"y":85.36660092},{"x":87.93437321894548,"y":85.38291682716421},{"x":87.93118331353047,"y":85.39895356463323},{"x":87.92592748392103,"y":85.41443673938274},{"x":87.91869565881896,"y":85.42910142999999},{"x":87.9096115767568,"y":85.44269671956275},{"x":87.89883066889722,"y":85.45498998889722},{"x":87.88653739956274,"y":85.46577089675681},{"x":87.87294211,"y":85.47485497881897},{"x":87.85827741938273,"y":85.48208680392104},{"x":87.84279424463323,"y":85.48734263353047},{"x":87.8267575071642,"y":85.49053253894549},{"x":87.81044159999999,"y":85.49160194},{"x":87.79412569283578,"y":85.49053253894549},{"x":87.77808895536675,"y":85.48734263353047},{"x":87.76260578061725,"y":85.48208680392104},{"x":87.74794109,"y":85.47485497881897},{"x":87.73434580043724,"y":85.46577089675681},{"x":87.72205253110276,"y":85.45498998889722},{"x":87.71127162324318,"y":85.44269671956275},{"x":87.70218754118102,"y":85.42910142999999},{"x":87.69495571607895,"y":85.41443673938274},{"x":87.68969988646951,"y":85.39895356463323},{"x":87.6865099810545,"y":85.38291682716421},{"x":87.68544057999999,"y":85.36660092},{"x":87.6865099810545,"y":85.35028501283578},{"x":87.68969988646951,"y":85.33424827536676},{"x":87.69495571607895,"y":85.31876510061726},{"x":87.70218754118102,"y":85.30410040999999},{"x":87.71127162324318,"y":85.29050512043725},{"x":87.72205253110276,"y":85.27821185110277},{"x":87.73434580043724,"y":85.26743094324318},{"x":87.74794109,"y":85.25834686118102},{"x":87.76260578061725,"y":85.25111503607896},{"x":87.77808895536675,"y":85.24585920646952},{"x":87.79412569283578,"y":85.2426693010545},{"x":87.81044159999999,"y":85.2415999},{"x":87.8267575071642,"y":85.2426693010545},{"x":87.84279424463323,"y":85.24585920646952},{"x":87.85827741938273,"y":85.25111503607896},{"x":87.87294211,"y":85.25834686118102},{"x":87.88653739956274,"y":85.26743094324318},{"x":87.89883066889722,"y":85.27821185110277},{"x":87.9096115767568,"y":85.29050512043725},{"x":87.91869565881896,"y":85.30410040999999},{"x":87.92592748392103,"y":85.31876510061726},{"x":87.93118331353047,"y":85.33424827536676},{"x":87.93437321894548,"y":85.35028501283578},{"x":87.93544261999999,"y":85.36660092}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":87.93544261999999,"y":74.47522316},{"x":87.93437321894548,"y":74.49153906716421},{"x":87.93118331353047,"y":74.50757580463323},{"x":87.92592748392103,"y":74.52305897938274},{"x":87.91869565881896,"y":74.53772367},{"x":87.9096115767568,"y":74.55131895956275},{"x":87.89883066889722,"y":74.56361222889723},{"x":87.88653739956274,"y":74.57439313675681},{"x":87.87294211,"y":74.58347721881897},{"x":87.85827741938273,"y":74.59070904392104},{"x":87.84279424463323,"y":74.59596487353048},{"x":87.8267575071642,"y":74.59915477894549},{"x":87.81044159999999,"y":74.60022418},{"x":87.79412569283578,"y":74.59915477894549},{"x":87.77808895536675,"y":74.59596487353048},{"x":87.76260578061725,"y":74.59070904392104},{"x":87.74794109,"y":74.58347721881897},{"x":87.73434580043724,"y":74.57439313675681},{"x":87.72205253110276,"y":74.56361222889723},{"x":87.71127162324318,"y":74.55131895956275},{"x":87.70218754118102,"y":74.53772367},{"x":87.69495571607895,"y":74.52305897938274},{"x":87.68969988646951,"y":74.50757580463323},{"x":87.6865099810545,"y":74.49153906716421},{"x":87.68544057999999,"y":74.47522316},{"x":87.6865099810545,"y":74.45890725283579},{"x":87.68969988646951,"y":74.44287051536676},{"x":87.69495571607895,"y":74.42738734061726},{"x":87.70218754118102,"y":74.41272265},{"x":87.71127162324318,"y":74.39912736043725},{"x":87.72205253110276,"y":74.38683409110277},{"x":87.73434580043724,"y":74.37605318324319},{"x":87.74794109,"y":74.36696910118103},{"x":87.76260578061725,"y":74.35973727607897},{"x":87.77808895536675,"y":74.35448144646952},{"x":87.79412569283578,"y":74.35129154105451},{"x":87.81044159999999,"y":74.35022214},{"x":87.8267575071642,"y":74.35129154105451},{"x":87.84279424463323,"y":74.35448144646952},{"x":87.85827741938273,"y":74.35973727607897},{"x":87.87294211,"y":74.36696910118103},{"x":87.88653739956274,"y":74.37605318324319},{"x":87.89883066889722,"y":74.38683409110277},{"x":87.9096115767568,"y":74.39912736043725},{"x":87.91869565881896,"y":74.41272265},{"x":87.92592748392103,"y":74.42738734061726},{"x":87.93118331353047,"y":74.44287051536676},{"x":87.93437321894548,"y":74.45890725283579},{"x":87.93544261999999,"y":74.47522316}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":87.35089972,"y":102.2096},{"x":87.33753573795202,"y":102.41349496486693},{"x":87.29767245324615,"y":102.61390123035464},{"x":87.23199193773588,"y":102.80738978969751},{"x":87.14161800325168,"y":102.99065},{"x":87.02809697286895,"y":103.16054622825452},{"x":86.8933712228915,"y":103.3141715028915},{"x":86.73974594825452,"y":103.44889725286895},{"x":86.56984972000001,"y":103.56241828325167},{"x":86.38658950969752,"y":103.65279221773588},{"x":86.19310095035465,"y":103.71847273324614},{"x":85.99269468486693,"y":103.75833601795202},{"x":85.78879972,"y":103.7717},{"x":85.58490475513307,"y":103.75833601795202},{"x":85.38449848964535,"y":103.71847273324614},{"x":85.19100993030249,"y":103.65279221773588},{"x":85.00774972,"y":103.56241828325167},{"x":84.83785349174548,"y":103.44889725286895},{"x":84.6842282171085,"y":103.3141715028915},{"x":84.54950246713106,"y":103.16054622825452},{"x":84.43598143674832,"y":102.99065},{"x":84.34560750226412,"y":102.80738978969751},{"x":84.27992698675385,"y":102.61390123035464},{"x":84.24006370204798,"y":102.41349496486693},{"x":84.22669972,"y":102.2096},{"x":84.24006370204798,"y":102.00570503513306},{"x":84.27992698675385,"y":101.80529876964535},{"x":84.34560750226412,"y":101.6118102103025},{"x":84.43598143674832,"y":101.42855},{"x":84.54950246713106,"y":101.25865377174547},{"x":84.6842282171085,"y":101.10502849710849},{"x":84.83785349174548,"y":100.97030274713106},{"x":85.00774972,"y":100.85678171674832},{"x":85.19100993030249,"y":100.76640778226411},{"x":85.38449848964535,"y":100.70072726675384},{"x":85.58490475513307,"y":100.66086398204797},{"x":85.78879972,"y":100.6475},{"x":85.99269468486695,"y":100.66086398204797},{"x":86.19310095035465,"y":100.70072726675384},{"x":86.38658950969752,"y":100.76640778226411},{"x":86.56984972000001,"y":100.85678171674832},{"x":86.73974594825452,"y":100.97030274713106},{"x":86.8933712228915,"y":101.10502849710849},{"x":87.02809697286895,"y":101.25865377174547},{"x":87.14161800325168,"y":101.42855},{"x":87.23199193773588,"y":101.61181021030248},{"x":87.29767245324615,"y":101.80529876964535},{"x":87.33753573795202,"y":102.00570503513306},{"x":87.35089972,"y":102.2096}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":91.7829,"y":102.2096},{"x":91.76953601795202,"y":102.41349496486693},{"x":91.72967273324615,"y":102.61390123035464},{"x":91.66399221773588,"y":102.80738978969751},{"x":91.57361828325168,"y":102.99065},{"x":91.46009725286893,"y":103.16054622825452},{"x":91.3253715028915,"y":103.3141715028915},{"x":91.17174622825452,"y":103.44889725286895},{"x":91.00184999999999,"y":103.56241828325167},{"x":90.81858978969751,"y":103.65279221773588},{"x":90.62510123035464,"y":103.71847273324614},{"x":90.42469496486693,"y":103.75833601795202},{"x":90.2208,"y":103.7717},{"x":90.01690503513306,"y":103.75833601795202},{"x":89.81649876964535,"y":103.71847273324614},{"x":89.62301021030248,"y":103.65279221773588},{"x":89.43974999999999,"y":103.56241828325167},{"x":89.26985377174547,"y":103.44889725286895},{"x":89.1162284971085,"y":103.3141715028915},{"x":88.98150274713106,"y":103.16054622825452},{"x":88.86798171674832,"y":102.99065},{"x":88.77760778226411,"y":102.80738978969751},{"x":88.71192726675385,"y":102.61390123035464},{"x":88.67206398204797,"y":102.41349496486693},{"x":88.6587,"y":102.2096},{"x":88.67206398204797,"y":102.00570503513306},{"x":88.71192726675385,"y":101.80529876964535},{"x":88.77760778226411,"y":101.6118102103025},{"x":88.86798171674832,"y":101.42855},{"x":88.98150274713106,"y":101.25865377174547},{"x":89.1162284971085,"y":101.10502849710849},{"x":89.26985377174547,"y":100.97030274713106},{"x":89.43974999999999,"y":100.85678171674832},{"x":89.62301021030248,"y":100.76640778226411},{"x":89.81649876964535,"y":100.70072726675384},{"x":90.01690503513306,"y":100.66086398204797},{"x":90.2208,"y":100.6475},{"x":90.42469496486694,"y":100.66086398204797},{"x":90.62510123035464,"y":100.70072726675384},{"x":90.81858978969751,"y":100.76640778226411},{"x":91.00184999999999,"y":100.85678171674832},{"x":91.17174622825452,"y":100.97030274713106},{"x":91.3253715028915,"y":101.10502849710849},{"x":91.46009725286893,"y":101.25865377174547},{"x":91.57361828325168,"y":101.42855},{"x":91.66399221773588,"y":101.61181021030248},{"x":91.72967273324615,"y":101.80529876964535},{"x":91.76953601795202,"y":102.00570503513306},{"x":91.7829,"y":102.2096}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":78.71489972,"y":102.2096},{"x":78.70153573795203,"y":102.41349496486693},{"x":78.66167245324615,"y":102.61390123035464},{"x":78.59599193773589,"y":102.80738978969751},{"x":78.50561800325168,"y":102.99065},{"x":78.39209697286894,"y":103.16054622825452},{"x":78.2573712228915,"y":103.3141715028915},{"x":78.10374594825453,"y":103.44889725286895},{"x":77.93384972,"y":103.56241828325167},{"x":77.75058950969752,"y":103.65279221773588},{"x":77.55710095035465,"y":103.71847273324614},{"x":77.35669468486694,"y":103.75833601795202},{"x":77.15279972,"y":103.7717},{"x":76.94890475513307,"y":103.75833601795202},{"x":76.74849848964536,"y":103.71847273324614},{"x":76.55500993030249,"y":103.65279221773588},{"x":76.37174972,"y":103.56241828325167},{"x":76.20185349174548,"y":103.44889725286895},{"x":76.0482282171085,"y":103.3141715028915},{"x":75.91350246713105,"y":103.16054622825452},{"x":75.79998143674833,"y":102.99065},{"x":75.70960750226412,"y":102.80738978969751},{"x":75.64392698675385,"y":102.61390123035464},{"x":75.60406370204798,"y":102.41349496486693},{"x":75.59069972,"y":102.2096},{"x":75.60406370204798,"y":102.00570503513306},{"x":75.64392698675385,"y":101.80529876964535},{"x":75.70960750226412,"y":101.6118102103025},{"x":75.79998143674833,"y":101.42855},{"x":75.91350246713105,"y":101.25865377174547},{"x":76.0482282171085,"y":101.10502849710849},{"x":76.20185349174548,"y":100.97030274713106},{"x":76.37174972,"y":100.85678171674832},{"x":76.55500993030249,"y":100.76640778226411},{"x":76.74849848964536,"y":100.70072726675384},{"x":76.94890475513307,"y":100.66086398204797},{"x":77.15279972,"y":100.6475},{"x":77.35669468486695,"y":100.66086398204797},{"x":77.55710095035465,"y":100.70072726675384},{"x":77.75058950969752,"y":100.76640778226411},{"x":77.93384972,"y":100.85678171674832},{"x":78.10374594825453,"y":100.97030274713106},{"x":78.2573712228915,"y":101.10502849710849},{"x":78.39209697286894,"y":101.25865377174547},{"x":78.50561800325168,"y":101.42855},{"x":78.59599193773589,"y":101.61181021030248},{"x":78.66167245324615,"y":101.80529876964535},{"x":78.70153573795203,"y":102.00570503513306},{"x":78.71489972,"y":102.2096}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":70.07889972000001,"y":102.2096},{"x":70.06553573795203,"y":102.41349496486693},{"x":70.02567245324614,"y":102.61390123035464},{"x":69.95999193773588,"y":102.80738978969751},{"x":69.86961800325167,"y":102.99065},{"x":69.75609697286895,"y":103.16054622825452},{"x":69.62137122289151,"y":103.3141715028915},{"x":69.46774594825453,"y":103.44889725286895},{"x":69.29784972,"y":103.56241828325167},{"x":69.11458950969751,"y":103.65279221773588},{"x":68.92110095035466,"y":103.71847273324614},{"x":68.72069468486694,"y":103.75833601795202},{"x":68.51679972000001,"y":103.7717},{"x":68.31290475513306,"y":103.75833601795202},{"x":68.11249848964535,"y":103.71847273324614},{"x":67.9190099303025,"y":103.65279221773588},{"x":67.73574972,"y":103.56241828325167},{"x":67.56585349174547,"y":103.44889725286895},{"x":67.41222821710849,"y":103.3141715028915},{"x":67.27750246713106,"y":103.16054622825452},{"x":67.16398143674833,"y":102.99065},{"x":67.07360750226412,"y":102.80738978969751},{"x":67.00792698675386,"y":102.61390123035464},{"x":66.96806370204797,"y":102.41349496486693},{"x":66.95469972000001,"y":102.2096},{"x":66.96806370204797,"y":102.00570503513306},{"x":67.00792698675386,"y":101.80529876964535},{"x":67.07360750226412,"y":101.6118102103025},{"x":67.16398143674833,"y":101.42855},{"x":67.27750246713106,"y":101.25865377174547},{"x":67.41222821710849,"y":101.10502849710849},{"x":67.56585349174547,"y":100.97030274713106},{"x":67.73574972,"y":100.85678171674832},{"x":67.9190099303025,"y":100.76640778226411},{"x":68.11249848964535,"y":100.70072726675384},{"x":68.31290475513306,"y":100.66086398204797},{"x":68.51679972000001,"y":100.6475},{"x":68.72069468486696,"y":100.66086398204797},{"x":68.92110095035466,"y":100.70072726675384},{"x":69.11458950969751,"y":100.76640778226411},{"x":69.29784972,"y":100.85678171674832},{"x":69.46774594825453,"y":100.97030274713106},{"x":69.62137122289151,"y":101.10502849710849},{"x":69.75609697286895,"y":101.25865377174547},{"x":69.86961800325167,"y":101.42855},{"x":69.95999193773588,"y":101.61181021030248},{"x":70.02567245324614,"y":101.80529876964535},{"x":70.06553573795203,"y":102.00570503513306},{"x":70.07889972000001,"y":102.2096}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":74.39689972000001,"y":102.2096},{"x":74.38353573795203,"y":102.41349496486693},{"x":74.34367245324616,"y":102.61390123035464},{"x":74.27799193773588,"y":102.80738978969751},{"x":74.18761800325167,"y":102.99065},{"x":74.07409697286894,"y":103.16054622825452},{"x":73.93937122289151,"y":103.3141715028915},{"x":73.78574594825453,"y":103.44889725286895},{"x":73.61584972,"y":103.56241828325167},{"x":73.43258950969752,"y":103.65279221773588},{"x":73.23910095035465,"y":103.71847273324614},{"x":73.03869468486694,"y":103.75833601795202},{"x":72.83479972,"y":103.7717},{"x":72.63090475513306,"y":103.75833601795202},{"x":72.43049848964534,"y":103.71847273324614},{"x":72.23700993030249,"y":103.65279221773588},{"x":72.05374972,"y":103.56241828325167},{"x":71.88385349174547,"y":103.44889725286895},{"x":71.73022821710849,"y":103.3141715028915},{"x":71.59550246713106,"y":103.16054622825452},{"x":71.48198143674833,"y":102.99065},{"x":71.39160750226412,"y":102.80738978969751},{"x":71.32592698675386,"y":102.61390123035464},{"x":71.28606370204797,"y":102.41349496486693},{"x":71.27269972,"y":102.2096},{"x":71.28606370204797,"y":102.00570503513306},{"x":71.32592698675386,"y":101.80529876964535},{"x":71.39160750226412,"y":101.6118102103025},{"x":71.48198143674833,"y":101.42855},{"x":71.59550246713106,"y":101.25865377174547},{"x":71.73022821710849,"y":101.10502849710849},{"x":71.88385349174547,"y":100.97030274713106},{"x":72.05374972,"y":100.85678171674832},{"x":72.23700993030249,"y":100.76640778226411},{"x":72.43049848964534,"y":100.70072726675384},{"x":72.63090475513306,"y":100.66086398204797},{"x":72.83479972,"y":100.6475},{"x":73.03869468486695,"y":100.66086398204797},{"x":73.23910095035465,"y":100.70072726675384},{"x":73.43258950969752,"y":100.76640778226411},{"x":73.61584972,"y":100.85678171674832},{"x":73.78574594825453,"y":100.97030274713106},{"x":73.93937122289151,"y":101.10502849710849},{"x":74.07409697286894,"y":101.25865377174547},{"x":74.18761800325167,"y":101.42855},{"x":74.27799193773588,"y":101.61181021030248},{"x":74.34367245324616,"y":101.80529876964535},{"x":74.38353573795203,"y":102.00570503513306},{"x":74.39689972000001,"y":102.2096}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":35.818800599999996,"y":83.42760048},{"x":35.816234063545224,"y":83.4667582593503},{"x":35.808578368331226,"y":83.50524603823932},{"x":35.795964505425665,"y":83.54240528009946},{"x":35.77860830152009,"y":83.57760017999999},{"x":35.75680672607536,"y":83.61022854344574},{"x":35.73093281009189,"y":83.63973209009188},{"x":35.70142926344575,"y":83.66560600607535},{"x":35.6688009,"y":83.68740758152008},{"x":35.63360600009946,"y":83.70476378542565},{"x":35.596446758239324,"y":83.71737764833121},{"x":35.557958979350296,"y":83.72503334354522},{"x":35.5188012,"y":83.72759988},{"x":35.479643420649694,"y":83.72503334354522},{"x":35.44115564176067,"y":83.71737764833121},{"x":35.40399639990053,"y":83.70476378542565},{"x":35.3688015,"y":83.68740758152008},{"x":35.33617313655424,"y":83.66560600607535},{"x":35.306669589908104,"y":83.63973209009188},{"x":35.280795673924636,"y":83.61022854344574},{"x":35.2589940984799,"y":83.57760017999999},{"x":35.241637894574325,"y":83.54240528009946},{"x":35.22902403166877,"y":83.50524603823932},{"x":35.22136833645477,"y":83.4667582593503},{"x":35.2188018,"y":83.42760048},{"x":35.22136833645477,"y":83.38844270064969},{"x":35.22902403166877,"y":83.34995492176067},{"x":35.241637894574325,"y":83.31279567990052},{"x":35.2589940984799,"y":83.27760078},{"x":35.280795673924636,"y":83.24497241655423},{"x":35.306669589908104,"y":83.2154688699081},{"x":35.33617313655424,"y":83.18959495392463},{"x":35.3688015,"y":83.16779337847991},{"x":35.40399639990053,"y":83.15043717457434},{"x":35.44115564176067,"y":83.13782331166877},{"x":35.479643420649694,"y":83.13016761645477},{"x":35.5188012,"y":83.12760107999999},{"x":35.557958979350296,"y":83.13016761645477},{"x":35.596446758239324,"y":83.13782331166877},{"x":35.63360600009946,"y":83.15043717457434},{"x":35.6688009,"y":83.16779337847991},{"x":35.70142926344575,"y":83.18959495392463},{"x":35.73093281009189,"y":83.2154688699081},{"x":35.75680672607536,"y":83.24497241655423},{"x":35.77860830152009,"y":83.27760078},{"x":35.795964505425665,"y":83.31279567990052},{"x":35.808578368331226,"y":83.34995492176067},{"x":35.816234063545224,"y":83.38844270064969},{"x":35.818800599999996,"y":83.42760048}]} strokeWidth={0.5999987999999999} />
      <silkscreenpath route={[{"x":33.39380164,"y":84.77760032},{"x":33.392732238945484,"y":84.79391622716422},{"x":33.38954233353047,"y":84.80995296463324},{"x":33.38428650392103,"y":84.82543613938273},{"x":33.377054678818965,"y":84.84010083},{"x":33.36797059675681,"y":84.85369611956276},{"x":33.357189688897236,"y":84.86598938889723},{"x":33.344896419562744,"y":84.87677029675682},{"x":33.33130113,"y":84.88585437881896},{"x":33.316636439382734,"y":84.89308620392103},{"x":33.301153264633236,"y":84.89834203353048},{"x":33.28511652716422,"y":84.90153193894548},{"x":33.26880062,"y":84.90260134},{"x":33.25248471283577,"y":84.90153193894548},{"x":33.23644797536676,"y":84.89834203353048},{"x":33.22096480061726,"y":84.89308620392103},{"x":33.20630011,"y":84.88585437881896},{"x":33.19270482043725,"y":84.87677029675682},{"x":33.180411551102765,"y":84.86598938889723},{"x":33.16963064324319,"y":84.85369611956276},{"x":33.16054656118103,"y":84.84010083},{"x":33.15331473607896,"y":84.82543613938273},{"x":33.14805890646952,"y":84.80995296463324},{"x":33.14486900105451,"y":84.79391622716422},{"x":33.1437996,"y":84.77760032},{"x":33.14486900105451,"y":84.76128441283578},{"x":33.14805890646952,"y":84.74524767536676},{"x":33.15331473607896,"y":84.72976450061726},{"x":33.16054656118103,"y":84.71509981},{"x":33.16963064324319,"y":84.70150452043725},{"x":33.180411551102765,"y":84.68921125110276},{"x":33.19270482043725,"y":84.67843034324318},{"x":33.20630011,"y":84.66934626118103},{"x":33.22096480061726,"y":84.66211443607897},{"x":33.23644797536676,"y":84.65685860646951},{"x":33.25248471283577,"y":84.65366870105451},{"x":33.26880062,"y":84.6525993},{"x":33.28511652716422,"y":84.65366870105451},{"x":33.301153264633236,"y":84.65685860646951},{"x":33.316636439382734,"y":84.66211443607897},{"x":33.33130113,"y":84.66934626118103},{"x":33.344896419562744,"y":84.67843034324318},{"x":33.357189688897236,"y":84.68921125110276},{"x":33.36797059675681,"y":84.70150452043725},{"x":33.377054678818965,"y":84.71509981},{"x":33.38428650392103,"y":84.72976450061726},{"x":33.38954233353047,"y":84.74524767536676},{"x":33.392732238945484,"y":84.76128441283578},{"x":33.39380164,"y":84.77760032}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":35.818800599999996,"y":67.42560048},{"x":35.816234063545224,"y":67.46475825935029},{"x":35.808578368331226,"y":67.50324603823933},{"x":35.795964505425665,"y":67.54040528009946},{"x":35.77860830152009,"y":67.57560018},{"x":35.75680672607536,"y":67.60822854344575},{"x":35.73093281009189,"y":67.63773209009189},{"x":35.70142926344575,"y":67.66360600607536},{"x":35.6688009,"y":67.68540758152008},{"x":35.63360600009946,"y":67.70276378542566},{"x":35.596446758239324,"y":67.71537764833121},{"x":35.557958979350296,"y":67.72303334354523},{"x":35.5188012,"y":67.72559988},{"x":35.479643420649694,"y":67.72303334354523},{"x":35.44115564176067,"y":67.71537764833121},{"x":35.40399639990053,"y":67.70276378542566},{"x":35.3688015,"y":67.68540758152008},{"x":35.33617313655424,"y":67.66360600607536},{"x":35.306669589908104,"y":67.63773209009189},{"x":35.280795673924636,"y":67.60822854344575},{"x":35.2589940984799,"y":67.57560018},{"x":35.241637894574325,"y":67.54040528009946},{"x":35.22902403166877,"y":67.50324603823933},{"x":35.22136833645477,"y":67.46475825935029},{"x":35.2188018,"y":67.42560048},{"x":35.22136833645477,"y":67.3864427006497},{"x":35.22902403166877,"y":67.34795492176066},{"x":35.241637894574325,"y":67.31079567990052},{"x":35.2589940984799,"y":67.27560078},{"x":35.280795673924636,"y":67.24297241655424},{"x":35.306669589908104,"y":67.2134688699081},{"x":35.33617313655424,"y":67.18759495392463},{"x":35.3688015,"y":67.1657933784799},{"x":35.40399639990053,"y":67.14843717457433},{"x":35.44115564176067,"y":67.13582331166877},{"x":35.479643420649694,"y":67.12816761645477},{"x":35.5188012,"y":67.12560108},{"x":35.557958979350296,"y":67.12816761645477},{"x":35.596446758239324,"y":67.13582331166877},{"x":35.63360600009946,"y":67.14843717457433},{"x":35.6688009,"y":67.1657933784799},{"x":35.70142926344575,"y":67.18759495392463},{"x":35.73093281009189,"y":67.2134688699081},{"x":35.75680672607536,"y":67.24297241655424},{"x":35.77860830152009,"y":67.27560078},{"x":35.795964505425665,"y":67.31079567990052},{"x":35.808578368331226,"y":67.34795492176066},{"x":35.816234063545224,"y":67.3864427006497},{"x":35.818800599999996,"y":67.42560048}]} strokeWidth={0.5999987999999999} />
      <silkscreenpath route={[{"x":33.39380164,"y":68.77560032},{"x":33.392732238945484,"y":68.79191622716422},{"x":33.38954233353047,"y":68.80795296463324},{"x":33.38428650392103,"y":68.82343613938274},{"x":33.377054678818965,"y":68.83810083},{"x":33.36797059675681,"y":68.85169611956275},{"x":33.357189688897236,"y":68.86398938889722},{"x":33.344896419562744,"y":68.87477029675682},{"x":33.33130113,"y":68.88385437881897},{"x":33.316636439382734,"y":68.89108620392103},{"x":33.301153264633236,"y":68.89634203353047},{"x":33.28511652716422,"y":68.89953193894549},{"x":33.26880062,"y":68.90060134},{"x":33.25248471283577,"y":68.89953193894549},{"x":33.23644797536676,"y":68.89634203353047},{"x":33.22096480061726,"y":68.89108620392103},{"x":33.20630011,"y":68.88385437881897},{"x":33.19270482043725,"y":68.87477029675682},{"x":33.180411551102765,"y":68.86398938889722},{"x":33.16963064324319,"y":68.85169611956275},{"x":33.16054656118103,"y":68.83810083},{"x":33.15331473607896,"y":68.82343613938274},{"x":33.14805890646952,"y":68.80795296463324},{"x":33.14486900105451,"y":68.79191622716422},{"x":33.1437996,"y":68.77560032},{"x":33.14486900105451,"y":68.75928441283578},{"x":33.14805890646952,"y":68.74324767536676},{"x":33.15331473607896,"y":68.72776450061727},{"x":33.16054656118103,"y":68.71309981},{"x":33.16963064324319,"y":68.69950452043724},{"x":33.180411551102765,"y":68.68721125110277},{"x":33.19270482043725,"y":68.67643034324318},{"x":33.20630011,"y":68.66734626118104},{"x":33.22096480061726,"y":68.66011443607897},{"x":33.23644797536676,"y":68.65485860646952},{"x":33.25248471283577,"y":68.65166870105452},{"x":33.26880062,"y":68.6505993},{"x":33.28511652716422,"y":68.65166870105452},{"x":33.301153264633236,"y":68.65485860646952},{"x":33.316636439382734,"y":68.66011443607897},{"x":33.33130113,"y":68.66734626118104},{"x":33.344896419562744,"y":68.67643034324318},{"x":33.357189688897236,"y":68.68721125110277},{"x":33.36797059675681,"y":68.69950452043724},{"x":33.377054678818965,"y":68.71309981},{"x":33.38428650392103,"y":68.72776450061727},{"x":33.38954233353047,"y":68.74324767536676},{"x":33.392732238945484,"y":68.75928441283578},{"x":33.39380164,"y":68.77560032}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":79.39040256,"y":45.09301624},{"x":79.37703857795202,"y":45.29691120486694},{"x":79.33717529324615,"y":45.497317470354645},{"x":79.27149477773588,"y":45.690806029697505},{"x":79.18112084325168,"y":45.87406624},{"x":79.06759981286895,"y":46.04396246825452},{"x":78.93287406289151,"y":46.1975877428915},{"x":78.77924878825453,"y":46.332313492868934},{"x":78.60935256,"y":46.44583452325166},{"x":78.42609234969751,"y":46.536208457735874},{"x":78.23260379035464,"y":46.60188897324615},{"x":78.03219752486693,"y":46.64175225795202},{"x":77.82830256,"y":46.65511624},{"x":77.62440759513306,"y":46.64175225795202},{"x":77.42400132964535,"y":46.60188897324615},{"x":77.23051277030248,"y":46.536208457735874},{"x":77.04725256,"y":46.44583452325166},{"x":76.87735633174547,"y":46.332313492868934},{"x":76.7237310571085,"y":46.1975877428915},{"x":76.58900530713106,"y":46.04396246825452},{"x":76.47548427674832,"y":45.87406624},{"x":76.38511034226411,"y":45.690806029697505},{"x":76.31942982675385,"y":45.497317470354645},{"x":76.27956654204797,"y":45.29691120486694},{"x":76.26620256,"y":45.09301624},{"x":76.27956654204797,"y":44.88912127513305},{"x":76.31942982675385,"y":44.68871500964535},{"x":76.38511034226411,"y":44.49522645030249},{"x":76.47548427674832,"y":44.31196624},{"x":76.58900530713106,"y":44.142070011745474},{"x":76.7237310571085,"y":43.98844473710849},{"x":76.87735633174547,"y":43.85371898713106},{"x":77.04725256,"y":43.740197956748325},{"x":77.2305127703025,"y":43.64982402226411},{"x":77.42400132964535,"y":43.58414350675384},{"x":77.62440759513306,"y":43.544280222047966},{"x":77.82830256,"y":43.530916239999996},{"x":78.03219752486694,"y":43.544280222047966},{"x":78.23260379035464,"y":43.58414350675384},{"x":78.42609234969751,"y":43.64982402226411},{"x":78.60935256,"y":43.740197956748325},{"x":78.77924878825453,"y":43.85371898713106},{"x":78.93287406289151,"y":43.98844473710849},{"x":79.06759981286895,"y":44.142070011745474},{"x":79.18112084325168,"y":44.31196624},{"x":79.27149477773588,"y":44.49522645030249},{"x":79.33717529324615,"y":44.68871500964535},{"x":79.37703857795202,"y":44.88912127513305},{"x":79.39040256,"y":45.09301624}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":51.958402559999996,"y":45.09301624},{"x":51.945038577952026,"y":45.29691120486694},{"x":51.90517529324615,"y":45.497317470354645},{"x":51.83949477773588,"y":45.690806029697505},{"x":51.74912084325167,"y":45.87406624},{"x":51.63559981286893,"y":46.04396246825452},{"x":51.500874062891505,"y":46.1975877428915},{"x":51.34724878825452,"y":46.332313492868934},{"x":51.177352559999996,"y":46.44583452325166},{"x":50.9940923496975,"y":46.536208457735874},{"x":50.80060379035464,"y":46.60188897324615},{"x":50.600197524866935,"y":46.64175225795202},{"x":50.396302559999995,"y":46.65511624},{"x":50.192407595133055,"y":46.64175225795202},{"x":49.99200132964535,"y":46.60188897324615},{"x":49.79851277030249,"y":46.536208457735874},{"x":49.615252559999995,"y":46.44583452325166},{"x":49.44535633174547,"y":46.332313492868934},{"x":49.291731057108485,"y":46.1975877428915},{"x":49.15700530713106,"y":46.04396246825452},{"x":49.04348427674832,"y":45.87406624},{"x":48.95311034226412,"y":45.690806029697505},{"x":48.88742982675384,"y":45.497317470354645},{"x":48.847566542047964,"y":45.29691120486694},{"x":48.834202559999994,"y":45.09301624},{"x":48.847566542047964,"y":44.88912127513305},{"x":48.88742982675384,"y":44.68871500964535},{"x":48.95311034226412,"y":44.49522645030249},{"x":49.04348427674832,"y":44.31196624},{"x":49.15700530713106,"y":44.142070011745474},{"x":49.291731057108485,"y":43.98844473710849},{"x":49.44535633174547,"y":43.85371898713106},{"x":49.615252559999995,"y":43.740197956748325},{"x":49.79851277030249,"y":43.64982402226411},{"x":49.99200132964535,"y":43.58414350675384},{"x":50.192407595133055,"y":43.544280222047966},{"x":50.396302559999995,"y":43.530916239999996},{"x":50.600197524866935,"y":43.544280222047966},{"x":50.80060379035464,"y":43.58414350675384},{"x":50.9940923496975,"y":43.64982402226411},{"x":51.177352559999996,"y":43.740197956748325},{"x":51.34724878825452,"y":43.85371898713106},{"x":51.500874062891505,"y":43.98844473710849},{"x":51.63559981286893,"y":44.142070011745474},{"x":51.74912084325167,"y":44.31196624},{"x":51.83949477773588,"y":44.49522645030249},{"x":51.90517529324615,"y":44.68871500964535},{"x":51.945038577952026,"y":44.88912127513305},{"x":51.958402559999996,"y":45.09301624}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":70.24640256,"y":45.09301624},{"x":70.23303857795203,"y":45.29691120486694},{"x":70.19317529324614,"y":45.497317470354645},{"x":70.12749477773588,"y":45.690806029697505},{"x":70.03712084325167,"y":45.87406624},{"x":69.92359981286894,"y":46.04396246825452},{"x":69.78887406289151,"y":46.1975877428915},{"x":69.63524878825453,"y":46.332313492868934},{"x":69.46535256,"y":46.44583452325166},{"x":69.2820923496975,"y":46.536208457735874},{"x":69.08860379035465,"y":46.60188897324615},{"x":68.88819752486694,"y":46.64175225795202},{"x":68.68430256,"y":46.65511624},{"x":68.48040759513306,"y":46.64175225795202},{"x":68.28000132964534,"y":46.60188897324615},{"x":68.08651277030249,"y":46.536208457735874},{"x":67.90325256,"y":46.44583452325166},{"x":67.73335633174547,"y":46.332313492868934},{"x":67.57973105710849,"y":46.1975877428915},{"x":67.44500530713105,"y":46.04396246825452},{"x":67.33148427674833,"y":45.87406624},{"x":67.24111034226412,"y":45.690806029697505},{"x":67.17542982675386,"y":45.497317470354645},{"x":67.13556654204797,"y":45.29691120486694},{"x":67.12220256,"y":45.09301624},{"x":67.13556654204797,"y":44.88912127513305},{"x":67.17542982675386,"y":44.68871500964535},{"x":67.24111034226412,"y":44.49522645030249},{"x":67.33148427674833,"y":44.31196624},{"x":67.44500530713105,"y":44.142070011745474},{"x":67.57973105710849,"y":43.98844473710849},{"x":67.73335633174547,"y":43.85371898713106},{"x":67.90325256,"y":43.740197956748325},{"x":68.0865127703025,"y":43.64982402226411},{"x":68.28000132964534,"y":43.58414350675384},{"x":68.48040759513306,"y":43.544280222047966},{"x":68.68430256,"y":43.530916239999996},{"x":68.88819752486695,"y":43.544280222047966},{"x":69.08860379035465,"y":43.58414350675384},{"x":69.2820923496975,"y":43.64982402226411},{"x":69.46535256,"y":43.740197956748325},{"x":69.63524878825453,"y":43.85371898713106},{"x":69.78887406289151,"y":43.98844473710849},{"x":69.92359981286894,"y":44.142070011745474},{"x":70.03712084325167,"y":44.31196624},{"x":70.12749477773588,"y":44.49522645030249},{"x":70.19317529324614,"y":44.68871500964535},{"x":70.23303857795203,"y":44.88912127513305},{"x":70.24640256,"y":45.09301624}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":61.10240256,"y":45.09301624},{"x":61.08903857795203,"y":45.29691120486694},{"x":61.04917529324615,"y":45.497317470354645},{"x":60.983494777735885,"y":45.690806029697505},{"x":60.89312084325167,"y":45.87406624},{"x":60.779599812868945,"y":46.04396246825452},{"x":60.64487406289151,"y":46.1975877428915},{"x":60.49124878825453,"y":46.332313492868934},{"x":60.32135256,"y":46.44583452325166},{"x":60.138092349697516,"y":46.536208457735874},{"x":59.944603790354655,"y":46.60188897324615},{"x":59.74419752486694,"y":46.64175225795202},{"x":59.54030256,"y":46.65511624},{"x":59.33640759513306,"y":46.64175225795202},{"x":59.136001329645346,"y":46.60188897324615},{"x":58.942512770302486,"y":46.536208457735874},{"x":58.75925256,"y":46.44583452325166},{"x":58.58935633174547,"y":46.332313492868934},{"x":58.43573105710849,"y":46.1975877428915},{"x":58.30100530713106,"y":46.04396246825452},{"x":58.18748427674833,"y":45.87406624},{"x":58.097110342264116,"y":45.690806029697505},{"x":58.03142982675385,"y":45.497317470354645},{"x":57.99156654204797,"y":45.29691120486694},{"x":57.97820256,"y":45.09301624},{"x":57.99156654204797,"y":44.88912127513305},{"x":58.03142982675385,"y":44.68871500964535},{"x":58.097110342264116,"y":44.49522645030249},{"x":58.18748427674833,"y":44.31196624},{"x":58.30100530713106,"y":44.142070011745474},{"x":58.43573105710849,"y":43.98844473710849},{"x":58.58935633174547,"y":43.85371898713106},{"x":58.75925256,"y":43.740197956748325},{"x":58.9425127703025,"y":43.64982402226411},{"x":59.136001329645346,"y":43.58414350675384},{"x":59.33640759513306,"y":43.544280222047966},{"x":59.54030256,"y":43.530916239999996},{"x":59.74419752486695,"y":43.544280222047966},{"x":59.944603790354655,"y":43.58414350675384},{"x":60.138092349697516,"y":43.64982402226411},{"x":60.32135256,"y":43.740197956748325},{"x":60.49124878825453,"y":43.85371898713106},{"x":60.64487406289151,"y":43.98844473710849},{"x":60.779599812868945,"y":44.142070011745474},{"x":60.89312084325167,"y":44.31196624},{"x":60.983494777735885,"y":44.49522645030249},{"x":61.04917529324615,"y":44.68871500964535},{"x":61.08903857795203,"y":44.88912127513305},{"x":61.10240256,"y":45.09301624}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":37.814801179999996,"y":75.97760013999999},{"x":37.81373177894549,"y":75.9939160471642},{"x":37.810541873530475,"y":76.00995278463323},{"x":37.805286043921036,"y":76.02543595938273},{"x":37.79805421881897,"y":76.04010065},{"x":37.78897013675681,"y":76.05369593956274},{"x":37.77818922889723,"y":76.06598920889722},{"x":37.76589595956275,"y":76.0767701167568},{"x":37.75230067,"y":76.08585419881896},{"x":37.73763597938274,"y":76.09308602392103},{"x":37.72215280463324,"y":76.09834185353047},{"x":37.706116067164224,"y":76.10153175894548},{"x":37.68980016,"y":76.10260115999999},{"x":37.67348425283578,"y":76.10153175894548},{"x":37.65744751536676,"y":76.09834185353047},{"x":37.641964340617264,"y":76.09308602392103},{"x":37.62729965,"y":76.08585419881896},{"x":37.613704360437254,"y":76.0767701167568},{"x":37.60141109110276,"y":76.06598920889722},{"x":37.590630183243185,"y":76.05369593956274},{"x":37.58154610118103,"y":76.04010065},{"x":37.574314276078965,"y":76.02543595938273},{"x":37.569058446469526,"y":76.00995278463323},{"x":37.56586854105451,"y":75.9939160471642},{"x":37.56479914,"y":75.97760013999999},{"x":37.56586854105451,"y":75.96128423283578},{"x":37.569058446469526,"y":75.94524749536676},{"x":37.574314276078965,"y":75.92976432061725},{"x":37.58154610118103,"y":75.91509963},{"x":37.590630183243185,"y":75.90150434043724},{"x":37.60141109110276,"y":75.88921107110276},{"x":37.613704360437254,"y":75.87843016324318},{"x":37.62729965,"y":75.86934608118102},{"x":37.641964340617264,"y":75.86211425607895},{"x":37.65744751536676,"y":75.85685842646951},{"x":37.67348425283578,"y":75.8536685210545},{"x":37.68980016,"y":75.85259912},{"x":37.706116067164224,"y":75.8536685210545},{"x":37.72215280463324,"y":75.85685842646951},{"x":37.73763597938274,"y":75.86211425607895},{"x":37.75230067,"y":75.86934608118102},{"x":37.76589595956275,"y":75.87843016324318},{"x":37.77818922889723,"y":75.88921107110276},{"x":37.78897013675681,"y":75.90150434043724},{"x":37.79805421881897,"y":75.91509963},{"x":37.805286043921036,"y":75.92976432061725},{"x":37.810541873530475,"y":75.94524749536676},{"x":37.81373177894549,"y":75.96128423283578},{"x":37.814801179999996,"y":75.97760013999999}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":99.78750679999999,"y":51.60121252},{"x":99.7866512878484,"y":51.61426511311676},{"x":99.78409938944372,"y":51.627094372746434},{"x":99.77989476847522,"y":51.639480786699814},{"x":99.77410936717335,"y":51.65121241999999},{"x":99.76684217535845,"y":51.66208854114858},{"x":99.7582175366973,"y":51.67192305669729},{"x":99.74838302114858,"y":51.68054769535845},{"x":99.7375069,"y":51.68781488717336},{"x":99.72577526669981,"y":51.69360028847522},{"x":99.71338885274643,"y":51.69780490944374},{"x":99.70055959311676,"y":51.70035680784841},{"x":99.687507,"y":51.701212319999996},{"x":99.67445440688323,"y":51.70035680784841},{"x":99.66162514725355,"y":51.69780490944374},{"x":99.64923873330018,"y":51.69360028847522},{"x":99.6375071,"y":51.68781488717336},{"x":99.62663097885141,"y":51.68054769535845},{"x":99.61679646330269,"y":51.67192305669729},{"x":99.60817182464154,"y":51.66208854114858},{"x":99.60090463282664,"y":51.65121241999999},{"x":99.59511923152478,"y":51.639480786699814},{"x":99.59091461055625,"y":51.627094372746434},{"x":99.58836271215159,"y":51.61426511311676},{"x":99.58750719999999,"y":51.60121252},{"x":99.58836271215159,"y":51.58815992688323},{"x":99.59091461055625,"y":51.57533066725355},{"x":99.59511923152478,"y":51.562944253300174},{"x":99.60090463282664,"y":51.551212619999994},{"x":99.60817182464154,"y":51.54033649885141},{"x":99.61679646330269,"y":51.5305019833027},{"x":99.62663097885141,"y":51.52187734464154},{"x":99.6375071,"y":51.514610152826634},{"x":99.64923873330018,"y":51.50882475152478},{"x":99.66162514725355,"y":51.504620130556255},{"x":99.67445440688323,"y":51.502068232151586},{"x":99.687507,"y":51.50121272},{"x":99.70055959311676,"y":51.502068232151586},{"x":99.71338885274643,"y":51.504620130556255},{"x":99.72577526669981,"y":51.50882475152478},{"x":99.7375069,"y":51.514610152826634},{"x":99.74838302114858,"y":51.52187734464154},{"x":99.7582175366973,"y":51.5305019833027},{"x":99.76684217535845,"y":51.54033649885141},{"x":99.77410936717335,"y":51.551212619999994},{"x":99.77989476847522,"y":51.562944253300174},{"x":99.78409938944372,"y":51.57533066725355},{"x":99.7866512878484,"y":51.58815992688323},{"x":99.78750679999999,"y":51.60121252}]} strokeWidth={0.70000114} />
      <silkscreenpath route={[{"x":96.57079999999999,"y":72.49159999999999},{"x":96.5699444878484,"y":72.50465259311677},{"x":96.56739258944374,"y":72.51748185274644},{"x":96.56318796847522,"y":72.52986826669982},{"x":96.55740256717336,"y":72.5415999},{"x":96.55013537535845,"y":72.55247602114858},{"x":96.5415107366973,"y":72.5623105366973},{"x":96.53167622114859,"y":72.57093517535844},{"x":96.5208001,"y":72.57820236717336},{"x":96.50906846669982,"y":72.58398776847521},{"x":96.49668205274645,"y":72.58819238944373},{"x":96.48385279311677,"y":72.5907442878484},{"x":96.4708002,"y":72.5915998},{"x":96.45774760688323,"y":72.5907442878484},{"x":96.44491834725355,"y":72.58819238944373},{"x":96.43253193330018,"y":72.58398776847521},{"x":96.4208003,"y":72.57820236717336},{"x":96.40992417885141,"y":72.57093517535844},{"x":96.4000896633027,"y":72.5623105366973},{"x":96.39146502464155,"y":72.55247602114858},{"x":96.38419783282664,"y":72.5415999},{"x":96.37841243152478,"y":72.52986826669982},{"x":96.37420781055626,"y":72.51748185274644},{"x":96.3716559121516,"y":72.50465259311677},{"x":96.37080040000001,"y":72.49159999999999},{"x":96.3716559121516,"y":72.47854740688322},{"x":96.37420781055626,"y":72.46571814725355},{"x":96.37841243152478,"y":72.45333173330017},{"x":96.38419783282664,"y":72.4416001},{"x":96.39146502464155,"y":72.43072397885142},{"x":96.4000896633027,"y":72.4208894633027},{"x":96.40992417885141,"y":72.41226482464154},{"x":96.4208003,"y":72.40499763282664},{"x":96.43253193330018,"y":72.39921223152477},{"x":96.44491834725355,"y":72.39500761055626},{"x":96.45774760688323,"y":72.39245571215159},{"x":96.4708002,"y":72.3916002},{"x":96.48385279311677,"y":72.39245571215159},{"x":96.49668205274645,"y":72.39500761055626},{"x":96.50906846669982,"y":72.39921223152477},{"x":96.5208001,"y":72.40499763282664},{"x":96.53167622114859,"y":72.41226482464154},{"x":96.5415107366973,"y":72.4208894633027},{"x":96.55013537535845,"y":72.43072397885142},{"x":96.55740256717336,"y":72.4416001},{"x":96.56318796847522,"y":72.45333173330017},{"x":96.56739258944374,"y":72.46571814725355},{"x":96.5699444878484,"y":72.47854740688322},{"x":96.57079999999999,"y":72.49159999999999}]} strokeWidth={0.70000114} />
      <silkscreenpath route={[{"x":35.818800599999996,"y":91.04760048},{"x":35.816234063545224,"y":91.08675825935029},{"x":35.808578368331226,"y":91.12524603823933},{"x":35.795964505425665,"y":91.16240528009946},{"x":35.77860830152009,"y":91.19760018},{"x":35.75680672607536,"y":91.23022854344575},{"x":35.73093281009189,"y":91.25973209009189},{"x":35.70142926344575,"y":91.28560600607535},{"x":35.6688009,"y":91.30740758152008},{"x":35.63360600009946,"y":91.32476378542566},{"x":35.596446758239324,"y":91.33737764833121},{"x":35.557958979350296,"y":91.34503334354523},{"x":35.5188012,"y":91.34759987999999},{"x":35.479643420649694,"y":91.34503334354523},{"x":35.44115564176067,"y":91.33737764833121},{"x":35.40399639990053,"y":91.32476378542566},{"x":35.3688015,"y":91.30740758152008},{"x":35.33617313655424,"y":91.28560600607535},{"x":35.306669589908104,"y":91.25973209009189},{"x":35.280795673924636,"y":91.23022854344575},{"x":35.2589940984799,"y":91.19760018},{"x":35.241637894574325,"y":91.16240528009946},{"x":35.22902403166877,"y":91.12524603823933},{"x":35.22136833645477,"y":91.08675825935029},{"x":35.2188018,"y":91.04760048},{"x":35.22136833645477,"y":91.0084427006497},{"x":35.22902403166877,"y":90.96995492176066},{"x":35.241637894574325,"y":90.93279567990052},{"x":35.2589940984799,"y":90.89760077999999},{"x":35.280795673924636,"y":90.86497241655424},{"x":35.306669589908104,"y":90.8354688699081},{"x":35.33617313655424,"y":90.80959495392463},{"x":35.3688015,"y":90.7877933784799},{"x":35.40399639990053,"y":90.77043717457433},{"x":35.44115564176067,"y":90.75782331166877},{"x":35.479643420649694,"y":90.75016761645477},{"x":35.5188012,"y":90.74760108},{"x":35.557958979350296,"y":90.75016761645477},{"x":35.596446758239324,"y":90.75782331166877},{"x":35.63360600009946,"y":90.77043717457433},{"x":35.6688009,"y":90.7877933784799},{"x":35.70142926344575,"y":90.80959495392463},{"x":35.73093281009189,"y":90.8354688699081},{"x":35.75680672607536,"y":90.86497241655424},{"x":35.77860830152009,"y":90.89760077999999},{"x":35.795964505425665,"y":90.93279567990052},{"x":35.808578368331226,"y":90.96995492176066},{"x":35.816234063545224,"y":91.0084427006497},{"x":35.818800599999996,"y":91.04760048}]} strokeWidth={0.5999987999999999} />
      <silkscreenpath route={[{"x":33.39380164,"y":92.39760032},{"x":33.392732238945484,"y":92.41391622716422},{"x":33.38954233353047,"y":92.42995296463324},{"x":33.38428650392103,"y":92.44543613938274},{"x":33.377054678818965,"y":92.46010083},{"x":33.36797059675681,"y":92.47369611956275},{"x":33.357189688897236,"y":92.48598938889722},{"x":33.344896419562744,"y":92.49677029675682},{"x":33.33130113,"y":92.50585437881897},{"x":33.316636439382734,"y":92.51308620392103},{"x":33.301153264633236,"y":92.51834203353047},{"x":33.28511652716422,"y":92.52153193894549},{"x":33.26880062,"y":92.52260134},{"x":33.25248471283577,"y":92.52153193894549},{"x":33.23644797536676,"y":92.51834203353047},{"x":33.22096480061726,"y":92.51308620392103},{"x":33.20630011,"y":92.50585437881897},{"x":33.19270482043725,"y":92.49677029675682},{"x":33.180411551102765,"y":92.48598938889722},{"x":33.16963064324319,"y":92.47369611956275},{"x":33.16054656118103,"y":92.46010083},{"x":33.15331473607896,"y":92.44543613938274},{"x":33.14805890646952,"y":92.42995296463324},{"x":33.14486900105451,"y":92.41391622716422},{"x":33.1437996,"y":92.39760032},{"x":33.14486900105451,"y":92.38128441283578},{"x":33.14805890646952,"y":92.36524767536676},{"x":33.15331473607896,"y":92.34976450061727},{"x":33.16054656118103,"y":92.33509981},{"x":33.16963064324319,"y":92.32150452043724},{"x":33.180411551102765,"y":92.30921125110277},{"x":33.19270482043725,"y":92.29843034324318},{"x":33.20630011,"y":92.28934626118104},{"x":33.22096480061726,"y":92.28211443607897},{"x":33.23644797536676,"y":92.27685860646952},{"x":33.25248471283577,"y":92.2736687010545},{"x":33.26880062,"y":92.2725993},{"x":33.28511652716422,"y":92.2736687010545},{"x":33.301153264633236,"y":92.27685860646952},{"x":33.316636439382734,"y":92.28211443607897},{"x":33.33130113,"y":92.28934626118104},{"x":33.344896419562744,"y":92.29843034324318},{"x":33.357189688897236,"y":92.30921125110277},{"x":33.36797059675681,"y":92.32150452043724},{"x":33.377054678818965,"y":92.33509981},{"x":33.38428650392103,"y":92.34976450061727},{"x":33.38954233353047,"y":92.36524767536676},{"x":33.392732238945484,"y":92.38128441283578},{"x":33.39380164,"y":92.39760032}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":69.54244156,"y":88.66059992},{"x":69.54137215894548,"y":88.67691582716421},{"x":69.53818225353048,"y":88.69295256463323},{"x":69.53292642392103,"y":88.70843573938272},{"x":69.52569459881896,"y":88.72310042999999},{"x":69.51661051675681,"y":88.73669571956275},{"x":69.50582960889723,"y":88.74898898889722},{"x":69.49353633956275,"y":88.75976989675681},{"x":69.47994105,"y":88.76885397881897},{"x":69.46527635938273,"y":88.77608580392102},{"x":69.44979318463324,"y":88.78134163353047},{"x":69.43375644716421,"y":88.78453153894549},{"x":69.41744054,"y":88.78560094},{"x":69.40112463283577,"y":88.78453153894549},{"x":69.38508789536675,"y":88.78134163353047},{"x":69.36960472061726,"y":88.77608580392102},{"x":69.35494003,"y":88.76885397881897},{"x":69.34134474043725,"y":88.75976989675681},{"x":69.32905147110277,"y":88.74898898889722},{"x":69.31827056324317,"y":88.73669571956275},{"x":69.30918648118103,"y":88.72310042999999},{"x":69.30195465607896,"y":88.70843573938272},{"x":69.29669882646951,"y":88.69295256463323},{"x":69.29350892105451,"y":88.67691582716421},{"x":69.29243952,"y":88.66059992},{"x":69.29350892105451,"y":88.64428401283578},{"x":69.29669882646951,"y":88.62824727536675},{"x":69.30195465607896,"y":88.61276410061726},{"x":69.30918648118103,"y":88.59809940999999},{"x":69.31827056324317,"y":88.58450412043724},{"x":69.32905147110277,"y":88.57221085110277},{"x":69.34134474043725,"y":88.56142994324317},{"x":69.35494003,"y":88.55234586118102},{"x":69.36960472061726,"y":88.54511403607896},{"x":69.38508789536675,"y":88.53985820646952},{"x":69.40112463283577,"y":88.5366683010545},{"x":69.41744054,"y":88.5355989},{"x":69.43375644716421,"y":88.5366683010545},{"x":69.44979318463324,"y":88.53985820646952},{"x":69.46527635938273,"y":88.54511403607896},{"x":69.47994105,"y":88.55234586118102},{"x":69.49353633956275,"y":88.56142994324317},{"x":69.50582960889723,"y":88.57221085110277},{"x":69.51661051675681,"y":88.58450412043724},{"x":69.52569459881896,"y":88.59809940999999},{"x":69.53292642392103,"y":88.61276410061726},{"x":69.53818225353048,"y":88.62824727536675},{"x":69.54137215894548,"y":88.64428401283578},{"x":69.54244156,"y":88.66059992}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":87.93544261999999,"y":96.31922316},{"x":87.93437321894548,"y":96.33553906716422},{"x":87.93118331353047,"y":96.35157580463324},{"x":87.92592748392103,"y":96.36705897938273},{"x":87.91869565881896,"y":96.38172367},{"x":87.9096115767568,"y":96.39531895956276},{"x":87.89883066889722,"y":96.40761222889724},{"x":87.88653739956274,"y":96.41839313675682},{"x":87.87294211,"y":96.42747721881896},{"x":87.85827741938273,"y":96.43470904392103},{"x":87.84279424463323,"y":96.43996487353049},{"x":87.8267575071642,"y":96.44315477894548},{"x":87.81044159999999,"y":96.44422418},{"x":87.79412569283578,"y":96.44315477894548},{"x":87.77808895536675,"y":96.43996487353049},{"x":87.76260578061725,"y":96.43470904392103},{"x":87.74794109,"y":96.42747721881896},{"x":87.73434580043724,"y":96.41839313675682},{"x":87.72205253110276,"y":96.40761222889724},{"x":87.71127162324318,"y":96.39531895956276},{"x":87.70218754118102,"y":96.38172367},{"x":87.69495571607895,"y":96.36705897938273},{"x":87.68969988646951,"y":96.35157580463324},{"x":87.6865099810545,"y":96.33553906716422},{"x":87.68544057999999,"y":96.31922316},{"x":87.6865099810545,"y":96.30290725283578},{"x":87.68969988646951,"y":96.28687051536676},{"x":87.69495571607895,"y":96.27138734061727},{"x":87.70218754118102,"y":96.25672265},{"x":87.71127162324318,"y":96.24312736043724},{"x":87.72205253110276,"y":96.23083409110276},{"x":87.73434580043724,"y":96.22005318324318},{"x":87.74794109,"y":96.21096910118104},{"x":87.76260578061725,"y":96.20373727607897},{"x":87.77808895536675,"y":96.19848144646951},{"x":87.79412569283578,"y":96.19529154105452},{"x":87.81044159999999,"y":96.19422214},{"x":87.8267575071642,"y":96.19529154105452},{"x":87.84279424463323,"y":96.19848144646951},{"x":87.85827741938273,"y":96.20373727607897},{"x":87.87294211,"y":96.21096910118104},{"x":87.88653739956274,"y":96.22005318324318},{"x":87.89883066889722,"y":96.23083409110276},{"x":87.9096115767568,"y":96.24312736043724},{"x":87.91869565881896,"y":96.25672265},{"x":87.92592748392103,"y":96.27138734061727},{"x":87.93118331353047,"y":96.28687051536676},{"x":87.93437321894548,"y":96.30290725283578},{"x":87.93544261999999,"y":96.31922316}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":44.15463356,"y":53.07918772},{"x":44.15206702354523,"y":53.1183454993503},{"x":44.14441132833122,"y":53.156833278239326},{"x":44.13179746542567,"y":53.19399252009947},{"x":44.11444126152009,"y":53.229187419999995},{"x":44.092639686075366,"y":53.261815783445755},{"x":44.06676577009189,"y":53.291319330091895},{"x":44.03726222344576,"y":53.31719324607536},{"x":44.00463386,"y":53.33899482152008},{"x":43.96943896009947,"y":53.35635102542566},{"x":43.93227971823933,"y":53.36896488833122},{"x":43.8937919393503,"y":53.376620583545225},{"x":43.85463416,"y":53.379187120000005},{"x":43.8154763806497,"y":53.376620583545225},{"x":43.77698860176067,"y":53.36896488833122},{"x":43.73982935990053,"y":53.35635102542566},{"x":43.70463446,"y":53.33899482152008},{"x":43.67200609655424,"y":53.31719324607536},{"x":43.64250254990811,"y":53.291319330091895},{"x":43.616628633924634,"y":53.261815783445755},{"x":43.59482705847991,"y":53.229187419999995},{"x":43.57747085457433,"y":53.19399252009947},{"x":43.564856991668776,"y":53.156833278239326},{"x":43.55720129645478,"y":53.1183454993503},{"x":43.55463476,"y":53.07918772},{"x":43.55720129645478,"y":53.040029940649696},{"x":43.564856991668776,"y":53.001542161760675},{"x":43.57747085457433,"y":52.96438291990053},{"x":43.59482705847991,"y":52.929188020000005},{"x":43.616628633924634,"y":52.896559656554246},{"x":43.64250254990811,"y":52.867056109908106},{"x":43.67200609655424,"y":52.84118219392464},{"x":43.70463446,"y":52.81938061847991},{"x":43.73982935990053,"y":52.80202441457433},{"x":43.77698860176067,"y":52.78941055166878},{"x":43.8154763806497,"y":52.781754856454775},{"x":43.85463416,"y":52.779188319999996},{"x":43.8937919393503,"y":52.781754856454775},{"x":43.93227971823933,"y":52.78941055166878},{"x":43.96943896009947,"y":52.80202441457433},{"x":44.00463386,"y":52.81938061847991},{"x":44.03726222344576,"y":52.84118219392464},{"x":44.06676577009189,"y":52.867056109908106},{"x":44.092639686075366,"y":52.896559656554246},{"x":44.11444126152009,"y":52.929188020000005},{"x":44.13179746542567,"y":52.96438291990053},{"x":44.14441132833122,"y":53.001542161760675},{"x":44.15206702354523,"y":53.040029940649696},{"x":44.15463356,"y":53.07918772}]} strokeWidth={0.5999987999999999} />
      <silkscreenpath route={[{"x":41.1796357,"y":54.33418901999999},{"x":41.17856629894548,"y":54.35050492716421},{"x":41.17537639353048,"y":54.36654166463323},{"x":41.17012056392103,"y":54.38202483938273},{"x":41.162888738818964,"y":54.39668952999999},{"x":41.15380465675681,"y":54.41028481956274},{"x":41.143023748897235,"y":54.422578088897225},{"x":41.13073047956274,"y":54.43335899675681},{"x":41.11713519,"y":54.44244307881896},{"x":41.10247049938273,"y":54.44967490392103},{"x":41.08698732463324,"y":54.454930733530475},{"x":41.07095058716422,"y":54.45812063894548},{"x":41.05463468,"y":54.45919003999999},{"x":41.03831877283577,"y":54.45812063894548},{"x":41.02228203536676,"y":54.454930733530475},{"x":41.006798860617266,"y":54.44967490392103},{"x":40.99213417,"y":54.44244307881896},{"x":40.978538880437256,"y":54.43335899675681},{"x":40.966245611102764,"y":54.422578088897225},{"x":40.95546470324319,"y":54.41028481956274},{"x":40.946380621181035,"y":54.39668952999999},{"x":40.93914879607897,"y":54.38202483938273},{"x":40.93389296646952,"y":54.36654166463323},{"x":40.93070306105451,"y":54.35050492716421},{"x":40.92963366,"y":54.33418901999999},{"x":40.93070306105451,"y":54.31787311283578},{"x":40.93389296646952,"y":54.301836375366754},{"x":40.93914879607897,"y":54.286353200617256},{"x":40.946380621181035,"y":54.27168850999999},{"x":40.95546470324319,"y":54.25809322043724},{"x":40.966245611102764,"y":54.24579995110276},{"x":40.978538880437256,"y":54.23501904324318},{"x":40.99213417,"y":54.225934961181025},{"x":41.006798860617266,"y":54.21870313607896},{"x":41.02228203536676,"y":54.21344730646951},{"x":41.03831877283577,"y":54.210257401054506},{"x":41.05463468,"y":54.20918799999999},{"x":41.07095058716422,"y":54.210257401054506},{"x":41.08698732463324,"y":54.21344730646951},{"x":41.10247049938273,"y":54.21870313607896},{"x":41.11713519,"y":54.225934961181025},{"x":41.13073047956274,"y":54.23501904324318},{"x":41.143023748897235,"y":54.24579995110276},{"x":41.15380465675681,"y":54.25809322043724},{"x":41.162888738818964,"y":54.27168850999999},{"x":41.17012056392103,"y":54.286353200617256},{"x":41.17537639353048,"y":54.301836375366754},{"x":41.17856629894548,"y":54.31787311283578},{"x":41.1796357,"y":54.33418901999999}]} strokeWidth={0.24999949999999999} />
      <silkscreenpath route={[{"x":103.97489999999999,"y":48.48040596},{"x":103.96153601795203,"y":48.68430092486694},{"x":103.92167273324614,"y":48.884707190354646},{"x":103.85599221773587,"y":49.07819574969751},{"x":103.76561828325167,"y":49.26145596},{"x":103.65209725286894,"y":49.43135218825452},{"x":103.5173715028915,"y":49.58497746289151},{"x":103.36374622825453,"y":49.719703212868936},{"x":103.19385,"y":49.83322424325167},{"x":103.0105897896975,"y":49.92359817773588},{"x":102.81710123035465,"y":49.989278693246156},{"x":102.61669496486694,"y":50.02914197795203},{"x":102.41279999999999,"y":50.04250596},{"x":102.20890503513306,"y":50.02914197795203},{"x":102.00849876964534,"y":49.989278693246156},{"x":101.81501021030249,"y":49.92359817773588},{"x":101.63175,"y":49.83322424325167},{"x":101.46185377174547,"y":49.719703212868936},{"x":101.30822849710849,"y":49.58497746289151},{"x":101.17350274713105,"y":49.43135218825452},{"x":101.05998171674833,"y":49.26145596},{"x":100.96960778226412,"y":49.07819574969751},{"x":100.90392726675385,"y":48.884707190354646},{"x":100.86406398204797,"y":48.68430092486694},{"x":100.85069999999999,"y":48.48040596},{"x":100.86406398204797,"y":48.27651099513306},{"x":100.90392726675385,"y":48.07610472964535},{"x":100.96960778226412,"y":47.88261617030249},{"x":101.05998171674833,"y":47.69935596},{"x":101.17350274713105,"y":47.529459731745476},{"x":101.30822849710849,"y":47.37583445710849},{"x":101.46185377174547,"y":47.24110870713106},{"x":101.63175,"y":47.12758767674833},{"x":101.81501021030249,"y":47.03721374226412},{"x":102.00849876964534,"y":46.97153322675385},{"x":102.20890503513306,"y":46.93166994204797},{"x":102.41279999999999,"y":46.91830596},{"x":102.61669496486695,"y":46.93166994204797},{"x":102.81710123035465,"y":46.97153322675385},{"x":103.0105897896975,"y":47.03721374226412},{"x":103.19385,"y":47.12758767674833},{"x":103.36374622825453,"y":47.24110870713106},{"x":103.5173715028915,"y":47.37583445710849},{"x":103.65209725286894,"y":47.529459731745476},{"x":103.76561828325167,"y":47.69935596},{"x":103.85599221773587,"y":47.88261617030249},{"x":103.92167273324614,"y":48.07610472964535},{"x":103.96153601795203,"y":48.27651099513306},{"x":103.97489999999999,"y":48.48040596}]} strokeWidth={0.254} />
      <silkscreenpath route={[{"x":94.03580126,"y":62.05760003999999},{"x":93.99088678512125,"y":62.742862504776355},{"x":93.85691185960282,"y":63.416399938789745},{"x":93.6361688315652,"y":64.06668792980435},{"x":93.33243467541966,"y":64.68259986999999},{"x":92.95090636678884,"y":65.25359733531688},{"x":92.49811196081306,"y":65.76991040081306},{"x":91.98179889531689,"y":66.22270480678884},{"x":91.41080142999999,"y":66.60423311541966},{"x":90.79488948980435,"y":66.9079672715652},{"x":90.14460149878975,"y":67.12871029960282},{"x":89.47106406477636,"y":67.26268522512125},{"x":88.7858016,"y":67.3075997},{"x":88.10053913522363,"y":67.26268522512125},{"x":87.42700170121024,"y":67.12871029960282},{"x":86.77671371019565,"y":66.9079672715652},{"x":86.16080176999999,"y":66.60423311541966},{"x":85.5898043046831,"y":66.22270480678884},{"x":85.07349123918692,"y":65.76991040081306},{"x":84.62069683321116,"y":65.25359733531688},{"x":84.23916852458032,"y":64.68259986999999},{"x":83.93543436843478,"y":64.06668792980435},{"x":83.71469134039717,"y":63.416399938789745},{"x":83.58071641487874,"y":62.742862504776355},{"x":83.53580194,"y":62.05760003999999},{"x":83.58071641487874,"y":61.37233757522363},{"x":83.71469134039717,"y":60.69880014121024},{"x":83.93543436843477,"y":60.04851215019564},{"x":84.23916852458032,"y":59.43260021},{"x":84.62069683321116,"y":58.861602744683104},{"x":85.07349123918692,"y":58.34528967918692},{"x":85.58980430468308,"y":57.892495273211146},{"x":86.16080176999999,"y":57.51096696458033},{"x":86.77671371019565,"y":57.207232808434775},{"x":87.42700170121024,"y":56.98648978039717},{"x":88.10053913522363,"y":56.85251485487874},{"x":88.7858016,"y":56.80760038},{"x":89.47106406477636,"y":56.85251485487874},{"x":90.14460149878975,"y":56.98648978039717},{"x":90.79488948980435,"y":57.20723280843478},{"x":91.41080142999999,"y":57.51096696458033},{"x":91.98179889531689,"y":57.892495273211146},{"x":92.49811196081306,"y":58.34528967918692},{"x":92.95090636678884,"y":58.86160274468309},{"x":93.33243467541966,"y":59.43260021},{"x":93.63616883156521,"y":60.04851215019564},{"x":93.85691185960282,"y":60.69880014121024},{"x":93.99088678512125,"y":61.37233757522363},{"x":94.03580126,"y":62.05760003999999}]} strokeWidth={0.17779999999999999} />
      <silkscreenrect pcbX={35.88977836} pcbY={48.531494249999994} width={0.508} height={3.149602539999999} layer="top" strokeWidth={0.508} filled={true} />
      <silkscreenrect pcbX={31.92583912} pcbY={55.20479052999999} width={0.508} height={3.1496025399999934} layer="top" strokeWidth={0.508} filled={true} />
      <silkscreenline x1={73.4568} y1={83.1596} x2={73.4568} y2={91.2876} strokeWidth={0.254} />
      <silkscreenline x1={73.46244134} y1={74.79143792} x2={73.46244134} y2={82.14359999999999} strokeWidth={0.254} />
      <silkscreenline x1={59.867799999999995} y1={91.2876} x2={73.4568} y2={91.2876} strokeWidth={0.254} />
      <silkscreenline x1={47.294799999999995} y1={94.0816} x2={47.294799999999995} y2={113.6396} strokeWidth={0.254} />
      <silkscreenline x1={46.532799999999995} y1={93.3196} x2={47.294799999999995} y2={94.0816} strokeWidth={0.254} />
      <silkscreenline x1={18.3388} y1={93.3196} x2={46.532799999999995} y2={93.3196} strokeWidth={0.254} />
      <silkscreenline x1={29.7688} y1={93.3196} x2={29.7688} y2={101.95559999999999} strokeWidth={0.254} />
      <silkscreenline x1={65.29880006} y1={102.68760006000001} x2={65.29880006} y2={113.68360041999999} strokeWidth={0.254} />
      <silkscreenline x1={64.5668} y1={101.95559999999999} x2={65.29880006} y2={102.68760006000001} strokeWidth={0.254} />
      <silkscreenline x1={47.8028} y1={101.95559999999999} x2={64.5668} y2={101.95559999999999} strokeWidth={0.254} />
      <silkscreenline x1={17.8308} y1={101.95559999999999} x2={48.056799999999996} y2={101.95559999999999} strokeWidth={0.254} />
      <silkscreenline x1={63.87388291999999} y1={74.79143792} x2={69.43399626} y2={74.79143792} strokeWidth={0.254} />
      <silkscreenline x1={59.867799999999995} y1={74.79143792} x2={59.867799999999995} y2={91.2876} strokeWidth={0.254} />
      <silkscreenline x1={59.867799999999995} y1={74.79143792} x2={63.87388291999999} y2={74.79143792} strokeWidth={0.254} />
      <silkscreenline x1={69.43399626} y1={74.79143792} x2={73.46244134} y2={74.79143792} strokeWidth={0.254} />
      <silkscreenline x1={89.21044133999999} y1={80.1116} x2={89.21044133999999} y2={85.11160016} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={91.41044201999999} y1={80.1116} x2={91.41044201999999} y2={85.11160016} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.21044133999999} y1={85.11160016} x2={91.41044201999999} y2={85.11160016} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.21044133999999} y1={80.1116} x2={91.41044201999999} y2={80.1116} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.21044133999999} y1={69.22022224} x2={89.21044133999999} y2={74.2202224} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={91.41044201999999} y1={69.22022224} x2={91.41044201999999} y2={74.2202224} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.21044133999999} y1={74.2202224} x2={91.41044201999999} y2={74.2202224} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.21044133999999} y1={69.22022224} x2={91.41044201999999} y2={69.22022224} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={56.19722822} y1={111.60759999999999} x2={57.46722822} y2={111.60759999999999} strokeWidth={0.254} />
      <silkscreenline x1={57.46722822} y1={111.60759999999999} x2={58.10222822} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={58.10222822} y1={104.62259999999999} x2={58.10222822} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={57.46722822} y1={103.9876} x2={58.10222822} y2={104.62259999999999} strokeWidth={0.254} />
      <silkscreenline x1={56.19722822} y1={103.9876} x2={57.46722822} y2={103.9876} strokeWidth={0.254} />
      <silkscreenline x1={55.56222822} y1={104.62259999999999} x2={56.19722822} y2={103.9876} strokeWidth={0.254} />
      <silkscreenline x1={55.56222822} y1={104.62259999999999} x2={55.56222822} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={55.56222822} y1={110.9726} x2={56.19722822} y2={111.60759999999999} strokeWidth={0.254} />
      <silkscreenline x1={39.0398} y1={111.60759999999999} x2={40.309799999999996} y2={111.60759999999999} strokeWidth={0.254} />
      <silkscreenline x1={40.309799999999996} y1={111.60759999999999} x2={40.9448} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={40.9448} y1={104.62259999999999} x2={40.9448} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={40.309799999999996} y1={103.9876} x2={40.9448} y2={104.62259999999999} strokeWidth={0.254} />
      <silkscreenline x1={39.0398} y1={103.9876} x2={40.309799999999996} y2={103.9876} strokeWidth={0.254} />
      <silkscreenline x1={38.4048} y1={104.62259999999999} x2={39.0398} y2={103.9876} strokeWidth={0.254} />
      <silkscreenline x1={38.4048} y1={104.62259999999999} x2={38.4048} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={38.4048} y1={110.9726} x2={39.0398} y2={111.60759999999999} strokeWidth={0.254} />
      <silkscreenline x1={34.518800660000004} y1={77.82760151999999} x2={37.718801879999994} y2={77.82760151999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.518800660000004} y1={84.42760102} x2={37.718801879999994} y2={84.42760102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.718801879999994} y1={77.82760151999999} x2={37.718801879999994} y2={84.42760102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.518800660000004} y1={77.82760151999999} x2={34.518800660000004} y2={84.42760102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.518800660000004} y1={61.82560151999999} x2={37.718801879999994} y2={61.82560151999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.518800660000004} y1={68.42560102} x2={37.718801879999994} y2={68.42560102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.718801879999994} y1={61.82560151999999} x2={37.718801879999994} y2={68.42560102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.518800660000004} y1={61.82560151999999} x2={34.518800660000004} y2={68.42560102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.4678} y1={95.35159999999999} x2={35.1028} y2={95.9866} strokeWidth={0.254} />
      <silkscreenline x1={35.1028} y1={95.9866} x2={35.1028} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={34.4678} y1={100.43159999999999} x2={35.1028} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={33.1978} y1={100.43159999999999} x2={34.4678} y2={100.43159999999999} strokeWidth={0.254} />
      <silkscreenline x1={32.562799999999996} y1={99.7966} x2={33.1978} y2={100.43159999999999} strokeWidth={0.254} />
      <silkscreenline x1={32.562799999999996} y1={95.9866} x2={32.562799999999996} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={32.562799999999996} y1={95.9866} x2={33.1978} y2={95.35159999999999} strokeWidth={0.254} />
      <silkscreenline x1={33.1978} y1={95.35159999999999} x2={34.4678} y2={95.35159999999999} strokeWidth={0.254} />
      <silkscreenline x1={37.37581806} y1={48.60754566} x2={37.37581806} y2={54.728945659999994} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={34.404012980000005} y1={48.60754566} x2={34.404012980000005} y2={54.728945659999994} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={19.6088} y1={99.7966} x2={20.2438} y2={100.43159999999999} strokeWidth={0.254} />
      <silkscreenline x1={19.6088} y1={95.9866} x2={19.6088} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={19.6088} y1={95.9866} x2={20.2438} y2={95.35159999999999} strokeWidth={0.254} />
      <silkscreenline x1={20.2438} y1={95.35159999999999} x2={21.5138} y2={95.35159999999999} strokeWidth={0.254} />
      <silkscreenline x1={21.5138} y1={95.35159999999999} x2={22.148799999999998} y2={95.9866} strokeWidth={0.254} />
      <silkscreenline x1={22.148799999999998} y1={95.9866} x2={22.148799999999998} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={21.5138} y1={100.43159999999999} x2={22.148799999999998} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={20.2438} y1={100.43159999999999} x2={21.5138} y2={100.43159999999999} strokeWidth={0.254} />
      <silkscreenline x1={84.30767999999999} y1={70.02260062} x2={84.44992} y2={70.02260062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={84.30767999999999} y1={69.37259938} x2={84.44992} y2={69.37259938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={78.46567999999999} y1={86.27860062} x2={78.60792000000001} y2={86.27860062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={78.46567999999999} y1={85.62859938} x2={78.60792000000001} y2={85.62859938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={85.06967999999999} y1={79.67460062} x2={85.21192} y2={79.67460062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={85.06967999999999} y1={79.02459938} x2={85.21192} y2={79.02459938} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={83.54567999999999} y1={94.91460062} x2={83.68792} y2={94.91460062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={83.54567999999999} y1={94.26459937999999} x2={83.68792} y2={94.26459937999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={78.46567999999999} y1={88.05660062} x2={78.60792000000001} y2={88.05660062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={78.46567999999999} y1={87.40659937999999} x2={78.60792000000001} y2={87.40659937999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={85.06967999999999} y1={77.64260062} x2={85.21192} y2={77.64260062} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={85.06967999999999} y1={76.99259937999999} x2={85.21192} y2={76.99259937999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={28.380801759999997} y1={97.96159985999999} x2={28.380801759999997} y2={100.17160052} strokeWidth={0.254} />
      <silkscreenline x1={26.200801039999995} y1={97.96159985999999} x2={26.200801039999995} y2={100.17160052} strokeWidth={0.254} />
      <silkscreenline x1={26.200801039999995} y1={97.96159985999999} x2={28.380801759999997} y2={97.96159985999999} strokeWidth={0.254} />
      <silkscreenline x1={26.200801039999995} y1={100.17160052} x2={28.380801759999997} y2={100.17160052} strokeWidth={0.254} />
      <silkscreenline x1={80.44080178} y1={76.64760134} x2={80.44080178} y2={80.44760136} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={77.14080076} y1={76.64760134} x2={77.14080076} y2={80.44760136} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={48.7293539} y1={109.09856514} x2={49.999353899999996} y2={109.09856514} strokeWidth={0.254} />
      <silkscreenline x1={49.999353899999996} y1={109.09856514} x2={50.380353899999996} y2={108.71756514} strokeWidth={0.254} />
      <silkscreenline x1={50.380353899999996} y1={104.39956514} x2={50.380353899999996} y2={108.71756514} strokeWidth={0.254} />
      <silkscreenline x1={49.999353899999996} y1={104.01856513999999} x2={50.380353899999996} y2={104.39956514} strokeWidth={0.254} />
      <silkscreenline x1={48.7293539} y1={104.01856513999999} x2={49.999353899999996} y2={104.01856513999999} strokeWidth={0.254} />
      <silkscreenline x1={48.38135358} y1={104.36656545999999} x2={48.7293539} y2={104.01856513999999} strokeWidth={0.254} />
      <silkscreenline x1={48.38135358} y1={104.36656545999999} x2={48.38135358} y2={108.75056482} strokeWidth={0.254} />
      <silkscreenline x1={48.38135358} y1={108.75056482} x2={48.7293539} y2={109.09856514} strokeWidth={0.254} />
      <silkscreenline x1={25.8826} y1={49.293188179999994} x2={25.8826} y2={56.405188179999996} strokeWidth={0.254} />
      <silkscreenline x1={20.802599999999998} y1={56.405188179999996} x2={25.8826} y2={56.405188179999996} strokeWidth={0.254} />
      <silkscreenline x1={20.802599999999998} y1={49.293188179999994} x2={25.8826} y2={49.293188179999994} strokeWidth={0.254} />
      <silkscreenline x1={34.31480056} y1={74.52760049999999} x2={37.414799439999996} y2={74.52760049999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.31480056} y1={75.02759950000001} x2={37.414799439999996} y2={75.02759950000001} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.31480056} y1={74.52760049999999} x2={34.31480056} y2={75.02759950000001} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.414799439999996} y1={74.52760049999999} x2={37.414799439999996} y2={75.02759950000001} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={39.2938} y1={95.35159999999999} x2={39.928799999999995} y2={95.9866} strokeWidth={0.254} />
      <silkscreenline x1={39.928799999999995} y1={95.9866} x2={39.928799999999995} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={39.2938} y1={100.43159999999999} x2={39.928799999999995} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={38.0238} y1={100.43159999999999} x2={39.2938} y2={100.43159999999999} strokeWidth={0.254} />
      <silkscreenline x1={37.388799999999996} y1={99.7966} x2={38.0238} y2={100.43159999999999} strokeWidth={0.254} />
      <silkscreenline x1={37.388799999999996} y1={95.9866} x2={37.388799999999996} y2={99.7966} strokeWidth={0.254} />
      <silkscreenline x1={37.388799999999996} y1={95.9866} x2={38.0238} y2={95.35159999999999} strokeWidth={0.254} />
      <silkscreenline x1={38.0238} y1={95.35159999999999} x2={39.2938} y2={95.35159999999999} strokeWidth={0.254} />
      <silkscreenline x1={31.165799999999997} y1={111.60759999999999} x2={32.4358} y2={111.60759999999999} strokeWidth={0.254} />
      <silkscreenline x1={32.4358} y1={111.60759999999999} x2={33.0708} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={33.0708} y1={104.62259999999999} x2={33.0708} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={32.4358} y1={103.9876} x2={33.0708} y2={104.62259999999999} strokeWidth={0.254} />
      <silkscreenline x1={31.165799999999997} y1={103.9876} x2={32.4358} y2={103.9876} strokeWidth={0.254} />
      <silkscreenline x1={30.5308} y1={104.62259999999999} x2={31.165799999999997} y2={103.9876} strokeWidth={0.254} />
      <silkscreenline x1={30.5308} y1={104.62259999999999} x2={30.5308} y2={110.9726} strokeWidth={0.254} />
      <silkscreenline x1={30.5308} y1={110.9726} x2={31.165799999999997} y2={111.60759999999999} strokeWidth={0.254} />
      <silkscreenline x1={95.83080147999999} y1={52.397436479999996} x2={95.83080147999999} y2={63.65743682} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={95.83080147999999} y1={63.65743682} x2={104.93080106} y2={63.65743682} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.93080106} y1={52.397436479999996} x2={104.93080106} y2={63.65743682} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={95.83080147999999} y1={52.397436479999996} x2={104.93080106} y2={52.397436479999996} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.10636532} y1={61.76438751999999} x2={104.93080106} y2={61.76438751999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.10636532} y1={60.514387479999996} x2={104.10636532} y2={61.76438751999999} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.10636532} y1={60.514387479999996} x2={104.93080106} y2={60.514387479999996} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.10636532} y1={56.564387759999995} x2={104.93080106} y2={56.564387759999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.10636532} y1={55.31438772} x2={104.10636532} y2={56.564387759999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.10636532} y1={55.31438772} x2={104.93080106} y2={55.31438772} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={81.34559804} x2={104.15028192} y2={82.59559808} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={82.59559808} x2={104.95028032} y2={82.59559808} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={87.84559774} x2={104.95028032} y2={87.84559774} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={86.5955977} x2={104.15028192} y2={87.84559774} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={86.5955977} x2={104.95028032} y2={86.5955977} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={81.34559804} x2={104.95028032} y2={81.34559804} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={95.85028074} y1={73.42559864} x2={104.95028032} y2={73.42559864} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.95028032} y1={73.42559864} x2={104.95028032} y2={89.76559898} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={95.85028074} y1={89.76559898} x2={104.95028032} y2={89.76559898} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={95.85028074} y1={73.42559864} x2={95.85028074} y2={89.76559898} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={76.34559788} x2={104.95028032} y2={76.34559788} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={76.34559788} x2={104.15028192} y2={77.59559792} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={104.15028192} y1={77.59559792} x2={104.95028032} y2={77.59559792} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={67.6987978} y1={112.48360027999999} x2={67.6987978} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={66.39879786} y1={112.48360027999999} x2={67.6987978} y2={112.48360027999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={66.39879786} y1={112.48360027999999} x2={66.39879786} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={92.19879706} y1={112.48360027999999} x2={92.19879706} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={90.89879712} y1={112.48360027999999} x2={92.19879706} y2={112.48360027999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={90.89879712} y1={112.48360027999999} x2={90.89879712} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={88.69879897999999} y1={112.48360027999999} x2={88.69879897999999} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={87.39879903999999} y1={112.48360027999999} x2={88.69879897999999} y2={112.48360027999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={87.39879903999999} y1={112.48360027999999} x2={87.39879903999999} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={85.19879836} y1={112.48360027999999} x2={85.19879836} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={83.89879841999999} y1={112.48360027999999} x2={85.19879836} y2={112.48360027999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={83.89879841999999} y1={112.48360027999999} x2={83.89879841999999} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={81.69879774} y1={112.48360027999999} x2={81.69879774} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={80.3987978} y1={112.48360027999999} x2={81.69879774} y2={112.48360027999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={80.3987978} y1={112.48360027999999} x2={80.3987978} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={78.19879712} y1={112.48360027999999} x2={78.19879712} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={76.89879718} y1={112.48360027999999} x2={78.19879712} y2={112.48360027999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={76.89879718} y1={112.48360027999999} x2={76.89879718} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={74.69879904} y1={112.48360027999999} x2={74.69879904} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={73.39879909999999} y1={112.48360027999999} x2={74.69879904} y2={112.48360027999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={73.39879909999999} y1={112.48360027999999} x2={73.39879909999999} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={71.19879842} y1={112.48360027999999} x2={71.19879842} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={69.89879848} y1={112.48360027999999} x2={71.19879842} y2={112.48360027999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={69.89879848} y1={112.48360027999999} x2={69.89879848} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={65.29880006} y1={106.68359918} x2={65.29880006} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={65.29880006} y1={106.68359918} x2={93.29879994} y2={106.68359918} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={93.29879994} y1={106.68359918} x2={93.29879994} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={65.29880006} y1={113.68360041999999} x2={93.29879994} y2={113.68360041999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.518800660000004} y1={85.44760151999999} x2={37.718801879999994} y2={85.44760151999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.518800660000004} y1={92.04760102} x2={37.718801879999994} y2={92.04760102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={37.718801879999994} y1={85.44760151999999} x2={37.718801879999994} y2={92.04760102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={34.518800660000004} y1={85.44760151999999} x2={34.518800660000004} y2={92.04760102} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={69.13243984} y1={88.01059867999999} x2={69.56744024} y2={88.01059867999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={69.56744024} y1={87.57559828} x2={69.56744024} y2={88.01059867999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={63.117440439999996} y1={88.01059867999999} x2={63.55244084} y2={88.01059867999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={63.117440439999996} y1={87.57559828} x2={63.117440439999996} y2={88.01059867999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={63.117440439999996} y1={81.56059888} x2={63.55244084} y2={81.56059888} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={63.117440439999996} y1={81.56059888} x2={63.117440439999996} y2={81.99559928000001} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={69.13243984} y1={81.56059888} x2={69.56744024} y2={81.56059888} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={69.56744024} y1={81.56059888} x2={69.56744024} y2={81.99559928000001} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={30.439852759999997} y1={49.007323879999994} x2={30.439852759999997} y2={55.128723879999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={33.41165784} y1={49.007323879999994} x2={33.41165784} y2={55.128723879999995} strokeWidth={0.17779999999999999} />
      <silkscreenline x1={86.86281078} y1={55.26098422} x2={93.06041078} y2={55.26098422} strokeWidth={0.254} />
      <silkscreenline x1={86.86281078} y1={44.61838422} x2={86.86281078} y2={55.25744346} strokeWidth={0.254} />
      <silkscreenline x1={93.06041078} y1={44.61838422} x2={93.06041078} y2={55.256983719999994} strokeWidth={0.254} />
      <silkscreenline x1={86.86281078} y1={44.61838422} x2={93.06041078} y2={44.61838422} strokeWidth={0.254} />
      <silkscreenline x1={86.86281078} y1={51.73038422} x2={93.06041078} y2={51.73038422} strokeWidth={0.254} />
      <silkscreenline x1={89.21044133999999} y1={91.06422223999999} x2={89.21044133999999} y2={96.06422239999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={91.41044201999999} y1={91.06422223999999} x2={91.41044201999999} y2={96.06422239999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.21044133999999} y1={96.06422239999999} x2={91.41044201999999} y2={96.06422239999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={89.21044133999999} y1={91.06422223999999} x2={91.41044201999999} y2={91.06422223999999} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={42.854633619999994} y1={49.0791881} x2={44.65463509999999} y2={49.0791881} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={42.854633619999994} y1={54.07918826} x2={44.65463509999999} y2={54.07918826} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={44.65463509999999} y1={49.0791881} x2={44.65463509999999} y2={54.07918826} strokeWidth={0.19999959999999997} />
      <silkscreenline x1={42.854633619999994} y1={49.0791881} x2={42.854633619999994} y2={54.07918826} strokeWidth={0.19999959999999997} />
      <fabricationnotepath route={[{"x":105.30839999999999,"y":38.9636},{"x":17.5768,"y":38.96360000000001}]} strokeWidth={0.254} color="#ec4899" />
      <fabricationnotetext pcbX={80.13180062} pcbY={49.447599860000004} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={43.04679986} pcbY={56.672599379999994} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={61.70179937999999} pcbY={107.47360013999999} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={63.226800139999995} pcbY={93.64460062} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={67.29080013999999} pcbY={93.64460062} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={71.6282794} pcbY={93.60760044} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={43.41480014} pcbY={92.12060062} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={43.41480014} pcbY={84.24660062} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={47.23100536} pcbY={46.95015248} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={43.41480014} pcbY={46.90860062} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={98.92679986} pcbY={70.64259938} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={68.19279986} pcbY={77.75459937999999} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.508} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={67.03680014} pcbY={78.40460062} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={63.73480014} pcbY={78.40460062} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={56.34962822} pcbY={110.0328} anchorAlignment="center" text="JP1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={27.96079752} pcbY={88.10808896} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={27.90053602} pcbY={90.59660062} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={27.90053602} pcbY={92.55710978} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={65.76579937999999} pcbY={51.84760014} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={52.95380062} pcbY={49.447599860000004} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={56.367799379999994} pcbY={51.84760014} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={62.605800620000004} pcbY={49.447599860000004} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={77.59180062} pcbY={49.447599860000004} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={50.15980062} pcbY={49.447599860000004} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={72.5097991} pcbY={51.859601639999994} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={73.15980034} pcbY={45.931368639999995} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={34.5948} pcbY={80.3656} anchorAlignment="center" text="U8" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={34.2646} pcbY={64.6176} anchorAlignment="center" text="U9" font="tscircuit2024" fontSize={0.508} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={72.76580062000001} pcbY={78.65759986} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={63.73480014} pcbY={76.37260062} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={41.014799860000004} pcbY={69.62659937999999} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={34.1376} pcbY={95.88499999999999} anchorAlignment="center" text="JP7" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={41.00279836} pcbY={79.27859937999999} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={0.508} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={41.014799860000004} pcbY={73.94459937999999} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={41.014799860000004} pcbY={71.65859938} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.508} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={43.41480014} pcbY={82.21460062} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={43.40279864} pcbY={77.64260062} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={36.22011552} pcbY={49.16634566} anchorAlignment="center" text="D8" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={20.573999999999998} pcbY={99.8982} anchorAlignment="center" text="JP6" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={83.32879956} pcbY={69.42259928} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={77.48679956} pcbY={85.67859928} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={84.09079956} pcbY={79.07459928} anchorAlignment="center" text="R27" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={82.56679955999999} pcbY={94.31459928} anchorAlignment="center" text="R28" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={77.48679956} pcbY={87.45659928} anchorAlignment="center" text="R29" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={84.09079956} pcbY={77.04259928} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.5588} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={53.3146} pcbY={108.204} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.889} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={43.41480014} pcbY={68.24460062} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.635} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={79.29079899999999} pcbY={76.69760124} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={49.0595539} pcbY={108.56516514} anchorAlignment="center" text="JP2" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={36.78979942} pcbY={74.85260112} anchorAlignment="center" text="U11" font="tscircuit2024" fontSize={0.508} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={38.9636} pcbY={95.88499999999999} anchorAlignment="center" text="JP5" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={59.94031192} pcbY={49.022411479999995} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={82.95615362} pcbY={49.022411479999995} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={0.762} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={100.3808} pcbY={57.27743687999999} anchorAlignment="center" text="P1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={100.40027926} pcbY={80.34560004} anchorAlignment="center" text="P2" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="90deg" />
      <fabricationnotetext pcbX={77.14879922} pcbY={107.48360012} anchorAlignment="center" text="P3" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={34.2646} pcbY={88.2396} anchorAlignment="center" text="U7" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={65.83444034} pcbY={86.63979877999999} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={31.595555299999997} pcbY={54.56992388} anchorAlignment="center" text="D7" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="270deg" />
      <fabricationnotetext pcbX={42.230634359999996} pcbY={51.07118818} anchorAlignment="center" text="U5" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
      <fabricationnotetext pcbX={90.41079962} pcbY={62.55759903999999} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotetext pcbX={91.7448} pcbY={61.315599999999996} anchorAlignment="center" text="+" font="tscircuit2024" fontSize={1.499997} color="#ec4899" pcbRotation="180deg" />
      <fabricationnotedimension from={{ x: 17.5641, y: 27.139899999999997 }} to={{ x: 42.964099999999995, y: 27.139899999999997 }} text="1000.00 mil" font="tscircuit2024" fontSize={1.524} color="#ec4899" arrowSize={1.524} offset={0} />
      <fabricationnotedimension from={{ x: 17.5768, y: 38.9636 }} to={{ x: 17.5768, y: 38.96360000000001 }} text="0.00 mil" font="tscircuit2024" fontSize={1.524} color="#ec4899" arrowSize={1.524} offset={2.54} />
      <silkscreentext pcbX={80.0608} pcbY={87.22359999999999} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R29" />
      <silkscreentext pcbX={82.3468} pcbY={95.35159999999999} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R28" />
      <silkscreentext pcbX={84.1248} pcbY={80.1116} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R27" />
      <silkscreentext pcbX={80.0608} pcbY={85.4456} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R26" />
      <silkscreentext pcbX={83.3591424} pcbY={68.08781912} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R25" />
      <silkscreentext pcbX={84.1248} pcbY={75.7936} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R24" />
      <silkscreentext pcbX={19.6088} pcbY={100.6856} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP6" />
      <silkscreentext pcbX={35.1028} pcbY={55.4736} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D8" />
      <silkscreentext pcbX={31.2928} pcbY={55.727599999999995} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D7" />
      <silkscreentext pcbX={43.9807985} pcbY={76.8096} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R10" />
      <silkscreentext pcbX={43.992799999999995} pcbY={81.38159999999999} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R9" />
      <silkscreentext pcbX={43.992799999999995} pcbY={71.4756} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R2" />
      <silkscreentext pcbX={43.992799999999995} pcbY={73.7616} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R1" />
      <silkscreentext pcbX={43.992799999999995} pcbY={79.09559999999999} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C7" />
      <silkscreentext pcbX={26.4668} pcbY={52.1716} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R20" />
      <silkscreentext pcbX={32.63555322} pcbY={100.76643804} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP7" />
      <silkscreentext pcbX={37.207553219999994} pcbY={100.76643804} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP5" />
      <silkscreentext pcbX={93.7768} pcbY={111.8616} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="P3" />
      <silkscreentext pcbX={43.992799999999995} pcbY={69.4436} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C20" />
      <silkscreentext pcbX={64.1737477} pcbY={75.62408294000001} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C17" />
      <silkscreentext pcbX={69.29614283999999} pcbY={79.42424552} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C13" />
      <silkscreentext pcbX={47.89035379999999} pcbY={109.48756614} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP2" />
      <silkscreentext pcbX={31.0388} pcbY={74.2696} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U11" />
      <silkscreentext pcbX={30.276799999999998} pcbY={66.3956} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U9" />
      <silkscreentext pcbX={30.276799999999998} pcbY={82.3976} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U8" />
      <silkscreentext pcbX={30.276799999999998} pcbY={89.7636} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U7" />
      <silkscreentext pcbX={40.1828} pcbY={55.2196} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U5" />
      <silkscreentext pcbX={73.77081766} pcbY={47.55715152} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R23" />
      <silkscreentext pcbX={71.62703226} pcbY={52.42724084} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R22" />
      <silkscreentext pcbX={48.818799999999996} pcbY={52.425599999999996} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R21" />
      <silkscreentext pcbX={75.9968} pcbY={52.425599999999996} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R18" />
      <silkscreentext pcbX={51.8668} pcbY={112.1156} anchorAlignment="center" fontSize={0.762} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R16" />
      <silkscreentext pcbX={61.27671768} pcbY={52.386103} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R14" />
      <silkscreentext pcbX={55.6768} pcbY={52.425599999999996} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R13" />
      <silkscreentext pcbX={51.54705718} pcbY={52.35433522} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R12" />
      <silkscreentext pcbX={65.0748} pcbY={52.433600999999996} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R11" />
      <silkscreentext pcbX={22.91721096} pcbY={91.68186895999999} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R5" />
      <silkscreentext pcbX={22.91721096} pcbY={89.63937875999999} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R4" />
      <silkscreentext pcbX={22.91721096} pcbY={87.14024228} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R3" />
      <silkscreentext pcbX={38.4048} pcbY={112.1156} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP4" />
      <silkscreentext pcbX={55.6768} pcbY={112.1156} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP1" />
      <silkscreentext pcbX={58.724799999999995} pcbY={52.9336} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D3" />
      <silkscreentext pcbX={61.516440339999996} pcbY={79.1405834} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C16" />
      <silkscreentext pcbX={64.81844034} pcbY={79.1405834} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C15" />
      <silkscreentext pcbX={68.22399868} pcbY={76.19415545999999} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C14" />
      <silkscreentext pcbX={101.9048} pcbY={70.7136} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C2" />
      <silkscreentext pcbX={70.26744138} pcbY={87.98559999999999} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U1" />
      <silkscreentext pcbX={97.33279999999999} pcbY={71.9836} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="P2" />
      <silkscreentext pcbX={41.460801} pcbY={44.58510767999999} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C4" />
      <silkscreentext pcbX={45.2628} pcbY={44.5516} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C5" />
      <silkscreentext pcbX={43.992799999999995} pcbY={83.4136} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C8" />
      <silkscreentext pcbX={44.2468} pcbY={91.2876} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C9" />
      <silkscreentext pcbX={69.30925178} pcbY={94.33592003999999} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C10" />
      <silkscreentext pcbX={65.02519887999999} pcbY={94.33475672} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C11" />
      <silkscreentext pcbX={60.7568} pcbY={94.33475672} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C12" />
      <silkscreentext pcbX={60.87080027999999} pcbY={103.741601} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R17" />
      <silkscreentext pcbX={80.8228} pcbY={78.03960008} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R19" />
      <silkscreentext pcbX={89.4588} pcbY={67.9196} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U2" />
      <silkscreentext pcbX={89.46444134} pcbY={78.80160008} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U3" />
      <silkscreentext pcbX={89.46444134} pcbY={89.72360008} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U4" />
      <silkscreentext pcbX={97.64569497999999} pcbY={50.89825736} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="P1" />
      <silkscreentext pcbX={43.4848} pcbY={58.267599999999995} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C3" />
      <silkscreentext pcbX={78.79079999999999} pcbY={52.425599999999996} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R15" />
      <silkscreentext pcbX={93.52279999999999} pcbY={47.3456} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D6" />
      <silkscreentext pcbX={81.83879999999999} pcbY={52.9336} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D4" />
      <silkscreentext pcbX={92.5068} pcbY={56.9976} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C1" />
      <silkscreentext pcbX={30.5308} pcbY={112.1156} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="JP3" />
      <silkscreentext pcbX={43.992799999999995} pcbY={67.41159999999999} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C6" />
      <silkscreentext pcbX={25.7048} pcbY={105.76559999999999} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="S.E." />
      <silkscreentext pcbX={26.7208} pcbY={109.32159999999999} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="S.E." />
      <silkscreentext pcbX={26.11167752} pcbY={100.39354826} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={21.1328} pcbY={93.82759999999999} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SPEED" />
      <silkscreentext pcbX={63.311062099999994} pcbY={89.50959999999999} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="DRV8307" />
      <silkscreentext pcbX={18.084799999999998} pcbY={58.5216} anchorAlignment="center" fontSize={2.032} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SPEED ADJUST" />
      <silkscreentext pcbX={46.28303164} pcbY={41.60429068} anchorAlignment="center" fontSize={2.032} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="HALLOUT" />
      <silkscreentext pcbX={56.50835282} pcbY={41.61520252} anchorAlignment="center" fontSize={2.032} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="FAULTn" />
      <silkscreentext pcbX={65.68587065999999} pcbY={41.60429068} anchorAlignment="center" fontSize={2.032} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="LOCKn" />
      <silkscreentext pcbX={74.20480968} pcbY={41.60330008} anchorAlignment="center" fontSize={2.032} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="ENABLE" />
      <silkscreentext pcbX={22.6568} pcbY={96.11359999999999} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SPEED_ADJ" />
      <silkscreentext pcbX={22.6568} pcbY={98.6536} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="PWM" />
      <silkscreentext pcbX={22.9108} pcbY={104.7496} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="NORMAL" />
      <silkscreentext pcbX={28.244799999999998} pcbY={104.7496} anchorAlignment="center" fontSize={4.572} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="[" />
      <silkscreentext pcbX={29.2608} pcbY={108.0516} anchorAlignment="center" fontSize={4.572} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="[" />
      <silkscreentext pcbX={42.2148} pcbY={105.76559999999999} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="ENDED" />
      <silkscreentext pcbX={30.276799999999998} pcbY={102.4636} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="HALL SIGNALS" />
      <silkscreentext pcbX={34.76235872} pcbY={108.55747656} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="DIFF" />
      <silkscreentext pcbX={33.67330578} pcbY={107.98932428} anchorAlignment="center" fontSize={4.572} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="]" />
      <silkscreentext pcbX={37.31369982} pcbY={107.98932428} anchorAlignment="center" fontSize={4.572} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="[" />
      <silkscreentext pcbX={41.1988} pcbY={105.5116} anchorAlignment="center" fontSize={4.572} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="]" />
      <silkscreentext pcbX={42.2148} pcbY={107.0356} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="SINGLE" />
      <silkscreentext pcbX={40.4368} pcbY={96.87559999999999} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="IS LOW" />
      <silkscreentext pcbX={40.4368} pcbY={97.8916} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="INSTALLED" />
      <silkscreentext pcbX={37.388799999999996} pcbY={93.82759999999999} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="DIR" />
      <silkscreentext pcbX={30.784799999999997} pcbY={93.82759999999999} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="BRAKE" />
      <silkscreentext pcbX={50.30741526} pcbY={102.31578216} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="HALL POWER" />
      <silkscreentext pcbX={52.01063766} pcbY={105.34160034} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="5V" />
      <silkscreentext pcbX={50.8508} pcbY={104.868599} anchorAlignment="center" fontSize={4.572} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="]" />
      <silkscreentext pcbX={53.898799999999994} pcbY={104.868599} anchorAlignment="center" fontSize={4.572} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="[" />
      <silkscreentext pcbX={58.4708} pcbY={108.0516} anchorAlignment="center" fontSize={4.572} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="]" />
      <silkscreentext pcbX={59.486799999999995} pcbY={108.8136} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="CURRENT" />
      <silkscreentext pcbX={89.9980928} pcbY={105.48102347999999} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="HPWR" />
      <silkscreentext pcbX={93.7612552} pcbY={109.54769302000001} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="HALL" />
      <silkscreentext pcbX={93.7768} pcbY={107.79759999999999} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="INPUT" />
      <silkscreentext pcbX={85.13931409999999} pcbY={105.93077874} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="_" />
      <silkscreentext pcbX={88.55061284} pcbY={105.24771685999998} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="+" />
      <silkscreentext pcbX={78.1101054} pcbY={105.93077874} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="_" />
      <silkscreentext pcbX={81.5649118} pcbY={105.24771685999998} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="+" />
      <silkscreentext pcbX={74.74886498} pcbY={105.24771685999998} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="+" />
      <silkscreentext pcbX={71.29931384} pcbY={105.93077874} anchorAlignment="center" fontSize={1.397} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="_" />
      <silkscreentext pcbX={81.25581412} pcbY={47.0916} anchorAlignment="center" fontSize={2.032} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VM" />
      <silkscreentext pcbX={50.0888} pcbY={61.0616} anchorAlignment="center" fontSize={2.54} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="DRV8307EVM" />
      <silkscreentext pcbX={84.15716975999999} pcbY={105.31915182} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U" />
      <silkscreentext pcbX={87.57625868} pcbY={105.31915182} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U" />
      <silkscreentext pcbX={77.11023186} pcbY={105.31915182} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="V" />
      <silkscreentext pcbX={80.57283097999999} pcbY={105.31915182} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="V" />
      <silkscreentext pcbX={73.37714813999999} pcbY={105.31915182} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="W" />
      <silkscreentext pcbX={69.91980682} pcbY={105.31915182} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="W" />
      <silkscreentext pcbX={65.58609946} pcbY={105.46738875999999} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="HGND" />
      <silkscreentext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text=".Layer_Name" />
      <silkscreentext pcbX={89.575386} pcbY={74.54534748} anchorAlignment="center" fontSize={2.794} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U" />
      <silkscreentext pcbX={89.51449711999999} pcbY={85.35698955999999} anchorAlignment="center" fontSize={2.794} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="V" />
      <silkscreentext pcbX={73.90908002} pcbY={82.27420172} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="UHSG" />
      <silkscreentext pcbX={73.94090368} pcbY={75.19903172000001} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="ULSG" />
      <silkscreentext pcbX={75.51397902} pcbY={78.19513444} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U" />
      <silkscreentext pcbX={75.98887012} pcbY={85.85333096} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="V" />
      <silkscreentext pcbX={74.40057255999999} pcbY={83.2406006} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VLSG" />
      <silkscreentext pcbX={75.96174291999999} pcbY={84.22314118} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VHSG" />
      <silkscreentext pcbX={80.31479999999999} pcbY={96.11359999999999} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="W" />
      <silkscreentext pcbX={77.5208} pcbY={92.5576} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="WHSG" />
      <silkscreentext pcbX={74.60299531999999} pcbY={88.22209686} anchorAlignment="center" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="WLSG" />
      <silkscreentext pcbX={89.14774143999999} pcbY={96.32279947999999} anchorAlignment="center" fontSize={2.794} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="W" />
      <silkscreentext pcbX={101.27562676} pcbY={64.12810898} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="VM" />
      <silkscreentext pcbX={100.723954} pcbY={50.40502746} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={67.10679999999999} pcbY={61.0616} anchorAlignment="center" fontSize={2.54} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="REV.A" />
      <silkscreentext pcbX={24.9428} pcbY={108.3056} anchorAlignment="center" fontSize={1.27} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="INVERT" />
      <silkscreentext pcbX={20.116799999999998} pcbY={76.5556} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={95.71031404} pcbY={97.8916} anchorAlignment="center" fontSize={1.778} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="GND" />
      <silkscreentext pcbX={91.7448} pcbY={61.315599999999996} anchorAlignment="center" fontSize={1.499997} font="tscircuit2024" pcbRotation="180deg" mirrored={false} layer="top" text="+" />
      <silkscreentext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="bottom" text=".Layer_Name" />
      <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} />
      <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} layer="bottom" />
      <courtyardoutline outline={[{"x":80.6067984,"y":49.22259904},{"x":80.6067984,"y":52.07259842},{"x":79.00679906,"y":52.07259842},{"x":79.00679906,"y":49.22259904}]} layer="top" />
      <courtyardoutline outline={[{"x":42.82179904,"y":56.1976016},{"x":45.67179842,"y":56.1976016},{"x":45.67179842,"y":57.797600939999995},{"x":42.82179904,"y":57.797600939999995}]} layer="top" />
      <courtyardoutline outline={[{"x":86.56044156,"y":79.8616005},{"x":86.56044156,"y":85.36159966},{"x":94.06044179999999,"y":85.36159966},{"x":94.06044179999999,"y":79.8616005}]} layer="top" />
      <courtyardoutline outline={[{"x":86.56044156,"y":68.97022274},{"x":86.56044156,"y":74.4702219},{"x":94.06044179999999,"y":74.4702219},{"x":94.06044179999999,"y":68.97022274}]} layer="top" />
      <courtyardoutline outline={[{"x":62.82680093999999,"y":107.69860096},{"x":62.82680093999999,"y":104.84860158000001},{"x":61.226801599999995,"y":104.84860158000001},{"x":61.226801599999995,"y":107.69860096}]} layer="top" />
      <courtyardoutline outline={[{"x":60.60180158,"y":94.1195984},{"x":60.60180158,"y":92.51959906},{"x":63.45180096,"y":92.51959906},{"x":63.45180096,"y":94.1195984}]} layer="top" />
      <courtyardoutline outline={[{"x":64.66580158,"y":94.1195984},{"x":64.66580158,"y":92.51959906},{"x":67.51580096,"y":92.51959906},{"x":67.51580096,"y":94.1195984}]} layer="top" />
      <courtyardoutline outline={[{"x":69.00328084,"y":94.08259822},{"x":69.00328084,"y":92.48259888},{"x":71.85328021999999,"y":92.48259888},{"x":71.85328021999999,"y":94.08259822}]} layer="top" />
      <courtyardoutline outline={[{"x":43.639800959999995,"y":90.99559906},{"x":40.789801579999995,"y":90.99559906},{"x":40.789801579999995,"y":92.5955984},{"x":43.639800959999995,"y":92.5955984}]} layer="top" />
      <courtyardoutline outline={[{"x":43.639800959999995,"y":83.12159906},{"x":40.789801579999995,"y":83.12159906},{"x":40.789801579999995,"y":84.7215984},{"x":43.639800959999995,"y":84.7215984}]} layer="top" />
      <courtyardoutline outline={[{"x":47.45600618,"y":45.82515092},{"x":44.6060068,"y":45.82515092},{"x":44.6060068,"y":47.42515026},{"x":47.45600618,"y":47.42515026}]} layer="top" />
      <courtyardoutline outline={[{"x":43.639800959999995,"y":45.78359905999999},{"x":40.789801579999995,"y":45.78359905999999},{"x":40.789801579999995,"y":47.383598400000004},{"x":43.639800959999995,"y":47.383598400000004}]} layer="top" />
      <courtyardoutline outline={[{"x":98.70179904,"y":70.1676016},{"x":101.55179842,"y":70.1676016},{"x":101.55179842,"y":71.76760094},{"x":98.70179904,"y":71.76760094}]} layer="top" />
      <courtyardoutline outline={[{"x":67.96779903999999,"y":77.27960159999999},{"x":67.96779903999999,"y":78.87960093999999},{"x":70.81779842,"y":78.87960093999999},{"x":70.81779842,"y":77.27960159999999}]} layer="top" />
      <courtyardoutline outline={[{"x":64.41180158,"y":78.8795984},{"x":64.41180158,"y":77.27959906},{"x":67.26180096,"y":77.27959906},{"x":67.26180096,"y":78.8795984}]} layer="top" />
      <courtyardoutline outline={[{"x":61.109801579999996,"y":78.8795984},{"x":61.109801579999996,"y":77.27959906},{"x":63.95980096,"y":77.27959906},{"x":63.95980096,"y":78.8795984}]} layer="top" />
      <courtyardoutline outline={[{"x":28.18579834,"y":86.98308739999999},{"x":25.335798959999998,"y":86.98308739999999},{"x":25.335798959999998,"y":88.58308674},{"x":28.18579834,"y":88.58308674}]} layer="top" />
      <courtyardoutline outline={[{"x":28.12553684,"y":89.47159906},{"x":25.27553746,"y":89.47159906},{"x":25.27553746,"y":91.0715984},{"x":28.12553684,"y":91.0715984}]} layer="top" />
      <courtyardoutline outline={[{"x":28.12553684,"y":91.43210821999999},{"x":25.27553746,"y":91.43210821999999},{"x":25.27553746,"y":93.03210756},{"x":28.12553684,"y":93.03210756}]} layer="top" />
      <courtyardoutline outline={[{"x":66.89080093999999,"y":52.07260096},{"x":66.89080093999999,"y":49.222601579999996},{"x":65.2908016,"y":49.222601579999996},{"x":65.2908016,"y":52.07260096}]} layer="top" />
      <courtyardoutline outline={[{"x":53.4287984,"y":49.22259904},{"x":53.4287984,"y":52.07259842},{"x":51.828799059999994,"y":52.07259842},{"x":51.828799059999994,"y":49.22259904}]} layer="top" />
      <courtyardoutline outline={[{"x":57.492800939999995,"y":52.07260096},{"x":57.492800939999995,"y":49.222601579999996},{"x":55.8928016,"y":49.222601579999996},{"x":55.8928016,"y":52.07260096}]} layer="top" />
      <courtyardoutline outline={[{"x":63.0807984,"y":49.22259904},{"x":63.0807984,"y":52.07259842},{"x":61.48079906,"y":52.07259842},{"x":61.48079906,"y":49.22259904}]} layer="top" />
      <courtyardoutline outline={[{"x":78.0667984,"y":49.22259904},{"x":78.0667984,"y":52.07259842},{"x":76.46679906,"y":52.07259842},{"x":76.46679906,"y":49.22259904}]} layer="top" />
      <courtyardoutline outline={[{"x":50.6347984,"y":49.22259904},{"x":50.6347984,"y":52.07259842},{"x":49.03479906,"y":52.07259842},{"x":49.03479906,"y":49.22259904}]} layer="top" />
      <courtyardoutline outline={[{"x":73.63480066,"y":52.08460246},{"x":73.63480066,"y":49.23460308},{"x":72.03480132,"y":49.23460308},{"x":72.03480132,"y":52.08460246}]} layer="top" />
      <courtyardoutline outline={[{"x":73.63479812,"y":45.70636782},{"x":73.63479812,"y":48.5563672},{"x":72.03479877999999,"y":48.5563672},{"x":72.03479877999999,"y":45.70636782}]} layer="top" />
      <courtyardoutline outline={[{"x":32.16880028,"y":77.57759947999999},{"x":40.06879972,"y":77.57759947999999},{"x":40.06879972,"y":84.67760052},{"x":32.16880028,"y":84.67760052}]} layer="top" />
      <courtyardoutline outline={[{"x":32.16880028,"y":61.575599479999994},{"x":40.06879972,"y":61.575599479999994},{"x":40.06879972,"y":68.67560052},{"x":32.16880028,"y":68.67560052}]} layer="top" />
      <courtyardoutline outline={[{"x":73.2407984,"y":81.28259842},{"x":71.64079906,"y":81.28259842},{"x":71.64079906,"y":78.43259903999999},{"x":73.2407984,"y":78.43259903999999}]} layer="top" />
      <courtyardoutline outline={[{"x":61.109801579999996,"y":76.8475984},{"x":61.109801579999996,"y":75.24759906},{"x":63.95980096,"y":75.24759906},{"x":63.95980096,"y":76.8475984}]} layer="top" />
      <courtyardoutline outline={[{"x":40.78979904,"y":69.15160159999999},{"x":43.63979842,"y":69.15160159999999},{"x":43.63979842,"y":70.75160093999999},{"x":40.78979904,"y":70.75160093999999}]} layer="top" />
      <courtyardoutline outline={[{"x":40.777797539999995,"y":78.8036016},{"x":43.627796919999994,"y":78.8036016},{"x":43.627796919999994,"y":80.40360093999999},{"x":40.777797539999995,"y":80.40360093999999}]} layer="top" />
      <courtyardoutline outline={[{"x":40.78979904,"y":73.46960159999999},{"x":43.63979842,"y":73.46960159999999},{"x":43.63979842,"y":75.06960093999999},{"x":40.78979904,"y":75.06960093999999}]} layer="top" />
      <courtyardoutline outline={[{"x":40.78979904,"y":71.18360159999999},{"x":43.63979842,"y":71.18360159999999},{"x":43.63979842,"y":72.78360094},{"x":40.78979904,"y":72.78360094}]} layer="top" />
      <courtyardoutline outline={[{"x":43.639800959999995,"y":81.08959906},{"x":40.789801579999995,"y":81.08959906},{"x":40.789801579999995,"y":82.6895984},{"x":43.639800959999995,"y":82.6895984}]} layer="top" />
      <courtyardoutline outline={[{"x":43.62779946,"y":76.51759906},{"x":40.77780008,"y":76.51759906},{"x":40.77780008,"y":78.1175984},{"x":43.62779946,"y":78.1175984}]} layer="top" />
      <courtyardoutline outline={[{"x":37.6399171,"y":54.98494718},{"x":37.6399171,"y":48.88494668},{"x":34.139916480000004,"y":48.88494668},{"x":34.139916480000004,"y":54.98494718}]} layer="top" />
      <courtyardoutline outline={[{"x":83.17879986,"y":69.17259978},{"x":85.57880014,"y":69.17259978},{"x":85.57880014,"y":70.22260022},{"x":83.17879986,"y":70.22260022}]} layer="top" />
      <courtyardoutline outline={[{"x":77.33679986,"y":85.42859978},{"x":79.73680014,"y":85.42859978},{"x":79.73680014,"y":86.47860021999999},{"x":77.33679986,"y":86.47860021999999}]} layer="top" />
      <courtyardoutline outline={[{"x":83.94079986,"y":78.82459978},{"x":86.34080014,"y":78.82459978},{"x":86.34080014,"y":79.87460021999999},{"x":83.94079986,"y":79.87460021999999}]} layer="top" />
      <courtyardoutline outline={[{"x":82.41679986,"y":94.06459978},{"x":84.81680014,"y":94.06459978},{"x":84.81680014,"y":95.11460022},{"x":82.41679986,"y":95.11460022}]} layer="top" />
      <courtyardoutline outline={[{"x":77.33679986,"y":87.20659977999999},{"x":79.73680014,"y":87.20659977999999},{"x":79.73680014,"y":88.25660022},{"x":77.33679986,"y":88.25660022}]} layer="top" />
      <courtyardoutline outline={[{"x":83.94079986,"y":76.79259978},{"x":86.34080014,"y":76.79259978},{"x":86.34080014,"y":77.84260022},{"x":83.94079986,"y":77.84260022}]} layer="top" />
      <courtyardoutline outline={[{"x":43.639800959999995,"y":67.11959906},{"x":40.789801579999995,"y":67.11959906},{"x":40.789801579999995,"y":68.7195984},{"x":43.639800959999995,"y":68.7195984}]} layer="top" />
      <courtyardoutline outline={[{"x":81.04080058,"y":74.24760106},{"x":81.04080058,"y":82.84760164000001},{"x":76.54080196,"y":82.84760164000001},{"x":76.54080196,"y":74.24760106}]} layer="top" />
      <courtyardoutline outline={[{"x":37.664801479999994,"y":76.77760108},{"x":37.664801479999994,"y":72.77759891999999},{"x":34.06480106,"y":72.77759891999999},{"x":34.06480106,"y":76.77760108}]} layer="top" />
      <courtyardoutline outline={[{"x":32.16880028,"y":85.19759948},{"x":40.06879972,"y":85.19759948},{"x":40.06879972,"y":92.29760052},{"x":32.16880028,"y":92.29760052}]} layer="top" />
      <courtyardoutline outline={[{"x":69.84244096,"y":88.2855994},{"x":69.84244096,"y":81.28559816},{"x":62.84243972,"y":81.28559816},{"x":62.84243972,"y":88.2855994}]} layer="top" />
      <courtyardoutline outline={[{"x":33.67575434,"y":48.751322359999996},{"x":33.67575434,"y":54.851322859999996},{"x":30.17575372,"y":54.851322859999996},{"x":30.17575372,"y":48.751322359999996}]} layer="top" />
      <courtyardoutline outline={[{"x":86.56044156,"y":90.81422273999999},{"x":86.56044156,"y":96.31422189999999},{"x":94.06044179999999,"y":96.31422189999999},{"x":94.06044179999999,"y":90.81422273999999}]} layer="top" />
      <courtyardoutline outline={[{"x":40.004634239999994,"y":48.8291886},{"x":47.50463447999999,"y":48.8291886},{"x":47.50463447999999,"y":54.329187759999996},{"x":40.004634239999994,"y":54.329187759999996}]} layer="top" />
            </footprint>} symbol={<symbol>
      <schematicpath svgPath={"M7.745306-1.915506L8.245003-1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.57874-1.915506L7.745306-1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.194852-1.915506L8.245003-1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-2.082071L8.911266-2.082071 8.911266-1.915506 8.7447-1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-2.082071L7.57874-2.082071"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.794852-1.915506L8.7447-1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-2.248637L9.161114-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.57874-2.248637L7.745306-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.110963-2.248637L9.161114-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.49788-2.9149L3.581163-2.9149 4.08086-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.249849 0L0.333131 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.366263 0L0.333131 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-2.748334L9.161114-2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-2.748334L7.57874-2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.110963-2.748334L9.161114-2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.660812-2.748334L9.993943-2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.993943-2.9149L9.993943-3.081466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-2.581769L9.993943-2.581769 9.993943-2.748334 9.993943-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.993943-2.9149L8.994549-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-2.831617L10.327075-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-2.9149L9.993943-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.57874-2.581769L7.745306-2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.331314 1.998789L3.747729 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.331314 1.998789L3.248031 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.331314 2.498486L3.331314 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.660812-4.164143L9.660812-4.247426"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-5.663234L7.911872-5.496669"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.913689-0.916111L4.913689-0.832829 4.164143-0.832829"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.749546-8.7447L1.415809-8.7447 1.415809-8.911266"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.082071-7.745306L-2.581769-7.745306-2.581769-6.579346-2.9149-6.579346-2.9149-6.912477"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.580557-6.912477L-4.580557-6.579346-5.080254-6.579346-5.080254-6.912477"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.083283-6.745912L0.083283-6.579346-0.416414-6.579346-0.416414-6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.665051-0.58298L-2.831617-0.58298"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152-1.249243L-13.99152-0.999394"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286-0.499697L-8.328286-0.58298-8.078437-0.58298"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.078437-0.58298L-7.828589-0.58298-7.828589-0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152 1.16596L-13.99152 1.415809"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.161114-3.248031L-9.161114-2.998183"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075 8.661417L10.327075 8.328286 9.32768 8.328286 8.16172 8.328286"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.32768 8.578134L9.32768 8.328286"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 8.328286L8.16172 8.494852"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.828589 8.328286L8.16172 8.328286"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.826166 9.244397L11.992732 9.244397"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.33192 8.411569L2.33192 8.16172 0.166566 8.16172"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.33192 7.662023L2.33192 7.412174 0.166566 7.412174"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.166566 7.328892L0.166566 7.412174"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.166566 7.662023L0.166566 8.16172"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.166566 8.411569L-0.083283 8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.166566 8.411569L0.166566 8.16172"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.166566 7.412174L0.166566 7.662023"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.710963-2.748334L9.660812-2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.0447-2.9149L8.994549-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-2.881769L10.327075-2.831617"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.2149 1.998789L3.248031 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.660812-4.131012L9.660812-4.164143"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.799697-8.7447L0.749546-8.7447"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.580557-6.862326L-4.580557-6.912477"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.083283-6.69576L0.083283-6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286-0.466566L-8.328286-0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.828589-0.549849L-7.828589-0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075 8.611266L10.327075 8.661417"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.32768 8.586281L9.32768 8.578134"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 8.407922L8.16172 8.494852"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.795457 8.328286L7.828589 8.328286"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.033434 8.411569L-0.083283 8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-1.132829L-4.913689-1.082677"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-4.880557L-4.913689-4.830406"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.243186-3.548031L-11.243186-3.49788"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.24258-0.050151L-12.24258 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.913083 1.532223L5.913083 1.499091"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.579346-4.580557L6.579346-4.66384 6.745912-4.66384 7.328892-4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.328892-4.66384L7.911872-4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.579346-4.580557L6.579346-4.413992"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-4.630709L7.911872-4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.41278-4.580557L6.41278-8.245003 5.913083-8.245003 5.579952-8.245003"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.41278-4.580557L6.41278-4.413992"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.080254-5.496669L5.163537-5.496669 6.079649-5.496669 6.079649-4.580557"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.665051-5.080254L2.665051-5.496669"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.665051-5.080254L2.165354-5.080254"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.079649-4.580557L6.079649-4.413992"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.080254-5.496669L2.665051-5.496669"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.998789 7.412174L-1.74894 7.412174-1.16596 7.412174"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.665051-5.047123L2.665051-5.080254"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.165354-5.047123L2.165354-5.080254"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.882071 7.412174L-1.998789 7.412174"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.163537-5.330103L5.913083-5.330103 5.913083-4.580557"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.163537-5.330103L3.664446-5.330103 3.664446-4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.664446-4.66384L3.664446-4.580557"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.913083-4.413992L5.913083-4.580557"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.998789 8.16172L-1.74894 8.16172-1.16596 8.16172"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.664446-4.547426L3.664446-4.580557"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.882071 8.16172L-1.998789 8.16172"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-3.414597L8.494852-3.414597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-3.414597L7.57874-3.414597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.494852-3.414597L9.161114-3.414597 9.161114-5.413386 10.660206-5.413386"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-5.380254L10.660206-5.413386"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-3.248031L8.494852-3.248031"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.57874-3.248031L7.745306-3.248031"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.660812-3.49788L9.660812-3.331314"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.494852-3.248031L9.660812-3.248031 9.660812-3.331314"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.998789 8.411569L-1.74894 8.411569-1.16596 8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.660812-3.531012L9.660812-3.49788"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.882071 8.411569L-1.998789 8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.41278-0.916111L6.41278-0.499697 6.745912-0.499697 7.57874-0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.246214 6.745912L7.079043 6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 6.745912L7.57874 6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.611872 6.745912L7.57874 6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.57874 0L6.745912 0 5.913083 0 5.913083-0.916111"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.246214 4.830406L7.079043 4.830406"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 4.830406L7.57874 4.830406"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.611872 4.830406L7.57874 4.830406"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.080254-0.749546L5.080254-0.666263 4.164143-0.666263"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.080254-0.916111L5.080254-0.749546"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.246214 2.581769L7.079043 2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 2.581769L7.495457 2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.528589 2.581769L7.495457 2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.164143-0.333131L5.413386-0.333131 5.413386-0.916111"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.246214 2.9149L7.079043 2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 2.9149L7.495457 2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.528589 2.9149L7.495457 2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.164143-0.166566L5.579952-0.166566 5.579952-0.916111"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 4.497274L6.246214 4.497274"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 4.497274L7.57874 4.497274"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.611872 4.497274L7.57874 4.497274"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.079649-0.916111L6.079649-0.166566 6.745912-0.166566 7.57874-0.166566"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.246214 6.41278L7.079043 6.41278"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 6.41278L7.57874 6.41278"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.611872 6.41278L7.57874 6.41278"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.998789-1.915506L2.248637-1.915506 3.331314-1.915506 4.08086-1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.998789-1.915506L1.998789-1.249243 1.499091-1.249243"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.749546 0.999394L0.832829 0.999394 2.248637 0.999394"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.248637 0.999394L2.248637-1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-1.249243L1.16596-1.249243"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.49788 8.16172L-3.248031 8.16172-2.9149 8.16172"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617 1.249243L-2.748334 1.249243-2.498486 1.249243"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617-3.331314L-2.498486-3.331314"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-1.199091L1.499091-1.249243"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.381163 8.16172L-3.49788 8.16172"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.08086-2.248637L3.331314-2.248637 2.581769-2.248637 1.082677-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.749546 1.332526L0.832829 1.332526 2.581769 1.332526"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.581769 1.332526L2.581769-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-2.248637L1.082677-2.082071 0.499697-2.082071"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.499697-2.082071L0.166566-2.082071"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.49788 7.662023L-3.248031 7.662023-2.9149 7.662023"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617 1.415809L-2.748334 1.415809-2.498486 1.415809"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617-3.49788L-2.498486-3.49788"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.499697-2.03192L0.499697-2.082071"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.381163 7.662023L-3.49788 7.662023"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-2.415203L9.91066-2.415203"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.660812-2.248637L9.91066-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-2.248637L10.327075-2.082071"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.91066-2.415203L9.91066-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.91066-2.248637L10.327075-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-2.33192L10.327075-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-2.415203L7.57874-2.415203"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.998789 7.911872L-1.74894 7.911872-1.16596 7.911872"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 9.32768L8.16172 9.410963 9.32768 9.410963 10.327075 9.410963 10.993337 9.410963"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075 9.410963L10.327075 9.161114"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.743489 6.912477L10.993337 6.912477"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 9.577529L10.993337 9.410963 10.993337 6.912477"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 6.912477L10.993337 6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 6.745912L10.743489 6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 6.745912L10.993337 4.996972"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.743489 4.996972L10.993337 4.996972"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 4.996972L10.993337 4.830406"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 4.830406L10.743489 4.830406"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 4.830406L10.993337 3.081466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.743489 3.081466L10.993337 3.081466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 3.081466L10.993337 2.9149 10.743489 2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.992732 9.410963L10.993337 9.410963"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.32768 9.077832L9.32768 9.410963"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 9.410963L6.99576 9.410963"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.710963-2.248637L9.660812-2.248637"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-2.281769L10.327075-2.33192"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.882071 7.911872L-1.998789 7.911872"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 9.447922L8.16172 9.32768"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075 9.211266L10.327075 9.161114"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.32768 9.186281L9.32768 9.077832"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.054058 9.431266L7.054058 9.410963 6.99576 9.410963"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.49788 8.411569L-3.248031 8.411569-2.9149 8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.08086-2.082071L3.331314-2.082071 2.415203-2.082071 1.665657-2.082071"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.749546 1.16596L0.832829 1.16596 2.415203 1.16596"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.415203 1.16596L2.415203-2.082071"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.665657-2.082071L1.499091-2.082071 1.499091-1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.16596-1.74894L1.499091-1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617 0.416414L-2.748334 0.416414-2.498486 0.416414"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617-2.498486L-2.748334-2.498486-2.498486-2.498486"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.381163 8.411569L-3.49788 8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-1.799091L1.499091-1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.49788 7.911872L-3.248031 7.911872-2.9149 7.911872"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.749546 1.499091L0.832829 1.499091 2.748334 1.499091"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.748334 1.499091L2.748334-2.415203"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.08086-2.415203L3.331314-2.415203 2.748334-2.415203"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-2.415203L1.082677-2.665051 0.499697-2.665051 0.499697-2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.499697-2.665051L0.166566-2.665051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-2.415203L2.748334-2.415203"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617 0.249849L-2.748334 0.249849-2.498486 0.249849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617-2.33192L-2.748334-2.33192-2.498486-2.33192"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.381163 7.911872L-3.49788 7.911872"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.499697-2.63192L0.499697-2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.49788 7.412174L-3.248031 7.412174-2.9149 7.412174"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.749546 1.832223L0.832829 1.832223 3.081466 1.832223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.081466 1.832223L3.081466-2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.08086-2.748334L3.331314-2.748334 3.081466-2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.082071-2.831617L2.082071-3.414597 1.499091-3.414597 1.499091-3.331314"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.082071-2.831617L2.082071-2.748334 3.081466-2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-3.414597L1.249243-3.414597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617 0.083283L-2.748334 0.083283-2.498486 0.083283"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617-2.165354L-2.748334-2.165354-2.498486-2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.381163 7.412174L-3.49788 7.412174"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-3.381466L1.499091-3.331314"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.49788 7.162326L-3.248031 7.162326-2.9149 7.162326"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.749546 1.665657L0.832829 1.665657 2.9149 1.665657"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.9149 1.665657L2.9149-2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.08086-2.581769L3.331314-2.581769 2.9149-2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.9149-2.581769L1.499091-2.581769 1.499091-2.665051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-2.831617L1.499091-2.665051"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-2.581769L1.249243-2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617 1.582374L-2.748334 1.582374-2.498486 1.582374"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.831617-3.664446L-2.498486-3.664446"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.381163 7.162326L-3.49788 7.162326"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-2.781466L1.499091-2.831617"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.494852-2.9149L7.745306-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.57874-2.9149L7.745306-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.665657 0L1.832223 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.082071-8.7447L-2.581769-8.7447"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.083283-7.245609L0.083283-7.412174 0.249849-7.412174 0.249849-7.745306"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.249849-7.745306L0.416414-7.745306 1.582374-7.745306 1.582374-7.57874 1.915506-7.57874"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-0.58298L-4.913689-0.58298"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-4.330709L-4.913689-4.330709"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.993337-2.998183L-11.243186-2.998183"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.493035 1.332526L-11.493035 1.082677"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.575712-0.333131L-12.575712 0.499697-12.575712 0.749546"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.24258 0.499697L-12.575712 0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.4447-2.9149L8.494852-2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.083283-7.29576L0.083283-7.245609"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.915506-7.611872L1.915506-7.57874"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-0.532829L-4.913689-0.58298"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-4.280557L-4.913689-4.330709"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.243186-2.948031L-11.243186-2.998183"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.24258 0.549849L-12.24258 0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-4.030709L1.082677-3.997577"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.664446-3.947426L3.664446-3.914294"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.165354-4.447123L2.165354-4.413992"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.723349-3.394294L2.723349-3.414597 2.665051-3.414597"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-4.780254L10.660206-4.747123"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-4.030709L7.911872-3.997577"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 0.133434L-13.158692 0.166566"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.662629 2.798486L-6.662629 2.831617"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 0.966263L-8.328286 0.999394"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.162932 2.798486L-6.162932 2.831617"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.663234 2.798486L-5.663234 2.831617"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 2.548637L-13.158692 2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.579346-0.916111L6.579346-0.666263 6.745912-0.666263 7.57874-0.666263"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 4.66384L5.913083 4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 2.748334L5.913083 2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.913083 6.579346L7.079043 6.579346"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.913083 3.414597L5.913083 4.66384 5.913083 6.579346"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.913083 3.414597L5.913083 2.748334 5.913083 2.415203 5.080254 2.415203"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.080254 2.415203L5.913083 2.415203 5.913083 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 6.579346L8.7447 6.579346"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 4.66384L8.7447 4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.079043 2.748334L8.7447 2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.913083 2.132223L5.913083 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-4.747123L1.082677-5.663234 5.163537-5.663234"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-4.747123L1.082677-4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.246214-4.580557L6.246214-4.413992"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.246214-4.580557L6.246214-5.496669"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.246214-5.496669L6.246214-5.663234 5.163537-5.663234"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.998789 7.662023L-1.74894 7.662023-1.16596 7.662023"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-4.630709L1.082677-4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-1.882071 7.662023L-1.998789 7.662023"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.66384-0.499697L4.164143-0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.66384-0.499697L5.24682-0.499697 5.24682-0.916111"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.7447 3.081466L8.578134 3.081466 8.578134 3.49788 11.326469 3.49788 11.326469 2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.326469 2.748334L10.743489 2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.743489 2.581769L11.326469 2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.326469 2.581769L11.326469 2.748334"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.326469 2.581769L11.493035 2.581769 11.992732 2.581769 11.992732 4.330709 12.492429 4.330709"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.830406 0L4.164143 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.830406 0L5.746517 0 5.746517-0.916111"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.743489 4.66384L11.326469 4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.7447 4.996972L8.578134 4.996972 8.578134 5.413386 11.326469 5.413386 11.326469 4.66384 11.326469 4.497274"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.326469 4.497274L10.743489 4.497274"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.326469 4.497274L11.493035 4.497274 12.492429 4.497274"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.57874-0.333131L6.745912-0.333131 6.246214-0.333131 6.246214-0.916111"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.326469 6.579346L10.743489 6.579346"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.7447 6.912477L8.578134 6.912477 8.578134 7.328892 11.326469 7.328892 11.326469 6.579346"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.743489 6.41278L11.326469 6.41278"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.326469 6.41278L11.326469 6.579346"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.326469 6.41278L11.493035 6.41278 11.992732 6.41278 11.992732 4.66384 12.492429 4.66384"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.749546 1.998789L0.832829 1.998789 2.498486 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.498486 1.998789L2.581769 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.498486 2.498486L2.498486 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.6149 1.998789L2.581769 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.332526 0.832829L0.832829 0.832829"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.332526 0.166566L1.332526 0.832829"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.832829 0.832829L0.749546 0.832829"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.745306-3.081466L7.57874-3.081466"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-7.57874L-4.580557-7.57874-4.08086-7.57874-2.9149-7.57874-2.9149-8.078437-2.748334-8.078437-2.082071-8.078437"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.580557-7.412174L-4.580557-7.57874"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.249849-8.411569L0.416414-8.411569 1.082677-8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-7.458498L-4.913689-7.57874"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.580557-7.462326L-4.580557-7.412174"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.08086-7.491811L-4.08086-7.57874"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.413992-9.077832L-4.413992-9.244397-3.248031-9.244397-3.248031-8.411569-2.082071-8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.249849-8.078437L0.416414-8.078437 1.582374-8.078437 1.582374-8.245003 1.915506-8.245003"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.747123-8.245003L1.915506-8.245003"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.915506-8.211872L1.915506-8.245003"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.08086-8.411569L-4.08086-8.578134"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.08086-8.531811L-4.08086-8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-8.411569L-4.913689-8.578134"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-8.498498L-4.913689-8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692-0.666263L-13.158692-0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.824955-0.666263L-13.158692-0.666263"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692-0.666263L-13.075409-0.666263"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692-0.666263L-13.158692-1.832223-10.993337-1.832223"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692-0.466566L-13.158692-0.499697"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.662629 1.998789L-6.662629 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384 1.249243L-6.662629 1.249243-6.662629 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-2.498486L-6.662629-2.498486-6.662629-1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.662629-1.74894L-6.662629 1.249243"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.662629 2.198486L-6.662629 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 0.166566L-8.328286 0.249849-8.328286 0.333131"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.911872 0.249849L-7.828589 0.249849-7.828589 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 0.249849L-7.911872 0.249849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384 0.249849L-4.830406 0.249849-4.830406 0.416414"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384 0.083283L-4.830406 0.083283-4.830406 0.249849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.830406 0.416414L-4.66384 0.416414"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.830406 0.249849L-5.24682 0.249849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.24682 0.249849L-5.330103 0.249849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.828589 0.249849L-7.57874 0.249849-7.495457 0.249849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-3.331314L-4.830406-3.331314-4.830406-3.49788-4.830406-3.664446-4.66384-3.664446"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-3.49788L-4.830406-3.49788"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.830406-3.49788L-5.330103-3.49788"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.495457 0.249849L-7.245609 0.249849-5.330103 0.249849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.330103-3.49788L-7.245609-3.49788-7.245609 0.249849"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 0.133434L-8.328286 0.166566"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 0.366263L-8.328286 0.333131"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.828589 0.050151L-7.828589 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.162932 1.998789L-6.162932 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384 1.415809L-6.162932 1.415809-6.162932 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-2.33192L-6.162932-2.33192-6.162932-1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.162932 1.415809L-6.162932-1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.162932 2.198486L-6.162932 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.663234 1.998789L-5.663234 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384 1.582374L-5.663234 1.582374-5.663234 1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-2.165354L-5.663234-2.165354-5.663234-1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.663234-1.74894L-5.663234 1.582374"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.663234 2.198486L-5.663234 2.165354"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 1.74894L-13.158692 1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.824955 1.74894L-13.158692 1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.080254 1.74894L-5.163537 1.74894-11.159903 1.74894-11.826166 1.74894-13.158692 1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.080254 1.74894L-4.66384 1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384 0.58298L-5.163537 0.58298-5.163537 1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.826166 1.582374L-11.826166 1.665657"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.826166 1.665657L-11.826166 1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.993337-0.832829L-11.159903-0.832829-11.159903 1.74894"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 1.948637L-13.158692 1.915506"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.161114-0.832829L-8.661417-0.832829"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.161114-1.998789L-8.661417-1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-3.164749L-8.661417-3.164749-8.661417-1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.661417-0.832829L-8.661417-1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.661417-1.998789L-4.66384-1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.076015-0.666263L-10.993337-0.666263"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.826166 0.58298L-11.826166-0.832829"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.826166-1.998789L-10.993337-1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.826166-0.832829L-11.826166-1.998789"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.99576 8.411569L6.99576 8.328286 7.162326 8.328286"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.054058 8.391266L7.054058 8.411569 6.99576 8.411569"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.195457 8.328286L7.162326 8.328286"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.245003 6.745912L8.7447 6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.211872 6.745912L8.245003 6.745912"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.245003 6.41278L8.7447 6.41278"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.211872 6.41278L8.245003 6.41278"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.245003 4.830406L8.7447 4.830406"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.211872 4.830406L8.245003 4.830406"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.245003 4.497274L8.7447 4.497274"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.211872 4.497274L8.245003 4.497274"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 2.581769L8.7447 2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.128589 2.581769L8.16172 2.581769"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 2.9149L8.7447 2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.128589 2.9149L8.16172 2.9149"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.665051-4.447123L2.665051-4.413992"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.723349-4.434294L2.723349-4.413992 2.665051-4.413992"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.966263 0L0.999394 0"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.199697-8.7447L0.249849-8.7447"} strokeWidth={0.02} strokeColor={"rgb(0, 150, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-8.07843731072078,"y":-0.58298001211387}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.16656571774681694,"y":7.412174439733495}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.16656571774681694,"y":7.662023016353725}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.16656571774681694,"y":8.161720169594187}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.16656571774681694,"y":8.411568746214417}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.3313143549363993,"y":1.9987886129618424}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.161720169594183,"y":8.328285887341007}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.32768019382192,"y":8.328285887341007}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.993943064809208,"y":-2.9149000605693516}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.993943064809208,"y":-2.748334342822531}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":7.911871592973952,"y":-4.6638400969109615}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.665051483949121,"y":-5.0802543912780145}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.660205935796476,"y":-5.413385826771654}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.4990914597213738,"y":-1.2492428831011502}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.2486371895820696,"y":-1.9155057540884286}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.4996971532404544,"y":-2.082071471835249}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.5817686250757106,"y":-2.2486371895820696}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":8.161720169594183,"y":9.410963052695337}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.32768019382192,"y":9.410963052695337}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":9.910660205935791,"y":-2.2486371895820696}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.32707450030285,"y":-2.2486371895820696}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.32707450030285,"y":9.410963052695337}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.993337371290117,"y":3.081465778316173}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.993337371290117,"y":4.830405814657784}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.993337371290117,"y":4.996971532404604}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.993337371290117,"y":6.745911568746217}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.993337371290117,"y":6.912477286493037}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":10.993337371290117,"y":9.410963052695337}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.4990914597213738,"y":-1.7489400363416099}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.41520290732889,"y":-2.082071471835249}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.4996971532404544,"y":-2.6650514839491226}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.748334342822531,"y":-2.415202907328892}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.4990914597213738,"y":-3.4145972138098113}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":3.0814657783161685,"y":-2.748334342822531}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.4990914597213738,"y":-2.5817686250757124}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.914900060569348,"y":-2.5817686250757124}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-12.57571168988492,"y":0.4996971532404597}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.243185947910362,"y":-2.998182919442762}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.9136886735311975,"y":-4.330708661417322}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.9136886735311975,"y":-0.58298001211387}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":-7.7453058752271335}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":5.91308298001211,"y":2.415202907328892}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":5.91308298001211,"y":2.748334342822531}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":5.91308298001211,"y":4.663840096910963}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.326468806783765,"y":2.5817686250757124}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.326468806783765,"y":2.748334342822531}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.326468806783765,"y":4.497274379164143}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.326468806783765,"y":4.663840096910963}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.326468806783765,"y":6.412780133252575}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":11.326468806783765,"y":6.579345850999396}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":2.4984857662023003,"y":1.9987886129618424}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.5805572380375565,"y":-7.578740157480313}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.080860084797099,"y":-7.578740157480313}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":1.915505754088425,"y":-8.245003028467595}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-13.15869170199879,"y":-0.6662628709872802}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.662628709872809,"y":1.2492428831011502}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.32828588734101,"y":0.24984857662023252}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.828588734100549,"y":0.24984857662023252}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-7.245608721986677,"y":0.24984857662023252}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.830405814657787,"y":-3.4978800726832215}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-4.830405814657787,"y":0.24984857662023252}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-6.162931556632348,"y":1.4158086008479707}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-5.66323440339189,"y":1.5823743185947912}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-13.15869170199879,"y":1.7489400363416117}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.826165960024232,"y":1.7489400363416117}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-11.159903089036952,"y":1.7489400363416117}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-5.163537250151428,"y":1.7489400363416117}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematiccircle center={{"x":-8.661417322834648,"y":-1.9987886129618389}} radius={0.03} strokeWidth={0.037606006460777865} color={"none"} isFilled={true} fillColor={"rgb(0, 150, 0)"} />
      <schematicpath svgPath={"M5.013628-4.480618L5.146881-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.146881-4.480618L5.013628-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.180194-4.480618L5.313446-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.313446-4.480618L5.180194-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.34676-4.480618L5.480012-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.480012-4.480618L5.34676-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.513325-4.480618L5.646578-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.646578-4.480618L5.513325-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.679891-4.480618L5.813144-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.813144-4.480618L5.679891-4.347365"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.014234-3.481224L4.147486-3.347971"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.147486-3.481224L4.014234-3.347971"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.014234-3.314658L4.147486-3.181405"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.147486-3.314658L4.014234-3.181405"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.014234-3.148092L4.147486-3.014839"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.147486-3.148092L4.014234-3.014839"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.512114-3.148092L7.645366-3.014839"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.645366-3.148092L7.512114-3.014839"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.058147-0.399758L-13.924894-0.266505"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.924894-0.399758L-14.058147-0.266505"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.730466 1.016051L-4.597214 1.149303"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.597214 1.016051L-4.730466 1.149303"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.730466-0.149909L-4.597214-0.016657"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.597214-0.149909L-4.730466-0.016657"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.898243 1.016051L-2.764991 1.149303"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.764991 1.016051L-2.898243 1.149303"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.898243-0.149909L-2.764991-0.016657"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.764991-0.149909L-2.898243-0.016657"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.730466-3.897638L-4.597214-3.764385"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.597214-3.897638L-4.730466-3.764385"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.898243-3.897638L-2.764991-3.764385"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.764991-3.897638L-2.898243-3.764385"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.898243-2.731678L-2.764991-2.598425"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.764991-2.731678L-2.898243-2.598425"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.058147 2.015445L-13.924894 2.148698"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.924894 2.015445L-14.058147 2.148698"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.730466-2.731678L-4.597214-2.598425"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.597214-2.731678L-4.730466-2.598425"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.227741-1.399152L-9.094488-1.265899"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.094488-1.399152L-9.227741-1.265899"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.227741-1.232586L-9.094488-1.099334"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.094488-1.232586L-9.227741-1.099334"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.227741-1.066021L-9.094488-0.932768"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.094488-1.066021L-9.227741-0.932768"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.059964-1.399152L-10.926711-1.265899"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.926711-1.399152L-11.059964-1.265899"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.059964-1.232586L-10.926711-1.099334"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.926711-1.232586L-11.059964-1.099334"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.059964-1.066021L-10.926711-0.932768"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.926711-1.066021L-11.059964-0.932768"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.059964-2.565112L-10.926711-2.431859"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.926711-2.565112L-11.059964-2.431859"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.059964-2.398546L-10.926711-2.265294"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.926711-2.398546L-11.059964-2.265294"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.059964-2.231981L-10.926711-2.098728"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.926711-2.231981L-11.059964-2.098728"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.227741-2.565112L-9.094488-2.431859"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.094488-2.565112L-9.227741-2.431859"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.227741-2.398546L-9.094488-2.265294"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.094488-2.398546L-9.227741-2.265294"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.227741-2.231981L-9.094488-2.098728"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.094488-2.231981L-9.227741-2.098728"} strokeWidth={0.02} strokeColor={"#ff0000"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.407935 10.327075L-14.407935 6.579346"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-10.826772 10.327075L-10.826772 6.579346"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.407935 10.327075L-10.826772 10.327075"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.575106 9.827377L-13.575106 6.579346"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.407935 9.827377L-10.826772 9.827377"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.407935 9.077832L-10.826772 9.077832"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.407935 8.16172L-10.826772 8.16172"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.407935 7.745306L-10.826772 7.745306"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.407935 6.579346L-10.826772 6.579346"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.908237 6.579346L-13.908237 5.663234"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.243186 6.579346L-11.243186 5.663234"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.908237 6.579346L-11.243186 6.579346"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.908237 5.663234L-11.243186 5.663234"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.908843 7.162326L12.908843 6.662629"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 6.912477L12.9255 6.912477 13.008783 6.99576"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 6.912477L12.9255 6.912477 13.008783 6.829194"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 6.912477L13.075409 6.745912 12.908843 6.745912 13.075409 6.745912"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.908843 7.079043L13.075409 7.079043 13.075409 7.328892"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.842217 7.079043L12.842217 6.745912"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 6.745912L13.075409 6.496063"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.908843 6.329497L12.908843 5.8298"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 6.079649L13.075409 5.913083 12.908843 5.913083 13.075409 5.913083"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.908843 6.246214L13.075409 6.246214 13.075409 6.496063"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.842217 6.246214L12.842217 5.913083"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 5.913083L13.075409 5.663234"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.842217 6.912477L12.509085 6.912477"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.842217 6.079649L12.509085 6.079649"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 6.496063L13.40854 6.496063"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 6.079649L12.9255 6.079649 13.008783 6.162932"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M13.075409 6.079649L12.9255 6.079649 13.008783 5.996366"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.407935 7.328892L-10.826772 7.328892"} strokeWidth={0.05} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.665051-5.047123L2.665051-4.947103"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.665051-4.547143L2.665051-4.447123"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.585071-4.947103L2.585071-4.547143 2.745031-4.547143 2.745031-4.947103 2.585071-4.947103"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"U13"} schX={2.825051483949121} schY={-4.587122955784373} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"3K"} schX={2.825051483949121} schY={-4.907122955784372} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.882071 8.16172L-2.082071 8.16172"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.182071 8.06172L-2.171955 8.062233-2.161942 8.063767-2.152135 8.066306-2.142636 8.069824-2.133541 8.074286-2.124945 8.079644-2.116934 8.085844-2.109592 8.092823-2.102994 8.10051-2.097207 8.108824-2.092291 8.117681-2.088296 8.12699-2.085264 8.136655-2.083225 8.146577-2.0822 8.156655-2.0822 8.166785-2.083225 8.176863-2.085264 8.186785-2.088296 8.196451-2.092291 8.20576-2.097207 8.214617-2.102994 8.222931-2.109592 8.230617-2.116934 8.237596-2.124945 8.243797-2.133541 8.249155-2.142636 8.253616-2.152135 8.257134-2.161942 8.259673-2.171955 8.261207-2.182071 8.26172"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP8"} schX={-2.207071471835256} schY={8.161720169594187} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.882071 7.412174L-2.082071 7.412174"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.182071 7.312174L-2.171955 7.312688-2.161942 7.314221-2.152135 7.316761-2.142636 7.320279-2.133541 7.32474-2.124945 7.330098-2.116934 7.336299-2.109592 7.343278-2.102994 7.350964-2.097207 7.359278-2.092291 7.368135-2.088296 7.377444-2.085264 7.387109-2.083225 7.397032-2.0822 7.40711-2.0822 7.417239-2.083225 7.427317-2.085264 7.43724-2.088296 7.446905-2.092291 7.456214-2.097207 7.465071-2.102994 7.473385-2.109592 7.481071-2.116934 7.48805-2.124945 7.494251-2.133541 7.499609-2.142636 7.50407-2.152135 7.507588-2.161942 7.510127-2.171955 7.511661-2.182071 7.512174"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP11"} schX={-2.207071471835256} schY={7.412174439733495} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.381163 8.16172L-3.581163 8.16172"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.681163 8.06172L-3.671046 8.062233-3.661033 8.063767-3.651227 8.066306-3.641727 8.069824-3.632633 8.074286-3.624036 8.079644-3.616026 8.085844-3.608684 8.092823-3.602085 8.10051-3.596299 8.108824-3.591382 8.117681-3.587388 8.12699-3.584355 8.136655-3.582316 8.146577-3.581291 8.156655-3.581291 8.166785-3.582316 8.176863-3.584355 8.186785-3.587388 8.196451-3.591382 8.20576-3.596299 8.214617-3.602085 8.222931-3.608684 8.230617-3.616026 8.237596-3.624036 8.243797-3.632633 8.249155-3.641727 8.253616-3.651227 8.257134-3.661033 8.259673-3.671046 8.261207-3.681163 8.26172"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP2"} schX={-3.7061629315566336} schY={8.161720169594187} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.381163 7.911872L-3.581163 7.911872"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.681163 7.811872L-3.671046 7.812385-3.661033 7.813919-3.651227 7.816458-3.641727 7.819976-3.632633 7.824437-3.624036 7.829795-3.616026 7.835996-3.608684 7.842975-3.602085 7.850661-3.596299 7.858975-3.591382 7.867832-3.587388 7.877141-3.584355 7.886806-3.582316 7.896729-3.581291 7.906807-3.581291 7.916937-3.582316 7.927014-3.584355 7.936937-3.587388 7.946602-3.591382 7.955911-3.596299 7.964768-3.602085 7.973082-3.608684 7.980768-3.616026 7.987747-3.624036 7.993948-3.632633 7.999306-3.641727 8.003767-3.651227 8.007286-3.661033 8.009825-3.671046 8.011359-3.681163 8.011872"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP3"} schX={-3.7061629315566336} schY={7.911871592973956} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.381163 7.412174L-3.581163 7.412174"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.681163 7.312174L-3.671046 7.312688-3.661033 7.314221-3.651227 7.316761-3.641727 7.320279-3.632633 7.32474-3.624036 7.330098-3.616026 7.336299-3.608684 7.343278-3.602085 7.350964-3.596299 7.359278-3.591382 7.368135-3.587388 7.377444-3.584355 7.387109-3.582316 7.397032-3.581291 7.40711-3.581291 7.417239-3.582316 7.427317-3.584355 7.43724-3.587388 7.446905-3.591382 7.456214-3.596299 7.465071-3.602085 7.473385-3.608684 7.481071-3.616026 7.48805-3.624036 7.494251-3.632633 7.499609-3.641727 7.50407-3.651227 7.507588-3.661033 7.510127-3.671046 7.511661-3.681163 7.512174"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP5"} schX={-3.7061629315566336} schY={7.412174439733495} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.381163 7.162326L-3.581163 7.162326"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.681163 7.062326L-3.671046 7.062839-3.661033 7.064373-3.651227 7.066912-3.641727 7.07043-3.632633 7.074891-3.624036 7.08025-3.616026 7.08645-3.608684 7.093429-3.602085 7.101115-3.596299 7.109429-3.591382 7.118286-3.587388 7.127595-3.584355 7.137261-3.582316 7.147183-3.581291 7.157261-3.581291 7.167391-3.582316 7.177469-3.584355 7.187391-3.587388 7.197056-3.591382 7.206365-3.596299 7.215222-3.602085 7.223536-3.608684 7.231223-3.616026 7.238202-3.624036 7.244402-3.632633 7.249761-3.641727 7.254222-3.651227 7.25774-3.661033 7.260279-3.671046 7.261813-3.681163 7.262326"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP6"} schX={-3.7061629315566336} schY={7.162325863113264} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M0.033434 8.411569L-0.166566 8.411569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.266566 8.311569L-0.256449 8.312082-0.246436 8.313616-0.236629 8.316155-0.22713 8.319673-0.218036 8.324134-0.209439 8.329492-0.201428 8.335693-0.194086 8.342672-0.187488 8.350358-0.181701 8.358672-0.176785 8.367529-0.172791 8.376838-0.169758 8.386503-0.167719 8.396426-0.166694 8.406504-0.166694 8.416634-0.167719 8.426712-0.169758 8.436634-0.172791 8.446299-0.176785 8.455608-0.181701 8.464465-0.187488 8.472779-0.194086 8.480465-0.201428 8.487445-0.209439 8.493645-0.218036 8.499003-0.22713 8.503465-0.236629 8.506983-0.246436 8.509522-0.256449 8.511056-0.266566 8.511569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP13"} schX={-0.29156571774682405} schY={8.411568746214417} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M1.082677-4.630709L1.082677-4.530689"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-4.130729L1.082677-4.030709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.002697-4.530689L1.002697-4.130729 1.162657-4.130729 1.162657-4.530689 1.002697-4.530689"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R11"} schX={1.2426771653543298} schY={-4.170708661417324} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30K"} schX={1.2426771653543298} schY={-4.490708661417322} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M3.664446-4.547426L3.664446-4.447406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.664446-4.047446L3.664446-3.947426"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.584466-4.447406L3.584466-4.047446 3.744426-4.047446 3.744426-4.447406 3.584466-4.447406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R12"} schX={3.8244457904300404} schY={-4.087425802543914} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"15K"} schX={3.8244457904300404} schY={-4.407425802543912} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M2.165354-5.047123L2.165354-4.947103"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.165354-4.547143L2.165354-4.447123"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.085374-4.947103L2.085374-4.547143 2.245334-4.547143 2.245334-4.947103 2.085374-4.947103"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R13"} schX={2.3253543307086595} schY={-4.587122955784373} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30K"} schX={2.3253543307086595} schY={-4.907122955784372} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.882071 7.662023L-2.082071 7.662023"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.182071 7.562023L-2.171955 7.562536-2.161942 7.56407-2.152135 7.566609-2.142636 7.570127-2.133541 7.574588-2.124945 7.579947-2.116934 7.586147-2.109592 7.593126-2.102994 7.600812-2.097207 7.609127-2.092291 7.617984-2.088296 7.627292-2.085264 7.636958-2.083225 7.64688-2.0822 7.656958-2.0822 7.667088-2.083225 7.677166-2.085264 7.687088-2.088296 7.696754-2.092291 7.706062-2.097207 7.714919-2.102994 7.723234-2.109592 7.73092-2.116934 7.737899-2.124945 7.744099-2.133541 7.749458-2.142636 7.753919-2.152135 7.757437-2.161942 7.759976-2.171955 7.76151-2.182071 7.762023"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP10"} schX={-2.207071471835256} schY={7.662023016353725} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.882071 8.411569L-2.082071 8.411569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.182071 8.311569L-2.171955 8.312082-2.161942 8.313616-2.152135 8.316155-2.142636 8.319673-2.133541 8.324134-2.124945 8.329492-2.116934 8.335693-2.109592 8.342672-2.102994 8.350358-2.097207 8.358672-2.092291 8.367529-2.088296 8.376838-2.085264 8.386503-2.083225 8.396426-2.0822 8.406504-2.0822 8.416634-2.083225 8.426712-2.085264 8.436634-2.088296 8.446299-2.092291 8.455608-2.097207 8.464465-2.102994 8.472779-2.109592 8.480465-2.116934 8.487445-2.124945 8.493645-2.133541 8.499003-2.142636 8.503465-2.152135 8.506983-2.161942 8.509522-2.171955 8.511056-2.182071 8.511569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP7"} schX={-2.207071471835256} schY={8.411568746214417} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M2.828286 2.498486L2.827944 2.503704 2.826924 2.508832 2.825243 2.513784 2.82293 2.518474 2.820025 2.522821 2.816577 2.526753 2.812646 2.530201 2.808298 2.533106 2.803608 2.535419 2.798657 2.537099 2.793528 2.53812 2.78831 2.538462 2.783092 2.53812 2.777964 2.537099 2.773012 2.535419 2.768322 2.533106 2.763974 2.530201 2.760043 2.526753 2.756595 2.522821 2.75369 2.518474 2.751377 2.513784 2.749696 2.508832 2.748676 2.503704 2.748334 2.498486 2.748676 2.493268 2.749696 2.488139 2.751377 2.483188 2.75369 2.478498 2.756595 2.47415 2.760043 2.470219 2.763974 2.466771 2.768322 2.463866 2.773012 2.461553 2.777964 2.459872 2.783092 2.458852 2.78831 2.45851 2.793528 2.458852 2.798657 2.459872 2.803608 2.461553 2.808298 2.463866 2.812646 2.466771 2.816577 2.470219 2.820025 2.47415 2.82293 2.478498 2.825243 2.483188 2.826924 2.488139 2.827944 2.493268 2.828286 2.498486"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.078134 2.498486L3.077792 2.503704 3.076772 2.508832 3.075091 2.513784 3.072779 2.518474 3.069874 2.522821 3.066426 2.526753 3.062494 2.530201 3.058147 2.533106 3.053457 2.535419 3.048505 2.537099 3.043377 2.53812 3.038159 2.538462 3.032941 2.53812 3.027812 2.537099 3.022861 2.535419 3.018171 2.533106 3.013823 2.530201 3.009892 2.526753 3.006444 2.522821 3.003539 2.518474 3.001226 2.513784 2.999545 2.508832 2.998525 2.503704 2.998183 2.498486 2.998525 2.493268 2.999545 2.488139 3.001226 2.483188 3.003539 2.478498 3.006444 2.47415 3.009892 2.470219 3.013823 2.466771 3.018171 2.463866 3.022861 2.461553 3.027812 2.459872 3.032941 2.458852 3.038159 2.45851 3.043377 2.458852 3.048505 2.459872 3.053457 2.461553 3.058147 2.463866 3.062494 2.466771 3.066426 2.470219 3.069874 2.47415 3.072779 2.478498 3.075091 2.483188 3.076772 2.488139 3.077792 2.493268 3.078134 2.498486"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.498486 2.498486L2.748334 2.498486"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.331314 2.498486L3.081466 2.498486"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.748334 2.498486L2.498486 2.498486"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.081466 2.498486L3.331314 2.498486"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.539067 0L1.538725 0.005218 1.537705 0.010346 1.536024 0.015298 1.533711 0.019988 1.530806 0.024336 1.527359 0.028267 1.523427 0.031715 1.519079 0.03462 1.51439 0.036933 1.509438 0.038614 1.504309 0.039634 1.499091 0.039976 1.493874 0.039634 1.488745 0.038614 1.483793 0.036933 1.479104 0.03462 1.474756 0.031715 1.470824 0.028267 1.467377 0.024336 1.464471 0.019988 1.462159 0.015298 1.460478 0.010346 1.459458 0.005218 1.459116 0 1.459458-0.005218 1.460478-0.010346 1.462159-0.015298 1.464471-0.019988 1.467377-0.024336 1.470824-0.028267 1.474756-0.031715 1.479104-0.03462 1.483793-0.036933 1.488745-0.038614 1.493874-0.039634 1.499091-0.039976 1.504309-0.039634 1.509438-0.038614 1.51439-0.036933 1.519079-0.03462 1.523427-0.031715 1.527359-0.028267 1.530806-0.024336 1.533711-0.019988 1.536024-0.015298 1.537705-0.010346 1.538725-0.005218 1.539067 0"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.372502 0L1.37216 0.005218 1.371139 0.010346 1.369459 0.015298 1.367146 0.019988 1.364241 0.024336 1.360793 0.028267 1.356861 0.031715 1.352514 0.03462 1.347824 0.036933 1.342872 0.038614 1.337744 0.039634 1.332526 0.039976 1.327308 0.039634 1.322179 0.038614 1.317228 0.036933 1.312538 0.03462 1.30819 0.031715 1.304259 0.028267 1.300811 0.024336 1.297906 0.019988 1.295593 0.015298 1.293912 0.010346 1.292892 0.005218 1.29255 0 1.292892-0.005218 1.293912-0.010346 1.295593-0.015298 1.297906-0.019988 1.300811-0.024336 1.304259-0.028267 1.30819-0.031715 1.312538-0.03462 1.317228-0.036933 1.322179-0.038614 1.327308-0.039634 1.332526-0.039976 1.337744-0.039634 1.342872-0.038614 1.347824-0.036933 1.352514-0.03462 1.356861-0.031715 1.360793-0.028267 1.364241-0.024336 1.367146-0.019988 1.369459-0.015298 1.371139-0.010346 1.37216-0.005218 1.372502 0"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.999394 0L1.122653 0"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.539067 0L1.665657 0"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.205936 0L1.205594 0.005218 1.204574 0.010346 1.202893 0.015298 1.20058 0.019988 1.197675 0.024336 1.194227 0.028267 1.190296 0.031715 1.185948 0.03462 1.181258 0.036933 1.176307 0.038614 1.171178 0.039634 1.16596 0.039976 1.160742 0.039634 1.155614 0.038614 1.150662 0.036933 1.145972 0.03462 1.141624 0.031715 1.137693 0.028267 1.134245 0.024336 1.13134 0.019988 1.129027 0.015298 1.127346 0.010346 1.126326 0.005218 1.125984 0 1.126326-0.005218 1.127346-0.010346 1.129027-0.015298 1.13134-0.019988 1.134245-0.024336 1.137693-0.028267 1.141624-0.031715 1.145972-0.03462 1.150662-0.036933 1.155614-0.038614 1.160742-0.039634 1.16596-0.039976 1.171178-0.039634 1.176307-0.038614 1.181258-0.036933 1.185948-0.03462 1.190296-0.031715 1.194227-0.028267 1.197675-0.024336 1.20058-0.019988 1.202893-0.015298 1.204574-0.010346 1.205594-0.005218 1.205936 0"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.332526 0.039976L1.332526 0.166566"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.122653 0L0.999394 0"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.332526 0.043307L1.332526 0.166566"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.542399 0L1.665657 0"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.723349-4.054294L2.593349-3.794294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.863349-3.794294L2.723349-4.054294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.593349-3.794294L2.863349-3.794294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.863349-4.054294L2.593349-4.054294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.723349-3.794294L2.723349-3.394294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.723349-4.434294L2.723349-4.064294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D3"} schX={2.953349485160505} schY={-3.904294367050273} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"Red"} schX={2.4133494851605057} schY={-3.914294367050273} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.381163 8.411569L-3.581163 8.411569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.681163 8.311569L-3.671046 8.312082-3.661033 8.313616-3.651227 8.316155-3.641727 8.319673-3.632633 8.324134-3.624036 8.329492-3.616026 8.335693-3.608684 8.342672-3.602085 8.350358-3.596299 8.358672-3.591382 8.367529-3.587388 8.376838-3.584355 8.386503-3.582316 8.396426-3.581291 8.406504-3.581291 8.416634-3.582316 8.426712-3.584355 8.436634-3.587388 8.446299-3.591382 8.455608-3.596299 8.464465-3.602085 8.472779-3.608684 8.480465-3.616026 8.487445-3.624036 8.493645-3.632633 8.499003-3.641727 8.503465-3.651227 8.506983-3.661033 8.509522-3.671046 8.511056-3.681163 8.511569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP1"} schX={-3.7061629315566336} schY={8.411568746214417} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.381163 7.662023L-3.581163 7.662023"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.681163 7.562023L-3.671046 7.562536-3.661033 7.56407-3.651227 7.566609-3.641727 7.570127-3.632633 7.574588-3.624036 7.579947-3.616026 7.586147-3.608684 7.593126-3.602085 7.600812-3.596299 7.609127-3.591382 7.617984-3.587388 7.627292-3.584355 7.636958-3.582316 7.64688-3.581291 7.656958-3.581291 7.667088-3.582316 7.677166-3.584355 7.687088-3.587388 7.696754-3.591382 7.706062-3.596299 7.714919-3.602085 7.723234-3.608684 7.73092-3.616026 7.737899-3.624036 7.744099-3.632633 7.749458-3.641727 7.753919-3.651227 7.757437-3.661033 7.759976-3.671046 7.76151-3.681163 7.762023"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP4"} schX={-3.7061629315566336} schY={7.662023016353725} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-1.882071 7.911872L-2.082071 7.911872"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.182071 7.811872L-2.171955 7.812385-2.161942 7.813919-2.152135 7.816458-2.142636 7.819976-2.133541 7.824437-2.124945 7.829795-2.116934 7.835996-2.109592 7.842975-2.102994 7.850661-2.097207 7.858975-2.092291 7.867832-2.088296 7.877141-2.085264 7.886806-2.083225 7.896729-2.0822 7.906807-2.0822 7.916937-2.083225 7.927014-2.085264 7.936937-2.088296 7.946602-2.092291 7.955911-2.097207 7.964768-2.102994 7.973082-2.109592 7.980768-2.116934 7.987747-2.124945 7.993948-2.133541 7.999306-2.142636 8.003767-2.152135 8.007286-2.161942 8.009825-2.171955 8.011359-2.182071 8.011872"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"TP9"} schX={-2.207071471835256} schY={7.911871592973956} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M4.413992-1.249243h2.831617v-2.831617h-2.831617Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U1"} schX={4.4139915202907325} schY={-1.1192428831011512} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"DRV8307"} schX={4.4139915202907325} schY={-4.210860084797094} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-1.915506L4.08086-1.915506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={4.247425802543912} schY={-1.895505754088429} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HU+"} schX={4.51399152029073} schY={-1.9155057540884286} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-2.082071L4.08086-2.082071"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={4.247425802543912} schY={-2.0620714718352495} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HU-"} schX={4.51399152029073} schY={-2.082071471835249} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-2.248637L4.08086-2.248637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={4.247425802543912} schY={-2.22863718958207} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HV+"} schX={4.51399152029073} schY={-2.2486371895820696} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-2.415203L4.08086-2.415203"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={4.247425802543912} schY={-2.3952029073288923} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HV-"} schX={4.51399152029073} schY={-2.415202907328892} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-2.581769L4.08086-2.581769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={4.247425802543912} schY={-2.561768625075713} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HW+"} schX={4.51399152029073} schY={-2.5817686250757124} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-2.748334L4.08086-2.748334"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={4.247425802543912} schY={-2.7283343428225315} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"HW-"} schX={4.51399152029073} schY={-2.748334342822531} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-2.9149L4.08086-2.9149"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={4.247425802543912} schY={-2.894900060569352} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VSW"} schX={4.51399152029073} schY={-2.9149000605693516} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-3.081466L4.08086-3.081466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={4.247425802543912} schY={-3.0614657783161725} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"RSVD"} schX={4.51399152029073} schY={-3.081465778316172} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-3.248031L4.08086-3.248031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"9"} schX={4.247425802543912} schY={-3.2280314960629912} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"RSVD"} schX={4.51399152029073} schY={-3.2480314960629926} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M4.413992-3.414597L4.08086-3.414597"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"10"} schX={4.247425802543912} schY={-3.3945972138098117} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"RSVD"} schX={4.51399152029073} schY={-3.4145972138098113} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M5.080254-4.08086L5.080254-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"11"} schX={5.060254391278006} schY={-4.2474258025439084} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"RSVD"} schX={5.080254391278011} schY={-3.9808600847970865} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M5.24682-4.08086L5.24682-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"12"} schX={5.2268201090248265} schY={-4.2474258025439084} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"RSVD"} schX={5.246820109024831} schY={-3.9808600847970865} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M5.413386-4.08086L5.413386-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"13"} schX={5.393385826771649} schY={-4.2474258025439156} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"RSVD"} schX={5.413385826771652} schY={-3.9808600847970865} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M5.579952-4.08086L5.579952-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"14"} schX={5.559951544518469} schY={-4.2474258025439156} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"RSVD"} schX={5.579951544518474} schY={-3.9808600847970865} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M5.746517-4.08086L5.746517-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"15"} schX={5.72651726226529} schY={-4.2474258025439156} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"RSVD"} schX={5.746517262265295} schY={-3.9808600847970936} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M5.913083-4.08086L5.913083-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"16"} schX={5.89308298001211} schY={-4.2474258025439156} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"HALLOUT"} schX={5.913082980012112} schY={-3.980860084797097} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M6.079649-4.08086L6.079649-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"17"} schX={6.059648697758931} schY={-4.2474258025439156} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"FAULTn"} schX={6.079648697758929} schY={-3.9808600847971007} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M6.246214-4.08086L6.246214-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"18"} schX={6.226214415505751} schY={-4.2474258025439156} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"LOCKn"} schX={6.246214415505749} schY={-3.9808600847971007} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M6.41278-4.08086L6.41278-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"19"} schX={6.392780133252572} schY={-4.2474258025439156} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"PWM"} schX={6.41278013325257} schY={-3.9808600847971007} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M6.579346-4.08086L6.579346-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"20"} schX={6.559345850999389} schY={-4.247425802543919} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"BRAKE"} schX={6.57934585099939} schY={-3.9808600847971007} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={90} />
      <schematicpath svgPath={"M7.245609-3.414597L7.57874-3.414597"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"21"} schX={7.412174439733491} schY={-3.3945972138098117} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"DIR"} schX={7.145608721986669} schY={-3.4145972138098113} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-3.248031L7.57874-3.248031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"22"} schX={7.412174439733491} schY={-3.2280314960629912} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"ENABLE#"} schX={7.145608721986669} schY={-3.2480314960629926} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-3.081466L7.57874-3.081466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"23"} schX={7.412174439733491} schY={-3.0614657783161725} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"RSVD"} schX={7.145608721986669} schY={-3.081465778316172} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-2.9149L7.57874-2.9149"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"24"} schX={7.412174439733491} schY={-2.894900060569352} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VREG"} schX={7.145608721986669} schY={-2.9149000605693516} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-2.748334L7.57874-2.748334"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"25"} schX={7.412174439733491} schY={-2.7283343428225315} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VINT"} schX={7.145608721986669} schY={-2.748334342822531} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-2.581769L7.57874-2.581769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"26"} schX={7.412174439733491} schY={-2.561768625075713} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"GND"} schX={7.145608721986669} schY={-2.5817686250757124} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-2.415203L7.57874-2.415203"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"27"} schX={7.412174439733491} schY={-2.3952029073288923} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VM"} schX={7.145608721986669} schY={-2.415202907328892} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-2.248637L7.57874-2.248637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"28"} schX={7.412174439733491} schY={-2.22863718958207} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VCP"} schX={7.145608721986669} schY={-2.2486371895820696} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-2.082071L7.57874-2.082071"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"29"} schX={7.412174439733491} schY={-2.0620714718352495} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"CP2"} schX={7.145608721986669} schY={-2.082071471835249} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M7.245609-1.915506L7.57874-1.915506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"30"} schX={7.412174439733491} schY={-1.895505754088429} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"CP1"} schX={7.145608721986669} schY={-1.9155057540884286} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M6.579346-1.249243L6.579346-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"31"} schX={6.559345850999392} schY={-1.0826771653543297} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"ISEN"} schX={6.5793458509993865} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M6.41278-1.249243L6.41278-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"32"} schX={6.392780133252572} schY={-1.0826771653543403} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"UHSG"} schX={6.412780133252566} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M6.246214-1.249243L6.246214-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"33"} schX={6.226214415505751} schY={-1.0826771653543403} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"U"} schX={6.2462144155057455} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M6.079649-1.249243L6.079649-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"34"} schX={6.059648697758931} schY={-1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"ULSG"} schX={6.079648697758925} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M5.913083-1.249243L5.913083-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"35"} schX={5.89308298001211} schY={-1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"VHSG"} schX={5.913082980012108} schY={-1.3492428831011587} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M5.746517-1.249243L5.746517-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"36"} schX={5.72651726226529} schY={-1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"V"} schX={5.746517262265295} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M5.579952-1.249243L5.579952-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"37"} schX={5.559951544518469} schY={-1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"VLSG"} schX={5.579951544518471} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M5.413386-1.249243L5.413386-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"38"} schX={5.393385826771649} schY={-1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"WHSG"} schX={5.41338582677165} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M5.24682-1.249243L5.24682-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"39"} schX={5.226820109024828} schY={-1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"W"} schX={5.24682010902483} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M5.080254-1.249243L5.080254-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"40"} schX={5.060254391278008} schY={-1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"WLSG"} schX={5.080254391278009} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M4.913689-1.249243L4.913689-0.916111"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"41"} schX={4.893688673531191} schY={-1.0826771653543297} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"PAD"} schX={4.913688673531189} schY={-1.349242883101148} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={90} />
      <schematicpath svgPath={"M0.083283 2.165354h0.333131v-1.499091h-0.333131Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":1.832222895215022}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":1.9987886129618424}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":1.6656571774682014}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":1.499091459721381}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":1.3325257419745604}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":1.1659600242277417}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":0.999394306480923}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":0.2498485766202272,"y":0.8328285887341025}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M0.416414 1.332526L0.749546 1.332526"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.499091L0.749546 1.499091"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.832223L0.299818 1.832223"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.998789L0.299818 1.998789"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.665657L0.299818 1.665657"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.998789L0.749546 1.998789"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.832223L0.749546 1.832223"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.665657L0.749546 1.665657"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.499091L0.299818 1.499091"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.332526L0.299818 1.332526"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.16596L0.749546 1.16596"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 1.16596L0.299818 1.16596"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 0.999394L0.749546 0.999394"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 0.999394L0.299818 0.999394"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 0.832829L0.749546 0.832829"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.416414 0.832829L0.299818 0.832829"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.660812-4.131012L9.660812-4.030992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.660812-3.631032L9.660812-3.531012"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.580832-4.030992L9.580832-3.631032 9.740792-3.631032 9.740792-4.030992 9.580832-4.030992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R18"} schX={9.820811629315564} schY={-3.671011508176864} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30K"} schX={9.820811629315564} schY={-3.9910115081768627} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M10.660206-5.380254L10.660206-5.280234"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-4.880274L10.660206-4.780254"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.580226-5.280234L10.580226-4.880274 10.740186-4.880274 10.740186-5.280234 10.580226-5.280234"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R22"} schX={10.82020593579648} schY={-4.920254391278014} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30K"} schX={10.82020593579648} schY={-5.240254391278013} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M10.700182-5.95639L10.69984-5.951172 10.69882-5.946044 10.697139-5.941092 10.694826-5.936402 10.691921-5.932054 10.688473-5.928123 10.684542-5.924675 10.680194-5.92177 10.675504-5.919457 10.670552-5.917776 10.665424-5.916756 10.660206-5.916414 10.654988-5.916756 10.649859-5.917776 10.644908-5.919457 10.640218-5.92177 10.63587-5.924675 10.631939-5.928123 10.628491-5.932054 10.625586-5.936402 10.623273-5.941092 10.621592-5.946044 10.620572-5.951172 10.62023-5.95639 10.620572-5.961608 10.621592-5.966737 10.623273-5.971688 10.625586-5.976378 10.628491-5.980726 10.631939-5.984657 10.63587-5.988105 10.640218-5.99101 10.644908-5.993323 10.649859-5.995004 10.654988-5.996024 10.660206-5.996366 10.665424-5.996024 10.670552-5.995004 10.675504-5.993323 10.680194-5.99101 10.684542-5.988105 10.688473-5.984657 10.691921-5.980726 10.694826-5.976378 10.697139-5.971688 10.69882-5.966737 10.69984-5.961608 10.700182-5.95639"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.700182-5.706541L10.69984-5.701324 10.69882-5.696195 10.697139-5.691243 10.694826-5.686554 10.691921-5.682206 10.688473-5.678274 10.684542-5.674827 10.680194-5.671921 10.675504-5.669609 10.670552-5.667928 10.665424-5.666908 10.660206-5.666566 10.654988-5.666908 10.649859-5.667928 10.644908-5.669609 10.640218-5.671921 10.63587-5.674827 10.631939-5.678274 10.628491-5.682206 10.625586-5.686554 10.623273-5.691243 10.621592-5.696195 10.620572-5.701324 10.62023-5.706541 10.620572-5.711759 10.621592-5.716888 10.623273-5.72184 10.625586-5.726529 10.628491-5.730877 10.631939-5.734809 10.63587-5.738256 10.640218-5.741162 10.644908-5.743474 10.649859-5.745155 10.654988-5.746175 10.660206-5.746517 10.665424-5.746175 10.670552-5.745155 10.675504-5.743474 10.680194-5.741162 10.684542-5.738256 10.688473-5.734809 10.691921-5.730877 10.694826-5.726529 10.697139-5.72184 10.69882-5.716888 10.69984-5.711759 10.700182-5.706541"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-6.246214L10.660206-5.996366"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-5.413386L10.660206-5.663234"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-5.996366L10.660206-6.246214"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-5.663234L10.660206-5.413386"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-4.630709L7.911872-4.530689"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-4.130729L7.911872-4.030709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.831892-4.530689L7.831892-4.130729 7.991852-4.130729 7.991852-4.530689 7.831892-4.530689"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R23"} schX={8.071871592973949} schY={-4.170708661417324} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30K"} schX={8.071871592973949} schY={-4.490708661417322} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M7.951847-5.206844L7.951505-5.201626 7.950485-5.196498 7.948804-5.191546 7.946492-5.186856 7.943587-5.182509 7.940139-5.178577 7.936207-5.175129 7.931859-5.172224 7.92717-5.169912 7.922218-5.168231 7.917089-5.167211 7.911872-5.166869 7.906654-5.167211 7.901525-5.168231 7.896574-5.169912 7.891884-5.172224 7.887536-5.175129 7.883604-5.178577 7.880157-5.182509 7.877252-5.186856 7.874939-5.191546 7.873258-5.196498 7.872238-5.201626 7.871896-5.206844 7.872238-5.212062 7.873258-5.217191 7.874939-5.222142 7.877252-5.226832 7.880157-5.23118 7.883604-5.235111 7.887536-5.238559 7.891884-5.241464 7.896574-5.243777 7.901525-5.245458 7.906654-5.246478 7.911872-5.24682 7.917089-5.246478 7.922218-5.245458 7.92717-5.243777 7.931859-5.241464 7.936207-5.238559 7.940139-5.235111 7.943587-5.23118 7.946492-5.226832 7.948804-5.222142 7.950485-5.217191 7.951505-5.212062 7.951847-5.206844"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.951847-4.956996L7.951505-4.951778 7.950485-4.946649 7.948804-4.941698 7.946492-4.937008 7.943587-4.93266 7.940139-4.928729 7.936207-4.925281 7.931859-4.922376 7.92717-4.920063 7.922218-4.918382 7.917089-4.917362 7.911872-4.91702 7.906654-4.917362 7.901525-4.918382 7.896574-4.920063 7.891884-4.922376 7.887536-4.925281 7.883604-4.928729 7.880157-4.93266 7.877252-4.937008 7.874939-4.941698 7.873258-4.946649 7.872238-4.951778 7.871896-4.956996 7.872238-4.962214 7.873258-4.967342 7.874939-4.972294 7.877252-4.976984 7.880157-4.981331 7.883604-4.985263 7.887536-4.988711 7.891884-4.991616 7.896574-4.993929 7.901525-4.995609 7.906654-4.99663 7.911872-4.996972 7.917089-4.99663 7.922218-4.995609 7.92717-4.993929 7.931859-4.991616 7.936207-4.988711 7.940139-4.985263 7.943587-4.981331 7.946492-4.976984 7.948804-4.972294 7.950485-4.967342 7.951505-4.962214 7.951847-4.956996"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-5.496669L7.911872-5.24682"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-4.66384L7.911872-4.913689"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-5.24682L7.911872-5.496669"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-4.913689L7.911872-4.66384"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.6149 1.998789L2.71492 1.998789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.11488 1.998789L3.2149 1.998789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.71492 2.078769L3.11488 2.078769 3.11488 1.918809 2.71492 1.918809 2.71492 2.078769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R17"} schX={2.914900060569348} schY={2.1587886129618425} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"180"} schX={2.914900060569348} schY={1.8387886129618405} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M0.366263 0L0.466283 0"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.866243 0L0.966263 0"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.466283 0.07998L0.866243 0.07998 0.866243-0.07998 0.466283-0.07998 0.466283 0.07998"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R16"} schX={0.6662628709872749} schY={0.16000000000000192} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2.0k"} schX={0.6662628709872749} schY={-0.16000000000000014} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.499091-1.799091L1.499091-1.559091"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-1.439091L1.499091-1.199091"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.659111-1.559091L1.339071-1.559091"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.659111-1.439091L1.339071-1.439091"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C10"} schX={1.6140914597213758} schY={-1.299091459721378} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={1.6140914597213758} schY={-1.6990914597213802} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M0.499697-2.63192L0.499697-2.39192"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.499697-2.27192L0.499697-2.03192"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.659717-2.39192L0.339677-2.39192"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.659717-2.27192L0.339677-2.27192"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C11"} schX={0.6146971532404564} schY={-2.1319200484554806} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={0.6146971532404564} schY={-2.531920048455481} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M1.499091-3.381466L1.499091-3.141466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.499091-3.021466L1.499091-2.781466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.659111-3.141466L1.339071-3.141466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.659111-3.021466L1.339071-3.021466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C12"} schX={1.6140914597213758} schY={-2.8814657783161692} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={1.6140914597213758} schY={-3.2814657783161696} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M8.794852-1.915506L8.554852-1.915506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.434852-1.915506L8.194852-1.915506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.554852-1.755486L8.554852-2.075526"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.434852-1.755486L8.434852-2.075526"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C13"} schX={8.494851605087824} schY={-1.6755057540884284} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={8.494851605087824} schY={-2.155505754088429} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M10.327075-2.881769L10.327075-2.641769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-2.521769L10.327075-2.281769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.487095-2.641769L10.167055-2.641769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.487095-2.521769L10.167055-2.521769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C15"} schX={10.442074500302844} schY={-2.3817686250757113} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={10.442074500302844} schY={-2.7817686250757117} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M9.0447-2.9149L8.8047-2.9149"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.6847-2.9149L8.4447-2.9149"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.8047-2.75488L8.8047-3.07492"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.6847-2.75488L8.6847-3.07492"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C17"} schX={8.744700181708055} schY={-2.6749000605693514} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={8.744700181708055} schY={-3.15490006056935} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.710963-2.748334L9.470963-2.748334"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.350963-2.748334L9.110963-2.748334"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.470963-2.588314L9.470963-2.908354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.350963-2.588314L9.350963-2.908354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C16"} schX={9.41096305269533} schY={-2.508334342822531} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={9.41096305269533} schY={-2.9883343428225295} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.710963-2.248637L9.470963-2.248637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.350963-2.248637L9.110963-2.248637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.470963-2.088617L9.470963-2.408657"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.350963-2.088617L9.350963-2.408657"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C14"} schX={9.41096305269533} schY={-2.008637189582071} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.1uF"} schX={9.41096305269533} schY={-2.48863718958207} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-1.582374-7.57874h1.332525v-1.332526h-1.332525Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U5"} schX={-1.5823743185947947} schY={-7.448740157480314} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"555 Timer"} schX={-1.5823743185947947} schY={-9.041265899454876} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-1.582374-7.745306L-2.082071-7.745306"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-1.8322228952150255} schY={-7.725305875227134} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"GND"} schX={-1.4823743185947968} schY={-7.7453058752271335} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.582374-8.078437L-2.082071-8.078437"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={-1.8322228952150255} schY={-8.058437310720775} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"TRIG"} schX={-1.4823743185947968} schY={-8.078437310720775} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.582374-8.411569L-2.082071-8.411569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={-1.8322228952150255} schY={-8.391568746214416} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"OUT"} schX={-1.4823743185947968} schY={-8.411568746214416} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-1.582374-8.7447L-2.082071-8.7447"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={-1.8322228952150255} schY={-8.724700181708057} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"RESET"} schX={-1.4823743185947968} schY={-8.744700181708057} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-0.249849-8.7447L0.249849-8.7447"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={-3.552713678800501e-15} schY={-8.724700181708057} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"CONT"} schX={-0.3498485766202357} schY={-8.744700181708057} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-0.249849-8.411569L0.249849-8.411569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={-3.552713678800501e-15} schY={-8.391568746214416} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"THRES"} schX={-0.3498485766202357} schY={-8.411568746214416} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-0.249849-8.078437L0.249849-8.078437"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={-3.552713678800501e-15} schY={-8.058437310720775} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"DISCH"} schX={-0.3498485766202357} schY={-8.078437310720775} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-0.249849-7.745306L0.249849-7.745306"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={-3.552713678800501e-15} schY={-7.725305875227134} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VDD"} schX={-0.3498485766202357} schY={-7.7453058752271335} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M1.915506-8.211872L1.915506-8.111852"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.915506-7.711892L1.915506-7.611872"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.835526-8.111852L1.835526-7.711892 1.995486-7.711892 1.995486-8.111852 1.835526-8.111852"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R21"} schX={2.0755057540884287} schY={-7.751871592973954} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10k"} schX={2.0755057540884287} schY={-8.07187159297395} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.580557-7.462326L-4.580557-7.222326"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.580557-7.102326L-4.580557-6.862326"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.420537-7.222326L-4.740577-7.222326"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.420537-7.102326L-4.740577-7.102326"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C3"} schX={-4.4655572380375546} schY={-6.9623258631132625} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.01uF"} schX={-4.4655572380375546} schY={-7.362325863113265} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M0.083283-7.29576L0.083283-7.05576"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.083283-6.93576L0.083283-6.69576"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.243303-7.05576L-0.076737-7.05576"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.243303-6.93576L-0.076737-6.93576"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C4"} schX={0.19828285887340868} schY={-6.795760145366442} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={0.19828285887340868} schY={-7.195760145366444} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M0.799697-8.7447L0.559697-8.7447"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.439697-8.7447L0.199697-8.7447"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.559697-8.58468L0.559697-8.90472"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.439697-8.58468L0.439697-8.90472"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C5"} schX={0.4996971532404544} schY={-8.504700181708058} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0.01uF"} schX={0.4996971532404544} schY={-8.984700181708055} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.08086-7.871811L-3.95086-8.131811"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.22086-8.131811L-4.08086-7.871811"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.95086-8.131811L-4.22086-8.131811"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.22086-7.871811L-3.95086-7.871811"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.08086-8.131811L-4.08086-8.531811"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.08086-7.491811L-4.08086-7.861811"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D8"} schX={-4.310860084797099} schY={-8.021811023622048} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematictext text={"10V"} schX={-3.7708600847970963} schY={-8.01181102362205} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.413992-8.69473L-4.463961-8.801333-4.364022-8.801333"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#c0c0c0"} />
      <schematicpath svgPath={"M-4.397335-8.494852L-4.330709-8.661417"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.330709-8.661417L-4.287402-8.578134"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.530588-8.494852L-4.463961-8.661417"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.463961-8.661417L-4.397335-8.494852"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.703816-8.578134L-4.66384-8.494852"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.66384-8.494852L-4.597214-8.661417"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.597214-8.661417L-4.530588-8.494852"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.413992-8.761357L-4.413992-9.077832"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-8.578134L-4.703816-8.578134"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.08086-8.578134L-4.287402-8.578134"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.247426-8.578134L-4.08086-8.578134"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.413992-8.911266L-4.413992-9.077832"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.747123-8.578134L-4.913689-8.578134"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-8.118498L-5.043689-7.858498"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.773689-7.858498L-4.913689-8.118498"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.043689-7.858498L-4.773689-7.858498"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.773689-8.118498L-5.043689-8.118498"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-7.858498L-4.913689-7.458498"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-8.498498L-4.913689-8.128498"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D7"} schX={-4.683688673531194} schY={-7.968497880072681} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10V"} schX={-5.223688673531196} schY={-7.978497880072682} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 1.915506h1.16596v-2.665052h-1.16596Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U7"} schX={-4.330708661417329} schY={2.045505754088431} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"SN74CBT3244CPW"} schX={-4.330708661417329} schY={-0.8795457298606895} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 1.74894L-4.66384 1.74894"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-4.497274379164146} schY={1.768940036341613} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1OE#"} schX={-4.230708661417324} schY={1.7489400363416117} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 1.582374L-4.66384 1.582374"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={-4.497274379164146} schY={1.6023743185947907} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A1"} schX={-4.230708661417324} schY={1.5823743185947912} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-0.083283L-2.851617-0.083283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-2.831617201695945,"y":-0.08328285887341025}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={-2.9981829194427654} schY={-0.06328285887341067} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B4"} schX={-3.2647486371895873} schY={-0.08328285887341025} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 1.415809L-4.66384 1.415809"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={-4.497274379164146} schY={1.435808600847972} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A2"} schX={-4.230708661417324} schY={1.4158086008479707} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749 0.083283L-2.831617 0.083283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={-2.9981829194427654} schY={0.10328285887340982} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B3"} schX={-3.2647486371895873} schY={0.08328285887341025} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 1.249243L-4.66384 1.249243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={-4.497274379164146} schY={1.2692428831011515} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A3"} schX={-4.230708661417324} schY={1.2492428831011502} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749 0.249849L-2.831617 0.249849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={-2.9981829194427654} schY={0.2698485766202321} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B2"} schX={-3.2647486371895873} schY={0.24984857662023252} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 1.082677L-4.64384 1.082677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-4.663840096910967,"y":1.0826771653543332}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={-4.497274379164146} schY={1.1026771653543328} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A4"} schX={-4.230708661417324} schY={1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749 0.416414L-2.831617 0.416414"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"9"} schX={-2.9981829194427654} schY={0.43641429436704904} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B1"} schX={-3.2647486371895873} schY={0.41641429436704946} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-0.58298L-2.831617-0.58298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"10"} schX={-2.9981829194427654} schY={-0.5629800121138704} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"GND"} schX={-3.2647486371895873} schY={-0.58298001211387} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-0.58298L-4.66384-0.58298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"20"} schX={-4.497274379164146} schY={-0.5629800121138704} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VCC"} schX={-4.230708661417324} schY={-0.58298001211387} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 0.58298L-4.66384 0.58298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"19"} schX={-4.497274379164146} schY={0.6029800121138713} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2OE#"} schX={-4.230708661417324} schY={0.5829800121138717} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749 1.582374L-2.831617 1.582374"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"18"} schX={-2.9981829194427654} schY={1.6023743185947907} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B1"} schX={-3.2647486371895873} schY={1.5823743185947912} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-0.083283L-4.64384-0.083283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-4.663840096910967,"y":-0.08328285887341025}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"17"} schX={-4.497274379164146} schY={-0.06328285887341067} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A4"} schX={-4.230708661417324} schY={-0.08328285887341025} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749 1.415809L-2.831617 1.415809"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"16"} schX={-2.9981829194427654} schY={1.435808600847972} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B2"} schX={-3.2647486371895873} schY={1.4158086008479707} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 0.083283L-4.66384 0.083283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"15"} schX={-4.497274379164146} schY={0.10328285887340982} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A3"} schX={-4.230708661417324} schY={0.08328285887341025} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749 1.249243L-2.831617 1.249243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"14"} schX={-2.9981829194427654} schY={1.2692428831011515} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B3"} schX={-3.2647486371895873} schY={1.2492428831011502} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 0.249849L-4.66384 0.249849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"13"} schX={-4.497274379164146} schY={0.2698485766202321} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A2"} schX={-4.230708661417324} schY={0.24984857662023252} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749 1.082677L-2.851617 1.082677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-2.831617201695945,"y":1.0826771653543332}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"12"} schX={-2.9981829194427654} schY={1.1026771653543328} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B4"} schX={-3.2647486371895873} schY={1.0826771653543332} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709 0.416414L-4.66384 0.416414"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"11"} schX={-4.497274379164146} schY={0.43641429436704904} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A1"} schX={-4.230708661417324} schY={0.41641429436704946} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.913689-0.532829L-4.913689-0.772829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-0.892829L-4.913689-1.132829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.073709-0.772829L-4.753669-0.772829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.073709-0.892829L-4.753669-0.892829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C9"} schX={-4.818688673531195} schY={-0.6328285887340979} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-4.818688673531195} schY={-1.0328285887341} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-1.832223h1.16596v-2.665051h-1.16596Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U8"} schX={-4.330708661417329} schY={-1.7022228952150211} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"SN74CBT3244CPW"} schX={-4.330708661417329} schY={-4.627274379164142} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-1.998789L-4.66384-1.998789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-4.497274379164146} schY={-1.9787886129618393} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1OE#"} schX={-4.230708661417324} schY={-1.9987886129618389} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-2.165354L-4.66384-2.165354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={-4.497274379164146} schY={-2.1453543307086598} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A1"} schX={-4.230708661417324} schY={-2.1653543307086593} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-3.831012L-2.851617-3.831012"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-2.831617201695945,"y":-3.8310115081768625}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={-2.9981829194427654} schY={-3.811011508176863} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B4"} schX={-3.2647486371895873} schY={-3.8310115081768625} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-2.33192L-4.66384-2.33192"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={-4.497274379164146} schY={-2.3119200484554803} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A2"} schX={-4.230708661417324} schY={-2.33192004845548} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-3.664446L-2.831617-3.664446"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={-2.9981829194427654} schY={-3.6444457904300425} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B3"} schX={-3.2647486371895873} schY={-3.664445790430042} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-2.498486L-4.66384-2.498486"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={-4.497274379164146} schY={-2.4784857662023025} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A3"} schX={-4.230708661417324} schY={-2.498485766202302} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-3.49788L-2.831617-3.49788"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={-2.9981829194427654} schY={-3.477880072683222} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B2"} schX={-3.2647486371895873} schY={-3.4978800726832215} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-2.665051L-4.64384-2.665051"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-4.663840096910967,"y":-2.6650514839491226}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={-4.497274379164146} schY={-2.645051483949123} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A4"} schX={-4.230708661417324} schY={-2.6650514839491226} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-3.331314L-2.831617-3.331314"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"9"} schX={-2.9981829194427654} schY={-3.3113143549364015} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B1"} schX={-3.2647486371895873} schY={-3.331314354936401} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-4.330709L-2.831617-4.330709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"10"} schX={-2.9981829194427654} schY={-4.310708661417323} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"GND"} schX={-3.2647486371895873} schY={-4.330708661417322} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-4.330709L-4.66384-4.330709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"20"} schX={-4.497274379164146} schY={-4.310708661417323} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VCC"} schX={-4.230708661417324} schY={-4.330708661417322} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-3.164749L-4.66384-3.164749"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"19"} schX={-4.497274379164146} schY={-3.1447486371895828} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2OE#"} schX={-4.230708661417324} schY={-3.1647486371895823} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-2.165354L-2.831617-2.165354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"18"} schX={-2.9981829194427654} schY={-2.1453543307086598} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B1"} schX={-3.2647486371895873} schY={-2.1653543307086593} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-3.831012L-4.64384-3.831012"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-4.663840096910967,"y":-3.8310115081768625}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"17"} schX={-4.497274379164146} schY={-3.811011508176863} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A4"} schX={-4.230708661417324} schY={-3.8310115081768625} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-2.33192L-2.831617-2.33192"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"16"} schX={-2.9981829194427654} schY={-2.3119200484554803} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B2"} schX={-3.2647486371895873} schY={-2.33192004845548} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-3.664446L-4.66384-3.664446"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"15"} schX={-4.497274379164146} schY={-3.6444457904300425} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A3"} schX={-4.230708661417324} schY={-3.664445790430042} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-2.498486L-2.831617-2.498486"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"14"} schX={-2.9981829194427654} schY={-2.4784857662023025} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B3"} schX={-3.2647486371895873} schY={-2.498485766202302} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-3.49788L-4.66384-3.49788"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"13"} schX={-4.497274379164146} schY={-3.477880072683222} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A2"} schX={-4.230708661417324} schY={-3.4978800726832215} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-3.164749-2.665051L-2.851617-2.665051"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-2.831617201695945,"y":-2.6650514839491226}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"12"} schX={-2.9981829194427654} schY={-2.645051483949123} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B4"} schX={-3.2647486371895873} schY={-2.6650514839491226} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-4.330709-3.331314L-4.66384-3.331314"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"11"} schX={-4.497274379164146} schY={-3.3113143549364015} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A1"} schX={-4.230708661417324} schY={-3.331314354936401} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-0.499697h1.16596v-2.665052h-1.16596Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U9"} schX={-10.660205935796492} schY={-0.36969715324045893} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"SN74CBT3244CPW"} schX={-10.660205935796492} schY={-3.2947486371895813} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-0.666263L-10.993337-0.666263"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={-10.826771653543311} schY={-0.6462628709872806} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1OE#"} schX={-10.560205935796489} schY={-0.6662628709872802} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-0.832829L-10.993337-0.832829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={-10.826771653543311} schY={-0.8128285887340994} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A1"} schX={-10.560205935796489} schY={-0.8328285887341007} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-2.498486L-9.181114-2.498486"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-9.161114476075106,"y":-2.498485766202302}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"3"} schX={-9.327680193821928} schY={-2.4784857662023025} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B4"} schX={-9.594245911568748} schY={-2.498485766202302} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-0.999394L-10.973337-0.999394"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-10.993337371290131,"y":-0.9993943064809212}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={-10.826771653543311} schY={-0.9793943064809199} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A2"} schX={-10.560205935796489} schY={-0.9993943064809212} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-2.33192L-9.181114-2.33192"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-9.161114476075106,"y":-2.33192004845548}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={-9.327680193821928} schY={-2.3119200484554803} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B3"} schX={-9.594245911568748} schY={-2.33192004845548} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-1.16596L-10.973337-1.16596"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-10.993337371290131,"y":-1.16596002422774}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={-10.826771653543311} schY={-1.1459600242277403} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A3"} schX={-10.560205935796489} schY={-1.16596002422774} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-2.165354L-9.181114-2.165354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-9.161114476075106,"y":-2.1653543307086593}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={-9.327680193821928} schY={-2.1453543307086598} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B2"} schX={-9.594245911568748} schY={-2.1653543307086593} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-1.332526L-10.973337-1.332526"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-10.993337371290131,"y":-1.3325257419745604}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={-10.826771653543311} schY={-1.312525741974559} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1A4"} schX={-10.560205935796489} schY={-1.3325257419745604} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-1.998789L-9.161114-1.998789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"9"} schX={-9.327680193821928} schY={-1.9787886129618393} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2B1"} schX={-9.594245911568748} schY={-1.9987886129618389} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-2.998183L-9.161114-2.998183"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"10"} schX={-9.327680193821928} schY={-2.9781829194427623} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"GND"} schX={-9.594245911568748} schY={-2.998182919442762} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-2.998183L-10.993337-2.998183"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"20"} schX={-10.826771653543311} schY={-2.9781829194427623} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"VCC"} schX={-10.560205935796489} schY={-2.998182919442762} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-1.832223L-10.993337-1.832223"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"19"} schX={-10.826771653543311} schY={-1.8122228952150206} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2OE#"} schX={-10.560205935796489} schY={-1.8322228952150201} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-0.832829L-9.161114-0.832829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"18"} schX={-9.327680193821928} schY={-0.8128285887340994} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B1"} schX={-9.594245911568748} schY={-0.8328285887341007} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-2.498486L-10.973337-2.498486"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-10.993337371290131,"y":-2.498485766202302}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"17"} schX={-10.826771653543311} schY={-2.4784857662023025} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A4"} schX={-10.560205935796489} schY={-2.498485766202302} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-0.999394L-9.181114-0.999394"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-9.161114476075106,"y":-0.9993943064809212}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"16"} schX={-9.327680193821928} schY={-0.9793943064809199} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B2"} schX={-9.594245911568748} schY={-0.9993943064809212} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-2.33192L-10.973337-2.33192"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-10.993337371290131,"y":-2.33192004845548}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"15"} schX={-10.826771653543311} schY={-2.3119200484554803} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A3"} schX={-10.560205935796489} schY={-2.33192004845548} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-1.16596L-9.181114-1.16596"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-9.161114476075106,"y":-1.16596002422774}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"14"} schX={-9.327680193821928} schY={-1.1459600242277403} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B3"} schX={-9.594245911568748} schY={-1.16596002422774} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-2.165354L-10.973337-2.165354"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-10.993337371290131,"y":-2.1653543307086593}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"13"} schX={-10.826771653543311} schY={-2.1453543307086598} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A2"} schX={-10.560205935796489} schY={-2.1653543307086593} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-9.494246-1.332526L-9.181114-1.332526"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-9.161114476075106,"y":-1.3325257419745604}} radius={0.02} strokeWidth={0.02} color={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"12"} schX={-9.327680193821928} schY={-1.312525741974559} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1B4"} schX={-9.594245911568748} schY={-1.3325257419745604} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M-10.660206-1.998789L-10.993337-1.998789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"11"} schX={-10.826771653543311} schY={-1.9787886129618393} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2A1"} schX={-10.560205935796489} schY={-1.9987886129618389} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-13.951545-0.832829L-13.951887-0.827611-13.952907-0.822482-13.954587-0.817531-13.9569-0.812841-13.959805-0.808493-13.963253-0.804561-13.967185-0.801114-13.971532-0.798209-13.976222-0.795896-13.981174-0.794215-13.986302-0.793195-13.99152-0.792853-13.996738-0.793195-14.001867-0.794215-14.006818-0.795896-14.011508-0.798209-14.015856-0.801114-14.019787-0.804561-14.023235-0.808493-14.02614-0.812841-14.028453-0.817531-14.030134-0.822482-14.031154-0.827611-14.031496-0.832829-14.031154-0.838046-14.030134-0.843175-14.028453-0.848127-14.02614-0.852816-14.023235-0.857164-14.019787-0.861096-14.015856-0.864544-14.011508-0.867449-14.006818-0.869761-14.001867-0.871442-13.996738-0.872462-13.99152-0.872804-13.986302-0.872462-13.981174-0.871442-13.976222-0.869761-13.971532-0.867449-13.967185-0.864544-13.963253-0.861096-13.959805-0.857164-13.9569-0.852816-13.954587-0.848127-13.952907-0.843175-13.951887-0.838046-13.951545-0.832829"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.951545-0.666263L-13.951887-0.661045-13.952907-0.655916-13.954587-0.650965-13.9569-0.646275-13.959805-0.641927-13.963253-0.637996-13.967185-0.634548-13.971532-0.631643-13.976222-0.62933-13.981174-0.627649-13.986302-0.626629-13.99152-0.626287-13.996738-0.626629-14.001867-0.627649-14.006818-0.62933-14.011508-0.631643-14.015856-0.634548-14.019787-0.637996-14.023235-0.641927-14.02614-0.646275-14.028453-0.650965-14.030134-0.655916-14.031154-0.661045-14.031496-0.666263-14.031154-0.671481-14.030134-0.676609-14.028453-0.681561-14.02614-0.686251-14.023235-0.690599-14.019787-0.69453-14.015856-0.697978-14.011508-0.700883-14.006818-0.703196-14.001867-0.704877-13.996738-0.705897-13.99152-0.706239-13.986302-0.705897-13.981174-0.704877-13.976222-0.703196-13.971532-0.700883-13.967185-0.697978-13.963253-0.69453-13.959805-0.690599-13.9569-0.686251-13.954587-0.681561-13.952907-0.676609-13.951887-0.671481-13.951545-0.666263"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152-0.333131L-13.99152-0.45639"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152-0.872804L-13.99152-0.999394"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.951545-0.499697L-13.951887-0.494479-13.952907-0.489351-13.954587-0.484399-13.9569-0.479709-13.959805-0.475361-13.963253-0.47143-13.967185-0.467982-13.971532-0.465077-13.976222-0.462764-13.981174-0.461084-13.986302-0.460063-13.99152-0.459721-13.996738-0.460063-14.001867-0.461084-14.006818-0.462764-14.011508-0.465077-14.015856-0.467982-14.019787-0.47143-14.023235-0.475361-14.02614-0.479709-14.028453-0.484399-14.030134-0.489351-14.031154-0.494479-14.031496-0.499697-14.031154-0.504915-14.030134-0.510044-14.028453-0.514995-14.02614-0.519685-14.023235-0.524033-14.019787-0.527964-14.015856-0.531412-14.011508-0.534317-14.006818-0.53663-14.001867-0.538311-13.996738-0.539331-13.99152-0.539673-13.986302-0.539331-13.981174-0.538311-13.976222-0.53663-13.971532-0.534317-13.967185-0.531412-13.963253-0.527964-13.959805-0.524033-13.9569-0.519685-13.954587-0.514995-13.952907-0.510044-13.951887-0.504915-13.951545-0.499697"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.951545-0.666263L-13.824955-0.666263"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152-0.45639L-13.99152-0.333131"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.948213-0.666263L-13.824955-0.666263"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152-0.876136L-13.99152-0.999394"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692-0.466566L-13.158692-0.366546"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 0.033414L-13.158692 0.133434"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.238672-0.366546L-13.238672 0.033414-13.078712 0.033414-13.078712-0.366546-13.238672-0.366546"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R2"} schX={-12.99869170199879} schY={-0.006565717746818578} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30K"} schX={-12.99869170199879} schY={-0.32656571774682064} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematiccircle center={{"x":-11.826165960024232,"y":0.9161114476075127}} radius={0.03331314354936402} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M-11.992732 1.249243L-11.6596 1.249243-11.826166 0.916111-11.992732 1.249243"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.826166 1.249243L-11.826166 1.582374"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.826166 0.916111L-11.826166 0.58298"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.792853 1.182617L-11.792853 1.21593"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.792853 1.182617L-11.792853 1.16596-11.842823 1.11599-11.842823 1.016051"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.842823 1.066021L-11.792853 1.11599-11.792853 1.16596"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.742883 1.082677L-11.493035 1.082677"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.909449 1.082677L-12.159297 1.082677"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematiccircle center={{"x":-12.4091459721381,"y":-0.6662628709872802}} radius={0.03331314354936402} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M-12.742277-0.832829L-12.742277-0.499697-12.409146-0.666263-12.742277-0.832829"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.742277-0.666263L-13.075409-0.666263"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.409146-0.666263L-12.076015-0.666263"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.675651-0.63295L-12.708964-0.63295"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.675651-0.63295L-12.658995-0.63295-12.609025-0.682919-12.509085-0.682919"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.559055-0.682919L-12.609025-0.63295-12.658995-0.63295"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.575712-0.58298L-12.575712-0.333131"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.575712-0.749546L-12.575712-0.999394"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-4.280557L-4.913689-4.520557"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-4.640557L-4.913689-4.880557"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.073709-4.520557L-4.753669-4.520557"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.073709-4.640557L-4.753669-4.640557"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C8"} schX={-4.818688673531195} schY={-4.380557238037552} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-4.818688673531195} schY={-4.780557238037552} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-11.243186-2.948031L-11.243186-3.188031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.243186-3.308031L-11.243186-3.548031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.403206-3.188031L-11.083166-3.188031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.403206-3.308031L-11.083166-3.308031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C6"} schX={-11.148185947910363} schY={-3.0480314960629915} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"0.1uF"} schX={-11.148185947910363} schY={-3.4480314960629936} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-6.662629 2.198486L-6.662629 2.298506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.662629 2.698466L-6.662629 2.798486"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.742609 2.298506L-6.742609 2.698466-6.582649 2.698466-6.582649 2.298506-6.742609 2.298506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R3"} schX={-6.502628709872809} schY={2.658485766202304} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"3K"} schX={-6.502628709872809} schY={2.3384857662023038} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-7.828589-0.549849L-7.828589-0.309849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.828589-0.189849L-7.828589 0.050151"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.668569-0.309849L-7.988609-0.309849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-7.668569-0.189849L-7.988609-0.189849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C7"} schX={-7.713588734100547} schY={-0.04984857662022968} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4.7uF"} schX={-7.713588734100547} schY={-0.4498485766202318} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M-8.328286 0.366263L-8.328286 0.466283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 0.866243L-8.328286 0.966263"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.408266 0.466283L-8.408266 0.866243-8.248306 0.866243-8.248306 0.466283-8.408266 0.466283"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R9"} schX={-8.16828588734101} schY={0.8262628709872821} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"15K"} schX={-8.16828588734101} schY={0.5062628709872801} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-6.162932 2.198486L-6.162932 2.298506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.162932 2.698466L-6.162932 2.798486"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.242912 2.298506L-6.242912 2.698466-6.082952 2.698466-6.082952 2.298506-6.242912 2.298506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R4"} schX={-6.002931556632348} schY={2.658485766202304} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"3K"} schX={-6.002931556632348} schY={2.3384857662023038} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-5.663234 2.198486L-5.663234 2.298506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.663234 2.698466L-5.663234 2.798486"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.743214 2.298506L-5.743214 2.698466-5.583254 2.698466-5.583254 2.298506-5.743214 2.298506"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R5"} schX={-5.50323440339189} schY={2.658485766202304} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"3K"} schX={-5.50323440339189} schY={2.3384857662023038} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-13.951545 1.582374L-13.951887 1.587592-13.952907 1.592721-13.954587 1.597672-13.9569 1.602362-13.959805 1.60671-13.963253 1.610641-13.967185 1.614089-13.971532 1.616994-13.976222 1.619307-13.981174 1.620988-13.986302 1.622008-13.99152 1.62235-13.996738 1.622008-14.001867 1.620988-14.006818 1.619307-14.011508 1.616994-14.015856 1.614089-14.019787 1.610641-14.023235 1.60671-14.02614 1.602362-14.028453 1.597672-14.030134 1.592721-14.031154 1.587592-14.031496 1.582374-14.031154 1.577156-14.030134 1.572028-14.028453 1.567076-14.02614 1.562386-14.023235 1.558039-14.019787 1.554107-14.015856 1.550659-14.011508 1.547754-14.006818 1.545442-14.001867 1.543761-13.996738 1.542741-13.99152 1.542399-13.986302 1.542741-13.981174 1.543761-13.976222 1.545442-13.971532 1.547754-13.967185 1.550659-13.963253 1.554107-13.959805 1.558039-13.9569 1.562386-13.954587 1.567076-13.952907 1.572028-13.951887 1.577156-13.951545 1.582374"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.951545 1.74894L-13.951887 1.754158-13.952907 1.759287-13.954587 1.764238-13.9569 1.768928-13.959805 1.773276-13.963253 1.777207-13.967185 1.780655-13.971532 1.78356-13.976222 1.785873-13.981174 1.787554-13.986302 1.788574-13.99152 1.788916-13.996738 1.788574-14.001867 1.787554-14.006818 1.785873-14.011508 1.78356-14.015856 1.780655-14.019787 1.777207-14.023235 1.773276-14.02614 1.768928-14.028453 1.764238-14.030134 1.759287-14.031154 1.754158-14.031496 1.74894-14.031154 1.743722-14.030134 1.738594-14.028453 1.733642-14.02614 1.728952-14.023235 1.724604-14.019787 1.720673-14.015856 1.717225-14.011508 1.71432-14.006818 1.712007-14.001867 1.710326-13.996738 1.709306-13.99152 1.708964-13.986302 1.709306-13.981174 1.710326-13.976222 1.712007-13.971532 1.71432-13.967185 1.717225-13.963253 1.720673-13.959805 1.724604-13.9569 1.728952-13.954587 1.733642-13.952907 1.738594-13.951887 1.743722-13.951545 1.74894"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152 2.082071L-13.99152 1.958813"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152 1.542399L-13.99152 1.415809"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.951545 1.915506L-13.951887 1.920724-13.952907 1.925852-13.954587 1.930804-13.9569 1.935494-13.959805 1.939841-13.963253 1.943773-13.967185 1.947221-13.971532 1.950126-13.976222 1.952439-13.981174 1.954119-13.986302 1.95514-13.99152 1.955482-13.996738 1.95514-14.001867 1.954119-14.006818 1.952439-14.011508 1.950126-14.015856 1.947221-14.019787 1.943773-14.023235 1.939841-14.02614 1.935494-14.028453 1.930804-14.030134 1.925852-14.031154 1.920724-14.031496 1.915506-14.031154 1.910288-14.030134 1.905159-14.028453 1.900208-14.02614 1.895518-14.023235 1.89117-14.019787 1.887239-14.015856 1.883791-14.011508 1.880886-14.006818 1.878573-14.001867 1.876892-13.996738 1.875872-13.99152 1.87553-13.986302 1.875872-13.981174 1.876892-13.976222 1.878573-13.971532 1.880886-13.967185 1.883791-13.963253 1.887239-13.959805 1.89117-13.9569 1.895518-13.954587 1.900208-13.952907 1.905159-13.951887 1.910288-13.951545 1.915506"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.951545 1.74894L-13.824955 1.74894"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152 1.958813L-13.99152 2.082071"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.948213 1.74894L-13.824955 1.74894"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.99152 1.539067L-13.99152 1.415809"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 1.948637L-13.158692 2.048657"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 2.448617L-13.158692 2.548637"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.238672 2.048657L-13.238672 2.448617-13.078712 2.448617-13.078712 2.048657-13.238672 2.048657"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R1"} schX={-12.99869170199879} schY={2.4086371895820733} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"30K"} schX={-12.99869170199879} schY={2.088637189582073} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-8.328286-0.466566L-8.328286-0.366546"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 0.033414L-8.328286 0.133434"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.408266-0.366546L-8.408266 0.033414-8.248306 0.033414-8.248306-0.366546-8.408266-0.366546"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R10"} schX={-8.16828588734101} schY={-0.006565717746818578} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"10.0k"} schX={-8.16828588734101} schY={-0.32656571774682064} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M-12.24258-0.050151L-12.24258 0.189849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.24258 0.309849L-12.24258 0.549849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.08256 0.189849L-12.4026 0.189849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.08256 0.309849L-12.4026 0.309849"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C20"} schX={-12.127580254391281} schY={0.4498485766202318} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"4.7uF"} schX={-12.127580254391281} schY={0.049848576620231455} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M8.16172 9.067922L8.29172 8.807922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.02172 8.807922L8.16172 9.067922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.29172 8.807922L8.02172 8.807922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.02172 9.067922L8.29172 9.067922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 8.807922L8.16172 8.407922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.16172 9.447922L8.16172 9.077922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.02172 9.137922L8.02172 9.067922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.07172 9.137922L8.02172 9.137922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.29172 9.007922L8.29172 9.067922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.24172 9.007922L8.29172 9.007922"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D6"} schX={8.46172016959418} schY={9.217922471229556} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"1.5SMC33"} schX={8.46172016959418} schY={8.627922471229557} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 7.079043h0.999395v-0.832829h-0.999395Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U2"} schX={9.24439733494851} schY={7.209043004239857} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"CSD88537ND"} schX={9.24439733494851} schY={6.116214415505756} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 6.912477L8.7447 6.912477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.144397 6.912477L9.231 6.962477 9.231 6.862477Z"} strokeWidth={0.006666666666666666} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"1"} schX={8.994548758328285} schY={6.932477286493037} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"S1"} schX={9.344397334948518} schY={6.912477286493037} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 6.745912L8.7447 6.745912"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={8.994548758328285} schY={6.765911568746216} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"G1"} schX={9.344397334948518} schY={6.745911568746217} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 6.579346L8.7447 6.579346"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.144397 6.579346L9.231 6.629346 9.231 6.529346Z"} strokeWidth={0.006666666666666666} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"3"} schX={8.994548758328285} schY={6.599345850999396} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"S2"} schX={9.344397334948518} schY={6.579345850999396} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 6.41278L8.7447 6.41278"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={8.994548758328285} schY={6.4327801332525745} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"G2"} schX={9.344397334948518} schY={6.412780133252575} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M10.243792 6.41278L10.743489 6.41278"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={10.493640218049656} schY={6.4327801332525745} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D2"} schX={10.14379164142943} schY={6.412780133252575} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 6.579346L10.743489 6.579346"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={10.493640218049656} schY={6.599345850999396} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D2"} schX={10.14379164142943} schY={6.579345850999396} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 6.745912L10.743489 6.745912"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={10.493640218049656} schY={6.765911568746216} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D1"} schX={10.14379164142943} schY={6.745911568746217} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 6.912477L10.743489 6.912477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={10.493640218049656} schY={6.932477286493037} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D1"} schX={10.14379164142943} schY={6.912477286493037} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M9.244397 5.163537h0.999395v-0.832828h-0.999395Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U3"} schX={9.24439733494851} schY={5.293537250151424} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"CSD88537ND"} schX={9.24439733494851} schY={4.200708661417324} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 4.996972L8.7447 4.996972"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.144397 4.996972L9.231 5.046972 9.231 4.946972Z"} strokeWidth={0.006666666666666666} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"1"} schX={8.994548758328285} schY={5.016971532404604} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"S1"} schX={9.344397334948518} schY={4.996971532404604} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 4.830406L8.7447 4.830406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={8.994548758328285} schY={4.850405814657783} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"G1"} schX={9.344397334948518} schY={4.830405814657784} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 4.66384L8.7447 4.66384"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.144397 4.66384L9.231 4.71384 9.231 4.61384Z"} strokeWidth={0.006666666666666666} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"3"} schX={8.994548758328285} schY={4.683840096910963} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"S2"} schX={9.344397334948518} schY={4.663840096910963} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 4.497274L8.7447 4.497274"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={8.994548758328285} schY={4.517274379164142} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"G2"} schX={9.344397334948518} schY={4.497274379164143} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M10.243792 4.497274L10.743489 4.497274"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={10.493640218049656} schY={4.517274379164142} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D2"} schX={10.14379164142943} schY={4.497274379164143} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 4.66384L10.743489 4.66384"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={10.493640218049656} schY={4.683840096910963} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D2"} schX={10.14379164142943} schY={4.663840096910963} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 4.830406L10.743489 4.830406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={10.493640218049656} schY={4.850405814657783} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D1"} schX={10.14379164142943} schY={4.830405814657784} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 4.996972L10.743489 4.996972"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={10.493640218049656} schY={5.016971532404604} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D1"} schX={10.14379164142943} schY={4.996971532404604} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M9.244397 3.248031h0.999395v-0.832828h-0.999395Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U4"} schX={9.24439733494851} schY={3.3780314960629925} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"CSD88537ND"} schX={9.24439733494851} schY={2.285202907328891} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 3.081466L8.7447 3.081466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.144397 3.081466L9.231 3.131466 9.231 3.031466Z"} strokeWidth={0.006666666666666666} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"1"} schX={8.994548758328285} schY={3.1014657783161725} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"S1"} schX={9.344397334948518} schY={3.081465778316173} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 2.9149L8.7447 2.9149"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={8.994548758328285} schY={2.934900060569352} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"G1"} schX={9.344397334948518} schY={2.9149000605693525} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 2.748334L8.7447 2.748334"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.144397 2.748334L9.231 2.798334 9.231 2.698334Z"} strokeWidth={0.006666666666666666} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"white"} />
      <schematictext text={"3"} schX={8.994548758328285} schY={2.7683343428225307} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"S2"} schX={9.344397334948518} schY={2.748334342822531} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M9.244397 2.581769L8.7447 2.581769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"4"} schX={8.994548758328285} schY={2.601768625075712} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"G2"} schX={9.344397334948518} schY={2.5817686250757124} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M10.243792 2.581769L10.743489 2.581769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"5"} schX={10.493640218049656} schY={2.601768625075712} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D2"} schX={10.14379164142943} schY={2.5817686250757124} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 2.748334L10.743489 2.748334"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"6"} schX={10.493640218049656} schY={2.7683343428225307} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D2"} schX={10.14379164142943} schY={2.748334342822531} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 2.9149L10.743489 2.9149"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"7"} schX={10.493640218049656} schY={2.934900060569352} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D1"} schX={10.14379164142943} schY={2.9149000605693525} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.243792 3.081466L10.743489 3.081466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"8"} schX={10.493640218049656} schY={3.1014657783161725} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"D1"} schX={10.14379164142943} schY={3.081465778316173} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M5.913083 1.532223L5.913083 1.632243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.913083 2.032203L5.913083 2.132223"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.833103 1.632243L5.833103 2.032203 5.993063 2.032203 5.993063 1.632243 5.833103 1.632243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R19"} schX={6.0730829800121136} schY={1.9922228952150238} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"0.05"} schX={6.0730829800121136} schY={1.6722228952150235} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematicpath svgPath={"M7.054058 8.771266L6.924058 9.031266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.194058 9.031266L7.054058 8.771266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M6.924058 9.031266L7.194058 9.031266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.194058 8.771266L6.924058 8.771266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.054058 9.031266L7.054058 9.431266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.054058 8.391266L7.054058 8.761266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"D4"} schX={7.284058146577827} schY={8.921265899454875} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_left" schRotation={0} />
      <schematictext text={"Green"} schX={6.744058146577828} schY={8.911265899454875} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M10.327075 8.611266L10.327075 8.851266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075 8.971266L10.327075 9.211266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.487095 8.851266L10.167055 8.851266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.487095 8.971266L10.167055 8.971266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C2"} schX={10.442074500302844} schY={9.111265899454876} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2700pF"} schX={10.442074500302844} schY={8.711265899454876} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M12.82556 4.830406h0.333132v-0.666263h-0.333132Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":12.992125984251963,"y":4.497274379164143}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":12.992125984251963,"y":4.330708661417323}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M12.942156 4.71381h0.09994v-0.09994h-0.09994Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M12.82556 4.497274L12.942156 4.497274"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.82556 4.66384L12.942156 4.66384"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.82556 4.66384L12.492429 4.66384"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.82556 4.497274L12.492429 4.497274"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.82556 4.330709L12.942156 4.330709"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.82556 4.330709L12.492429 4.330709"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.325863 9.577529h0.333132v-0.499697h-0.333132Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematiccircle center={{"x":12.492428831011509,"y":9.410963052695337}} radius={0.04996971532404603} strokeWidth={0.05} color={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M12.442459 9.294367h0.09994v-0.099939h-0.09994Z"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={true} fillColor={"#ffffff"} />
      <schematicpath svgPath={"M12.325863 9.410963L12.442459 9.410963"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.325863 9.244397L12.442459 9.244397"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.325863 9.244397L11.992732 9.244397"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M12.325863 9.410963L11.992732 9.410963"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.32768 8.586281L9.32768 8.826281"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.32768 8.946281L9.32768 9.186281"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.4877 8.826281L9.16766 8.826281"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.4877 8.946281L9.16766 8.946281"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"C1"} schX={9.442680193821921} schY={9.086281041792853} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"220uF"} schX={9.442680193821921} schY={8.686281041792851} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M0.499697 8.611569h1.499092v-0.4h-1.499092Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U14"} schX={0.49969715324045794} schY={8.741568746214416} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GND_Bridge"} schX={0.49969715324045794} schY={8.081568746214419} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M0.499697 8.411569L0.166566 8.411569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={0.3331314354936339} schY={8.431568746214417} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M1.998789 8.411569L2.33192 8.411569"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={2.165354330708656} schY={8.431568746214417} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M0.499697 7.862023h1.499092v-0.4h-1.499092Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"U13"} schX={0.49969715324045794} schY={7.992023016353724} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GND_Bridge"} schX={0.49969715324045794} schY={7.332023016353727} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M0.499697 7.662023L0.166566 7.662023"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={0.3331314354936339} schY={7.682023016353725} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M1.998789 7.662023L2.33192 7.662023"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"2"} schX={2.165354330708656} schY={7.682023016353725} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M7.795457 8.328286L7.695437 8.328286"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.295477 8.328286L7.195457 8.328286"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.695437 8.248306L7.295477 8.248306 7.295477 8.408266 7.695437 8.408266 7.695437 8.248306"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R15"} schX={7.495457298606901} schY={8.488285887341009} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4.3K"} schX={7.495457298606901} schY={8.168285887341007} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M5.255027-8.294852h0.4v-0.4h-0.4Z"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={true} fillColor={"rgb(255, 255, 194)"} />
      <schematictext text={"JP6a"} schX={5.255027256208358} schY={-8.164851605087824} fontSize={0.18} color={"#006464"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"=PartNumber"} schX={5.255027256208358} schY={-8.824851605087824} fontSize={0.18} color={"#006464"} anchor="top_left" schRotation={0} />
      <schematicpath svgPath={"M5.330103-8.494852L5.579952-8.494852"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"1"} schX={5.4550272562083535} schY={-8.474851605087826} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1"} schX={5.23010296789824} schY={-8.494851605087826} fontSize={0.15} color={"rgb(169, 0, 0)"} anchor="center_right" schRotation={0} />
      <schematicpath svgPath={"M5.330103-8.245003L5.329761-8.239785 5.328741-8.234657 5.32706-8.229705 5.324747-8.225015 5.321842-8.220667 5.318394-8.216736 5.314463-8.213288 5.310115-8.210383 5.305425-8.20807 5.300474-8.206389 5.295345-8.205369 5.290127-8.205027 5.284909-8.205369 5.279781-8.206389 5.274829-8.20807 5.270139-8.210383 5.265791-8.213288 5.26186-8.216736 5.258412-8.220667 5.255507-8.225015 5.253194-8.229705 5.251514-8.234657 5.250493-8.239785 5.250151-8.245003 5.250493-8.250221 5.251514-8.25535 5.253194-8.260301 5.255507-8.264991 5.258412-8.269339 5.26186-8.27327 5.265791-8.276718 5.270139-8.279623 5.274829-8.281936 5.279781-8.283617 5.284909-8.284637 5.290127-8.284979 5.295345-8.284637 5.300474-8.283617 5.305425-8.281936 5.310115-8.279623 5.314463-8.276718 5.318394-8.27327 5.321842-8.269339 5.324747-8.264991 5.32706-8.260301 5.328741-8.25535 5.329761-8.250221 5.330103-8.245003"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.080254-8.245003L5.079912-8.239785 5.078892-8.234657 5.077211-8.229705 5.074899-8.225015 5.071994-8.220667 5.068546-8.216736 5.064614-8.213288 5.060267-8.210383 5.055577-8.20807 5.050625-8.206389 5.045497-8.205369 5.040279-8.205027 5.035061-8.205369 5.029932-8.206389 5.024981-8.20807 5.020291-8.210383 5.015943-8.213288 5.012011-8.216736 5.008564-8.220667 5.005659-8.225015 5.003346-8.229705 5.001665-8.234657 5.000645-8.239785 5.000303-8.245003 5.000645-8.250221 5.001665-8.25535 5.003346-8.260301 5.005659-8.264991 5.008564-8.269339 5.012011-8.27327 5.015943-8.276718 5.020291-8.279623 5.024981-8.281936 5.029932-8.283617 5.035061-8.284637 5.040279-8.284979 5.045497-8.284637 5.050625-8.283617 5.055577-8.281936 5.060267-8.279623 5.064614-8.276718 5.068546-8.27327 5.071994-8.269339 5.074899-8.264991 5.077211-8.260301 5.078892-8.25535 5.079912-8.250221 5.080254-8.245003"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.579952-8.245003L5.330103-8.245003"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.747123-8.245003L4.996972-8.245003"} strokeWidth={0.05} strokeColor={"#0000ff"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.330103-8.245003L5.579952-8.245003"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.996972-8.245003L4.747123-8.245003"} strokeWidth={0.1} strokeColor={"#1f2937"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.611872 6.745912L7.711892 6.745912"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.111852 6.745912L8.211872 6.745912"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.711892 6.825892L8.111852 6.825892 8.111852 6.665932 7.711892 6.665932 7.711892 6.825892"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R24"} schX={7.911871592973952} schY={6.905911568746217} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"240"} schX={7.911871592973952} schY={6.585911568746217} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M7.611872 6.41278L7.711892 6.41278"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.111852 6.41278L8.211872 6.41278"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.711892 6.49276L8.111852 6.49276 8.111852 6.3328 7.711892 6.3328 7.711892 6.49276"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R25"} schX={7.911871592973952} schY={6.572780133252575} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={7.911871592973952} schY={6.252780133252575} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M7.611872 4.830406L7.711892 4.830406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.111852 4.830406L8.211872 4.830406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.711892 4.910386L8.111852 4.910386 8.111852 4.750426 7.711892 4.750426 7.711892 4.910386"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R26"} schX={7.911871592973952} schY={4.990405814657784} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"240"} schX={7.911871592973952} schY={4.670405814657784} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M7.611872 4.497274L7.711892 4.497274"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.111852 4.497274L8.211872 4.497274"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.711892 4.577254L8.111852 4.577254 8.111852 4.417294 7.711892 4.417294 7.711892 4.577254"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R27"} schX={7.911871592973952} schY={4.657274379164143} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={7.911871592973952} schY={4.337274379164143} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M7.528589 2.9149L7.628609 2.9149"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.028569 2.9149L8.128589 2.9149"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.628609 2.99488L8.028569 2.99488 8.028569 2.83492 7.628609 2.83492 7.628609 2.99488"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R28"} schX={7.828588734100542} schY={3.0749000605693526} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"240"} schX={7.828588734100542} schY={2.7549000605693514} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M7.528589 2.581769L7.628609 2.581769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M8.028569 2.581769L8.128589 2.581769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.628609 2.661749L8.028569 2.661749 8.028569 2.501789 7.628609 2.501789 7.628609 2.661749"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"R29"} schX={7.828588734100542} schY={2.7417686250757125} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"0"} schX={7.828588734100542} schY={2.4217686250757122} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.993943-3.081466L9.983943-3.411466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.763943-3.411466L10.203943-3.411466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.813943-3.491466L10.153943-3.491466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.923943-3.561466L10.043943-3.561466"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={9.9639430648092} schY={-3.6814657783161717} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M0.166566 7.328892L0.156566 6.998892"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.063434 6.998892L0.376566 6.998892"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.013434 6.918892L0.326566 6.918892"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.096566 6.848892L0.216566 6.848892"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={0.1365657177468158} schY={6.728891580860085} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M10.327075-1.880821L10.207075-1.971863"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-1.880821L10.447075-1.971863"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.327075-1.880821L10.327075-2.082071"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VM"} schX={10.32707450030285} schY={-1.8520714718352504} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M3.747729 1.998789L3.737729 1.668789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.517729 1.668789L3.957729 1.668789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.567729 1.588789L3.907729 1.588789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.677729 1.518789L3.797729 1.518789"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={3.7177286493034494} schY={1.3987886129618428} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.832223 0.20125L1.712223 0.110208"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.832223 0.20125L1.952223 0.110208"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.832223 0.20125L1.832223 0"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={1.8322228952150148} schY={0.23000000000000043} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M0.249849 0.20125L0.129849 0.110208"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.249849 0.20125L0.369849 0.110208"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M0.249849 0.20125L0.249849 0"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VSW"} schX={0.2498485766202272} schY={0.23000000000000043} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M4.164143-0.832829L4.154143-1.162829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.934143-1.162829L4.374143-1.162829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.984143-1.242829L4.324143-1.242829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M4.094143-1.312829L4.214143-1.312829"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={4.134142943670501} schY={-1.4328285887341004} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.660812-4.247426L9.650812-4.577426"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.430812-4.577426L9.870812-4.577426"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.480812-4.657426L9.820812-4.657426"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.590812-4.727426L9.710812-4.727426"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={9.63081162931556} schY={-4.847425802543912} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.082677-3.796327L0.962677-3.887369"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-3.796327L1.202677-3.887369"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.082677-3.796327L1.082677-3.997577"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={1.0826771653543261} schY={-3.767577225923681} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M3.664446-3.713044L3.544446-3.804086"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.664446-3.713044L3.784446-3.804086"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M3.664446-3.713044L3.664446-3.914294"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={3.6644457904300403} schY={-3.6842943670502706} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M2.165354-4.212742L2.045354-4.303783"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.165354-4.212742L2.285354-4.303783"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.165354-4.212742L2.165354-4.413992"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={2.165354330708656} schY={-4.18399152029073} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M2.665051-3.213347L2.545051-3.304389"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.665051-3.213347L2.785051-3.304389"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M2.665051-3.213347L2.665051-3.414597"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={2.665051483949121} schY={-3.184597213809811} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M10.660206-4.545873L10.540206-4.636915"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-4.545873L10.780206-4.636915"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.660206-4.545873L10.660206-4.747123"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={10.660205935796476} schY={-4.517122955784373} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M10.660206-6.246214L10.650206-6.576214"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.430206-6.576214L10.870206-6.576214"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.480206-6.656214L10.820206-6.656214"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.590206-6.726214L10.710206-6.726214"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={10.630205935796482} schY={-6.846214415505758} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M7.911872-3.796327L7.791872-3.887369"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-3.796327L8.031872-3.887369"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.911872-3.796327L7.911872-3.997577"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={7.911871592973952} schY={-3.767577225923681} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M7.911872-5.663234L7.901872-5.993234"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.681872-5.993234L8.121872-5.993234"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.731872-6.073234L8.071872-6.073234"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M7.841872-6.143234L7.961872-6.143234"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={7.881871592973951} schY={-6.263234403391882} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-5.080254-6.912477L-5.090254-7.242477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.310254-7.242477L-4.870254-7.242477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.260254-7.322477L-4.920254-7.322477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.150254-7.392477L-5.030254-7.392477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-5.110254391278019} schY={-7.512477286493036} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-2.9149-6.912477L-2.9249-7.242477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.1449-7.242477L-2.7049-7.242477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.0949-7.322477L-2.7549-7.322477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.9849-7.392477L-2.8649-7.392477"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-2.9449000605693527} schY={-7.512477286493036} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M1.415809-8.911266L1.405809-9.241266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.185809-9.241266L1.625809-9.241266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.235809-9.321266L1.575809-9.321266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M1.345809-9.391266L1.465809-9.391266"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={1.385808600847966} schY={-9.511265899454875} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-0.416414-6.745912L-0.426414-7.075912"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.646414-7.075912L-0.206414-7.075912"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.596414-7.155912L-0.256414-7.155912"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-0.486414-7.225912L-0.366414-7.225912"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-0.4464142943670524} schY={-7.345911568746212} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-2.665051-0.58298L-2.675051-0.91298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.895051-0.91298L-2.455051-0.91298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.845051-0.99298L-2.505051-0.99298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.735051-1.06298L-2.615051-1.06298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-2.695051483949129} schY={-1.1829800121138696} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.913689-0.38173L-5.033689-0.472772"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-0.38173L-4.793689-0.472772"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-0.38173L-4.913689-0.58298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-4.9136886735311975} schY={-0.35298001211386776} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-4.913689-1.082677L-4.923689-1.412677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.143689-1.412677L-4.703689-1.412677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.093689-1.492677L-4.753689-1.492677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.983689-1.562677L-4.863689-1.562677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-4.943688673531199} schY={-1.682677165354331} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-13.99152-1.249243L-14.00152-1.579243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.22152-1.579243L-13.78152-1.579243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.17152-1.659243L-13.83152-1.659243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.06152-1.729243L-13.94152-1.729243"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-14.021520290732893} schY={-1.8492428831011498} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-13.158692 0.367816L-13.278692 0.276774"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 0.367816L-13.038692 0.276774"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 0.367816L-13.158692 0.166566"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-13.15869170199879} schY={0.3965657177468209} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-12.575712-0.999394L-12.585712-1.329394"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.805712-1.329394L-12.365712-1.329394"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.755712-1.409394L-12.415712-1.409394"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.645712-1.479394L-12.525712-1.479394"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-12.60571168988492} schY={-1.5993943064809208} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-12.575712 0.950796L-12.695712 0.859754"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.575712 0.950796L-12.455712 0.859754"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.575712 0.950796L-12.575712 0.749546"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-12.57571168988492} schY={0.9795457298606909} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-2.831617-4.330709L-2.841617-4.660709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.061617-4.660709L-2.621617-4.660709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-3.011617-4.740709L-2.671617-4.740709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-2.901617-4.810709L-2.781617-4.810709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-2.8616172016959425} schY={-4.930708661417322} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-9.161114-3.248031L-9.171114-3.578031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.391114-3.578031L-8.951114-3.578031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.341114-3.658031L-9.001114-3.658031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-9.231114-3.728031L-9.111114-3.728031"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-9.19111447607511} schY={-3.848031496062992} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-4.913689-4.129459L-5.033689-4.2205"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-4.129459L-4.793689-4.2205"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.913689-4.129459L-4.913689-4.330709"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-4.9136886735311975} schY={-4.100708661417324} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-4.913689-4.830406L-4.923689-5.160406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.143689-5.160406L-4.703689-5.160406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.093689-5.240406L-4.753689-5.240406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-4.983689-5.310406L-4.863689-5.310406"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-4.943688673531199} schY={-5.430405814657783} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.243186-2.796933L-11.363186-2.887975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.243186-2.796933L-11.123186-2.887975"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.243186-2.796933L-11.243186-2.998183"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-11.243185947910362} schY={-2.7681829194427614} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-11.243186-3.49788L-11.253186-3.82788"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.473186-3.82788L-11.033186-3.82788"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.423186-3.90788L-11.083186-3.90788"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.313186-3.97788L-11.193186-3.97788"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-11.273185947910362} schY={-4.097880072683223} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-6.662629 3.032867L-6.782629 2.941826"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.662629 3.032867L-6.542629 2.941826"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.662629 3.032867L-6.662629 2.831617"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-6.662628709872809} schY={3.0616172016959418} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-8.078437-0.58298L-8.088437-0.91298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.308437-0.91298L-7.868437-0.91298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.258437-0.99298L-7.918437-0.99298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.148437-1.06298L-8.028437-1.06298"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-8.108437310720777} schY={-1.1829800121138696} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-8.328286 1.200644L-8.448286 1.109603"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 1.200644L-8.208286 1.109603"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-8.328286 1.200644L-8.328286 0.999394"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-8.32828588734101} schY={1.2293943064809216} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-6.162932 3.032867L-6.282932 2.941826"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.162932 3.032867L-6.042932 2.941826"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-6.162932 3.032867L-6.162932 2.831617"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-6.162931556632348} schY={3.0616172016959418} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-5.663234 3.032867L-5.783234 2.941826"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.663234 3.032867L-5.543234 2.941826"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-5.663234 3.032867L-5.663234 2.831617"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-5.66323440339189} schY={3.0616172016959418} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-13.99152 1.16596L-14.00152 0.83596"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.22152 0.83596L-13.78152 0.83596"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.17152 0.75596L-13.83152 0.75596"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-14.06152 0.68596L-13.94152 0.68596"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-14.021520290732893} schY={0.565960024227742} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-13.158692 2.783019L-13.278692 2.691977"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 2.783019L-13.038692 2.691977"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-13.158692 2.783019L-13.158692 2.581769"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-13.15869170199879} schY={2.811768625075713} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-12.159297 1.082677L-12.169297 0.752677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.389297 0.752677L-11.949297 0.752677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.339297 0.672677L-11.999297 0.672677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.229297 0.602677L-12.109297 0.602677"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-12.18929739551787} schY={0.4826771653543318} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M-11.493035 1.533776L-11.613035 1.442734"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.493035 1.533776L-11.373035 1.442734"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-11.493035 1.533776L-11.493035 1.332526"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VREG"} schX={-11.493034524530593} schY={1.5625257419745608} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M-12.24258 0L-12.25258-0.33"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.47258-0.33L-12.03258-0.33"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.42258-0.41L-12.08258-0.41"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M-12.31258-0.48L-12.19258-0.48"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={-12.272580254391281} schY={-0.6000000000000014} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M5.913083 1.499091L5.903083 1.169091"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.683083 1.169091L6.123083 1.169091"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.733083 1.089091L6.073083 1.089091"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.843083 1.019091L5.963083 1.019091"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={5.883082980012112} schY={0.8990914597213813} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M9.32768 8.328286L9.31768 7.998286"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.09768 7.998286L9.53768 7.998286"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.14768 7.918286L9.48768 7.918286"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M9.25768 7.848286L9.37768 7.848286"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={9.297680193821918} schY={7.728285887341007} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M10.993337 9.778779L10.873337 9.687737"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 9.778779L11.113337 9.687737"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M10.993337 9.778779L10.993337 9.577529"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"VM"} schX={10.993337371290117} schY={9.807528770442158} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="bottom_center" schRotation={0} />
      <schematicpath svgPath={"M11.826166 9.244397L11.816166 8.914397"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.596166 8.914397L12.036166 8.914397"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.646166 8.834397L11.986166 8.834397"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M11.756166 8.764397L11.876166 8.764397"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={11.796165960024226} schY={8.644397334948518} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematicpath svgPath={"M5.579952-8.494852L5.569952-8.824852"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.349952-8.824852L5.789952-8.824852"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.399952-8.904852L5.739952-8.904852"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematicpath svgPath={"M5.509952-8.974852L5.629952-8.974852"} strokeWidth={0.02} strokeColor={"rgb(132, 0, 0)"} isFilled={false} fillColor={"none"} />
      <schematictext text={"GND"} schX={5.549951544518471} schY={-9.094851605087827} fontSize={0.18} color={"rgb(15, 15, 15)"} anchor="top_center" schRotation={0} />
      <schematictext text={"1"} schX={2.6234100545124157} schY={2.498485766202302} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={3.206390066626284} schY={2.498485766202302} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP2"} schX={2.748334342822531} schY={2.5817686250757124} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={1.1326468806783758} schY={-0.1332525741974564} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2"} schX={1.2992125984251928} schY={-0.1332525741974564} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"3"} schX={1.4657783161720133} schY={-0.1332525741974564} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP1"} schX={1.215929739551786} schY={-0.28316172016959484} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"5"} schX={0.5829800121138646} schY={1.3325257419745604} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4"} schX={0.5829800121138646} schY={1.499091459721381} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"1"} schX={0.5829800121138646} schY={1.9987886129618424} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={0.5829800121138646} schY={1.832222895215022} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={0.5829800121138646} schY={1.6656571774682014} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"6"} schX={0.5829800121138646} schY={1.1659600242277417} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"7"} schX={0.5829800121138646} schY={0.999394306480923} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"8"} schX={0.5829800121138646} schY={0.8328285887341025} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"P3"} schX={0.0832828588734067} schY={2.165354330708661} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"OSTTE080161"} schX={0.0832828588734067} schY={0.5663234403391879} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"LOGO"} schX={14.241368867353117} schY={-9.027861901877651} fontSize={0.23319200484554817} color={"#1f2937"} anchor="center" schRotation={0} />
      <schematictext text={"PCB"} schX={14.154312295578436} schY={-8.811326468806781} fontSize={0.23319200484554817} color={"#1f2937"} anchor="center" schRotation={0} />
      <schematictext text={"1"} schX={10.66020593579648} schY={-6.121290127195643} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"2"} schX={10.66020593579648} schY={-5.538310115081771} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"JP5"} schX={10.71017565112053} schY={-5.563294972743792} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Comment"} schX={10.71017565112053} schY={-5.729860690490613} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={7.911871592973952} schY={-5.37174439733495} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"2"} schX={7.9118715929739505} schY={-4.788764385221079} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"JP7"} schX={7.961841308297998} schY={-4.813749242883102} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Comment"} schX={7.961841308297998} schY={-4.980314960629922} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"3"} schX={-4.164142943670509} schY={-8.578134463961236} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-4.41399152029074} schY={-8.994548758328282} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"1"} schX={-4.830405814657787} schY={-8.578134463961236} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"R20"} schX={-4.93034524530588} schY={-9.277710478497882} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-14.158086008479714} schY={-0.58298001211387} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2"} schX={-14.158086008479714} schY={-0.7495457298606905} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"3"} schX={-14.158086008479714} schY={-0.916111447607511} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP4"} schX={-13.908237431859483} schY={-0.6662628709872802} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-11.826165960024232} schY={1.4158086008479707} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"6"} schX={-11.826165960024232} schY={0.7495457298606922} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"5"} schX={-11.617958812840707} schY={1.0826771653543332} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={-12.034373107207756} schY={1.0826771653543332} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"U11"} schX={-12.32586311326469} schY={1.3325257419745604} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"SN74LVC2G14DBVR"} schX={-13.491823137492434} schY={1.499091459721381} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"3"} schX={-12.908843125378562} schY={-0.6662628709872802} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"4"} schX={-12.242580254391282} schY={-0.6662628709872802} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"5"} schX={-12.57571168988492} schY={-0.45805572380375636} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"2"} schX={-12.575711689884923} schY={-0.874470018170804} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={90} />
      <schematictext text={"U11"} schX={-12.49242883101151} schY={-0.916111447607511} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Comment"} schX={-13.824954572986073} schY={-1.0826771653543314} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={-14.158086008479714} schY={1.832222895215022} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2"} schX={-14.158086008479714} schY={1.6656571774682014} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"3"} schX={-14.158086008479714} schY={1.499091459721381} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP3"} schX={-13.908237431859483} schY={1.7489400363416117} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={12.658994548758322} schY={4.663840096910963} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={12.658994548758322} schY={4.497274379164143} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"3"} schX={12.658994548758322} schY={4.330708661417323} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"P2"} schX={12.80890369473046} schY={4.830405814657784} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"OSTTA034163"} schX={12.80890369473046} schY={4.064203513022411} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={12.159297395517868} schY={9.244397334948516} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={12.159297395517868} schY={9.410963052695337} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"P1"} schX={12.30920654149} schY={9.577528770442157} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"OSTTA024163"} schX={12.30920654149} schY={8.977892186553603} fontSize={0.09993943064809206} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"1"} schX={5.4550272562083535} schY={-8.245003028467595} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"2"} schX={4.872047244094485} schY={-8.245003028467595} fontSize={0.15} color={"#a90000"} anchor="bottom_center" schRotation={0} />
      <schematictext text={"JP6"} schX={5.063597819503325} schY={-8.228346456692913} fontSize={0.1332525741974561} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Comment"} schX={4.730466384009684} schY={-8.461538461538458} fontSize={0.1665657177468201} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"ISENSE"} schX={7.134564910155454} schY={-0.58298001211387} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"UHS_GATE"} schX={7.24560872198667} schY={-0.41641429436704946} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"U"} schX={6.856955380577425} schY={-0.24984857662023074} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ULS_GATE"} schX={7.24560872198667} schY={-0.08328285887341025} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VLS_GATE"} schX={4.66384009691096} schY={-0.08328285887341025} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"V"} schX={4.275186755501714} schY={0.08328285887341025} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VHS_GATE"} schX={7.24560872198667} schY={0.08328285887341025} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"WHS_GATE"} schX={4.66384009691096} schY={-0.24984857662023074} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"W"} schX={4.275186755501714} schY={-0.41641429436704946} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"WLS_GATE"} schX={4.66384009691096} schY={-0.58298001211387} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"DIR"} schX={7.800827781142736} schY={-3.331314354936401} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"BRAKE"} schX={7.07904300423985} schY={-4.580557238037551} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"PWM"} schX={6.135170603674542} schY={-8.161720169594185} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ENABLE#"} schX={8.022915404805168} schY={-3.1647486371895823} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"FAULTn"} schX={5.552190591560663} schY={-5.413385826771654} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VINT"} schX={7.856349687058348} schY={-2.665051483949121} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW-"} schX={3.5534019785988242} schY={-2.665051483949121} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW+"} schX={3.5534019785988242} schY={-2.498485766202302} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV-"} schX={3.5534019785988242} schY={-2.33192004845548} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV+"} schX={3.5534019785988242} schY={-2.1653543307086593} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU-"} schX={3.5534019785988242} schY={-1.9987886129618389} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VREG"} schX={7.856349687058348} schY={-2.8316172016959413} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CP1"} schX={7.800827781142736} schY={-1.8322228952150184} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"CP2"} schX={7.800827781142736} schY={-1.9987886129618389} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VCP"} schX={7.800827781142736} schY={-2.1653543307086593} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU+"} schX={3.5534019785988242} schY={-1.8322228952150184} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VSW"} schX={3.803250555219055} schY={-2.8316172016959413} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"LOCKn"} schX={5.496668685645062} schY={-5.579951544518471} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HALLOUT"} schX={-1.3047647890167582} schY={8.245003028467597} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU-"} schX={-3.0259438724005676} schY={8.494851605087828} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU+"} schX={-3.0259438724005676} schY={8.245003028467597} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV-"} schX={-3.0259438724005676} schY={7.995154451847366} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV+"} schX={-3.0259438724005676} schY={7.745305875227135} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW-"} schX={-3.0259438724005676} schY={7.4954572986069055} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW+"} schX={-3.0259438724005676} schY={7.245608721986674} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"FAULTn"} schX={-1.3602866949323698} schY={7.4954572986069055} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HALLOUT"} schX={5.607712497476275} schY={-5.246820109024833} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"LOCKn"} schX={-1.4158086008479742} schY={7.745305875227135} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VM"} schX={7.745305875227132} schY={-2.33192004845548} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"GND"} schX={7.800827781142736} schY={-2.498485766202302} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW+"} schX={1.3880476478901684} schY={-2.665051483949121} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW-"} schX={1.3880476478901684} schY={-3.331314354936401} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV-"} schX={0.38865334140924546} schY={-2.5817686250757124} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV+"} schX={0.3053704825358352} schY={-1.9987886129618389} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU-"} schX={1.2214819301433444} schY={-1.6656571774681996} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU+"} schX={1.2214819301433444} schY={-1.16596002422774} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ENABLE#"} schX={-1.3047647890167582} schY={8.494851605087828} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HPWR"} schX={1.110438118312132} schY={0.9161114476075127} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HGND"} schX={1.110438118312132} schY={2.082071471835251} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"WH-"} schX={1.0549162123965274} schY={1.9155057540884322} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"WH+"} schX={1.0549162123965274} schY={1.7489400363416117} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VH-"} schX={1.0549162123965274} schY={1.5823743185947912} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VH+"} schX={1.0549162123965274} schY={1.4158086008479707} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"UH-"} schX={1.0549162123965274} schY={1.249242883101152} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"UH+"} schX={1.0549162123965274} schY={1.0826771653543332} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VM"} schX={-1.5823743185947947} schY={7.995154451847366} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VREG"} schX={-2.3041590954976847} schY={-8.661417322834646} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VREG"} schX={0.6940238239450807} schY={-7.662023016353723} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"PWM_X"} schX={0.7495457298606851} schY={-7.995154451847364} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"THRES"} schX={0.7495457298606851} schY={-8.328285887341005} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"THRES"} schX={-2.4152029073288936} schY={-7.995154451847364} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"2V"} schX={-5.163537250151428} schY={-3.4145972138098113} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU-"} schX={-2.5262467191601097} schY={0.4996971532404597} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV-"} schX={-2.5262467191601097} schY={0.33313143549364277} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW-"} schX={-2.5262467191601097} schY={0.1665657177468205} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU+"} schX={-2.5262467191601097} schY={1.3325257419745604} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV+"} schX={-2.5262467191601097} schY={1.499091459721381} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW+"} schX={-2.5262467191601097} schY={1.6656571774682014} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU-"} schX={-2.5262467191601097} schY={-2.415202907328892} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV-"} schX={-2.5262467191601097} schY={-2.2486371895820696} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW-"} schX={-2.5262467191601097} schY={-2.082071471835249} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HU+"} schX={-2.60952957803352} schY={-3.248031496062991} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HV+"} schX={-2.60952957803352} schY={-3.4145972138098113} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"HW+"} schX={-2.60952957803352} schY={-3.581162931556632} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"2V"} schX={-7.412174439733498} schY={0.33313143549364277} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ISENSE"} schX={5.468907732687253} schY={2.498485766202302} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VHS_GATE"} schX={6.745911568746209} schY={4.913688673531194} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"VLS_GATE"} schX={6.745911568746209} schY={4.580557238037553} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"WHS_GATE"} schX={6.745911568746209} schY={2.9981829194427627} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"WLS_GATE"} schX={6.745911568746209} schY={2.6650514839491226} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"UHS_GATE"} schX={6.745911568746209} schY={6.829194427619627} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"ULS_GATE"} schX={6.745911568746209} schY={6.496062992125985} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"U"} schX={11.604078336361795} schY={6.496062992125985} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"V"} schX={11.604078336361795} schY={4.580557238037553} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"W"} schX={11.604078336361795} schY={2.6650514839491226} fontSize={0.1665657177468201} color={"rgb(132, 0, 0)"} anchor="center" schRotation={0} />
      <schematictext text={"Connector for"} schX={-0.999394306480923} schY={1.499091459721381} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Hall sensors"} schX={-0.999394306480923} schY={1.3325257419745604} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Test Points"} schX={-2.4152029073288936} schY={8.661417322834644} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Jumper List"} schX={-13.325257419745613} schY={9.943973349485162} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP3"} schX={-14.241368867353124} schY={8.611447607510598} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP4"} schX={-14.241368867353124} schY={8.328285887341007} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP1"} schX={-14.241368867353124} schY={9.494245911568747} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Hall sensor signal type"} schX={-13.491823137492434} schY={8.478195033313146} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"To provide 5V Hall power, install jumpers JP1_2-3 and JP2."} schX={0.0832828588734067} schY={3.9142943670502737} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"To provide current for Hall elements, install jumper JP1_1-2"} schX={0.0832828588734067} schY={3.664445790430043} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"and uninstall JP2."} schX={0.0832828588734067} schY={3.4978800726832233} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP2"} schX={-14.241368867353124} schY={9.161114476075106} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP5"} schX={-14.241368867353124} schY={7.828588734100546} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP8"} schX={-14.241368867353124} schY={6.829194427619627} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"In general, if the resistance between the Hall PWR and"} schX={0.0832828588734067} schY={3.2480314960629935} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GND wires is <250 ohms, use \\"current\\".  The purpose of"} schX={0.0832828588734067} schY={3.081465778316173} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"the 180 ohm resistor is to bias-up the common-mode"} schX={0.0832828588734067} schY={2.9149000605693525} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"voltage of Hall elements that output differential signals."} schX={0.0832828588734067} schY={2.748334342822531} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Default to populate:"} schX={-13.824954572986073} schY={6.329497274379165} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP1_2-3, JP2"} schX={-13.824954572986073} schY={6.079648697758935} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP3_1-2, JP4_2-3"} schX={-13.824954572986073} schY={5.913082980012114} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Hall power:"} schX={-13.491823137492434} schY={9.410963052695337} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"5V or current"} schX={-13.491823137492434} schY={9.161114476075106} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"555 Timer as PWM Generator"} schX={-1.5823743185947947} schY={-9.244397334948514} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Approximately 25 kHz"} schX={-1.5823743185947947} schY={-9.410963052695335} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Connector"} schX={13.29194427619624} schY={4.580557238037553} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Power"} schX={12.825560266505143} schY={9.327680193821926} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"for motor"} schX={13.29194427619624} schY={4.413991520290733} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"input"} schX={12.825560266505143} schY={9.161114476075106} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"phases"} schX={13.29194427619624} schY={4.247425802543914} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"D1"} schX={13.108721986674745} schY={7.1456692913385815} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"D2"} schX={13.108721986674745} schY={6.229557843731073} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"S2"} schX={13.108721986674745} schY={5.646577831617201} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"S1"} schX={13.108721986674745} schY={6.562689279224713} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"G1"} schX={12.525741974560873} schY={6.912477286493037} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"G2"} schX={12.525741974560873} schY={6.079648697758935} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-15.007571168988497} schY={-11.143246517262268} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Capacitor"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"C"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE ?\\"INITIAL VOLTAGE\\"ŽIC=@\\"INITIAL VOLTAGE\\"Ž"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Initial Voltage"} schX={-14.62447001817081} schY={-10.976680799515448} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"External"} schX={5.213506965475464} schY={-7.92852816474864} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Clock input"} schX={5.213506965475464} schY={-8.09509388249546} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Direction"} schX={-13.491823137492434} schY={7.828588734100546} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP7"} schX={-14.241368867353124} schY={7.412174439733495} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Brake"} schX={-13.491823137492434} schY={7.412174439733495} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Speed Adjust"} schX={-13.491823137492434} schY={7.012416717141125} fontSize={0.2665051483949122} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP5, JP7, JP8"} schX={-13.824954572986073} schY={5.746517262265294} fontSize={0.18322228952150213} color={"#1f2937"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"GND clips"} schX={0.8827983040581451} schY={8.728043609933373} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Installed is Low"} schX={-12.242580254391282} schY={7.845245305875228} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Installed is Low"} schX={-12.242580254391282} schY={7.428831011508176} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Installed: pot R20 controls speed"} schX={-13.491823137492434} schY={6.829194427619627} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Uninstalled: use a clock on JP6"} schX={-13.491823137492434} schY={6.6626287098728065} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"General"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Resistor"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"R"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Excluded Parts"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"@DESIGNATOR %1 %2 @VALUE"} schX={-14.62447001817081} schY={-10.876741368867352} fontSize={0.1665657177468201} color={"#000080"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"Optional series resistors slow FET"} schX={5.91308298001211} schY={7.245608721986674} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"turn-on time and reduce noise"} schX={5.91308298001211} schY={7.079043004239853} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"These circuits control whether pullup resistors and 2V biases are"} schX={-12.57571168988492} schY={4.330708661417323} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"connected to the DRV8307 Hall inputs.  Configuration is done by 2 jumpers"} schX={-12.57571168988492} schY={4.164142943670504} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"(JP3, JP4), and it's provided to support differential Hall signals and"} schX={-12.57571168988492} schY={3.997577225923684} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"single-ended Hall signals with any High/Low polarity.  The purpose of the"} schX={-12.57571168988492} schY={3.8310115081768625} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"2V bias is to connect to one end of each DRV8307 differential comparator,"} schX={-12.57571168988492} schY={3.664445790430043} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"so that the single-ended signal swings 0V to 4V and is detected like a"} schX={-12.57571168988492} schY={3.4978800726832233} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"differential voltage."} schX={-12.57571168988492} schY={3.3313143549364037} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"To use differential Halls, install JP3_1-2 and JP4_1-2.  Then no pullup"} schX={-12.57571168988492} schY={3.081465778316173} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"or bias is connected."} schX={-12.57571168988492} schY={2.9149000605693525} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"To use single-ended Halls with no polarity inversion, install JP3_2-3"} schX={-12.57571168988492} schY={2.6650514839491226} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"and JP4_2-3, and connect motor wires to the + pins of P3."} schX={-12.57571168988492} schY={2.498485766202302} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"To use single-ended Halls with polarity inversion, install JP3_1-2 and"} schX={-12.57571168988492} schY={2.2486371895820714} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      <schematictext text={"JP4_2-3, and connect motor wires to the - pins of P3."} schX={-12.57571168988492} schY={2.082071471835251} fontSize={0.18322228952150213} color={"#ee0e22"} anchor="bottom_left" schRotation={0} />
      </symbol>} />
        </board>
      )
      export default Drv8307Evm"
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

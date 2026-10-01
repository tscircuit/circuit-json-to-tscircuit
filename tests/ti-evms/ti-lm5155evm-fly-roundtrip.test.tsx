import { expect, test } from "bun:test"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"

test(
  "TI LM5155EVM-FLY Circuit JSON to tscircuit round trip",
  async () => {
    const result = await createTiEvmRoundtrip({
      componentName: "Lm5155EvmFly",
      fixtureName: "lm5155evm-fly",
    })

    expect(result.generatedTscircuitSnapshot).toMatchInlineSnapshot(`
      "export default () => (
        <board pcbX={60.1218} pcbY={59.9186} width="85.09mm" height="41.91mm" outline={[{ x: 17.5768, y: 38.9636 }, { x: 17.5768, y: 80.8736 }, { x: 102.6668, y: 80.8736 }, { x: 102.6668, y: 38.9636 }, { x: 17.5768, y: 38.9636 }]} thickness="1.6mm" layers={2} material="fr4" routingDisabled>
          <chip name="ZZ1" pcbX={-37.846000000000004} pcbY={40.766999999999996} pcbRotation="0deg" layer="top" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint>
                  <fabricationnotetext pcbX={1.1429999999999971} pcbY={-0.5079999999999956} anchorAlignment="center" text="Install label in silkscreened box after final wash.  Text shall be 8 pt font.  Text shall be per the Label Table in the PDF schematic." font="tscircuit2024" fontSize={1.016} color="#ec4899" />
                </footprint>} />
          <chip name="R26" pcbX={-9.906000000000006} pcbY={-10.540999999999997} pcbRotation="270deg" layer="top" symbolName="boxresistor_left" schX={-10.05297591477536} schY={4.93509726725336} schDisplayValue="0" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006199999973} x2={-0.07111999999999341} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006200000044} x2={-0.07111999999999341} y2={0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="R26" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={3.683} pcbY={0.5413629000000029} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R26" />
          <courtyardoutline outline={[{"x":-1.200000139999993,"y":-0.5250002199999955},{"x":-1.200000139999993,"y":0.5250002200000026},{"x":1.2000001400000002,"y":0.5250002200000026},{"x":1.2000001400000002,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="T1" pcbX={0} pcbY={2.158999999999999} pcbRotation="90deg" layer="top" schX={2.558939323760999} schY={6.1231762389995374} symbol={<symbol geometryHash="bec2be608893" />} schDisplayValue="21uH" pinLabels={{"pin6":["6","pin6"],"pin7":["7","pin7"],"pin9":["9","pin9"],"pin10":["10","pin10"],"pin5":["5","pin5"],"pin3":["3","pin3"],"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["6"]} pcbX="5.00000016mm" pcbY="-8.19999884mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0523999968mm" width="1.30999992mm" height="2.08000092mm" shape="rect" />
          <smtpad portHints={["7"]} pcbX="2.50000008mm" pcbY="-8.19999884mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0523999968mm" width="1.30999992mm" height="2.08000092mm" shape="rect" />
          <smtpad portHints={["9"]} pcbX="-2.50000008mm" pcbY="-8.19999884mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0523999968mm" width="1.30999992mm" height="2.08000092mm" shape="rect" />
          <smtpad portHints={["10"]} pcbX="-5.00000016mm" pcbY="-8.19999884mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0523999968mm" width="1.30999992mm" height="2.08000092mm" shape="rect" />
          <smtpad portHints={["5"]} pcbX="5.00000016mm" pcbY="8.20000138mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0523999968mm" width="1.30999992mm" height="2.08000092mm" shape="rect" />
          <smtpad portHints={["3"]} pcbX="-0mm" pcbY="8.20000138mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0523999968mm" width="1.30999992mm" height="2.08000092mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="-2.50000008mm" pcbY="8.20000138mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0523999968mm" width="1.30999992mm" height="2.08000092mm" shape="rect" />
          <smtpad portHints={["1"]} pcbX="-5.00000016mm" pcbY="8.20000138mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0523999968mm" width="1.30999992mm" height="2.08000092mm" shape="rect" />
          <fabricationnotetext pcbX={-1.5999993399999966} pcbY={-0.39999919999999634} anchorAlignment="center" text="T1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={-8.73000032000001} pcbY={5.841999999999999} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="T1" />
                </footprint>} />
          <chip name="R15" pcbX={7.746999999999993} pcbY={-18.542} pcbRotation="270deg" layer="top" symbolName="boxresistor_up" schX={8.042380731820288} schY={0.18278138026864355} schDisplayValue="10.2k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07111999999999341} y1={-0.3250006199999973} x2={-0.07112000000000052} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07111999999999341} y1={0.3250006200000115} x2={-0.07112000000000052} y2={0.3250006200000115} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007199999942} anchorAlignment="center" text="R15" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={0.9614636599999997} pcbY={-0.6790004199999942} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R15" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002200000097},{"x":1.200000139999993,"y":0.5250002200000097},{"x":1.200000139999993,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="Q2" pcbX={-26.009998779999997} pcbY={-15.875002539999997} pcbRotation="0deg" layer="top" schX={-3.5642369152385367} schY={-2.376157943492357} symbol={<symbol geometryHash="f8bb30dba912" />} schDisplayValue="20 V" pinLabels={{"pin3":["3","pin3","C"],"pin2":["2","pin2","E"],"pin1":["1","pin1","B"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["3"]} pcbX="1.20000014mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.1499997mm" width="0.5999988mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="-1.20000014mm" pcbY="-0.9499981mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.1499997mm" width="0.5999988mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-1.20000014mm" pcbY="0.95000064mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.1499997mm" width="0.5999988mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenrect pcbX={-1.2125007500000038} pcbY={0.39999919999999634} width={0.8249996199999985} height={0.19999960000000058} layer="top" strokeWidth={0.19999960000000058} filled={true} />
          <silkscreenline x1={0.7000011399999977} y1={-1.4999995400000046} x2={0.7000011399999977} y2={-0.6999986000000007} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.20000213999999517} y1={-1.4999995400000046} x2={0.7000011399999977} y2={-1.4999995400000046} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.7000011399999977} y1={0.7000011399999977} x2={0.7000011399999977} y2={1.4999995399999975} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.20000213999999517} y1={1.4999995399999975} x2={0.7000011399999977} y2={1.4999995399999975} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-0.17500092000000933} pcbY={1.2249988199999962} anchorAlignment="center" text="Q2" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
          <silkscreentext pcbX={-1.7653000000000034} pcbY={2.4510999999999967} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q2" />
          <courtyardoutline outline={[{"x":-1.924999960000008,"y":-1.7499990399999987},{"x":1.9249999599999938,"y":-1.7499990399999987},{"x":1.9249999599999938,"y":1.7500015799999957},{"x":-1.924999960000008,"y":1.7500015799999957}]} layer="top" />
                </footprint>} />
          <chip name="C25" pcbX={-23.241} pcbY={-9.905999999999999} pcbRotation="270deg" layer="top" symbolName="capacitor_down" schX={-7.128473830477073} schY={-2.467548633626679} schDisplayValue="0.01uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006200000044} x2={-0.07112000000000052} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006199999973} x2={-0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="C25" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={4.064} pcbY={0.5079999999999956} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C25" />
          <courtyardoutline outline={[{"x":-1.200000139999993,"y":-0.5250002200000026},{"x":-1.200000139999993,"y":0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="J3" pcbX={-28.194000000000003} pcbY={-0.8890000000000029} pcbRotation="0deg" layer="top" schX={2.1933765632237154} schY={0.3655627605372871} symbol={<symbol geometryHash="c2b19a9bf304" />} schDisplayValue="1040" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.905mm" holeDiameter="1.3208mm" shape="circle" />
          <fabricationnotetext pcbX={-1.2699999999999996} pcbY={-0.2539999999999978} anchorAlignment="center" text="J3" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
          <silkscreentext pcbX={-0.8889999999999993} pcbY={-2.2859999999999943} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J3" />
                </footprint>} />
          <chip name="J4" pcbX={-31.623} pcbY={-11.811} pcbRotation="270deg" layer="top" schX={-13.525822139879576} schY={-4.935097267253358} symbol={<symbol geometryHash="460a997a97d8" />} schDisplayValue="PEC05SAAN" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"],"pin3":["3","pin3"],"pin4":["4","pin4"],"pin5":["5","pin5"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="-5.08mm" pcbY="-0mm" holeShape="circle" padShape="rect" holeDiameter="1.016mm" rectPadWidth="1.54999944mm" rectPadHeight="1.54999944mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
          <platedhole  portHints={["2"]} pcbX="-2.54mm" pcbY="-0mm" outerDiameter="1.54999944mm" holeDiameter="1.016mm" shape="circle" />
          <platedhole  portHints={["3"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.54999944mm" holeDiameter="1.016mm" shape="circle" />
          <platedhole  portHints={["4"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.54999944mm" holeDiameter="1.016mm" shape="circle" />
          <platedhole  portHints={["5"]} pcbX="5.08mm" pcbY="0mm" outerDiameter="1.54999944mm" holeDiameter="1.016mm" shape="circle" />
          <silkscreenrect pcbX={-5.0000014299999975} pcbY={-1.5099969800000004} width={0.9999980000000029} height={0.4799965000000009} layer="top" strokeWidth={0.4799965000000009} filled={true} />
          <silkscreenline x1={-6.100003039999997} y1={-1.2700025400000037} x2={-6.3500025400000055} y2={-1.0200005000000054} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-6.3500025400000055} y1={-1.0200005000000054} x2={-6.3500025400000055} y2={1.0200004999999983} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-4.0600020400000005} y1={-1.2700025400000037} x2={-6.100003039999997} y2={-1.2700025400000037} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-4.0600020400000005} y1={1.269999999999996} x2={-6.100003039999997} y2={1.269999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-4.0600020400000005} y1={-1.2700025400000037} x2={-3.8100025399999993} y2={-1.0200005000000054} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-6.3500025400000055} y1={1.0200004999999983} x2={-6.100003039999997} y2={1.269999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-3.8100025399999993} y1={1.0200004999999983} x2={-4.0600020400000005} y2={1.269999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-3.560000500000001} y1={-1.2700025400000037} x2={-3.8100025399999993} y2={-1.0200005000000054} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-1.5199994999999973} y1={-1.2700025400000037} x2={-3.560000500000001} y2={-1.2700025400000037} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-1.5199994999999973} y1={1.269999999999996} x2={-3.560000500000001} y2={1.269999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-1.5199994999999973} y1={-1.2700025400000037} x2={-1.2700000000000031} y2={-1.0200005000000054} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-3.8100025399999993} y1={1.0200004999999983} x2={-3.560000500000001} y2={1.269999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-1.2700000000000031} y1={1.0200004999999983} x2={-1.5199994999999973} y2={1.269999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-1.0200005000000019} y1={-1.2700025400000037} x2={-1.2700000000000031} y2={-1.0200005000000054} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={1.0200005000000019} y1={-1.2700025400000001} x2={-1.0200005000000019} y2={-1.2700025400000037} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={1.0200005000000019} y1={1.2699999999999996} x2={-1.0200005000000019} y2={1.269999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={1.0200005000000019} y1={-1.2700025400000001} x2={1.2700000000000031} y2={-1.0200005000000019} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-1.2700000000000031} y1={1.0200004999999983} x2={-1.0200005000000019} y2={1.269999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={1.2700000000000031} y1={1.0200005000000019} x2={1.0200005000000019} y2={1.2699999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={1.5200020400000014} y1={-1.2700025400000001} x2={1.2700000000000031} y2={-1.0200005000000019} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={3.560003039999998} y1={-1.2700025400000001} x2={1.5200020400000014} y2={-1.2700025400000001} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={3.560003039999998} y1={1.2699999999999996} x2={1.5200020400000014} y2={1.2699999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={3.560003039999998} y1={-1.2700025400000001} x2={3.8100025399999993} y2={-1.0200005000000019} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={1.2700000000000031} y1={1.0200005000000019} x2={1.5200020400000014} y2={1.2699999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={3.8100025399999993} y1={1.0200005000000019} x2={3.560003039999998} y2={1.2699999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={4.0600020400000005} y1={-1.2700025400000001} x2={3.8100025399999993} y2={-1.0200005000000019} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={6.100003039999997} y1={-1.2700025400000001} x2={4.0600020400000005} y2={-1.2700025400000001} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={6.100003039999997} y1={1.2699999999999996} x2={4.0600020400000005} y2={1.2699999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={6.100003039999997} y1={-1.2700025400000001} x2={6.350002539999998} y2={-1.0200005000000019} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={3.8100025399999993} y1={1.0200005000000019} x2={4.0600020400000005} y2={1.2699999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={6.350002539999998} y1={1.0200005000000019} x2={6.100003039999997} y2={1.2699999999999996} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={6.350002539999998} y1={-1.0200005000000019} x2={6.350002539999998} y2={1.0200005000000019} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-2.000001079999997} pcbY={-0.4999990000000025} anchorAlignment="center" text="J4" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={-7.112000000000002} pcbY={-0.762000000000004} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J4" />
                </footprint>} />
          <chip name="TP6" pcbX={28.067} pcbY={-19.202399999999997} pcbRotation="90deg" layer="top" symbolName="testpoint_right" schX={12.685027790643819} schY={3.6556276053728585} schDisplayValue="TP_SM_1MM" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" radius="0.50000027mm" shape="circle" />
          <silkscreentext pcbX={0.658616919999993} pcbY={-0.3802532400000018} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP6" />
                </footprint>} />
          <chip name="R9" pcbX={-28.321} pcbY={-6.731000000000002} pcbRotation="180deg" layer="top" symbolName="boxresistor_right" schX={-8.956287633163504} schY={2.0105951829550737} schDisplayValue="100k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006200000044} x2={-0.07111999999999696} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006200000044} x2={-0.07111999999999696} y2={0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000016} pcbY={-0.2750007199999942} anchorAlignment="center" text="R9" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.0160000000000018} pcbY={-0.7620000000000005} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R9" />
          <courtyardoutline outline={[{"x":1.2000001399999967,"y":-0.5250002200000026},{"x":1.2000001399999967,"y":0.5250002199999955},{"x":-1.2000001399999967,"y":0.5250002199999955},{"x":-1.2000001399999967,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R4" pcbX={-8.128} pcbY={14.224000000000004} pcbRotation="180deg" layer="top" symbolName="boxresistor_up" schX={-1.2794696618805013} schY={4.752315886984716} schDisplayValue="30.1k" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="2.95000172mm" pcbY="0.00000254mm" layer="top" solderMaskMargin="0.0499999mm" width="3.40000082mm" height="1.29999994mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-2.94999918mm" pcbY="0.00000254mm" layer="top" solderMaskMargin="0.0499999mm" width="3.40000082mm" height="1.29999994mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={1.900001280000005} y1={-1.5999993399999966} x2={-1.899998740000001} y2={-1.5999993399999966} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={1.900001280000005} y1={1.6000018800000078} x2={-1.899998740000001} y2={1.6000018800000078} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.8499988399999978} pcbY={-0.4999989999999883} anchorAlignment="center" text="R4" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={0.7366000000000028} pcbY={-2.2605999999999966} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R4" />
          <courtyardoutline outline={[{"x":-3.849999919999995,"y":1.950001180000001},{"x":3.849999920000002,"y":1.950001180000001},{"x":3.849999920000002,"y":-1.9499986399999898},{"x":-3.849999919999995,"y":-1.9499986399999898}]} layer="top" />
                </footprint>} />
          <chip name="C16" pcbX={-6.984999999999999} pcbY={11.048999999999992} pcbRotation="0deg" layer="top" symbolName="capacitor_down" schX={-0.3655627605372871} schY={4.660925196850394} schDisplayValue="0.33uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-1.69999914mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.59999934mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="1.69999914mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.59999934mm" height="1.10000034mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.9000007400000101} y1={1.0000005400000163} x2={0.900000740000003} y2={1.0000005400000163} strokeWidth={0.16999966} />
          <silkscreenline x1={-0.9000007400000101} y1={-1.000000540000002} x2={0.900000740000003} y2={-1.000000540000002} strokeWidth={0.16999966} />
          <fabricationnotetext pcbX={-1.4999995400000046} pcbY={-0.39999919999999634} anchorAlignment="center" text="C16" font="tscircuit2024" fontSize={0.8128} color="#ec4899" />
          <silkscreentext pcbX={-5.105400000000003} pcbY={-0.6857999999999862} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C16" />
                </footprint>} />
          <chip name="U1" pcbX={-20.482003739999996} pcbY={-10.068001199999998} pcbRotation="270deg" layer="top" schX={-6.397348309402503} schY={1.6450324224177866} symbol={<symbol geometryHash="8996e6498738" />} schDisplayValue="LM5155DSST" pinLabels={{"pin1":["1","pin1","BIAS"],"pin2":["2","pin2","VCC"],"pin3":["3","pin3","GATE"],"pin4":["4","pin4","PGND"],"pin5":["5","pin5","CS"],"pin6":["6","pin6","COMP"],"pin7":["7","pin7","AGND"],"pin8":["8","pin8","FB"],"pin9":["9","pin9","SS"],"pin10":["10","pin10","RT"],"pin11":["11","pin11","PGOOD"],"pin12":["12","pin12","UVLO/SYNC"],"pin13":["13","pin13","EP"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.9499981mm" pcbY="1.25000004mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="-0.9499981mm" pcbY="0.7499985mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["3"]} pcbX="-0.9499981mm" pcbY="0.2499995mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["4"]} pcbX="-0.9499981mm" pcbY="-0.2499995mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["5"]} pcbX="-0.9499981mm" pcbY="-0.75000104mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["6"]} pcbX="-0.9499981mm" pcbY="-1.25000004mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["7"]} pcbX="0.95000064mm" pcbY="-1.25000004mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["8"]} pcbX="0.95000064mm" pcbY="-0.75000104mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["9"]} pcbX="0.95000064mm" pcbY="-0.2499995mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["10"]} pcbX="0.95000064mm" pcbY="0.2499995mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["11"]} pcbX="0.95000064mm" pcbY="0.7499985mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["12"]} pcbX="0.95000064mm" pcbY="1.25000004mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0499999mm" width="0.499999mm" height="0.2499995mm" shape="rect" />
          <smtpad portHints={["13"]} pcbX="0.00000254mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0550000297mm" width="1.00000054mm" height="2.64999978mm" ccwRotation={270} shape="rotated_rect" />
          <fabricationnotetext pcbX={0} pcbY={0.8000009399999897} anchorAlignment="center" text="U1" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
          <silkscreentext pcbX={3.0129988000000054} pcbY={0.2890037399999912} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U1" />
                </footprint>} />
          <chip name="U3" pcbX={10.827999679999998} pcbY={-14.745997939999995} pcbRotation="0deg" layer="top" schX={7.338672417786011} schY={-3.1072834645669287} symbol={<symbol geometryHash="0f897561c573" />} schDisplayValue="LMV431BIMF/NOPB" pinLabels={{"pin3":["3","pin3","A"],"pin2":["2","pin2","K"],"pin1":["1","pin1","REF"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["3"]} pcbX="1.20000014mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.050999898mm" width="0.5999988mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="-1.20000014mm" pcbY="-0.9499981mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.050999898mm" width="0.5999988mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-1.20000014mm" pcbY="0.95000064mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.050999898mm" width="0.5999988mm" height="1.00000054mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={0.20000213999999517} y1={1.4999995399999904} x2={0.7000011399999977} y2={1.4999995399999904} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.7000011399999977} y1={0.7000011399999977} x2={0.7000011399999977} y2={1.4999995399999904} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.20000213999999517} y1={-1.4999995400000046} x2={0.7000011399999977} y2={-1.4999995400000046} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.7000011399999977} y1={-1.4999995400000046} x2={0.7000011399999977} y2={-0.6999986000000078} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-0.2540000000000049} pcbY={0.8889999999999958} anchorAlignment="center" text="U3" font="tscircuit2024" fontSize={0.508} color="#ec4899" />
          <silkscreentext pcbX={-0.2869996800000081} pcbY={2.172997939999995} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U3" />
          <courtyardoutline outline={[{"x":-1.9249999599999938,"y":-1.7499990400000058},{"x":1.924999960000008,"y":-1.7499990400000058},{"x":1.924999960000008,"y":1.7500015799999957},{"x":-1.9249999599999938,"y":1.7500015799999957}]} layer="top" />
                </footprint>} />
          <chip name="U2" pcbX={0.3810000000000002} pcbY={-17.145000000000003} pcbRotation="180deg" layer="top" schX={5.666222788327929} schY={-1.462251042149143} symbol={<symbol geometryHash="34ab63a79c45" />} schDisplayValue="PS2811-1-M-A" pinLabels={{"pin4":["4","pin4","C"],"pin3":["3","pin3","E"],"pin2":["2","pin2","K"],"pin1":["1","pin1","A"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["4"]} pcbX="3.1250001mm" pcbY="0.635mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="1.44999964mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["3"]} pcbX="3.1250001mm" pcbY="-0.635mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="1.44999964mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="-3.1250001mm" pcbY="-0.635mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="1.44999964mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-3.1250001mm" pcbY="0.635mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="1.44999964mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenpath route={[{"x":-1.5656839399999924,"y":0.7000011399999977},{"x":-1.563264190047235,"y":0.6630828898979502},{"x":-1.5560463427814994,"y":0.6267963212908185},{"x":-1.5441538975706948,"y":0.59176230742802},{"x":-1.5277903374495736,"y":0.5585802899999948},{"x":-1.5072356474686472,"y":0.527818022524734},{"x":-1.4828415240723203,"y":0.500001855927664},{"x":-1.4550253574752503,"y":0.47560773253134414},{"x":-1.4242630899999966,"y":0.4550530425504178},{"x":-1.3910810725719713,"y":0.4386894824292966},{"x":-1.3560470587091658,"y":0.42679703721849194},{"x":-1.3197604901020341,"y":0.41957918995276344},{"x":-1.2828422399999937,"y":0.41715943999999183},{"x":-1.2459239898979533,"y":0.41957918995276344},{"x":-1.2096374212908287,"y":0.42679703721849194},{"x":-1.1746034074280232,"y":0.4386894824292966},{"x":-1.1414213899999908,"y":0.4550530425504178},{"x":-1.1106591225247442,"y":0.47560773253134414},{"x":-1.082842955927667,"y":0.500001855927664},{"x":-1.0584488325313401,"y":0.527818022524734},{"x":-1.037894142550421,"y":0.5585802899999948},{"x":-1.0215305824292997,"y":0.59176230742802},{"x":-1.009638137218488,"y":0.6267963212908185},{"x":-1.0024202899527594,"y":0.6630828898979502},{"x":-1.000000540000002,"y":0.7000011399999977},{"x":-1.0024202899527594,"y":0.7369193901020452},{"x":-1.009638137218488,"y":0.7732059587091697},{"x":-1.0215305824292997,"y":0.8082399725719753},{"x":-1.037894142550421,"y":0.8414219899999935},{"x":-1.0584488325313401,"y":0.8721842574752543},{"x":-1.082842955927667,"y":0.9000004240723243},{"x":-1.1106591225247442,"y":0.9243945474686441},{"x":-1.1414213899999908,"y":0.9449492374495705},{"x":-1.1746034074280232,"y":0.9613127975706917},{"x":-1.2096374212908287,"y":0.9732052427815034},{"x":-1.2459239898979533,"y":0.9804230900472248},{"x":-1.2828422399999937,"y":0.9828428399999964},{"x":-1.3197604901020341,"y":0.9804230900472248},{"x":-1.3560470587091658,"y":0.9732052427815034},{"x":-1.3910810725719713,"y":0.9613127975706917},{"x":-1.4242630899999966,"y":0.9449492374495705},{"x":-1.4550253574752503,"y":0.9243945474686441},{"x":-1.4828415240723203,"y":0.9000004240723243},{"x":-1.5072356474686472,"y":0.8721842574752543},{"x":-1.5277903374495736,"y":0.8414219899999935},{"x":-1.5441538975706948,"y":0.8082399725719753},{"x":-1.5560463427814994,"y":0.7732059587091697},{"x":-1.563264190047235,"y":0.7369193901020452},{"x":-1.5656839399999924,"y":0.7000011399999977}]} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.000001080000011} y1={-1.4999995400000046} x2={0} y2={-1.4999995400000046} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.000001080000011} y1={0} x2={2.000001080000011} y2={-1.4999995400000046} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-2.000001080000004} y1={0} x2={-2.000001080000004} y2={-1.4999995400000046} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0} y1={-1.4999995400000046} x2={-2.000001080000004} y2={-1.4999995400000046} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0} y1={1.4999995399999975} x2={-2.000001080000004} y2={1.4999995399999975} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-2.000001080000004} y1={1.4999995399999975} x2={-2.000001080000004} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.000001080000011} y1={1.4999995399999975} x2={2.000001080000011} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.000001080000011} y1={1.4999995399999975} x2={0} y2={1.4999995399999975} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.924999960000001} pcbY={-0.5750001200000057} anchorAlignment="center" text="U2" font="tscircuit2024" fontSize={1.143} color="#ec4899" />
          <silkscreentext pcbX={1.0160000000000053} pcbY={-2.2860000000000014} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="U2" />
                </footprint>} />
          <chip name="R16" pcbX={-16.67200374} pcbY={-12.192} pcbRotation="180deg" layer="top" symbolName="boxresistor_up" schX={-10.966882816118575} schY={0} schDisplayValue="9.76k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006199999973} x2={-0.07112000000000052} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006199999973} x2={-0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="R16" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-1.6945305200000007} pcbY={0.634999999999998} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R16" />
          <courtyardoutline outline={[{"x":1.2000001400000002,"y":-0.5250002200000026},{"x":1.2000001400000002,"y":0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002200000026},{"x":-1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R6" pcbX={-16.67200374} pcbY={-10.668} pcbRotation="0deg" layer="top" symbolName="boxresistor_up" schX={-10.966882816118575} schY={3.4728462251042167} schDisplayValue="100k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000052} y1={-0.3250006199999973} x2={0.07112000000000052} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000052} y1={0.3250006199999973} x2={0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="R6" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.8130037399999992} pcbY={-0.634999999999998} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R6" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002200000026},{"x":1.2000001400000002,"y":0.5250002200000026},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R13" pcbX={14.350999999999992} pcbY={-18.415} pcbRotation="0deg" layer="top" symbolName="boxresistor_up" schX={8.956287633163502} schY={1.2794696618805013} schDisplayValue="100k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.07111999999999341} y1={-0.3250006199999973} x2={0.07112000000000762} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07111999999999341} y1={0.3250006199999973} x2={0.07112000000000762} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999991} pcbY={-0.2750007200000013} anchorAlignment="center" text="R13" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.524000000000001} pcbY={-0.5080000000000027} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R13" />
          <courtyardoutline outline={[{"x":-1.200000139999986,"y":-0.5250002200000026},{"x":-1.200000139999986,"y":0.5250002200000026},{"x":1.2000001400000002,"y":0.5250002200000026},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R1" pcbX={10.54099999999999} pcbY={11.302999999999997} pcbRotation="0deg" layer="top" symbolName="boxresistor_right" schX={4.752315886984714} schY={7.859599351551648} schDisplayValue="15.0" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-1.44999964mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="2.69999968mm" height="1.29999994mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="1.44999964mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="2.69999968mm" height="1.29999994mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-2.3164799999999843} y1={-1.5677794399999954} x2={-2.3164799999999843} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-2.3164799999999843} y1={1.5677794399999954} x2={-1.5111018799999982} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-2.3164799999999843} y1={-1.5677794399999954} x2={-1.5111018799999982} y2={-1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.5111018800000124} y1={-1.5677794399999954} x2={2.3164799999999985} y2={-1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.5111018800000124} y1={1.5677794399999954} x2={2.3164799999999985} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.3164799999999985} y1={-1.5677794399999954} x2={2.3164799999999985} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.3999997399999984} pcbY={-0.3750005200000004} anchorAlignment="center" text="R1" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
          <silkscreentext pcbX={-0.7619999999999862} pcbY={2.2860000000000014} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R1" />
          <courtyardoutline outline={[{"x":-2.350000379999983,"y":-1.5999993399999966},{"x":-2.350000379999983,"y":1.5999993399999966},{"x":2.3500003799999973,"y":1.5999993399999966},{"x":2.3500003799999973,"y":-1.5999993399999966}]} layer="top" />
                </footprint>} />
          <chip name="R10" pcbX={-23.291800000000002} pcbY={-7.238999999999997} pcbRotation="270deg" layer="top" symbolName="boxresistor_left" schX={-2.5589393237610008} schY={2.0105951829550737} schDisplayValue="0" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000762} y1={-0.3250006199999973} x2={-0.07112000000000052} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000762} y1={0.3250006199999973} x2={-0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="R10" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-3.3019999999999996} pcbY={-1.0921999999999983} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R10" />
          <courtyardoutline outline={[{"x":-1.200000139999993,"y":-0.5250002200000026},{"x":-1.200000139999993,"y":0.5250002200000026},{"x":1.2000001400000002,"y":0.5250002200000026},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R18" pcbX={-24.80000374} pcbY={-7.366} pcbRotation="90deg" layer="top" symbolName="boxresistor_up" schX={3.4728462251042167} schY={-0.3655627605372853} schDisplayValue="4.99k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000762} y1={-0.3250006200000044} x2={0.07112000000000762} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000762} y1={0.3250006199999973} x2={0.07112000000000762} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="R18" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-0.16635475999999727} pcbY={0.9023629399999962} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R18" />
          <courtyardoutline outline={[{"x":1.2000001400000002,"y":-0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="R14" pcbX={5.207000000000001} pcbY={-18.415} pcbRotation="270deg" layer="top" symbolName="boxresistor_up" schX={7.128473830477073} schY={0.18278138026864355} schDisplayValue="1.00k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006200000115} x2={-0.07112000000000052} y2={-0.3250006200000115} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006199999973} x2={-0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="R14" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.7779999999999987} pcbY={-3.3019999999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R14" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000097},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":-0.5250002200000097}]} layer="top" />
                </footprint>} />
          <chip name="R8" pcbX={-19.888200000000005} pcbY={-4.800600000000003} pcbRotation="270deg" layer="top" symbolName="boxresistor_left" schX={-2.5589393237610008} schY={2.7417207040296443} schDisplayValue="0" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006199999973} x2={-0.07112000000000762} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006200000044} x2={-0.07112000000000762} y2={0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000013} anchorAlignment="center" text="R8" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-1.7150029200000034} pcbY={0.4661560400000013} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R8" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002200000026},{"x":1.200000139999993,"y":0.5250002200000026},{"x":1.200000139999993,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="R17" pcbX={-18.704003739999997} pcbY={-15.656001199999999} pcbRotation="90deg" layer="top" symbolName="boxresistor_up" schX={-10.05297591477536} schY={0} schDisplayValue="86.6k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000052} y1={-0.3250006199999973} x2={0.07112000000000052} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000052} y1={0.3250006200000044} x2={0.07112000000000052} y2={0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="R17" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-3.7749987999999988} pcbY={-0.5430037399999961} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R17" />
          <courtyardoutline outline={[{"x":1.2000001400000002,"y":-0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002200000026},{"x":-1.2000001400000002,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="R11" pcbX={-23.241} pcbY={-4.1910000000000025} pcbRotation="270deg" layer="top" symbolName="boxresistor_left" schX={0.18278138026864177} schY={2.0105951829550737} schDisplayValue="100" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006200000044} x2={-0.07112000000000762} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006199999973} x2={-0.07112000000000762} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000013} anchorAlignment="center" text="R11" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-1.600200000000001} pcbY={0.3810000000000002} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R11" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":1.200000139999993,"y":0.5250002199999955},{"x":1.200000139999993,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R19" pcbX={15.112999999999992} pcbY={-13.842999999999996} pcbRotation="270deg" layer="top" symbolName="boxresistor_up" schX={11.880789717461788} schY={-1.096688281611856} schDisplayValue="30.0k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006199999973} x2={-0.07111999999999341} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006200000115} x2={-0.07111999999999341} y2={0.3250006200000115} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="R19" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-1.7779999999999987} pcbY={0.5080000000000098} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R19" />
          <courtyardoutline outline={[{"x":-1.200000139999993,"y":-0.5250002199999955},{"x":-1.200000139999993,"y":0.5250002200000097},{"x":1.2000001400000002,"y":0.5250002200000097},{"x":1.2000001400000002,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="R22" pcbX={13.588999999999992} pcbY={-13.842999999999996} pcbRotation="90deg" layer="top" symbolName="boxresistor_up" schX={11.880789717461788} schY={-3.6556276053728576} schDisplayValue="9.76k" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000052} y1={0.3250006199999973} x2={0.07111999999999341} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000052} y1={-0.3250006200000115} x2={0.07111999999999341} y2={-0.3250006200000115} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007199999942} anchorAlignment="center" text="R22" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.7779999999999987} pcbY={-0.5080000000000098} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R22" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000097},{"x":1.200000139999993,"y":-0.5250002200000097},{"x":1.200000139999993,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="R20" pcbX={-25.308003739999997} pcbY={-9.398000000000003} pcbRotation="180deg" layer="top" symbolName="boxresistor_down" schX={-6.031785548865216} schY={-2.010595182955072} schDisplayValue="1.00k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={0.07112000000000762} y1={-0.3250006200000044} x2={-0.07111999999999341} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000762} y1={0.3250006199999973} x2={-0.07111999999999341} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999991} pcbY={-0.2750007200000013} anchorAlignment="center" text="R20" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={4.028996260000007} pcbY={0.634999999999998} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R20" />
          <courtyardoutline outline={[{"x":1.2000001400000073,"y":-0.5250002200000026},{"x":1.2000001400000073,"y":0.5250002199999955},{"x":-1.200000139999993,"y":0.5250002199999955},{"x":-1.200000139999993,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R21" pcbX={6.984999999999992} pcbY={-12.700000000000003} pcbRotation="180deg" layer="top" symbolName="boxresistor_left" schX={10.418538675312647} schY={-2.558939323761} schDisplayValue="1.00k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={0.07111999999999341} y1={-0.3250006200000044} x2={-0.07112000000000762} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07111999999999341} y1={0.3250006199999973} x2={-0.07112000000000762} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000013} anchorAlignment="center" text="R21" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.524000000000001} pcbY={-0.8749995200000029} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R21" />
          <courtyardoutline outline={[{"x":1.200000139999986,"y":-0.5250002200000026},{"x":1.200000139999986,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R5" pcbX={-16.67200374} pcbY={-9.143999999999998} pcbRotation="0deg" layer="top" symbolName="boxresistor_left" schX={-9.139069013432145} schY={4.203971746178787} schDisplayValue="0" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000052} y1={-0.3250006200000044} x2={0.07112000000000052} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000052} y1={0.3250006199999973} x2={0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="R5" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.8130037399999992} pcbY={-0.634999999999998} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R5" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="Q1" pcbX={-14.350999999999999} pcbY={2.6670000000000016} pcbRotation="0deg" layer="top" symbolName="n_channel_e_mosfet_transistor_gate_left_drain_top" schX={1.0327147985178335} schY={2.7417207040296443} schDisplayValue="100V" pinLabels={{"pin1":["1","pin1","S"],"pin2":["2","pin2","S"],"pin3":["3","pin3","S"],"pin4":["4","pin4","G"],"pin5":["5","pin5","D"],"pin6":["6","pin6","D"],"pin7":["7","pin7","D"],"pin8":["8","pin8","D"],"pin9":["9","pin9","D"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-2.79500076mm" pcbY="1.905mm" layer="top" solderMaskMargin="-0.0499999mm" cornerRadius="0.0994498011mm" width="0.91000072mm" height="0.50999898mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="-2.79500076mm" pcbY="0.635mm" layer="top" solderMaskMargin="-0.0499999mm" cornerRadius="0.0994498011mm" width="0.91000072mm" height="0.50999898mm" shape="rect" />
          <smtpad portHints={["3"]} pcbX="-2.79500076mm" pcbY="-0.635mm" layer="top" solderMaskMargin="-0.0499999mm" cornerRadius="0.0994498011mm" width="0.91000072mm" height="0.50999898mm" shape="rect" />
          <smtpad portHints={["4"]} pcbX="-2.79500076mm" pcbY="-1.905mm" layer="top" solderMaskMargin="-0.0499999mm" cornerRadius="0.0994498011mm" width="0.91000072mm" height="0.50999898mm" shape="rect" />
          <smtpad portHints={["5"]} pcbX="2.79500076mm" pcbY="-1.905mm" layer="top" solderMaskMargin="-0.0499999mm" cornerRadius="0.0994498011mm" width="0.91000072mm" height="0.50999898mm" shape="rect" />
          <smtpad portHints={["6"]} pcbX="2.79500076mm" pcbY="-0.635mm" layer="top" solderMaskMargin="-0.0499999mm" cornerRadius="0.0994498011mm" width="0.91000072mm" height="0.50999898mm" shape="rect" />
          <smtpad portHints={["7"]} pcbX="2.79500076mm" pcbY="0.635mm" layer="top" solderMaskMargin="-0.0499999mm" cornerRadius="0.0994498011mm" width="0.91000072mm" height="0.50999898mm" shape="rect" />
          <smtpad portHints={["8"]} pcbX="2.79500076mm" pcbY="1.905mm" layer="top" solderMaskMargin="-0.0499999mm" cornerRadius="0.0994498011mm" width="0.91000072mm" height="0.50999898mm" shape="rect" />
          <smtpad portHints={["9"]} pcbX="1.0050018mm" pcbY="0mm" layer="top" solderMaskMargin="-2.50000008mm" cornerRadius="0.0449000118mm" width="4.49000118mm" height="4.57000102mm" shape="rect" />
          <silkscreenline x1={-2.999999080000002} y1={-2.5999998800000057} x2={-2.799999480000004} y2={-2.5999998800000057} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={2.7999994799999968} y1={-2.5999998800000057} x2={2.999999080000002} y2={-2.5999998800000057} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={2.7999994799999968} y1={2.5999998799999986} x2={2.999999080000002} y2={2.5999998799999986} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-2.999999080000002} y1={2.5999998799999986} x2={-2.000001080000004} y2={2.5999998799999986} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-2.000001080000004} pcbY={-0.7000011399999977} anchorAlignment="center" text="Q1" font="tscircuit2024" fontSize={1.8499988399999998} color="#ec4899" />
          <silkscreentext pcbX={-0.2540000000000049} pcbY={2.793999999999997} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="Q1" />
                </footprint>} />
          <chip name="NT1" pcbX={-21.73201394} pcbY={-10.540999999999997} pcbRotation="90deg" layer="top" schX={-3.6556276053728585} schY={-0.18278138026864177} symbol={<symbol geometryHash="a7ae6bd78853" />} schDisplayValue="Net-Tie" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.254mm" pcbY="0mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.254mm" pcbY="0mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" ccwRotation={90} shape="rotated_rect" />
                </footprint>} />
          <chip name="J2" pcbX={37.97299999999999} pcbY={-4.1910000000000025} pcbRotation="90deg" layer="top" schX={13.70860352014822} schY={5.940394858730896} symbol={<symbol geometryHash="a55faa08c2a5" />} schDisplayValue="ED350/2" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="-2.50000008mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.29999994mm" rectPadWidth="1.79999894mm" rectPadHeight="1.79999894mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="90deg" shape="circular_hole_with_rect_pad" />
          <platedhole  portHints={["2"]} pcbX="2.50000008mm" pcbY="0mm" outerDiameter="1.79999894mm" holeDiameter="1.29999994mm" shape="circle" />
          <silkscreenline x1={-5.000000159999999} y1={-3.999999620000011} x2={-5.000000159999999} y2={-4.5000011599999965} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999999} y1={4.5000011599999965} x2={-5.000000159999999} y2={3.999999619999997} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.599998960000001} y1={3.999999619999997} x2={-5.599998960000001} y2={3.7000002199999926} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.599998960000001} y1={3.7000002199999926} x2={-5.000000159999999} y2={3.7000002199999926} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.599998960000001} y1={3.999999619999997} x2={-5.000000159999999} y2={3.999999619999997} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.599998960000001} y1={-3.999999620000011} x2={-5.000000159999999} y2={-3.999999620000011} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.599998960000001} y1={-3.700000220000007} x2={-5.000000159999999} y2={-3.700000220000007} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.599998960000001} y1={-3.700000220000007} x2={-5.599998960000001} y2={-3.999999620000011} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999999} y1={3.7000002199999926} x2={-5.000000159999999} y2={-3.700000220000007} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999999} y1={4.5000011599999965} x2={5.000000159999999} y2={4.5000011599999965} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.000000159999999} y1={4.5000011599999965} x2={5.000000159999999} y2={-4.5000011599999965} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999999} y1={-4.5000011599999965} x2={5.000000159999999} y2={-4.5000011599999965} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.524000000000001} pcbY={-0.5080000000000098} anchorAlignment="center" text="J2" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={3.8100000000000023} pcbY={6.349999999999994} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J2" />
                </footprint>} />
          <chip name="J1" pcbX={-37.973} pcbY={1.3969999999999985} pcbRotation="270deg" layer="top" schX={-14.256947660954147} schY={6.305957619268181} symbol={<symbol geometryHash="05b9bd6cce7e" />} schDisplayValue="ED350/2" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="-2.50000008mm" pcbY="0mm" holeShape="circle" padShape="rect" holeDiameter="1.29999994mm" rectPadWidth="1.79999894mm" rectPadHeight="1.79999894mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="circular_hole_with_rect_pad" />
          <platedhole  portHints={["2"]} pcbX="2.50000008mm" pcbY="0mm" outerDiameter="1.79999894mm" holeDiameter="1.29999994mm" shape="circle" />
          <silkscreenline x1={-5.000000159999985} y1={-4.5000011599999965} x2={-5.000000159999985} y2={-3.9999996200000005} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999985} y1={3.9999996200000005} x2={-5.000000159999985} y2={4.500001160000004} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.5999989599999935} y1={3.7000002200000033} x2={-5.5999989599999935} y2={3.9999996200000005} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999985} y1={3.7000002200000033} x2={-5.5999989599999935} y2={3.7000002200000033} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999985} y1={3.9999996200000005} x2={-5.5999989599999935} y2={3.9999996200000005} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999985} y1={-3.9999996200000005} x2={-5.5999989599999935} y2={-3.9999996200000005} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999985} y1={-3.7000002199999997} x2={-5.5999989599999935} y2={-3.7000002199999997} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.5999989599999935} y1={-3.9999996200000005} x2={-5.5999989599999935} y2={-3.7000002199999997} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.000000159999985} y1={-3.7000002199999997} x2={-5.000000159999985} y2={3.7000002200000033} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.000000159999992} y1={4.500001160000004} x2={-5.000000159999985} y2={4.500001160000004} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.000000159999999} y1={-4.5000011599999965} x2={5.000000159999992} y2={4.500001160000004} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.000000159999999} y1={-4.5000011599999965} x2={-5.000000159999985} y2={-4.5000011599999965} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.524000000000001} pcbY={-0.5079999999999991} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={1.7779999999999987} pcbY={5.080000000000002} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="J1" />
                </footprint>} />
          <chip name="D3" pcbX={-2.6670000000000016} pcbY={12.572999999999993} pcbRotation="270deg" layer="top" symbolName="diode_right" schX={0.18278138026864177} schY={3.6556276053728585} schDisplayValue="150V" pinLabels={{"pin2":["2","pin2","A"],"pin1":["1","pin1","K"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="2.00000108mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="2.00000108mm" height="2.00000108mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-1.99999854mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="2.00000108mm" height="2.00000108mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenrect pcbX={-3.40360127000001} pcbY={0} width={0.508} height={3.149602540000005} layer="top" strokeWidth={0.508} filled={true} />
          <silkscreenline x1={2.793999999999997} y1={1.485902540000005} x2={-3.3274000000000115} y2={1.485902540000005} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.793999999999997} y1={-1.485902540000005} x2={-3.3274000000000115} y2={-1.485902540000005} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-2.7686000000000064} pcbY={-0.33019999999999783} anchorAlignment="center" text="D3" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={0.5079999999999956} pcbY={3.048000000000002} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="D3" />
          <courtyardoutline outline={[{"x":-3.0499989800000122,"y":1.7499990399999916},{"x":-3.0499989800000122,"y":-1.7500015800000028},{"x":3.050001519999995,"y":-1.7500015800000028},{"x":3.050001519999995,"y":1.7499990399999916}]} layer="top" />
                </footprint>} />
          <chip name="D2" pcbX={-10.5909999} pcbY={-4.540999300000003} pcbRotation="90deg" layer="top" symbolName="diode_right" schX={-1.0966882816118577} schY={6.031785548865216} schDisplayValue="100V" pinLabels={{"pin2":["2","pin2","A"],"pin1":["1","pin1","K"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="1.10000288mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.5999988mm" height="0.5999988mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-1.0999978mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.5999988mm" height="0.5999988mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenrect pcbX={-1.803379679999992} pcbY={0} width={0.508} height={1.7271999999999998} layer="top" strokeWidth={0.508} filled={true} />
          <silkscreenline x1={0.10000234000000319} y1={0.7747000000000028} x2={1.5250007600000046} y2={0.7747000000000028} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.8033999999999963} y1={-0.7746999999999957} x2={0.10000234000000319} y2={-0.7746999999999957} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.10000234000000319} y1={-0.7746999999999957} x2={1.5250007600000046} y2={-0.7746999999999957} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.8033999999999963} y1={0.7747000000000028} x2={0.10000234000000319} y2={0.7747000000000028} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.3999997399999913} pcbY={-0.2750007200000013} anchorAlignment="center" text="D2" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
          <silkscreentext pcbX={0.21539962000000656} pcbY={1.8550001000000051} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="D2" />
                </footprint>} />
          <chip name="D1" pcbX={13.588999999999992} pcbY={5.715000000000003} pcbRotation="90deg" layer="top" schX={5.483441408059289} schY={6.580129689671146} symbol={<symbol geometryHash="9690702f2ba7" />} schDisplayValue="40V" pinLabels={{"pin2":["2","pin2","A"],"pin1":["1","pin1","A"],"pin3":["3","pin3","K"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="1.04000046mm" pcbY="1.82999888mm" layer="top" solderMaskMargin="0.0499999mm" width="1.39999974mm" height="1.27mm" shape="rect" />
          <smtpad portHints={["1"]} pcbX="-1.04000046mm" pcbY="1.82999888mm" layer="top" solderMaskMargin="0.0499999mm" width="1.39999974mm" height="1.27mm" shape="rect" />
          <smtpad portHints={["3"]} pcbX="0.00000254mm" pcbY="-1.88250068mm" layer="top" solderMaskMargin="0.0499999mm" width="4.72000072mm" height="4.80000056mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenpath route={[{"x":-2.5499999799999955,"y":1.4499996400000015},{"x":-2.5304210903248503,"y":1.4512829082273697},{"x":-2.511177200880333,"y":1.455110755834383},{"x":-2.492597579950271,"y":1.4614176872871667},{"x":-2.475000129999998,"y":1.4700957892399487},{"x":-2.4586859482771217,"y":1.480996576962312},{"x":-2.4439341749540446,"y":1.4939335349540386},{"x":-2.430997216962318,"y":1.5086853082771228},{"x":-2.4200964292399547,"y":1.524999489999999},{"x":-2.4114183272871657,"y":1.5425969399502577},{"x":-2.405111395834389,"y":1.5611765608803267},{"x":-2.401283548227383,"y":1.5804204503248371},{"x":-2.4000002800000004,"y":1.5999993399999966},{"x":-2.401283548227383,"y":1.6195782296751418},{"x":-2.405111395834389,"y":1.6388221191196664},{"x":-2.4114183272871657,"y":1.6574017400497212},{"x":-2.4200964292399547,"y":1.674999189999994},{"x":-2.430997216962318,"y":1.6913133717228703},{"x":-2.4439341749540446,"y":1.7060651450459403},{"x":-2.4586859482771217,"y":1.7190021030376812},{"x":-2.475000129999998,"y":1.7299028907600302},{"x":-2.492597579950271,"y":1.7385809927128264},{"x":-2.511177200880333,"y":1.7448879241656101},{"x":-2.5304210903248503,"y":1.7487157717726092},{"x":-2.5499999799999955,"y":1.7499990399999916},{"x":-2.569578869675148,"y":1.7487157717726092},{"x":-2.5888227591196653,"y":1.7448879241656101},{"x":-2.6074023800497272,"y":1.7385809927128264},{"x":-2.62499983,"y":1.7299028907600302},{"x":-2.6413140117228764,"y":1.7190021030376812},{"x":-2.6560657850459535,"y":1.7060651450459403},{"x":-2.66900274303768,"y":1.6913133717228703},{"x":-2.6799035307600434,"y":1.674999189999994},{"x":-2.6885816327128325,"y":1.6574017400497212},{"x":-2.694888564165609,"y":1.6388221191196664},{"x":-2.6987164117726152,"y":1.6195782296751418},{"x":-2.6999996799999977,"y":1.5999993399999966},{"x":-2.6987164117726152,"y":1.5804204503248371},{"x":-2.694888564165609,"y":1.5611765608803267},{"x":-2.6885816327128325,"y":1.5425969399502577},{"x":-2.6799035307600434,"y":1.524999489999999},{"x":-2.66900274303768,"y":1.5086853082771228},{"x":-2.6560657850459535,"y":1.4939335349540386},{"x":-2.6413140117228764,"y":1.480996576962312},{"x":-2.62499983,"y":1.4700957892399487},{"x":-2.6074023800497272,"y":1.4614176872871667},{"x":-2.5888227591196653,"y":1.455110755834383},{"x":-2.569578869675148,"y":1.4512829082273697},{"x":-2.5499999799999955,"y":1.4499996400000015}]} strokeWidth={0.29999939999999997} />
          <fabricationnotetext pcbX={-1.7999989400000018} pcbY={-0.4999990000000025} anchorAlignment="center" text="D1" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={2.9209999999999923} pcbY={-1.0160000000000053} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D1" />
                </footprint>} />
          <chip name="C17" pcbX={-20.22800374} pcbY={-7.6708} pcbRotation="0deg" layer="top" symbolName="capacitor_up" schX={-4.386753126447431} schY={4.295362436313109} schDisplayValue="1uF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.71120254mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.762mm" height="0.762mm" shape="rect" />
          <smtpad portHints={["1"]} pcbX="-0.71119746mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.762mm" height="0.762mm" shape="rect" />
          <silkscreenline x1={-1.3207999999999984} y1={-0.6096000000000004} x2={-1.3207999999999984} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.3207999999999984} y1={-0.6096000000000004} x2={-0.4318000000000026} y2={-0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.3207999999999984} y1={0.6096000000000004} x2={-0.4318000000000026} y2={0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.3207999999999984} y1={0} x2={-1.3207999999999984} y2={0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.3207999999999984} y1={0} x2={1.3207999999999984} y2={0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.4317999999999955} y1={0.6096000000000004} x2={1.3207999999999984} y2={0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.4317999999999955} y1={-0.6096000000000004} x2={1.3207999999999984} y2={-0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.3207999999999984} y1={-0.6096000000000004} x2={1.3207999999999984} y2={0} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.1637899000000047} pcbY={-0.31739585999999775} anchorAlignment="center" text="C17" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
          <silkscreentext pcbX={2.517632759999991} pcbY={2.6621994000000058} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C17" />
                </footprint>} />
          <chip name="C21" pcbX={-16.67200374} pcbY={-13.716000000000001} pcbRotation="0deg" layer="top" symbolName="capacitor_down" schX={-11.698008337193148} schY={0.09139069013432177} schDisplayValue="220pF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000052} y1={0.3250006200000044} x2={0.07112000000000052} y2={0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000052} y1={-0.3250006199999973} x2={0.07112000000000052} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="C21" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.8130037399999992} pcbY={-0.634999999999998} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C21" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000026},{"x":1.2000001400000002,"y":-0.5250002200000026},{"x":1.2000001400000002,"y":0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="C20" pcbX={13.588999999999992} pcbY={-16.383000000000003} pcbRotation="90deg" layer="top" symbolName="capacitor_down" schX={8.956287633163502} schY={0.2741720704029653} schDisplayValue="4.7uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07111999999999341} y1={-0.3250006200000115} x2={0.07112000000000052} y2={-0.3250006200000115} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07111999999999341} y1={0.3250006199999973} x2={0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="C20" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-1.2389053199999935} pcbY={-1.9124650600000024} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C20" />
          <courtyardoutline outline={[{"x":1.2000001400000002,"y":-0.5250002200000097},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":-1.200000139999993,"y":0.5250002199999955},{"x":-1.200000139999993,"y":-0.5250002200000097}]} layer="top" />
                </footprint>} />
          <chip name="C22" pcbX={-20.22800374} pcbY={-15.656001199999999} pcbRotation="270deg" layer="top" symbolName="capacitor_down" schX={-8.956287633163504} schY={0.09139069013432177} schDisplayValue="0.01uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006200000044} x2={-0.07112000000000052} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006199999973} x2={-0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000013} anchorAlignment="center" text="C22" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={4.028998800000004} pcbY={0.5430037399999961} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C22" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="C1" pcbX={13.716000000000001} pcbY={9.778999999999996} pcbRotation="90deg" layer="top" symbolName="capacitor_left" schX={5.75761347846225} schY={7.859599351551648} schDisplayValue="680pF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.71119746mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.762mm" height="0.762mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.71120254mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.762mm" height="0.762mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={1.3208000000000055} y1={0} x2={1.3208000000000055} y2={-0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.43180000000000973} y1={-0.6096000000000004} x2={1.3208000000000055} y2={-0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.43180000000000973} y1={0.6096000000000004} x2={1.3208000000000055} y2={0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.3208000000000055} y1={0.6096000000000004} x2={1.3208000000000055} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.3207999999999913} y1={0.6096000000000004} x2={-1.3207999999999913} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.3207999999999913} y1={0.6096000000000004} x2={-0.4317999999999955} y2={0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.3207999999999913} y1={-0.6096000000000004} x2={-0.4317999999999955} y2={-0.6096000000000004} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.3207999999999913} y1={0} x2={-1.3207999999999913} y2={-0.6096000000000004} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.1637898999999976} pcbY={-0.31739585999999065} anchorAlignment="center" text="C1" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
          <silkscreentext pcbX={2.0319999999999965} pcbY={-0.6349999999999909} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C1" />
                </footprint>} />
          <chip name="C23" pcbX={7.746999999999993} pcbY={-14.971999519999997} pcbRotation="90deg" layer="top" symbolName="capacitor_right" schX={9.778803844372394} schY={-1.8278138026864283} schDisplayValue="0.01uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000762} y1={-0.3250006200000115} x2={0.07112000000000052} y2={-0.3250006200000115} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000762} y1={0.3250006199999973} x2={0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="C23" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={2.525999519999999} pcbY={-2.0320000000000107} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C23" />
          <courtyardoutline outline={[{"x":1.2000001400000002,"y":-0.5250002200000097},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":-0.5250002200000097}]} layer="top" />
                </footprint>} />
          <chip name="C19" pcbX={-21.871302460000003} pcbY={-5.588000000000001} pcbRotation="270deg" layer="top" symbolName="capacitor_down" schX={-0.9139069013432142} schY={1.370860352014823} schDisplayValue="470pF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006199999973} x2={-0.07112000000000762} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006200000044} x2={-0.07112000000000762} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007199999942} anchorAlignment="center" text="C19" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-1.524000000000001} pcbY={0.535302460000004} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C19" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":0.5250002200000026},{"x":1.200000139999993,"y":0.5250002200000026},{"x":1.200000139999993,"y":-0.5250002200000026},{"x":-1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="C26" pcbX={-25.308003739999997} pcbY={-10.921999999999997} pcbRotation="0deg" layer="top" symbolName="capacitor_down" schX={-6.031785548865216} schY={-2.8331113941639643} schDisplayValue="0.22uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000762} y1={-0.3250006200000044} x2={0.07111999999999341} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000762} y1={0.3250006199999973} x2={0.07111999999999341} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000013} anchorAlignment="center" text="C26" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-4.282996260000004} pcbY={-0.6350000000000051} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C26" />
          <courtyardoutline outline={[{"x":-1.2000001400000073,"y":-0.5250002200000026},{"x":-1.2000001400000073,"y":0.5250002199999955},{"x":1.200000139999993,"y":0.5250002199999955},{"x":1.200000139999993,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="C24" pcbX={6.222999999999992} pcbY={-14.971999519999997} pcbRotation="90deg" layer="top" symbolName="capacitor_right" schX={9.047678323297824} schY={-2.558939323761} schDisplayValue="0.22uF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000762} y1={0.3250006199999973} x2={0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000762} y1={-0.3250006200000115} x2={0.07112000000000052} y2={-0.3250006200000115} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="C24" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-0.44931076000000303} pcbY={1.1116817999999853} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C24" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000097},{"x":1.2000001400000002,"y":-0.5250002200000097},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="C18" pcbX={-16.660370540000002} pcbY={-7.619999999999997} pcbRotation="0deg" layer="top" symbolName="capacitor_down" schX={-8.590724872626218} schY={3.7470182955071802} schDisplayValue="0.1uF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000052} y1={0.3250006200000044} x2={0.07112000000000052} y2={0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000052} y1={-0.3250006200000044} x2={0.07112000000000052} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000013} anchorAlignment="center" text="C18" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.4714601000000016} pcbY={-0.4750003200000066} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C18" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000026},{"x":1.2000001400000002,"y":-0.5250002200000026},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="C12" pcbX={18.160999999999994} pcbY={0.12700000000000244} pcbRotation="270deg" layer="top" symbolName="capacitor_down" schX={10.418538675312647} schY={5.940394858730896} schDisplayValue="1000pF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000762} y1={-0.3250006199999973} x2={-0.07112000000000052} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000762} y1={0.3250006200000115} x2={-0.07112000000000052} y2={0.3250006200000115} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007199999942} anchorAlignment="center" text="C12" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={4.064} pcbY={0.7620000000000005} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C12" />
          <courtyardoutline outline={[{"x":-1.200000139999993,"y":-0.5250002199999955},{"x":-1.200000139999993,"y":0.5250002200000097},{"x":1.2000001400000002,"y":0.5250002200000097},{"x":1.2000001400000002,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="C11" pcbX={31.877000000000002} pcbY={-3.8100000000000023} pcbRotation="270deg" layer="top" symbolName="capacitor_down" schX={9.504631773969432} schY={5.940394858730896} schDisplayValue="0.1uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006200000115} x2={-0.07112000000000762} y2={-0.3250006200000115} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006199999973} x2={-0.07112000000000762} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000084} anchorAlignment="center" text="C11" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={3.683} pcbY={0.5079999999999956} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C11" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000097},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":1.200000139999993,"y":0.5250002199999955},{"x":1.200000139999993,"y":-0.5250002200000097}]} layer="top" />
                </footprint>} />
          <chip name="C10" pcbX={15.621000000000002} pcbY={0.12700000000000244} pcbRotation="270deg" layer="top" symbolName="capacitor_down" schX={8.773506252894858} schY={5.940394858730896} schDisplayValue="10uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-1.44999964mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.29999994mm" height="2.69999968mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="1.44999964mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.29999994mm" height="2.69999968mm" shape="rect" />
          <silkscreenline x1={-2.3164799999999914} y1={-1.5677794399999954} x2={-2.3164799999999914} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.5111018799999982} y1={1.5677794399999954} x2={-2.3164799999999914} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.5111018799999982} y1={-1.5677794399999954} x2={-2.3164799999999914} y2={-1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.3164799999999985} y1={-1.5677794399999954} x2={1.5111018800000053} y2={-1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.3164799999999985} y1={1.5677794399999954} x2={1.5111018800000053} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.3164799999999985} y1={-1.5677794399999954} x2={2.3164799999999985} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.3999997399999984} pcbY={-0.3750005200000146} anchorAlignment="center" text="C10" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
          <silkscreentext pcbX={5.207000000000001} pcbY={0.7620000000000005} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C10" />
          <courtyardoutline outline={[{"x":-2.3500003799999902,"y":-1.5999993400000108},{"x":-2.3500003799999902,"y":1.5999993399999966},{"x":2.3500003799999973,"y":1.5999993399999966},{"x":2.3500003799999973,"y":-1.5999993400000108}]} layer="top" />
                </footprint>} />
          <chip name="C9" pcbX={12.06499999999999} pcbY={0.12700000000000244} pcbRotation="270deg" layer="top" symbolName="capacitor_down" schX={8.042380731820288} schY={5.940394858730896} schDisplayValue="10uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-1.44999964mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.29999994mm" height="2.69999968mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="1.44999964mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.29999994mm" height="2.69999968mm" shape="rect" />
          <silkscreenline x1={-2.3164799999999914} y1={-1.5677794399999954} x2={-2.3164799999999914} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.5111018799999982} y1={1.5677794399999954} x2={-2.3164799999999914} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.5111018799999982} y1={-1.5677794399999954} x2={-2.3164799999999914} y2={-1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.3164799999999985} y1={-1.5677794399999954} x2={1.5111018800000053} y2={-1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.3164799999999985} y1={1.5677794399999954} x2={1.5111018800000053} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={2.3164799999999985} y1={-1.5677794399999954} x2={2.3164799999999985} y2={1.5677794399999954} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.3999997399999984} pcbY={-0.3750005200000004} anchorAlignment="center" text="C9" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
          <silkscreentext pcbX={4.318000000000005} pcbY={0.2540000000000049} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C9" />
          <courtyardoutline outline={[{"x":-2.3500003799999902,"y":-1.5999993399999966},{"x":-2.3500003799999902,"y":1.5999993400000108},{"x":2.3500003799999973,"y":1.5999993400000108},{"x":2.3500003799999973,"y":-1.5999993399999966}]} layer="top" />
                </footprint>} />
          <chip name="C8" pcbX={28.067} pcbY={6.984999999999999} pcbRotation="90deg" layer="top" symbolName="capacitor_polarized_down" schX={7.311255210745717} schY={6.004368341824922} schDisplayValue="270uF" pinLabels={{"pin2":["2","pin2","-"],"pin1":["1","pin1","+"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="3.99999962mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.99999962mm" height="2.00000108mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-3.99999962mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.99999962mm" height="2.00000108mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={-3.5130003399999907} y1={-5.24999966} x2={5.24999966} y2={-5.24999966} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-3.5130003399999907} y1={5.24999966} x2={5.24999966} y2={5.24999966} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.249999659999993} y1={-1.4499996400000015} x2={-5.249999659999993} y2={-3.5130003399999907} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.249999659999993} y1={-3.5130003399999907} x2={-3.5130003399999907} y2={-5.24999966} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.24999966} y1={-1.4499996400000015} x2={5.24999966} y2={-5.24999966} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-3.5130003399999907} y1={5.24999966} x2={-5.249999659999993} y2={3.513000340000005} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.249999659999993} y1={3.513000340000005} x2={-5.249999659999993} y2={1.4499996400000015} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.24999966} y1={5.24999966} x2={5.24999966} y2={1.4499996400000015} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.5999993399999966} pcbY={-0.9000007399999959} anchorAlignment="center" text="C8" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={5.715000000000003} pcbY={-3.048000000000002} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C8" />
                </footprint>} />
          <chip name="C7" pcbX={25.273000000000003} pcbY={-5.4609999999999985} pcbRotation="270deg" layer="top" symbolName="capacitor_polarized_down" schX={6.580129689671143} schY={6.004368341824922} schDisplayValue="270uF" pinLabels={{"pin2":["2","pin2","-"],"pin1":["1","pin1","+"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="3.99999962mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.99999962mm" height="2.00000108mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-3.99999962mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.99999962mm" height="2.00000108mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={5.24999966} y1={-5.24999966} x2={-3.513000339999998} y2={-5.24999966} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.24999966} y1={5.249999659999986} x2={-3.513000339999998} y2={5.249999659999986} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.24999966} y1={-3.513000340000005} x2={-5.24999966} y2={-1.4499996400000157} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-3.513000339999998} y1={-5.24999966} x2={-5.24999966} y2={-3.513000340000005} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.24999966} y1={-5.24999966} x2={5.24999966} y2={-1.4499996400000157} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.24999966} y1={3.5130003399999907} x2={-3.513000339999998} y2={5.249999659999986} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-5.24999966} y1={1.4499996400000015} x2={-5.24999966} y2={3.5130003399999907} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={5.24999966} y1={1.4499996400000015} x2={5.24999966} y2={5.249999659999986} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.5999993399999966} pcbY={-0.9000007400000101} anchorAlignment="center" text="C7" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={-5.588000000000001} pcbY={-4.826000000000008} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C7" />
                </footprint>} />
          <chip name="C4" pcbX={-14.350999999999999} pcbY={10.033000000000001} pcbRotation="180deg" layer="top" symbolName="capacitor_down" schX={-8.956287633163504} schY={6.305957619268181} schDisplayValue="1uF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="1.01600254mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.27mm" height="1.6002mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-1.01599746mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.27mm" height="1.6002mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={1.8796000000000035} y1={-1.0159999999999911} x2={1.0160000000000053} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={0} x2={1.8796000000000035} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={1.0160000000000053} x2={1.8796000000000035} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={1.0160000000000053} x2={1.0160000000000053} y2={1.0160000000000053} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.0159999999999982} y1={1.0160000000000053} x2={-1.8795999999999964} y2={1.0160000000000053} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.8795999999999964} y1={1.0160000000000053} x2={-1.8795999999999964} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.8795999999999964} y1={0} x2={-1.8795999999999964} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.0159999999999982} y1={-1.0159999999999911} x2={-1.8795999999999964} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.6255999999999986} pcbY={-0.4317999999999955} anchorAlignment="center" text="C4" font="tscircuit2024" fontSize={0.889} color="#ec4899" />
          <silkscreentext pcbX={4.318000000000005} pcbY={0.3810000000000002} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C4" />
                </footprint>} />
          <chip name="C3" pcbX={-14.350999999999999} pcbY={12.074804400000005} pcbRotation="180deg" layer="top" symbolName="capacitor_down" schX={-10.05297591477536} schY={6.305957619268181} schDisplayValue="0.1uF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="1.01600254mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.27mm" height="1.6002mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-1.01599746mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.27mm" height="1.6002mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={1.8796000000000035} y1={-1.0159999999999911} x2={1.0160000000000053} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={0} x2={1.8796000000000035} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={1.0160000000000053} x2={1.8796000000000035} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={1.0160000000000053} x2={1.0160000000000053} y2={1.0160000000000053} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.0159999999999982} y1={1.0160000000000053} x2={-1.8795999999999964} y2={1.0160000000000053} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.8795999999999964} y1={1.0160000000000053} x2={-1.8795999999999964} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.8795999999999964} y1={0} x2={-1.8795999999999964} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.0159999999999982} y1={-1.0159999999999911} x2={-1.8795999999999964} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.6255999999999986} pcbY={-0.4317999999999955} anchorAlignment="center" text="C3" font="tscircuit2024" fontSize={0.889} color="#ec4899" />
          <silkscreentext pcbX={4.318000000000005} pcbY={0.3908044000000075} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C3" />
                </footprint>} />
          <chip name="C2" pcbX={-27.051000000000002} pcbY={7.239000000000004} pcbRotation="270deg" layer="top" symbolName="capacitor_down" schX={-6.031785548865216} schY={6.369931102362205} schDisplayValue="100uF" pinLabels={{"pin2":["2","pin2","-"],"pin1":["1","pin1","+"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="3.99999962mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.99999962mm" height="2.50000008mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-3.99999962mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.99999962mm" height="2.50000008mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-4.046400339999991} y1={-5.24999966} x2={-5.24999966} y2={-4.046400339999998} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-5.24999966} y1={4.249600340000001} x2={-4.249600340000001} y2={5.24999966} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-5.24999966} y1={-4.046400339999998} x2={-5.24999966} y2={-1.600200000000001} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={5.24999966} y1={-5.249999659999997} x2={-4.046400339999991} y2={-5.24999966} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={5.24999966} y1={-5.249999659999997} x2={5.24999966} y2={-1.6001999999999974} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-5.24999966} y1={1.6239235999999977} x2={-5.24999966} y2={4.249600340000001} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={5.24999966} y1={5.24999966} x2={-4.249600340000001} y2={5.24999966} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={5.24999966} y1={1.5965678000000025} x2={5.24999966} y2={5.24999966} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.524000000000001} pcbY={-0.5080000000000027} anchorAlignment="center" text="C2" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={-5.841999999999999} pcbY={-4.317999999999998} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C2" />
                </footprint>} />
          <chip name="FID1" pcbX={38.22692379999999} pcbY={-16.636923799999998} pcbRotation="180deg" layer="top" noSchematicRepresentation pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.499999mm" radius="0.50000027mm" shape="circle" />
                </footprint>} />
          <chip name="FID2" pcbX={38.22692379999999} pcbY={16.63707620000001} pcbRotation="180deg" layer="top" noSchematicRepresentation pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.499999mm" radius="0.50000027mm" shape="circle" />
                </footprint>} />
          <chip name="FID3" pcbX={-37.97307112} pcbY={16.63707620000001} pcbRotation="180deg" layer="top" noSchematicRepresentation pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.499999mm" radius="0.50000027mm" shape="circle" />
                </footprint>} />
          <chip name="ZZ2" pcbX={-37.846000000000004} pcbY={38.20449052000001} pcbRotation="0deg" layer="top" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint />} />
          <chip name="ZZ3" pcbX={-37.846000000000004} pcbY={35.955145259999995} pcbRotation="0deg" layer="top" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint />} />
          <chip name="ZZ4" pcbX={-37.846000000000004} pcbY={33.705799999999996} pcbRotation="0deg" layer="top" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint />} />
          <chip name="C28" pcbX={0.3810000000000002} pcbY={-7.366} pcbRotation="180deg" layer="top" symbolName="capacitor_left" schX={1.553641732283463} schY={-4.935097267253358} schDisplayValue="1000pF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-2.00000108mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.40000082mm" height="1.59999934mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="1.99999854mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.40000082mm" height="1.59999934mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={0.7999984000000069} y1={-1.6999991399999956} x2={-0.8000009399999897} y2={-1.6999991399999956} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.7999984000000069} y1={1.6999991400000027} x2={-0.8000009399999897} y2={1.6999991400000027} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.875000060000005} pcbY={-0.4999989999999954} anchorAlignment="center" text="C28" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={1.2700000000000031} pcbY={3.3019999999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C28" />
                </footprint>} />
          <chip name="C15" pcbX={-12.2858022} pcbY={-5.688944680000006} pcbRotation="270deg" layer="top" symbolName="capacitor_up" schX={-3.290064844835573} schY={5.209269337656323} schDisplayValue="4.7uF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07111999999999341} y1={0.3250006199999973} x2={-0.07112000000000762} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07111999999999341} y1={-0.3250006200000044} x2={-0.07112000000000762} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000013} anchorAlignment="center" text="C15" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-0.8750020600000141} pcbY={-1.5571978000000044} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C15" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":1.200000139999993,"y":0.5250002199999955},{"x":1.200000139999993,"y":-0.5250002200000026},{"x":-1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="C6" pcbX={-14.218170700000002} pcbY={14.290700400000006} pcbRotation="180deg" layer="top" symbolName="capacitor_down" schX={-6.945692450208432} schY={6.305957619268181} schDisplayValue="4.7uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-1.69999914mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.59999934mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="1.69999914mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.59999934mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={0.900000740000003} y1={1.000000540000002} x2={-0.900000740000003} y2={1.000000540000002} strokeWidth={0.16999966} />
          <silkscreenline x1={0.900000740000003} y1={-1.0000005399999878} x2={-0.900000740000003} y2={-1.0000005399999878} strokeWidth={0.16999966} />
          <fabricationnotetext pcbX={-1.4999995399999975} pcbY={-0.3999991999999821} anchorAlignment="center" text="C6" font="tscircuit2024" fontSize={0.8128} color="#ec4899" />
          <silkscreentext pcbX={4.450829300000002} pcbY={0.4477004000000022} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C6" />
                </footprint>} />
          <chip name="C5" pcbX={-14.350999999999999} pcbY={8.001000000000005} pcbRotation="180deg" layer="top" symbolName="capacitor_down" schX={-8.042380731820288} schY={6.305957619268181} schDisplayValue="1uF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="1.01600254mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.27mm" height="1.6002mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-1.01599746mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.27mm" height="1.6002mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={1.8796000000000035} y1={-1.0159999999999911} x2={1.0160000000000053} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={0} x2={1.8796000000000035} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={1.0160000000000053} x2={1.8796000000000035} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.8796000000000035} y1={1.0160000000000053} x2={1.0160000000000053} y2={1.0160000000000053} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.0159999999999982} y1={1.0160000000000053} x2={-1.8795999999999964} y2={1.0160000000000053} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.8795999999999964} y1={1.0160000000000053} x2={-1.8795999999999964} y2={0} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.8795999999999964} y1={0} x2={-1.8795999999999964} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.0159999999999982} y1={-1.0159999999999911} x2={-1.8795999999999964} y2={-1.0159999999999911} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.6255999999999986} pcbY={-0.4317999999999955} anchorAlignment="center" text="C5" font="tscircuit2024" fontSize={0.889} color="#ec4899" />
          <silkscreentext pcbX={4.445} pcbY={0.6350000000000051} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C5" />
                </footprint>} />
          <chip name="R2" pcbX={-9.016979679999999} pcbY={-7.016226760000002} pcbRotation="270deg" layer="top" symbolName="boxresistor_left" schX={-2.1933765632237154} schY={6.031785548865216} schDisplayValue="100" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07111999999999341} y1={-0.3250006200000044} x2={-0.07112000000000052} y2={-0.3250006200000044} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07111999999999341} y1={0.3250006199999973} x2={-0.07112000000000052} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="R2" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={3.389774779999996} pcbY={1.0159796799999938} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R2" />
          <courtyardoutline outline={[{"x":-1.2000001400000073,"y":-0.5250002200000026},{"x":-1.2000001400000073,"y":0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R24" pcbX={-23.27600374} pcbY={-15.747999999999998} pcbRotation="90deg" layer="top" symbolName="boxresistor_up" schX={-8.956287633163504} schY={-6.031785548865216} schDisplayValue="9.76k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000052} y1={-0.3250006199999973} x2={0.07111999999999341} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000052} y1={0.3250006199999973} x2={0.07111999999999341} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007199999942} anchorAlignment="center" text="R24" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-3.9370000000000047} pcbY={-0.5430037399999961} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R24" />
          <courtyardoutline outline={[{"x":1.200000139999993,"y":-0.5250002199999955},{"x":1.200000139999993,"y":0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002200000026},{"x":-1.2000001400000002,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="R23" pcbX={-21.75200374} pcbY={-14.223999999999997} pcbRotation="270deg" layer="top" symbolName="boxresistor_up" schX={-8.956287633163504} schY={-4.752315886984715} schDisplayValue="30.0k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.80000094mm" height="0.85000084mm" shape="rect" />
          <silkscreenline x1={0.07112000000000052} y1={-0.3250006199999973} x2={-0.07111999999999341} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.07112000000000052} y1={0.3250006199999973} x2={-0.07111999999999341} y2={0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="R23" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={5.461000000000006} pcbY={0.5430037399999961} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="R23" />
          <courtyardoutline outline={[{"x":-1.200000139999993,"y":-0.5250002200000026},{"x":-1.200000139999993,"y":0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="R3" pcbX={-16.67200374} pcbY={-6.0959999999999965} pcbRotation="0deg" layer="top" symbolName="boxresistor_up" schX={-4.386753126447431} schY={5.483441408059289} schDisplayValue="0" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000052} y1={-0.3250006200000115} x2={0.07112000000000052} y2={-0.3250006200000115} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000052} y1={0.3250006200000044} x2={0.07112000000000052} y2={0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.050000439999998} pcbY={-0.2750007200000013} anchorAlignment="center" text="R3" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={1.9050000000000011} pcbY={-0.3810000000000002} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R3" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002200000026},{"x":-1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":0.5250002199999955},{"x":1.2000001400000002,"y":-0.5250002200000026}]} layer="top" />
                </footprint>} />
          <chip name="H1" pcbX={37.464999999999996} pcbY={15.875} pcbRotation="0deg" layer="bottom" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint>
                  <silkscreenpath route={[{"x":3.967607000000001,"y":0},{"x":3.9336635721007553,"y":0.5178766339356287},{"x":3.8324140698652798,"y":1.0268922550820747},{"x":3.665590900348505,"y":1.5183374650357564},{"x":3.4360484542329743,"y":1.9838034999999934},{"x":3.1477142664128763,"y":2.415326107064999},{"x":2.8055218147832193,"y":2.8055218147832193},{"x":2.415326107064999,"y":3.1477142664128763},{"x":1.9838034999999934,"y":3.43604845423296},{"x":1.5183374650357564,"y":3.665590900348505},{"x":1.0268922550820747,"y":3.8324140698652798},{"x":0.5178766339356287,"y":3.9336635721007553},{"x":0,"y":3.967607000000001},{"x":-0.5178766339356287,"y":3.9336635721007696},{"x":-1.0268922550820747,"y":3.8324140698652798},{"x":-1.5183374650357564,"y":3.665590900348505},{"x":-1.9838034999999934,"y":3.43604845423296},{"x":-2.415326107064999,"y":3.1477142664128763},{"x":-2.8055218147832193,"y":2.8055218147832193},{"x":-3.1477142664128905,"y":2.415326107064999},{"x":-3.4360484542329743,"y":1.9838034999999934},{"x":-3.665590900348505,"y":1.5183374650357564},{"x":-3.832414069865294,"y":1.0268922550820747},{"x":-3.9336635721007553,"y":0.5178766339356287},{"x":-3.967607000000001,"y":0},{"x":-3.9336635721007696,"y":-0.5178766339356287},{"x":-3.832414069865294,"y":-1.0268922550820747},{"x":-3.665590900348505,"y":-1.5183374650357564},{"x":-3.4360484542329743,"y":-1.9838034999999934},{"x":-3.1477142664128763,"y":-2.415326107064999},{"x":-2.8055218147832193,"y":-2.8055218147832193},{"x":-2.415326107064999,"y":-3.1477142664128763},{"x":-1.9838034999999934,"y":-3.4360484542329743},{"x":-1.5183374650357564,"y":-3.665590900348505},{"x":-1.0268922550820747,"y":-3.832414069865294},{"x":-0.5178766339356287,"y":-3.9336635721007553},{"x":0,"y":-3.967607000000001},{"x":0.5178766339356287,"y":-3.9336635721007553},{"x":1.0268922550820747,"y":-3.832414069865294},{"x":1.5183374650357564,"y":-3.665590900348505},{"x":1.9838034999999934,"y":-3.4360484542329743},{"x":2.415326107064999,"y":-3.1477142664128763},{"x":2.805521814783205,"y":-2.8055218147832193},{"x":3.1477142664128763,"y":-2.415326107064999},{"x":3.4360484542329743,"y":-1.9838034999999934},{"x":3.665590900348505,"y":-1.5183374650357564},{"x":3.8324140698652798,"y":-1.0268922550820747},{"x":3.9336635721007553,"y":-0.5178766339356287},{"x":3.967607000000001,"y":0}]} strokeWidth={0.17779999999999999} layer="bottom" />
                </footprint>} />
          <chip name="H2" pcbX={34.92499999999999} pcbY={-15.875} pcbRotation="0deg" layer="bottom" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint>
                  <silkscreenpath route={[{"x":3.967607000000001,"y":0},{"x":3.9336635721007553,"y":0.5178766339356216},{"x":3.832414069865294,"y":1.0268922550820818},{"x":3.665590900348519,"y":1.5183374650357564},{"x":3.4360484542329743,"y":1.9838035000000005},{"x":3.1477142664128905,"y":2.415326107064999},{"x":2.8055218147832193,"y":2.805521814783212},{"x":2.415326107065013,"y":3.1477142664128905},{"x":1.9838035000000076,"y":3.4360484542329672},{"x":1.5183374650357564,"y":3.665590900348505},{"x":1.026892255082089,"y":3.832414069865294},{"x":0.5178766339356287,"y":3.9336635721007625},{"x":0,"y":3.967607000000001},{"x":-0.5178766339356144,"y":3.9336635721007625},{"x":-1.0268922550820747,"y":3.832414069865294},{"x":-1.5183374650357422,"y":3.665590900348505},{"x":-1.9838034999999934,"y":3.4360484542329672},{"x":-2.415326107064999,"y":3.1477142664128905},{"x":-2.8055218147832193,"y":2.805521814783212},{"x":-3.1477142664128905,"y":2.415326107064999},{"x":-3.43604845423296,"y":1.9838035000000005},{"x":-3.665590900348505,"y":1.5183374650357635},{"x":-3.8324140698652798,"y":1.0268922550820818},{"x":-3.9336635721007553,"y":0.5178766339356216},{"x":-3.967606999999987,"y":0},{"x":-3.9336635721007553,"y":-0.5178766339356216},{"x":-3.8324140698652798,"y":-1.0268922550820747},{"x":-3.665590900348505,"y":-1.5183374650357564},{"x":-3.43604845423296,"y":-1.9838035000000005},{"x":-3.1477142664128763,"y":-2.415326107064999},{"x":-2.8055218147832193,"y":-2.805521814783212},{"x":-2.415326107064999,"y":-3.1477142664128834},{"x":-1.9838034999999934,"y":-3.43604845423296},{"x":-1.5183374650357422,"y":-3.665590900348505},{"x":-1.0268922550820747,"y":-3.832414069865294},{"x":-0.5178766339356144,"y":-3.9336635721007625},{"x":0,"y":-3.967607000000001},{"x":0.5178766339356287,"y":-3.9336635721007625},{"x":1.026892255082089,"y":-3.832414069865294},{"x":1.5183374650357564,"y":-3.665590900348505},{"x":1.9838035000000076,"y":-3.4360484542329672},{"x":2.415326107065013,"y":-3.1477142664128834},{"x":2.8055218147832193,"y":-2.805521814783212},{"x":3.1477142664128905,"y":-2.415326107065006},{"x":3.4360484542329743,"y":-1.9838035000000005},{"x":3.665590900348519,"y":-1.5183374650357564},{"x":3.832414069865294,"y":-1.0268922550820818},{"x":3.9336635721007553,"y":-0.5178766339356216},{"x":3.967607000000001,"y":0}]} strokeWidth={0.17779999999999999} layer="bottom" />
                </footprint>} />
          <chip name="H3" pcbX={-37.465} pcbY={15.875} pcbRotation="0deg" layer="bottom" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint>
                  <silkscreenpath route={[{"x":3.9676069999999974,"y":0},{"x":3.933663572100759,"y":0.5178766339356287},{"x":3.8324140698652904,"y":1.0268922550820747},{"x":3.665590900348505,"y":1.5183374650357564},{"x":3.4360484542329672,"y":1.9838034999999934},{"x":3.147714266412887,"y":2.415326107064999},{"x":2.805521814783212,"y":2.8055218147832193},{"x":2.4153261070650025,"y":3.1477142664128763},{"x":1.983803499999997,"y":3.43604845423296},{"x":1.5183374650357564,"y":3.665590900348505},{"x":1.0268922550820747,"y":3.8324140698652798},{"x":0.5178766339356216,"y":3.9336635721007553},{"x":0,"y":3.967607000000001},{"x":-0.5178766339356251,"y":3.9336635721007696},{"x":-1.0268922550820818,"y":3.8324140698652798},{"x":-1.51833746503576,"y":3.665590900348505},{"x":-1.9838035000000005,"y":3.43604845423296},{"x":-2.415326107065006,"y":3.1477142664128763},{"x":-2.8055218147832157,"y":2.8055218147832193},{"x":-3.147714266412887,"y":2.415326107064999},{"x":-3.4360484542329672,"y":1.9838034999999934},{"x":-3.665590900348512,"y":1.5183374650357564},{"x":-3.832414069865294,"y":1.0268922550820747},{"x":-3.9336635721007625,"y":0.5178766339356287},{"x":-3.967607000000001,"y":0},{"x":-3.9336635721007625,"y":-0.5178766339356287},{"x":-3.832414069865294,"y":-1.0268922550820747},{"x":-3.665590900348512,"y":-1.5183374650357564},{"x":-3.4360484542329672,"y":-1.9838034999999934},{"x":-3.147714266412887,"y":-2.415326107064999},{"x":-2.8055218147832157,"y":-2.8055218147832193},{"x":-2.415326107065006,"y":-3.1477142664128763},{"x":-1.983803500000004,"y":-3.4360484542329743},{"x":-1.51833746503576,"y":-3.665590900348505},{"x":-1.0268922550820783,"y":-3.832414069865294},{"x":-0.5178766339356251,"y":-3.9336635721007553},{"x":0,"y":-3.967607000000001},{"x":0.5178766339356251,"y":-3.9336635721007553},{"x":1.0268922550820783,"y":-3.832414069865294},{"x":1.5183374650357564,"y":-3.665590900348505},{"x":1.983803499999997,"y":-3.4360484542329743},{"x":2.4153261070650025,"y":-3.1477142664128763},{"x":2.805521814783212,"y":-2.8055218147832193},{"x":3.147714266412887,"y":-2.415326107064999},{"x":3.43604845423296,"y":-1.9838034999999934},{"x":3.665590900348505,"y":-1.5183374650357564},{"x":3.8324140698652904,"y":-1.0268922550820747},{"x":3.933663572100759,"y":-0.5178766339356287},{"x":3.9676069999999974,"y":0}]} strokeWidth={0.17779999999999999} layer="bottom" />
                </footprint>} />
          <chip name="H4" pcbX={-37.465} pcbY={-15.875} pcbRotation="0deg" layer="bottom" noSchematicRepresentation obstructsWithinBounds={false} footprint={<footprint>
                  <silkscreenpath route={[{"x":3.9676069999999974,"y":0},{"x":3.933663572100759,"y":0.5178766339356216},{"x":3.8324140698652904,"y":1.0268922550820818},{"x":3.665590900348505,"y":1.5183374650357564},{"x":3.4360484542329672,"y":1.9838035000000005},{"x":3.147714266412887,"y":2.415326107064999},{"x":2.805521814783212,"y":2.805521814783212},{"x":2.4153261070650025,"y":3.1477142664128905},{"x":1.983803499999997,"y":3.4360484542329672},{"x":1.5183374650357564,"y":3.665590900348505},{"x":1.0268922550820747,"y":3.832414069865294},{"x":0.5178766339356216,"y":3.9336635721007625},{"x":0,"y":3.967607000000001},{"x":-0.5178766339356251,"y":3.9336635721007625},{"x":-1.0268922550820818,"y":3.832414069865294},{"x":-1.51833746503576,"y":3.665590900348505},{"x":-1.9838035000000005,"y":3.4360484542329672},{"x":-2.415326107065006,"y":3.1477142664128905},{"x":-2.8055218147832157,"y":2.805521814783212},{"x":-3.147714266412887,"y":2.415326107064999},{"x":-3.4360484542329672,"y":1.9838035000000005},{"x":-3.665590900348512,"y":1.5183374650357635},{"x":-3.832414069865294,"y":1.0268922550820818},{"x":-3.9336635721007625,"y":0.5178766339356216},{"x":-3.967607000000001,"y":0},{"x":-3.9336635721007625,"y":-0.5178766339356216},{"x":-3.832414069865294,"y":-1.0268922550820747},{"x":-3.665590900348512,"y":-1.5183374650357564},{"x":-3.4360484542329672,"y":-1.9838035000000005},{"x":-3.147714266412887,"y":-2.415326107064999},{"x":-2.8055218147832157,"y":-2.805521814783212},{"x":-2.415326107065006,"y":-3.1477142664128834},{"x":-1.983803500000004,"y":-3.43604845423296},{"x":-1.51833746503576,"y":-3.665590900348505},{"x":-1.0268922550820783,"y":-3.832414069865294},{"x":-0.5178766339356251,"y":-3.9336635721007625},{"x":0,"y":-3.967607000000001},{"x":0.5178766339356251,"y":-3.9336635721007625},{"x":1.0268922550820783,"y":-3.832414069865294},{"x":1.5183374650357564,"y":-3.665590900348505},{"x":1.983803499999997,"y":-3.4360484542329672},{"x":2.4153261070650025,"y":-3.1477142664128834},{"x":2.805521814783212,"y":-2.805521814783212},{"x":3.147714266412887,"y":-2.415326107065006},{"x":3.43604845423296,"y":-1.9838035000000005},{"x":3.665590900348505,"y":-1.5183374650357564},{"x":3.8324140698652904,"y":-1.0268922550820818},{"x":3.933663572100759,"y":-0.5178766339356216},{"x":3.9676069999999974,"y":0}]} strokeWidth={0.17779999999999999} layer="bottom" />
                </footprint>} />
          <chip name="R12" pcbX={-19.431000000000004} pcbY={3.429000000000002} pcbRotation="0deg" layer="top" symbolName="boxresistor_up" schX={1.0966882816118577} schY={1.4622510421491448} schDisplayValue="0.02" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.77499972mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="2.74999958mm" height="0.65000124mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-0.77499972mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="2.74999958mm" height="0.65000124mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={0} y1={1.899998740000001} x2={1.1000003400000011} y2={1.899998740000001} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.1000003400000011} y1={1.6999991399999885} x2={1.1000003400000011} y2={1.899998740000001} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.100000339999994} y1={1.6999991399999885} x2={-1.100000339999994} y2={1.899998740000001} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.100000339999994} y1={1.899998740000001} x2={0} y2={1.899998740000001} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.100000339999994} y1={-1.899998740000008} x2={0} y2={-1.899998740000008} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.100000339999994} y1={-1.899998740000008} x2={-1.100000339999994} y2={-1.6999991399999956} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.1000003400000011} y1={-1.899998740000008} x2={1.1000003400000011} y2={-1.6999991399999956} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0} y1={-1.899998740000008} x2={1.1000003400000011} y2={-1.899998740000008} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-0.3750005199999933} pcbY={1.3999997399999984} anchorAlignment="center" text="R12" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
          <silkscreentext pcbX={-1.269999999999996} pcbY={2.539999999999992} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R12" />
                </footprint>} />
          <chip name="D4" pcbX={10.54099999999999} pcbY={-18.415} pcbRotation="0deg" layer="top" schX={10.418538675312647} schY={0.7494036591014375} symbol={<symbol geometryHash="591672b3d38c" />} schDisplayValue="30V" pinLabels={{"pin3":["3","pin3","C"],"pin2":["2","pin2","K"],"pin1":["1","pin1","A"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["3"]} pcbX="0.94999556mm" pcbY="-0.00000254mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0493499013mm" width="0.46999906mm" height="0.5999988mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="-0.95000318mm" pcbY="-0.65000124mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0493499013mm" width="0.46999906mm" height="0.5999988mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-0.95000318mm" pcbY="0.6499987mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0493499013mm" width="0.46999906mm" height="0.5999988mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={0.7749997200000109} y1={-1.2192000000000007} x2={0.7749997200000109} y2={-1.0159999999999982} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.5080000000000098} y1={-1.2192000000000007} x2={0.7749997200000109} y2={-1.2192000000000007} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={-1.1429999999999865} y1={1.2192000000000007} x2={-0.12699999999999534} y2={1.2192000000000007} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.5080000000000098} y1={1.2192000000000007} x2={0.7749997200000109} y2={1.2192000000000007} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.7749997200000109} y1={1.0159999999999982} x2={0.7749997200000109} y2={1.2192000000000007} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-0.24999950000000126} pcbY={0.9000007399999959} anchorAlignment="center" text="D4" font="tscircuit2024" fontSize={0.8000009399999999} color="#ec4899" />
          <silkscreentext pcbX={1.524000000000001} pcbY={-1.7779999999999987} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="D4" />
                </footprint>} />
          <chip name="TP5" pcbX={-13.639800000000001} pcbY={-1.3716000000000008} pcbRotation="0deg" layer="top" symbolName="testpoint_up" schX={1.6450324224177848} schY={3.9115215377489587} schDisplayValue="SW" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" cornerRadius="0.0533999694mm" width="3.43000076mm" height="1.77999898mm" shape="rect" />
          <fabricationnotetext pcbX={-0.8000009400000039} pcbY={-0.19999959999999106} anchorAlignment="bottom_left" text="TP5" font="tscircuit2024" fontSize={0.49999899999999997} color="#ec4899" />
          <silkscreentext pcbX={-5.537199999999999} pcbY={-0.5334000000000003} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP5" />
                </footprint>} />
          <chip name="R7" pcbX={25.145999999999994} pcbY={-19.151600000000002} pcbRotation="0deg" layer="top" symbolName="boxresistor_up" schX={11.880789717461788} schY={3.1072834645669296} schDisplayValue="10.0" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000762} y1={-0.3250006199999973} x2={0.07112000000000762} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000762} y1={0.3250006200000044} x2={0.07112000000000762} y2={0.3250006200000044} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007200000013} anchorAlignment="center" text="R7" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-0.7620000000000005} pcbY={0.9906000000000006} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R7" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002199999955},{"x":-1.2000001400000002,"y":0.5250002200000026},{"x":1.2000001400000002,"y":0.5250002200000026},{"x":1.2000001400000002,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="TP2" pcbX={38.989} pcbY={3.4543999999999997} pcbRotation="90deg" layer="top" symbolName="testpoint_up" schX={11.515226956924504} schY={7.01880500231589} schDisplayValue="VOUT+" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
          <silkscreenpath route={[{"x":0,"y":-1.3335000000000008},{"x":0.17405667732544572,"y":-1.3220917226419715},{"x":0.34513519664421466,"y":-1.2880620893564725},{"x":0.5103083570588467,"y":-1.2319933566038088},{"x":0.6667499999999933,"y":-1.1548448759465515},{"x":0.8117833655831248,"y":-1.057936679278356},{"x":0.9429268927122507,"y":-0.9429268927122507},{"x":1.057936679278356,"y":-0.8117833655831248},{"x":1.1548448759465515,"y":-0.6667499999999933},{"x":1.2319933566037946,"y":-0.5103083570588467},{"x":1.2880620893564725,"y":-0.34513519664420755},{"x":1.3220917226419715,"y":-0.1740566773254386},{"x":1.3334999999999866,"y":0},{"x":1.3220917226419715,"y":0.1740566773254386},{"x":1.2880620893564725,"y":0.34513519664422176},{"x":1.2319933566037946,"y":0.5103083570588467},{"x":1.1548448759465515,"y":0.6667500000000075},{"x":1.057936679278356,"y":0.8117833655831248},{"x":0.9429268927122507,"y":0.9429268927122649},{"x":0.8117833655831248,"y":1.0579366792783702},{"x":0.6667499999999933,"y":1.1548448759465515},{"x":0.5103083570588467,"y":1.2319933566038088},{"x":0.34513519664421466,"y":1.2880620893564725},{"x":0.17405667732544572,"y":1.3220917226419715},{"x":0,"y":1.3335000000000008},{"x":-0.17405667732544572,"y":1.3220917226419715},{"x":-0.34513519664421466,"y":1.2880620893564725},{"x":-0.5103083570588467,"y":1.2319933566038088},{"x":-0.6667500000000004,"y":1.1548448759465515},{"x":-0.8117833655831248,"y":1.0579366792783702},{"x":-0.9429268927122578,"y":0.9429268927122649},{"x":-1.057936679278363,"y":0.8117833655831248},{"x":-1.1548448759465515,"y":0.6667500000000075},{"x":-1.2319933566038088,"y":0.5103083570588467},{"x":-1.2880620893564725,"y":0.34513519664422176},{"x":-1.3220917226419715,"y":0.1740566773254386},{"x":-1.3335000000000008,"y":0},{"x":-1.3220917226419715,"y":-0.1740566773254386},{"x":-1.2880620893564725,"y":-0.34513519664420755},{"x":-1.2319933566038088,"y":-0.5103083570588467},{"x":-1.1548448759465515,"y":-0.6667499999999933},{"x":-1.057936679278363,"y":-0.8117833655831248},{"x":-0.9429268927122578,"y":-0.9429268927122507},{"x":-0.8117833655831248,"y":-1.057936679278356},{"x":-0.6667500000000004,"y":-1.1548448759465515},{"x":-0.5103083570588467,"y":-1.2319933566038088},{"x":-0.34513519664421466,"y":-1.2880620893564725},{"x":-0.17405667732544572,"y":-1.3220917226419715},{"x":0,"y":-1.3335000000000008}]} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-2.361463399999998} pcbY={-0.3809009399999894} anchorAlignment="center" text="TP2" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
          <silkscreentext pcbX={-0.7873999999999981} pcbY={4.5974000000000075} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP2" />
                </footprint>} />
          <chip name="TP1" pcbX={-40.259} pcbY={9.016999999999996} pcbRotation="90deg" layer="top" symbolName="testpoint_up" schX={-12.429133858267718} schY={7.567149143121817} schDisplayValue="VIN" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
          <silkscreenpath route={[{"x":0,"y":-1.3335000000000008},{"x":0.17405667732545282,"y":-1.322091722641975},{"x":0.34513519664422176,"y":-1.2880620893564725},{"x":0.5103083570588467,"y":-1.2319933566037982},{"x":0.6667500000000075,"y":-1.154844875946548},{"x":0.8117833655831248,"y":-1.0579366792783595},{"x":0.9429268927122649,"y":-0.9429268927122614},{"x":1.0579366792783702,"y":-0.8117833655831284},{"x":1.1548448759465515,"y":-0.6667500000000004},{"x":1.2319933566038088,"y":-0.5103083570588467},{"x":1.2880620893564725,"y":-0.3451351966442111},{"x":1.3220917226419715,"y":-0.1740566773254386},{"x":1.3335000000000008,"y":0},{"x":1.3220917226419715,"y":0.1740566773254386},{"x":1.2880620893564725,"y":0.3451351966442111},{"x":1.2319933566038088,"y":0.5103083570588502},{"x":1.1548448759465515,"y":0.6667500000000004},{"x":1.0579366792783702,"y":0.8117833655831284},{"x":0.9429268927122649,"y":0.9429268927122614},{"x":0.8117833655831248,"y":1.057936679278363},{"x":0.6667500000000075,"y":1.154844875946548},{"x":0.5103083570588467,"y":1.2319933566038017},{"x":0.34513519664422176,"y":1.2880620893564725},{"x":0.17405667732545282,"y":1.3220917226419786},{"x":0,"y":1.3335000000000008},{"x":-0.1740566773254386,"y":1.3220917226419786},{"x":-0.34513519664420755,"y":1.2880620893564725},{"x":-0.5103083570588467,"y":1.2319933566038017},{"x":-0.6667499999999933,"y":1.154844875946548},{"x":-0.8117833655831248,"y":1.057936679278363},{"x":-0.9429268927122507,"y":0.9429268927122614},{"x":-1.057936679278356,"y":0.8117833655831284},{"x":-1.1548448759465515,"y":0.6667500000000004},{"x":-1.2319933566038088,"y":0.5103083570588467},{"x":-1.2880620893564725,"y":0.3451351966442111},{"x":-1.3220917226419715,"y":0.1740566773254386},{"x":-1.3335000000000008,"y":0},{"x":-1.3220917226419715,"y":-0.1740566773254386},{"x":-1.2880620893564725,"y":-0.3451351966442111},{"x":-1.2319933566038088,"y":-0.5103083570588467},{"x":-1.1548448759465515,"y":-0.6667500000000004},{"x":-1.057936679278356,"y":-0.8117833655831284},{"x":-0.9429268927122507,"y":-0.9429268927122614},{"x":-0.8117833655831248,"y":-1.0579366792783595},{"x":-0.6667499999999933,"y":-1.154844875946548},{"x":-0.5103083570588467,"y":-1.2319933566037982},{"x":-0.34513519664420755,"y":-1.2880620893564725},{"x":-0.1740566773254386,"y":-1.322091722641975},{"x":0,"y":-1.3335000000000008}]} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-2.361463399999991} pcbY={-0.3809009399999965} anchorAlignment="center" text="TP1" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
          <silkscreentext pcbX={1.7780000000000058} pcbY={0} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP1" />
                </footprint>} />
          <chip name="TP4" pcbX={38.989} pcbY={-11.302999999999997} pcbRotation="90deg" layer="top" symbolName="testpoint_down" schX={11.515226956924504} schY={4.6792033348772595} schDisplayValue="ISO_GND" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
          <silkscreenpath route={[{"x":0,"y":-1.3335000000000008},{"x":0.1740566773254386,"y":-1.3220917226419715},{"x":0.34513519664421466,"y":-1.2880620893564725},{"x":0.5103083570588467,"y":-1.2319933566038088},{"x":0.6667500000000004,"y":-1.1548448759465515},{"x":0.8117833655831248,"y":-1.057936679278356},{"x":0.9429268927122578,"y":-0.9429268927122507},{"x":1.057936679278356,"y":-0.8117833655831248},{"x":1.1548448759465444,"y":-0.6667499999999933},{"x":1.2319933566037946,"y":-0.5103083570588467},{"x":1.2880620893564725,"y":-0.34513519664420755},{"x":1.3220917226419715,"y":-0.1740566773254386},{"x":1.3335000000000008,"y":0},{"x":1.3220917226419715,"y":0.1740566773254386},{"x":1.2880620893564725,"y":0.34513519664422176},{"x":1.2319933566037946,"y":0.5103083570588467},{"x":1.1548448759465444,"y":0.6667500000000075},{"x":1.057936679278356,"y":0.8117833655831248},{"x":0.9429268927122578,"y":0.9429268927122649},{"x":0.8117833655831248,"y":1.0579366792783702},{"x":0.6667500000000004,"y":1.1548448759465515},{"x":0.5103083570588467,"y":1.2319933566038088},{"x":0.34513519664421466,"y":1.2880620893564725},{"x":0.1740566773254386,"y":1.3220917226419715},{"x":0,"y":1.3335000000000008},{"x":-0.1740566773254386,"y":1.3220917226419715},{"x":-0.34513519664420755,"y":1.2880620893564725},{"x":-0.5103083570588538,"y":1.2319933566038088},{"x":-0.6667500000000004,"y":1.1548448759465515},{"x":-0.8117833655831319,"y":1.0579366792783702},{"x":-0.9429268927122578,"y":0.9429268927122649},{"x":-1.057936679278363,"y":0.8117833655831248},{"x":-1.1548448759465515,"y":0.6667500000000075},{"x":-1.2319933566038017,"y":0.5103083570588467},{"x":-1.2880620893564725,"y":0.34513519664422176},{"x":-1.3220917226419786,"y":0.1740566773254386},{"x":-1.3335000000000008,"y":0},{"x":-1.3220917226419786,"y":-0.1740566773254386},{"x":-1.2880620893564725,"y":-0.34513519664420755},{"x":-1.2319933566038017,"y":-0.5103083570588467},{"x":-1.1548448759465515,"y":-0.6667499999999933},{"x":-1.057936679278363,"y":-0.8117833655831248},{"x":-0.9429268927122578,"y":-0.9429268927122507},{"x":-0.8117833655831319,"y":-1.057936679278356},{"x":-0.6667500000000004,"y":-1.1548448759465515},{"x":-0.5103083570588538,"y":-1.2319933566038088},{"x":-0.34513519664421466,"y":-1.2880620893564725},{"x":-0.1740566773254386,"y":-1.3220917226419715},{"x":0,"y":-1.3335000000000008}]} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-2.361463400000005} pcbY={-0.3809009399999894} anchorAlignment="center" text="TP4" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
          <silkscreentext pcbX={-0.7620000000000005} pcbY={4.572000000000003} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP4" />
                </footprint>} />
          <chip name="TP3" pcbX={-40.259} pcbY={-5.715000000000003} pcbRotation="90deg" layer="top" symbolName="testpoint_down" schX={-12.429133858267718} schY={5.044766095414545} schDisplayValue="PGND" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
          <silkscreenpath route={[{"x":0,"y":-1.3335000000000008},{"x":0.17405667732544572,"y":-1.322091722641975},{"x":0.34513519664421466,"y":-1.2880620893564725},{"x":0.5103083570588538,"y":-1.2319933566037982},{"x":0.6667500000000004,"y":-1.154844875946548},{"x":0.8117833655831248,"y":-1.0579366792783595},{"x":0.9429268927122649,"y":-0.9429268927122614},{"x":1.057936679278363,"y":-0.8117833655831284},{"x":1.1548448759465586,"y":-0.6667500000000004},{"x":1.2319933566038088,"y":-0.5103083570588467},{"x":1.2880620893564725,"y":-0.3451351966442111},{"x":1.3220917226419786,"y":-0.1740566773254386},{"x":1.3335000000000008,"y":0},{"x":1.3220917226419786,"y":0.1740566773254386},{"x":1.2880620893564725,"y":0.3451351966442111},{"x":1.2319933566038088,"y":0.5103083570588502},{"x":1.1548448759465586,"y":0.6667500000000004},{"x":1.057936679278363,"y":0.8117833655831284},{"x":0.9429268927122649,"y":0.9429268927122614},{"x":0.8117833655831248,"y":1.057936679278363},{"x":0.6667500000000004,"y":1.154844875946548},{"x":0.5103083570588538,"y":1.2319933566038017},{"x":0.34513519664421466,"y":1.2880620893564725},{"x":0.17405667732544572,"y":1.3220917226419786},{"x":0,"y":1.3335000000000008},{"x":-0.1740566773254386,"y":1.3220917226419786},{"x":-0.34513519664420755,"y":1.2880620893564725},{"x":-0.5103083570588467,"y":1.2319933566038017},{"x":-0.6667499999999933,"y":1.154844875946548},{"x":-0.8117833655831248,"y":1.057936679278363},{"x":-0.9429268927122578,"y":0.9429268927122614},{"x":-1.057936679278356,"y":0.8117833655831284},{"x":-1.1548448759465515,"y":0.6667500000000004},{"x":-1.2319933566038017,"y":0.5103083570588467},{"x":-1.2880620893564725,"y":0.3451351966442111},{"x":-1.3220917226419715,"y":0.1740566773254386},{"x":-1.3334999999999937,"y":0},{"x":-1.3220917226419715,"y":-0.1740566773254386},{"x":-1.2880620893564725,"y":-0.3451351966442111},{"x":-1.2319933566038017,"y":-0.5103083570588467},{"x":-1.1548448759465515,"y":-0.6667500000000004},{"x":-1.057936679278356,"y":-0.8117833655831284},{"x":-0.9429268927122578,"y":-0.9429268927122614},{"x":-0.8117833655831248,"y":-1.0579366792783595},{"x":-0.6667499999999933,"y":-1.154844875946548},{"x":-0.5103083570588467,"y":-1.2319933566037982},{"x":-0.34513519664420755,"y":-1.2880620893564725},{"x":-0.1740566773254386,"y":-1.322091722641975},{"x":0,"y":-1.3335000000000008}]} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-2.361463399999998} pcbY={-0.3809009399999965} anchorAlignment="center" text="TP3" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
          <silkscreentext pcbX={-2.793999999999997} pcbY={1.2699999999999996} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP3" />
                </footprint>} />
          <chip name="TP8" pcbX={-15.494} pcbY={-16.9672} pcbRotation="90deg" layer="top" symbolName="testpoint_right" schX={-3.7652964335340435} schY={-0.7311255210745706} schDisplayValue="AGND" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="0mm" pcbY="0mm" outerDiameter="2.032mm" holeDiameter="1.016mm" shape="circle" />
          <silkscreenpath route={[{"x":0,"y":-1.3335000000000008},{"x":0.1740566773254386,"y":-1.3220917226419715},{"x":0.34513519664421466,"y":-1.2880620893564725},{"x":0.5103083570588467,"y":-1.2319933566037946},{"x":0.6667500000000004,"y":-1.1548448759465444},{"x":0.8117833655831319,"y":-1.057936679278363},{"x":0.9429268927122578,"y":-0.9429268927122578},{"x":1.057936679278363,"y":-0.8117833655831319},{"x":1.1548448759465444,"y":-0.6667500000000004},{"x":1.2319933566038017,"y":-0.5103083570588467},{"x":1.2880620893564725,"y":-0.34513519664421466},{"x":1.3220917226419715,"y":-0.1740566773254386},{"x":1.3335000000000008,"y":0},{"x":1.3220917226419715,"y":0.1740566773254386},{"x":1.2880620893564725,"y":0.34513519664421466},{"x":1.2319933566038017,"y":0.5103083570588538},{"x":1.1548448759465444,"y":0.6667500000000004},{"x":1.057936679278363,"y":0.8117833655831319},{"x":0.9429268927122578,"y":0.9429268927122578},{"x":0.8117833655831319,"y":1.057936679278363},{"x":0.6667500000000004,"y":1.1548448759465515},{"x":0.5103083570588467,"y":1.2319933566038017},{"x":0.34513519664421466,"y":1.2880620893564725},{"x":0.1740566773254386,"y":1.3220917226419786},{"x":0,"y":1.3335000000000008},{"x":-0.1740566773254386,"y":1.3220917226419786},{"x":-0.34513519664420755,"y":1.2880620893564725},{"x":-0.5103083570588467,"y":1.2319933566038017},{"x":-0.6667500000000004,"y":1.1548448759465515},{"x":-0.8117833655831319,"y":1.057936679278363},{"x":-0.9429268927122578,"y":0.9429268927122578},{"x":-1.057936679278363,"y":0.8117833655831319},{"x":-1.1548448759465515,"y":0.6667500000000004},{"x":-1.2319933566038017,"y":0.5103083570588538},{"x":-1.2880620893564725,"y":0.34513519664421466},{"x":-1.3220917226419715,"y":0.1740566773254386},{"x":-1.3335000000000008,"y":0},{"x":-1.3220917226419715,"y":-0.1740566773254386},{"x":-1.2880620893564725,"y":-0.34513519664421466},{"x":-1.2319933566038017,"y":-0.5103083570588467},{"x":-1.1548448759465515,"y":-0.6667500000000004},{"x":-1.057936679278363,"y":-0.8117833655831319},{"x":-0.9429268927122578,"y":-0.9429268927122578},{"x":-0.8117833655831319,"y":-1.057936679278363},{"x":-0.6667500000000004,"y":-1.1548448759465444},{"x":-0.5103083570588467,"y":-1.2319933566037946},{"x":-0.34513519664421466,"y":-1.2880620893564725},{"x":-0.1740566773254386,"y":-1.3220917226419715},{"x":0,"y":-1.3335000000000008}]} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-2.361463399999998} pcbY={-0.3809009399999965} anchorAlignment="center" text="TP8" font="tscircuit2024" fontSize={0.4572} color="#ec4899" />
          <silkscreentext pcbX={0.07620000000000005} pcbY={-1.904999999999994} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP8" />
          <silkscreentext pcbX={-1.4478000000000009} pcbY={-1.904999999999994} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="AGND" />
                </footprint>} />
          <chip name="TP7" pcbX={21.970999999999997} pcbY={-19.177} pcbRotation="180deg" layer="top" symbolName="testpoint_right" schX={12.685027790643819} schY={2.5589393237610008} schDisplayValue="TP_SM_1MM" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" radius="0.50000027mm" shape="circle" />
          <silkscreentext pcbX={2.6670000000000016} pcbY={-0.6674942199999947} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP7" />
                </footprint>} />
          <chip name="TP9" pcbX={13.080999999999996} pcbY={-8.255000000000003} pcbRotation="180deg" layer="top" symbolName="testpoint_right" schX={8.407943492357575} schY={-4.021190365910143} schDisplayValue="1040" pinLabels={{"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <platedhole  portHints={["1"]} pcbX="0mm" pcbY="0mm" outerDiameter="1.905mm" holeDiameter="1.3208mm" shape="circle" />
          <fabricationnotetext pcbX={-1.269999999999996} pcbY={-0.2540000000000049} anchorAlignment="center" text="TP9" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
          <silkscreentext pcbX={1.524000000000001} pcbY={-1.6510000000000034} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="TP9" />
                </footprint>} />
          <chip name="C27" pcbX={0.3810000000000002} pcbY={18.161} pcbRotation="180deg" layer="top" symbolName="capacitor_left" schX={1.553641732283463} schY={-4.021190365910143} schDisplayValue="1000pF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-2.00000108mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.40000082mm" height="1.59999934mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="1.99999854mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="3.40000082mm" height="1.59999934mm" ccwRotation={270} shape="rotated_rect" />
          <silkscreenline x1={0.7999984000000069} y1={-1.6999991399999885} x2={-0.8000009399999897} y2={-1.6999991399999885} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={0.7999984000000069} y1={1.6999991400000027} x2={-0.8000009399999897} y2={1.6999991400000027} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.875000060000005} pcbY={-0.4999990000000025} anchorAlignment="center" text="C27" font="tscircuit2024" fontSize={1.016} color="#ec4899" />
          <silkscreentext pcbX={0.5080000000000027} pcbY={3.3020000000000067} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="C27" />
                </footprint>} />
          <chip name="NT2" pcbX={-28.067} pcbY={-10.068001199999998} pcbRotation="270deg" layer="top" schX={4.569534506716071} schY={-2.558939323761} symbol={<symbol geometryHash="f4891e1d8a36" />} schDisplayValue="Net-Tie" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.254mm" pcbY="0mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.254mm" pcbY="0mm" layer="top" solderMaskMargin="-0.127mm" width="0.254mm" height="0.254mm" ccwRotation={270} shape="rotated_rect" />
                </footprint>} />
          <chip name="C13" pcbX={19.939} pcbY={7.239000000000004} pcbRotation="90deg" layer="top" symbolName="capacitor_down" schX={11.33244557665586} schY={5.940394858730896} schDisplayValue="0.1uF" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000762} y1={-0.3250006199999973} x2={0.07111999999999341} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000762} y1={0.3250006200000115} x2={0.07111999999999341} y2={0.3250006200000115} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007199999942} anchorAlignment="center" text="C13" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-4.064} pcbY={-0.6349999999999909} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C13" />
          <courtyardoutline outline={[{"x":1.200000139999986,"y":-0.5250002199999955},{"x":1.200000139999986,"y":0.5250002200000097},{"x":-1.2000001400000002,"y":0.5250002200000097},{"x":-1.2000001400000002,"y":-0.5250002199999955}]} layer="top" />
                </footprint>} />
          <chip name="C14" pcbX={21.463} pcbY={7.239000000000004} pcbRotation="90deg" layer="top" symbolName="capacitor_down" schX={12.246352477999075} schY={5.940394858730896} schDisplayValue="0.01uF" pinLabels={{"pin2":["2","pin2"],"pin1":["1","pin1"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["2"]} pcbX="0.6999986mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <smtpad portHints={["1"]} pcbX="-0.70000114mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.85000084mm" height="0.80000094mm" ccwRotation={180} shape="rotated_rect" />
          <silkscreenline x1={-0.07112000000000762} y1={0.3250006200000115} x2={0.07111999999999341} y2={0.3250006200000115} strokeWidth={0.19999959999999997} />
          <silkscreenline x1={-0.07112000000000762} y1={-0.3250006199999973} x2={0.07111999999999341} y2={-0.3250006199999973} strokeWidth={0.19999959999999997} />
          <fabricationnotetext pcbX={-1.0500004400000051} pcbY={-0.2750007199999942} anchorAlignment="center" text="C14" font="tscircuit2024" fontSize={0.5588} color="#ec4899" />
          <silkscreentext pcbX={-3.9369999999999976} pcbY={-0.6349999999999909} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="C14" />
          <courtyardoutline outline={[{"x":-1.2000001400000002,"y":-0.5250002199999955},{"x":1.200000139999986,"y":-0.5250002199999955},{"x":1.200000139999986,"y":0.5250002200000097},{"x":-1.2000001400000002,"y":0.5250002200000097}]} layer="top" />
                </footprint>} />
          <chip name="D5" pcbX={-11.632399900000003} pcbY={-10.305999200000002} pcbRotation="270deg" layer="top" symbolName="diode_left" schX={-10.235757295044003} schY={4.203971746178787} schDisplayValue="100V" pinLabels={{"pin1":["1","pin1","K"],"pin2":["2","pin2","A"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-1.0999978mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.5999988mm" height="0.5999988mm" ccwRotation={90} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="1.10000288mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="0.5999988mm" height="0.5999988mm" ccwRotation={90} shape="rotated_rect" />
          <silkscreenrect pcbX={-1.8033949200000023} pcbY={-0.00032003999999830057} width={0.508} height={1.7271999999999998} layer="top" strokeWidth={0.508} filled={true} />
          <silkscreenline x1={0.10000233999999608} y1={0.7747000000000028} x2={-1.8034000000000034} y2={0.7747000000000028} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.5250007599999975} y1={-0.7746999999999957} x2={0.10000233999999608} y2={-0.7746999999999957} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={0.10000233999999608} y1={-0.7746999999999957} x2={-1.8034000000000034} y2={-0.7746999999999957} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={1.5250007599999975} y1={0.7747000000000028} x2={0.10000233999999608} y2={0.7747000000000028} strokeWidth={0.17779999999999999} />
          <fabricationnotetext pcbX={-1.3999997400000055} pcbY={-0.2750007200000013} anchorAlignment="center" text="D5" font="tscircuit2024" fontSize={0.762} color="#ec4899" />
          <silkscreentext pcbX={3.846880800000001} pcbY={0.5539994000000021} anchorAlignment="bottom_left" fontSize={0.889} font="tscircuit2024" pcbRotation="90deg" mirrored={false} layer="top" text="D5" />
                </footprint>} />
          <chip name="R25" pcbX={-6.858000000000004} pcbY={-7.759999720000003} pcbRotation="180deg" layer="top" symbolName="boxresistor_up" schX={-2.5589393237610008} schY={4.93509726725336} schDisplayValue="10.0k" pinLabels={{"pin1":["1","pin1"],"pin2":["2","pin2"]}} obstructsWithinBounds={false} footprint={<footprint>
                  <smtpad portHints={["1"]} pcbX="-0.75000104mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
          <smtpad portHints={["2"]} pcbX="0.7499985mm" pcbY="0mm" layer="top" solderMaskMargin="0.0499999mm" width="1.39999974mm" height="1.10000034mm" ccwRotation={270} shape="rotated_rect" />
          <fabricationnotetext pcbX={-1.2000001400000002} pcbY={-0.3250006200000044} anchorAlignment="center" text="R25" font="tscircuit2024" fontSize={0.635} color="#ec4899" />
          <silkscreentext pcbX={0.4999989999999954} pcbY={2.074880279999995} anchorAlignment="bottom_left" fontSize={1.016} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="top" text="R25" />
          <courtyardoutline outline={[{"x":1.4249984200000014,"y":-0.7999983999999998},{"x":1.4249984200000014,"y":0.8000009399999968},{"x":-1.4250009600000055,"y":0.8000009399999968},{"x":-1.4250009600000055,"y":-0.7999983999999998}]} layer="top" />
                </footprint>} />
          <net name="PGND" />
          <net name="VCC" />
          <net name="VIN" />
          <net name="AGND" />
          <net name="SS" />
          <net name="VOUT" />
          <net name="ISO_GND" />
          <net name="COMP" />
          <net name="FB" />
          <net name="VAUX" />
          <net name="PGOOD" />
          <trace path={[".R12 > .pin1",".J3 > .pin1",".C17 > .pin1",".C15 > .pin1",".R25 > .pin1",".C2 > .pin2",".J1 > .pin2",".C5 > .pin2",".C6 > .pin2",".C3 > .pin2",".C4 > .pin2",".TP3 > .pin1",".C28 > .pin2",".T1 > .pin1",".U1 > .pin13",".U1 > .pin4",".NT1 > .pin2",".C19 > .pin2",".J4 > .pin5",".NT2 > .pin1",".C26 > .pin2",".C25 > .pin2",".C18 > .pin2","net.PGND"]} />
          <trace path={[".R11 > .pin2",".C19 > .pin1",".R10 > .pin1"]} />
          <trace path={[".Q1 > .pin4",".R8 > .pin1"]} />
          <trace path={[".Q1 > .pin1",".Q1 > .pin2",".Q1 > .pin3",".R12 > .pin2",".R11 > .pin1"]} />
          <trace path={[".U1 > .pin5",".R10 > .pin2"]} />
          <trace path={[".R8 > .pin2",".U1 > .pin3"]} />
          <trace path={[".C17 > .pin2",".U1 > .pin2",".R3 > .pin1",".R18 > .pin2",".R9 > .pin1","net.VCC"]} />
          <trace path={[".R6 > .pin2",".C16 > .pin1",".R4 > .pin2",".T1 > .pin5",".J1 > .pin1",".C2 > .pin1",".C6 > .pin1",".C5 > .pin1",".C4 > .pin1",".C3 > .pin1",".TP1 > .pin1",".D5 > .pin2",".R26 > .pin2",".C27 > .pin2","net.VIN"]} />
          <trace path={[".C21 > .pin2",".R16 > .pin1",".R17 > .pin1",".C22 > .pin2",".U1 > .pin7",".NT1 > .pin1",".TP8 > .pin1",".R24 > .pin1",".Q2 > .pin3","net.AGND"]} />
          <trace path={[".C21 > .pin1",".U1 > .pin12",".R16 > .pin2",".R6 > .pin1"]} />
          <trace path={[".U1 > .pin10",".R17 > .pin2"]} />
          <trace path={[".U1 > .pin9",".C22 > .pin1",".J4 > .pin3",".Q2 > .pin1","net.SS"]} />
          <trace path={[".R5 > .pin1",".C18 > .pin1",".U1 > .pin1"]} />
          <trace path={[".D1 > .pin3",".C1 > .pin1",".C7 > .pin1",".C8 > .pin1",".C9 > .pin1",".C10 > .pin1",".C11 > .pin1",".C12 > .pin1",".J2 > .pin2",".TP2 > .pin1",".C14 > .pin1",".C13 > .pin1",".R7 > .pin2",".TP6 > .pin1","net.VOUT"]} />
          <trace path={[".T1 > .pin10",".C7 > .pin2",".C8 > .pin2",".C9 > .pin2",".C10 > .pin2",".C11 > .pin2",".C12 > .pin2",".J2 > .pin1",".T1 > .pin9",".TP4 > .pin1",".C13 > .pin2",".C14 > .pin2",".R22 > .pin1",".U3 > .pin3",".TP9 > .pin1",".C20 > .pin2",".C28 > .pin1",".C27 > .pin1","net.ISO_GND"]} />
          <trace path={[".R19 > .pin2",".R14 > .pin2",".R7 > .pin1",".TP7 > .pin1",".R13 > .pin2",".D4 > .pin2",".R15 > .pin2"]} />
          <trace path={[".R22 > .pin2",".R21 > .pin1",".R19 > .pin1",".C23 > .pin2",".U3 > .pin1"]} />
          <trace path={[".U3 > .pin2",".U2 > .pin2",".D4 > .pin1",".C23 > .pin1",".C24 > .pin1",".R15 > .pin1"]} />
          <trace path={[".U2 > .pin4",".U1 > .pin6",".R18 > .pin1",".C25 > .pin1",".R20 > .pin1",".Q2 > .pin2",".J4 > .pin2","net.COMP"]} />
          <trace path={[".R14 > .pin1",".U2 > .pin1"]} />
          <trace path={[".C24 > .pin2",".R21 > .pin2"]} />
          <trace path={[".R1 > .pin1",".D1 > .pin1",".D1 > .pin2",".T1 > .pin7",".T1 > .pin6"]} />
          <trace path={[".R1 > .pin2",".C1 > .pin2"]} />
          <trace path={[".D3 > .pin1",".R4 > .pin1",".C16 > .pin2"]} />
          <trace path={[".D3 > .pin2",".Q1 > .pin5",".Q1 > .pin6",".Q1 > .pin7",".Q1 > .pin8",".Q1 > .pin9",".T1 > .pin3",".TP5 > .pin1"]} />
          <trace path={[".C26 > .pin1",".R20 > .pin2"]} />
          <trace path={[".D4 > .pin3",".C20 > .pin1",".R13 > .pin1"]} />
          <trace path={[".R24 > .pin2",".R23 > .pin1",".U1 > .pin8","net.FB"]} />
          <trace path={[".C15 > .pin2",".R3 > .pin2",".R2 > .pin2",".R25 > .pin2",".R23 > .pin2",".J4 > .pin4","net.VAUX"]} />
          <trace path={[".T1 > .pin2",".D2 > .pin2"]} />
          <trace path={[".U1 > .pin11",".R9 > .pin2",".J4 > .pin1","net.PGOOD"]} />
          <trace path={[".R2 > .pin1",".D2 > .pin1"]} />
          <trace path={[".NT2 > .pin2",".U2 > .pin3"]} />
          <trace path={[".D5 > .pin1",".R5 > .pin2",".R26 > .pin1"]} />
          <net name={"NetD3_2"} />
          <net name={"NetD1_1"} />
          <net name={"NetQ1_1"} />
          <net name={"__circuit_json_unassigned_pcb_copper_pour_altium_region_1311"} />
          <net name={"__circuit_json_unassigned_pcb_copper_pour_altium_region_1312"} />
          <net name={"NetC23_1"} />
          <net name={"NetC24_2"} />
          <net name={"NetC18_1"} />
          <net name={"NetC16_2"} />
          <net name={"NetC1_2"} />
          <net name={"NetD4_2"} />
          <net name={"NetC20_1"} />
          <net name={"NetC21_1"} />
          <net name={"NetC19_1"} />
          <net name={"NetR14_1"} />
          <net name={"NetNT2_2"} />
          <net name={"NetC23_2"} />
          <net name={"NetR8_2"} />
          <net name={"NetQ1_4"} />
          <net name={"NetC26_1"} />
          <net name={"NetR17_2"} />
          <net name={"NetR10_2"} />
          <net name={"NetD2_2"} />
          <copperpour layer={"top"} geometryHash="e94b399278cb" />
          <copperpour layer={"top"} geometryHash="689e70363b3d" />
          <copperpour layer={"top"} geometryHash="daee372ac0e6" />
          <copperpour layer={"top"} geometryHash="c46ce3019078" />
          <copperpour layer={"top"} geometryHash="512003ca745b" />
          <copperpour layer={"top"} geometryHash="4e89b1fc536e" />
          <copperpour layer={"top"} geometryHash="1028939e7c43" />
          <copperpour layer={"top"} geometryHash="eac97d89ec87" />
          <copperpour layer={"top"} geometryHash="69d00e707a70" />
          <copperpour layer={"top"} geometryHash="feed64c9ea4b" />
          <copperpour layer={"top"} geometryHash="5a5a0d515205" />
          <copperpour layer={"top"} geometryHash="56f16d9c39f5" />
          <copperpour layer={"top"} geometryHash="16e7d7372913" />
          <copperpour layer={"top"} geometryHash="a3d78b71078e" />
          <copperpour layer={"top"} geometryHash="e36be72d902f" />
          <copperpour layer={"top"} geometryHash="a8e7e288939a" />
          <copperpour layer={"top"} geometryHash="06dda4138b14" />
          <copperpour layer={"top"} geometryHash="2bcf3d9122c3" />
          <copperpour layer={"top"} geometryHash="4a6f2ad4925c" />
          <copperpour layer={"top"} geometryHash="b03613687387" />
          <copperpour layer={"top"} geometryHash="7077c1898259" />
          <copperpour layer={"top"} geometryHash="75b5c6a4c64a" />
          <copperpour layer={"top"} geometryHash="54a3a012875a" />
          <copperpour layer={"top"} geometryHash="2a4d2eea66cf" />
          <copperpour layer={"top"} geometryHash="fcfa5765b500" />
          <copperpour layer={"top"} geometryHash="f5f902581a25" />
          <copperpour layer={"top"} geometryHash="6501b99a1005" />
          <copperpour layer={"top"} geometryHash="d812111f5ef3" />
          <copperpour layer={"top"} geometryHash="725e2131d121" />
          <copperpour layer={"top"} geometryHash="b5b7dde59312" />
          <copperpour layer={"top"} geometryHash="f2c0ed433481" />
          <copperpour layer={"top"} geometryHash="c6be493f60ab" />
          <copperpour layer={"top"} geometryHash="f99544ae31f6" />
          <copperpour layer={"top"} geometryHash="3a2301e77cdb" />
          <copperpour layer={"top"} geometryHash="77118f2ec181" />
          <copperpour layer={"top"} geometryHash="a80de8151eb8" />
          <copperpour layer={"top"} geometryHash="f1b98315e3af" />
          <copperpour layer={"top"} geometryHash="a47d26281bb9" />
          <copperpour layer={"top"} geometryHash="2c8bb826ffe0" />
          <copperpour layer={"top"} geometryHash="ea6317e5d6ee" />
          <copperpour layer={"top"} geometryHash="b5c0e087fcc5" />
          <copperpour layer={"top"} geometryHash="3c929774fe13" />
          <copperpour layer={"top"} geometryHash="e37ea63e12a8" />
          <copperpour layer={"top"} geometryHash="8756b7eef2c6" />
          <copperpour layer={"top"} geometryHash="3b67858a10fc" />
          <copperpour layer={"top"} geometryHash="0ec2ff8c0268" />
          <copperpour layer={"top"} geometryHash="6c88f168f20e" />
          <copperpour layer={"top"} geometryHash="edac01ea0686" />
          <copperpour layer={"top"} geometryHash="036a6ab0e83c" />
          <copperpour layer={"top"} geometryHash="08f47fbd64c7" />
          <copperpour layer={"top"} geometryHash="9b1a07b134f3" />
          <copperpour layer={"top"} geometryHash="8bf518f02c3c" />
          <copperpour layer={"top"} geometryHash="51014943597d" />
          <copperpour layer={"top"} geometryHash="aecc684fbaf0" />
          <copperpour layer={"top"} geometryHash="827b120eb4ef" />
          <copperpour layer={"top"} geometryHash="2f8c6765f092" />
          <copperpour layer={"top"} geometryHash="22358511537b" />
          <copperpour layer={"top"} geometryHash="f2831d9aa7f6" />
          <copperpour layer={"top"} geometryHash="2f61a3b9a446" />
          <copperpour layer={"top"} geometryHash="045da45c14b2" />
          <copperpour layer={"top"} geometryHash="e73be159acd6" />
          <copperpour layer={"top"} geometryHash="d043d708fc80" />
          <copperpour layer={"top"} geometryHash="bd9145acfa8d" />
          <copperpour layer={"top"} geometryHash="40889cf4f9d4" />
          <copperpour layer={"top"} geometryHash="3c5e1925a5e2" />
          <copperpour layer={"top"} geometryHash="5ecd57f198aa" />
          <copperpour layer={"top"} geometryHash="6d9d19e4785d" />
          <copperpour layer={"top"} geometryHash="a85d7cbeb33f" />
          <copperpour layer={"top"} geometryHash="7ffbd4548396" />
          <copperpour layer={"top"} geometryHash="e7eecbc7a097" />
          <copperpour layer={"top"} geometryHash="abc729dc358e" />
          <copperpour layer={"top"} geometryHash="b6a205ed761f" />
          <copperpour layer={"top"} geometryHash="3ebe4247ba69" />
          <copperpour layer={"top"} geometryHash="12f091a77a2c" />
          <copperpour layer={"top"} geometryHash="45c2d9b7fa2d" />
          <copperpour layer={"top"} geometryHash="89f226b3a63f" />
          <copperpour layer={"top"} geometryHash="cea70f5fd12c" />
          <copperpour layer={"top"} geometryHash="66c757d9860d" />
          <copperpour layer={"top"} geometryHash="4ccd5ae96419" />
          <copperpour layer={"top"} geometryHash="0a177ccc4e20" />
          <copperpour layer={"top"} geometryHash="737fe0841909" />
          <copperpour layer={"top"} geometryHash="2a42f74d6c66" />
          <copperpour layer={"top"} geometryHash="0bf5406e5f47" />
          <copperpour layer={"top"} geometryHash="0c771dcda698" />
          <copperpour layer={"top"} geometryHash="01f863d03551" />
          <copperpour layer={"top"} geometryHash="50848718ddca" />
          <copperpour layer={"top"} geometryHash="e63127c67571" />
          <copperpour layer={"top"} geometryHash="692b271ffbbd" />
          <copperpour layer={"top"} geometryHash="6bf15f68ca5b" />
          <copperpour layer={"top"} geometryHash="7efd7ba12c1e" />
          <copperpour layer={"top"} geometryHash="9de2b05dc48b" />
          <copperpour layer={"top"} geometryHash="598bf9219729" />
          <copperpour layer={"top"} geometryHash="b9ec7e4683ca" />
          <copperpour layer={"top"} geometryHash="3b6e2a8cec6d" />
          <copperpour layer={"top"} geometryHash="ca022275b269" />
          <copperpour layer={"top"} geometryHash="06e45657216b" />
          <copperpour layer={"top"} geometryHash="5f3f7f12879a" />
          <copperpour layer={"top"} geometryHash="6d6afcd73657" />
          <copperpour layer={"top"} geometryHash="738d5ccba546" />
          <copperpour layer={"top"} geometryHash="33c4a814ac8e" />
          <copperpour layer={"top"} geometryHash="80365b0270bc" />
          <copperpour layer={"top"} geometryHash="0e00a1d276b2" />
          <copperpour layer={"top"} geometryHash="ea6408575138" />
          <copperpour layer={"top"} geometryHash="d863a47ea9ef" />
          <copperpour layer={"top"} geometryHash="d087b2313206" />
          <copperpour layer={"top"} geometryHash="30dc3ca0caab" />
          <copperpour layer={"top"} geometryHash="b4ae97a25160" />
          <copperpour layer={"top"} geometryHash="53ebd3f96767" />
          <copperpour layer={"top"} geometryHash="52b87767cf12" />
          <copperpour layer={"top"} geometryHash="26b1359bcb2b" />
          <copperpour layer={"top"} geometryHash="41d5ab45645c" />
          <copperpour layer={"top"} geometryHash="0c48008db791" />
          <copperpour layer={"top"} geometryHash="3820ac8cfbd3" />
          <copperpour layer={"top"} geometryHash="96d2b27195eb" />
          <copperpour layer={"top"} geometryHash="c6da7f837435" />
          <copperpour layer={"top"} geometryHash="61544eeca89d" />
          <copperpour layer={"top"} geometryHash="742c3a3dc25f" />
          <copperpour layer={"top"} geometryHash="c9d751708184" />
          <copperpour layer={"top"} geometryHash="d5513c175338" />
          <copperpour layer={"top"} geometryHash="67ce0b51503a" />
          <copperpour layer={"top"} geometryHash="5d90b8cde3f1" />
          <copperpour layer={"top"} geometryHash="b56bdd397483" />
          <copperpour layer={"top"} geometryHash="8daaaeaa747d" />
          <copperpour layer={"top"} geometryHash="44748ceeae26" />
          <copperpour layer={"top"} geometryHash="202505387938" />
          <copperpour layer={"top"} geometryHash="2bf37cba36d5" />
          <copperpour layer={"top"} geometryHash="35038d0a4a4a" />
          <copperpour layer={"top"} geometryHash="3a23728c0f66" />
          <copperpour layer={"top"} geometryHash="6ae90a240a57" />
          <copperpour layer={"top"} geometryHash="f3147341db6d" />
          <copperpour layer={"top"} geometryHash="b4c1adaa754b" />
          <copperpour layer={"top"} geometryHash="42055c44499c" />
          <copperpour layer={"top"} geometryHash="53f4aab53e6a" />
          <copperpour layer={"top"} geometryHash="b6c90fba4965" />
          <copperpour layer={"top"} geometryHash="284ea057d16b" />
          <copperpour layer={"top"} geometryHash="6d4002c0f3fd" />
          <copperpour layer={"top"} geometryHash="9811e053399b" />
          <copperpour layer={"top"} geometryHash="b7149e7ab769" />
          <copperpour layer={"bottom"} geometryHash="c6eee61ac4bb" />
          <copperpour layer={"bottom"} geometryHash="f768f35ec2ce" />
          <copperpour layer={"bottom"} geometryHash="d9b18dae3322" />
          <copperpour layer={"bottom"} geometryHash="ad13e7810fbc" />
          <copperpour layer={"bottom"} geometryHash="66419f056458" />
          <copperpour layer={"bottom"} geometryHash="6045c57e4c6c" />
          <copperpour layer={"bottom"} geometryHash="424ddf57ad6a" />
          <copperpour layer={"bottom"} geometryHash="8182638c17f6" />
          <copperpour layer={"bottom"} geometryHash="539ac5b07967" />
          <copperpour layer={"bottom"} geometryHash="3c3eff7d6f39" />
          <copperpour layer={"bottom"} geometryHash="2895997443eb" />
          <copperpour layer={"bottom"} geometryHash="334456a43bc9" />
          <copperpour layer={"bottom"} geometryHash="0165de40e1e7" />
          <copperpour layer={"bottom"} geometryHash="bfa9cebdd008" />
          <copperpour layer={"bottom"} geometryHash="6cbd3d79463c" />
          <copperpour layer={"bottom"} geometryHash="f453f25e8924" />
          <copperpour layer={"bottom"} geometryHash="f4e1766bdfe5" />
          <copperpour layer={"bottom"} geometryHash="10f6b6c3b017" />
          <copperpour layer={"bottom"} geometryHash="dd22c006a9ff" />
          <copperpour layer={"bottom"} geometryHash="6695bfbe9702" />
          <copperpour layer={"bottom"} geometryHash="417b2b00aba8" />
          <copperpour layer={"bottom"} geometryHash="4f9bf925dbe8" />
          <copperpour layer={"bottom"} geometryHash="96b32b93c3d0" />
          <copperpour layer={"bottom"} geometryHash="f0bdb6fdab86" />
          <copperpour layer={"bottom"} geometryHash="dd4e2dff9eb2" />
          {/* standalone schematic primitives: count=101 geometryHash=a53773057042 */}
          <chip noSchematicRepresentation pcbX={-60.1218} pcbY={-59.9186} footprint={<footprint>
                  <silkscreenline x1={55.041799999999995} y1={69.0626} x2={65.0748} y2={69.0626} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={53.5178} y1={54.7116} x2={53.5178} y2={55.0926} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={53.1368} y1={54.7116} x2={53.5178} y2={54.7116} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={53.1368} y1={54.7116} x2={53.1368} y2={55.0926} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={53.1368} y1={55.0926} x2={66.9798} y2={55.0926} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={68.5038} y1={46.456599999999995} x2={68.7578} y2={46.456599999999995} strokeWidth={0.2032} />
          <silkscreenline x1={68.5038} y1={46.7106} x2={68.7578} y2={46.456599999999995} strokeWidth={0.2032} />
          <silkscreenline x1={68.5038} y1={46.456599999999995} x2={68.5038} y2={46.7106} strokeWidth={0.2032} />
          <silkscreenline x1={68.5038} y1={46.456599999999995} x2={69.1388} y2={47.0916} strokeWidth={0.2032} />
          <silkscreenline x1={35.7378} y1={54.0766} x2={35.9918} y2={54.0766} strokeWidth={0.2032} />
          <silkscreenline x1={35.7378} y1={54.0766} x2={35.991802539999995} y2={54.33060254} strokeWidth={0.2032} />
          <silkscreenline x1={35.9918} y1={54.0766} x2={35.9918} y2={54.3306} strokeWidth={0.2032} />
          <silkscreenline x1={35.6108} y1={54.4576} x2={35.9918} y2={54.0766} strokeWidth={0.2032} />
          <silkscreenline x1={35.6108} y1={54.4576} x2={35.6108} y2={55.6006} strokeWidth={0.2032} />
          <silkscreenline x1={41.452799999999996} y1={48.8696} x2={41.452799999999996} y2={50.901599999999995} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={41.452799999999996} y1={50.901599999999995} x2={41.7068} y2={50.901599999999995} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={41.7068} y1={50.6476} x2={41.7068} y2={50.901599999999995} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={41.452799999999996} y1={50.6476} x2={41.7068} y2={50.6476} strokeWidth={0.17779999999999999} />
          <silkscreenline x1={41.9608} y1={53.21779806} x2={41.9608} y2={54.52759986} strokeWidth={0.254} />
          <silkscreenline x1={41.549601939999995} y1={52.806599999999996} x2={41.9608} y2={53.21779806} strokeWidth={0.254} />
          <silkscreenline x1={41.549601939999995} y1={52.806599999999996} x2={41.549601939999995} y2={53.12440226} strokeWidth={0.254} />
          <silkscreenline x1={41.549601939999995} y1={53.12440226} x2={41.85438162} y2={52.81962258} strokeWidth={0.254} />
          <silkscreenline x1={41.56262451999999} y1={52.81962258} x2={41.85438162} y2={52.81962258} strokeWidth={0.254} />
          <fabricationnotepath route={[{"x":45.0088,"y":28.2956},{"x":45.0088,"y":28.549599999999998}]} strokeWidth={0.254} color="#ec4899" />
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
          <silkscreentext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" fontSize={1.524} font="tscircuit2024" pcbRotation="0deg" mirrored={false} layer="bottom" text=".Layer_Name" />
          <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} />
          <coppertext pcbX={32.2326} pcbY={17.1578651} anchorAlignment="center" text=".Layer_Name" font="tscircuit2024" fontSize={1.524} pcbRotation="0deg" mirrored={false} layer="bottom" />
          <keepout shape="outline" layers={["top"]} description="Altium arc keepout" outline={[{"x":22.64872788,"y":76.55567620000001},{"x":22.644450319242043,"y":76.62093916558383},{"x":22.63169082721871,"y":76.68508546373222},{"x":22.61066772237611,"y":76.74701753349912},{"x":22.581740715866815,"y":76.80567570000001},{"x":22.545404756792276,"y":76.86005630574293},{"x":22.50228156348649,"y":76.90922888348649},{"x":22.45310898574293,"y":76.95235207679228},{"x":22.398728379999998,"y":76.98868803586682},{"x":22.34007021349911,"y":77.01761504237612},{"x":22.278138143732217,"y":77.0386381472187},{"x":22.213991845583834,"y":77.05139763924204},{"x":22.14872888,"y":77.0556752},{"x":22.083465914416166,"y":77.05139763924204},{"x":22.019319616267783,"y":77.0386381472187},{"x":21.957387546500886,"y":77.01761504237612},{"x":21.89872938,"y":76.98868803586682},{"x":21.844348774257067,"y":76.95235207679228},{"x":21.79517619651351,"y":76.90922888348649},{"x":21.752053003207724,"y":76.86005630574293},{"x":21.715717044133186,"y":76.80567570000001},{"x":21.68679003762389,"y":76.74701753349912},{"x":21.665766932781292,"y":76.68508546373222},{"x":21.653007440757957,"y":76.62093916558383},{"x":21.64872988,"y":76.55567620000001},{"x":21.653007440757957,"y":76.49041323441617},{"x":21.665766932781292,"y":76.42626693626778},{"x":21.68679003762389,"y":76.36433486650088},{"x":21.715717044133186,"y":76.30567669999999},{"x":21.752053003207724,"y":76.25129609425707},{"x":21.79517619651351,"y":76.20212351651351},{"x":21.844348774257067,"y":76.15900032320772},{"x":21.89872938,"y":76.12266436413319},{"x":21.957387546500886,"y":76.09373735762388},{"x":22.019319616267783,"y":76.0727142527813},{"x":22.083465914416166,"y":76.05995476075796},{"x":22.14872888,"y":76.0556772},{"x":22.213991845583834,"y":76.05995476075796},{"x":22.278138143732217,"y":76.0727142527813},{"x":22.34007021349911,"y":76.09373735762388},{"x":22.398728379999998,"y":76.12266436413319},{"x":22.45310898574293,"y":76.15900032320772},{"x":22.50228156348649,"y":76.20212351651351},{"x":22.545404756792276,"y":76.25129609425707},{"x":22.581740715866815,"y":76.30567669999999},{"x":22.61066772237611,"y":76.36433486650088},{"x":22.63169082721871,"y":76.42626693626778},{"x":22.644450319242043,"y":76.49041323441617},{"x":22.64872788,"y":76.55567620000001}]} strokeWidth="1.17780054mm" />
          <keepout shape="outline" layers={["top"]} description="Altium arc keepout" outline={[{"x":98.84872279999999,"y":76.55567620000001},{"x":98.84444523924203,"y":76.62093916558383},{"x":98.8316857472187,"y":76.68508546373222},{"x":98.8106626423761,"y":76.74701753349912},{"x":98.78173563586681,"y":76.80567570000001},{"x":98.74539967679227,"y":76.86005630574293},{"x":98.70227648348649,"y":76.90922888348649},{"x":98.65310390574292,"y":76.95235207679228},{"x":98.5987233,"y":76.98868803586682},{"x":98.5400651334991,"y":77.01761504237612},{"x":98.47813306373222,"y":77.0386381472187},{"x":98.41398676558381,"y":77.05139763924204},{"x":98.34872379999999,"y":77.0556752},{"x":98.28346083441616,"y":77.05139763924204},{"x":98.21931453626777,"y":77.0386381472187},{"x":98.15738246650088,"y":77.01761504237612},{"x":98.09872429999999,"y":76.98868803586682},{"x":98.04434369425707,"y":76.95235207679228},{"x":97.99517111651349,"y":76.90922888348649},{"x":97.95204792320772,"y":76.86005630574293},{"x":97.91571196413318,"y":76.80567570000001},{"x":97.88678495762387,"y":76.74701753349912},{"x":97.86576185278129,"y":76.68508546373222},{"x":97.85300236075794,"y":76.62093916558383},{"x":97.8487248,"y":76.55567620000001},{"x":97.85300236075794,"y":76.49041323441617},{"x":97.86576185278129,"y":76.42626693626778},{"x":97.88678495762387,"y":76.36433486650088},{"x":97.91571196413318,"y":76.30567669999999},{"x":97.95204792320772,"y":76.25129609425707},{"x":97.99517111651349,"y":76.20212351651351},{"x":98.04434369425707,"y":76.15900032320772},{"x":98.09872429999999,"y":76.12266436413319},{"x":98.15738246650088,"y":76.09373735762388},{"x":98.21931453626777,"y":76.0727142527813},{"x":98.28346083441616,"y":76.05995476075796},{"x":98.34872379999999,"y":76.0556772},{"x":98.41398676558381,"y":76.05995476075796},{"x":98.47813306373222,"y":76.0727142527813},{"x":98.5400651334991,"y":76.09373735762388},{"x":98.5987233,"y":76.12266436413319},{"x":98.65310390574292,"y":76.15900032320772},{"x":98.70227648348649,"y":76.20212351651351},{"x":98.74539967679227,"y":76.25129609425707},{"x":98.78173563586681,"y":76.30567669999999},{"x":98.8106626423761,"y":76.36433486650088},{"x":98.8316857472187,"y":76.42626693626778},{"x":98.84444523924203,"y":76.49041323441617},{"x":98.84872279999999,"y":76.55567620000001}]} strokeWidth="1.17780054mm" />
          <keepout shape="outline" layers={["top"]} description="Altium arc keepout" outline={[{"x":98.84872279999999,"y":43.2816762},{"x":98.84444523924203,"y":43.346939165583834},{"x":98.8316857472187,"y":43.41108546373221},{"x":98.8106626423761,"y":43.47301753349911},{"x":98.78173563586681,"y":43.531675699999994},{"x":98.74539967679227,"y":43.58605630574293},{"x":98.70227648348649,"y":43.63522888348649},{"x":98.65310390574292,"y":43.67835207679227},{"x":98.5987233,"y":43.714688035866814},{"x":98.5400651334991,"y":43.743615042376106},{"x":98.47813306373222,"y":43.764638147218704},{"x":98.41398676558381,"y":43.77739763924204},{"x":98.34872379999999,"y":43.781675199999995},{"x":98.28346083441616,"y":43.77739763924204},{"x":98.21931453626777,"y":43.764638147218704},{"x":98.15738246650088,"y":43.743615042376106},{"x":98.09872429999999,"y":43.714688035866814},{"x":98.04434369425707,"y":43.67835207679227},{"x":97.99517111651349,"y":43.63522888348649},{"x":97.95204792320772,"y":43.58605630574293},{"x":97.91571196413318,"y":43.531675699999994},{"x":97.88678495762387,"y":43.47301753349911},{"x":97.86576185278129,"y":43.41108546373221},{"x":97.85300236075794,"y":43.346939165583834},{"x":97.8487248,"y":43.2816762},{"x":97.85300236075794,"y":43.216413234416166},{"x":97.86576185278129,"y":43.152266936267786},{"x":97.88678495762387,"y":43.09033486650088},{"x":97.91571196413318,"y":43.0316767},{"x":97.95204792320772,"y":42.97729609425706},{"x":97.99517111651349,"y":42.92812351651351},{"x":98.04434369425707,"y":42.88500032320772},{"x":98.09872429999999,"y":42.84866436413318},{"x":98.15738246650088,"y":42.819737357623886},{"x":98.21931453626777,"y":42.79871425278129},{"x":98.28346083441616,"y":42.78595476075795},{"x":98.34872379999999,"y":42.7816772},{"x":98.41398676558381,"y":42.78595476075795},{"x":98.47813306373222,"y":42.798714252781295},{"x":98.5400651334991,"y":42.819737357623886},{"x":98.5987233,"y":42.84866436413318},{"x":98.65310390574292,"y":42.88500032320772},{"x":98.70227648348649,"y":42.92812351651351},{"x":98.74539967679227,"y":42.97729609425706},{"x":98.78173563586681,"y":43.0316767},{"x":98.8106626423761,"y":43.09033486650088},{"x":98.8316857472187,"y":43.152266936267786},{"x":98.84444523924203,"y":43.216413234416166},{"x":98.84872279999999,"y":43.2816762}]} strokeWidth="1.17780054mm" />
          <pcbtrace route={[{"route_type":"wire","x":48.4894001,"y":48.51259792,"width":0.254,"layer":"top"},{"route_type":"wire","x":50.05079652,"y":48.51259792,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_25" />
          <pcbtrace route={[{"route_type":"wire","x":49.58080254,"y":50.7125986,"width":0.2413,"layer":"top"},{"route_type":"wire","x":50.215799999999994,"y":50.07760114,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_33" />
          <pcbtrace route={[{"route_type":"wire","x":48.4894001,"y":50.7125986,"width":0.2413,"layer":"top"},{"route_type":"wire","x":49.58080254,"y":50.7125986,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_33" />
          <pcbtrace route={[{"route_type":"wire","x":54.4068,"y":63.3476,"width":0.6095999999999999,"layer":"top"},{"route_type":"wire","x":54.4068,"y":65.6336,"width":0.6095999999999999,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_13" />
          <pcbtrace route={[{"route_type":"wire","x":33.0708,"y":42.1386,"width":0.2413,"layer":"top"},{"route_type":"wire","x":33.4518,"y":42.1386,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":32.91180108,"y":42.29759892,"width":0.2413,"layer":"top"},{"route_type":"wire","x":33.0708,"y":42.1386,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":32.91180108,"y":42.29759892,"width":0.2413,"layer":"top"},{"route_type":"wire","x":32.91180108,"y":43.09359936,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":50.3428,"y":56.780899899999994,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":50.3428,"y":59.2836,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_0" />
          <pcbtrace route={[{"route_type":"wire","x":67.8688,"y":44.222603959999994,"width":0.254,"layer":"top"},{"route_type":"wire","x":69.74979954,"y":44.222603959999994,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_23" />
          <pcbtrace route={[{"route_type":"wire","x":65.50780395999999,"y":44.222603959999994,"width":0.254,"layer":"top"},{"route_type":"wire","x":67.8688,"y":44.222603959999994,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_23" />
          <pcbtrace route={[{"route_type":"wire","x":67.8688,"y":44.222603959999994,"width":0.254,"layer":"top"},{"route_type":"wire","x":67.8688,"y":44.246599339999996,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_23" />
          <pcbtrace route={[{"route_type":"wire","x":67.8688,"y":42.076601139999994,"width":0.254,"layer":"top"},{"route_type":"wire","x":67.8688,"y":44.222603959999994,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_23" />
          <pcbtrace route={[{"route_type":"wire","x":31.01871114,"y":42.37251114,"width":0.2413,"layer":"top"},{"route_type":"wire","x":31.577798159999997,"y":42.37251114,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":30.784799999999997,"y":42.1386,"width":0.2413,"layer":"top"},{"route_type":"wire","x":31.01871114,"y":42.37251114,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":34.0868,"y":40.7416,"width":0.2413,"layer":"top"},{"route_type":"wire","x":34.09316016,"y":40.73523984,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":33.208709299999995,"y":40.7416,"width":0.2413,"layer":"top"},{"route_type":"wire","x":34.0868,"y":40.7416,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":31.577798159999997,"y":42.37251114,"width":0.2413,"layer":"top"},{"route_type":"wire","x":33.208709299999995,"y":40.7416,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":32.91180108,"y":44.9935981,"width":0.2413,"layer":"top"},{"route_type":"wire","x":32.91180108,"y":45.917205599999996,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_4" />
          <pcbtrace route={[{"route_type":"wire","x":33.382790740000004,"y":41.19160925999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":54.09480926,"y":41.19160925999999,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_32" />
          <pcbtrace route={[{"route_type":"wire","x":32.019097759999994,"y":42.555302239999996,"width":0.2413,"layer":"top"},{"route_type":"wire","x":33.382790740000004,"y":41.19160925999999,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_32" />
          <pcbtrace route={[{"route_type":"wire","x":32.019097759999994,"y":42.555302239999996,"width":0.2413,"layer":"top"},{"route_type":"wire","x":32.019097759999994,"y":48.579897759999994,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_32" />
          <pcbtrace route={[{"route_type":"wire","x":39.88979576,"y":52.89942938,"width":0.4064,"layer":"top"},{"route_type":"wire","x":39.88979576,"y":53.37719575999999,"width":0.4064,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_8" />
          <pcbtrace route={[{"route_type":"wire","x":39.88979576,"y":50.800596899999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.88979576,"y":52.89942938,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_8" />
          <pcbtrace route={[{"route_type":"wire","x":39.88979576,"y":53.37719575999999,"width":0.4064,"layer":"top"},{"route_type":"wire","x":40.233599999999996,"y":53.721,"width":0.4064,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_8" />
          <pcbtrace route={[{"route_type":"wire","x":40.233599999999996,"y":53.721,"width":0.4064,"layer":"top"},{"route_type":"wire","x":40.233599999999996,"y":54.418001399999994,"width":0.4064,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_8" />
          <pcbtrace route={[{"route_type":"wire","x":40.67119628,"y":53.0606,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":41.43319628,"y":53.8226,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":40.67119628,"y":52.36479748,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":40.67119628,"y":53.0606,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":66.34479999999999,"y":45.74659888,"width":0.254,"layer":"top"},{"route_type":"wire","x":66.34479999999999,"y":47.156598599999995,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_22" />
          <pcbtrace route={[{"route_type":"wire","x":67.8688,"y":45.64659908,"width":0.254,"layer":"top"},{"route_type":"wire","x":67.8688,"y":47.15660114,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_19" />
          <pcbtrace route={[{"route_type":"wire","x":55.6744632,"y":42.011010719999994,"width":0.2413,"layer":"top"},{"route_type":"wire","x":55.67621834,"y":42.01101834,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":54.41946443999999,"y":40.75021822,"width":0.2413,"layer":"top"},{"route_type":"wire","x":55.6744632,"y":42.011010719999994,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":34.09316016,"y":40.73523984,"width":0.2413,"layer":"top"},{"route_type":"wire","x":54.41946443999999,"y":40.75021822,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":54.09480926,"y":41.19160925999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":56.3118,"y":43.4086,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_32" />
          <pcbtrace route={[{"route_type":"wire","x":75.23479999999999,"y":40.7416,"width":0.254,"layer":"top"},{"route_type":"wire","x":75.23479999999999,"y":45.3756014,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":70.65280002,"y":40.75159998,"width":0.254,"layer":"top"},{"route_type":"wire","x":75.22480001999999,"y":40.75159998,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":70.55080124,"y":40.85359876,"width":0.254,"layer":"top"},{"route_type":"wire","x":70.65280002,"y":40.75159998,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":69.71279682,"y":40.85359876,"width":0.254,"layer":"top"},{"route_type":"wire","x":70.55080124,"y":40.85359876,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":82.0928,"y":40.7416,"width":0.254,"layer":"top"},{"route_type":"wire","x":84.5566,"y":40.7416,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":75.23479999999999,"y":40.7416,"width":0.254,"layer":"top"},{"route_type":"wire","x":82.0928,"y":40.7416,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":75.22480001999999,"y":40.75159998,"width":0.254,"layer":"top"},{"route_type":"wire","x":75.23479999999999,"y":40.7416,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":68.1228,"y":40.8036014,"width":0.254,"layer":"top"},{"route_type":"wire","x":68.17279736,"y":40.85359876,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":68.17279736,"y":40.85359876,"width":0.254,"layer":"top"},{"route_type":"wire","x":69.71279682,"y":40.85359876,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":65.3288,"y":40.5496014,"width":0.254,"layer":"top"},{"route_type":"wire","x":65.5207986,"y":40.7416,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":65.3288,"y":40.8036014,"width":0.254,"layer":"top"},{"route_type":"wire","x":68.1228,"y":40.8036014,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_31" />
          <pcbtrace route={[{"route_type":"wire","x":68.93180269999999,"y":46.1226027,"width":0.254,"layer":"top"},{"route_type":"wire","x":69.74979954,"y":46.1226027,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_19" />
          <pcbtrace route={[{"route_type":"wire","x":68.45579908,"y":45.64659908,"width":0.254,"layer":"top"},{"route_type":"wire","x":68.93180269999999,"y":46.1226027,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_19" />
          <pcbtrace route={[{"route_type":"wire","x":67.8688,"y":45.64659908,"width":0.254,"layer":"top"},{"route_type":"wire","x":68.45579908,"y":45.64659908,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_19" />
          <pcbtrace route={[{"route_type":"wire","x":71.3627986,"y":46.775598599999995,"width":0.254,"layer":"top"},{"route_type":"wire","x":73.71079999999999,"y":46.775598599999995,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_19" />
          <pcbtrace route={[{"route_type":"wire","x":70.7098027,"y":46.1226027,"width":0.254,"layer":"top"},{"route_type":"wire","x":71.3627986,"y":46.775598599999995,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_19" />
          <pcbtrace route={[{"route_type":"wire","x":69.74979954,"y":46.1226027,"width":0.254,"layer":"top"},{"route_type":"wire","x":70.7098027,"y":46.1226027,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_19" />
          <pcbtrace route={[{"route_type":"wire","x":64.6938,"y":43.4086,"width":0.254,"layer":"top"},{"route_type":"wire","x":65.50780395999999,"y":44.222603959999994,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_23" />
          <pcbtrace route={[{"route_type":"wire","x":63.6278001,"y":43.4086,"width":0.254,"layer":"top"},{"route_type":"wire","x":64.6938,"y":43.4086,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_23" />
          <pcbtrace route={[{"route_type":"wire","x":50.3428,"y":59.2836,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":50.63679992,"y":59.57759992,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_0" />
          <pcbtrace route={[{"route_type":"wire","x":44.97379626,"y":53.8226,"width":0.2413,"layer":"top"},{"route_type":"wire","x":45.611359119999996,"y":53.82856138,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":28.4988,"y":50.6476,"width":0.2413,"layer":"top"},{"route_type":"wire","x":31.546799999999998,"y":50.6476,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":85.9677986,"y":40.766999999999996,"width":0.2413,"layer":"top"},{"route_type":"wire","x":88.13799999999999,"y":40.766999999999996,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_2" />
          <pcbtrace route={[{"route_type":"wire","x":54.864,"y":70.9422,"width":0.5588,"layer":"top"},{"route_type":"wire","x":54.864,"y":73.7616,"width":0.5588,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_18" />
          <pcbtrace route={[{"route_type":"wire","x":69.71279682,"y":42.153598699999996,"width":0.254,"layer":"top"},{"route_type":"wire","x":69.71279682,"y":44.18560124,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_23" />
          <pcbtrace route={[{"route_type":"wire","x":50.63679992,"y":59.57759992,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":51.90679737999999,"y":59.57759992,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_0" />
          <pcbtrace route={[{"route_type":"wire","x":65.13980114,"y":42.1386,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":65.3288,"y":41.94960114,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_7" />
          <pcbtrace route={[{"route_type":"wire","x":63.6278001,"y":42.1386,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":65.13980114,"y":42.1386,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_7" />
          <pcbtrace route={[{"route_type":"wire","x":32.50080114,"y":53.887601139999994,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":33.0708,"y":54.4576,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":32.50080114,"y":53.187599999999996,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":32.50080114,"y":53.887601139999994,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":28.4988,"y":53.187599999999996,"width":0.2413,"layer":"top"},{"route_type":"wire","x":31.100801399999998,"y":53.187599999999996,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_1" />
          <pcbtrace route={[{"route_type":"wire","x":35.32179626,"y":50.71260114,"width":0.2413,"layer":"top"},{"route_type":"wire","x":35.32179626,"y":51.85259886,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":34.30579626,"y":51.7906,"width":0.2413,"layer":"top"},{"route_type":"wire","x":35.2597974,"y":51.7906,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":71.61279809999999,"y":41.5036,"width":0.254,"layer":"top"},{"route_type":"wire","x":73.77279886,"y":41.5036,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_16" />
          <pcbtrace route={[{"route_type":"wire","x":73.77279886,"y":41.5036,"width":0.254,"layer":"top"},{"route_type":"wire","x":73.77279886,"y":42.773599999999995,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_16" />
          <pcbtrace route={[{"route_type":"wire","x":73.71079999999999,"y":44.235598599999996,"width":0.254,"layer":"top"},{"route_type":"wire","x":73.71079999999999,"y":45.37559886,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_26" />
          <pcbtrace route={[{"route_type":"wire","x":72.14979982,"y":45.17260206,"width":0.254,"layer":"top"},{"route_type":"wire","x":72.35279661999999,"y":45.37559886,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_26" />
          <pcbtrace route={[{"route_type":"wire","x":72.35279661999999,"y":45.37559886,"width":0.254,"layer":"top"},{"route_type":"wire","x":73.71079999999999,"y":45.37559886,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_26" />
          <pcbtrace route={[{"route_type":"wire","x":73.71079999999999,"y":46.775598599999995,"width":0.254,"layer":"top"},{"route_type":"wire","x":75.23479746,"y":46.775598599999995,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_19" />
          <pcbtrace route={[{"route_type":"wire","x":44.14979486,"y":53.8226,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":44.97379626,"y":53.8226,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":40.6049988,"y":52.2986,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":40.67119628,"y":52.36479748,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":41.43319628,"y":53.8226,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":42.749795119999995,"y":53.8226,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":41.16379626,"y":51.5366,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":42.68779626,"y":51.5366,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_24" />
          <pcbtrace route={[{"route_type":"wire","x":40.88979629999999,"y":51.26260004,"width":0.21589999999999998,"layer":"top"},{"route_type":"wire","x":41.16379626,"y":51.5366,"width":0.21589999999999998,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_24" />
          <pcbtrace route={[{"route_type":"wire","x":40.88979629999999,"y":50.800596899999995,"width":0.21589999999999998,"layer":"top"},{"route_type":"wire","x":40.88979629999999,"y":51.26260004,"width":0.21589999999999998,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_24" />
          <pcbtrace route={[{"route_type":"wire","x":39.389796759999996,"y":46.4525995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.389796759999996,"y":48.900598159999994,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_4" />
          <pcbtrace route={[{"route_type":"wire","x":39.389796759999996,"y":46.4525995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.89379626,"y":45.9486,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_4" />
          <pcbtrace route={[{"route_type":"wire","x":39.89379626,"y":44.96259994,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.89379626,"y":45.9486,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_4" />
          <pcbtrace route={[{"route_type":"wire","x":39.88979576,"y":47.2226005,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.88979576,"y":48.900598159999994,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_9" />
          <pcbtrace route={[{"route_type":"wire","x":39.88979576,"y":47.2226005,"width":0.2413,"layer":"top"},{"route_type":"wire","x":41.41779626,"y":45.6946,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_9" />
          <pcbtrace route={[{"route_type":"wire","x":41.41779626,"y":44.9625974,"width":0.2413,"layer":"top"},{"route_type":"wire","x":41.41779626,"y":45.6946,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_9" />
          <pcbtrace route={[{"route_type":"wire","x":39.1825988,"y":51.73979746,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.1825988,"y":52.2986,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":39.1825988,"y":51.73979746,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.389796759999996,"y":51.532599499999996,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":39.389796759999996,"y":50.800596899999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.389796759999996,"y":51.532599499999996,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":40.6049988,"y":51.73980254,"width":0.2413,"layer":"top"},{"route_type":"wire","x":40.6049988,"y":52.2986,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":40.38979476,"y":51.524598499999996,"width":0.2413,"layer":"top"},{"route_type":"wire","x":40.6049988,"y":51.73980254,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":40.38979476,"y":50.800596899999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":40.38979476,"y":51.524598499999996,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":37.63379316,"y":50.800596899999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.38979622,"y":50.800596899999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":37.54579486,"y":50.7125986,"width":0.2413,"layer":"top"},{"route_type":"wire","x":37.63379316,"y":50.800596899999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":35.5137974,"y":50.7125986,"width":0.2413,"layer":"top"},{"route_type":"wire","x":37.54579486,"y":50.7125986,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":34.01379786,"y":48.99660254,"width":0.2413,"layer":"top"},{"route_type":"wire","x":34.01379786,"y":50.520599999999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_21" />
          <pcbtrace route={[{"route_type":"wire","x":40.88979629999999,"y":48.25459995999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":40.88979629999999,"y":48.900598159999994,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_15" />
          <pcbtrace route={[{"route_type":"wire","x":40.88979629999999,"y":48.25459995999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":41.41779626,"y":47.7266,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_15" />
          <pcbtrace route={[{"route_type":"wire","x":41.41779626,"y":47.7266,"width":0.2413,"layer":"top"},{"route_type":"wire","x":42.74979766,"y":47.7266,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_15" />
          <pcbtrace route={[{"route_type":"wire","x":42.74979766,"y":47.7266,"width":0.2413,"layer":"top"},{"route_type":"wire","x":42.74979766,"y":49.25059746,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_15" />
          <pcbtrace route={[{"route_type":"wire","x":42.749795119999995,"y":49.2506,"width":0.2413,"layer":"top"},{"route_type":"wire","x":42.74979766,"y":49.25059746,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_15" />
          <pcbtrace route={[{"route_type":"wire","x":42.74979766,"y":46.20260254,"width":0.2413,"layer":"top"},{"route_type":"wire","x":42.74979766,"y":47.7266,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_15" />
          <pcbtrace route={[{"route_type":"wire","x":42.749795119999995,"y":46.2026,"width":0.2413,"layer":"top"},{"route_type":"wire","x":42.74979766,"y":46.20260254,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_15" />
          <pcbtrace route={[{"route_type":"wire","x":40.38979476,"y":47.9926015,"width":0.2413,"layer":"top"},{"route_type":"wire","x":40.38979476,"y":48.900598159999994,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_1" />
          <pcbtrace route={[{"route_type":"wire","x":40.38979476,"y":47.9926015,"width":0.2413,"layer":"top"},{"route_type":"wire","x":41.41779626,"y":46.9646,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_1" />
          <pcbtrace route={[{"route_type":"wire","x":35.32179626,"y":50.71260114,"width":0.2413,"layer":"top"},{"route_type":"wire","x":35.5137974,"y":50.520599999999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":35.32179626,"y":53.252598600000006,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":35.32179626,"y":54.0766,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":44.14979486,"y":49.2506,"width":0.254,"layer":"top"},{"route_type":"wire","x":45.22779626,"y":49.2506,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_25" />
          <pcbtrace route={[{"route_type":"wire","x":38.36979626,"y":46.39460114,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.36979626,"y":46.95260104,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_28" />
          <pcbtrace route={[{"route_type":"wire","x":38.36979626,"y":46.95260104,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.889795219999996,"y":47.4726,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_28" />
          <pcbtrace route={[{"route_type":"wire","x":38.889795219999996,"y":47.4726,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.889795219999996,"y":48.900598159999994,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_28" />
          <pcbtrace route={[{"route_type":"wire","x":36.84579626,"y":44.870598599999994,"width":0.2413,"layer":"top"},{"route_type":"wire","x":36.84579626,"y":45.6946,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_28" />
          <pcbtrace route={[{"route_type":"wire","x":36.84579626,"y":45.6946,"width":0.2413,"layer":"top"},{"route_type":"wire","x":37.5457974,"y":46.39460114,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_28" />
          <pcbtrace route={[{"route_type":"wire","x":37.5457974,"y":46.39460114,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.36979626,"y":46.39460114,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_28" />
          <pcbtrace route={[{"route_type":"wire","x":39.4208,"y":49.6316,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.639796260000004,"y":49.85059626,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":39.389796759999996,"y":50.10059576,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.389796759999996,"y":50.800596899999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":39.389796759999996,"y":50.10059576,"width":0.2413,"layer":"top"},{"route_type":"wire","x":39.639796260000004,"y":49.85059626,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":38.889795219999996,"y":50.800596899999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.889795219999996,"y":51.270601039999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_6" />
          <pcbtrace route={[{"route_type":"wire","x":37.13779466,"y":51.7906,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.36979626,"y":51.7906,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_6" />
          <pcbtrace route={[{"route_type":"wire","x":38.36979626,"y":51.7906,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.889795219999996,"y":51.270601039999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_6" />
          <pcbtrace route={[{"route_type":"wire","x":35.2597974,"y":51.7906,"width":0.2413,"layer":"top"},{"route_type":"wire","x":35.32179626,"y":51.85259886,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":38.36979626,"y":43.916599999999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.36979626,"y":44.9946014,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":31.577798159999997,"y":50.67859815999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":32.6898,"y":51.7906,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":32.6898,"y":51.7906,"width":0.2413,"layer":"top"},{"route_type":"wire","x":34.30579626,"y":51.7906,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":57.4548,"y":68.6816,"width":0.6095999999999999,"layer":"top"},{"route_type":"wire","x":57.4548,"y":70.49159891999999,"width":0.6095999999999999,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_13" />
          <pcbtrace route={[{"route_type":"wire","x":54.4068,"y":65.6336,"width":0.6095999999999999,"layer":"top"},{"route_type":"wire","x":57.4548,"y":68.6816,"width":0.6095999999999999,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_13" />
          <pcbtrace route={[{"route_type":"wire","x":55.24200026,"y":74.49159854,"width":0.5588,"layer":"top"},{"route_type":"wire","x":57.4548,"y":74.49159854,"width":0.5588,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_18" />
          <pcbtrace route={[{"route_type":"wire","x":55.045399180000004,"y":74.29499745999999,"width":0.5588,"layer":"top"},{"route_type":"wire","x":55.24200026,"y":74.49159854,"width":0.5588,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_18" />
          <pcbtrace route={[{"route_type":"wire","x":32.0548,"y":50.3936,"width":0.2413,"layer":"top"},{"route_type":"wire","x":32.562799999999996,"y":50.901599999999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":32.562799999999996,"y":50.901599999999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":33.0708,"y":50.901599999999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":56.3118,"y":43.4086,"width":0.2413,"layer":"top"},{"route_type":"wire","x":57.3777999,"y":43.4086,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_32" />
          <pcbtrace route={[{"route_type":"wire","x":55.67621834,"y":42.01101834,"width":0.2413,"layer":"top"},{"route_type":"wire","x":55.803799999999995,"y":42.1386,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":55.803799999999995,"y":42.1386,"width":0.2413,"layer":"top"},{"route_type":"wire","x":57.3777999,"y":42.1386,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":31.577798159999997,"y":42.37251114,"width":0.2413,"layer":"top"},{"route_type":"wire","x":31.577798159999997,"y":50.67859815999999,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":32.0548,"y":48.6156,"width":0.2413,"layer":"top"},{"route_type":"wire","x":32.0548,"y":49.5965988,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_32" />
          <pcbtrace route={[{"route_type":"wire","x":32.019097759999994,"y":48.579897759999994,"width":0.2413,"layer":"top"},{"route_type":"wire","x":32.0548,"y":48.6156,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_32" />
          <pcbtrace route={[{"route_type":"wire","x":32.0548,"y":50.1045988,"width":0.2413,"layer":"top"},{"route_type":"wire","x":32.0548,"y":50.3936,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_5" />
          <pcbtrace route={[{"route_type":"wire","x":99.1108,"y":60.553599999999996,"width":1.1683999999999999,"layer":"top"},{"route_type":"wire","x":99.1108,"y":63.373,"width":1.1683999999999999,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_2" />
          <pcbtrace route={[{"route_type":"wire","x":36.8808,"y":56.42760113999999,"width":0.2032,"layer":"top"},{"route_type":"wire","x":36.8808,"y":57.5056,"width":0.2032,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_12" />
          <pcbtrace route={[{"route_type":"wire","x":36.88379973999999,"y":55.030601139999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":38.25049754,"y":55.030601139999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_20" />
          <pcbtrace route={[{"route_type":"wire","x":36.83,"y":53.37960114,"width":0.2413,"layer":"top"},{"route_type":"wire","x":36.83,"y":54.97680139999999,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_20" />
          <pcbtrace route={[{"route_type":"wire","x":36.83,"y":54.97680139999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":36.8808,"y":55.027601399999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_20" />
          <pcbtrace route={[{"route_type":"wire","x":36.8808,"y":55.027601399999995,"width":0.2413,"layer":"top"},{"route_type":"wire","x":36.88379973999999,"y":55.030601139999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_20" />
          <pcbtrace route={[{"route_type":"wire","x":36.8808,"y":57.5056,"width":0.2032,"layer":"top"},{"route_type":"wire","x":40.690799999999996,"y":61.315599999999996,"width":0.2032,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_12" />
          <pcbtrace route={[{"route_type":"wire","x":40.690799999999996,"y":61.315599999999996,"width":0.2032,"layer":"top"},{"route_type":"wire","x":40.690799999999996,"y":63.093599999999995,"width":0.2032,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_12" />
          <pcbtrace route={[{"route_type":"wire","x":40.690799999999996,"y":63.093599999999995,"width":0.2032,"layer":"top"},{"route_type":"wire","x":40.9448,"y":63.3476,"width":0.2032,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_12" />
          <pcbtrace route={[{"route_type":"wire","x":40.9448,"y":63.3476,"width":0.2032,"layer":"top"},{"route_type":"wire","x":41.46579972,"y":63.3476,"width":0.2032,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_12" />
          <pcbtrace route={[{"route_type":"wire","x":72.43179823999999,"y":70.39759860000001,"width":0.8128,"layer":"top"},{"route_type":"wire","x":73.8378,"y":70.39759860000001,"width":0.8128,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_17" />
          <pcbtrace route={[{"route_type":"wire","x":51.90679737999999,"y":62.0776,"width":0.6095999999999999,"layer":"top"},{"route_type":"wire","x":52.41479738,"y":62.5856,"width":0.6095999999999999,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_13" />
          <pcbtrace route={[{"route_type":"wire","x":52.41479738,"y":62.5856,"width":0.6095999999999999,"layer":"top"},{"route_type":"wire","x":53.6448,"y":62.5856,"width":0.6095999999999999,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_13" />
          <pcbtrace route={[{"route_type":"wire","x":53.6448,"y":62.5856,"width":0.6095999999999999,"layer":"top"},{"route_type":"wire","x":54.4068,"y":63.3476,"width":0.6095999999999999,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_13" />
          <pcbtrace route={[{"route_type":"wire","x":35.1028,"y":54.29559626,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":35.32179626,"y":54.0766,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":35.1028,"y":54.29559626,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":35.1028,"y":54.3929824,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":40.233599999999996,"y":55.81800114,"width":0.4064,"layer":"top"},{"route_type":"wire","x":40.233599999999996,"y":58.572399999999995,"width":0.4064,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_11" />
          <pcbtrace route={[{"route_type":"wire","x":40.233599999999996,"y":58.572399999999995,"width":0.4064,"layer":"top"},{"route_type":"wire","x":42.3418,"y":60.6806,"width":0.4064,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_11" />
          <pcbtrace route={[{"route_type":"wire","x":42.3418,"y":60.6806,"width":0.4064,"layer":"top"},{"route_type":"wire","x":42.97579924,"y":60.6806,"width":0.4064,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_11" />
          <pcbtrace route={[{"route_type":"wire","x":47.270802079999996,"y":48.51259792,"width":0.254,"layer":"top"},{"route_type":"wire","x":48.4894001,"y":48.51259792,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_25" />
          <pcbtrace route={[{"route_type":"wire","x":46.532799999999995,"y":49.2506,"width":0.254,"layer":"top"},{"route_type":"wire","x":47.270802079999996,"y":48.51259792,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_25" />
          <pcbtrace route={[{"route_type":"wire","x":45.22779626,"y":49.2506,"width":0.254,"layer":"top"},{"route_type":"wire","x":46.532799999999995,"y":49.2506,"width":0.254,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_25" />
          <pcbtrace route={[{"route_type":"wire","x":44.21179626,"y":50.7125986,"width":0.2413,"layer":"top"},{"route_type":"wire","x":48.4894001,"y":50.7125986,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_33" />
          <pcbtrace route={[{"route_type":"wire","x":44.14979486,"y":50.7746,"width":0.2413,"layer":"top"},{"route_type":"wire","x":44.21179626,"y":50.7125986,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_33" />
          <pcbtrace route={[{"route_type":"wire","x":42.749795119999995,"y":50.7746,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":42.749795119999995,"y":52.286966799999995,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_24" />
          <pcbtrace route={[{"route_type":"wire","x":42.749795119999995,"y":52.286966799999995,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":42.76142832,"y":52.2986,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_24" />
          <pcbtrace route={[{"route_type":"wire","x":49.63303002,"y":53.60237437999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":51.10482032,"y":53.60237437999999,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_30" />
          <pcbtrace route={[{"route_type":"wire","x":49.5308001,"y":53.70460429999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":49.63303002,"y":53.60237437999999,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_30" />
          <pcbtrace route={[{"route_type":"wire","x":49.5308001,"y":53.70460429999999,"width":0.2413,"layer":"top"},{"route_type":"wire","x":49.5308001,"y":54.2776029,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_30" />
          <pcbtrace route={[{"route_type":"wire","x":51.10482032,"y":52.20237464,"width":0.2413,"layer":"top"},{"route_type":"wire","x":52.47002714,"y":52.20237464,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":52.47002714,"y":52.20237464,"width":0.2413,"layer":"top"},{"route_type":"wire","x":52.51380149999999,"y":52.158600279999995,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":49.96992546,"y":52.20237464,"width":0.2413,"layer":"top"},{"route_type":"wire","x":51.10482032,"y":52.20237464,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":48.725096859999994,"y":53.44720324,"width":0.2413,"layer":"top"},{"route_type":"wire","x":49.96992546,"y":52.20237464,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":48.02080058,"y":53.44720324,"width":0.2413,"layer":"top"},{"route_type":"wire","x":48.725096859999994,"y":53.44720324,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":45.99271726,"y":53.44720324,"width":0.2413,"layer":"top"},{"route_type":"wire","x":48.02080058,"y":53.44720324,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":45.611359119999996,"y":53.82856138,"width":0.2413,"layer":"top"},{"route_type":"wire","x":45.99271726,"y":53.44720324,"width":0.2413,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":49.5308001,"y":56.47760358,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":50.039503679999996,"y":56.47760358,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_0" />
          <pcbtrace route={[{"route_type":"wire","x":50.039503679999996,"y":56.47760358,"width":0.30479999999999996,"layer":"top"},{"route_type":"wire","x":50.3428,"y":56.780899899999994,"width":0.30479999999999996,"layer":"top"}]} source_trace_id="source_trace_altium_pcb_0" />
          <pcbtrace route={[{"route_type":"wire","x":30.784799999999997,"y":42.1386,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":33.4518,"y":42.1386,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_10" />
          <pcbtrace route={[{"route_type":"wire","x":32.3088,"y":43.916599999999995,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":38.36979626,"y":43.916599999999995,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":30.657799999999998,"y":45.5676,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":32.3088,"y":43.916599999999995,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":28.4988,"y":45.5676,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":30.657799999999998,"y":45.5676,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":30.783402999999996,"y":48.1076,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":32.94279924,"y":45.94820376,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_4" />
          <pcbtrace route={[{"route_type":"wire","x":28.4988,"y":48.1076,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":30.783402999999996,"y":48.1076,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_4" />
          <pcbtrace route={[{"route_type":"wire","x":88.1888,"y":40.7162,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":88.21419999999999,"y":40.7416,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_2" />
          <pcbtrace route={[{"route_type":"wire","x":88.21419999999999,"y":40.7416,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":93.0148,"y":40.7416,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_2" />
          <pcbtrace route={[{"route_type":"wire","x":33.8328,"y":47.8536,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":40.52879626,"y":47.8536,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_1" />
          <pcbtrace route={[{"route_type":"wire","x":28.4988,"y":53.187599999999996,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":33.8328,"y":47.8536,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_1" />
          <pcbtrace route={[{"route_type":"wire","x":43.423740939999995,"y":44.90654468,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":43.495137799999995,"y":44.90654468,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":44.21179626,"y":53.0606,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":44.97379626,"y":53.8226,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":44.21179626,"y":45.6946,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":44.21179626,"y":53.0606,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":32.94279924,"y":45.94820376,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":39.89379626,"y":45.9486,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_4" />
          <pcbtrace route={[{"route_type":"wire","x":40.862813880000004,"y":54.3929824,"width":0.30479999999999996,"layer":"bottom"},{"route_type":"wire","x":41.43319628,"y":53.8226,"width":0.30479999999999996,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":45.22779626,"y":49.2506,"width":0.254,"layer":"bottom"},{"route_type":"wire","x":51.4858,"y":49.2506,"width":0.254,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_25" />
          <pcbtrace route={[{"route_type":"wire","x":51.4858,"y":49.2506,"width":0.254,"layer":"bottom"},{"route_type":"wire","x":53.1368,"y":50.901599999999995,"width":0.254,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_25" />
          <pcbtrace route={[{"route_type":"wire","x":53.1368,"y":50.901599999999995,"width":0.254,"layer":"bottom"},{"route_type":"wire","x":53.1368,"y":67.1576,"width":0.254,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_25" />
          <pcbtrace route={[{"route_type":"wire","x":40.52879626,"y":47.8536,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":41.41779626,"y":46.9646,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_1" />
          <pcbtrace route={[{"route_type":"wire","x":38.36979626,"y":43.916599999999995,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":42.50519312,"y":43.916599999999995,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":42.50519312,"y":43.916599999999995,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":43.495137799999995,"y":44.90654468,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":43.423740939999995,"y":44.90654468,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":44.21179626,"y":45.6946,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_29" />
          <pcbtrace route={[{"route_type":"wire","x":101.1428,"y":43.53584892,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":101.1428,"y":55.17960008,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_2" />
          <pcbtrace route={[{"route_type":"wire","x":98.09479999999999,"y":58.22760008,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":101.1428,"y":55.17960008,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_2" />
          <pcbtrace route={[{"route_type":"wire","x":98.34867554,"y":40.74172445999999,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":101.1428,"y":43.53584892,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_2" />
          <pcbtrace route={[{"route_type":"wire","x":93.0148,"y":40.7416,"width":0.2413,"layer":"bottom"},{"route_type":"wire","x":98.34867554,"y":40.74172445999999,"width":0.2413,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_2" />
          <pcbtrace route={[{"route_type":"wire","x":34.530182399999994,"y":54.3929824,"width":0.30479999999999996,"layer":"bottom"},{"route_type":"wire","x":35.1028,"y":54.3929824,"width":0.30479999999999996,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":35.1028,"y":54.3929824,"width":0.30479999999999996,"layer":"bottom"},{"route_type":"wire","x":40.862813880000004,"y":54.3929824,"width":0.30479999999999996,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":33.0708,"y":54.4576,"width":0.30479999999999996,"layer":"bottom"},{"route_type":"wire","x":34.4655648,"y":54.4576,"width":0.30479999999999996,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbtrace route={[{"route_type":"wire","x":34.4655648,"y":54.4576,"width":0.30479999999999996,"layer":"bottom"},{"route_type":"wire","x":34.530182399999994,"y":54.3929824,"width":0.30479999999999996,"layer":"bottom"}]} source_trace_id="source_trace_altium_pcb_3" />
          <pcbvia pcbX={38.5647946} pcbY={49.8505988} outerDiameter={0.49999899999999997} holeDiameter={0.19999959999999997} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={40.714797919999995} pcbY={49.8505988} outerDiameter={0.49999899999999997} holeDiameter={0.19999959999999997} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={39.639796260000004} pcbY={49.8505988} outerDiameter={0.49999899999999997} holeDiameter={0.19999959999999997} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={50.7238} pcbY={54.584599999999995} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={51.9938} pcbY={54.584599999999995} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={51.9938} pcbY={55.6006} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={30.784799999999997} pcbY={42.1386} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={33.4518} pcbY={42.1386} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={32.94279924} pcbY={45.94820376} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={39.623999999999995} pcbY={59.1312} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={39.2176} pcbY={58.2168} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={39.2176} pcbY={57.1246} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={40.3352} pcbY={59.8424} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={41.1226} pcbY={60.6044} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={33.0708} pcbY={50.901599999999995} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={52.120799999999996} pcbY={68.4276} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={49.580799999999996} pcbY={71.9836} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={48.3108} pcbY={71.9836} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={49.580799999999996} pcbY={70.96759999999999} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={43.4848} pcbY={59.5376} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={43.4848} pcbY={58.0136} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={44.2468} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={45.7708} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={47.294799999999995} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={64.05879999999999} pcbY={52.9336} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={82.0928} pcbY={40.7416} outerDiameter={0.9144} holeDiameter={0.6095999999999999} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={88.1888} pcbY={40.7162} outerDiameter={0.9144} holeDiameter={0.6095999999999999} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={33.0708} pcbY={54.4576} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={71.42479999999999} pcbY={42.773599999999995} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={72.4408} pcbY={42.773599999999995} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={39.090599999999995} pcbY={70.0532} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={39.090599999999995} pcbY={67.5132} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={44.97379626} pcbY={53.8226} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={38.11579626} pcbY={52.5526} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={41.41779626} pcbY={46.9646} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={41.43319628} pcbY={53.8226} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={39.89379626} pcbY={45.9486} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={45.22779626} pcbY={49.2506} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={80.8228} pcbY={68.9356} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={64.6938} pcbY={78.71459999999999} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={64.82079999999999} pcbY={77.0636} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={86.4108} pcbY={53.4416} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={84.1248} pcbY={53.4416} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={89.99879892} pcbY={72.8185996} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={86.15679999999999} pcbY={72.7456} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={42.9006} pcbY={68.7832} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={42.9006} pcbY={67.5132} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={42.9006} pcbY={70.0532} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={41.6306} pcbY={70.0532} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={41.6306} pcbY={68.7832} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={41.6306} pcbY={67.5132} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={40.3606} pcbY={70.0532} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={40.3606} pcbY={68.7832} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={49.580799999999996} pcbY={68.4276} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={49.580799999999996} pcbY={67.1576} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={48.3108} pcbY={68.4276} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={48.3108} pcbY={67.1576} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={48.3108} pcbY={70.96759999999999} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={50.7238} pcbY={55.6006} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={49.580799999999996} pcbY={69.6976} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={48.3108} pcbY={69.6976} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={71.1708} pcbY={55.4736} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={73.2028} pcbY={55.4736} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={72.18679999999999} pcbY={55.4736} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={74.47279999999999} pcbY={55.4736} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={75.4888} pcbY={55.4736} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={76.5048} pcbY={55.4736} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={71.1708} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={73.2028} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={72.18679999999999} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={74.47279999999999} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={75.4888} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={76.5048} pcbY={56.7436} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={56.6928} pcbY={52.9336} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={36.8808} pcbY={65.6336} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={36.8808} pcbY={61.8236} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={36.8808} pcbY={63.093599999999995} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={36.8808} pcbY={64.36359999999999} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={38.1508} pcbY={61.8236} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={38.1508} pcbY={65.6336} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={38.1508} pcbY={63.093599999999995} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={38.1508} pcbY={64.36359999999999} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={43.495137799999995} pcbY={44.90654468} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={34.30579626} pcbY={51.7906} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={44.97379626} pcbY={52.2986} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={40.3606} pcbY={67.5132} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={39.090599999999995} pcbY={68.7832} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={34.0868} pcbY={66.1416} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={32.3088} pcbY={66.1416} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={50.8508} pcbY={68.4276} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={50.8508} pcbY={71.9836} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={33.8328} pcbY={74.01559999999999} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={32.3088} pcbY={74.01559999999999} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={38.36979626} pcbY={43.916599999999995} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={56.6928} pcbY={78.33359999999999} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={56.6928} pcbY={77.3176} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={55.6768} pcbY={77.3176} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={55.6768} pcbY={78.33359999999999} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={75.6158} pcbY={65.6336} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={76.90829932} pcbY={65.63359745999999} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={76.90829932} pcbY={64.36359746} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={76.90829932} pcbY={66.90359745999999} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={75.63829932} pcbY={64.36359746} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={74.36829931999999} pcbY={64.36359746} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={74.36829931999999} pcbY={66.90359745999999} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={74.36829931999999} pcbY={65.63359745999999} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={75.63829932} pcbY={66.90359745999999} outerDiameter={0.5588} holeDiameter={0.254} layers={["top","bottom"]} tented={false} />
          <pcbvia pcbX={35.1028} pcbY={54.3929824} outerDiameter={0.6604} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
          <pcbvia pcbX={52.57179986} pcbY={48.79734207999999} outerDiameter={0.6095999999999999} holeDiameter={0.254} layers={["top","bottom"]} tented={true} />
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

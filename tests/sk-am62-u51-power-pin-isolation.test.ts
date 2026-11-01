import { expect, test } from "bun:test"
import type { CircuitJson, SourcePort } from "circuit-json"
import { getFullConnectivityMapFromCircuitJson } from "circuit-json-to-connectivity-map"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

function getSourcePin({
  circuitJson,
  componentName = "U51",
  pinNumber,
}: {
  circuitJson: CircuitJson
  componentName?: string
  pinNumber: number
}): SourcePort {
  const component = circuitJson.find(
    (element) =>
      element.type === "source_component" && element.name === componentName,
  )
  if (!component || component.type !== "source_component")
    throw new Error(`Missing ${componentName}`)
  const port = circuitJson.find(
    (element): element is SourcePort =>
      element.type === "source_port" &&
      element.source_component_id === component?.source_component_id &&
      (element.pin_number === pinNumber ||
        (element.pin_number === undefined &&
          element.name === String(pinNumber))),
  )
  if (!port) throw new Error(`${componentName} is missing pin ${pinNumber}`)
  return port
}

test("SK-AM62 U51 keeps its two VDDA1P8 test-point networks separate", async () => {
  const sourceCircuitJson = (await Bun.file(
    new URL(
      "./fixtures/ti-evms/sk-am62-u51-power-pins.circuit.json",
      import.meta.url,
    ),
  ).json()) as CircuitJson
  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "SkAm62PhyPowerPins",
  })
  expect(generatedTsx).toMatchInlineSnapshot(`
    "export const SkAm62PhyPowerPins = () => (
      <board pcbX={56.352694} pcbY={86.521544} width="10.072628000000002mm" height="10.03706799999999mm" thickness="1.6mm" layers={10} material="fr4" routingDisabled>
        <chip name="TP30" pcbX={4.036313999999997} pcbY={4.018533999999988} pcbRotation="0deg" layer="top" noSchematicRepresentation pinLabels={{"pin1":["TP","1","pin1","imported_pcb_port_1"]}} manufacturerPartNumber="TP20_SMD" obstructsWithinBounds={false} footprint={<footprint>
                <smtpad portHints={["imported_pcb_port_1","1"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.1016mm" radius="0.2286mm" shape="circle" />
        <silkscreenpath route={[{"x":0.5080000000000027,"y":0},{"x":0.5036539895778986,"y":0.06630730564779697},{"x":0.49069031975484734,"y":0.13148007491209057},{"x":0.469330802515735,"y":0.19440318364146947},{"x":0.43994090512249784,"y":0.2540000000000049},{"x":0.40302349686795225,"y":0.3092508059364434},{"x":0.359210244842771,"y":0.359210244842771},{"x":0.3092508059364292,"y":0.40302349686795935},{"x":0.2539999999999978,"y":0.43994090512249784},{"x":0.19440318364146947,"y":0.4693308025157421},{"x":0.13148007491207636,"y":0.49069031975486155},{"x":0.06630730564778986,"y":0.5036539895778986},{"x":0,"y":0.5080000000000098},{"x":-0.06630730564778986,"y":0.5036539895778986},{"x":-0.13148007491207636,"y":0.49069031975486155},{"x":-0.19440318364146947,"y":0.4693308025157421},{"x":-0.2539999999999978,"y":0.43994090512249784},{"x":-0.3092508059364292,"y":0.40302349686795935},{"x":-0.359210244842771,"y":0.359210244842771},{"x":-0.40302349686795225,"y":0.3092508059364434},{"x":-0.43994090512249784,"y":0.2540000000000049},{"x":-0.469330802515735,"y":0.19440318364146947},{"x":-0.49069031975484734,"y":0.13148007491209057},{"x":-0.5036539895778986,"y":0.06630730564779697},{"x":-0.5080000000000027,"y":0},{"x":-0.5036539895778986,"y":-0.06630730564778275},{"x":-0.49069031975484734,"y":-0.13148007491207636},{"x":-0.469330802515735,"y":-0.19440318364145526},{"x":-0.43994090512249784,"y":-0.2539999999999907},{"x":-0.40302349686795225,"y":-0.3092508059364292},{"x":-0.359210244842771,"y":-0.35921024484275677},{"x":-0.3092508059364292,"y":-0.40302349686794514},{"x":-0.2539999999999978,"y":-0.4399409051224836},{"x":-0.19440318364146947,"y":-0.4693308025157279},{"x":-0.13148007491207636,"y":-0.49069031975484734},{"x":-0.06630730564778986,"y":-0.5036539895778986},{"x":0,"y":-0.5079999999999956},{"x":0.06630730564778986,"y":-0.5036539895778986},{"x":0.13148007491207636,"y":-0.49069031975484734},{"x":0.19440318364146947,"y":-0.4693308025157279},{"x":0.2539999999999978,"y":-0.4399409051224836},{"x":0.3092508059364292,"y":-0.40302349686794514},{"x":0.359210244842771,"y":-0.35921024484275677},{"x":0.40302349686795225,"y":-0.3092508059364292},{"x":0.43994090512249784,"y":-0.2539999999999907},{"x":0.469330802515735,"y":-0.19440318364145526},{"x":0.49069031975484734,"y":-0.13148007491207636},{"x":0.5036539895778986,"y":-0.06630730564778275},{"x":0.5080000000000027,"y":0}]} strokeWidth={0.15239999999999998} />
              </footprint>} />
        <chip name="TP100" pcbX={2.808731999999999} pcbY={-3.939540000000008} pcbRotation="180deg" layer="top" noSchematicRepresentation pinLabels={{"pin1":["TP","1","pin1","imported_pcb_port_2"]}} manufacturerPartNumber="TP20_SMD" obstructsWithinBounds={false} footprint={<footprint>
                <smtpad portHints={["imported_pcb_port_2","1"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.1016mm" radius="0.2286mm" shape="circle" />
        <silkscreenpath route={[{"x":-0.5080000000000027,"y":0},{"x":-0.5036539895778986,"y":-0.06630730564779697},{"x":-0.49069031975484734,"y":-0.13148007491209057},{"x":-0.4693308025157421,"y":-0.19440318364146947},{"x":-0.43994090512249784,"y":-0.2540000000000049},{"x":-0.40302349686795225,"y":-0.3092508059364292},{"x":-0.359210244842771,"y":-0.359210244842771},{"x":-0.3092508059364292,"y":-0.40302349686795935},{"x":-0.2539999999999978,"y":-0.43994090512249784},{"x":-0.19440318364146947,"y":-0.4693308025157421},{"x":-0.13148007491207636,"y":-0.49069031975484734},{"x":-0.06630730564778986,"y":-0.5036539895778986},{"x":0,"y":-0.5080000000000098},{"x":0.06630730564778986,"y":-0.5036539895778986},{"x":0.13148007491207636,"y":-0.49069031975484734},{"x":0.19440318364146947,"y":-0.4693308025157421},{"x":0.2539999999999978,"y":-0.43994090512249784},{"x":0.3092508059364292,"y":-0.40302349686795935},{"x":0.359210244842771,"y":-0.359210244842771},{"x":0.40302349686795225,"y":-0.3092508059364292},{"x":0.43994090512249784,"y":-0.2540000000000049},{"x":0.469330802515735,"y":-0.19440318364146947},{"x":0.49069031975484734,"y":-0.13148007491209057},{"x":0.5036539895778986,"y":-0.06630730564779697},{"x":0.5080000000000027,"y":0},{"x":0.5036539895778986,"y":0.06630730564778275},{"x":0.49069031975484734,"y":0.13148007491207636},{"x":0.469330802515735,"y":0.19440318364146947},{"x":0.43994090512249784,"y":0.2539999999999907},{"x":0.40302349686795225,"y":0.3092508059364292},{"x":0.359210244842771,"y":0.359210244842771},{"x":0.3092508059364292,"y":0.40302349686794514},{"x":0.2539999999999978,"y":0.43994090512249784},{"x":0.19440318364146947,"y":0.4693308025157279},{"x":0.13148007491207636,"y":0.49069031975484734},{"x":0.06630730564778986,"y":0.5036539895778986},{"x":0,"y":0.5079999999999956},{"x":-0.06630730564778986,"y":0.5036539895778986},{"x":-0.13148007491207636,"y":0.49069031975484734},{"x":-0.19440318364146947,"y":0.4693308025157279},{"x":-0.2539999999999978,"y":0.43994090512249784},{"x":-0.3092508059364292,"y":0.40302349686794514},{"x":-0.359210244842771,"y":0.359210244842771},{"x":-0.40302349686795225,"y":0.3092508059364292},{"x":-0.43994090512249784,"y":0.2539999999999907},{"x":-0.4693308025157421,"y":0.19440318364146947},{"x":-0.49069031975484734,"y":0.13148007491207636},{"x":-0.5036539895778986,"y":0.06630730564778275},{"x":-0.5080000000000027,"y":0}]} strokeWidth={0.15239999999999998} />
              </footprint>} />
        <chip name="U51" pcbX={-0.5361940000000018} pcbY={-0.518414000000007} pcbRotation="0deg" layer="bottom" noSchematicRepresentation pinLabels={{"pin29":["GTX_CLK","29","pin29","imported_pcb_port_47"],"pin37":["TX_EN/TX_CTRL","37","pin37","imported_pcb_port_38"],"pin38":["RX_DV/RX_CTRL","38","pin38","imported_pcb_port_36"],"pin11":["TD_M_D","11","pin11","imported_pcb_port_13"],"pin12":["RBIAS","12","pin12","imported_pcb_port_14"],"pin49":["GND","49","pin49","imported_pcb_port_27"],"pin15":["XI","15","pin15","imported_pcb_port_20"],"pin14":["XO","14","pin14","imported_pcb_port_18"],"pin18":["CLK_OUT","18","pin18","imported_pcb_port_26"],"pin28":["TX_D0","28","pin28","imported_pcb_port_48"],"pin27":["TX_D1","27","pin27","imported_pcb_port_49"],"pin26":["TX_D2","26","pin26","imported_pcb_port_50"],"pin25":["TX_D3","25","pin25","imported_pcb_port_51"],"pin33":["RX_D0","33","pin33","imported_pcb_port_43"],"pin34":["RX_D1","34","pin34","imported_pcb_port_42"],"pin35":["RX_D2","35","pin35","imported_pcb_port_41"],"pin36":["RX_D3","36","pin36","imported_pcb_port_40"],"pin32":["RX_CLK","32","pin32","imported_pcb_port_44"],"pin39":["GPIO_0","39","pin39","imported_pcb_port_34"],"pin40":["GPIO_1","40","pin40","imported_pcb_port_32"],"pin16":["MDC","16","pin16","imported_pcb_port_22"],"pin17":["MDIO","17","pin17","imported_pcb_port_24"],"pin44":["INT/PWDN","44","pin44","imported_pcb_port_23"],"pin43":["RESET_N","43","pin43","imported_pcb_port_25"],"pin1":["TD_P_A","1","pin1","imported_pcb_port_3"],"pin2":["TD_M_A","2","pin2","imported_pcb_port_4"],"pin4":["TD_P_B","4","pin4","imported_pcb_port_6"],"pin5":["TD_M_B","5","pin5","imported_pcb_port_7"],"pin7":["TD_P_C","7","pin7","imported_pcb_port_9"],"pin8":["TD_M_C","8","pin8","imported_pcb_port_10"],"pin10":["TD_P_D","10","pin10","imported_pcb_port_12"],"pin47":["LED_0","47","pin47","imported_pcb_port_17"],"pin46":["LED_1","46","pin46","imported_pcb_port_19"],"pin45":["LED_2","45","pin45","imported_pcb_port_21"],"pin20":["JTAG_CLK","20","pin20","imported_pcb_port_31"],"pin22":["JTAG_TMS","22","pin22","imported_pcb_port_35"],"pin23":["JTAG_TDI","23","pin23","imported_pcb_port_37"],"pin21":["JTAG_TDO","21","pin21","imported_pcb_port_33"],"pin19":["19","pin19","imported_pcb_port_29"],"pin30":["30","pin30","imported_pcb_port_46"],"pin41":["41","pin41","imported_pcb_port_30"],"pin13":["13","pin13","imported_pcb_port_16"],"pin48":["48","pin48","imported_pcb_port_15"],"pin3":["3","pin3","imported_pcb_port_5"],"pin9":["9","pin9","imported_pcb_port_11"],"pin6":["6","pin6","imported_pcb_port_8"],"pin24":["24","pin24","imported_pcb_port_39"],"pin31":["31","pin31","imported_pcb_port_45"],"pin42":["42","pin42","imported_pcb_port_28"]}} manufacturerPartNumber="DP83867IRRGZ" obstructsWithinBounds={false} footprint={<footprint>
                <smtpad portHints={["imported_pcb_port_3","1"]} pcbX="-3.50012mm" pcbY="2.750058mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_4","2"]} pcbX="-3.50012mm" pcbY="2.249932mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_5","3"]} pcbX="-3.50012mm" pcbY="1.75006mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_6","4"]} pcbX="-3.50012mm" pcbY="1.249934mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_7","5"]} pcbX="-3.50012mm" pcbY="0.750062mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_8","6"]} pcbX="-3.50012mm" pcbY="0.249936mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_9","7"]} pcbX="-3.50012mm" pcbY="-0.249936mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_10","8"]} pcbX="-3.50012mm" pcbY="-0.750062mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_11","9"]} pcbX="-3.50012mm" pcbY="-1.249934mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_12","10"]} pcbX="-3.50012mm" pcbY="-1.75006mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_13","11"]} pcbX="-3.50012mm" pcbY="-2.249932mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_14","12"]} pcbX="-3.50012mm" pcbY="-2.750058mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_15","48"]} pcbX="-2.750058mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_16","13"]} pcbX="-2.750058mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_17","47"]} pcbX="-2.249932mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_18","14"]} pcbX="-2.249932mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_19","46"]} pcbX="-1.75006mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_20","15"]} pcbX="-1.75006mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_21","45"]} pcbX="-1.249934mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_22","16"]} pcbX="-1.249934mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_23","44"]} pcbX="-0.750062mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_24","17"]} pcbX="-0.750062mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_25","43"]} pcbX="-0.249936mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_26","18"]} pcbX="-0.249936mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_27","49"]} pcbX="0mm" pcbY="0mm" layer="top" solderMaskMargin="0.1016mm" width="5.6388mm" height="5.6388mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_28","42"]} pcbX="0.249936mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_29","19"]} pcbX="0.249936mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_30","41"]} pcbX="0.750062mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_31","20"]} pcbX="0.750062mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_32","40"]} pcbX="1.249934mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_33","21"]} pcbX="1.249934mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_34","39"]} pcbX="1.75006mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_35","22"]} pcbX="1.75006mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_36","38"]} pcbX="2.249932mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_37","23"]} pcbX="2.249932mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_38","37"]} pcbX="2.750058mm" pcbY="3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_39","24"]} pcbX="2.750058mm" pcbY="-3.50012mm" layer="top" solderMaskMargin="0.1016mm" width="0.30479999999999996mm" height="0.8128mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_40","36"]} pcbX="3.50012mm" pcbY="2.750058mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_41","35"]} pcbX="3.50012mm" pcbY="2.249932mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_42","34"]} pcbX="3.50012mm" pcbY="1.75006mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_43","33"]} pcbX="3.50012mm" pcbY="1.249934mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_44","32"]} pcbX="3.50012mm" pcbY="0.750062mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_45","31"]} pcbX="3.50012mm" pcbY="0.249936mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_46","30"]} pcbX="3.50012mm" pcbY="-0.249936mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_47","29"]} pcbX="3.50012mm" pcbY="-0.750062mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_48","28"]} pcbX="3.50012mm" pcbY="-1.249934mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_49","27"]} pcbX="3.50012mm" pcbY="-1.75006mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_50","26"]} pcbX="3.50012mm" pcbY="-2.249932mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <smtpad portHints={["imported_pcb_port_51","25"]} pcbX="3.50012mm" pcbY="-2.750058mm" layer="top" solderMaskMargin="0.1016mm" width="0.8128mm" height="0.30479999999999996mm" shape="rect" />
        <silkscreentext pcbX={2.479547999999994} pcbY={-4.865369999999999} anchorAlignment="bottom_left" fontSize={0.508} font="tscircuit2024" pcbRotation="270deg" mirrored={true} layer="top" text="24" />
        <silkscreentext pcbX={-4.827270000000006} pcbY={-2.494788} anchorAlignment="bottom_left" fontSize={0.508} font="tscircuit2024" pcbRotation="360deg" mirrored={true} layer="top" text="12" />
        <silkscreentext pcbX={-2.539999999999999} pcbY={-4.978400000000008} anchorAlignment="bottom_left" fontSize={0.508} font="tscircuit2024" pcbRotation="270deg" mirrored={true} layer="top" text="13" />
        <silkscreentext pcbX={4.165599999999998} pcbY={-2.9210000000000065} anchorAlignment="bottom_left" fontSize={0.508} font="tscircuit2024" pcbRotation="360deg" mirrored={true} layer="top" text="25" />
        <silkscreentext pcbX={4.0119299999999996} pcbY={2.6614119999999986} anchorAlignment="bottom_left" fontSize={0.508} font="tscircuit2024" pcbRotation="360deg" mirrored={true} layer="top" text="36" />
        <silkscreentext pcbX={1.8275299999999959} pcbY={4.083811999999995} anchorAlignment="bottom_left" fontSize={0.508} font="tscircuit2024" pcbRotation="360deg" mirrored={true} layer="top" text="37" />
        <silkscreentext pcbX={-2.820670000000007} pcbY={4.083811999999995} anchorAlignment="bottom_left" fontSize={0.508} font="tscircuit2024" pcbRotation="360deg" mirrored={true} layer="top" text="48" />
              </footprint>} />
        <net name={"DGND"} connectsTo={[".U51 > .imported_pcb_port_27"]} />
        <net name={"VCC_3V3_SYS"} connectsTo={[".U51 > .imported_pcb_port_29",".U51 > .imported_pcb_port_30",".U51 > .imported_pcb_port_46"]} />
        <net name={"VDD_2V5"} connectsTo={[".U51 > .imported_pcb_port_11",".U51 > .imported_pcb_port_5"]} />
        <net name={"VDD_1V0"} connectsTo={[".U51 > .imported_pcb_port_45",".U51 > .imported_pcb_port_28",".U51 > .imported_pcb_port_39",".U51 > .imported_pcb_port_8"]} />
        <net name={"CPSW_RGMII1_ETH1_CLK"} connectsTo={[".U51 > .imported_pcb_port_20"]} />
        <net name={"CPSW_RGMII1_TD0"} connectsTo={[".U51 > .imported_pcb_port_48"]} />
        <net name={"CPSW_RGMII1_TX_CTL"} connectsTo={[".U51 > .imported_pcb_port_38"]} />
        <net name={"CPSW_RGMII1_TXC"} connectsTo={[".U51 > .imported_pcb_port_47"]} />
        <net name={"N17105648"} connectsTo={[".TP30 > .imported_pcb_port_1",".U51 > .imported_pcb_port_15"]} />
        <net name={"CPSW_RGMII1_MDC"} connectsTo={[".U51 > .imported_pcb_port_22"]} />
        <net name={"CPSW_RGMII1_MDIO"} connectsTo={[".U51 > .imported_pcb_port_24"]} />
        <net name={"CPSW_RGMII1_RD0"} connectsTo={[".U51 > .imported_pcb_port_43"]} />
        <net name={"CPSW_RGMII1_RX_CTL"} connectsTo={[".U51 > .imported_pcb_port_36"]} />
        <net name={"CPSW_RGMII_INTn"} connectsTo={[".U51 > .imported_pcb_port_23"]} />
        <net name={"CPSW_RGMII1_TD1"} connectsTo={[".U51 > .imported_pcb_port_49"]} />
        <net name={"CPSW_RGMII1_TD3"} connectsTo={[".U51 > .imported_pcb_port_51"]} />
        <net name={"CPSW_RGMII1_TD2"} connectsTo={[".U51 > .imported_pcb_port_50"]} />
        <net name={"CPSW_RGMII1_RD3"} connectsTo={[".U51 > .imported_pcb_port_40"]} />
        <net name={"CPSW_RGMII1_RD2"} connectsTo={[".U51 > .imported_pcb_port_41"]} />
        <net name={"CPSW_RGMII1_RD1"} connectsTo={[".U51 > .imported_pcb_port_42"]} />
        <net name={"CPSW_ETH1_LED_ACT"} connectsTo={[".U51 > .imported_pcb_port_21"]} />
        <net name={"CPSW_ETH1_LED_1000"} connectsTo={[".U51 > .imported_pcb_port_19"]} />
        <net name={"CPSW_ETH1_LED0"} connectsTo={[".U51 > .imported_pcb_port_17"]} />
        <net name={"N17167245"} connectsTo={[".U51 > .imported_pcb_port_44"]} />
        <net name={"CPSW_RGMII1_RESETn"} connectsTo={[".U51 > .imported_pcb_port_25"]} />
        <net name={"N18576337"} connectsTo={[".U51 > .imported_pcb_port_34"]} />
        <net name={"N18576340"} connectsTo={[".U51 > .imported_pcb_port_32"]} />
        <net name={"CPSW_RGMII1_ETH1_RBIAS"} connectsTo={[".U51 > .imported_pcb_port_14"]} />
        <net name={"N20329675"} connectsTo={[".U51 > .imported_pcb_port_18"]} />
        <net name={"CPSW_RGMII1_ETH1_CLK_OUT"} connectsTo={[".U51 > .imported_pcb_port_26"]} />
        <net name={"CPSW_ETH1_D0P"} connectsTo={[".U51 > .imported_pcb_port_3"]} />
        <net name={"CPSW_ETH1_D0N"} connectsTo={[".U51 > .imported_pcb_port_4"]} />
        <net name={"CPSW_ETH1_D1P"} connectsTo={[".U51 > .imported_pcb_port_6"]} />
        <net name={"CPSW_ETH1_D1M"} connectsTo={[".U51 > .imported_pcb_port_7"]} />
        <net name={"CPSW_ETH1_D2M"} connectsTo={[".U51 > .imported_pcb_port_10"]} />
        <net name={"CPSW_ETH1_D2P"} connectsTo={[".U51 > .imported_pcb_port_9"]} />
        <net name={"CPSW_ETH1_D3P"} connectsTo={[".U51 > .imported_pcb_port_12"]} />
        <net name={"CPSW_ETH1_D3M"} connectsTo={[".U51 > .imported_pcb_port_13"]} />
        <net name={"N20329347"} connectsTo={[".U51 > .imported_pcb_port_16",".TP100 > .imported_pcb_port_2"]} />
        <trace path={[".U51 > .imported_pcb_port_27","net.DGND"]} />
        <trace path={[".U51 > .imported_pcb_port_29",".U51 > .imported_pcb_port_30",".U51 > .imported_pcb_port_46","net.VCC_3V3_SYS"]} />
        <trace path={[".U51 > .imported_pcb_port_11",".U51 > .imported_pcb_port_5","net.VDD_2V5"]} />
        <trace path={[".U51 > .imported_pcb_port_45",".U51 > .imported_pcb_port_28",".U51 > .imported_pcb_port_39",".U51 > .imported_pcb_port_8","net.VDD_1V0"]} />
        <trace path={[".U51 > .imported_pcb_port_20","net.CPSW_RGMII1_ETH1_CLK"]} />
        <trace path={[".U51 > .imported_pcb_port_48","net.CPSW_RGMII1_TD0"]} />
        <trace path={[".U51 > .imported_pcb_port_38","net.CPSW_RGMII1_TX_CTL"]} />
        <trace path={[".U51 > .imported_pcb_port_47","net.CPSW_RGMII1_TXC"]} />
        <trace path={[".TP30 > .imported_pcb_port_1",".U51 > .imported_pcb_port_15","net.N17105648"]} />
        <trace path={[".U51 > .imported_pcb_port_22","net.CPSW_RGMII1_MDC"]} />
        <trace path={[".U51 > .imported_pcb_port_24","net.CPSW_RGMII1_MDIO"]} />
        <trace path={[".U51 > .imported_pcb_port_43","net.CPSW_RGMII1_RD0"]} />
        <trace path={[".U51 > .imported_pcb_port_36","net.CPSW_RGMII1_RX_CTL"]} />
        <trace path={[".U51 > .imported_pcb_port_23","net.CPSW_RGMII_INTn"]} />
        <trace path={[".U51 > .imported_pcb_port_49","net.CPSW_RGMII1_TD1"]} />
        <trace path={[".U51 > .imported_pcb_port_51","net.CPSW_RGMII1_TD3"]} />
        <trace path={[".U51 > .imported_pcb_port_50","net.CPSW_RGMII1_TD2"]} />
        <trace path={[".U51 > .imported_pcb_port_40","net.CPSW_RGMII1_RD3"]} />
        <trace path={[".U51 > .imported_pcb_port_41","net.CPSW_RGMII1_RD2"]} />
        <trace path={[".U51 > .imported_pcb_port_42","net.CPSW_RGMII1_RD1"]} />
        <trace path={[".U51 > .imported_pcb_port_21","net.CPSW_ETH1_LED_ACT"]} />
        <trace path={[".U51 > .imported_pcb_port_19","net.CPSW_ETH1_LED_1000"]} />
        <trace path={[".U51 > .imported_pcb_port_17","net.CPSW_ETH1_LED0"]} />
        <trace path={[".U51 > .imported_pcb_port_44","net.N17167245"]} />
        <trace path={[".U51 > .imported_pcb_port_25","net.CPSW_RGMII1_RESETn"]} />
        <trace path={[".U51 > .imported_pcb_port_34","net.N18576337"]} />
        <trace path={[".U51 > .imported_pcb_port_32","net.N18576340"]} />
        <trace path={[".U51 > .imported_pcb_port_14","net.CPSW_RGMII1_ETH1_RBIAS"]} />
        <trace path={[".U51 > .imported_pcb_port_18","net.N20329675"]} />
        <trace path={[".U51 > .imported_pcb_port_26","net.CPSW_RGMII1_ETH1_CLK_OUT"]} />
        <trace path={[".U51 > .imported_pcb_port_3","net.CPSW_ETH1_D0P"]} />
        <trace path={[".U51 > .imported_pcb_port_4","net.CPSW_ETH1_D0N"]} />
        <trace path={[".U51 > .imported_pcb_port_6","net.CPSW_ETH1_D1P"]} />
        <trace path={[".U51 > .imported_pcb_port_7","net.CPSW_ETH1_D1M"]} />
        <trace path={[".U51 > .imported_pcb_port_10","net.CPSW_ETH1_D2M"]} />
        <trace path={[".U51 > .imported_pcb_port_9","net.CPSW_ETH1_D2P"]} />
        <trace path={[".U51 > .imported_pcb_port_12","net.CPSW_ETH1_D3P"]} />
        <trace path={[".U51 > .imported_pcb_port_13","net.CPSW_ETH1_D3M"]} />
        <trace path={[".U51 > .imported_pcb_port_16",".TP100 > .imported_pcb_port_2","net.N20329347"]} />
        <chip name="ImportedBoard" noSchematicRepresentation obstructsWithinBounds={false} pcbX={-56.352694} pcbY={-86.521544} footprint={<footprint>
                <pcbtrace route={[{"route_type":"wire","x":59.549029999999995,"y":90.540078,"width":0.14731999999999998,"layer":"top"},{"route_type":"wire","x":60.389008,"y":90.540078,"width":0.14731999999999998,"layer":"top"}]} />
        <pcbtrace route={[{"route_type":"wire","x":59.161426,"y":81.75371,"width":0.14731999999999998,"layer":"top"},{"route_type":"wire","x":59.161426,"y":82.582004,"width":0.14731999999999998,"layer":"top"}]} />
        <pcbtrace route={[{"route_type":"wire","x":58.566558,"y":81.92134999999999,"width":0.14731999999999998,"layer":"bottom"},{"route_type":"wire","x":58.566558,"y":82.50301,"width":0.14731999999999998,"layer":"bottom"}]} />
        <pcbtrace route={[{"route_type":"wire","x":58.566558,"y":81.92134999999999,"width":0.14731999999999998,"layer":"bottom"},{"route_type":"wire","x":58.73419799999999,"y":81.75371,"width":0.14731999999999998,"layer":"bottom"}]} />
        <pcbtrace route={[{"route_type":"wire","x":58.73419799999999,"y":81.75371,"width":0.14731999999999998,"layer":"bottom"},{"route_type":"wire","x":59.161426,"y":81.75371,"width":0.14731999999999998,"layer":"bottom"}]} />
        <pcbtrace route={[{"route_type":"wire","x":59.349386,"y":90.540078,"width":0.14731999999999998,"layer":"bottom"},{"route_type":"wire","x":59.549029999999995,"y":90.540078,"width":0.14731999999999998,"layer":"bottom"}]} />
        <pcbtrace route={[{"route_type":"wire","x":58.566558,"y":89.75725,"width":0.14731999999999998,"layer":"bottom"},{"route_type":"wire","x":59.349386,"y":90.540078,"width":0.14731999999999998,"layer":"bottom"}]} />
        <pcbtrace route={[{"route_type":"wire","x":58.566558,"y":89.50325,"width":0.14731999999999998,"layer":"bottom"},{"route_type":"wire","x":58.566558,"y":89.75725,"width":0.14731999999999998,"layer":"bottom"}]} />
              </footprint>} />
      </board>
    )
    export default SkAm62PhyPowerPins"
  `)
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const comparisonSvg = stackSvgsHorizontally(
    [sourceCircuitJson, renderedCircuitJson].map((circuitJson) => {
      const connectivity = getFullConnectivityMapFromCircuitJson(circuitJson)
      const pin13 = getSourcePin({ circuitJson, pinNumber: 13 })
      const netId = connectivity.getNetConnectedToId(pin13.source_port_id)
      if (!netId) throw new Error("U51 pin 13 has no test-point network")
      return convertCircuitJsonToPcbSvg(circuitJson, {
        width: 700,
        height: 700,
        layer: "top",
        includeVersion: false,
        showSolderMask: false,
        showPinNumbers: true,
        showFabricationNotes: false,
        shouldDrawErrors: false,
        shouldDrawRatsNest: false,
        hiddenLayerOpacity: 0.12,
        xRayElementIds: connectivity.getIdsConnectedToNet(netId),
        viewport: { minX: 50.3, maxX: 62.4, minY: 80.5, maxY: 92.6 },
      })
    }),
    {
      gap: 24,
      rootAttributes: {
        "aria-label":
          "SK-AM62 U51 pin 13 network: reference left, TSX roundtrip right",
        role: "img",
      },
    },
  )
  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")

  for (const circuitJson of [sourceCircuitJson, renderedCircuitJson]) {
    const connectivity = getFullConnectivityMapFromCircuitJson(circuitJson)
    const pin13 = getSourcePin({ circuitJson, pinNumber: 13 })
    const pin48 = getSourcePin({ circuitJson, pinNumber: 48 })
    const tp30 = getSourcePin({
      circuitJson,
      componentName: "TP30",
      pinNumber: 1,
    })
    const tp100 = getSourcePin({
      circuitJson,
      componentName: "TP100",
      pinNumber: 1,
    })
    expect(
      connectivity.areIdsConnected(pin13.source_port_id, tp100.source_port_id),
    ).toBe(true)
    expect(
      connectivity.areIdsConnected(pin48.source_port_id, tp30.source_port_id),
    ).toBe(true)
    expect(
      connectivity.areIdsConnected(pin13.source_port_id, pin48.source_port_id),
    ).toBe(false)
  }
})

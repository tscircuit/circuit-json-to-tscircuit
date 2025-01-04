import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test("test3 kicad mod circuit json example", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test3Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
"import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"
const pinLabels = undefined as const
interface Props extends CommonLayoutProps {
  name: string
}
export const Test3Component = (props: Props) => {
  return (
    <chip
      {...props}
      footprint={<footprint>
        <platedhole  portHints={["1"]} pcbX="-8.89mm" pcbY="7.62mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["2"]} pcbX="-8.89mm" pcbY="5.08mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["2"]} pcbX="-7.62mm" pcbY="5.08mm" outerDiameter="1.4mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["3"]} pcbX="-8.89mm" pcbY="2.54mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["3"]} pcbX="-7.62mm" pcbY="2.54mm" outerDiameter="1.5mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["4"]} pcbX="-8.89mm" pcbY="0mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["4"]} pcbX="-7.62mm" pcbY="0mm" outerDiameter="1.5mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["5"]} pcbX="-8.89mm" pcbY="-2.54mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["5"]} pcbX="-7.62mm" pcbY="-2.54mm" outerDiameter="1.5mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["6"]} pcbX="-8.89mm" pcbY="-5.08mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["6"]} pcbX="-7.62mm" pcbY="-5.08mm" outerDiameter="1.4mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["7"]} pcbX="-8.89mm" pcbY="-7.62mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["7"]} pcbX="-7.62mm" pcbY="-7.62mm" outerDiameter="1.5mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["8"]} pcbX="7.62mm" pcbY="-7.62mm" outerDiameter="1.524mm" holeDiameter="0.889mm" shape="circle" />
<platedhole  portHints={["8"]} pcbX="8.89mm" pcbY="-7.62mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["9"]} pcbX="7.62mm" pcbY="-5.08mm" outerDiameter="1.4mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["9"]} pcbX="8.89mm" pcbY="-5.08mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["10"]} pcbX="7.62mm" pcbY="-2.54mm" outerDiameter="1.5mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["10"]} pcbX="8.89mm" pcbY="-2.54mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["11"]} pcbX="7.62mm" pcbY="0mm" outerDiameter="1.5mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["11"]} pcbX="8.89mm" pcbY="0mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["12"]} pcbX="7.62mm" pcbY="2.54mm" outerDiameter="1.5mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["12"]} pcbX="8.89mm" pcbY="2.54mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["13"]} pcbX="7.62mm" pcbY="5.08mm" outerDiameter="1.4mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["13"]} pcbX="8.89mm" pcbY="5.08mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<platedhole  portHints={["14"]} pcbX="7.62mm" pcbY="7.62mm" outerDiameter="1.5mm" holeDiameter="0.85mm" shape="circle" />
<platedhole  portHints={["14"]} pcbX="8.89mm" pcbY="7.62mm" outerDiameter="1.27mm" holeDiameter="0.7mm" shape="circle" />
<smtpad portHints={["1"]} pcbX="-8.278mm" pcbY="7.62mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["1"]} pcbX="-8.278mm" pcbY="7.62mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["2"]} pcbX="-8.337mm" pcbY="5.08mm" width="1.626mm" height="1.208mm" shape="rect" />
<smtpad portHints={["2"]} pcbX="-8.337mm" pcbY="5.08mm" width="1.626mm" height="1.208mm" shape="rect" />
<smtpad portHints={["3"]} pcbX="-8.278mm" pcbY="2.54mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["3"]} pcbX="-8.278mm" pcbY="2.54mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["4"]} pcbX="-8.278mm" pcbY="0mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["4"]} pcbX="-8.278mm" pcbY="0mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["5"]} pcbX="-8.278mm" pcbY="-2.54mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["5"]} pcbX="-8.278mm" pcbY="-2.54mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["6"]} pcbX="-8.337mm" pcbY="-5.08mm" width="1.626mm" height="1.208mm" shape="rect" />
<smtpad portHints={["6"]} pcbX="-8.337mm" pcbY="-5.08mm" width="1.626mm" height="1.208mm" shape="rect" />
<smtpad portHints={["7"]} pcbX="-8.278mm" pcbY="-7.62mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["7"]} pcbX="-8.278mm" pcbY="-7.62mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["8"]} pcbX="8.278mm" pcbY="-7.62mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["8"]} pcbX="8.278mm" pcbY="-7.62mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["9"]} pcbX="8.337mm" pcbY="-5.08mm" width="1.626mm" height="1.208mm" shape="rect" />
<smtpad portHints={["9"]} pcbX="8.337mm" pcbY="-5.08mm" width="1.626mm" height="1.208mm" shape="rect" />
<smtpad portHints={["10"]} pcbX="8.278mm" pcbY="-2.54mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["10"]} pcbX="8.278mm" pcbY="-2.54mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["11"]} pcbX="8.278mm" pcbY="0mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["11"]} pcbX="8.278mm" pcbY="0mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["12"]} pcbX="8.278mm" pcbY="2.54mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["12"]} pcbX="8.278mm" pcbY="2.54mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["13"]} pcbX="8.337mm" pcbY="5.08mm" width="1.626mm" height="1.208mm" shape="rect" />
<smtpad portHints={["13"]} pcbX="8.337mm" pcbY="5.08mm" width="1.626mm" height="1.208mm" shape="rect" />
<smtpad portHints={["14"]} pcbX="8.278mm" pcbY="7.62mm" width="1.626mm" height="1.325mm" shape="rect" />
<smtpad portHints={["14"]} pcbX="8.278mm" pcbY="7.62mm" width="1.626mm" height="1.325mm" shape="rect" />
<silkscreenpath route={[{"x":-8.89,"y":-8.509},{"x":-8.89,"y":8.636}]} />
<silkscreenpath route={[{"x":-6.985,"y":-10.414},{"x":6.985,"y":-10.414}]} />
<silkscreenpath route={[{"x":6.985,"y":10.541},{"x":-6.985,"y":10.541}]} />
<silkscreenpath route={[{"x":8.89,"y":-8.509},{"x":8.89,"y":8.636}]} />
<silkscreenpath route={[{"x":-8.89,"y":8.636},{"x":-8.634777964987212,"y":9.588499698293818},{"x":-7.937499698293819,"y":10.285777964987211},{"x":-6.985,"y":10.541}]} />
<silkscreenpath route={[{"x":-6.985,"y":-10.414},{"x":-7.937499698293818,"y":-10.158777964987209},{"x":-8.63477796498721,"y":-9.461499698293817},{"x":-8.89,"y":-8.509}]} />
<silkscreenpath route={[{"x":6.985,"y":10.541},{"x":7.937499698293818,"y":10.285777964987211},{"x":8.63477796498721,"y":9.588499698293818},{"x":8.889999999999999,"y":8.636}]} />
<silkscreenpath route={[{"x":8.89,"y":-8.509},{"x":8.63477796498721,"y":-9.461499698293817},{"x":7.937499698293818,"y":-10.158777964987209},{"x":6.985,"y":-10.413999999999998}]} />
      </footprint>}
    />
  )
}
export const useTest3Component = createUseComponent(Test3Component, pinLabels)"
`)
})

const circuitJson: any = [
  {
    type: "source_component",
    source_component_id: "generic_0",
    supplier_part_numbers: {},
  },
  {
    type: "schematic_component",
    schematic_component_id: "schematic_generic_component_0",
    source_component_id: "generic_0",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    size: {
      width: 0,
      height: 0,
    },
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    width: 19.05,
    height: 16.752000000000002,
  },
  {
    type: "pcb_plated_hole",
    x: -8.89,
    y: 7.62,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["1"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_0",
    shape: "rect",
    x: -8.278,
    y: 7.62,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["1"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_1",
    shape: "rect",
    x: -8.278,
    y: 7.62,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["1"],
  },
  {
    type: "pcb_plated_hole",
    x: -8.89,
    y: 5.08,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["2"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_2",
    shape: "rect",
    x: -8.337,
    y: 5.08,
    width: 1.626,
    height: 1.208,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["2"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_3",
    shape: "rect",
    x: -8.337,
    y: 5.08,
    width: 1.626,
    height: 1.208,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["2"],
  },
  {
    type: "pcb_plated_hole",
    x: -7.62,
    y: 5.08,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.4,
    port_hints: ["2"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: -8.89,
    y: 2.54,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["3"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_4",
    shape: "rect",
    x: -8.278,
    y: 2.54,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["3"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_5",
    shape: "rect",
    x: -8.278,
    y: 2.54,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["3"],
  },
  {
    type: "pcb_plated_hole",
    x: -7.62,
    y: 2.54,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.5,
    port_hints: ["3"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: -8.89,
    y: 0,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["4"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_6",
    shape: "rect",
    x: -8.278,
    y: 0,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["4"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_7",
    shape: "rect",
    x: -8.278,
    y: 0,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["4"],
  },
  {
    type: "pcb_plated_hole",
    x: -7.62,
    y: 0,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.5,
    port_hints: ["4"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: -8.89,
    y: -2.54,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["5"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_8",
    shape: "rect",
    x: -8.278,
    y: -2.54,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["5"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_9",
    shape: "rect",
    x: -8.278,
    y: -2.54,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["5"],
  },
  {
    type: "pcb_plated_hole",
    x: -7.62,
    y: -2.54,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.5,
    port_hints: ["5"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: -8.89,
    y: -5.08,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["6"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_10",
    shape: "rect",
    x: -8.337,
    y: -5.08,
    width: 1.626,
    height: 1.208,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["6"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_11",
    shape: "rect",
    x: -8.337,
    y: -5.08,
    width: 1.626,
    height: 1.208,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["6"],
  },
  {
    type: "pcb_plated_hole",
    x: -7.62,
    y: -5.08,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.4,
    port_hints: ["6"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: -8.89,
    y: -7.62,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["7"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_12",
    shape: "rect",
    x: -8.278,
    y: -7.62,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["7"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_13",
    shape: "rect",
    x: -8.278,
    y: -7.62,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["7"],
  },
  {
    type: "pcb_plated_hole",
    x: -7.62,
    y: -7.62,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.5,
    port_hints: ["7"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: 7.62,
    y: -7.62,
    layers: ["top", "bottom"],
    hole_diameter: 0.889,
    shape: "circle",
    outer_diameter: 1.524,
    port_hints: ["8"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_14",
    shape: "rect",
    x: 8.278,
    y: -7.62,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["8"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_15",
    shape: "rect",
    x: 8.278,
    y: -7.62,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["8"],
  },
  {
    type: "pcb_plated_hole",
    x: 8.89,
    y: -7.62,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["8"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: 7.62,
    y: -5.08,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.4,
    port_hints: ["9"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_16",
    shape: "rect",
    x: 8.337,
    y: -5.08,
    width: 1.626,
    height: 1.208,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["9"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_17",
    shape: "rect",
    x: 8.337,
    y: -5.08,
    width: 1.626,
    height: 1.208,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["9"],
  },
  {
    type: "pcb_plated_hole",
    x: 8.89,
    y: -5.08,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["9"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: 7.62,
    y: -2.54,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.5,
    port_hints: ["10"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_18",
    shape: "rect",
    x: 8.278,
    y: -2.54,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["10"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_19",
    shape: "rect",
    x: 8.278,
    y: -2.54,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["10"],
  },
  {
    type: "pcb_plated_hole",
    x: 8.89,
    y: -2.54,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["10"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: 7.62,
    y: 0,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.5,
    port_hints: ["11"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_20",
    shape: "rect",
    x: 8.278,
    y: 0,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["11"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_21",
    shape: "rect",
    x: 8.278,
    y: 0,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["11"],
  },
  {
    type: "pcb_plated_hole",
    x: 8.89,
    y: 0,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["11"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: 7.62,
    y: 2.54,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.5,
    port_hints: ["12"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_22",
    shape: "rect",
    x: 8.278,
    y: 2.54,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["12"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_23",
    shape: "rect",
    x: 8.278,
    y: 2.54,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["12"],
  },
  {
    type: "pcb_plated_hole",
    x: 8.89,
    y: 2.54,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["12"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: 7.62,
    y: 5.08,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.4,
    port_hints: ["13"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_24",
    shape: "rect",
    x: 8.337,
    y: 5.08,
    width: 1.626,
    height: 1.208,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["13"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_25",
    shape: "rect",
    x: 8.337,
    y: 5.08,
    width: 1.626,
    height: 1.208,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["13"],
  },
  {
    type: "pcb_plated_hole",
    x: 8.89,
    y: 5.08,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["13"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_plated_hole",
    x: 7.62,
    y: 7.62,
    layers: ["top", "bottom"],
    hole_diameter: 0.85,
    shape: "circle",
    outer_diameter: 1.5,
    port_hints: ["14"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_26",
    shape: "rect",
    x: 8.278,
    y: 7.62,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["14"],
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_27",
    shape: "rect",
    x: 8.278,
    y: 7.62,
    width: 1.626,
    height: 1.325,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["14"],
  },
  {
    type: "pcb_plated_hole",
    x: 8.89,
    y: 7.62,
    layers: ["top", "bottom"],
    hole_diameter: 0.7,
    shape: "circle",
    outer_diameter: 1.27,
    port_hints: ["14"],
    pcb_component_id: "pcb_generic_component_0",
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_0",
    route: [
      {
        x: -8.89,
        y: -8.509,
      },
      {
        x: -8.89,
        y: 8.636,
      },
    ],
    stroke_width: 0.1,
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_1",
    route: [
      {
        x: -6.985,
        y: -10.414,
      },
      {
        x: 6.985,
        y: -10.414,
      },
    ],
    stroke_width: 0.1,
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_2",
    route: [
      {
        x: 6.985,
        y: 10.541,
      },
      {
        x: -6.985,
        y: 10.541,
      },
    ],
    stroke_width: 0.1,
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_3",
    route: [
      {
        x: 8.89,
        y: -8.509,
      },
      {
        x: 8.89,
        y: 8.636,
      },
    ],
    stroke_width: 0.1,
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_4",
    route: [
      {
        x: -8.89,
        y: 8.636,
      },
      {
        x: -8.634777964987212,
        y: 9.588499698293818,
      },
      {
        x: -7.937499698293819,
        y: 10.285777964987211,
      },
      {
        x: -6.985,
        y: 10.541,
      },
    ],
    stroke_width: 0.1,
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_5",
    route: [
      {
        x: -6.985,
        y: -10.414,
      },
      {
        x: -7.937499698293818,
        y: -10.158777964987209,
      },
      {
        x: -8.63477796498721,
        y: -9.461499698293817,
      },
      {
        x: -8.89,
        y: -8.509,
      },
    ],
    stroke_width: 0.1,
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_6",
    route: [
      {
        x: 6.985,
        y: 10.541,
      },
      {
        x: 7.937499698293818,
        y: 10.285777964987211,
      },
      {
        x: 8.63477796498721,
        y: 9.588499698293818,
      },
      {
        x: 8.889999999999999,
        y: 8.636,
      },
    ],
    stroke_width: 0.1,
  },
  {
    type: "pcb_silkscreen_path",
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    pcb_silkscreen_path_id: "pcb_silkscreen_path_7",
    route: [
      {
        x: 8.89,
        y: -8.509,
      },
      {
        x: 8.63477796498721,
        y: -9.461499698293817,
      },
      {
        x: 7.937499698293818,
        y: -10.158777964987209,
      },
      {
        x: 6.985,
        y: -10.413999999999998,
      },
    ],
    stroke_width: 0.1,
  },
  {
    type: "pcb_fabrication_note_text",
    layer: "top",
    font: "tscircuit2024",
    font_size: 1.27,
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: {
      x: -8,
      y: 11.5,
    },
    anchor_alignment: "center",
    text: "REF**",
    port_hints: [],
  },
  {
    type: "pcb_fabrication_note_text",
    layer: "top",
    font: "tscircuit2024",
    font_size: 1.27,
    pcb_component_id: "pcb_generic_component_0",
    anchor_position: {
      x: 0,
      y: 0,
    },
    anchor_alignment: "center",
    text: "XIAO-Add-On",
    port_hints: [],
  },
]

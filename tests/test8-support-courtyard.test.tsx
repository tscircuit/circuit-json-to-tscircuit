import { expect, test } from "bun:test"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("test8 support courtyard elements", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test8Component",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Test8Component = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={[\"1\"]} pcbX=\"-0.5mm\" pcbY=\"0mm\" width=\"0.6mm\" height=\"0.9mm\" shape=\"rect\" />
    <courtyardoutline outline={[{\"x\":-1.8,\"y\":-1.4},{\"x\":1.8,\"y\":-1.4},{\"x\":1.8,\"y\":1.4},{\"x\":-1.8,\"y\":1.4}]} strokeWidth={0.12} isClosed={true} isStrokeDashed={true} color=\"#ff00ff\" />
    <courtyardrect pcbX={0} pcbY={0} width={4} height={3} strokeWidth={0.1} isFilled={false} hasStroke={true} isStrokeDashed={true} color=\"#00ffff\" />
          </footprint>}
        {...props}
      />
    )"
  `)
})

test("test8 pcb svg snapshot includes courtyard geometry", async () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test8Component",
  })

  const renderedCircuitJson = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width=\"20mm\" height=\"20mm\">
    <Test8Component />
  </board>,
)
  `)) as any[]

  const courtyardElements = renderedCircuitJson.filter((elm) =>
    ["pcb_courtyard_outline", "pcb_courtyard_rect"].includes(elm.type),
  )

  expect(courtyardElements.length).toBeGreaterThan(0)

  const pcbSvg = convertCircuitJsonToPcbSvg([
    ...renderedCircuitJson,
    ...projectCourtyardToFabricationNotes(courtyardElements),
  ])

  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "courtyard-pcb")
})

const projectCourtyardToFabricationNotes = (courtyardElements: any[]) => {
  const projected: any[] = []

  for (const elm of courtyardElements) {
    if (elm.type === "pcb_courtyard_outline") {
      const route = [...(elm.outline ?? [])]
      if (elm.is_closed && route.length > 1) {
        const firstPoint = route[0]
        const lastPoint = route[route.length - 1]
        if (firstPoint.x !== lastPoint.x || firstPoint.y !== lastPoint.y) {
          route.push(firstPoint)
        }
      }

      projected.push({
        type: "pcb_fabrication_note_path",
        pcb_fabrication_note_path_id: `projected_fnp_${elm.pcb_courtyard_outline_id}`,
        pcb_component_id: elm.pcb_component_id,
        layer: elm.layer,
        route,
        stroke_width: elm.stroke_width ?? 0.1,
        color: elm.color,
      })
    }

    if (elm.type === "pcb_courtyard_rect") {
      projected.push({
        type: "pcb_fabrication_note_rect",
        pcb_fabrication_note_rect_id: `projected_fnr_${elm.pcb_courtyard_rect_id}`,
        pcb_component_id: elm.pcb_component_id,
        layer: elm.layer,
        center: elm.center,
        width: elm.width,
        height: elm.height,
        stroke_width: elm.stroke_width ?? 0.1,
        is_filled: elm.is_filled ?? false,
        has_stroke: elm.has_stroke ?? true,
        is_stroke_dashed: elm.is_stroke_dashed,
        color: elm.color,
      })
    }
  }

  return projected
}

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
    width: 2,
    height: 1,
  },
  {
    type: "pcb_smtpad",
    pcb_smtpad_id: "pcb_smtpad_0",
    shape: "rect",
    x: -0.5,
    y: 0,
    width: 0.6,
    height: 0.9,
    layer: "top",
    pcb_component_id: "pcb_generic_component_0",
    port_hints: ["1"],
  },
  {
    type: "pcb_courtyard_outline",
    pcb_courtyard_outline_id: "pcb_courtyard_outline_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    outline: [
      { x: -1.8, y: -1.4 },
      { x: 1.8, y: -1.4 },
      { x: 1.8, y: 1.4 },
      { x: -1.8, y: 1.4 },
    ],
    stroke_width: 0.12,
    is_closed: true,
    is_stroke_dashed: true,
    color: "#ff00ff",
  },
  {
    type: "pcb_courtyard_rect",
    pcb_courtyard_rect_id: "pcb_courtyard_rect_0",
    pcb_component_id: "pcb_generic_component_0",
    center: { x: 0, y: 0 },
    width: 4,
    height: 3,
    layer: "top",
    stroke_width: 0.1,
    is_filled: false,
    has_stroke: true,
    is_stroke_dashed: true,
    color: "#00ffff",
  },
]

import { test, expect } from "bun:test"
import { convertCircuitJsonToTscircuit } from "lib"

test("convert pcb notes and cutouts", () => {
  const tscircuit = convertCircuitJsonToTscircuit(circuitJson as any, {
    componentName: "NotesAndCutouts",
  })

  expect(tscircuit).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const NotesAndCutouts = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <pcbnoterect pcbX="1mm" pcbY="2mm" width="3mm" height="4mm" strokeWidth="0.15mm" isFilled={true} hasStroke={false} isStrokeDashed={true} color="#FFAA00" />
    <pcbnotepath route={[{"x":0,"y":0},{"x":1,"y":0.5}]} strokeWidth="0.2mm" color="#00FF00" />
    <pcbnoteline x1="-1mm" y1="-1mm" x2="2mm" y2="2mm" strokeWidth="0.25mm" color="#112233" isDashed={false} />
    <pcbcutout shape="rect" pcbX="5mm" pcbY="6mm" width="7mm" height="8mm" pcbRotation={90} />
    <pcbcutout shape="circle" pcbX="1.5mm" pcbY="-2mm" radius="0.75mm" />
    <pcbcutout shape="polygon" points={[{"x":0,"y":0},{"x":1,"y":0},{"x":0,"y":1}]} />
          </footprint>}
        {...props}
      />
    )"
  `)
})

const circuitJson = [
  {
    type: "pcb_note_rect",
    pcb_note_rect_id: "rect_1",
    center: { x: 1, y: 2 },
    width: 3,
    height: 4,
    stroke_width: 0.15,
    is_filled: true,
    has_stroke: false,
    is_stroke_dashed: true,
    color: "#FFAA00",
  },
  {
    type: "pcb_note_path",
    pcb_note_path_id: "path_1",
    route: [
      { x: 0, y: 0 },
      { x: 1, y: 0.5 },
    ],
    stroke_width: 0.2,
    color: "#00FF00",
  },
  {
    type: "pcb_note_line",
    pcb_note_line_id: "line_1",
    x1: -1,
    y1: -1,
    x2: 2,
    y2: 2,
    stroke_width: 0.25,
    color: "#112233",
    is_dashed: false,
  },
  {
    type: "pcb_cutout",
    pcb_cutout_id: "cutout_rect",
    shape: "rect",
    center: { x: 5, y: 6 },
    width: 7,
    height: 8,
    rotation: 90,
  },
  {
    type: "pcb_cutout",
    pcb_cutout_id: "cutout_circle",
    shape: "circle",
    center: { x: 1.5, y: -2 },
    radius: 0.75,
  },
  {
    type: "pcb_cutout",
    pcb_cutout_id: "cutout_polygon",
    shape: "polygon",
    points: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ],
  },
] as const

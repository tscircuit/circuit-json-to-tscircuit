import { expect, test } from "bun:test"
import type { AnyCircuitElement, PcbCopperPour } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const sourceCircuitJson: AnyCircuitElement[] = [
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_source",
    center: { x: 10, y: 20 },
    width: 20,
    height: 12,
    thickness: 1.6,
    material: "fr4",
    num_layers: 4,
  },
  {
    type: "pcb_copper_pour",
    pcb_copper_pour_id: "pcb_copper_pour_rect",
    shape: "rect",
    center: { x: 6, y: 20 },
    width: 3,
    height: 2,
    rotation: 30,
    layer: "top",
    source_net_id: "source_net_rect",
    covered_with_solder_mask: false,
  },
  {
    type: "pcb_copper_pour",
    pcb_copper_pour_id: "pcb_copper_pour_polygon",
    shape: "polygon",
    points: [
      { x: 9, y: 18 },
      { x: 11, y: 18 },
      { x: 10, y: 21 },
    ],
    layer: "bottom",
    source_net_id: "source_net_polygon",
    covered_with_solder_mask: true,
  },
  {
    type: "pcb_copper_pour",
    pcb_copper_pour_id: "pcb_copper_pour_brep",
    shape: "brep",
    brep_shape: {
      outer_ring: {
        vertices: [
          { x: 13, y: 18 },
          { x: 17, y: 18 },
          { x: 17, y: 22 },
          { x: 13, y: 22 },
        ],
      },
      inner_rings: [
        {
          vertices: [
            { x: 14, y: 19 },
            { x: 14, y: 21 },
            { x: 16, y: 21 },
            { x: 16, y: 19 },
          ],
        },
      ],
    },
    layer: "inner1",
    source_net_id: "source_net_brep",
    covered_with_solder_mask: true,
  },
]

test("preserves precomputed PCB copper pours", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const sourcePcbCopperPours = sourceCircuitJson.filter(
    (element): element is PcbCopperPour => element.type === "pcb_copper_pour",
  )
  const renderedPcbCopperPours = renderedCircuitJson.filter(
    (element): element is PcbCopperPour => element.type === "pcb_copper_pour",
  )

  expect(generatedTscircuit).toContain("<pcbcopperpour")
  expect(
    renderedPcbCopperPours.map((pcbCopperPour) => ({
      coveredWithSolderMask: pcbCopperPour.covered_with_solder_mask,
      layer: pcbCopperPour.layer,
      shape: pcbCopperPour.shape,
      sourceNetId: pcbCopperPour.source_net_id,
    })),
  ).toEqual(
    sourcePcbCopperPours.map((pcbCopperPour) => ({
      coveredWithSolderMask: pcbCopperPour.covered_with_solder_mask,
      layer: pcbCopperPour.layer,
      shape: pcbCopperPour.shape,
      sourceNetId: pcbCopperPour.source_net_id,
    })),
  )

  const sourceRect = sourcePcbCopperPours.find(
    (pcbCopperPour) => pcbCopperPour.shape === "rect",
  )
  const renderedRect = renderedPcbCopperPours.find(
    (pcbCopperPour) => pcbCopperPour.shape === "rect",
  )
  if (!sourceRect || sourceRect.shape !== "rect") {
    throw new Error("Expected source rectangle copper pour")
  }
  if (!renderedRect || renderedRect.shape !== "rect") {
    throw new Error("Expected rendered rectangle copper pour")
  }
  expect(renderedRect.center.x).toBeCloseTo(sourceRect.center.x, 9)
  expect(renderedRect.center.y).toBeCloseTo(sourceRect.center.y, 9)
  expect(renderedRect.width).toBe(sourceRect.width)
  expect(renderedRect.height).toBe(sourceRect.height)
  expect(renderedRect.rotation ?? 0).toBeCloseTo(sourceRect.rotation ?? 0, 9)

  const sourcePolygon = sourcePcbCopperPours.find(
    (pcbCopperPour) => pcbCopperPour.shape === "polygon",
  )
  const renderedPolygon = renderedPcbCopperPours.find(
    (pcbCopperPour) => pcbCopperPour.shape === "polygon",
  )
  if (!sourcePolygon || sourcePolygon.shape !== "polygon") {
    throw new Error("Expected source polygon copper pour")
  }
  if (!renderedPolygon || renderedPolygon.shape !== "polygon") {
    throw new Error("Expected rendered polygon copper pour")
  }
  expect(renderedPolygon.points).toEqual(sourcePolygon.points)

  const sourceBrep = sourcePcbCopperPours.find(
    (pcbCopperPour) => pcbCopperPour.shape === "brep",
  )
  const renderedBrep = renderedPcbCopperPours.find(
    (pcbCopperPour) => pcbCopperPour.shape === "brep",
  )
  if (!sourceBrep || sourceBrep.shape !== "brep") {
    throw new Error("Expected source BRep copper pour")
  }
  if (!renderedBrep || renderedBrep.shape !== "brep") {
    throw new Error("Expected rendered BRep copper pour")
  }
  expect(renderedBrep.brep_shape).toEqual(sourceBrep.brep_shape)

  const pcbComparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    { gap: 24, normalizeSize: true, targetSize: 600 },
  )
  await expect(pcbComparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

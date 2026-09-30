import { expect, test } from "bun:test"
import type { AnyCircuitElement, PcbComponent } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>

const sourceTscircuit = `
export default () => (
  <board pcbX={10} pcbY={20} width="20mm" height="10mm">
    <chip
      name="U1"
      pcbX={-3}
      pcbY={0}
      pinLabels={{ pin1: ["INPUT"], pin2: ["GND"] }}
      manufacturerPartNumber="FIRST-PART"
      footprint={<footprint>
        <smtpad portHints={["1", "INPUT"]} pcbX="-1mm" width="1mm" height="1mm" shape="rect" />
        <smtpad portHints={["2", "GND"]} pcbX="1mm" width="1mm" height="1mm" shape="rect" />
      </footprint>}
    />
    <chip
      name="U2"
      pcbX={3}
      pcbY={0}
      pcbRotation="90deg"
      pinLabels={{ pin1: ["INPUT"], pin2: ["GND"] }}
      manufacturerPartNumber="SECOND-PART"
      footprint={<footprint>
        <smtpad portHints={["1", "INPUT"]} pcbX="-1mm" width="1mm" height="1mm" shape="rect" />
        <smtpad portHints={["2", "GND"]} pcbX="1mm" width="1mm" height="1mm" shape="rect" />
        <silkscreentext text="U2" pcbY="2mm" pcbRotation="0deg" fontSize="0.8mm" />
        <coppertext text="45deg" pcbY="-2mm" pcbRotation="45deg" fontSize="0.6mm" />
      </footprint>}
    />
  </board>
)
`

test("preserves PCB component boundaries and placements", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const renderedSourceComponents = renderedCircuitJson.filter(
    (element): element is SourceComponent =>
      element.type === "source_component",
  )
  const renderedPcbComponents = renderedCircuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )
  const sourcePcbComponents = sourceCircuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )
  const renderedPads = renderedCircuitJson.filter(
    (element) => element.type === "pcb_smtpad",
  )
  const sourcePadPositions = sourceCircuitJson
    .filter((element) => element.type === "pcb_smtpad" && "x" in element)
    .map((pad) => ({ x: pad.x, y: pad.y }))

  expect(generatedTscircuit).toContain('<chip name="U1"')
  expect(generatedTscircuit).toContain('<chip name="U2"')
  expect(renderedSourceComponents.map((component) => component.name)).toEqual([
    "U1",
    "U2",
  ])
  expect(
    renderedSourceComponents.map(
      (component) => component.manufacturer_part_number,
    ),
  ).toEqual(["FIRST-PART", "SECOND-PART"])
  expect(renderedPcbComponents.map((component) => component.center)).toEqual(
    sourcePcbComponents.map((component) => component.center),
  )
  expect(renderedPcbComponents.map((component) => component.rotation)).toEqual(
    sourcePcbComponents.map((component) => component.rotation),
  )
  expect(
    renderedPads
      .filter((pad) => "x" in pad)
      .map((pad) => ({ x: pad.x, y: pad.y })),
  ).toEqual(sourcePadPositions)
  expect(new Set(renderedPads.map((pad) => pad.pcb_component_id)).size).toBe(2)
  expect(
    renderedCircuitJson.filter(
      (element) => element.type === "schematic_component",
    ),
  ).toHaveLength(0)
  expect(
    renderedCircuitJson
      .filter((element) => element.type === "pcb_silkscreen_text")
      .map((silkscreenText) => ({
        anchor_position: silkscreenText.anchor_position,
        ccw_rotation: silkscreenText.ccw_rotation,
      })),
  ).toEqual(
    sourceCircuitJson
      .filter((element) => element.type === "pcb_silkscreen_text")
      .map((silkscreenText) => ({
        anchor_position: silkscreenText.anchor_position,
        ccw_rotation: silkscreenText.ccw_rotation,
      })),
  )
  expect(
    renderedCircuitJson
      .filter((element) => element.type === "pcb_copper_text")
      .map((copperText) => ({
        anchor_position: copperText.anchor_position,
        ccw_rotation: copperText.ccw_rotation,
      })),
  ).toEqual(
    sourceCircuitJson
      .filter((element) => element.type === "pcb_copper_text")
      .map((copperText) => ({
        anchor_position: copperText.anchor_position,
        ccw_rotation: copperText.ccw_rotation,
      })),
  )
  expect(
    renderedCircuitJson.some(
      (element) => element.type === "pcb_component_outside_board_error",
    ),
  ).toBeFalse()

  const pcbComparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    { gap: 24, normalizeSize: true, targetSize: 600 },
  )
  await expect(pcbComparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

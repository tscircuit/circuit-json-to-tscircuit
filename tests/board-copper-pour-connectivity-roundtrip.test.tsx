import { beforeAll, expect, test } from "bun:test"
import type { CircuitJson } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import { createComparisonSvg } from "./fixtures/create-ti-evm-roundtrip"

let sourceCircuitJson: CircuitJson
let convertedCircuitJson: CircuitJson
let disconnectedCircuitJson: CircuitJson

beforeAll(async () => {
  sourceCircuitJson = await createCopperPourBoard("GND")
  disconnectedCircuitJson = await createCopperPourBoard("SIGNAL")
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "CopperPourRoundtrip",
  })
  convertedCircuitJson = await runTscircuitCode(generatedTscircuit)
})

test("compares a connected plated pad before and after board conversion", async () => {
  expect(isPadConnectedToPour(sourceCircuitJson)).toBe(true)
  expect(isPadConnectedToPour(disconnectedCircuitJson)).toBe(false)
  expect(getCopperPour(sourceCircuitJson).brep_shape.inner_rings).toHaveLength(
    0,
  )
  expect(
    getCopperPour(disconnectedCircuitJson).brep_shape.inner_rings,
  ).toHaveLength(1)

  const sourcePad = sourceCircuitJson.find(
    (element) => element.type === "pcb_plated_hole",
  )
  if (sourcePad?.shape !== "circular_hole_with_rect_pad") {
    throw new Error("Expected a circular hole with a rectangular pad")
  }
  expect(sourcePad).toMatchObject({
    shape: "circular_hole_with_rect_pad",
    x: 0,
    y: 0,
    hole_diameter: 1,
    rect_pad_width: 2,
    rect_pad_height: 2,
    rect_border_radius: 0.5,
  })
  expect(
    convertedCircuitJson.find((element) => element.type === "pcb_plated_hole"),
  ).toMatchObject({
    shape: "circular_hole_with_rect_pad",
    x: sourcePad.x,
    y: sourcePad.y,
    hole_diameter: sourcePad.hole_diameter,
    rect_pad_width: sourcePad.rect_pad_width,
    rect_pad_height: sourcePad.rect_pad_height,
    rect_border_radius: sourcePad.rect_border_radius,
  })

  const comparisonSvg = createComparisonSvg({
    fixtureName: "connected-plated-pad",
    kind: "PCB",
    sourceSvg: convertCircuitJsonToPcbSvg(sourceCircuitJson, {
      layer: "top",
      includeVersion: false,
    }),
    renderedSvg: convertCircuitJsonToPcbSvg(convertedCircuitJson, {
      layer: "top",
      includeVersion: false,
    }),
  })
  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path, "comparison")
})

// Remove .failing when board conversion preserves the pad-to-net connection.
test.failing(
  "preserves the plated pad connection to its copper pour net",
  () => {
    expect(isPadConnectedToPour(convertedCircuitJson)).toBe(true)
  },
)

test.failing("preserves copper around a plated pad on the same net", () => {
  expect(
    getCopperPour(convertedCircuitJson).brep_shape.inner_rings,
  ).toHaveLength(getCopperPour(sourceCircuitJson).brep_shape.inner_rings.length)
})

const createCopperPourBoard = (padNetName: "GND" | "SIGNAL") =>
  runTscircuitCode(`export default () => (
    <board width={10} height={8} routingDisabled>
      <net name="GND" />
      <net name="SIGNAL" />
      <chip name="J1" connections={{ pin1: "net.${padNetName}" }}
        footprint={<footprint>
          <platedhole portHints={["pin1"]} pcbX={0} pcbY={0}
            shape="circular_hole_with_rect_pad" holeDiameter={1}
            rectPadWidth={2} rectPadHeight={2} rectBorderRadius={0.5} />
        </footprint>} />
      <copperpour connectsTo="net.GND" layer="top"
        outline={[{x:-4,y:-3},{x:4,y:-3},{x:4,y:3},{x:-4,y:3}]}
        padMargin={0} traceMargin={0} clearance={0} boardEdgeMargin={0}
        cutoutMargin={0} useThermalReliefs={false} coveredWithSolderMask={false} />
    </board>
  )`)

const getCopperPour = (circuitJson: CircuitJson) => {
  const pours = circuitJson.filter(
    (element) => element.type === "pcb_copper_pour",
  )
  if (pours.length !== 1 || pours[0]!.shape !== "brep") {
    throw new Error("Expected one BRep copper pour")
  }
  return pours[0]!
}

const isPadConnectedToPour = (circuitJson: CircuitJson): boolean => {
  const pad = circuitJson.find((element) => element.type === "pcb_plated_hole")
  const port = circuitJson.find(
    (element) =>
      element.type === "pcb_port" && element.pcb_port_id === pad?.pcb_port_id,
  )
  const pour = getCopperPour(circuitJson)
  if (!pad || port?.type !== "pcb_port") {
    throw new Error("Expected a plated pad with a PCB port")
  }
  return circuitJson.some(
    (element) =>
      element.type === "source_trace" &&
      element.connected_source_port_ids.includes(port.source_port_id) &&
      element.connected_source_net_ids.includes(pour.source_net_id!),
  )
}

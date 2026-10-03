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

test("preserves copper around a plated pad on the same net", () => {
  expect(
    getCopperPour(convertedCircuitJson).brep_shape.inner_rings,
  ).toHaveLength(getCopperPour(sourceCircuitJson).brep_shape.inner_rings.length)
})

test("preserves copper around same-net and unrelated pads", async () => {
  const source = await runTscircuitCode(`export default () => (
    <board width={10} height={8} routingDisabled>
      <net name="GND" />
      <net name="SIGNAL" />
      <chip name="J1" pcbX={-2} pcbY={0} connections={{ pin1: "net.GND" }} footprint={<footprint>
        <smtpad portHints={["pin1"]}
          shape="rect" width={1} height={1} layer="top" />
      </footprint>} />
      <chip name="J2" pcbX={2} pcbY={0} connections={{ pin1: "net.SIGNAL" }} footprint={<footprint>
        <smtpad portHints={["pin1"]}
          shape="rect" width={1} height={1} layer="top" />
      </footprint>} />
      <copperpour connectsTo="net.GND" layer="top"
        outline={[{x:-4,y:-3},{x:4,y:-3},{x:4,y:3},{x:-4,y:3}]}
        padMargin={0} traceMargin={0} clearance={0} boardEdgeMargin={0}
        cutoutMargin={0} useThermalReliefs={false} coveredWithSolderMask={false} />
    </board>
  )`)
  const original = structuredClone(source)
  const converted = await runTscircuitCode(
    convertCircuitJsonToTscircuit(source, { componentName: "SeparatePins" }),
  )
  expect(source).toEqual(original)
  expect(
    converted.filter((element) => element.type === "pcb_smtpad"),
  ).toHaveLength(2)
  expect(
    converted.filter((element) => element.type === "pcb_trace"),
  ).toHaveLength(0)
  expect(getCopperPour(converted).brep_shape.inner_rings).toEqual(
    getCopperPour(source).brep_shape.inner_rings,
  )
  expect(
    converted.filter((element) => element.type.endsWith("_error")),
  ).toEqual([])
})

test("preserves copper on both layers around an imported via", async () => {
  for (const viaSelector of ["net.GND", ".J1 > .pin1"]) {
    const source = await runTscircuitCode(`export default () => (
    <board width={10} height={8} routingDisabled>
      <net name="GND" />
      <chip name="J1" pcbX={-2} connections={{ pin1: "net.GND" }} footprint={<footprint>
        <smtpad portHints={["pin1"]} shape="rect" width={1} height={1} layer="top" />
      </footprint>} />
      <via pcbX={0} pcbY={0} fromLayer="top" toLayer="bottom"
        holeDiameter={0.3} outerDiameter={0.6} connectsTo={${JSON.stringify(viaSelector)}} />
      {(["top", "bottom"] as const).map(layer => (
        <copperpour key={layer} connectsTo="net.GND" layer={layer}
          outline={[{x:-4,y:-3},{x:4,y:-3},{x:4,y:3},{x:-4,y:3}]}
          padMargin={0} traceMargin={0} clearance={0} boardEdgeMargin={0}
          cutoutMargin={0} useThermalReliefs={false} coveredWithSolderMask={false} />
      ))}
    </board>
  )`)
    const converted = await runTscircuitCode(
      convertCircuitJsonToTscircuit(source, { componentName: "ViaCopperPour" }),
    )
    expect(
      source.filter((element) => element.type === "pcb_copper_pour"),
    ).toHaveLength(2)
    expect(
      converted.filter((element) => element.type === "pcb_copper_pour"),
    ).toHaveLength(2)
    for (const layer of ["top", "bottom"]) {
      const sourcePour = getCopperPour(
        source.filter(
          (element) =>
            element.type === "pcb_copper_pour" && element.layer === layer,
        ),
      )
      const convertedPour = getCopperPour(
        converted.filter(
          (element) =>
            element.type === "pcb_copper_pour" && element.layer === layer,
        ),
      )
      expect(convertedPour.brep_shape).toEqual(sourcePour.brep_shape)
    }
  }
})

test("preserves non-identifier copper pour net names", async () => {
  for (const name of ["HU+", "HU-", "2V", "V3.3", "ENABLE#", "SS/ATRK"]) {
    const source = sourceCircuitJson.map((element) =>
      element.type === "source_net" && element.name === "GND"
        ? { ...element, name }
        : element,
    )
    const converted = await runTscircuitCode(
      convertCircuitJsonToTscircuit(source, {
        componentName: "UnsupportedNetName",
      }),
    )
    expect(
      converted.filter(
        (element) =>
          element.type === "source_trace_not_connected_error" ||
          element.type === "source_runtime_error",
      ),
    ).toEqual([])
    expect(
      converted.filter((element) => element.type === "source_net"),
    ).toContainEqual(expect.objectContaining({ name }))
  }
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

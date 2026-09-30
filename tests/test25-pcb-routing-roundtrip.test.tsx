import { expect, test } from "bun:test"
import type {
  AnyCircuitElement,
  PcbTrace,
  PcbTraceRoutePoint,
  PcbVia,
} from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
export default () => (
  <board pcbX={10} pcbY={20} width="20mm" height="12mm" layers={4}>
    <chip
      name="U1"
      pcbX={-2}
      pcbY={1}
      pcbRotation="90deg"
      noSchematicRepresentation
      footprint={<footprint>
        <smtpad portHints={["1"]} pcbX="-1mm" width="1mm" height="1mm" shape="rect" />
        <smtpad portHints={["2"]} pcbX="1mm" width="1mm" height="1mm" shape="rect" />
        <pcbtrace
          source_trace_id="source_trace_imported"
          route={[
            { route_type: "wire", x: -1, y: 0, width: 0.25, layer: "top" },
            { route_type: "via", x: 0, y: 0, from_layer: "top", to_layer: "bottom" },
            { route_type: "wire", x: 1, y: 0, width: 0.35, layer: "bottom" },
          ]}
        />
        <via
          pcbX={0}
          pcbY={0}
          outerDiameter="0.8mm"
          holeDiameter="0.4mm"
          layers={["top", "inner1", "bottom"]}
        />
      </footprint>}
    />
  </board>
)
`

const expectRouteGeometryToMatch = ({
  renderedRoute,
  sourceRoute,
}: {
  renderedRoute: PcbTraceRoutePoint[]
  sourceRoute: PcbTraceRoutePoint[]
}) => {
  expect(renderedRoute).toHaveLength(sourceRoute.length)

  for (const [routePointIndex, sourcePoint] of sourceRoute.entries()) {
    const renderedPoint = renderedRoute[routePointIndex]

    expect(renderedPoint?.route_type).toBe(sourcePoint.route_type)
    if (
      !renderedPoint ||
      sourcePoint.route_type === "through_pad" ||
      renderedPoint.route_type === "through_pad"
    ) {
      throw new Error("Expected a wire or via route point")
    }

    expect(renderedPoint.x).toBeCloseTo(sourcePoint.x, 9)
    expect(renderedPoint.y).toBeCloseTo(sourcePoint.y, 9)

    if (
      sourcePoint.route_type === "wire" &&
      renderedPoint.route_type === "wire"
    ) {
      expect(renderedPoint.layer).toBe(sourcePoint.layer)
      expect(renderedPoint.width).toBe(sourcePoint.width)
    }
    if (
      sourcePoint.route_type === "via" &&
      renderedPoint.route_type === "via"
    ) {
      expect(renderedPoint.from_layer).toBe(sourcePoint.from_layer)
      expect(renderedPoint.to_layer).toBe(sourcePoint.to_layer)
    }
  }
}

test("preserves explicit PCB trace routes and vias", async () => {
  const sourceCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "ImportedBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as AnyCircuitElement[]
  const sourcePcbTraces = sourceCircuitJson.filter(
    (element): element is PcbTrace => element.type === "pcb_trace",
  )
  const renderedPcbTraces = renderedCircuitJson.filter(
    (element): element is PcbTrace => element.type === "pcb_trace",
  )
  const sourcePcbVias = sourceCircuitJson.filter(
    (element): element is PcbVia => element.type === "pcb_via",
  )
  const renderedPcbVias = renderedCircuitJson.filter(
    (element): element is PcbVia => element.type === "pcb_via",
  )

  expect(generatedTscircuit).toContain("<pcbtrace")
  expect(generatedTscircuit).toContain("<via")
  expect(renderedPcbTraces).toHaveLength(sourcePcbTraces.length)
  for (const [pcbTraceIndex, sourcePcbTrace] of sourcePcbTraces.entries()) {
    expectRouteGeometryToMatch({
      renderedRoute: renderedPcbTraces[pcbTraceIndex]?.route ?? [],
      sourceRoute: sourcePcbTrace.route,
    })
  }
  expect(renderedPcbTraces.map((pcbTrace) => pcbTrace.source_trace_id)).toEqual(
    sourcePcbTraces.map((pcbTrace) => pcbTrace.source_trace_id),
  )
  expect(
    renderedPcbVias.map((pcbVia) => ({
      fromLayer: pcbVia.from_layer,
      holeDiameter: pcbVia.hole_diameter,
      layers: pcbVia.layers.toSorted(),
      outerDiameter: pcbVia.outer_diameter,
      toLayer: pcbVia.to_layer,
      x: pcbVia.x,
      y: pcbVia.y,
    })),
  ).toEqual(
    sourcePcbVias.map((pcbVia) => ({
      fromLayer: pcbVia.from_layer,
      holeDiameter: pcbVia.hole_diameter,
      layers: pcbVia.layers.toSorted(),
      outerDiameter: pcbVia.outer_diameter,
      toLayer: pcbVia.to_layer,
      x: pcbVia.x,
      y: pcbVia.y,
    })),
  )

  const pcbComparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(sourceCircuitJson),
      convertCircuitJsonToPcbSvg(renderedCircuitJson),
    ],
    { gap: 24, normalizeSize: true, targetSize: 600 },
  )
  await expect(pcbComparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

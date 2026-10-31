import { expect, test } from "bun:test"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import { expectJscadCadModel3dSnapshots } from "./fixtures/expect-jscad-cad-model-3d-snapshots"

test("preserves BeaglePlay J13 CAD placement when pad bounds differ from its footprint origin", async () => {
  // J13, its native pads and its ComponentBody come from BEAGLEPLAYV020_220915.
  const sourceCircuitJson: CircuitJson = await Bun.file(
    new URL("./fixtures/beagleplay-j13-origin.circuit.json", import.meta.url),
  ).json()
  const sourceCadComponent = sourceCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )!
  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "BeaglePlayUsb",
  })
  expect(generatedTsx).toMatchInlineSnapshot(`
    "export const BeaglePlayUsb = () => (
      <board pcbX={-308.7624} pcbY={238.2139} width="24mm" height="20mm" thickness="1.6mm" layers={8} material="fr4">
        <chip name="J13" pcbX={0} pcbY={0} pcbRotation="90deg" layer="top" noSchematicRepresentation cadModel={{ jscad: {"type":"colorize","color":[0.5019607843137255,0.5019607843137255,0.5019607843137255],"shape":{"type":"extrudeLinear","options":{"height":3.81},"shape":{"type":"fromPointsGeom2","points":[[-2.7939999999999827,-6.921500000000009],[2.7940000000000396,-6.921500000000009],[2.7940000000000396,6.921500000000009],[-2.7939999999999827,6.921500000000009]]}}}, positionOffset: { x: -5.684341886080802e-14, y: -2.1574760000000026, z: 0 }, rotationOffset: { x: 0, y: 0, z: -90 }, modelOriginPosition: { x: 0, y: 0, z: 0 }, modelUnitToMmScale: 1, modelBoardNormalDirection: "z+" }} obstructsWithinBounds={false} footprint={<footprint>
                <platedhole portHints={["6"]} pcbX="4.032504mm" pcbY="3.080004mm" outerDiameter="2.199894mm" holeDiameter="1.400048mm" shape="circle" />
        <platedhole portHints={["4"]} pcbX="6.0325mm" pcbY="2.100072mm" outerDiameter="1.199896mm" holeDiameter="0.649986mm" shape="circle" />
        <platedhole portHints={["3"]} pcbX="6.0325mm" pcbY="0.700024mm" outerDiameter="1.199896mm" holeDiameter="0.649986mm" shape="circle" />
        <platedhole portHints={["7"]} pcbX="-1.567434mm" pcbY="0mm" outerHeight="1.500124mm" outerWidth="2.9718mm" holeHeight="1.500124mm" holeWidth="2.9718mm" height="1.500124mm" shape="pill" pcbRotation="270deg" />
        <platedhole portHints={["2"]} pcbX="6.0325mm" pcbY="-0.700024mm" outerDiameter="1.199896mm" holeDiameter="0.649986mm" shape="circle" />
        <platedhole portHints={["1"]} pcbX="6.0325mm" pcbY="-2.100072mm" outerDiameter="1.199896mm" holeDiameter="0.649986mm" shape="circle" />
        <platedhole portHints={["5"]} pcbX="4.032504mm" pcbY="-3.080004mm" outerDiameter="2.199894mm" holeDiameter="1.400048mm" shape="circle" />
              </footprint>} />
      </board>
    )
    export default BeaglePlayUsb"
  `)
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const renderedCadComponent = renderedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )

  await expectJscadCadModel3dSnapshots({
    sourceCircuitJson,
    generatedCircuitJson: renderedCircuitJson,
    testPath: import.meta.path,
  })

  for (const axis of ["x", "y", "z"] as const) {
    expect(renderedCadComponent?.position[axis]).toBeCloseTo(
      sourceCadComponent.position[axis],
      8,
    )
  }
  expect(renderedCadComponent?.rotation).toEqual(sourceCadComponent.rotation)
  expect(renderedCadComponent?.model_jscad).toEqual(
    sourceCadComponent.model_jscad,
  )
})

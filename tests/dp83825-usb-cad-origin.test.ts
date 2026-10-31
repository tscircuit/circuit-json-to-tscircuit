import { expect, test } from "bun:test"
import { gunzipSync } from "node:zlib"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"
import { expectTiEvm3dSnapshot } from "./fixtures/expect-ti-evm-3d-snapshot"

test("preserves the DP83825EVM Molex USB connector on its mounting pads", async () => {
  const sourceCircuitJson: CircuitJson = JSON.parse(
    gunzipSync(
      await Bun.file(
        new URL(
          "./fixtures/ti-evms/dp83825-usb-cad-origin.circuit.json.gz",
          import.meta.url,
        ),
      ).arrayBuffer(),
    ).toString("utf8"),
  )
  const sourceCadComponent = sourceCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )!
  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "Dp83825Usb",
  })
  expect(generatedTsx).toMatchInlineSnapshot(`
    "export const Dp83825Usb = () => (
      <board pcbX={20.605798895} pcbY={73.2536} width="18mm" height="16mm" thickness="1.6mm" layers={4} material="fr4">
        <chip name="J1" pcbX={-2.7749988949999995} pcbY={-1.4210854715202004e-14} pcbRotation="270deg" layer="top" noSchematicRepresentation cadModel={<cadmodel modelUrl={"/cad-models/dp83825evm/8.step"} positionOffset={{ x: 10.087523639999997, y: -0.00008128000001761393, z: 2.25000058 }} rotationOffset={{ x: 270, y: 90, z: -270 }} modelUnitToMmScale={1} modelBoardNormalDirection={"z+"} modelOriginPosition={{ x: 0, y: 0, z: 0 }} showAsTranslucentModel={false} />} obstructsWithinBounds={false} footprint={<footprint>
                <platedhole portHints={["7"]} pcbX="4.17500054mm" pcbY="1.44999964mm" holeShape="pill" padShape="rect" holeWidth="1.29999994mm" holeHeight="0.5999987999999999mm" rectPadWidth="0.8000009399999999mm" rectPadHeight="2.00000108mm" rectBorderRadius="0.40000046999999994mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="pill_hole_with_rect_pad" />
        <platedhole portHints={["10"]} pcbX="-4.17500054mm" pcbY="1.44999964mm" holeShape="pill" padShape="rect" holeWidth="1.29999994mm" holeHeight="0.5999987999999999mm" rectPadWidth="0.8000009399999999mm" rectPadHeight="2.00000108mm" rectBorderRadius="0.40000046999999994mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="pill_hole_with_rect_pad" />
        <platedhole portHints={["6"]} pcbX="2.22499936mm" pcbY="4.44999872mm" holeShape="pill" padShape="rect" holeWidth="0.8500008399999999mm" holeHeight="0.70000114mm" rectPadWidth="1.05000044mm" rectPadHeight="1.29999994mm" rectBorderRadius="0.52500022mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="pill_hole_with_rect_pad" />
        <platedhole portHints={["11"]} pcbX="-2.22499936mm" pcbY="4.44999872mm" holeShape="pill" padShape="rect" holeWidth="0.8500008399999999mm" holeHeight="0.70000114mm" rectPadWidth="1.05000044mm" rectPadHeight="1.29999994mm" rectBorderRadius="0.52500022mm" holeOffsetX="0mm" holeOffsetY="0mm" pcbRotation="270deg" shape="pill_hole_with_rect_pad" />
        <smtpad portHints={["3"]} pcbX="0mm" pcbY="4.12500064mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.39999919999999994mm" height="1.34999984mm" ccwRotation={0} shape="rotated_rect" />
        <smtpad portHints={["2"]} pcbX="-0.65000124mm" pcbY="4.12500064mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.39999919999999994mm" height="1.34999984mm" ccwRotation={0} shape="rotated_rect" />
        <smtpad portHints={["8"]} pcbX="1.15000024mm" pcbY="1.44999964mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.05399996819999999mm" width="1.79999894mm" height="2.00000108mm" ccwRotation={180} shape="rotated_rect" />
        <smtpad portHints={["9"]} pcbX="-1.15000024mm" pcbY="1.44999964mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.05399996819999999mm" width="1.79999894mm" height="2.00000108mm" ccwRotation={180} shape="rotated_rect" />
        <smtpad portHints={["5"]} pcbX="1.29999994mm" pcbY="4.12500064mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.39999919999999994mm" height="1.34999984mm" ccwRotation={0} shape="rotated_rect" />
        <smtpad portHints={["4"]} pcbX="0.65000124mm" pcbY="4.12500064mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.39999919999999994mm" height="1.34999984mm" ccwRotation={0} shape="rotated_rect" />
        <smtpad portHints={["1"]} pcbX="-1.29999994mm" pcbY="4.12500064mm" layer="top" solderMaskMargin="0.04999989999999999mm" cornerRadius="0.04999989999999999mm" width="0.39999919999999994mm" height="1.34999984mm" ccwRotation={0} shape="rotated_rect" />
        <silkscreenline x1={3.750015359999992} y1={2.84699964} x2={3.750015359999992} y2={4.29999394} strokeWidth={0.127} />
        <silkscreenline x1={3.750015359999992} y1={4.29999394} x2={3.200003759999987} y2={4.29999394} strokeWidth={0.127} />
        <silkscreenline x1={-3.7499950400000017} y1={2.84699964} x2={-3.7499950400000017} y2={4.29999394} strokeWidth={0.127} />
        <silkscreenline x1={-3.199983440000011} y1={4.29999394} x2={-3.7499950400000017} y2={4.29999394} strokeWidth={0.127} />
        <fabricationnotetext pcbX={-2.2644176200000032} pcbY={1.4476831600000004} anchorAlignment="center" text="J1" font="tscircuit2024" fontSize={1.016} color="#ec4899" pcbRotation="0deg" />
        <silkscreentext pcbX={-5.334000000000003} pcbY={1.0159999999999982} anchorAlignment="bottom_left" fontSize={0.762} font="tscircuit2024" pcbRotation="360deg" mirrored={false} layer="top" text="J1" />
              </footprint>} />
      </board>
    )
    export default Dp83825Usb"
  `)
  const generatedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson

  for (const [snapshotName, circuitJson] of [
    ["source", sourceCircuitJson],
    ["generated", generatedCircuitJson],
  ] as const) {
    await expectTiEvm3dSnapshot({
      cameraReferenceCircuitJson: sourceCircuitJson,
      circuitJson,
      fixtureName: "dp83825evm",
      snapshotName,
      testPath: import.meta.path,
    })
  }

  const generatedCadComponent = generatedCircuitJson.find(
    (element): element is CadComponent => element.type === "cad_component",
  )
  for (const axis of ["x", "y", "z"] as const) {
    expect(generatedCadComponent?.position[axis]).toBeCloseTo(
      sourceCadComponent.position[axis],
      8,
    )
  }
  expect(generatedCadComponent).toMatchObject({
    rotation: sourceCadComponent.rotation,
    model_step_url: sourceCadComponent.model_step_url,
    model_origin_position: sourceCadComponent.model_origin_position,
  })
}, 60_000)

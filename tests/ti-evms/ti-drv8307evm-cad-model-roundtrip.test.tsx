import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test(
  "TI DRV8307EVM STEP model survives the Circuit JSON to TSX round trip",
  async () => {
    const compressedFixture = await readFile(
      join(import.meta.dir, "../fixtures/ti-evms/drv8307evm.circuit.json.gz"),
    )
    const sourceCircuitJson = JSON.parse(
      gunzipSync(compressedFixture).toString("utf8"),
    ) as CircuitJson
    sourceCircuitJson.push({
      type: "cad_component",
      cad_component_id: "cad_component_altium_139",
      pcb_component_id: "pcb_component_altium_8",
      source_component_id: "source_component_altium_8",
      position: { x: 35.88981646, y: 51.9350244, z: 0.81524 },
      rotation: { x: 0, y: 0, z: 180 },
      layer: "top",
      model_step_url: "/cad-models/drv8307evm/0.step",
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
      model_origin_alignment: "unknown",
      model_object_fit: "contain_within_bounds",
      anchor_alignment: "center",
    })

    const generatedTscircuit = convertCircuitJsonToTscircuit(
      sourceCircuitJson,
      { componentName: "Drv8307Evm" },
    )
    const d8OpeningLine = generatedTscircuit
      .split("\n")
      .find((line) => line.includes('<chip name="D8"'))
    expect(d8OpeningLine).toMatchInlineSnapshot(
      `"    <chip name="D8" pcbX={-25.552684479999996} pcbY={-24.52870634} pcbRotation="90deg" layer="top" cadModel={<cadmodel modelUrl="/cad-models/drv8307evm/0.step" stepUrl="/cad-models/drv8307evm/0.step" positionOffset={{ x: -0.00009906000000370341, y: 0.00007874000000640535, z: 0.01523999999999992 }} rotationOffset={{ x: 0, y: 0, z: 90 }} modelUnitToMmScale={1} modelBoardNormalDirection="z+" />} symbolName="diode_up" schX={-4.080860084797093} schY={-8.011811023622048} schDisplayValue="10V" pinLabels={{"pin1":["1","pin1","K"],"pin2":["2","pin2","A"]}} obstructsWithinBounds={false} footprint={<footprint>"`,
    )

    const renderedCircuitJson = (await runTscircuitCode(
      generatedTscircuit,
    )) as CircuitJson
    const renderedCadComponent = renderedCircuitJson.find(
      (element): element is CadComponent =>
        element.type === "cad_component" &&
        element.model_step_url === "/cad-models/drv8307evm/0.step",
    )
    expect(renderedCadComponent).toMatchObject({
      rotation: { x: 0, y: 0, z: 180 },
      model_step_url: "/cad-models/drv8307evm/0.step",
      model_unit_to_mm_scale_factor: 1,
      model_board_normal_direction: "z+",
    })
    expect(renderedCadComponent?.position.x).toBeCloseTo(35.88981646, 5)
    expect(renderedCadComponent?.position.y).toBeCloseTo(51.9350244, 5)
    expect(renderedCadComponent?.position.z).toBeCloseTo(0.81524, 5)
  },
  { timeout: 120_000 },
)

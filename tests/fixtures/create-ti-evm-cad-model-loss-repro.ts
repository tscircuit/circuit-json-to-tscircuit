import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CadComponent, CircuitJson, PcbComponent } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

interface TiEvmCadModelCounts {
  generatedTsxContainsCadModel: boolean
  misplacedLinkedCadModelCount: number
  renderedLinkedCadModelCount: number
  sourceLinkedCadModelCount: number
}

const hasLinkedCadModel = (cadComponent: CadComponent): boolean =>
  Boolean(
    cadComponent.model_3mf_url ??
      cadComponent.model_glb_url ??
      cadComponent.model_gltf_url ??
      cadComponent.model_obj_url ??
      cadComponent.model_step_url ??
      cadComponent.model_stl_url ??
      cadComponent.model_wrl_url,
  )

const countLinkedCadModels = (circuitJson: CircuitJson): number =>
  circuitJson.filter(
    (element): element is CadComponent =>
      element.type === "cad_component" && hasLinkedCadModel(element),
  ).length

const normalizeDegrees = (degrees: number): number =>
  ((degrees % 360) + 360) % 360

const roundCoordinate = (coordinate: number): number =>
  Math.round(coordinate * 1_000_000) / 1_000_000

const getPlacementSignatures = (circuitJson: CircuitJson): string[] => {
  const pcbComponents = circuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )
  return circuitJson
    .filter(
      (element): element is CadComponent =>
        element.type === "cad_component" && hasLinkedCadModel(element),
    )
    .map((cadComponent) => {
      const rotation = cadComponent.rotation ?? { x: 0, y: 0, z: 0 }
      return JSON.stringify({
        layer:
          cadComponent.layer ??
          pcbComponents.find(
            (pcbComponent) =>
              pcbComponent.pcb_component_id === cadComponent.pcb_component_id,
          )?.layer ??
          "top",
        position: {
          x: roundCoordinate(cadComponent.position.x),
          y: roundCoordinate(cadComponent.position.y),
          z: roundCoordinate(cadComponent.position.z),
        },
        rotation: {
          x: normalizeDegrees(rotation.x),
          y: normalizeDegrees(rotation.y),
          z: normalizeDegrees(rotation.z),
        },
        url:
          cadComponent.model_3mf_url ??
          cadComponent.model_glb_url ??
          cadComponent.model_gltf_url ??
          cadComponent.model_obj_url ??
          cadComponent.model_step_url ??
          cadComponent.model_stl_url ??
          cadComponent.model_wrl_url,
      })
    })
    .sort()
}

export const createTiEvmCadModelLossRepro = async ({
  componentName,
  fixtureName,
}: {
  componentName: string
  fixtureName: string
}): Promise<TiEvmCadModelCounts> => {
  const compressedFixture = await readFile(
    join(import.meta.dir, "ti-evms", `${fixtureName}-cad.circuit.json.gz`),
  )
  const sourceCircuitJson = JSON.parse(
    gunzipSync(compressedFixture).toString("utf8"),
  ) as CircuitJson
  const generatedTsx = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName,
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTsx,
  )) as CircuitJson
  const sourcePlacementSignatures = getPlacementSignatures(sourceCircuitJson)
  const renderedPlacementSignatures =
    getPlacementSignatures(renderedCircuitJson)

  return {
    generatedTsxContainsCadModel: generatedTsx.includes("<cadmodel"),
    misplacedLinkedCadModelCount: sourcePlacementSignatures.filter(
      (signature, index) => signature !== renderedPlacementSignatures[index],
    ).length,
    renderedLinkedCadModelCount: countLinkedCadModels(renderedCircuitJson),
    sourceLinkedCadModelCount: countLinkedCadModels(sourceCircuitJson),
  }
}

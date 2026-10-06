import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CadComponent, CircuitJson } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

interface TiEvmCadModelCounts {
  generatedTsxContainsCadModel: boolean
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

  return {
    generatedTsxContainsCadModel: generatedTsx.includes("<cadmodel"),
    renderedLinkedCadModelCount: countLinkedCadModels(renderedCircuitJson),
    sourceLinkedCadModelCount: countLinkedCadModels(sourceCircuitJson),
  }
}

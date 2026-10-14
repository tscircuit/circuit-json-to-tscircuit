import type {
  AnyCircuitElement,
  CadComponent,
  PcbComponent,
} from "circuit-json"
import { DEFAULT_PCB_CHIP_NAME } from "../board-conversion-context"
import { getCadModelGroups } from "../generate-board-cad-models-tsx/get-cad-model-groups"

type CadComponentId = CadComponent["cad_component_id"]
type PcbComponentId = PcbComponent["pcb_component_id"]
type BoardChildRuntimeName = string
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>

export type PcbComponentRuntimeNameByPcbComponentId = Map<
  PcbComponentId,
  BoardChildRuntimeName
>
export type StandaloneCadModelRuntimeNameByCadComponentId = Map<
  CadComponentId,
  BoardChildRuntimeName
>

interface BoardChildRuntimeNames {
  pcbChipName: BoardChildRuntimeName
  pcbComponentRuntimeNameByPcbComponentId: PcbComponentRuntimeNameByPcbComponentId
  standaloneCadModelRuntimeNameByCadComponentId: StandaloneCadModelRuntimeNameByCadComponentId
}

const getUnusedRuntimeName = ({
  preferredRuntimeName,
  usedRuntimeNames,
}: {
  preferredRuntimeName: BoardChildRuntimeName
  usedRuntimeNames: Set<BoardChildRuntimeName>
}): BoardChildRuntimeName => {
  if (!usedRuntimeNames.has(preferredRuntimeName)) return preferredRuntimeName

  let duplicateNumber = 2
  while (usedRuntimeNames.has(`${preferredRuntimeName}_${duplicateNumber}`)) {
    duplicateNumber += 1
  }
  return `${preferredRuntimeName}_${duplicateNumber}`
}

export const getBoardChildRuntimeNames = (
  circuitJson: AnyCircuitElement[],
): BoardChildRuntimeNames => {
  const sourceComponentBySourceComponentId = new Map<
    SourceComponentId,
    SourceComponent
  >()
  for (const element of circuitJson) {
    if (
      element.type === "source_component" &&
      !sourceComponentBySourceComponentId.has(element.source_component_id)
    ) {
      sourceComponentBySourceComponentId.set(
        element.source_component_id,
        element,
      )
    }
  }

  const usedRuntimeNames = new Set<BoardChildRuntimeName>()
  const pcbComponentRuntimeNameByPcbComponentId = new Map<
    PcbComponentId,
    BoardChildRuntimeName
  >()
  const pcbComponents = circuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )
  for (const [pcbComponentIndex, pcbComponent] of pcbComponents.entries()) {
    const sourceComponent = pcbComponent.source_component_id
      ? sourceComponentBySourceComponentId.get(pcbComponent.source_component_id)
      : undefined
    const preferredRuntimeName =
      sourceComponent?.name ?? `imported_component_${pcbComponentIndex + 1}`
    const runtimeName = getUnusedRuntimeName({
      preferredRuntimeName,
      usedRuntimeNames,
    })
    usedRuntimeNames.add(runtimeName)
    pcbComponentRuntimeNameByPcbComponentId.set(
      pcbComponent.pcb_component_id,
      runtimeName,
    )
  }

  const pcbChipName = getUnusedRuntimeName({
    preferredRuntimeName: DEFAULT_PCB_CHIP_NAME,
    usedRuntimeNames,
  })
  usedRuntimeNames.add(pcbChipName)

  const standaloneCadModelRuntimeNameByCadComponentId = new Map<
    CadComponentId,
    BoardChildRuntimeName
  >()
  const standaloneCadModelGroups = getCadModelGroups(circuitJson).filter(
    (cadModelGroup) =>
      cadModelGroup.cadComponents.every(
        (cadComponent) => cadComponent.pcb_component_id === undefined,
      ),
  )
  for (const [
    groupIndex,
    cadModelGroup,
  ] of standaloneCadModelGroups.entries()) {
    const firstCadComponent = cadModelGroup.cadComponents[0]
    if (!firstCadComponent) continue

    const runtimeName = getUnusedRuntimeName({
      preferredRuntimeName: `ImportedCadModel${groupIndex + 1}`,
      usedRuntimeNames,
    })
    usedRuntimeNames.add(runtimeName)
    standaloneCadModelRuntimeNameByCadComponentId.set(
      firstCadComponent.cad_component_id,
      runtimeName,
    )
  }

  return {
    pcbChipName,
    pcbComponentRuntimeNameByPcbComponentId,
    standaloneCadModelRuntimeNameByCadComponentId,
  }
}

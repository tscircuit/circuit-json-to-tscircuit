import type { AnyCircuitElement, PcbComponent } from "circuit-json"

type PcbComponentId = PcbComponent["pcb_component_id"]
type PcbComponentRuntimeName = string
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>

export type PcbComponentRuntimeNameByPcbComponentId = Map<
  PcbComponentId,
  PcbComponentRuntimeName
>

const getUnusedRuntimeName = ({
  preferredRuntimeName,
  usedRuntimeNames,
}: {
  preferredRuntimeName: PcbComponentRuntimeName
  usedRuntimeNames: Set<PcbComponentRuntimeName>
}): PcbComponentRuntimeName => {
  if (!usedRuntimeNames.has(preferredRuntimeName)) return preferredRuntimeName

  let duplicateNumber = 2
  while (usedRuntimeNames.has(`${preferredRuntimeName}_${duplicateNumber}`)) {
    duplicateNumber += 1
  }
  return `${preferredRuntimeName}_${duplicateNumber}`
}

export const getPcbComponentRuntimeNameByPcbComponentId = (
  circuitJson: AnyCircuitElement[],
): PcbComponentRuntimeNameByPcbComponentId => {
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

  const usedRuntimeNames = new Set<PcbComponentRuntimeName>()
  const pcbComponentRuntimeNameByPcbComponentId = new Map<
    PcbComponentId,
    PcbComponentRuntimeName
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

  return pcbComponentRuntimeNameByPcbComponentId
}

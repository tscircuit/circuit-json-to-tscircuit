import type { AnyCircuitElement, PcbComponent } from "circuit-json"
import type { BoardConversionContext as FootprintConversionContext } from "../board-conversion-context"

type PinLabelKey = `pin${number}`
type PinLabels = Partial<Record<PinLabelKey, string[]>>
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>
type SourcePort = Extract<AnyCircuitElement, { type: "source_port" }>

const getCompoundPinNumber = (sourcePort: SourcePort): number | undefined => {
  if (sourcePort.pin_number !== undefined) return sourcePort.pin_number

  const firstPinNumber = /^\d+/u.exec(sourcePort.name)?.[0]
  return firstPinNumber ? Number.parseInt(firstPinNumber, 10) : undefined
}

export const getPinLabels = ({
  circuitJson,
  footprintConversionContext,
  pcbComponent,
  sourceComponents,
}: {
  circuitJson: AnyCircuitElement[]
  footprintConversionContext: FootprintConversionContext
  pcbComponent: PcbComponent
  sourceComponents: SourceComponent[]
}): PinLabels | undefined => {
  if (sourceComponents.length === 0) return undefined

  const pinLabels: PinLabels = {}
  const sourceComponentIds = new Set<SourceComponentId>(
    sourceComponents
      .map((sourceComponent) => sourceComponent.source_component_id)
      .filter(
        (sourceComponentId): sourceComponentId is SourceComponentId =>
          sourceComponentId !== undefined,
      ),
  )

  const sourcePorts = circuitJson.filter(
    (element): element is SourcePort =>
      element.type === "source_port" &&
      element.source_component_id !== undefined &&
      sourceComponentIds.has(element.source_component_id) &&
      (element.pin_number !== undefined ||
        element.source_component_id === pcbComponent.source_component_id),
  )
  const usedPinNumbers = new Set(
    sourcePorts
      .map(getCompoundPinNumber)
      .filter((pinNumber): pinNumber is number => pinNumber !== undefined),
  )
  let nextSyntheticPinNumber = Math.max(0, ...usedPinNumbers) + 1

  for (const sourcePort of sourcePorts) {
    const importedPortHints = circuitJson.flatMap((element) => {
      if (
        sourcePort.source_component_id !== pcbComponent.source_component_id ||
        element.type !== "pcb_port" ||
        element.source_port_id !== sourcePort.source_port_id
      ) {
        return []
      }

      const importedPortHint =
        footprintConversionContext.portHintByPcbPortId.get(element.pcb_port_id)
      return importedPortHint ? [importedPortHint] : []
    })
    const aliases = [
      sourcePort.name,
      ...(sourcePort.port_hints ?? []),
      ...importedPortHints,
    ].filter(
      (alias, aliasIndex, allAliases) =>
        alias.length > 0 && allAliases.indexOf(alias) === aliasIndex,
    )

    let pinNumber = getCompoundPinNumber(sourcePort)
    if (pinNumber === undefined) {
      while (usedPinNumbers.has(nextSyntheticPinNumber)) {
        nextSyntheticPinNumber += 1
      }
      pinNumber = nextSyntheticPinNumber
      usedPinNumbers.add(pinNumber)
      nextSyntheticPinNumber += 1
    }

    const pinLabelKey: PinLabelKey = `pin${pinNumber}`
    pinLabels[pinLabelKey] = [
      ...(pinLabels[pinLabelKey] ?? []),
      ...aliases,
    ].filter(
      (alias, aliasIndex, allAliases) =>
        allAliases.indexOf(alias) === aliasIndex,
    )
  }

  return Object.keys(pinLabels).length > 0 ? pinLabels : undefined
}

import type { AnyCircuitElement, PcbComponent } from "circuit-json"
import { applyToPoint, inverse, translate } from "transformation-matrix"
import { formatJsxStringAttribute } from "../../format-jsx-string-attribute"
import type { BoardConversionContext as FootprintConversionContext } from "../../board-conversion-context"
import type { CadModelGroup } from "../../generate-board-cad-models-tsx/converter-types"
import { generateCadModelGroupModelTsx } from "../../generate-board-cad-models-tsx/generate-cad-model-group-model-tsx"
import { getCadModelGroups } from "../../generate-board-cad-models-tsx/get-cad-model-groups"
import { generateFootprintTsx } from "../../generate-footprint-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"
import { getSchematicComponentsForPcbComponent } from "../get-schematic-components-for-pcb-component"
import { localizePcbComponentElements } from "../localize-pcb-component-elements"

type PinLabelKey = `pin${number}`
type PinLabels = Partial<Record<PinLabelKey, string[]>>
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>
type SourcePort = Extract<AnyCircuitElement, { type: "source_port" }>
type PcbComponentId = PcbComponent["pcb_component_id"]

const getCompoundPinNumber = (sourcePort: SourcePort): number | undefined => {
  if (sourcePort.pin_number !== undefined) return sourcePort.pin_number

  const firstPinNumber = /^\d+/u.exec(sourcePort.name)?.[0]
  return firstPinNumber ? Number.parseInt(firstPinNumber, 10) : undefined
}

const getComponentFootprintTsx = ({
  circuitJson,
  footprintConversionContext,
  pcbComponent,
}: {
  circuitJson: AnyCircuitElement[]
  footprintConversionContext: FootprintConversionContext
  pcbComponent: PcbComponent
}): string | null => {
  const componentElements = localizePcbComponentElements({
    circuitJson,
    pcbComponent,
  })

  return generateFootprintTsx(componentElements, footprintConversionContext)
}

const getPinLabels = ({
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

export const convertPcbComponents: BoardConverterStage = ({
  circuitJson,
  footprintConversionContext,
  pcbBoard,
  boardChildren,
}) => {
  const boardToLocal = inverse(translate(pcbBoard.center.x, pcbBoard.center.y))
  const pcbComponents = circuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )
  const cadModelGroupByPcbComponentId = new Map<PcbComponentId, CadModelGroup>()
  for (const cadModelGroup of getCadModelGroups(circuitJson)) {
    const pcbComponentId = cadModelGroup.cadComponents[0]?.pcb_component_id
    if (pcbComponentId !== undefined) {
      cadModelGroupByPcbComponentId.set(pcbComponentId, cadModelGroup)
    }
  }

  for (const [componentIndex, pcbComponent] of pcbComponents.entries()) {
    const sourceComponent = circuitJson.find(
      (element): element is SourceComponent =>
        element.type === "source_component" &&
        element.source_component_id === pcbComponent.source_component_id,
    )
    const schematicComponents = getSchematicComponentsForPcbComponent({
      circuitJson,
      pcbComponent,
    })
    const schematicSourceComponentIds = new Set<SourceComponentId>(
      schematicComponents
        .map((schematicComponent) => schematicComponent.source_component_id)
        .filter(
          (sourceComponentId): sourceComponentId is SourceComponentId =>
            sourceComponentId !== undefined,
        ),
    )
    const sourceComponents = circuitJson.filter(
      (element): element is SourceComponent =>
        element.type === "source_component" &&
        (element.source_component_id === pcbComponent.source_component_id ||
          (element.source_component_id !== undefined &&
            schematicSourceComponentIds.has(element.source_component_id))),
    )
    const componentPosition = applyToPoint(boardToLocal, pcbComponent.center)
    const footprintTsx = getComponentFootprintTsx({
      circuitJson,
      footprintConversionContext,
      pcbComponent,
    })
    const pinLabels = getPinLabels({
      circuitJson,
      footprintConversionContext,
      pcbComponent,
      sourceComponents,
    })
    const componentName =
      sourceComponent?.name ?? `imported_component_${componentIndex + 1}`
    const cadModelGroup = cadModelGroupByPcbComponentId.get(
      pcbComponent.pcb_component_id,
    )
    const cadModelTsx = cadModelGroup
      ? generateCadModelGroupModelTsx({ cadModelGroup, pcbBoard })
      : undefined
    const componentProps = [
      `name=${formatJsxStringAttribute(componentName)}`,
      `pcbX={${componentPosition.x}}`,
      `pcbY={${componentPosition.y}}`,
      `pcbRotation="${pcbComponent.rotation}deg"`,
      `layer="${pcbComponent.layer}"`,
      "noSchematicRepresentation",
    ]

    if (cadModelTsx) {
      componentProps.push(`cadModel={${cadModelTsx}}`)
    }
    if (pinLabels) {
      componentProps.push(`pinLabels={${JSON.stringify(pinLabels)}}`)
    }
    if (sourceComponent?.manufacturer_part_number) {
      componentProps.push(
        `manufacturerPartNumber=${formatJsxStringAttribute(sourceComponent.manufacturer_part_number)}`,
      )
    }
    if (
      sourceComponent?.supplier_part_numbers &&
      Object.keys(sourceComponent.supplier_part_numbers).length > 0
    ) {
      componentProps.push(
        `supplierPartNumbers={${JSON.stringify(sourceComponent.supplier_part_numbers)}}`,
      )
    }
    if (pcbComponent.do_not_place === true) {
      componentProps.push("doNotPlace")
    }
    if (pcbComponent.obstructs_within_bounds === false) {
      componentProps.push("obstructsWithinBounds={false}")
    }
    boardChildren.push(
      `<chip ${componentProps.join(" ")} footprint={${footprintTsx ?? "<footprint />"}} />`,
    )
  }
}

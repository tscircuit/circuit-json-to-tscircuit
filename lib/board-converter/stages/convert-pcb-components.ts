import type { AnyCircuitElement, PcbComponent } from "circuit-json"
import { applyToPoint, inverse, translate } from "transformation-matrix"
import { generateFootprintTsx } from "../../generate-footprint-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"
import { localizePcbComponentElements } from "../localize-pcb-component-elements"

type PinLabelKey = `pin${number}`
type PinLabels = Partial<Record<PinLabelKey, string[]>>
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>

const getComponentFootprintTsx = ({
  circuitJson,
  pcbComponent,
}: {
  circuitJson: AnyCircuitElement[]
  pcbComponent: PcbComponent
}): string | null => {
  const componentElements = localizePcbComponentElements({
    circuitJson,
    pcbComponent,
  })

  return generateFootprintTsx(componentElements)
}

const getPinLabels = ({
  circuitJson,
  sourceComponent,
}: {
  circuitJson: AnyCircuitElement[]
  sourceComponent: SourceComponent | undefined
}): PinLabels | undefined => {
  if (!sourceComponent) return undefined

  const pinLabels: PinLabels = {}

  for (const sourcePort of circuitJson) {
    if (
      sourcePort.type !== "source_port" ||
      sourcePort.source_component_id !== sourceComponent.source_component_id ||
      sourcePort.pin_number === undefined
    ) {
      continue
    }

    const aliases = [sourcePort.name, ...(sourcePort.port_hints ?? [])].filter(
      (alias, aliasIndex, allAliases) =>
        alias.length > 0 && allAliases.indexOf(alias) === aliasIndex,
    )

    pinLabels[`pin${sourcePort.pin_number}`] = aliases
  }

  return Object.keys(pinLabels).length > 0 ? pinLabels : undefined
}

export const convertPcbComponents: BoardConverterStage = ({
  circuitJson,
  pcbBoard,
  boardChildren,
}) => {
  const boardToLocal = inverse(translate(pcbBoard.center.x, pcbBoard.center.y))
  const pcbComponents = circuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )

  for (const [componentIndex, pcbComponent] of pcbComponents.entries()) {
    const sourceComponent = circuitJson.find(
      (element): element is SourceComponent =>
        element.type === "source_component" &&
        element.source_component_id === pcbComponent.source_component_id,
    )
    const componentPosition = applyToPoint(boardToLocal, pcbComponent.center)
    const footprintTsx = getComponentFootprintTsx({
      circuitJson,
      pcbComponent,
    })
    const pinLabels = getPinLabels({ circuitJson, sourceComponent })
    const componentName =
      sourceComponent?.name ?? `imported_component_${componentIndex + 1}`
    const componentProps = [
      `name=${JSON.stringify(componentName)}`,
      `pcbX={${componentPosition.x}}`,
      `pcbY={${componentPosition.y}}`,
      `pcbRotation="${pcbComponent.rotation}deg"`,
      `layer="${pcbComponent.layer}"`,
      "noSchematicRepresentation",
    ]

    if (pinLabels) {
      componentProps.push(`pinLabels={${JSON.stringify(pinLabels)}}`)
    }
    if (sourceComponent?.manufacturer_part_number) {
      componentProps.push(
        `manufacturerPartNumber=${JSON.stringify(sourceComponent.manufacturer_part_number)}`,
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
      `<chip ${componentProps.join(" ")}${footprintTsx ? ` footprint={${footprintTsx}}` : ""} />`,
    )
  }
}

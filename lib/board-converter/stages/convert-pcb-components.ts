import type {
  AnyCircuitElement,
  PcbComponent,
  SchematicComponent,
} from "circuit-json"
import { applyToPoint, inverse, translate } from "transformation-matrix"
import { generateFootprintTsx } from "../../generate-footprint-tsx"
import { generateSymbolTsx } from "../../generate-symbol-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"
import { getSchematicComponentsForPcbComponent } from "../get-schematic-components-for-pcb-component"
import { localizePcbComponentElements } from "../localize-pcb-component-elements"
import { localizeSchematicComponentElements } from "../localize-schematic-component-elements"

type PinLabelKey = `pin${number}`
type PinLabels = Partial<Record<PinLabelKey, string[]>>
type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>

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
  sourceComponents,
}: {
  circuitJson: AnyCircuitElement[]
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

  for (const sourcePort of circuitJson) {
    if (
      sourcePort.type !== "source_port" ||
      sourcePort.source_component_id === undefined ||
      !sourceComponentIds.has(sourcePort.source_component_id) ||
      sourcePort.pin_number === undefined
    ) {
      continue
    }

    const aliases = [sourcePort.name, ...(sourcePort.port_hints ?? [])].filter(
      (alias, aliasIndex, allAliases) =>
        alias.length > 0 && allAliases.indexOf(alias) === aliasIndex,
    )

    const pinLabelKey: PinLabelKey = `pin${sourcePort.pin_number}`
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

const addSchematicComponentProps = ({
  circuitJson,
  componentProps,
  schematicComponents,
}: {
  circuitJson: AnyCircuitElement[]
  componentProps: string[]
  schematicComponents: SchematicComponent[]
}): void => {
  const namedSchematicComponent = schematicComponents.find(
    (schematicComponent) => schematicComponent.symbol_name !== undefined,
  )

  if (!namedSchematicComponent?.symbol_name) {
    if (schematicComponents.length !== 1) {
      componentProps.push("noSchematicRepresentation")
      return
    }

    const anchorComponent = schematicComponents[0]
    const symbolTsx = generateSymbolTsx({
      circuitJson: localizeSchematicComponentElements({
        circuitJson,
        schematicComponents,
      }),
      includePorts: true,
    })

    if (anchorComponent && symbolTsx) {
      componentProps.push(
        `schX={${anchorComponent.center.x}}`,
        `schY={${anchorComponent.center.y}}`,
        `symbol={${symbolTsx}}`,
      )
      if (anchorComponent.symbol_display_value !== undefined) {
        componentProps.push(
          `schDisplayValue=${JSON.stringify(anchorComponent.symbol_display_value)}`,
        )
      }
      return
    }

    componentProps.push("noSchematicRepresentation")
    return
  }

  componentProps.push(
    `symbolName=${JSON.stringify(namedSchematicComponent.symbol_name)}`,
    `schX={${namedSchematicComponent.center.x}}`,
    `schY={${namedSchematicComponent.center.y}}`,
  )

  if (namedSchematicComponent.symbol_display_value !== undefined) {
    componentProps.push(
      `schDisplayValue=${JSON.stringify(namedSchematicComponent.symbol_display_value)}`,
    )
  }
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
      pcbComponent,
    })
    const pinLabels = getPinLabels({ circuitJson, sourceComponents })
    const componentName =
      sourceComponent?.name ?? `imported_component_${componentIndex + 1}`
    const componentProps = [
      `name=${JSON.stringify(componentName)}`,
      `pcbX={${componentPosition.x}}`,
      `pcbY={${componentPosition.y}}`,
      `pcbRotation="${pcbComponent.rotation}deg"`,
      `layer="${pcbComponent.layer}"`,
    ]

    addSchematicComponentProps({
      circuitJson,
      componentProps,
      schematicComponents,
    })

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

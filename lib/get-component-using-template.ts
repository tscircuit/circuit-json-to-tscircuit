import type {
  AnyCircuitElement,
  CadComponent,
  PcbComponent,
  SchematicComponent,
  SourcePort,
} from "circuit-json"
import { localizePcbComponentElements } from "./board-converter/localize-pcb-component-elements"
import {
  doesLocalizedFootprintMatchLibrary,
  isFootprinterStringSupported,
} from "./does-localized-footprint-match-library"
import { formatJsxStringAttribute } from "./format-jsx-string-attribute"
import { generateFootprintTsx } from "./generate-footprint-tsx"
import { generateSymbolTsx } from "./generate-symbol-tsx"
import { getPinAttributes } from "./get-pin-attributes"
import {
  areSourcePortsCompatibleWithSpec,
  getTypedComponentTemplateSpec,
} from "./get-typed-component-template-spec"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>

export interface ComponentTemplateParams {
  pinLabels?: Record<string, string[]> | Record<string, string> // ChipProps["pinLabels"]
  componentName: string
  objUrl?: string
  circuitJson: AnyCircuitElement[]
  supplierPartNumbers?: Record<string, string[]>
  manufacturerPartNumber?: string
}

export const getComponentUsingTemplate = ({
  pinLabels,
  componentName,
  objUrl,
  circuitJson,
  supplierPartNumbers,
  manufacturerPartNumber,
}: ComponentTemplateParams) => {
  const footprintTsx = generateFootprintTsx(circuitJson)
  const symbolTsx = generateSymbolTsx(circuitJson)
  const pinAttributes = getPinAttributes(circuitJson)

  const sourceComponents = circuitJson.filter(
    (element): element is SourceComponent =>
      element.type === "source_component",
  )
  if (sourceComponents.length === 1 && !pinLabels) {
    const sourceComponent = sourceComponents[0]!
    const cadComponent = circuitJson.find(
      (element): element is CadComponent =>
        element.type === "cad_component" &&
        element.source_component_id === sourceComponent.source_component_id,
    )
    const schematicComponent = circuitJson.find(
      (element): element is SchematicComponent =>
        element.type === "schematic_component" &&
        element.source_component_id === sourceComponent.source_component_id,
    )
    const spec = getTypedComponentTemplateSpec({
      sourceComponent,
      cadComponent,
      schematicComponent,
    })
    const sourcePorts = circuitJson.filter(
      (element): element is SourcePort =>
        element.type === "source_port" &&
        element.source_component_id === sourceComponent.source_component_id,
    )
    const hasCompatibleSymbol =
      Boolean(symbolTsx) ||
      !schematicComponent?.symbol_name ||
      spec?.expectedSymbolBaseNames.some((base) =>
        schematicComponent.symbol_name?.startsWith(`${base}_`),
      ) === true
    if (
      spec &&
      hasCompatibleSymbol &&
      areSourcePortsCompatibleWithSpec({
        sourcePorts,
        spec,
        requireExactPinCount: false,
      })
    ) {
      const pcbComponent = circuitJson.find(
        (element): element is PcbComponent =>
          element.type === "pcb_component" &&
          element.source_component_id === sourceComponent.source_component_id,
      )
      const localizedElements = pcbComponent
        ? localizePcbComponentElements({ circuitJson, pcbComponent })
        : circuitJson
      const canUseIntrinsicFootprint = footprintTsx
        ? doesLocalizedFootprintMatchLibrary({
            localizedElements,
            rawFootprinterString: spec.rawFootprinterString,
            componentName: sourceComponent.name,
            sourcePorts,
          })
        : isFootprinterStringSupported(spec.rawFootprinterString)
      const nonEmptySourceSupplierParts = sourceComponent.supplier_part_numbers
        ? Object.fromEntries(
            Object.entries(sourceComponent.supplier_part_numbers).filter(
              ([, partNumbers]) =>
                Array.isArray(partNumbers) && partNumbers.length > 0,
            ),
          )
        : undefined
      const resolvedSupplierPartNumbers =
        supplierPartNumbers ??
        (nonEmptySourceSupplierParts &&
        Object.keys(nonEmptySourceSupplierParts).length > 0
          ? nonEmptySourceSupplierParts
          : undefined)
      const resolvedManufacturerPartNumber =
        manufacturerPartNumber ?? sourceComponent.manufacturer_part_number
      const footprintAttr =
        canUseIntrinsicFootprint && spec.footprintString
          ? `footprint=${formatJsxStringAttribute(spec.footprintString)}`
          : footprintTsx &&
              !(canUseIntrinsicFootprint && spec.hasIntrinsicFootprintProps)
            ? `footprint={${footprintTsx}}`
            : ""

      return `
import { type ${spec.propsTypeName} } from "${spec.propsImportSource}"
export const ${componentName} = (props: Partial<${spec.propsTypeName}>) => (
  <${spec.tagName}
    name=${formatJsxStringAttribute(sourceComponent.name || componentName)}
    ${spec.typeSpecificProps.join("\n    ")}
    ${footprintAttr}
    ${symbolTsx ? `symbol={${symbolTsx}}` : ""}
    ${pinAttributes ? `pinAttributes={${JSON.stringify(pinAttributes, null, "  ")}}` : ""}
    ${objUrl ? `cadModel={{\n        objUrl: "${objUrl}",\n        rotationOffset: { x: 0, y: 0, z: 0 },\n        positionOffset: { x: 0, y: 0, z: 0 },\n      }}` : ""}
    ${resolvedSupplierPartNumbers ? `supplierPartNumbers={${JSON.stringify(resolvedSupplierPartNumbers, null, "  ")}}` : ""}
    ${resolvedManufacturerPartNumber ? `manufacturerPartNumber=${formatJsxStringAttribute(resolvedManufacturerPartNumber)}` : ""}
    {...props}
  />
)
`
        .replace(/\n\s*\n/g, "\n")
        .trim()
    }
  }

  return `
import { type ChipProps } from "tscircuit"
${pinLabels ? `const pinLabels = ${JSON.stringify(pinLabels, null, "  ")} as const\n` : ""}export const ${componentName} = (props: ChipProps${pinLabels ? `<typeof pinLabels>` : ""}) => (
  <chip
    ${footprintTsx ? `footprint={${footprintTsx}}` : ""}
    ${symbolTsx ? `symbol={${symbolTsx}}` : ""}
    ${pinLabels ? "pinLabels={pinLabels}" : ""}
    ${pinAttributes ? `pinAttributes={${JSON.stringify(pinAttributes, null, "  ")}}` : ""}
    ${objUrl ? `cadModel={{\n        objUrl: \"${objUrl}\",\n        rotationOffset: { x: 0, y: 0, z: 0 },\n        positionOffset: { x: 0, y: 0, z: 0 },\n      }}` : ""}
    ${supplierPartNumbers ? `supplierPartNumbers={${JSON.stringify(supplierPartNumbers, null, "  ")}}` : ""}
    ${manufacturerPartNumber ? `manufacturerPartNumber=\"${manufacturerPartNumber}\"` : ""}
    {...props}
  />
)
`
    .replace(/\n\s*\n/g, "\n")
    .trim()
}

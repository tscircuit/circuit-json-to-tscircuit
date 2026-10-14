import type { AnyCircuitElement, PcbComponent } from "circuit-json"
import type { BoardConversionContext as FootprintConversionContext } from "../../board-conversion-context"
import { formatJsxStringAttribute } from "../../format-jsx-string-attribute"
import type { CadModelGroup } from "../../generate-board-cad-models-tsx/converter-types"
import { generateCadModelGroupModelTsx } from "../../generate-board-cad-models-tsx/generate-cad-model-group-model-tsx"
import { getCadModelGroups } from "../../generate-board-cad-models-tsx/get-cad-model-groups"
import { generateFootprintTsx } from "../../generate-footprint-tsx"
import type { BoardConverterStage } from "../BoardConverterContext"
import { getPcbComponentRenderPlacement } from "../get-pcb-component-render-placement"
import { getPinLabels } from "../get-pin-labels"
import { getSchematicComponentsForPcbComponent } from "../get-schematic-components-for-pcb-component"
import { localizePcbComponentElements } from "../localize-pcb-component-elements"

type SourceComponent = Extract<AnyCircuitElement, { type: "source_component" }>
type SourceComponentId = NonNullable<SourceComponent["source_component_id"]>
type PcbComponentId = PcbComponent["pcb_component_id"]

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

export const convertPcbComponents: BoardConverterStage = ({
  circuitJson,
  footprintConversionContext,
  pcbComponentRuntimeNameByPcbComponentId,
  pcbBoard,
  boardChildren,
}) => {
  const pcbComponents = circuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )
  const cadModelGroupByPcbComponentId = new Map<PcbComponentId, CadModelGroup>()
  for (const cadModelGroup of getCadModelGroups(circuitJson)) {
    const pcbComponentId = cadModelGroup.cadComponents[0]?.pcb_component_id
    if (pcbComponentId === undefined) continue

    const existingCadModelGroup =
      cadModelGroupByPcbComponentId.get(pcbComponentId)
    cadModelGroupByPcbComponentId.set(
      pcbComponentId,
      existingCadModelGroup
        ? {
            ...existingCadModelGroup,
            cadComponents: [
              ...existingCadModelGroup.cadComponents,
              ...cadModelGroup.cadComponents,
            ],
          }
        : cadModelGroup,
    )
  }

  for (const pcbComponent of pcbComponents) {
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
    const { cadModelParentCenter, componentPosition } =
      getPcbComponentRenderPlacement({
        circuitJson,
        pcbBoard,
        pcbComponent,
      })
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
    const componentName = pcbComponentRuntimeNameByPcbComponentId.get(
      pcbComponent.pcb_component_id,
    )
    if (!componentName) {
      throw new Error("Expected every PCB component to have a runtime name")
    }
    const cadModelGroup = cadModelGroupByPcbComponentId.get(
      pcbComponent.pcb_component_id,
    )
    const localizedCadModelGroup: CadModelGroup | undefined = cadModelGroup
      ? {
          ...cadModelGroup,
          parentPlacement: {
            center: cadModelParentCenter,
            ccwRotationDegrees: pcbComponent.rotation,
            layer: pcbComponent.layer === "bottom" ? "bottom" : "top",
          },
        }
      : undefined
    const cadModelTsx = localizedCadModelGroup
      ? generateCadModelGroupModelTsx({
          cadModelGroup: localizedCadModelGroup,
          pcbBoard,
        })
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

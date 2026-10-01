import { su } from "@tscircuit/soup-util"
import { symbols, type SchSymbol } from "schematic-symbols"
import type { SchematicElementConverter } from "./converter-types"
import { getSymbolToSchematicTransform } from "./get-symbol-to-schematic-transform"
import { convertRect } from "./convert-rect"
import { convertSymbolPrimitives } from "./convert-symbol-primitives"

const symbolLibrary: Partial<Record<string, SchSymbol>> = symbols

export const convertComponents: SchematicElementConverter = (circuitJson) => {
  const schematicElements: string[] = []
  for (const schematic_component of su(
    circuitJson,
  ).schematic_component.list()) {
    if (schematic_component.is_box_with_pins === false) continue
    const source_component = su(circuitJson).source_component.get(
      schematic_component.source_component_id ?? "",
    )
    const symbol = schematic_component.symbol_name
      ? symbolLibrary[schematic_component.symbol_name]
      : undefined
    if (symbol) {
      const symbolToSchematicTransform = getSymbolToSchematicTransform({
        symbol,
        schematic_component,
        schematicPorts: su(circuitJson).schematic_port.list({
          schematic_component_id: schematic_component.schematic_component_id,
        }),
      })
      schematicElements.push(
        ...convertSymbolPrimitives({
          symbol,
          symbolToSchematicTransform,
          reference:
            source_component?.display_name ?? source_component?.name ?? "",
          displayText: schematic_component.symbol_display_value ?? "",
        }),
      )
    } else {
      schematicElements.push(
        convertRect({
          center: schematic_component.center,
          ...schematic_component.size,
          strokeWidth: 0.02,
          color: "#840000",
          fillColor: "#ffffc2",
          isFilled: true,
        }),
      )
      for (const schematic_port of su(circuitJson).schematic_port.list({
        schematic_component_id: schematic_component.schematic_component_id,
      })) {
        const edge = { ...schematic_port.center }
        switch (schematic_port.side_of_component) {
          case "left":
            edge.x =
              schematic_component.center.x - schematic_component.size.width / 2
            break
          case "right":
            edge.x =
              schematic_component.center.x + schematic_component.size.width / 2
            break
          case "top":
            edge.y =
              schematic_component.center.y + schematic_component.size.height / 2
            break
          case "bottom":
            edge.y =
              schematic_component.center.y - schematic_component.size.height / 2
            break
        }
        schematicElements.push(
          `<schematicpath points={${JSON.stringify([edge, schematic_port.center])}} strokeWidth={0.02} strokeColor="#840000" />`,
        )
        const source_port = su(circuitJson).source_port.get(
          schematic_port.source_port_id,
        )
        const isHorizontal =
          schematic_port.side_of_component === "left" ||
          schematic_port.side_of_component === "right"
        const anchor =
          schematic_port.side_of_component === "left"
            ? "center_left"
            : schematic_port.side_of_component === "right"
              ? "center_right"
              : "center"
        schematicElements.push(
          `<schematictext text={${JSON.stringify(source_port?.name ?? "")}} schX={${edge.x}} schY={${edge.y}} anchor="${anchor}" fontSize={0.12} color="#006464" schRotation={${isHorizontal ? 0 : 90}} />`,
        )
        if (schematic_port.pin_number != null)
          schematicElements.push(
            `<schematictext text={${JSON.stringify(String(schematic_port.pin_number))}} schX={${(edge.x + schematic_port.center.x) / 2}} schY={${(edge.y + schematic_port.center.y) / 2}} anchor="bottom_center" fontSize={0.12} color="#a90000" />`,
          )
      }
    }
  }
  return schematicElements
}

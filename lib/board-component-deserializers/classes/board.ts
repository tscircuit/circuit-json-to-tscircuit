import { boardProps } from "@tscircuit/props"
import { generateFootprintTsx } from "../../generate-footprint-tsx"
import { CircuitJsonDeserializer } from "../base-classes/circuit-json-deserializer"
import {
  formatDefaultExport,
  formatTsxElement,
  type TsxProps,
} from "../format-tsx"
import { getPropsFromElement } from "../get-props-from-element"
import type { CircuitJsonElementRef, DeserializerContext } from "../types"

export class Board {
  static propsSchema = boardProps

  static getPropsFromElement(
    ref: CircuitJsonElementRef,
    { db }: DeserializerContext,
  ): TsxProps | undefined {
    const { pcb_board_id } = ref
    if (!pcb_board_id) return undefined

    const pcbBoard = db.pcb_board.get(pcb_board_id)
    if (!pcbBoard) return undefined

    return getPropsFromElement(pcbBoard, this.propsSchema, {
      numLayers: "layers",
      anchorPosition: "boardAnchorPosition",
      anchorAlignment: "boardAnchorAlignment",
    })
  }

  static deserializeToTsx(
    ref: CircuitJsonElementRef,
    context: DeserializerContext,
  ): string | undefined {
    const { db } = context
    const props = this.getPropsFromElement(ref, context)
    if (!props) return undefined

    const componentTsxElements = db.source_component
      .list()
      .map(({ source_component_id }) =>
        CircuitJsonDeserializer.deserializeToTsx(
          { source_component_id },
          context,
        ),
      )
      .filter((tsx): tsx is string => tsx !== undefined)

    const footprintTsx = generateFootprintTsx(db.toArray())
    let boardChildrenTsx = componentTsxElements.join("\n")
    if (!boardChildrenTsx && footprintTsx) {
      boardChildrenTsx = `<chip footprint={${footprintTsx}} />`
    }

    const boardTsx = formatTsxElement("board", props, boardChildrenTsx)

    return formatDefaultExport(boardTsx)
  }
}

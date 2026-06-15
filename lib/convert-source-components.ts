import type { AnyCircuitElement } from "circuit-json"
import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"

const positionAttrs = (x: number, y: number): string => {
  if (x === 0 && y === 0) return `pcbX={0} pcbY={0}`
  return `pcbX="${mmStr(x)}" pcbY="${mmStr(y)}"`
}

const rotationAttr = (rotation: number | undefined): string => {
  if (!rotation) return ""
  return ` pcbRotation="${rotation}deg"`
}

export const convertSourceComponents = (
  circuitJson: AnyCircuitElement[],
): string[] => {
  const sourceComponents = su(circuitJson).source_component.list()
  const pcbComponents = su(circuitJson).pcb_component.list()
  const cadComponents = su(circuitJson).cad_component.list()
  const out: string[] = []

  for (const source of sourceComponents) {
    const pcb = pcbComponents.find(
      (p) => p.source_component_id === source.source_component_id,
    )
    if (!pcb) continue

    const cad = cadComponents.find(
      (c) => c.source_component_id === source.source_component_id,
    )

    const x = pcb.center?.x ?? 0
    const y = pcb.center?.y ?? 0
    const position = positionAttrs(x, y)
    const rotation = rotationAttr(pcb.rotation)
    const footprint = cad?.footprinter_string
      ? ` footprint="${cad.footprinter_string}"`
      : ""
    const name = source.name ?? ""

    if (source.ftype === "simple_resistor") {
      const resistance =
        source.display_resistance ?? String(source.resistance ?? "")
      out.push(
        `<resistor name="${name}" resistance="${resistance}"${footprint} ${position}${rotation} />`,
      )
    } else if (source.ftype === "simple_capacitor") {
      const capacitance =
        source.display_capacitance ?? String(source.capacitance ?? "")
      out.push(
        `<capacitor name="${name}" capacitance="${capacitance}"${footprint} ${position}${rotation} />`,
      )
    }
  }

  return out
}

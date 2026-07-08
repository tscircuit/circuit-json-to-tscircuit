import { expect, test } from "bun:test"
import type {
  AnyCircuitElement,
  CadComponent,
  PcbComponent,
  SchematicComponent,
  SourceSimpleResistor,
} from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { stackSvgsVertically } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
export default () => (
  <board width="20mm" height="10mm">
    <resistor
      name="R1"
      displayName="Sense resistor"
      resistance="4.7k"
      footprint="0402"
      manufacturerPartNumber="RC0402"
      supplierPartNumbers={{ jlcpcb: ["C123"] }}
      schOrientation="vertical"
      schX="2mm"
      schY="-1mm"
      pcbX="3mm"
      pcbY="-2mm"
      pcbRotation="90deg"
      obstructsWithinBounds={false}
    />
  </board>
)
`

const panelLabelSvg = (title: string) => `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="800"
  height="34"
  viewBox="0 0 800 34"
>
  <rect width="800" height="34" fill="#151515" />
  <text
    x="400"
    y="22"
    fill="#f4f4f4"
    font-family="Arial, sans-serif"
    font-size="17"
    font-weight="700"
    text-anchor="middle"
  >${title}</text>
</svg>`

const normalizePoint = (point: { x: number; y: number }) => ({
  x: Number(point.x.toFixed(9)),
  y: Number(point.y.toFixed(9)),
})

const getResistorState = (circuitJson: AnyCircuitElement[]) => {
  const source = circuitJson.find(
    (element): element is SourceSimpleResistor =>
      element.type === "source_component" &&
      element.ftype === "simple_resistor",
  )
  if (!source) throw new Error("Resistor source component not found")

  const pcb = circuitJson.find(
    (element): element is PcbComponent =>
      element.type === "pcb_component" &&
      element.source_component_id === source.source_component_id,
  )
  const schematic = circuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      element.source_component_id === source.source_component_id,
  )
  const cad = circuitJson.find(
    (element): element is CadComponent =>
      element.type === "cad_component" &&
      element.source_component_id === source.source_component_id,
  )

  return {
    source: {
      name: source.name,
      displayName: source.display_name,
      resistance: source.resistance,
      displayResistance: source.display_resistance,
      manufacturerPartNumber: source.manufacturer_part_number,
      supplierPartNumbers: source.supplier_part_numbers,
      arePinsInterchangeable: source.are_pins_interchangeable,
    },
    footprint: cad?.footprinter_string,
    pcb: pcb && {
      center: normalizePoint(pcb.center),
      rotation: pcb.rotation,
      layer: pcb.layer,
      doNotPlace: pcb.do_not_place,
      allowOffBoard: pcb.is_allowed_to_be_off_board,
      obstructsWithinBounds: pcb.obstructs_within_bounds,
      metadata: pcb.metadata,
    },
    schematic: schematic && {
      center: normalizePoint(schematic.center),
      symbolName: schematic.symbol_name,
    },
  }
}

test("preserves resistor semantics during board conversion", async () => {
  const originalCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const reconstructedTscircuit = convertCircuitJsonToTscircuit(
    originalCircuitJson,
    { componentName: "ConvertedBoard" },
  )
  const reconstructedCircuitJson = (await runTscircuitCode(
    reconstructedTscircuit,
  )) as AnyCircuitElement[]

  expect(getResistorState(reconstructedCircuitJson)).toEqual(
    getResistorState(originalCircuitJson),
  )

  const comparisonSvg = stackSvgsVertically(
    [
      panelLabelSvg("Original tsx"),
      convertCircuitJsonToPcbSvg(originalCircuitJson),
      panelLabelSvg("Reconstructed tsx"),
      convertCircuitJsonToPcbSvg(reconstructedCircuitJson),
    ],
    { gap: 8, normalizeSize: false },
  )
  await expect(comparisonSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
}, 15_000)

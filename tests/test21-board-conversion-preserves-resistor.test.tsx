import { expect, spyOn, test } from "bun:test"
import type {
  AnyCircuitElement,
  CadComponent,
  PcbComponent,
  PcbSmtPad,
  SchematicComponent,
  SourceSimpleResistor,
} from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib/index"
import { runTscircuitCode } from "tscircuit"

const sourceTscircuit = `
const UnknownBoardChild = (props) => (
  <chip
    footprint={<footprint>
      <smtpad portHints={["1"]} pcbX="-1mm" pcbY="0mm" width="1mm" height="0.8mm" shape="rect" layer="top" />
      <smtpad portHints={["2"]} pcbX="1mm" pcbY="0mm" width="1mm" height="0.8mm" shape="rect" layer="top" />
    </footprint>}
    {...props}
  />
)

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
      doNotPlace={false}
      allowOffBoard={true}
      obstructsWithinBounds={false}
      showAsTranslucentModel={true}
    />
    <UnknownBoardChild name="U1" pcbX="-4mm" />
  </board>
)
`

const normalizePoint = (point: { x: number; y: number }) => ({
  x: Number(point.x.toFixed(9)),
  y: Number(point.y.toFixed(9)),
})

const getSourceResistor = (
  circuitJson: AnyCircuitElement[],
): SourceSimpleResistor => {
  const sourceResistor = circuitJson.find(
    (element): element is SourceSimpleResistor =>
      element.type === "source_component" &&
      element.ftype === "simple_resistor",
  )
  if (!sourceResistor) throw new Error("Resistor source component not found")
  return sourceResistor
}

const getPcbComponentForSource = (
  circuitJson: AnyCircuitElement[],
  sourceComponentId: string,
): PcbComponent => {
  const pcbComponent = circuitJson.find(
    (element): element is PcbComponent =>
      element.type === "pcb_component" &&
      element.source_component_id === sourceComponentId,
  )
  if (!pcbComponent) throw new Error("PCB component not found")
  return pcbComponent
}

const getResistorState = (circuitJson: AnyCircuitElement[]) => {
  const sourceResistor = getSourceResistor(circuitJson)
  const pcbComponent = getPcbComponentForSource(
    circuitJson,
    sourceResistor.source_component_id,
  )
  const schematicComponent = circuitJson.find(
    (element): element is SchematicComponent =>
      element.type === "schematic_component" &&
      element.source_component_id === sourceResistor.source_component_id,
  )
  const cadComponent = circuitJson.find(
    (element): element is CadComponent =>
      element.type === "cad_component" &&
      element.source_component_id === sourceResistor.source_component_id,
  )

  return {
    source: {
      name: sourceResistor.name,
      displayName: sourceResistor.display_name,
      resistance: sourceResistor.resistance,
      displayResistance: sourceResistor.display_resistance,
      manufacturerPartNumber: sourceResistor.manufacturer_part_number,
      supplierPartNumbers: sourceResistor.supplier_part_numbers,
      arePinsInterchangeable: sourceResistor.are_pins_interchangeable,
    },
    footprint: cadComponent?.footprinter_string,
    pcb: {
      center: normalizePoint(pcbComponent.center),
      rotation: pcbComponent.rotation,
      layer: pcbComponent.layer,
      doNotPlace: pcbComponent.do_not_place,
      obstructsWithinBounds: pcbComponent.obstructs_within_bounds,
    },
    schematic: schematicComponent && {
      center: normalizePoint(schematicComponent.center),
      symbolName: schematicComponent.symbol_name,
    },
    showAsTranslucentModel: cadComponent?.show_as_translucent_model,
  }
}

const getPcbSmtPads = (circuitJson: AnyCircuitElement[]): PcbSmtPad[] =>
  circuitJson.filter(
    (element): element is PcbSmtPad => element.type === "pcb_smtpad",
  )

test("preserves resistor semantics alongside unrecognized board children", async () => {
  const originalCircuitJson = (await runTscircuitCode(
    sourceTscircuit,
  )) as AnyCircuitElement[]
  const originalSourceResistor = getSourceResistor(originalCircuitJson)
  const originalResistorPcbComponent = getPcbComponentForSource(
    originalCircuitJson,
    originalSourceResistor.source_component_id,
  )
  originalResistorPcbComponent.is_allowed_to_be_off_board = true

  const reconstructedTscircuit = convertCircuitJsonToTscircuit(
    originalCircuitJson,
    { componentName: "ConvertedBoard" },
  )

  expect(reconstructedTscircuit).toContain("<resistor")
  expect(reconstructedTscircuit).toContain('resistance="4.7kΩ"')
  expect(reconstructedTscircuit).toContain("doNotPlace={false}")
  expect(reconstructedTscircuit).toContain("allowOffBoard={true}")
  expect(reconstructedTscircuit).toContain("<chip footprint={<footprint>")

  const reconstructedCircuitJson = (await runTscircuitCode(
    reconstructedTscircuit,
  )) as AnyCircuitElement[]

  expect(getResistorState(reconstructedCircuitJson)).toEqual(
    getResistorState(originalCircuitJson),
  )
  expect(getPcbSmtPads(reconstructedCircuitJson)).toHaveLength(
    getPcbSmtPads(originalCircuitJson).length,
  )

  const circuitJsonWithExplicitFalseAllowOffBoard =
    structuredClone(originalCircuitJson)
  const resistorPcbComponent = getPcbComponentForSource(
    circuitJsonWithExplicitFalseAllowOffBoard,
    originalSourceResistor.source_component_id,
  )
  resistorPcbComponent.is_allowed_to_be_off_board = false

  expect(
    convertCircuitJsonToTscircuit(circuitJsonWithExplicitFalseAllowOffBoard, {
      componentName: "ConvertedBoard",
    }),
  ).toContain("allowOffBoard={false}")
}, 15_000)

test("falls back to resistor geometry when typed props are invalid", async () => {
  const circuitJson = (await runTscircuitCode(`
    export default () => (
      <board width="10mm" height="10mm">
        <resistor name="R1" resistance="1k" footprint="0402" />
      </board>
    )
  `)) as AnyCircuitElement[]
  const sourceResistor = getSourceResistor(circuitJson)
  sourceResistor.resistance = Number.NaN
  sourceResistor.display_resistance = undefined

  const warningSpy = spyOn(console, "warn").mockImplementation(() => {})
  const convertedTscircuit = (() => {
    try {
      const convertedTscircuit = convertCircuitJsonToTscircuit(circuitJson, {
        componentName: "ConvertedBoard",
      })
      expect(warningSpy).toHaveBeenCalledTimes(1)
      return convertedTscircuit
    } finally {
      warningSpy.mockRestore()
    }
  })()

  expect(convertedTscircuit).not.toContain("<resistor")
  expect(convertedTscircuit).toContain("<chip footprint={<footprint>")

  const reconstructedCircuitJson = (await runTscircuitCode(
    convertedTscircuit,
  )) as AnyCircuitElement[]
  expect(getPcbSmtPads(reconstructedCircuitJson)).toHaveLength(2)
}, 15_000)

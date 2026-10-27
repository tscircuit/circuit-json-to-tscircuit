import { expect, test } from "bun:test"
import type { CircuitJson, PcbPort, SourcePort } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

// Reduced from the OrangeCrab r0.2.1 import: KiCad physical pin names arrive
// as strings in pin_number, even though Circuit JSON's TS type is numeric.
const makeBoard = (physicalPins: Array<number | string>): CircuitJson =>
  [
    {
      type: "pcb_board",
      pcb_board_id: "board",
      center: { x: 0, y: 0 },
      width: 10,
      height: 10,
      num_layers: 2,
      thickness: 1.6,
      material: "fr4",
    },
    {
      type: "source_component",
      source_component_id: "sc",
      name: "U1",
      ftype: "simple_chip",
    },
    {
      type: "pcb_component",
      pcb_component_id: "pc",
      source_component_id: "sc",
      center: { x: 0, y: 0 },
      width: 4,
      height: 1,
      layer: "top",
      rotation: 0,
    },
    ...physicalPins.flatMap((pin, i) => [
      {
        type: "source_port",
        source_port_id: `sp${i}`,
        source_component_id: "sc",
        name: String(pin),
        pin_number: pin,
      },
      {
        type: "pcb_port",
        pcb_port_id: `pp${i}`,
        pcb_component_id: "pc",
        source_port_id: `sp${i}`,
        x: i - 1,
        y: 0,
        layers: ["top"],
      },
      {
        type: "pcb_smtpad",
        pcb_smtpad_id: `pad${i}`,
        pcb_component_id: "pc",
        pcb_port_id: `pp${i}`,
        port_hints: [String(pin)],
        shape: "circle",
        x: i - 1,
        y: 0,
        radius: 0.15,
        layer: "top",
      },
    ]),
  ] as CircuitJson

for (const physicalPin of ["A1", "H3", "MP"]) {
  test.failing(
    `imports physical pin ${physicalPin} using valid pin label keys`,
    () => {
      const generated = convertCircuitJsonToTscircuit(
        makeBoard([1, physicalPin, 3]),
        { componentName: "BgaBoard" },
      )
      expect(generated).not.toContain(`"pin${physicalPin}"`)
      expect(generated).toContain(
        `"pin4":["${physicalPin}","imported_pcb_port_2"]`,
      )
      expect(generated).toContain('"pin1":["1","imported_pcb_port_1"]')
      expect(generated).toContain('"pin3":["3","imported_pcb_port_3"]')
    },
  )
}

test.failing(
  "renders imported BGA balls without dropping the component",
  async () => {
    const generated = convertCircuitJsonToTscircuit(
      makeBoard(["A1", "B2", "MP"]),
      { componentName: "BgaBoard" },
    )
    const rendered = (await runTscircuitCode(generated)) as CircuitJson
    expect(
      rendered.filter(
        (element) => element.type === "source_failed_to_create_component_error",
      ),
    ).toHaveLength(0)
    expect(
      rendered.filter((element) => element.type === "pcb_component"),
    ).toHaveLength(1)
    const pads = rendered.filter((element) => element.type === "pcb_smtpad")
    expect(pads).toHaveLength(3)
    for (const [i, pin] of ["A1", "B2", "MP"].entries()) {
      const port = rendered.find(
        (element): element is SourcePort =>
          element.type === "source_port" &&
          element.port_hints?.includes(pin) === true,
      )
      expect(port?.type).toBe("source_port")
      const pcbPort = rendered.find(
        (element): element is PcbPort =>
          element.type === "pcb_port" &&
          element.source_port_id === port?.source_port_id,
      )
      expect(pcbPort).toMatchObject({ x: i - 1, y: 0 })
      expect(pads[i]?.pcb_port_id).toBe(pcbPort?.pcb_port_id)
    }
  },
)

test("keeps numeric string pins compatible", async () => {
  const generated = convertCircuitJsonToTscircuit(makeBoard(["1", "3"]), {
    componentName: "NumericBoard",
  })
  expect(generated).toContain('"pin1":["1","imported_pcb_port_1"]')
  expect(generated).toContain('"pin3":["3","imported_pcb_port_2"]')
  const rendered = (await runTscircuitCode(generated)) as CircuitJson
  expect(
    rendered.filter((element) => element.type === "pcb_component"),
  ).toHaveLength(1)
})

import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

/**
 * SYNTHETIC BOUNDARY / REGRESSION TESTS — NOT A REPRO.
 *
 * The real-board repro for pcb_keepout shape:"outline" lives in the TI EVM
 * round-trip tests (tests/ti-evms/*), which use the real lmg342x-bb-evm,
 * lm251772evm-pd, and lm5155evm-fly boards. Every keepout on those boards is
 * circular, so they only exercise the POSITIVE path of the circularity
 * heuristic.
 *
 * These tests exist to pin the NEGATIVE path: shapes that must NOT be
 * silently converted into a circle. A keepout constrains placement, so
 * misdetecting an irregular outline as a circle (or approximating it with a
 * bounding-box rect) would place copper or parts somewhere the source board
 * never intended. Each case below must therefore be dropped.
 */

const baseElements: AnyCircuitElement[] = [
  {
    type: "source_component",
    source_component_id: "generic_0",
    name: "KeepoutBoundary",
    ftype: "simple_chip",
    supplier_part_numbers: {},
  },
  {
    type: "pcb_component",
    source_component_id: "generic_0",
    pcb_component_id: "pcb_generic_component_0",
    layer: "top",
    center: { x: 0, y: 0 },
    rotation: 0,
    width: 10,
    height: 10,
    obstructs_within_bounds: true,
  },
]

const convertOutline = async (
  outline: { x: number; y: number }[],
  componentName: string,
) => {
  const circuitJson = [
    ...baseElements,
    {
      type: "pcb_keepout",
      pcb_keepout_id: "keepout_outline",
      shape: "outline",
      outline,
      stroke_width: 0.2,
      layers: ["top"],
    },
  ] as AnyCircuitElement[]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName,
  })

  expect(tscircuit).not.toContain("<keepout")

  const rendered = (await runTscircuitCode(`
${tscircuit}

circuit.add(
  <board width="20mm" height="20mm">
    <${componentName} />
  </board>,
)
  `)) as AnyCircuitElement[]

  expect(rendered.filter((elm) => elm.type === "pcb_keepout")).toHaveLength(0)
}

test("test29 rejects a square outline", async () => {
  // Closed, but aspect ratio is fine while radius variation is enormous:
  // corners sit at sqrt(2)r, edge midpoints at r.
  const outline = [
    { x: 0, y: 0 },
    { x: 2, y: 0 },
    { x: 2, y: 2 },
    { x: 0, y: 2 },
    { x: 0, y: 0 },
  ]
  await convertOutline(outline, "Test29Square")
})

test("test29 rejects an elongated ellipse", async () => {
  const outline = []
  for (let i = 0; i <= 48; i++) {
    const angle = (i / 48) * Math.PI * 2
    outline.push({ x: 5 * Math.cos(angle), y: 1 * Math.sin(angle) })
  }
  // Aspect ratio 0.2 is far below core's MINIMUM_CIRCULAR_OUTLINE_ASPECT_RATIO
  // of 0.99.
  await convertOutline(outline, "Test29Ellipse")
})

test("test29 rejects an L-shape", async () => {
  const outline = [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 4 },
    { x: 0, y: 4 },
    { x: 0, y: 0 },
  ]
  await convertOutline(outline, "Test29LShape")
})

test("test29 rejects an open path", async () => {
  // A circle that is missing its closing point: first and last differ.
  const outline = []
  for (let i = 0; i < 48; i++) {
    const angle = (i / 48) * Math.PI * 2
    outline.push({ x: 3 + Math.cos(angle), y: 3 + Math.sin(angle) })
  }
  await convertOutline(outline, "Test29OpenPath")
})

// Positive control: proves the four tests above are not passing vacuously.
// The same harness must still accept a genuinely circular outline.
test("test29 accepts a circular outline", async () => {
  const outline = []
  for (let i = 0; i < 48; i++) {
    const angle = (i / 48) * Math.PI * 2
    outline.push({ x: 3 + Math.cos(angle), y: 3 + Math.sin(angle) })
  }
  outline.push({ ...outline[0] })

  const circuitJson = [
    ...baseElements,
    {
      type: "pcb_keepout",
      pcb_keepout_id: "keepout_outline",
      shape: "outline",
      outline,
      stroke_width: 0.2,
      layers: ["top"],
    },
  ] as AnyCircuitElement[]

  const tscircuit = convertCircuitJsonToTscircuit(circuitJson, {
    componentName: "Test29Circle",
  })

  expect(tscircuit).toContain(
    '<keepout shape="circle" pcbX="3mm" pcbY="3mm" radius="1.1mm" />',
  )
})

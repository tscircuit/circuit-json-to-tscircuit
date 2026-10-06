import { expect, test } from "bun:test"
import type { CircuitJson, PcbFabricationNotePath } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

test("fabrication path fill and stroke flags survive board and component TSX", async () => {
  const paths: PcbFabricationNotePath[] = []
  const notes: CircuitJson = []
  const modes = [
    { label: "FILL", is_filled: true, has_stroke: false },
    { label: "FILL + STROKE", is_filled: true, has_stroke: true },
    { label: "STROKE", is_filled: false, has_stroke: true },
    { label: "LEGACY" },
  ]
  for (const layer of ["top", "bottom"] as const) {
    for (const [index, mode] of modes.entries()) {
      const x = -4.5 + index * 3
      const y = layer === "top" ? 2 : -2
      const path: PcbFabricationNotePath = {
        type: "pcb_fabrication_note_path",
        pcb_fabrication_note_path_id: `${layer}-${index}`,
        pcb_component_id: "component",
        layer,
        route: [
          { x: x - 0.25, y: y + 1 },
          { x: x + 0.25, y: y + 1 },
          { x: x + 0.25, y: y + 0.25 },
          { x: x + 1, y: y + 0.25 },
          { x: x + 1, y: y - 0.25 },
          { x: x + 0.25, y: y - 0.25 },
          { x: x + 0.25, y: y - 1 },
          { x: x - 0.25, y: y - 1 },
          { x: x - 0.25, y: y - 0.25 },
          { x: x - 1, y: y - 0.25 },
          { x: x - 1, y: y + 0.25 },
          { x: x - 0.25, y: y + 0.25 },
          { x: x - 0.25, y: y + 1 },
        ],
        stroke_width: index === 0 ? 0 : 0.15,
        color: "rgba(255, 255, 255, 0.5)",
        ...("is_filled" in mode ? { is_filled: mode.is_filled } : {}),
        ...("has_stroke" in mode ? { has_stroke: mode.has_stroke } : {}),
      }
      paths.push(path)
      notes.push(path, {
        type: "pcb_fabrication_note_text",
        pcb_fabrication_note_text_id: `label-${layer}-${index}`,
        pcb_component_id: "component",
        layer,
        text: `${layer.toUpperCase()} ${mode.label}`,
        anchor_position: { x, y: y - 1.35 },
        anchor_alignment: "center",
        font: "tscircuit2024",
        font_size: 0.25,
      })
    }
  }
  const board: CircuitJson = [
    {
      type: "pcb_board",
      pcb_board_id: "board",
      center: { x: 0, y: 0 },
      width: 14,
      height: 9,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
  ]
  const panels = [convertCircuitJsonToPcbSvg([...board, ...notes])]
  for (const kind of ["board", "component"] as const) {
    const source = convertCircuitJsonToTscircuit(
      kind === "board" ? [...board, ...notes] : notes,
      { componentName: "FabricationFill" },
    )
    expect(source.match(/isFilled=\{true\}/g)).toHaveLength(4)
    expect(source.match(/isFilled=\{false\}/g)).toHaveLength(2)
    expect(source.match(/hasStroke=\{false\}/g)).toHaveLength(2)
    expect(source.match(/hasStroke=\{true\}/g)).toHaveLength(4)
    const legacyLines = source
      .split("\n")
      .filter(
        (line) =>
          line.includes("<fabricationnotepath") && !line.includes("isFilled"),
      )
    expect(legacyLines).toHaveLength(2)
    expect(legacyLines.join("\n")).not.toContain("hasStroke")
    const rendered = await runTscircuitCode(
      kind === "board"
        ? source
        : `${source.replace("export const FabricationFill", "const FabricationFill")}\nexport default () => <board width="14mm" height="9mm"><FabricationFill /></board>`,
    )
    const renderedPaths = rendered.filter(
      (element) => element.type === "pcb_fabrication_note_path",
    )
    expect(renderedPaths).toHaveLength(paths.length)
    for (const path of paths) {
      const actual = renderedPaths.find(
        (element) =>
          element.layer === path.layer &&
          element.route[0].x === path.route[0].x &&
          element.route[0].y === path.route[0].y,
      )
      expect(actual).toBeDefined()
      expect(actual).toMatchObject({
        route: path.route,
        stroke_width: path.stroke_width,
        color: path.color,
        layer: path.layer,
      })
      expect(actual?.is_filled).toBe(path.is_filled)
      expect(actual?.has_stroke).toBe(path.has_stroke)
    }
    panels.push(convertCircuitJsonToPcbSvg(rendered))
  }
  await expect(
    stackSvgsHorizontally(panels, {
      gap: 24,
      targetSize: 1000,
      rootAttributes: {
        "aria-label":
          "Filled fabrication paths: original, board TSX, component TSX",
        role: "img",
      },
    }),
  ).toMatchSvgSnapshot(import.meta.path, "roundtrip")
})

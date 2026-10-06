import { expect, test } from "bun:test"
import type { CircuitJson, SourceNet, SourceTrace } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { runTscircuitCode } from "tscircuit"

test("preserves one source trace across branched bottom-layer PCB paths", async () => {
  const sourceCircuitJson: CircuitJson = [
    {
      type: "source_net",
      source_net_id: "source_net_branch",
      name: "BRANCH",
      member_source_group_ids: [],
    },
    {
      type: "source_component",
      source_component_id: "source_component_through_hole",
      ftype: "simple_chip",
      name: "J_TH",
    },
    {
      type: "source_port",
      source_port_id: "source_port_through_hole",
      source_component_id: "source_component_through_hole",
      name: "THROUGH_HOLE",
      pin_number: 1,
    },
    {
      type: "pcb_port",
      pcb_port_id: "pcb_port_through_hole",
      source_port_id: "source_port_through_hole",
      x: -7,
      y: 4,
      layers: ["top", "bottom"],
      pcb_component_id: "pcb_component_through_hole",
    },
    {
      type: "pcb_plated_hole",
      pcb_plated_hole_id: "pcb_plated_hole",
      pcb_component_id: "pcb_component_through_hole",
      pcb_port_id: "pcb_port_through_hole",
      port_hints: ["1"],
      x: -7,
      y: 4,
      shape: "circle",
      outer_diameter: 1.4,
      hole_diameter: 0.8,
      layers: ["top", "bottom"],
    },
    ...[-5, 5, 5].flatMap((x, index) => {
      const number = index + 1
      return [
        {
          type: "source_component" as const,
          source_component_id: `source_component_${number}`,
          ftype: "simple_chip" as const,
          name: `J${number}`,
        },
        {
          type: "source_port" as const,
          source_port_id: `source_port_${number}`,
          source_component_id: `source_component_${number}`,
          name: `PIN_${number}`,
          pin_number: 1,
          port_hints: ["1", "pin1"],
        },
        {
          type: "pcb_port" as const,
          pcb_port_id: `pcb_port_${number}`,
          source_port_id: `source_port_${number}`,
          x,
          y: index === 0 ? 0 : index === 1 ? 3 : -3,
          layers: ["bottom" as const],
          pcb_component_id: `pcb_component_${number}`,
        },
        {
          type: "pcb_smtpad" as const,
          pcb_smtpad_id: `pcb_smtpad_${number}`,
          pcb_component_id: `pcb_component_${number}`,
          pcb_port_id: `pcb_port_${number}`,
          port_hints: ["1"],
          x,
          y: index === 0 ? 0 : index === 1 ? 3 : -3,
          layer: "bottom" as const,
          shape: "rect" as const,
          width: 1,
          height: 1,
        },
      ]
    }),
    {
      type: "source_trace",
      source_trace_id: "source_trace_branch",
      connected_source_port_ids: [
        "source_port_1",
        "source_port_2",
        "source_port_3",
      ],
      connected_source_net_ids: ["source_net_branch"],
    },
    {
      type: "pcb_board",
      pcb_board_id: "pcb_board",
      center: { x: 0, y: 0 },
      width: 18,
      height: 12,
      thickness: 1.6,
      num_layers: 2,
      material: "fr4",
    },
    ...[
      [
        { x: -5, y: 0 },
        { x: 0, y: 0 },
      ],
      [
        { x: 0, y: 0 },
        { x: 5, y: 3 },
      ],
      [
        { x: 0, y: 0 },
        { x: 5, y: -3 },
      ],
    ].map((points, index) => ({
      type: "pcb_trace" as const,
      pcb_trace_id: `pcb_trace_${index + 1}`,
      source_trace_id: "source_trace_branch",
      route: points.map((point) => ({
        route_type: "wire" as const,
        ...point,
        width: 0.35,
        layer: "bottom" as const,
      })),
    })),
    {
      type: "pcb_note_text",
      pcb_note_text_id: "pcb_note_text",
      pcb_component_id: "pcb_component_1",
      anchor_position: { x: 0, y: 5 },
      anchor_alignment: "center",
      font: "tscircuit2024",
      font_size: 0.45,
      layer: "top",
      text: "ONE SOURCE TRACE / THREE PCB PATHS",
      color: "#66aaff",
    },
  ]

  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: "BranchedTraceBoard",
  })
  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const renderedPcbTraces = renderedCircuitJson.filter(
    (element) => element.type === "pcb_trace",
  )
  const renderedSourceTraceIds = new Set(
    renderedPcbTraces.map((pcbTrace) => pcbTrace.source_trace_id),
  )
  const renderedNet = renderedCircuitJson.find(
    (element): element is SourceNet =>
      element.type === "source_net" && element.name === "BRANCH",
  )
  const renderedSourceTrace = renderedCircuitJson.find(
    (element): element is SourceTrace =>
      element.type === "source_trace" &&
      renderedSourceTraceIds.has(element.source_trace_id),
  )

  expect(generatedTscircuit).toContain("<trace")
  expect(generatedTscircuit).not.toContain("<pcbtrace")
  expect(renderedPcbTraces).toHaveLength(3)
  expect(
    renderedPcbTraces.every((pcbTrace) =>
      pcbTrace.route.every(
        (point) => point.route_type !== "wire" || point.layer === "bottom",
      ),
    ),
  ).toBe(true)
  expect(renderedSourceTraceIds.size).toBe(1)
  expect(renderedSourceTrace?.connected_source_net_ids).toContain(
    renderedNet?.source_net_id,
  )
  expect(renderedSourceTrace?.connected_source_port_ids).toHaveLength(3)

  const pcbSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson)
  await expect(pcbSvg).toMatchSvgSnapshot(import.meta.path, "pcb")
})

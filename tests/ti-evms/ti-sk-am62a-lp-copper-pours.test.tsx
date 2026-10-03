import { expect, test } from "bun:test"
import type { CircuitJson, PcbCopperPourPolygon } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import { convertCircuitJsonToTscircuit } from "lib"
import { stackSvgsHorizontally } from "stack-svgs"
import { runTscircuitCode } from "tscircuit"

const skAm62aLpCopperPourRepro: CircuitJson = [
  {
    type: "source_net",
    source_net_id: "source_net_core_power_strap",
    name: "CORE_PWR_STRAP",
    member_source_group_ids: [],
  },
  {
    type: "source_net",
    source_net_id: "source_net_rgmii2_reset",
    name: "CPSW_RGMII2_RSTN",
    member_source_group_ids: [],
  },
  {
    type: "pcb_board",
    pcb_board_id: "pcb_board_sk_am62a_lp",
    center: { x: 0, y: 0 },
    width: 84.99983,
    height: 150.096728,
    thickness: 1.29004,
    num_layers: 12,
    material: "fr4",
  },
  {
    type: "pcb_copper_pour",
    pcb_copper_pour_id: "pcb_copper_pour_am62a_region_1",
    source_net_id: "source_net_core_power_strap",
    layer: "bottom",
    shape: "polygon",
    points: [
      { x: -26.707465, y: 4.151376 },
      { x: -26.685478, y: 4.207792 },
      { x: -26.65145, y: 4.257876 },
      { x: -26.581735, y: 4.315714 },
      { x: -26.762837, y: 4.472178 },
      { x: -26.943939, y: 4.315714 },
      { x: -26.874224, y: 4.257876 },
      { x: -26.840196, y: 4.207792 },
      { x: -26.818209, y: 4.151376 },
      { x: -26.800664, y: 4.13519 },
      { x: -26.77869, y: 4.125867 },
      { x: -26.746984, y: 4.125867 },
    ],
    covered_with_solder_mask: true,
  },
  {
    type: "pcb_copper_pour",
    pcb_copper_pour_id: "pcb_copper_pour_am62a_region_390",
    source_net_id: "source_net_rgmii2_reset",
    layer: "inner4",
    shape: "polygon",
    points: [
      { x: 18.061305, y: 42.693336 },
      { x: 18.124576, y: 42.66886 },
      { x: 18.180728, y: 42.630789 },
      { x: 18.245455, y: 42.55262 },
      { x: 19.567271, y: -42.443146 },
      { x: 19.748373, y: -42.594784 },
      { x: 19.929475, y: -42.443146 },
      { x: 19.851306, y: -42.378419 },
      { x: 19.813235, y: -42.322267 },
      { x: 19.780667, y: -42.250635 },
      { x: 19.742555, y: -42.239413 },
      { x: 19.707987, y: -42.258996 },
      { x: 19.683511, y: -42.322267 },
      { x: 19.64544, y: -42.378419 },
      { x: 19.567271, y: -42.443146 },
      { x: 18.245455, y: 42.55262 },
      { x: 18.397093, y: 42.733722 },
      { x: 18.245455, y: 42.914824 },
      { x: 18.180728, y: 42.836655 },
      { x: 18.124576, y: 42.798584 },
      { x: 18.052944, y: 42.766016 },
      { x: 18.041722, y: 42.727904 },
    ],
    covered_with_solder_mask: true,
  },
]

test("TI SK-AM62A-LP preserves solved copper pours without resolving them again", async () => {
  const generatedTscircuit = convertCircuitJsonToTscircuit(
    skAm62aLpCopperPourRepro,
    { componentName: "SkAm62aLpCopperPourRepro" },
  )

  expect(generatedTscircuit).toMatchInlineSnapshot(`
    "export const SkAm62aLpCopperPourRepro = () => (
      <board width="84.99983mm" height="150.096728mm" thickness="1.29004mm" layers={12} material="fr4">
        <net name={"CORE_PWR_STRAP"} />
    <net name={"CPSW_RGMII2_RSTN"} />
    <pcbcopperpour shape="polygon" layer={"bottom"} connectsTo={"net[name=\\"CORE_PWR_STRAP\\"]"} coveredWithSolderMask={true} points={[{"x":-26.707465,"y":4.151376},{"x":-26.685478,"y":4.207792},{"x":-26.65145,"y":4.257876},{"x":-26.581735,"y":4.315714},{"x":-26.762837,"y":4.472178},{"x":-26.943939,"y":4.315714},{"x":-26.874224,"y":4.257876},{"x":-26.840196,"y":4.207792},{"x":-26.818209,"y":4.151376},{"x":-26.800664,"y":4.13519},{"x":-26.77869,"y":4.125867},{"x":-26.746984,"y":4.125867}]} />
    <pcbcopperpour shape="polygon" layer={"inner4"} connectsTo={"net[name=\\"CPSW_RGMII2_RSTN\\"]"} coveredWithSolderMask={true} points={[{"x":18.061305,"y":42.693336},{"x":18.124576,"y":42.66886},{"x":18.180728,"y":42.630789},{"x":18.245455,"y":42.55262},{"x":19.567271,"y":-42.443146},{"x":19.748373,"y":-42.594784},{"x":19.929475,"y":-42.443146},{"x":19.851306,"y":-42.378419},{"x":19.813235,"y":-42.322267},{"x":19.780667,"y":-42.250635},{"x":19.742555,"y":-42.239413},{"x":19.707987,"y":-42.258996},{"x":19.683511,"y":-42.322267},{"x":19.64544,"y":-42.378419},{"x":19.567271,"y":-42.443146},{"x":18.245455,"y":42.55262},{"x":18.397093,"y":42.733722},{"x":18.245455,"y":42.914824},{"x":18.180728,"y":42.836655},{"x":18.124576,"y":42.798584},{"x":18.052944,"y":42.766016},{"x":18.041722,"y":42.727904}]} />
      </board>
    )
    export default SkAm62aLpCopperPourRepro"
  `)
  expect(generatedTscircuit.match(/<pcbcopperpour/g)).toHaveLength(2)
  expect(generatedTscircuit).not.toContain("<copperpour")

  const renderedCircuitJson = (await runTscircuitCode(
    generatedTscircuit,
  )) as CircuitJson
  const sourceCopperPours = skAm62aLpCopperPourRepro.filter(
    (element): element is PcbCopperPourPolygon =>
      element.type === "pcb_copper_pour" && element.shape === "polygon",
  )
  const renderedCopperPours = renderedCircuitJson.filter(
    (element): element is PcbCopperPourPolygon =>
      element.type === "pcb_copper_pour" && element.shape === "polygon",
  )

  expect(
    renderedCopperPours.map(({ layer, points }) => ({ layer, points })),
  ).toEqual(sourceCopperPours.map(({ layer, points }) => ({ layer, points })))

  const comparisonViewport = {
    minX: -27.05,
    minY: 4.05,
    maxX: -26.55,
    maxY: 4.55,
  }
  const comparisonSvg = stackSvgsHorizontally(
    [
      convertCircuitJsonToPcbSvg(skAm62aLpCopperPourRepro, {
        height: 640,
        layer: "bottom",
        matchBoardAspectRatio: false,
        viewport: comparisonViewport,
        width: 640,
      }),
      convertCircuitJsonToPcbSvg(renderedCircuitJson, {
        height: 640,
        layer: "bottom",
        matchBoardAspectRatio: false,
        viewport: comparisonViewport,
        width: 640,
      }),
    ],
    {
      gap: 24,
      rootAttributes: {
        "aria-label":
          "TI SK-AM62A-LP copper pours: source Circuit JSON on left, generated tscircuit render on right",
        role: "img",
      },
    },
  )
  await expect(comparisonSvg).toMatchSvgSnapshot(
    import.meta.path,
    "pcb-comparison",
  )
})

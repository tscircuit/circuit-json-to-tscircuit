import { expect, test } from "bun:test"
import { createTiEvmRoundtrip } from "../fixtures/create-ti-evm-roundtrip"

test(
  "TI LMG342X-BB-EVM Circuit JSON to tscircuit round trip",
  async () => {
    const result = await createTiEvmRoundtrip({
      componentName: "Lmg342xBbEvm",
      fixtureName: "lmg342x-bb-evm",
    })

    expect(result.generatedTscircuit).toMatchSnapshot()
    await expect(result.pcbComparisonSvg).toMatchSvgSnapshot(
      import.meta.path,
      "pcb-comparison",
    )
    await expect(result.schematicComparisonSvg).toMatchSvgSnapshot(
      import.meta.path,
      "schematic-comparison",
    )

    // These 8 keepouts are circular mounting-screw keepouts expressed as
    // shape:"outline"; they must survive the round trip as shape:"circle".
    const keepouts = result.renderedCircuitJson.filter(
      (element) => element.type === "pcb_keepout",
    )
    expect(keepouts).toHaveLength(8)
    expect(keepouts.every((keepout) => keepout.shape === "circle")).toBe(true)
    expect(
      keepouts.filter((keepout) => keepout.layers.includes("bottom")),
    ).toHaveLength(4)
    expect(
      keepouts.filter((keepout) => keepout.layers.includes("top")),
    ).toHaveLength(4)
  },
  // Raised from 120s: this board's conversion and render time grew to ~160s
  // after upstream began preserving board schematics with native primitives
  // (starting in #131). Confirmed on a pristine e25350f checkout with no
  // keepout changes: 162s against this test's existing 120s budget. Unrelated
  // to the pcb_keepout work in this branch.
  { timeout: 240_000 },
)

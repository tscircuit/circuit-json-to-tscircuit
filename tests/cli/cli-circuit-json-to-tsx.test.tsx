import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { getCliTestFixture } from "../fixtures/get-cli-test-fixture"

test("should convert sample circuit.json to TSX", async () => {
  const { tmpDir, runCommand } = await getCliTestFixture()

  const inputPath = join(__dirname, "../../assets/input-circuit-json.json")
  const outputPath = join(tmpDir, "output.tsx")

  // Run the conversion command
  const { stdout, stderr } = await runCommand(
    `circuit-json-to-tscircuit ${inputPath} -o ${outputPath}`,
  )
  expect(stderr).toBe("")

  // Verify output file content
  const output = await readFile(outputPath, "utf-8")
  expect(output).toMatchInlineSnapshot(`
    "import { type ChipProps } from "tscircuit"
    export const Circuit = (props: ChipProps) => (
      <chip
        footprint={<footprint>
            <smtpad portHints={["pin2"]} pcbX="0.753364mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="0.8064754mm" height="0.8640064mm" shape="rect" />
    <smtpad portHints={["pin1"]} pcbX="-0.753364mm" pcbY="0mm" layer="top" coveredWithSolderMask={false} width="0.8064754mm" height="0.8640064mm" shape="rect" />
    <silkscreenpath route={[{"x":0.42621199999996406,"y":-0.6606031999999686},{"x":1.3850873999999749,"y":-0.6606031999999686},{"x":1.3850873999999749,"y":0.6606031999999686},{"x":0.42621199999996406,"y":0.6606031999999686}]} strokeWidth={0.1} />
    <silkscreenpath route={[{"x":-0.42621200000007775,"y":-0.6606031999999686},{"x":-1.3850874000000886,"y":-0.6606031999999686},{"x":-1.3850874000000886,"y":0.6606031999999686},{"x":-0.42621200000007775,"y":0.6606031999999686}]} strokeWidth={0.1} />
    <silkscreentext pcbX={-0.0127} pcbY={1.6604} anchorAlignment="center" fontSize={1} font="tscircuit2024" pcbRotation="0deg" layer="top" text="unnamed_chip1" />
    <courtyardoutline outline={[{"x":-1.647000000000162,"y":0.9103999999999814},{"x":1.6216000000000577,"y":0.9103999999999814},{"x":1.6216000000000577,"y":-0.9103999999998678},{"x":-1.647000000000162,"y":-0.9103999999998678},{"x":-1.647000000000162,"y":0.9103999999999814}]} layer="top" />
          </footprint>}
        symbol={<symbol>
      <schematictext text="A_0603WAF1002T5E" x={-0.6000000000000001} y={-0.33} anchorAlignment="left" fontSize={0.18} color="#006464" rotation={0} />
      <schematictext text="" x={-0.6000000000000001} y={0.33} anchorAlignment="left" fontSize={0.18} color="#006464" rotation={0} />
    </symbol>}
        {...props}
      />
    )"
    `)
})

test("should require output path", async () => {
  const { runCommand } = await getCliTestFixture()

  const inputPath = join(__dirname, "../../assets/input-circuit-json.json")

  // Run command without output path
  await expect(
    runCommand(`circuit-json-to-tscircuit ${inputPath}`),
  ).rejects.toThrow("Output path is required. Use -o or --output option.")
})

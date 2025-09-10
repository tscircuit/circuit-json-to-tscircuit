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
            <smtpad portHints={["1","left"]} pcbX="-0.5mm" pcbY="0mm" width="0.6000000000000001mm" height="0.6000000000000001mm" shape="rect" />
    <smtpad portHints={["2","right"]} pcbX="0.5mm" pcbY="0mm" width="0.6000000000000001mm" height="0.6000000000000001mm" shape="rect" />
          </footprint>}
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

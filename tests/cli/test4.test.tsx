import { expect, test } from "bun:test"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { getCliTestFixture } from "../fixtures/get-cli-test-fixture"

test("should convert sample circuit.json to TSX", async () => {
  const { tmpDir, runCommand } = await getCliTestFixture()

  const inputPath = join(__dirname, "sample-input.json")
  const outputPath = join(tmpDir, "output.tsx")

  // Run the conversion command
  const { stdout, stderr } = await runCommand(`circuit-json-to-tscircuit ${inputPath} -o ${outputPath}`)
  expect(stderr).toBe("")

  // Verify output file content
  const output = await readFile(outputPath, "utf-8")
  expect(output).toContain("export const Circuit = (props: Props)")
  expect(output).toContain("<chip")
  expect(output).toContain("<footprint>")
  expect(output).toContain("<smtpad")
  expect(output).toContain('portHints={["1","left"]}')
  expect(output).toContain('pcbX="-0.5mm"')
  expect(output).toContain('pcbY="0mm"')
  expect(output).toContain('width="0.6000000000000001mm"')
  expect(output).toContain('height="0.6000000000000001mm"')
  expect(output).toContain('shape="rect"')
})

test("should require output path", async () => {
  const { runCommand } = await getCliTestFixture()

  const inputPath = join(__dirname, "sample-input.json")

  // Run command without output path
  await expect(runCommand(`circuit-json-to-tscircuit ${inputPath}`))
    .rejects
    .toThrow("Error: Output path is required")
})

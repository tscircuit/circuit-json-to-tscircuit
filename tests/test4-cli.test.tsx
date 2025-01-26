import { test, expect } from "bun:test"
import path from "path"
import fs from "fs"
import { spawn } from "bun"

test("CLI should convert circuit JSON to TSX component", async () => {
  // Create test directory for artifacts
  const testDir = path.join(__dirname, "test4-artifacts")
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir, { recursive: true })
  }

  // Prepare input JSON file with a basic circuit
  const inputPath = path.join(testDir, "test-input.json")
  const inputJson = {
    elements: [
      {
        type: "resistor",
        name: "R1",
        resistance: "10k",
        footprint: "0402",
        nets: ["1", "2"],
      },
    ],
    nets: [
      {
        id: "1",
        name: "left",
      },
      {
        id: "2",
        name: "right",
      },
    ],
  }
  fs.writeFileSync(inputPath, JSON.stringify(inputJson, null, 2), "utf-8")

  // Set output path
  const outputPath = path.join(testDir, "TestComponent.tsx")
  if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath)
  }

  // Run CLI
  const cliPath = path.join(__dirname, "..", "bin", "cli.ts")
  const proc = spawn({
    cmd: ["bun", "run", cliPath, inputPath, "-o", outputPath],
    stdout: "pipe",
    stderr: "pipe",
  })

  const status = await proc.exited
  const stdout = await new Response(proc.stdout).text()
  const stderr = await new Response(proc.stderr).text()

  // Verify process succeeded
  expect(status).toBe(0)
  expect(stderr).toBe("")

  // Verify output file exists and contains expected content
  expect(fs.existsSync(outputPath)).toBe(true)
  const outputContent = fs.readFileSync(outputPath, "utf-8")
  expect(outputContent).toContain("export const TestComponent")
  expect(outputContent).toContain("<chip")
  expect(outputContent).toContain("<footprint>")

  // Clean up
  fs.rmSync(testDir, { recursive: true, force: true })
})

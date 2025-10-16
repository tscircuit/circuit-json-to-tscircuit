import { mkdtemp, rm } from "node:fs/promises"
import { join, resolve } from "node:path"
import { tmpdir } from "node:os"
import { exec } from "node:child_process"
import { promisify } from "node:util"

const execAsync = promisify(exec)

export interface CliTestFixture {
  tmpDir: string
  runCommand: (command: string) => Promise<{ stdout: string; stderr: string }>
}

export async function getCliTestFixture(): Promise<CliTestFixture> {
  const tmpDir = await mkdtemp(join(tmpdir(), "circuit-json-test-"))

  const runCommand = async (command: string) => {
    // Convert command like "circuit-json-to-tscircuit input.json -o output.tsx" to ["cli/main.ts", "input.json", "-o", "output.tsx"]
    const args = command.split(" ")
    if (args[0] !== "circuit-json-to-tscircuit") {
      throw new Error(
        `Expected command to start with "circuit-json-to-tscircuit", got: ${command}`,
      )
    }
    args[0] = resolve(process.cwd(), "cli/main.ts")

    const result = await execAsync(`bun ${args.join(" ")}`, {
      cwd: tmpDir,
    })
    return result
  }

  const cleanup = async () => {
    await rm(tmpDir, { recursive: true, force: true })
  }

  globalThis.deferredCleanupFns.push(cleanup)

  return {
    tmpDir,
    runCommand,
  }
}

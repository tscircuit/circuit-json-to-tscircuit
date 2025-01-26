#!/usr/bin/env node
import { Command } from "commander"
import { readFile, writeFile } from "node:fs/promises"
import { convertCircuitJsonToTscircuit } from "../lib"
import type { CircuitJson } from "circuit-json"
import pkg from "../package.json"

const program = new Command()

program
  .name("circuit-json-to-tscircuit")
  .description("Convert circuit.json files to TSCircuit components")
  .version(pkg.version)
  .argument("<input>", "Input circuit.json file path")
  .option("-o, --output <path>", "Output TSX file path")
  .action(async (input, options) => {
    if (!options.output) {
      throw new Error("Output path is required. Use -o or --output option.")
    }

    console.log(`Converting ${input} to ${options.output}`)

    // Read input JSON file
    console.log("Reading input file...")
    const jsonContent = await readFile(input, "utf-8")
    console.log("Parsing JSON...")
    const circuitJson = JSON.parse(jsonContent) as CircuitJson

    // Convert to TSCircuit
    if (!Array.isArray(circuitJson)) {
      throw new Error(
        "Invalid circuit.json: expected an array of circuit elements",
      )
    }

    console.log("Converting to TSCircuit...")
    const tsxContent = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "Circuit",
    })
    console.log("TSX content generated")

    // Write output TSX file
    console.log("Writing output file...")
    await writeFile(options.output, tsxContent, "utf-8")

    console.log("Conversion completed successfully!")
  })

if (process.argv.length === 2) {
  program.help()
} else {
  program.parse()
}

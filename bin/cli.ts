#!/usr/bin/env bun

import fs from "fs"
import path from "path"
import { convertCircuitJsonToTscircuit } from "../lib/index"

function main() {
  const args = process.argv.slice(2)
  if (args.length < 3 || args[1] !== "-o") {
    console.error(
      "Usage: circuit-json-to-tscircuit <input.json> -o <output.tsx>",
    )
    process.exit(1)
  }

  const inputFile = args[0]
  const outputFile = args[2]

  try {
    // Check if input file exists
    if (!fs.existsSync(inputFile)) {
      console.error(`Error: Input file "${inputFile}" does not exist`)
      process.exit(1)
    }

    // Read and parse input JSON
    const inputData = JSON.parse(fs.readFileSync(inputFile, "utf-8"))

    // Extract elements array from input JSON
    const circuitElements = inputData.elements || []

    // Convert to tscircuit code
    const tscircuitCode = convertCircuitJsonToTscircuit(circuitElements, {
      componentName: path.basename(outputFile, ".tsx"),
    })

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(outputFile)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Write output file
    fs.writeFileSync(outputFile, tscircuitCode, "utf-8")
    console.log(
      `Successfully wrote tscircuit component to ${path.resolve(outputFile)}`,
    )
  } catch (error: any) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

main()

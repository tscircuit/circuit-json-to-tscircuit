import { expect } from "bun:test"
import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { gunzipSync } from "node:zlib"
import type { CircuitJson } from "circuit-json"
import {
  convertCircuitJsonToPcbSvg,
  convertCircuitJsonToSchematicSvg,
} from "circuit-to-svg-sitara"
import { convertCircuitJsonToTscircuit } from "lib"
import { createComparisonSvg } from "./create-ti-evm-roundtrip"
import { sitaraBoards } from "./sitara-boards"
import { renderSitaraTsx } from "./render-sitara-tsx"
import { fixtures } from "./sitara/source-files.json"

type SitaraBoardId = (typeof sitaraBoards)[number]["id"]

async function readSitaraCircuitJson(
  fixtureName: string,
): Promise<CircuitJson> {
  const compressedCircuitJson = await readFile(
    join(import.meta.dir, "sitara", `${fixtureName}.circuit.json.gz`),
  )
  const fixture = fixtures.find(
    ({ filename }) => filename === `${fixtureName}.circuit.json.gz`,
  )
  if (
    !fixture ||
    createHash("sha256").update(compressedCircuitJson).digest("hex") !==
      fixture.sha256
  ) {
    throw new Error(
      `Missing or changed Sitara fixture checksum: ${fixtureName}`,
    )
  }
  return JSON.parse(
    gunzipSync(compressedCircuitJson).toString("utf8"),
  ) as CircuitJson
}

function getCircuitInventory(circuitJson: CircuitJson): Record<string, number> {
  const inventory: Record<string, number> = {}
  for (const element of circuitJson) {
    inventory[element.type] = (inventory[element.type] ?? 0) + 1
  }
  return Object.fromEntries(
    Object.entries(inventory).sort(([firstType], [secondType]) =>
      firstType.localeCompare(secondType),
    ),
  )
}

export async function expectSitaraPcbRoundtrip({
  boardId,
  testPath,
}: {
  boardId: SitaraBoardId
  testPath: string
}): Promise<void> {
  const board = sitaraBoards.find(({ id }) => id === boardId)
  if (!board) throw new Error(`Unknown Sitara board: ${boardId}`)
  const sourceCircuitJson = await readSitaraCircuitJson(`${boardId}-pcb`)
  console.log(
    `${board.name}: converting ${sourceCircuitJson.length} PCB elements to TSX`,
  )
  const generatedTscircuit = convertCircuitJsonToTscircuit(sourceCircuitJson, {
    componentName: board.componentName,
  })
  console.log(
    `${board.name}: rendering generated PCB TSX (${generatedTscircuit.length} characters)`,
  )
  const renderedCircuitJson = await renderSitaraTsx({
    generatedTscircuit,
    view: "pcb",
  })
  const sourceBoard = sourceCircuitJson.find(
    (element) => element.type === "pcb_board",
  )
  const renderedBoard = renderedCircuitJson.find(
    (element) => element.type === "pcb_board",
  )
  if (!sourceBoard || !renderedBoard)
    throw new Error(`${board.name}: missing source or rendered PCB board`)
  expect({
    source: getCircuitInventory(sourceCircuitJson),
    rendered: getCircuitInventory(renderedCircuitJson),
  }).toMatchSnapshot("PCB roundtrip inventory")

  for (const layer of ["top", "bottom"] as const) {
    const sourceSvg = convertCircuitJsonToPcbSvg(sourceCircuitJson, {
      layer,
      width: 800,
      height: 800,
      matchBoardAspectRatio: true,
      viewportTarget: { pcb_board_id: sourceBoard.pcb_board_id },
    })
    const renderedSvg = convertCircuitJsonToPcbSvg(renderedCircuitJson, {
      layer,
      width: 800,
      height: 800,
      matchBoardAspectRatio: true,
      viewportTarget: { pcb_board_id: renderedBoard.pcb_board_id },
    })
    await expect(
      createComparisonSvg({
        fixtureName: board.name,
        kind: "PCB",
        sourceSvg,
        renderedSvg,
      }),
    ).toMatchSvgSnapshot(testPath, `pcb-${layer}`)
  }
}

export async function expectSitaraSchematicRoundtrip({
  boardId,
  testPath,
}: {
  boardId: SitaraBoardId
  testPath: string
}): Promise<void> {
  const board = sitaraBoards.find(({ id }) => id === boardId)
  if (!board) throw new Error(`Unknown Sitara board: ${boardId}`)
  for (
    let sheetIndex = 0;
    sheetIndex < board.schematicSheetCount;
    sheetIndex++
  ) {
    const sheetNumber = String(sheetIndex + 1).padStart(2, "0")
    const sourceCircuitJson = await readSitaraCircuitJson(
      `${boardId}-schematic-${sheetNumber}`,
    )
    const generatedTscircuit = convertCircuitJsonToTscircuit(
      sourceCircuitJson,
      { componentName: `${board.componentName}Sheet${sheetNumber}` },
    )
    const renderedCircuitJson = await renderSitaraTsx({
      generatedTscircuit,
      view: "schematic",
    })
    expect({
      source: getCircuitInventory(sourceCircuitJson),
      rendered: getCircuitInventory(renderedCircuitJson),
    }).toMatchSnapshot(`schematic ${sheetNumber} roundtrip inventory`)
    const sourceSvg = convertCircuitJsonToSchematicSvg(sourceCircuitJson, {
      width: 800,
      height: 600,
    })
    const renderedSvg = convertCircuitJsonToSchematicSvg(renderedCircuitJson, {
      width: 800,
      height: 600,
    })
    await expect(
      createComparisonSvg({
        fixtureName: `${board.name} sheet ${sheetNumber}`,
        kind: "schematic",
        sourceSvg,
        renderedSvg,
      }),
    ).toMatchSvgSnapshot(testPath, sheetNumber)
  }
}

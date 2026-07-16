import type { CircuitJson } from "circuit-json"
import parserEstree from "prettier/plugins/estree"
import parserTs from "prettier/plugins/typescript"
import * as prettier from "prettier/standalone"
import { codeToHtml } from "shiki/bundle/web"
import { convertCircuitJsonToTscircuit } from "../lib"

async function formatTsx(code: string): Promise<string> {
  try {
    return await prettier.format(code, {
      parser: "typescript",
      plugins: [parserTs, parserEstree],
      semi: false,
      singleQuote: false,
    })
  } catch (error) {
    console.warn("Failed to format generated code:", error)
    return code
  }
}

// Get DOM elements
const uploadArea = document.getElementById("uploadArea")!
const fileInput = document.getElementById("fileInput")! as HTMLInputElement
const fileInfo = document.getElementById("fileInfo")!
const fileName = document.getElementById("fileName")!
const fileSize = document.getElementById("fileSize")!
const convertBtn = document.getElementById("convertBtn")! as HTMLButtonElement
const clearBtn = document.getElementById("clearBtn")!
const status = document.getElementById("status")!
const statusText = document.getElementById("statusText")!
const outputBody = document.getElementById("outputBody")!
const outputFileName = document.getElementById("outputFileName")!
const outputCode = document.getElementById("outputCode")!
const copyBtn = document.getElementById("copyBtn")! as HTMLButtonElement
const downloadBtn = document.getElementById("downloadBtn")! as HTMLButtonElement
const pasteArea = document.getElementById("pasteArea")! as HTMLTextAreaElement

let currentFile: File | null = null
let circuitJson: CircuitJson | null = null
let lastOutput: { fileName: string; code: string } | null = null

// Handle click / keyboard activation on upload area
uploadArea.addEventListener("click", () => {
  fileInput.click()
})

uploadArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault()
    fileInput.click()
  }
})

// Handle file selection
fileInput.addEventListener("change", (e) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0 && target.files[0]) {
    handleFile(target.files[0])
  }
})

// Handle drag over
uploadArea.addEventListener("dragover", (e) => {
  e.preventDefault()
  uploadArea.classList.add("dragover")
})

// Handle drag leave
uploadArea.addEventListener("dragleave", () => {
  uploadArea.classList.remove("dragover")
})

// Handle drop
uploadArea.addEventListener("drop", (e) => {
  e.preventDefault()
  uploadArea.classList.remove("dragover")

  if (
    e.dataTransfer &&
    e.dataTransfer.files.length > 0 &&
    e.dataTransfer.files[0]
  ) {
    handleFile(e.dataTransfer.files[0])
  }
})

function baseNameFromFile(file: File) {
  return file.name.replace(/\.json$/i, "")
}

// Handle file
async function handleFile(file: File) {
  currentFile = file

  // Show file info
  fileName.textContent = file.name
  fileSize.textContent = `${(file.size / 1024).toFixed(2)} KB`
  fileInfo.classList.add("visible")

  clearOutput()

  // Read and parse the file
  try {
    showStatus("Reading file...", "processing")
    const text = await file.text()
    circuitJson = JSON.parse(text)

    // Enable convert button
    convertBtn.disabled = false
    showStatus("File loaded. Ready to convert.", "success")
  } catch (error) {
    showStatus(
      `Error reading file: ${error instanceof Error ? error.message : String(error)}`,
      "error",
    )
    convertBtn.disabled = true
    circuitJson = null
  }
}

// Handle pasted JSON: parse automatically once the user pastes or leaves the field
function loadPastedJson() {
  const text = pasteArea.value.trim()

  currentFile = null
  fileInput.value = ""
  fileInfo.classList.remove("visible")
  clearOutput()

  if (!text) {
    convertBtn.disabled = true
    circuitJson = null
    hideStatus()
    return
  }

  try {
    circuitJson = JSON.parse(text)
    convertBtn.disabled = false
    showStatus("Pasted JSON loaded. Ready to convert.", "success")
  } catch (error) {
    showStatus(
      `Error parsing pasted JSON: ${error instanceof Error ? error.message : String(error)}`,
      "error",
    )
    convertBtn.disabled = true
    circuitJson = null
  }
}

pasteArea.addEventListener("paste", () => {
  // Wait for the pasted text to land in the textarea before reading it
  setTimeout(loadPastedJson, 0)
})

pasteArea.addEventListener("blur", loadPastedJson)

// Convert
convertBtn.addEventListener("click", async () => {
  if (!circuitJson) return

  try {
    showStatus("Converting to tscircuit...", "processing")
    convertBtn.disabled = true

    // Allow UI to update
    await new Promise((resolve) => setTimeout(resolve, 100))

    const baseName = currentFile ? baseNameFromFile(currentFile) : "Circuit"
    const outFileName = `${baseName}.tsx`

    const tsxContent = convertCircuitJsonToTscircuit(circuitJson, {
      componentName: "Circuit",
    })
    const formatted = await formatTsx(tsxContent)

    await setOutput(outFileName, formatted)

    showStatus("Conversion complete.", "success")
    convertBtn.disabled = false
  } catch (error) {
    showStatus(
      `Error during conversion: ${error instanceof Error ? error.message : String(error)}`,
      "error",
    )
    convertBtn.disabled = false
    console.error(error)
  }
})

// Copy output to clipboard
copyBtn.addEventListener("click", async () => {
  if (!lastOutput) return
  try {
    await navigator.clipboard.writeText(lastOutput.code)
    const original = copyBtn.textContent
    copyBtn.textContent = "Copied"
    setTimeout(() => {
      copyBtn.textContent = original
    }, 1500)
  } catch (error) {
    console.error("Failed to copy:", error)
  }
})

// Download output as a .tsx file
downloadBtn.addEventListener("click", () => {
  if (!lastOutput) return
  downloadFile(lastOutput.fileName, lastOutput.code)
})

// Clear button
clearBtn.addEventListener("click", () => {
  currentFile = null
  circuitJson = null
  fileInput.value = ""
  pasteArea.value = ""
  fileInfo.classList.remove("visible")
  clearOutput()
  convertBtn.disabled = true
  hideStatus()
})

async function setOutput(fileNameStr: string, code: string) {
  lastOutput = { fileName: fileNameStr, code }
  outputFileName.textContent = fileNameStr
  outputCode.innerHTML = await codeToHtml(code, {
    lang: "tsx",
    theme: "github-light",
  })
  outputBody.classList.add("has-code")
  copyBtn.disabled = false
  downloadBtn.disabled = false
}

function clearOutput() {
  lastOutput = null
  outputFileName.textContent = "output.tsx"
  outputCode.innerHTML = ""
  outputBody.classList.remove("has-code")
  copyBtn.disabled = true
  downloadBtn.disabled = true
}

// Helper function to download a file
function downloadFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

// Helper function to show status
function showStatus(
  message: string,
  type: "success" | "error" | "processing",
) {
  statusText.textContent = message
  status.className = `status visible ${type}`
}

// Helper function to hide status
function hideStatus() {
  status.classList.remove("visible")
}

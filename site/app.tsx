import type { CircuitJson } from "circuit-json"
import {
  type ChangeEvent,
  startTransition,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { convertCircuitJsonToTscircuit } from "../lib"

const runframeStandaloneUrl =
  "https://unpkg.com/@tscircuit/runframe@0.0.2071/dist/standalone-preview.min.js"

type ConversionState = "idle" | "ready" | "error"
type CopyState = "idle" | "copied" | "error"

export function App() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [circuitJsonText, setCircuitJsonText] = useState("")
  const [tsxCode, setTsxCode] = useState("")
  const [previewCircuitJson, setPreviewCircuitJson] =
    useState<CircuitJson | null>(null)
  const [generatedComponentName, setGeneratedComponentName] =
    useState("Circuit")
  const [fileName, setFileName] = useState<string | null>(null)
  const [status, setStatus] = useState<ConversionState>("idle")
  const [message, setMessage] = useState("Paste Circuit JSON or load a file.")
  const [isDragging, setIsDragging] = useState(false)
  const [frameUrl, setFrameUrl] = useState<string | null>(null)
  const [isFrameLoading, setIsFrameLoading] = useState(true)
  const [copyState, setCopyState] = useState<CopyState>("idle")

  useEffect(() => {
    if (!previewCircuitJson) {
      setFrameUrl(null)
      setIsFrameLoading(false)
      return
    }

    const html = createRunframeHtml({
      circuitJson: previewCircuitJson,
      projectName: getOutputBaseName(fileName),
    })
    const nextFrameUrl = URL.createObjectURL(
      new Blob([html], { type: "text/html" }),
    )

    setFrameUrl(nextFrameUrl)
    setIsFrameLoading(true)

    return () => {
      URL.revokeObjectURL(nextFrameUrl)
    }
  }, [previewCircuitJson, fileName])

  useEffect(() => {
    if (!circuitJsonText.trim()) return

    const timeoutId = window.setTimeout(() => {
      try {
        const parsed = parseCircuitJson(circuitJsonText)
        const nextTsx = convertCircuitJsonToTscircuit(parsed, {
          componentName: generatedComponentName,
        })

        startTransition(() => {
          setTsxCode(nextTsx)
          setPreviewCircuitJson(parsed)
          setStatus("ready")
          setMessage(`${parsed.length} elements converted in real time.`)
        })
      } catch (error) {
        setStatus("error")
        setMessage(
          error instanceof Error ? error.message : "Invalid Circuit JSON.",
        )
      }
    }, 350)

    return () => window.clearTimeout(timeoutId)
  }, [circuitJsonText, generatedComponentName])

  useEffect(() => {
    if (copyState !== "copied") return

    const timeoutId = window.setTimeout(() => setCopyState("idle"), 1800)
    return () => window.clearTimeout(timeoutId)
  }, [copyState])

  const inputElementCount = useMemo(() => {
    try {
      const parsed = parseCircuitJson(circuitJsonText)
      return parsed.length
    } catch {
      return 0
    }
  }, [circuitJsonText])

  const handleFileSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const [file] = Array.from(event.target.files ?? [])
    if (file) {
      void loadCircuitJsonFile(file)
    }
    event.target.value = ""
  }

  const loadCircuitJsonFile = async (file: File) => {
    setStatus("idle")
    setMessage("Reading Circuit JSON...")
    setFileName(file.name)

    try {
      const text = await file.text()
      const parsed = parseCircuitJson(text)
      const nextComponentName = getComponentName(file.name)
      const formattedJson = JSON.stringify(parsed, null, 2)

      startTransition(() => {
        const nextTsx = convertCircuitJsonToTscircuit(parsed, {
          componentName: nextComponentName,
        })
        setCircuitJsonText(formattedJson)
        setGeneratedComponentName(nextComponentName)
        setTsxCode(nextTsx)
        setPreviewCircuitJson(parsed)
        setStatus("ready")
        setMessage(`${parsed.length} elements converted. PCB preview updated.`)
      })
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "Invalid JSON file.")
    }
  }

  const handleCopyTsx = async () => {
    try {
      await copyTextToClipboard(tsxCode)
      setCopyState("copied")
    } catch {
      setCopyState("error")
    }
  }

  const handleDownloadTsx = () => {
    const url = URL.createObjectURL(
      new Blob([tsxCode], { type: "text/plain;charset=utf-8" }),
    )
    const link = document.createElement("a")
    link.href = url
    link.download = getOutputFileName(fileName)
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main
      className={`app-shell${isDragging ? " app-shell-dragging" : ""}`}
      onDragLeave={(event) => {
        if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
          return
        }
        setIsDragging(false)
      }}
      onDragOver={(event) => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
        setIsDragging(true)
      }}
      onDrop={(event) => {
        event.preventDefault()
        setIsDragging(false)
        const [file] = Array.from(event.dataTransfer.files)
        if (file) {
          void loadCircuitJsonFile(file)
        }
      }}
    >
      <nav className="app-nav" aria-label="Workbench navigation">
        <input
          ref={fileInputRef}
          className="file-input"
          type="file"
          accept=".json,.circuit.json,application/json"
          onChange={handleFileSelection}
        />
        <div className="nav-brand">
          <span>Covert circuit json to tscircuit</span>
        </div>
        <div className="nav-meta" aria-label="Current conversion details">
          <span>
            <strong>Source</strong>
            {fileName ?? "No file loaded"}
          </span>
          <span>
            <strong>Elements</strong>
            {inputElementCount}
          </span>
        </div>
        <button
          className="primary-button nav-button"
          type="button"
          onClick={() => fileInputRef.current?.click()}
        >
          Choose file
        </button>
      </nav>

      <section className="hero-panel">
        <div className="dropzone">
          <div className="dropzone-copy">
            <span className="dropzone-badge">Drag and drop</span>
            <strong>Circuit JSON files</strong>
            <p>Drop files here or paste raw Circuit JSON below.</p>
          </div>
        </div>

        <section className="panel source-panel">
          <div className="panel-header">
            <div>
              <h2>Source JSON</h2>
              <p>Paste or edit Circuit JSON here.</p>
            </div>
            <span className={`status-pill status-${status}`}>{message}</span>
          </div>

          <textarea
            className="source-editor"
            spellCheck={false}
            value={circuitJsonText}
            onChange={(event) => {
              setCircuitJsonText(event.target.value)
              setFileName(null)
            }}
            placeholder='[
  { "type": "source_component", "name": "U1" }
]'
            aria-label="Circuit JSON source"
          />
        </section>

        <section className="panel editor-panel">
          <div className="panel-header">
            <div>
              <h2>Generated TSX</h2>
              <p>{getOutputFileName(fileName)}</p>
            </div>
            <div className="editor-actions">
              <button
                className={`tool-button copy-button copy-${copyState}`}
                type="button"
                aria-label="Copy generated TSX"
                title="Copy generated TSX"
                onClick={() => void handleCopyTsx()}
              >
                <span className="copy-icon" aria-hidden="true">
                  <span />
                  <span />
                </span>
                <span className="button-text">
                  {copyState === "copied"
                    ? "Copied"
                    : copyState === "error"
                      ? "Copy failed"
                      : "Copy"}
                </span>
              </button>
              <button
                className="tool-button"
                type="button"
                aria-label="Download generated TSX"
                title="Download generated TSX"
                onClick={handleDownloadTsx}
              >
                <span className="download-icon" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="editor-shell">
            <textarea
              className="tsx-editor"
              spellCheck={false}
              value={tsxCode}
              onChange={(event) => setTsxCode(event.target.value)}
              aria-label="Generated tscircuit TSX"
            />
          </div>
        </section>
      </section>

      <section className="viewer-panel">
        {frameUrl ? (
          <div className="viewer-frame-shell">
            {isFrameLoading || status === "error" ? (
              <div className={`viewer-loading status-${status}`}>
                {status === "error" ? message : "Rendering PCB preview..."}
              </div>
            ) : null}
            <iframe
              className="viewer-iframe"
              title="PCB-only RunFrame preview"
              src={frameUrl}
              sandbox="allow-downloads allow-same-origin allow-scripts"
              onLoad={() => setIsFrameLoading(false)}
            />
          </div>
        ) : (
          <div className="empty-preview">
            <span className="empty-state-badge">Preview idle</span>
            <h2>PCB preview will appear here.</h2>
            <p>Load Circuit JSON to render the converted board.</p>
          </div>
        )}
      </section>
    </main>
  )
}

function createRunframeHtml({
  circuitJson,
  projectName,
}: {
  circuitJson: CircuitJson
  projectName: string
}) {
  const serializedCircuitJson = serializeForInlineScript(circuitJson)
  const serializedPreviewProps = serializeForInlineScript({
    availableTabs: ["pcb", "cad"],
    defaultActiveTab: "pcb",
    isWebEmbedded: true,
    projectName,
    showCodeTab: false,
    showFileMenu: false,
    showJsonTab: false,
    showRenderLogTab: false,
    showRightHeaderContent: true,
    showToggleFullScreen: false,
  })

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body, #root {
        height: 100%;
        margin: 0;
      }

      body {
        background: #111;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.CIRCUIT_JSON = ${serializedCircuitJson};
      window.CIRCUIT_JSON_PREVIEW_PROPS = ${serializedPreviewProps};
    </script>
    <script src="${runframeStandaloneUrl}"></script>
  </body>
</html>`
}

function serializeForInlineScript(value: unknown) {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
}

async function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // Some local/static contexts expose clipboard but reject writes.
    }
  }

  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "")
  textarea.style.position = "fixed"
  textarea.style.top = "0"
  textarea.style.left = "-9999px"
  document.body.appendChild(textarea)
  textarea.select()

  try {
    if (!document.execCommand("copy")) {
      throw new Error("Copy command failed.")
    }
  } finally {
    document.body.removeChild(textarea)
  }
}

function parseCircuitJson(text: string): CircuitJson {
  if (!text.trim()) {
    throw new Error("Circuit JSON is empty.")
  }

  const parsed = JSON.parse(text)
  if (!Array.isArray(parsed)) {
    throw new Error("Invalid circuit.json: expected an array of elements.")
  }

  return parsed as CircuitJson
}

function getComponentName(fileName: string) {
  return sanitizeComponentName(fileName.replace(/(\.circuit)?\.json$/i, ""))
}

function sanitizeComponentName(value: string) {
  const words = value
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  const name = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(/^[0-9]+/, "")

  return name || "Circuit"
}

function getOutputFileName(fileName: string | null) {
  if (!fileName) return "circuit.tsx"
  return `${fileName.replace(/(\.circuit)?\.json$/i, "")}.tsx`
}

function getOutputBaseName(fileName: string | null) {
  if (!fileName) return "board"
  return fileName.replace(/(\.circuit)?\.json$/i, "")
}

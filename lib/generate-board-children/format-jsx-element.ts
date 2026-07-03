export type JsxProps = Record<string, unknown>

const formatJsxProp = (name: string, value: unknown): string => {
  const serializedValue = JSON.stringify(value)
  if (typeof value === "string") return `  ${name}=${serializedValue}`

  return `  ${name}={${serializedValue}}`
}

export const formatJsxElement = (name: string, props: JsxProps): string => {
  const propLines = Object.entries(props)
    .filter(([, value]) => value !== undefined)
    .map(([name, value]) => formatJsxProp(name, value))

  return [`<${name}`, ...propLines, "/>"].join("\n")
}

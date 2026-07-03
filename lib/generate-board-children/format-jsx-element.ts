export type JsxAttributes = Record<string, unknown>

const formatJsxAttribute = (name: string, value: unknown): string => {
  const serializedValue = JSON.stringify(value)
  if (typeof value === "string") return `  ${name}=${serializedValue}`

  return `  ${name}={${serializedValue}}`
}

export const formatJsxElement = (
  name: string,
  attributes: JsxAttributes,
): string => {
  const attributeLines = Object.entries(attributes)
    .filter(([, value]) => value !== undefined)
    .map(([name, value]) => formatJsxAttribute(name, value))

  return [`<${name}`, ...attributeLines, "/>"].join("\n")
}

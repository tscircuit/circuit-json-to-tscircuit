export type TsxProps = Record<string, unknown>

const formatTsxProp = (name: string, value: unknown): string => {
  const serializedValue = JSON.stringify(value)
  if (typeof value === "string") return `  ${name}=${serializedValue}`

  return `  ${name}={${serializedValue}}`
}

export const formatTsxElement = (name: string, props: TsxProps): string => {
  const propLines = Object.entries(props)
    .filter(([, value]) => value !== undefined)
    .map(([name, value]) => formatTsxProp(name, value))

  return [`<${name}`, ...propLines, "/>"].join("\n")
}

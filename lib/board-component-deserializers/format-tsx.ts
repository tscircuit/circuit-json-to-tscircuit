export type TsxProps = Record<string, unknown>

interface FormatTsxPropsOptions {
  indent?: string
  separator?: string
}

const formatTsxProp = (name: string, value: unknown): string => {
  const serializedValue = JSON.stringify(value)
  if (typeof value === "string") return `${name}=${serializedValue}`

  return `${name}={${serializedValue}}`
}

const formatTsxProps = (
  props: TsxProps,
  { indent = "  ", separator = "\n" }: FormatTsxPropsOptions = {},
): string =>
  Object.entries(props)
    .filter(([, value]) => value !== undefined)
    .map(([name, value]) => `${indent}${formatTsxProp(name, value)}`)
    .join(separator)

const indentTsx = (tsx: string): string =>
  tsx
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n")

export const formatTsxElement = (
  name: string,
  props: TsxProps,
  children?: string,
): string => {
  if (children !== undefined) {
    const formattedProps = formatTsxProps(props, {
      indent: "",
      separator: " ",
    })
    const openingTag = `<${name}${formattedProps ? ` ${formattedProps}` : ""}>`

    return [
      openingTag,
      children ? indentTsx(children) : undefined,
      `</${name}>`,
    ]
      .filter((line) => line !== undefined)
      .join("\n")
  }

  const formattedProps = formatTsxProps(props)
  return [`<${name}`, formattedProps, "/>"].filter(Boolean).join("\n")
}

export const formatDefaultExport = (tsx: string): string =>
  [`export default () => (`, indentTsx(tsx), ")"].join("\n")

export type TsxProps = Record<string, unknown>

const formatTsxProp = (name: string, prop: unknown): string => {
  const serializedProp = JSON.stringify(prop)
  if (typeof prop === "string") return `${name}=${serializedProp}`

  return `${name}={${serializedProp}}`
}

const formatTsxProps = (
  props: TsxProps,
  {
    indent = "  ",
    separator = "\n",
  }: {
    indent?: string
    separator?: string
  } = {},
): string =>
  Object.entries(props)
    .filter(([, prop]) => prop !== undefined)
    .map(([name, prop]) => `${indent}${formatTsxProp(name, prop)}`)
    .join(separator)

const indentTsx = (tsx: string): string =>
  tsx
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n")

export const formatTsxElement = ({
  name,
  props,
  children,
}: {
  name: string
  props: TsxProps
  children?: string
}): string => {
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

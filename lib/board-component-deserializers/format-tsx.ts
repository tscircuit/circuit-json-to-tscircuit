export type TsxProps = Record<string, unknown>

const formatTsxProp = (propName: string, prop: unknown): string => {
  const serializedProp = JSON.stringify(prop)
  if (typeof prop === "string") return `${propName}=${serializedProp}`

  return `${propName}={${serializedProp}}`
}

const formatTsxProps = (props: TsxProps): string[] =>
  Object.entries(props)
    .filter(([, prop]) => prop !== undefined)
    .map(([propName, prop]) => formatTsxProp(propName, prop))

const indentTsx = (tsx: string): string => tsx.replace(/^/gm, "  ")

export const formatTsxElement = ({
  tsxElementName,
  props,
  children,
}: {
  tsxElementName: string
  props: TsxProps
  children?: string
}): string => {
  const formattedProps = formatTsxProps(props)

  if (children !== undefined) {
    const inlineProps = formattedProps.join(" ")
    const openingTag = `<${tsxElementName}${inlineProps ? ` ${inlineProps}` : ""}>`

    return [
      openingTag,
      children ? indentTsx(children) : undefined,
      `</${tsxElementName}>`,
    ]
      .filter((line) => line !== undefined)
      .join("\n")
  }

  return [
    `<${tsxElementName}`,
    ...formattedProps.map((prop) => `  ${prop}`),
    "/>",
  ].join("\n")
}

export const formatDefaultExport = (tsx: string): string =>
  `export default () => (\n${indentTsx(tsx)}\n)`

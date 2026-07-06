export type TsxProps = Record<string, unknown>

const formatTsxProp = (name: string, prop: unknown): string => {
  const serializedProp = JSON.stringify(prop)
  if (typeof prop === "string") return `${name}=${serializedProp}`

  return `${name}={${serializedProp}}`
}

const formatTsxProps = (props: TsxProps): string[] =>
  Object.entries(props)
    .filter(([, prop]) => prop !== undefined)
    .map(([name, prop]) => formatTsxProp(name, prop))

const indentTsx = (tsx: string): string => tsx.replace(/^/gm, "  ")

export const formatTsxElement = ({
  name,
  props,
  children,
}: {
  name: string
  props: TsxProps
  children?: string
}): string => {
  const formattedProps = formatTsxProps(props)

  if (children !== undefined) {
    const inlineProps = formattedProps.join(" ")
    const openingTag = `<${name}${inlineProps ? ` ${inlineProps}` : ""}>`

    return [
      openingTag,
      children ? indentTsx(children) : undefined,
      `</${name}>`,
    ]
      .filter((line) => line !== undefined)
      .join("\n")
  }

  return [`<${name}`, ...formattedProps.map((prop) => `  ${prop}`), "/>"].join(
    "\n",
  )
}

export const formatDefaultExport = (tsx: string): string =>
  `export default () => (\n${indentTsx(tsx)}\n)`

import type { TsxProps } from "./format-tsx"

export interface PropsSchema {
  parse(props: unknown): object
}

type PropNameAliases = Record<string, string>

interface ExtractPropsFromElementParams {
  element: object | null
  propsSchema: PropsSchema
  propNameAliases?: PropNameAliases
}

const toCamelCase = (snakeCaseName: string): string =>
  snakeCaseName.replace(/_([a-z])/g, (_, letter: string) =>
    letter.toUpperCase(),
  )

export const camelCaseProps = (element: object | null): TsxProps =>
  Object.fromEntries(
    Object.entries(element ?? {}).map(([snakeCaseName, prop]) => [
      toCamelCase(snakeCaseName),
      prop,
    ]),
  )

export const extractPropsFromElement = ({
  element,
  propsSchema,
  propNameAliases = {},
}: ExtractPropsFromElementParams): TsxProps => {
  const candidateProps = camelCaseProps(element)

  for (const [sourceName, targetName] of Object.entries(propNameAliases)) {
    candidateProps[targetName] = candidateProps[sourceName]
    delete candidateProps[sourceName]
  }

  return Object.fromEntries(Object.entries(propsSchema.parse(candidateProps)))
}

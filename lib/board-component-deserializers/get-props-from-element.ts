import type { TsxProps } from "./format-tsx"

export interface PropsSchema {
  safeParse(
    props: unknown,
  ): { success: true; data: object } | { success: false; error: unknown }
}

type PropNameAliases = Record<string, string>

const toCamelCase = (snakeCaseName: string): string =>
  snakeCaseName.replace(/_([a-z])/g, (_, letter: string) =>
    letter.toUpperCase(),
  )

const camelCaseProps = (element: object | null): TsxProps =>
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
}: {
  element: object | null
  propsSchema: PropsSchema
  propNameAliases?: PropNameAliases
}): TsxProps => {
  const candidateProps = camelCaseProps(element)

  for (const [sourceName, targetName] of Object.entries(propNameAliases)) {
    candidateProps[targetName] = candidateProps[sourceName]
    delete candidateProps[sourceName]
  }

  const parseResult = propsSchema.safeParse(candidateProps)
  if (!parseResult.success) {
    console.warn(
      "Failed to parse Circuit JSON element props",
      parseResult.error,
    )
    return {}
  }

  return Object.fromEntries(Object.entries(parseResult.data))
}

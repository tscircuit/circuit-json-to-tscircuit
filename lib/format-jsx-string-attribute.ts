export const formatJsxStringAttribute = (text: unknown): string => {
  const stringText = String(text ?? "")

  if (!/["\\\r\n\t{}<&>]/.test(stringText)) {
    return `"${stringText}"`
  }

  return `{${JSON.stringify(stringText)}}`
}

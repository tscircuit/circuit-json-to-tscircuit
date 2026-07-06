import { mmStr } from "@tscircuit/mm"

export const formatOptionalMmAttr = (
  attrName: string,
  value: number | undefined,
): string => {
  if (value === undefined) return ""
  return ` ${attrName}="${mmStr(value)}"`
}

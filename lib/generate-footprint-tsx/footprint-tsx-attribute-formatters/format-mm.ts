import { mmStr } from "@tscircuit/mm"

export const formatMm = (value: number | undefined): string => mmStr(value ?? 0)

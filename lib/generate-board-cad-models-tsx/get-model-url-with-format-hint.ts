import type { CadModelUrl } from "./converter-types"

export function getModelUrlWithFormatHint({
  format,
  url,
}: CadModelUrl): string {
  const pathWithoutQuery = url.split(/[?#]/u)[0] ?? ""
  if (pathWithoutQuery.toLowerCase().endsWith(`.${format}`)) return url
  return `${url}#ext=${format}`
}

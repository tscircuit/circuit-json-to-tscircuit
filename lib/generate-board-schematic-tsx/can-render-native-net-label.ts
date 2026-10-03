// Match core's preprocessSelector checks for net names. The validator is not
// exported by @tscircuit/core; runtime regression tests keep these in sync.
// https://github.com/tscircuit/core/blob/main/lib/components/base-components/PrimitiveComponent/preprocessSelector.ts
export const canRenderNativeNetLabel = (name: string): boolean => {
  const selector = `net.${name}`
  if (
    /net\.[^\s>]*\./.test(selector) ||
    /net\.[^\s>]*[+-]/.test(selector) ||
    /net\.[0-9]/.test(selector)
  ) {
    return false
  }
  // A label is one literal name, not a selector expression. Whitespace and CSS
  // punctuation can parse as a different selection even when core accepts it.
  return /^\/?[A-Za-z0-9_]+$/.test(name)
}

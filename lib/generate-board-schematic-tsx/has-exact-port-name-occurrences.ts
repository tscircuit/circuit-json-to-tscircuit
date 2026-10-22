export const hasExactPortNameOccurrences = (
  portNames: string[],
  expectedPortNames: string[],
): boolean =>
  [...portNames].sort().join("|") === [...expectedPortNames].sort().join("|")

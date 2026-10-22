export const hasExactPortNames = (
  portNames: Set<string>,
  expectedPortNames: string[],
): boolean =>
  portNames.size === expectedPortNames.length &&
  expectedPortNames.every((portName) => portNames.has(portName))

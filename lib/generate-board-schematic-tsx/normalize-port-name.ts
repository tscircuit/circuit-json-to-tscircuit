export const normalizePortName = (portName: string): string =>
  portName.toLowerCase().replace(/[^a-z0-9]/gu, "")

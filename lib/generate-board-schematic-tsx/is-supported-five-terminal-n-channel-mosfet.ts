const SUPPORTED_N_CHANNEL_PART_PREFIXES = ["ISC0703NLS"]

export const isSupportedFiveTerminalNChannelMosfet = (
  componentValue: string,
): boolean =>
  /\bN(?:-|\s)?CHANNEL\b/u.test(componentValue) ||
  SUPPORTED_N_CHANNEL_PART_PREFIXES.some((partPrefix) =>
    componentValue.startsWith(partPrefix),
  )

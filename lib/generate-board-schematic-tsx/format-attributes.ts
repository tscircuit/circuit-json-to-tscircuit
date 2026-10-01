/** Omit absent source fields so tscircuit supplies its own defaults. */
export const formatAttributes = (attributes: Record<string, unknown>) =>
  Object.entries(attributes)
    .filter(([, attribute]) => attribute !== undefined && attribute !== null)
    .map(([name, attribute]) => `${name}={${JSON.stringify(attribute)}}`)
    .join(" ")

export const formatElement = (
  tagName: string,
  attributes: Record<string, unknown>,
) => `<${tagName} ${formatAttributes(attributes)} />`

export const escapeJsxText = (value: unknown): string =>
  String(value ?? "").replace(/"/g, '\\"')

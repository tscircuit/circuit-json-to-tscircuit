export function formatPointProp(point: {
  x: number
  y: number
  z: number
}): string {
  return `{ x: ${point.x}, y: ${point.y}, z: ${point.z} }`
}

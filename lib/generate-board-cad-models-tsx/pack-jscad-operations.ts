import jscad from "@jscad/modeling"
import { type JscadOperation, type JscadPolygon3 } from "jscad-planner"
import type { Point3 } from "./converter-types"
import { executeJscadOperation } from "./execute-jscad-operation"

interface PackedJscadOperations {
  jscad: JscadOperation
  size?: Point3
}

const copyPolygon = ({
  polygon,
  geometryColor,
}: {
  polygon: ReturnType<typeof jscad.geometries.geom3.toPolygons>[number]
  geometryColor: JscadPolygon3["color"]
}): JscadPolygon3 => ({
  vertices: polygon.vertices.map(([x, y, z]) => [x, y, z]),
  color: polygon.color ?? geometryColor,
})

const getPackedJscadSize = (polygons: JscadPolygon3[]): Point3 | undefined => {
  const vertices = polygons.flatMap((polygon) => polygon.vertices)
  if (vertices.length === 0) return undefined

  const [firstVertex, ...remainingVertices] = vertices
  let minX = firstVertex[0]
  let minY = firstVertex[1]
  let minZ = firstVertex[2]
  let maxX = firstVertex[0]
  let maxY = firstVertex[1]
  let maxZ = firstVertex[2]

  for (const [x, y, z] of remainingVertices) {
    minX = Math.min(minX, x)
    minY = Math.min(minY, y)
    minZ = Math.min(minZ, z)
    maxX = Math.max(maxX, x)
    maxY = Math.max(maxY, y)
    maxZ = Math.max(maxZ, z)
  }

  return { x: maxX - minX, y: maxY - minY, z: maxZ - minZ }
}

export const packJscadOperations = (
  operations: JscadOperation[],
): PackedJscadOperations | undefined => {
  const polygons: JscadPolygon3[] = []

  for (const operation of operations) {
    const geometry = executeJscadOperation(operation)
    if (!jscad.geometries.geom3.isA(geometry)) return undefined

    polygons.push(
      ...jscad.geometries.geom3.toPolygons(geometry).map((polygon) =>
        copyPolygon({
          polygon,
          geometryColor: geometry.color,
        }),
      ),
    )
  }

  return {
    jscad: { type: "createGeom3", polygons },
    size: getPackedJscadSize(polygons),
  }
}

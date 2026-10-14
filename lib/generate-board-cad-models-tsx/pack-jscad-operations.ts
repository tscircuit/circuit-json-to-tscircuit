import jscad from "@jscad/modeling"
import {
  executeJscadOperations,
  type JscadOperation,
  type JscadPolygon3,
} from "jscad-planner"

const executeJscadOperation = (operation: JscadOperation): unknown => {
  return executeJscadOperations(jscad, operation)
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

export const packJscadOperations = (
  operations: JscadOperation[],
): JscadOperation | undefined => {
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

  return { type: "createGeom3", polygons }
}

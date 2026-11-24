import { fp } from "@tscircuit/footprinter"
import type {
  AnyCircuitElement,
  PcbComponent,
  PcbCourtyardCircle,
  PcbCourtyardOutline,
  PcbCourtyardRect,
  PcbFabricationNotePath,
  PcbFabricationNoteRect,
  PcbFabricationNoteText,
  PcbHole,
  PcbPlatedHole,
  PcbSilkscreenCircle,
  PcbSilkscreenLine,
  PcbSilkscreenPath,
  PcbSilkscreenRect,
  PcbSilkscreenText,
  PcbSmtPad,
  SourcePort,
} from "circuit-json"

const COORD_TOLERANCE_MM = 1e-3
const ANGLE_TOLERANCE_DEG = 1e-2

const approxEqual = (
  a: number | undefined,
  b: number | undefined,
  tol = COORD_TOLERANCE_MM,
): boolean => Math.abs((a ?? 0) - (b ?? 0)) <= tol

const normalizeDegrees = (deg: number): number => ((deg % 360) + 360) % 360

const approxEqualAngle = (a: number, b: number): boolean => {
  const diff = Math.abs(normalizeDegrees(a) - normalizeDegrees(b))
  return Math.min(diff, 360 - diff) <= ANGLE_TOLERANCE_DEG
}

const extractNumericHints = (hints: string[] | undefined): string[] =>
  [...new Set((hints ?? []).filter((hint) => /^\d+$/u.test(hint)))].sort()

const sameStringArray = (a: string[], b: string[]): boolean =>
  a.length === b.length && a.every((value, idx) => value === b[idx])

const sortByXY = <T extends { x: number; y: number }>(items: T[]): T[] =>
  [...items].sort((a, b) =>
    Math.abs(a.x - b.x) > COORD_TOLERANCE_MM ? a.x - b.x : a.y - b.y,
  )

const sortByCenter = <T extends { center: { x: number; y: number } }>(
  items: T[],
): T[] =>
  [...items].sort((a, b) =>
    Math.abs(a.center.x - b.center.x) > COORD_TOLERANCE_MM
      ? a.center.x - b.center.x
      : a.center.y - b.center.y,
  )

const sortByAnchor = <T extends { anchor_position: { x: number; y: number } }>(
  items: T[],
): T[] =>
  [...items].sort((a, b) =>
    Math.abs(a.anchor_position.x - b.anchor_position.x) > COORD_TOLERANCE_MM
      ? a.anchor_position.x - b.anchor_position.x
      : a.anchor_position.y - b.anchor_position.y,
  )

const isMetadataOrDiagnosticElement = (element: AnyCircuitElement): boolean =>
  element.type === "pcb_component" ||
  element.type === "pcb_port" ||
  element.type === "cad_component" ||
  element.type === "pcb_solder_paste" ||
  element.type.endsWith("_warning") ||
  element.type.endsWith("_error")

const comparePointList = (
  a: Array<{ x: number; y: number }>,
  b: Array<{ x: number; y: number }>,
): boolean =>
  a.length === b.length &&
  a.every(
    (pt, idx) => approxEqual(pt.x, b[idx]!.x) && approxEqual(pt.y, b[idx]!.y),
  )

const compareRoutes = (
  locRoutes: Array<{
    route: Array<{ x: number; y: number }>
    stroke_width: number
    layer?: string
  }>,
  fpRoutes: Array<{
    route: Array<{ x: number; y: number }>
    stroke_width: number
    layer?: string
  }>,
): boolean => {
  if (locRoutes.length !== fpRoutes.length) return false
  const used = new Set<number>()
  for (const locItem of locRoutes) {
    const matchIdx = fpRoutes.findIndex((fpItem, idx) => {
      if (used.has(idx)) return false
      if ((locItem.layer ?? "top") !== (fpItem.layer ?? "top")) return false
      if (!approxEqual(locItem.stroke_width, fpItem.stroke_width)) return false
      return (
        comparePointList(locItem.route, fpItem.route) ||
        comparePointList(locItem.route, [...fpItem.route].reverse())
      )
    })
    if (matchIdx === -1) return false
    used.add(matchIdx)
  }
  return true
}

const matchesTemplateText = ({
  locText,
  fpText,
  componentName,
  sourcePortNameByPin,
}: {
  locText: string
  fpText: string
  componentName?: string
  sourcePortNameByPin: Map<number, string>
}): boolean => {
  if (locText === fpText) return true
  if (fpText === "{REF}") {
    return componentName ? locText === componentName : locText.length > 0
  }
  const pinMatch = /^\{PIN(\d+)\}$/iu.exec(fpText)
  if (pinMatch) {
    const pinNum = Number(pinMatch[1])
    const expectedPortName = sourcePortNameByPin.get(pinNum)
    return (
      locText.toLowerCase() === `pin${pinNum}` ||
      (expectedPortName !== undefined && locText === expectedPortName)
    )
  }
  return false
}

const compareSmtPads = (locPads: PcbSmtPad[], fpPads: PcbSmtPad[]): boolean => {
  if (locPads.length !== fpPads.length) return false
  if (
    locPads.some((pad) => pad.shape === "polygon") ||
    fpPads.some((pad) => pad.shape === "polygon")
  ) {
    return false
  }
  const sortedLoc = sortByXY(
    locPads as Array<Exclude<PcbSmtPad, { shape: "polygon" }>>,
  )
  const sortedFp = sortByXY(
    fpPads as Array<Exclude<PcbSmtPad, { shape: "polygon" }>>,
  )
  return sortedLoc.every((locPad, idx) => {
    const fpPad = sortedFp[idx]!
    if (locPad.shape !== fpPad.shape || locPad.layer !== fpPad.layer) {
      return false
    }
    if (
      (locPad.is_covered_with_solder_mask ?? false) !==
      (fpPad.is_covered_with_solder_mask ?? false)
    ) {
      return false
    }
    if (!approxEqual(locPad.x, fpPad.x) || !approxEqual(locPad.y, fpPad.y)) {
      return false
    }
    if (
      !sameStringArray(
        extractNumericHints(locPad.port_hints),
        extractNumericHints(fpPad.port_hints),
      )
    ) {
      return false
    }
    const locRec = locPad as unknown as Record<string, unknown>
    const fpRec = fpPad as unknown as Record<string, unknown>
    for (const dimKey of [
      "width",
      "height",
      "radius",
      "outer_width",
      "outer_height",
      "inner_radius",
      "outer_radius",
    ]) {
      const lv =
        typeof locRec[dimKey] === "number"
          ? (locRec[dimKey] as number)
          : undefined
      const fv =
        typeof fpRec[dimKey] === "number"
          ? (fpRec[dimKey] as number)
          : undefined
      if ((lv !== undefined || fv !== undefined) && !approxEqual(lv, fv)) {
        return false
      }
    }
    const locRot =
      typeof locRec.ccw_rotation === "number" ? locRec.ccw_rotation : 0
    const fpRot =
      typeof fpRec.ccw_rotation === "number" ? fpRec.ccw_rotation : 0
    return approxEqual(locRot, fpRot, ANGLE_TOLERANCE_DEG)
  })
}

const comparePlatedHoles = (
  locHoles: PcbPlatedHole[],
  fpHoles: PcbPlatedHole[],
): boolean => {
  if (locHoles.length !== fpHoles.length) return false
  if (
    locHoles.some((h) => !("x" in h && typeof h.x === "number")) ||
    fpHoles.some((h) => !("x" in h && typeof h.x === "number"))
  ) {
    return false
  }
  const sortedLoc = sortByXY(
    locHoles as Array<PcbPlatedHole & { x: number; y: number }>,
  )
  const sortedFp = sortByXY(
    fpHoles as Array<PcbPlatedHole & { x: number; y: number }>,
  )
  return sortedLoc.every((locHole, idx) => {
    const fpHole = sortedFp[idx]!
    if (locHole.shape !== fpHole.shape) return false
    if (
      (locHole.is_covered_with_solder_mask ?? false) !==
      (fpHole.is_covered_with_solder_mask ?? false)
    ) {
      return false
    }
    if (
      !sameStringArray(
        [...(locHole.layers ?? [])].sort(),
        [...(fpHole.layers ?? [])].sort(),
      )
    ) {
      return false
    }
    if (
      !approxEqual(locHole.x, fpHole.x) ||
      !approxEqual(locHole.y, fpHole.y)
    ) {
      return false
    }
    if (
      !sameStringArray(
        extractNumericHints(locHole.port_hints),
        extractNumericHints(fpHole.port_hints),
      )
    ) {
      return false
    }
    const locRec = locHole as unknown as Record<string, unknown>
    const fpRec = fpHole as unknown as Record<string, unknown>
    for (const dimKey of [
      "hole_diameter",
      "hole_width",
      "hole_height",
      "outer_diameter",
      "outer_width",
      "outer_height",
      "rect_pad_width",
      "rect_pad_height",
      "hole_offset_x",
      "hole_offset_y",
    ]) {
      const lv =
        typeof locRec[dimKey] === "number"
          ? (locRec[dimKey] as number)
          : undefined
      const fv =
        typeof fpRec[dimKey] === "number"
          ? (fpRec[dimKey] as number)
          : undefined
      if ((lv !== undefined || fv !== undefined) && !approxEqual(lv, fv)) {
        return false
      }
    }
    const locRot =
      typeof locRec.ccw_rotation === "number" ? locRec.ccw_rotation : 0
    const fpRot =
      typeof fpRec.ccw_rotation === "number" ? fpRec.ccw_rotation : 0
    return approxEqual(locRot, fpRot, ANGLE_TOLERANCE_DEG)
  })
}

export const doesLocalizedFootprintMatchLibrary = ({
  localizedElements,
  rawFootprinterString,
  componentName,
  sourcePorts = [],
}: {
  localizedElements: AnyCircuitElement[]
  rawFootprinterString?: string
  componentName?: string
  sourcePorts?: SourcePort[]
}): boolean => {
  const trimmed = rawFootprinterString?.trim()
  if (!trimmed) return false

  let fpElements: AnyCircuitElement[]
  try {
    fpElements = fp.string(trimmed).circuitJson() as AnyCircuitElement[]
  } catch {
    return false
  }
  if (!Array.isArray(fpElements) || fpElements.length === 0) {
    return false
  }

  const locPrimitives = localizedElements.filter(
    (el) => !isMetadataOrDiagnosticElement(el),
  )
  const fpPrimitives = fpElements.filter(
    (el) => !isMetadataOrDiagnosticElement(el),
  )
  if (locPrimitives.length !== fpPrimitives.length) {
    return false
  }

  const byType = <T extends AnyCircuitElement["type"]>(
    items: AnyCircuitElement[],
    type: T,
  ): Array<Extract<AnyCircuitElement, { type: T }>> =>
    items.filter(
      (item): item is Extract<AnyCircuitElement, { type: T }> =>
        item.type === type,
    )

  const supportedTypes = new Set<AnyCircuitElement["type"]>([
    "pcb_smtpad",
    "pcb_plated_hole",
    "pcb_hole",
    "pcb_silkscreen_path",
    "pcb_silkscreen_line",
    "pcb_silkscreen_rect",
    "pcb_silkscreen_circle",
    "pcb_silkscreen_text",
    "pcb_fabrication_note_path",
    "pcb_fabrication_note_rect",
    "pcb_fabrication_note_text",
    "pcb_courtyard_rect",
    "pcb_courtyard_circle",
    "pcb_courtyard_outline",
  ])

  for (const el of [...locPrimitives, ...fpPrimitives]) {
    if (!supportedTypes.has(el.type)) {
      return false
    }
  }
  for (const type of supportedTypes) {
    if (
      byType(locPrimitives, type).length !== byType(fpPrimitives, type).length
    ) {
      return false
    }
  }

  if (
    !compareSmtPads(
      byType(locPrimitives, "pcb_smtpad") as PcbSmtPad[],
      byType(fpPrimitives, "pcb_smtpad") as PcbSmtPad[],
    )
  ) {
    return false
  }

  if (
    !comparePlatedHoles(
      byType(locPrimitives, "pcb_plated_hole") as PcbPlatedHole[],
      byType(fpPrimitives, "pcb_plated_hole") as PcbPlatedHole[],
    )
  ) {
    return false
  }

  const locHoles = sortByXY(
    byType(locPrimitives, "pcb_hole").filter(
      (h): h is PcbHole & { x: number; y: number } =>
        "x" in h && typeof h.x === "number",
    ),
  )
  const fpHoles = sortByXY(
    byType(fpPrimitives, "pcb_hole").filter(
      (h): h is PcbHole & { x: number; y: number } =>
        "x" in h && typeof h.x === "number",
    ),
  )
  if (
    locHoles.length !== byType(locPrimitives, "pcb_hole").length ||
    fpHoles.length !== byType(fpPrimitives, "pcb_hole").length ||
    !locHoles.every((lh, idx) => {
      const fh = fpHoles[idx]!
      const lr = lh as unknown as Record<string, unknown>
      const fr = fh as unknown as Record<string, unknown>
      return (
        lh.hole_shape === fh.hole_shape &&
        approxEqual(lh.x, fh.x) &&
        approxEqual(lh.y, fh.y) &&
        approxEqual(
          typeof lr.hole_diameter === "number" ? lr.hole_diameter : undefined,
          typeof fr.hole_diameter === "number" ? fr.hole_diameter : undefined,
        ) &&
        approxEqual(
          typeof lr.hole_width === "number" ? lr.hole_width : undefined,
          typeof fr.hole_width === "number" ? fr.hole_width : undefined,
        ) &&
        approxEqual(
          typeof lr.hole_height === "number" ? lr.hole_height : undefined,
          typeof fr.hole_height === "number" ? fr.hole_height : undefined,
        )
      )
    })
  ) {
    return false
  }

  if (
    !compareRoutes(
      byType(locPrimitives, "pcb_silkscreen_path") as PcbSilkscreenPath[],
      byType(fpPrimitives, "pcb_silkscreen_path") as PcbSilkscreenPath[],
    ) ||
    !compareRoutes(
      byType(
        locPrimitives,
        "pcb_fabrication_note_path",
      ) as PcbFabricationNotePath[],
      byType(
        fpPrimitives,
        "pcb_fabrication_note_path",
      ) as PcbFabricationNotePath[],
    )
  ) {
    return false
  }

  const compareRects = <
    T extends PcbSilkscreenRect | PcbFabricationNoteRect | PcbCourtyardRect,
  >(
    locRects: T[],
    fpRects: T[],
  ): boolean => {
    const sLoc = sortByCenter(locRects)
    const sFp = sortByCenter(fpRects)
    return sLoc.every((lr, idx) => {
      const fr = sFp[idx]!
      const lRec = lr as unknown as Record<string, unknown>
      const fRec = fr as unknown as Record<string, unknown>
      if ((lr.layer ?? "top") !== (fr.layer ?? "top")) return false
      if (Boolean(lRec.is_filled) !== Boolean(fRec.is_filled)) return false
      if ((lRec.has_stroke ?? true) !== (fRec.has_stroke ?? true)) return false
      if (Boolean(lRec.is_stroke_dashed) !== Boolean(fRec.is_stroke_dashed)) {
        return false
      }
      const lStroke =
        typeof lRec.stroke_width === "number" ? lRec.stroke_width : undefined
      const fStroke =
        typeof fRec.stroke_width === "number" ? fRec.stroke_width : undefined
      if (
        (lStroke !== undefined || fStroke !== undefined) &&
        !approxEqual(lStroke, fStroke)
      ) {
        return false
      }
      const lRadius =
        typeof lRec.corner_radius === "number" ? lRec.corner_radius : undefined
      const fRadius =
        typeof fRec.corner_radius === "number" ? fRec.corner_radius : undefined
      if (
        (lRadius !== undefined || fRadius !== undefined) &&
        !approxEqual(lRadius, fRadius)
      ) {
        return false
      }
      const lRot = typeof lRec.ccw_rotation === "number" ? lRec.ccw_rotation : 0
      const fRot = typeof fRec.ccw_rotation === "number" ? fRec.ccw_rotation : 0
      return (
        approxEqual(lr.center.x, fr.center.x) &&
        approxEqual(lr.center.y, fr.center.y) &&
        approxEqual(lr.width, fr.width) &&
        approxEqual(lr.height, fr.height) &&
        approxEqual(lRot, fRot, ANGLE_TOLERANCE_DEG)
      )
    })
  }

  if (
    !compareRects(
      byType(locPrimitives, "pcb_silkscreen_rect"),
      byType(fpPrimitives, "pcb_silkscreen_rect"),
    ) ||
    !compareRects(
      byType(locPrimitives, "pcb_fabrication_note_rect"),
      byType(fpPrimitives, "pcb_fabrication_note_rect"),
    ) ||
    !compareRects(
      byType(locPrimitives, "pcb_courtyard_rect"),
      byType(fpPrimitives, "pcb_courtyard_rect"),
    )
  ) {
    return false
  }

  const compareCircles = <T extends PcbSilkscreenCircle | PcbCourtyardCircle>(
    locCircles: T[],
    fpCircles: T[],
  ): boolean => {
    const sLoc = sortByCenter(locCircles)
    const sFp = sortByCenter(fpCircles)
    return sLoc.every((lc, idx) => {
      const fc = sFp[idx]!
      const lRec = lc as unknown as Record<string, unknown>
      const fRec = fc as unknown as Record<string, unknown>
      if ((lc.layer ?? "top") !== (fc.layer ?? "top")) return false
      if (Boolean(lRec.is_filled) !== Boolean(fRec.is_filled)) return false
      const lStroke =
        typeof lRec.stroke_width === "number" ? lRec.stroke_width : undefined
      const fStroke =
        typeof fRec.stroke_width === "number" ? fRec.stroke_width : undefined
      if (
        (lStroke !== undefined || fStroke !== undefined) &&
        !approxEqual(lStroke, fStroke)
      ) {
        return false
      }
      return (
        approxEqual(lc.center.x, fc.center.x) &&
        approxEqual(lc.center.y, fc.center.y) &&
        approxEqual(lc.radius, fc.radius)
      )
    })
  }

  if (
    !compareCircles(
      byType(locPrimitives, "pcb_silkscreen_circle"),
      byType(fpPrimitives, "pcb_silkscreen_circle"),
    ) ||
    !compareCircles(
      byType(locPrimitives, "pcb_courtyard_circle"),
      byType(fpPrimitives, "pcb_courtyard_circle"),
    )
  ) {
    return false
  }

  const compareLines = (
    locLines: PcbSilkscreenLine[],
    fpLines: PcbSilkscreenLine[],
  ): boolean => {
    const used = new Set<number>()
    for (const ll of locLines) {
      const matchIdx = fpLines.findIndex((fl, idx) => {
        if (used.has(idx)) return false
        if ((ll.layer ?? "top") !== (fl.layer ?? "top")) return false
        if (!approxEqual(ll.stroke_width, fl.stroke_width)) return false
        return (
          (approxEqual(ll.x1, fl.x1) &&
            approxEqual(ll.y1, fl.y1) &&
            approxEqual(ll.x2, fl.x2) &&
            approxEqual(ll.y2, fl.y2)) ||
          (approxEqual(ll.x1, fl.x2) &&
            approxEqual(ll.y1, fl.y2) &&
            approxEqual(ll.x2, fl.x1) &&
            approxEqual(ll.y2, fl.y1))
        )
      })
      if (matchIdx === -1) return false
      used.add(matchIdx)
    }
    return true
  }

  if (
    !compareLines(
      byType(locPrimitives, "pcb_silkscreen_line"),
      byType(fpPrimitives, "pcb_silkscreen_line"),
    )
  ) {
    return false
  }

  const locOutlines = byType(
    locPrimitives,
    "pcb_courtyard_outline",
  ) as PcbCourtyardOutline[]
  const fpOutlines = byType(
    fpPrimitives,
    "pcb_courtyard_outline",
  ) as PcbCourtyardOutline[]
  if (
    !locOutlines.every(
      (lo, idx) =>
        (lo.layer ?? "top") === (fpOutlines[idx]!.layer ?? "top") &&
        comparePointList(lo.outline, fpOutlines[idx]!.outline),
    )
  ) {
    return false
  }

  const sourcePortNameByPin = new Map<number, string>()
  for (const port of sourcePorts) {
    if (port.pin_number !== undefined) {
      sourcePortNameByPin.set(port.pin_number, port.name)
    }
  }

  const pcbComponent = localizedElements.find(
    (el): el is PcbComponent => el.type === "pcb_component",
  )
  const componentRotation = pcbComponent?.rotation ?? 0
  const isBottomComponent = pcbComponent?.layer === "bottom"

  const compareTexts = <T extends PcbSilkscreenText | PcbFabricationNoteText>(
    locTexts: T[],
    fpTexts: T[],
  ): boolean => {
    const sLoc = sortByAnchor(locTexts)
    const sFp = sortByAnchor(fpTexts)
    return sLoc.every((lt, idx) => {
      const ft = sFp[idx]!
      const lRec = lt as unknown as Record<string, unknown>
      const fRec = ft as unknown as Record<string, unknown>
      if ((lt.layer ?? "top") !== (ft.layer ?? "top")) return false
      if (
        (lt.anchor_alignment ?? "center") !== (ft.anchor_alignment ?? "center")
      ) {
        return false
      }
      if ((lt.font ?? "tscircuit2024") !== (ft.font ?? "tscircuit2024")) {
        return false
      }
      if (Boolean(lRec.is_knockout) !== Boolean(fRec.is_knockout)) {
        return false
      }
      const fpTextRot =
        typeof fRec.ccw_rotation === "number" ? fRec.ccw_rotation : 0
      const locTextRot =
        typeof lRec.ccw_rotation === "number" ? lRec.ccw_rotation : 0
      const expectedLocalTextRot =
        lt.type === "pcb_silkscreen_text"
          ? pcbComponent
            ? isBottomComponent
              ? -(fpTextRot + componentRotation)
              : fpTextRot + componentRotation
            : fpTextRot
          : isBottomComponent
            ? -fpTextRot
            : fpTextRot
      if (!approxEqualAngle(locTextRot, expectedLocalTextRot)) {
        return false
      }
      const expectedFontSize =
        lt.type === "pcb_silkscreen_text" ? ft.font_size + 0.2 : ft.font_size
      if (!approxEqual(lt.font_size, expectedFontSize)) {
        return false
      }
      return (
        approxEqual(lt.anchor_position.x, ft.anchor_position.x) &&
        approxEqual(lt.anchor_position.y, ft.anchor_position.y) &&
        matchesTemplateText({
          locText: lt.text,
          fpText: ft.text,
          componentName,
          sourcePortNameByPin,
        })
      )
    })
  }

  return (
    compareTexts(
      byType(locPrimitives, "pcb_silkscreen_text"),
      byType(fpPrimitives, "pcb_silkscreen_text"),
    ) &&
    compareTexts(
      byType(locPrimitives, "pcb_fabrication_note_text"),
      byType(fpPrimitives, "pcb_fabrication_note_text"),
    )
  )
}

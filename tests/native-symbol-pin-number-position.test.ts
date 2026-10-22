import { expect, test } from "bun:test"
import { getNativeSymbolPinNumberPosition } from "../lib/generate-board-schematic-tsx/get-native-symbol-pin-number-position"

test("pin numbers use the complete imported lead extension", () => {
  const pinNumber = getNativeSymbolPinNumberPosition({
    symbolCenter: { x: 0, y: 0 },
    portCenter: { x: -1, y: 0 },
    leadInnerCenter: { x: 0.2, y: 0 },
  })

  expect(pinNumber).toEqual({
    center: { x: -0.4, y: 0.02 },
    isVerticalLead: false,
  })
})

test("parallel vertical pin numbers offset away from the symbol center", () => {
  const leftPinNumber = getNativeSymbolPinNumberPosition({
    symbolCenter: { x: 0, y: 0 },
    portCenter: { x: -0.1, y: -1 },
    leadInnerCenter: { x: -0.1, y: 0 },
    useOutwardBaseline: true,
  })
  const rightPinNumber = getNativeSymbolPinNumberPosition({
    symbolCenter: { x: 0, y: 0 },
    portCenter: { x: 0.1, y: -1 },
    leadInnerCenter: { x: 0.1, y: 0 },
    useOutwardBaseline: true,
  })

  expect(leftPinNumber.center.x).toBeCloseTo(-0.12)
  expect(leftPinNumber.center.y).toBeCloseTo(-0.5)
  expect(rightPinNumber.center.x).toBeCloseTo(0.12)
  expect(rightPinNumber.center.y).toBeCloseTo(-0.5)
})

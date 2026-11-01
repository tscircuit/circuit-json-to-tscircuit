import { expect, test } from "bun:test"
import { mergeOverlappingSourcePortGroups } from "../lib/board-converter/merge-overlapping-source-port-groups"

test.each([
  {
    name: "overlapping pairs",
    groups: [
      ["in", "mid"],
      ["mid", "out"],
    ],
    expected: ["in,mid,out"],
  },
  {
    name: "reversed declarations",
    groups: [
      ["mid", "out"],
      ["in", "mid"],
    ],
    expected: ["in,mid,out"],
  },
  {
    name: "a later bridge between existing groups",
    groups: [
      ["a", "b"],
      ["c", "d"],
      ["b", "c"],
    ],
    expected: ["a,b,c,d"],
  },
  {
    name: "cycles and repeated declarations",
    groups: [
      ["in", "mid"],
      ["mid", "out"],
      ["out", "in"],
      ["in", "mid"],
    ],
    expected: ["in,mid,out"],
  },
  {
    name: "independent groups",
    groups: [
      ["in", "out"],
      ["aux_in", "aux_out"],
    ],
    expected: ["aux_in,aux_out", "in,out"],
  },
  {
    name: "empty declarations",
    groups: [[], []],
    expected: [],
  },
])("merges $name without mutating declarations", ({ groups, expected }) => {
  const originalGroups = structuredClone(groups)
  const mergedGroups = mergeOverlappingSourcePortGroups(groups)
  expect(
    mergedGroups.map((group) => [...group].sort().join(",")).sort(),
  ).toEqual([...expected])
  expect(groups).toEqual(originalGroups)
})

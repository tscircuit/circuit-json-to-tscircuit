import { test } from "bun:test"
import { expectSitaraPcbRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "BeagleBone Black: source Circuit JSON beside rendered TSX for both PCB layers",
  async () => {
    await expectSitaraPcbRoundtrip({
      boardId: "beaglebone-black",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

import { test } from "bun:test"
import { expectSitaraRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "BeagleBone Black: source Circuit JSON beside rendered TSX for both PCB layers and every schematic sheet",
  async () => {
    await expectSitaraRoundtrip({
      boardId: "beaglebone-black",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

import { test } from "bun:test"
import { expectSitaraRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "BeaglePlay: source Circuit JSON beside rendered TSX for both PCB layers and every schematic sheet",
  async () => {
    await expectSitaraRoundtrip({
      boardId: "beagleplay",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

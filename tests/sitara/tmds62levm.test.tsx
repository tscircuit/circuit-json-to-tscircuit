import { test } from "bun:test"
import { expectSitaraRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "TMDS62LEVM: source Circuit JSON beside rendered TSX for both PCB layers and every schematic sheet",
  async () => {
    await expectSitaraRoundtrip({
      boardId: "tmds62levm",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

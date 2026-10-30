import { test } from "bun:test"
import { expectSitaraPcbRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "TMDS62LEVM: source Circuit JSON beside rendered TSX for both PCB layers",
  async () => {
    await expectSitaraPcbRoundtrip({
      boardId: "tmds62levm",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

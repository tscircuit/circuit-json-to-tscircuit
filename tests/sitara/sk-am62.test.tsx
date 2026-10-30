import { test } from "bun:test"
import { expectSitaraPcbRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "SK-AM62: source Circuit JSON beside rendered TSX for both PCB layers",
  async () => {
    await expectSitaraPcbRoundtrip({
      boardId: "sk-am62",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

import { test } from "bun:test"
import { expectSitaraRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "SK-AM62: source Circuit JSON beside rendered TSX for both PCB layers and every schematic sheet",
  async () => {
    await expectSitaraRoundtrip({
      boardId: "sk-am62",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

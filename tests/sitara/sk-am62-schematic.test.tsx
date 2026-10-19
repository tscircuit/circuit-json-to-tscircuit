import { test } from "bun:test"
import { expectSitaraSchematicRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "SK-AM62: source Circuit JSON beside rendered TSX for every schematic sheet",
  async () => {
    await expectSitaraSchematicRoundtrip({
      boardId: "sk-am62",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

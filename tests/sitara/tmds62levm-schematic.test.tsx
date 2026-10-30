import { test } from "bun:test"
import { expectSitaraSchematicRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "TMDS62LEVM: source Circuit JSON beside rendered TSX for every schematic sheet",
  async () => {
    await expectSitaraSchematicRoundtrip({
      boardId: "tmds62levm",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

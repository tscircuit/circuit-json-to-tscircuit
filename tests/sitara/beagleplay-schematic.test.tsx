import { test } from "bun:test"
import { expectSitaraSchematicRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "BeaglePlay: source Circuit JSON beside rendered TSX for every schematic sheet",
  async () => {
    await expectSitaraSchematicRoundtrip({
      boardId: "beagleplay",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

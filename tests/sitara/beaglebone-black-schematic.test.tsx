import { test } from "bun:test"
import { expectSitaraSchematicRoundtrip } from "../fixtures/expect-sitara-roundtrip"

test(
  "BeagleBone Black: source Circuit JSON beside rendered TSX for every schematic sheet",
  async () => {
    await expectSitaraSchematicRoundtrip({
      boardId: "beaglebone-black",
      testPath: import.meta.path,
    })
  },
  { timeout: 600_000 },
)

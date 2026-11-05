# Sitara roundtrip fixtures

Unmodified PCB and schematic conversions for TMDS62LEVM (57 sheets), SK-AM62
(44), BeaglePlay (22), and BeagleBone Black (11). Each document is stored
separately to preserve its original coordinate system and sheet identity.

The source archives and every native document checksum are recorded in the
[Altium repro PR #213](https://github.com/tscircuit/altium-to-circuit-json/pull/213)'s
`scripts/references/sitara-references.ts`. Conversion uses
`altium-to-circuit-json@a9b8bd37e77bcb35790d91d2d033ed58d8a49a7b` and
`altiumts@50434443e86e4598b653cbdbed9d204649c905f2`. The parser prerequisite
is necessary for the legacy BeagleBone inner-layer stack.

To regenerate, in that Altium checkout run `bun run download-references`, then
`bun scripts/convert-sitara-boards.ts /path/to/this/fixtures/sitara`.
`source-files.json` records the converter pins and SHA-256 of each gzip fixture.
No hand-authored TSX or component pruning is involved.

The tests convert each document with this repository's converter and render
the unchanged generated module using `CircuitRunner`. A React harness
disables schematic generation for PCB-only inputs and PCB generation for
schematic-only inputs. Each SVG places source Circuit JSON on the left and
the TSX roundtrip on the right. Inventory snapshots include warnings and
errors as baseline observations; these repros do not certify electrical validity.

TI-derived assets retain TI's applicable terms. BeagleBoard-derived assets
retain their upstream terms; this repository does not relicense board designs.

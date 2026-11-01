# TI EVM Circuit JSON fixtures

These fixtures contain the PCB and primary electrical schematic converted from
Texas Instruments' published Altium design files. They were generated with
`tscircuit/altium-to-circuit-json` at commit
`9a578b5762e1dcca06e6d3f84f1d2950d0acc301`.

Project special strings in the LM251772EVM-PD, LM5155EVM-FLY, and
LMG342X-BB-EVM PCB fixtures were resolved from their matching `.PrjPcb` files using
`tscircuit/altium-to-circuit-json` commit
`c630289c2cae01c8a4d4dc9b896b33f8a3d90f34`.

The upstream files and checksums are maintained in that repository's
`scripts/references/reference-manifest.ts`. The gzip files only avoid committing
several megabytes of repetitive JSON; tests expand them before conversion.

`tmds62levm-sheet-05.circuit.json.gz` and
`tmds62levm-sheet-13.circuit.json.gz` contain unchanged conversions of
TMDS62LEVM revision B sheets 05 and 13 from `altium-to-circuit-json` v0.0.85
(`568824fb3ff64992133378b30e88fc23bbd43f48`).

The `*-cad.circuit.json.gz` fixtures retain the linked CAD component records for
the same five TI EVMs. Their `cad-models` directories contain the referenced
STEP files in gzip form. The tests embed those models before rendering top and
bottom 3D snapshots, so the complete Circuit JSON to TSX round trip is visible
without network access.

`dp83825-usb-cad-origin.circuit.json.gz` isolates J1 (Molex 475890001), its
native pads and silkscreen, and its embedded STEP placement from the same
DP83825EVM PcbDoc, converted with `altium-to-circuit-json@0.0.114`. Only the
surrounding board is cropped, and references to omitted electrical ports are
removed. The model reuses `cad-models/dp83825evm/8.step.gz`, verified against
the PcbDoc's embedded model bytes (SHA-256
`5c5fe4d712828519a11d3421da933f5b610d55c80e6c82a976539dff61385191`).

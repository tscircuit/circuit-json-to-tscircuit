# TI EVM Circuit JSON fixtures

These fixtures contain the PCB and primary electrical schematic converted from
Texas Instruments' published Altium design files. They were generated with
`tscircuit/altium-to-circuit-json` at commit
`9a578b5762e1dcca06e6d3f84f1d2950d0acc301`.

The upstream files and checksums are maintained in that repository's
`scripts/references/reference-manifest.ts`. The gzip files only avoid committing
several megabytes of repetitive JSON; tests expand them before conversion.

The `*-cad.circuit.json.gz` fixtures retain the linked CAD component records for
the same five TI EVMs. Their `cad-models` directories contain the referenced
STEP files in gzip form. The tests embed those models before rendering top and
bottom 3D snapshots, so the complete Circuit JSON to TSX round trip is visible
without network access.

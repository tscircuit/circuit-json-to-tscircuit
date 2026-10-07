# TI EVM Circuit JSON fixtures

These fixtures contain the PCB and primary electrical schematic converted from
Texas Instruments' published Altium design files. They were generated with
`tscircuit/altium-to-circuit-json` at commit
`8f94ee9dc7d504b2ff957d492f197bb0ece3305c`.

The upstream files and checksums are maintained in that repository's
`scripts/references/reference-manifest.ts`. The gzip files only avoid committing
several megabytes of repetitive JSON; tests expand them before conversion.

The `*-cad.circuit.json.gz` fixtures retain the linked CAD component records for
the same five TI EVMs. Their `cad-models` directories contain the referenced
embedded STEP files in gzip form. Tests decompress the original model data
before rendering, so the visual comparison covers the complete Circuit JSON to
TSX round trip without changing model coordinate systems.

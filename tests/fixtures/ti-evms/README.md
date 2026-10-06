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

The `*-cad.circuit.json.gz` fixtures retain the linked CAD component records for
the same five TI EVMs. They are used to verify the complete Circuit JSON to TSX
round trip rather than isolated synthetic components.

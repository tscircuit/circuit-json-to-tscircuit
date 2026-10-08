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

`tmds62levm-sheet-05.circuit.json.gz` contains the unchanged conversion of
TMDS62LEVM revision B sheet 05 from `altium-to-circuit-json` v0.0.85
(`568824fb3ff64992133378b30e88fc23bbd43f48`).

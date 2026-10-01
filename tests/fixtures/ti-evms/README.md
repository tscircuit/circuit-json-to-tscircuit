# TI EVM Circuit JSON fixtures

These fixtures contain the PCB and primary electrical schematic converted
together from Texas Instruments' published Altium projects. They were generated
with `tscircuit/altium-to-circuit-json` at commit
`6a9942edda794c8501938ade4bf7f5e9fd4ac5e7`.

The project converter assigns document-scoped IDs and then reconciles shared
components, ports, named nets, and traces. This preserves the project-wide
source identities used by PCB traces without relying on fixture-specific ID
rewrites.

The upstream files and checksums are maintained in that repository's
`scripts/references/reference-manifest.ts`. The gzip files only avoid committing
several megabytes of repetitive JSON; tests expand them before conversion.

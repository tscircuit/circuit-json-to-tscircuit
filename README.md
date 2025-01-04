# circuit-json-to-tscircuit

Convert [circuit json](https://github.com/tscircuit/circuit-json) code to [tscircuit](https://github.com/tscircuit/tscircuit) code.

Circuit JSON is more of a "compiled form" of a circuit and tscircuit code can't
necessarily be full reconstructed from it. That said, Circuit JSON is often
a great intermediary format when converting between different industry standards
like DSN, KiCad, and Eagle.

This converter is primarily useful for creating tscircuit components from
Circuit JSON, e.g. for a `kicad_mod` -> circuit json -> tscircuit conversion.

## Usage

```bash
bun add circuit-json-to-tscircuit
```

```tsx
import { convertCircuitJsonToTscircuit } from "circuit-json-to-tscircuit"

const circuitJson = await fetch("https://tscircuit.com/circuit.json")

const tscircuit = convertCircuitJsonToTscircuit(circuitJson)
console.log(tscircuit)

/**

*/
```

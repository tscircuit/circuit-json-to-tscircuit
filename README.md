# circuit-json-to-tscircuit

Convert [circuit json](https://github.com/tscircuit/circuit-json) code to [tscircuit](https://github.com/tscircuit/tscircuit) code.

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

import type { SchematicPort, SourcePort } from "circuit-json"

const COMPOSITE_PIN_DESIGNATOR_PATTERN = /^(?:pin)?\d+(?:-\d+)*$/u

const getPinDesignatorHint = (sourcePort: SourcePort): string | undefined => {
  const pinDesignatorHint = sourcePort.port_hints?.find((portHint) =>
    COMPOSITE_PIN_DESIGNATOR_PATTERN.test(portHint),
  )
  return pinDesignatorHint?.replace(/^pin/u, "")
}

export const getSourcePinDesignator = ({
  sourcePort,
  schematicPort,
}: {
  sourcePort: SourcePort
  schematicPort: SchematicPort
}): string | undefined => {
  const pinDesignator =
    schematicPort.pin_number ??
    sourcePort.pin_number ??
    getPinDesignatorHint(sourcePort) ??
    (COMPOSITE_PIN_DESIGNATOR_PATTERN.test(sourcePort.name)
      ? sourcePort.name
      : undefined)
  return pinDesignator === undefined ? undefined : String(pinDesignator)
}

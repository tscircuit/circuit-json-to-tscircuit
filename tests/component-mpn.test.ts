import { expect, test } from "bun:test"
import ts from "typescript"
import { convertCircuitJsonToTscircuit } from "lib"

const getGeneratedProps = (source: string, props = {}) => {
  const js = ts.transpileModule(source, {
    compilerOptions: { jsx: ts.JsxEmit.React, module: ts.ModuleKind.CommonJS },
  }).outputText
  const module = { exports: {} as { ImportedPart: (props: object) => any } }
  new Function("React", "module", "exports", js)(
    { createElement: (_tag: string, props: any) => props },
    module,
    module.exports,
  )
  return module.exports.ImportedPart(props)
}

test("component conversion emits mpn directly with compatible long-name defaults", () => {
  const source = convertCircuitJsonToTscircuit([], {
    componentName: "ImportedPart",
    manufacturerPartNumber: ' RAW-"MPN"\\123 ',
  })
  expect(getGeneratedProps(source).mpn).toBe('RAW-"MPN"\\123')
  expect(getGeneratedProps(source).manufacturerPartNumber).toBe(
    'RAW-"MPN"\\123',
  )
  for (const alias of ["mpn", "mfn", "manufacturerPartNumber"]) {
    const props = getGeneratedProps(source, { [alias]: "OVERRIDE" })
    expect(props.mpn).toBe("OVERRIDE")
    expect(props.manufacturerPartNumber).toBe("OVERRIDE")
  }
})

test("component conversion does not infer a manufacturer MPN from supplier identifiers", () => {
  const source = convertCircuitJsonToTscircuit([], {
    componentName: "ImportedPart",
    supplierPartNumbers: { jlcpcb: ["C123"] },
  })
  expect(getGeneratedProps(source).mpn).toBeUndefined()
  expect(getGeneratedProps(source).manufacturerPartNumber).toBeUndefined()
})

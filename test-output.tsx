import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"
const pinLabels = undefined as const
interface Props extends CommonLayoutProps {
  name: string
}
export const test-output = (props: Props) => {
  return (
    <chip
      {...props}
      footprint={<footprint>
      </footprint>}
    />
  )
}
export const usetest-output = createUseComponent(test-output, pinLabels)
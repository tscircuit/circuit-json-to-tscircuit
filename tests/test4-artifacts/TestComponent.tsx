import { createUseComponent } from "@tscircuit/core"
import type { CommonLayoutProps } from "@tscircuit/props"
const pinLabels = undefined as const
interface Props extends CommonLayoutProps {
  name: string
}
export const TestComponent = (props: Props) => {
  return (
    <chip
      {...props}
      footprint={<footprint>
      </footprint>}
    />
  )
}
export const useTestComponent = createUseComponent(TestComponent, pinLabels)
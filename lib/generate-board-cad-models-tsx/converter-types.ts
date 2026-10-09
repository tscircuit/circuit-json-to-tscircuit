import type { CadComponent, PcbComponent } from "circuit-json"

export interface CadModelUrl {
  format: "glb" | "gltf" | "obj" | "step" | "stl" | "wrl"
  url: string
}

export interface CadModelParentPlacement {
  center: { x: number; y: number }
  ccwRotationDegrees: number
  layer: "bottom" | "top"
}

export interface CadModelGroup {
  cadComponents: CadComponent[]
  parentPlacement: CadModelParentPlacement
}

export interface CadModelPlacement {
  positionOffset: { x: number; y: number; z: number }
  ccwRotationOffsetDegrees: { x: number; y: number; z: number }
}

export type CadModelGroupKey = string
export type PcbComponentId = PcbComponent["pcb_component_id"]

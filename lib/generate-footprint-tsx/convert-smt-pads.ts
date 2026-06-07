import { su } from "@tscircuit/soup-util"
import { mmStr } from "@tscircuit/mm"
import type { FootprintElementConverter } from "./converter-types"

export const convertSmtPads: FootprintElementConverter = (circuitJson) => {
  const smtPads = su(circuitJson).pcb_smtpad.list()
  const elementStrings: string[] = []

  for (const smtPad of smtPads) {
    if (smtPad.shape === "circle") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} pcbX="${mmStr(smtPad.x)}" pcbY="${mmStr(smtPad.y)}" radius="${mmStr(smtPad.radius)}" shape="circle" />`,
      )
    } else if (smtPad.shape === "rect") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} pcbX="${mmStr(smtPad.x)}" pcbY="${mmStr(smtPad.y)}" width="${mmStr(smtPad.width)}" height="${mmStr(smtPad.height)}" shape="rect" />`,
      )
    } else if (smtPad.shape === "pill") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} pcbX="${mmStr(smtPad.x)}" pcbY="${mmStr(smtPad.y)}" width="${mmStr(smtPad.width)}" height="${mmStr(smtPad.height)}" radius="${mmStr(smtPad.radius)}" shape="pill" />`,
      )
    } else if (smtPad.shape === "polygon") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} shape="polygon" points={${JSON.stringify(smtPad.points)}} />`,
      )
    } else if (smtPad.shape === "rotated_rect") {
      elementStrings.push(
        `<smtpad portHints={${JSON.stringify(smtPad.port_hints)}} pcbX="${mmStr(smtPad.x)}" pcbY="${mmStr(smtPad.y)}" width="${mmStr(smtPad.width)}" height="${mmStr(smtPad.height)}" ccwRotation={${smtPad.ccw_rotation}} shape="rotated_rect" />`,
      )
    }
  }

  return elementStrings
}

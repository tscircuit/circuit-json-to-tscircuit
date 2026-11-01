import { expect } from "bun:test"
import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname } from "node:path"
import { decode } from "fast-png"

const MAX_SNAPSHOT_DIFFERENT_PIXEL_FRACTION = 0.06
const MAX_CHANNEL_DIFFERENCE = 7

export async function expectPngSnapshot({
  renderedPng,
  snapshotPath,
}: {
  renderedPng: Uint8Array
  snapshotPath: string
}): Promise<void> {
  const shouldUpdate =
    process.env.BUN_UPDATE_SNAPSHOTS === "1" ||
    process.env.BUN_FORCE_UPDATE_SNAPSHOTS === "1"
  if (shouldUpdate) {
    await mkdir(dirname(snapshotPath), { recursive: true })
    await writeFile(snapshotPath, renderedPng)
  }
  expect(await Bun.file(snapshotPath).exists()).toBe(true)

  const renderedImage = decode(renderedPng)
  const snapshotImage = decode(await readFile(snapshotPath))
  expect(renderedImage.width).toBe(snapshotImage.width)
  expect(renderedImage.height).toBe(snapshotImage.height)
  expect(renderedImage.channels).toBe(snapshotImage.channels)

  let differentPixelCount = 0
  const pixelCount = renderedImage.width * renderedImage.height
  for (let pixelIndex = 0; pixelIndex < pixelCount; pixelIndex += 1) {
    const firstChannelIndex = pixelIndex * renderedImage.channels
    let pixelIsDifferent = false
    for (
      let channelIndex = 0;
      channelIndex < renderedImage.channels;
      channelIndex += 1
    ) {
      const sampleIndex = firstChannelIndex + channelIndex
      if (
        Math.abs(
          (renderedImage.data[sampleIndex] ?? 0) -
            (snapshotImage.data[sampleIndex] ?? 0),
        ) > MAX_CHANNEL_DIFFERENCE
      ) {
        pixelIsDifferent = true
        break
      }
    }
    if (pixelIsDifferent) differentPixelCount += 1
  }

  const differentPixelFraction = differentPixelCount / pixelCount
  expect(differentPixelFraction).toBeLessThanOrEqual(
    MAX_SNAPSHOT_DIFFERENT_PIXEL_FRACTION,
  )
}

import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  // Keep Node-oriented CommonJS modules external for ESM consumers.
  noExternal: [/^(?!debug$|commander$)/],
})

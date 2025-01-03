import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // @ts-expect-error Invalid Types
  plugins: [sveltekit()],
  test: {
    include: ['**/*.test.ts']
  },
  server: {
    fs: {
      allow: ['.']
    }
  }
})

import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      'svelte-qparam/serde': './src/lib/serde/index.js',
      'svelte-qparam': './src/lib/index.js',
      'extract.js': './src/routes/extract.js'
    }
  }
}

export default config

<script lang="ts">
  import { page } from '$app/stores'
  import { Layout } from '@jill64/npm-demo-layout'
  import { TabItems } from 'svelte-page-tab'
  import README from '../../README.md?raw'
  import packageJson from '../../package.json'
  import '../app.postcss'
</script>

<Layout {packageJson} {README}>
  <p>
    {$page.url.href}
  </p>
  <ul class="flex flex-wrap">
    <TabItems
      routes={new Map(
        [
          ['/', 'Single Component'],
          ['/page', 'Separated Schema'],
          ['/load', 'Use with +page.js'],
          ['/server', 'Use with +page.server.js']
        ].map(([path, name]) => [path + $page.url.search, name])
      )}
    />
  </ul>
  <hr class="-mt-[1px] border-zinc-300 dark:border-zinc-700" />
  <main>
    <slot />
  </main>
</Layout>

<style>
  ul :global(a) {
    @apply border-b border-transparent p-2 text-zinc-500;
  }
  :global(.dark) ul :global(a) {
    @apply text-zinc-400;
  }
  ul :global(a[data-current-location]) {
    @apply border-[rebeccapurple] font-bold text-black;
  }
  :global(.dark) ul :global(a[data-current-location]) {
    @apply text-white;
  }
  :global(.dark) ul :global(a):hover {
    @apply pop-effect;
  }
</style>

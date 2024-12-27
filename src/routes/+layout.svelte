<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/state'
  import { Layout } from '@jill64/npm-demo-layout'
  import { TabItems } from 'svelte-page-tab'
  import README from '../../README.md?raw'
  import packageJson from '../../package.json'
</script>

<Layout {packageJson} {README}>
  <p>
    {page.url.origin}{page.url.pathname}?
    <input
      value={page.url.search.replace('?', '')}
      placeholder="e.g. str=string&num=123&bool_array=true&bool_array=false&bool_array=true..."
      oninput={(x) =>
        goto(`${page.url.pathname}?${x.currentTarget.value}`, {
          replaceState: true,
          keepFocus: true,
          noScroll: true
        })}
    />
  </p>
  <ul>
    <TabItems
      routes={new Map(
        [
          ['/', 'Single Component'],
          ['/page', 'Separated Schema'],
          ['/load', 'Use with +page.js'],
          ['/server', 'Use with +page.server.js']
        ].map(([path, name]) => [path + page.url.search, name])
      )}
    />
  </ul>
  <main>
    <slot />
  </main>
</Layout>

<style>
  p {
    display: flex;
    font-size: large;
    align-items: center;
  }
  @media (max-width: 600px) {
    p {
      align-items: start;
      flex-direction: column;
    }
  }
  input {
    width: 100%;
    max-width: 90vw;
    font-size: x-large;
    border: none;
    padding: 0.5rem;
    outline: none;
    border-bottom: 1px solid gray;
    margin-bottom: 1px;
  }
  input:focus {
    border-bottom: 2px solid rebeccapurple;
    margin-bottom: 0px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul :global(li) {
    display: contents;
  }
  ul :global(a) {
    color: gray;
    text-decoration: none;
    padding: 0.75rem 1rem;
    margin-bottom: 1px;
    border-bottom: 1px solid gray;
  }
  ul :global(a[data-current-location]) {
    color: inherit;
    font-weight: bold;
    margin-bottom: none;
    border-bottom: 2px solid rebeccapurple;
  }
  ul :global(a):hover {
    background: rgba(0, 0, 0, 0.1);
  }
  ul :global(a):active {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark) ul :global(a):hover {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark) ul :global(a):active {
    background: rgba(255, 255, 255, 0.2);
  }
  :global(output) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    margin: 0.5rem 0;
    font-size: large;
    border-radius: 0.5rem;
    background: lightgray;
  }
  :global(.dark output) {
    background: rgb(4, 4, 41);
  }
</style>

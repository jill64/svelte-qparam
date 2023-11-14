<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  export let data

  $: ({ qparams, page_values, server_values } = data)
  $: ({ str, bool, num } = qparams)
  $: ({ url } = $page)
</script>

<p>
  {url.origin}{url.pathname}?
  <input
    value={url.search.replace('?', '')}
    on:input={(x) =>
      goto(`${url.pathname}?${x.currentTarget.value}`, {
        replaceState: true,
        keepFocus: true,
        noScroll: true
      })}
  />
</p>
<ul>
  <li>server_str: {server_values.str}</li>
  <li>server_num: {server_values.num}</li>
  <li>server_bool: {server_values.bool}</li>
  <li>page_str: {page_values.str}</li>
  <li>page_num: {page_values.num}</li>
  <li>page_bool: {page_values.bool}</li>
  <li>str: {$str}</li>
  <li>num: {$num}</li>
  <li>bool: {$bool}</li>
</ul>

<style>
  :global(body) {
    font-family: sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #222;
      color: #eee;
    }
  }
  p {
    display: flex;
    font-size: x-large;
    align-items: center;
  }
  input {
    width: 100%;
    background: inherit;
    color: inherit;
    font-size: x-large;
    border: none;
    padding: 0.5rem;
    outline: none;
    border-bottom: 1px solid #aaa;
    margin-bottom: 1px;
  }
  input:focus {
    border-bottom: 2px solid #1a94a9;
    margin-bottom: 0px;
  }
</style>

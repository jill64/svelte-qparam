<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  export let data

  $: ({ qparams, page_values, server_values } = data)
  $: ({ str, bool_array, num } = qparams)
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
  <li>server_bool_array: {JSON.stringify(server_values.bool_array)}</li>
  <li>page_str: {page_values.str}</li>
  <li>page_num: {page_values.num}</li>
  <li>page_bool_array: {JSON.stringify(page_values.bool_array)}</li>
  <li>str: {$str}</li>
  <li>num: {$num}</li>
  <li>bool_array: {JSON.stringify($bool_array)}</li>
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

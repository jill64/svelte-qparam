export const code = /* html */ `
<!-- +page.svelte -->
<script>
  import { page } from '$app/state'
  import { extract } from 'extract.js'

  let { qparams: q } = $derived(extract(page.url))
</script>

<div>
  <button onclick={() => {
    q.num = 123
  }}> Set num = 123 </button>
</div>
<output>
  <code>page_str = {q.str}</code>
  <code>page_num = {q.num}</code>
  <code>page_bool_array = {JSON.stringify(q.bool_array)}</code>
</output>
`

export const code = /* html */ `
<!-- +page.svelte -->
<script>
  import { page } from '$app/stores'
  import { extract } from 'extract.js'

  let qparams = $derived(extract($page.url).qparams)
</script>

<output>
  <code>page_str = {qparams.str.value}</code>
  <code>page_num = {qparams.num.value}</code>
  <code>page_bool_array = {JSON.stringify(qparams.bool_array.value)}</code>
</output>
`

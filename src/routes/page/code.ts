export const code = /* html */ `
<!-- +page.svelte -->
<script>
  import { page } from '$app/state'
  import { extract } from 'extract.js'

  let { qparams } = $derived(extract(page.url))
  let { str, num, bool_array } = $derived(qparams)
</script>

<output>
  <code>page_str = {str}</code>
  <code>page_num = {num}</code>
  <code>page_bool_array = {JSON.stringify(bool_array)}</code>
</output>
`

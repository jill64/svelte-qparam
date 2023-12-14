export const code = /* html */ `
<!-- +page.svelte -->
<script>
  import { extract } from 'extract.js'

  $: ({ qparams } = extract($page.url))
  $: ({ str, num, bool_array } = qparams)
</script>

<output>
  <code>page_str = {$str}</code>
  <code>page_num = {$num}</code>
  <code>page_bool_array = {JSON.stringify($bool_array)}</code>
</output>
`

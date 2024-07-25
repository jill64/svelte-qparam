export const code = /* html */ `
<!-- +page.svelte -->
<script>
  let { data } = $props()

  let qparams = $derived(data.qparams)
</script>

<output>
  <code>load_str = {qparams.str.value}</code>
  <code>load_num = {qparams.num.value}</code>
  <code>load_bool_array = {JSON.stringify(qparams.bool_array.value)}</code>
</output>
`

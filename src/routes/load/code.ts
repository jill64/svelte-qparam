export const code = /* html */ `
<!-- +page.svelte -->
<script>
  let { data } = $props()

  let { qparams } = $derived(data)
  let { str, num, bool_array } = $derived(qparams)
</script>

<output>
  <code>load_str = {str}</code>
  <code>load_num = {num}</code>
  <code>load_bool_array = {JSON.stringify(bool_array)}</code>
</output>
`

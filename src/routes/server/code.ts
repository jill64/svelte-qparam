export const code = /* html */ `
<!-- +page.svelte -->
<script>
  let { data } = $props()

  let { values } = $derived(data)
  let { str, num, bool_array } = $derived(values)
</script>

<output>
  <code>server_str = {str}</code>
  <code>server_num = {num}</code>
  <code>server_bool_array = {JSON.stringify(bool_array)}</code>
</output>
`

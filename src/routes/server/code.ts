export const code = /* html */ `
<!-- +page.svelte -->
<script>
  let { data } = $props()
  let values = $derived(data.values)
</script>

<output>
  <code>server_str = {values.str}</code>
  <code>server_num = {values.num}</code>
  <code>server_bool_array = {JSON.stringify(values.bool_array)}</code>
</output>
`

export const code = /* html */ `
<!-- +page.svelte -->
<script>
  export let data

  $: ({ values } = data)
  $: ({ str, num, bool_array } = values)
</script>

<output>
  <code>server_str = {str}</code>
  <code>server_num = {num}</code>
  <code>server_bool_array = {JSON.stringify(bool_array)}</code>
</output>
`

export const code = /* html */ `
<!-- +page.svelte -->
<script>
  export let data

  $: ({ qparams } = data)
  $: ({ str, num, bool_array } = qparams)
</script>

<output>
  <code>load_str = {$str}</code>
  <code>load_num = {$num}</code>
  <code>load_bool_array = {JSON.stringify($bool_array)}</code>
</output>
`

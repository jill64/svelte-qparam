export const code = /* html */ `
<!-- +page.svelte -->
<script>
  let { data } = $props()

  let { qparams: q } = data
</script>

<div>
  <button onclick={() => {
    q.bool_array = [true, false, true]
  }}> Set bool_array = [true, false, true] </button>
</div>
<output>
  <code>load_str = {q.str}</code>
  <code>load_num = {q.num}</code>
  <code>load_bool_array = {JSON.stringify(q.bool_array)}</code>
</output>
`

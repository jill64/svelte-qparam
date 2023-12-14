export const code = /* html */ `
<!-- +page.svelte -->
<script>
  import { array, qparam } from 'svelte-qparam'
  import { boolean, number } from 'typed-qparam/serde'

  $: str = $qparam('str')
  $: num = $qparam('num', number)
  $: bool_array = $qparam('bool_array', array(boolean))
</script>

<output>
  <code>str = {$str}</code>
  <code>num = {$num}</code>
  <code>bool_array = {JSON.stringify($bool_array)}</code>
</output>
`

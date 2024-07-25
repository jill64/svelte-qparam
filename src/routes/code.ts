export const code = /* html */ `
<!-- +page.svelte -->
<script>
  import { array, qparam } from 'svelte-qparam'
  import { boolean, number } from 'typed-qparam/serde'

  let str = $qparam('str')
  let num = $qparam('num', number)
  let bool_array = $qparam('bool_array', array(boolean))
</script>

<output>
  <code>str = {str.value}</code>
  <code>num = {num.value}</code>
  <code>bool_array = {JSON.stringify(bool_array.value)}</code>
</output>
`

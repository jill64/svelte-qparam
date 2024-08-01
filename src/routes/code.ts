export const code = /* html */ `
<!-- +page.svelte -->
<script lang="ts">
  import { CheckList, Decimal } from '@jill64/svelte-input'
  import { array, qparam } from 'svelte-qparam'
  import { boolean, number } from 'typed-qparam/serde'
  import { code } from './code'

  let str = $derived($qparam('str'))
  let num = $derived($qparam('num', number))
  let bool_array = $derived($qparam('bool_array', array(boolean)))
</script>

<input bind:value={str.value} placeholder="value" />
<fieldset>
  <Decimal
    value={num.value}
    onchange={(x) => {
      num.value = x
    }}
  />
</fieldset>
<CheckList
  value={Object.fromEntries(
    Array(3)
      .fill(null)
      .map((_, i) => [i + 1, bool_array.value[i]])
  )}
  onchange={(e) => {
    bool_array.value = Object.values(e)
  }}
/>
`

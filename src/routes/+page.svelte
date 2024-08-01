<script lang="ts">
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { CheckList, Decimal } from '@jill64/svelte-input'
  import { array, qparam } from 'svelte-qparam'
  import { boolean, number } from 'typed-qparam/serde'
  import { code } from './code'

  // eslint-disable-next-line
  // @ts-ignore
  let str = $derived($qparam('str'))
  
  // eslint-disable-next-line
  // @ts-ignore
  let num = $derived($qparam('num', number))

  // eslint-disable-next-line
  // @ts-ignore
  let bool_array = $derived($qparam('bool_array', array(boolean)))
</script>

<input bind:value={str.value} placeholder="value" />
<fieldset>
  <Decimal bind:value={num.value} />
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
<HighlightSvelte {code} />

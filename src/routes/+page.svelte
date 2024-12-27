<script lang="ts">
  import { page } from '$app/state'
  import { HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { array, define } from 'svelte-qparam'
  import { boolean, number, string } from 'typed-qparam/serde'
  import { code } from './code'

  const qparam = define({
    str: string,
    num: number,
    bool_array: array(boolean)
  })

  let {
    qparams: { str, num, bool_array }
  } = $derived(qparam(page.url))
</script>

<output>
  <code>str = {str}</code>
  <code>num = {num}</code>
  <code>bool_array = {JSON.stringify(bool_array)}</code>
</output>
<HighlightSvelte {code} />

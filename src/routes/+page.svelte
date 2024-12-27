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

  let { qparams: q } = $derived(qparam(page.url))
</script>

<div>
  <button
    onclick={() => {
      q.str = 'Hello, World!'
    }}
  >
    Set str = Hello, World!
  </button>
</div>
<output>
  <code>str = {q.str}</code>
  <code>num = {q.num}</code>
  <code>bool_array = {JSON.stringify(q.bool_array)}</code>
</output>
<HighlightSvelte {code} />

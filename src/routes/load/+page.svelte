<script lang="ts">
  import { Highlight } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import extractSource from '../extract.ts?raw'
  import loadSource from './+page.ts?raw'
  import { code } from './code'

  let { data } = $props()

  let { qparams: q } = data
</script>

<div>
  <button
    onclick={() => {
      q.bool_array = [true, false, true]
    }}
  >
    Set bool_array = [true, false, true]
  </button>
</div>
<output>
  <code>load_str = {q.str}</code>
  <code>load_num = {q.num}</code>
  <code>load_bool_array = {JSON.stringify(q.bool_array)}</code>
</output>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <Highlight code={loadSource} language={javascript} />
  <Highlight {code} language={javascript} />
</div>

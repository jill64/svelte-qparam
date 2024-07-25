<script lang="ts">
  import { Highlight } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import extractSource from '../extract.ts?raw'
  import loadSource from './+page.ts?raw'
  import { code } from './code'

  let { data } = $props()

  let qparams = $derived(data.qparams)
</script>

<output>
  <code>load_str = {qparams.str.value}</code>
  <code>load_num = {qparams.num.value}</code>
  <code>load_bool_array = {JSON.stringify(qparams.bool_array.value)}</code>
</output>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <Highlight code={loadSource} language={javascript} />
  <Highlight {code} language={javascript} />
</div>

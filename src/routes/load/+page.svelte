<script lang="ts">
  import { Highlight } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import extractSource from '../extract.ts?raw'
  import loadSource from './+page.ts?raw'
  import { code } from './code'

  let { data } = $props()

  let { qparams } = $derived(data)
  let { str, num, bool_array } = $derived(qparams)
</script>

<output>
  <code>load_str = {str}</code>
  <code>load_num = {num}</code>
  <code>load_bool_array = {JSON.stringify(bool_array)}</code>
</output>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <Highlight code={loadSource} language={javascript} />
  <Highlight {code} language={javascript} />
</div>

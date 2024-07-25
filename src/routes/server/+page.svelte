<script lang="ts">
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import extractSource from '../extract.ts?raw'
  import { code } from './code'
  import { serverSource } from './serverSource'

  let { data } = $props()

  let values = $derived(data.values)
</script>

<output>
  <code>server_str = {values.str}</code>
  <code>server_num = {values.num}</code>
  <code>server_bool_array = {JSON.stringify(values.bool_array)}</code>
</output>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <Highlight code={serverSource} language={javascript} />
  <HighlightSvelte {code} />
</div>

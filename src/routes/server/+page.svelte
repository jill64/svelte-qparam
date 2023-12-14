<script lang="ts">
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import extractSource from '../extract.ts?raw'
  import { code } from './code'
  import { serverSource } from './serverSource'

  export let data

  $: ({ values } = data)
  $: ({ str, num, bool_array } = values)
</script>

<output>
  <code>server_str = {str}</code>
  <code>server_num = {num}</code>
  <code>server_bool_array = {JSON.stringify(bool_array)}</code>
</output>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <Highlight code={serverSource} language={javascript} />
  <HighlightSvelte {code} />
</div>

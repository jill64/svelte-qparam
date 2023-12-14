<script lang="ts">
  import { page } from '$app/stores'
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import { extract } from 'extract.js'
  import { code } from './code'
  import extractSource from '../extract.ts?raw'

  $: ({ qparams } = extract($page.url))
  $: ({ str, num, bool_array } = qparams)
</script>

<output>
  <code>page_str = {$str}</code>
  <code>page_num = {$num}</code>
  <code>page_bool_array = {JSON.stringify($bool_array)}</code>
</output>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <HighlightSvelte {code} />
</div>

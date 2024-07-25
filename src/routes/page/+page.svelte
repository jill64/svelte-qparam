<script lang="ts">
  import { page } from '$app/stores'
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import { extract } from 'extract.js'
  import { code } from './code'
  import extractSource from '../extract.ts?raw'

  let qparams = $derived(extract($page.url).qparams)
</script>

<output>
  <code>page_str = {qparams.str.value}</code>
  <code>page_num = {qparams.num.value}</code>
  <code>page_bool_array = {JSON.stringify(qparams.bool_array.value)}</code>
</output>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <HighlightSvelte {code} />
</div>

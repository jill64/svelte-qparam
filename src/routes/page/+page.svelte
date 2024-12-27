<script lang="ts">
  import { page } from '$app/state'
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import { extract } from 'extract.js'
  import extractSource from '../extract.ts?raw'
  import { code } from './code'

  let { qparams: q } = $derived(extract(page.url))
</script>

<div>
  <button
    onclick={() => {
      q.num = 123
    }}
  >
    Set num = 123
  </button>
</div>
<output>
  <code>page_str = {q.str}</code>
  <code>page_num = {q.num}</code>
  <code>page_bool_array = {JSON.stringify(q.bool_array)}</code>
</output>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <HighlightSvelte {code} />
</div>

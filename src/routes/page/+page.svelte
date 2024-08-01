<script lang="ts">
  import { page } from '$app/stores'
  import { Highlight, HighlightSvelte } from '@jill64/npm-demo-layout/highlight'
  import { javascript } from '@jill64/npm-demo-layout/highlight/languages'
  import { CheckList, Decimal } from '@jill64/svelte-input'
  import { extract } from 'extract.js'
  import extractSource from '../extract.ts?raw'
  import { code } from './code'

  // eslint-disable-next-line
  // @ts-ignore
  let qparams = $derived(extract($page.url).qparams)
</script>

<input bind:value={qparams.str.value} placeholder="string" />
<fieldset>
  <Decimal bind:value={qparams.num.value} placeholder="number" />
</fieldset>
<CheckList
  value={Object.fromEntries(
    Array(3)
      .fill(null)
      .map((_, i) => [i + 1, qparams.bool_array.value[i]])
  )}
  onchange={(e) => {
    qparams.bool_array.value = Object.values(e)
  }}
/>

<div style:overflow-x="auto">
  <Highlight code={extractSource} language={javascript} />
  <HighlightSvelte {code} />
</div>

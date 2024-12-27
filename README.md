<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-qparam

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/svelte-qparam"><img src="https://img.shields.io/npm/v/svelte-qparam" alt="npm-version" /></a> <a href="https://npmjs.com/package/svelte-qparam"><img src="https://img.shields.io/npm/l/svelte-qparam" alt="npm-license" /></a> <a href="https://npmjs.com/package/svelte-qparam"><img src="https://img.shields.io/npm/dm/svelte-qparam" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/svelte-qparam"><img src="https://img.shields.io/bundlephobia/min/svelte-qparam" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-qparam/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-qparam/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-qparam.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-qparam.jill64.dev" alt="website" /></a>

<!----- END GHOST DOCS BADGES ----->

🔎 Type-Safe Query Parameter for SvelteKit

## [Demo](https://svelte-qparam.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i svelte-qparam
```

## Bulk Parameters

Use the `define` function to set multiple parameter definitions at once.

```svelte
<script>
  import { page } from '$app/state'
  import { define } from 'svelte-qparam'
  import { string, number, boolean } from 'svelte-qparam/serde'

  const extract = define({
    str: string,
    num: number,
    bool: boolean
  })

  // https://example.com/?str=value&num=123&bool=false
  let { values, qparams } = $derived(extract(page.url))
  let { str, num, bool } = $derived(qparams)

  // {
  //   str: 'value',
  //   num: 123,
  //   bool: false
  // }
  console.log(values)

  // output 'value'
  console.log(str)
  num = 456
  bool = true
</script>
```

### Fullstack Type-Safety

Values defined with the `define` function can be used in `+page.js` and `+page.server.js`.
This allows you to handle parameters type-safely across applications across servers and clients.

```js
// +page.js
import { define } from 'svelte-qparam'
import { string, number, boolean } from 'svelte-qparam/serde'

export const _extract = define({
  str: string,
  num: number,
  bool: boolean
})

export const load = ({ url, data }) => {
  const { values, qparams } = _extract(url)

  // ...

  return {
    qparams
  }
}
```

```js
// +page.server.js
import { _extract } from './+page.js'

export const load = ({ url }) => {
  const { values } = _extract(url)

  // ...

  return {
    // Note: Cannot return `qparams` from server
    // ...
  }
}
```

```svelte
<!-- +page.svelte -->
<script>
  let { data } = $props()

  let { qparams } = $derived(data)
  let { str, num, bool } = $derived(qparams)

  // ...
</script>
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->

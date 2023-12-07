<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-qparam

[![npm-version](https://img.shields.io/npm/v/svelte-qparam)](https://npmjs.com/package/svelte-qparam) [![npm-license](https://img.shields.io/npm/l/svelte-qparam)](https://npmjs.com/package/svelte-qparam) [![npm-download-month](https://img.shields.io/npm/dm/svelte-qparam)](https://npmjs.com/package/svelte-qparam) [![npm-min-size](https://img.shields.io/bundlephobia/min/svelte-qparam)](https://npmjs.com/package/svelte-qparam) [![ci.yml](https://github.com/jill64/svelte-qparam/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-qparam/actions/workflows/ci.yml) [![stackblitz](https://img.shields.io/badge/StackBlitz-svelte--qparam-dodgerblue)](https://stackblitz.com/edit/svelte-qparam?file=src%2Froutes%2Fextract.js)

🔎 Type-Safe Query Parameter for SvelteKit

## [Demo](https://stackblitz.com/edit/svelte-qparam?file=src%2Froutes%2Fextract.js)

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i svelte-qparam
```

## Single Parameter

Passing a query parameter key to the `qparam` function will retrieve the svelte-store of that value.

```svelte
<script>
  import { qparam } from 'svelte-qparam'

  // https://example.com/?key=value
  $: value = $qparam('key')

  // output 'value'
  console.log($value)

  // navigate to https://example.com/?key=value2
  $value = 'value2'
  // or
  value.set('value2')
</script>
```

### Typed Param

By passing a conversion function as the second argument, you can obtain a value converted to any type.

```svelte
<script>
  import { qparam } from 'svelte-qparam'
  import { number } from 'svelte-qparam/serde'

  // https://example.com/?num=123
  $: num = $qparam('num', {
    stringify: (value) => value.toString(),
    parse: (str) => parseInt(str)
  })

  // output 123
  $: console.log($num)

  // navigate to https://example.com/?key=456
  $value = 456
  // or
  value.set(456)
</script>
```

### Prepared Converter

You can also use the prepared converters in `svelte-qparam/serde`.

```svelte
<script>
  import { qparam } from 'svelte-qparam'
  import { number, boolean, enums } from 'svelte-qparam/serde'

  $: num = $qparam('num', number)
  $: bool = $qparam('bool', boolean)
  $: enumerate = $qparam(
    'enumerate',
    enums(
      ['a', 'b', 'c'],
      'a' // fallback default value
    )
  )
</script>
```

> [!TIP]
> if error occurred when importing `svelte-qparam/serde`, try to change `moduleResolution` in `tsconfig.json` like below.
>
> ```json:tsconfig.json
>   {
>     // ...
>     "compilerOptions": {
>       // ...
>       "moduleResolution": "Bundler"
>     }
>   }
> ```

## Bulk Parameters

Use the `define` function to set multiple parameter definitions at once.

```svelte
<script>
  import { define } from 'svelte-qparam'
  import { string, number, boolean } from 'svelte-qparam/serde'

  const extract = define({
    str: string,
    num: number,
    bool: boolean
  })

  // https://example.com/?str=value&num=123&bool=false
  $: ({ values, qparams } = extract($page.url))
  $: ({ str, num, bool } = qparams)

  // {
  //   str: 'value',
  //   num: 123,
  //   bool: false
  // }
  $: console.log(values)

  // output 'value'
  $: console.log($str)
  $num = 456
  $bool.set(true)
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
  export let data

  $: ({ qparams } = data)
  $: ({ str, num, bool } = qparams)

  // ...
</script>
```

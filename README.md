<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-qparam

[![ci.yml](https://github.com/jill64/svelte-qparam/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-qparam/actions/workflows/ci.yml) [![codecov-coverage](https://codecov.io/gh/jill64/svelte-qparam/graph/badge.svg)](https://codecov.io/gh/jill64/svelte-qparam)

🔎 Type-Safe Query Parameter for SvelteKit

## Installation

```sh
npm i svelte-qparam
```

<!----- END GHOST DOCS HEADER ----->

## Single Parameter

Passing a query parameter key to the `qparam` function will retrieve the svelte-store of that value.

```svelte
<script>
  import { qparam } from 'svelte-qparam'

  // https://example.com/?key=value
  $: value = qparam('key')

  // output 'value'
  console.log($value)

  // navigate to https://example.com/?key=new-value
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
  import { number } from 'svelte-qparam/converter'

  // https://example.com/?num=123
  $: num = qparam('num', {
    stringify: (value) => value.toString(),
    parse: (str) => parseInt(str),
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

You can also use the prepared converters in `svelte-qparam/converter`.

```svelte
<script>
  import { qparam } from 'svelte-qparam'
  import { number, boolean } from 'svelte-qparam/converter'

  $: num = qparam('num', number)
  $: bool = qparam('bool', boolean)
  $: enum = qparam('enum', enum(
    ['a', 'b', 'c'],
    'a' // fallback default value
  ))
</script>
```

## Bulk Parameters

Use the `define` function to set multiple parameter definitions at once.

```svelte
<script>
  import { define } from 'svelte-qparam'
  import { string, number, boolean } from 'svelte-qparam/converter'

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

### Cross-Cutting Type-Safety

Values defined with the `define` function can be used in `+page.js` and `+page.server.js`.
This allows you to handle parameters type-safely across applications across servers and clients.

```js
// +page.js
import { define } from 'svelte-qparam'
import { string, number, boolean } from 'svelte-qparam/converter'

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
<script>
  export let data

  $: ({ qparams } = data)
  $: ({ str, num, bool } = qparams)

  // ...
</script>
```

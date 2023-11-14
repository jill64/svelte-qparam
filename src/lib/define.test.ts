import { expect, test } from 'vitest'
import { boolean } from './converter/boolean.js'
import { number } from './converter/number.js'
import { string } from './converter/string.js'
import { define } from './define'

test('define', () => {
  const extract = define({
    key: string,
    n: number,
    b: boolean
  })

  const { values } = extract(new URL('https://example.com/?key=val&n=1'))

  expect(values.key).toEqual('val')
  expect(values.n).toEqual(1)
  expect(values.b).toEqual(false)
})

import { expect, test } from 'vitest'
import { define } from './define'
import { boolean, number, string } from './serde/index.js'

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

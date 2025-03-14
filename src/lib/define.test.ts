import { expect, test } from 'bun:test'
import { define } from './define.svelte'
import { array } from './index'
import { boolean, json, number, string } from './serde/index.js'

test('define', () => {
  const extract = define({
    key: string,
    n: number,
    b: boolean,
    obj_array: array(
      json(
        (
          x
        ): x is {
          key: string
        } =>
          !!(
            x &&
            typeof x === 'object' &&
            'key' in x &&
            typeof x.key === 'string'
          ),
        {
          key: 'default_value'
        }
      )
    )
  })

  const { values } = extract(new URL('https://example.com/?key=val&n=1'))

  expect(values.key).toEqual('val')
  expect(values.n).toEqual(1)
  expect(values.b).toEqual(false)
  expect(values.obj_array).toEqual([])
})

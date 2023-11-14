import { expect, test } from 'vitest'
import { csv } from './csv'

test('csv', () => {
  const x = ['foo', 'bar', 'baz']
  const { parse, stringify } = csv
  expect(parse(stringify(x))).toEqual(x)
})

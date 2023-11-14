import { expect, test } from 'vitest'
import { enums } from './enums'

test('enums', () => {
  const x = 'foo'
  const { parse, stringify } = enums(['foo', 'bar'], 'bar')
  expect(parse(stringify(x))).toEqual(x)
})

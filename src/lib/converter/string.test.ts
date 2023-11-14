import { expect, test } from 'vitest'
import { string } from './string'

test('string', () => {
  const x = 'Test String'
  const { parse, stringify } = string
  expect(parse(stringify(x))).toEqual(x)
})

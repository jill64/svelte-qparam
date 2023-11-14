import { expect, test } from 'vitest'
import { boolean } from './boolean'

test('boolean', () => {
  const x = true
  const { parse, stringify } = boolean
  expect(parse(stringify(x))).toEqual(x)
})

import { expect, test } from 'vitest'
import { number } from './number'

test('number', () => {
  const x = 123
  const { parse, stringify } = number
  expect(parse(stringify(x))).toEqual(x)
})

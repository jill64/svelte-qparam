import { expectTypeOf, test } from 'vitest'
import { make_qparam } from './make-qparam'
import type { Qparam } from './types'
import { array } from 'typed-qparam'
import { number } from 'typed-qparam/serde'

test('make-qparam', () => {
  const qparam = make_qparam(new URL('https://example.com/?key=val&n=1'))

  const key = qparam('key')
  expectTypeOf(key).toEqualTypeOf<Qparam<string>>()

  const keys = qparam('keys', array())
  expectTypeOf(keys).toEqualTypeOf<Qparam<string[]>>()

  const nums = qparam('keys', array(number))
  expectTypeOf(nums).toEqualTypeOf<Qparam<number[]>>()
})

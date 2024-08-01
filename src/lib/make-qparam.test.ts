import { expectTypeOf, test } from 'vitest'
import { array } from './index'
import { make_qparam } from './make-qparam'
import { number } from './serde'
import type { Qparam } from './types'

test('make-qparam', () => {
  const qparam = make_qparam(new URL('https://example.com/?key=val&n=1'))

  const key = qparam('key')
  expectTypeOf(key).toEqualTypeOf<Qparam<string>>()

  const keys = qparam('keys', array())
  expectTypeOf(keys).toEqualTypeOf<Qparam<string[]>>()

  const nums = qparam('keys', array(number))
  expectTypeOf(nums).toEqualTypeOf<Qparam<number[]>>()
})

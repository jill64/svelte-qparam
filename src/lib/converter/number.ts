import type { QparamConverter } from '$lib/types'

export const number: QparamConverter<number> = {
  stringify: (val) => val.toString(),
  parse: (str) => (str ? Number(str) : 0)
}

import type { QparamConverter } from '$lib/types'

export const csv: QparamConverter<string[]> = {
  stringify: (val) => val.join(','),
  parse: (str) => (str ? str.split(',') : [])
}

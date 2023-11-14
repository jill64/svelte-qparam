import type { QparamConverter } from '$lib/types'

export const string: QparamConverter<string> = {
  stringify: (val) => val,
  parse: (str) => str ?? ''
}

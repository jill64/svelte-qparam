import type { QparamConverter } from '$lib/types'

export const boolean: QparamConverter<boolean> = {
  stringify: (val) => val.toString(),
  parse: (str) => str === 'true'
}

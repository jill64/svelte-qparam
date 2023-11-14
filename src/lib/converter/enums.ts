import type { QparamConverter } from '$lib/types'

type Enums = {
  <T extends string>(list: Readonly<T[]>, fallback: T): QparamConverter<T>
  <T extends string>(list: Readonly<T[]>): QparamConverter<T | null>
}

export const enums: Enums = <T extends string>(
  list: Readonly<T[]>,
  fallback?: T
) => {
  const includes =
    <R extends '' | null>(tail: R) =>
    (x: T) =>
      x && list.includes(x) ? x : fallback ?? tail

  return {
    stringify: includes(''),
    parse: includes(null)
  }
}

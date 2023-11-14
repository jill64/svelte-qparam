import type { Readable } from 'svelte/store'

export type Qparam<T> = {
  subscribe: Readable<T>['subscribe']
  set: (value: T) => unknown
}

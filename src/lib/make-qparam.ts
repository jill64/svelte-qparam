import { goto } from '$app/navigation'
import { string } from '$lib/converter/string'
import type { Qparam, QparamConverter } from '$lib/types'
import type { QparamOptions } from '$lib/types/QparamOptions'
import { readable } from 'svelte/store'

type MakeQparam = {
  <T>(
    key: string,
    converter: QparamConverter<T>,
    options?: QparamOptions
  ): Qparam<T>
  (key: string): Qparam<string>
}

export const make_qparam =
  (url: URL): MakeQparam =>
  <T>(key: string, converter?: QparamConverter<T>, options?: QparamOptions) => {
    const { parse, stringify } = (converter ?? string) as QparamConverter<T>

    const { subscribe } = readable(parse(url.searchParams.get(key)))

    const set = (value: T) => {
      const dist = new URL(url)
      const val = stringify(value)

      dist.searchParams.set(key, val)

      return options?.goto
        ? options.goto(dist)
        : goto(dist, {
            replaceState: true,
            noScroll: true,
            keepFocus: true
          })
    }

    return {
      subscribe,
      set
    }
  }

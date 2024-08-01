import { goto } from '$app/navigation'
import type { Qparam } from '$lib/types'
import type { QparamOptions } from '$lib/types/QparamOptions'
import { extract } from 'typed-qparam'
import { string, type Serde } from 'typed-qparam/serde'
import type { ArrayedSerde } from 'typed-qparam/types'

export const make_qparam = (
  url: URL
): {
  <T>(
    key: string,
    arrayedSerde: ArrayedSerde<T>,
    options?: QparamOptions
  ): Qparam<T[]>
  <T>(key: string, serde: Serde<T>, options?: QparamOptions): Qparam<T>
  (key: string): Qparam<string>
} => {
  const qparam = extract(url)

  return <T>(
    key: string,
    serde?: Serde<T> | ArrayedSerde<T>,
    options?: QparamOptions
  ) => {
    const param = qparam(key, (serde ?? string) as Serde<T>)

    return {
      get value() {
        return param.get()
      },
      set value(value: T) {
        const dist = param.set(value)

        // eslint-disable-next-line
        options?.goto
          ? options.goto(dist)
          : goto(dist, {
              replaceState: true,
              noScroll: true,
              keepFocus: true
            })
      }
    }
  }
}

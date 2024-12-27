import { goto } from '$app/navigation'
import type { QparamOptions } from '$lib/types'
import { extract } from 'typed-qparam'
import { string, type Serde } from 'typed-qparam/serde'
import type { ArrayedSerde } from 'typed-qparam/types'

type RSerde<T extends Serde<unknown>> = T extends Serde<infer R> ? R : never

export const define =
  /* eslint-disable @typescript-eslint/no-explicit-any */

  <T extends Record<string, Serde<any> | ArrayedSerde<any>>>(
    /* eslint-enable @typescript-eslint/no-explicit-any */

    table: T,
    options?: QparamOptions
  ) => {
    const entries = Object.entries(table)

    return (url: URL) => {
      const param = extract(url)

      const values = Object.fromEntries(
        entries.map(([key, serde]) => [key, param(key, serde).get()])
      ) as {
        [K in keyof T]: T[K] extends {
          arrayed: true
        }
          ? RSerde<T[K]>[]
          : RSerde<T[K]>
      }

      const qparam = extract(url)

      const qparams = {} as {
        [K in keyof T]: T[K] extends {
          arrayed: true
        }
          ? RSerde<T[K]>[]
          : RSerde<T[K]>
      }

      // まとめて定義するオブジェクトを作る
      const descriptors = entries.reduce((acc, [key, serde]) => {
        const param = qparam(key, (serde ?? string) as Serde<T>)
        let store = $state(param.get())

        // @ts-expect-error Invalid property descriptor.
        acc[key] = {
          get() {
            return store
          },
          set(value: T) {
            const dist = param.set(value)
            return options?.goto
              ? options.goto(dist)
              : goto(dist, {
                  replaceState: true,
                  noScroll: true,
                  keepFocus: true
                })
          },
          enumerable: true,
          configurable: true
        }
        return acc
      }, {})

      Object.defineProperties(qparams, descriptors)

      return {
        values,
        qparams
      }
    }
  }

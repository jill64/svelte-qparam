import type { Qparam, QparamOptions } from '$lib/types'
import { extract } from 'typed-qparam'
import type { Serde } from 'typed-qparam/serde'
import type { ArrayedSerde } from 'typed-qparam/types'
import { make_qparam } from './make-qparam.svelte'

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

      const qparam = make_qparam(url)

      const qparams = Object.fromEntries(
        entries.map(([key, serde]) => [key, qparam(key, serde, options)])
      ) as {
        [K in keyof T]: T[K] extends {
          arrayed: true
        }
          ? Qparam<RSerde<T[K]>[]>
          : Qparam<RSerde<T[K]>>
      }

      return {
        values,
        qparams
      }
    }
  }

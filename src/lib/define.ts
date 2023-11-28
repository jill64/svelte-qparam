import type { Qparam, QparamOptions } from '$lib/types'
import type { Serde } from 'typed-qparam/serde'
import { make_qparam } from './make-qparam'

export const define =
  /* eslint-disable @typescript-eslint/no-explicit-any */


    <T extends Record<string, Serde<any>>>(
      /* eslint-enable @typescript-eslint/no-explicit-any */

      table: T,
      options?: QparamOptions
    ) =>
    (url: URL) => {
      type Values = {
        [K in keyof T]: ReturnType<T[K]['deserialize']>
      }

      const entries = Object.entries(table)

      const values = Object.fromEntries(
        entries.map(([key, { deserialize }]) => [
          key,
          deserialize(url.searchParams.get(key) ?? '')
        ])
      ) as Values

      const qparam = make_qparam(url)

      const qparams = Object.fromEntries(
        entries.map(([key, serde]) => [key, qparam(key, serde, options)])
      ) as {
        [K in keyof Values]: Qparam<Values[K]>
      }

      return {
        values,
        qparams
      }
    }

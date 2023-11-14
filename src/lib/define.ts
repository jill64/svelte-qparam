import type { Qparam, QparamConverter, QparamOptions } from '$lib/types'
import { make_qparam } from './make-qparam'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const define =
  <T extends Record<string, QparamConverter<any>>>(
    /* eslint-enable @typescript-eslint/no-explicit-any */
    table: T,
    options?: QparamOptions
  ) =>
  (url: URL) => {
    type Values = {
      [K in keyof T]: ReturnType<T[K]['parse']>
    }

    const entries = Object.entries(table)

    const values = Object.fromEntries(
      entries.map(([key, converter]) => [
        key,
        converter.parse(url.searchParams.get(key))
      ])
    ) as Values

    const qparam = make_qparam(url)

    const qparams = Object.fromEntries(
      entries.map(([key, converter]) => [key, qparam(key, converter, options)])
    ) as {
      [K in keyof Values]: Qparam<Values[K]>
    }

    return {
      values,
      qparams
    }
  }

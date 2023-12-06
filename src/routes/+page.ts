import { define } from '$lib'
import { boolean, number, string } from '$lib/serde'
import { array } from 'typed-qparam'

export const _extract = define({
  str: string,
  num: number,
  bool_array: array(boolean)
})

export const load = ({ url, data }) => {
  const { values, qparams } = _extract(url)

  return {
    page_values: values,
    qparams,
    ...data
  }
}

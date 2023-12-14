// extract.js
import { array, define } from 'svelte-qparam'
import { boolean, number, string } from 'svelte-qparam/serde'

export const extract = define({
  str: string,
  num: number,
  bool_array: array(boolean)
})

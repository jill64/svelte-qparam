// +page.js
import { extract } from 'extract.js'

export const load = ({ url }) => {
  const { values, qparams } = extract(url)

  /* {
    str: string;
    num: number;
    bool_array: boolean[];
  } */
  console.log(values)

  return {
    qparams
  }
}

export const serverSource = `
// +page.server.js
import { extract } from 'extract.js'

export const load = ({ url }) => {
  const { values } = extract(url)

  /* {
    str: string;
    num: number;
    bool_array: boolean[];
  } */
  console.log(values)

  return {
    values
    // Note: Cannot return \`qparams\` from server
    // ...
  }
}
`

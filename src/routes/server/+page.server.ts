import { extract } from 'extract.js'

export const load = ({ url }) => {
  const { values } = extract(url)

  return {
    values
  }
}

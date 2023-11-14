import { _extract } from './+page.js'

export const load = ({ url }) => {
  const { values } = _extract(url)

  return {
    server_values: values
  }
}

import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
import { onRender } from '@jill64/svelte-dark-theme'

const { onHandle, onError } = init(
  'https://d85a303fa42d96ee0c9e0e0b7a061f59@o4505814639312896.ingest.sentry.io/4506358220128256'
)

export const handle = onHandle(onRender())
export const handleError = onError()

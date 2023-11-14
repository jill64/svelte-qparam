import { page } from '$app/stores'
import { derived } from 'svelte/store'
import { make_qparam } from './make-qparam'

export const qparam = derived(page, ($page) => make_qparam($page.url))

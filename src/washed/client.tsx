import { createRoot, hydrateRoot } from 'react-dom/client'
import { WashedApp } from './WashedApp'
import { BASE } from './lib/paths'

/** Path within the washed site: "/washed/residential/" -> "/residential/" (no-op once BASE is ""). */
export function washedPath(pathname: string) {
  return BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname
}

export function startWashed(root: HTMLElement) {
  const app = <WashedApp path={washedPath(window.location.pathname)} />
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}

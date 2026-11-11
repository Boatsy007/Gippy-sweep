import { createRoot, hydrateRoot } from 'react-dom/client'
import { GroundsApp } from './GroundsApp'
import { BASE } from './lib/paths'

/** Path within the grounds site: "/grounds/residential/" -> "/residential/" (no-op once BASE is ""). */
export function groundsPath(pathname: string) {
  return BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname
}

export function startGrounds(root: HTMLElement) {
  const app = <GroundsApp path={groundsPath(window.location.pathname)} />
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}

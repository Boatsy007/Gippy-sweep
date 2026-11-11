import { createRoot, hydrateRoot } from 'react-dom/client'
import { CleanedApp } from './CleanedApp'
import { BASE } from './lib/paths'

/** Path within the cleaning site: "/cleaned/residential/" -> "/residential/" (no-op once BASE is ""). */
export function cleanedPath(pathname: string) {
  return BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname
}

export function startCleaned(root: HTMLElement) {
  const app = <CleanedApp path={cleanedPath(window.location.pathname)} />
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}

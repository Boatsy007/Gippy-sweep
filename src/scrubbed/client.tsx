import { createRoot, hydrateRoot } from 'react-dom/client'
import { ScrubbedApp } from './ScrubbedApp'
import { BASE } from './lib/paths'

/** Path within the scrubbed site: "/scrubbed/residential/" -> "/services/" (no-op once BASE is ""). */
export function scrubbedPath(pathname: string) {
  return BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname
}

export function startScrubbed(root: HTMLElement) {
  const app = <ScrubbedApp path={scrubbedPath(window.location.pathname)} />
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}

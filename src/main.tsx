import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { startAnimatedFavicon } from './animatedFavicon'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

// Cleaned by Swept pages are prerendered with data-site="cleaned" and load their own
// code-split bundle. In dev (no prerender) they're recognised by the /cleaned path.
const isCleaned =
  root.dataset.site === 'cleaned' || (import.meta.env.DEV && window.location.pathname.startsWith('/cleaned'))

if (isCleaned) {
  import('./cleaned/client').then((m) => m.startCleaned(root))
} else {
  const app = (
    <StrictMode>
      <App />
    </StrictMode>
  )

  // Production builds ship prerendered HTML (scripts/prerender.mjs) — hydrate it.
  // The dev server serves an empty #root, so render from scratch there.
  if (root.hasChildNodes()) hydrateRoot(root, app)
  else createRoot(root).render(app)
}

startAnimatedFavicon()

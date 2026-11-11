import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { startAnimatedFavicon } from './animatedFavicon'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

// Division sites (Cleaned by Swept, Grounds by Swept) are prerendered with
// data-site="<site>" and load their own code-split bundle. In dev (no prerender)
// they're recognised by their path prefix.
const site =
  root.dataset.site ??
  (import.meta.env.DEV ? ['cleaned', 'grounds'].find((s) => window.location.pathname.startsWith(`/${s}`)) : undefined)

if (site === 'cleaned') {
  import('./cleaned/client').then((m) => m.startCleaned(root))
} else if (site === 'grounds') {
  import('./grounds/client').then((m) => m.startGrounds(root))
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

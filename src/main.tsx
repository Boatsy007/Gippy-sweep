import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { startAnimatedFavicon } from './animatedFavicon'

const root = document.getElementById('root')
if (!root) throw new Error('Root element not found')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production builds ship prerendered HTML (scripts/prerender.mjs) — hydrate it.
// The dev server serves an empty #root, so render from scratch there.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

startAnimatedFavicon()

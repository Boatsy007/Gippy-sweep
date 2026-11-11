import { StrictMode } from 'react'
import { MotionConfig } from 'framer-motion'
import { Layout } from './Layout'
import { findRoute } from './routes'

/** One Scrubbed by Swept page. `path` is relative to the scrubbed site's base, e.g. "/services/". */
export function ScrubbedApp({ path }: { path: string }) {
  const route = findRoute(path)
  return (
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <Layout current={route.path}>{route.render()}</Layout>
      </MotionConfig>
    </StrictMode>
  )
}

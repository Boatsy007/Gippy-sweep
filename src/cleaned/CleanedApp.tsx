import { StrictMode } from 'react'
import { MotionConfig } from 'framer-motion'
import { Layout } from './Layout'
import { findRoute } from './routes'

/** One Cleaned by Swept page. `path` is relative to the cleaning site's base, e.g. "/residential/". */
export function CleanedApp({ path }: { path: string }) {
  const route = findRoute(path)
  return (
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <Layout current={route.path}>{route.render()}</Layout>
      </MotionConfig>
    </StrictMode>
  )
}

import { StrictMode } from 'react'
import { MotionConfig } from 'framer-motion'
import { Layout } from './Layout'
import { findRoute } from './routes'

/** One Grounds by Swept page. `path` is relative to the grounds site's base, e.g. "/residential/". */
export function GroundsApp({ path }: { path: string }) {
  const route = findRoute(path)
  return (
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <Layout current={route.path}>{route.render()}</Layout>
      </MotionConfig>
    </StrictMode>
  )
}

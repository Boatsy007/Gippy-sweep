import { StrictMode } from 'react'
import { MotionConfig } from 'framer-motion'
import { Layout } from './Layout'
import { findRoute } from './routes'

/** One Washed by Swept page. `path` is relative to the washed site's base, e.g. "/residential/". */
export function WashedApp({ path }: { path: string }) {
  const route = findRoute(path)
  return (
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <Layout current={route.path}>{route.render()}</Layout>
      </MotionConfig>
    </StrictMode>
  )
}

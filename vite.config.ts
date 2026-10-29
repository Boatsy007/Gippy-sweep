import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  // Vendor chunk splitting applies to the browser build only; the SSR build
  // used for prerendering keeps react/framer-motion external.
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'motion-vendor': ['framer-motion'],
            },
          },
        },
      },
}))

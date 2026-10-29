/**
 * Spins the sunburst favicon clockwise in the browser tab, like a sweeper brush.
 *
 * Frames are drawn on a canvas from /favicon-sunburst.png and swapped into a
 * single <link rel="icon">. The static icons in index.html stay as the fallback
 * for browsers without JS, and the static PNG is restored whenever the
 * animation is stopped (reduced motion) — browsers that ignore favicon updates
 * simply keep showing it.
 */

const SOURCE = '/favicon-sunburst.png'
const STATIC_ICON = '/favicon-32.png'

/** One full turn every 6 s, at a constant speed */
const ROTATION_MS = 6000
/** Favicon updates per second — enough to look smooth at tab size, cheap on CPU */
const FPS = 15
/** 90 evenly spaced frames (4° apart), so the loop wraps seamlessly */
const FRAME_COUNT = (ROTATION_MS / 1000) * FPS

export function startAnimatedFavicon() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // 32px covers standard and 2× tabs (16 CSS px); go larger on denser screens
  const size = 16 * Math.min(Math.max(Math.ceil(window.devicePixelRatio || 1), 2), 4)
  canvas.width = canvas.height = size

  // Drive a single icon link — with several, browsers may keep showing another
  document.querySelectorAll('link[rel~="icon"]').forEach((el) => el.remove())
  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = 'image/png'
  link.href = STATIC_ICON
  document.head.appendChild(link)

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const image = new Image()
  const frames: string[] = []

  let rafId = 0
  let lastFrame = -1
  /** Time origin of the rotation; shifted on resume so it continues where it paused */
  let origin = 0
  let pausedAt = 0

  function renderFrame(index: number) {
    ctx!.clearRect(0, 0, size, size)
    ctx!.save()
    ctx!.translate(size / 2, size / 2)
    ctx!.rotate((index / FRAME_COUNT) * Math.PI * 2) // positive = clockwise on canvas
    ctx!.imageSmoothingEnabled = true
    ctx!.imageSmoothingQuality = 'high'
    ctx!.drawImage(image, -size / 2, -size / 2, size, size)
    ctx!.restore()
    return canvas.toDataURL('image/png')
  }

  function tick(now: number) {
    rafId = requestAnimationFrame(tick)
    // rAF fires at the display rate; only touch the favicon when the frame changes
    const frame = Math.floor(((now - origin) / ROTATION_MS) * FRAME_COUNT) % FRAME_COUNT
    if (frame === lastFrame) return
    lastFrame = frame
    link.href = frames[frame] ??= renderFrame(frame)
  }

  function play() {
    if (rafId) return
    const now = performance.now()
    origin = pausedAt ? origin + (now - pausedAt) : now
    pausedAt = 0
    rafId = requestAnimationFrame(tick)
  }

  function pause() {
    if (!rafId) return
    cancelAnimationFrame(rafId)
    rafId = 0
    pausedAt = performance.now()
  }

  function update() {
    if (reducedMotion.matches) {
      pause()
      link.href = STATIC_ICON
      lastFrame = -1
    } else if (document.hidden) {
      pause()
    } else {
      play()
    }
  }

  image.src = SOURCE
  image
    .decode()
    .then(() => {
      document.addEventListener('visibilitychange', update)
      reducedMotion.addEventListener('change', update)
      update()
    })
    .catch(() => {
      // Source failed to load — keep the static icon
    })
}

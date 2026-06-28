import { motion } from 'framer-motion'
import { AnimateInView } from '../ui/AnimateInView'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const galleryItems: { label: string; ratio: string; src?: string }[] = [
  { label: 'Carpark before and after — Traralgon', ratio: '4/3', src: '/results-before-after.png' },
  { label: 'Construction site sweep — Sale', ratio: '3/4' },
  { label: 'Warehouse floor — Morwell', ratio: '4/3' },
  { label: 'Shopping centre carpark — Bairnsdale', ratio: '3/4' },
  { label: 'Road sweeping — Latrobe Valley', ratio: '16/9' },
  { label: 'Industrial estate — Moe', ratio: '4/3' },
  { label: 'Grain shed yard — Leongatha', ratio: '3/4' },
  { label: 'Event venue preparation', ratio: '4/3' },
  { label: 'Sweeper detail shot', ratio: '1/1' },
  { label: 'Night sweep — commercial precinct', ratio: '16/9' },
  { label: 'Before: debris-heavy site', ratio: '4/3' },
  { label: 'After: clean result delivered', ratio: '4/3' },
]

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-zinc-50" aria-labelledby="gallery-heading">
      <div className="section-container">
        <AnimateInView className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Our Work</p>
          <h2 id="gallery-heading" className="display-md text-asphalt">
            Results speak<br />for themselves.
          </h2>
          <p className="mt-5 text-zinc-500 text-base leading-relaxed">
            Every job we complete is an example of what professional sweeping looks like.
            Photography coming soon — image placeholders represent real job types.
          </p>
        </AnimateInView>

        {/* CSS columns masonry */}
        <div
          className="columns-2 md:columns-3 lg:columns-4 gap-3"
          role="list"
          aria-label="Gallery of completed sweeping jobs"
        >
          {galleryItems.map((item, i) => (
            <AnimateInView
              key={item.label}
              delay={i * 0.04}
              direction="up"
              className="break-inside-avoid mb-3"
            >
              <div role="listitem">
                {item.src ? (
                  <div
                    className="w-full overflow-hidden"
                    style={{ aspectRatio: item.ratio }}
                  >
                    <motion.img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    label={item.label}
                    aspectRatio={item.ratio}
                    className="w-full"
                  />
                )}
              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView className="text-center mt-12">
          <p className="text-sm text-zinc-400">
            Photography being captured across active job sites — check back soon.
          </p>
        </AnimateInView>
      </div>
    </section>
  )
}

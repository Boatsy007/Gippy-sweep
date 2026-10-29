import { motion } from 'framer-motion'

const galleryItems = [
  {
    name: 'results-before-after',
    alt: 'Commercial car park before and after a mechanical sweep',
    caption: 'Car park — before and after',
    objectPosition: 'center',
  },
  {
    name: 'gallery-shopping-centre',
    alt: 'RCM Mille sweeper working in a shopping centre car park',
    caption: 'Shopping centre car park',
    objectPosition: '50% 40%',
  },
  {
    name: 'gallery-grain-shed',
    alt: 'Ride-on sweeper clearing an industrial yard',
    caption: 'Industrial yard',
    objectPosition: '50% 45%',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="section-pad bg-zinc-50" aria-labelledby="gallery-heading">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Our Work</p>
          <h2 id="gallery-heading" className="display-md text-asphalt">
            Results speak<br />for themselves.
          </h2>
          <p className="mt-5 text-zinc-500 text-base leading-relaxed">
            Every job we complete is an example of what professional sweeping looks like.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <li key={item.name}>
              <div>
                <figure>
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-200">
                    <motion.img
                      src={`/${item.name}-800.webp`}
                      srcSet={`/${item.name}-800.webp 800w, /${item.name}.webp 1536w`}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      width={1536}
                      height={1024}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.objectPosition }}
                      loading="eager"
                      decoding="async"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                  <figcaption className="mt-3 text-sm font-semibold text-asphalt">{item.caption}</figcaption>
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

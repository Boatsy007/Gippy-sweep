import { serviceBrands, type ServiceBrand } from '../serviceBrands'

interface BrandLogoProps {
  brand: ServiceBrand
  /** Height of the wordmark's lowercase letters, in px — the same for every brand */
  letterHeight: number
  byline?: string
  className?: string
}

/**
 * Service brand logo sized by its lettering rather than its image box.
 *
 * The logos' icons and descenders differ, so equal image heights give unequal
 * text. Each logo is scaled so its lowercase letters are `letterHeight` tall,
 * and every logo's baseline lands at the same point in an equally tall row,
 * so wordmarks line up across cards and sections.
 */
export function BrandLogo({ brand, letterHeight, byline, className = '' }: BrandLogoProps) {
  const size = (b: ServiceBrand) => letterHeight / b.logo.xHeight
  // Shared row geometry across all brands: tallest part above and below the baseline
  const above = Math.max(...serviceBrands.map((b) => size(b) * b.logo.baseline))
  const below = Math.max(...serviceBrands.map((b) => size(b) * (1 - b.logo.baseline)))

  const h = size(brand)
  const w = h * brand.logo.aspect

  return (
    <div className={`flex items-baseline gap-3 ${className}`} style={{ height: above + below }}>
      <img
        src={brand.logo.src}
        alt={brand.name}
        width={Math.round(w)}
        height={Math.round(h)}
        className="shrink-0"
        // Negative bottom margin puts the image's baseline at the wordmark's
        // baseline, so the byline text aligns to the lettering
        style={{
          width: w,
          height: h,
          marginTop: above - h * brand.logo.baseline,
          marginBottom: -h * (1 - brand.logo.baseline),
        }}
      />
      {byline && <span className="eyebrow">{byline}</span>}
    </div>
  )
}

/**
 * The four SWEPT service brands. Every place a service appears — the overview
 * cards, the service sections, the footer and the quote form — reads from this
 * list, so the brands stay consistent with each other.
 */

export type ServiceId = 'sweeping' | 'washed' | 'grounds' | 'cleaned'

export interface ServiceItem {
  title: string
  description: string
}

export interface ServiceBrand {
  id: ServiceId
  /** Brand name as written in copy */
  name: string
  /** What the brand does, in plain search-friendly words */
  label: string
  /**
   * Logo file plus measurements of its artwork (fractions of image height),
   * used to render every wordmark at the same lettering size on one baseline.
   */
  logo: { src: string; aspect: number; xHeight: number; baseline: number }
  /** Shown beside the logo; SWEPT itself has none */
  byline?: string
  /** Brand colours from the logo artwork, used as a thin accent only */
  accent: [string, string]
  heading: string[]
  intro: string
  /** One-line summary for the services overview */
  summary: string
  items: ServiceItem[]
  /** Label for this service in the quote form */
  quoteOption: string
  crossLink: { before: string; target: ServiceId; linkText: string; after: string }
  image?: { src: string; srcSet: string; width: number; height: number; alt: string; position: string }
}

export const serviceBrands: ServiceBrand[] = [
  {
    id: 'sweeping',
    name: 'SWEPT',
    label: 'Commercial Sweeping & Floor Scrubbing',
    logo: { src: '/logo-dark.webp', aspect: 3.5625, xHeight: 0.444, baseline: 0.725 },
    accent: ['#00E1FF', '#0050FF'],
    heading: ['Commercial Sweeping', '& Floor Scrubbing,', 'Done Right.'],
    intro:
      'SWEPT operates commercial-grade mechanical sweepers for car parks, warehouses, industrial sites, shopping centres and construction projects across the Gold Coast and South East Queensland — keeping hard surfaces safe, clean and presentable on a schedule that suits your site.',
    summary: 'Car park, warehouse and industrial sweeping, plus commercial floor scrubbing.',
    items: [
      {
        title: 'Commercial Carpark Sweeping',
        description:
          'Thorough mechanical sweeping removes debris, grit and litter from all commercial car parks across South East Queensland — keeping your premises safe and professional.',
      },
      {
        title: 'Industrial Sweeping',
        description:
          'Heavy-duty sweeping for factories, depots and industrial facilities across the Gold Coast and Brisbane. We work around your operations, day or night.',
      },
      {
        title: 'Warehouse Sweeping',
        description:
          'Industrial environments generate significant dust and grit. We keep your internal floors compliant, safe and clean — scheduled around your operating hours.',
      },
      {
        title: 'Commercial Floor Scrubbing',
        description:
          'Machine floor scrubbing for warehouse, industrial, showroom and retail floors — lifting ground-in dirt, tyre marks and spills from sealed and concrete surfaces.',
      },
      {
        title: 'Construction Site Sweeping',
        description:
          'During-build and post-construction site management to control dust, concrete rubble and site waste. We coordinate directly with site managers.',
      },
      {
        title: 'Retail Centre Sweeping',
        description:
          'Early-morning or overnight sweeping programs that keep your centre looking its best before customers arrive.',
      },
      {
        title: 'Council Sweeping',
        description:
          'Roads, paths, carparks and civic spaces maintained to local government standards across South East Queensland.',
      },
      {
        title: 'Body Corporate Sweeping',
        description:
          'Strata complexes, apartment car parks and residential estate driveways kept presentation-ready on a scheduled program.',
      },
      {
        title: 'Resort Sweeping',
        description:
          'Hotel car parks, arrival forecourts and guest areas cleaned to the highest standard — before guests arrive and after they leave.',
      },
      {
        title: 'Vacuum Sweeping',
        description:
          'High-powered vacuum sweeping for fine debris, sand and leaf litter where conventional sweeping is not sufficient.',
      },
      {
        title: 'Scheduled Maintenance Programs',
        description:
          'Tailored weekly, fortnightly or monthly service schedules for ongoing site maintenance — with fixed pricing and priority scheduling.',
      },
    ],
    quoteOption: 'Sweeping & floor scrubbing (SWEPT)',
    crossLink: { before: 'Need a deeper clean? Pair regular sweeping with ', target: 'washed', linkText: 'Washed pressure cleaning', after: '.' },
    image: {
      src: '/services-carpark-800.webp',
      srcSet: '/services-carpark-800.webp 800w, /services-carpark.webp 1448w',
      width: 1448,
      height: 1086,
      alt: 'Aerial view of RCM Mille commercial sweeper working in a car park — before and after sweep clearly visible',
      position: '45% 35%',
    },
  },
  {
    id: 'washed',
    name: 'Washed',
    label: 'Commercial Pressure Cleaning',
    logo: { src: '/logo-washed.webp', aspect: 3.2625, xHeight: 0.375, baseline: 0.744 },
    byline: 'by Swept',
    accent: ['#00E5FF', '#0062FF'],
    heading: ['Commercial Pressure', 'Cleaning, Backed', 'by Swept.'],
    intro:
      'Through Washed by Swept, we provide commercial pressure cleaning, wash-downs and graffiti removal for sites that need a deeper clean — from car parks, footpaths and building exteriors to loading docks, bin bays and resort complexes across the Gold Coast and South East Queensland.',
    summary: 'Pressure cleaning for car parks, footpaths, building exteriors and outdoor areas.',
    items: [
      {
        title: 'Basement Car Park Wash-Downs',
        description:
          'High-pressure cleaning for multi-level and basement car parks, removing oil, grime and debris from concrete surfaces, drainage channels and structural columns.',
      },
      {
        title: 'Footpath & Walkway Cleaning',
        description:
          'Pressure cleaning for footpaths, walkways, entries and pedestrian areas — removing grime, gum and staining to keep high-traffic paths clean and safe underfoot.',
      },
      {
        title: 'Building Exterior Washing',
        description:
          'Exterior washing for commercial building facades, walls and awnings — removing dirt, mould and weathering to restore a clean, professional frontage.',
      },
      {
        title: 'Loading Dock Cleaning',
        description:
          'Industrial-grade pressure cleaning for loading docks and delivery bays — removing spills, contaminants and heavy soiling from high-traffic commercial zones.',
      },
      {
        title: 'Bin Bay Cleaning',
        description:
          'Hygienic high-pressure wash-downs of bin bays and waste enclosures, eliminating odours and contamination across retail, hospitality and commercial properties.',
      },
      {
        title: 'Warehouse Floor Wash-Downs',
        description:
          'Deep cleaning for warehouse and distribution centre floors, removing industrial residue, dust and chemical spills to restore safe, compliant working surfaces.',
      },
      {
        title: 'Resort & Body Corporate Cleaning',
        description:
          'Pressure cleaning for resort complexes, pool surrounds, pathways and body corporate common areas — maintaining premium presentation standards.',
      },
      {
        title: 'Retail Centre Pressure Cleaning',
        description:
          'External paving, pedestrian zones and entry areas cleaned to retail-standard presentation for shopping centres and commercial precincts.',
      },
      {
        title: 'Concrete Surface Cleaning',
        description:
          'Specialist cleaning for concrete driveways, car parks, paths and outdoor hard surfaces — restoring appearance and removing long-term soiling.',
      },
      {
        title: 'Oil, Grime & Stain Removal',
        description:
          'Targeted high-pressure treatment for oil spills, grime and persistent surface staining on commercial and industrial properties.',
      },
      {
        title: 'Graffiti Removal',
        description:
          "Professional graffiti removal from commercial surfaces including rendered walls, concrete, brick, cladding and signage — restoring your property's professional presentation.",
      },
      {
        title: 'Scheduled Exterior Cleaning',
        description:
          'Regular exterior cleaning programs — monthly, quarterly or seasonal — that keep car parks, paths and building exteriors consistently presentable.',
      },
    ],
    quoteOption: 'Pressure cleaning (Washed)',
    crossLink: { before: 'Keep surfaces clean between washes with regular ', target: 'sweeping', linkText: 'SWEPT commercial sweeping', after: '.' },
  },
  {
    id: 'grounds',
    name: 'Grounds',
    label: 'Commercial Grounds Maintenance',
    logo: { src: '/logo-grounds.webp', aspect: 3.3375, xHeight: 0.325, baseline: 0.6625 },
    byline: 'by Swept',
    accent: ['#B5E61D', '#0B6E3A'],
    heading: ['Commercial Grounds', 'Maintenance for', 'Cleaner, Safer Sites.'],
    intro:
      'Through Grounds by Swept, we keep commercial properties presentable between major cleans — from lawn mowing, garden maintenance and hedge trimming to weed management, litter picking and kerb tidy-ups for car parks, walkways and shared outdoor areas across the Gold Coast and South East Queensland.',
    summary: 'Lawn mowing, gardens, hedges, weed management and scheduled grounds upkeep.',
    items: [
      {
        title: 'Commercial Lawn Mowing',
        description:
          'Regular mowing, edging and clippings removal for commercial lawns, nature strips and verges — keeping grassed areas neat and consistent all year round.',
      },
      {
        title: 'Garden Maintenance',
        description:
          'Commercial garden maintenance — removing debris, leaf litter, dead material and surface rubbish from planting areas and landscape borders.',
      },
      {
        title: 'Hedge Trimming',
        description:
          'Shaping and trimming of hedges and screening plants around entries, car parks and boundaries — keeping sightlines clear and frontages tidy.',
      },
      {
        title: 'Weed Management',
        description:
          'Professional weed control for kerbs, expansion joints, car park seams and hardstand edges — preventing growth that undermines property presentation and safety.',
      },
      {
        title: 'Litter Picking',
        description:
          'Systematic litter removal from car parks, walkways, hardstands and shared outdoor areas — keeping commercial properties presentable between scheduled sweeps.',
      },
      {
        title: 'Leaf Blowing',
        description:
          'Commercial-grade leaf blowing for hard surfaces, car parks and outdoor areas, clearing leaf litter and light debris efficiently without disrupting operations.',
      },
      {
        title: 'Kerb & Edge Tidy-Ups',
        description:
          'Precise kerb-line tidy-ups for commercial properties, removing overgrowth, debris and litter accumulation from boundary lines and kerb channels.',
      },
      {
        title: 'Car Park Tidy-Ups',
        description:
          'Comprehensive car park presentation visits covering litter, debris and general surface presentation for commercial car parks and hardstands.',
      },
      {
        title: 'External Bin Area Tidying',
        description:
          'Tidying and presentation of external bin areas, waste enclosures and collection zones — maintaining hygiene and appearance standards.',
      },
      {
        title: 'Stormwater Grate Clearing',
        description:
          'Clearing stormwater grates, drainage points and channels of leaf litter and debris — essential for wet season preparedness and compliance.',
      },
      {
        title: 'Stick, Branch & Debris Removal',
        description:
          'Removal of fallen sticks, branches, storm debris and green waste from commercial outdoor areas, car parks and hardstand surfaces.',
      },
      {
        title: 'Scheduled Grounds Upkeep',
        description:
          'Regular scheduled visits to maintain consistent site presentation — weekly, fortnightly or monthly programs tailored to your property and seasonal requirements.',
      },
    ],
    quoteOption: 'Grounds maintenance (Grounds)',
    crossLink: { before: 'Inside and out — combine Grounds with ', target: 'cleaned', linkText: 'Cleaned commercial cleaning', after: '.' },
  },
  {
    id: 'cleaned',
    name: 'Cleaned',
    label: 'Commercial Cleaning',
    logo: { src: '/logo-cleaned.webp', aspect: 3.59375, xHeight: 0.356, baseline: 0.675 },
    byline: 'by Swept',
    accent: ['#C084FC', '#4F46E5'],
    heading: ['Commercial Cleaning', 'for Gold Coast', 'Workplaces.'],
    intro:
      'Through Cleaned by Swept, we look after the inside of your property too — office cleaning, warehouse and industrial cleaning, retail and showroom cleaning, strata common areas and amenities across the Gold Coast and South East Queensland, scheduled to suit your business.',
    summary: 'Office, warehouse, retail, strata and amenities cleaning on a regular schedule.',
    items: [
      {
        title: 'Office Cleaning',
        description:
          'Scheduled cleaning for offices and corporate workspaces — desks, floors, kitchens and meeting rooms kept spotless so your team and visitors walk into a professional space.',
      },
      {
        title: 'Warehouse & Industrial Cleaning',
        description:
          'Internal cleaning for warehouses, factories and distribution centres, covering staff areas, offices, floors and break rooms — scheduled around shifts and operating hours.',
      },
      {
        title: 'Retail & Showroom Cleaning',
        description:
          'Before-open and after-close cleaning for shops, showrooms and shopping centre tenancies — keeping floors, counters and entries presentable for customers.',
      },
      {
        title: 'Strata & Common Area Cleaning',
        description:
          'Common area cleaning for strata and body corporate properties — lobbies, corridors, stairwells, lifts and shared facilities maintained to a consistent standard.',
      },
      {
        title: 'Bathroom & Amenities Cleaning',
        description:
          'Hygienic cleaning and restocking of toilets, showers, change rooms and kitchenettes — keeping high-use amenities clean, fresh and compliant.',
      },
      {
        title: 'Scheduled Ongoing Cleaning',
        description:
          'Daily, weekly or fortnightly cleaning programs tailored to your site — with a clear scope, consistent standards and fixed pricing.',
      },
    ],
    quoteOption: 'Commercial cleaning (Cleaned)',
    crossLink: { before: 'Looking after the outside too? Add ', target: 'grounds', linkText: 'Grounds maintenance', after: ' or Washed exterior cleaning.' },
  },
]

export const brandById = Object.fromEntries(serviceBrands.map((b) => [b.id, b])) as Record<ServiceId, ServiceBrand>

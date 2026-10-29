/**
 * The six SWEPT service identities. Every place a service appears — the overview
 * cards, the service sections, the footer and the quote form — reads from this
 * list, so the brands stay consistent with each other.
 */

export type ServiceId = 'sweeping' | 'scrubbed' | 'washed' | 'grounds' | 'cleaned' | 'marked'

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
    label: 'Commercial Sweeping',
    logo: { src: '/logo-dark.webp', aspect: 3.5625, xHeight: 0.444, baseline: 0.725 },
    accent: ['#00E1FF', '#0050FF'],
    heading: ['Commercial', 'Mechanical Sweeping,', 'Done Right.'],
    intro:
      'SWEPT provides commercial sweeping across the Gold Coast and South East Queensland, using commercial-grade mechanical sweepers for car parks, warehouses, industrial sites, shopping centres and construction projects — keeping hard surfaces safe, clean and presentable on a schedule that suits your site.',
    summary: 'Mechanical sweeping for car parks, warehouses, industrial sites and shopping centres.',
    items: [
      {
        title: 'Commercial Car Park Sweeping',
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
    quoteOption: 'Commercial sweeping (SWEPT)',
    crossLink: { before: 'Hard floors need more than a sweep? Pair regular sweeping with ', target: 'scrubbed', linkText: 'Scrubbed floor scrubbing', after: '.' },
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
    id: 'scrubbed',
    name: 'Scrubbed',
    label: 'Commercial Floor Scrubbing',
    logo: { src: '/logo-scrubbed.webp', aspect: 3.2875, xHeight: 0.2938, baseline: 0.6687 },
    byline: 'by Swept',
    accent: ['#3FE6D0', '#0E7C99'],
    heading: ['Commercial Floor', 'Scrubbing for', 'Cleaner Hard Floors.'],
    intro:
      'Through Scrubbed by Swept, we provide machine floor scrubbing for warehouses, industrial facilities, shopping centres and commercial hard floors across the Gold Coast and South East Queensland — from one-off deep cleans to scheduled floor maintenance.',
    summary:
      'Professional machine floor scrubbing for warehouses, shopping centres, car parks and industrial facilities. Deep cleaning and scheduled maintenance for commercial hard floors.',
    items: [
      {
        title: 'Warehouse Floor Scrubbing',
        description:
          'Machine scrubbing for warehouse and distribution centre floors — lifting ground-in dirt, tyre marks and spills from sealed and concrete surfaces.',
      },
      {
        title: 'Industrial Floor Scrubbing',
        description:
          'Heavy-duty floor scrubbing for factories, workshops and industrial facilities, removing grime and residue to keep working surfaces safe and presentable.',
      },
      {
        title: 'Shopping Centre Floor Cleaning',
        description:
          'Scrubbing for shopping centre walkways, food courts, entries and car park levels — scheduled before opening or after close to avoid disrupting trade.',
      },
      {
        title: 'Commercial Hard-Floor Cleaning',
        description:
          'Machine cleaning for polished concrete, vinyl, tiled and sealed hard floors in showrooms, offices and commercial premises.',
      },
      {
        title: 'Machine Scrubbing & Drying',
        description:
          'Scrub-and-dry machine cleaning that washes, scrubs and recovers water in one pass — leaving floors clean, dry and ready to use sooner.',
      },
      {
        title: 'Scheduled Floor Maintenance',
        description:
          'Weekly, fortnightly or monthly floor scrubbing programs tailored to your site — keeping high-traffic hard floors consistently clean.',
      },
    ],
    quoteOption: 'Floor scrubbing (Scrubbed)',
    crossLink: { before: 'Keep floors clean between scrubs with regular ', target: 'sweeping', linkText: 'SWEPT commercial sweeping', after: '.' },
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
  {
    id: 'marked',
    name: 'Marked',
    label: 'Commercial Line Marking',
    logo: { src: '/logo-marked.webp', aspect: 3.4813, xHeight: 0.375, baseline: 0.7438 },
    byline: 'by Swept',
    accent: ['#FFD400', '#FF5A00'],
    heading: ['Commercial Line', 'Marking for Safer,', 'Clearer Sites.'],
    intro:
      'Through Marked by Swept, we arrange line marking for car parks, warehouses and commercial properties across the Gold Coast and South East Queensland — parking bays, pedestrian walkways, directional arrows and safety markings, organised through the same point of contact as your other property services.',
    summary:
      'Professional line marking for car parks, warehouses and commercial properties, including parking bays, pedestrian walkways, directional arrows and safety markings.',
    items: [
      {
        title: 'Commercial Car Park Line Marking',
        description:
          'Line marking for commercial car parks — bays, aisles, arrows and signage markings laid out to suit your site and traffic flow.',
      },
      {
        title: 'Parking Bay Marking',
        description:
          'New and re-marked parking bays, numbering and visitor, staff or loading zone markings for car parks and hardstands.',
      },
      {
        title: 'Warehouse Safety Lines',
        description:
          'Floor lines for warehouses and distribution centres — forklift lanes, storage zones, loading areas and keep-clear markings.',
      },
      {
        title: 'Pedestrian Walkways',
        description:
          'Clearly marked pedestrian walkways and crossings that separate foot traffic from vehicles across car parks and industrial sites.',
      },
      {
        title: 'Directional Arrows',
        description:
          'Directional arrows and traffic flow markings that guide vehicles safely through car parks, driveways and loading areas.',
      },
      {
        title: 'Accessible Parking Bay Markings',
        description:
          'Accessible parking bays, symbols and shared zones marked out for car parks and commercial premises.',
      },
      {
        title: 'Line Marking Refreshes',
        description:
          'Re-marking of faded or worn lines — ideally after a sweep or pressure clean, so new paint goes down on a clean surface.',
      },
    ],
    quoteOption: 'Line marking (Marked)',
    crossLink: { before: 'Start with a clean surface — pair line marking with ', target: 'washed', linkText: 'Washed pressure cleaning', after: '.' },
  },
]

export const brandById = Object.fromEntries(serviceBrands.map((b) => [b.id, b])) as Record<ServiceId, ServiceBrand>

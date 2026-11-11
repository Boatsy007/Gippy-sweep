import type { ChecklistGroup, Faq } from './types'

/*
 * Residential services for Washed by Swept.
 *
 * Copy rules: describe the work plainly, no prices, no licences or
 * certifications, no promise that every stain will come out. Surface-care advice
 * is limited to well-established general practice (soft washing painted and
 * rendered walls, cleaning timber with the grain, letting new concrete cure,
 * keeping wash water out of stormwater drains).
 */

export type Service = {
  slug: string
  name: string
  /** Short label for forms */
  label: string
  summary: string
  bestFor: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  suits: string[]
  checklist: ChecklistGroup[]
  /** What the quote depends on – no figures */
  quoteFactors: string[]
  steps: { title: string; body: string }[]
  /** Practical, factual tips for this kind of work */
  tips: { title: string; body: string }[]
  faqs: Faq[]
  recurring: boolean
  availability?: string
  icon: string
}

const steps = (first: string) => [
  { title: 'Tell us about the surfaces', body: first },
  { title: 'Get a written quote', body: 'A clear scope listing each surface, the method we will use and anything that may not come up fully.' },
  { title: 'We clean it', body: 'We protect what needs protecting, clean to the agreed scope and rinse down before we leave.' },
]

const prep = { room: 'Before we start', items: ['Walk-through of the areas with you or from your photos', 'Pot plants, outdoor furniture and loose items moved', 'Doors, windows and electrical outlets checked and protected'] }
const finish = { room: 'Finishing', items: ['Overspray rinsed off walls, windows and garden beds', 'Run-off directed away from stormwater drains where practical', 'Loose debris swept up and taken away'] }

export const services: Service[] = [
  {
    slug: 'driveway-concrete-cleaning',
    name: 'Driveway & concrete cleaning',
    label: 'Driveway & concrete cleaning',
    summary: 'Driveways, paths and concrete slabs cleaned of dirt, mould, algae and tyre marks, with oil stains pre-treated.',
    bestFor: 'Driveways and paths',
    metaTitle: 'Driveway & Concrete Cleaning Gold Coast | Washed by Swept',
    metaDescription: 'Driveway and concrete pressure cleaning for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: dirt, mould, algae and tyre marks removed. Free quote.',
    h1: 'Driveway and concrete pressure cleaning',
    intro: 'Plain, coloured and exposed aggregate driveways, paths and slabs cleaned with a surface cleaner for an even finish, edges detailed by hand, and oil and tyre marks pre-treated. A clean driveway lifts the whole front of the house – and it is far less slippery once mould and algae are gone.',
    suits: ['Driveways darkened by dirt, mould and algae', 'Paths and side passages that get slippery when wet', 'Oil drips and tyre marks where cars park', 'Homes being prepared for sale or a rental inspection'],
    checklist: [
      prep,
      { room: 'Cleaning', items: ['Mould, algae and dirt pre-treated where needed', 'Flat areas cleaned with a rotary surface cleaner for an even finish', 'Edges, steps and corners detailed with a wand', 'Oil and tyre marks treated (results vary with age)'] },
      finish,
    ],
    quoteFactors: ['The total area of concrete, in square metres', 'How dirty it is and whether there are oil or rust stains', 'Steps, slopes and edges that need detail work', 'Access to water and for equipment', 'Where run-off can safely go'],
    steps: steps('Which areas, roughly how big they are, and any stains you want looked at. Photos help.'),
    tips: [
      { title: 'Surface cleaners avoid stripes', body: 'A rotary surface cleaner keeps the nozzle a set distance from the concrete, which gives an even result and avoids the “zebra stripes” a wand alone can leave.' },
      { title: 'Old oil stains go deep', body: 'Oil soaks into concrete. Fresh spills often lift well; stains that have been there for years usually fade but may not disappear completely.' },
      { title: 'New concrete needs time', body: 'Freshly poured concrete should be left to cure before high-pressure cleaning – it is usually best to wait at least a month. Ask your builder or concreter if you are unsure.' },
    ],
    faqs: [
      { q: 'Will pressure cleaning damage my driveway?', a: 'Not when the pressure and nozzle suit the surface. We use a surface cleaner on flat concrete and adjust pressure for coloured, exposed aggregate and older, softer concrete.' },
      { q: 'Can you remove oil stains?', a: 'We pre-treat oil and tyre marks before cleaning. Fresh stains often lift well; old stains usually fade but may not come out completely. We will tell you what to expect when we quote.' },
      { q: 'How often should a driveway be cleaned?', a: 'Many homes in South East Queensland clean driveways and paths once or twice a year, more often where shade and humidity let mould and algae grow back quickly.' },
      { q: 'Do I need to be home?', a: 'No, as long as we can reach the areas and an outdoor tap. Tell us about gates, locks and pets when you request a quote.' },
    ],
    recurring: true,
    icon: 'car',
  },
  {
    slug: 'house-washing',
    name: 'House washing & soft washing',
    label: 'House washing (soft wash)',
    summary: 'Exterior walls, eaves and gutter faces cleaned with a low-pressure soft wash that is safe for paint and render.',
    bestFor: 'Painted and rendered exteriors',
    metaTitle: 'House Washing & Soft Washing Gold Coast | Washed by Swept',
    metaDescription: 'House washing and soft washing for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: walls, eaves and gutter faces cleaned gently. Free written quote.',
    h1: 'House washing and soft washing',
    intro: 'Exterior walls, eaves, fascias and gutter faces cleaned with a soft wash – a cleaning solution applied at low pressure, left to work, then rinsed off. It removes dirt, cobwebs, mould and mildew without forcing water behind cladding or damaging paint and render.',
    suits: ['Rendered, painted, brick and weatherboard homes', 'Walls and eaves with mould, mildew or cobwebs', 'Freshening up before a sale, a party or repainting', 'Homes near the coast with a salt film on the walls'],
    checklist: [
      prep,
      { room: 'Walls & eaves', items: ['Soft-wash solution applied at low pressure', 'Eaves, soffits and fascias washed', 'Outside faces of gutters washed', 'Cobwebs and wasp nests cleared from eaves'] },
      { room: 'Rinse', items: ['Walls rinsed from the top down', 'Window frames and sills rinsed', 'Plants and lawn near walls watered down to dilute any overspray'] },
      finish,
    ],
    quoteFactors: ['The size of the home and number of storeys', 'Wall and cladding types', 'How much mould, mildew or dirt there is', 'Access around the house and for ladders', 'Any areas to avoid, such as delicate plants or water features'],
    steps: steps('The type of home, number of storeys, what the walls are made of and what you would like cleaned. Photos help.'),
    tips: [
      { title: 'Why soft washing', body: 'High pressure can damage paint and render, open up mortar joints and force water behind cladding and window seals. A soft wash cleans with the solution, not the force of the water.' },
      { title: 'Before you repaint', body: 'Painters generally want walls clean and dry before they start. A house wash is a common first step before repainting – check with your painter what they need.' },
      { title: 'Humidity brings mould back', body: 'In humid South East Queensland, shaded walls and eaves can grow mould and mildew again over time. Many homes wash exteriors every year or two.' },
    ],
    faqs: [
      { q: 'What is the difference between pressure cleaning and soft washing?', a: 'Pressure cleaning uses the force of the water to remove dirt from hard surfaces such as concrete. Soft washing applies a cleaning solution at low pressure and lets it do the work, which is gentler on paint, render, cladding and timber.' },
      { q: 'Will the cleaning solution hurt my garden?', a: 'We wet plants down before and after washing nearby walls to dilute any overspray, and we can avoid areas you are worried about. Tell us about delicate plants, fish ponds or water features.' },
      { q: 'Do you clean windows?', a: 'Window frames and sills are rinsed as part of a house wash. Detailed window cleaning is not included.' },
      { q: 'Do you clean two-storey homes?', a: 'Yes, where the walls can be reached safely from the ground with extension equipment or from a ladder. We will confirm when we quote.' },
    ],
    recurring: true,
    icon: 'home',
  },
  {
    slug: 'patio-paver-pool-cleaning',
    name: 'Patio, paver & pool surround cleaning',
    label: 'Patio, pavers & pool surround',
    summary: 'Pavers, tiles and natural stone around patios, alfrescos and pools cleaned of mould, algae and grime.',
    bestFor: 'Outdoor living areas',
    metaTitle: 'Paver & Pool Surround Cleaning Gold Coast | Washed by Swept',
    metaDescription: 'Patio, paver and pool surround cleaning for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: mould, algae and grime removed. Free written quote.',
    h1: 'Patio, paver and pool surround cleaning',
    intro: 'Concrete and clay pavers, outdoor tiles and natural stone around patios, alfrescos, courtyards and pools cleaned of mould, algae and built-up grime. The pressure and products are matched to the surface, and run-off is kept away from the pool.',
    suits: ['Pavers and tiles darkened by mould and algae', 'Pool surrounds that are slippery underfoot', 'Alfresco and entertaining areas before summer', 'Sandstone, travertine and other natural stone'],
    checklist: [
      prep,
      { room: 'Cleaning', items: ['Mould and algae pre-treated where needed', 'Pavers and tiles cleaned with a surface cleaner', 'Grout lines and edges detailed', 'Steps, coping and drainage grates cleaned'] },
      { room: 'Pool areas', items: ['Run-off directed away from the pool', 'Pool coping cleaned with care', 'Pool equipment and covers kept clear'] },
      finish,
    ],
    quoteFactors: ['The area of paving or tiles', 'The surface – concrete pavers, clay, tiles or natural stone', 'Mould, algae and staining', 'Steps, coping and detail work', 'Access for equipment'],
    steps: steps('The area and surface type, whether it is near a pool, and what is bothering you. Photos help.'),
    tips: [
      { title: 'Jointing sand can wash out', body: 'Pressure cleaning can lift some of the sand between pavers. Topping the joints up with paving sand afterwards helps lock the pavers in place and slows weed growth.' },
      { title: 'Natural stone needs care', body: 'Stones such as sandstone and travertine are softer and more porous than concrete, and some are sensitive to acidic cleaners. Lower pressure and suitable products protect the surface.' },
      { title: 'Shade and water bring algae', body: 'Areas that stay damp and shaded – around pools, under trees and on south-facing sides – grow mould and algae fastest and can become slippery.' },
    ],
    faqs: [
      { q: 'Is it safe to pressure clean around my pool?', a: 'Yes. We direct run-off away from the pool and take care around coping, equipment and covers. Let us know if your pool has a salt chlorinator or anything near the edge we should avoid.' },
      { q: 'Can you clean sandstone and travertine?', a: 'Yes, with lower pressure and products that suit natural stone. Tell us the stone type if you know it.' },
      { q: 'Will the sand between my pavers wash out?', a: 'Some may. We can tell you whether the joints need topping up with paving sand afterwards.' },
      { q: 'Do you seal pavers?', a: 'Sealing is not part of this service. If your pavers could benefit from sealing, we can tell you after cleaning.' },
    ],
    recurring: true,
    icon: 'grid',
  },
  {
    slug: 'deck-timber-cleaning',
    name: 'Deck & timber cleaning',
    label: 'Deck & timber cleaning',
    summary: 'Timber decks, stairs and outdoor timber cleaned with controlled pressure along the grain, ready for oiling.',
    bestFor: 'Decks before re-oiling',
    metaTitle: 'Deck & Timber Cleaning Gold Coast | Washed by Swept',
    metaDescription: 'Deck and timber cleaning for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: grey, mouldy and dirty timber cleaned ready for oiling. Free quote.',
    h1: 'Deck and timber cleaning',
    intro: 'Timber decks, stairs, handrails and outdoor timber cleaned of dirt, mould and greying, using controlled pressure along the grain so the surface is not furred or gouged. A clean, dry deck is the right starting point for re-oiling or staining.',
    suits: ['Grey, weathered or mouldy timber decks', 'Decks due for re-oiling or staining', 'Timber stairs and handrails', 'Composite decking (cleaned to the maker’s guidance)'],
    checklist: [
      prep,
      { room: 'Cleaning', items: ['Deck cleaner applied where needed', 'Boards cleaned along the grain with a fan nozzle', 'Gaps between boards cleared of debris', 'Stairs, handrails and balusters cleaned'] },
      finish,
    ],
    quoteFactors: ['The size of the deck', 'The timber or composite type', 'Stairs, handrails and balustrades', 'The current condition – dirt, mould or old coatings', 'Access under and around the deck'],
    steps: steps('The size of the deck, the timber if you know it, and whether you are planning to oil or stain it. Photos help.'),
    tips: [
      { title: 'Too much pressure furs timber', body: 'High pressure or a narrow nozzle held too close can raise the grain and leave a fuzzy, gouged surface. Controlled pressure along the grain avoids it.' },
      { title: 'Let it dry before oiling', body: 'Timber needs to dry out after cleaning before oil or stain goes on. Check the coating maker’s instructions for how long to wait.' },
      { title: 'Composite has its own rules', body: 'Composite decking makers usually publish cleaning guidance, including pressure limits. We follow it where it is available.' },
    ],
    faqs: [
      { q: 'Do you oil or stain decks?', a: 'This service cleans the deck ready for coating. Oiling and staining are not included.' },
      { q: 'Can you remove old deck coatings?', a: 'Cleaning removes dirt, mould and loose, flaking coating. Fully stripping a sound coating usually needs a stripper and sanding, which is not part of this service.' },
      { q: 'How long should I wait to oil after cleaning?', a: 'Until the timber is completely dry – often a couple of fine days. Follow the instructions on the product you are using.' },
      { q: 'Can you clean composite decking?', a: 'Yes, following the manufacturer’s cleaning guidance where it is available.' },
    ],
    recurring: false,
    icon: 'brush',
  },
  {
    slug: 'fence-wall-cleaning',
    name: 'Fence, wall & retaining wall cleaning',
    label: 'Fences & walls',
    summary: 'Fences, boundary walls, letterboxes and retaining walls cleaned of dirt, mould and staining.',
    bestFor: 'Fences and boundary walls',
    metaTitle: 'Fence & Retaining Wall Cleaning Gold Coast | Washed by Swept',
    metaDescription: 'Fence, wall and retaining wall cleaning for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: dirt, mould and staining removed. Free written quote.',
    h1: 'Fence, wall and retaining wall cleaning',
    intro: 'Colorbond, rendered, brick and timber fences, boundary walls, letterboxes and block or timber retaining walls cleaned of dirt, mould and staining. The method is matched to each material – a soft wash for painted and rendered surfaces, controlled pressure for masonry.',
    suits: ['Rendered and painted boundary walls', 'Colorbond and steel fences', 'Brick and block retaining walls', 'Timber fences and sleeper walls'],
    checklist: [
      prep,
      { room: 'Cleaning', items: ['Method chosen for each material', 'Fence panels and posts washed', 'Retaining wall faces and capping cleaned', 'Letterboxes and entry walls cleaned'] },
      finish,
    ],
    quoteFactors: ['The length and height of fences and walls', 'The materials', 'One side or both sides', 'Mould and staining', 'Access, including neighbouring properties'],
    steps: steps('The fences and walls, roughly how long they are, what they are made of and which sides you want cleaned.'),
    tips: [
      { title: 'Paint and render need a gentle touch', body: 'Painted and rendered walls can be damaged by high pressure. A soft wash lifts mould and dirt without stripping the finish.' },
      { title: 'Both sides of a boundary fence', body: 'Cleaning the neighbour’s side of a shared fence needs their permission to go onto their property.' },
    ],
    faqs: [
      { q: 'Can you clean Colorbond fences?', a: 'Yes. Colorbond and other painted steel fences are cleaned at low pressure so the paint finish is not damaged.' },
      { q: 'Can you clean the neighbour’s side of the fence?', a: 'Yes, with the neighbour’s permission to access their property.' },
      { q: 'Will it remove rust stains on my wall?', a: 'Rust stains often need a specific treatment and may not come out completely. We will look at them and tell you what to expect before we start.' },
    ],
    recurring: false,
    icon: 'brick',
  },
  {
    slug: 'oil-stain-removal',
    name: 'Oil, rust & stain treatment',
    label: 'Oil, rust & stain treatment',
    summary: 'Targeted treatment for oil, rust, tannin and other marks on concrete and paving, with honest expectations.',
    bestFor: 'Stubborn marks',
    metaTitle: 'Oil & Stain Removal on Concrete Gold Coast | Washed by Swept',
    metaDescription: 'Oil, rust and stain treatment on concrete and pavers for homes in Brisbane, Logan, the Gold Coast and Tweed Heads. Honest advice on results. Free quote.',
    h1: 'Oil, rust and stain treatment for concrete and paving',
    intro: 'Targeted treatment for oil and fuel drips, rust marks, leaf and tannin stains and other marks on driveways, carports, paths and pavers. Every stain is different, so we look at it first and tell you honestly how much it is likely to lift.',
    suits: ['Oil and fuel drips under parked cars', 'Rust marks from pot plants, furniture and garden fittings', 'Leaf and tannin stains under trees', 'Stains found before a sale or the end of a lease'],
    checklist: [
      prep,
      { room: 'Treatment', items: ['Stains identified and tested in a small area first', 'Product chosen for the stain and the surface', 'Treatment applied and given time to work', 'Area rinsed and cleaned to blend with the surrounding surface'] },
      finish,
    ],
    quoteFactors: ['The number, size and age of the stains', 'What caused them', 'The surface – plain, coloured or exposed aggregate concrete, pavers or stone', 'Whether the whole area is being cleaned at the same time'],
    steps: steps('Photos of the stains, what you think caused them and roughly how long they have been there.'),
    tips: [
      { title: 'Treat spills early', body: 'Fresh oil sits nearer the surface. Soaking up a spill quickly with an absorbent such as kitty litter makes it far easier to treat.' },
      { title: 'Clean the whole area too', body: 'A treated patch can look lighter than the dirty concrete around it. Cleaning the whole driveway at the same time gives a more even finish.' },
      { title: 'Some stains are permanent', body: 'Deep, old oil and some rust stains can lighten without disappearing. We will always say so before we start.' },
    ],
    faqs: [
      { q: 'Can you guarantee the stain will come out?', a: 'No – and be wary of anyone who does. Results depend on what caused the stain, how long it has been there and the surface. We test first and tell you what to expect.' },
      { q: 'Will treatment damage coloured concrete?', a: 'We choose products to suit the surface and test in a small area first. Coloured and sealed surfaces need extra care, so let us know what you have.' },
      { q: 'Can you remove rust from pavers?', a: 'Often, using a rust treatment rather than pressure alone. Results vary with the paver and the age of the stain.' },
    ],
    recurring: false,
    icon: 'droplet',
  },
  {
    slug: 'exterior-clean-sale-lease',
    name: 'Exterior clean-ups for sale & lease',
    label: 'Sale or end-of-lease exterior clean',
    summary: 'Driveway, paths, patio and house front cleaned together before photos, open homes or a final inspection.',
    bestFor: 'Selling or moving out',
    metaTitle: 'Pre-Sale & End-of-Lease Pressure Cleaning | Washed by Swept',
    metaDescription: 'Exterior pressure cleaning before a sale or end of lease in Brisbane, Logan, the Gold Coast and Tweed Heads: driveway, paths, patio and house front. Free quote.',
    h1: 'Exterior clean-ups before a sale or the end of a lease',
    intro: 'One visit to get the outside of the property ready – driveway, paths, patio or alfresco and the front of the house – before listing photos, open homes or a final inspection. Tell us your date and we will plan the work around it.',
    suits: ['Homes going on the market', 'Tenants preparing for a final inspection', 'Landlords and property managers between tenancies', 'Owners getting ready for an inspection or valuation'],
    checklist: [
      prep,
      { room: 'Typical scope', items: ['Driveway and front path', 'Patio, alfresco or courtyard', 'Front of the house soft washed', 'Letterbox and entry'] },
      finish,
    ],
    quoteFactors: ['Which areas are included', 'The size of the property', 'Mould, stains and general condition', 'Your deadline'],
    steps: steps('Your date, the areas you would like cleaned and a few photos of the outside of the property.'),
    tips: [
      { title: 'Book before the photos', body: 'Listing photos are taken once and used for the whole campaign. Cleaning a few days beforehand gives surfaces time to dry.' },
      { title: 'Check the condition report', body: 'At the end of a lease, the outside of the property is compared with the entry condition report along with the inside. Check what it says about driveways, paths and outdoor areas.' },
    ],
    faqs: [
      { q: 'How far ahead should I book?', a: 'As soon as you know your listing or vacate date. We will confirm whether we can meet it when we quote.' },
      { q: 'Is an exterior clean required at the end of a lease?', a: 'It depends on your tenancy agreement and the condition the property was in when you moved in. Check your entry condition report, or ask your property manager.' },
      { q: 'Can you clean inside as well?', a: 'Washed by Swept cleans exteriors. For inside, Cleaned by Swept – another Swept division – does bond and end-of-lease cleaning.' },
    ],
    recurring: false,
    icon: 'key',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const servicePath = (slug: string) => `/residential/${slug}`

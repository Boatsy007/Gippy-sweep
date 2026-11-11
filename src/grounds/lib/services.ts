import type { ChecklistGroup, Faq } from './types'

/*
 * Residential services for Grounds by Swept.
 *
 * Copy rules: describe the work plainly, no prices, no licences or certifications,
 * no guarantees of results (lawns and plants depend on weather, soil and water).
 * Horticultural advice is limited to well-established general practice for
 * warm-season lawns and gardens in South East Queensland and the Tweed.
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

const visitSteps = (first: string) => [
  { title: 'Tell us about your yard', body: first },
  { title: 'Get a written quote', body: 'A clear scope listing exactly what is included, and how often if it is a regular service.' },
  { title: 'We do the work', body: 'We arrive on the agreed day, work to the agreed scope and leave paths and driveways clear.' },
]

export const services: Service[] = [
  {
    slug: 'lawn-mowing',
    name: 'Lawn mowing & edging',
    label: 'Lawn mowing & edging',
    summary: 'Regular mowing, edging and whipper-snipping, with paths and driveways blown clear before we leave.',
    bestFor: 'Regular lawn care',
    metaTitle: 'Lawn Mowing & Edging Gold Coast | Grounds by Swept',
    metaDescription: 'Lawn mowing, edging and whipper-snipping for homes in Brisbane, Logan, the Gold Coast and Tweed Heads. Weekly, fortnightly or monthly. Free written quote.',
    h1: 'Lawn mowing and edging, on a schedule that suits you',
    intro: 'Front yards, backyards and nature strips mowed at the right height for the season, edges cut crisp along paths and garden beds, and clippings dealt with the way you prefer. Choose regular visits or a one-off mow.',
    suits: ['Homeowners who would rather spend weekends elsewhere', 'Busy families with a front and back lawn to keep on top of', 'Landlords and tenants keeping a rental presentable', 'Anyone without the time, gear or shed space for a mower'],
    checklist: [
      { room: 'Lawns', items: ['Front and back lawns mowed', 'Cutting height set for the season and grass type', 'Nature strip or verge mowed (if included)', 'Clippings mulched, caught or removed – your choice'] },
      { room: 'Edges', items: ['Paths and driveway edges cut', 'Garden bed edges trimmed', 'Whipper-snipping around fences, posts and trees', 'Hard-to-reach corners finished by hand'] },
      { room: 'Clean-up', items: ['Paths, driveway and patio blown clear', 'Clippings kept out of drains and gutters', 'Gates closed and latched on the way out'] },
    ],
    quoteFactors: ['The size of the lawn areas and how many there are', 'How often you would like us to visit', 'Slopes, steps and access through gates or side passages', 'Whether clippings are mulched in or taken away', 'The current length and condition of the grass'],
    steps: visitSteps('Lawn areas, access, how often you want a mow and what to do with the clippings.'),
    tips: [
      { title: 'The one-third rule', body: 'Taking off no more than about a third of the leaf in one cut is gentler on the grass. When a lawn has grown long, it is better to bring it down over two visits.' },
      { title: 'Faster in summer, slower in winter', body: 'Warm-season grasses such as couch, buffalo, zoysia and kikuyu grow quickly through the warm, wet months and slow down over winter, so many households mow more often in summer and less in winter.' },
      { title: 'Leave it a little longer in dry spells', body: 'A slightly higher cut shades the soil and helps the lawn cope with heat and dry weather.' },
    ],
    faqs: [
      { q: 'How often should my lawn be mowed?', a: 'It depends on the grass and the season. Through the warm, wet months most South East Queensland lawns need mowing every week or two; over winter, every three to four weeks is usually enough. We can set a schedule that changes with the seasons.' },
      { q: 'What happens to the clippings?', a: 'Your choice. We can mulch them back into the lawn, catch them and leave them in your green bin, or take them away as green waste. Tell us your preference when you request a quote.' },
      { q: 'Do I need to be home?', a: 'No, as long as we can get into the yard. Let us know about gates, locks and dogs, and we will plan around them.' },
      { q: 'Do you mow the nature strip?', a: 'Yes, if you want it included. Just add it to your quote request.' },
      { q: 'Can you mow a one-off overgrown lawn?', a: 'Yes. Very long grass may need a yard clean-up first, which we will quote separately so you know what is involved.' },
    ],
    recurring: true,
    icon: 'leaf',
  },
  {
    slug: 'garden-maintenance',
    name: 'Garden maintenance & weeding',
    label: 'Garden maintenance & weeding',
    summary: 'Hand weeding, tidying and dead-heading of garden beds, with green waste cleared away.',
    bestFor: 'Tidy, cared-for gardens',
    metaTitle: 'Garden Maintenance & Weeding Gold Coast | Grounds by Swept',
    metaDescription: 'Garden maintenance and weeding for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: garden beds weeded, tidied and dead-headed. Free written quote.',
    h1: 'Garden maintenance and weeding for homes',
    intro: 'Regular care for garden beds, borders and planters: weeds pulled, spent flowers and dead growth removed, edges tidied and the clippings taken care of. A garden that is looked after little and often stays far easier to manage.',
    suits: ['Established gardens that need regular upkeep', 'Owners who enjoy the garden but not the weeding', 'Homes being prepared for sale or a rental inspection', 'Older residents who want a hand keeping the yard tidy'],
    checklist: [
      { room: 'Garden beds', items: ['Weeds removed by hand, roots and all where possible', 'Spent flowers and dead growth removed', 'Fallen leaves and debris cleared from beds', 'Bed edges re-defined'] },
      { room: 'Plants', items: ['Light trimming of overgrown shrubs and perennials', 'Ground covers kept off paths and lawn', 'Pots and planters tidied'] },
      { room: 'Clean-up', items: ['Paths and patios swept or blown', 'Green waste bagged for your bin or taken away', 'A quick note of anything we spotted, such as pests or dry patches'] },
    ],
    quoteFactors: ['The size and number of garden beds', 'How weedy or overgrown the beds are now', 'How often you would like us to visit', 'How much green waste there is and where it goes', 'Access to the garden'],
    steps: visitSteps('Your garden beds, how they look now and what you would like them to look like.'),
    tips: [
      { title: 'Weed little and often', body: 'Pulling weeds before they flower and set seed is the easiest way to get ahead of them. Regular visits stop each new flush from taking hold.' },
      { title: 'Mulch makes weeding easier', body: 'A layer of mulch shades out many weed seeds and keeps the soil moist. It pairs well with regular maintenance.' },
      { title: 'Watch for weeds of concern', body: 'Some plants that spread easily, such as lantana, are restricted invasive plants in Queensland and listed as Weeds of National Significance. If we spot something like that, we will let you know.' },
    ],
    faqs: [
      { q: 'Do you weed by hand or spray?', a: 'Garden beds are weeded by hand. Spot spraying is a separate service for lawns, paths and driveways – see [fertilising & weed control](/residential/fertilising-weed-control).' },
      { q: 'How often should a garden be maintained?', a: 'Fortnightly or monthly suits most home gardens. Gardens that grow fast through summer may need more frequent visits in the warmer months.' },
      { q: 'Can you combine garden care with lawn mowing?', a: 'Yes. Many customers book both on the same visit. Tell us everything you want included and we will quote it as one scope.' },
      { q: 'Will you tell me which plants are which?', a: 'If we are unsure whether something is a weed or a plant you want to keep, we leave it and ask. You can also mark anything that should not be touched.' },
    ],
    recurring: true,
    icon: 'flower',
  },
  {
    slug: 'hedge-trimming',
    name: 'Hedge & shrub trimming',
    label: 'Hedge & shrub trimming',
    summary: 'Hedges, screening plants and shrubs shaped and trimmed, with all clippings cleaned up.',
    bestFor: 'Neat hedges and borders',
    metaTitle: 'Hedge & Shrub Trimming Gold Coast | Grounds by Swept',
    metaDescription: 'Hedge and shrub trimming for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: screens, borders and topiary shaped and cleaned up. Free written quote.',
    h1: 'Hedge and shrub trimming',
    intro: 'Hedges, screening plants and shrubs trimmed to shape – along boundaries, around entries and beside driveways – with clippings cleaned up from lawns, paths and garden beds. Book a one-off trim or regular shaping through the growing season.',
    suits: ['Boundary and privacy screens such as murraya, lilly pilly and viburnum', 'Formal hedges and borders that need a clean line', 'Shrubs crowding paths, windows or driveways', 'Overgrown screens that need bringing back into shape'],
    checklist: [
      { room: 'Hedges', items: ['Sides and tops trimmed to an agreed shape and height', 'Lines kept straight and even', 'Growth cut back from paths, fences and driveways'] },
      { room: 'Shrubs', items: ['Shrubs shaped and thinned where needed', 'Growth cleared from windows, eaves and downpipes', 'Dead and damaged branches removed'] },
      { room: 'Clean-up', items: ['Clippings raked from lawns and beds', 'Paths and driveways blown clear', 'Green waste bagged for your bin or taken away'] },
    ],
    quoteFactors: ['The length and height of the hedges', 'How overgrown they are now', 'Whether a ladder or platform is needed', 'Access on both sides of boundary hedges', 'The amount of green waste'],
    steps: visitSteps('Which hedges and shrubs, roughly how long and tall they are, and the shape you would like.'),
    tips: [
      { title: 'Slightly wider at the base', body: 'Hedges trimmed so the base is a little wider than the top let light reach the lower leaves, which helps the hedge stay full to the ground.' },
      { title: 'Regular light trims', body: 'Fast-growing screens such as murraya respond well to regular light trims through the warmer months rather than one hard cut a year.' },
      { title: 'Check before a hard prune', body: 'Some councils protect certain trees and vegetation. If a screen is really a row of trees, it is worth checking with your council before cutting it right back.' },
    ],
    faqs: [
      { q: 'How often should hedges be trimmed?', a: 'Fast-growing hedges often need trimming every six to eight weeks through the warmer months and less in winter. Slower growers may only need a few trims a year.' },
      { q: 'Can you trim tall hedges?', a: 'We trim hedges that can be reached safely from the ground or a ladder or small platform. If a hedge is too tall to do safely, we will tell you when we quote.' },
      { q: 'Can you trim my side of a boundary hedge?', a: 'Yes. If the hedge also needs trimming from the neighbouring side, we will need the neighbour’s permission to access their property.' },
      { q: 'Do you take the clippings away?', a: 'Yes, if you would like us to. Otherwise we bag them for your green bin. Let us know when you request a quote.' },
    ],
    recurring: true,
    icon: 'scissors',
  },
  {
    slug: 'pruning-tree-work',
    name: 'Pruning & small tree work',
    label: 'Pruning & small tree work',
    summary: 'Pruning of small trees and large shrubs, removal of dead branches and lifting of low canopies.',
    bestFor: 'Small trees and large shrubs',
    metaTitle: 'Pruning & Small Tree Work Gold Coast | Grounds by Swept',
    metaDescription: 'Pruning and small tree work for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: dead branches removed, canopies lifted, shrubs shaped. Free quote.',
    h1: 'Pruning and small tree work',
    intro: 'Pruning for small trees, palms and large shrubs within safe reach: dead and damaged branches removed, low branches lifted off paths and roofs, and growth cleared from fences and power lines to the house. Larger trees are a job for a qualified arborist, and we will say so if that is what you need.',
    suits: ['Small trees and large shrubs that have outgrown their space', 'Low branches over paths, driveways, roofs or the clothesline', 'Dead or storm-damaged branches within safe reach', 'Fruit trees and ornamentals that need shaping'],
    checklist: [
      { room: 'Pruning', items: ['Dead, damaged and crossing branches removed', 'Low branches lifted over paths and driveways', 'Growth cut back from roofs, gutters, fences and walls', 'Small trees and shrubs shaped'] },
      { room: 'Palms', items: ['Dead fronds removed from low palms', 'Seed pods removed where reachable'] },
      { room: 'Clean-up', items: ['Branches cut down to manageable lengths', 'Green waste removed or bagged for your bin', 'Lawns, beds and paths raked and blown clear'] },
    ],
    quoteFactors: ['The number and size of the trees and shrubs', 'Height and how they can be reached safely', 'What is underneath – roofs, fences, paths or garden beds', 'The amount of green waste to remove', 'Access for equipment'],
    steps: visitSteps('Which trees or shrubs, roughly how tall they are, what is underneath and what you would like done. Photos help.'),
    tips: [
      { title: 'Check council rules first', body: 'Brisbane, Logan, the Gold Coast and the Tweed all have local rules protecting some trees and vegetation. Check with your council before removing or heavily pruning a large or significant tree.' },
      { title: 'Keep clear of power lines', body: 'Work near overhead power lines must be done by appropriately qualified and authorised people. Branches near the line to your home are a question for your electricity network or an approved contractor.' },
      { title: 'When an arborist is the right call', body: 'Large trees, work at height and trees that look unstable or diseased need a qualified arborist. We will tell you honestly if a job is beyond small tree work.' },
    ],
    faqs: [
      { q: 'How big a tree can you prune?', a: 'We work on small trees, palms and large shrubs that can be reached safely from the ground, a ladder or a small platform. We do not climb or fell large trees – for those we recommend a qualified arborist.' },
      { q: 'Do I need council approval to prune a tree?', a: 'Sometimes. Councils in our service area protect some trees and vegetation under local laws. If you are unsure, check with your council before booking work on a large or significant tree.' },
      { q: 'Can you remove branches near power lines?', a: 'No. Work near overhead power lines must be done by appropriately qualified and authorised people. Contact your electricity network about vegetation near the lines.' },
      { q: 'Do you take the branches away?', a: 'Yes. We can remove the green waste or cut it down to size and bag it for your bin – your choice.' },
    ],
    recurring: false,
    availability: 'Small trees, palms and shrubs only. We do not climb, fell or grind stumps, and we do not work near overhead power lines.',
    icon: 'tree',
  },
  {
    slug: 'mulching-garden-beds',
    name: 'Mulching & garden beds',
    label: 'Mulching & garden beds',
    summary: 'Garden beds cleared, weeded and topped with fresh mulch, or new beds edged and prepared.',
    bestFor: 'Refreshing tired garden beds',
    metaTitle: 'Mulching & Garden Bed Refresh Gold Coast | Grounds by Swept',
    metaDescription: 'Garden bed mulching for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: beds weeded, edged and topped with fresh mulch. Free written quote.',
    h1: 'Mulching and garden bed refreshes',
    intro: 'Tired garden beds weeded, edged and topped with a fresh layer of mulch – or new beds marked out and prepared. Fresh mulch helps hold moisture in the soil, suppresses weeds and makes a garden look cared for straight away.',
    suits: ['Garden beds that look bare, weedy or washed out', 'Homes being prepared for sale or a new tenancy', 'New gardens and freshly planted beds', 'Anyone wanting a lower-maintenance garden'],
    checklist: [
      { room: 'Preparation', items: ['Beds weeded and old debris removed', 'Bed edges cut and re-defined', 'Soil levelled and loosened where needed'] },
      { room: 'Mulching', items: ['Mulch type agreed with you before the job', 'Mulch spread evenly to an agreed depth', 'Mulch kept back from plant stems and tree trunks', 'Mulch kept off paths, lawns and house walls'] },
      { room: 'Clean-up', items: ['Paths and driveways swept and blown', 'Waste and packaging removed'] },
    ],
    quoteFactors: ['The total area of garden beds', 'The type and amount of mulch', 'How much weeding and preparation is needed first', 'Access for barrows from the driveway or street', 'Whether new beds need marking out or edging'],
    steps: visitSteps('The size of the beds, how they look now and the kind of mulch you like. Photos help us quote accurately.'),
    tips: [
      { title: 'Keep it off the stems', body: 'Mulch piled against plant stems and trunks can hold moisture against the bark and encourage rot. A small gap around each stem is best.' },
      { title: 'Keep a gap from the house', body: 'Keeping mulch and garden beds clear of weep holes and the slab edge makes it easier to see termite activity during building inspections.' },
      { title: 'Top up as it breaks down', body: 'Organic mulches break down over time and feed the soil. Most gardens need a top-up about once a year.' },
    ],
    faqs: [
      { q: 'What kind of mulch do you use?', a: 'We agree the mulch with you before the job – common choices include pine bark, forest blends and sugarcane. Your quote lists the type and how much.' },
      { q: 'How thick should mulch be?', a: 'A layer of about 5 to 7.5 centimetres is commonly recommended for garden beds. Your quote states the depth we will spread.' },
      { q: 'Do you weed before mulching?', a: 'Yes. Beds are weeded first – mulch over weeds just delays the problem.' },
      { q: 'Can you plant as well?', a: 'We can place and plant plants you have bought as part of a garden bed refresh. Let us know what you have in mind when you request a quote.' },
    ],
    recurring: false,
    icon: 'shovel',
  },
  {
    slug: 'turf-laying-lawn-repair',
    name: 'Turf laying & lawn repair',
    label: 'Turf laying & lawn repair',
    summary: 'New turf laid on prepared ground, and bare, worn or patchy areas of lawn repaired.',
    bestFor: 'New lawns and patchy areas',
    metaTitle: 'Turf Laying & Lawn Repair Gold Coast | Grounds by Swept',
    metaDescription: 'Turf laying and lawn repair for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: ground prepared, turf laid and bare patches repaired. Free quote.',
    h1: 'Turf laying and lawn repair',
    intro: 'New turf laid on properly prepared ground, or tired, bare and worn patches of an existing lawn repaired. Good preparation is most of the job, so we clear, level and prepare the soil before any turf goes down.',
    suits: ['New homes and yards with no lawn yet', 'Lawns with bare, worn or dead patches', 'Areas damaged by building work, dogs or heavy foot traffic', 'Replacing an old lawn with a new variety'],
    checklist: [
      { room: 'Preparation', items: ['Old grass, weeds and debris removed', 'Ground levelled and graded to drain away from the house', 'Soil loosened and topped up where needed'] },
      { room: 'Laying', items: ['Turf variety agreed with you before the job', 'Turf laid in a staggered pattern with tight joins', 'Edges cut neatly to paths and garden beds', 'Turf rolled for good contact with the soil'] },
      { room: 'Hand-over', items: ['First watering done', 'Written watering and first-mow guidance', 'Waste and off-cuts removed'] },
    ],
    quoteFactors: ['The area to be turfed, in square metres', 'The turf variety', 'How much preparation the ground needs', 'Access for barrows and deliveries', 'Removal of old turf, soil or debris'],
    steps: visitSteps('The area, how it looks now, how much sun it gets and what the lawn needs to cope with – kids, dogs or shade. Photos help.'),
    tips: [
      { title: 'Lay it soon after it arrives', body: 'Turf is a living product and is best laid as soon as possible after it is cut and delivered, before it dries out or heats up on the pallet.' },
      { title: 'Watering is everything at first', body: 'New turf needs regular watering to establish – frequently at first, then less often as the roots grow down. Check current water restrictions for your area.' },
      { title: 'Choose for sun and use', body: 'Different grasses suit different yards. Some buffalo and zoysia varieties cope better with part shade; couch suits full sun and recovers quickly from wear.' },
    ],
    faqs: [
      { q: 'Which turf should I choose?', a: 'It depends on sun, shade, foot traffic and how much care you want to put in. Common choices in South East Queensland include buffalo, couch, zoysia and kikuyu varieties. We will talk through the options when we quote.' },
      { q: 'When is the best time to lay turf?', a: 'Warm-season grasses establish fastest in the warmer months, from spring to early autumn. Turf can be laid in winter, but it takes longer to root.' },
      { q: 'When can I mow new turf?', a: 'Usually once the roots have taken hold and the turf cannot be lifted by hand – often a few weeks after laying in warm weather. We include first-mow guidance with every job.' },
      { q: 'Can you fix just the bare patches?', a: 'Yes. Small areas can be repaired by preparing the soil and patching with matching turf. We will tell you if it makes more sense to re-turf a whole section.' },
    ],
    recurring: false,
    icon: 'sprout',
  },
  {
    slug: 'fertilising-weed-control',
    name: 'Fertilising & weed control',
    label: 'Fertilising & weed control',
    summary: 'Lawn fertilising and spot weed control for lawns, paths and driveways, applied to label directions.',
    bestFor: 'Healthier, weed-free lawns',
    metaTitle: 'Lawn Fertilising & Weed Control | Grounds by Swept',
    metaDescription: 'Lawn fertilising and weed control for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: seasonal feeding and spot spraying. Free written quote.',
    h1: 'Lawn fertilising and weed control',
    intro: 'Seasonal lawn feeding and targeted weed control for lawns, paths, driveways and paving. Products are chosen for your grass type and applied according to their label directions, as a standalone service or alongside regular mowing.',
    suits: ['Lawns that look pale, thin or patchy', 'Broadleaf weeds such as clover and bindii in the lawn', 'Weeds in path cracks, paving joints and driveways', 'Lawns on a regular mowing plan that need seasonal feeding'],
    checklist: [
      { room: 'Fertilising', items: ['Fertiliser chosen for your grass type and the season', 'Applied evenly at the rate on the label', 'Granules swept off paths and driveways', 'Watering-in advice left with you'] },
      { room: 'Weed control', items: ['Weeds identified before treatment', 'Lawn-safe selective products for lawn weeds', 'Spot spraying of paths, paving and driveway joints', 'Products applied according to label directions'] },
      { room: 'Safety', items: ['No spraying in windy or rainy conditions', 'Garden beds, ponds and drains protected from drift and run-off', 'You are told what was used and when the area is safe to use'] },
    ],
    quoteFactors: ['The size of the lawn or treatment area', 'The types of weeds and how widespread they are', 'The grass type', 'How many treatments are needed over the season'],
    steps: visitSteps('The lawn or area, the grass type if you know it, the weeds you are seeing and whether children or pets use the area.'),
    tips: [
      { title: 'Feed in the growing season', body: 'Warm-season lawns use fertiliser best when they are actively growing, from spring through summer. Feeding a dormant winter lawn does little.' },
      { title: 'Not every product suits every lawn', body: 'Some selective weed killers can damage buffalo or other grass types. Knowing your grass type is the first step in choosing the right product.' },
      { title: 'Keep it out of the drains', body: 'Fertiliser and chemicals washed into stormwater drains end up in local creeks, rivers and canals. Sweeping granules off hard surfaces helps protect waterways.' },
    ],
    faqs: [
      { q: 'Is weed spraying safe for children and pets?', a: 'We follow the label directions for every product, which include how long to keep people and pets off a treated area. We will tell you what was used and when it is safe to use the area again.' },
      { q: 'Will one treatment get rid of my weeds?', a: 'Sometimes, but many weeds need a follow-up treatment, and new weeds keep arriving from seed. A healthy, thick lawn is the best long-term defence.' },
      { q: 'How often should a lawn be fertilised?', a: 'Many South East Queensland lawns benefit from feeding in spring and again in summer or early autumn. Your grass type and soil make a difference, and we will suggest a plan when we quote.' },
      { q: 'Do you spray garden beds?', a: 'No – garden beds are weeded by hand as part of [garden maintenance](/residential/garden-maintenance), to protect the plants you want to keep.' },
    ],
    recurring: true,
    icon: 'spray',
  },
  {
    slug: 'green-waste-removal',
    name: 'Green waste removal',
    label: 'Green waste removal',
    summary: 'Garden clippings, branches, palm fronds and leaf piles loaded up and taken away.',
    bestFor: 'Piles of garden waste',
    metaTitle: 'Green Waste Removal Gold Coast & Brisbane | Grounds by Swept',
    metaDescription: 'Green waste removal for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: clippings, branches, fronds and leaf piles taken away. Free written quote.',
    h1: 'Green waste removal',
    intro: 'Garden clippings, branches, palm fronds and leaf piles loaded up and taken away – after a big weekend in the garden, a storm or a clean-up that has been waiting too long. We take it to an appropriate green waste facility rather than landfill wherever possible.',
    suits: ['Piles of clippings and branches after garden work', 'Storm debris and fallen palm fronds', 'More green waste than your green bin can take', 'End-of-lease and pre-sale yard clean-ups'],
    checklist: [
      { room: 'Collection', items: ['Clippings, branches and fronds loaded', 'Leaf piles raked up and removed', 'Branches cut down to size where needed'] },
      { room: 'Disposal', items: ['Green waste taken to an appropriate facility', 'Non-garden rubbish only if agreed in your quote'] },
      { room: 'Clean-up', items: ['Ground under the pile raked clean', 'Paths and driveway blown clear'] },
    ],
    quoteFactors: ['The volume of green waste', 'The type of material – clippings, branches, palm fronds or stumps', 'How far it is from where we can park', 'Whether anything needs cutting down first'],
    steps: visitSteps('Roughly how much green waste there is, what it is and where it is. A photo is the quickest way.'),
    tips: [
      { title: 'Use your green bin too', body: 'Brisbane, Logan, the Gold Coast and the Tweed all offer household garden organics bins. For regular small amounts, a green bin is the simplest option.' },
      { title: 'Keep it separate', body: 'Green waste mixed with general rubbish can be harder to recycle. Keeping garden waste in its own pile makes removal simpler.' },
    ],
    faqs: [
      { q: 'What counts as green waste?', a: 'Grass clippings, leaves, prunings, branches, palm fronds and other plant material. General household rubbish is not green waste – tell us if there is any mixed in.' },
      { q: 'Where does the green waste go?', a: 'To an appropriate green waste or organics facility wherever possible, rather than to landfill.' },
      { q: 'Can you remove tree stumps?', a: 'We do not grind or dig out tree stumps. We can remove cut branches and small logs.' },
      { q: 'Can you take it away after you mow or prune?', a: 'Yes. Green waste removal can be added to any lawn, garden, hedge or pruning job.' },
    ],
    recurring: false,
    icon: 'recycle',
  },
  {
    slug: 'yard-clean-ups',
    name: 'Yard & leaf clean-ups',
    label: 'Yard & leaf clean-ups',
    summary: 'One-off clean-ups for overgrown or neglected yards: mowing, weeding, trimming, leaves and green waste in one visit.',
    bestFor: 'Overgrown or neglected yards',
    metaTitle: 'Yard Clean-Ups & Leaf Removal Gold Coast | Grounds by Swept',
    metaDescription: 'One-off yard clean-ups for homes in Brisbane, Logan, the Gold Coast and Tweed Heads: overgrown lawns, weeds, hedges and leaves cleared. Free written quote.',
    h1: 'Yard and leaf clean-ups',
    intro: 'A one-off visit to bring an overgrown or neglected yard back under control – long grass cut down, beds weeded, hedges and shrubs trimmed, leaves cleared and the green waste taken away. A good starting point before a regular plan, a sale or a lease change.',
    suits: ['Overgrown lawns and gardens', 'Homes going on the market or between tenants', 'Leaf build-up under big trees and along fences', 'Catch-ups after holidays, illness or a busy season'],
    checklist: [
      { room: 'Lawns', items: ['Long grass brought down, over more than one pass if needed', 'Edges and fence lines whipper-snipped', 'Leaves raked or blown from lawns'] },
      { room: 'Gardens', items: ['Garden beds weeded', 'Overgrown shrubs and hedges trimmed back', 'Dead plants and debris removed'] },
      { room: 'Hard surfaces', items: ['Leaves and debris cleared from paths, patios and driveways', 'Leaf litter cleared from around the yard and fence lines', 'Green waste loaded and taken away'] },
    ],
    quoteFactors: ['The size of the yard', 'How overgrown it is now', 'The amount of green waste', 'Access to the yard', 'Anything that needs extra care, such as steep slopes'],
    steps: visitSteps('The size of the yard, how long since it was last done and what you would like it to look like. Photos are a big help.'),
    tips: [
      { title: 'Start with a clean-up, then keep it up', body: 'After a clean-up, a regular mowing and garden plan is usually much quicker each visit than letting the yard grow out again.' },
      { title: 'Check for hidden hazards', body: 'Long grass can hide rocks, toys, hoses and irrigation heads. Let us know about anything you know is there.' },
    ],
    faqs: [
      { q: 'How long does a yard clean-up take?', a: 'It depends on the size of the yard and how overgrown it is. We will give you a clear scope in your quote, and larger clean-ups may take more than one visit.' },
      { q: 'Is green waste removal included?', a: 'It can be. Your quote will say whether green waste is taken away or left bagged for your bin.' },
      { q: 'Can you do a clean-up before I move out of a rental?', a: 'Yes. Check your tenancy agreement and entry condition report for what is expected of the yard, and tell us your vacate date when you request a quote.' },
      { q: 'Can I switch to a regular plan afterwards?', a: 'Yes. Many customers start with a clean-up and move to fortnightly or monthly visits.' },
    ],
    recurring: false,
    icon: 'wind',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
export const servicePath = (slug: string) => `/residential/${slug}`

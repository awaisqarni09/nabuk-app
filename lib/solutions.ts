import type { ProductCategory } from "@/lib/products";

// One entry per Solutions category — drives the clickable cards on /solutions
// and the discussion + related products on /solutions/[slug].
export interface Solution {
  slug: string;
  category: ProductCategory;
  meta: string;
  summary: string;
  image: string;
  heroImage: string;
  lead: string;
  discussion: string[];
  considerations: { title: string; body: string }[];
}

export const solutions: Solution[] = [
  {
    slug: "diagnostic-systems",
    category: "Diagnostic systems",
    meta: "Laboratory · In-clinic",
    summary: "Integrated platforms for dependable, fast results at the point of care.",
    image: "/images/card-diagnostic-systems.webp",
    heroImage: "/images/hero-diagnostic-systems.webp",
    lead: "Answers inside the clinic, while the patient is still on the table.",
    discussion: [
      "An in-house diagnostic platform changes how a consultation runs: instead of sending samples away and calling the owner back days later, your team confirms a diagnosis while the patient is still in the room. That speed only matters if the results are dependable — which is why we specify established analysers and readers with proven veterinary reference ranges.",
      "Nabuk supplies and installs immunoassay analysers, lateral-flow readers and urinalysis systems, then trains your team on sample handling, calibration and quality control so results stay trustworthy from day one.",
    ],
    considerations: [
      { title: "Caseload fit", body: "Daily test volume and species mix decide between a compact reader and a full analyser bench." },
      { title: "Workflow placement", body: "Where the instrument sits — consult room, lab corner or reception bench — shapes turnaround time." },
      { title: "Consumables & QC", body: "We plan reagent supply, controls and servicing so accuracy holds over years, not weeks." },
    ],
  },
  {
    slug: "blood-analysers",
    category: "Blood analysers",
    meta: "Haematology · Biochemistry",
    summary: "Systems matched to your caseload, throughput and team workflow.",
    image: "/images/card-blood-analysers.webp",
    heroImage: "/images/hero-blood-analysers.webp",
    lead: "Haematology and biochemistry sized to the way your practice actually works.",
    discussion: [
      "Blood work is the backbone of veterinary medicine — pre-anaesthetic screens, geriatric profiles, emergency panels. The right analyser is the one that matches your throughput: a system built for a referral hospital frustrates a two-vet practice, and an under-sized unit becomes a bottleneck on busy mornings.",
      "We supply CLIA immunoassay kits, transfusion reagents and analyser platforms, and we stay responsible for reagent logistics, calibration and support after the install — so the instrument keeps earning its bench space.",
    ],
    considerations: [
      { title: "Panel coverage", body: "From core chemistry to hormones, cardiac markers and coagulation — we map kits to your caseload." },
      { title: "Throughput & speed", body: "Samples per hour and time-to-result, measured against your appointment rhythm." },
      { title: "Running costs", body: "Reagent shelf life and batch sizes matter more than headline price in a Maltese-scale practice." },
    ],
  },
  {
    slug: "imaging",
    category: "Imaging",
    meta: "X-ray · Ultrasound",
    summary: "Complete digital radiography and ultrasound solutions, installed on-island.",
    image: "/images/card-imaging.webp",
    heroImage: "/images/hero-imaging.webp",
    lead: "See more, sooner — imaging specified around your rooms and your caseload.",
    discussion: [
      "Imaging is where equipment choice is most visible in clinical outcomes. Detector quality, generator power and probe selection decide whether you see the lesion — and room layout, shielding and positioning aids decide whether your team enjoys using the system every day.",
      "Nabuk plans the full installation: unit selection, room preparation, radiation-safety compliance and hands-on training, with local service afterwards so downtime is measured in hours, not shipping weeks.",
    ],
    considerations: [
      { title: "Room & workflow", body: "We measure the actual space — table position, tube clearance, cable runs — before recommending a unit." },
      { title: "Species & studies", body: "Orthopaedic X-ray, abdominal ultrasound, cardiology — the study mix drives probe and detector choice." },
      { title: "Image handling", body: "Viewing, storage and sharing are planned with the system, not bolted on later." },
    ],
  },
  {
    slug: "rapid-testing",
    category: "Rapid testing",
    meta: "Point of care",
    summary: "Faster clinical decisions with precise in-clinic testing systems.",
    image: "/images/card-rapid-testing.webp",
    heroImage: "/images/hero-rapid-testing.webp",
    lead: "A ten-minute answer that changes the treatment plan.",
    discussion: [
      "Rapid tests are the most-used diagnostic tool in most clinics: parvo and distemper combos, FeLV/FIV, heartworm, pancreatic lipase, tick-borne panels. Their value depends entirely on sensitivity and consistent lots — a cheap cassette that hedges is worse than no test at all.",
      "We stock a broad menu of veterinary rapid tests and combo cassettes, keep the cold chain intact to Malta and Gozo, and help your team standardise sampling so results are repeatable across staff.",
    ],
    considerations: [
      { title: "Test menu", body: "Canine, feline and exotic panels matched to the infections and conditions you actually see." },
      { title: "Reader pairing", body: "Cassettes read by eye or quantified on an LF reader — we help you decide when each is enough." },
      { title: "Stock rhythm", body: "Order sizes and expiry dates planned around your real monthly usage." },
    ],
  },
  {
    slug: "surgical-instruments",
    category: "Surgical instruments",
    meta: "Precision · Theatre",
    summary: "Specialist instruments for a broad range of veterinary disciplines.",
    image: "/images/card-surgical-instruments.webp",
    heroImage: "/images/hero-surgical-instruments.webp",
    lead: "From spay kit to TPLO plate — instruments your hands can trust.",
    discussion: [
      "Surgical outcomes are built from small details: the balance of a needle holder, the bite of a locking plate, a suture that behaves predictably in tissue. We supply theatre instrumentation from Veterinary Instrumentation and EICKEMEYER — from complete spay kits and left-handed sets to orthopaedic implants, drills and electrosurgery.",
      "Because Nabuk is on-island, replacing a dropped instrument or topping up sutures and drapes doesn't mean waiting on international freight — the theatre stays stocked and sterile.",
    ],
    considerations: [
      { title: "Procedure map", body: "Routine surgery, orthopaedics or both — kits and implants are chosen around what you operate on." },
      { title: "Surgeon fit", body: "Handle lengths, left-handed sets and instrument weight matter for long procedures." },
      { title: "Consumable flow", body: "Sutures, drapes and gowns on a reliable local re-supply rhythm." },
    ],
  },
  {
    slug: "sterilisation",
    category: "Sterilisation",
    meta: "Hygiene · Compliance",
    summary: "Autoclaves and hygiene systems for modern clinical standards.",
    image: "/images/card-sterilisation.webp",
    heroImage: "/images/hero-sterilisation.webp",
    lead: "Sterility you can document, cycle after cycle.",
    discussion: [
      "Sterilisation is the least glamorous system in the clinic and the least forgiving. A modern reprocessing workflow — cleaning, packaging, autoclaving, documentation — protects patients and protects the practice when compliance questions arise.",
      "As MELAG partners we supply the full chain: autoclaves and washer-disinfectors, sealing devices, water treatment, indicators and test systems, plus the care products that keep instruments and chambers in service for years.",
    ],
    considerations: [
      { title: "Cycle volume", body: "Chamber size and cycle speed matched to your surgical calendar, not a spec sheet." },
      { title: "The full loop", body: "Packaging, sealing, batch documentation and helix testing planned as one workflow." },
      { title: "Water & care", body: "Demineralised water and maintenance routines that prevent the failures autoclaves are blamed for." },
    ],
  },
  {
    slug: "clinic-furniture",
    category: "Clinic & patient care",
    meta: "Workflow · Infusion · Warming",
    summary: "Practical treatment-room systems designed around daily patient care.",
    image: "/images/card-clinic-furniture.webp",
    heroImage: "/images/hero-clinic-furniture.webp",
    lead: "The quiet systems that keep patients comfortable and teams moving.",
    discussion: [
      "Patient care depends on the systems around the headline equipment: accurate infusion, dependable warming and treatment-room organisation. Small improvements here compound across every admission and procedure.",
      "We specify pumps, warming systems and modular support equipment around the way your team moves through the room, then provide one local point of contact for setup and ongoing support.",
    ],
    considerations: [
      { title: "Patient pathway", body: "Recovery, ward and theatre needs shape the right warming and infusion setup." },
      { title: "Team workflow", body: "Controls, trays and accessories are positioned for fast, repeatable use." },
      { title: "Reliable support", body: "A local contact helps keep essential daily-care systems available." },
    ],
  },
  {
    slug: "specialist-equipment",
    category: "Specialist equipment",
    meta: "Dentistry · Endoscopy · More",
    summary: "Focused technologies sourced through trusted international manufacturers.",
    image: "/images/card-specialist-equipment.webp",
    heroImage: "/images/hero-specialist-equipment.webp",
    lead: "The equipment that lets a practice open a new service.",
    discussion: [
      "This is where a clinic differentiates itself: dentistry with dedicated X-ray, endoscopy, ophthalmology, anaesthesia and monitoring, patient warming. Each discipline has its own learning curve, so the equipment decision is really a service-launch decision.",
      "Nabuk sources these systems through EICKEMEYER and other specialist manufacturers, and supports the launch end-to-end — specification, installation, team training and the consumables that keep the new service running.",
    ],
    considerations: [
      { title: "Service ambition", body: "We start from the service you want to offer, then work back to the equipment list." },
      { title: "Training curve", body: "Hands-on onboarding so the first clinical cases are confident ones." },
      { title: "One accountable partner", body: "Anaesthesia, monitoring and warming planned together — not as separate purchases." },
    ],
  },
];

export const getSolution = (slug: string) => solutions.find((solution) => solution.slug === slug);

// Curated from the product photography supplied in `nabuk-products/`.
// The public portfolio is intentionally limited to five products per solution.

export const productCategories = [
  "Diagnostic systems",
  "Blood analysers",
  "Imaging",
  "Rapid testing",
  "Surgical instruments",
  "Sterilisation",
  "Clinic & patient care",
  "Specialist equipment",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export interface Product {
  name: string;
  brand: string;
  category: ProductCategory;
  discipline: string;
  image: string;
}

export const products: Product[] = [
  // 01 — Diagnostic systems
  {
    name: "Automatic Chemiluminescence Immunoassay Analyzer",
    brand: "AL Test",
    category: "Diagnostic systems",
    discipline: "In-clinic immunoassay",
    image: "/images/products/al-test-china/automatic-chemiluminescence-immunoassay-analyzer.webp",
  },
  {
    name: "VFR-100 Fluorescence Immunoassay Analyzer",
    brand: "AL Test",
    category: "Diagnostic systems",
    discipline: "Fluorescence analysis",
    image: "/images/products/al-test-china/fluorescence-immunoassay-analyzer-vfr-100.webp",
  },
  {
    name: "VTR-200 Lateral Flow Reader Plus",
    brand: "AL Test",
    category: "Diagnostic systems",
    discipline: "Lateral-flow analysis",
    image: "/images/products/al-test-china/lateral-flow-lf-reader-plus-vtr-200.webp",
  },
  {
    name: "Urine Analyzer",
    brand: "AL Test",
    category: "Diagnostic systems",
    discipline: "Urinalysis",
    image: "/images/products/al-test-china/urine-analyzer.webp",
  },
  {
    name: "HEINE BETA X VET Diagnostic Set",
    brand: "EICKEMEYER",
    category: "Diagnostic systems",
    discipline: "Clinical examination",
    image: "/images/products/eickemeyer/heine-beta-x-vet-diagnostic-set.webp",
  },

  // 02 — Blood analysers and assay menu
  {
    name: "Canine C-Reactive Protein Test Kit",
    brand: "AL Test",
    category: "Blood analysers",
    discipline: "Inflammation marker · CLIA",
    image: "/images/products/al-test-china/canine-c-reactive-protein-ccrp-test-kit-clia.webp",
  },
  {
    name: "Feline Serum Amyloid A Test Kit",
    brand: "AL Test",
    category: "Blood analysers",
    discipline: "Inflammation marker · CLIA",
    image: "/images/products/al-test-china/feline-serum-amyloid-a-fsaa-test-kit-clia.webp",
  },
  {
    name: "Canine Pancreatic Lipase Test Kit",
    brand: "AL Test",
    category: "Blood analysers",
    discipline: "Pancreatic marker · CLIA",
    image: "/images/products/al-test-china/canine-pancreatic-lipase-cpl-test-kit-clia.webp",
  },
  {
    name: "Canine SDMA Test Kit",
    brand: "AL Test",
    category: "Blood analysers",
    discipline: "Renal marker · CLIA",
    image: "/images/products/al-test-china/canine-symmetric-dimethylarginine-csdma-test-kit-clia.webp",
  },
  {
    name: "Anti-Müllerian Hormone Test Kit",
    brand: "AL Test",
    category: "Blood analysers",
    discipline: "Reproductive marker · CLIA",
    image: "/images/products/al-test-china/anti-mullerian-hormone-amh-test-kit-clia.webp",
  },

  // 03 — Imaging
  {
    name: "HiRay LITE Battery-Powered X-Ray Machine",
    brand: "EICKEMEYER",
    category: "Imaging",
    discipline: "Portable radiography",
    image: "/images/products/eickemeyer/hiray-lite-battery-powered-x-ray-machine.webp",
  },
  {
    name: "HiRay Dental X-Ray Generator",
    brand: "EICKEMEYER",
    category: "Imaging",
    discipline: "Dental radiography",
    image: "/images/products/eickemeyer/hiray-dental-x-ray-generator-stand-model.webp",
  },
  {
    name: "MAGIC 500 Plus Portable Ultrasound",
    brand: "EICKEMEYER",
    category: "Imaging",
    discipline: "Portable ultrasound",
    image: "/images/products/eickemeyer/magic-500-plus-portable-ultrasound-machine.webp",
  },
  {
    name: "MAGIC 3000 Plus Ultrasound Unit",
    brand: "EICKEMEYER",
    category: "Imaging",
    discipline: "Clinical ultrasound",
    image: "/images/products/eickemeyer/magic-3000-plus-ultrasound-unit.webp",
  },
  {
    name: "7.5 MHz Linear T-Shaped Probe",
    brand: "EICKEMEYER",
    category: "Imaging",
    discipline: "Ultrasound transducer",
    image: "/images/products/eickemeyer/linear-t-shaped-probe-for-303740-304045-7-5-mhz.webp",
  },

  // 04 — Rapid testing
  {
    name: "FHW / FeLV / FIV Combo Rapid Test",
    brand: "AL Test",
    category: "Rapid testing",
    discipline: "Feline infectious disease",
    image: "/images/products/al-test-china/fhw-antigen-felv-antigen-fiv-antibody-combo-rapid-test-cassette.webp",
  },
  {
    name: "CDV / CPV / CCV Combo Rapid Test",
    brand: "AL Test",
    category: "Rapid testing",
    discipline: "Canine infectious disease",
    image: "/images/products/al-test-china/cdv-cpv-ccv-antigen-combo-rapid-test-cassette.webp",
  },
  {
    name: "Canine Leishmania / Ehrlichia / Anaplasma Combo Test",
    brand: "AL Test",
    category: "Rapid testing",
    discipline: "Vector-borne disease",
    image: "/images/products/al-test-china/canine-lsh-ehrlichia-anaplasma-antibody-combo-rapid-test-cassette.webp",
  },
  {
    name: "Bovine Pregnancy PAG Rapid Test",
    brand: "AL Test",
    category: "Rapid testing",
    discipline: "Large-animal reproduction",
    image: "/images/products/al-test-china/bovine-pregnancy-pag-rapid-test-for-lf-reader.webp",
  },
  {
    name: "Feline Pancreatic Lipase Rapid Test",
    brand: "AL Test",
    category: "Rapid testing",
    discipline: "Point-of-care screening",
    image: "/images/products/al-test-china/feline-pancreatic-lipase-rapid-test-cassette.webp",
  },

  // 05 — Surgical instruments
  {
    name: "VI Orthopaedic Starter Kit — Standard",
    brand: "Veterinary Instrumentation",
    category: "Surgical instruments",
    discipline: "Orthopaedic surgery",
    image: "/images/products/veterinary-instruments-co/vi-orthopaedic-starter-kit-standard.webp",
  },
  {
    name: "Cased Canine Spay Kit — Left-Handed",
    brand: "Veterinary Instrumentation",
    category: "Surgical instruments",
    discipline: "Soft-tissue surgery",
    image: "/images/products/veterinary-instruments-co/cased-canine-spay-kit-left-handed.webp",
  },
  {
    name: "EICKEMEYER Dragonfly Cordless Drill System",
    brand: "EICKEMEYER",
    category: "Surgical instruments",
    discipline: "Surgical power tools",
    image: "/images/products/eickemeyer/eickemeyer-dragonfly-cordless-drill-system.webp",
  },
  {
    name: "EICKTRON 160 Electrosurgery Unit",
    brand: "EICKEMEYER",
    category: "Surgical instruments",
    discipline: "Electrosurgery",
    image: "/images/products/eickemeyer/electrosurgery-unit-eicktron-160.webp",
  },
  {
    name: "VISION Locking TPLO Plate System",
    brand: "Veterinary Instrumentation",
    category: "Surgical instruments",
    discipline: "Joint surgery",
    image: "/images/products/veterinary-instruments-co/vision-locking-tplo-plate-2-4mm-2-7mm-and-3-5mm.webp",
  },

  // 06 — Sterilisation
  {
    name: "Vacuklav 44 B+ Evolution Autoclave",
    brand: "MELAG",
    category: "Sterilisation",
    discipline: "Steam sterilisation",
    image: "/images/products/eickemeyer/autoclave-vacuklav-44-b-evolution-melag-incl-1-tray.webp",
  },
  {
    name: "Careclave 4-in-1 Reprocessing Solution",
    brand: "MELAG",
    category: "Sterilisation",
    discipline: "Instrument reprocessing",
    image: "/images/products/melag/careclave.webp",
  },
  {
    name: "MELAseal 300 Sealing Device",
    brand: "MELAG",
    category: "Sterilisation",
    discipline: "Sterile packaging",
    image: "/images/products/melag/melaseal-300.webp",
  },
  {
    name: "MELAG Washer-Disinfectors",
    brand: "MELAG",
    category: "Sterilisation",
    discipline: "Automated cleaning",
    image: "/images/products/melag/washer-disinfectors.webp",
  },
  {
    name: "MELAcontrol Helix Test System",
    brand: "MELAG",
    category: "Sterilisation",
    discipline: "Process validation",
    image: "/images/products/melag/melacontrol-helix.webp",
  },

  // 07 — Clinic and patient care
  {
    name: "Foschi Modular Tray Holder — 22 L",
    brand: "DEMAS",
    category: "Clinic & patient care",
    discipline: "Treatment-room workflow",
    image: "/images/products/demas/modular-tray-holder-22-lt.webp",
  },
  {
    name: "BeneFusion VP1 Infusion Pump",
    brand: "DEMAS",
    category: "Clinic & patient care",
    discipline: "Fluid therapy",
    image: "/images/products/demas/benefusion-vp1-infusion-pump.webp",
  },
  {
    name: "InfusoVet Connect Infusion Pump",
    brand: "EICKEMEYER",
    category: "Clinic & patient care",
    discipline: "Connected infusion",
    image: "/images/products/eickemeyer/infusion-pump-infusovet-connect.webp",
  },
  {
    name: "EICKWARM Air Warming System",
    brand: "EICKEMEYER",
    category: "Clinic & patient care",
    discipline: "Patient warming",
    image: "/images/products/eickemeyer/eickwarm-air-warming-system-for-small-animals.webp",
  },
  {
    name: "EICKWARM H₂O Heating System",
    brand: "EICKEMEYER",
    category: "Clinic & patient care",
    discipline: "Patient temperature care",
    image: "/images/products/eickemeyer/eickwarm-h-o-heating-system-for-small-animals.webp",
  },

  // 08 — Specialist equipment
  {
    name: "NarkoVet PRO Anaesthesia Machine with Ventilator",
    brand: "EICKEMEYER",
    category: "Specialist equipment",
    discipline: "Anaesthesia",
    image: "/images/products/eickemeyer/eickemeyer-narkovet-pro-anesthesia-machine-with-ventilator-sevoflurane.webp",
  },
  {
    name: "ePM 12M VET Multi-Parameter Monitor",
    brand: "EICKEMEYER",
    category: "Specialist equipment",
    discipline: "Patient monitoring",
    image: "/images/products/eickemeyer/multi-parameter-monitor-epm-12m-vet-incl-ibp-co2-ag-module.webp",
  },
  {
    name: "EICKVIEW 5-in-1 Endoscopy System",
    brand: "EICKEMEYER",
    category: "Specialist equipment",
    discipline: "Endoscopy",
    image: "/images/products/eickemeyer/eickview-5-in-1-endoscopy-system.webp",
  },
  {
    name: "iCare TONOVET Pro Tonometer",
    brand: "EICKEMEYER",
    category: "Specialist equipment",
    discipline: "Ophthalmology",
    image: "/images/products/eickemeyer/icare-tonovet-pro-tonometer.webp",
  },
  {
    name: "Dentanomic Gold Instrument Set",
    brand: "EICKEMEYER",
    category: "Specialist equipment",
    discipline: "Veterinary dentistry",
    image: "/images/products/eickemeyer/dentanomic-set-gold-mixed-sized-handles.webp",
  },
];

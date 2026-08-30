// Generated from nabuk-products/ — product library for the Solutions page.
// Regenerate with the scratchpad script if the source folders change.

export const productCategories = [
  "Diagnostic systems",
  "Blood analysers",
  "Imaging",
  "Rapid testing",
  "Surgical instruments",
  "Sterilisation",
  "Clinic furniture",
  "Specialist equipment"
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
  {
    "name": "Automatic chemiluminescence Immunoassay Analyzer",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "In-clinic analysers",
    "image": "/images/products/al-test-china/automatic-chemiluminescence-immunoassay-analyzer.webp"
  },
  {
    "name": "Fluorescence Immunoassay Analyzer (VFR-100)",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "In-clinic analysers",
    "image": "/images/products/al-test-china/fluorescence-immunoassay-analyzer-vfr-100.webp"
  },
  {
    "name": "Fluorescence Immunoassay Analyzer (VFR-101)",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "In-clinic analysers",
    "image": "/images/products/al-test-china/fluorescence-immunoassay-analyzer-vfr-101.webp"
  },
  {
    "name": "Fluorescence Immunoassay Analyzer (VFR-200)",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "In-clinic analysers",
    "image": "/images/products/al-test-china/fluorescence-immunoassay-analyzer-vfr-200.webp"
  },
  {
    "name": "Fluorescence Immunoassay Analyzer (VFR-201)",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "In-clinic analysers",
    "image": "/images/products/al-test-china/fluorescence-immunoassay-analyzer-vfr-201.webp"
  },
  {
    "name": "Lateral Flow (LF) Reader (VTR-100)",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "In-clinic analysers",
    "image": "/images/products/al-test-china/lateral-flow-lf-reader-vtr-100.webp"
  },
  {
    "name": "Lateral Flow (LF) Reader Plus (VTR-200)",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "In-clinic analysers",
    "image": "/images/products/al-test-china/lateral-flow-lf-reader-plus-vtr-200.webp"
  },
  {
    "name": "Urinalysis Reagent Strips",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "Urinalysis",
    "image": "/images/products/al-test-china/urinalysis-reagent-strips.webp"
  },
  {
    "name": "Urine Analyzer",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "In-clinic analysers",
    "image": "/images/products/al-test-china/urine-analyzer.webp"
  },
  {
    "name": "Urine Test- Microalbumin, Blood, Creatinine, Glucose, pH Detection",
    "brand": "AL Test",
    "category": "Diagnostic systems",
    "discipline": "Urinalysis",
    "image": "/images/products/al-test-china/urine-test-microalbumin-blood-creatinine-glucose-ph-detection.webp"
  },
  {
    "name": "EICKEMEYER® LED Wood’s Lamp",
    "brand": "EICKEMEYER",
    "category": "Diagnostic systems",
    "discipline": "Examination",
    "image": "/images/products/eickemeyer/eickemeyer-led-wood-s-lamp.webp"
  },
  {
    "name": "EICKEMEYER® POCKET Diagnostic Set",
    "brand": "EICKEMEYER",
    "category": "Diagnostic systems",
    "discipline": "Examination",
    "image": "/images/products/eickemeyer/eickemeyer-pocket-diagnostic-set.webp"
  },
  {
    "name": "HEINE BETA X VET Diagnostic Set",
    "brand": "EICKEMEYER",
    "category": "Diagnostic systems",
    "discipline": "Examination",
    "image": "/images/products/eickemeyer/heine-beta-x-vet-diagnostic-set.webp"
  },
  {
    "name": "HEINE BETA X VET Otoscope",
    "brand": "EICKEMEYER",
    "category": "Diagnostic systems",
    "discipline": "Examination",
    "image": "/images/products/eickemeyer/heine-beta-x-vet-otoscope.webp"
  },
  {
    "name": "Alpha-fetoprotein (AFP) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/alpha-fetoprotein-afp-test-kit-clia.webp"
  },
  {
    "name": "Anti-mullerian Hormone (AMH) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/anti-mullerian-hormone-amh-test-kit-clia.webp"
  },
  {
    "name": "Blood Grouping Reagents",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Transfusion medicine",
    "image": "/images/products/al-test-china/blood-grouping-reagents.webp"
  },
  {
    "name": "Brain Natriuretic Peptide (BNP) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/brain-natriuretic-peptide-bnp-test-kit-clia.webp"
  },
  {
    "name": "C-Peptide (CP) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/c-peptide-cp-test-kit-clia.webp"
  },
  {
    "name": "C-reactive Protein (CRP) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/c-reactive-protein-crp-test-kit-clia.webp"
  },
  {
    "name": "Canine C-reactive Protein (cCRP) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/canine-c-reactive-protein-ccrp-test-kit-clia.webp"
  },
  {
    "name": "Canine Distemper Virus (cDV) Antigen Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/canine-distemper-virus-cdv-antigen-test-kit-clia.webp"
  },
  {
    "name": "Canine Pancreatic Lipase (cPL) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/canine-pancreatic-lipase-cpl-test-kit-clia.webp"
  },
  {
    "name": "Canine Symmetric Dimethylarginine (cSDMA) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/canine-symmetric-dimethylarginine-csdma-test-kit-clia.webp"
  },
  {
    "name": "Cardiac Troponin-T (cTnT) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/cardiac-troponin-t-ctnt-test-kit-clia.webp"
  },
  {
    "name": "D-Dimer Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/d-dimer-test-kit-clia.webp"
  },
  {
    "name": "Feline Serum Amyloid A (fSAA) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/feline-serum-amyloid-a-fsaa-test-kit-clia.webp"
  },
  {
    "name": "Free Thyroxine (FT4) Test Kit(CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/free-thyroxine-ft4-test-kit-clia.webp"
  },
  {
    "name": "Free Triiodothyronine (FT3) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/free-triiodothyronine-ft3-test-kit-clia.webp"
  },
  {
    "name": "FSH Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/fsh-test-kit-clia.webp"
  },
  {
    "name": "Growth Stimulation Expressed Gene 2 (ST2) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/growth-stimulation-expressed-gene-2-st2-test-kit-clia.webp"
  },
  {
    "name": "Heart-fatty Acid-binding Protein (H-FABP) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/heart-fatty-acid-binding-protein-h-fabp-test-kit-clia.webp"
  },
  {
    "name": "Human Epididymis Protein 4 (HE4) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/human-epididymis-protein-4-he4-test-kit-clia.webp"
  },
  {
    "name": "Insulin (INS) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/insulin-ins-test-kit-clia.webp"
  },
  {
    "name": "Interleukin-6 (IL-6) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/interleukin-6-il-6-test-kit-clia.webp"
  },
  {
    "name": "LH Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/lh-test-kit-clia.webp"
  },
  {
    "name": "Neuron-specific Enolase (NSE) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/neuron-specific-enolase-nse-test-kit-clia.webp"
  },
  {
    "name": "Procalcitonin (PCT) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/procalcitonin-pct-test-kit-clia.webp"
  },
  {
    "name": "Serum Amyloid A Protein (SAA) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/serum-amyloid-a-protein-saa-test-kit-clia.webp"
  },
  {
    "name": "Thyroglobulin (TG) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/thyroglobulin-tg-test-kit-clia.webp"
  },
  {
    "name": "Thyroid Stimulating Hormone (TSH)Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/thyroid-stimulating-hormone-tsh-test-kit-clia.webp"
  },
  {
    "name": "Β- human Chorionic Gonadotropin( β-HCG) Test Kit (CLIA)",
    "brand": "AL Test",
    "category": "Blood analysers",
    "discipline": "Immunoassay (CLIA)",
    "image": "/images/products/al-test-china/human-chorionic-gonadotropin-hcg-test-kit-clia.webp"
  },
  {
    "name": "HiRay LITE Battery Powered X-Ray Machine",
    "brand": "EICKEMEYER",
    "category": "Imaging",
    "discipline": "X-ray & ultrasound",
    "image": "/images/products/eickemeyer/hiray-lite-battery-powered-x-ray-machine.webp"
  },
  {
    "name": "Linear T-shaped Probe for 303740, 304045 7.5 MHz",
    "brand": "EICKEMEYER",
    "category": "Imaging",
    "discipline": "X-ray & ultrasound",
    "image": "/images/products/eickemeyer/linear-t-shaped-probe-for-303740-304045-7-5-mhz.webp"
  },
  {
    "name": "MAGIC 3000 PLUS ULTRASOUND UNIT",
    "brand": "EICKEMEYER",
    "category": "Imaging",
    "discipline": "X-ray & ultrasound",
    "image": "/images/products/eickemeyer/magic-3000-plus-ultrasound-unit.webp"
  },
  {
    "name": "Magic 500 PLUS Portable Ultrasound Machine",
    "brand": "EICKEMEYER",
    "category": "Imaging",
    "discipline": "X-ray & ultrasound",
    "image": "/images/products/eickemeyer/magic-500-plus-portable-ultrasound-machine.webp"
  },
  {
    "name": "Ultrasound Transducer Probe Carrying Case",
    "brand": "EICKEMEYER",
    "category": "Imaging",
    "discipline": "X-ray & ultrasound",
    "image": "/images/products/eickemeyer/ultrasound-transducer-probe-carrying-case.webp"
  },
  {
    "name": "Anti-Extractable Nuclear Antigen (ENA) Antibody Profile Test Kit (Immunoblotting)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/anti-extractable-nuclear-antigen-ena-antibody-profile-test-kit-immunoblotting.webp"
  },
  {
    "name": "Blood Glucose/Ketone Meter and Strips(Glucose Dehydrogenase Method)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/blood-glucose-ketone-meter-and-strips-glucose-dehydrogenase-method.webp"
  },
  {
    "name": "Bovine Pregnancy (PAG) Rapid Test (For LF Reader)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/bovine-pregnancy-pag-rapid-test-for-lf-reader.webp"
  },
  {
    "name": "Canine Allergen-specific IgE Antibodies Rapid Test Kit (lmmunoblotting)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-allergen-specific-ige-antibodies-rapid-test-kit-lmmunoblotting.webp"
  },
  {
    "name": "Canine Allergen-specific IgE Antibodies Test",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-allergen-specific-ige-antibodies-test.webp"
  },
  {
    "name": "Canine C-reactive Protein (cCRP) Test Cassette ( WB/S/P)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-c-reactive-protein-ccrp-test-cassette-wb-s-p.webp"
  },
  {
    "name": "Canine Ehrlichia Antibody+Anaplasma Antibody + Babesia Antibody+CHW Antigen Combo Rapid Test",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-ehrlichia-antibody-anaplasma-antibody-babesia-antibody-chw-antigen-combo-.webp"
  },
  {
    "name": "Canine Ehrlichia Antibody+Anaplasma Antibody+Babesia Antibody +Leptospira Antibody Combo Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-ehrlichia-antibody-anaplasma-antibody-babesia-antibody-leptospira-antibod.webp"
  },
  {
    "name": "Canine Fecal Occult Blood (FOB) Rapid Test (Cup)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-fecal-occult-blood-fob-rapid-test-cup.webp"
  },
  {
    "name": "Canine Fecal Occult Blood(FOB) Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-fecal-occult-blood-fob-rapid-test-cassette.webp"
  },
  {
    "name": "Canine LSH + Ehrlichia + Anaplasma Antibody Combo Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-lsh-ehrlichia-anaplasma-antibody-combo-rapid-test-cassette.webp"
  },
  {
    "name": "Canine LSH Antibody+Ehrlichia Antibody+CHW Antigen+ Babesia Antibody Combo Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-lsh-antibody-ehrlichia-antibody-chw-antigen-babesia-antibody-combo-rapid-.webp"
  },
  {
    "name": "Canine Lyme Antibody + Ehrlichia Antibody + Anaplasma Antibody + CHW Antigen Combo Rapid Test Cassette (For LF Reader)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-lyme-antibody-ehrlichia-antibody-anaplasma-antibody-chw-antigen-combo-rap.webp"
  },
  {
    "name": "Canine NT-proBNP Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-nt-probnp-rapid-test-cassette.webp"
  },
  {
    "name": "Canine Pancreatic Lipase Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canine-pancreatic-lipase-rapid-test-cassette.webp"
  },
  {
    "name": "Canis Ehrlichia Antibody + CHW Antigen Combo Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/canis-ehrlichia-antibody-chw-antigen-combo-rapid-test-cassette.webp"
  },
  {
    "name": "CDV+CPV+CCV Antigen Combo Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/cdv-cpv-ccv-antigen-combo-rapid-test-cassette.webp"
  },
  {
    "name": "CPV+CCV+CDV+Giardia Lamblia Antigen Combo Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/cpv-ccv-cdv-giardia-lamblia-antigen-combo-rapid-test-cassette.webp"
  },
  {
    "name": "CPV+CCV+Giardia Lamblia +TOXO Antigen Combo Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/cpv-ccv-giardia-lamblia-toxo-antigen-combo-rapid-test-cassette.webp"
  },
  {
    "name": "CPV+CDV+CAV Antibody Combo Rapid Test",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/cpv-cdv-cav-antibody-combo-rapid-test.webp"
  },
  {
    "name": "FCoV Antibody Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/fcov-antibody-rapid-test-cassette.webp"
  },
  {
    "name": "FCoV+FPV Antigen Combo Rapid Test (Cup)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/fcov-fpv-antigen-combo-rapid-test-cup.webp"
  },
  {
    "name": "Feline Allergen-specific IgE Antibodies Rapid Test Kit (Immunoblotting)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/feline-allergen-specific-ige-antibodies-rapid-test-kit-immunoblotting.webp"
  },
  {
    "name": "Feline Allergen-specific IgE Antibodies Test",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/feline-allergen-specific-ige-antibodies-test.webp"
  },
  {
    "name": "Feline Blood Typing (Strip)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/feline-blood-typing-strip.webp"
  },
  {
    "name": "Feline Coronavirus Antibody Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/feline-coronavirus-antibody-test-cassette.webp"
  },
  {
    "name": "Feline Pancreatic Lipase Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/feline-pancreatic-lipase-rapid-test-cassette.webp"
  },
  {
    "name": "Feline Panleucopenia Virus Antigen (FPV Ag) Test",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/feline-panleucopenia-virus-antigen-fpv-ag-test.webp"
  },
  {
    "name": "FHW Antigen + FeLV Antigen + FIV Antibody Combo Rapid Test Cassette",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/fhw-antigen-felv-antigen-fiv-antibody-combo-rapid-test-cassette.webp"
  },
  {
    "name": "Food Allergen-specific IgE Antibodies Test Kit (Immunoblotting)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/food-allergen-specific-ige-antibodies-test-kit-immunoblotting.webp"
  },
  {
    "name": "Inhalant & Food Allergen-specific IgE Antibodies Rapid Test Kit",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/inhalant-food-allergen-specific-ige-antibodies-rapid-test-kit.webp"
  },
  {
    "name": "Inhalant Allergen-specific IgE Antibodies Test Kit (Immunoblotting)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/inhalant-allergen-specific-ige-antibodies-test-kit-immunoblotting.webp"
  },
  {
    "name": "Inhalant-Food Allergen-specific IgE Antibodies Test Kit (Immunoblotting)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/inhalant-food-allergen-specific-ige-antibodies-test-kit-immunoblotting.webp"
  },
  {
    "name": "Rabies Virus Antigen Rapid Test",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/rabies-virus-antigen-rapid-test.webp"
  },
  {
    "name": "Symmetric Dimethylarginine (SDMA) Test Cassette (Serum/Plasma)",
    "brand": "AL Test",
    "category": "Rapid testing",
    "discipline": "Point of care",
    "image": "/images/products/al-test-china/symmetric-dimethylarginine-sdma-test-cassette-serum-plasma.webp"
  },
  {
    "name": "Bone Graft Harvesting Set",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/bone-graft-harvesting-set.webp"
  },
  {
    "name": "EICKEMEYER® Dragonfly Cordless Drill System",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/eickemeyer-dragonfly-cordless-drill-system.webp"
  },
  {
    "name": "EickLoxx Small Contour Plate Set",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/eickloxx-small-contour-plate-set.webp"
  },
  {
    "name": "Electrosurgery unit EickTron 160",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/electrosurgery-unit-eicktron-160.webp"
  },
  {
    "name": "Freezpen 16G, incl. 6 x 16g N2O cartridges",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/freezpen-16g-incl-6-x-16g-n2o-cartridges.webp"
  },
  {
    "name": "Freezpen 16G, incl. 6 x 16g N2O cartridges, PLUS 24 cartridges FREE OF CHARGE",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/freezpen-16g-incl-6-x-16g-n2o-cartridges-plus-24-cartridges-free-of-charge.webp"
  },
  {
    "name": "Rasp Lewis, Diamond Coated, 180mm",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/rasp-lewis-diamond-coated-180mm.webp"
  },
  {
    "name": "Staple Remover, PVC",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/staple-remover-pvc.webp"
  },
  {
    "name": "Suture, EickFil, (2) 70cm + Round Needle 26mm (12)",
    "brand": "EICKEMEYER",
    "category": "Surgical instruments",
    "discipline": "Surgery",
    "image": "/images/products/eickemeyer/suture-eickfil-2-70cm-round-needle-26mm-12.webp"
  },
  {
    "name": "CASED CANINE SPAY KIT LEFT HANDED",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Surgical kits",
    "image": "/images/products/veterinary-instruments-co/cased-canine-spay-kit-left-handed.webp"
  },
  {
    "name": "Combination Drill For 5.5mm Screws",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/combination-drill-for-5-5mm-screws.webp"
  },
  {
    "name": "Drapes",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Theatre consumables",
    "image": "/images/products/veterinary-instruments-co/drapes.webp"
  },
  {
    "name": "Ethicon Ethilon Suture",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Sutures & closure",
    "image": "/images/products/veterinary-instruments-co/ethicon-ethilon-suture.webp"
  },
  {
    "name": "Ethicon Monocryl Plus Suture",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Sutures & closure",
    "image": "/images/products/veterinary-instruments-co/ethicon-monocryl-plus-suture.webp"
  },
  {
    "name": "Ethicon Monocryl Suture",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Sutures & closure",
    "image": "/images/products/veterinary-instruments-co/ethicon-monocryl-suture.webp"
  },
  {
    "name": "Ethicon PDS Plus Suture",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Sutures & closure",
    "image": "/images/products/veterinary-instruments-co/ethicon-pds-plus-suture.webp"
  },
  {
    "name": "Ethicon Topical Skin Adhesives and Skin Closure Systems",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Sutures & closure",
    "image": "/images/products/veterinary-instruments-co/ethicon-topical-skin-adhesives-and-skin-closure-systems.webp"
  },
  {
    "name": "External Fixation",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/external-fixation.webp"
  },
  {
    "name": "Gowns",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Theatre consumables",
    "image": "/images/products/veterinary-instruments-co/gowns.webp"
  },
  {
    "name": "Internal Fixation",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/internal-fixation.webp"
  },
  {
    "name": "Joint Surgery Products",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/joint-surgery-products.webp"
  },
  {
    "name": "Left Handed Instrument Starter Kit",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Surgical kits",
    "image": "/images/products/veterinary-instruments-co/left-handed-instrument-starter-kit.webp"
  },
  {
    "name": "Orthopaedic Instrumentation",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/orthopaedic-instrumentation.webp"
  },
  {
    "name": "Staplers and Extractor",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/staplers-and-extractor.webp"
  },
  {
    "name": "Sterile Spay Drape Pack",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Theatre consumables",
    "image": "/images/products/veterinary-instruments-co/sterile-spay-drape-pack.webp"
  },
  {
    "name": "STERILE SPAY DRAPE PACK SMALL",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Theatre consumables",
    "image": "/images/products/veterinary-instruments-co/sterile-spay-drape-pack-small.webp"
  },
  {
    "name": "Supracondylar Extended Combi Plates",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/supracondylar-extended-combi-plates.webp"
  },
  {
    "name": "Tissue Protection Sleeve - 5.5mm",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/tissue-protection-sleeve-5-5mm.webp"
  },
  {
    "name": "VI GENERAL SURGERY KIT LEFT HANDED",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Surgical kits",
    "image": "/images/products/veterinary-instruments-co/vi-general-surgery-kit-left-handed.webp"
  },
  {
    "name": "VI ORTHOPAEDIC STARTER KIT ENHANCED - NO POWER TOOLS",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/vi-orthopaedic-starter-kit-enhanced-no-power-tools.webp"
  },
  {
    "name": "VI ORTHOPAEDIC STARTER KIT STANDARD",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/vi-orthopaedic-starter-kit-standard.webp"
  },
  {
    "name": "VI ORTHOPAEDIC STARTER KIT STANDARD - NO POWER TOOLS",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/vi-orthopaedic-starter-kit-standard-no-power-tools.webp"
  },
  {
    "name": "ViSION Locking TPLO Plate 2.4mm, 2.7mm and 3.5mm",
    "brand": "Veterinary Instrumentation",
    "category": "Surgical instruments",
    "discipline": "Orthopaedics",
    "image": "/images/products/veterinary-instruments-co/vision-locking-tplo-plate-2-4mm-2-7mm-and-3-5mm.webp"
  },
  {
    "name": "Autoclave b classic 22 lt",
    "brand": "DEMAS",
    "category": "Sterilisation",
    "discipline": "Autoclaves",
    "image": "/images/products/demas/autoclave-b-classic-22-lt.webp"
  },
  {
    "name": "Autoclave, Vacuklav 44 B+ Evolution MELAG incl. 1 tray",
    "brand": "EICKEMEYER",
    "category": "Sterilisation",
    "discipline": "Autoclaves",
    "image": "/images/products/eickemeyer/autoclave-vacuklav-44-b-evolution-melag-incl-1-tray.webp"
  },
  {
    "name": "Premium Class Autoclave MELAG Vacuklav 43 B+",
    "brand": "EICKEMEYER",
    "category": "Sterilisation",
    "discipline": "Autoclaves",
    "image": "/images/products/eickemeyer/premium-class-autoclave-melag-vacuklav-43-b.webp"
  },
  {
    "name": "Accessories",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/accessories.webp"
  },
  {
    "name": "Autoclaves",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/autoclaves.webp"
  },
  {
    "name": "Bowie & Dick Test",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/bowie-dick-test.webp"
  },
  {
    "name": "Care Oil",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/care-oil.webp"
  },
  {
    "name": "Care Oil Spray",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/care-oil-spray.webp"
  },
  {
    "name": "Care Oil Spray adapter for turbines with Sirona connector",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/care-oil-spray-adapter-for-turbines-with-sirona-connector.webp"
  },
  {
    "name": "Careclave",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/careclave.webp"
  },
  {
    "name": "Chamber Protect",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/chamber-protect.webp"
  },
  {
    "name": "Chamber Protect Cleaning Set",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/chamber-protect-cleaning-set.webp"
  },
  {
    "name": "Compact Autoclaves",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/compact-autoclaves.webp"
  },
  {
    "name": "Further accessories",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/further-accessories.webp"
  },
  {
    "name": "Large Autoclaves",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/large-autoclaves.webp"
  },
  {
    "name": "MELAcare",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacare.webp"
  },
  {
    "name": "MELAcontrol",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacontrol.webp"
  },
  {
    "name": "MELAcontrol Helix",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacontrol-helix.webp"
  },
  {
    "name": "MELAcontrol Ink Test",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacontrol-ink-test.webp"
  },
  {
    "name": "MELAcontrol Pro",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacontrol-pro.webp"
  },
  {
    "name": "MELAcontrol Seal Check",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacontrol-seal-check.webp"
  },
  {
    "name": "MELAcontrol Type 5",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacontrol-type-5.webp"
  },
  {
    "name": "MELAcontrol Wash Check",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacontrol-wash-check.webp"
  },
  {
    "name": "Melacontrol wash check cleaning indicators",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melacontrol-wash-check-cleaning-indicators.webp"
  },
  {
    "name": "MELAdem 40",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/meladem-40.webp"
  },
  {
    "name": "MELAdem 47",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/meladem-47.webp"
  },
  {
    "name": "MELAdem 53",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/meladem-53.webp"
  },
  {
    "name": "MELAdem 53 C",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/meladem-53-c.webp"
  },
  {
    "name": "MELAfol+",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melafol.webp"
  },
  {
    "name": "MELAfol+ (pouch with side gusset 20 cm x 50 cm, 100 pieces)",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melafol-pouch-with-side-gusset-20-cm-x-50-cm-100-pieces.webp"
  },
  {
    "name": "MELAprint 60/80 labels (double adhesive)",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melaprint-60-80-labels-double-adhesive.webp"
  },
  {
    "name": "MELAseal 200",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melaseal-200.webp"
  },
  {
    "name": "MELAseal 300",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/melaseal-300.webp"
  },
  {
    "name": "MEtherm",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/metherm.webp"
  },
  {
    "name": "MEtherm 51 - Mildly alkaline",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/metherm-51-mildly-alkaline.webp"
  },
  {
    "name": "Packaging",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/packaging.webp"
  },
  {
    "name": "Regeneration salt",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/regeneration-salt.webp"
  },
  {
    "name": "Sealing Devices",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/sealing-devices.webp"
  },
  {
    "name": "Washer-Disinfectors",
    "brand": "MELAG",
    "category": "Sterilisation",
    "discipline": "Hygiene & sterilisation",
    "image": "/images/products/melag/washer-disinfectors.webp"
  },
  {
    "name": "Modular tray holder 22 lt",
    "brand": "DEMAS",
    "category": "Clinic furniture",
    "discipline": "Clinic workflow",
    "image": "/images/products/demas/modular-tray-holder-22-lt.webp"
  },
  {
    "name": "Benefusion VP1 infusion pump",
    "brand": "DEMAS",
    "category": "Specialist equipment",
    "discipline": "Monitoring & infusion",
    "image": "/images/products/demas/benefusion-vp1-infusion-pump.webp"
  },
  {
    "name": "Ayre's T-Piece Breathing Circuit",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/ayre-s-t-piece-breathing-circuit.webp"
  },
  {
    "name": "DENTANOMIC Periosteal Elevator Set",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Dentistry",
    "image": "/images/products/eickemeyer/dentanomic-periosteal-elevator-set.webp"
  },
  {
    "name": "Dentanomic Set – Bronze",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Dentistry",
    "image": "/images/products/eickemeyer/dentanomic-set-bronze.webp"
  },
  {
    "name": "Dentanomic Set – Bronze, Long Handles",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Dentistry",
    "image": "/images/products/eickemeyer/dentanomic-set-bronze-long-handles.webp"
  },
  {
    "name": "DENTANOMIC Set – Gold - Mixed Sized Handles",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Dentistry",
    "image": "/images/products/eickemeyer/dentanomic-set-gold-mixed-sized-handles.webp"
  },
  {
    "name": "EICKEMEYER® NarkoVet II Anaesthesia Machine",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/eickemeyer-narkovet-ii-anaesthesia-machine.webp"
  },
  {
    "name": "EICKEMEYER® NarkoVet II Anaesthesia Machine, SEVO",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/eickemeyer-narkovet-ii-anaesthesia-machine-sevo.webp"
  },
  {
    "name": "EICKEMEYER® NarkoVet LIGHT Anesthesia Unit (includes Vaporiser)",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/eickemeyer-narkovet-light-anesthesia-unit-includes-vaporiser.webp"
  },
  {
    "name": "EICKEMEYER® NarkoVet PRO Anesthesia Machine with Ventilator (Isoflurane)",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/eickemeyer-narkovet-pro-anesthesia-machine-with-ventilator-isoflurane.webp"
  },
  {
    "name": "EICKEMEYER® NarkoVet PRO Anesthesia Machine with Ventilator (Sevoflurane)",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/eickemeyer-narkovet-pro-anesthesia-machine-with-ventilator-sevoflurane.webp"
  },
  {
    "name": "EickSorber Anaesthetic Gas Adsorber, without exhaust hose, single unit",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/eicksorber-anaesthetic-gas-adsorber-without-exhaust-hose-single-unit.webp"
  },
  {
    "name": "EickView 150 SD Semi-Disposable Endoscope",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Endoscopy",
    "image": "/images/products/eickemeyer/eickview-150-sd-semi-disposable-endoscope.webp"
  },
  {
    "name": "EickView 5-in-1 Camera Kit",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Endoscopy",
    "image": "/images/products/eickemeyer/eickview-5-in-1-camera-kit.webp"
  },
  {
    "name": "EickView 5-in-1 Endoscopy System",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Endoscopy",
    "image": "/images/products/eickemeyer/eickview-5-in-1-endoscopy-system.webp"
  },
  {
    "name": "EickView 60L HD-SD",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Endoscopy",
    "image": "/images/products/eickemeyer/eickview-60l-hd-sd.webp"
  },
  {
    "name": "EickView Compact 4-in-1 Endoscopy Monitor",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Endoscopy",
    "image": "/images/products/eickemeyer/eickview-compact-4-in-1-endoscopy-monitor.webp"
  },
  {
    "name": "EickView SD Endoscopy Monitor",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Endoscopy",
    "image": "/images/products/eickemeyer/eickview-sd-endoscopy-monitor.webp"
  },
  {
    "name": "EickWarm Air Warming System for Small Animals",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Patient warming",
    "image": "/images/products/eickemeyer/eickwarm-air-warming-system-for-small-animals.webp"
  },
  {
    "name": "EickWarm Air Warming System for Small Animals incl. 10 single use blankets",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Patient warming",
    "image": "/images/products/eickemeyer/eickwarm-air-warming-system-for-small-animals-incl-10-single-use-blankets.webp"
  },
  {
    "name": "EickWarm H₂O Heating System for Small Animals",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Patient warming",
    "image": "/images/products/eickemeyer/eickwarm-h-o-heating-system-for-small-animals.webp"
  },
  {
    "name": "EickWrap FUN Cohesive bandage, 5 cm",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Clinic consumables",
    "image": "/images/products/eickemeyer/eickwrap-fun-cohesive-bandage-5-cm.webp"
  },
  {
    "name": "HiRay Dental X-Ray Generator - Stand Model",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Dentistry",
    "image": "/images/products/eickemeyer/hiray-dental-x-ray-generator-stand-model.webp"
  },
  {
    "name": "I.V. Giving Set Eickemeyer 20 drops/ml 1500mm (50)",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Clinic consumables",
    "image": "/images/products/eickemeyer/i-v-giving-set-eickemeyer-20-drops-ml-1500mm-50.webp"
  },
  {
    "name": "I.V. Giving Set Extension 1500mm (50)",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Clinic consumables",
    "image": "/images/products/eickemeyer/i-v-giving-set-extension-1500mm-50.webp"
  },
  {
    "name": "ICare TONOVET Pet Tonometer",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Ophthalmology",
    "image": "/images/products/eickemeyer/icare-tonovet-pet-tonometer.webp"
  },
  {
    "name": "ICare TONOVET Pro Tonometer",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Ophthalmology",
    "image": "/images/products/eickemeyer/icare-tonovet-pro-tonometer.webp"
  },
  {
    "name": "Infusion Pump InfusoVet Connect",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Monitoring & infusion",
    "image": "/images/products/eickemeyer/infusion-pump-infusovet-connect.webp"
  },
  {
    "name": "KOWA SL-19 plus hand slit lamp, white, with integrated camera",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Ophthalmology",
    "image": "/images/products/eickemeyer/kowa-sl-19-plus-hand-slit-lamp-white-with-integrated-camera.webp"
  },
  {
    "name": "Multi Parameter Monitor ePM 12M Vet incl. IBP + CO2 + AG module",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Monitoring & infusion",
    "image": "/images/products/eickemeyer/multi-parameter-monitor-epm-12m-vet-incl-ibp-co2-ag-module.webp"
  },
  {
    "name": "NarkoVet SAV II Small Animal Ventilator",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/narkovet-sav-ii-small-animal-ventilator.webp"
  },
  {
    "name": "OPTOMED AURORA® IQ Fundus Camera",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Ophthalmology",
    "image": "/images/products/eickemeyer/optomed-aurora-iq-fundus-camera.webp"
  },
  {
    "name": "OXYVET 3 oxygen concentrator 5 L",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/oxyvet-3-oxygen-concentrator-5-l.webp"
  },
  {
    "name": "Profident / Profident PLUS Starter készlet",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Dentistry",
    "image": "/images/products/eickemeyer/profident-profident-plus-starter-keszlet.webp"
  },
  {
    "name": "Starter set for NarkoVet II",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/starter-set-for-narkovet-ii.webp"
  },
  {
    "name": "Starter set for NarkoVet®",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/starter-set-for-narkovet.webp"
  },
  {
    "name": "Starter set for NarkoVet® LIGHT",
    "brand": "EICKEMEYER",
    "category": "Specialist equipment",
    "discipline": "Anaesthesia",
    "image": "/images/products/eickemeyer/starter-set-for-narkovet-light.webp"
  },
  {
    "name": "CalmDown by KRUUSE®",
    "brand": "Veterinary Instrumentation",
    "category": "Specialist equipment",
    "discipline": "Animal wellbeing",
    "image": "/images/products/veterinary-instruments-co/calmdown-by-kruuse.webp"
  }
];

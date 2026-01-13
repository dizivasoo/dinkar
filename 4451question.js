const questions = [
  {
    q: "Health is best defined as",
    o: [
      "Absence of disease",
      "Physical fitness",
      "Mental balance",
      "Complete physical, mental and social well-being"
    ],
    a: 3
  },
  {
    q: "Study of diseases is called",
    o: ["Anatomy", "Pathology", "Physiology", "Histology"],
    a: 1
  },
  {
    q: "Pathogens are",
    o: [
      "Antibodies",
      "Beneficial microbes",
      "Disease-causing organisms",
      "Vaccines"
    ],
    a: 2
  },
  {
    q: "Which is a viral disease?",
    o: ["Typhoid", "Malaria", "AIDS", "Ringworm"],
    a: 2
  },
  {
    q: "AIDS is caused by",
    o: ["DNA virus", "Retrovirus", "Bacteriophage", "Prion"],
    a: 1
  },
  {
    q: "HIV primarily infects",
    o: ["RBCs", "B-cells", "Helper T-cells", "Macrophages"],
    a: 2
  },
  {
    q: "Which disease is bacterial?",
    o: ["Influenza", "Typhoid", "Polio", "AIDS"],
    a: 1
  },
  {
    q: "Malaria is caused by",
    o: ["Virus", "Bacteria", "Protozoan", "Fungus"],
    a: 2
  },
  {
    q: "Vector of malaria is",
    o: ["Culex", "Aedes", "Female Anopheles", "Male Anopheles"],
    a: 2
  },
  {
    q: "Widal test is used for diagnosis of",
    o: ["TB", "Typhoid", "Cholera", "Malaria"],
    a: 1
  },
  {
    q: "Pneumonia affects",
    o: ["Liver", "Kidneys", "Lungs", "Brain"],
    a: 2
  },
  {
    q: "Ringworm is caused by",
    o: ["Bacteria", "Virus", "Fungus", "Protozoa"],
    a: 2
  },
  {
    q: "Elephantiasis is caused by",
    o: ["Virus", "Bacteria", "Fungi", "Wuchereria"],
    a: 3
  },
  {
    q: "Innate immunity is",
    o: ["Acquired", "Specific", "Non-specific", "Artificial"],
    a: 2
  },
  {
    q: "Acquired immunity is",
    o: ["Non-specific", "Inherited", "Specific", "Physical"],
    a: 2
  },
  {
    q: "Antibodies are produced by",
    o: ["T-cells", "RBCs", "B-cells", "Macrophages"],
    a: 2
  },
  {
    q: "Immunoglobulins are",
    o: ["Lipids", "Proteins", "Carbohydrates", "Enzymes"],
    a: 1
  },
  {
    q: "Passive immunity is obtained through",
    o: ["Vaccination", "Infection", "Breast milk", "Memory cells"],
    a: 2
  },
  {
    q: "Vaccination provides",
    o: ["Passive immunity", "Natural immunity", "Active immunity", "Innate immunity"],
    a: 2
  },
  {
    q: "Interferons are",
    o: ["Antibiotics", "Antibodies", "Antiviral proteins", "Hormones"],
    a: 2
  },
  {
    q: "Allergy occurs due to",
    o: ["Weak immunity", "Hyper immune response", "Pathogens", "Vaccines"],
    a: 1
  },
  {
    q: "Substance causing allergy is called",
    o: ["Antigen", "Antibody", "Allergen", "Pathogen"],
    a: 2
  },
  {
    q: "Which cell releases histamine?",
    o: ["Neutrophils", "Basophils", "Monocytes", "RBCs"],
    a: 1
  },
  {
    q: "Cancer is caused by",
    o: [
      "Uncontrolled cell division",
      "Lack of immunity",
      "Infection",
      "Mutation only"
    ],
    a: 0
  },
  {
    q: "Cancer-causing agents are called",
    o: ["Antigens", "Mutagens", "Carcinogens", "Allergens"],
    a: 2
  },
  {
    q: "Benign tumors are",
    o: ["Cancerous", "Non-cancerous", "Infectious", "Fatal"],
    a: 1
  },
  {
    q: "Malignant tumors",
    o: ["Do not spread", "Spread to other tissues", "Are harmless", "Are curable easily"],
    a: 1
  },
  {
    q: "Chemotherapy is used for treatment of",
    o: ["Allergy", "Viral disease", "Cancer", "Malaria"],
    a: 2
  },
  {
    q: "Smoking affects mainly",
    o: ["Liver", "Brain", "Lungs", "Kidneys"],
    a: 2
  },
  {
    q: "Tobacco contains",
    o: ["Alcohol", "Nicotine", "Morphine", "Cocaine"],
    a: 1
  },
  {
    q: "Drug dependence refers to",
    o: [
      "Occasional use",
      "Psychological need",
      "Physical & mental dependence",
      "Medical use"
    ],
    a: 2
  },
  {
    q: "LSD is a",
    o: ["Depressant", "Narcotic", "Hallucinogen", "Antibiotic"],
    a: 2
  },
  {
    q: "Morphine is obtained from",
    o: ["Cannabis", "Papaver somniferum", "Erythroxylum", "Tobacco"],
    a: 1
  },
  {
    q: "Alcohol primarily affects",
    o: ["Heart", "Kidneys", "Liver", "Lungs"],
    a: 2
  },
  {
    q: "AIDS spreads through",
    o: ["Touch", "Air", "Infected needles", "Mosquito"],
    a: 2
  },
  {
    q: "NOT a symptom of AIDS",
    o: ["Fever", "Weight loss", "Strong immunity", "Diarrhoea"],
    a: 2
  },
  {
    q: "Organ responsible for immunity",
    o: ["Liver", "Spleen", "Kidney", "Pancreas"],
    a: 1
  },
  {
    q: "Thymus is involved in",
    o: [
      "B-cell maturation",
      "T-cell maturation",
      "Antibody secretion",
      "RBC production"
    ],
    a: 1
  },
  {
    q: "Lymph nodes are part of",
    o: [
      "Digestive system",
      "Circulatory system",
      "Immune system",
      "Respiratory system"
    ],
    a: 2
  },
  {
    q: "Phagocytosis is done by",
    o: ["RBCs", "Neutrophils", "Platelets", "B-cells"],
    a: 1
  },
  {
    q: "Autoimmune disease occurs when",
    o: [
      "Immunity is weak",
      "Body attacks itself",
      "Infection increases",
      "Antibodies absent"
    ],
    a: 1
  },
  {
    q: "Rheumatoid arthritis is",
    o: ["Allergy", "Cancer", "Autoimmune disease", "Viral disease"],
    a: 2
  },
  {
    q: "Which is NOT a barrier of innate immunity?",
    o: ["Skin", "Mucus", "Antibodies", "Tears"],
    a: 2
  },
  {
    q: "Lysozyme is present in",
    o: ["Blood", "Tears", "Urine", "Sweat"],
    a: 1
  },
  {
    q: "Antigen-antibody reaction is",
    o: ["Non-specific", "Specific", "Physical", "Random"],
    a: 1
  },
  {
    q: "BCG vaccine is for",
    o: ["Typhoid", "TB", "Polio", "Hepatitis"],
    a: 1
  },
  {
    q: "Polio vaccine is",
    o: ["Killed vaccine", "Live attenuated", "Toxoid", "Antibiotic"],
    a: 1
  },
  {
    q: "Memory cells are formed during",
    o: ["Primary response", "Secondary response", "Innate response", "Allergy"],
    a: 0
  },
  {
    q: "Secondary immune response is",
    o: ["Slower", "Weaker", "Faster & stronger", "Same as primary"],
    a: 2
  },
  {
    q: "Blood group antigens are present on",
    o: ["Plasma", "WBCs", "RBCs", "Platelets"],
    a: 2
  },
  {
    q: "ABO blood grouping is based on",
    o: ["Antibodies", "Antigens", "Plasma proteins", "Platelets"],
    a: 1
  },
  {
    q: "Universal donor blood group",
    o: ["A", "B", "AB", "O"],
    a: 3
  },
  {
    q: "Universal recipient blood group",
    o: ["A", "B", "AB", "O"],
    a: 2
  },
  {
    q: "Rh factor was discovered in",
    o: ["Humans", "Monkeys", "Rabbits", "Rats"],
    a: 1
  },
  {
    q: "Erythroblastosis fetalis occurs due to",
    o: ["ABO incompatibility", "Rh incompatibility", "Allergy", "Infection"],
    a: 1
  },
  {
    q: "Which drug is depressant?",
    o: ["Cocaine", "Heroin", "LSD", "Nicotine"],
    a: 1
  },
  {
    q: "Cocaine is obtained from",
    o: ["Cannabis", "Tobacco", "Erythroxylum coca", "Papaver"],
    a: 2
  },
  {
    q: "Which is NOT a drug abuse effect?",
    o: ["Hallucination", "Addiction", "Improved immunity", "Depression"],
    a: 2
  },
  {
    q: "WHO stands for",
    o: [
      "World Health Organisation",
      "World Human Office",
      "World Health Office",
      "World Human Organisation"
    ],
    a: 0
  },
  {
    q: "Immunity transferred from mother to child via placenta is",
    o: ["Active", "Passive", "Artificial", "Acquired"],
    a: 1
  },
  {
    q: "Vaccine contains",
    o: [
      "Antibodies",
      "Dead/attenuated pathogen",
      "Antibiotics",
      "Toxins only"
    ],
    a: 1
  },
  {
    q: "Which disease spreads by sexual contact?",
    o: ["TB", "AIDS", "Malaria", "Typhoid"],
    a: 1
  },
  {
    q: "Common cold is caused by",
    o: ["Bacteria", "Virus", "Protozoa", "Fungus"],
    a: 1
  },
  {
    q: "Which disease damages immune system?",
    o: ["Typhoid", "Cancer", "AIDS", "Malaria"],
    a: 2
  }
];

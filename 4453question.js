const questions = [
  {
    q: "Yeast is used in the production of",
    o: ["Antibiotics", "Alcohol", "Organic acids", "Vitamins"],
    a: 1
  },
  {
    q: "Fermentation was discovered by",
    o: ["Robert Koch", "Louis Pasteur", "Alexander Fleming", "Edward Jenner"],
    a: 1
  },
  {
    q: "Ethyl alcohol is produced by",
    o: ["Lactobacillus", "Yeast", "Rhizobium", "E. coli"],
    a: 1
  },
  {
    q: "Bread making involves",
    o: ["Bacteria", "Virus", "Yeast", "Protozoa"],
    a: 2
  },
  {
    q: "Which gas causes bread dough to rise?",
    o: ["O₂", "CO₂", "CH₄", "NH₃"],
    a: 1
  },
  {
    q: "Which microbe converts milk into curd?",
    o: ["Yeast", "Lactobacillus", "Streptomyces", "Rhizobium"],
    a: 1
  },
  {
    q: "Lactobacillus increases the nutritional quality of milk by increasing",
    o: ["Proteins", "Vitamin B₁₂", "Vitamin A", "Iron"],
    a: 1
  },
  {
    q: "Swiss cheese holes are due to",
    o: ["CO₂", "O₂", "H₂", "N₂"],
    a: 0
  },
  {
    q: "Microorganism used in Swiss cheese production",
    o: ["Lactobacillus", "Streptococcus", "Propionibacterium", "Rhizobium"],
    a: 2
  },
  {
    q: "Which acid is produced by Acetobacter aceti?",
    o: ["Lactic acid", "Citric acid", "Acetic acid", "Butyric acid"],
    a: 2
  },
  {
    q: "Citric acid is produced commercially by",
    o: ["Yeast", "Aspergillus niger", "Penicillium", "Rhizobium"],
    a: 1
  },
  {
    q: "Antibiotic penicillin was discovered by",
    o: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner"],
    a: 1
  },
  {
    q: "Penicillin is obtained from",
    o: ["Bacteria", "Virus", "Fungus", "Algae"],
    a: 2
  },
  {
    q: "Streptomycin is produced by",
    o: ["Streptococcus", "Streptomyces", "Bacillus", "Clostridium"],
    a: 1
  },
  {
    q: "Antibiotics are effective against",
    o: ["Viruses", "Bacteria", "Fungi only", "Protozoa only"],
    a: 1
  },
  {
    q: "Which is NOT an antibiotic?",
    o: ["Penicillin", "Tetracycline", "Aspirin", "Streptomycin"],
    a: 2
  },
  {
    q: "Biogas mainly contains",
    o: ["CO₂", "H₂", "CH₄", "O₂"],
    a: 2
  },
  {
    q: "Biogas is produced by",
    o: ["Algae", "Fungi", "Methanogens", "Virus"],
    a: 2
  },
  {
    q: "Methanogens belong to",
    o: ["Bacteria", "Archaea", "Virus", "Algae"],
    a: 1
  },
  {
    q: "Gobar gas plant is based on",
    o: ["Aerobic respiration", "Anaerobic respiration", "Photosynthesis", "Nitrification"],
    a: 1
  },
  {
    q: "Sewage water treatment uses",
    o: ["Virus", "Bacteria", "Algae", "Protozoa"],
    a: 1
  },
  {
    q: "Primary treatment of sewage is",
    o: ["Chemical", "Biological", "Physical", "Enzymatic"],
    a: 2
  },
  {
    q: "Secondary treatment of sewage involves",
    o: ["Filtration", "Sedimentation", "Biological oxidation", "Chlorination"],
    a: 2
  },
  {
    q: "Activated sludge consists of",
    o: ["Algae", "Fungi", "Microbial flocs", "Viruses"],
    a: 2
  },
  {
    q: "Microbial flocs are made of",
    o: ["Bacteria & fungi", "Algae only", "Virus only", "Protozoa only"],
    a: 0
  },
  {
    q: "BOD stands for",
    o: [
      "Biological Oxygen Demand",
      "Biochemical Oxygen Demand",
      "Bacterial Oxygen Demand",
      "Basic Oxygen Demand"
    ],
    a: 1
  },
  {
    q: "Low BOD indicates",
    o: ["High pollution", "Clean water", "Toxic water", "Sewage water"],
    a: 1
  },
  {
    q: "Which is used as biofertilizer?",
    o: ["Yeast", "Rhizobium", "Virus", "Protozoa"],
    a: 1
  },
  {
    q: "Blue-green algae used as biofertilizers are",
    o: ["Fungi", "Protozoa", "Cyanobacteria", "Virus"],
    a: 2
  },
  {
    q: "Example of cyanobacteria used in paddy fields",
    o: ["Nostoc", "Anabaena", "Both A & B", "Rhizobium"],
    a: 2
  },
  {
    q: "Mycorrhiza is association between",
    o: ["Algae & fungi", "Roots & fungi", "Roots & bacteria", "Leaves & fungi"],
    a: 1
  },
  {
    q: "Mycorrhiza helps in absorption of",
    o: ["Nitrogen", "Phosphorus", "Potassium", "Calcium"],
    a: 1
  },
  {
    q: "Single Cell Protein is rich in",
    o: ["Carbohydrates", "Proteins", "Lipids", "Vitamins"],
    a: 1
  },
  {
    q: "SCP is produced from",
    o: ["Bacteria", "Fungi", "Algae", "All of these"],
    a: 3
  },
  {
    q: "Spirulina is used as",
    o: ["Antibiotic", "SCP", "Vaccine", "Enzyme"],
    a: 1
  },
  {
    q: "Which microorganism produces statins?",
    o: ["Yeast", "Monascus purpureus", "Penicillium", "Aspergillus"],
    a: 1
  },
  {
    q: "Statins help in lowering",
    o: ["Blood pressure", "Blood sugar", "Cholesterol", "Hemoglobin"],
    a: 2
  },
  {
    q: "Cyclosporin A is used as",
    o: ["Antibiotic", "Immunosuppressant", "Vaccine", "Enzyme"],
    a: 1
  },
  {
    q: "Cyclosporin A is produced by",
    o: [
      "Trichoderma polysporum",
      "Aspergillus niger",
      "Penicillium",
      "Rhizobium"
    ],
    a: 0
  },
  {
    q: "Which microbe produces streptokinase?",
    o: ["Streptococcus", "Bacillus", "Clostridium", "E. coli"],
    a: 0
  },
  {
    q: "Streptokinase is used as",
    o: ["Antibiotic", "Clot buster", "Vaccine", "Hormone"],
    a: 1
  },
  {
    q: "Which is used in laundry detergents?",
    o: ["Antibiotics", "Enzymes", "Vaccines", "Hormones"],
    a: 1
  },
  {
    q: "Which enzyme is used in fruit juice clarification?",
    o: ["Protease", "Cellulase", "Pectinase", "Lipase"],
    a: 2
  },
  {
    q: "Probiotics are",
    o: [
      "Harmful microbes",
      "Disease-causing microbes",
      "Beneficial microbes",
      "Viruses"
    ],
    a: 2
  },
  {
    q: "Example of probiotic",
    o: ["E. coli", "Lactobacillus", "Virus", "Streptococcus pyogenes"],
    a: 1
  },
  {
    q: "Which of the following improves soil fertility?",
    o: ["Chemical fertilizer", "Biofertilizer", "Insecticide", "Herbicide"],
    a: 1
  },
  {
    q: "Which microbe is used in vinegar production?",
    o: ["Yeast", "Lactobacillus", "Acetobacter", "Rhizobium"],
    a: 2
  },
  {
    q: "Primary sewage treatment removes",
    o: [
      "Dissolved organic matter",
      "Suspended solids",
      "Pathogens",
      "Chemicals"
    ],
    a: 1
  },
  {
    q: "Which stage reduces BOD significantly?",
    o: [
      "Primary treatment",
      "Secondary treatment",
      "Tertiary treatment",
      "Filtration"
    ],
    a: 1
  },
  {
    q: "Sludge digester produces",
    o: ["CO₂", "CH₄", "H₂", "N₂"],
    a: 1
  }
];

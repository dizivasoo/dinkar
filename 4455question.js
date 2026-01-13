const questions = [
  { q: "Biotechnology applications are mainly seen in", o: ["Agriculture", "Medicine", "Industry", "All of these"], a: 3 },
  { q: "Recombinant human insulin was first produced by", o: ["Eli Lilly", "Genentech", "Biocon", "Pfizer"], a: 1 },
  { q: "Insulin produced by genetic engineering is called", o: ["Natural insulin", "Artificial insulin", "Humulin", "Animal insulin"], a: 2 },
  { q: "Human insulin consists of", o: ["One chain", "Two chains", "Three chains", "Four chains"], a: 1 },
  { q: "Insulin chains are linked by", o: ["Peptide bonds", "Hydrogen bonds", "Disulphide bonds", "Ionic bonds"], a: 2 },

  { q: "In E. coli, insulin A and B chains are produced as", o: ["Single chain", "Two separate chains", "Three chains", "Preproinsulin"], a: 1 },
  { q: "Which hormone is produced using recombinant DNA technology?", o: ["Adrenaline", "Insulin", "Thyroxine", "Oxytocin"], a: 1 },
  { q: "Gene therapy was first used for treatment of", o: ["Cancer", "AIDS", "ADA deficiency", "Diabetes"], a: 2 },
  { q: "ADA deficiency causes", o: ["Cancer", "Weak immunity", "Diabetes", "Allergy"], a: 1 },
  { q: "First gene therapy was done on", o: ["Adult", "Child", "Old person", "Animal"], a: 1 },

  { q: "Which vector is used in gene therapy?", o: ["Plasmid", "Virus", "Ribosome", "Chromosome"], a: 1 },
  { q: "RNA interference (RNAi) is used to", o: ["Increase gene expression", "Silence gene expression", "Cut DNA", "Replicate DNA"], a: 1 },
  { q: "RNAi was first discovered in", o: ["Bacteria", "Plants", "Animals", "Viruses"], a: 1 },
  { q: "RNAi works by", o: ["Destroying protein", "Preventing transcription", "Degrading mRNA", "Cutting DNA"], a: 2 },
  { q: "Bt cotton is resistant to", o: ["Viruses", "Fungi", "Insect pests", "Bacteria"], a: 2 },

  { q: "Bt toxin is produced by", o: ["Bacillus subtilis", "Bacillus thuringiensis", "Bacillus anthracis", "Bacillus cereus"], a: 1 },
  { q: "Bt toxin is effective in", o: ["Acidic gut", "Neutral gut", "Alkaline gut", "All"], a: 2 },
  { q: "Cry genes code for", o: ["Hormone", "Enzyme", "Insecticidal protein", "Antibiotic"], a: 2 },
  { q: "Which crop is NOT a Bt crop?", o: ["Cotton", "Corn", "Brinjal", "Wheat"], a: 3 },
  { q: "Cry1Ac and Cry2Ab genes provide resistance against", o: ["Aphids", "Bollworms", "Whiteflies", "Beetles"], a: 1 },

  { q: "Golden rice is rich in", o: ["Protein", "Iron", "Vitamin A", "Vitamin C"], a: 2 },
  { q: "Golden rice produces", o: ["Lycopene", "β-carotene", "Chlorophyll", "Anthocyanin"], a: 1 },
  { q: "β-carotene is a precursor of", o: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], a: 0 },
  { q: "Golden rice was developed to combat", o: ["Anemia", "Night blindness", "Diabetes", "Cancer"], a: 1 },
  { q: "Transgenic animals are used for", o: ["Drug testing", "Vaccine safety", "Biological products", "All of these"], a: 3 },

  { q: "First transgenic animal was", o: ["Sheep", "Cow", "Mouse", "Goat"], a: 2 },
  { q: "Transgenic cows produce milk rich in", o: ["Lactose", "Protein", "Human α-lactalbumin", "Fat"], a: 2 },
  { q: "Rosie is a transgenic", o: ["Sheep", "Cow", "Goat", "Mouse"], a: 1 },
  { q: "Transgenic animals help in", o: ["Understanding gene regulation", "Studying diseases", "Testing vaccines", "All of these"], a: 3 },
  { q: "Biopharming refers to", o: ["Crop improvement", "Drug production using animals", "Antibiotic production", "Vaccine injection"], a: 1 },

  { q: "Ethical issues related to biotechnology are addressed by", o: ["WHO", "GEAC", "ICMR", "UNICEF"], a: 1 },
  { q: "GEAC stands for", o: ["Genetic Engineering Approval Committee", "Genetic Engineering Appraisal Committee", "Genome Editing Authority Committee", "Genetic Environment Authority Council"], a: 1 },
  { q: "Which of the following is a biopesticide?", o: ["DDT", "Bt toxin", "Malathion", "BHC"], a: 1 },
  { q: "RNAi technology is used to develop resistance against", o: ["Viruses", "Fungi", "Nematodes", "Bacteria"], a: 2 },
  { q: "Tobacco plant resistant to nematode was developed using", o: ["Bt gene", "Cry gene", "RNAi", "Plasmid"], a: 2 },

  { q: "Recombinant vaccines are produced using", o: ["Whole pathogen", "Killed pathogen", "Genetic engineering", "Antibiotics"], a: 2 },
  { q: "Edible vaccines are produced in", o: ["Fruits", "Seeds", "Leaves", "All of these"], a: 3 },
  { q: "Transgenic plants reduce use of", o: ["Fertilizers", "Insecticides", "Water", "Sunlight"], a: 1 },
  { q: "Which is NOT an advantage of GM crops?", o: ["Increased yield", "Reduced pesticide use", "Increased biodiversity loss", "Stress resistance"], a: 2 },
  { q: "Which disease can be treated using gene therapy?", o: ["ADA deficiency", "Malaria", "TB", "Cholera"], a: 0 },

  { q: "Which virus is used as vector in gene therapy?", o: ["Retrovirus", "Adenovirus", "Both A & B", "Bacteriophage"], a: 2 },
  { q: "Transgenic animals are NOT used for", o: ["Toxicity testing", "Vaccine testing", "Household work", "Disease research"], a: 2 },
  { q: "Which vitamin deficiency is addressed by golden rice?", o: ["Vitamin B", "Vitamin A", "Vitamin C", "Vitamin D"], a: 1 },
  { q: "Which protein increases nutritional quality in transgenic cow milk?", o: ["Casein", "Lactose", "α-lactalbumin", "Lipase"], a: 2 },
  { q: "Bioethical issues arise due to", o: ["Environmental impact", "Human rights", "Animal rights", "All of these"], a: 3 },

  { q: "Cry genes are isolated from", o: ["Virus", "Fungus", "Bacteria", "Algae"], a: 2 },
  { q: "Bt cotton reduces infestation of", o: ["Bollworm", "Aphids", "Thrips", "Whitefly"], a: 0 },
  { q: "GM crops are tested for safety by", o: ["WHO", "GEAC", "ICAR", "ICMR"], a: 1 },
  { q: "Which is an example of therapeutic protein?", o: ["Insulin", "Hemoglobin", "Chlorophyll", "Keratin"], a: 0 },
  { q: "Which crop was first genetically modified for commercial use?", o: ["Cotton", "Soybean", "Tomato (Flavr Savr)", "Rice"], a: 2 },

  { q: "Flavr Savr tomato was developed to", o: ["Increase size", "Delay ripening", "Increase protein", "Increase vitamin C"], a: 1 },
  { q: "Antisense RNA technology is used to", o: ["Increase gene expression", "Silence gene", "Cut DNA", "Replicate DNA"], a: 1 },
  { q: "Which organism is used to produce insulin commercially?", o: ["Yeast", "E. coli", "Virus", "Both A & B"], a: 3 },
  { q: "Which is NOT an application of biotechnology?", o: ["Gene therapy", "GM crops", "Vaccine production", "Fossil fuel formation"], a: 3 },
  { q: "Biotechnology is regulated in India by", o: ["WHO", "GEAC", "UNESCO", "FAO"], a: 1 }
];

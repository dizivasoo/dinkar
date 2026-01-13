const questions = [
  { q: "Alcohols can be prepared from alkyl halides using", o: ["NaOH (aq)", "NaOH (alc)", "KOH (alc)", "H₂SO₄"], a: 0 },
  { q: "Which compound is a secondary alcohol?", o: ["CH₃OH", "CH₃CH₂OH", "CH₃CHOHCH₃", "(CH₃)₃COH"], a: 2 },
  { q: "Phenol reacts with bromine water to give", o: ["Monobromophenol", "Dibromophenol", "Tribromophenol (white ppt)", "Bromobenzene"], a: 2 },
  { q: "The correct order of boiling points is", o: ["Ether < Alcohol < Phenol", "Alcohol < Ether < Phenol", "Phenol < Alcohol < Ether", "Ether < Phenol < Alcohol"], a: 0 },
  { q: "Lucas test distinguishes", o: ["Alcohols and phenols", "1°, 2°, and 3° alcohols", "Alcohols and ethers", "Phenols and ethers"], a: 1 },

  { q: "Phenol is more acidic than ethanol due to", o: ["−I effect", "+I effect", "Resonance stabilization", "Hydrogen bonding"], a: 2 },
  { q: "Which reagent converts alcohol into alkene?", o: ["KMnO₄", "Conc. H₂SO₄", "NaBH₄", "PCl₅"], a: 1 },
  { q: "Which alcohol gives turbidity immediately in Lucas test?", o: ["Ethanol", "Isopropyl alcohol", "tert-Butyl alcohol", "Methanol"], a: 2 },
  { q: "Williamson ether synthesis follows", o: ["SN1 mechanism", "SN2 mechanism", "E1 mechanism", "Free radical mechanism"], a: 1 },
  { q: "Which alkyl halide is best for Williamson ether synthesis?", o: ["Tertiary", "Secondary", "Primary", "Aryl"], a: 2 },

  { q: "Which alcohol does not undergo oxidation?", o: ["Primary", "Secondary", "Tertiary", "Ethanol"], a: 2 },
  { q: "Anisole is", o: ["Phenyl alcohol", "Methyl phenyl ether", "Dimethyl ether", "Benzyl alcohol"], a: 1 },
  { q: "Reimer–Tiemann reaction produces", o: ["Benzoic acid", "Salicylic acid", "Salicylaldehyde", "Phenyl alcohol"], a: 2 },
  { q: "Kolbe’s reaction is used to prepare", o: ["Phenol", "Salicylic acid", "Benzoic acid", "Aspirin"], a: 1 },
  { q: "Ethers have lower boiling points than alcohols because", o: ["Lower molar mass", "No hydrogen bonding", "Less polarity", "Branched structure"], a: 1 },

  { q: "Which reagent cleaves ethers?", o: ["HCl", "NaOH", "HI", "H₂SO₄"], a: 2 },
  { q: "Phenol gives violet colour with", o: ["Br₂ water", "NaOH", "FeCl₃", "HCl"], a: 2 },
  { q: "Which alcohol reacts fastest with sodium metal?", o: ["Methanol", "Ethanol", "tert-Butanol", "Phenol"], a: 3 },
  { q: "Which compound is used as an antiseptic?", o: ["Methanol", "Ethanol", "Phenol", "Ether"], a: 2 },
  { q: "Glycerol is", o: ["Monohydric alcohol", "Dihydric alcohol", "Trihydric alcohol", "Phenol"], a: 2 },

  { q: "Which phenol is most acidic?", o: ["Phenol", "o-Cresol", "p-Cresol", "p-Nitrophenol"], a: 3 },
  { q: "Which alcohol gives iodoform test?", o: ["Methanol", "Ethanol", "Propanol", "tert-Butanol"], a: 1 },
  { q: "Alcohols react with PCl₅ to form", o: ["Alkene", "Ether", "Alkyl chloride", "Aldehyde"], a: 2 },
  { q: "Ether acts as a solvent because it is", o: ["Non-polar", "Highly polar", "Moderately polar", "Ionic"], a: 2 },
  { q: "Phenol undergoes electrophilic substitution mainly at", o: ["Meta position", "Ortho and para positions", "Para only", "Side chain"], a: 1 },

  { q: "Which compound forms ether peroxide on standing?", o: ["Alcohol", "Phenol", "Ether", "Aldehyde"], a: 2 },
  { q: "Dehydration of ethanol at 443 K gives", o: ["Ethane", "Ethene", "Ethyne", "Diethyl ether"], a: 1 },
  { q: "Which reagent distinguishes phenol from alcohol?", o: ["Na metal", "NaOH", "HCl", "PCl₅"], a: 1 },
  { q: "Alcohols show hydrogen bonding because of", o: ["Carbon", "Hydrogen", "Oxygen", "Hydroxyl group"], a: 3 },
  { q: "Which compound is least acidic?", o: ["Phenol", "Ethanol", "p-Nitrophenol", "o-Nitrophenol"], a: 1 },

  { q: "Which ether is symmetrical?", o: ["CH₃–O–C₂H₅", "C₂H₅–O–C₂H₅", "CH₃–O–C₆H₅", "C₆H₅–O–CH₃"], a: 1 },
  { q: "Phenol reacts with conc. HNO₃ to form", o: ["Mononitrophenol", "Dinitrophenol", "Picric acid", "Nitrophenyl ether"], a: 2 },
  { q: "Which alcohol is used as antifreeze?", o: ["Methanol", "Ethanol", "Ethylene glycol", "Glycerol"], a: 2 },
  { q: "Which alcohol is used in alcoholic beverages?", o: ["Methanol", "Ethanol", "Propanol", "Butanol"], a: 1 },
  { q: "The correct order of acidity is", o: ["Alcohol < Phenol < Carboxylic acid", "Phenol < Alcohol < Acid", "Acid < Phenol < Alcohol", "Alcohol < Acid < Phenol"], a: 0 }
];

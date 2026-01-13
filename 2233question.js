const questions = [
  { q: "Aldehydes contain which functional group?", o: ["–CO–", "–COOH", "–CHO", "–OH"], a: 2 },
  { q: "Ketones contain which functional group?", o: ["–CHO", "–CO–", "–COOH", "–OH"], a: 1 },
  { q: "Which of the following is an aldehyde?", o: ["Acetone", "Acetic acid", "Acetaldehyde", "Ethanol"], a: 2 },
  { q: "Tollens’ reagent is used to identify", o: ["Ketones", "Alcohols", "Aldehydes", "Carboxylic acids"], a: 2 },
  { q: "Aldehydes are more reactive than ketones towards nucleophilic addition because", o: ["Less steric hindrance", "Higher molecular mass", "More alkyl groups", "Lower boiling point"], a: 0 },

  { q: "Which compound gives positive Fehling’s test?", o: ["Benzaldehyde", "Formaldehyde", "Acetone", "Benzophenone"], a: 1 },
  { q: "Benedict’s reagent is used to detect", o: ["Ketones", "Aldehydes", "Carboxylic acids", "Esters"], a: 1 },
  { q: "Which compound does NOT give Tollens’ test?", o: ["Formaldehyde", "Acetaldehyde", "Benzaldehyde", "Acetone"], a: 3 },
  { q: "On oxidation, aldehydes form", o: ["Alcohols", "Ketones", "Carboxylic acids", "Esters"], a: 2 },
  { q: "Which oxidizing agent is mild and selective for aldehydes?", o: ["KMnO₄", "K₂Cr₂O₇", "Tollens’ reagent", "Conc. HNO₃"], a: 2 },

  { q: "Ketones on oxidation generally", o: ["Form acids", "Form aldehydes", "Do not oxidize easily", "Form alcohols"], a: 2 },
  { q: "Which compound undergoes Cannizzaro reaction?", o: ["Acetaldehyde", "Benzaldehyde", "Acetone", "Propanal"], a: 1 },
  { q: "Cannizzaro reaction occurs in", o: ["Acidic medium", "Neutral medium", "Alkaline medium", "Dry medium"], a: 2 },
  { q: "Aldol condensation requires the presence of", o: ["α-hydrogen", "Benzene ring", "–COOH group", "Ether linkage"], a: 0 },
  { q: "Which compound cannot undergo aldol condensation?", o: ["Acetaldehyde", "Acetone", "Formaldehyde", "Propanal"], a: 2 },

  { q: "Which reaction converts aldehydes to alcohols?", o: ["Oxidation", "Reduction", "Hydrolysis", "Esterification"], a: 1 },
  { q: "Which reagent reduces aldehydes and ketones to alcohols?", o: ["KMnO₄", "NaBH₄", "H₂SO₄", "HNO₃"], a: 1 },
  { q: "Which acid is strongest?", o: ["Formic acid", "Acetic acid", "Propionic acid", "Benzoic acid"], a: 0 },
  { q: "Carboxylic acids are acidic because of", o: ["Hydrogen bonding", "Inductive effect", "Resonance stabilization of carboxylate ion", "High boiling point"], a: 2 },
  { q: "Carboxylic acids have higher boiling points due to", o: ["Large size", "Dipole moment", "Hydrogen bonding (dimer formation)", "Ionic nature"], a: 2 },

  { q: "Which compound gives effervescence with NaHCO₃?", o: ["Alcohol", "Aldehyde", "Ketone", "Carboxylic acid"], a: 3 },
  { q: "Esterification is the reaction between", o: ["Alcohol and aldehyde", "Alcohol and ketone", "Alcohol and carboxylic acid", "Alcohol and ether"], a: 2 },
  { q: "Which reagent converts carboxylic acid into acid chloride?", o: ["SOCl₂", "NaOH", "HCl", "NH₃"], a: 0 },
  { q: "Which acid is used as food preservative?", o: ["Oxalic acid", "Formic acid", "Benzoic acid", "Acetic acid"], a: 2 },
  { q: "Formic acid differs from other carboxylic acids because it", o: ["Is solid", "Has no α-hydrogen", "Acts as a reducing agent", "Is aromatic"], a: 2 },

  { q: "Which compound gives iodoform test?", o: ["Methanol", "Ethanol", "Acetone", "Benzaldehyde"], a: 2 },
  { q: "Which reagent is used in Clemmensen reduction?", o: ["Zn–Hg / HCl", "NH₂NH₂ / KOH", "NaBH₄", "LiAlH₄"], a: 0 },
  { q: "Wolff–Kishner reduction occurs in", o: ["Acidic medium", "Neutral medium", "Alkaline medium", "Dry medium"], a: 2 },
  { q: "Which acid forms acid anhydride on heating?", o: ["Monocarboxylic acid", "Dicarboxylic acid", "Aromatic acid", "Fatty acid"], a: 1 },
  { q: "Which compound is used in nail polish remover?", o: ["Methanol", "Ethanol", "Acetone", "Acetic acid"], a: 2 },

  { q: "Which reagent distinguishes aldehydes from ketones?", o: ["Fehling’s solution", "NaOH", "HCl", "NH₃"], a: 0 },
  { q: "Benzoic acid is prepared from", o: ["Ethanol", "Benzaldehyde", "Benzene", "Toluene"], a: 3 },
  { q: "Which functional group is present in carboxylic acids?", o: ["–CO–", "–CHO", "–COOH", "–OH"], a: 2 },
  { q: "Which compound does not show nucleophilic addition?", o: ["Aldehyde", "Ketone", "Carboxylic acid", "Formaldehyde"], a: 2 },
  { q: "Which compound forms gem-diol most readily?", o: ["Acetone", "Benzaldehyde", "Formaldehyde", "Acetaldehyde"], a: 2 }
];

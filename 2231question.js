const questions = [
  { q: "Haloalkanes are compounds in which a halogen atom is attached to", o: ["sp² carbon", "sp³ carbon", "sp carbon", "Aromatic carbon only"], a: 1 },
  { q: "Haloarenes have halogen attached to", o: ["Aliphatic carbon", "sp³ carbon", "Aromatic ring", "Carboxyl carbon"], a: 2 },
  { q: "Which of the following is a primary haloalkane?", o: ["CH₃CH₂Cl", "(CH₃)₂CHCl", "(CH₃)₃CCl", "CH₃Cl"], a: 0 },
  { q: "Which is a tertiary haloalkane?", o: ["CH₃CH₂CH₂Br", "(CH₃)₂CHBr", "(CH₃)₃CBr", "CH₃Br"], a: 2 },
  { q: "Haloalkanes undergo nucleophilic substitution mainly because", o: ["Halogen is electron-rich", "Carbon-halogen bond is polar", "Halogen is small", "High bond energy"], a: 1 },

  { q: "SN1 reaction follows", o: ["Two-step mechanism", "One-step mechanism", "Radical mechanism", "Elimination mechanism"], a: 0 },
  { q: "SN2 reaction involves", o: ["Carbocation intermediate", "Concerted mechanism", "Free radical", "Carbocation rearrangement"], a: 1 },
  { q: "Which halide undergoes SN1 fastest?", o: ["Primary", "Secondary", "Tertiary", "Methyl"], a: 2 },
  { q: "The order of reactivity of alkyl halides in SN2 reaction is", o: ["Primary > Secondary > Tertiary", "Tertiary > Secondary > Primary", "Secondary > Tertiary > Primary", "Tertiary > Primary > Secondary"], a: 0 },
  { q: "Reactivity of alkyl halides towards nucleophilic substitution depends on", o: ["Bond polarity and steric hindrance", "Molecular mass only", "Boiling point", "Colour"], a: 0 },

  { q: "Grignard reagent is prepared by", o: ["R–X + Mg in dry ether", "R–X + Na in water", "R–X + H₂O", "R–X + Li in ethanol"], a: 0 },
  { q: "Which of the following is a common use of chloroform?", o: ["Solvent", "Antiseptic", "Fertilizer", "Fuel"], a: 0 },
  { q: "Aryl halides are less reactive towards nucleophilic substitution because", o: ["sp² carbon is less polar", "Halogen-carbon bond is stronger", "Both A and B", "Halogen is small"], a: 2 },
  { q: "Which halide shows fastest reaction in SN2?", o: ["Iodoalkane", "Bromoalkane", "Chloroalkane", "Fluoroalkane"], a: 0 },
  { q: "Reactivity order of halogens in alkyl halides is", o: ["F > Cl > Br > I", "I > Br > Cl > F", "Cl > Br > I > F", "Br > Cl > I > F"], a: 1 },

  { q: "Chlorobenzene does not undergo nucleophilic substitution easily because", o: ["Cl is highly electronegative", "Resonance stabilization", "Steric hindrance", "Low polarity"], a: 1 },
  { q: "Benzyl chloride reacts with aqueous NaOH to give", o: ["Phenol", "Benzyl alcohol", "Benzaldehyde", "Toluene"], a: 1 },
  { q: "Halogens in haloarenes deactivate the ring for", o: ["Electrophilic substitution", "Nucleophilic substitution", "Oxidation", "Reduction"], a: 0 },
  { q: "Haloalkanes react with alcoholic KOH to give", o: ["Alkanes", "Alkynes", "Alkenes", "Alcohols"], a: 2 },
  { q: "Finkelstein reaction is", o: ["Halide exchange in acetone", "Oxidation of alkyl halide", "Reduction of halide", "Elimination"], a: 0 },

  { q: "Williamson synthesis can be used to prepare", o: ["Alcohols", "Ethers", "Haloalkanes", "Alkanes"], a: 1 },
  { q: "Benzylic halides are reactive due to", o: ["sp³ carbon", "Resonance stabilization of carbocation", "High polarity", "Low molecular mass"], a: 1 },
  { q: "Haloalkanes are polar due to", o: ["Carbon chain", "Polar C–X bond", "Hydrogen bonding", "Lone pair on carbon"], a: 1 },
  { q: "Haloarenes are less reactive than haloalkanes because", o: ["Halogen is sp³ hybridized", "Carbon-halogen bond is stronger due to resonance", "Halogen is electronegative", "Low molecular mass"], a: 1 },
  { q: "Which halide undergoes hydrolysis fastest?", o: ["Iodoalkane", "Bromoalkane", "Chloroalkane", "Fluoroalkane"], a: 0 },

  { q: "Which halide is used in CFCs?", o: ["Chloromethane", "Carbon tetrachloride", "Chloroethane", "Bromoethane"], a: 1 },
  { q: "Haloalkanes react with NaCN to form", o: ["Alcohols", "Nitriles", "Ethers", "Alkenes"], a: 1 },
  { q: "Halogen in haloalkanes is replaced by", o: ["Nucleophiles", "Electrophiles", "Radicals", "Acids"], a: 0 },
  { q: "Which halide is most reactive in SN1?", o: ["Alkyl chloride", "Alkyl bromide", "Alkyl iodide", "Alkyl fluoride"], a: 2 },
  { q: "Which halide reacts with Mg to form Grignard reagent?", o: ["CH₃Cl", "CH₃Br", "C₆H₅Cl", "CH₃F"], a: 1 },

  { q: "Benzyl chloride reacts with alcoholic KOH to give", o: ["Benzyl alcohol", "Styrene", "Benzene", "Toluene"], a: 1 },
  { q: "Nitro group deactivates aromatic ring in", o: ["Haloarenes", "Nitroarenes", "Phenols", "Alcohols"], a: 1 },
  { q: "Which reagent is used in Wurtz reaction?", o: ["Na in dry ether", "KOH in alcohol", "KMnO₄", "NaBH₄"], a: 0 },
  { q: "Chlorobenzene reacts with NaOH only under", o: ["Normal conditions", "High temperature & pressure", "UV light", "Acidic medium"], a: 1 },
  { q: "The order of bond dissociation energy in alkyl halides is", o: ["C–F > C–Cl > C–Br > C–I", "C–I > C–Br > C–Cl > C–F", "C–Cl > C–Br > C–F > C–I", "C–Br > C–Cl > C–F > C–I"], a: 0 }
];

const questions = [
  { q: "The process of extracting metal from its ore is called", o: ["Concentration", "Roasting", "Metallurgy", "Calcination"], a: 2 },
  { q: "Removal of gangue from ore is called", o: ["Roasting", "Concentration", "Smelting", "Refining"], a: 1 },
  { q: "Which of the following is NOT a method of concentration of ore?", o: ["Froth flotation", "Magnetic separation", "Electrolysis", "Hydraulic washing"], a: 2 },
  { q: "Froth flotation method is used to concentrate", o: ["Oxide ores", "Sulphide ores", "Carbonate ores", "Halide ores"], a: 1 },
  { q: "The role of pine oil in froth flotation is to act as", o: ["Collector", "Depressant", "Frothing agent", "Activator"], a: 2 },

  { q: "Which substance is used as depressant in froth flotation of ZnS and PbS?", o: ["NaCN", "CuSO₄", "Na₂CO₃", "H₂SO₄"], a: 0 },
  { q: "Calcination is carried out in", o: ["Excess air", "Absence of air", "Presence of water", "Vacuum"], a: 1 },
  { q: "Roasting is carried out in", o: ["Absence of air", "Vacuum", "Excess of air", "Presence of water"], a: 2 },
  { q: "Which ore is concentrated by magnetic separation?", o: ["Bauxite", "Calamine", "Haematite", "Pyrolusite"], a: 3 },
  { q: "The chemical change during calcination of CaCO₃ is", o: ["CaCO₃ → CaO + CO₂", "CaCO₃ → Ca + CO₃", "CaCO₃ → Ca + CO₂ + O₂", "CaCO₃ → CaO + CO"], a: 0 },

  { q: "During roasting of sulphide ores, the gas evolved is", o: ["CO₂", "SO₂", "H₂", "O₂"], a: 1 },
  { q: "The process of reduction of metal oxide using carbon is called", o: ["Electrolysis", "Smelting", "Refining", "Concentration"], a: 1 },
  { q: "Which metal is extracted by electrolysis of its molten salt?", o: ["Fe", "Cu", "Na", "Zn"], a: 2 },
  { q: "Which metal is extracted by aluminothermic process?", o: ["Copper", "Iron", "Chromium", "Sodium"], a: 2 },
  { q: "In Goldschmidt (thermite) reaction, aluminium acts as", o: ["Oxidizing agent", "Reducing agent", "Catalyst", "Flux"], a: 1 },

  { q: "Which substance is used as flux in extraction of iron?", o: ["SiO₂", "CaO", "CaCO₃", "Al₂O₃"], a: 2 },
  { q: "The function of flux is to", o: ["Increase temperature", "Remove gangue", "Reduce ore", "Oxidize impurities"], a: 1 },
  { q: "Slag formed in blast furnace during extraction of iron is", o: ["CaSiO₃", "CaCO₃", "CaO", "SiO₂"], a: 0 },
  { q: "The refining method used for copper is", o: ["Zone refining", "Electrolytic refining", "Vapour phase refining", "Liquation"], a: 1 },
  { q: "Which metal is refined by zone refining?", o: ["Copper", "Iron", "Silicon", "Zinc"], a: 2 },

  { q: "The principle of zone refining is based on", o: ["Difference in melting point", "Difference in solubility of impurities", "Difference in density", "Difference in volatility"], a: 1 },
  { q: "Which metal is refined by Mond’s process?", o: ["Copper", "Iron", "Nickel", "Zinc"], a: 2 },
  { q: "Mond’s process involves formation of", o: ["NiCl₂", "Ni(CO)₄", "NiO", "NiSO₄"], a: 1 },
  { q: "Vapour phase refining is used for", o: ["Zinc", "Copper", "Iron", "Nickel"], a: 3 },
  { q: "Which metal is purified by liquation?", o: ["Tin", "Aluminium", "Iron", "Magnesium"], a: 0 },

  { q: "The refining method used for gold is", o: ["Electrolytic refining", "Zone refining", "Cyanide process", "Liquation"], a: 2 },
  { q: "Which reagent is used in cyanide process for gold?", o: ["NaOH", "NaCN", "K₂Cr₂O₇", "KMnO₄"], a: 1 },
  { q: "In cyanide process, gold is obtained from complex by", o: ["Oxidation", "Reduction by zinc", "Reduction by copper", "Electrolysis"], a: 1 },
  { q: "Which metal cannot be extracted by carbon reduction?", o: ["Fe", "Zn", "Cu", "Al"], a: 3 },
  { q: "Which impurity is removed during electrolytic refining?", o: ["Anode mud", "Slag", "Flux", "Froth"], a: 0 },

  { q: "Which metal is obtained as impure metal called blister copper?", o: ["Iron", "Copper", "Zinc", "Tin"], a: 1 },
  { q: "The process of heating concentrated ore strongly in air is", o: ["Calcination", "Smelting", "Roasting", "Refining"], a: 2 },
  { q: "Which ore of aluminium is used for extraction?", o: ["Cryolite", "Bauxite", "Feldspar", "Haematite"], a: 1 },
  { q: "Cryolite is used in aluminium extraction to", o: ["Act as catalyst", "Lower melting point", "Oxidize impurities", "Act as reducing agent"], a: 1 },
  { q: "Which gas is evolved during electrolytic extraction of aluminium?", o: ["O₂", "CO", "CO₂", "H₂"], a: 2 }
];

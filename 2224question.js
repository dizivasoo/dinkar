const questions = [
  { q: "Electrochemistry deals with the relationship between", o: ["Heat and work", "Electrical energy and chemical reactions", "Pressure and volume", "Temperature and energy"], a: 1 },
  { q: "A galvanic cell converts", o: ["Electrical energy into chemical energy", "Chemical energy into electrical energy", "Mechanical energy into electrical energy", "Heat energy into electrical energy"], a: 1 },
  { q: "In a galvanic cell, oxidation occurs at", o: ["Cathode", "Anode", "Salt bridge", "Electrolyte"], a: 1 },
  { q: "Reduction always occurs at", o: ["Anode", "Cathode", "Electrode surface", "Salt bridge"], a: 1 },
  { q: "The standard hydrogen electrode has potential", o: ["1 V", "0 V", "–1 V", "+1 V"], a: 1 },

  { q: "EMF of a galvanic cell is", o: ["Sum of electrode potentials", "Difference between cathode and anode potentials", "Product of electrode potentials", "Ratio of electrode potentials"], a: 1 },
  { q: "Unit of EMF is", o: ["Ampere", "Coulomb", "Volt", "Ohm"], a: 2 },
  { q: "In Daniell cell, the anode is made of", o: ["Copper", "Zinc", "Platinum", "Iron"], a: 1 },
  { q: "In Daniell cell, electrolyte used at cathode is", o: ["ZnSO₄", "CuSO₄", "H₂SO₄", "NaCl"], a: 1 },
  { q: "Cell potential is maximum when", o: ["Cell is at equilibrium", "No current flows", "Reaction quotient is zero", "Temperature is zero"], a: 1 },

  { q: "Nernst equation relates electrode potential with", o: ["Temperature only", "Pressure only", "Concentration of ions", "Volume"], a: 2 },
  { q: "Nernst equation at 25°C is", o: ["E = E⁰ − 0.0591/n log Q", "E = E⁰ + 0.0591 log Q", "E = E⁰ − RT/nF", "E = E⁰ + RT/nF"], a: 0 },
  { q: "When Q = K, cell potential becomes", o: ["Maximum", "Minimum", "Zero", "Infinite"], a: 2 },
  { q: "Conductance is the reciprocal of", o: ["Resistance", "EMF", "Current", "Voltage"], a: 0 },
  { q: "Unit of conductance is", o: ["Ohm", "Volt", "Siemens", "Ampere"], a: 2 },

  { q: "Specific conductance depends on", o: ["Nature of electrolyte", "Concentration", "Temperature", "All of these"], a: 3 },
  { q: "Molar conductivity increases with dilution because", o: ["Number of ions increases", "Ionic mobility increases", "Temperature increases", "Volume decreases"], a: 1 },
  { q: "Limiting molar conductivity is the conductivity at", o: ["High concentration", "Infinite dilution", "Zero temperature", "High pressure"], a: 1 },
  { q: "Kohlrausch’s law states that", o: ["Conductivity decreases with dilution", "Molar conductivity is additive at infinite dilution", "Resistance is constant", "EMF is additive"], a: 1 },
  { q: "Weak electrolytes show increase in molar conductivity on dilution due to", o: ["Increase in mobility only", "Increase in ionization", "Decrease in viscosity", "Increase in temperature"], a: 1 },

  { q: "Strong electrolytes are almost completely", o: ["Associated", "Ionized", "Neutral", "Insoluble"], a: 1 },
  { q: "Electrolysis is the process of", o: ["Conversion of chemical energy to electrical energy", "Conversion of electrical energy to chemical energy", "Conversion of heat to work", "Conversion of light to energy"], a: 1 },
  { q: "During electrolysis, oxidation occurs at", o: ["Cathode", "Anode", "Electrolyte", "Salt bridge"], a: 1 },
  { q: "Faraday’s first law states that mass deposited is proportional to", o: ["Voltage", "Resistance", "Charge passed", "Time only"], a: 2 },
  { q: "Faraday’s second law relates mass deposited with", o: ["Atomic mass", "Equivalent mass", "Molecular mass", "Density"], a: 1 },

  { q: "One Faraday is equal to", o: ["96500 C", "100000 C", "1 Coulomb", "10⁶ C"], a: 0 },
  { q: "Electrochemical equivalent depends on", o: ["Current", "Time", "Nature of substance", "Voltage"], a: 2 },
  { q: "Rusting of iron is an example of", o: ["Dry corrosion", "Wet corrosion", "Electrolytic corrosion", "Chemical reaction only"], a: 1 },
  { q: "In corrosion of iron, iron acts as", o: ["Cathode", "Anode", "Both", "Neither"], a: 1 },
  { q: "Corrosion can be prevented by", o: ["Painting", "Galvanization", "Alloying", "All of these"], a: 3 },

  { q: "Lead storage battery is a", o: ["Primary cell", "Secondary cell", "Fuel cell", "Dry cell"], a: 1 },
  { q: "Electrolyte used in lead storage battery is", o: ["HCl", "H₂SO₄", "HNO₃", "NaOH"], a: 1 },
  { q: "Fuel cells convert", o: ["Electrical energy to chemical energy", "Chemical energy to electrical energy", "Heat to electricity", "Nuclear energy to electrical energy"], a: 1 },
  { q: "In H₂–O₂ fuel cell, product formed is", o: ["H₂O", "CO₂", "NH₃", "H₂O₂"], a: 0 },
  { q: "Standard electrode potential of a metal indicates its", o: ["Reactivity", "Oxidizing power", "Reducing power", "All of these"], a: 3 }
];

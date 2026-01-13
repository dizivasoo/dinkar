const questions = [
  { q: "A coordination compound consists of", o: ["Only ions", "Only covalent bonds", "Central metal atom/ion and ligands", "Only hydrogen bonds"], a: 2 },
  { q: "The central metal atom in a coordination compound acts as a", o: ["Lewis base", "Lewis acid", "Bronsted acid", "Bronsted base"], a: 1 },
  { q: "Ligands are species which", o: ["Donate electrons", "Accept electrons", "Share protons", "Accept protons"], a: 0 },
  { q: "A ligand that donates two pairs of electrons is called", o: ["Monodentate", "Bidentate", "Tridentate", "Ambidentate"], a: 1 },
  { q: "Which of the following is a bidentate ligand?", o: ["NH₃", "OH⁻", "C₂O₄²⁻", "Cl⁻"], a: 2 },

  { q: "The coordination number of the central atom is equal to", o: ["Oxidation number", "Number of ligands", "Number of donor atoms", "Number of ions"], a: 2 },
  { q: "Which of the following is an ambidentate ligand?", o: ["NH₃", "H₂O", "NO₂⁻", "OH⁻"], a: 2 },
  { q: "The oxidation number of central metal ion in [Fe(CN)₆]⁴⁻ is", o: ["+2", "+3", "+4", "0"], a: 0 },
  { q: "Which ligand can form chelate complexes?", o: ["Monodentate ligand", "Bidentate ligand", "Ambidentate ligand", "Neutral ligand"], a: 1 },
  { q: "The number of ligands directly bonded to metal ion is called", o: ["Oxidation number", "Valency", "Coordination number", "Magnetic number"], a: 2 },

  { q: "Werner’s theory explains", o: ["Magnetic behavior", "Bonding in complexes", "Oxidation states", "Conductance"], a: 1 },
  { q: "According to Werner, primary valencies are", o: ["Ionisable", "Non-ionisable", "Directional", "Variable"], a: 0 },
  { q: "According to Werner, secondary valencies are", o: ["Ionisable", "Non-ionisable", "Non-directional", "Variable"], a: 1 },
  { q: "Which complex shows ionization isomerism?", o: ["[Co(NH₃)₅Cl]SO₄", "[Co(NH₃)₆]Cl₃", "[CoCl₆]³⁻", "[Co(NH₃)₄Cl₂]⁺"], a: 0 },
  { q: "Geometrical isomerism is shown by", o: ["Tetrahedral complexes", "Square planar complexes", "Linear complexes", "All complexes"], a: 1 },

  { q: "Which of the following can show cis–trans isomerism?", o: ["[Pt(NH₃)₂Cl₂]", "[Ni(CO)₄]", "[ZnCl₄]²⁻", "[Ag(NH₃)₂]⁺"], a: 0 },
  { q: "Optical isomerism is shown by", o: ["Planar complexes", "Achiral complexes", "Chiral complexes", "Linear complexes"], a: 2 },
  { q: "Which complex shows optical isomerism?", o: ["[Co(en)₃]³⁺", "[Pt(NH₃)₂Cl₂]", "[Ni(CO)₄]", "[ZnCl₄]²⁻"], a: 0 },
  { q: "Magnetic behavior of complexes depends on", o: ["Coordination number", "Oxidation number", "Unpaired electrons", "Shape"], a: 2 },
  { q: "A complex with no unpaired electrons is", o: ["Paramagnetic", "Ferromagnetic", "Diamagnetic", "Antiferromagnetic"], a: 2 },

  { q: "Strong field ligands cause", o: ["Small splitting", "Large splitting", "No splitting", "Random splitting"], a: 1 },
  { q: "CN⁻ is classified as", o: ["Weak field ligand", "Neutral ligand", "Strong field ligand", "π-donor ligand"], a: 2 },
  { q: "The colour of coordination compounds is due to", o: ["Charge transfer", "d–d transition", "f–f transition", "Nuclear transition"], a: 1 },
  { q: "Which complex is tetrahedral?", o: ["[Ni(CO)₄]", "[Co(NH₃)₆]³⁺", "[PtCl₆]²⁻", "[Fe(CN)₆]³⁻"], a: 0 },
  { q: "Hybridization of central metal in [Ni(CO)₄] is", o: ["dsp²", "sp³", "d²sp³", "sp"], a: 1 },

  { q: "Square planar complexes generally have hybridization", o: ["sp³", "dsp²", "d²sp³", "sp"], a: 1 },
  { q: "Which metal commonly forms square planar complexes?", o: ["Zn²⁺", "Ni²⁺", "Fe²⁺", "Mn²⁺"], a: 1 },
  { q: "The effective atomic number (EAN) of metal in [Ni(CO)₄] is", o: ["28", "30", "36", "40"], a: 2 },
  { q: "Chelation increases the", o: ["Solubility", "Stability of complex", "Colour", "Magnetic moment"], a: 1 },
  { q: "EDTA is a", o: ["Monodentate ligand", "Bidentate ligand", "Hexadentate ligand", "Ambidentate ligand"], a: 2 },

  { q: "The charge on coordination sphere of [Co(NH₃)₆]Cl₃ is", o: ["+3", "–3", "0", "+6"], a: 0 },
  { q: "Which ligand is neutral?", o: ["CN⁻", "Cl⁻", "NH₃", "OH⁻"], a: 2 },
  { q: "The number of unpaired electrons in Fe³⁺ (d⁵) high spin complex is", o: ["1", "2", "3", "5"], a: 3 },
  { q: "Which is a weak field ligand?", o: ["CO", "CN⁻", "NH₃", "H₂O"], a: 3 },
  { q: "Which of the following shows linkage isomerism?", o: ["NO₂⁻", "NH₃", "OH⁻", "H₂O"], a: 0 },

  { q: "The shape of [Co(NH₃)₆]³⁺ is", o: ["Tetrahedral", "Square planar", "Octahedral", "Linear"], a: 2 },
  { q: "Which complex has coordination number 4?", o: ["[Fe(CN)₆]³⁻", "[Ni(CO)₄]", "[Co(en)₃]³⁺", "[Cr(NH₃)₆]³⁺"], a: 1 },
  { q: "Which compound does NOT show geometrical isomerism?", o: ["[Pt(NH₃)₂Cl₂]", "[Co(NH₃)₄Cl₂]⁺", "[Ni(CO)₄]", "[Pt(en)₂Cl₂]²⁺"], a: 2 },
  { q: "Which theory explains magnetic properties of complexes?", o: ["Werner theory", "Valence bond theory", "Crystal field theory", "Molecular orbital theory"], a: 2 },
  { q: "Pairing of electrons in complex ion is favoured by", o: ["Weak ligands", "Strong ligands", "Large metal ion", "Low oxidation state"], a: 1 },

  { q: "Which complex is paramagnetic?", o: ["[Ni(CO)₄]", "[Fe(CN)₆]⁴⁻", "[CoF₆]³⁻", "[Zn(NH₃)₄]²⁺"], a: 2 },
  { q: "The IUPAC name of [Cr(NH₃)₆]Cl₃ is", o: ["Hexaammine chromium(III) chloride", "Hexaammine chromium(II) chloride", "Hexaamine chromium(III) chloride", "Chromium hexaammine trichloride"], a: 0 },
  { q: "Which ligand donates through nitrogen and oxygen atoms?", o: ["CN⁻", "NO₂⁻", "CO", "NH₃"], a: 1 },
  { q: "Which ion causes maximum coagulation according to Hardy–Schulze rule?", o: ["Na⁺", "Ca²⁺", "Al³⁺", "K⁺"], a: 2 },
  { q: "Which complex shows both optical and geometrical isomerism?", o: ["[Pt(NH₃)₂Cl₂]", "[Co(en)₂Cl₂]⁺", "[Ni(CO)₄]", "[ZnCl₄]²⁻"], a: 1 },

  { q: "Which complex is low spin?", o: ["[FeF₆]³⁻", "[Fe(CN)₆]³⁻", "[CoF₆]³⁻", "[MnF₆]³⁻"], a: 1 },
  { q: "The coordination number in [Ag(NH₃)₂]⁺ is", o: ["1", "2", "3", "4"], a: 1 },
  { q: "Which is NOT a chelating ligand?", o: ["en", "EDTA", "NH₃", "Oxalate"], a: 2 },
  { q: "Which metal forms coloured complexes most easily?", o: ["Zn", "Cd", "Hg", "Fe"], a: 3 },
  { q: "Colourless complexes usually contain", o: ["Unpaired electrons", "d⁰ or d¹⁰ configuration", "High oxidation state", "Strong ligands"], a: 1 }
];

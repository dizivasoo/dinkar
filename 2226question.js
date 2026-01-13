const questions = [
  { q: "Surface chemistry deals with the study of phenomena occurring at", o: ["Bulk of substances", "Surface or interface", "Gaseous phase only", "Liquid phase only"], a: 1 },
  { q: "Adsorption is a", o: ["Bulk phenomenon", "Surface phenomenon", "Chemical reaction", "Nuclear reaction"], a: 1 },
  { q: "Absorption differs from adsorption because absorption is a", o: ["Surface phenomenon", "Chemical phenomenon", "Bulk phenomenon", "Physical phenomenon"], a: 2 },
  { q: "The substance adsorbed on the surface is called", o: ["Adsorbent", "Adsorbate", "Solvent", "Colloid"], a: 1 },
  { q: "The substance on which adsorption takes place is called", o: ["Adsorbate", "Adsorbent", "Sol", "Gel"], a: 1 },

  { q: "Physical adsorption is due to", o: ["Chemical bond formation", "Van der Waals forces", "Ionic bonds", "Covalent bonds"], a: 1 },
  { q: "Chemical adsorption involves", o: ["Weak forces", "Multilayer formation", "High activation energy", "Chemical bond formation"], a: 3 },
  { q: "Physical adsorption decreases with increase in", o: ["Pressure", "Surface area", "Temperature", "Adsorbent mass"], a: 2 },
  { q: "Chemical adsorption generally increases with", o: ["Increase in pressure", "Increase in surface area", "Increase in temperature", "Decrease in temperature"], a: 2 },
  { q: "Freundlich adsorption isotherm is given by", o: ["x/m = kP", "x/m = kP¹⁄ⁿ", "x/m = P/k", "x/m = k/P"], a: 1 },

  { q: "Freundlich adsorption isotherm fails at", o: ["Low pressure", "Moderate pressure", "High pressure", "Low temperature"], a: 2 },
  { q: "Langmuir adsorption isotherm assumes", o: ["Multilayer adsorption", "Monolayer adsorption", "No adsorption", "Chemical reaction"], a: 1 },
  { q: "Catalyst increases rate of reaction by", o: ["Increasing temperature", "Decreasing activation energy", "Increasing concentration", "Increasing pressure"], a: 1 },
  { q: "Finely divided metals are good catalysts because they have", o: ["High density", "High melting point", "Large surface area", "High molecular mass"], a: 2 },
  { q: "Poisoning of catalyst occurs due to", o: ["Increase in temperature", "Adsorption of impurities", "Increase in pressure", "Increase in surface area"], a: 1 },

  { q: "Example of homogeneous catalyst is", o: ["Pt in contact process", "Fe in Haber process", "NO in oxidation of SO₂", "Ni in hydrogenation"], a: 2 },
  { q: "Example of heterogeneous catalyst is", o: ["H⁺ ions in ester hydrolysis", "NO in gas phase", "Fe in Haber process", "Enzymes"], a: 2 },
  { q: "Enzymes are", o: ["Inorganic catalysts", "Synthetic catalysts", "Biological catalysts", "Metallic catalysts"], a: 2 },
  { q: "Enzymes are highly", o: ["Non-specific", "Stable at high temperature", "Specific in nature", "Acidic only"], a: 2 },
  { q: "Colloidal particles have size range of", o: ["< 1 nm", "1–1000 nm", "> 1000 nm", "> 1 mm"], a: 1 },

  { q: "Colloidal solution is also called", o: ["True solution", "Suspension", "Sol", "Emulsion only"], a: 2 },
  { q: "Tyndall effect is shown by", o: ["True solutions", "Suspensions", "Colloids", "Gases"], a: 2 },
  { q: "Tyndall effect is due to", o: ["Reflection of light", "Refraction of light", "Scattering of light", "Absorption of light"], a: 2 },
  { q: "Brownian motion is due to", o: ["Gravity", "Electrical charge", "Random collision with medium molecules", "Light scattering"], a: 2 },
  { q: "Colloidal particles carry", o: ["No charge", "Positive charge only", "Negative charge only", "Electrical charge"], a: 3 },

  { q: "Stability of sol is due to", o: ["Brownian motion", "Electrical charge", "Both A and B", "Gravity"], a: 2 },
  { q: "Coagulation of sol can be caused by", o: ["Addition of electrolyte", "Heating", "Mixing with opposite sol", "All of these"], a: 3 },
  { q: "Hardy–Schulze rule states that coagulating power increases with", o: ["Decrease in charge of ion", "Increase in charge of ion", "Increase in size of ion", "Decrease in temperature"], a: 1 },
  { q: "Gold sol is prepared by", o: ["Condensation method", "Reduction method", "Peptization", "Dialysis"], a: 1 },
  { q: "Emulsion is a colloid of", o: ["Solid in liquid", "Liquid in liquid", "Gas in liquid", "Solid in gas"], a: 1 },

  { q: "Milk is an example of", o: ["Foam", "Gel", "Emulsion", "Sol"], a: 2 },
  { q: "Emulsifying agents help by", o: ["Increasing surface tension", "Decreasing surface tension", "Increasing density", "Decreasing viscosity"], a: 1 },
  { q: "Dialysis is used to", o: ["Prepare colloids", "Purify colloids", "Coagulate colloids", "Destroy colloids"], a: 1 },
  { q: "Ultrafiltration uses", o: ["Ordinary filter paper", "Semipermeable membrane", "Cellophane membrane", "Glass wool"], a: 1 },
  { q: "Lyophilic sols are", o: ["Less stable", "Easily coagulated", "Highly stable", "Neutral"], a: 2 }
];

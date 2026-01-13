const questions = [
  { q: "Chemical kinetics deals with the study of", o: ["Energy changes in reactions", "Rate of chemical reactions", "Equilibrium constant", "Chemical bonding"], a: 1 },
  { q: "Rate of a reaction is defined as the", o: ["Change in temperature per unit time", "Change in concentration per unit time", "Change in pressure per unit time", "Change in volume per unit time"], a: 1 },
  { q: "Unit of rate of reaction is", o: ["mol L⁻¹", "mol L⁻¹ s⁻¹", "mol s⁻¹", "L mol⁻¹ s⁻¹"], a: 1 },
  { q: "Average rate of reaction is measured over", o: ["Infinitesimally small time", "Very long time", "Finite time interval", "Zero time"], a: 2 },
  { q: "Instantaneous rate of reaction is equal to", o: ["Average rate", "Rate at a given instant", "Zero rate", "Maximum rate"], a: 1 },

  { q: "Rate law is the expression that relates rate with", o: ["Concentration of reactants", "Concentration of products", "Temperature", "Pressure"], a: 0 },
  { q: "Rate law is determined experimentally because it depends on", o: ["Stoichiometry", "Mechanism of reaction", "Thermodynamics", "Temperature"], a: 1 },
  { q: "Order of reaction is the sum of powers of", o: ["Products", "Reactants in rate law", "Concentration", "Time"], a: 1 },
  { q: "Order of a reaction can be", o: ["Only whole number", "Only zero", "Fractional", "Any real number"], a: 3 },
  { q: "A zero-order reaction has rate independent of", o: ["Temperature", "Pressure", "Concentration", "Catalyst"], a: 2 },

  { q: "Unit of rate constant for first-order reaction is", o: ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "mol⁻¹ L s⁻¹"], a: 1 },
  { q: "Unit of rate constant for second-order reaction is", o: ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "mol⁻² L² s⁻¹"], a: 2 },
  { q: "Half-life of a first-order reaction is", o: ["Directly proportional to initial concentration", "Inversely proportional to initial concentration", "Independent of initial concentration", "Zero"], a: 2 },
  { q: "Half-life of zero-order reaction is", o: ["Independent of concentration", "Proportional to initial concentration", "Inversely proportional to initial concentration", "Infinite"], a: 1 },
  { q: "Half-life of a second-order reaction is", o: ["Independent of initial concentration", "Proportional to initial concentration", "Inversely proportional to initial concentration", "Zero"], a: 2 },

  { q: "Rate constant depends on", o: ["Concentration", "Pressure", "Temperature", "Time"], a: 2 },
  { q: "Arrhenius equation relates rate constant with", o: ["Concentration", "Temperature", "Pressure", "Volume"], a: 1 },
  { q: "Arrhenius equation is", o: ["k = Ae^(-Ea/RT)", "k = Ea/RT", "k = RT/Ea", "k = Ae^(RT/Ea)"], a: 0 },
  { q: "Activation energy is the energy required to", o: ["Break bonds in products", "Form products", "Start a chemical reaction", "Stop a reaction"], a: 2 },
  { q: "Catalyst increases reaction rate by", o: ["Increasing temperature", "Decreasing activation energy", "Increasing concentration", "Increasing pressure"], a: 1 },

  { q: "In presence of catalyst, activation energy", o: ["Increases", "Remains same", "Decreases", "Becomes zero"], a: 2 },
  { q: "Rate constant of a reaction becomes double when temperature increases by", o: ["1 K", "5 K", "10 K", "50 K"], a: 2 },
  { q: "Molecularity of a reaction is", o: ["Experimental quantity", "Always equal to order", "Number of molecules colliding", "Always fractional"], a: 2 },
  { q: "Molecularity can never be", o: ["One", "Two", "Three", "Zero"], a: 3 },
  { q: "Pseudo-first order reaction appears first order due to", o: ["Equal concentrations", "Large excess of one reactant", "High temperature", "Catalyst"], a: 1 },

  { q: "Example of pseudo-first order reaction is", o: ["Hydrolysis of ester", "Decomposition of NH₃", "Combination of H₂ and I₂", "Decomposition of H₂O₂"], a: 0 },
  { q: "For first-order reaction, plot of ln[A] vs time is", o: ["Parabolic", "Straight line", "Hyperbola", "Circle"], a: 1 },
  { q: "Slope of ln[A] vs time graph for first-order reaction is", o: ["+k", "–k", "1/k", "k²"], a: 1 },
  { q: "Time taken for completion of zero-order reaction is", o: ["Infinite", "Independent of concentration", "Directly proportional to initial concentration", "Zero"], a: 2 },
  { q: "For first-order reaction, rate constant", o: ["Decreases with time", "Increases with time", "Remains constant", "Becomes zero"], a: 2 },

  { q: "Collision theory explains reaction rate in terms of", o: ["Concentration", "Pressure", "Effective collisions", "Temperature"], a: 2 },
  { q: "Effective collisions must have", o: ["High energy only", "Proper orientation only", "Both sufficient energy and proper orientation", "Low energy"], a: 2 },
  { q: "Frequency factor (A) depends on", o: ["Temperature only", "Orientation and frequency of collisions", "Activation energy", "Pressure only"], a: 1 },
  { q: "Increase in temperature increases rate constant because", o: ["Ea increases", "More molecules have energy ≥ Ea", "Concentration increases", "Pressure increases"], a: 1 },
  { q: "Order of reaction is zero when", o: ["Rate depends on concentration", "Rate does not depend on concentration", "Reaction is fast", "Reaction is slow"], a: 1 }
];

const questions = [
{ q: "Wave optics is based on", o: ["Ray theory", "Particle nature of light", "Wave nature of light", "Quantum theory"], a: 2 },
{ q: "Interference of light occurs due to", o: ["Diffraction", "Superposition of waves", "Polarization", "Reflection"], a: 1 },
{ q: "In Young’s double slit experiment (YDSE), bright fringes are formed due to", o: ["Destructive interference", "Diffraction", "Constructive interference", "Reflection"], a: 2 },
{ q: "Condition for constructive interference is", o: ["Path difference = nλ", "Path difference = (2n+1)λ/2", "Path difference = λ/4", "Path difference = λ"], a: 0 },
{ q: "Condition for destructive interference is", o: ["nλ", "(2n+1)λ/2", "λ", "λ/4"], a: 1 },

{ q: "Fringe width in YDSE is given by", o: ["λD/d", "dD/λ", "λd/D", "D/λd"], a: 0 },
{ q: "Fringe width depends on", o: ["Wavelength", "Distance between slits", "Distance from screen", "All of these"], a: 3 },
{ q: "If wavelength is increased, fringe width", o: ["Decreases", "Increases", "Remains same", "Becomes zero"], a: 1 },
{ q: "If distance between slits is increased, fringe width", o: ["Increases", "Decreases", "Remains constant", "Becomes infinite"], a: 1 },
{ q: "Coherent sources have", o: ["Same wavelength", "Same amplitude", "Constant phase difference", "Same intensity"], a: 2 },

{ q: "Two independent sources cannot produce sustained interference because", o: ["Their amplitudes are different", "Their frequencies differ", "Phase difference is not constant", "Light is monochromatic"], a: 2 },
{ q: "Which phenomenon proves wave nature of light?", o: ["Photoelectric effect", "Interference", "Compton effect", "Black body radiation"], a: 1 },
{ q: "Diffraction of light is most noticeable when", o: ["Slit width ≫ wavelength", "Slit width ≪ wavelength", "Slit width ≈ wavelength", "Slit width = 0"], a: 2 },
{ q: "Diffraction occurs due to", o: ["Reflection", "Refraction", "Bending of waves", "Absorption"], a: 2 },
{ q: "In single slit diffraction, central maximum is", o: ["Bright and narrow", "Dark and wide", "Bright and wide", "Dark and narrow"], a: 2 },

{ q: "Width of central maximum in diffraction is", o: ["λD/a", "2λD/a", "λa/D", "D/λa"], a: 1 },
{ q: "Diffraction pattern depends on", o: ["Wavelength", "Slit width", "Distance of screen", "All"], a: 3 },
{ q: "Polarization of light shows that light is", o: ["Longitudinal wave", "Transverse wave", "Mechanical wave", "Sound wave"], a: 1 },
{ q: "Which waves cannot be polarized?", o: ["Light waves", "X-rays", "Sound waves", "Radio waves"], a: 2 },
{ q: "Polarization by reflection occurs at", o: ["Normal incidence", "Critical angle", "Brewster’s angle", "Total internal reflection"], a: 2 },

{ q: "Brewster’s law is", o: ["tanθ = μ", "sinθ = μ", "cosθ = μ", "μ = 1/tanθ"], a: 0 },
{ q: "At Brewster’s angle, reflected and refracted rays are", o: ["Parallel", "Anti-parallel", "Perpendicular", "Coincident"], a: 2 },
{ q: "Polarizer is used to", o: ["Increase intensity", "Decrease wavelength", "Convert unpolarized light to polarized", "Change frequency"], a: 2 },
{ q: "Unpolarized light has vibrations", o: ["In one direction", "In two perpendicular directions", "In all directions perpendicular to propagation", "Parallel to propagation"], a: 2 },
{ q: "The intensity of light after passing through one polarizer becomes", o: ["I", "I/4", "I/2", "Zero"], a: 2 },

{ q: "According to Malus’ law, transmitted intensity is", o: ["I = I₀ sin²θ", "I = I₀ cos²θ", "I = I₀ tan²θ", "I = I₀"], a: 1 },
{ q: "When two polarizers are crossed, intensity becomes", o: ["I", "I/2", "I/4", "Zero"], a: 3 },
{ q: "Interference fringes are equally spaced because", o: ["λ is constant", "Path difference changes uniformly", "Distance is large", "Slits are narrow"], a: 1 },
{ q: "Which colour produces maximum fringe width?", o: ["Violet", "Blue", "Green", "Red"], a: 3 },
{ q: "Which phenomenon explains colours of soap bubbles?", o: ["Diffraction", "Refraction", "Interference", "Polarization"], a: 2 },

{ q: "Thin film interference depends on", o: ["Thickness", "Wavelength", "Refractive index", "All"], a: 3 },
{ q: "For destructive interference in reflected light from thin film", o: ["2μt = nλ", "2μt = (2n+1)λ/2", "2μt = λ", "2μt = nλ/2"], a: 1 },
{ q: "Which phenomenon is not explained by wave optics?", o: ["Interference", "Diffraction", "Polarization", "Photoelectric effect"], a: 3 },
{ q: "Huygens’ principle explains", o: ["Reflection only", "Refraction only", "Interference only", "Reflection and refraction"], a: 3 },
{ q: "According to Huygens, wavefront is", o: ["A line", "A point", "A surface of constant phase", "A ray"], a: 2 },

{ q: "Plane wavefront is produced by", o: ["Point source", "Line source", "Very distant source", "Extended source"], a: 2 },
{ q: "Spherical wavefront is produced by", o: ["Point source", "Line source", "Plane source", "Distant source"], a: 0 },
{ q: "Cylindrical wavefront is produced by", o: ["Point source", "Line source", "Plane source", "Circular source"], a: 1 },
{ q: "The phenomenon of bending of light around obstacles is called", o: ["Interference", "Polarization", "Diffraction", "Reflection"], a: 2 },
{ q: "Which factor does NOT affect fringe width?", o: ["Wavelength", "Distance between slits", "Distance from screen", "Intensity of light"], a: 3 },

{ q: "For interference, sources must be", o: ["Monochromatic", "Coherent", "Polarized", "Bright"], a: 1 },
{ q: "In diffraction, maxima are", o: ["Equally intense", "Unequal in intensity", "Equal width", "Invisible"], a: 1 },
{ q: "The central diffraction maximum is", o: ["Least intense", "Most intense", "Invisible", "Same as others"], a: 1 },
{ q: "In YDSE, if one slit is closed", o: ["Fringes disappear", "Diffraction occurs", "Brightness doubles", "Nothing changes"], a: 1 },
{ q: "Polarization proves that light waves are", o: ["Longitudinal", "Transverse", "Mechanical", "Sound"], a: 1 },

{ q: "The fringe width becomes infinite when", o: ["d → 0", "D → 0", "λ → 0", "μ → 1"], a: 0 },
{ q: "Phase difference of π leads to", o: ["Constructive interference", "Destructive interference", "Polarization", "Diffraction"], a: 1 },
{ q: "In YDSE, dark fringes are formed at", o: ["nλ", "(2n+1)λ/2", "λ", "Zero"], a: 1 },
{ q: "Light used in interference experiments should be", o: ["White light", "Monochromatic", "Infrared", "Ultraviolet"], a: 1 },
{ q: "Wave optics mainly deals with", o: ["Rectilinear propagation", "Laws of reflection", "Superposition of light waves", "Reflection only"], a: 2 }
];

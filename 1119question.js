const questions = [
{ q: "The phenomenon responsible for the formation of image by mirrors is", o: ["Refraction", "Reflection", "Diffraction", "Interference"], a: 1 },
{ q: "The focal length of a plane mirror is", o: ["f", "2f", "Infinite", "Zero"], a: 2 },
{ q: "Image formed by a plane mirror is always", o: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"], a: 1 },
{ q: "The relation between focal length and radius of curvature of a spherical mirror is", o: ["f = R", "f = R/2", "f = 2R", "f = R²"], a: 1 },
{ q: "Concave mirror forms a real image when object is placed", o: ["Between pole and focus", "At focus", "Beyond focus", "At pole"], a: 2 },

{ q: "Convex mirror always forms image which is", o: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"], a: 1 },
{ q: "Magnification produced by plane mirror is", o: ["+1", "–1", ">1", "<1"], a: 0 },
{ q: "Unit of power of a lens is", o: ["Metre", "Dioptre", "Joule", "Watt"], a: 1 },
{ q: "Power of concave lens is", o: ["Positive", "Negative", "Zero", "Infinite"], a: 1 },
{ q: "A convex lens is also called", o: ["Diverging lens", "Converging lens", "Plane lens", "Cylindrical lens"], a: 1 },

{ q: "The lens maker’s formula is", o: ["1/f = 1/v + 1/u", "1/f = (μ−1)(1/R1 − 1/R2)", "m = v/u", "f = R/2"], a: 1 },
{ q: "Image formed by concave lens is always", o: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"], a: 1 },
{ q: "The magnification produced by a lens is", o: ["u/v", "v/u", "f/u", "f/v"], a: 1 },
{ q: "Total internal reflection occurs when light travels from", o: ["Rarer to denser medium", "Denser to rarer medium", "Same medium", "Vacuum to medium"], a: 1 },
{ q: "The critical angle depends on", o: ["Wavelength only", "Nature of medium", "Angle of incidence", "Distance"], a: 1 },

{ q: "Mirage is formed due to", o: ["Reflection", "Refraction", "Total internal reflection", "Diffraction"], a: 2 },
{ q: "Optical fibre works on the principle of", o: ["Refraction", "Reflection", "Total internal reflection", "Dispersion"], a: 2 },
{ q: "Dispersion of light occurs due to", o: ["Reflection", "Different wavelengths", "Same speed of all colours", "Absorption"], a: 1 },
{ q: "Which colour has maximum deviation in a prism?", o: ["Red", "Yellow", "Violet", "Green"], a: 2 },
{ q: "Refractive index of a medium is maximum for", o: ["Red light", "Yellow light", "Violet light", "White light"], a: 2 },

{ q: "The defect of eye in which distant objects are not seen clearly is", o: ["Hypermetropia", "Myopia", "Presbyopia", "Astigmatism"], a: 1 },
{ q: "Myopia is corrected by using", o: ["Convex lens", "Concave lens", "Cylindrical lens", "Plane lens"], a: 1 },
{ q: "Hypermetropia is corrected by", o: ["Concave lens", "Convex lens", "Cylindrical lens", "Prism"], a: 1 },
{ q: "Presbyopia occurs due to", o: ["Increase in focal length of eye lens", "Decrease in focal length", "Eye infection", "Colour blindness"], a: 0 },
{ q: "Near point of normal human eye is", o: ["50 cm", "25 cm", "100 cm", "10 cm"], a: 1 },

{ q: "Far point of normal eye is", o: ["25 cm", "1 m", "Infinity", "Zero"], a: 2 },
{ q: "Magnifying power of simple microscope is maximum when image is formed at", o: ["Infinity", "Near point", "Focus", "Optical centre"], a: 1 },
{ q: "Simple microscope uses", o: ["Concave lens", "Convex lens", "Plane mirror", "Prism"], a: 1 },
{ q: "Astronomical telescope is used to observe", o: ["Nearby objects", "Distant objects", "Microscopic objects", "Internal organs"], a: 1 },
{ q: "Objective lens of telescope has", o: ["Small focal length", "Large focal length", "Zero focal length", "Negative focal length"], a: 1 },

{ q: "Eyepiece of telescope acts as", o: ["Objective", "Magnifier", "Mirror", "Prism"], a: 1 },
{ q: "Compound microscope has", o: ["One lens", "Two convex lenses", "Two concave lenses", "One convex, one concave"], a: 1 },
{ q: "Resolving power of optical instrument depends on", o: ["Focal length", "Aperture", "Distance", "Colour"], a: 1 },
{ q: "Angular magnification of telescope increases with", o: ["Decrease in focal length of objective", "Increase in focal length of objective", "Increase in focal length of eyepiece", "Decrease in wavelength"], a: 1 },
{ q: "The colour of sky appears blue due to", o: ["Reflection", "Refraction", "Scattering", "Dispersion"], a: 2 },

{ q: "Sun appears red at sunrise and sunset due to", o: ["Dispersion", "Scattering", "Reflection", "Refraction"], a: 1 },
{ q: "Lateral inversion occurs in", o: ["Convex mirror", "Concave mirror", "Plane mirror", "Lens"], a: 2 },
{ q: "Unit of refractive index is", o: ["m", "m/s", "No unit", "kg"], a: 2 },
{ q: "Refractive index is defined as", o: ["v/c", "c/v", "c+v", "c×v"], a: 1 },
{ q: "Power of lens is zero when focal length is", o: ["Zero", "One", "Infinite", "Negative"], a: 2 },

{ q: "Image formed by concave mirror at centre of curvature is", o: ["Virtual, erect", "Real, inverted, same size", "Real, inverted, diminished", "Virtual, erect, enlarged"], a: 1 },
{ q: "Image formed by convex lens when object is at focus is", o: ["At focus", "At infinity", "Between F and 2F", "At 2F"], a: 1 },
{ q: "Optical centre of lens is a point", o: ["Where light is reflected", "Where light passes undeviated", "Where light is absorbed", "Where light is scattered"], a: 1 },
{ q: "Which instrument uses a prism?", o: ["Microscope", "Telescope", "Periscope", "Kaleidoscope"], a: 2 },
{ q: "Least count of eye is", o: ["25 cm", "1°", "1 arc minute", "Zero"], a: 2 },

{ q: "The deviation produced by a prism depends on", o: ["Angle of incidence", "Angle of prism", "Refractive index", "All"], a: 3 },
{ q: "Which mirror is used as rear-view mirror?", o: ["Plane", "Concave", "Convex", "Parabolic"], a: 2 },
{ q: "Magnification produced by concave mirror can be", o: ["Only positive", "Only negative", "Both positive and negative", "Zero"], a: 2 },
{ q: "A virtual image is formed when reflected rays", o: ["Actually meet", "Appear to meet", "Diverge", "Are parallel"], a: 1 },
{ q: "Chromatic aberration occurs in", o: ["Mirrors", "Lenses", "Plane mirrors", "Prisms only"], a: 1 }
];


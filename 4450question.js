const questions = [
  { q: "Evolution is the process of", o: ["Sudden appearance of organisms","Gradual change in organisms over generations","Change in individual organism","Change in ecosystem only"], a: 1 },

  { q: "The theory of evolution by natural selection was proposed by", o: ["Lamarck","Darwin","De Vries","Mendel"], a: 1 },

  { q: "Darwin explained evolution based on", o: ["Inheritance of acquired characters","Mutation","Natural selection","Genetic drift"], a: 2 },

  { q: "Lamarckism is based on", o: ["Survival of the fittest","Use and disuse of organs","Natural selection","Mutation"], a: 1 },

  { q: "According to Lamarck, acquired characters are", o: ["Non-heritable","Heritable","Harmful","Temporary"], a: 1 },

  { q: "Example supporting Lamarckism is", o: ["Long neck of giraffe","Wings of birds","Peppered moth","Industrial melanism"], a: 0 },

  { q: "Darwin’s finches showed variation in", o: ["Wing size","Tail length","Beak size","Body colour"], a: 2 },

  { q: "Adaptive radiation is best explained by", o: ["Industrial melanism","Darwin’s finches","Fossils","Homologous organs"], a: 1 },

  { q: "Homologous organs indicate", o: ["Same function","Same origin","No relation","Same habitat"], a: 1 },

  { q: "Analogous organs indicate", o: ["Same origin","Same structure","Different origin, same function","Same origin, different function"], a: 2 },

  { q: "Wings of bird and wings of insect are", o: ["Homologous","Analogous","Vestigial","Rudimentary"], a: 1 },

  { q: "Forelimbs of human, whale and bat are", o: ["Analogous","Vestigial","Homologous","Rudimentary"], a: 2 },

  { q: "Vestigial organs are", o: ["Fully functional","Non-functional remnants","Newly formed organs","Essential organs"], a: 1 },

  { q: "Example of vestigial organ in humans is", o: ["Heart","Appendix","Lungs","Liver"], a: 1 },

  { q: "Fossils are found in", o: ["Igneous rocks","Sedimentary rocks","Metamorphic rocks","Volcanic rocks"], a: 1 },

  { q: "Study of fossils is called", o: ["Taxonomy","Paleontology","Embryology","Ecology"], a: 1 },

  { q: "The age of fossils is determined by", o: ["Carbon dating","Potassium dating","Radiometric dating","All of these"], a: 3 },

  { q: "Industrial melanism is an example of", o: ["Mutation","Genetic drift","Natural selection","Artificial selection"], a: 2 },

  { q: "Peppered moth example supports", o: ["Lamarckism","Darwinism","Mutation theory","Pangenesis"], a: 1 },

  { q: "The original colour of peppered moth was", o: ["Black","White","Brown","Grey"], a: 1 },

  { q: "Hardy–Weinberg principle states that", o: ["Allele frequency changes constantly","Evolution occurs rapidly","Allele frequency remains constant","Mutation is absent"], a: 2 },

  { q: "Conditions for Hardy–Weinberg equilibrium include", o: ["No mutation","Random mating","Large population","All of these"], a: 3 },

  { q: "Hardy–Weinberg equation is", o: ["p² + q² = 1","p + q = 1","p² + 2pq + q² = 1","2p + q = 1"], a: 2 },

  { q: "Gene frequency changes due to", o: ["Mutation","Migration","Genetic drift","All of these"], a: 3 },

  { q: "Sudden change in allele frequency in small population is called", o: ["Natural selection","Gene flow","Genetic drift","Mutation"], a: 2 },

  { q: "Founder effect is a type of", o: ["Mutation","Genetic drift","Gene flow","Natural selection"], a: 1 },

  { q: "Artificial selection is carried out by", o: ["Nature","Humans","Animals","Environment"], a: 1 },

  { q: "Evolution of different species from a common ancestor is called", o: ["Divergent evolution","Convergent evolution","Parallel evolution","Co-evolution"], a: 0 },

  { q: "Development of similar traits in unrelated organisms is", o: ["Divergent evolution","Adaptive radiation","Convergent evolution","Parallel evolution"], a: 2 },

  { q: "Wings of birds and bats show", o: ["Convergent evolution","Divergent evolution","Adaptive radiation","Parallel evolution"], a: 0 },

  { q: "Evolution of horse is an example of", o: ["Convergent evolution","Divergent evolution","Adaptive radiation","Parallel evolution"], a: 1 },

  { q: "The connecting link between reptiles and birds is", o: ["Archaeopteryx","Peripatus","Lungfish","Duck-billed platypus"], a: 0 },

  { q: "The connecting link between annelida and arthropoda is", o: ["Limulus","Peripatus","Balanoglossus","Nereis"], a: 1 },

  { q: "The connecting link between fishes and amphibians is", o: ["Frog","Lungfish","Salamander","Toad"], a: 1 },

  { q: "Human evolution occurred in", o: ["Africa","Asia","Europe","Australia"], a: 0 },

  { q: "The earliest hominid was", o: ["Homo sapiens","Homo habilis","Australopithecus","Homo erectus"], a: 2 },

  { q: "Cro-Magnon man belonged to", o: ["Homo habilis","Homo erectus","Homo sapiens","Neanderthal"], a: 2 },

  { q: "Brain size increased progressively during", o: ["Plant evolution","Human evolution","Fish evolution","Bird evolution"], a: 1 },

  { q: "Modern humans appeared about", o: ["5 million years ago","2 million years ago","40,000 years ago","100,000 years ago"], a: 3 },

  { q: "Neanderthal man had brain size about", o: ["650 cc","900 cc","1400 cc","1600 cc"], a: 2 },

  { q: "Hominoids include", o: ["Monkeys","Apes and humans","Only humans","Only apes"], a: 1 },

  { q: "Dryopithecus was", o: ["More man-like","More ape-like","Modern human","Reptile"], a: 1 },

  { q: "Ramapithecus was", o: ["More ape-like","More man-like","Reptilian","Bird-like"], a: 1 },

  { q: "Urey–Miller experiment supports", o: ["Biogenesis","Abiogenesis","Pangenesis","Natural selection"], a: 1 },

  { q: "Urey–Miller experiment produced", o: ["Nucleic acids","Proteins","Amino acids","Lipids"], a: 2 },

  { q: "The first form of life was", o: ["Aerobic","Photosynthetic","Chemoheterotrophic","Multicellular"], a: 2 },

  { q: "First photosynthetic organisms were", o: ["Algae","Cyanobacteria","Bryophytes","Fungi"], a: 1 },

  { q: "Oxygen in atmosphere was released by", o: ["Algae","Fungi","Cyanobacteria","Bacteria only"], a: 2 },

  { q: "Evolution of eukaryotes occurred after", o: ["Prokaryotes","Multicellular organisms","Plants","Animals"], a: 0 },

  { q: "Evolution is a", o: ["Random process","Continuous process","Discontinuous process","Temporary process"], a: 1 }
];

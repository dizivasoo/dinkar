const questions = [
  { q: "DNA was first isolated by", o: ["Watson","Crick","Friedrich Miescher","Griffith"], a: 2 },
  { q: "DNA is a polymer of", o: ["Amino acids","Nucleotides","Fatty acids","Sugars"], a: 1 },
  { q: "A nucleotide consists of", o: ["Sugar + base","Sugar + phosphate","Base + phosphate","Sugar + base + phosphate"], a: 3 },
  { q: "The sugar present in DNA is", o: ["Ribose","Deoxyribose","Glucose","Fructose"], a: 1 },
  { q: "Nitrogenous bases present in DNA are", o: ["A, U, G, C","A, T, G, C","A, U, G, T","A, C, U, T"], a: 1 },

  { q: "Purine bases are", o: ["Adenine and Thymine","Guanine and Cytosine","Adenine and Guanine","Thymine and Cytosine"], a: 2 },
  { q: "Pyrimidine bases are", o: ["A and G","G and C","A and T","T and C"], a: 3 },
  { q: "The bond between two nucleotides is", o: ["Hydrogen bond","Glycosidic bond","Peptide bond","Phosphodiester bond"], a: 3 },
  { q: "DNA strands are held together by", o: ["Ionic bonds","Covalent bonds","Hydrogen bonds","Peptide bonds"], a: 2 },
  { q: "According to Chargaff’s rule", o: ["A = T and G = C","A = G and T = C","A = C and G = T","All bases are equal"], a: 0 },

  { q: "The DNA double helix model was proposed by", o: ["Hershey and Chase","Watson and Crick","Franklin and Wilkins","Meselson and Stahl"], a: 1 },
  { q: "The diameter of DNA double helix is", o: ["10 Å","20 Å","34 Å","3.4 Å"], a: 1 },
  { q: "Distance between two base pairs in DNA is", o: ["20 Å","10 Å","3.4 Å","34 Å"], a: 2 },
  { q: "One complete turn of DNA helix contains", o: ["5 base pairs","8 base pairs","10 base pairs","20 base pairs"], a: 2 },
  { q: "The experiment that proved DNA is genetic material was", o: ["Griffith’s experiment","Avery’s experiment","Hershey–Chase experiment","Meselson–Stahl experiment"], a: 2 },

  { q: "Griffith’s experiment was done on", o: ["Mouse","Frog","Rat","Rabbit"], a: 0 },
  { q: "The transforming principle was identified as DNA by", o: ["Griffith","Avery, MacLeod and McCarty","Watson and Crick","Meselson and Stahl"], a: 1 },
  { q: "DNA replication is", o: ["Conservative","Dispersive","Semi-conservative","Random"], a: 2 },
  { q: "Semi-conservative replication was proved by", o: ["Watson and Crick","Hershey and Chase","Meselson and Stahl","Franklin and Wilkins"], a: 2 },
  { q: "Meselson and Stahl used isotope", o: ["¹²C","¹⁴C","¹⁵N","³²P"], a: 2 },

  { q: "DNA replication occurs during", o: ["G₁ phase","G₂ phase","S phase","M phase"], a: 2 },
  { q: "Enzyme responsible for DNA replication is", o: ["RNA polymerase","DNA polymerase","Ligase","Helicase"], a: 1 },
  { q: "Enzyme that unwinds DNA helix is", o: ["Ligase","Polymerase","Helicase","Primase"], a: 2 },
  { q: "Okazaki fragments are formed on", o: ["Leading strand","Lagging strand","Both strands","Template strand"], a: 1 },
  { q: "RNA primer is synthesized by", o: ["DNA polymerase","RNA polymerase","Primase","Ligase"], a: 2 },

  { q: "The enzyme that joins Okazaki fragments is", o: ["Helicase","Ligase","Polymerase","Primase"], a: 1 },
  { q: "Transcription occurs in", o: ["Cytoplasm","Ribosome","Nucleus","Mitochondria"], a: 2 },
  { q: "The enzyme required for transcription is", o: ["DNA polymerase","RNA polymerase","Ligase","Helicase"], a: 1 },
  { q: "The coding strand of DNA is also called", o: ["Template strand","Antisense strand","Sense strand","Non-coding strand"], a: 2 },
  { q: "RNA differs from DNA by having", o: ["Thymine","Deoxyribose sugar","Ribose sugar","Double strand"], a: 2 },

  { q: "mRNA carries information for", o: ["DNA synthesis","Protein synthesis","Lipid synthesis","Cell division"], a: 1 },
  { q: "tRNA is also called", o: ["Messenger RNA","Adapter molecule","Ribosomal RNA","Structural RNA"], a: 1 },
  { q: "The anticodon is present on", o: ["mRNA","tRNA","rRNA","DNA"], a: 1 },
  { q: "Translation occurs on", o: ["Nucleus","Ribosome","Mitochondria","Lysosome"], a: 1 },
  { q: "Start codon is", o: ["UAA","UAG","AUG","UGA"], a: 2 },

  { q: "Stop codons include", o: ["AUG","UAA, UAG, UGA","GUG","AAA"], a: 1 },
  { q: "Genetic code is", o: ["Ambiguous","Overlapping","Universal","Continuous"], a: 2 },
  { q: "One codon codes for", o: ["One nucleotide","One amino acid","Two amino acids","Many proteins"], a: 1 },
  { q: "Total number of codons is", o: ["20","61","64","60"], a: 2 },
  { q: "Genetic code is degenerate because", o: ["Same codon codes multiple amino acids","One amino acid is coded by many codons","Codons overlap","Codons have gaps"], a: 1 },

  { q: "Mutation is", o: ["Gradual change","Sudden heritable change","Non-heritable change","Environmental change"], a: 1 },
  { q: "Point mutation affects", o: ["Whole chromosome","Single base pair","Whole gene","Whole genome"], a: 1 },
  { q: "Sickle cell anaemia is caused due to", o: ["Insertion","Deletion","Substitution","Duplication"], a: 2 },
  { q: "Transcription unit consists of", o: ["Promoter only","Gene only","Promoter, structural gene, terminator","Exons only"], a: 2 },
  { q: "Lac operon is an example of", o: ["Eukaryotic regulation","Positive regulation","Negative regulation","Both B and C"], a: 3 },

  { q: "The regulator gene of lac operon produces", o: ["Enzyme","Repressor protein","mRNA","tRNA"], a: 1 },
  { q: "Lac operon is switched ON when", o: ["Lactose is absent","Lactose is present","Glucose is absent","Both B and C"], a: 1 },
  { q: "The inducer of lac operon is", o: ["Glucose","Galactose","Lactose","Allolactose"], a: 3 },
  { q: "Exons are", o: ["Non-coding sequences","Coding sequences","Introns","Junk DNA"], a: 1 },
  { q: "Introns are removed during", o: ["Translation","Replication","RNA splicing","Transcription initiation"], a: 2 },

  { q: "RNA splicing occurs in", o: ["Cytoplasm","Ribosome","Nucleus","Golgi"], a: 2 },
  { q: "Reverse transcription is synthesis of", o: ["RNA from DNA","DNA from RNA","Protein from RNA","RNA from protein"], a: 1 },
  { q: "Reverse transcriptase enzyme is found in", o: ["Bacteria","Plants","Retroviruses","Fungi"], a: 2 },
  { q: "The central dogma was proposed by", o: ["Watson","Crick","Mendel","Franklin"], a: 1 },
  { q: "Central dogma represents flow of information from", o: ["RNA → DNA → Protein","DNA → RNA → Protein","Protein → RNA → DNA","RNA → Protein → DNA"], a: 1 },

  { q: "Histones are", o: ["Acidic proteins","Neutral proteins","Basic proteins","Enzymes"], a: 2 },
  { q: "DNA is negatively charged due to", o: ["Nitrogen bases","Sugar","Phosphate group","Hydrogen bonds"], a: 2 },
  { q: "Euchromatin is", o: ["Tightly packed","Inactive DNA","Lightly packed","Non-functional"], a: 2 },
  { q: "Heterochromatin is", o: ["Transcriptionally active","Lightly packed","Tightly packed","Coding DNA"], a: 2 },
  { q: "Nucleosome consists of DNA wrapped around", o: ["RNA","4 histone proteins","8 histone proteins","Enzymes"], a: 2 }
];

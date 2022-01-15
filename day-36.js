const transcription = (dna) => {
    const replaceMaps = {
        G: "C",
        C: "G",
        T: "A",
        A: "U",
    };
    const splitWords = dna.split("");

    for (let i = 0; i < splitWords.length; i++) {
        splitWords[i] = replaceMaps[splitWords[i]]
            ? replaceMaps[splitWords[i]]
            : splitWords[i];
    }

    return splitWords.join("");
};

console.log(transcription("GCT"));

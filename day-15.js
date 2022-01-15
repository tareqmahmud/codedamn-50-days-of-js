const isPangram = (input) => {
    // Code here
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    for(singleAlphabet of alphabet){
        if(input.indexOf(singleAlphabet) === -1){
            return false;
        }
    }

    return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
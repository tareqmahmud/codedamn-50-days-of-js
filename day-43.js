function high(x) {
    let maxScore = 0;
    let maxWord = "";
    const splitText = x.split(" ");

    for (singleWord of splitText) {
        const wordScore = getSumOfWord(singleWord);

        if (wordScore > maxScore) {
            maxScore = wordScore;
            maxWord = singleWord;
        }
    }

    return maxWord;
}

function getSumOfWord(word) {
    const splitChars = word.split("");
    let total = 0;
    for (let i = 0; i < splitChars.length; i++) {
        let charPosition = word.charCodeAt(i) - 96;
        total += charPosition;
    }

    return total;
}

console.log(high("what time are we climbing up the volcano"));

function spinWords(string) {
    const splitString = string.split(" ");

    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].length >= 5) {
            let reverseWords = splitString[i].split("").reverse().join("");
            splitString[i] = reverseWords;
        }
    }

    return splitString.join(" ");
}

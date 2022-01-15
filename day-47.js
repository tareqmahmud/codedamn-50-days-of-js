function isIsogram(str) {
    if (!str.length) {
        return true;
    }

    const resultMap = {};

    for (char of str.toLowerCase()) {
        if (resultMap[char] !== undefined) {
            return false;
        } else {
            resultMap[char] = 1;
        }
    }

    return true;
}

console.log(isIsogram("isogram"));

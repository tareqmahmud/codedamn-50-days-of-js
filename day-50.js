function getMiddle(s) {
    // your code here
    const middleIndex = Math.floor(s.length / 2);
    let startIndex, endIndex;

    if (s.length % 2 === 0) {
        startIndex = middleIndex - 1;
        endIndex = middleIndex;
    } else {
        startIndex = middleIndex;
        endIndex = middleIndex;
    }
    console.log(startIndex, endIndex);

    // +1 Because slice is exclusive
    return s.split("").slice(startIndex, endIndex + 1).join("");
}

console.log(getMiddle("A"));

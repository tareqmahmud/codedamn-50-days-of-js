function toWeirdCase(string) {
    // Your code goes here
    const splitString = string.split("");
    for (let i = 0; i < splitString.length; i++) {
        if (i % 2 === 0) {
            splitString[i] = splitString[i].toUpperCase();
        } else {
            splitString[i] = splitString[i].toLowerCase();
        }
    }

    return splitString.join("");
}

console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);

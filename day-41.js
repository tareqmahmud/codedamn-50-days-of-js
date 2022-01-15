function openOrSenior(data) {
    const result = [];
    // your code goes below
    for (singleArr of data) {
        if (singleArr[0] >= 55 && singleArr[1] > 7) {
            result.push("Senior");
        } else{
            result.push("Open");
        }
    }

    return result;
}

let output = openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
]);

console.log(output);

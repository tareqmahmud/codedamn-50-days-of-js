const valid = (string) => {
    if (string.length <= 1) return false;

    // Replace space and create array
    const stringToArr = string.replaceAll(" ", "").split("");
    console.log(stringToArr);

    const doubleNumbers = [];

    for (let i = 0; i < stringToArr.length; i++) {
        let num = parseInt(stringToArr[i]);
        console.log("num", num);
        if (i % 2 === 0) {
            doubleNumbers.push(num * 2);
        } else {
            doubleNumbers.push(num);
        }
    }

    console.log(doubleNumbers);

    // Sum of double number
    const sumOfDoubleNumber = sumOfArr(doubleNumbers);

    if (sumOfDoubleNumber % 10 === 0) {
        return true;
    }

    return false;
};

function sumOfArr(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(valid("4539 3195 0343 6467"));

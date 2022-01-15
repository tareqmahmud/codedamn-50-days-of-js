function sumTwoSmallestNumbers(numbers) {
    // Get the first min
    const firstMin = Math.min(...numbers);

    // Get the index of firstMin
    const indexOfFirstMin = numbers.indexOf(firstMin);

    // Remove that array
    numbers.splice(indexOfFirstMin, 1);

    // Get the second Min
    const secondMin = Math.min(...numbers);

    return firstMin + secondMin;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

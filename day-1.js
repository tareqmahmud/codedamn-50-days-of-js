function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    // write your solution here
    return Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart) + 1;
}

console.log(`My random number: ${randomNumberGeneratorInRange(100, 200)}`);

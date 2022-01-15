const num2 = 125;

function reverseGivenInteger(num) {
    // Brute force language feature way
    // const numToStr = num.toString();
    // const reverseNum = numToStr.split("").reverse().join("");

    // Mathematical way
    let reverseNum = 0;
    while (num > 0) {
        // Get the reminder
        reverseNum = (reverseNum * 10) + (num % 10);

        // Reduce the n;
        num = Math.floor(num / 10);
    }

    return reverseNum;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num2)}`);

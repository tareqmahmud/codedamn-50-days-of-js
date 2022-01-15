function nthlargest(arr, highest) {
    // To reduce side effect
    const uniqueCloneArr = [...new Set(arr)];
    let largestNumber = 0;

    for (i = 0; i < highest; i++) {
        // Get the largest number
        largestNumber = Math.max(...uniqueCloneArr);

        // Index of largest number
        let largestIndex = uniqueCloneArr.indexOf(largestNumber);

        // Remove the largest Number
        uniqueCloneArr.splice(largestIndex, 1);
    }

    return largestNumber;
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));

function mostFreq(arr) {
    const mapResult = {};

    for (item of arr) {
        if (mapResult[item] !== undefined) {
            mapResult[item] += 1;
        } else {
            mapResult[item] = 1;
        }
    }

    // Max result
    const maxKey = largestCount(mapResult);

    return `${maxKey} ${mapResult[maxKey]}`;
}

function largestCount(obj) {
    let maxKey;
    let maxValue = 0;
    for (const [key, value] of Object.entries(obj)) {
        if (value > maxValue) {
            maxKey = key;
            maxValue = value;
        }
    }

    return maxKey;
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));

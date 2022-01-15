let uniqueInOrder = (iterable) => {
    let lastChar = null;
    const sequence = [];

    for (item of iterable) {
        if (lastChar === null) {
            sequence.push(item);
            lastChar = item;
        } else if (lastChar !== item) {
            lastChar = item;
            sequence.push(item);
        }
    }

    return sequence;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"));

function getDivisorsCnt(num) {
    let count = 2;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) count++;
    }

    return count;
}

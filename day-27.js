function getCount(str) {
    let vowelsCount = 0;
    // enter your magic here
    for (singleStr of str) {
        if ("aeiou".includes(singleStr.toLowerCase())) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}

console.log(getCount("abracadabra"));

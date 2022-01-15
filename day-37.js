const isLeap = (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }

    return false;
};

console.log(isLeap(2000));

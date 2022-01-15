const unionOfArrays = (arr1, arr2) => {
    const setArr1 = new Set(arr1);
    for (item of arr2) {
        setArr1.add(item);
    }

    return Array.from(setArr1);
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);

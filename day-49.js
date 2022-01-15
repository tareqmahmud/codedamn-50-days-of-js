function isTriangle(a, b, c) {
    // your code here
    let triangleResult = false;

    if (a + b > c && a + c > b && b + c > a) {
        triangleResult = true;
    }

    return triangleResult;
}

console.log(isTriangle(1, 2, 2));

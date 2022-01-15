function factorial(n) {
    // write your code here
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));

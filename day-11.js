function fibonacci(n) {
    // write your solution here
    let firstNum = 0;
    let secondNum = 1;

    for(let i = 1; i < n; i++){
        let tmp = secondNum;
        secondNum = firstNum + secondNum;
        firstNum = tmp;
    }

    return secondNum;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);
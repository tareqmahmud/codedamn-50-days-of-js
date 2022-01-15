const obj = { key: 1 };

function isEmpty(obj) {
    let isEmptyObj = true;

    for (key in obj) {
        isEmptyObj = false;
        break;
    }

    return isEmptyObj;
}

console.log(`is empty object: ${isEmpty(obj)}`);

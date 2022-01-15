const str = "Xamarin";

function getTheGapX(str) {
    // If no X is found
    if (str.indexOf("X") === -1) {
        return -1;
    }

    // If there are only start X but no end X
    if (str.lastIndexOf("X") === str.indexOf("X")) {
        return 0;
    }

    // Both X is available,
    // Now calculate the X

    return str.lastIndexOf("X") - str.indexOf("X");
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);

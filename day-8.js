const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    const dateDiff = new Date(dateText2) - new Date(dateText1);
    return dateDiff / 1000 / 60 / 60 / 24;
}

console.log(
    `Days difference: ${getDaysBetweenDates("10/15/2020", "12/1/2020")}`
);

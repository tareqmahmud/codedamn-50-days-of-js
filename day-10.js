const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
    const filteredArr = array.filter(
        (singleItem) => singleItem.field !== filterField
    );

    return filteredArr;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);

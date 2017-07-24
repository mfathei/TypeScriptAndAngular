/**
 * Returns the same data but with ROOT CAVE!!!! at the end
 */
function rootCave(...stringArray: string[]) {
    stringArray.forEach((item, index) => {
        stringArray[index] = `${item} ROOT CAVE!!!!`;
    });

    return stringArray;
}

/**
 * Returns the same data but with ROOT CAVE!!!! at the end
 */
function webSchool(...stringArray: string[]) {
    stringArray.forEach((item, index) => {
        stringArray[index] = `${item} ROOT CAVE!!!!`;
    });

    return stringArray;
}

export { rootCave, webSchool };


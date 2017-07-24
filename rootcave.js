/**
 * Returns the same data but with ROOT CAVE!!!! at the end
 */
function rootCave() {
    var stringArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        stringArray[_i] = arguments[_i];
    }
    stringArray.forEach(function (item, index) {
        stringArray[index] = item + " ROOT CAVE!!!!";
    });
    return stringArray;
}
//# sourceMappingURL=rootcave.js.map
"use strict";
function testRun(isInversible) {
    if (isInversible === void 0) { isInversible = false; }
    return !isInversible;
}
console.log("The result of execution: ", testRun());

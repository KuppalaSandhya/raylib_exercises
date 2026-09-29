 const w = require("./window")
 let scannerY = 0;
const scannerHeight = 20;
const lowerRange = 0;
const upperRange = w.screenHeight - scannerHeight;
let scannerSpeed = 1;
module.exports = {
    scannerY,
    scannerHeight,
    lowerRange: lowerRange,
    upperRange: upperRange,
    scannerSpeed,
}
const w = require("./window")
let scannerX = w.screenWidth / 2;
const scannerWidth = 30;
const lowerRange = w.screenWidth / 2;
const upperRange = w.screenWidth - scannerWidth;
let scannerSpeed = 1;
module.exports = {
    scannerX,
    scannerWidth,
    lowerRange: lowerRange,
    upperRange: upperRange,
    scannerSpeed
}
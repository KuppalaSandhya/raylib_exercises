const w = require("./window")
let scannerX = 0;
const scannerWidth = 40;
const lowerRange = 0;
const upperRange = (w.screenWidth / 2) - scannerWidth;
let  scannerSpeed = 1;

module.exports =  {
    scannerX ,
    scannerWidth,
    scannerSpeed,
    lowerRange: lowerRange,
    upperRange: upperRange
}

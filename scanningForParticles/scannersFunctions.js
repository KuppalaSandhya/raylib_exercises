const r = require("raylib")
function scannerTouchesBoundaries(lowerRange,uppperRange,scannerCord)
{
    return (scannerCord < lowerRange || scannerCord > uppperRange);
}
function toCalcSpeed(velocity,lowerRange,upperRange,scannerCord){
  return scannerTouchesBoundaries(lowerRange,upperRange,scannerCord) ?  -velocity : velocity;
}
function toMoveScanners(scannerStart,scannerSpeed){
    return scannerStart + scannerSpeed ;
}

function isScannerDetectedParticle(sC,pC,sR, pR) {  
    return (sC < pR && sR > pC) ? r.RED : r.WHITE;
}
function changeColor(scannerCord, particleCord, sW, pW){
    const scannerRange = scannerCord + sW;
    const particleRange = particleCord + pW 
    return isScannerDetectedParticle(scannerCord, particleCord, scannerRange, particleRange) 
}

module.exports = {
    toCalcSpeed,
    toMoveScanners,
    changeColor,
}
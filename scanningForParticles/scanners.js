const r = require("raylib")

function isScannerTouchingBoundaries(lowerRange,uppperRange,scannerCord){
    return (scannerCord < lowerRange || scannerCord > uppperRange);
}

// fixme : improve function names
function CalcSpeed(velocity,lowerRange,upperRange,scannerCord){
  return isScannerTouchingBoundaries(lowerRange,upperRange,scannerCord) ?  -velocity : velocity;
}

function MoveScanners(scannerStart,scannerSpeed){
    return scannerStart + scannerSpeed ;
}

// fixme : responsibility of colour should not be with this function
function isScannerDetectedParticle(sC,pC,sR, pR) {  
    return ( sC < pR && sR > pC ) 
}

function changeColor(scannerCord, particleCord, sR,pR){
    return isScannerDetectedParticle(scannerCord, particleCord, sR,pR) ? r.RED : r.WHITE
}

function overLappingOfScannerParticles(scannerCord, particleCord, sW, pW){
    const scannerRange = scannerCord + sW;
    const particleRange = particleCord + pW 
    return changeColor(scannerCord, particleCord, scannerRange, particleRange) 
}

module.exports = {
    CalcSpeed,
    MoveScanners,
    overLappingOfScannerParticles,
}
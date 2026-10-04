const r = require("raylib");

function createScanner(p, s, v, l, u) {
     return{   
        position: p,
        size : s,
        speed : v,
        lowerRange : l,
        upperRange : u,
     };
    }


function isScannerDetectedParticle(sC, pC, sR, pR) {
    return (sC < pR && sR > pC)
}

function changeColor(scannerCord, particleCord, sR, pR) {
    return isScannerDetectedParticle(scannerCord, particleCord, sR, pR) ? r.RED : r.WHITE
}

function overLappingOfScannerParticles(scannerCord, particleCord, sW, pW) {
    const scannerRange = scannerCord + sW;
    const particleRange = particleCord + pW;
    return changeColor(scannerCord, particleCord, scannerRange, particleRange)
}

function MoveScanners(scannerPosition, scannerSpeed) {
    return scannerPosition + scannerSpeed;
}

function isScannerTouchingBoundaries(lowerRange, uppperRange, scannerCord, scannerSize) {
    return (scannerCord < lowerRange || scannerCord > (uppperRange - scannerSize));
}

function CalcSpeed(speed, lowerRange, upperRange, scannerCord,scannerSize) {
    return isScannerTouchingBoundaries(lowerRange, upperRange, scannerCord,scannerSize) ? -speed : speed;
}

function updateScanner1(world) {
    world.scanner1.speed = CalcSpeed(world.scanner1.speed, world.scanner1.lowerRange, world.scanner1.upperRange, world.scanner1.position,world.scanner1.size);
    world.scanner1.position = MoveScanners(world.scanner1.position, world.scanner1.speed);
    world.scanner1.color = overLappingOfScannerParticles(world.scanner1.position, world.particle1.position, world.scanner1.size, world.particle1.size);
}


function updateScanner2(world) {
    world.scanner2.speed = CalcSpeed(world.scanner2.speed, world.scanner2.lowerRange,world.scanner2.upperRange, world.scanner2.position, world.scanner2.size);
    world.scanner2.position = MoveScanners(world.scanner2.position, world.scanner2.speed);
    world.scanner2.color = overLappingOfScannerParticles(world.scanner2.position, world.particle2.position,  world.scanner2.size,  world.particle2.size);
}

function updateScanner3(world) {
     world.scanner3.speed = CalcSpeed( world.scanner3.speed,  world.scanner3.lowerRange, world.scanner3.upperRange, world.scanner3.position, world.scanner3.size);
     world.scanner3.position = MoveScanners( world.scanner3.position,  world.scanner3.speed);
     world.scanner3.color = overLappingOfScannerParticles( world.scanner3.position,  world.particle3.position,  world.scanner3.size,  world.particle3.size);
}


function drawRectangle(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}

function drawScanners(world) {
  
    const zero = 0;
    drawRectangle(world.scanner1.position, zero, world.scanner1.size, world.screen.height, world.scanner1.color);
    drawRectangle(world.scanner2.position, zero, world.scanner2.size, world.screen.height, world.scanner2.color);
    drawRectangle(zero, world.scanner3.position,  world.screen.width, world.scanner3.size, world.scanner3.color);
    
}

module.exports = {
    createScanner,
    updateScanner1,
    updateScanner2,
    updateScanner3,
    drawScanners,
};
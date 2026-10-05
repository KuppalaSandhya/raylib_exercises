const r = require("raylib");

function createScanner(p, s, v, l, u, c) {
    return {
        position: p,
        size: s,
        speed: v,
        lowerRange: l,
        upperRange: u,
        color: c,
    };
}


function isScannerDetectedParticle(sC, pC, sR, pR) {
    return (sC < pR && sR > pC)
}

function changeColor(scannerCord, particleCord, sR, pR) {
    return isScannerDetectedParticle(scannerCord, particleCord, sR, pR) ? r.RED : r.WHITE
}

function overLappingOfScannerParticles(scannerCord, particleCord, sS, pS) {
    const scannerRange = scannerCord + sS;
    const particleRange = particleCord + pS;
    return changeColor(scannerCord, particleCord, scannerRange, particleRange)
}

function MoveScanners(scannerPosition, scannerSpeed) {
    return scannerPosition + scannerSpeed;
}

function isScannerTouchingBoundaries(lowerRange, uppperRange, scannerCord, scannerSize) {
    return (scannerCord < lowerRange || scannerCord > (uppperRange - scannerSize));
}

function CalcSpeed(speed, lowerRange, upperRange, scannerCord, scannerSize) {
    return isScannerTouchingBoundaries(lowerRange, upperRange, scannerCord, scannerSize) ? -speed : speed;
}

function updateScanner(scanner, particle) {
    scanner.speed = CalcSpeed(scanner.speed, scanner.lowerRange, scanner.upperRange, scanner.position, scanner.size);
    scanner.position = MoveScanners(scanner.position, scanner.speed);
    scanner.color = overLappingOfScannerParticles(scanner.position, particle.position, scanner.size, particle.size);
}



function drawRectangle(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}

function drawScanners(scanner1, scanner2, scanner3, screen) {

    const zero = 0;
    drawRectangle(scanner1.position, zero, scanner1.size, screen.height, scanner1.color);
    drawRectangle(scanner2.position, zero, scanner2.size, screen.height, scanner2.color);
    drawRectangle(zero, scanner3.position, screen.width, scanner3.size, scanner3.color);

}

module.exports = {
    createScanner,
    updateScanner,
    drawScanners,
};
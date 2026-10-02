const r = require("raylib");
const p = require("./particles");
const w = require("./window");

const scanner1 = {
    x: 0,
    width: 40,
    speed: 5,
};

const scanner2 = {
    x: w.screenWidth / 2,
    width: 30,
    speed: 1,
};

const scanner3 = {
    y: 0,
    height: 30,
    speed: 1,
};

scanner1.lowerRange = scanner1.x;
scanner1.upperRange = (w.screenWidth / 2) - scanner1.width;

scanner2.lowerRange = w.screenWidth / 2,
scanner2.upperRange = w.screenWidth - scanner2.width

scanner3.lowerRange = scanner3.y;
scanner3.upperRange = w.screenHeight - scanner3.height;


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

function MoveScanners(scannerStart, scannerSpeed) {
    return scannerStart + scannerSpeed;
}

function isScannerTouchingBoundaries(lowerRange, uppperRange, scannerCord) {
    return (scannerCord < lowerRange || scannerCord > uppperRange);
}

function CalcSpeed(velocity, lowerRange, upperRange, scannerCord) {
    return isScannerTouchingBoundaries(lowerRange, upperRange, scannerCord) ? -velocity : velocity;
}

function updateScanner1() {
    scanner1.speed = CalcSpeed(scanner1.speed, scanner1.lowerRange, scanner1.upperRange, scanner1.x);
    scanner1.x = MoveScanners(scanner1.x, scanner1.speed);
    scanner1.color = overLappingOfScannerParticles(scanner1.x, p.particle1.x, scanner1.width, p.particle1.width);
}


function updateScanner2() {
    scanner2.speed = CalcSpeed(scanner2.speed, scanner2.lowerRange, scanner2.upperRange, scanner2.x);
    scanner2.x = MoveScanners(scanner2.x, scanner2.speed);
    scanner2.color = (overLappingOfScannerParticles(scanner2.x, p.particle2.x, scanner2.width, p.particle2.width));
}

function updateScanner3() {
    scanner3.speed = CalcSpeed(scanner3.speed, scanner3.lowerRange, scanner3.upperRange, scanner3.y);
    scanner3.y = MoveScanners(scanner3.y, scanner3.speed);
    scanner3.color = (overLappingOfScannerParticles(scanner3.y, p.particle3.y, scanner3.height, p.particle3.height));
}


function drawRectangle(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}

function drawScanners() {
    const zero = 0;
    drawRectangle(scanner1.x, zero, scanner1.width, w.screenHeight, scanner1.color);
    drawRectangle(scanner2.x, zero, scanner2.width, w.screenHeight, scanner2.color);
    drawRectangle(zero, scanner3.y, w.screenWidth, scanner3.height, scanner3.color);
    
}

module.exports = {
    scanner1,
    scanner2,
    scanner3,
    updateScanner1,
    updateScanner2,
    updateScanner3,
    drawScanners,
};
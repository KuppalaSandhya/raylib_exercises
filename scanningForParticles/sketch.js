const r = require("raylib");
const m = require("./math");
const w = require("./window");
const s1 = require("./scanner1");
const s2 = require("./scanner2");
const s3 = require("./scanner3");
const p1 = require("./particle1");
const p2 = require("./particle2");
const p3 = require("./particle3");
const s = require ("./scanners");

function running() {
    return !r.WindowShouldClose();
}

function updateScanner3() {
  s3.scannerSpeed = s.CalcSpeed(s3.scannerSpeed,s3.lowerRange,s3.upperRange,s3.scannerY);
  s3.scannerY = s.MoveScanners(s3.scannerY,s3.scannerSpeed);
  color3 = s.overLappingOfScannerParticles(s3.scannerY, p3.particleY, s3.scannerHeight, p3.particleHeight)
}
function updateScanner2() {
  s2.scannerSpeed = s.CalcSpeed(s2.scannerSpeed,s2.lowerRange,s2.upperRange,s2.scannerX);
  s2.scannerX = s.MoveScanners(s2.scannerX,s2.scannerSpeed);
  color2 = s.overLappingOfScannerParticles(s2.scannerX, p2.particleX, s2.scannerWidth, p2.particleWidth)
}

function updateScanner1() {
  s1.scannerSpeed = s.CalcSpeed(s1.scannerSpeed,s1.lowerRange,s1.upperRange,s1.scannerX);
  s1.scannerX = s.MoveScanners(s1.scannerX,s1.scannerSpeed);
  color1 = s.overLappingOfScannerParticles(s1.scannerX, p1.particleX, s1.scannerWidth, p1.particleWidth)
}
function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const FPS = 50;
    r.InitWindow(w.screenWidth, w.screenHeight, "scanningForParticles");
    r.SetTargetFPS(FPS);

}

function update() {
    updateScanner1();
    updateScanner2();
    updateScanner3();
}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    range();
    r.EndDrawing();
}
    function range(){
    const zero =0;
    r.DrawRectangle(p1.particleX, zero, p1.particleWidth, w.screenHeight, r.BLUE);
    r.DrawRectangle(p2.particleX, zero, p2.particleWidth, w.screenHeight, r.BLUE);
    r.DrawRectangle(zero, p3.particleY, w.screenWidth, p3.particleHeight, r.BLUE);

    r.DrawRectangle(s1.scannerX, zero, s1.scannerWidth, w.screenHeight, color1);
    r.DrawRectangle(s2.scannerX, zero, s2.scannerWidth, w.screenHeight, color2);
    r.DrawRectangle(zero, s3.scannerY, w.screenWidth, s3.scannerHeight, color3)
}

function teardown() {
    r.CloseWindow();
}


module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
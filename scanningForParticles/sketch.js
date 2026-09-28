const r = require("raylib");
const m = require("./math");

const screenHeight = 400;
const screenWidth = 700;

let scanner1X = 0;
const scanner1Width = 40;
const scanner1Start = scanner1X;
const scanner1End = (screenWidth / 2) - scanner1Width;
let scanner1Speed = 3;

let scanner2X = screenWidth / 2;
const scanner2Width = 30;
const scanner2Start = scanner2X;
const scanner2End = screenWidth - scanner2Width;
let scanner2Speed = 7;


let scanner3Y = 0;
const scanner3Height = 20;
const scanner3Start = scanner3Y;
const scanner3End = screenHeight - scanner3Height;
let scanner3Speed = 4;


const particle1X = 250;
const particle1Width = 100;

const particle2Width = 60;
const particle2X = 500;

const particle3Height = 40;
const particle3Y = 150;


function running() {
    return !r.WindowShouldClose();
}

function overLapping(sX, pX, sW, pW) {
    const sR = sX + sW;
    const pR = pX + pW;    
    return (sX < pR && sR > pX) ? r.RED : r.WHITE;
}

function updateScanner3() {
    currentSpeed = m.calcSpeed(scanner3Speed, scanner3Y, scanner3Start, scanner3End);
    scanner3Y += currentSpeed;
}

function updateScanner2() {
    current2speed = m.calcSpeed(scanner2Speed, scanner2X, scanner2Start, scanner2End);
    scanner2X += currentSpeed;
}

function updateScanner1() {
    currentspeed = m.calcSpeed(scanner1Speed, scanner1X, scanner1Start, scanner1End);
    scanner1X += currentSpeed;
}
function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    const FPS = 50;
    r.InitWindow(screenWidth, screenHeight, "scanningForParticles");
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
    r.DrawRectangle(particle1X, zero, particle1Width, screenHeight, r.BLUE);
    r.DrawRectangle(particle2X, zero, particle2Width, screenHeight, r.BLUE);
    r.DrawRectangle(zero, particle3Y, screenWidth, particle3Height, r.BLUE);

    r.DrawRectangle(scanner1X, zero, scanner1Width, screenHeight, overLapping(scanner1X, particle1X, scanner1Width, particle1Width));
    r.DrawRectangle(scanner2X, zero, scanner2Width, screenHeight, overLapping(scanner2X, particle2X, scanner2Width, particle2Width));
    r.DrawRectangle(zero, scanner3Y, screenWidth, scanner3Height, overLapping(scanner3Y, particle3Y, scanner3Height, particle3Height))
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
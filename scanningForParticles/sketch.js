const r = require("raylib");
const m = require("./math");

const screenHeight = 400;
const screenWidth = 700;

let scanner1X = 0;
const scanner1Width = 40;

let scanner2X = screenWidth / 2;
const scanner2Width = 30;

const particle1X = 100;
const particle1Width = 100;

const particle2X = 500;
const particle2Width = 60;

const scanner1Speed = 10;
const scanner2Speed = 1;

function running() {
    return !r.WindowShouldClose();
}

function overLapping(sX, pX, sW, pW) {

    const pR = pX + pW;
    const sR = sX + sW;

    return ((sX >= pX || sR >= pX) && (sX <= pR || sR <= pR)) ? r.RED : r.WHITE
}

function setup() {
    const FPS = 50;
    r.InitWindow(screenWidth, screenHeight, "scanningForParticles");
    r.SetTargetFPS(FPS);
}

function update() {
    scanner1X = scanner1X + m.calcOfMoving1(scanner1Speed, screenWidth, scanner1Width, scanner1X);
    scanner2X = scanner2X + m.calcOfMoving2(scanner2Speed, screenWidth, scanner2Width, scanner2X);
}

function draw() {
    const y = 0;
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particle1X, y, particle1Width, screenHeight, r.BLUE);
    r.DrawRectangle(particle2X, y, particle2Width, screenHeight, r.BLUE);
    r.DrawRectangle(scanner1X, y, scanner1Width, screenHeight, overLapping(scanner1X, particle1X, scanner1Width, particle1Width));
    r.DrawRectangle(scanner2X, y, scanner2Width, screenHeight, overLapping(scanner2X, particle2X, scanner2Width, particle2Width));

    r.EndDrawing();
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
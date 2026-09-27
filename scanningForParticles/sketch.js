const r = require("raylib");
const m = require("./math");

const screenHeight = 400;
const screenWidth = 700;

let scanner1X = 0;
const scanner1Width = 40;
const start1Point = scanner1X;
const end1Point = (screenWidth / 2) - scanner1Width;
const scanner1Speed = 3;
let scanner1Direction = scanner1Speed;

let scanner2X = screenWidth / 2;
const scanner2Width = 30;
const start2Point = scanner2X;
const end2Point = screenWidth - scanner2Width;
const scanner2Speed = 7;
let scanner2Direction = scanner2Speed;

const particle1X = 250;
const particle1Width = 100;

const particle2X = 500;
const particle2Width = 60;

function running() {
    return !r.WindowShouldClose();
}

function overLapping(sX, pX, sW, pW) {
    const sR = sX + sW;
    const pR = pX + pW;

    return (sX < pR && sR > pX) ? r.RED : r.WHITE;
}

function setup() {
    const FPS = 50;
    r.InitWindow(screenWidth, screenHeight, "scanningForParticles");
    r.SetTargetFPS(FPS);
}

function update() {
    scanner1Direction = m.calcDirection(scanner1Speed, scanner1X, start1Point, end1Point, scanner1Direction);
    scanner1X += scanner1Direction;

    scanner2Direction = m.calcDirection(scanner2Speed, scanner2X, start2Point, end2Point, scanner2Direction);
    scanner2X += scanner2Direction;
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
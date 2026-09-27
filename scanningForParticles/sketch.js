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

let scanner3Y = 0;
const scanner3Height = 20;
const start3Point = scanner3Y;
const end3Point = screenHeight - scanner3Height;
const scanner3Speed = 4;
let scanner3Direction = scanner3Speed;

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

    scanner3Direction = m.calcDirection(scanner3Speed, scanner3Y, start3Point, end3Point, scanner3Direction);
    scanner3Y += scanner3Direction;
}

function draw() {
    const horizontalY = 0;
    const verticleX = 0;
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangle(particle1X, horizontalY, particle1Width, screenHeight, r.BLUE);
    r.DrawRectangle(particle2X, horizontalY, particle2Width, screenHeight, r.BLUE);
    r.DrawRectangle(verticleX, particle3Y, screenWidth, particle3Height, r.BLUE)

    r.DrawRectangle(scanner1X, horizontalY, scanner1Width, screenHeight, overLapping(scanner1X, particle1X, scanner1Width, particle1Width));
    r.DrawRectangle(scanner2X, horizontalY, scanner2Width, screenHeight, overLapping(scanner2X, particle2X, scanner2Width, particle2Width));
    r.DrawRectangle(verticleX, scanner3Y, screenWidth, scanner3Height, overLapping(scanner3Y, particle3Y, scanner3Height, particle3Height))
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
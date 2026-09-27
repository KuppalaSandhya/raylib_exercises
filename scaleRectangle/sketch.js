const r = require("raylib");
const m = require("./math")

const width = 0.7;
const height = 0.6;

const rectOutWidth = 700;
const rectOutHeight = 600;

const windowWidth = 1000;
const windowHeight = 800;

const rectOutX = 100;
const rectOutY = 100;



function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "scaleAndCenter");
    r.SetTargetFPS(100);
}

function update() { }

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(rectOutX, rectOutY, rectOutWidth, rectOutHeight, r.WHITE);

    const rectInWidth = width * rectOutWidth;
    const rectInHeight = height * rectOutHeight;
    const rectInX = m.calcOffset(rectOutWidth, rectInWidth) + rectOutX;
    const rectInY = m.calcOffset(rectOutHeight, rectInHeight) + rectOutY;

    r.DrawRectangle(rectInX, rectInY, rectInWidth, rectInHeight, r.RED);

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
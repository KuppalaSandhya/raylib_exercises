const r = require("raylib");
const m = require("./math");

const screenWidth = 800;
const screenHeight = 400;

const x1 = 100;
const y1 = 220;
const radius1 = 80;

const x2 = 100;
const y2 = 349;
const radius2 = 50;



function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "intersectingCircles");
    r.SetTargetFPS(40);
}

function update() { }

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.WHITE);

    let color = r.BLACK;

    if (m.distance(x1, y1, x2, y2) < radius1 + radius2) {
        color = r.RED
    }
    r.DrawCircle(x1, y1, radius1, color);
    r.DrawCircle(x2, y2, radius2, color);

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
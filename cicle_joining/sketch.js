const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

const screenWidth = 800;
const screenHeight = 600;
function setup() {
    r.InitWindow(screenWidth, screenHeight, "circleJoining")
    r.SetTargetFPS(50);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.
    r.DrawCircle(100, 200, 70, r.)
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


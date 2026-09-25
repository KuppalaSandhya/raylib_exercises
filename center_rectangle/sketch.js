const r = require("raylib");
const math = require("./math")
const screenWidth = 800;
const screenHeight = 600;
const rectWidth = 200;
const rectHeight = 100;
function setup() {
    r.InitWindow(screenWidth, screenHeight, "centerRectangle");
    r.SetTargetFPS(60);
}
function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    const rectX = math.calcOffset(screenWidth, rectWidth);
    const rectY = math.calcOffset(screenHeight, rectHeight);
    r.DrawRectangle(rectX, rectY, rectWidth, rectHeight, r.WHITE)
    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose();
}
function teardown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    update,
    draw,
    running,
    teardown,
}
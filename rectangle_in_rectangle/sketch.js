const r = require("raylib");
const math = require("./math");

const screenWidth = 800;
const screenHeight = 600;

const rect1Width = 150;
const rect1Height = 200;

const rect2Width = 300;
const rect2Height = 400;

const x2 = 100;
const y2 = 100;
function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "RectangleInRectangle");
    r.SetTargetFPS(60);
}

function update() {

}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(x2, y2, rect2Width, rect2Height, r.WHITE);

    const x1 = x2 + (math.calcOffset(rect2Width, rect1Width));
    const y1 = y2 + (math.calcOffset(rect2Height, rect1Height));
    r.DrawRectangle(x1, y1, rect1Width, rect1Height, r.BLUE);

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
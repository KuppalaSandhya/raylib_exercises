const r = require("raylib");

const width = 0.7;
const height = 0.6;

const rectOutWidth = 700;
const rectOutHeight = 600;

const windowWidth = 1000;
const windowHeight = 800;

const rectOutX = 100;
const rectOutY = 100;

r.InitWindow(windowWidth, windowHeight, "scaleAndCenter");
r.SetTargetFPS(100);

function center(x, y, z) {
    return (x - y) / 2 + z
}
function scale(x, y) {
    return x * y
}
while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(rectOutX, rectOutY, rectOutWidth, rectOutHeight, r.WHITE);

    const rectInWidth = scale(width, rectOutWidth);
    const rectInHeight = scale(height, rectOutHeight);
    const rectInX = center(rectOutWidth, rectInWidth, rectOutX);
    const rectInY = center(rectOutHeight, rectInHeight, rectOutY);

    r.DrawRectangle(rectInX, rectInY, rectInWidth, rectInHeight, r.RED);

    r.EndDrawing();
}
r.CloseWindow
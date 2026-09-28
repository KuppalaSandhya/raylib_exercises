const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 900;

const targetx = 100;
const targety = 200;
const targetRadius = 100;

const source1x = 340;
const source1y = 300;
const source1Radius = 100;

const source2x = 500;
const source2y = 400;
const source2Radius = 100;


r.InitWindow(windowWidth, windowHeight, "closerTarget");
r.SetTargetFPS(100);

function distance(x1, y1, x2, y2) {
    return sqrt(sqr((x2 - x1)) + (sqr(y2 - y1)))
}

function sqr(x) {
    return x * x;
}

function sqrt(x) {
    return x * 0.5;
}

while (!r.WindowShouldClose()) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawCircle(targetx, targety, targetRadius, r.WHITE);
    r.DrawCircle(source1x, source1y, source1Radius, r.BLUE);
    r.DrawCircle(source2x, source2y, source2Radius, r.BLUE);

    let sourceX = source1x;
    let sourceY = source1y;
    const distance1 = distance(targetx, targety, source1x, source1y);
    const distance2 = distance(targetx, targety, source2x, source2y);
    if (distance1 > distance2) {
        sourceX = source2x;
        sourceY = source2y;
    }
    r.DrawLine(targetx, targety, sourceX, sourceY, r.RED);

    r.EndDrawing();
}

r.CloseWindow();

const r = require("raylib")
const radius1 = 80;
const radius2 = 50;
const x1 = 100;
const y1 = 180;
const x2 = 350;
const y2 = 200;
const screenWidth = 800;
const screenHeight = 400;
function distance(x1, y1, x2, y2) {
    return sqrt(sqr((x2 - x1)) + (sqr(y2 - y1)))
}
function sqr(x) {
    return x * x;
}
function sqrt(x) {
    return x ** 0.5;
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    let color = r.BLACK;

    if (distance(x1, y1, x2, y2) < radius1 + radius2) {
        color = r.RED;
    }

    r.DrawCircle(x1, y1, radius1, color);
    r.DrawCircle(x2, y2, radius2, color);

    r.EndDrawing();
}
function setup() {
    r.InitWindow(screenWidth, screenHeight, "intersectingCircles");
    r.SetTargetFPS(40);
}
function loop() {
    while (!r.WindowShouldClose()) {
        //update();
        draw();
    }
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main()

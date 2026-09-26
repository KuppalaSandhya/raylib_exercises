const r = require("raylib");

const screenWidth = 800;
const screenHeight = 600;

const rect1Width = 500;
const rect1Height = 400;

const rect2Width = 300;
const rect2Height = 200;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "rectangleInRectangle")
    r.SetTargetFPS(60);
}
function center(x, y) {
    return (x - y) / 2;
}
function add(x, y) {
    return (x + y);
}
function draw() {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);

    r.DrawRectangle(center(screenWidth, rect1Width), center(screenHeight, rect1Height), rect1Width, rect1Height, r.WHITE);
    r.DrawRectangle(add(center(rect1Width, rect2Width), center(screenWidth, rect1Width)), add(center(rect1Height, rect2Height), center(screenHeight, rect1Height)), rect2Width, rect2Height, r.BLUE);

    r.EndDrawing();
}
function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        //update();
    }
}
function main() {
    setup();
    loop();
    r.CloseWindow
}
main()
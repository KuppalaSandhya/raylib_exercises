const r = require("raylib");
const screenHeight = 800;
const screenWidth = 1000;
const rectWidth = 300;
const rectHeight = 500;
function center(x, y) {
    return (x - y) / 2;
}
function setup() {
    r.InitWindow(screenWidth, screenHeight, "centerRectFunc")
    r.SetTargetFPS(60);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(center(screenWidth, rectWidth), center(screenHeight, rectHeight), rectWidth, rectHeight, r.WHITE);
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
    r.CloseWindow();
}
main()

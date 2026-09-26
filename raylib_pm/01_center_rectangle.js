const r = require("raylib");

const screenWidth = 800;
const screenHeight = 700;

const rectWidth = 400;
const rectHeight = 300;

r.InitWindow(screenWidth, screenHeight, "centerRctangle");
r.SetTargetFPS(60);

function center(x, y) {
  return (x - y) / 2;
}
while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(center(screenWidth, rectWidth), center(screenHeight, rectHeight), rectWidth, rectHeight, r.WHITE);
  r.EndDrawing();
}
r.CloseWindow();

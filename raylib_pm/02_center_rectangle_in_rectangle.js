const r = require("raylib");

const screenWidth = 800;
const screenHeight = 700;

const rectInWidth = 100;
const rectInHeight = 100;

const rectOutWidth = 500;
const rectOutHeight = 300;

const rectOutX = 100;
const rectOutY = 100;

r.InitWindow(screenWidth, screenHeight, "RectangleInRectangle");
r.SetTargetFPS(60);

function center(x1, y1, z1) {
  return (x1 - y1) / 2 + z1
}

while (!r.WindowShouldClose()) {
  r.BeginDrawing();

  r.ClearBackground(r.BLACK);

  r.DrawRectangle(rectOutX, rectOutY, rectOutWidth, rectOutHeight, r.WHITE);
  r.DrawRectangle(center(rectOutWidth, rectInWidth, rectOutX), center(rectOutHeight, rectInHeight, rectOutY), rectInWidth, rectInHeight, r.RED);

  r.EndDrawing();
}
r.CloseWindow();
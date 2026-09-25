const r = require("raylib");
const windowWidth=800;
const windowHeight=700;
const breadth=400;
const length=300;

r.InitWindow(windowWidth, windowHeight, "Raylib");
r.SetTargetFPS(60);
function center(x,y) {
  return (x-y)/2;
}
while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(center(windowWidth,breadth),center(windowHeight,length),breadth,length ,r.WHITE);
  r.EndDrawing();
}
r.CloseWindow();

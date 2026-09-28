const r = require("raylib");

r.InitWindow(400, 400, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  r.DrawRectangle(100, 100, 600, 200, r.WHITE);

  r.EndDrawing();
}

r.CloseWindow();
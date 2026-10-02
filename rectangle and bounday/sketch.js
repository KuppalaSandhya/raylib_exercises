const r = require("raylib");
const o = require("./object")
function running() {
    return !r.WindowShouldClose();
}

function setup() { 
    r.SetTraceLogLevel(r.LOG_NONE);
    const FPS = 50;
    r.InitWindow(400,600, "scanningForParticles");
    r.SetTargetFPS(FPS);

}

function update() { 
    
}

function draw() { 
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangleRec(o.windowRect, r.RED);
    r.DrawRectangleLines(o.windowRect.x, o.windowRect.y, o.windowRect.width, o.windowRect.height, r.WHITE);
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
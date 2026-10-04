const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
     r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(200,200,"testing");
    r.SetTargetFPS(60);
}

function update() { }

function draw() { 
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(50,50,100,100,r.RED);
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
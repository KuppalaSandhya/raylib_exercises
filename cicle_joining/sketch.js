const r = require("raylib");
const m = require("./math")
const x1 = 500;
const y1 = 400;
const radius1 = 50;
const x2 = 300;
const y2 = 400;
const radius2 = 50;
const targetx = 250;
const targety = 300;
const targetRadius = 50;
const screenWidth = 800;
const screenHeight = 600;
function running() {
    return !r.WindowShouldClose();
}


function setup() {
    r.InitWindow(screenWidth, screenHeight, "circleJoining")
    r.SetTargetFPS(50);
}

function update() { }


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    r.DrawCircle(targetx, targety, targetRadius, r.WHITE)
    r.DrawCircle(x1, y1, radius1, r.RED);
    r.DrawCircle(x2, y2, radius2, r.RED);

    tx1 = m.distance(targetx, targety, x1, y1);
    tx2 = m.distance(targetx, targety, x2, y2);

    let sourceX = x1;
    let sourceY = y1;

    if (tx1 > tx2) {
        sourceX = x2;
        sourceY = y2;
    }
    r.DrawLine(targetx, targety, sourceX, sourceY, r.RED);
    r.EndDrawing();
}
r
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


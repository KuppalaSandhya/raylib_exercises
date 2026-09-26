const r = require("raylib");
const m = require("./math");

const screenWidth = 800;
const screenHeight = 600;

const sourceX = 250;
const sourceY = 300;
const sourceRadius = 50;

const x1 = 500;
const y1 = 400;
const targetRadius1 = 50;

const x2 = 300;
const y2 = 400;
const targetRadius2 = 50;


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
    r.DrawCircle(sourceX, sourceY, sourceRadius, r.WHITE)
    r.DrawCircle(x1, y1, targetRadius1, r.RED);
    r.DrawCircle(x2, y2, targetRadius2, r.RED);

    const distance1 = m.distance(sourceX, sourceY, x1, y1);
    const distance2 = m.distance(sourceX, sourceY, x2, y2);

    let targetX = x1;
    let targetY = y1;

    if (distance1 > distance2) {
        targetX = x2;
        targetY = y2;
    }
    r.DrawLine(sourceX, sourceY, targetX, targetY, r.RED);

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


const r = require("raylib");
const s = require("./scanners");
const p = require("./particles");


function running() {
    return !r.WindowShouldClose();
}

function setup() {

    const FPS = 50;
    const world = {};

    world.screen = {
        width: 700,
        height: 400,
    };

    world.scanner1 = s.createScanner(0, 40, 5, 0, 350, r.WHITE);
    world.scanner2 = s.createScanner(350, 30, 3, 350, 700, r.WHITE);
    world.scanner3 = s.createScanner(0, 30, 20, 0, 400, r.WHITE);

    world.particle1 = p.createParticle(250, 100);
    world.particle2 = p.createParticle(500, 60);
    world.particle3 = p.createParticle(40, 80);

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.screen.width, world.screen.height, "scanningForParticles");
    r.SetTargetFPS(FPS);

    return world;
}

function update(world) {
    s.updateScanner(world.scanner1, world.particle1);

    s.updateScanner(world.scanner2, world.particle2);

    s.updateScanner(world.scanner3, world.particle3);


}


function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    p.drawParticles(world.particle1, world.particle2, world.particle3, world.screen);
    s.drawScanners(world.scanner1, world.scanner2, world.scanner3, world.screen);
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
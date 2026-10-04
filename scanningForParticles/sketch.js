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
        width : 700,
        height : 400,
    };

    world.scanner1 = s.createScanner(0, 40, 5, 0, 350);
    world.scanner2 = s.createScanner(350, 30, 3, 350, 700);
    world.scanner3 = s.createScanner(0, 30, 20, 0, 400);
    
    world.particle1 = p.createParticle(250, 100);
    world.particle2 = p.createParticle(500, 60);
    world.particle3 = p.createParticle(40, 80);

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.screen.width, world.screen.height, "scanningForParticles");
    r.SetTargetFPS(FPS);

    return world;
}

 function update(world) {
    s.updateScanner1(world)
    s.updateScanner2(world)
    s.updateScanner3(world)



}


function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    p.drawParticles(world);
    s.drawScanners(world);
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
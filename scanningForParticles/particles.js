const r = require("raylib");

function createParticle(pP, pS) {
    return {
        position: pP,
        size: pS,
    };
}

function drawParticles(particle1, particle2, particle3, screen) {
    const zero = 0;
    drawRectangle(particle1.position, zero, particle1.size, screen.height, r.BLUE);
    drawRectangle(particle2.position, zero, particle2.size, screen.height, r.BLUE);
    drawRectangle(zero, particle3.position, screen.width, particle3.size, r.BLUE);
}

function drawRectangle(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}


module.exports = {
    createParticle,
    drawParticles,
};
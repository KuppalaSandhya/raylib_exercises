const r = require("raylib");

 function createParticle(pP,pS){
    return  {
        position : pP,
        size : pS,
    };
}

function drawParticles(world){
    const zero =0;
    drawRectangle(world.particle1.position, zero, world.particle1.size, world.screen.height, r.BLUE);
    drawRectangle(world.particle2.position, zero, world.particle2.size, world.screen.height, r.BLUE);
    drawRectangle(zero, world.particle3.position, world.screen.width, world.particle3.size, r.BLUE);

} 
function drawRectangle(x,y,width,height,color){
    r.DrawRectangle(x,y,width,height,color);
}


module.exports = {
   createParticle,
    drawParticles,
};
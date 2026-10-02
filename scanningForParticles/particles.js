 const w = require("./window");
 const r = require("raylib");

 const particle1 = { 
    x : 250,
    width : 100,
 };
const particle2 = {
     x : 500,
     width : 60,
};
const particle3 = {
    height : 40,
    y : 150,
};
function drawParticles(){
    const zero =0;
    drawRectangle(particle1.x, zero, particle1.width, w.screenHeight, r.BLUE);
    drawRectangle(particle2.x, zero, particle2.width, w.screenHeight, r.BLUE);
    drawRectangle(zero, particle3.y, w.screenWidth, particle3.height, r.BLUE);
}
function drawRectangle(x,y,width,height,color){
    r.DrawRectangle(x,y,width,height,color);
}


module.exports = {
    particle1,
    particle2,
    particle3,
    drawParticles,
};
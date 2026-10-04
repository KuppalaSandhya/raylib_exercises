const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}
 const rectangle = {
    x : 100,
    y : 200,
    width : 300,
    height : 200,
};

const  lightYellow = {
    r : 253,
    g : 249,
    b : 0,
    a : 200,
};


const leftPoint =  {}
  leftPoint.x = 200;
  leftPoint.y = 300;

const rightPoint = {}
   rightPoint.x = 500;
   rightPoint.y = 300;


 const circlePosition = {
    x : 350,
    y : 300,
 }  ;
 const transparentRed = {
    r : 230,
    g : 41,
    b : 55,
    a : 200,
 };



 const ball = {
    position : {
        x : 200,
        y : 200,
    } ,
    size : {
        radius : 100,
    },
    color : {
        r : 230,
        g : 40,
        b : 55,
        a : 255,
    }
 }


function setup() { 
    r.InitWindow(800,700,"objectsTrials");
    r.SetTargetFPS(400);
    r.SetTraceLogLevel(r.LOG_NONE);
}

function update() { }

function range(){
    //  r.DrawRectangleRec(rectangle, r.YELLOW);
    //  r.DrawRectangleRec(rectangle, lightYellow);
    //  r.DrawRectangleLines(rectangle.x, rectangle.y, rectangle.width, rectangle.height, r.WHITE);

    // r.DrawRectangleRounded(rectangle, 0.5, 2, r.BLUE);
    // r.DrawRectangleRoundedLines(rectangle, 0.5, 3, 6, r.WHITE);

    // r.DrawCircleV(leftPoint, 60, r.RED);
    // r.DrawCircleV(rightPoint, 100, r.RED);
    // r.DrawLineV(leftPoint,rightPoint,r.WHITE);

    // r.DrawCircleV(circlePosition, 150, r.BLUE);
    // r.DrawCircleV(circlePosition, 100, transparentRed);
    // r.DrawCircleV(circlePosition, 50, r.WHITE);
    

//    r.DrawCircle(ball.position.x, ball.position.y, ball.size.radius, ball.color);
//    r.DrawCircleV(ball.position, ball.size.radius, ball.color);


    r.DrawCircleSector(ball.position,50,90,270,0,r.RED);

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    range();
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
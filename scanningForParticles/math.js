function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}
function sqrt(x) {
    return x ** 0.5;
}
function sqr(x) {
    return x * x;
}
function distance(x1, y1, x2, y2) {
    return sqrt(sqr(x1 - x2) + sqr(y1 - y2))
}
function calcOfMoving1(scanner1Speed, screenWidth, scannerWidth, scanner1X) {
    if (scanner1X === 0) {
        direction = scanner1Speed;
    }
    if (scanner1X === (screenWidth / 2) - scannerWidth) {
        direction = -scanner1Speed;
    }
    return direction;
}

function calcOfMoving2(scanner2Speed, screenWidth, scannerWidth, scanner2X) {
    if (scanner2X === screenWidth / 2) {
        direction = scanner2Speed;
    }
    if (scanner2X === screenWidth) {
        direction = -scanner2Speed;
    }
    return direction;
}

module.exports = {
    calcOffset,
    distance,
    sqrt,
    sqr,
    calcOfMoving1,
    calcOfMoving2,
};
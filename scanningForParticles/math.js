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
    return sqrt(sqr(x1 - x2) + sqr(y1 - y2));
}

function calcDirection(speed, scannerX, startPoint, endPoint, scannerDirection) {
    if (scannerX <= startPoint) {
        scannerDirection = speed;
    }
    if (scannerX >= endPoint) {
        scannerDirection = -speed;
    }
    return scannerDirection;
}

module.exports = {
    calcOffset,
    distance,
    sqrt,
    sqr,
    calcDirection,
};
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

function calcSpeed(speed, scannerX, scannerStart, scannerEnd) {
    if (scannerX <= scannerStart) {
        currentSpeed = speed;
    }
    if (scannerX >= scannerEnd) {
        currentSpeed = -speed;
    }
    return currentSpeed;
}

module.exports = {
    calcOffset,
    distance,
    sqrt,
    sqr,
    calcSpeed,
};
function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}
function sqrt(x) {
    x ** 0.5;
}
function sqr(x) {
    x * x;
}
function distance(x1, x2, y1, y2) {
    return sqrt(sqr(x1 - x2) + sqr(y1 - y2))
}

module.exports = {
    calcOffset,
    distance,
    sqrt,
    sqr,
};
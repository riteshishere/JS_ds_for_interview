//Write a JavaScript program to check if a point lies strictly inside a given circle.
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)
function point_in_circle(a, b, x, y, r) {
    var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (dist_points < r) {
        return true;
    }
    return false;
}
/*
console.log(point_in_circle(0, 0, 2, 4, 6));
true
console.log(point_in_circle(0, 0, 6, 8, 6));
false
console.log(point_in_circle(0, 0, 6, 9, 6));
false
console.log(point_in_circle(0, 0, 3, 8, 6));
false
console.log(point_in_circle(0, 0, 6, 3, 9));
true
*/
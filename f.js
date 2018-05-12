/*

class Point
props: x, y
method: getDistance

*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

const point1 = new Point(10, 10);
console.log(point1.getDistance());

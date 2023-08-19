interface Shape {
    getArea():number;
    getPerimeter():number;
}

class circle implements Shape {
    radius: number;
    constructor(r: number) {
        this.radius = r;
    }

    getPerimeter(): number {
        return Math.round((2 * 3.14 * this.radius)*100)/100;
    }
    getArea(): number {
        return  this.radius * this.radius * 3.14;
    }

}

let circle1 = new circle(10);

console.log("面積: " + circle1.getArea() + " 周長: " + circle1.getPerimeter());
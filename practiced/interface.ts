interface Shape {
    getArea():number;
    getName(): string;
    getPerimeter(): any;
}
class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
    }

    getName(): string {
        return "長方形";
    }
    getArea(): number {
        return ( this.width * this.height);
    }
    getPerimeter():number {
        return ( this.width * 2 + this.height * 2);
    }
}
class Triangle implements Shape {

    width: number;
    height: number;

    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
    }

    getArea() {
        return ( this.width * this.height / 2 );
    }
    getName(): string {
        return "三角形";
    }
    getPerimeter():any {
        return null;
    }
}
let rec = new Rectangle(300, 70);
let tri = new Triangle(820, 31);
let rec2 = new Rectangle(100, 70);
let items: Shape[] = [rec, tri, rec2];

for (let item of items) {
    console.log(item.getName(), item.getArea(),item.getPerimeter());
}

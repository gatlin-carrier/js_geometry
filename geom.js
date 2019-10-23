class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare() {
    return this.width === this.length ? true : false;
  }

  area() {
    return this.width * this.length;
  }

  perimeter() {
    return 2 * (this.width * this.length);
  }
}

const coolSquare = new Rectangle(20, 20);
const rudeRectangle = new Rectangle(32, 90);
const meanSquare = new Rectangle(10, 10);

// console.log(rudeRectangle.area());
// console.log(coolSquare.isSquare());
// console.log(meanSquare.perimeter());

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    return this.sideA === this.sideB && this.sideB === this.sideC
      ? true
      : false;
  }

  isIsosceles() {
    return (this.sideA === this.sideB && this.sideA !== this.sideC) ||
      (this.sideA === this.sideC && this.sideA !== this.sideB) ||
      (this.sideB === this.sideC && this.sideB !== this.sideA)
      ? true
      : false;
  }

  area() {
    let perimeter = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(
      perimeter *
        ((perimeter - this.sideA) *
          (perimeter - this.sideB) *
          (perimeter - this.sideC))
    );
  }

  isObtuse() {
    return this.sideA ** 2 + this.sideB ** 2 < this.sideC ** 2 ? true : false;
  }
}

const equilateralTriangle = new Triangle(10, 10, 10);
const isoscelesTriangle = new Triangle(20, 20, 30);
const obtuseTriangle = new Triangle(7, 15, 21);

// equilateralTriangle.isEquilateral();
// console.log(isoscelesTriangle.isIsosceles());
// console.log(equilateralTriangle.area());
// console.log(obtuseTriangle.isObtuse());

class LineSegment {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length() {
    let xDistance = Math.abs(this.x1 - this.x2);
    let yDistance = Math.abs(this.y1 - this.y2);
    return Math.sqrt(xDistance ** 2 + yDistance ** 2);
  }
}

let newLineSegment = new LineSegment(-2, 8, -7, -5);

// console.log(newLineSegment.length());

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
};

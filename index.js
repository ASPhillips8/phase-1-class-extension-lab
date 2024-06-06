//sides = [side, side, side, side]
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0)
    }
}

class Triangle extends Polygon {
  get isValid() {
   const [sideA, sideB, sideC] = this.sides

    return sideA + sideB > sideC &&
           sideA + sideC > sideB &&
           sideB + sideC > sideA
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2
  }

  get isValid() {
    //check to see that all sides are equal
    //sideA = SideB
    //sideA = SideC
    //sideA = SideD
    const [sideA, sideB, sideC, sideD] = this.sides
    return sideA === sideB &&
           sideA === sideC &&
           sideA === sideD
  }

}




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

    return sideA+sideB > sideC && sideA+sideC > sideB && sideB+sideC > sideA
  }

}
/// need to get the side
/// a+b > c
/// a+c > b
/// b+c > a

let triangle = new Triangle ( [ 5, 5, 5 ] )
let triangle2 = new Triangle( [ 15, 10, 1 ] )



console.log(triangle.countSides)
console.log(triangle.perimeter)

console.log(triangle2.countSides)
console.log(triangle.perimeter)


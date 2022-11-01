class Board {
  constructor(){
    this.size = ''
    this.cartesianGrid
    this.listOfIntersections = {}
    this.intersectionsKeyMap = {}
  }

  initializeBoard(){
    this.createGrid()
    this.generateIntersections()
    this.
  }
}

class Intersection {
  constructor(){
    this.x
    this.y
    this.letter
    this.number
    this.width = 30
    this.height = 15
    this.starpoint
    this.cartesian
    this.offset = 30
  }

  initializeIntersection(){
    this.initializelabels()
    this.canvasCoordinates()
  }

  initializelabels(){
    this.letter = letters[i % 19]
    this.number = numbers[i % 19]
  }

  canvasCoordinates(){
    this.x = this.cartesian.x * this.width + this.offset
    this.y = this.cartesian.x * this.width + this.offset
  }
}

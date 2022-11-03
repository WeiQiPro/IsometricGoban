class Board{
  constructor(){
    this.boardState = []
    this.intersections = []
    this.keymap = {}
    this.offset = [30, 20, 10, 5, -5, -10, -20, -30]
  }

  initialize(){
    this.createGrid()
    this.generateIntersections()
    this.generateKeymap()
  }

  createGrid(){
    let row =[]
    for(let i = 0; i < 19; i++){
      row.push("x")
    }
    for(let j = 0; j < 19; j++){
      this.boardState.push(row)
    }
  }

  generateIntersections(){
    this.boardState.forEach((row, i) => {
      row.forEach((Symbol, j) => {
        switch (Symbol) {
          case "x":
          this.intersections.push(
            new Intersection({
              cartesian: {
                x: j,
                y: i,
              },
              dimensions: {
                width: 30,
                height: 15,
              },
              StarPoint: 'No'
            })
            );
          }
        });
      });
      this.intersections.forEach(intersection =>{
        intersection.initialize(this.offset[0])
      })
  }

  generateKeymap(){
    this.intersections.forEach(intersection =>{
      let x = intersection.isometric.x
      let y = intersection.isometric.y
      this.keymap[[x,y]] = intersection
    })
  }
}

class Intersection{
  constructor({
    cartesian,
    isometric,
    dimensions,
    labels,
    StarPoint,
  }){
    this.cartesian = cartesian
    this.isometric = isometric
    this.dimensions = dimensions
    this.labels = labels
    this.StarPoint = StarPoint
  }

  initialize(offset){
    this.createlabels()
    this.createCanvas(offset)
    this.createStarPoints()
  }

  createlabels(){
    this.labels = {
      letter: Goban.UI.labels.letters[this.cartesian.x],
      number: Goban.UI.labels.numbers[this.cartesian.y]
    }
  }

  createCanvas(offset){
    this.isometric = {
      x: this.cartesian.x * this.dimensions.height + offset,
      y: this.cartesian.y * this.dimensions.height + offset
    }
  }

  createStarPoints(){
    let starPoints = [[3,3],[3,9],[3,15],[9,3],[9,9],[9,15],[15,3],[15,9],[15,15]]
    starPoints.forEach(star =>{
      let sx = star[0]
      let sy = star[1]
      let cx = this.cartesian.x
      let cy = this.cartesian.y
      if(cx === sx && cy === sy){
        this.StarPoint = 'Yes'
      }
    })
  }
}

class Board {
  constructor(){
    this.boardState = []
    this.cartesianIntersections = []
    this.cartesianStarPoints = []
    this.cartesianLabels = []
    this.intersectionKeymap = {}
    this.labelKeymap = {}
    this.starPointKeymap = {}
    this.offset = 30
  }

  initialize(boardSize){
    let boardState = this.boardState
    let starPoint = this.starPointKeymap
    let labelKeymap = this.labelKeymap
    this.createCartesianGrid(boardState, boardSize)
    this.createstarPointGrid(starPoint)
    this.createLabels(labelKeymap, boardSize)
  }

  createCartesianGrid(boardState, boardSize){
    this.createBoardState(boardState, boardSize)
    this.generateCartesianGrid(boardState)
    this.generateIntersectionKeymap(this.cartesianIntersections)
  }

  createBoardState(boardState, boardSize){
    let row = []
    for(let i = 0; i < boardSize; i++){
      row.push('.')
    }
    for(let j = 0; j < boardSize; j++){
      boardState.push(row)
    }
  }

  generateCartesianGrid(boardState){
    boardState.forEach((row, i) => {
      row.forEach((Symbol, j) => {
        switch (Symbol) {
          case ".":
            this.cartesianIntersections.push(
              new Intersection({
                cartesian: {x: j, y: i}
              })
            );
        }
      });
    });
  }

  generateIntersectionKeymap(cartesian){
    cartesian.forEach(intersection =>{
      intersection.setCanvasCoordinates(this.offset)
      let x = intersection.canvasCoordinate.x
      let y = intersection.canvasCoordinate.y
      this.intersectionKeymap[[x,y]]= {intersection: {
        cartesian: {
          x: intersection.cartesian.x,
          y: intersection.cartesian.y
        }
      }}
    })
  }

  createstarPointGrid(starPoint){
    this.generateStarPointKeymap(starPoint)
    this.generateCartesianStarPoint(starPoint)
  }

  generateStarPointKeymap(starPoint){
    for(let i = 0; i < 9; i++){
      let star = new Star()
      let x = star.point[i][0] * this.cartesianIntersections[0].height + this.offset
      let y = star.point[i][1] * this.cartesianIntersections[0].height + this.offset
      starPoint[[x,y]]= {
        star: {point: star.point[i]}
      }
    }
  }

  generateCartesianStarPoint(starPoint){

  }



  createLabels(labelKeymap, boardSize){
    let temporaryCartesianLabels = []
    let cartesianLabels = this.cartesianLabels
    this.createLabelState(temporaryCartesianLabels, boardSize)
    this.generateCartesianLabels(temporaryCartesianLabels, cartesianLabels)
    this.generateLabelKeymap(cartesianLabels, labelKeymap)
  }

  createLabelState(temporaryCartesianLabels, boardSize){
    let row = []
    for(let i = 0; i < boardSize; i++){
      row.push('.')
    }
    for(let j = 0; j < boardSize; j++){
      temporaryCartesianLabels.push(row)
    }
  }

  generateCartesianLabels(temporaryCartesianLabels, cartesianLabels){
      temporaryCartesianLabels.forEach((row, i) => {
        row.forEach((Symbol, j) => {
          switch (Symbol) {
            case ".":
              cartesianLabels.push(
                new Character({
                  cartesian: {x: j, y: i},
                })
              );
          }
        });
      });
  }

  generateLabelKeymap(cartesianLabels, labelKeymap){
    cartesianLabels.forEach(character =>{
      let x = character.cartesian.x * this.cartesianIntersections[0].height + this.offset
      let y = character.cartesian.y * this.cartesianIntersections[0].height + this.offset
      labelKeymap[[x,y]]= {label: {
        letter: character.letter[character.cartesian.x % 19],
        number: character.number[character.cartesian.y % 19]
      }}
    })
  }

}

class Intersection{
  constructor({cartesian, canvasCoordinate}){
    this.width = 30
    this.height = 15
    this.cartesian = cartesian
    this.canvasCoordinate = canvasCoordinate
  }

  setCanvasCoordinates(offset){
    this.canvasCoordinate = {
      x: this.cartesian.x * this.height + offset,
      y: this.cartesian.y * this.height + offset
    }
  }
}

class Stone {
  constructor(){
    this.state = ['empty','filled']
    this.color = ['black', 'white']
    this.size = 8
  }
}

class Character {
  constructor({cartesian}){
    this.letter = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T"]
    this.number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 18, 19, ]
    this.cartesian = cartesian
  }
}

class Star {
  constructor({
    cartesian = {
      x: 0,
      y: 0
    },
    canvasCoordinate
  }){
    this.point = [[3,3],[3,9],[3,15],[9,3],[9,9],[9,15],[15,3],[15,9],[15,15]]
    this.size = 3
    this.cartesian = cartesian
    this.canvasCoordinate = canvasCoordinate
  }

  setCanvasCoordinates(offset){
    this.canvasIntersection = {
      x: this.intersection.x * this.height + offset,
      y: this.intersection.y * this.height + offset
    }
  }

}

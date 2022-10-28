class Board {
  constructor(){
    this.boardState = []
    this.cartesianIntersections = []
    this.intersectionKeymap = {}
    this.labelKeymap = []
    this.starPointKey = {}
    this.offset = 30
  }

  initialize(boardSize){
    let boardState = this.boardState
    let starPoint = this.starPointKey
    let labelKeymap = this.labelKeymap
    this.createCartesianGrid(boardState, boardSize)
    this.createstarPointKey(starPoint)
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
      let x = intersection.cartesian.x * intersection.height + this.offset
      let y = intersection.cartesian.y * intersection.height + this.offset
      this.intersectionKeymap[[x,y]]= {intersection: {
        cartesian: {
          x: intersection.cartesian.x,
          y: intersection.cartesian.y
        }
      }}
    })
  }

  createstarPointKey(starPoint){
    for(let i = 0; i < 9; i++){
      let star = new Star()
      let x = star.point[i][0] * this.cartesianIntersections[0].height + this.offset
      let y = star.point[i][1] * this.cartesianIntersections[0].height + this.offset
      starPoint[[x,y]]= {
        star: {
          point: star.point[i]
        }
      }
    }
  }

  createLabels(labelKeymap, boardSize){
    let temporaryCartesianLabels = []
    let temporaryLabels = []

    this.createLabelState(temporaryCartesianLabels, boardSize)
    this.generateCartesianLabels(temporaryCartesianLabels, temporaryLabels)
    this.generateLabelKeymap(temporaryLabels, labelKeymap)
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

  generateCartesianLabels(temporaryCartesianLabels, temporaryLabels){
      temporaryCartesianLabels.forEach((row, i) => {
        row.forEach((Symbol, j) => {
          switch (Symbol) {
            case ".":
              temporaryLabels.push(
                new Character({
                  cartesian: {x: j, y: i},
                })
              );
          }
        });
      });
  }

  generateLabelKeymap(temporaryLabels, labelKeymap){
    temporaryLabels.forEach(character =>{
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
  constructor({cartesian}){
    this.width = 30
    this.height = 15
    this.cartesian = cartesian
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
  constructor(){
    this.point = [[3,3],[3,9],[3,15],[9,3],[9,9],[9,15],[15,3],[15,9],[15,15]]
    this.size = 3
  }
}

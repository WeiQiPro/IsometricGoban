let stoneInterface = {
  initialize:() =>{
      jsBoard.intersections.forEach(intersection => {
          let x = intersection.canvas.position.x
          let y = intersection.canvas.position.y
          stoneInterface.stones[[x,y]] = {
              filled: undefined,
              color: undefined,
              adjacent: [],
              emptySpaces: [],
              liberties: []
          }
      })
  },
  stones: {},
  lastPlaced: undefined,
  hoveredStone: undefined,
}

class Stone {
  constructor({}) {
  this.color
  this.radius = 6
  this.adjacent = []
  this.emptySpaces
  this.liberties
  }



  calculateAdjacentIntersections(stoneInterface){
    let adjacent = 15
    let x = stoneInterface.stones[[0]]
    let y = stoneInterface.stones[[1]]
    stoneInterface.stones.adjacent.push(
      [stoneInterface.Stone[[x - adjacent,y]]]
      )
    stoneInterface.stones.adjacent.push(
      [stoneInterface.Stone[[x + adjacent,y]]]
      )
    stoneInterface.stones.adjacent.push(
      [stoneInterface.Stone[[x ,y - adjacent]]]
      )
    stoneInterface.stones.adjacent.push(
      [stoneInterface.Stone[[x ,y + adjacent]]]
      )
  }

  calculateEmptySpace(){

  }

  calculateLiberties(){

  }
}

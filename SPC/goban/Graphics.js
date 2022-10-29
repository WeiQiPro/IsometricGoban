class Graphics {
  constructor() {
    this.color = ['black', 'white', 'rgb(199,108,63)']
  }

  initializeBoardGraphics(gobanUI){
    let board = gobanUI.board
    let display = gobanUI.display
    let matrix = gobanUI.matrix
    this.generateBoardGraphics(board, display, matrix)
    this.generateStarPointGraphic(board, display, matrix)
    this.generateLabelGraphics(board, display, matrix)
  }

  determinedDisplayType(display, matrix){
    if (display === 'cartesian') {return}
    if (display === 'isometric') {
      return gobanUI.visual().transform(
        matrix[0],matrix[1],matrix[2],matrix[3],matrix[4],matrix[5])
    }
  }

  generateBoardGraphics(board, display, matrix){
    let lastRow = board.cartesianIntersections[360].cartesian.y
    let lastColumn = board.cartesianIntersections[360].cartesian.x

    board.cartesianIntersections.forEach(intersection =>{
      let canvasCoordinate = {
        x: intersection.canvasCoordinate.x,
        y: intersection.canvasCoordinate.y
      }
      let height = intersection.height
      if (intersection.cartesian.y != lastRow && intersection.cartesian.x != lastColumn ){
        gobanUI.visual().save()
        this.determinedDisplayType(display,  matrix)
        gobanUI.visual().fillStroke = this.color[2]
        gobanUI
          .visual()
          .strokeRect(
            canvasCoordinate.x,
            canvasCoordinate.y,
            height,
            height
          )
          gobanUI.visual().fillStyle = this.color[2]
          gobanUI
            .visual()
            .fillRect(
              canvasCoordinate.x,
              canvasCoordinate.y,
              height,
              height
            )
            gobanUI.visual().restore()
          }
        }
    )
  }

  generateLabelGraphics(){

  }

  generateStarPointGraphic(){

  }

  responsiveStoneGraphics(){
    this.generateStoneOnCursorHover()
    this.generateStoneGraphic()
  }

  generateStoneOnCursorHover(){

  }

  generateStoneGraphic(){

  }

}

class Graphics {
  constructor(graphics) {
    this.graphics = graphics
    this.colorGraphics = ['black', 'white', 'rgb(199,108,63)']
    this.offsetGraphics = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
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
        gobanUI.visual().fillStroke = this.colorGraphics[2]
        gobanUI
          .visual()
          .strokeRect(
            canvasCoordinate.x,
            canvasCoordinate.y,
            height,
            height
          )
          gobanUI.visual().fillStyle = this.colorGraphics[2]
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

  generateLabelGraphics(board, display, matrix){
  }

  generateStarPointGraphic(board, display, matrix){
    board.cartesianStarPoints.forEach(star => {
    gobanUI.visual().save()
    this.determinedDisplayType(display, matrix)
    gobanUI.visual().beginPath()
    gobanUI
      .visual()
      .arc(
        x,
        y,
        size,
        0,
        2 * Math.PI/2
      )
      gobanUI.visual().strokeStyle = this.colorGraphics[0]
      gobanUI.visual().fill()
      gobanUI.visual().closePath()
      gobanUI.visual().restore()
      }
    )
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

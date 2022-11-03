class Graphics {
  constructor(graphics) {
    this.graphics = graphics
    this.colorGraphics = ['black', 'white', 'rgb(199,108,63)']
    this.offsetGraphics = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    this.size = [3, 6, 9, 12, 15]
  }

  initializeBoard(UI){
    let board = UI.board
    let display = UI.display
    let matrix = UI.matrix
    this.generateBoardGraphics(board, display, matrix)
    this.generateStarPointGraphic(board, display, matrix)
    this.generateLabelGraphics(board, display, matrix)
  }

  determinedDisplayType(display, matrix){
    if (display === 'cartesian') {return}
    if (display === 'isometric') {
      return gobanUI.visual().transform(
        matrix[0],matrix[1],matrix[2],matrix[3],matrix[4],matrix[5]
      )
    }
  }

  generateBoardGraphics(board, display, matrix){
    let lastRow = board.intersections[360].cartesian.y
    let lastColumn = board.intersections[360].cartesian.x

    board.intersections.forEach(intersection =>{
      let isometric = {
        x: intersection.isometric.x,
        y: intersection.isometric.y
      }
      let height = intersection.dimensions.height
      if (intersection.cartesian.y != lastRow && intersection.cartesian.x != lastColumn ){
        gobanUI.visual().save()
        this.determinedDisplayType(display,  matrix)
        gobanUI.visual().fillStroke = this.colorGraphics[2]
        gobanUI
          .visual()
          .strokeRect(
            isometric.x,
            isometric.y,
            height,
            height
          )
          gobanUI.visual().fillStyle = this.colorGraphics[2]
          gobanUI
            .visual()
            .fillRect(
              isometric.x,
              isometric.y,
              height,
              height
            )
            gobanUI.visual().restore()
          }
        }
    )
  }

  generateLabelGraphics(board, display, matrix){
    let lastRow = board.intersections[360].cartesian.y
    let lastColumn = board.intersections[360].cartesian.x


  }

  generateStarPointGraphic(board, display, matrix){
    board.intersections.forEach(intersection =>{
      if (intersection.StarPoint === 'Yes'){
        gobanUI.visual().save()
        this.determinedDisplayType(display, matrix)
        gobanUI.visual().beginPath()
        gobanUI
          .visual()
          .arc(
            intersection.isometric.x,
            intersection.isometric.y,
            this.size[0],
            0,
            4 * Math.PI/2
          )
          gobanUI.visual().strokeStyle = this.colorGraphics[0]
          gobanUI.visual().fill()
          gobanUI.visual().closePath()
          gobanUI.visual().restore()
        }}
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

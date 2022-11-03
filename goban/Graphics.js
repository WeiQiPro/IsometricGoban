class Graphics {
  constructor(graphics) {
    this.graphics = graphics
    this.color = ['black', 'white', 'rgb(199,108,63)']
    this.offset = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
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
      return Goban.Graphics.visual().transform(
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
        Goban.Graphics.visual().save()
        this.determinedDisplayType(display,  matrix)
        Goban.Graphics.visual().fillStroke = this.color[2]
        Goban.Graphics
          .visual()
          .strokeRect(
            isometric.x,
            isometric.y,
            height,
            height
          )
          Goban.Graphics.visual().fillStyle = this.color[2]
          Goban.Graphics
            .visual()
            .fillRect(
              isometric.x,
              isometric.y,
              height,
              height
            )
            Goban.Graphics.visual().restore()
          }
        }
    )
  }

  generateLabelGraphics(board, display, matrix){
    let lastRow = board.intersections[360].cartesian.y
    let lastColumn = board.intersections[360].cartesian.x

    board.intersections.forEach(intersection =>{
      if(intersection.cartesian.y === lastRow){
      Goban.Graphics.visual().font = "12px serif";
      Goban.Graphics.visual().fillStyle = "black";
      Goban.Graphics.visual().save();
      this.determinedDisplayType(display,  matrix)
      Goban.Graphics.visual().beginPath();
      Goban.Graphics
        .visual()
        .fillText(intersection.labels.letter,
          intersection.isometric.x - this.offset[0],
          intersection.isometric.y + this.offset[2]
          );
      Goban.Graphics.visual().restore();
      }

      if(intersection.cartesian.x === lastColumn){
        Goban.Graphics.visual().font = "12px serif";
        Goban.Graphics.visual().fillStyle = "black";
        Goban.Graphics.visual().save();
        this.determinedDisplayType(display,  matrix)
        Goban.Graphics.visual().beginPath();
        Goban.Graphics
          .visual()
          .fillText(intersection.labels.number,
            intersection.isometric.x + this.offset[0],
            intersection.isometric.y + this.offset[0]
            );
        Goban.Graphics.visual().restore();
      }
    })


  }

  generateStarPointGraphic(board, display, matrix){
    board.intersections.forEach(intersection =>{
      if (intersection.StarPoint === 'Yes'){
        Goban.Graphics.visual().save()
        this.determinedDisplayType(display, matrix)
        Goban.Graphics.visual().beginPath()
        Goban.Graphics
          .visual()
          .arc(
            intersection.isometric.x,
            intersection.isometric.y,
            this.size[0],
            0,
            4 * Math.PI/2
          )
          Goban.Graphics.visual().strokeStyle = this.color[0]
          Goban.Graphics.visual().fill()
          Goban.Graphics.visual().closePath()
          Goban.Graphics.visual().restore()
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

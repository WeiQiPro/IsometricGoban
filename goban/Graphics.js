class Graphics {
  constructor(graphics) {
    this.graphics = graphics
    this.color = ['black', 'white', 'rgb(199,108,63)']
    this.offset = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    this.size = [3, 6, 7.5, 9, 10, 12, 15]
  }

  initializeBoard(UI){
    let board = UI.board
    let display = UI.display
    let matrix = UI.matrix
    this.generateBoardGraphics(board, display, matrix)
    this.generateStarPointGraphic(board, display, matrix)
    this.generateLabelGraphics(board, display, matrix)
  }

  determinedDisplayType(display, matrix, type){
    if (display === 'cartesian') {return}
    if (display === 'isometric') {
      return type.visual().transform(
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5]
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
        this.determinedDisplayType(display,  matrix, Goban.Graphics)
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
      this.determinedDisplayType(display,  matrix, Goban.Graphics)
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
        this.determinedDisplayType(display,  matrix, Goban.Graphics)
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
        this.determinedDisplayType(display, matrix, Goban.Graphics)
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

  responsiveStoneGraphics({hovered, clicked}, intersection, display, matrix){
    if (hovered === 'Yes' && intersection.Stone != 'Yes'){
    this.generateStoneOnHover(intersection, display, matrix)}
    if (clicked === 'Yes' && intersection.Stone != 'Yes'){
      this.generateStoneOnClick(intersection, display, matrix)
    }
  }

  generateStoneOnHover(intersection, display, matrix){
    let x = intersection.isometric.x
    let y = intersection.isometric.y
    let size = this.size[2]
    let color = ApplicationState.players.colorState
    Goban.cursor.visual().clearRect(0,0, 1920, 1080);
    Goban.cursor.visual().save();
    this.determinedDisplayType(display, matrix, Goban.cursor)
    Goban.cursor.visual().beginPath();
    Goban.cursor
      .visual()
      .arc(
        x ,
        y ,
        size,
        0,
        2 * Math.PI
      );
    if(color === this.color[1]){
      Goban.cursor.visual().strokeStyle = this.color[0];
      Goban.cursor.visual().stroke();
      Goban.cursor.visual().fillStyle = color;
      Goban.cursor.visual().fill();
    }
    else {
      Goban.cursor.visual().fillStyle = this.color[0];
      Goban.cursor.visual().fill();
    }
    Goban.cursor.visual().closePath();
    Goban.cursor.visual().restore();
  }


  generateStoneOnClick(intersection, display, matrix){
    let x = intersection.isometric.x
    let y = intersection.isometric.y
    let size = this.size[2]
    let color = ApplicationState.players.colorState
    Goban.stone.visual().save();
    this.determinedDisplayType(display, matrix, Goban.stone)
    Goban.stone.visual().beginPath();
    Goban.stone
      .visual()
      .arc(
        x ,
        y ,
        size,
        0,
        2 * Math.PI
      );
    if(color === this.color[1]){
      Goban.stone.visual().strokeStyle = this.color[0];
      Goban.stone.visual().stroke();
      Goban.stone.visual().fillStyle = color;
      Goban.stone.visual().fill();
    }
    else {
      Goban.stone.visual().fillStyle = this.color[0];
      Goban.stone.visual().fill();
    }
    Goban.stone.visual().closePath();
    Goban.stone.visual().restore();
  }

}

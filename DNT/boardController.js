class BoardController {
    constructor() {
      this.offset = {
        x: [15, 25, 30, 5],
        y: [30, 20, 0, 8]
      }
      this.color = [
        'rgba(0,0,0,1)','black', 'white'
      ]
    }

    draw(jsBoard) {
      this.drawBoard(jsBoard);
      this.findStarPoints(jsBoard);
      this.drawLabels(jsBoard);
    }

    // drawing the board it self
    drawBoard(jsBoard) {
      for (let i = 0; i < jsBoard.intersections.length; i++) {
        if (i % 19 !== 18 && jsBoard.intersections[i].position.y < jsBoard.lastRow)
            this.drawBoardType(jsBoard.intersections[i]);
      }
    };

    drawBoardType(jsBoard) {
      isometricUI.board.visual().save();
      if (isometricUI.board.viewType === "isometric") {
        isometricUI.board.visual()
          .transform(
            matrix[0],
            matrix[1],
            matrix[2],
            matrix[3],
            matrix[4],
            matrix[5]
          );
      }
      isometricUI.board.visual().lineWidth = 1;
      isometricUI.board.visual().strokeStyle = "black";
      isometricUI.board.visual()
        .strokeRect(
          jsBoard.canvas.position.x,
          jsBoard.canvas.position.y,
          jsBoard.aspectratio.height,
          jsBoard.aspectratio.height
        );
        isometricUI.board.visual().fillStyle = ' rgb(160, 110, 49)'
        isometricUI.board.visual()
          .fillRect(
          jsBoard.canvas.position.x,
          jsBoard.canvas.position.y,
          jsBoard.aspectratio.height,
          jsBoard.aspectratio.height
          );
      isometricUI.board.visual().restore();
    };

    // drawing labels on the side of the board
    findStarPoints(jsBoard) {
        let intersections = jsBoard.intersections;
        let starPoints = jsBoard.starPoints;
        let starPointRadius = jsBoard.starPointRadius;

        for(let s = 0; s < starPoints.length; s++){
          for(let i = 0; i < intersections.length; i++){

            let intersectionX = intersections[i].position.x
            let intersectionY = intersections[i].position.y
            let starPointsX = starPoints[s][0]
            let starPointsY = starPoints[s][1]

            if (intersectionX === starPointsX && intersectionY === starPointsY) {
              this.drawStarPoints(intersections[i], this.color[1], starPointRadius)
            }
          }
        }
    }

    drawStarPoints(jsBoard, color, radius) {
      {
        isometricUI.board.visual().save();
        isometricUI.board
          .visual()
          .transform(
            matrix[0],
            matrix[1],
            matrix[2],
            matrix[3],
            matrix[4],
            matrix[5]
          );
        isometricUI.board.visual().beginPath();
        isometricUI.board
          .visual()
          .arc(
            jsBoard.canvas.position.x,
            jsBoard.canvas.position.y,
            radius,
            0,
            2 * Math.PI
          );
        isometricUI.board.visual().fillStyle = color;
        isometricUI.board.visual().fill();
        isometricUI.board.visual().closePath();
        isometricUI.board.visual().restore();
      }
    };

    // draw labels on board canvas
    drawLabels(jsBoard){
      for (let i = 0; i < jsBoard.intersections.length; i++) {
          if (i % 19 == 0) {
            this.drawLetter(jsBoard.intersections[i])
          }

          if (jsBoard.intersections[i].position.y == jsBoard.firstRow) {
            this.drawNumber(jsBoard.intersections[i])
        }
      }
    }

    drawLetter(jsBoard) {
      isometricUI.board.visual().font = "12px serif";
      isometricUI.board.visual().fillStyle = "black";
      isometricUI.board.visual().save();
      if (isometricUI.board.viewType === "isometric") {
        isometricUI.board
          .visual()
          .transform(
            matrix[0],
            matrix[1],
            matrix[2],
            matrix[3],
            matrix[4],
            matrix[5]
          );
      }
      isometricUI.board.visual().beginPath();
      isometricUI.board
        .visual()
        .fillText(jsBoard.label.letter,
          jsBoard.canvas.position.x - this.offset.x[0],
          jsBoard.canvas.position.y + this.offset.y[2]
          );
      isometricUI.board.visual().restore();
    };

    drawNumber(jsBoard) {
      isometricUI.board.visual().font = "12px serif";
      isometricUI.board.visual().fillStyle = "black";
      isometricUI.board.visual().save();
      if (isometricUI.board.viewType === "isometric") {
        isometricUI.board
          .visual()
          .transform(
            matrix[0],
            matrix[1],
            matrix[2],
            matrix[3],
            matrix[4],
            matrix[5]
          );
      }
      isometricUI.board.visual().beginPath();
      isometricUI.board
        .visual()
        .fillText(jsBoard.label.number,
          jsBoard.canvas.position.x - this.offset.x[3],
          jsBoard.canvas.position.y - this.offset.y[3]
          );
      isometricUI.board.visual().restore();
    };

    //drawing on the stone canvas
    drawStone(jsBoard, color, radius) {
      {
        isometricUI.stone.visual().save();
        isometricUI.stone
          .visual()
          .transform(
            matrix[0],
            matrix[1],
            matrix[2],
            matrix[3],
            matrix[4],
            matrix[5]
          );
        isometricUI.stone.visual().beginPath();
        isometricUI.stone
          .visual()
          .arc(
            position.x * aspectratio.height + 30,
            position.y * aspectratio.height + 30,
            radius,
            0,
            2 * Math.PI
          );
        if(color === colorType[2]){
          isometricUI.stone.visual().strokeStyle = colorType[1];
          isometricUI.stone.visual().stroke();
          isometricUI.stone.visual().fillStyle = color;
          isometricUI.stone.visual().fill();
        }
        else {
          isometricUI.stone.visual().fillStyle = color;
          isometricUI.stone.visual().fill();
        }
        isometricUI.stone.visual().closePath();
        isometricUI.stone.visual().restore();
      }
    };

  }

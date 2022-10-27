class BoardController {
    constructor() {}
    
    draw(jsBoard) {              
      this.drawBoard(jsBoard);
      this.drawStarpoints(jsBoard)
      jsBoard.intersections.forEach(intersection => {
        let x = intersection.position.x * intersection.aspectratio.height + 30
        let y = intersection.position.y * intersection.aspectratio.height + 30
        gridCoordinates[[x,y]] = intersection
      }
      )
    }
    
    drawBoard(jsBoard) {
      let lastRow = jsBoard.intersections[360].position.y;
      let firstRow = jsBoard.intersections[0].position.y;
      
      for (let i = 0; i < jsBoard.intersections.length; i++) {
        if (i % 19 !== 18 && jsBoard.intersections[i].position.y < lastRow)
        jsBoard.intersections[i].drawBoard(viewBoardType);
      }
      
      for (let i = 0; i < jsBoard.intersections.length; i++) {
        if (i % 19 == 0) jsBoard.intersections[i].drawLetter(coordinateLetters);
      }
      
      for (let i = 0; i < jsBoard.intersections.length; i++) {
        if (jsBoard.intersections[i].position.y == firstRow) jsBoard.intersections[i].drawNumber(coordinateNumbers);
      }
    };

    drawStarpoints(jsBoard) {
        let intersections = jsBoard.intersections;
        let starPoints = jsBoard.starPoints;
        let starPointRadius = jsBoard.starPointRadius;

        for(let s = 0; s < starPoints.length; s++){
          for(let i = 0; i < intersections.length; i++){
            let intersectionX = intersections[i].position.x
            let intersectionY = intersections[i].position.y
            let starpointsX = starPoints[s][0]
            let starpointsY = starPoints[s][1]
            if (intersectionX === starpointsX && intersectionY === starpointsY) {
              intersections[i].drawStone(
                stonedrawType,
                colorType[1],
                starPointRadius)
            }
          }
        }
      }
  
  }
let DataStructure = {
  functions: (goban, dataStructure) => {
    DataStructure.Cursor.coordinates.onmousemove(goban, dataStructure)

  },
  players:{
    ID:{
      1: undefined,
      2: undefined
    },
    colorState: 'black',
    nextColor: 'white',
    turn: 0,
    white: {
      komi: 7.5,
      captures: 0
    },
    black: {
      captures: 0
    }

  },

  Goban: {
    board: new Board(),
    SGF: [],
    boardState: [],
    stones: [],
  },

  Cursor: {
    hoveredIntersection: undefined,
    coordinates: {
      onmousemove: (goban, dataStructure) => {
       goban.Cursor.canvas().addEventListener("mousemove", (e) => {
          let cursorX = e.clientX - Math.round(window.scrollX);
          let cursorY = e.clientY - Math.round(window.scrollY);
          dataStructure.Cursor.canvas = CoordinatesScreenToCanvas.function(cursorX, cursorY);
       })
      },
      canvas: {
        x: 0,
        y: 0
      }

    }
  }
}

let CoordinatesScreenToCanvas = {
  MatrixToInverseMatrix: () => {
    let matrix = Goban.UI.matrix
    let inverseMatrix = Goban.UI.inverseMatrix
    crossProduct = matrix[0] * matrix[3] - matrix[1] * matrix[2];

    inverseMatrix[0] = matrix[3] / crossProduct;
    inverseMatrix[1] = -matrix[1] / crossProduct;
    inverseMatrix[2] = -matrix[2] / crossProduct;
    inverseMatrix[3] = matrix[0] / crossProduct;

  },
  function: (x, y) => {
    let matrix = Goban.UI.matrix
    let inverseMatrix = Goban.UI.inverseMatrix
    let xx, yy, result;
    xx = x - matrix[4];
    yy = y - matrix[5];
    return {
      x: xx * inverseMatrix[0] + yy * inverseMatrix[2],
      y: xx * inverseMatrix[1] + yy * inverseMatrix[3],
    };}
}

let FindNearestIntersection = function(mouse, intersection){
        let modulator = intersection.Height
        let modulatorHalf = modulator/2
        let mouseX = mouse.canvas.position.x
        let mouseY = mouse.canvas.position.y

        let modmouseX = mouseX % modulator
        let modmouseY = mouseY % modulator
        let immediate = {
            intersection: {
                x: null,
                y: null
            }
        }

        if(modmouseX >= modulatorHalf){
            immediate.intersection.x = (mouseX + (modulator - modmouseX))
        } else if (modmouseX <= modulatorHalf) {
            immediate.intersection.x = (mouseX - modmouseX)
        }

        if(modmouseY >= modulatorHalf){
            immediate.intersection.y = (mouseY + (modulator - modmouseY))
        } else if (modmouseY <= modulatorHalf) {
            immediate.intersection.y = (mouseY - modmouseY)
        }

     DataStructure.Cursor.hoveredIntersection = jsBoard.intersectionKey[[immediate.intersection.x, immediate.intersection.y]]

}

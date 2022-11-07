let DataStructure = {
  onClickDataChanges: () => {
    let SGFtoboardState = []
    DataStructure.Cursor.hoveredIntersection.Stone = 'Yes'
    DataStructure.Goban.SGF.push([DataStructure.Cursor.hoveredIntersection.labels.letter, DataStructure.Cursor.hoveredIntersection.labels.number])
    DataStructure.Goban.boardState.push(SGFtoboardState.concat(DataStructure.Goban.SGF))
    DataStructure.Goban.stones.push([DataStructure.Cursor.hoveredIntersection, DataStructure.players.colorState])
    DataStructure.players.turn += 1
    if(DataStructure.players.colorState === 'black'){
      DataStructure.players.colorState = 'white'
    } else DataStructure.players.colorState = 'black'
  },
  functions: (goban, dataStructure) => {
    DataStructure.Cursor.coordinates.onmousemove(goban, dataStructure)
    DataStructure.Cursor.coordinates.onmousedown(goban, dataStructure)
  },

  players:{
    ID:{
      1: undefined,
      2: undefined
    },
    colorState: 'black',
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
          dataStructure.Cursor.coordinates.canvas = CoordinatesScreenToCanvas.function(cursorX, cursorY);
          FindNearestIntersection(dataStructure)
          if(dataStructure.Cursor.hoveredIntersection != undefined){
          if (dataStructure.Cursor.hoveredIntersection.Stone === "No"){
            let hovered = 'Yes'
            let clicked = 'No'
            Goban.Graphics.controller.responsiveStoneGraphics(
              {hovered, clicked},
              dataStructure.Cursor.hoveredIntersection,
              Goban.UI.display,
              Goban.UI.matrix
              )
          }}
        })
      },
      onmousedown: () => {
        Goban.Cursor.canvas().addEventListener("mousedown", () => {
          if(DataStructure.Cursor.hoveredIntersection != 'Yes'){
            let hovered = 'No'
            let clicked = 'Yes'
            Goban.Graphics.controller.responsiveStoneGraphics(
              {hovered, clicked},
              DataStructure.Cursor.hoveredIntersection,
              Goban.UI.display,
              Goban.UI.matrix,
              DataStructure.players.colorState
            )
            if (DataStructure.Cursor.hoveredIntersection.Stone != 'Yes') return DataStructure.onClickDataChanges()
          }
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
    };
  }
}

let FindNearestIntersection = function(dataStructure){
  let modulator = Goban.UI.board.intersections[0].dimensions.height
  let modulatorHalf = modulator/2
  let mouseX = Math.floor(dataStructure.Cursor.coordinates.canvas.x)
  let mouseY = Math.floor(dataStructure.Cursor.coordinates.canvas.y)

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

  return DataStructure.Cursor.hoveredIntersection = Goban.UI.board.keymap[[immediate.intersection.x, immediate.intersection.y]]

}

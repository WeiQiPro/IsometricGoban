let ApplicationState = {
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

  goban: {
    board: new Board(),
    SGF: [],
    boardState: [],
    stones: [],
  },

  cursor: {
    hoveredIntersection: undefined,
    screen:{
      x: 0,
      y: 0,
    },
    canvas: {
      x: 0,
      y: 0
    }
  }
}

let CoordinatesScreenToCanvas = {
  matrixToInverseMatrix: () => {
    let matrix = Goban.UI.matrix
    let inverseMatrix = Goban.UI.inverseMatrix
    crossProduct = matrix[0] * matrix[3] - matrix[1] * matrix[2];

    inverseMatrix[0] = matrix[3] / crossProduct;
    inverseMatrix[1] = -matrix[1] / crossProduct;
    inverseMatrix[2] = -matrix[2] / crossProduct;
    inverseMatrix[3] = matrix[0] / crossProduct;

  },

  mouseToCanvas: (x, y) => {
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

let MouseInteraction = {

  updateApplicationState: () => {
    MouseInteraction.changeIntersectionStone()
    MouseInteraction.changeGobanInformation()
    MouseInteraction.changePlayersInformation()
  },

  setupCallbacks: (goban, ApplicationState) => {
    MouseInteraction.setupCallbackToDisplayHoverStone(goban, ApplicationState)
    MouseInteraction.setupCallbackToPlayStone(goban, ApplicationState)
  },

  setupCallbackToDisplayHoverStone: () => {
    Goban.cursor.canvas().addEventListener("mousemove", (e) => {
      let cursorX = ApplicationState.cursor.screen.x = e.clientX - Math.round(window.scrollX);
      let cursorY = ApplicationState.cursor.screen.y = e.clientY - Math.round(window.scrollY);
      ApplicationState.cursor.canvas = CoordinatesScreenToCanvas.mouseToCanvas(cursorX, cursorY);
      MouseInteraction.updateStateWithNearestIntersectionToCursor()
      if(ApplicationState.cursor.hoveredIntersection != undefined){
          MouseInteraction.updateHoverState()
      }
    })
  },

  updateStateWithNearestIntersectionToCursor: () => {
    let modulator = Goban.UI.board.intersections[0].dimensions.height
    let modulatorHalf = modulator/2
    let mouseX = Math.floor(ApplicationState.cursor.canvas.x)
    let mouseY = Math.floor(ApplicationState.cursor.canvas.y)

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

    return ApplicationState.cursor.hoveredIntersection = Goban.UI.board.keymap[[immediate.intersection.x, immediate.intersection.y]]

  },

  updateHoverState: () => {
    if (ApplicationState.cursor.hoveredIntersection.stone === "No"){
      let hovered = 'Yes'
      let clicked = 'No'
      Goban.Graphics.controller.responsiveStoneGraphics(
        {hovered, clicked},
        ApplicationState.cursor.hoveredIntersection,
        Goban.UI.display,
        Goban.UI.matrix
        )
    }
  },

  setupCallbackToPlayStone: () => {
    Goban.cursor.canvas().addEventListener(
      "mousedown",
      MouseInteraction.playStone
    )
  },

  playStone: () => {
    if(ApplicationState.cursor.hoveredIntersection != 'Yes'){
      let hovered = 'No'
      let clicked = 'Yes'
      Goban.Graphics.controller.responsiveStoneGraphics(
        {hovered, clicked},
        ApplicationState.cursor.hoveredIntersection,
        Goban.UI.display,
        Goban.UI.matrix,
        ApplicationState.players.colorState
      )
      if (ApplicationState.cursor.hoveredIntersection.stone != 'Yes')
      return MouseInteraction.updateApplicationState()
    }
  },

  changeIntersectionStone: () =>{
    ApplicationState.cursor.hoveredIntersection.stone = 'Yes'
    ApplicationState.goban.stones.push([
      ApplicationState.cursor.hoveredIntersection,
        ApplicationState.players.colorState
      ]
        )
  },

  changeGobanInformation: () => {
    let SGFtoboardState = []
    ApplicationState.goban.SGF.push([ApplicationState.cursor.hoveredIntersection.labels.letter, ApplicationState.cursor.hoveredIntersection.labels.number])
    ApplicationState.goban.boardState.push(SGFtoboardState.concat(ApplicationState.goban.SGF))
  },

  changePlayersInformation: () => {
    ApplicationState.players.turn += 1
    if(ApplicationState.players.colorState === 'black'){
      ApplicationState.players.colorState = 'white'
    } else ApplicationState.players.colorState = 'black'
  }

}

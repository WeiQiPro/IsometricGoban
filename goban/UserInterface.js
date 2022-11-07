let Goban = {
  UI: {
    board: new Board(),
    display: 'isometric',
    labels: {
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    matrix:[2, 1, -2, 1, 600, 000],
    inverseMatrix: [],
  },
  Graphics: {
    controller: new Graphics(),
    canvas: () => document.querySelector('#gobanCanvas'),
    visual: () => Goban.Graphics.canvas().getContext('2d'),
  },
  cursor: {
    canvas: () => document.querySelector('#cursorCanvas'),
    visual: () => Goban.cursor.canvas().getContext('2d'),
  },
  stone: {
    canvas: () => document.querySelector('#stoneCanvas'),
    visual: () => Goban.stone.canvas().getContext('2d'),
  }
}

let GobanFunctions = {
  initialize: (UI) => {
    Goban.UI.board.initialize(UI),
    DataStructure.Goban.board.dataInitialize(UI)
    Goban.Graphics.controller.initializeBoard(UI)
    CoordinatesScreenToCanvas.MatrixToInverseMatrix()
  },
}

GobanFunctions.initialize(Goban.UI)
DataFunctions.mouseFunctions(Goban, DataStructure)

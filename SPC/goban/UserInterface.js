let gobanUI = {
  initialize: () => {
    gobanUI.visual().fillStyle = 'white'
    gobanUI.visual().fillRect(0, 0, 1920, 1080)
    gobanUI.boardIntersections = gobanUI.board.intersectionKeymap
    gobanUI.boardLabels = gobanUI.board.labelKeymap

    gobanUI.board.initialize(gobanUI.size)
    gobanUI.boardGraphics.initializeBoardGraphics(gobanUI)
  },
  canvas: () => document.querySelector('#gobanCanvas'),
  visual: () => gobanUI.canvas().getContext('2d'),
  size: 19,
  display: 'isometric',
  matrix: [2, 1, -2, 1, 600, 0],
  boardGraphics: new Graphics(),
  board: new Board(),
  boardIntersections: '',
  boardLabels: '',
}

gobanUI.initialize()

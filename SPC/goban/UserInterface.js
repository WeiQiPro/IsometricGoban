let gobanUI = {
  initialize: () => {
    gobanUI.visual().fillStyle = 'black'
    gobanUI.visual().fillRect(0, 0, 1920, 1080)
  },
  canvas: () => document.querySelector('#gobanCanvas'),
  visual: () => gobanUI.canvas().getContext('2d'),
  size: 19,
  display: 'cartesian',
  boardGraphics: new Graphics(),
  board: new Board(),
  boardIntersections: '',
  boardLabels: '',
}

gobanUI.board.initialize(gobanUI.size)
gobanUI.boardIntersections = gobanUI.board.intersectionKeymap
gobanUI.boardLabels = gobanUI.board.labelKeymap
gobanUI.initialize()

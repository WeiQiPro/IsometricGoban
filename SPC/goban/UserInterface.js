let Goban = {
  UI: {
    board: new Board(),
    display: 'isometric',
    graphics: new Graphics(),
    labels: {
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    numbers: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    },
    matrix: [2, 1, -2, 1, 600, 000],
    initialize: (UI) => {
      Goban.UI.board.initialize(UI)
      Goban.Graphics.initializeBoardGUI)
    },
  },
  Graphics: {
    interface: new Graphics(),
    canvas: () => document.querySelector('#gobanCanvas'),
    visual: () => Goban.Graphics.canvas().getContext('2d'),
  },
  Mouse: {
    screen: {
      x: () =>{},
      y: () =>{}
    }
  }
}

Goban.UI.initialize(Goban)

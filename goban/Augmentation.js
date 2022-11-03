let DataStructure = {
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
    keymap: DataStructure.board.keymap,
  },

  Cursor: {
    hoveredIntersection: undefined,
    coordinates: {
      screen: {
        x: () =>{},
        y: () =>{}
      },
      canvas: {
        x: () => {},
        y: () => {}
      }
    }
  }
}

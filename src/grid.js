let boardGrid = [];

let createboardGrid = function () {
  row = [];
  for (let x = 0; x < 19; x++) {
    row.push("x");
  }
  for (let y = 0; y < 19; y++) {
    boardGrid.push(row);
  }
};

let board = function () {
  boardGrid.forEach((row, i) => {
    row.forEach((Symbol, j) => {
      switch (Symbol) {
        case "x":
          coordinates.push(
            new Coordinate({
              position: {
                x: j,
                y: i,
              },
              aspect: {
                width: 30,
                height: 15,
              },
              circle: {
                x: j,
                y: i,
                radius: 7,
              },
              stone: {
                color: null,
                state: 'empty'
              }
            })
          );
      }
    });
  });
};

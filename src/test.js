const goban = {
    board: function () {
      return document.querySelector("#goban");
    },
    visual: function () {
      return goban.board().getContext("2d");
    },
    width: 1920,
    height: 1080,
  };

  const mouse = {
    move: function () {
      addEventListener("mousemove", (e) => {
        mouse.position.x = e.clientX;
        mouse.position.y = e.clientY;
        coordinates.forEach((Coordinate) => {
          let coordinate = Coordinate;
          if (
            hoverMouse(
              mouse.position,
              coordinate.CoorPosition,
              coordinate.CoorAspect.height / 2,
            ) &&
            coordinate.stone === null
          ) {
            coordinate.hoverCircle();
            coordinate.stone = "fill";
          }
        });
      });
    },
    position: {
      x: 0,
      y: 0,
    },
  };

  class Coordinate {
    constructor({ position, aspect }) {
      this.CoorPosition = position;
      this.CoorAspect = aspect;
    }

    regDraw() {
      //goban.visual().save()
      //goban.visual().setTransform(1, -0.50, 0.50, 0.5, -.50, 500)
      goban.visual().lineWidth = 1.5;
      goban.visual().strokeStyle = "black";
      goban
        .visual()
        .strokeRect(
          this.CoorPosition.x * this.CoorAspect.height + 5,
          this.CoorPosition.y * this.CoorAspect.height + 5,
          this.CoorAspect.width,
          this.CoorAspect.width
        );
      //goban.visual().restore()
    }
    hoverCircle(x) {
      if ((x = true)) {
        stone.visual().beginPath();
        stone
          .visual()
          .arc(
            this.CoorPosition.x * this.CoorAspect.height + 5,
            this.CoorPosition.y * this.CoorAspect.height + 5,
            this.CoorCircle.radius,
            0,
            2 * Math.PI
          );
        stone.visual().strokeStyle = "black";
        stone.visual().stroke();
      }
    }
  }

  let boardGrid = [];
  let coordinates = [];
  let mouseClick = "reg";

  let hoverMouse = function (point, circle, radius) {
    let mouseX = point.x;
    let mouseY = point.y;
    let gridCoorX = circle.x;
    let gridCoorY = circle.y;
    let translateR = radius;
    let distX = mouseX - gridCoorX;
    let distY = mouseY - gridCoorY;

    let distance = Math.sqrt(distX * distX + distY * distY);

    if (distance <= translateR) {
      return true;
    }
    return false;
  };

  let initializeBoard = function () {
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
                  width: 50,
                  height: 25,
                },
              })
            );
        }
      });
    });
  };

  let visualUpdate = function () {
    goban.visual().fillStyle = "white";
    goban.visual().fillRect(0, 0, goban.width, goban.height);
  };

  let drawboard = function () {
    board();
    drawCoor(coordinates);
  };

  let drawCoor = function (y) {
    let x = y;

    let lastRow = x[360].CoorPosition.y;
    let firstRow = x[0].CoorPosition.y;

    for (let i = 0; i < x.length; i++) {
      if (i % 19 !== 18 && x[i].CoorPosition.y < lastRow) {
        x[i].regDraw();
      }
    }
  };

  visualUpdate();
  initializeBoard();
  drawboard();
  mouse.move()

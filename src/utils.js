let stoneMouseCollision = function (point, circle, circleAspect, radius) {
    let mouseX = point.x;
    let mouseY = point.y;
    let gridCoorX =
      ((circle.x - circle.y) * circleAspect.width) / 2 + goban.width / 4;
    let gridCoorY = ((circle.x + circle.y) * circleAspect.height) / 2 + 100;
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
    goban.visual().fillStyle = "white";
    goban.visual().fillRect(0, 0, goban.width, goban.height);
    board();
    drawCoor(coordinates);
  };

let regularBoard = function (CoorP, CoorA) {
    goban.visual().lineWidth = 1.5;
    goban.visual().strokeStyle = "black";
    goban
      .visual()
      .strokeRect(
        CoorP.x * CoorA.height + 10,
        CoorP.y * CoorA.height + 10,
        CoorA.height,
        CoorA.height
      );
  };

let isometricBoard = function (CoorP, CoorA) {
    goban.visual().save();
    goban.visual()
      .translate(
        ((CoorP.x - CoorP.y) * CoorA.width) / 2 + goban.width / 4,
        ((CoorP.x + CoorP.y) * CoorA.height) / 2 + 100
      );

    goban.visual().beginPath();
    goban.visual().moveTo(0, 0);
    goban.visual().lineTo(CoorA.width / 2, CoorA.height / 2);
    goban.visual().lineTo(0, CoorA.height);
    goban.visual().lineTo(-CoorA.width / 2, CoorA.height / 2);
    goban.visual().closePath();
    goban.visual().fillStroke = "black";
    goban.visual().stroke();

    goban.visual().restore();
  };

let circleDraw = function () {
    stone.visual().beginPath();
    stone
      .visual()
      .arc(CoorCircle.x, CoorCircle.y, CoorCircle.radius, 0, 2 * Math.PI);
    stone.visual().strokeStyle = "rgb(0,0,0,0)";
    stone.visual().stroke();
  };
let collisionCircle = function (x) {
    if ((x = true)) {
      stone.visual().beginPath();
      stone
        .visual()
        .arc(
          ((CoorP.x - CoorP.y) * CoorAspect.width) / 2 +
            goban.width / 4,
          ((CoorP.x + CoorP.y) * CoorAspect.height) / 2 + 100,
          CoorCircle.radius,
          0,
          2 * Math.PI
        );
      stone.visual().strokeStyle = "black";
      stone.visual().stroke();
    }
  };

let isometricLetter = function (CoorP, CoorA, CoorL) {
    stone.visual().font = "25px serif";
    stone.visual().fillStyle = "black";
    stone.visual().moveTo(0, 0);
    stone
      .visual()
      .fillText(
        CoorL,
        ((CoorP.x - CoorP.y) * CoorA.width) / 2 + goban.width / 4 - 25,
        ((CoorP.x + CoorP.y) * CoorA.height) / 2 + 100 - 12.5
      );
  };
let regularLetter = function (CoorP, CoorA, CoorL) {
    stone.visual().font = "16px serif";
    stone.visual().fillStyle = "black";
    stone
      .visual()
      .fillText(
        CoorL,
        CoorP.x * CoorA.height + 5 + CoorA.height,
        CoorP.y * CoorA.height + CoorA.width / 2
      );
  };

let isometricNumber = function (CoorP, CoorA, CoorN) {
    stone.visual().font = "25px serif";
    stone.visual().fillStyle = "black";
    stone.visual().moveTo(0, 0);
    stone
      .visual()
      .fillText(
        CoorN,
        ((CoorP.x - CoorP.y) * CoorA.width) / 2 + goban.width / 4 + 5,
        ((CoorP.x + CoorP.y) * CoorA.height) / 2 + 100 - 12.5
      );
  };

let regularNumber = function (CoorP, CoorA, CoorN) {
    stone.visual().font = "16px serif";
    stone.visual().fillStyle = "black";
    stone
      .visual()
      .fillText(
        CoorN,
        CoorP.x * CoorA.height + 5,
        CoorP.y * CoorA.height + CoorA.height * 1.5
      );
  };

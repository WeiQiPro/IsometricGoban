// draws on the gobanCanvas
let viewBoardType = function (position, aspectratio) {
  isometricUI.board.visual().save();
  if (isometricUI.board.viewType === "isometric") {
    isometricUI.board.visual()
      .transform(
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5]
      );
  }
  isometricUI.board.visual().lineWidth = 1;
  isometricUI.board.visual().strokeStyle = "black";
  isometricUI.board.visual()
    .strokeRect(
      position.x * aspectratio.height + 30,
      position.y * aspectratio.height + 30,
      aspectratio.height,
      aspectratio.height
    );
    isometricUI.board.visual().fillStyle = ' rgb(160, 110, 49)'
    isometricUI.board.visual()
      .fillRect(
        position.x * aspectratio.height + 30,
        position.y * aspectratio.height + 30,
        aspectratio.height,
        aspectratio.height
      );
  isometricUI.board.visual().restore();
};
// draws on the mouseCanvas
let stonemouseHover = function (position, aspectratio, radius, color) {
  {
    mouse.visual().save();
    mouse.visual()
      .transform(
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5]
      );
    mouse.visual().beginPath();
    mouse
      .visual()
      .arc(
        position.x * aspectratio.height + 30,
        position.y * aspectratio.height + 30,
        radius,
        0,
        2 * Math.PI
      );
    if(color === colorType[2]){
      mouse.visual().strokeStyle = colorType[1];
      mouse.visual().stroke();
      mouse.visual().fillStyle = color;
      mouse.visual().fill();
    }
    else {
      mouse.visual().fillStyle = color;
      mouse.visual().fill();
    }
    mouse.visual().closePath();
    mouse.visual().restore();
  }
};

let stonedrawType = function (position, aspectratio, radius, color) {
  {
    stone.visual().save();
    stone
      .visual()
      .transform(
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5]
      );
    stone.visual().beginPath();
    stone
      .visual()
      .arc(
        position.x * aspectratio.height + 30,
        position.y * aspectratio.height + 30,
        radius,
        0,
        2 * Math.PI
      );
    if(color === colorType[2]){
      stone.visual().strokeStyle = colorType[1];
      stone.visual().stroke();
      stone.visual().fillStyle = color;
      stone.visual().fill();
    }
    else {
      stone.visual().fillStyle = color;
      stone.visual().fill();
    }
    stone.visual().closePath();
    stone.visual().restore();
  }
};

let mouseoverCoordinate = function (mousePosition, circle, aspect, radius) {
  let circlePosition = {
    x: circle.x * aspect.height + 30,
    y: circle.y * aspect.height + 30,
  };
  let distX = mousePosition.x - circlePosition.x;
  let distY = mousePosition.y - circlePosition.y;

  let distance = Math.sqrt(distX * distX + distY * distY);

  if (distance <= radius) {
    return true;
  } mouse.visual().clearRect(circlePosition.x, circlePosition.y, 0,0);
};

let coordinateLetters = function (position, aspectratio, character) {
  stone.visual().font = "12px serif";
  stone.visual().fillStyle = "black";
  stone.visual().save();
  if (viewType === "isometric") {
    stone
      .visual()
      .transform(
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5]
      );
  }
  stone.visual().beginPath();
  stone
    .visual()
    .fillText(character, position.x * aspectratio.height + 15, position.y * aspectratio.height + 30);
  stone.visual().restore();
};

let coordinateNumbers = function (position, aspectratio, character) {
  stone.visual().font = "12px serif";
  stone.visual().fillStyle = "black";
  stone.visual().save();
  if (viewType === "isometric") {
    stone
      .visual()
      .transform(
        matrix[0],
        matrix[1],
        matrix[2],
        matrix[3],
        matrix[4],
        matrix[5]
      );
  }
  stone.visual().beginPath();
  stone
    .visual()
    .fillText(character, position.x * aspectratio.height + 25, position.y * aspectratio.height + 20);
  stone.visual().restore();
};


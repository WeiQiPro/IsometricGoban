let setCanvas = function(canvas){
  if(canvas != goban.visual()){
    canvas.fillStyle = "rgba(0, 0, 0, 0)"
  } else canvas.fillStyle = "white";
  canvas.fillRect(0, 0, goban.width, goban.height);
}

let initializeBoard = function () {
  setCanvas(goban.visual())
  setCanvas(stone.visual())
  setCanvas(mouse.visual())
  board();
  drawCoor(coordinates);
};

// draws on the gobanCanvas
let viewBoardType = function (position, aspectratio) {
  goban.visual().save();
  if (viewType === "isometric") {
    goban
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
  goban.visual().lineWidth = 1;
  goban.visual().strokeStyle = "black";
  goban
    .visual()
    .strokeRect(
      position.x * aspectratio.height + 30,
      position.y * aspectratio.height + 30,
      aspectratio.height,
      aspectratio.height
    );
    goban.visual().fillStyle = ' rgb(160, 110, 49)'
    goban
      .visual()
      .fillRect(
        position.x * aspectratio.height + 30,
        position.y * aspectratio.height + 30,
        aspectratio.height,
        aspectratio.height
      );
  goban.visual().restore();
};
// draws on the mouseCanvas
let stonemouseHover = function (position, aspectratio, radius, color) {
  {
    mouse.visual().save();
    mouse
      .visual()
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

let inverseMatrixFunction = function () {
  // calculate the inverse transformation

  // first get the cross product of x axis and y axis
  crossx = matrix[0] * matrix[3] - matrix[1] * matrix[2];

  // now get the inverted axis
  inverseMatrix[0] = matrix[3] / crossx;
  inverseMatrix[1] = -matrix[1] / crossx;
  inverseMatrix[2] = -matrix[2] / crossx;
  inverseMatrix[3] = matrix[0] / crossx;
  //inverseMatrix[4] = matrix[4];
  //inverseMatrix[5] = matrix[5];
};

let toWorld = function (x, y) {
  let xx, yy, result;
  xx = x - matrix[4]; // remove the translation
  yy = y - matrix[5]; // by subtracting the origin
  // return the mousePosition {x:?,y:?} by multiplying xx,yy by the inverse matrix
  return {
    x: xx * inverseMatrix[0] + yy * inverseMatrix[2],
    y: xx * inverseMatrix[1] + yy * inverseMatrix[3],
  };
};

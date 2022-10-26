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
let viewBoardType = function (CoorP, CoorA) {
  goban.visual().save();
  if (viewType === "iso") {
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
      CoorP.x * CoorA.height + 30,
      CoorP.y * CoorA.height + 30,
      CoorA.height,
      CoorA.height
    );
    goban.visual().fillStyle = ' rgb(160, 110, 49)'
    goban
      .visual()
      .fillRect(
        CoorP.x * CoorA.height + 30,
        CoorP.y * CoorA.height + 30,
        CoorA.height,
        CoorA.height
      );
  goban.visual().restore();
};
// draws on the mouseCanvas
let stonemouseHover = function (CoorP, CoorA, radius, CoorC) {
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
        CoorP.x * CoorA.height + 30,
        CoorP.y * CoorA.height + 30,
        radius,
        0,
        2 * Math.PI
      );
    if(CoorC === colorType[2]){
      mouse.visual().strokeStyle = colorType[1];
      mouse.visual().stroke();
      mouse.visual().fillStyle = CoorC;
      mouse.visual().fill();
    }
    else {
      mouse.visual().fillStyle = CoorC;
      mouse.visual().fill();
    }
    mouse.visual().closePath();
    mouse.visual().restore();
  }
};

let stonedrawType = function (CoorP, CoorA, radius, CoorC) {
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
        CoorP.x * CoorA.height + 30,
        CoorP.y * CoorA.height + 30,
        radius,
        0,
        2 * Math.PI
      );
    if(CoorC === colorType[2]){
      stone.visual().strokeStyle = colorType[1];
      stone.visual().stroke();
      stone.visual().fillStyle = CoorC;
      stone.visual().fill();
    }
    else {
      stone.visual().fillStyle = CoorC;
      stone.visual().fill();
    }
    stone.visual().closePath();
    stone.visual().restore();
  }
};

let mouseoverCoordinate = function (point, circle, circleAspect, radius) {
  let circleXY = {
    x: circle.x * circleAspect.height + 30,
    y: circle.y * circleAspect.height + 30,
  };
  let distX = point.x - circleXY.x;
  let distY = point.y - circleXY.y;

  let distance = Math.sqrt(distX * distX + distY * distY);

  if (distance <= radius) {
    return true;
  } mouse.visual().clearRect(circleXY.x, circleXY.y, 0,0);
};

let coordinateLetters = function (CoorP, CoorA, CoorL) {
  stone.visual().font = "12px serif";
  stone.visual().fillStyle = "black";
  stone.visual().save();
  if (viewType === "iso") {
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
    .fillText(CoorL, CoorP.x * CoorA.height + 15, CoorP.y * CoorA.height + 30);
  stone.visual().restore();
};

let coordinateNumbers = function (CoorP, CoorA, CoorL) {
  stone.visual().font = "12px serif";
  stone.visual().fillStyle = "black";
  stone.visual().save();
  if (viewType === "iso") {
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
    .fillText(CoorL, CoorP.x * CoorA.height + 25, CoorP.y * CoorA.height + 20);
  stone.visual().restore();
};

let inverseMatrix = function () {
  let m = matrix; // just to make it easier to type and read
  let im = invMatrix; // just to make it easier to type and read

  // calculate the inverse transformation

  // first get the cross product of x axis and y axis
  crossx = m[0] * m[3] - m[1] * m[2];

  // now get the inverted axis
  im[0] = m[3] / crossx;
  im[1] = -m[1] / crossx;
  im[2] = -m[2] / crossx;
  im[3] = m[0] / crossx;
  //im[4] = m[4];
  //im[5] = m[5];
};

let toWorld = function (x, y) {
  let xx, yy, result;
  xx = x - matrix[4]; // remove the translation
  yy = y - matrix[5]; // by subtracting the origin
  // return the point {x:?,y:?} by multiplying xx,yy by the inverse matrix
  return {
    x: xx * invMatrix[0] + yy * invMatrix[2],
    y: xx * invMatrix[1] + yy * invMatrix[3],
  };
};

// draws on the gobanCanvas
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


// drawBoard(boardtype) {
//   return boardtype(this.position, this.aspectratio);
// }

// drawLetter(boardtype) {
//   return boardtype(this.position, this.aspectratio, this.label.letter);
// }

// drawNumber(boardtype) {
//   return boardtype(this.position, this.aspectratio, this.label.number);
// }

// stoneHover(stonetype, stoneColor) {
//   return stonetype(this.position, this.aspectratio, this.circle.radius, stoneColor)
// }

// drawStone(stonetype, stoneColor, stoneRadius){
//   if (stoneRadius === undefined){ stoneRadius = this.circle.radius}
//   return stonetype(this.position, this.aspectratio, stoneRadius, stoneColor)
// }

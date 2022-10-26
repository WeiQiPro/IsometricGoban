class Coordinate {
  constructor({
    position,
    aspectratio,
    label,
    circle,
    stone,
  }) {
    this.position = position;
    this.aspectratio = aspectratio;
    this.label = label || {};
    this.circle = circle;
    this.stone = stone;
  }

  // all the draw functions here are in utils.js
  // drawRegular && drawIsometric pertain to the tiles drawn
  // drawLetters && drawNumbers pertain to the coordinate labeling on the outside

  drawBoard(boardtype) {
    return boardtype(this.position, this.aspectratio);
  }

  drawLetter(boardtype) {
    return boardtype(this.position, this.aspectratio, this.label.letter);
  }

  drawNumber(boardtype) {
    return boardtype(this.position, this.aspectratio, this.label.number);
  }

  stoneHover(stonetype, stoneColor) {
    return stonetype(this.position, this.aspectratio, this.circle.radius, stoneColor)
  }

  drawStone(stonetype, stoneColor, stoneRadius){
    if (stoneRadius === undefined){ stoneRadius = this.circle.radius}
    return stonetype(this.position, this.aspectratio, stoneRadius, stoneColor)
  }
}

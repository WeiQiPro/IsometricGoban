class Coordinate {
  constructor({
    position,
    image,
    player,
    adjacent,
    aspect,
    letter,
    number,
    circle,
    stone = null,
  }) {
    this.CoorPosition = position;
    this.CoorImage = image;
    this.CoorPlayer = player;
    this.CoorAdjacent = adjacent;
    this.CoorAspect = aspect;
    this.CoorLetter = letter;
    this.CoorNumber = number;
    this.CoorCircle = circle;
    this.stone = stone;
  }

  // all the draw functions here are in utils.js
  // drawRegular && drawIsometric pertain to the tiles drawn
  // drawLetters && drawNumbers pertain to the coordinate labeling on the outside

  drawBoard(boardtype) {
    return boardtype(this.CoorPosition, this.CoorAspect);
  }

  drawLetter(boardtype) {
    return boardtype(this.CoorPosition, this.CoorAspect, this.CoorLetter);
  }

  drawNumber(boardtype) {
    return boardtype(this.CoorPosition, this.CoorAspect, this.CoorNumber);
  }

  stoneHover(stonetype, stoneColor) {
    return stonetype(this.CoorPosition, this.CoorAspect, this.CoorCircle.radius, stoneColor)
  }
}

class Coordinate {
    static aspect = {
      width: 50,
      height: 25,
    };

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

    drawRegular() {
      regularBoard(this.CoorPosition, this.CoorAspect);
    }

    drawIsometric() {
      isometricBoard(this.CoorPosition, this.CoorAspect);
    }

    drawRegularLetter() {
      regularLetter(this.CoorPosition, this.CoorAspect, this.CoorLetter);
    }

    drawIsometricLetter() {
      isometricLetter(this.CoorPosition, this.CoorAspect, this.CoorLetter);
    }

    drawRegularNumber() {
      regularNumber(this.CoorPosition, this.CoorAspect, this.CoorNumber);
    }

    drawIsometricNumber() {
      isometricNumber(this.CoorPosition, this.CoorAspect, this.CoorNumber);
    }
  }

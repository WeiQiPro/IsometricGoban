let drawCoor = function (y) {
  let x = y;
  initializelabels(x);
  drawPhaseA(x);
  drawStarpoints(coordinates)
  coordinates.forEach(coordinate => {
    gridCoordinates[
      [coordinate.position.x * coordinate.aspectratio.height + 30,
        coordinate.position.y * coordinate.aspectratio.height + 30]] = coordinate
      })
    };

let drawPhaseA = function (array) {
      let lastRow = array[360].position.y;
      let firstRow = array[0].position.y;

      for (let i = 0; i < array.length; i++) {
        if (i % 19 !== 18 && array[i].position.y < lastRow)
        array[i].drawBoard(viewBoardType);
      }

      for (let i = 0; i < array.length; i++) {
        if (i % 19 == 0) array[i].drawLetter(coordinateLetters);
      }

      for (let i = 0; i < array.length; i++) {
        if (array[i].position.y == firstRow) array[i].drawNumber(coordinateNumbers);
      }
};

let initializelabels = function (array) {
      let changeLetters = [];
      for (let i = 0; i < array.length; i++) {
        array[i].label.letter = intializeLetters(18 - (i % 19))
        array[i].label.number = intializeNumbers(i % 19)
        if (array[i].label.letter == "T") {
          changeLetters.push(array[i]);
        }
      }

      for (let i = 0; i < changeLetters.length; i++) {
        changeLetters[i].label.letter = intializeLetters(i % 19);
      }
};

let drawStarpoints = function(array) {
      for(let s = 0; s < starpoints.length; s++){
        for(let i = 0; i < array.length; i++){
          let intersectionX = array[i].position.x
          let intersectionY = array[i].position.y
          let starpointsX = starpoints[s][0]
          let starpointsY = starpoints[s][1]
          if (intersectionX === starpointsX && intersectionY === starpointsY) {
            array[i].drawStone(stonedrawType, colorType[1], starpointRadius)
          }
        }
      }
}

let intializeLetters = function (i) {
      const letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
      ];
      return letters[i];
};

let intializeNumbers = function (i) {
      const numbers = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
      ];
      return numbers[i];
};

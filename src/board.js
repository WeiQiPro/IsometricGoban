let drawCoor = function (y) {
  let x = y;
  initializeCharacters(x);
  drawPhaseA(x);
};

let drawPhaseA = function (x) {
  let lastRow = x[360].CoorPosition.y;
  let firstRow = x[0].CoorPosition.y;

  for (let i = 0; i < x.length; i++) {
    if (i % 19 !== 18 && x[i].CoorPosition.y < lastRow)
      x[i].drawBoard(viewBoardType);
  }

  for (let i = 0; i < x.length; i++) {
    if (i % 19 == 0) x[i].drawLetter(coordinateLetters);
  }

  for (let i = 0; i < x.length; i++) {
    if (x[i].CoorPosition.y == firstRow) x[i].drawNumber(coordinateNumbers);
  }
};

let initializeCharacters = function (x) {
  let coorArray = [];
  for (let i = 0; i < x.length; i++) {
    x[i].CoorLetter = intializeLetters(18 - (i % 19));
    x[i].CoorNumber = intializeNumbers(i % 19);
    if (x[i].CoorLetter == "T") {
      coorArray.push(x[i]);
    }
  }

  for (let i = 0; i < coorArray.length; i++) {
    coorArray[i].CoorLetter = intializeLetters(i % 19);
  }
};

let intializeLetters = function (x) {
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
  return letters[x];
};

let intializeNumbers = function (x) {
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
  return numbers[x];
};

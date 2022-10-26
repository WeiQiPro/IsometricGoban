let coordinates = [];
let viewType = "iso";
const matrix = [2, 1, -2, 1, 600, 000];
let invMatrix = [0, 0, 0, 0, 0, 0];

let hoveredCoordinate = null
let colorType = ['rgba(0,0,0,1)','black', 'white']
let playerColor = ['black', 'white']
let currentColor = null
let nextColor = null
let sgf = []

let setplayerColor = function(){
    if (currentColor === null) {
        nextColor = playerColor[1]
        currentColor = playerColor[0]
    }

}

const gridCoordinates = {}


createboardGrid();
initializeBoard();
inverseMatrix();
mouse.move();
mouse.click();
setplayerColor();


// modulo modifier, mouse coordinates, %m/2
// to identify the upper or lower use the half the modifier IE (%m/2 = 2.5 if | %m =  5)
// if modulo is greater than %m/2 then %m - mod = r, use R to add to the number
// otherwise if lower just subtract from the number

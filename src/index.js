// board
let hoveredCoordinate = null
const gridCoordinates = {}
let coordinates = [];
let viewType = "isometric";
let sgf = []

// colors
let colorType = ['rgba(0,0,0,1)','black', 'white']
let currentColor = 'black'

// matrix
const matrix = [2, 1, -2, 1, 600, 000];
let inverseMatrix = [0, 0, 0, 0, 0, 0];

const starpoints = [
    [3,3],[3,9],[3,15],
    [9,3],[9,9],[9,15],
    [15,3],[15,9],[15,15],
  ]
const  starpointRadius = 3






createboardGrid();
initializeBoard();
inverseMatrixFunction();
mouse.move();
mouse.click();


// modulo modifier, mouse coordinates, %m/2
// to identify the upper or lower use the half the modifier IE (%m/2 = 2.5 if | %m =  5)
// if modulo is greater than %m/2 then %m - mod = r, use R to add to the number
// otherwise if lower just subtract from the number

let findHoveredGridCoordinate = function(mouse, y){

    // y is CoorAspect.height = 15
    let mod = y
    let mod2 = mod/2
    // mouse = mouse.isometric
    let mx = mouse.x
    let my = mouse.y

    let modmx = mx%mod
    let modmy = my%mod
    let newX
    let newY

    if(modmx >= mod2){
        newX = (mx + (mod - modmx))
    } else if (modmx <= mod2) {
        newX = (mx - modmx)
    }

    if(modmy >= mod2){
        newY = (my + (mod - modmy))
    } else if (modmy <= mod2) {
        newY = (my - modmy)
    }

    hoveredCoordinate = gridCoordinates[[newX, newY]]

}

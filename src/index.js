let coordinates = [];
let viewType = "iso";
const matrix = [2, 1, -2, 1, 600, 000];
let invMatrix = [0, 0, 0, 0, 0, 0];

let hoveredCoordinate = null
let colorType = ['rgba(255,255,255,0)','rgba(0,0,0,1)', 'rgba(255,255,255,1)']

createboardGrid();
initializeBoard();
inverseMatrix();
mouse.move();

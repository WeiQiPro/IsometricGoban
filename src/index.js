// board
let hoveredCoordinate = null
const gridCoordinates = {}


// colors
const colorType = ['rgba(0,0,0,1)','black', 'white']

// business logic for playing the game
let sgf = []
let currentColor = 'black'

// matrix
const matrix = [2, 1, -2, 1, 600, 000];
let inverseMatrix = [0, 0, 0, 0, 0, 0];
inverseMatrixFunction();

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",]

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17, 18, 19, ]

let isometricUI = {
    initialize: (jsBoard) => {

        isometricUI.board.controller.draw(jsBoard);

        let context = isometricUI.board.visual();
        context.fillStyle = 'white';
        canvas.fillRect(0, 0, isometricUI.board.width, isometricUI.board.height);
        
        context = isometricUI.stone.visual();
        context.fillStyle = 'rgba(0, 0, 0, 0)';
        canvas.fillRect(0, 0, isometricUI.board.width, isometricUI.board.height);
        
        context = isometricUI.mouse.visual();
        context.fillStyle = 'rgba(0, 0, 0, 0)';
        canvas.fillRect(0, 0, isometricUI.board.width, isometricUI.board.height);

    },
    mouse: {
        canvas: () => document.querySelector("#mouseCanvas"),
        visual: () => isometricUI.mouse.canvas().getContext("2d"),
    },
    stone: {
        canvas: () => document.querySelector("#stoneCanvas"),
        visual: () => isometricUI.stone.canvas().getContext("2d"),
    },
    board: {
            controller: new BoardController(),
            canvas: () => document.querySelector("#gobanCanvas"),
            visual: () => isometricUI.board.canvas().getContext("2d"),
            width: 1920,
            height: 1080,
            viewType: "isometric"
    },
    hoveredCoordinate: undefined,
}

let jsBoard = new Board();
jsBoard.initialize();

isometricUI.initialize(jsBoard);

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

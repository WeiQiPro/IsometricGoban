let drawCoor = function(x){
    // letnum()
    lastRow = x[360].CoorPosition.y
    firstRow = x[0].CoorPosition.y
    for(let i = 0; i < x.length; i++){
        if(i % 19 !== 18 && x[i].CoorPosition.y < lastRow){
            if(mouseClick === 'reg'){
                x[i].regDraw()
            } else if (mouseClick === 'iso'){
                x[i].isoDraw()
            }
        }
    }

    for(let i = 0; i < x.length; i++){
        if (i % 19 == 0) {
            if(mouseClick === 'reg'){
                x[i].letregDraw()
            } else if (mouseClick === 'iso'){
                x[i].letisoDraw()
            }
        }
    }

    for(let i = 0; i < x.length; i++){
         if (x[i].CoorPosition.y == firstRow){
            if(mouseClick === 'reg'){
                x[i].numregDraw()
            } else if (mouseClick === 'iso'){
                x[i].numisoDraw()
            }
        }
    }
}

function letnum(){
    for(let i = 0; i < x.length; i++){

    }
}

// let forLoops = function(){
//     coordinates.forEach(coordinate =>{

//     })
// }

function visualUpdate(){
    goban.visual().translate(goban.width/2, 50)
    goban.visual().fillStyle = 'white'
    goban.visual().fillRect(
        0,
        0,
        goban.width,
        goban.height
    )
}

function drawboard(){
    board()
    drawCoor(coordinates)
}

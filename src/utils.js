let drawCoor = function(x){

    let lastRow = x[360].CoorPosition.y
    let firstRow = x[0].CoorPosition.y

    lettersNumbers(x)

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

function lettersNumbers(x){
    let coorArray = []
    for(let i = 0; i < x.length; i++){

        x[i].CoorLetter = intializeLetters(i % 19)
        x[i].CoorNumber = intializeNumbers(i % 19)
        if (x[i].CoorLetter == 'A') {
            coorArray.push(x[i])
        }
    }
    console.log(coorArray)

    for(let i = 0; i < coorArray.length; i++){
        coorArray[i].CoorLetter = intializeLetters(i % 19)
    }
}

function intializeLetters(x){
        const letters = ['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T']
        return letters[x]
}

function intializeNumbers(x){
        const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        return numbers[x]
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

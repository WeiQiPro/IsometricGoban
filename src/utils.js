let drawCoor = function(y){
    let x = y
    lettersNumbers(x)
    drawPhaseA(x)
    drawPhaseB(x)
}

let drawPhaseA = function(x){

    let lastRow = x[360].CoorPosition.y
    let firstRow = x[0].CoorPosition.y

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

let drawPhaseB = function(x){
    for(let i = 0; i < x.length; i++) {
        x[i].CoorCircle.x = (x[i].CoorPosition.x - x[i].CoorPosition.y) * x[i].CoorAspect.width / 2
        x[i].CoorCircle.y = (x[i].CoorPosition.x + x[i].CoorPosition.y) * x[i].CoorAspect.height / 2

        x[i].circleDraw()
    }
}

let lettersNumbers = function(x){
    let coorArray = []
    for(let i = 0; i < x.length; i++){

        x[i].CoorLetter = intializeLetters(i % 19)
        x[i].CoorNumber = intializeNumbers(i % 19)
        if (x[i].CoorLetter == 'A') {
            coorArray.push(x[i])
        }
    }

    for(let i = 0; i < coorArray.length; i++){
        coorArray[i].CoorLetter = intializeLetters(18 - (i % 19))
    }
}

let intializeLetters = function(x){
        const letters = ['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T']
        return letters[x]
}

let intializeNumbers = function(x){
        const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
        return numbers[x]
}

let visualUpdate = function(){
    goban.visual().translate(goban.width / 2, 100)
    goban.visual().fillStyle = 'white'
    goban.visual().fillRect(
        0,
        0,
        goban.width,
        goban.height
    )
    // goban.visual().translate(-goban.width/2, 50)
}

let drawboard = function(){
    board()
    drawCoor(coordinates)
}

let stoneMouseCollision = function(point, circle, circleAspect, radius) {

    let mouseX = point.x
    let mouseY = point.y


    let translateR = radius
    let distX = mouseX - circle.x
    let distY = mouseY - circle.y

    let distance = Math.sqrt((distX * distX) + (distY * distY))

    if (distance <= translateR) {
        return true
    } return false
}

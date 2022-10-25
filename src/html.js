const goban = {
        board: function() { return document.querySelector('#goban')},
        visual: function() { return goban.board().getContext('2d')},
        width: 1920,
        height: 1080
}
const stone = {
        board: function() { return document.querySelector('#stone')},
        visual: function() { return goban.board().getContext('2d')},
        width: 1920,
        height: 1080
}

const mouse = {
        move: function(board) {addEventListener('mousemove', (e) =>{
                let rect = board.getBoundingClientRect()
                mouse.position.x = e.clientX - Math.round(window.scrollX)
                mouse.position.y = e.clientY - Math.round(window.scrollY)
                coordinates.forEach(Coordinate =>{
                        let coordinate = Coordinate
                        // if(stoneMouseCollision(mouse.position, coordinate.CoorPosition, coordinate.CoorAspect, coordinate.CoorCircle.radius) && coordinate.stone === null){
                        //                 coordinate.collisionCircle()
                        //                 coordinate.stone = 'fill'
                        // }
                    })
        })},
        position: {
                x: 0,
                y: 0
        },
        click: false
}

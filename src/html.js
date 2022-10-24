const goban = {
        board: function() { return document.querySelector('#goban')},
        visual: function() { return goban.board().getContext('2d')},
        width: 1920,
        height: 1080
}

const mouse = {
        move: function() {addEventListener('mousemove', (e) =>{
                mouse.position.x = e.clientX
                mouse.position.y = e.clientY
        })},
        position: {
                x: 0,
                y: 0
        },
        click: false
}

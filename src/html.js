const goban = {
        board: function () {
          return document.querySelector("#gobanCanvas");
        },
        visual: function () {
          return goban.board().getContext("2d");
        },
        width: 1920,
        height: 1080,
      };

const stone = {
        board: function () {
          return document.querySelector("#stoneCanvas");
        },
        visual: function () {
          return stone.board().getContext("2d");
        },
};

const mouse = {
        board: function () {
                return document.querySelector("#mouseCanvas");
        },
        visual: function () {
                return mouse.board().getContext("2d");
        },
        move: function () {
                mouse.board().addEventListener("mousemove", (e) => {
                let rect = mouse.board().getBoundingClientRect();
                mouse.position.x = e.clientX - Math.round(window.scrollX);
                mouse.position.y = e.clientY - Math.round(window.scrollY);
                mouse.worldPos = toWorld(mouse.position.x, mouse.position.y);

                coordinates.forEach((coordinate) => {
                        if (mouseoverCoordinate(
                                mouse.worldPos,
                                coordinate.CoorPosition,
                                coordinate.CoorAspect,
                                coordinate.CoorCircle.radius) &&
                                hoveredCoordinate != coordinate &&
                                coordinate.CoorStone.state === 'empty'){
                                        if (hoveredCoordinate != null) {
                                                prevhoveredCoordinate = hoveredCoordinate
                                                mouse.visual().save()
                                                mouse.visual().clearRect(0,0,goban.width, goban.height)
                                                mouse.visual().restore()
                                        }
                                        newhoveredCoordinate = coordinate
                                        newhoveredCoordinate.stoneHover(stonemouseHover, currentColor);
                                        hoveredCoordinate = newhoveredCoordinate
                                }
                        });
                });
        },
        position: {
                x: 0,
                y: 0,
        },
        worldPos: {
                x: 0,
                y: 0,
        },
        click: function(){
                addEventListener('mousedown', (e) =>{
                        let prevColor = currentColor
                        let sgfColor
                        if (prevColor === 'white') {sgfColor = 'W'} else sgfColor = 'B'
                        if (hoveredCoordinate.CoorStone.state === 'empty'){
                                hoveredCoordinate.drawStone(stonedrawType, prevColor)
                                hoveredCoordinate.CoorStone.state = 'filled'
                                sgf.push(
                                        [sgfColor, hoveredCoordinate.CoorPosition.x, hoveredCoordinate.CoorPosition.y]
                                        )
                                currentColor = nextColor
                                nextColor = prevColor
                        }
                })
        }
};
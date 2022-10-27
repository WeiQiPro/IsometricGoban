// const goban = {
//         board: function () {
//                 return document.querySelector("#gobanCanvas");
//         },
//         visual: function () {
//                 return goban.board().getContext("2d");
//         },
//         width: 1920,
//         height: 1080,
// };

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
                        mouse.isometric = toWorld(mouse.position.x, mouse.position.y);
                        prevHoveredCoordinate = hoveredCoordinate;
                        findHoveredGridCoordinate(mouse.isometric, 15);
                        newhoveredCoordinate = hoveredCoordinate;
                        if (hoveredCoordinate != null) {
                                stoneIsEmpty();
                        }
                });
        },
        position: {
                x: 0,
                y: 0,
        },
        isometric: {
                x: 0,
                y: 0,
        },
        click: function () {
                addEventListener("mousedown", (e) => {
                        let prevColor = currentColor;
                        let sgfColor = prevColor === 'white' ? 'W' : 'B'
                        if (hoveredCoordinate === null) {
                                return;
                        } else if (hoveredCoordinate.stone.state === "empty") {
                                hoveredCoordinate.drawStone(stonedrawType, prevColor);
                                hoveredCoordinate.stone.state = "filled";
                                sgf.push([
                                        sgfColor,
                                        [hoveredCoordinate.position.x,
                                        hoveredCoordinate.position.y]
                                ]);
                                currentColor = prevColor === 'white' ? 'black' : 'white'
                        }
                });
        },
};

let stoneIsEmpty = function(){
        if(hoveredCoordinate === null){ return } else
        if(hoveredCoordinate.stone.state === 'empty'){
          if (prevHoveredCoordinate != hoveredCoordinate) {
                  mouse.visual().save()
                  mouse.visual().clearRect(0,0,goban.width, goban.height)
                  mouse.visual().restore()
          }
          if (newhoveredCoordinate === undefined){
                  return
          } else {
          newhoveredCoordinate.stoneHover(stonemouseHover, currentColor);
          }}
}

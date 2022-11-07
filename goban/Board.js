class Board{
  constructor(){
    this.boardState = []
    this.intersections = []
    this.keymap = {}
    this.offset = [30, 20, 10, 5, -5, -10, -20, -30]
  }
  
  dataInitialize(){
    this.createGrid()

    this.boardState.forEach((row, i) => {
      row.forEach((Symbol, j) => {
        switch (Symbol) {
          case "x":
          this.intersections.push(
            new Intersection({
              cartesian: {
                x: j,
                y: i,
              },
              stone: 'No'
            })
            );
          }
        });
      });

      this.intersections.forEach(intersection =>{
        intersection.initialize(this.offset[0])
      })

      this.intersections.forEach(intersection =>{
        let x = intersection.isometric.x
        let y = intersection.isometric.y
        this.keymap[[x,y]] = intersection = {
          stone: 'No'
        }
      })
  }

  initialize(){
    this.createGrid()
    this.generateIntersections()
    this.generateKeymap()
  }

  createGrid(){
    let row =[]
    for(let i = 0; i < 19; i++){
      row.push("x")
    }
    for(let j = 0; j < 19; j++){
      this.boardState.push(row)
    }
  }

  generateIntersections(){
    this.boardState.forEach((row, i) => {
      row.forEach((Symbol, j) => {
        switch (Symbol) {
          case "x":
          this.intersections.push(
            new Intersection({
              cartesian: {
                x: j,
                y: i,
              },
              dimensions: {
                width: 30,
                height: 15,
              },
              starPoint: 'No',
              stone: 'No'
            })
            );
          }
        });
      });
      this.intersections.forEach(intersection =>{
        intersection.initialize(this.offset[0])
      })
  }

  generateKeymap(){
    this.intersections.forEach(intersection =>{
      let x = intersection.isometric.x
      let y = intersection.isometric.y
      this.keymap[[x,y]] = intersection
    })
  }
}


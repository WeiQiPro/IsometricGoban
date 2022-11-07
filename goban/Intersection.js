class Intersection{
    constructor({
      cartesian,
      isometric,
      dimensions,
      labels,
      starPoint,
      stone
    }){
      this.cartesian = cartesian
      this.isometric = isometric
      this.dimensions = dimensions
      this.labels = labels
      this.starPoint = starPoint
      this.stone = stone
    }
  
    initialize(offset){
      this.createlabels()
      this.createCanvas(offset)
      this.createStarPoints()
    }
  
    createlabels(){
      this.labels = {
        letter: Goban.UI.labels.letters[this.cartesian.x],
        number: Goban.UI.labels.numbers[this.cartesian.y]
      }
    }
  
    createCanvas(offset){
      let height = 15
      this.isometric = {
        x: this.cartesian.x *  height + offset,
        y: this.cartesian.y *  height + offset
      }
    }
  
    createStarPoints(){
      let starPoints = [[3,3],[3,9],[3,15],[9,3],[9,9],[9,15],[15,3],[15,9],[15,15]]
      starPoints.forEach(star =>{
        let sx = star[0]
        let sy = star[1]
        let cx = this.cartesian.x
        let cy = this.cartesian.y
        if(cx === sx && cy === sy){
          this.starPoint = 'Yes'
        }
      })
    }
  }
  
class Coordinate{
    static aspect = {
        width: 50,
        height: 25
    }

    constructor({
        position,
        image,
        player,
        adjacent,
        aspect,
        letter,
        number
    }) {
        this.CoorPosition = position
        this.CoorImage = image
        this.CoorPlayer = player
        this.CoorAdjacent = adjacent
        this.CoorAspect = aspect
        this.CoorLetter = letter
        this.CoorNumber = number
    }


    regDraw(){
        goban.visual().lineWidth = 1.5
        goban.visual().strokeStyle = "black"
        goban.visual().strokeRect(((this.CoorPosition.x * this.CoorAspect.width) + 5) + 0.35, ((this.CoorPosition.y * this.CoorAspect.width) + 5), this.CoorAspect.width, this.CoorAspect.width)
    }

    isoDraw(){
        goban.visual().save();
        goban.visual().translate((this.CoorPosition.x - this.CoorPosition.y) * this.CoorAspect.width / 2, (this.CoorPosition.x + this.CoorPosition.y) * this.CoorAspect.height / 2);

        goban.visual().beginPath();
        goban.visual().moveTo(0, 0);
        goban.visual().lineTo(this.CoorAspect.width / 2, this.CoorAspect.height / 2);
        goban.visual().lineTo(0, this.CoorAspect.height);
        goban.visual().lineTo(-this.CoorAspect.width / 2, this.CoorAspect.height / 2);
        goban.visual().closePath();
        goban.visual().fillStroke = 'black';
        goban.visual().stroke();

        goban.visual().restore();
    }

    letisoDraw(){
        goban.visual().font = '25px serif'
        goban.visual().fillStyle = 'black'
        goban.visual().moveTo(0, 0);
        goban.visual().fillText (
            this.CoorLetter,
            (this.CoorPosition.x - this.CoorPosition.y) * this.CoorAspect.width / 2 - 25,
            (this.CoorPosition.x + this.CoorPosition.y) * this.CoorAspect.height / 2 - 12.5
        )
    }
    letregDraw(){
        goban.visual().font = '25px serif'
        goban.visual().fillStyle = 'black'
        goban.visual().fillText (
            'A',
            ((this.CoorPosition.x * this.CoorAspect.width) + 5) + this.CoorAspect.height,
            ((this.CoorPosition.y * this.CoorAspect.width) + this.CoorAspect.width / 2
        ))
    }

    numisoDraw(){
        goban.visual().font = '25px serif'
        goban.visual().fillStyle = 'black'
        goban.visual().moveTo(0, 0);
        goban.visual().fillText (
            this.CoorNumber,
            (this.CoorPosition.x - this.CoorPosition.y) * this.CoorAspect.width / 2 + 12.5,
            (this.CoorPosition.x + this.CoorPosition.y) * this.CoorAspect.height / 2 - 12.5
        )
    }

    numregDraw(){
        goban.visual().font = '25px serif'
        goban.visual().fillStyle = 'black'
        goban.visual().fillText(
            '1',
            ((this.CoorPosition.x * this.CoorAspect.width) + 5) + 0.35,
            ((this.CoorPosition.y * this.CoorAspect.width) + this.CoorAspect.width
        ))
    }
}

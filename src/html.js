const goban = {
        board: function() { return document.querySelector('#goban')},
        visual: function() { return goban.board().getContext('2d')},
        width: 1920,
        height: 1080
}

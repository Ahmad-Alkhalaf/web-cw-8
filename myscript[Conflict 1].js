let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]


let player = `X`


function press(x,y) {

    // Do stuff
    console.log(x,y)

    var audio = new Audio("./sound.mp3")
    audio.play()


    if (player == `X`) {
        player = `O`
    } else{
        player = `X`
    }

    board[x][y] = player;

    let choice = document.getElementById(`${x}${y}`);

    choice.innerText = player;
    
    if ( player == board[0][0] && player == board[0][1] && player == board[0][2] ) {
        var audio1 = new Audio("./win.mp3")
        audio1.play()
        alert(`WINNER ${player}`)
    } else if ( player == board[1][0] && player == board[1][1] && player == board[1][2] ) {
        var audio1 = new Audio("./win.mp3")
        audio1.play()
        alert(`WINNER ${player}`)
    } else if ( player == board[2][0] && player == board[2][1] && player == board[2][2] ) {
        var audio1 = new Audio("./win.mp3")
        audio1.play()
        alert(`WINNER ${player}`)
    } else if ( player == board[0][0] && player == board[1][0] && player == board[2][0] ) {
        var audio1 = new Audio("./win.mp3")
        audio1.play()
        alert(`WINNER ${player}`)
    } else if ( player == board[0][1] && player == board[1][1] && player == board[2][1] ) {
        var audio1 = new Audio("./win.mp3")
        audio1.play()
        alert(`WINNER ${player}`)
    } else if ( player == board[0][2] && player == board[1][2] && player == board[2][2] ) {
        var audio1 = new Audio("./win.mp3")
        audio1.play()
        alert(`WINNER ${player}`)
    } else if ( player == board[0][0] && player == board[1][1] && player == board[2][2] ) {
        var audio1 = new Audio("./win.mp3")
        audio1.play()
        alert(`WINNER ${player}`)
    } else if ( player == board[0][2] && player == board[1][1] && player == board[2][0] ) {
        var audio1 = new Audio("./win.mp3")
        audio1.play()
        alert(`WINNER ${player}`)
    }
}

function reset() {





}
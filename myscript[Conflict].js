let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]


let player = `X`


function press(x,y) {

    // Do stuff
    console.log(x,y)

    if (player == `X`) {
        player = `O`
    } else{
        player = `X`
    }

    board[x][y] = player

    let choice = document.getElementById(`${x}${y}`);
    choice.innerText = player
    
}
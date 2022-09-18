// iniciar minhas variáveis
let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['o', 'x']


function handleMove(position) {

        if(board[position] == '') {
        board[position] = symbols[playerTime]

        if (playerTime == o) {
            playerTime = 1
        } else {
            playerTime = 0
        }
    }

}
function game() {
    const gameBoard = (() => {
        let board = ['X', 'X', 'X','X','X','X','X','X','X'];
        return board;
    })
    return gameBoard();
}

function buildGame() {
    const array = game();
    const body = document.querySelector('.main-container');
    const div = document.createElement('div');
    for(square of array){
       div.classList.add('square');
       div.textContent = square;
       body.appendChild(div.cloneNode(1));
    }

}

buildGame();

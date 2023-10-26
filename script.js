
const player = function (name, marker) {
    return {name, marker};
}



const gameBoard = (function buildGame() {
    const array = gameSquares();
    for([index, square] of array.entries()){
       makeSquare(index, square);  
    }

    function makeSquare (index, square){
        const body = document.querySelector('.main-container');
        const div = document.createElement('div');
        div.classList.add('square');
        div.dataset.indexNumber = index;
       body.appendChild(div.cloneNode(1));
       console.log(index, square);
    }

    function gameSquares() {
        const gameBoard = (() => {
            let board = [ null, null, null,null, null,  null,  null, null,  null];
        return board;
        })
        return gameBoard(); 
    }

    return {buildGame, gameSquares};

})(); 


const game = (function (){
    function getPlayers() {
        const playerinfo = document.querySelector('#players');
        playerinfo.showModal();
        

    }

    const player1 = player('Mark', 'O');
    const player2 = player('Steve', 'X');
    let currentGame = gameBoard.gameSquares();
    let currentPlayer = player1;

    function changeMarker (element){
        const indexNum = element.target.dataset.indexNumber;
        const chosenSquare = document.querySelector('[data-index-number=\"' + indexNum +'\"]')
    ;
        chosenSquare.textContent = currentPlayer.marker;
        currentGame[indexNum] = currentPlayer.marker;
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
        chosenSquare.removeEventListener('click', changeMarker);
        console.log(currentGame);
        /*function checkBoard();*/
        
    }

    function gameButtons () {
        const squares = document.querySelectorAll('.square');
        squares.forEach((box) => {
        box.addEventListener('click', changeMarker)
        });
    }
    return {changeMarker, gameButtons, getPlayers};
})();

game.getPlayers();
game.gameButtons();

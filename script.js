
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
    function showInput() {
        const playerInfo = document.querySelector('#players');
        playerInfo.showModal();
        const submitBtn = document.querySelector('.start-game');
        submitBtn.addEventListener('click', extractNames);
    }

    
    const players = [];
    const player1 = player(players[0], 'X');
    const player2 = player(players[1], '0');
    console.log(players);
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

    function extractNames(){
        const playerInput = document.querySelector('#playerInfo');
        const playerNames = playerInput;
        
            console.log(playerNames);
            const playerX = playerNames[0].value;
            const playerO = playerNames[1].value;
            players.push(playerX, playerO);
    }

    return {changeMarker, gameButtons, showInput, players};
})();

game.showInput();
game.gameButtons();


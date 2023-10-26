//factory function for player creation
const player = function (name, marker) {
    return {name, marker};
}


//module pattern to make players, game board and play the game
const makeGame = (function () {
 let playerNames = []
 const playerInfo = document.querySelector('#players');
 playerInfo.showModal();
  const submitBtn = document.querySelector('.start-game');
  submitBtn.addEventListener('click', (event) => {
    playerNames = extractNames(event);
    game();

    
});
//Gets the names from form input
const extractNames = function(e) {
    const playerInfo = document.querySelector('#players');
    const playerInput = document.querySelector('#playerInfo');
    const playerNames = playerInput.elements;
    e.preventDefault();
    playerInfo.close(e.value);
        const playerX = playerNames[0].value;
        const playerO = playerNames[1].value;
        return [playerX, playerO];
    }

    function getNames() {
    return playerNames;
    }


    const gameBoard = function (){
        //creates the empty game array for the board to be made with and to be filled with player input
        const gameArray = (() => {
            let board = [ null, null, null,null, null,  null,  null, null,  null];
        return board;
        })

        //uses the array to create the board
        const array = gameArray();
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
    return gameArray();
    
    
     
    } 
    
    const game = function (){
        // Allows for a random player starting each time the game is run
        function chooseStarter(){
            return Math.floor(Math.random() * 2);
        } 
        //Adds fuctionality to the previously made squares
        function gameButtons () {
            const squares = document.querySelectorAll('.square');
            squares.forEach((box) => {
            box.addEventListener('click', changeMarker)
            });
        }
    
        let players = getNames();
        let currentGame = gameBoard();
        gameButtons();
       


        let currentPlayer = chooseStarter();
        const player1 = player(players[0], 'X');
        const player2 = player(players[1], 'O');
        //truthy value to choose starting player 
        currentPlayer ? currentPlayer = player1 : currentPlayer = player2;
        playerTurn(currentPlayer);
    
        //Let's the players know who's turn it currently is underneath the gameboard
        function playerTurn(player) {
            const playerTurn = document.querySelector('.player-turn');
            playerTurn.textContent = `It's ${player.name}'s turn`;
        }
        
        //places the current player's marker in the pressed square, changes the current player and stops the squares from accepting any more input
        function changeMarker (element){
            const indexNum = element.target.dataset.indexNumber;
            const chosenSquare = document.querySelector('[data-index-number=\"' + indexNum +'\"]');
            chosenSquare.textContent = currentPlayer.marker;
            currentGame[indexNum] = currentPlayer.marker;
            checkBoard(currentGame);
            if (currentPlayer === player1) {
                currentPlayer = player2;
            } else {
                currentPlayer = player1;
            }
            playerTurn(currentPlayer);
            chosenSquare.removeEventListener('click', changeMarker);
            console.log(currentGame);
            
        }
    
        function checkBoard(currentGame) {
            if ((currentGame[0] === currentGame[1] && currentGame[0] === currentGame[2] && currentGame[0] !== null)
                || (currentGame[3] === currentGame[4] && currentGame[3] === currentGame[5] && currentGame[3] !== null)
                || (currentGame[6] === currentGame[7] && currentGame[6] === currentGame[8] && currentGame[6] !== null)
                || (currentGame[0] === currentGame[3] && currentGame[0] === currentGame[6] && currentGame[0] !== null)
                || (currentGame[1] === currentGame[4] && currentGame[1] === currentGame[7] && currentGame[1] !== null)
                || (currentGame[2] === currentGame[5] && currentGame[2] === currentGame[8] && currentGame[2] !== null)
                || (currentGame[0] === currentGame[4] && currentGame[0] === currentGame[8] && currentGame[0] !== null)
                || (currentGame[2] === currentGame[4] && currentGame[2] === currentGame[6] && currentGame[2] !== null)){
                  const end = document.querySelector('#end-screen');
                  const results = end.querySelector('.results');
                  const resetBtn = end.querySelector('.restart');
                  results.textContent = `${currentPlayer.name} is the winner!`  
                  end.showModal();
                  resetBtn.addEventListener('click', newGame);

                } else if (!currentGame.includes(null)) {
                    const end = document.querySelector('#end-screen');
                    const results = end.querySelector('.results');
                    const resetBtn = end.querySelector('.restart');
                    results.textContent = "It's a tie!";
                    resetBtn.addEventListener('click', newGame);
                  end.showModal(); 

                }

        }
    
        function newGame() {
            const end = document.querySelector('#end-screen');
            const main = document.querySelector('.main-container');
            while (main.firstChild) {
                main.removeChild(main.firstChild);
             }
            end.close(end.value);
        game();
    }
    
    }
})();




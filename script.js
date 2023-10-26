//factory function for player creation
const player = function (name, marker) {
    return {name, marker};
}

const makePlayers = (function () {
 let playerNames = []
 const playerInfo = document.querySelector('#players');
 playerInfo.showModal();
  const submitBtn = document.querySelector('.start-game');
  submitBtn.addEventListener('click', (event) => {
    playerNames = extractNames(event);
    game();

    
});

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

        const gameArray = (() => {
            let board = [ null, null, null,null, null,  null,  null, null,  null];
        return board;
        })
    
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
        currentPlayer ? currentPlayer = player1 : currentPlayer = player2;
        playerTurn(currentPlayer);
    
    
        function playerTurn(player) {
            
        const playerTurn = document.querySelector('.player-turn');
        playerTurn.textContent = `It's ${player.name}'s turn`;
        }
        
    
        function changeMarker (element){
            const indexNum = element.target.dataset.indexNumber;
            const chosenSquare = document.querySelector('[data-index-number=\"' + indexNum +'\"]');
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
    
        function chooseStarter(){
            return Math.floor(Math.random() * 2);
        }
    
    
    
        
    
    }
return {getNames};
})();



//module pattern to create board and players 
/*const gameBoard = function (){

    const gameArray = (() => {
        let board = [ null, null, null,null, null,  null,  null, null,  null];
    return board;
    })

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



 return {gameArray}
} 

const game = function (){


    function gameButtons () {
        const squares = document.querySelectorAll('.square');
        squares.forEach((box) => {
        box.addEventListener('click', changeMarker)
        });
    }

    let players = makePlayers.getNames();
    let currentGame = gameBoard.gameArray();

    let currentPlayer = chooseStarter();
    const player1 = player(players[0], 'X');
    const player2 = player(players[1], 'O');
    currentPlayer ? currentPlayer = player1 : currentPlayer = player2;
    playerTurn(currentPlayer);


    function playerTurn(player) {
        
    const playerTurn = document.querySelector('.player-turn');
    playerTurn.textContent = `It's ${player.name}'s turn`;
    }
    

    function changeMarker (element){
        const indexNum = element.target.dataset.indexNumber;
        const chosenSquare = document.querySelector('[data-index-number=\"' + indexNum +'\"]');
        chosenSquare.textContent = currentPlayer.marker;
        currentGame[indexNum] = currentPlayer.marker;
        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
        chosenSquare.removeEventListener('click', changeMarker);
        console.log(currentGame);
        /*function checkBoard();
        

    }

    function chooseStarter(){
        return Math.floor(Math.random() * 2);
    }



    
    return {gameButtons};
}*/


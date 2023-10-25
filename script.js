/*function game() {
    const gameBoard = (() => {
        let board = [{marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}];
        return board;
    })
    return gameBoard();
}*/

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
       console.log(index, square)
    }
    function gameSquares() {
        const gameBoard = (() => {
            let board = [{marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}, {marker: null}];
            return board;
        })
        return gameBoard(); }

    return {buildGame, gameSquares}

    

})(); 



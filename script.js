/*  
    GAMEBOARD -- 
    1. function that allow players to add marks to a 
    specific spot on the board by interacting with the 
    DOM elements (clicking on a board square)
    2. DO NOT let players play in spots that are already taken
    3. Clean up the interface to allow players to put in their names, 
    include a button to start/restart the game and add a display element 
    that shows the results upon game end!
    4. function that will render the contents of the gameboard array to the webpage
*/

const gameBoard = (function() {
    let board = ['', '', '', '', '', '', '', '', ''];
    
    const getBoard = () => {
    };

    const placeMark = (position, mark) => {
        for (let i = 0; i < board.length; i++) {
            /*  
            if empty → add mark → return true
            else → return false
            */
        }
    };

    const resetBoard = () => {};

    const render = () => {}; // to draw the grid (fills each square based on the array).

    return {getBoard, placeMark, resetBoard, render};
})();

const player = (function() {
    
})();

const game = (function() {
    let currentPlayer = player1;

    const playRound = (position) => {
        /* 
        when player clicks a square:
        success = gameBoard.placeMark(position, currentPlayer.mark)
        if game is not over: -> if sucess:
            ask board: can we place mark here?
            If empty → puts the current player's mark (X/O)
            If taken → says “nope!”
            if yes:
                check if that move made 3 in a row
                if yes:
                    announce winner
                else if board is full:
                    announce tie
                else:
                    switch to the next player

        */
    };

    // 1. checking when the game is over (3 rounds)
    // checking for all winning 3-in-a-rows and who won
    const gameOver = (board, playerMark) => {};

    // 2. ties
    const tie = (board, playerMark) => {};

    const restartGame = () => {
        gameBoard.resetBoard();
    };

    return {playRound, gameOver, tie, restartGame};
})();

// OBJECT that will handle the display/DOM logic
const displayer = (function() {
    /*  
    when "Start" button is clicked:
        get player names
        tell game to start

    when square is clicked:
        tell game which square was chosen
        call game.playRound(index)

        update board + show messages
        handle restart button

    when game says "someone won":
        show a message on the page

    */
})();

// object o control the flow of the game itself

// start as a console game

// all inside factories
const gameBoard = (()=> {
    const internalGameBoard = [];
    return {internalGameBoard};

})();

const displayCtrl = ((gameArray) => {
    //1. generateBoard
    const UIboard = document.querySelector(".gameBoard");

    const render = () => {
        let arrayLength = gameArray.length;
        for (let i = 0; i < arrayLength; i++){
        let gameMarker = document.getElementById(`grid-${i}`);
        gameMarker.textContent = gameArray[i];   
        UIboard.append(gameMarker);
       };
    };
    //2. listen for clicks
    // const playerClick = document.querySelector(".gameBoard");
    // playerClick.addEventListener("click", placeMarker);
    //3. generate marker on game board from array
    const placeMarker = (event) => {
        let gameSpot = event.target;
        gameSpot.textContent = "X";
    };
    return {render, placeMarker};
})(gameBoard.internalGameBoard);

const Player = (playerNumber, marker, score) => {
    return {playerNumber, marker, score};
};
const gameFlow = ((UIctrl, boardCtrl) => {
  // 1. generateBoard
  // const gamingTable = boardCtrl.internalGameBoard;
  UIctrl.render();
    // 2. generatePlayers
    const playerOne = Player(1, "X", 0);
    const playerTwo = Player(2, "O", 0);
    // 3. setActivePlayer
    
    // 4. listenForClicks
    const playerClick = document.querySelector(".gameBoard");
    playerClick.addEventListener("click", UIctrl.placeMarker);
    // 5. Fill array with marker from active player
    // 6. generate marker on game board from array [render]
    // 7. check for winner (if no winner and no tie; go back to step 3)
})(displayCtrl, gameBoard);
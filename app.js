const gameBoard = (()=> {
    const internalGameBoard = ["x", "o", "o", 
                                "x", "o", "x", 
                                "o", "x", "o"];
    return {internalGameBoard};

})();

const displayCtrl = ((gameArray) => {
    //1. generateBoard
    const UIboard = document.querySelector(".gameBoard");
    const make = (element) => {
        return document.createElement(element);
    };
    const createNewCell = (element, playerMarker) => {
        let newCell = make(element);
        newCell.textContent = playerMarker;
        return newCell;
    };
    const render = () => {
        for (let i = 0; i < gameArray.length; i++){
        let gameMarker = createNewCell("div", gameArray[i]);
        gameMarker.setAttribute("id", i);   
        UIboard.append(gameMarker);
       };
    };
    //2. listen for clicks
    //3. generate marker on game board from array
    return {render};
})(gameBoard.internalGameBoard);

const Player = (playerNumber, marker, score) => {
    return {playerNumber, marker, score};
};
const gameFlow = ((UIctrl, boardCtrl) => {
  // 1. generateBoard
  const gamingTable = boardCtrl.internalGameBoard;
  UIctrl.render();
    // 2. generatePlayers
    // 3. setActivePlayer
    // 4. listenForClicks
    // 5. Fill array with marker from active player
    // 6. generate marker on game board from array [render]
    // 7. check for winner (if no winner and no tie; go back to step 3)
})(displayCtrl, gameBoard);
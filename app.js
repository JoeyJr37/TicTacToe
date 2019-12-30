const gameBoard = (()=> {
    const internalGameBoard = [];
    return {internalGameBoard};

})();

const displayCtrl = ((gameArray) => {
    const UIboard = document.querySelector(".gameBoard");
    const twoPlayersBtn = document.querySelector("#twoPlayersBtn");
    const Player = (playerNumber, marker, activeStatus) => {
        return {playerNumber, marker, activeStatus };
    };
    const render = () => {
        let arrayLength = gameArray.length;
        for (let i = 0; i < arrayLength; i++){
        let gameMarker = document.getElementById(`grid-${i}`);
        gameMarker.textContent = gameArray[i];   
        UIboard.append(gameMarker);
       };
    };
    const setActivePlayer = (one, two) => {
        let activePlayer;
        if (one.activeStatus === true){
            activePlayer = one;
            console.log("It's Player 1's turn");
        } else if (two.activeStatus === true){
            activePlayer = two;
            console.log("It's Player 2's turn");
        };
    };
    const twoPlayerMode = () => {
        const playerTags = document.querySelectorAll(".player-tags");
        const playerTagsArray = Object.values(playerTags);
        playerTagsArray.forEach(item => item.style.display = "inline");
        const playerOne = Player(1, "X", true);
        const playerTwo = Player(2, "O", false);
        setActivePlayer(playerOne, playerTwo);
        return {playerOne, playerTwo}
    };
    //3. generate marker on game board from array
    const placeMarker = (event) => {
        let gameSpot = event.target.id;
        // put X or O in game array from click based on active player
        // gameArray [grid-spot] = activePlayer.marker
        console.log(gameSpot);
    };
    return {render, placeMarker, twoPlayerMode};
})(gameBoard.internalGameBoard);



const gameFlow = ((UIctrl, boardCtrl) => {
    // 1. generateBoard
    UIctrl.render();
    // 2. generatePlayers
    twoPlayersBtn.addEventListener("click", UIctrl.twoPlayerMode);
    // 3. setActivePlayer
    // 4. listenForClicks
    const playerClick = document.querySelector(".gameBoard");
    playerClick.addEventListener("click", UIctrl.placeMarker);
    // 5. Fill array with marker from active player
    // 6. generate marker on game board from array [render]
    // 7. check for winner (if no winner and no tie; go back to step 3)
})(displayCtrl, gameBoard);
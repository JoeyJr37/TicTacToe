const gameBoard = (()=> {
    const internalGameBoard = [];
    return {internalGameBoard};

})();

const displayCtrl = ((gameArray) => {
    const UIboard = document.querySelector(".gameBoard");
    const twoPlayersBtn = document.querySelector("#twoPlayersBtn");
    let activePlayer;
    let playerOne = document.querySelector("#playerOne");
    let playerTwo = document.querySelector("#playerTwo");
    const Player = (playerNumber, marker, activeStatus) => {
        return {playerNumber, marker, activeStatus };
    };
    const render = () => {
        let arrayLength = gameArray.length;
        for (let i = 0; i < arrayLength; i++){
            let gameMarker = document.getElementById(`grid-${i}`);
            gameMarker.textContent = gameArray[i];   
        };
    };
    const setActivePlayer = (one, two) => {
        if (one.activeStatus === true){
            activePlayer = one;
            console.log("It's Player 1's turn");
        } else if (two.activeStatus === true){
            activePlayer = two;
            console.log("It's Player 2's turn");
        };
        return activePlayer;
    };
    const resetActivePlayer = (one, two) => {
        if (one.activeStatus === true){
            one.activeStatus = false;
            two.activeStatus = true;
            setActivePlayer(one, two);
        } else {
            one.activeStatus = true;
            two.activeStatus = false;
            setActivePlayer(one, two);
        };
    };
    const twoPlayerMode = () => {
        let duelMode = "active";
        const playerTags = document.querySelectorAll(".player-tags");
        const playerTagsArray = Object.values(playerTags);
        playerTagsArray.forEach(item => item.style.display = "inline");
        playerOne = Player(1, "X", true);
        playerTwo = Player(2, "O", false);
        setActivePlayer(playerOne, playerTwo);
        return {duelMode, playerOne, playerTwo}
    };
    //3. generate marker on game board from array
    const placeMarker = (event) => {
        let gameSpot = event.target.id;
        let gameSpotArray = Array.from(gameSpot);
        let gameSpotID = Number(gameSpotArray[5]);
        gameArray[gameSpotID] = activePlayer.marker;
        console.log(gameSpotID);
        render();
        resetActivePlayer(playerOne, playerTwo);
        // gameArray[gameSpotID] = activePlayer.marker;
    };
    return {twoPlayersBtn, render, placeMarker, twoPlayerMode, setActivePlayer};
})(gameBoard.internalGameBoard);



const gameFlow = ((UIctrl, boardCtrl) => {
    // 1. generateBoard
    // UIctrl.render();
    // 2. generatePlayers
    let duelMode = "inactive";
    UIctrl.twoPlayersBtn.addEventListener("click", () => {
        UIctrl.twoPlayerMode();
        duelMode = "active";
    });
    // 3. setActivePlayer
    // 4. listenForClicks
    const playerClick = document.querySelector(".gameBoard");
    playerClick.addEventListener("click", (event)=> {
        if (duelMode === "active") {
                UIctrl.placeMarker(event);
        } else {
            console.log("Game is not on!");
        };});
    // 5. Fill array with marker from active player
    // boardCtrl.internalGameBoard[i].textContent = activePlayer.marker;
    // 6. generate marker on game board from array [render]
    // 7. check for winner (if no winner and no tie; go back to step 3)
})(displayCtrl, gameBoard);
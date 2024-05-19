// If you try to play the game, you will see that you can play for an infinite amount of rounds. But the rules state that the first one to three points wins.

// Inside your showResults function, you will need to check if the player or computer has reached three points. If either has reached three points, you should display a message indicating the winner.

// For example, if the player has won the game, then the winnerMsgElement should be updated to "Player has won the game!". If the computer has won the game, then the winnerMsgElement should be updated to "Computer has won the game!".

// If there is a winner, you will want to show the resetGameBtn button and hide the optionsContainer so the player can play again.

// Tips

// You can use the el.style.display property to show the resetGameBtn button and hide the optionsContainer.

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      return `It's a tie! Both chose ${userOption}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    if (playerScore === 3){
      winnerMsgElement.innerText = "Player has won the game!";
    } else if(computerScore === 3) {
      winnerMsgElement.innerText = "Computer has won the game!";
    }
  
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  };
  
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });
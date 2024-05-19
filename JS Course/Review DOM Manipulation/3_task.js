// Now it is time to get the results of the round. Complete the getRoundResults function.

// If the player wins the round, update the playerScore by 1 and return the message "Player wins! [player's choice] beats [computer's choice]".

// If the computer and player choose the same option, return the message "It's a tie! Both chose [player's choice]".

// If the computer wins the round, update the computerScore by 1 and return the message "Computer wins! [computer's choice] beats [player's choice]".

// [computer's choice] should be replaced with computerResult while [player's choice] should be replaced with the userOption.

// Tips

// Remember you can use the hasPlayerWonTheRound function to check if the player wins the round.
// You can use template literals or regular string concatenation to build the message.

function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    const hasPlayerWin = hasPlayerWonTheRound(userOption, computerResult);   
  
    if (userOption === computerResult) {
      return `It's a tie! Both chose [player's choice]`;
    } else if (hasPlayerWin) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  console.log(getRoundResults("Rock"));
  console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
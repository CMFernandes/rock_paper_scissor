function game(){

    const possibleHands = ["rock","paper","scissor"]
    const roundResultElement = document.getElementById("round-result");
    const finalResultElement = document.getElementById("final-result");
    const playAgainButton = document.querySelector(".play-again");
    const playerScoreElement = document.getElementById("player-score");
    const computerScoreElement =  document.getElementById("computer-score");

    function getComputerChoice() {
        const indexOfPossibleHands = Math.floor(Math.random() * possibleHands.length);
        return possibleHands[indexOfPossibleHands];
    }

    let playerScore = 0;
    let computerScore = 0; 
    const rounds = 5;
    let roundCount =0;

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissor = document.getElementById("scissor");
   
   
    
    rock.addEventListener("click", () => {
        if(roundCount < rounds){
        const playerSelection = "rock";
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerSelection, computerChoice);
        evaluateRound(roundResult)
        roundCount++;

        }
      });

      paper.addEventListener("click", () => {
        if(roundCount < rounds){
        const playerSelection = "paper";
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerSelection, computerChoice);
        evaluateRound(roundResult)
        roundCount++;

        }
        
      });

      scissor.addEventListener("click", () => {
        if(roundCount < rounds){
        const playerSelection = "scissor";
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerSelection, computerChoice);
        evaluateRound(roundResult);
        roundCount++;
        }
      });



    function evaluateResult(playerScore, computerScore){

        if(playerScore > computerScore) {
            return "You Win!";
        } else if(playerScore < computerScore){
            return "You Lost!";
        } else {
            return "It's a tie!";
        }
        
    }

    function evaluateRound(roundResult){

        if(roundResult == 0) {
            roundResultElement.textContent ="It's a tie!";
        } else if(roundResult == 1) {
            playerScore++
            roundResultElement.textContent ="Round win!";
                  
        } else {
            computerScore++;
            roundResultElement.textContent ="Round lost!";
        }
        playerScoreElement.textContent = `Player score:`+ `${playerScore}`;
        computerScoreElement.textContent = `Computer score:`+ `${computerScore}`;
        
        if (roundCount === 4) {
            const finalResult = evaluateResult(playerScore, computerScore);
            finalResultElement.textContent = finalResult;
        }

    }

    function playRound(playerSelection,computerChoice){
        
        if (playerSelection == computerChoice){
            return 0;

        }else if ((playerSelection== "paper" && computerChoice == "rock")  ||
            (playerSelection== "rock" && computerChoice == "scissors") ||
            (playerSelection == "scissor" && computerChoice == "paper")) {
            return 1;
            
        }else{
            return -1;
            
        }
        
    }

}
    
game()


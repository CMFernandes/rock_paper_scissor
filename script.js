const roundResultElement = document.getElementById("round-result");
const finalResultElement = document.getElementById("final-result");

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement =  document.getElementById("computer-score");
const playerHandPara = document.getElementById("player-hand");
const computerHandPara = document.getElementById("computer-hand")

function game(){
    const possibleHands = ["rock","paper","scissors"]
   
    function getComputerChoice() {
        const indexOfPossibleHands = Math.floor(Math.random() * possibleHands.length);
        return possibleHands[indexOfPossibleHands];
    }

    let playerScore = 0;
    let computerScore = 0; 
    const rounds = 5;
    let roundCount = 0;

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
   
   
    
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

    scissors.addEventListener("click", () => {
        if(roundCount < rounds){
        const playerSelection = "scissors";
        const computerChoice = getComputerChoice();
        const roundResult = playRound(playerSelection, computerChoice);
        evaluateRound(roundResult);
        roundCount++;
        }
    });


    function evaluateResult(playerScore, computerScore){
        playAgainBtn.classList.toggle("hide");
        if(playerScore > computerScore) {
            return "You Won!";
        } else if(playerScore < computerScore){
            return "You Lost!";
        } else {
            return "It's a tie!";
        } 
    };

    function evaluateRound(roundResult){
        if(roundResult == 0) {
            roundResultElement.textContent ="It's a tie!";
        } else if(roundResult == 1) {
            playerScore++
            roundResultElement.textContent ="Round won!";
                  
        } else {
            computerScore++;
            roundResultElement.textContent ="Round lost!";
        }
    
        playerScoreElement.textContent = `${playerScore}`;
        computerScoreElement.textContent = `${computerScore}`;
        
        if (roundCount === 4) {
            const finalResult = evaluateResult(playerScore, computerScore);
            finalResultElement.textContent = finalResult;
        }
    };


    function playRound(playerSelection,computerChoice){
        playerHandPara.textContent = `${playerSelection}`;
        computerHandPara.textContent = `${computerChoice}`;

        if (playerSelection == computerChoice){
            return 0;

        }else if ((playerSelection== "paper" && computerChoice == "rock")  ||
            (playerSelection== "rock" && computerChoice == "scissors") ||
            (playerSelection == "scissors" && computerChoice == "paper")) {
            return 1;
            
        }else{
            return -1;
        }  
    };


};
    
game()

function playAgain(){
    resetGame();
    game();
}

function resetGame(){
    playAgainBtn.classList.toggle("hide");
    playerHandPara.textContent = "";
    computerHandPara.textContent = "";
    playerScoreElement.textContent = "";
    computerScoreElement.textContent = "";
    roundResultElement.textContent = "";
    finalResultElement.textContent = "";
}

const playAgainBtn = document.getElementById("play-again");
playAgainBtn.addEventListener('click', playAgain);
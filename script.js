 
const possibleHands = ["rock","paper","scissor"]


function getComputerChoice() {
    
    const indexOfPossibleHands = Math.floor(Math.random() * possibleHands.length);
    return possibleHands[indexOfPossibleHands];
}

let playerScore = 0;
let computerScore = 0;

function game(){
    let playerSelection;
    let computerSelection;
    let result;


    for (let i = 1 ; i <= 5; i++){
        playerSelection = prompt().toLowerCase();

        while(!validateHand(playerSelection)) {
            alert("Not a valid hand!");
            playerSelection = prompt().toLowerCase();
        }

        computerSelection = getComputerChoice();

        console.log(`Your hand: ${playerSelection}`);
        console.log(`Computer hand: ${computerSelection}`);
        

        result = playRound(playerSelection, computerSelection);

        evaluateRound(result);  
    }
    console.log(`Your score: ${playerScore}.`)
    console.log(`Computer ${computerScore}.`)
    return evaluateResult(playerScore, computerScore);

}

function validateHand(playerSelection){
    if (playerSelection == "rock" || 
        playerSelection == "paper" || 
        playerSelection == "scissor" ){
        return true
    }else {
        return false
    }
}

function evaluateResult(playerScore, computerScore){
    if(playerScore > computerScore) {
        return "You Win!";
    } else if(playerScore < computerScore){
        return "You Lost!";
    } else {
        return "It's a tie!";
    }
}

function evaluateRound(result){
    if(result == 0) {
        console.log("It's a tie!");
    } else if(result == 1) {
        console.log("Round win!");
        playerScore++;        
    } else {
        console.log("Round lost!");
        computerScore++;
    }

}
function playRound(playerSelection,computerSelection){
    if (playerSelection == computerSelection){
        return 0;
    }else if ((playerSelection == "paper" && computerSelection == "rock")  ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return 1;
    }else{
        return -1;
    }


}

console.log(game());

 
const possibleHands = ["rock","paper","scissor"]

/*
    Function making the random selection between rock, paper or scissor.
    @return a random string from possibleHands array. 
*/
function getComputerChoice() {
    /*
        indexOfPossibleHands will hold the value of the Math.random() function.
        It's value will be used as an index for the possibleHands array.
    */
    const indexOfPossibleHands = Math.floor(Math.random() * possibleHands.length);
    return possibleHands[indexOfPossibleHands];
}

//fuction that plays a single round
function playRound(playerSelection,computerSelection){
    console.log(`You choose ${playerSelection} and the computer choose ${computerSelection}.`)
    if (playerSelection == computerSelection){
        return `It's a tie!`
    }else if ((playerSelection == "paper" && computerSelection == "rock")  ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    }else{
        return `You Loose! ${computerSelection} beats ${playerSelection}!`
    }


}

const playerSelection = prompt().toLowerCase();
//const containing computer random selection
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
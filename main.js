

// Create two new variables named humanScore and computerScore in the global scope.
let humanScore= 0;
let computerScore= 0;


// Create a new function named getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice(){
    let game= ['ROCK','PAPER','SCISSORS'];
    let randomIndex= Math.floor(Math.random() * game.length); // we will put it inside the Math.floor to return
                                                                 // decimal number index it to put it in stone array

    return game[randomIndex]}


// Create a function getHumanChoice return one of the valid choices depending on what the user inputs.

function getHumanChoice(){
    let userInput= prompt('Choose: Scissors Paper Rock OR 1, 2, 3 OR "S", "P", "R"');
    if(userInput == 1 || userInput.toLowerCase() === 'scissors' || userInput.toLowerCase() === "s"){
        //console.log('SCISSORS') that was my mistake I should return
        return 'SCISSORS';
    }
    else if(userInput == 2 || userInput.toLowerCase() === "paper" || userInput.toLowerCase() === "p"){
        //console.log('PAPER')
        return 'PAPER'
    }    
    else if(userInput == 3 || userInput.toLowerCase()=== "rock" || userInput.toLowerCase() === "r"){
        return 'ROCK'
    }
    else{
        console.log('Invalid insert Put A Valid number')
        return getHumanChoice()
    }
}

function playRound(humanChoice, computerChoice) {
    // Convert choices to uppercase for standard comparison
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    // If it's a tie
    if(humanChoice === computerChoice)
    {
        console.log(`It's a tie, Both chose ${humanChoice}`)
        return;
    }
    // Winning Condition for human
    if(
        (humanChoice === 'ROCK'  && computerChoice === 'SCISSORS') ||
        (humanChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER'))
        {
        //humanScore+= 1
        return 'human';
        console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        return 'computer'
        //computerScore +=1
        console.log(`YOU LOSE! ${computerChoice} beats ${humanChoice}`);
    }
}


// write playGame to play 5 rounds
function playGame(){
    let humanChoice= getHumanChoice();
     let computerChoice= getComputerChoice();
    for(let i= 1; i < 6; i++){
        humanChoice = getHumanChoice() //here was my fault 
        computerChoice = getComputerChoice() // I didn't give start frish


        let winer =playRound(humanChoice,computerChoice)
        if(winer === 'computer'){
            computerScore+= 1
            console.log(`computer win ${computerChoice} beats ${humanChoice}`)//score is  computer: ${computerScore} * human: ${humanScore}`)
        }
        else if(winer === 'human'){
            humanScore +=1
            console.log(`Human Win ${humanChoice} beats ${computerChoice}`)// score is computer: ${computerScore} * human: ${humanScore}`)
        }
        else {
            console.log(`It's a tie this round! Computer: ${computerScore}, Human: ${humanScore}`);
        }
        console.log(`play Round ${i} computerScore is: ${computerScore} humanScore is: ${humanScore}`)
    }
     
    
}
playGame()
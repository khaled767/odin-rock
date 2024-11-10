// Adding the restGame function
const choices= ['rock', 'paper','scissors'] 
const playerDisplay= document.getElementById('playerDisplay')
const computerDisplay= document.getElementById('computerDisplay')
let playerScore= 1
let computerScore= 1
const head= document.createElement("h2"); ///// new Edit

function playGame(playerChoice){
    const computerChoice= choices[Math.floor(Math.random()* choices.length)]
    let result= '';
    if(playerChoice === computerChoice){
        result="It's A Tie"
       resultDisplay.style.display='block' 
    }
    else{
        switch(playerChoice){
            case 'rock':
                result=(computerChoice === 'scissors') ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case 'paper':
                result=(computerChoice === 'rock') ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'scissors':
                result=(computerChoice === 'paper') ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    


    playerDisplay.textContent= `PLAYER: ${playerChoice}`;
    computerDisplay.textContent= `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent= result;

    resultDisplay.classList.remove("greenText","redText");

    // new Edit
    computerScoreDisplay= document.getElementById('computerScoreDisplay')
    playerScoreDisplay= document.getElementById('playerScoreDisplay')
    restGame= document.getElementById('restGame')
    

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScoreDisplay.textContent= playerScore++
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText")
            computerScoreDisplay.textContent= computerScore++
            break;
    }
    if(playerScore == 5 || computerScore== 5){
        
        head.textContent=`Game finished playerScore: ${playerScore} - computerScore: ${computerScore}`
        head.style.color= 'purple'
        head.style.display='block'
        restGame.appendChild(head)
        setTimeout(resetGame, 3000);  // Reset the game after 3 seconds
       }

}
function resetGame() {
    playerScore = 1;
    computerScore = 1;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    playerDisplay.textContent = 'Player:';
    computerDisplay.textContent = 'Computer:';
    resultDisplay.textContent = '';
    resultDisplay.classList.remove("greenText", "redText");
    restGame.removeChild(head); // Remove the game finished message
}
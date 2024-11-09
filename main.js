const choices= ['rock', 'paper','scsissors']
const playerDisplay= document.getElementById('playerDisplay')
const computerDisplay= document.getElementById('computerDisplay')

function playGame(playerChoice){
    const computerChoice= choices[Math.floor(Math.random()* choices.length)]
    let result= '';
    if(playerChoice === computerChoice){
        result="It's A Tie"
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

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText")
            break;
    }
}
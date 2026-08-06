// computer choice
function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1);

    if(choice === 1){
        return "Rock";
    }
    else if (choice === 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
// get my choice
function getHumanChoice(){
    let input = prompt("Enter Rock🪨, Paper📄, or Scissors✂️");
    return input;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    // play a round: logic
    function playRound(humanChoice, computerChoice){
        let human = humanChoice.toUpperCase();
        let computer = computerChoice.toUpperCase();

        if(human === computer){ alert("Tie!"); return; }

        switch(human){
            case "ROCK":
                if(computer === "PAPER"){ computerScore++; alert("Computer Wins!"); return;}
                if(computer === "SCISSORS"){ humanScore++; alert("You Win!"); return;}
                break;
            case "PAPER":
                if(computer === "SCISSORS"){ computerScore++; alert("Computer Wins!"); return;}
                if(computer === "ROCK"){ humanScore++; alert("You Win!"); return;}
                break;
                case "SCISSORS":
                if(computer === "ROCK"){ computerScore++; alert("Computer Wins!"); return;}
                if(computer === "PAPER"){ humanScore++; alert("You Win!"); return;}
                break;
            default:
                return "EASTER EGG"
        }
    }

    // control panel: rounds
    for(let i = 0; i <= 4; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    // final scores
    if(humanScore >= computerScore) { alert(`You win! Human: ${humanScore} - Computer: ${computerScore}`); }
    else if(humanScore <= computerScore) { alert(`You lose! Human: ${humanScore} - Computer: ${computerScore}`); }
    else { alert(`Tie! Human: ${humanScore} - Computer: ${computerScore}`); }
}
playGame();
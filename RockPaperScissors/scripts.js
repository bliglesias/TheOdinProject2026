// computer choice -> FIX: CHANGE STRINGS TO CAPS
function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1);

    if(choice === 1){
        return "ROCK";
    }
    else if (choice === 2){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}
// outside view of the UI/logic
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    

    // Create the container to hold the buttons;
    const cont = document.querySelector("div");

    // // This added the score divs before
    // const resultDiv = document.createElement("div");
    // const scoreDiv = document.createElement("div");
    // cont.appendChild(resultDiv);
    // cont.appendChild(scoreDiv);
    // Create 3 buttons
    const btnRock = document.createElement("button");
    const btnPaper = document.createElement("button");
    const btnScissors = document.createElement("button");
    btnRock.textContent = "ROCK";
    btnPaper.textContent = "PAPER";
    btnScissors.textContent = "SCISSORS";
    cont.appendChild(btnRock);
    cont.appendChild(btnPaper);
    cont.appendChild(btnScissors);

    //This added the divs "after"
    const resultDiv = document.createElement("div");
    const scoreDiv = document.createElement("div");
    cont.appendChild(resultDiv);
    cont.appendChild(scoreDiv);

    // Utility functions
    function updateScore(){
        scoreDiv.textContent = `You: ${humanScore} Computer:${computerScore}`;
    }

    // Turn into: playRound(humanChoice) -> Order doesnt matter, but make the eventListeners a sibling of the playRound() function; not inside of the playRound logic
    btnRock.addEventListener('click', () => {
        playRound("ROCK");
        // let humanChoice = "ROCK";
        // console.log(humanChoice);
    });
    btnPaper.addEventListener('click', () => {
        playRound("PAPER");
        // let humanChoice = "PAPER";
        // console.log(humanChoice);
    });
    btnScissors.addEventListener('click', () => {
        playRound("SCISSORS");
        // let humanChoice = "SCISSORS";
        // console.log(humanChoice);
    });

    // play a round: logic
    function playRound(humanChoice){

        // Call computer choice once; it will be passed as a value
        const computerChoice = getComputerChoice();
        let message;

        if(humanChoice === computerChoice){ 
            message = "Tie!";
        }
        else if(
            (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
            (humanChoice === "PAPER" && computerChoice === "ROCK") ||
            (humanChoice === "SCISSORS" && computerChoice === "PAPER")){
                humanScore++;
                message = `You Win! ${humanChoice} beats ${computerChoice}`;
        }
        else{
            computerScore++;
            message = `You Lost! ${computerChoice} beats ${humanChoice}`;
        }

        resultDiv.textContent = message;
        updateScore();

        if (humanScore === 5 || computerScore === 5) {
        resultDiv.textContent += humanScore === 5 ? " — YOU WIN THE GAME!" : " — COMPUTER WINS THE GAME!";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        }
    }

    // //Order didnt matter; but the bug was that this was indented 1 too far and confused scope 
    // btnRock.addEventListener('click', () => {
    //     playRound("ROCK");
    //     // let humanChoice = "ROCK";
    //     // console.log(humanChoice);
    // });
    // btnPaper.addEventListener('click', () => {
    //     playRound("PAPER");
    //     // let humanChoice = "PAPER";
    //     // console.log(humanChoice);
    // });
    // btnScissors.addEventListener('click', () => {
    //     playRound("SCISSORS");
    //     // let humanChoice = "SCISSORS";
    //     // console.log(humanChoice);
    // });

    updateScore();

} // end of playGame()

playGame();
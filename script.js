function updateHumanScore(score){
    const scoreHuman = document.querySelector(".human-result");
    scoreHuman.textContent = `Score: ${score}`;
  }

function updateComputerScore(score){
    const scoreComputer = document.querySelector(".computer-result");
    scoreComputer.textContent = `Score: ${score}`;
  }
function updateRoundResult(round){
    const roundResult = document.querySelector(".round-result");
    roundResult.textContent = `Round result: ${round}`;
  }
function updateFinalResult(final){
    const finalResult = document.querySelector(".final-result");
    finalResult.textContent = `Final result: ${final}`;
  }

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}



function getHumanChoice(){
    document.querySelectorAll('.third-container button').forEach(button=>{
        button.addEventListener('click', function(){
            const humanChoice = this.title;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
}

function playGame(){
    document.querySelectorAll('.third-container button').forEach(button => {
        if (humanScore === 5 || computerScore === 5) {
            button.disabled = true;
        }
    });
}

function restart(){
    humanScore = 0;
    computerScore = 0;
    roundResult = '';
    finalResult = '';

    updateComputerScore(computerScore);
    updateHumanScore(humanScore);
    updateRoundResult(roundResult);
    updateFinalResult(finalResult);

    document.querySelectorAll('.third-container button').forEach(button => {
        button.disabled = false;
        
    });
}

document.getElementById("restart").addEventListener('click', restart);

let humanScore = 0;
let computerScore = 0;
let roundResult = '';
let finalResult = '';


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice){
        roundResult = 'Tie!'
    }
    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock"){
        humanScore++;
        roundResult= 'Computer Won!';
        
        
    }
    else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors"){
        computerScore++;
        roundResult= 'Player Won!';
        
    }
    if (humanScore === 5 || computerScore === 5) {
        finalResult = humanScore > computerScore ? 'Player Wins!' : 'Computer Wins!';
        updateFinalResult(finalResult);
        playGame();
    }
    updateComputerScore(computerScore);
    updateHumanScore(humanScore);
    updateRoundResult(roundResult);

    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    console.log("Round Result: ", roundResult);
    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
  }


  
getHumanChoice();



  
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}


function getHumanChoice(){
    document.querySelectorAll('.third-container button').forEach(button=>{
        button.addEventListener('click', function(){
            const choice = this.title;
            console.log("Human Choice: ", choice);
        });
    });
}


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
        roundResult= 'Player Won!';
    }
    else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "rock" && computerChoice === "scissors"){
        computerScore++;
        roundResult= 'Computer Won!';
    }

  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  
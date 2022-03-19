// Computer randomly chooses between paper rock and scissors
function computerPlay () {
    let value = ["paper", "rock", "scissors"]
    let computerChoice = value[Math.floor(Math.random()*value.length)];
    console.log(`The computer chose: ${computerChoice} !`);
    return(computerChoice);
}


let playerScore = 0;
let computerScore = 0;
let playerChoice;

function playRound (playerChoice) {

    let rock= "rock"
    let paper= "paper"
    let scissors= "scissors"

    if (playerChoice.toLowerCase() === rock.toLowerCase() ){
        playerChoice = "rock" // foreces player choice to be lowecase (for some reason code above does not work)
        console.log(`Player chose ${playerChoice}`);
    }
        else if (playerChoice.toLowerCase() === paper.toLowerCase() ){
            playerChoice = "paper"
        console.log(`Player chose ${playerChoice}`)
        }
        else if(playerChoice.toLowerCase() === scissors.toLowerCase() ){
            playerChoice = "scissors"
            console.log(`Player chose ${playerChoice}`)
        }
        else {alert("You did not enter any of the correct options")}


    
 //ROCK
    if (playerChoice === "rock" && computerChoice === "rock"  ) {
      console.log(`Both players chose rock, DRAW | Score: Player ${playerScore} AI ${computerScore} `);
    }
  else if (playerChoice === "rock" && computerChoice === "paper" ) {
    computerScore = 1;
    playerScore = 0;
    console.log(`Computer wins ${computerChoice} wrapps ${playerChoice} | Score: Player ${playerScore} AI ${computerScore}  `);
   }
   else if (playerChoice === "rock" && computerChoice === "scissors" ) {
    computerScore = 0;
    playerScore = 1;
    console.log(`Player wins ${playerChoice} destroys ${computerChoice} | Score: Player ${playerScore} AI ${computerScore} `);
   }

//PAPER
   else if (playerChoice === "paper" && computerChoice === "paper" ) {
    console.log(`Both players chose ${playerChoice}, DRAW | Score: Player ${playerScore} AI ${computerScore} `);
   }
   else if (playerChoice === "paper" && computerChoice === "rock" ) {
    computerScore = 0;
    playerScore = 1;
    console.log(`Player wins ${playerChoice} wrapps ${computerChoice} | Score: Player ${playerScore} AI ${computerScore} `);
   }
   else if (playerChoice === "paper" && computerChoice === "scissors" ) {
    computerScore = 1;
    playerScore = 0;
    console.log(`Computer wins ${computerChoice} cuts ${playerChoice} | Score: Player ${playerScore} AI ${computerScore}  `);
   }

//Scissors
else if (playerChoice === "scissors" && computerChoice === "scissors" ) {
    console.log(`Both players chose ${playerChoice}, DRAW | Score: Player ${playerScore} AI ${computerScore} `);
 }
 else if (playerChoice === "scissors" && computerChoice === "rock" ) {
    computerScore = 1;
    playerScore = 0;
    console.log(`Computer wins ${computerChoice} destroys ${playerChoice} | Score: Player ${playerScore} AI ${computerScore}  `);
 }
 else if (playerChoice === "scissors" && computerChoice === "paper" ) {
    computerScore = 0;
    playerScore = 1;
    console.log(`Player wins ${playerChoice} cuts ${computerChoice} | Score: Player ${playerScore} AI ${computerScore}  `);
 }
else {console.log("error", computerChoice, playerChoice, computerScore, playerScore)}


}

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (e.target.className == "btn1") {
            playerChoice = "rock";
            playRound(playerChoice);
            content.textContent = `Player wins ${playerChoice} cuts ${computerChoice} | Score: Player ${playerScore} AI ${computerScore}`;
        }
        else if (e.target.className == "btn2") {
            playerChoice = "paper";
            playRound(playerChoice);
            content.textContent = `Player wins ${playerChoice} cuts ${computerChoice} | Score: Player ${playerScore} AI ${computerScore}`;
        }
        else if (e.target.className == "btn3") {
            playerChoice = "scissors";
            playRound(playerChoice);
            content.textContent = `Player wins ${playerChoice} cuts ${computerChoice} | Score: Player ${playerScore} AI ${computerScore}`;
        }
});
});




const computerChoice = computerPlay();
// const playerChoice = playerPlay();
//   function game() {
//       let playerPoints = 0;
//       let computerPoints = 0;
//      for (i=1; i<5; i++){
//      computerPlay();
//      playRound();
//      playerPoints = playerPoints + playerScore;
//      computerPoints = computerPoints + computerScore;
//      console.log(playerPoints, playerScore, computerPoints, computerScore,);
//      console.log(`Player Score is ${playerPoints} || Computer Score is ${computerPoints}`);
//     };
//  }


const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');


container.appendChild(content);
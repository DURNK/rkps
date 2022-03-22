// Computer randomly chooses between paper rock and scissors
function computerPlay () {
    let value = ["paper", "rock", "scissors"]
    let computerChoice = value[Math.floor(Math.random()*value.length)];
    console.log(`The computer chose: ${computerChoice} !`);
    return(computerChoice);
}



function playRound (playerChoice) {
    
    let rock= "rock"
    let paper= "paper"
    let scissors= "scissors"
    playerChoice = playerChoice.toLowerCase();
    console.log(`Player chose ${playerChoice}`);
    }

function compareWinner (playerChoice, computerChoice) {

 
    if (playerChoice == computerChoice) {
        console.log(`TIE! Both players chose ${playerChoice}`)
    }
    else if ((playerChoice == "scissors" && computerChoice == "paper") ||
             (playerChoice == "paper" && computerChoice == "rock") || 
             (playerChoice == "rock" && computerChoice == "scissors"))
             {
                 console.log(`Player wins!! ${playerChoice} beats ${computerChoice}`);

                 playerScore+=1;
                 console.log(playerScore);
                 return(playerScore);
             }
    else {
        console.log(`Computer wins with ${computerChoice}`);
        computerScore+=1;
        console.log(computerScore);
        return(computerScore);
    }
}


let playerScore = 0;
let computerScore = 0;
let playerChoice;


const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button) => 
{
    button.addEventListener('click', function(e) 
    {
       

        for (i=1; i<2; i++)
        {


        if (e.target.className == "btn1") {
            playerChoice = "rock";
        }
        else if (e.target.className == "btn2") {
            playerChoice = "paper";
        }
        else if (e.target.className == "btn3") {
            playerChoice = "scissors";  
        }
        else if (e.target.className == "btn4") {
            button.disabled = false;
            playerScore = 0;
            computerScore = 0; 
        }
        console.log(i);
        }



    const computerChoice = computerPlay();
    playRound(playerChoice);
    compareWinner(playerChoice, computerChoice)

    content.textContent = `Player Score is ${playerScore} || Computer Score is ${computerScore}`;

    if(playerScore==5)
    {
    content.textContent = `Player WINS! With a score of ${playerScore}`;
    button.disabled = true

    }
    else if(computerScore==5) 
    {
    content.textContent = `Computer WINS! With a score of ${computerScore}`;
    button.disabled = true
    }
    });
});

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);






// if (playerChoice.toLowerCase() === rock.toLowerCase() ){
//     playerChoice = "rock" // foreces player choice to be lowecase (for some reason code above does not work)
//     console.log(`Player chose ${playerChoice}`);
// }
//     else if (playerChoice.toLowerCase() === paper.toLowerCase() ){
//         playerChoice = "paper"
//     console.log(`Player chose ${playerChoice}`)
//     }
//     else if(playerChoice.toLowerCase() === scissors.toLowerCase() ){
//         playerChoice = "scissors"
//         console.log(`Player chose ${playerChoice}`)
//     }
//     else {alert("You did not enter any of the correct options")}


// //ROCK
// if (playerChoice === "rock" && computerChoice === "rock"  ) {
//   console.log(`Both players chose rock, DRAW | Score: Player ${playerScore} AI ${computerScore} `);
// }
//     else if (playerChoice === "rock" && computerChoice === "paper" ) {
//      computerScore += 1;
//      console.log(`Computer wins ${computerChoice} wrapps ${playerChoice} | Score: Player ${playerScore} AI ${computerScore}  `);

// }
//     else if (playerChoice === "rock" && computerChoice === "scissors" ) {
//     playerScore += 1;
//      console.log(`Player wins ${playerChoice} destroys ${computerChoice} | Score: Player ${playerScore} AI ${computerScore} `);
// }

// //PAPER
// else if (playerChoice === "paper" && computerChoice === "paper" ) {
// console.log(`Both players chose ${playerChoice}, DRAW | Score: Player ${playerScore} AI ${computerScore} `);
// }
// else if (playerChoice === "paper" && computerChoice === "rock" ) {
// playerScore += 1;
// console.log(`Player wins ${playerChoice} wrapps ${computerChoice} | Score: Player ${playerScore} AI ${computerScore} `);
// }
// else if (playerChoice === "paper" && computerChoice === "scissors" ) {
// computerScore += 1;
// console.log(`Computer wins ${computerChoice} cuts ${playerChoice} | Score: Player ${playerScore} AI ${computerScore}  `);
// }

// //Scissors
// else if (playerChoice === "scissors" && computerChoice === "scissors" ) {
// console.log(`Both players chose ${playerChoice}, DRAW | Score: Player ${playerScore} AI ${computerScore} `);
// }
// else if (playerChoice === "scissors" && computerChoice === "rock" ) {
// computerScore += 1;
// console.log(`Computer wins ${computerChoice} destroys ${playerChoice} | Score: Player ${playerScore} AI ${computerScore}  `);
// }
// else if (playerChoice === "scissors" && computerChoice === "paper" ) {
// playerScore += 1;
// console.log(`Player wins ${playerChoice} cuts ${computerChoice} | Score: Player ${playerScore} AI ${computerScore}  `);
// }
// else {console.log("error", computerChoice, playerChoice, computerScore, playerScore)

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
        compchoice.textContent = `TIE! Both players chose ${playerChoice}` ;

    }
    else if ((playerChoice == "scissors" && computerChoice == "paper") ||
             (playerChoice == "paper" && computerChoice == "rock") || 
             (playerChoice == "rock" && computerChoice == "scissors"))
             {
                compchoice.textContent = `Computer chose ${computerChoice} || Player wins, ${playerChoice} beats ${computerChoice}` ;


                 playerScore+=1;
                 console.log(playerScore);
                 return(playerScore);
             }
    else {
        compchoice.textContent = `Computer chose ${computerChoice} || Computer wins,${computerChoice} beats ${playerChoice}` ;
        console.log(`Computer wins with ${computerChoice}`);
        computerScore+=1;
        console.log(computerScore);
        return(computerScore);
    }
}


let playerScore = 0;
let computerScore = 0;
let playerChoice;


const buttons = document.querySelectorAll('a');
buttons.forEach((a) => 
{
    a.addEventListener('click', function(e) 
    {
       

        for (i=1; i<10; i++)
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
        }



    const computerChoice = computerPlay();
    playRound(playerChoice);
    compareWinner(playerChoice, computerChoice)

    content.textContent = `Player Score is ${playerScore} || Computer Score is ${computerScore}`;

    if(playerScore==5)
    {
    content.textContent = `Player WINS! With a score of ${playerScore}`;
    playerScore = 0;
    computerScore = 0; 
    }
    else if(computerScore==5) 
    {
    content.textContent = `Computer WINS! With a score of ${computerScore}`;
    playerScore = 0;
    computerScore = 0; 
    }


    });
    a.addEventListener("mouseover", function(){
    document.getElementById("body").style.background="green"
    })
});





    


const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);


const fiona = document.querySelector('#fiona');
const compchoice = document.createElement('div');
compchoice.classList.add('compchoice');
fiona.appendChild(compchoice);


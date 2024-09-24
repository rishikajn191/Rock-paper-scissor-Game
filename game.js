let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach( (choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];      //rock, paper, scissor
    const randIdx  = Math.floor( Math.random() * 3 );
    return options[randIdx];
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    //console.log("user choice= ",userChoice);
    //console.log("comp choice= ",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock" ){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true ;
        }
        else{
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const drawGame = () => {
    msg.innerText = "Draw Game, Play Again!";
    msg.style.backgroundColor = "#274C77";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        //updating score board
        userScore++;
        userScorePara.innerText = userScore; 
        //displaying msg of win/lose
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        //updating score board
        compScore++;
        compScorePara.innerText = compScore;
        // displaying msg of win/lose
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

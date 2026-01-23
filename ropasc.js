const gameButtons = document.querySelectorAll("#container button")
const resultDisplay = document.querySelector("#results")
const statusDisplay =document.querySelector("#status")
const reset = document.querySelector("#reset")
let score = document.querySelector("#scores")
let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let ran=Math.random();
    if(ran<=0.33){
        return "Rock"
    }
    else if(ran<=0.66){
        return "Paper";
    }
    else{
        return "Scissor"
    }
}
gameButtons.forEach((button) =>  {
    button.addEventListener("click" , () => {
        const humanSelection=button.id;
        const computerSelection=getComputerChoice();
        playRound(humanSelection, computerSelection);
   
    });
});

reset.addEventListener( "click" ,() => {
    humanScore=0;
    computerScore=0;
    statusDisplay.textContent = ""
    resultDisplay.textContent = ""
    score.textContent = "Player: 0 - Computer: 0";
    gameButtons.forEach((btn) => btn.disabled = false )
})
// function getHumanChoice(){
//     let hum=prompt("please enter rock or paper or scissor");
//     return hum ? hum.toLowerCase() : "";
// }

function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
          resultDisplay.textContent = "Game Tie"
    }
    else if (
        (humanChoice === "Rock" && computerChoice === "Scissor")||
        (humanChoice === "Paper" && computerChoice === "Rock")||
        (humanChoice === "Scissor" && computerChoice === "Paper"))
        {
        humanScore+=1;
        resultDisplay.textContent ="Player WIN " + humanChoice + " Beats " + computerChoice;
    }
    else{
        computerScore+=1;
        resultDisplay.textContent = "Computer Win " + computerChoice + " Beats " + humanChoice;
    }
score.textContent = "Player: " + humanScore + " - Computer: " + computerScore;

    if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
        statusDisplay.textContent = "Congratulations! You reached 5 points first.";
    } else {
        statusDisplay.textContent = "Game Over! The Computer reached 5 points first.";
    }
    gameButtons.forEach((btn) => btn.disabled = true);   
}
}
// function playGame(){
//     for(let i=0;i<5;i++){
// const humanSelection=getHumanChoice();
// const computerSelection=getC omputerChoice();

// playRound(humanSelection,computerSelection)
// }
// console.log("Human Score : " + humanScore + " Computer Score : " + computerScore)

// if(humanScore > computerScore){
//     console.log("WINNER is Human")
// }
// else if(computerScore > humanScore){
//     console.log("WINNER is Computer")
// }
// else{
//     console.log("Match Tied")
// }
// }   

// playGame();
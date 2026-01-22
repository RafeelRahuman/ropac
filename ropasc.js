function getComputerChoice(){
   
    let ran=Math.random();

    if(ran<=0.33){
        return "rock"
    }
    else if(ran<=0.66){
        return "paper";
    }
    else{
        return "scissor"
    }
}

const gameButtons = document.querySelectorAll("#container button")
const resultDisplay = document.querySelector("#results")

let score = document.querySelector("#scores")

const statusDisplay =document.querySelector("#status")

const reset = document.querySelector("#reset")

gameButtons.forEach((button) =>  {
    button.addEventListener("click" , () => {
        const humanSelection=button.id;
        const computerSelection=getComputerChoice();
        playRound(humanSelection, computerSelection);
   
    });
});




// function getHumanChoice(){
//     let hum=prompt("please enter rock or paper or scissor");
//     return hum ? hum.toLowerCase() : "";
// }

let humanScore=0;
let computerScore=0;



function playRound(humanChoice,computerChoice){

    if(humanChoice === computerChoice){
          resultDisplay.textContent = "Game Tie"
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissor")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissor" && computerChoice === "paper"))
        {
        humanScore+=1;
        resultDisplay.textContent ="Player WIN " + humanChoice + " Beats " + computerChoice;
    }
    else{
        computerScore+=1;
        resultDisplay.textContent = "Computer Win " + computerChoice + " Beats " + humanChoice;
    }

    if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
        statusDisplay.textContent = "Congratulations! You reached 5 points first.";
    } else {
        statusDisplay.textContent = "Game Over! The Computer reached 5 points first.";
    }
    gameButtons.forEach((btn) => btn.disabled = true);   
}


score.textContent = "Player: " + humanScore + " - Computer: " + computerScore;


}

reset.addEventListener( "click" ,() => {
    humanScore=0;
    computerScore=0;
    statusDisplay.textContent = ""
    resultDisplay.textContent = ""
    score.textContent = "Player: 0 - Computer: 0";
    gameButtons.forEa ch((btn) => btn.disabled = false )
})


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
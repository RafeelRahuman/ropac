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



function getHumanChoice(){
    let hum=prompt("please enter rock or paper or scissor");
    return hum ? hum.toLowerCase() : "";
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){

    if(humanChoice === computerChoice){
        console.log("Score none");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissor")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissor" && computerChoice === "paper"))
        {
        humanScore+=1;
        console.log("You WIN " + humanChoice + " Beats " + computerChoice);
    }
    else{
        computerScore+=1;
        console.log("You Lose " + computerChoice + " Beats " + humanChoice)
    }
}



function playGame(){
    for(let i=0;i<5;i++){
const humanSelection=getHumanChoice();
const computerSelection=getComputerChoice();

playRound(humanSelection,computerSelection)}
console.log("Human Score : " + humanScore + " Computer Score : " + computerScore)
}   

playGame();
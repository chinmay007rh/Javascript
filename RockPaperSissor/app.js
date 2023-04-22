const computerChoiceDisplay =document.getElementById('computer_choice')
const userChoiceDisplay =document.getElementById('user_choice')
const resultDisplay =document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let results

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=> {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    genarateComputerChoice()
    generateResults()
}) )

function genarateComputerChoice(){
    const randomNumber = Math.floor(Math.random() *3) +1
if(randomNumber === 1){
    computerChoice='rock'
}
if(randomNumber === 2){
    computerChoice='scissors'
}
if(randomNumber === 4){
    computerChoice='paper'
}
console.log(randomNumber)

computerChoiceDisplay.innerHTML= computerChoice
console.log(computerChoice)
}

function generateResults(){
    if(computerChoice === "rock" && userChoice === "paper"){
        results= "Win"
    }
    if(computerChoice === "rock" && userChoice === "rock"){
        results= "draw"
    }
    if(computerChoice === "rock" && userChoice === "scissors"){
        results= "Lose"
    }
    if(computerChoice === "paper" && userChoice === "paper"){
        results= "draw"
    }
    if(computerChoice === "paper" && userChoice === "rock"){
        results= "lose"
    }
    if(computerChoice === "paper" && userChoice === "scissors"){
        results= "win"
    }
    if(computerChoice === "scissors" && userChoice === "paper"){
        results= "lose"
    }
    if(computerChoice === "scissors" && userChoice === "rock"){
        results= "win"
    }
    if(computerChoice === "scissors" && userChoice === "scissors"){
        results= "draw"
    }

    resultDisplay.innerHTML= results 
}

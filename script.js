let youSelected = document.querySelector(".youSelected");
let Box = document.querySelector(".Box");
let Box1 = document.querySelector(".Box1");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let botselected = document.querySelector(".botselected");
let yourScore = document.querySelector(".yourScore");
let botScore = document.querySelector(".botScore");
let choices = document.querySelectorAll(".choice");
let h2 = document.querySelector("h2");

let uScore=0;
let bScore=0;


const botChoiceGen = () => {
    const list = ["rock", "paper", "scissors"];
    return list[Math.floor(Math.random() * 3)];
}


const playGame = (userChoice) => {
    const botChoice = botChoiceGen();
   

    if (userChoice === botChoice) {
        h2.innerText = "The match is Draw";
        h2.style.backgroundColor = "#ccc";
        h2.style.color = "black";
        if (userChoice === "rock") {
            youSelected.innerText = "Rock";
            botselected.innerText = "Rock";
            Box.style.backgroundColor = "gray";
            Box1.style.backgroundColor = "gray";
            Box.style.color = "White";
            Box1.style.color = "White";
        }
        else if (userChoice === "paper") {
            youSelected.innerText = "Paper";
            botselected.innerText = "Paper";
            Box.style.backgroundColor = "gray";
            Box1.style.backgroundColor = "gray";
            Box.style.color = "White";
            Box1.style.color = "White";

        }
        else {
            youSelected.innerText = "Scissors";
            botselected.innerText = "Scissors";
            Box.style.backgroundColor = "gray";
            Box1.style.backgroundColor = "gray";
            Box.style.color = "White";
            Box1.style.color = "White";
        }
    }
    else if (userChoice !== botChoice) {
        if (userChoice === "rock" && botChoice === "scissors") {
            h2.innerText = "You Win the Game !!";
            h2.style.backgroundColor = "green";
            h2.style.color = "white";
            youSelected.innerText = "Rock";
            botselected.innerText = "Scissors";
            Box.style.backgroundColor = "Green";
            Box1.style.backgroundColor = "red";
            Box.style.color = "white";
            Box1.style.color = "White";
            uScore++;
            yourScore.innerText = uScore;
        }
        else if (userChoice === "paper" && botChoice === "rock") {
            h2.innerText = "You Win the Game !!";
            h2.style.backgroundColor = "green";
            h2.style.color = "white";
            youSelected.innerText = "Paper";
            botselected.innerText = "Rock";
            Box.style.backgroundColor = "Green";
            Box1.style.backgroundColor = "red";
            Box.style.color = "white";
            Box1.style.color = "White";
            uScore++;
            yourScore.innerText = uScore;

        }
        else if (userChoice === "scissors" && botChoice === "paper") {
            h2.innerText = "You Win the Game !!";
            h2.style.backgroundColor = "green";
            h2.style.color = "white";
            youSelected.innerText = "Scissors";
            botselected.innerText = "Paper";
            Box.style.backgroundColor = "Green";
            Box1.style.backgroundColor = "red";
            Box.style.color = "white";
            Box1.style.color = "White";
            uScore++;
            yourScore.innerText = uScore;

        }
        else if (userChoice === "paper" && botChoice === "scissors") {
            h2.innerText = "You lost the Game :( Try again !!";
            h2.style.backgroundColor = "red";
            h2.style.color = "white";
            youSelected.innerText = "Paper";
            botselected.innerText = "Scissors";
            Box.style.backgroundColor = "red";
            Box1.style.backgroundColor = "green";
            Box.style.color = "white";
            Box1.style.color = "White";
            bScore++;
            botScore.innerText = bScore;

        }
        else if (userChoice === "rock" && botChoice === "paper") {
            h2.innerText = "You lost the Game :( Try again !!";
            h2.style.backgroundColor = "red";
            h2.style.color = "white";
            youSelected.innerText = "Rock";
            botselected.innerText = "Paper";
            Box.style.backgroundColor = "red";
            Box1.style.backgroundColor = "green";
            Box.style.color = "white";
            Box1.style.color = "White";
            bScore++;
            botScore.innerText = bScore;

        }
        else if (userChoice === "scissors" && botChoice === "rock") {
            h2.innerText = "You lost the Game :( Try again !!";
            h2.style.backgroundColor = "red";
            h2.style.color = "white";
            youSelected.innerText = "Scissors";
            botselected.innerText = "Rock";
            Box.style.backgroundColor = "red";
            Box1.style.backgroundColor = "green";
            Box.style.color = "white";
            Box1.style.color = "White";
            bScore++;
            botScore.innerText = bScore;

        }

    }
    if(uScore == 20 && bScore < 20){
        alert("You won the Match, Now please reload the page for reset");}
    else if (bScore == 20 && uScore < 20){
        alert("Bot win the Match, Now please reload the page for reset")
    }

}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});

const rock = document.querySelector("#btn1");
const paper = document.querySelector("#btn2");
const scissors = document.querySelector("#btn3");
const para = document.getElementById("p1");
const userScore = document.querySelector("#user-score");
const comScore = document.querySelector("#com-score");

let userPoints = 0;
let computerPoints = 0;

const btns = document.querySelectorAll(".gamebtn");

const updateScores = () => {
    userScore.textContent = userPoints;
    comScore.textContent = computerPoints;
}

const showUserWin = (userWin) => {
    if (userWin) {
        console.log("You win!");
        userPoints++;
    } else {
        console.log("You lose");
        computerPoints++;
    }
    updateScores();
}

const drawGame = () => {
    console.log("draw");
    para.textContent = "Draw";
}

const generateComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
    //generate computer choice
    const compChoice = generateComputerChoice();
    console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        //draw 
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //scissors, paper
            userWin = compChoice === "Paper" ? false : true;
            para.textContent = userWin ? "You win!" : "You lose!";
        } else if (userChoice === "Paper") {
            //rock , scissors
            userWin = compChoice === "Scissors" ? false : true;
            para.textContent = userWin ? "You win!" : "You lose!";
        } else {
            //rock, paper
            userWin = compChoice === "Rock" ? false : true;
            para.textContent = userWin ? "You win!" : "You lose!";
        }
        showUserWin(userWin);
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userChoice = btn.innerHTML;
        playGame(userChoice);
    });
});

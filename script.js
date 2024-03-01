let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user_score");
const compScorepara = document.querySelector("#comp_score");

const genCompChoice = () => {
    const opt = ["Stone", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return opt[randIdx];
};

const drawGame = () => {
    console.log("Draw.");
    msg.innerText = "Draw.";
    msg.style.backgroundColor = "#B1EDE8";
    msg.style.boxShadow =  "5px 8px 50px 5px #B1EDE8";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.boxShadow =  "5px 8px 50px 5px green";
    }
    else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.boxShadow =  "5px 8px 50px 5px red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
  
    const compChoice = genCompChoice();
  
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Stone") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        }
        else {
            userWin = compChoice === "Stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
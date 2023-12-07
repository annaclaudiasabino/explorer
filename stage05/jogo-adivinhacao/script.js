const buttonTry = document.getElementById("try");
const buttonTryAgain = document.getElementById("try-again")
const inputNumber = document.getElementById("choice-number");
const play = document.getElementById("play")
const congratulation = document.getElementById("message-congratulation")
const message = document.getElementById("message")
const numbers = Math.random() * 10;
const choiceComputer = Math.ceil(numbers);
let attempts = 1;


function buttonClick() {
    const messageTryAgain = document.getElementById("message-try")
    let valueInput = inputNumber.value
    if (valueInput != choiceComputer) {
        messageTryAgain.style.display = "block"
        messageTryAgain.classList.add("active")
    } else {
        play.style.display = "none"
        message.textContent = `Acertou em ${attempts} tentativas!`
        congratulation.style.display = "flex"
    }
    inputNumber.addEventListener('focus', () => {
        messageTryAgain.classList.remove('active');
    });
    attempts++
};

function verifyInput(e) {
    e.preventDefault();
    const messageError = document.getElementById("message-error");
    if (inputNumber.value > 10) {
        messageError.style.display = "block"
        setTimeout(() => {
            messageError.classList.add("active")
        }, 200);
        setTimeout(() => {
            messageError.classList.remove("active")
        }, 1500);
        return
    } else {
        buttonClick();
    };  
};

buttonTry.addEventListener("click", verifyInput);

buttonTryAgain.addEventListener("click", () => {
        location.reload()
})
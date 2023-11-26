
let result = prompt("Que numero estou pensando? Digite um número de 1 a 10")

const numbers = Math.random() * 10;
const choiceComputer = Math.ceil(numbers);

let attempts = 1;

while (Number(result) != choiceComputer) {
    result = prompt("Tente novamente:")
    attempts++
}

alert(`Você acertou em ${attempts} tentativas`)


alert("Vamos ver os calculos matemáticos para 2 números.");
const numberOne = Number(prompt("Digite o primeiro número"));
const numberTwo = Number(prompt("Digite o segundo número"));

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const divid = numberOne / numberTwo
const rest = numberOne % numberTwo


alert(`A soma dos dois números é: ${sum}`)

alert(`A subtração dos dois números é: ${sub}`)

alert(`A multiplicação dos dois números é: ${mult}`)

alert(`O divisão dos dois números é: ${divid}`)

alert(`O resto da divisão dos dois números é: ${rest}`)

if (rest === 0) {
    alert("A soma dos dois números é par")
} else {
    alert("A soma dos dois números é impar")
}

if (numberOne != numberTwo) {
    alert("Os números são diferentes")
} else {
    alert("Os números são iguais")
}
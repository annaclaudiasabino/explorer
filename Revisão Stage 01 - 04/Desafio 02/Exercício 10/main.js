// Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const number1 = prompt("Digite um número para saber se é impar")

const result = number1 % 2

if(result !== 0 ) {
    alert("É um número ímpar")
} else {
    alert("Não é um número ímpar")
}
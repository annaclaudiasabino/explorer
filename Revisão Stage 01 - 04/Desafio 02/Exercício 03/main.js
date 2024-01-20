//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let variavel = prompt('Digite qualquer coisa e direi se digitou um número ou não')

const number = Number(variavel)

if (!isNaN(number)) {
    alert('É um número')
} else {
    alert('Não é um número')
}
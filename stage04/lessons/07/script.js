let option;
const numberOne = 1
const numberTwo = 2
let list = []


while (option != 3) {
    option = Number(prompt(`Olá usuário! Digite o número da opção desejada
        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa`))
    if (option === numberOne) {
        item = prompt("Escreva um item para lista:")
        list.push()
     } else if(option === numberTwo){
         if (list.length === 0) {
             alert("Você ainda não possui produtos cadastrados.") 
         } else {
             alert(`seu produto cadastrado é ${list}`)
         }
     } else {
        alert("Você saiu do programa")
     } 
     console.log(list)
}
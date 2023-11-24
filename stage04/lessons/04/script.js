/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

alert("Agora vamos calcular sua média de notas e ver se você passou de ano!")
const nameStudent = prompt("Digite seu nome")
const noteOne = prompt("Qual foi sua primeira nota?")
const noteTwo = prompt("Qual foi sua segunda nota?")
const noteThree = prompt("Qual foi sua terceira nota?")
const notes = [
    Number(noteOne),
    Number(noteTwo),
    Number(noteThree)
];

let media = (notes[0] + notes[1] + notes[2]) / (notes.length)

media = media.toFixed(2)

if (media >= 6) {
 alert(`Parabens ${nameStudent}, sua média foi ${media} e você passou!`)
} else {
    alert(`Que pena ${nameStudent}, sua média foi ${media} e você está de recuperação. Mais estude e você vai conseguir!`)
}
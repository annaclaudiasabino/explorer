
let estudante= [
    {
        nome: "Eduardo ",
        notaPrimProva: 10,
        notaSegunProva: 10
    },
    {
        nome: "André",
        notaPrimProva: 9,
        notaSegunProva: 5
    },
    {
        nome: "Maria",
        notaPrimProva: 9,
        notaSegunProva: 2
    },
    {
        nome: "Luiz",
        notaPrimProva: 3,
        notaSegunProva: 9
    },
]

function mediaAluno(estudante) {
    for ( let i = 0; i < estudante.length; i++) {
        const notaProva = estudante[i].notaPrimProva + estudante[i].notaSegunProva;
        let media = notaProva / 2;
        if ( media >= 7) {
            alert(`Parabens ${estudante[i].nome}!\nSua média foi ${media} e você passou!`)
        } else {
            alert(`Que pena ${estudante[i].nome} sua média foi ${media}\n e você está reprovado.`)
        }
    };
};

mediaAluno(estudante);
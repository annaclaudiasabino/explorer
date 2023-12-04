const patients = [
    {
        name: "João",
        age: 25,
        weight: 80,
        height: 1.80
    },
    {
        name: "Maria",
        age: 30,
        weight: 70,
        height: 1.60
    },
    {
        name: "Pedro",
        age: 40,
        weight: 90,
        height: 1.90
    }
]

/* Agora eu quero poder fazer uma consulta de pacientes pelo nome do paciente, caso for paciente da clinica exibe a mensagem abaixo, caso não exibe a seguinte mensagem (nome) não é paciente da nossa clinica*/
    let patientsNames = []
    let patientsAge = []
    let patientsWeight = []
    let patientsHeight = []
   
    
    for(let patient of patients) {
        patientsNames.push(patient.name)
        patientsAge.push(patient.age)
        patientsWeight.push(patient.weight)
        patientsHeight.push(patient.height)
    }

    for(let index = 0; index < patients.length; index++ ) {
        const imcCalc = Number(patientsWeight[index] / (patientsHeight[index] ** 2))
        alert(`${patientsNames[index]} é paciente da nossa clinica, tem ${patientsAge[index]} anos, possui ${patientsWeight[index]} kilos e tem uma altura de ${patientsHeight[index]} e seu IMC é de ${imcCalc.toFixed(2)}`)       
    }
    
    
    // let namePatient = prompt("Digite o nome do paciente:")


   
    // if (patients.find(namePatient)) {
    //     console.log("É paciente da clinica")
    // } else {
    //     console.log("Não é paciente da clinica")
    // }
    

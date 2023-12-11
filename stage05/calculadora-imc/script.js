import { modal } from './js/modal.js'

//Calculadora
const form = document.getElementById("form");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");

function calcIMCResult() {
    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);
    const calcIMC = (peso / ((altura / 100) ** 2)).toFixed(2);
    modal.message.textContent = `Seu imc é ${calcIMC}`;  
};

form.addEventListener('submit', (e) => {
   e.preventDefault();
   calcIMCResult();
   modal.open.showModal();
});



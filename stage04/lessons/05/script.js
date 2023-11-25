/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

alert("Vamos criar sua lista de supermecado")

let list = [];

for (let item = 0; item < 10 ; item++) {
 let items = prompt(`Digite o item ${item + 1}`);
 list[item] = items;
 console.log(list[item])
};

alert(list);
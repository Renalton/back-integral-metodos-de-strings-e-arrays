const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


console.log(frutas.reverse());
console.log(frutas);

frutas.splice(0, 1);
console.log(frutas);
frutas.splice(frutas.length-1, 1, "Melão");
console.log(frutas);


